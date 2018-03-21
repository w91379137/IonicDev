module.exports = {

  /**
   * mangle: uglify 2's mangle option
   */
  mangle: true,

  /**
   * compress: uglify 2's compress option
   */
  compress: {
    toplevel: true,
    pure_getters: true,
    dead_code: true,
      global_defs: {
        ENV: { isRelease: true }
      }
  }
};
