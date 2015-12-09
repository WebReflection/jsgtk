(function (exports) {'use strict';
  // WARNING This file is generated automatically
  //         Do Not change it directly or it will be replaced
  //         and it could cause conflicts. Use python-to.js instead.
  const
    Gio = (exports.Gio = imports.gi.Gio),
    GLib = (exports.GLib = imports.gi.GLib),
    GObject = (exports.GObject = imports.gi.GObject)
  ;
  Object.defineProperties(
    Gio,
    {

    }
  );
  Object.defineProperties(
    GLib,
    {
      asciiDigitValue: {
        value: function asciiDigitValue() {
          return this.ascii_digit_value.apply(this, arguments);
        }
      },
      asciiDtostr: {
        value: function asciiDtostr() {
          return this.ascii_dtostr.apply(this, arguments);
        }
      },
      asciiFormatd: {
        value: function asciiFormatd() {
          return this.ascii_formatd.apply(this, arguments);
        }
      },
      asciiStrcasecmp: {
        value: function asciiStrcasecmp() {
          return this.ascii_strcasecmp.apply(this, arguments);
        }
      },
      asciiStrdown: {
        value: function asciiStrdown() {
          return this.ascii_strdown.apply(this, arguments);
        }
      },
      asciiStrncasecmp: {
        value: function asciiStrncasecmp() {
          return this.ascii_strncasecmp.apply(this, arguments);
        }
      },
      asciiStrtod: {
        value: function asciiStrtod() {
          return this.ascii_strtod.apply(this, arguments);
        }
      },
      asciiStrtoll: {
        value: function asciiStrtoll() {
          return this.ascii_strtoll.apply(this, arguments);
        }
      },
      asciiStrtoull: {
        value: function asciiStrtoull() {
          return this.ascii_strtoull.apply(this, arguments);
        }
      },
      asciiStrup: {
        value: function asciiStrup() {
          return this.ascii_strup.apply(this, arguments);
        }
      },
      asciiTolower: {
        value: function asciiTolower() {
          return this.ascii_tolower.apply(this, arguments);
        }
      },
      asciiToupper: {
        value: function asciiToupper() {
          return this.ascii_toupper.apply(this, arguments);
        }
      },
      asciiXdigitValue: {
        value: function asciiXdigitValue() {
          return this.ascii_xdigit_value.apply(this, arguments);
        }
      },
      assertionMessageCmpstr: {
        value: function assertionMessageCmpstr() {
          return this.assertion_message_cmpstr.apply(this, arguments);
        }
      },
      assertionMessageError: {
        value: function assertionMessageError() {
          return this.assertion_message_error.apply(this, arguments);
        }
      },
      assertionMessageExpr: {
        value: function assertionMessageExpr() {
          return this.assertion_message_expr.apply(this, arguments);
        }
      },
      assertionMessage: {
        value: function assertionMessage() {
          return this.assertion_message.apply(this, arguments);
        }
      },
      assertWarning: {
        value: function assertWarning() {
          return this.assert_warning.apply(this, arguments);
        }
      },
      base64Decode: {
        value: function base64Decode() {
          return this.base64_decode.apply(this, arguments);
        }
      },
      base64DecodeInplace: {
        value: function base64DecodeInplace() {
          return this.base64_decode_inplace.apply(this, arguments);
        }
      },
      base64DecodeStep: {
        value: function base64DecodeStep() {
          return this.base64_decode_step.apply(this, arguments);
        }
      },
      base64EncodeClose: {
        value: function base64EncodeClose() {
          return this.base64_encode_close.apply(this, arguments);
        }
      },
      base64Encode: {
        value: function base64Encode() {
          return this.base64_encode.apply(this, arguments);
        }
      },
      base64EncodeStep: {
        value: function base64EncodeStep() {
          return this.base64_encode_step.apply(this, arguments);
        }
      },
      bitNthLsf: {
        value: function bitNthLsf() {
          return this.bit_nth_lsf.apply(this, arguments);
        }
      },
      bitNthMsf: {
        value: function bitNthMsf() {
          return this.bit_nth_msf.apply(this, arguments);
        }
      },
      bitStorage: {
        value: function bitStorage() {
          return this.bit_storage.apply(this, arguments);
        }
      },
      buildFilenamev: {
        value: function buildFilenamev() {
          return this.build_filenamev.apply(this, arguments);
        }
      },
      buildPathv: {
        value: function buildPathv() {
          return this.build_pathv.apply(this, arguments);
        }
      },
      checkVersion: {
        value: function checkVersion() {
          return this.check_version.apply(this, arguments);
        }
      },
      childWatchAdd: {
        value: function childWatchAdd() {
          return this.child_watch_add.apply(this, arguments);
        }
      },
      childWatchSourceNew: {
        value: function childWatchSourceNew() {
          return this.child_watch_source_new.apply(this, arguments);
        }
      },
      clearError: {
        value: function clearError() {
          return this.clear_error.apply(this, arguments);
        }
      },
      computeChecksumForBytes: {
        value: function computeChecksumForBytes() {
          return this.compute_checksum_for_bytes.apply(this, arguments);
        }
      },
      computeChecksumForData: {
        value: function computeChecksumForData() {
          return this.compute_checksum_for_data.apply(this, arguments);
        }
      },
      computeChecksumForString: {
        value: function computeChecksumForString() {
          return this.compute_checksum_for_string.apply(this, arguments);
        }
      },
      computeHmacForData: {
        value: function computeHmacForData() {
          return this.compute_hmac_for_data.apply(this, arguments);
        }
      },
      computeHmacForString: {
        value: function computeHmacForString() {
          return this.compute_hmac_for_string.apply(this, arguments);
        }
      },
      convertErrorQuark: {
        value: function convertErrorQuark() {
          return this.convert_error_quark.apply(this, arguments);
        }
      },
      convertWithFallback: {
        value: function convertWithFallback() {
          return this.convert_with_fallback.apply(this, arguments);
        }
      },
      convertWithIconv: {
        value: function convertWithIconv() {
          return this.convert_with_iconv.apply(this, arguments);
        }
      },
      environGetenv: {
        value: function environGetenv() {
          return this.environ_getenv.apply(this, arguments);
        }
      },
      environSetenv: {
        value: function environSetenv() {
          return this.environ_setenv.apply(this, arguments);
        }
      },
      environUnsetenv: {
        value: function environUnsetenv() {
          return this.environ_unsetenv.apply(this, arguments);
        }
      },
      fileErrorFromErrno: {
        value: function fileErrorFromErrno() {
          return this.file_error_from_errno.apply(this, arguments);
        }
      },
      fileErrorQuark: {
        value: function fileErrorQuark() {
          return this.file_error_quark.apply(this, arguments);
        }
      },
      fileGetContents: {
        value: function fileGetContents() {
          return this.file_get_contents.apply(this, arguments);
        }
      },
      filenameDisplayBasename: {
        value: function filenameDisplayBasename() {
          return this.filename_display_basename.apply(this, arguments);
        }
      },
      filenameDisplayName: {
        value: function filenameDisplayName() {
          return this.filename_display_name.apply(this, arguments);
        }
      },
      filenameFromUri: {
        value: function filenameFromUri() {
          return this.filename_from_uri.apply(this, arguments);
        }
      },
      filenameFromUtf8: {
        value: function filenameFromUtf8() {
          return this.filename_from_utf8.apply(this, arguments);
        }
      },
      filenameToUri: {
        value: function filenameToUri() {
          return this.filename_to_uri.apply(this, arguments);
        }
      },
      filenameToUtf8: {
        value: function filenameToUtf8() {
          return this.filename_to_utf8.apply(this, arguments);
        }
      },
      fileOpenTmp: {
        value: function fileOpenTmp() {
          return this.file_open_tmp.apply(this, arguments);
        }
      },
      fileReadLink: {
        value: function fileReadLink() {
          return this.file_read_link.apply(this, arguments);
        }
      },
      fileSetContents: {
        value: function fileSetContents() {
          return this.file_set_contents.apply(this, arguments);
        }
      },
      fileTest: {
        value: function fileTest() {
          return this.file_test.apply(this, arguments);
        }
      },
      findProgramInPath: {
        value: function findProgramInPath() {
          return this.find_program_in_path.apply(this, arguments);
        }
      },
      formatSizeForDisplay: {
        value: function formatSizeForDisplay() {
          return this.format_size_for_display.apply(this, arguments);
        }
      },
      formatSizeFull: {
        value: function formatSizeFull() {
          return this.format_size_full.apply(this, arguments);
        }
      },
      formatSize: {
        value: function formatSize() {
          return this.format_size.apply(this, arguments);
        }
      },
      getApplicationName: {
        value: function getApplicationName() {
          return this.get_application_name.apply(this, arguments);
        }
      },
      getCharset: {
        value: function getCharset() {
          return this.get_charset.apply(this, arguments);
        }
      },
      getCodeset: {
        value: function getCodeset() {
          return this.get_codeset.apply(this, arguments);
        }
      },
      getCurrentDir: {
        value: function getCurrentDir() {
          return this.get_current_dir.apply(this, arguments);
        }
      },
      getCurrentTime: {
        value: function getCurrentTime() {
          return this.get_current_time.apply(this, arguments);
        }
      },
      getEnviron: {
        value: function getEnviron() {
          return this.get_environ.apply(this, arguments);
        }
      },
      getFilenameCharsets: {
        value: function getFilenameCharsets() {
          return this.get_filename_charsets.apply(this, arguments);
        }
      },
      getHomeDir: {
        value: function getHomeDir() {
          return this.get_home_dir.apply(this, arguments);
        }
      },
      getHostName: {
        value: function getHostName() {
          return this.get_host_name.apply(this, arguments);
        }
      },
      getLanguageNames: {
        value: function getLanguageNames() {
          return this.get_language_names.apply(this, arguments);
        }
      },
      getLocaleVariants: {
        value: function getLocaleVariants() {
          return this.get_locale_variants.apply(this, arguments);
        }
      },
      getMonotonicTime: {
        value: function getMonotonicTime() {
          return this.get_monotonic_time.apply(this, arguments);
        }
      },
      getNumProcessors: {
        value: function getNumProcessors() {
          return this.get_num_processors.apply(this, arguments);
        }
      },
      getPrgname: {
        value: function getPrgname() {
          return this.get_prgname.apply(this, arguments);
        }
      },
      getRealName: {
        value: function getRealName() {
          return this.get_real_name.apply(this, arguments);
        }
      },
      getRealTime: {
        value: function getRealTime() {
          return this.get_real_time.apply(this, arguments);
        }
      },
      getSystemConfigDirs: {
        value: function getSystemConfigDirs() {
          return this.get_system_config_dirs.apply(this, arguments);
        }
      },
      getSystemDataDirs: {
        value: function getSystemDataDirs() {
          return this.get_system_data_dirs.apply(this, arguments);
        }
      },
      getTmpDir: {
        value: function getTmpDir() {
          return this.get_tmp_dir.apply(this, arguments);
        }
      },
      getUserCacheDir: {
        value: function getUserCacheDir() {
          return this.get_user_cache_dir.apply(this, arguments);
        }
      },
      getUserConfigDir: {
        value: function getUserConfigDir() {
          return this.get_user_config_dir.apply(this, arguments);
        }
      },
      getUserDataDir: {
        value: function getUserDataDir() {
          return this.get_user_data_dir.apply(this, arguments);
        }
      },
      getUserName: {
        value: function getUserName() {
          return this.get_user_name.apply(this, arguments);
        }
      },
      getUserRuntimeDir: {
        value: function getUserRuntimeDir() {
          return this.get_user_runtime_dir.apply(this, arguments);
        }
      },
      getUserSpecialDir: {
        value: function getUserSpecialDir() {
          return this.get_user_special_dir.apply(this, arguments);
        }
      },
      hostnameIsAsciiEncoded: {
        value: function hostnameIsAsciiEncoded() {
          return this.hostname_is_ascii_encoded.apply(this, arguments);
        }
      },
      hostnameIsIpAddress: {
        value: function hostnameIsIpAddress() {
          return this.hostname_is_ip_address.apply(this, arguments);
        }
      },
      hostnameIsNonAscii: {
        value: function hostnameIsNonAscii() {
          return this.hostname_is_non_ascii.apply(this, arguments);
        }
      },
      hostnameToAscii: {
        value: function hostnameToAscii() {
          return this.hostname_to_ascii.apply(this, arguments);
        }
      },
      hostnameToUnicode: {
        value: function hostnameToUnicode() {
          return this.hostname_to_unicode.apply(this, arguments);
        }
      },
      idleAdd: {
        value: function idleAdd() {
          return this.idle_add.apply(this, arguments);
        }
      },
      idleSourceNew: {
        value: function idleSourceNew() {
          return this.idle_source_new.apply(this, arguments);
        }
      },
      ioAddWatch: {
        value: function ioAddWatch() {
          return this.io_add_watch.apply(this, arguments);
        }
      },
      ioCreateWatch: {
        value: function ioCreateWatch() {
          return this.io_create_watch.apply(this, arguments);
        }
      },
      localeFromUtf8: {
        value: function localeFromUtf8() {
          return this.locale_from_utf8.apply(this, arguments);
        }
      },
      localeToUtf8: {
        value: function localeToUtf8() {
          return this.locale_to_utf8.apply(this, arguments);
        }
      },
      logDefaultHandler: {
        value: function logDefaultHandler() {
          return this.log_default_handler.apply(this, arguments);
        }
      },
      logRemoveHandler: {
        value: function logRemoveHandler() {
          return this.log_remove_handler.apply(this, arguments);
        }
      },
      logSetAlwaysFatal: {
        value: function logSetAlwaysFatal() {
          return this.log_set_always_fatal.apply(this, arguments);
        }
      },
      logSetFatalMask: {
        value: function logSetFatalMask() {
          return this.log_set_fatal_mask.apply(this, arguments);
        }
      },
      mainCurrentSource: {
        value: function mainCurrentSource() {
          return this.main_current_source.apply(this, arguments);
        }
      },
      mainDepth: {
        value: function mainDepth() {
          return this.main_depth.apply(this, arguments);
        }
      },
      markupErrorQuark: {
        value: function markupErrorQuark() {
          return this.markup_error_quark.apply(this, arguments);
        }
      },
      markupEscapeText: {
        value: function markupEscapeText() {
          return this.markup_escape_text.apply(this, arguments);
        }
      },
      mkdirWithParents: {
        value: function mkdirWithParents() {
          return this.mkdir_with_parents.apply(this, arguments);
        }
      },
      mkdtempFull: {
        value: function mkdtempFull() {
          return this.mkdtemp_full.apply(this, arguments);
        }
      },
      mkstempFull: {
        value: function mkstempFull() {
          return this.mkstemp_full.apply(this, arguments);
        }
      },
      onErrorQuery: {
        value: function onErrorQuery() {
          return this.on_error_query.apply(this, arguments);
        }
      },
      onErrorStackTrace: {
        value: function onErrorStackTrace() {
          return this.on_error_stack_trace.apply(this, arguments);
        }
      },
      optionErrorQuark: {
        value: function optionErrorQuark() {
          return this.option_error_quark.apply(this, arguments);
        }
      },
      parseDebugString: {
        value: function parseDebugString() {
          return this.parse_debug_string.apply(this, arguments);
        }
      },
      pathGetBasename: {
        value: function pathGetBasename() {
          return this.path_get_basename.apply(this, arguments);
        }
      },
      pathGetDirname: {
        value: function pathGetDirname() {
          return this.path_get_dirname.apply(this, arguments);
        }
      },
      pathIsAbsolute: {
        value: function pathIsAbsolute() {
          return this.path_is_absolute.apply(this, arguments);
        }
      },
      pathSkipRoot: {
        value: function pathSkipRoot() {
          return this.path_skip_root.apply(this, arguments);
        }
      },
      patternMatch: {
        value: function patternMatch() {
          return this.pattern_match.apply(this, arguments);
        }
      },
      patternMatchSimple: {
        value: function patternMatchSimple() {
          return this.pattern_match_simple.apply(this, arguments);
        }
      },
      patternMatchString: {
        value: function patternMatchString() {
          return this.pattern_match_string.apply(this, arguments);
        }
      },
      quarkFromString: {
        value: function quarkFromString() {
          return this.quark_from_string.apply(this, arguments);
        }
      },
      quarkToString: {
        value: function quarkToString() {
          return this.quark_to_string.apply(this, arguments);
        }
      },
      quarkTryString: {
        value: function quarkTryString() {
          return this.quark_try_string.apply(this, arguments);
        }
      },
      randomDouble: {
        value: function randomDouble() {
          return this.random_double.apply(this, arguments);
        }
      },
      randomDoubleRange: {
        value: function randomDoubleRange() {
          return this.random_double_range.apply(this, arguments);
        }
      },
      randomInt: {
        value: function randomInt() {
          return this.random_int.apply(this, arguments);
        }
      },
      randomIntRange: {
        value: function randomIntRange() {
          return this.random_int_range.apply(this, arguments);
        }
      },
      randomSetSeed: {
        value: function randomSetSeed() {
          return this.random_set_seed.apply(this, arguments);
        }
      },
      reloadUserSpecialDirsCache: {
        value: function reloadUserSpecialDirsCache() {
          return this.reload_user_special_dirs_cache.apply(this, arguments);
        }
      },
      returnIfFailWarning: {
        value: function returnIfFailWarning() {
          return this.return_if_fail_warning.apply(this, arguments);
        }
      },
      setApplicationName: {
        value: function setApplicationName() {
          return this.set_application_name.apply(this, arguments);
        }
      },
      setPrgname: {
        value: function setPrgname() {
          return this.set_prgname.apply(this, arguments);
        }
      },
      shellErrorQuark: {
        value: function shellErrorQuark() {
          return this.shell_error_quark.apply(this, arguments);
        }
      },
      shellParseArgv: {
        value: function shellParseArgv() {
          return this.shell_parse_argv.apply(this, arguments);
        }
      },
      shellQuote: {
        value: function shellQuote() {
          return this.shell_quote.apply(this, arguments);
        }
      },
      shellUnquote: {
        value: function shellUnquote() {
          return this.shell_unquote.apply(this, arguments);
        }
      },
      spacedPrimesClosest: {
        value: function spacedPrimesClosest() {
          return this.spaced_primes_closest.apply(this, arguments);
        }
      },
      spawnAsync: {
        value: function spawnAsync() {
          return this.spawn_async.apply(this, arguments);
        }
      },
      spawnAsyncWithPipes: {
        value: function spawnAsyncWithPipes() {
          return this.spawn_async_with_pipes.apply(this, arguments);
        }
      },
      spawnCheckExitStatus: {
        value: function spawnCheckExitStatus() {
          return this.spawn_check_exit_status.apply(this, arguments);
        }
      },
      spawnClosePid: {
        value: function spawnClosePid() {
          return this.spawn_close_pid.apply(this, arguments);
        }
      },
      spawnCommandLineAsync: {
        value: function spawnCommandLineAsync() {
          return this.spawn_command_line_async.apply(this, arguments);
        }
      },
      spawnCommandLineSync: {
        value: function spawnCommandLineSync() {
          return this.spawn_command_line_sync.apply(this, arguments);
        }
      },
      spawnErrorQuark: {
        value: function spawnErrorQuark() {
          return this.spawn_error_quark.apply(this, arguments);
        }
      },
      spawnExitErrorQuark: {
        value: function spawnExitErrorQuark() {
          return this.spawn_exit_error_quark.apply(this, arguments);
        }
      },
      spawnSync: {
        value: function spawnSync() {
          return this.spawn_sync.apply(this, arguments);
        }
      },
      stripContext: {
        value: function stripContext() {
          return this.strip_context.apply(this, arguments);
        }
      },
      strIsAscii: {
        value: function strIsAscii() {
          return this.str_is_ascii.apply(this, arguments);
        }
      },
      strMatchString: {
        value: function strMatchString() {
          return this.str_match_string.apply(this, arguments);
        }
      },
      strToAscii: {
        value: function strToAscii() {
          return this.str_to_ascii.apply(this, arguments);
        }
      },
      strTokenizeAndFold: {
        value: function strTokenizeAndFold() {
          return this.str_tokenize_and_fold.apply(this, arguments);
        }
      },
      testAssertExpectedMessagesInternal: {
        value: function testAssertExpectedMessagesInternal() {
          return this.test_assert_expected_messages_internal.apply(this, arguments);
        }
      },
      testBugBase: {
        value: function testBugBase() {
          return this.test_bug_base.apply(this, arguments);
        }
      },
      testBug: {
        value: function testBug() {
          return this.test_bug.apply(this, arguments);
        }
      },
      testExpectMessage: {
        value: function testExpectMessage() {
          return this.test_expect_message.apply(this, arguments);
        }
      },
      testFailed: {
        value: function testFailed() {
          return this.test_failed.apply(this, arguments);
        }
      },
      testFail: {
        value: function testFail() {
          return this.test_fail.apply(this, arguments);
        }
      },
      testGetDir: {
        value: function testGetDir() {
          return this.test_get_dir.apply(this, arguments);
        }
      },
      testIncomplete: {
        value: function testIncomplete() {
          return this.test_incomplete.apply(this, arguments);
        }
      },
      testLogTypeName: {
        value: function testLogTypeName() {
          return this.test_log_type_name.apply(this, arguments);
        }
      },
      testQueueDestroy: {
        value: function testQueueDestroy() {
          return this.test_queue_destroy.apply(this, arguments);
        }
      },
      testQueueFree: {
        value: function testQueueFree() {
          return this.test_queue_free.apply(this, arguments);
        }
      },
      testRandDouble: {
        value: function testRandDouble() {
          return this.test_rand_double.apply(this, arguments);
        }
      },
      testRandDoubleRange: {
        value: function testRandDoubleRange() {
          return this.test_rand_double_range.apply(this, arguments);
        }
      },
      testRandInt: {
        value: function testRandInt() {
          return this.test_rand_int.apply(this, arguments);
        }
      },
      testRandIntRange: {
        value: function testRandIntRange() {
          return this.test_rand_int_range.apply(this, arguments);
        }
      },
      testRun: {
        value: function testRun() {
          return this.test_run.apply(this, arguments);
        }
      },
      testRunSuite: {
        value: function testRunSuite() {
          return this.test_run_suite.apply(this, arguments);
        }
      },
      testSetNonfatalAssertions: {
        value: function testSetNonfatalAssertions() {
          return this.test_set_nonfatal_assertions.apply(this, arguments);
        }
      },
      testSkip: {
        value: function testSkip() {
          return this.test_skip.apply(this, arguments);
        }
      },
      testSubprocess: {
        value: function testSubprocess() {
          return this.test_subprocess.apply(this, arguments);
        }
      },
      testTimerElapsed: {
        value: function testTimerElapsed() {
          return this.test_timer_elapsed.apply(this, arguments);
        }
      },
      testTimerLast: {
        value: function testTimerLast() {
          return this.test_timer_last.apply(this, arguments);
        }
      },
      testTimerStart: {
        value: function testTimerStart() {
          return this.test_timer_start.apply(this, arguments);
        }
      },
      testTrapAssertions: {
        value: function testTrapAssertions() {
          return this.test_trap_assertions.apply(this, arguments);
        }
      },
      testTrapFork: {
        value: function testTrapFork() {
          return this.test_trap_fork.apply(this, arguments);
        }
      },
      testTrapHasPassed: {
        value: function testTrapHasPassed() {
          return this.test_trap_has_passed.apply(this, arguments);
        }
      },
      testTrapReachedTimeout: {
        value: function testTrapReachedTimeout() {
          return this.test_trap_reached_timeout.apply(this, arguments);
        }
      },
      testTrapSubprocess: {
        value: function testTrapSubprocess() {
          return this.test_trap_subprocess.apply(this, arguments);
        }
      },
      timeoutAdd: {
        value: function timeoutAdd() {
          return this.timeout_add.apply(this, arguments);
        }
      },
      timeoutAddSeconds: {
        value: function timeoutAddSeconds() {
          return this.timeout_add_seconds.apply(this, arguments);
        }
      },
      timeoutSourceNew: {
        value: function timeoutSourceNew() {
          return this.timeout_source_new.apply(this, arguments);
        }
      },
      timeoutSourceNewSeconds: {
        value: function timeoutSourceNewSeconds() {
          return this.timeout_source_new_seconds.apply(this, arguments);
        }
      },
      ucs4ToUtf16: {
        value: function ucs4ToUtf16() {
          return this.ucs4_to_utf16.apply(this, arguments);
        }
      },
      ucs4ToUtf8: {
        value: function ucs4ToUtf8() {
          return this.ucs4_to_utf8.apply(this, arguments);
        }
      },
      unicharBreakType: {
        value: function unicharBreakType() {
          return this.unichar_break_type.apply(this, arguments);
        }
      },
      unicharCombiningClass: {
        value: function unicharCombiningClass() {
          return this.unichar_combining_class.apply(this, arguments);
        }
      },
      unicharCompose: {
        value: function unicharCompose() {
          return this.unichar_compose.apply(this, arguments);
        }
      },
      unicharDecompose: {
        value: function unicharDecompose() {
          return this.unichar_decompose.apply(this, arguments);
        }
      },
      unicharDigitValue: {
        value: function unicharDigitValue() {
          return this.unichar_digit_value.apply(this, arguments);
        }
      },
      unicharFullyDecompose: {
        value: function unicharFullyDecompose() {
          return this.unichar_fully_decompose.apply(this, arguments);
        }
      },
      unicharGetMirrorChar: {
        value: function unicharGetMirrorChar() {
          return this.unichar_get_mirror_char.apply(this, arguments);
        }
      },
      unicharGetScript: {
        value: function unicharGetScript() {
          return this.unichar_get_script.apply(this, arguments);
        }
      },
      unicharIsalnum: {
        value: function unicharIsalnum() {
          return this.unichar_isalnum.apply(this, arguments);
        }
      },
      unicharIsalpha: {
        value: function unicharIsalpha() {
          return this.unichar_isalpha.apply(this, arguments);
        }
      },
      unicharIscntrl: {
        value: function unicharIscntrl() {
          return this.unichar_iscntrl.apply(this, arguments);
        }
      },
      unicharIsdefined: {
        value: function unicharIsdefined() {
          return this.unichar_isdefined.apply(this, arguments);
        }
      },
      unicharIsdigit: {
        value: function unicharIsdigit() {
          return this.unichar_isdigit.apply(this, arguments);
        }
      },
      unicharIsgraph: {
        value: function unicharIsgraph() {
          return this.unichar_isgraph.apply(this, arguments);
        }
      },
      unicharIslower: {
        value: function unicharIslower() {
          return this.unichar_islower.apply(this, arguments);
        }
      },
      unicharIsmark: {
        value: function unicharIsmark() {
          return this.unichar_ismark.apply(this, arguments);
        }
      },
      unicharIsprint: {
        value: function unicharIsprint() {
          return this.unichar_isprint.apply(this, arguments);
        }
      },
      unicharIspunct: {
        value: function unicharIspunct() {
          return this.unichar_ispunct.apply(this, arguments);
        }
      },
      unicharIsspace: {
        value: function unicharIsspace() {
          return this.unichar_isspace.apply(this, arguments);
        }
      },
      unicharIstitle: {
        value: function unicharIstitle() {
          return this.unichar_istitle.apply(this, arguments);
        }
      },
      unicharIsupper: {
        value: function unicharIsupper() {
          return this.unichar_isupper.apply(this, arguments);
        }
      },
      unicharIswideCjk: {
        value: function unicharIswideCjk() {
          return this.unichar_iswide_cjk.apply(this, arguments);
        }
      },
      unicharIswide: {
        value: function unicharIswide() {
          return this.unichar_iswide.apply(this, arguments);
        }
      },
      unicharIsxdigit: {
        value: function unicharIsxdigit() {
          return this.unichar_isxdigit.apply(this, arguments);
        }
      },
      unicharIszerowidth: {
        value: function unicharIszerowidth() {
          return this.unichar_iszerowidth.apply(this, arguments);
        }
      },
      unicharTolower: {
        value: function unicharTolower() {
          return this.unichar_tolower.apply(this, arguments);
        }
      },
      unicharTotitle: {
        value: function unicharTotitle() {
          return this.unichar_totitle.apply(this, arguments);
        }
      },
      unicharToupper: {
        value: function unicharToupper() {
          return this.unichar_toupper.apply(this, arguments);
        }
      },
      unicharToUtf8: {
        value: function unicharToUtf8() {
          return this.unichar_to_utf8.apply(this, arguments);
        }
      },
      unicharType: {
        value: function unicharType() {
          return this.unichar_type.apply(this, arguments);
        }
      },
      unicharValidate: {
        value: function unicharValidate() {
          return this.unichar_validate.apply(this, arguments);
        }
      },
      unicharXdigitValue: {
        value: function unicharXdigitValue() {
          return this.unichar_xdigit_value.apply(this, arguments);
        }
      },
      unicodeCanonicalDecomposition: {
        value: function unicodeCanonicalDecomposition() {
          return this.unicode_canonical_decomposition.apply(this, arguments);
        }
      },
      unicodeCanonicalOrdering: {
        value: function unicodeCanonicalOrdering() {
          return this.unicode_canonical_ordering.apply(this, arguments);
        }
      },
      unicodeScriptFromIso15924: {
        value: function unicodeScriptFromIso15924() {
          return this.unicode_script_from_iso15924.apply(this, arguments);
        }
      },
      unicodeScriptToIso15924: {
        value: function unicodeScriptToIso15924() {
          return this.unicode_script_to_iso15924.apply(this, arguments);
        }
      },
      unixErrorQuark: {
        value: function unixErrorQuark() {
          return this.unix_error_quark.apply(this, arguments);
        }
      },
      unixFdAddFull: {
        value: function unixFdAddFull() {
          return this.unix_fd_add_full.apply(this, arguments);
        }
      },
      unixFdSourceNew: {
        value: function unixFdSourceNew() {
          return this.unix_fd_source_new.apply(this, arguments);
        }
      },
      unixOpenPipe: {
        value: function unixOpenPipe() {
          return this.unix_open_pipe.apply(this, arguments);
        }
      },
      unixSetFdNonblocking: {
        value: function unixSetFdNonblocking() {
          return this.unix_set_fd_nonblocking.apply(this, arguments);
        }
      },
      unixSignalAdd: {
        value: function unixSignalAdd() {
          return this.unix_signal_add.apply(this, arguments);
        }
      },
      unixSignalSourceNew: {
        value: function unixSignalSourceNew() {
          return this.unix_signal_source_new.apply(this, arguments);
        }
      },
      uriEscapeString: {
        value: function uriEscapeString() {
          return this.uri_escape_string.apply(this, arguments);
        }
      },
      uriListExtractUris: {
        value: function uriListExtractUris() {
          return this.uri_list_extract_uris.apply(this, arguments);
        }
      },
      uriParseScheme: {
        value: function uriParseScheme() {
          return this.uri_parse_scheme.apply(this, arguments);
        }
      },
      uriUnescapeSegment: {
        value: function uriUnescapeSegment() {
          return this.uri_unescape_segment.apply(this, arguments);
        }
      },
      uriUnescapeString: {
        value: function uriUnescapeString() {
          return this.uri_unescape_string.apply(this, arguments);
        }
      },
      utf16ToUcs4: {
        value: function utf16ToUcs4() {
          return this.utf16_to_ucs4.apply(this, arguments);
        }
      },
      utf16ToUtf8: {
        value: function utf16ToUtf8() {
          return this.utf16_to_utf8.apply(this, arguments);
        }
      },
      utf8Casefold: {
        value: function utf8Casefold() {
          return this.utf8_casefold.apply(this, arguments);
        }
      },
      utf8Collate: {
        value: function utf8Collate() {
          return this.utf8_collate.apply(this, arguments);
        }
      },
      utf8CollateKeyForFilename: {
        value: function utf8CollateKeyForFilename() {
          return this.utf8_collate_key_for_filename.apply(this, arguments);
        }
      },
      utf8CollateKey: {
        value: function utf8CollateKey() {
          return this.utf8_collate_key.apply(this, arguments);
        }
      },
      utf8FindNextChar: {
        value: function utf8FindNextChar() {
          return this.utf8_find_next_char.apply(this, arguments);
        }
      },
      utf8FindPrevChar: {
        value: function utf8FindPrevChar() {
          return this.utf8_find_prev_char.apply(this, arguments);
        }
      },
      utf8GetChar: {
        value: function utf8GetChar() {
          return this.utf8_get_char.apply(this, arguments);
        }
      },
      utf8GetCharValidated: {
        value: function utf8GetCharValidated() {
          return this.utf8_get_char_validated.apply(this, arguments);
        }
      },
      utf8Normalize: {
        value: function utf8Normalize() {
          return this.utf8_normalize.apply(this, arguments);
        }
      },
      utf8PrevChar: {
        value: function utf8PrevChar() {
          return this.utf8_prev_char.apply(this, arguments);
        }
      },
      utf8Strchr: {
        value: function utf8Strchr() {
          return this.utf8_strchr.apply(this, arguments);
        }
      },
      utf8Strdown: {
        value: function utf8Strdown() {
          return this.utf8_strdown.apply(this, arguments);
        }
      },
      utf8Strlen: {
        value: function utf8Strlen() {
          return this.utf8_strlen.apply(this, arguments);
        }
      },
      utf8Strncpy: {
        value: function utf8Strncpy() {
          return this.utf8_strncpy.apply(this, arguments);
        }
      },
      utf8Strrchr: {
        value: function utf8Strrchr() {
          return this.utf8_strrchr.apply(this, arguments);
        }
      },
      utf8Strreverse: {
        value: function utf8Strreverse() {
          return this.utf8_strreverse.apply(this, arguments);
        }
      },
      utf8Strup: {
        value: function utf8Strup() {
          return this.utf8_strup.apply(this, arguments);
        }
      },
      utf8Substring: {
        value: function utf8Substring() {
          return this.utf8_substring.apply(this, arguments);
        }
      },
      utf8ToUcs4Fast: {
        value: function utf8ToUcs4Fast() {
          return this.utf8_to_ucs4_fast.apply(this, arguments);
        }
      },
      utf8ToUcs4: {
        value: function utf8ToUcs4() {
          return this.utf8_to_ucs4.apply(this, arguments);
        }
      },
      utf8ToUtf16: {
        value: function utf8ToUtf16() {
          return this.utf8_to_utf16.apply(this, arguments);
        }
      },
      utf8Validate: {
        value: function utf8Validate() {
          return this.utf8_validate.apply(this, arguments);
        }
      },
      warnMessage: {
        value: function warnMessage() {
          return this.warn_message.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.BookmarkFile,
    {
      errorQuark: {
        value: function errorQuark() {
          return this.error_quark.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.BookmarkFile.prototype,
    {
      addApplication: {
        value: function addApplication() {
          return this.add_application.apply(this, arguments);
        }
      },
      addGroup: {
        value: function addGroup() {
          return this.add_group.apply(this, arguments);
        }
      },
      getAdded: {
        value: function getAdded() {
          return this.get_added.apply(this, arguments);
        }
      },
      getAppInfo: {
        value: function getAppInfo() {
          return this.get_app_info.apply(this, arguments);
        }
      },
      getApplications: {
        value: function getApplications() {
          return this.get_applications.apply(this, arguments);
        }
      },
      getDescription: {
        value: function getDescription() {
          return this.get_description.apply(this, arguments);
        }
      },
      getGroups: {
        value: function getGroups() {
          return this.get_groups.apply(this, arguments);
        }
      },
      getIcon: {
        value: function getIcon() {
          return this.get_icon.apply(this, arguments);
        }
      },
      getIsPrivate: {
        value: function getIsPrivate() {
          return this.get_is_private.apply(this, arguments);
        }
      },
      getMimeType: {
        value: function getMimeType() {
          return this.get_mime_type.apply(this, arguments);
        }
      },
      getModified: {
        value: function getModified() {
          return this.get_modified.apply(this, arguments);
        }
      },
      getSize: {
        value: function getSize() {
          return this.get_size.apply(this, arguments);
        }
      },
      getTitle: {
        value: function getTitle() {
          return this.get_title.apply(this, arguments);
        }
      },
      getUris: {
        value: function getUris() {
          return this.get_uris.apply(this, arguments);
        }
      },
      getVisited: {
        value: function getVisited() {
          return this.get_visited.apply(this, arguments);
        }
      },
      hasApplication: {
        value: function hasApplication() {
          return this.has_application.apply(this, arguments);
        }
      },
      hasGroup: {
        value: function hasGroup() {
          return this.has_group.apply(this, arguments);
        }
      },
      hasItem: {
        value: function hasItem() {
          return this.has_item.apply(this, arguments);
        }
      },
      loadFromDataDirs: {
        value: function loadFromDataDirs() {
          return this.load_from_data_dirs.apply(this, arguments);
        }
      },
      loadFromData: {
        value: function loadFromData() {
          return this.load_from_data.apply(this, arguments);
        }
      },
      loadFromFile: {
        value: function loadFromFile() {
          return this.load_from_file.apply(this, arguments);
        }
      },
      moveItem: {
        value: function moveItem() {
          return this.move_item.apply(this, arguments);
        }
      },
      removeApplication: {
        value: function removeApplication() {
          return this.remove_application.apply(this, arguments);
        }
      },
      removeGroup: {
        value: function removeGroup() {
          return this.remove_group.apply(this, arguments);
        }
      },
      removeItem: {
        value: function removeItem() {
          return this.remove_item.apply(this, arguments);
        }
      },
      setAdded: {
        value: function setAdded() {
          return this.set_added.apply(this, arguments);
        }
      },
      setAppInfo: {
        value: function setAppInfo() {
          return this.set_app_info.apply(this, arguments);
        }
      },
      setDescription: {
        value: function setDescription() {
          return this.set_description.apply(this, arguments);
        }
      },
      setGroups: {
        value: function setGroups() {
          return this.set_groups.apply(this, arguments);
        }
      },
      setIcon: {
        value: function setIcon() {
          return this.set_icon.apply(this, arguments);
        }
      },
      setIsPrivate: {
        value: function setIsPrivate() {
          return this.set_is_private.apply(this, arguments);
        }
      },
      setMimeType: {
        value: function setMimeType() {
          return this.set_mime_type.apply(this, arguments);
        }
      },
      setModified: {
        value: function setModified() {
          return this.set_modified.apply(this, arguments);
        }
      },
      setTitle: {
        value: function setTitle() {
          return this.set_title.apply(this, arguments);
        }
      },
      setVisited: {
        value: function setVisited() {
          return this.set_visited.apply(this, arguments);
        }
      },
      toData: {
        value: function toData() {
          return this.to_data.apply(this, arguments);
        }
      },
      toFile: {
        value: function toFile() {
          return this.to_file.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Checksum,
    {
      typeGetLength: {
        value: function typeGetLength() {
          return this.type_get_length.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Checksum.prototype,
    {
      getString: {
        value: function getString() {
          return this.get_string.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Date,
    {
      getDaysInMonth: {
        value: function getDaysInMonth() {
          return this.get_days_in_month.apply(this, arguments);
        }
      },
      getMondayWeeksInYear: {
        value: function getMondayWeeksInYear() {
          return this.get_monday_weeks_in_year.apply(this, arguments);
        }
      },
      getSundayWeeksInYear: {
        value: function getSundayWeeksInYear() {
          return this.get_sunday_weeks_in_year.apply(this, arguments);
        }
      },
      isLeapYear: {
        value: function isLeapYear() {
          return this.is_leap_year.apply(this, arguments);
        }
      },
      newDmy: {
        value: function newDmy() {
          return this.new_dmy.apply(this, arguments);
        }
      },
      newJulian: {
        value: function newJulian() {
          return this.new_julian.apply(this, arguments);
        }
      },
      validDay: {
        value: function validDay() {
          return this.valid_day.apply(this, arguments);
        }
      },
      validDmy: {
        value: function validDmy() {
          return this.valid_dmy.apply(this, arguments);
        }
      },
      validJulian: {
        value: function validJulian() {
          return this.valid_julian.apply(this, arguments);
        }
      },
      validMonth: {
        value: function validMonth() {
          return this.valid_month.apply(this, arguments);
        }
      },
      validWeekday: {
        value: function validWeekday() {
          return this.valid_weekday.apply(this, arguments);
        }
      },
      validYear: {
        value: function validYear() {
          return this.valid_year.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Date.prototype,
    {
      addDays: {
        value: function addDays() {
          return this.add_days.apply(this, arguments);
        }
      },
      addMonths: {
        value: function addMonths() {
          return this.add_months.apply(this, arguments);
        }
      },
      addYears: {
        value: function addYears() {
          return this.add_years.apply(this, arguments);
        }
      },
      daysBetween: {
        value: function daysBetween() {
          return this.days_between.apply(this, arguments);
        }
      },
      getDay: {
        value: function getDay() {
          return this.get_day.apply(this, arguments);
        }
      },
      getDayOfYear: {
        value: function getDayOfYear() {
          return this.get_day_of_year.apply(this, arguments);
        }
      },
      getIso8601WeekOfYear: {
        value: function getIso8601WeekOfYear() {
          return this.get_iso8601_week_of_year.apply(this, arguments);
        }
      },
      getJulian: {
        value: function getJulian() {
          return this.get_julian.apply(this, arguments);
        }
      },
      getMondayWeekOfYear: {
        value: function getMondayWeekOfYear() {
          return this.get_monday_week_of_year.apply(this, arguments);
        }
      },
      getMonth: {
        value: function getMonth() {
          return this.get_month.apply(this, arguments);
        }
      },
      getSundayWeekOfYear: {
        value: function getSundayWeekOfYear() {
          return this.get_sunday_week_of_year.apply(this, arguments);
        }
      },
      getWeekday: {
        value: function getWeekday() {
          return this.get_weekday.apply(this, arguments);
        }
      },
      getYear: {
        value: function getYear() {
          return this.get_year.apply(this, arguments);
        }
      },
      isFirstOfMonth: {
        value: function isFirstOfMonth() {
          return this.is_first_of_month.apply(this, arguments);
        }
      },
      isLastOfMonth: {
        value: function isLastOfMonth() {
          return this.is_last_of_month.apply(this, arguments);
        }
      },
      setDay: {
        value: function setDay() {
          return this.set_day.apply(this, arguments);
        }
      },
      setDmy: {
        value: function setDmy() {
          return this.set_dmy.apply(this, arguments);
        }
      },
      setJulian: {
        value: function setJulian() {
          return this.set_julian.apply(this, arguments);
        }
      },
      setMonth: {
        value: function setMonth() {
          return this.set_month.apply(this, arguments);
        }
      },
      setParse: {
        value: function setParse() {
          return this.set_parse.apply(this, arguments);
        }
      },
      setTime: {
        value: function setTime() {
          return this.set_time.apply(this, arguments);
        }
      },
      setTimeT: {
        value: function setTimeT() {
          return this.set_time_t.apply(this, arguments);
        }
      },
      setTimeVal: {
        value: function setTimeVal() {
          return this.set_time_val.apply(this, arguments);
        }
      },
      setYear: {
        value: function setYear() {
          return this.set_year.apply(this, arguments);
        }
      },
      subtractDays: {
        value: function subtractDays() {
          return this.subtract_days.apply(this, arguments);
        }
      },
      subtractMonths: {
        value: function subtractMonths() {
          return this.subtract_months.apply(this, arguments);
        }
      },
      subtractYears: {
        value: function subtractYears() {
          return this.subtract_years.apply(this, arguments);
        }
      },
      toStructTm: {
        value: function toStructTm() {
          return this.to_struct_tm.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.DateTime,
    {
      newFromTimevalLocal: {
        value: function newFromTimevalLocal() {
          return this.new_from_timeval_local.apply(this, arguments);
        }
      },
      newFromTimevalUtc: {
        value: function newFromTimevalUtc() {
          return this.new_from_timeval_utc.apply(this, arguments);
        }
      },
      newFromUnixLocal: {
        value: function newFromUnixLocal() {
          return this.new_from_unix_local.apply(this, arguments);
        }
      },
      newFromUnixUtc: {
        value: function newFromUnixUtc() {
          return this.new_from_unix_utc.apply(this, arguments);
        }
      },
      newLocal: {
        value: function newLocal() {
          return this.new_local.apply(this, arguments);
        }
      },
      newNow: {
        value: function newNow() {
          return this.new_now.apply(this, arguments);
        }
      },
      newNowLocal: {
        value: function newNowLocal() {
          return this.new_now_local.apply(this, arguments);
        }
      },
      newNowUtc: {
        value: function newNowUtc() {
          return this.new_now_utc.apply(this, arguments);
        }
      },
      newUtc: {
        value: function newUtc() {
          return this.new_utc.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.DateTime.prototype,
    {
      addDays: {
        value: function addDays() {
          return this.add_days.apply(this, arguments);
        }
      },
      addFull: {
        value: function addFull() {
          return this.add_full.apply(this, arguments);
        }
      },
      addHours: {
        value: function addHours() {
          return this.add_hours.apply(this, arguments);
        }
      },
      addMinutes: {
        value: function addMinutes() {
          return this.add_minutes.apply(this, arguments);
        }
      },
      addMonths: {
        value: function addMonths() {
          return this.add_months.apply(this, arguments);
        }
      },
      addSeconds: {
        value: function addSeconds() {
          return this.add_seconds.apply(this, arguments);
        }
      },
      addWeeks: {
        value: function addWeeks() {
          return this.add_weeks.apply(this, arguments);
        }
      },
      addYears: {
        value: function addYears() {
          return this.add_years.apply(this, arguments);
        }
      },
      getDayOfMonth: {
        value: function getDayOfMonth() {
          return this.get_day_of_month.apply(this, arguments);
        }
      },
      getDayOfWeek: {
        value: function getDayOfWeek() {
          return this.get_day_of_week.apply(this, arguments);
        }
      },
      getDayOfYear: {
        value: function getDayOfYear() {
          return this.get_day_of_year.apply(this, arguments);
        }
      },
      getHour: {
        value: function getHour() {
          return this.get_hour.apply(this, arguments);
        }
      },
      getMicrosecond: {
        value: function getMicrosecond() {
          return this.get_microsecond.apply(this, arguments);
        }
      },
      getMinute: {
        value: function getMinute() {
          return this.get_minute.apply(this, arguments);
        }
      },
      getMonth: {
        value: function getMonth() {
          return this.get_month.apply(this, arguments);
        }
      },
      getSecond: {
        value: function getSecond() {
          return this.get_second.apply(this, arguments);
        }
      },
      getSeconds: {
        value: function getSeconds() {
          return this.get_seconds.apply(this, arguments);
        }
      },
      getTimezoneAbbreviation: {
        value: function getTimezoneAbbreviation() {
          return this.get_timezone_abbreviation.apply(this, arguments);
        }
      },
      getUtcOffset: {
        value: function getUtcOffset() {
          return this.get_utc_offset.apply(this, arguments);
        }
      },
      getWeekNumberingYear: {
        value: function getWeekNumberingYear() {
          return this.get_week_numbering_year.apply(this, arguments);
        }
      },
      getWeekOfYear: {
        value: function getWeekOfYear() {
          return this.get_week_of_year.apply(this, arguments);
        }
      },
      getYear: {
        value: function getYear() {
          return this.get_year.apply(this, arguments);
        }
      },
      getYmd: {
        value: function getYmd() {
          return this.get_ymd.apply(this, arguments);
        }
      },
      isDaylightSavings: {
        value: function isDaylightSavings() {
          return this.is_daylight_savings.apply(this, arguments);
        }
      },
      toLocal: {
        value: function toLocal() {
          return this.to_local.apply(this, arguments);
        }
      },
      toTimeval: {
        value: function toTimeval() {
          return this.to_timeval.apply(this, arguments);
        }
      },
      toTimezone: {
        value: function toTimezone() {
          return this.to_timezone.apply(this, arguments);
        }
      },
      toUnix: {
        value: function toUnix() {
          return this.to_unix.apply(this, arguments);
        }
      },
      toUtc: {
        value: function toUtc() {
          return this.to_utc.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Error,
    {
      newLiteral: {
        value: function newLiteral() {
          return this.new_literal.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Hmac.prototype,
    {
      getDigest: {
        value: function getDigest() {
          return this.get_digest.apply(this, arguments);
        }
      },
      getString: {
        value: function getString() {
          return this.get_string.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.IOChannel,
    {
      errorFromErrno: {
        value: function errorFromErrno() {
          return this.error_from_errno.apply(this, arguments);
        }
      },
      errorQuark: {
        value: function errorQuark() {
          return this.error_quark.apply(this, arguments);
        }
      },
      newFile: {
        value: function newFile() {
          return this.new_file.apply(this, arguments);
        }
      },
      unixNew: {
        value: function unixNew() {
          return this.unix_new.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.IOChannel.prototype,
    {
      readChars: {
        get: function () { return this.read_chars; },
        set: function (value) { this.read_chars = value; }
      },
      getBufferCondition: {
        value: function getBufferCondition() {
          return this.get_buffer_condition.apply(this, arguments);
        }
      },
      getBuffered: {
        value: function getBuffered() {
          return this.get_buffered.apply(this, arguments);
        }
      },
      getBufferSize: {
        value: function getBufferSize() {
          return this.get_buffer_size.apply(this, arguments);
        }
      },
      getCloseOnUnref: {
        value: function getCloseOnUnref() {
          return this.get_close_on_unref.apply(this, arguments);
        }
      },
      getEncoding: {
        value: function getEncoding() {
          return this.get_encoding.apply(this, arguments);
        }
      },
      getFlags: {
        value: function getFlags() {
          return this.get_flags.apply(this, arguments);
        }
      },
      getLineTerm: {
        value: function getLineTerm() {
          return this.get_line_term.apply(this, arguments);
        }
      },
      readLine: {
        value: function readLine() {
          return this.read_line.apply(this, arguments);
        }
      },
      readLineString: {
        value: function readLineString() {
          return this.read_line_string.apply(this, arguments);
        }
      },
      readToEnd: {
        value: function readToEnd() {
          return this.read_to_end.apply(this, arguments);
        }
      },
      readUnichar: {
        value: function readUnichar() {
          return this.read_unichar.apply(this, arguments);
        }
      },
      seekPosition: {
        value: function seekPosition() {
          return this.seek_position.apply(this, arguments);
        }
      },
      setBuffered: {
        value: function setBuffered() {
          return this.set_buffered.apply(this, arguments);
        }
      },
      setBufferSize: {
        value: function setBufferSize() {
          return this.set_buffer_size.apply(this, arguments);
        }
      },
      setCloseOnUnref: {
        value: function setCloseOnUnref() {
          return this.set_close_on_unref.apply(this, arguments);
        }
      },
      setEncoding: {
        value: function setEncoding() {
          return this.set_encoding.apply(this, arguments);
        }
      },
      setFlags: {
        value: function setFlags() {
          return this.set_flags.apply(this, arguments);
        }
      },
      setLineTerm: {
        value: function setLineTerm() {
          return this.set_line_term.apply(this, arguments);
        }
      },
      unixGetFd: {
        value: function unixGetFd() {
          return this.unix_get_fd.apply(this, arguments);
        }
      },
      writeChars: {
        value: function writeChars() {
          return this.write_chars.apply(this, arguments);
        }
      },
      writeUnichar: {
        value: function writeUnichar() {
          return this.write_unichar.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.KeyFile,
    {
      errorQuark: {
        value: function errorQuark() {
          return this.error_quark.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.KeyFile.prototype,
    {
      getBoolean: {
        value: function getBoolean() {
          return this.get_boolean.apply(this, arguments);
        }
      },
      getBooleanList: {
        value: function getBooleanList() {
          return this.get_boolean_list.apply(this, arguments);
        }
      },
      getComment: {
        value: function getComment() {
          return this.get_comment.apply(this, arguments);
        }
      },
      getDouble: {
        value: function getDouble() {
          return this.get_double.apply(this, arguments);
        }
      },
      getDoubleList: {
        value: function getDoubleList() {
          return this.get_double_list.apply(this, arguments);
        }
      },
      getGroups: {
        value: function getGroups() {
          return this.get_groups.apply(this, arguments);
        }
      },
      getInt64: {
        value: function getInt64() {
          return this.get_int64.apply(this, arguments);
        }
      },
      getInteger: {
        value: function getInteger() {
          return this.get_integer.apply(this, arguments);
        }
      },
      getIntegerList: {
        value: function getIntegerList() {
          return this.get_integer_list.apply(this, arguments);
        }
      },
      getKeys: {
        value: function getKeys() {
          return this.get_keys.apply(this, arguments);
        }
      },
      getLocaleString: {
        value: function getLocaleString() {
          return this.get_locale_string.apply(this, arguments);
        }
      },
      getLocaleStringList: {
        value: function getLocaleStringList() {
          return this.get_locale_string_list.apply(this, arguments);
        }
      },
      getStartGroup: {
        value: function getStartGroup() {
          return this.get_start_group.apply(this, arguments);
        }
      },
      getString: {
        value: function getString() {
          return this.get_string.apply(this, arguments);
        }
      },
      getStringList: {
        value: function getStringList() {
          return this.get_string_list.apply(this, arguments);
        }
      },
      getUint64: {
        value: function getUint64() {
          return this.get_uint64.apply(this, arguments);
        }
      },
      getValue: {
        value: function getValue() {
          return this.get_value.apply(this, arguments);
        }
      },
      hasGroup: {
        value: function hasGroup() {
          return this.has_group.apply(this, arguments);
        }
      },
      loadFromDataDirs: {
        value: function loadFromDataDirs() {
          return this.load_from_data_dirs.apply(this, arguments);
        }
      },
      loadFromData: {
        value: function loadFromData() {
          return this.load_from_data.apply(this, arguments);
        }
      },
      loadFromDirs: {
        value: function loadFromDirs() {
          return this.load_from_dirs.apply(this, arguments);
        }
      },
      loadFromFile: {
        value: function loadFromFile() {
          return this.load_from_file.apply(this, arguments);
        }
      },
      removeComment: {
        value: function removeComment() {
          return this.remove_comment.apply(this, arguments);
        }
      },
      removeGroup: {
        value: function removeGroup() {
          return this.remove_group.apply(this, arguments);
        }
      },
      removeKey: {
        value: function removeKey() {
          return this.remove_key.apply(this, arguments);
        }
      },
      saveToFile: {
        value: function saveToFile() {
          return this.save_to_file.apply(this, arguments);
        }
      },
      setBoolean: {
        value: function setBoolean() {
          return this.set_boolean.apply(this, arguments);
        }
      },
      setBooleanList: {
        value: function setBooleanList() {
          return this.set_boolean_list.apply(this, arguments);
        }
      },
      setComment: {
        value: function setComment() {
          return this.set_comment.apply(this, arguments);
        }
      },
      setDouble: {
        value: function setDouble() {
          return this.set_double.apply(this, arguments);
        }
      },
      setDoubleList: {
        value: function setDoubleList() {
          return this.set_double_list.apply(this, arguments);
        }
      },
      setInt64: {
        value: function setInt64() {
          return this.set_int64.apply(this, arguments);
        }
      },
      setInteger: {
        value: function setInteger() {
          return this.set_integer.apply(this, arguments);
        }
      },
      setIntegerList: {
        value: function setIntegerList() {
          return this.set_integer_list.apply(this, arguments);
        }
      },
      setListSeparator: {
        value: function setListSeparator() {
          return this.set_list_separator.apply(this, arguments);
        }
      },
      setLocaleString: {
        value: function setLocaleString() {
          return this.set_locale_string.apply(this, arguments);
        }
      },
      setLocaleStringList: {
        value: function setLocaleStringList() {
          return this.set_locale_string_list.apply(this, arguments);
        }
      },
      setString: {
        value: function setString() {
          return this.set_string.apply(this, arguments);
        }
      },
      setStringList: {
        value: function setStringList() {
          return this.set_string_list.apply(this, arguments);
        }
      },
      setUint64: {
        value: function setUint64() {
          return this.set_uint64.apply(this, arguments);
        }
      },
      setValue: {
        value: function setValue() {
          return this.set_value.apply(this, arguments);
        }
      },
      toData: {
        value: function toData() {
          return this.to_data.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.MainContext,
    {
      getThreadDefault: {
        value: function getThreadDefault() {
          return this.get_thread_default.apply(this, arguments);
        }
      },
      refThreadDefault: {
        value: function refThreadDefault() {
          return this.ref_thread_default.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.MainContext.prototype,
    {
      addPoll: {
        value: function addPoll() {
          return this.add_poll.apply(this, arguments);
        }
      },
      findSourceById: {
        value: function findSourceById() {
          return this.find_source_by_id.apply(this, arguments);
        }
      },
      findSourceByUserData: {
        value: function findSourceByUserData() {
          return this.find_source_by_user_data.apply(this, arguments);
        }
      },
      invokeFull: {
        value: function invokeFull() {
          return this.invoke_full.apply(this, arguments);
        }
      },
      isOwner: {
        value: function isOwner() {
          return this.is_owner.apply(this, arguments);
        }
      },
      popThreadDefault: {
        value: function popThreadDefault() {
          return this.pop_thread_default.apply(this, arguments);
        }
      },
      pushThreadDefault: {
        value: function pushThreadDefault() {
          return this.push_thread_default.apply(this, arguments);
        }
      },
      removePoll: {
        value: function removePoll() {
          return this.remove_poll.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.MainLoop.prototype,
    {
      getContext: {
        value: function getContext() {
          return this.get_context.apply(this, arguments);
        }
      },
      isRunning: {
        value: function isRunning() {
          return this.is_running.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.MappedFile,
    {
      newFromFd: {
        value: function newFromFd() {
          return this.new_from_fd.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.MappedFile.prototype,
    {
      getBytes: {
        value: function getBytes() {
          return this.get_bytes.apply(this, arguments);
        }
      },
      getContents: {
        value: function getContents() {
          return this.get_contents.apply(this, arguments);
        }
      },
      getLength: {
        value: function getLength() {
          return this.get_length.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.MarkupParseContext.prototype,
    {
      endParse: {
        value: function endParse() {
          return this.end_parse.apply(this, arguments);
        }
      },
      getElement: {
        value: function getElement() {
          return this.get_element.apply(this, arguments);
        }
      },
      getPosition: {
        value: function getPosition() {
          return this.get_position.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.MarkupParser.prototype,
    {
      endElement: {
        get: function () { return this.end_element; },
        set: function (value) { this.end_element = value; }
      },
      startElement: {
        get: function () { return this.start_element; },
        set: function (value) { this.start_element = value; }
      }
    }
  );
  Object.defineProperties(
    GLib.MatchInfo.prototype,
    {
      expandReferences: {
        value: function expandReferences() {
          return this.expand_references.apply(this, arguments);
        }
      },
      fetchAll: {
        value: function fetchAll() {
          return this.fetch_all.apply(this, arguments);
        }
      },
      fetchNamed: {
        value: function fetchNamed() {
          return this.fetch_named.apply(this, arguments);
        }
      },
      fetchNamedPos: {
        value: function fetchNamedPos() {
          return this.fetch_named_pos.apply(this, arguments);
        }
      },
      fetchPos: {
        value: function fetchPos() {
          return this.fetch_pos.apply(this, arguments);
        }
      },
      getMatchCount: {
        value: function getMatchCount() {
          return this.get_match_count.apply(this, arguments);
        }
      },
      getRegex: {
        value: function getRegex() {
          return this.get_regex.apply(this, arguments);
        }
      },
      getString: {
        value: function getString() {
          return this.get_string.apply(this, arguments);
        }
      },
      isPartialMatch: {
        value: function isPartialMatch() {
          return this.is_partial_match.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.OptionContext.prototype,
    {
      addGroup: {
        value: function addGroup() {
          return this.add_group.apply(this, arguments);
        }
      },
      addMainEntries: {
        value: function addMainEntries() {
          return this.add_main_entries.apply(this, arguments);
        }
      },
      getDescription: {
        value: function getDescription() {
          return this.get_description.apply(this, arguments);
        }
      },
      getHelpEnabled: {
        value: function getHelpEnabled() {
          return this.get_help_enabled.apply(this, arguments);
        }
      },
      getHelp: {
        value: function getHelp() {
          return this.get_help.apply(this, arguments);
        }
      },
      getIgnoreUnknownOptions: {
        value: function getIgnoreUnknownOptions() {
          return this.get_ignore_unknown_options.apply(this, arguments);
        }
      },
      getSummary: {
        value: function getSummary() {
          return this.get_summary.apply(this, arguments);
        }
      },
      parseStrv: {
        value: function parseStrv() {
          return this.parse_strv.apply(this, arguments);
        }
      },
      setDescription: {
        value: function setDescription() {
          return this.set_description.apply(this, arguments);
        }
      },
      setHelpEnabled: {
        value: function setHelpEnabled() {
          return this.set_help_enabled.apply(this, arguments);
        }
      },
      setIgnoreUnknownOptions: {
        value: function setIgnoreUnknownOptions() {
          return this.set_ignore_unknown_options.apply(this, arguments);
        }
      },
      setMainGroup: {
        value: function setMainGroup() {
          return this.set_main_group.apply(this, arguments);
        }
      },
      setSummary: {
        value: function setSummary() {
          return this.set_summary.apply(this, arguments);
        }
      },
      setTranslateFunc: {
        value: function setTranslateFunc() {
          return this.set_translate_func.apply(this, arguments);
        }
      },
      setTranslationDomain: {
        value: function setTranslationDomain() {
          return this.set_translation_domain.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.OptionGroup.prototype,
    {
      addEntries: {
        value: function addEntries() {
          return this.add_entries.apply(this, arguments);
        }
      },
      setTranslateFunc: {
        value: function setTranslateFunc() {
          return this.set_translate_func.apply(this, arguments);
        }
      },
      setTranslationDomain: {
        value: function setTranslationDomain() {
          return this.set_translation_domain.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Regex,
    {
      checkReplacement: {
        value: function checkReplacement() {
          return this.check_replacement.apply(this, arguments);
        }
      },
      errorQuark: {
        value: function errorQuark() {
          return this.error_quark.apply(this, arguments);
        }
      },
      escapeNul: {
        value: function escapeNul() {
          return this.escape_nul.apply(this, arguments);
        }
      },
      escapeString: {
        value: function escapeString() {
          return this.escape_string.apply(this, arguments);
        }
      },
      matchSimple: {
        value: function matchSimple() {
          return this.match_simple.apply(this, arguments);
        }
      },
      splitSimple: {
        value: function splitSimple() {
          return this.split_simple.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Regex.prototype,
    {
      getCaptureCount: {
        value: function getCaptureCount() {
          return this.get_capture_count.apply(this, arguments);
        }
      },
      getCompileFlags: {
        value: function getCompileFlags() {
          return this.get_compile_flags.apply(this, arguments);
        }
      },
      getHasCrOrLf: {
        value: function getHasCrOrLf() {
          return this.get_has_cr_or_lf.apply(this, arguments);
        }
      },
      getMatchFlags: {
        value: function getMatchFlags() {
          return this.get_match_flags.apply(this, arguments);
        }
      },
      getMaxBackref: {
        value: function getMaxBackref() {
          return this.get_max_backref.apply(this, arguments);
        }
      },
      getMaxLookbehind: {
        value: function getMaxLookbehind() {
          return this.get_max_lookbehind.apply(this, arguments);
        }
      },
      getPattern: {
        value: function getPattern() {
          return this.get_pattern.apply(this, arguments);
        }
      },
      getStringNumber: {
        value: function getStringNumber() {
          return this.get_string_number.apply(this, arguments);
        }
      },
      matchAllFull: {
        value: function matchAllFull() {
          return this.match_all_full.apply(this, arguments);
        }
      },
      matchAll: {
        value: function matchAll() {
          return this.match_all.apply(this, arguments);
        }
      },
      matchFull: {
        value: function matchFull() {
          return this.match_full.apply(this, arguments);
        }
      },
      replaceLiteral: {
        value: function replaceLiteral() {
          return this.replace_literal.apply(this, arguments);
        }
      },
      splitFull: {
        value: function splitFull() {
          return this.split_full.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Scanner.prototype,
    {
      curLine: {
        value: function curLine() {
          return this.cur_line.apply(this, arguments);
        }
      },
      curPosition: {
        value: function curPosition() {
          return this.cur_position.apply(this, arguments);
        }
      },
      curToken: {
        value: function curToken() {
          return this.cur_token.apply(this, arguments);
        }
      },
      getNextToken: {
        value: function getNextToken() {
          return this.get_next_token.apply(this, arguments);
        }
      },
      inputFile: {
        value: function inputFile() {
          return this.input_file.apply(this, arguments);
        }
      },
      inputText: {
        value: function inputText() {
          return this.input_text.apply(this, arguments);
        }
      },
      peekNextToken: {
        value: function peekNextToken() {
          return this.peek_next_token.apply(this, arguments);
        }
      },
      scopeAddSymbol: {
        value: function scopeAddSymbol() {
          return this.scope_add_symbol.apply(this, arguments);
        }
      },
      scopeRemoveSymbol: {
        value: function scopeRemoveSymbol() {
          return this.scope_remove_symbol.apply(this, arguments);
        }
      },
      setScope: {
        value: function setScope() {
          return this.set_scope.apply(this, arguments);
        }
      },
      syncFileOffset: {
        value: function syncFileOffset() {
          return this.sync_file_offset.apply(this, arguments);
        }
      },
      unexpToken: {
        value: function unexpToken() {
          return this.unexp_token.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Source,
    {
      removeByUserData: {
        value: function removeByUserData() {
          return this.remove_by_user_data.apply(this, arguments);
        }
      },
      setNameById: {
        value: function setNameById() {
          return this.set_name_by_id.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Source.prototype,
    {
      addChildSource: {
        value: function addChildSource() {
          return this.add_child_source.apply(this, arguments);
        }
      },
      addPoll: {
        value: function addPoll() {
          return this.add_poll.apply(this, arguments);
        }
      },
      getCanRecurse: {
        value: function getCanRecurse() {
          return this.get_can_recurse.apply(this, arguments);
        }
      },
      getContext: {
        value: function getContext() {
          return this.get_context.apply(this, arguments);
        }
      },
      getCurrentTime: {
        value: function getCurrentTime() {
          return this.get_current_time.apply(this, arguments);
        }
      },
      getId: {
        value: function getId() {
          return this.get_id.apply(this, arguments);
        }
      },
      getName: {
        value: function getName() {
          return this.get_name.apply(this, arguments);
        }
      },
      getPriority: {
        value: function getPriority() {
          return this.get_priority.apply(this, arguments);
        }
      },
      getReadyTime: {
        value: function getReadyTime() {
          return this.get_ready_time.apply(this, arguments);
        }
      },
      getTime: {
        value: function getTime() {
          return this.get_time.apply(this, arguments);
        }
      },
      isDestroyed: {
        value: function isDestroyed() {
          return this.is_destroyed.apply(this, arguments);
        }
      },
      modifyUnixFd: {
        value: function modifyUnixFd() {
          return this.modify_unix_fd.apply(this, arguments);
        }
      },
      queryUnixFd: {
        value: function queryUnixFd() {
          return this.query_unix_fd.apply(this, arguments);
        }
      },
      removeChildSource: {
        value: function removeChildSource() {
          return this.remove_child_source.apply(this, arguments);
        }
      },
      removePoll: {
        value: function removePoll() {
          return this.remove_poll.apply(this, arguments);
        }
      },
      removeUnixFd: {
        value: function removeUnixFd() {
          return this.remove_unix_fd.apply(this, arguments);
        }
      },
      setCallback: {
        value: function setCallback() {
          return this.set_callback.apply(this, arguments);
        }
      },
      setCallbackIndirect: {
        value: function setCallbackIndirect() {
          return this.set_callback_indirect.apply(this, arguments);
        }
      },
      setCanRecurse: {
        value: function setCanRecurse() {
          return this.set_can_recurse.apply(this, arguments);
        }
      },
      setName: {
        value: function setName() {
          return this.set_name.apply(this, arguments);
        }
      },
      setPriority: {
        value: function setPriority() {
          return this.set_priority.apply(this, arguments);
        }
      },
      setReadyTime: {
        value: function setReadyTime() {
          return this.set_ready_time.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.TimeVal,
    {
      fromIso8601: {
        value: function fromIso8601() {
          return this.from_iso8601.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.TimeVal.prototype,
    {
      toIso8601: {
        value: function toIso8601() {
          return this.to_iso8601.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.TimeZone,
    {
      newLocal: {
        value: function newLocal() {
          return this.new_local.apply(this, arguments);
        }
      },
      newUtc: {
        value: function newUtc() {
          return this.new_utc.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.TimeZone.prototype,
    {
      adjustTime: {
        value: function adjustTime() {
          return this.adjust_time.apply(this, arguments);
        }
      },
      findInterval: {
        value: function findInterval() {
          return this.find_interval.apply(this, arguments);
        }
      },
      getAbbreviation: {
        value: function getAbbreviation() {
          return this.get_abbreviation.apply(this, arguments);
        }
      },
      getOffset: {
        value: function getOffset() {
          return this.get_offset.apply(this, arguments);
        }
      },
      isDst: {
        value: function isDst() {
          return this.is_dst.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.VariantBuilder.prototype,
    {
      addValue: {
        value: function addValue() {
          return this.add_value.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Variant,
    {
      isObjectPath: {
        value: function isObjectPath() {
          return this.is_object_path.apply(this, arguments);
        }
      },
      isSignature: {
        value: function isSignature() {
          return this.is_signature.apply(this, arguments);
        }
      },
      newArray: {
        value: function newArray() {
          return this.new_array.apply(this, arguments);
        }
      },
      newBoolean: {
        value: function newBoolean() {
          return this.new_boolean.apply(this, arguments);
        }
      },
      newByte: {
        value: function newByte() {
          return this.new_byte.apply(this, arguments);
        }
      },
      newBytestringArray: {
        value: function newBytestringArray() {
          return this.new_bytestring_array.apply(this, arguments);
        }
      },
      newBytestring: {
        value: function newBytestring() {
          return this.new_bytestring.apply(this, arguments);
        }
      },
      newDictEntry: {
        value: function newDictEntry() {
          return this.new_dict_entry.apply(this, arguments);
        }
      },
      newDouble: {
        value: function newDouble() {
          return this.new_double.apply(this, arguments);
        }
      },
      newFixedArray: {
        value: function newFixedArray() {
          return this.new_fixed_array.apply(this, arguments);
        }
      },
      newFromBytes: {
        value: function newFromBytes() {
          return this.new_from_bytes.apply(this, arguments);
        }
      },
      newFromData: {
        value: function newFromData() {
          return this.new_from_data.apply(this, arguments);
        }
      },
      newHandle: {
        value: function newHandle() {
          return this.new_handle.apply(this, arguments);
        }
      },
      newInt16: {
        value: function newInt16() {
          return this.new_int16.apply(this, arguments);
        }
      },
      newInt32: {
        value: function newInt32() {
          return this.new_int32.apply(this, arguments);
        }
      },
      newInt64: {
        value: function newInt64() {
          return this.new_int64.apply(this, arguments);
        }
      },
      newMaybe: {
        value: function newMaybe() {
          return this.new_maybe.apply(this, arguments);
        }
      },
      newObjectPath: {
        value: function newObjectPath() {
          return this.new_object_path.apply(this, arguments);
        }
      },
      newObjv: {
        value: function newObjv() {
          return this.new_objv.apply(this, arguments);
        }
      },
      newSignature: {
        value: function newSignature() {
          return this.new_signature.apply(this, arguments);
        }
      },
      newString: {
        value: function newString() {
          return this.new_string.apply(this, arguments);
        }
      },
      newStrv: {
        value: function newStrv() {
          return this.new_strv.apply(this, arguments);
        }
      },
      newTuple: {
        value: function newTuple() {
          return this.new_tuple.apply(this, arguments);
        }
      },
      newUint16: {
        value: function newUint16() {
          return this.new_uint16.apply(this, arguments);
        }
      },
      newUint32: {
        value: function newUint32() {
          return this.new_uint32.apply(this, arguments);
        }
      },
      newUint64: {
        value: function newUint64() {
          return this.new_uint64.apply(this, arguments);
        }
      },
      newVariant: {
        value: function newVariant() {
          return this.new_variant.apply(this, arguments);
        }
      },
      parseErrorPrintContext: {
        value: function parseErrorPrintContext() {
          return this.parse_error_print_context.apply(this, arguments);
        }
      },
      parseErrorQuark: {
        value: function parseErrorQuark() {
          return this.parse_error_quark.apply(this, arguments);
        }
      },
      parserGetErrorQuark: {
        value: function parserGetErrorQuark() {
          return this.parser_get_error_quark.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.Variant.prototype,
    {
      checkFormatString: {
        value: function checkFormatString() {
          return this.check_format_string.apply(this, arguments);
        }
      },
      deepUnpack: {
        value: function deepUnpack() {
          return this.deep_unpack.apply(this, arguments);
        }
      },
      dupBytestringArray: {
        value: function dupBytestringArray() {
          return this.dup_bytestring_array.apply(this, arguments);
        }
      },
      dupBytestring: {
        value: function dupBytestring() {
          return this.dup_bytestring.apply(this, arguments);
        }
      },
      dupObjv: {
        value: function dupObjv() {
          return this.dup_objv.apply(this, arguments);
        }
      },
      dupString: {
        value: function dupString() {
          return this.dup_string.apply(this, arguments);
        }
      },
      dupStrv: {
        value: function dupStrv() {
          return this.dup_strv.apply(this, arguments);
        }
      },
      getBoolean: {
        value: function getBoolean() {
          return this.get_boolean.apply(this, arguments);
        }
      },
      getByte: {
        value: function getByte() {
          return this.get_byte.apply(this, arguments);
        }
      },
      getBytestringArray: {
        value: function getBytestringArray() {
          return this.get_bytestring_array.apply(this, arguments);
        }
      },
      getBytestring: {
        value: function getBytestring() {
          return this.get_bytestring.apply(this, arguments);
        }
      },
      getChildValue: {
        value: function getChildValue() {
          return this.get_child_value.apply(this, arguments);
        }
      },
      getDataAsBytes: {
        value: function getDataAsBytes() {
          return this.get_data_as_bytes.apply(this, arguments);
        }
      },
      getData: {
        value: function getData() {
          return this.get_data.apply(this, arguments);
        }
      },
      getDouble: {
        value: function getDouble() {
          return this.get_double.apply(this, arguments);
        }
      },
      getHandle: {
        value: function getHandle() {
          return this.get_handle.apply(this, arguments);
        }
      },
      getInt16: {
        value: function getInt16() {
          return this.get_int16.apply(this, arguments);
        }
      },
      getInt32: {
        value: function getInt32() {
          return this.get_int32.apply(this, arguments);
        }
      },
      getInt64: {
        value: function getInt64() {
          return this.get_int64.apply(this, arguments);
        }
      },
      getMaybe: {
        value: function getMaybe() {
          return this.get_maybe.apply(this, arguments);
        }
      },
      getNormalForm: {
        value: function getNormalForm() {
          return this.get_normal_form.apply(this, arguments);
        }
      },
      getObjv: {
        value: function getObjv() {
          return this.get_objv.apply(this, arguments);
        }
      },
      getSize: {
        value: function getSize() {
          return this.get_size.apply(this, arguments);
        }
      },
      getString: {
        value: function getString() {
          return this.get_string.apply(this, arguments);
        }
      },
      getStrv: {
        value: function getStrv() {
          return this.get_strv.apply(this, arguments);
        }
      },
      getType: {
        value: function getType() {
          return this.get_type.apply(this, arguments);
        }
      },
      getTypeString: {
        value: function getTypeString() {
          return this.get_type_string.apply(this, arguments);
        }
      },
      getUint16: {
        value: function getUint16() {
          return this.get_uint16.apply(this, arguments);
        }
      },
      getUint32: {
        value: function getUint32() {
          return this.get_uint32.apply(this, arguments);
        }
      },
      getUint64: {
        value: function getUint64() {
          return this.get_uint64.apply(this, arguments);
        }
      },
      getVariant: {
        value: function getVariant() {
          return this.get_variant.apply(this, arguments);
        }
      },
      isContainer: {
        value: function isContainer() {
          return this.is_container.apply(this, arguments);
        }
      },
      isFloating: {
        value: function isFloating() {
          return this.is_floating.apply(this, arguments);
        }
      },
      isNormalForm: {
        value: function isNormalForm() {
          return this.is_normal_form.apply(this, arguments);
        }
      },
      isOfType: {
        value: function isOfType() {
          return this.is_of_type.apply(this, arguments);
        }
      },
      lookupValue: {
        value: function lookupValue() {
          return this.lookup_value.apply(this, arguments);
        }
      },
      nChildren: {
        value: function nChildren() {
          return this.n_children.apply(this, arguments);
        }
      },
      refSink: {
        value: function refSink() {
          return this.ref_sink.apply(this, arguments);
        }
      },
      takeRef: {
        value: function takeRef() {
          return this.take_ref.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.VariantDict.prototype,
    {
      insertValue: {
        value: function insertValue() {
          return this.insert_value.apply(this, arguments);
        }
      },
      lookupValue: {
        value: function lookupValue() {
          return this.lookup_value.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.VariantType,
    {
      checked_: {
        value: function checked_() {
          return this.checked_.apply(this, arguments);
        }
      },
      newArray: {
        value: function newArray() {
          return this.new_array.apply(this, arguments);
        }
      },
      newDictEntry: {
        value: function newDictEntry() {
          return this.new_dict_entry.apply(this, arguments);
        }
      },
      newMaybe: {
        value: function newMaybe() {
          return this.new_maybe.apply(this, arguments);
        }
      },
      newTuple: {
        value: function newTuple() {
          return this.new_tuple.apply(this, arguments);
        }
      },
      stringIsValid: {
        value: function stringIsValid() {
          return this.string_is_valid.apply(this, arguments);
        }
      },
      stringScan: {
        value: function stringScan() {
          return this.string_scan.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GLib.VariantType.prototype,
    {
      dupString: {
        value: function dupString() {
          return this.dup_string.apply(this, arguments);
        }
      },
      getStringLength: {
        value: function getStringLength() {
          return this.get_string_length.apply(this, arguments);
        }
      },
      isArray: {
        value: function isArray() {
          return this.is_array.apply(this, arguments);
        }
      },
      isBasic: {
        value: function isBasic() {
          return this.is_basic.apply(this, arguments);
        }
      },
      isContainer: {
        value: function isContainer() {
          return this.is_container.apply(this, arguments);
        }
      },
      isDefinite: {
        value: function isDefinite() {
          return this.is_definite.apply(this, arguments);
        }
      },
      isDictEntry: {
        value: function isDictEntry() {
          return this.is_dict_entry.apply(this, arguments);
        }
      },
      isMaybe: {
        value: function isMaybe() {
          return this.is_maybe.apply(this, arguments);
        }
      },
      isSubtypeOf: {
        value: function isSubtypeOf() {
          return this.is_subtype_of.apply(this, arguments);
        }
      },
      isTuple: {
        value: function isTuple() {
          return this.is_tuple.apply(this, arguments);
        }
      },
      isVariant: {
        value: function isVariant() {
          return this.is_variant.apply(this, arguments);
        }
      },
      nItems: {
        value: function nItems() {
          return this.n_items.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GObject,
    {
      enumGetValueByName: {
        value: function enumGetValueByName() {
          return this.enum_get_value_by_name.apply(this, arguments);
        }
      },
      enumGetValueByNick: {
        value: function enumGetValueByNick() {
          return this.enum_get_value_by_nick.apply(this, arguments);
        }
      },
      enumGetValue: {
        value: function enumGetValue() {
          return this.enum_get_value.apply(this, arguments);
        }
      },
      flagsGetFirstValue: {
        value: function flagsGetFirstValue() {
          return this.flags_get_first_value.apply(this, arguments);
        }
      },
      flagsGetValueByName: {
        value: function flagsGetValueByName() {
          return this.flags_get_value_by_name.apply(this, arguments);
        }
      },
      flagsGetValueByNick: {
        value: function flagsGetValueByNick() {
          return this.flags_get_value_by_nick.apply(this, arguments);
        }
      },
      paramSpecBoolean: {
        value: function paramSpecBoolean() {
          return this.param_spec_boolean.apply(this, arguments);
        }
      },
      paramSpecBoxed: {
        value: function paramSpecBoxed() {
          return this.param_spec_boxed.apply(this, arguments);
        }
      },
      paramSpecChar: {
        value: function paramSpecChar() {
          return this.param_spec_char.apply(this, arguments);
        }
      },
      paramSpecDouble: {
        value: function paramSpecDouble() {
          return this.param_spec_double.apply(this, arguments);
        }
      },
      paramSpecEnum: {
        value: function paramSpecEnum() {
          return this.param_spec_enum.apply(this, arguments);
        }
      },
      paramSpecFlags: {
        value: function paramSpecFlags() {
          return this.param_spec_flags.apply(this, arguments);
        }
      },
      paramSpecFloat: {
        value: function paramSpecFloat() {
          return this.param_spec_float.apply(this, arguments);
        }
      },
      paramSpecGtype: {
        value: function paramSpecGtype() {
          return this.param_spec_gtype.apply(this, arguments);
        }
      },
      paramSpecInt64: {
        value: function paramSpecInt64() {
          return this.param_spec_int64.apply(this, arguments);
        }
      },
      paramSpecInt: {
        value: function paramSpecInt() {
          return this.param_spec_int.apply(this, arguments);
        }
      },
      paramSpecLong: {
        value: function paramSpecLong() {
          return this.param_spec_long.apply(this, arguments);
        }
      },
      paramSpecObject: {
        value: function paramSpecObject() {
          return this.param_spec_object.apply(this, arguments);
        }
      },
      paramSpecParam: {
        value: function paramSpecParam() {
          return this.param_spec_param.apply(this, arguments);
        }
      },
      paramSpecPointer: {
        value: function paramSpecPointer() {
          return this.param_spec_pointer.apply(this, arguments);
        }
      },
      paramSpecString: {
        value: function paramSpecString() {
          return this.param_spec_string.apply(this, arguments);
        }
      },
      paramSpecUchar: {
        value: function paramSpecUchar() {
          return this.param_spec_uchar.apply(this, arguments);
        }
      },
      paramSpecUint64: {
        value: function paramSpecUint64() {
          return this.param_spec_uint64.apply(this, arguments);
        }
      },
      paramSpecUint: {
        value: function paramSpecUint() {
          return this.param_spec_uint.apply(this, arguments);
        }
      },
      paramSpecUlong: {
        value: function paramSpecUlong() {
          return this.param_spec_ulong.apply(this, arguments);
        }
      },
      paramSpecUnichar: {
        value: function paramSpecUnichar() {
          return this.param_spec_unichar.apply(this, arguments);
        }
      },
      paramSpecVariant: {
        value: function paramSpecVariant() {
          return this.param_spec_variant.apply(this, arguments);
        }
      },
      paramValueConvert: {
        value: function paramValueConvert() {
          return this.param_value_convert.apply(this, arguments);
        }
      },
      paramValueDefaults: {
        value: function paramValueDefaults() {
          return this.param_value_defaults.apply(this, arguments);
        }
      },
      paramValuesCmp: {
        value: function paramValuesCmp() {
          return this.param_values_cmp.apply(this, arguments);
        }
      },
      paramValueSetDefault: {
        value: function paramValueSetDefault() {
          return this.param_value_set_default.apply(this, arguments);
        }
      },
      paramValueValidate: {
        value: function paramValueValidate() {
          return this.param_value_validate.apply(this, arguments);
        }
      },
      signalAccumulatorFirstWins: {
        value: function signalAccumulatorFirstWins() {
          return this.signal_accumulator_first_wins.apply(this, arguments);
        }
      },
      signalAccumulatorTrueHandled: {
        value: function signalAccumulatorTrueHandled() {
          return this.signal_accumulator_true_handled.apply(this, arguments);
        }
      },
      signalChainFromOverridden: {
        value: function signalChainFromOverridden() {
          return this.signal_chain_from_overridden.apply(this, arguments);
        }
      },
      signalConnectClosureById: {
        value: function signalConnectClosureById() {
          return this.signal_connect_closure_by_id.apply(this, arguments);
        }
      },
      signalConnectClosure: {
        value: function signalConnectClosure() {
          return this.signal_connect_closure.apply(this, arguments);
        }
      },
      signalEmitv: {
        value: function signalEmitv() {
          return this.signal_emitv.apply(this, arguments);
        }
      },
      signalGetInvocationHint: {
        value: function signalGetInvocationHint() {
          return this.signal_get_invocation_hint.apply(this, arguments);
        }
      },
      signalHandlerBlock: {
        value: function signalHandlerBlock() {
          return this.signal_handler_block.apply(this, arguments);
        }
      },
      signalHandlerDisconnect: {
        value: function signalHandlerDisconnect() {
          return this.signal_handler_disconnect.apply(this, arguments);
        }
      },
      signalHandlerFind: {
        value: function signalHandlerFind() {
          return this.signal_handler_find.apply(this, arguments);
        }
      },
      signalHandlerIsConnected: {
        value: function signalHandlerIsConnected() {
          return this.signal_handler_is_connected.apply(this, arguments);
        }
      },
      signalHandlersBlockMatched: {
        value: function signalHandlersBlockMatched() {
          return this.signal_handlers_block_matched.apply(this, arguments);
        }
      },
      signalHandlersDestroy: {
        value: function signalHandlersDestroy() {
          return this.signal_handlers_destroy.apply(this, arguments);
        }
      },
      signalHandlersDisconnectMatched: {
        value: function signalHandlersDisconnectMatched() {
          return this.signal_handlers_disconnect_matched.apply(this, arguments);
        }
      },
      signalHandlersUnblockMatched: {
        value: function signalHandlersUnblockMatched() {
          return this.signal_handlers_unblock_matched.apply(this, arguments);
        }
      },
      signalHandlerUnblock: {
        value: function signalHandlerUnblock() {
          return this.signal_handler_unblock.apply(this, arguments);
        }
      },
      signalHasHandlerPending: {
        value: function signalHasHandlerPending() {
          return this.signal_has_handler_pending.apply(this, arguments);
        }
      },
      signalListIds: {
        value: function signalListIds() {
          return this.signal_list_ids.apply(this, arguments);
        }
      },
      signalLookup: {
        value: function signalLookup() {
          return this.signal_lookup.apply(this, arguments);
        }
      },
      signalName: {
        value: function signalName() {
          return this.signal_name.apply(this, arguments);
        }
      },
      signalOverrideClassClosure: {
        value: function signalOverrideClassClosure() {
          return this.signal_override_class_closure.apply(this, arguments);
        }
      },
      signalParseName: {
        value: function signalParseName() {
          return this.signal_parse_name.apply(this, arguments);
        }
      },
      signalQuery: {
        value: function signalQuery() {
          return this.signal_query.apply(this, arguments);
        }
      },
      signalStopEmissionByName: {
        value: function signalStopEmissionByName() {
          return this.signal_stop_emission_by_name.apply(this, arguments);
        }
      },
      signalStopEmission: {
        value: function signalStopEmission() {
          return this.signal_stop_emission.apply(this, arguments);
        }
      },
      sourceSetClosure: {
        value: function sourceSetClosure() {
          return this.source_set_closure.apply(this, arguments);
        }
      },
      sourceSetDummyCallback: {
        value: function sourceSetDummyCallback() {
          return this.source_set_dummy_callback.apply(this, arguments);
        }
      },
      typeChildren: {
        value: function typeChildren() {
          return this.type_children.apply(this, arguments);
        }
      },
      typeDepth: {
        value: function typeDepth() {
          return this.type_depth.apply(this, arguments);
        }
      },
      typeEnsure: {
        value: function typeEnsure() {
          return this.type_ensure.apply(this, arguments);
        }
      },
      typeFromName: {
        value: function typeFromName() {
          return this.type_from_name.apply(this, arguments);
        }
      },
      typeFundamental: {
        value: function typeFundamental() {
          return this.type_fundamental.apply(this, arguments);
        }
      },
      typeFundamentalNext: {
        value: function typeFundamentalNext() {
          return this.type_fundamental_next.apply(this, arguments);
        }
      },
      typeGetTypeRegistrationSerial: {
        value: function typeGetTypeRegistrationSerial() {
          return this.type_get_type_registration_serial.apply(this, arguments);
        }
      },
      typeInterfaces: {
        value: function typeInterfaces() {
          return this.type_interfaces.apply(this, arguments);
        }
      },
      typeIsA: {
        value: function typeIsA() {
          return this.type_is_a.apply(this, arguments);
        }
      },
      typeName: {
        value: function typeName() {
          return this.type_name.apply(this, arguments);
        }
      },
      typeNextBase: {
        value: function typeNextBase() {
          return this.type_next_base.apply(this, arguments);
        }
      },
      typeParent: {
        value: function typeParent() {
          return this.type_parent.apply(this, arguments);
        }
      },
      typeQname: {
        value: function typeQname() {
          return this.type_qname.apply(this, arguments);
        }
      },
      typeQuery: {
        value: function typeQuery() {
          return this.type_query.apply(this, arguments);
        }
      },
      typeTestFlags: {
        value: function typeTestFlags() {
          return this.type_test_flags.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GObject.Binding.prototype,
    {
      getFlags: {
        value: function getFlags() {
          return this.get_flags.apply(this, arguments);
        }
      },
      getSource: {
        value: function getSource() {
          return this.get_source.apply(this, arguments);
        }
      },
      getSourceProperty: {
        value: function getSourceProperty() {
          return this.get_source_property.apply(this, arguments);
        }
      },
      getTarget: {
        value: function getTarget() {
          return this.get_target.apply(this, arguments);
        }
      },
      getTargetProperty: {
        value: function getTargetProperty() {
          return this.get_target_property.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GObject.Object,
    {
      interfaceFindProperty: {
        value: function interfaceFindProperty() {
          return this.interface_find_property.apply(this, arguments);
        }
      },
      interfaceListProperties: {
        value: function interfaceListProperties() {
          return this.interface_list_properties.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GObject.Object.prototype,
    {
      bindPropertyFull: {
        value: function bindPropertyFull() {
          return this.bind_property_full.apply(this, arguments);
        }
      },
      bindProperty: {
        value: function bindProperty() {
          return this.bind_property.apply(this, arguments);
        }
      },
      connectAfter: {
        value: function connectAfter() {
          return this.connect_after.apply(this, arguments);
        }
      },
      forceFloating: {
        value: function forceFloating() {
          return this.force_floating.apply(this, arguments);
        }
      },
      freezeNotify: {
        value: function freezeNotify() {
          return this.freeze_notify.apply(this, arguments);
        }
      },
      getProperty: {
        value: function getProperty() {
          return this.get_property.apply(this, arguments);
        }
      },
      isFloating: {
        value: function isFloating() {
          return this.is_floating.apply(this, arguments);
        }
      },
      notifyByPspec: {
        value: function notifyByPspec() {
          return this.notify_by_pspec.apply(this, arguments);
        }
      },
      replaceData: {
        value: function replaceData() {
          return this.replace_data.apply(this, arguments);
        }
      },
      runDispose: {
        value: function runDispose() {
          return this.run_dispose.apply(this, arguments);
        }
      },
      setProperty: {
        value: function setProperty() {
          return this.set_property.apply(this, arguments);
        }
      },
      thawNotify: {
        value: function thawNotify() {
          return this.thaw_notify.apply(this, arguments);
        }
      },
      watchClosure: {
        value: function watchClosure() {
          return this.watch_closure.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GObject.ParamSpec.prototype,
    {
      getBlurb: {
        value: function getBlurb() {
          return this.get_blurb.apply(this, arguments);
        }
      },
      getDefaultValue: {
        value: function getDefaultValue() {
          return this.get_default_value.apply(this, arguments);
        }
      },
      getName: {
        value: function getName() {
          return this.get_name.apply(this, arguments);
        }
      },
      getNick: {
        value: function getNick() {
          return this.get_nick.apply(this, arguments);
        }
      },
      getRedirectTarget: {
        value: function getRedirectTarget() {
          return this.get_redirect_target.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    GObject.ParamSpecTypeInfo.prototype,
    {
      instanceInit: {
        get: function () { return this.instance_init; },
        set: function (value) { this.instance_init = value; }
      },
      valuesCmp: {
        get: function () { return this.values_cmp; },
        set: function (value) { this.values_cmp = value; }
      },
      valueSetDefault: {
        get: function () { return this.value_set_default; },
        set: function (value) { this.value_set_default = value; }
      },
      valueValidate: {
        get: function () { return this.value_validate; },
        set: function (value) { this.value_validate = value; }
      }
    }
  );
}(this));