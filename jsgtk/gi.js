(function (exports) {'use strict';
  const
    Gio = imports.gi.Gio,
    GLib = imports.gi.GLib,
    GObject = imports.gi.GObject
  ;

  Object.defineProperties(
    Gio.Action.prototype,
    {
      changeState: {
        value: function changeState() { return this.change_state.apply(this, arguments); }
      },
      getEnabled: {
        value: function getEnabled() { return this.get_enabled.apply(this, arguments); }
      },
      getName: {
        value: function getName() { return this.get_name.apply(this, arguments); }
      },
      getParameterType: {
        value: function getParameterType() { return this.get_parameter_type.apply(this, arguments); }
      },
      getStateHint: {
        value: function getStateHint() { return this.get_state_hint.apply(this, arguments); }
      },
      getState: {
        value: function getState() { return this.get_state.apply(this, arguments); }
      },
      getStateType: {
        value: function getStateType() { return this.get_state_type.apply(this, arguments); }
      },
      nameIsValid: {
        get: function () { return this.name_is_valid; },
        set: function (value) { this.name_is_valid = value; }
      },
      parseDetailedName: {
        get: function () { return this.parse_detailed_name; },
        set: function (value) { this.parse_detailed_name = value; }
      },
      printDetailedName: {
        get: function () { return this.print_detailed_name; },
        set: function (value) { this.print_detailed_name = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.ActionEntry.prototype,
    {
      changeState: {
        get: function () { return this.change_state; },
        set: function (value) { this.change_state = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.ActionGroup.prototype,
    {
      actionAdded: {
        value: function actionAdded() { return this.action_added.apply(this, arguments); }
      },
      actionEnabledChanged: {
        value: function actionEnabledChanged() { return this.action_enabled_changed.apply(this, arguments); }
      },
      actionRemoved: {
        value: function actionRemoved() { return this.action_removed.apply(this, arguments); }
      },
      actionStateChanged: {
        value: function actionStateChanged() { return this.action_state_changed.apply(this, arguments); }
      },
      activateAction: {
        value: function activateAction() { return this.activate_action.apply(this, arguments); }
      },
      changeActionState: {
        value: function changeActionState() { return this.change_action_state.apply(this, arguments); }
      },
      getActionEnabled: {
        value: function getActionEnabled() { return this.get_action_enabled.apply(this, arguments); }
      },
      getActionParameterType: {
        value: function getActionParameterType() { return this.get_action_parameter_type.apply(this, arguments); }
      },
      getActionStateHint: {
        value: function getActionStateHint() { return this.get_action_state_hint.apply(this, arguments); }
      },
      getActionState: {
        value: function getActionState() { return this.get_action_state.apply(this, arguments); }
      },
      getActionStateType: {
        value: function getActionStateType() { return this.get_action_state_type.apply(this, arguments); }
      },
      hasAction: {
        value: function hasAction() { return this.has_action.apply(this, arguments); }
      },
      listActions: {
        value: function listActions() { return this.list_actions.apply(this, arguments); }
      },
      queryAction: {
        value: function queryAction() { return this.query_action.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.ActionMap.prototype,
    {
      addActionEntries: {
        value: function addActionEntries() { return this.add_action_entries.apply(this, arguments); }
      },
      addAction: {
        value: function addAction() { return this.add_action.apply(this, arguments); }
      },
      lookupAction: {
        value: function lookupAction() { return this.lookup_action.apply(this, arguments); }
      },
      removeAction: {
        value: function removeAction() { return this.remove_action.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.AppInfo.prototype,
    {
      addSupportsType: {
        value: function addSupportsType() { return this.add_supports_type.apply(this, arguments); }
      },
      canDelete: {
        value: function canDelete() { return this.can_delete.apply(this, arguments); }
      },
      canRemoveSupportsType: {
        value: function canRemoveSupportsType() { return this.can_remove_supports_type.apply(this, arguments); }
      },
      createFromCommandline: {
        get: function () { return this.create_from_commandline; },
        set: function (value) { this.create_from_commandline = value; }
      },
      getAllForType: {
        get: function () { return this.get_all_for_type; },
        set: function (value) { this.get_all_for_type = value; }
      },
      getAll: {
        get: function () { return this.get_all; },
        set: function (value) { this.get_all = value; }
      },
      getCommandline: {
        value: function getCommandline() { return this.get_commandline.apply(this, arguments); }
      },
      getDefaultForType: {
        get: function () { return this.get_default_for_type; },
        set: function (value) { this.get_default_for_type = value; }
      },
      getDefaultForUriScheme: {
        get: function () { return this.get_default_for_uri_scheme; },
        set: function (value) { this.get_default_for_uri_scheme = value; }
      },
      getDescription: {
        value: function getDescription() { return this.get_description.apply(this, arguments); }
      },
      getDisplayName: {
        value: function getDisplayName() { return this.get_display_name.apply(this, arguments); }
      },
      getExecutable: {
        value: function getExecutable() { return this.get_executable.apply(this, arguments); }
      },
      getFallbackForType: {
        get: function () { return this.get_fallback_for_type; },
        set: function (value) { this.get_fallback_for_type = value; }
      },
      getIcon: {
        value: function getIcon() { return this.get_icon.apply(this, arguments); }
      },
      getId: {
        value: function getId() { return this.get_id.apply(this, arguments); }
      },
      getName: {
        value: function getName() { return this.get_name.apply(this, arguments); }
      },
      getRecommendedForType: {
        get: function () { return this.get_recommended_for_type; },
        set: function (value) { this.get_recommended_for_type = value; }
      },
      getSupportedTypes: {
        value: function getSupportedTypes() { return this.get_supported_types.apply(this, arguments); }
      },
      launchDefaultForUri: {
        get: function () { return this.launch_default_for_uri; },
        set: function (value) { this.launch_default_for_uri = value; }
      },
      launchUris: {
        value: function launchUris() { return this.launch_uris.apply(this, arguments); }
      },
      removeSupportsType: {
        value: function removeSupportsType() { return this.remove_supports_type.apply(this, arguments); }
      },
      resetTypeAssociations: {
        get: function () { return this.reset_type_associations; },
        set: function (value) { this.reset_type_associations = value; }
      },
      setAsDefaultForExtension: {
        value: function setAsDefaultForExtension() { return this.set_as_default_for_extension.apply(this, arguments); }
      },
      setAsDefaultForType: {
        value: function setAsDefaultForType() { return this.set_as_default_for_type.apply(this, arguments); }
      },
      setAsLastUsedForType: {
        value: function setAsLastUsedForType() { return this.set_as_last_used_for_type.apply(this, arguments); }
      },
      shouldShow: {
        value: function shouldShow() { return this.should_show.apply(this, arguments); }
      },
      supportsFiles: {
        value: function supportsFiles() { return this.supports_files.apply(this, arguments); }
      },
      supportsUris: {
        value: function supportsUris() { return this.supports_uris.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.AppLaunchContext.prototype,
    {
      getDisplay: {
        value: function getDisplay() { return this.get_display.apply(this, arguments); }
      },
      getEnvironment: {
        value: function getEnvironment() { return this.get_environment.apply(this, arguments); }
      },
      getStartupNotifyId: {
        value: function getStartupNotifyId() { return this.get_startup_notify_id.apply(this, arguments); }
      },
      launchFailed: {
        value: function launchFailed() { return this.launch_failed.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Application.prototype,
    {
      addMainOptionEntries: {
        value: function addMainOptionEntries() { return this.add_main_option_entries.apply(this, arguments); }
      },
      addOptionGroup: {
        value: function addOptionGroup() { return this.add_option_group.apply(this, arguments); }
      },
      getApplicationId: {
        value: function getApplicationId() { return this.get_application_id.apply(this, arguments); }
      },
      getDbusConnection: {
        value: function getDbusConnection() { return this.get_dbus_connection.apply(this, arguments); }
      },
      getDbusObjectPath: {
        value: function getDbusObjectPath() { return this.get_dbus_object_path.apply(this, arguments); }
      },
      getDefault: {
        get: function () { return this.get_default; },
        set: function (value) { this.get_default = value; }
      },
      getFlags: {
        value: function getFlags() { return this.get_flags.apply(this, arguments); }
      },
      getInactivityTimeout: {
        value: function getInactivityTimeout() { return this.get_inactivity_timeout.apply(this, arguments); }
      },
      getIsRegistered: {
        value: function getIsRegistered() { return this.get_is_registered.apply(this, arguments); }
      },
      getIsRemote: {
        value: function getIsRemote() { return this.get_is_remote.apply(this, arguments); }
      },
      idIsValid: {
        get: function () { return this.id_is_valid; },
        set: function (value) { this.id_is_valid = value; }
      },
      markBusy: {
        value: function markBusy() { return this.mark_busy.apply(this, arguments); }
      },
      sendNotification: {
        value: function sendNotification() { return this.send_notification.apply(this, arguments); }
      },
      setActionGroup: {
        value: function setActionGroup() { return this.set_action_group.apply(this, arguments); }
      },
      setApplicationId: {
        value: function setApplicationId() { return this.set_application_id.apply(this, arguments); }
      },
      setDefault: {
        value: function setDefault() { return this.set_default.apply(this, arguments); }
      },
      setFlags: {
        value: function setFlags() { return this.set_flags.apply(this, arguments); }
      },
      setInactivityTimeout: {
        value: function setInactivityTimeout() { return this.set_inactivity_timeout.apply(this, arguments); }
      },
      unmarkBusy: {
        value: function unmarkBusy() { return this.unmark_busy.apply(this, arguments); }
      },
      withdrawNotification: {
        value: function withdrawNotification() { return this.withdraw_notification.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.ApplicationCommandLine.prototype,
    {
      createFileForArg: {
        value: function createFileForArg() { return this.create_file_for_arg.apply(this, arguments); }
      },
      getArguments: {
        value: function getArguments() { return this.get_arguments.apply(this, arguments); }
      },
      getCwd: {
        value: function getCwd() { return this.get_cwd.apply(this, arguments); }
      },
      getEnviron: {
        value: function getEnviron() { return this.get_environ.apply(this, arguments); }
      },
      getExitStatus: {
        value: function getExitStatus() { return this.get_exit_status.apply(this, arguments); }
      },
      getIsRemote: {
        value: function getIsRemote() { return this.get_is_remote.apply(this, arguments); }
      },
      getOptionsDict: {
        value: function getOptionsDict() { return this.get_options_dict.apply(this, arguments); }
      },
      getPlatformData: {
        value: function getPlatformData() { return this.get_platform_data.apply(this, arguments); }
      },
      getStdin: {
        value: function getStdin() { return this.get_stdin.apply(this, arguments); }
      },
      setExitStatus: {
        value: function setExitStatus() { return this.set_exit_status.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.AsyncInitable.prototype,
    {
      initAsync: {
        value: function initAsync() { return this.init_async.apply(this, arguments); }
      },
      initFinish: {
        value: function initFinish() { return this.init_finish.apply(this, arguments); }
      },
      newFinish: {
        value: function newFinish() { return this.new_finish.apply(this, arguments); }
      },
      newvAsync: {
        get: function () { return this.newv_async; },
        set: function (value) { this.newv_async = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.AsyncResult.prototype,
    {
      getSourceObject: {
        value: function getSourceObject() { return this.get_source_object.apply(this, arguments); }
      },
      getUserData: {
        value: function getUserData() { return this.get_user_data.apply(this, arguments); }
      },
      isTagged: {
        value: function isTagged() { return this.is_tagged.apply(this, arguments); }
      },
      legacyPropagateError: {
        value: function legacyPropagateError() { return this.legacy_propagate_error.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.BufferedInputStream.prototype,
    {
      fillAsync: {
        value: function fillAsync() { return this.fill_async.apply(this, arguments); }
      },
      fillFinish: {
        value: function fillFinish() { return this.fill_finish.apply(this, arguments); }
      },
      getAvailable: {
        value: function getAvailable() { return this.get_available.apply(this, arguments); }
      },
      getBufferSize: {
        value: function getBufferSize() { return this.get_buffer_size.apply(this, arguments); }
      },
      newSized: {
        get: function () { return this.new_sized; },
        set: function (value) { this.new_sized = value; }
      },
      peekBuffer: {
        value: function peekBuffer() { return this.peek_buffer.apply(this, arguments); }
      },
      readByte: {
        value: function readByte() { return this.read_byte.apply(this, arguments); }
      },
      setBufferSize: {
        value: function setBufferSize() { return this.set_buffer_size.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.BufferedOutputStream.prototype,
    {
      getAutoGrow: {
        value: function getAutoGrow() { return this.get_auto_grow.apply(this, arguments); }
      },
      getBufferSize: {
        value: function getBufferSize() { return this.get_buffer_size.apply(this, arguments); }
      },
      newSized: {
        get: function () { return this.new_sized; },
        set: function (value) { this.new_sized = value; }
      },
      setAutoGrow: {
        value: function setAutoGrow() { return this.set_auto_grow.apply(this, arguments); }
      },
      setBufferSize: {
        value: function setBufferSize() { return this.set_buffer_size.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.BytesIcon.prototype,
    {
      getBytes: {
        value: function getBytes() { return this.get_bytes.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Cancellable.prototype,
    {
      getCurrent: {
        get: function () { return this.get_current; },
        set: function (value) { this.get_current = value; }
      },
      getFd: {
        value: function getFd() { return this.get_fd.apply(this, arguments); }
      },
      isCancelled: {
        value: function isCancelled() { return this.is_cancelled.apply(this, arguments); }
      },
      makePollfd: {
        value: function makePollfd() { return this.make_pollfd.apply(this, arguments); }
      },
      popCurrent: {
        value: function popCurrent() { return this.pop_current.apply(this, arguments); }
      },
      pushCurrent: {
        value: function pushCurrent() { return this.push_current.apply(this, arguments); }
      },
      releaseFd: {
        value: function releaseFd() { return this.release_fd.apply(this, arguments); }
      },
      setErrorIfCancelled: {
        value: function setErrorIfCancelled() { return this.set_error_if_cancelled.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.CharsetConverter.prototype,
    {
      getNumFallbacks: {
        value: function getNumFallbacks() { return this.get_num_fallbacks.apply(this, arguments); }
      },
      getUseFallback: {
        value: function getUseFallback() { return this.get_use_fallback.apply(this, arguments); }
      },
      setUseFallback: {
        value: function setUseFallback() { return this.set_use_fallback.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.ConverterInputStream.prototype,
    {
      getConverter: {
        value: function getConverter() { return this.get_converter.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.ConverterOutputStream.prototype,
    {
      getConverter: {
        value: function getConverter() { return this.get_converter.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Credentials.prototype,
    {
      getUnixPid: {
        value: function getUnixPid() { return this.get_unix_pid.apply(this, arguments); }
      },
      getUnixUser: {
        value: function getUnixUser() { return this.get_unix_user.apply(this, arguments); }
      },
      isSameUser: {
        value: function isSameUser() { return this.is_same_user.apply(this, arguments); }
      },
      setNative: {
        value: function setNative() { return this.set_native.apply(this, arguments); }
      },
      setUnixUser: {
        value: function setUnixUser() { return this.set_unix_user.apply(this, arguments); }
      },
      toString: {
        value: function toString() { return this.to_string.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DataInputStream.prototype,
    {
      getByteOrder: {
        value: function getByteOrder() { return this.get_byte_order.apply(this, arguments); }
      },
      getNewlineType: {
        value: function getNewlineType() { return this.get_newline_type.apply(this, arguments); }
      },
      readByte: {
        value: function readByte() { return this.read_byte.apply(this, arguments); }
      },
      readInt16: {
        value: function readInt16() { return this.read_int16.apply(this, arguments); }
      },
      readInt32: {
        value: function readInt32() { return this.read_int32.apply(this, arguments); }
      },
      readInt64: {
        value: function readInt64() { return this.read_int64.apply(this, arguments); }
      },
      readLineAsync: {
        value: function readLineAsync() { return this.read_line_async.apply(this, arguments); }
      },
      readLineFinish: {
        value: function readLineFinish() { return this.read_line_finish.apply(this, arguments); }
      },
      readLineFinishUtf8: {
        value: function readLineFinishUtf8() { return this.read_line_finish_utf8.apply(this, arguments); }
      },
      readLine: {
        value: function readLine() { return this.read_line.apply(this, arguments); }
      },
      readLineUtf8: {
        value: function readLineUtf8() { return this.read_line_utf8.apply(this, arguments); }
      },
      readUint16: {
        value: function readUint16() { return this.read_uint16.apply(this, arguments); }
      },
      readUint32: {
        value: function readUint32() { return this.read_uint32.apply(this, arguments); }
      },
      readUint64: {
        value: function readUint64() { return this.read_uint64.apply(this, arguments); }
      },
      readUntilAsync: {
        value: function readUntilAsync() { return this.read_until_async.apply(this, arguments); }
      },
      readUntilFinish: {
        value: function readUntilFinish() { return this.read_until_finish.apply(this, arguments); }
      },
      readUntil: {
        value: function readUntil() { return this.read_until.apply(this, arguments); }
      },
      readUptoAsync: {
        value: function readUptoAsync() { return this.read_upto_async.apply(this, arguments); }
      },
      readUptoFinish: {
        value: function readUptoFinish() { return this.read_upto_finish.apply(this, arguments); }
      },
      readUpto: {
        value: function readUpto() { return this.read_upto.apply(this, arguments); }
      },
      setByteOrder: {
        value: function setByteOrder() { return this.set_byte_order.apply(this, arguments); }
      },
      setNewlineType: {
        value: function setNewlineType() { return this.set_newline_type.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DataOutputStream.prototype,
    {
      getByteOrder: {
        value: function getByteOrder() { return this.get_byte_order.apply(this, arguments); }
      },
      putByte: {
        value: function putByte() { return this.put_byte.apply(this, arguments); }
      },
      putInt16: {
        value: function putInt16() { return this.put_int16.apply(this, arguments); }
      },
      putInt32: {
        value: function putInt32() { return this.put_int32.apply(this, arguments); }
      },
      putInt64: {
        value: function putInt64() { return this.put_int64.apply(this, arguments); }
      },
      putString: {
        value: function putString() { return this.put_string.apply(this, arguments); }
      },
      putUint16: {
        value: function putUint16() { return this.put_uint16.apply(this, arguments); }
      },
      putUint32: {
        value: function putUint32() { return this.put_uint32.apply(this, arguments); }
      },
      putUint64: {
        value: function putUint64() { return this.put_uint64.apply(this, arguments); }
      },
      setByteOrder: {
        value: function setByteOrder() { return this.set_byte_order.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusAuthObserver.prototype,
    {
      allowMechanism: {
        value: function allowMechanism() { return this.allow_mechanism.apply(this, arguments); }
      },
      authorizeAuthenticatedPeer: {
        value: function authorizeAuthenticatedPeer() { return this.authorize_authenticated_peer.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusConnection.prototype,
    {
      addFilter: {
        value: function addFilter() { return this.add_filter.apply(this, arguments); }
      },
      callFinish: {
        value: function callFinish() { return this.call_finish.apply(this, arguments); }
      },
      callSync: {
        value: function callSync() { return this.call_sync.apply(this, arguments); }
      },
      callWithUnixFdListFinish: {
        value: function callWithUnixFdListFinish() { return this.call_with_unix_fd_list_finish.apply(this, arguments); }
      },
      callWithUnixFdList: {
        value: function callWithUnixFdList() { return this.call_with_unix_fd_list.apply(this, arguments); }
      },
      callWithUnixFdListSync: {
        value: function callWithUnixFdListSync() { return this.call_with_unix_fd_list_sync.apply(this, arguments); }
      },
      closeFinish: {
        value: function closeFinish() { return this.close_finish.apply(this, arguments); }
      },
      closeSync: {
        value: function closeSync() { return this.close_sync.apply(this, arguments); }
      },
      emitSignal: {
        value: function emitSignal() { return this.emit_signal.apply(this, arguments); }
      },
      exportActionGroup: {
        value: function exportActionGroup() { return this.export_action_group.apply(this, arguments); }
      },
      exportMenuModel: {
        value: function exportMenuModel() { return this.export_menu_model.apply(this, arguments); }
      },
      flushFinish: {
        value: function flushFinish() { return this.flush_finish.apply(this, arguments); }
      },
      flushSync: {
        value: function flushSync() { return this.flush_sync.apply(this, arguments); }
      },
      getCapabilities: {
        value: function getCapabilities() { return this.get_capabilities.apply(this, arguments); }
      },
      getExitOnClose: {
        value: function getExitOnClose() { return this.get_exit_on_close.apply(this, arguments); }
      },
      getGuid: {
        value: function getGuid() { return this.get_guid.apply(this, arguments); }
      },
      getLastSerial: {
        value: function getLastSerial() { return this.get_last_serial.apply(this, arguments); }
      },
      getPeerCredentials: {
        value: function getPeerCredentials() { return this.get_peer_credentials.apply(this, arguments); }
      },
      getStream: {
        value: function getStream() { return this.get_stream.apply(this, arguments); }
      },
      getUniqueName: {
        value: function getUniqueName() { return this.get_unique_name.apply(this, arguments); }
      },
      isClosed: {
        value: function isClosed() { return this.is_closed.apply(this, arguments); }
      },
      newFinish: {
        get: function () { return this.new_finish; },
        set: function (value) { this.new_finish = value; }
      },
      newForAddressFinish: {
        get: function () { return this.new_for_address_finish; },
        set: function (value) { this.new_for_address_finish = value; }
      },
      newForAddress: {
        get: function () { return this.new_for_address; },
        set: function (value) { this.new_for_address = value; }
      },
      newForAddressSync: {
        get: function () { return this.new_for_address_sync; },
        set: function (value) { this.new_for_address_sync = value; }
      },
      newSync: {
        get: function () { return this.new_sync; },
        set: function (value) { this.new_sync = value; }
      },
      registerObject: {
        value: function registerObject() { return this.register_object.apply(this, arguments); }
      },
      registerSubtree: {
        value: function registerSubtree() { return this.register_subtree.apply(this, arguments); }
      },
      removeFilter: {
        value: function removeFilter() { return this.remove_filter.apply(this, arguments); }
      },
      sendMessage: {
        value: function sendMessage() { return this.send_message.apply(this, arguments); }
      },
      sendMessageWithReplyFinish: {
        value: function sendMessageWithReplyFinish() { return this.send_message_with_reply_finish.apply(this, arguments); }
      },
      sendMessageWithReply: {
        value: function sendMessageWithReply() { return this.send_message_with_reply.apply(this, arguments); }
      },
      sendMessageWithReplySync: {
        value: function sendMessageWithReplySync() { return this.send_message_with_reply_sync.apply(this, arguments); }
      },
      setExitOnClose: {
        value: function setExitOnClose() { return this.set_exit_on_close.apply(this, arguments); }
      },
      signalSubscribe: {
        value: function signalSubscribe() { return this.signal_subscribe.apply(this, arguments); }
      },
      signalUnsubscribe: {
        value: function signalUnsubscribe() { return this.signal_unsubscribe.apply(this, arguments); }
      },
      startMessageProcessing: {
        value: function startMessageProcessing() { return this.start_message_processing.apply(this, arguments); }
      },
      unexportActionGroup: {
        value: function unexportActionGroup() { return this.unexport_action_group.apply(this, arguments); }
      },
      unexportMenuModel: {
        value: function unexportMenuModel() { return this.unexport_menu_model.apply(this, arguments); }
      },
      unregisterObject: {
        value: function unregisterObject() { return this.unregister_object.apply(this, arguments); }
      },
      unregisterSubtree: {
        value: function unregisterSubtree() { return this.unregister_subtree.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusError.prototype,
    {
      encodeGerror: {
        get: function () { return this.encode_gerror; },
        set: function (value) { this.encode_gerror = value; }
      },
      getRemoteError: {
        get: function () { return this.get_remote_error; },
        set: function (value) { this.get_remote_error = value; }
      },
      isRemoteError: {
        get: function () { return this.is_remote_error; },
        set: function (value) { this.is_remote_error = value; }
      },
      newForDbusError: {
        get: function () { return this.new_for_dbus_error; },
        set: function (value) { this.new_for_dbus_error = value; }
      },
      registerErrorDomain: {
        get: function () { return this.register_error_domain; },
        set: function (value) { this.register_error_domain = value; }
      },
      registerError: {
        get: function () { return this.register_error; },
        set: function (value) { this.register_error = value; }
      },
      stripRemoteError: {
        get: function () { return this.strip_remote_error; },
        set: function (value) { this.strip_remote_error = value; }
      },
      unregisterError: {
        get: function () { return this.unregister_error; },
        set: function (value) { this.unregister_error = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusInterface.prototype,
    {
      getInfo: {
        value: function getInfo() { return this.get_info.apply(this, arguments); }
      },
      getObject: {
        value: function getObject() { return this.get_object.apply(this, arguments); }
      },
      setObject: {
        value: function setObject() { return this.set_object.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusInterfaceInfo.prototype,
    {
      cacheBuild: {
        value: function cacheBuild() { return this.cache_build.apply(this, arguments); }
      },
      cacheRelease: {
        value: function cacheRelease() { return this.cache_release.apply(this, arguments); }
      },
      generateXml: {
        value: function generateXml() { return this.generate_xml.apply(this, arguments); }
      },
      lookupMethod: {
        value: function lookupMethod() { return this.lookup_method.apply(this, arguments); }
      },
      lookupProperty: {
        value: function lookupProperty() { return this.lookup_property.apply(this, arguments); }
      },
      lookupSignal: {
        value: function lookupSignal() { return this.lookup_signal.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusInterfaceSkeleton.prototype,
    {
      getConnection: {
        value: function getConnection() { return this.get_connection.apply(this, arguments); }
      },
      getConnections: {
        value: function getConnections() { return this.get_connections.apply(this, arguments); }
      },
      getFlags: {
        value: function getFlags() { return this.get_flags.apply(this, arguments); }
      },
      getInfo: {
        value: function getInfo() { return this.get_info.apply(this, arguments); }
      },
      getObjectPath: {
        value: function getObjectPath() { return this.get_object_path.apply(this, arguments); }
      },
      getProperties: {
        value: function getProperties() { return this.get_properties.apply(this, arguments); }
      },
      hasConnection: {
        value: function hasConnection() { return this.has_connection.apply(this, arguments); }
      },
      setFlags: {
        value: function setFlags() { return this.set_flags.apply(this, arguments); }
      },
      unexportFromConnection: {
        value: function unexportFromConnection() { return this.unexport_from_connection.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusMessage.prototype,
    {
      bytesNeeded: {
        get: function () { return this.bytes_needed; },
        set: function (value) { this.bytes_needed = value; }
      },
      getArg0: {
        value: function getArg0() { return this.get_arg0.apply(this, arguments); }
      },
      getBody: {
        value: function getBody() { return this.get_body.apply(this, arguments); }
      },
      getByteOrder: {
        value: function getByteOrder() { return this.get_byte_order.apply(this, arguments); }
      },
      getDestination: {
        value: function getDestination() { return this.get_destination.apply(this, arguments); }
      },
      getErrorName: {
        value: function getErrorName() { return this.get_error_name.apply(this, arguments); }
      },
      getFlags: {
        value: function getFlags() { return this.get_flags.apply(this, arguments); }
      },
      getHeaderFields: {
        value: function getHeaderFields() { return this.get_header_fields.apply(this, arguments); }
      },
      getHeader: {
        value: function getHeader() { return this.get_header.apply(this, arguments); }
      },
      getInterface: {
        value: function getInterface() { return this.get_interface.apply(this, arguments); }
      },
      getLocked: {
        value: function getLocked() { return this.get_locked.apply(this, arguments); }
      },
      getMember: {
        value: function getMember() { return this.get_member.apply(this, arguments); }
      },
      getMessageType: {
        value: function getMessageType() { return this.get_message_type.apply(this, arguments); }
      },
      getNumUnixFds: {
        value: function getNumUnixFds() { return this.get_num_unix_fds.apply(this, arguments); }
      },
      getPath: {
        value: function getPath() { return this.get_path.apply(this, arguments); }
      },
      getReplySerial: {
        value: function getReplySerial() { return this.get_reply_serial.apply(this, arguments); }
      },
      getSender: {
        value: function getSender() { return this.get_sender.apply(this, arguments); }
      },
      getSerial: {
        value: function getSerial() { return this.get_serial.apply(this, arguments); }
      },
      getSignature: {
        value: function getSignature() { return this.get_signature.apply(this, arguments); }
      },
      getUnixFdList: {
        value: function getUnixFdList() { return this.get_unix_fd_list.apply(this, arguments); }
      },
      newFromBlob: {
        get: function () { return this.new_from_blob; },
        set: function (value) { this.new_from_blob = value; }
      },
      newMethodCall: {
        get: function () { return this.new_method_call; },
        set: function (value) { this.new_method_call = value; }
      },
      newMethodErrorLiteral: {
        value: function newMethodErrorLiteral() { return this.new_method_error_literal.apply(this, arguments); }
      },
      newMethodReply: {
        value: function newMethodReply() { return this.new_method_reply.apply(this, arguments); }
      },
      newSignal: {
        get: function () { return this.new_signal; },
        set: function (value) { this.new_signal = value; }
      },
      setBody: {
        value: function setBody() { return this.set_body.apply(this, arguments); }
      },
      setByteOrder: {
        value: function setByteOrder() { return this.set_byte_order.apply(this, arguments); }
      },
      setDestination: {
        value: function setDestination() { return this.set_destination.apply(this, arguments); }
      },
      setErrorName: {
        value: function setErrorName() { return this.set_error_name.apply(this, arguments); }
      },
      setFlags: {
        value: function setFlags() { return this.set_flags.apply(this, arguments); }
      },
      setHeader: {
        value: function setHeader() { return this.set_header.apply(this, arguments); }
      },
      setInterface: {
        value: function setInterface() { return this.set_interface.apply(this, arguments); }
      },
      setMember: {
        value: function setMember() { return this.set_member.apply(this, arguments); }
      },
      setMessageType: {
        value: function setMessageType() { return this.set_message_type.apply(this, arguments); }
      },
      setNumUnixFds: {
        value: function setNumUnixFds() { return this.set_num_unix_fds.apply(this, arguments); }
      },
      setPath: {
        value: function setPath() { return this.set_path.apply(this, arguments); }
      },
      setReplySerial: {
        value: function setReplySerial() { return this.set_reply_serial.apply(this, arguments); }
      },
      setSender: {
        value: function setSender() { return this.set_sender.apply(this, arguments); }
      },
      setSerial: {
        value: function setSerial() { return this.set_serial.apply(this, arguments); }
      },
      setSignature: {
        value: function setSignature() { return this.set_signature.apply(this, arguments); }
      },
      setUnixFdList: {
        value: function setUnixFdList() { return this.set_unix_fd_list.apply(this, arguments); }
      },
      toBlob: {
        value: function toBlob() { return this.to_blob.apply(this, arguments); }
      },
      toGerror: {
        value: function toGerror() { return this.to_gerror.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusMethodInvocation.prototype,
    {
      getConnection: {
        value: function getConnection() { return this.get_connection.apply(this, arguments); }
      },
      getInterfaceName: {
        value: function getInterfaceName() { return this.get_interface_name.apply(this, arguments); }
      },
      getMessage: {
        value: function getMessage() { return this.get_message.apply(this, arguments); }
      },
      getMethodInfo: {
        value: function getMethodInfo() { return this.get_method_info.apply(this, arguments); }
      },
      getMethodName: {
        value: function getMethodName() { return this.get_method_name.apply(this, arguments); }
      },
      getObjectPath: {
        value: function getObjectPath() { return this.get_object_path.apply(this, arguments); }
      },
      getParameters: {
        value: function getParameters() { return this.get_parameters.apply(this, arguments); }
      },
      getPropertyInfo: {
        value: function getPropertyInfo() { return this.get_property_info.apply(this, arguments); }
      },
      getSender: {
        value: function getSender() { return this.get_sender.apply(this, arguments); }
      },
      returnDbusError: {
        value: function returnDbusError() { return this.return_dbus_error.apply(this, arguments); }
      },
      returnErrorLiteral: {
        value: function returnErrorLiteral() { return this.return_error_literal.apply(this, arguments); }
      },
      returnGerror: {
        value: function returnGerror() { return this.return_gerror.apply(this, arguments); }
      },
      returnValue: {
        value: function returnValue() { return this.return_value.apply(this, arguments); }
      },
      returnValueWithUnixFdList: {
        value: function returnValueWithUnixFdList() { return this.return_value_with_unix_fd_list.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusNodeInfo.prototype,
    {
      generateXml: {
        value: function generateXml() { return this.generate_xml.apply(this, arguments); }
      },
      lookupInterface: {
        value: function lookupInterface() { return this.lookup_interface.apply(this, arguments); }
      },
      newForXml: {
        get: function () { return this.new_for_xml; },
        set: function (value) { this.new_for_xml = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusObject.prototype,
    {
      getInterface: {
        value: function getInterface() { return this.get_interface.apply(this, arguments); }
      },
      getInterfaces: {
        value: function getInterfaces() { return this.get_interfaces.apply(this, arguments); }
      },
      getObjectPath: {
        value: function getObjectPath() { return this.get_object_path.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusObjectManagerClient.prototype,
    {
      getConnection: {
        value: function getConnection() { return this.get_connection.apply(this, arguments); }
      },
      getFlags: {
        value: function getFlags() { return this.get_flags.apply(this, arguments); }
      },
      getNameOwner: {
        value: function getNameOwner() { return this.get_name_owner.apply(this, arguments); }
      },
      getName: {
        value: function getName() { return this.get_name.apply(this, arguments); }
      },
      newFinish: {
        get: function () { return this.new_finish; },
        set: function (value) { this.new_finish = value; }
      },
      newForBusFinish: {
        get: function () { return this.new_for_bus_finish; },
        set: function (value) { this.new_for_bus_finish = value; }
      },
      newForBus: {
        get: function () { return this.new_for_bus; },
        set: function (value) { this.new_for_bus = value; }
      },
      newForBusSync: {
        get: function () { return this.new_for_bus_sync; },
        set: function (value) { this.new_for_bus_sync = value; }
      },
      newSync: {
        get: function () { return this.new_sync; },
        set: function (value) { this.new_sync = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusObjectManager.prototype,
    {
      getInterface: {
        value: function getInterface() { return this.get_interface.apply(this, arguments); }
      },
      getObject: {
        value: function getObject() { return this.get_object.apply(this, arguments); }
      },
      getObjectPath: {
        value: function getObjectPath() { return this.get_object_path.apply(this, arguments); }
      },
      getObjects: {
        value: function getObjects() { return this.get_objects.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusObjectManagerServer.prototype,
    {
      exportUniquely: {
        value: function exportUniquely() { return this.export_uniquely.apply(this, arguments); }
      },
      getConnection: {
        value: function getConnection() { return this.get_connection.apply(this, arguments); }
      },
      isExported: {
        value: function isExported() { return this.is_exported.apply(this, arguments); }
      },
      setConnection: {
        value: function setConnection() { return this.set_connection.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusObjectProxy.prototype,
    {
      getConnection: {
        value: function getConnection() { return this.get_connection.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusObjectSkeleton.prototype,
    {
      addInterface: {
        value: function addInterface() { return this.add_interface.apply(this, arguments); }
      },
      removeInterfaceByName: {
        value: function removeInterfaceByName() { return this.remove_interface_by_name.apply(this, arguments); }
      },
      removeInterface: {
        value: function removeInterface() { return this.remove_interface.apply(this, arguments); }
      },
      setObjectPath: {
        value: function setObjectPath() { return this.set_object_path.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusProxy.prototype,
    {
      callFinish: {
        value: function callFinish() { return this.call_finish.apply(this, arguments); }
      },
      callSync: {
        value: function callSync() { return this.call_sync.apply(this, arguments); }
      },
      callWithUnixFdListFinish: {
        value: function callWithUnixFdListFinish() { return this.call_with_unix_fd_list_finish.apply(this, arguments); }
      },
      callWithUnixFdList: {
        value: function callWithUnixFdList() { return this.call_with_unix_fd_list.apply(this, arguments); }
      },
      callWithUnixFdListSync: {
        value: function callWithUnixFdListSync() { return this.call_with_unix_fd_list_sync.apply(this, arguments); }
      },
      getCachedPropertyNames: {
        value: function getCachedPropertyNames() { return this.get_cached_property_names.apply(this, arguments); }
      },
      getCachedProperty: {
        value: function getCachedProperty() { return this.get_cached_property.apply(this, arguments); }
      },
      getConnection: {
        value: function getConnection() { return this.get_connection.apply(this, arguments); }
      },
      getDefaultTimeout: {
        value: function getDefaultTimeout() { return this.get_default_timeout.apply(this, arguments); }
      },
      getFlags: {
        value: function getFlags() { return this.get_flags.apply(this, arguments); }
      },
      getInterfaceInfo: {
        value: function getInterfaceInfo() { return this.get_interface_info.apply(this, arguments); }
      },
      getInterfaceName: {
        value: function getInterfaceName() { return this.get_interface_name.apply(this, arguments); }
      },
      getNameOwner: {
        value: function getNameOwner() { return this.get_name_owner.apply(this, arguments); }
      },
      getName: {
        value: function getName() { return this.get_name.apply(this, arguments); }
      },
      getObjectPath: {
        value: function getObjectPath() { return this.get_object_path.apply(this, arguments); }
      },
      newFinish: {
        get: function () { return this.new_finish; },
        set: function (value) { this.new_finish = value; }
      },
      newForBusFinish: {
        get: function () { return this.new_for_bus_finish; },
        set: function (value) { this.new_for_bus_finish = value; }
      },
      newForBus: {
        get: function () { return this.new_for_bus; },
        set: function (value) { this.new_for_bus = value; }
      },
      newForBusSync: {
        get: function () { return this.new_for_bus_sync; },
        set: function (value) { this.new_for_bus_sync = value; }
      },
      newSync: {
        get: function () { return this.new_sync; },
        set: function (value) { this.new_sync = value; }
      },
      setCachedProperty: {
        value: function setCachedProperty() { return this.set_cached_property.apply(this, arguments); }
      },
      setDefaultTimeout: {
        value: function setDefaultTimeout() { return this.set_default_timeout.apply(this, arguments); }
      },
      setInterfaceInfo: {
        value: function setInterfaceInfo() { return this.set_interface_info.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.DBusServer.prototype,
    {
      getClientAddress: {
        value: function getClientAddress() { return this.get_client_address.apply(this, arguments); }
      },
      getFlags: {
        value: function getFlags() { return this.get_flags.apply(this, arguments); }
      },
      getGuid: {
        value: function getGuid() { return this.get_guid.apply(this, arguments); }
      },
      isActive: {
        value: function isActive() { return this.is_active.apply(this, arguments); }
      },
      newSync: {
        get: function () { return this.new_sync; },
        set: function (value) { this.new_sync = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.DesktopAppInfo.prototype,
    {
      getActionName: {
        value: function getActionName() { return this.get_action_name.apply(this, arguments); }
      },
      getBoolean: {
        value: function getBoolean() { return this.get_boolean.apply(this, arguments); }
      },
      getCategories: {
        value: function getCategories() { return this.get_categories.apply(this, arguments); }
      },
      getFilename: {
        value: function getFilename() { return this.get_filename.apply(this, arguments); }
      },
      getGenericName: {
        value: function getGenericName() { return this.get_generic_name.apply(this, arguments); }
      },
      getIsHidden: {
        value: function getIsHidden() { return this.get_is_hidden.apply(this, arguments); }
      },
      getKeywords: {
        value: function getKeywords() { return this.get_keywords.apply(this, arguments); }
      },
      getNodisplay: {
        value: function getNodisplay() { return this.get_nodisplay.apply(this, arguments); }
      },
      getShowIn: {
        value: function getShowIn() { return this.get_show_in.apply(this, arguments); }
      },
      getStartupWmClass: {
        value: function getStartupWmClass() { return this.get_startup_wm_class.apply(this, arguments); }
      },
      getString: {
        value: function getString() { return this.get_string.apply(this, arguments); }
      },
      hasKey: {
        value: function hasKey() { return this.has_key.apply(this, arguments); }
      },
      launchAction: {
        value: function launchAction() { return this.launch_action.apply(this, arguments); }
      },
      launchUrisAsManager: {
        value: function launchUrisAsManager() { return this.launch_uris_as_manager.apply(this, arguments); }
      },
      listActions: {
        value: function listActions() { return this.list_actions.apply(this, arguments); }
      },
      newFromFilename: {
        get: function () { return this.new_from_filename; },
        set: function (value) { this.new_from_filename = value; }
      },
      newFromKeyfile: {
        get: function () { return this.new_from_keyfile; },
        set: function (value) { this.new_from_keyfile = value; }
      },
      setDesktopEnv: {
        get: function () { return this.set_desktop_env; },
        set: function (value) { this.set_desktop_env = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.DesktopAppInfoLookup.prototype,
    {
      getDefaultForUriScheme: {
        value: function getDefaultForUriScheme() { return this.get_default_for_uri_scheme.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Drive.prototype,
    {
      canEject: {
        value: function canEject() { return this.can_eject.apply(this, arguments); }
      },
      canPollForMedia: {
        value: function canPollForMedia() { return this.can_poll_for_media.apply(this, arguments); }
      },
      canStartDegraded: {
        value: function canStartDegraded() { return this.can_start_degraded.apply(this, arguments); }
      },
      canStart: {
        value: function canStart() { return this.can_start.apply(this, arguments); }
      },
      canStop: {
        value: function canStop() { return this.can_stop.apply(this, arguments); }
      },
      ejectFinish: {
        value: function ejectFinish() { return this.eject_finish.apply(this, arguments); }
      },
      ejectWithOperationFinish: {
        value: function ejectWithOperationFinish() { return this.eject_with_operation_finish.apply(this, arguments); }
      },
      ejectWithOperation: {
        value: function ejectWithOperation() { return this.eject_with_operation.apply(this, arguments); }
      },
      enumerateIdentifiers: {
        value: function enumerateIdentifiers() { return this.enumerate_identifiers.apply(this, arguments); }
      },
      getIcon: {
        value: function getIcon() { return this.get_icon.apply(this, arguments); }
      },
      getIdentifier: {
        value: function getIdentifier() { return this.get_identifier.apply(this, arguments); }
      },
      getName: {
        value: function getName() { return this.get_name.apply(this, arguments); }
      },
      getSortKey: {
        value: function getSortKey() { return this.get_sort_key.apply(this, arguments); }
      },
      getStartStopType: {
        value: function getStartStopType() { return this.get_start_stop_type.apply(this, arguments); }
      },
      getSymbolicIcon: {
        value: function getSymbolicIcon() { return this.get_symbolic_icon.apply(this, arguments); }
      },
      getVolumes: {
        value: function getVolumes() { return this.get_volumes.apply(this, arguments); }
      },
      hasMedia: {
        value: function hasMedia() { return this.has_media.apply(this, arguments); }
      },
      hasVolumes: {
        value: function hasVolumes() { return this.has_volumes.apply(this, arguments); }
      },
      isMediaCheckAutomatic: {
        value: function isMediaCheckAutomatic() { return this.is_media_check_automatic.apply(this, arguments); }
      },
      isMediaRemovable: {
        value: function isMediaRemovable() { return this.is_media_removable.apply(this, arguments); }
      },
      pollForMediaFinish: {
        value: function pollForMediaFinish() { return this.poll_for_media_finish.apply(this, arguments); }
      },
      pollForMedia: {
        value: function pollForMedia() { return this.poll_for_media.apply(this, arguments); }
      },
      startFinish: {
        value: function startFinish() { return this.start_finish.apply(this, arguments); }
      },
      stopFinish: {
        value: function stopFinish() { return this.stop_finish.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.EmblemedIcon.prototype,
    {
      addEmblem: {
        value: function addEmblem() { return this.add_emblem.apply(this, arguments); }
      },
      clearEmblems: {
        value: function clearEmblems() { return this.clear_emblems.apply(this, arguments); }
      },
      getEmblems: {
        value: function getEmblems() { return this.get_emblems.apply(this, arguments); }
      },
      getIcon: {
        value: function getIcon() { return this.get_icon.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Emblem.prototype,
    {
      getIcon: {
        value: function getIcon() { return this.get_icon.apply(this, arguments); }
      },
      getOrigin: {
        value: function getOrigin() { return this.get_origin.apply(this, arguments); }
      },
      newWithOrigin: {
        get: function () { return this.new_with_origin; },
        set: function (value) { this.new_with_origin = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.File.prototype,
    {
      appendToAsync: {
        value: function appendToAsync() { return this.append_to_async.apply(this, arguments); }
      },
      appendToFinish: {
        value: function appendToFinish() { return this.append_to_finish.apply(this, arguments); }
      },
      appendTo: {
        value: function appendTo() { return this.append_to.apply(this, arguments); }
      },
      copyAttributes: {
        value: function copyAttributes() { return this.copy_attributes.apply(this, arguments); }
      },
      copyFinish: {
        value: function copyFinish() { return this.copy_finish.apply(this, arguments); }
      },
      createAsync: {
        value: function createAsync() { return this.create_async.apply(this, arguments); }
      },
      createFinish: {
        value: function createFinish() { return this.create_finish.apply(this, arguments); }
      },
      createReadwriteAsync: {
        value: function createReadwriteAsync() { return this.create_readwrite_async.apply(this, arguments); }
      },
      createReadwriteFinish: {
        value: function createReadwriteFinish() { return this.create_readwrite_finish.apply(this, arguments); }
      },
      createReadwrite: {
        value: function createReadwrite() { return this.create_readwrite.apply(this, arguments); }
      },
      deleteAsync: {
        value: function deleteAsync() { return this.delete_async.apply(this, arguments); }
      },
      deleteFinish: {
        value: function deleteFinish() { return this.delete_finish.apply(this, arguments); }
      },
      ejectMountableFinish: {
        value: function ejectMountableFinish() { return this.eject_mountable_finish.apply(this, arguments); }
      },
      ejectMountable: {
        value: function ejectMountable() { return this.eject_mountable.apply(this, arguments); }
      },
      ejectMountableWithOperationFinish: {
        value: function ejectMountableWithOperationFinish() { return this.eject_mountable_with_operation_finish.apply(this, arguments); }
      },
      ejectMountableWithOperation: {
        value: function ejectMountableWithOperation() { return this.eject_mountable_with_operation.apply(this, arguments); }
      },
      enumerateChildrenAsync: {
        value: function enumerateChildrenAsync() { return this.enumerate_children_async.apply(this, arguments); }
      },
      enumerateChildrenFinish: {
        value: function enumerateChildrenFinish() { return this.enumerate_children_finish.apply(this, arguments); }
      },
      enumerateChildren: {
        value: function enumerateChildren() { return this.enumerate_children.apply(this, arguments); }
      },
      findEnclosingMountAsync: {
        value: function findEnclosingMountAsync() { return this.find_enclosing_mount_async.apply(this, arguments); }
      },
      findEnclosingMountFinish: {
        value: function findEnclosingMountFinish() { return this.find_enclosing_mount_finish.apply(this, arguments); }
      },
      findEnclosingMount: {
        value: function findEnclosingMount() { return this.find_enclosing_mount.apply(this, arguments); }
      },
      getBasename: {
        value: function getBasename() { return this.get_basename.apply(this, arguments); }
      },
      getChildForDisplayName: {
        value: function getChildForDisplayName() { return this.get_child_for_display_name.apply(this, arguments); }
      },
      getChild: {
        value: function getChild() { return this.get_child.apply(this, arguments); }
      },
      getParent: {
        value: function getParent() { return this.get_parent.apply(this, arguments); }
      },
      getParseName: {
        value: function getParseName() { return this.get_parse_name.apply(this, arguments); }
      },
      getPath: {
        value: function getPath() { return this.get_path.apply(this, arguments); }
      },
      getRelativePath: {
        value: function getRelativePath() { return this.get_relative_path.apply(this, arguments); }
      },
      getUri: {
        value: function getUri() { return this.get_uri.apply(this, arguments); }
      },
      getUriScheme: {
        value: function getUriScheme() { return this.get_uri_scheme.apply(this, arguments); }
      },
      hasParent: {
        value: function hasParent() { return this.has_parent.apply(this, arguments); }
      },
      hasPrefix: {
        value: function hasPrefix() { return this.has_prefix.apply(this, arguments); }
      },
      hasUriScheme: {
        value: function hasUriScheme() { return this.has_uri_scheme.apply(this, arguments); }
      },
      isNative: {
        value: function isNative() { return this.is_native.apply(this, arguments); }
      },
      loadContentsAsync: {
        value: function loadContentsAsync() { return this.load_contents_async.apply(this, arguments); }
      },
      loadContentsFinish: {
        value: function loadContentsFinish() { return this.load_contents_finish.apply(this, arguments); }
      },
      loadContents: {
        value: function loadContents() { return this.load_contents.apply(this, arguments); }
      },
      loadPartialContentsFinish: {
        value: function loadPartialContentsFinish() { return this.load_partial_contents_finish.apply(this, arguments); }
      },
      makeDirectoryAsync: {
        value: function makeDirectoryAsync() { return this.make_directory_async.apply(this, arguments); }
      },
      makeDirectoryFinish: {
        value: function makeDirectoryFinish() { return this.make_directory_finish.apply(this, arguments); }
      },
      makeDirectory: {
        value: function makeDirectory() { return this.make_directory.apply(this, arguments); }
      },
      makeDirectoryWithParents: {
        value: function makeDirectoryWithParents() { return this.make_directory_with_parents.apply(this, arguments); }
      },
      makeSymbolicLink: {
        value: function makeSymbolicLink() { return this.make_symbolic_link.apply(this, arguments); }
      },
      measureDiskUsageFinish: {
        value: function measureDiskUsageFinish() { return this.measure_disk_usage_finish.apply(this, arguments); }
      },
      monitorDirectory: {
        value: function monitorDirectory() { return this.monitor_directory.apply(this, arguments); }
      },
      monitorFile: {
        value: function monitorFile() { return this.monitor_file.apply(this, arguments); }
      },
      mountEnclosingVolumeFinish: {
        value: function mountEnclosingVolumeFinish() { return this.mount_enclosing_volume_finish.apply(this, arguments); }
      },
      mountEnclosingVolume: {
        value: function mountEnclosingVolume() { return this.mount_enclosing_volume.apply(this, arguments); }
      },
      mountMountableFinish: {
        value: function mountMountableFinish() { return this.mount_mountable_finish.apply(this, arguments); }
      },
      mountMountable: {
        value: function mountMountable() { return this.mount_mountable.apply(this, arguments); }
      },
      newForCommandlineArgAndCwd: {
        get: function () { return this.new_for_commandline_arg_and_cwd; },
        set: function (value) { this.new_for_commandline_arg_and_cwd = value; }
      },
      newForCommandlineArg: {
        get: function () { return this.new_for_commandline_arg; },
        set: function (value) { this.new_for_commandline_arg = value; }
      },
      newForPath: {
        get: function () { return this.new_for_path; },
        set: function (value) { this.new_for_path = value; }
      },
      newForUri: {
        get: function () { return this.new_for_uri; },
        set: function (value) { this.new_for_uri = value; }
      },
      newTmp: {
        get: function () { return this.new_tmp; },
        set: function (value) { this.new_tmp = value; }
      },
      openReadwriteAsync: {
        value: function openReadwriteAsync() { return this.open_readwrite_async.apply(this, arguments); }
      },
      openReadwriteFinish: {
        value: function openReadwriteFinish() { return this.open_readwrite_finish.apply(this, arguments); }
      },
      openReadwrite: {
        value: function openReadwrite() { return this.open_readwrite.apply(this, arguments); }
      },
      parseName: {
        get: function () { return this.parse_name; },
        set: function (value) { this.parse_name = value; }
      },
      pollMountableFinish: {
        value: function pollMountableFinish() { return this.poll_mountable_finish.apply(this, arguments); }
      },
      pollMountable: {
        value: function pollMountable() { return this.poll_mountable.apply(this, arguments); }
      },
      queryDefaultHandler: {
        value: function queryDefaultHandler() { return this.query_default_handler.apply(this, arguments); }
      },
      queryExists: {
        value: function queryExists() { return this.query_exists.apply(this, arguments); }
      },
      queryFilesystemInfoAsync: {
        value: function queryFilesystemInfoAsync() { return this.query_filesystem_info_async.apply(this, arguments); }
      },
      queryFilesystemInfoFinish: {
        value: function queryFilesystemInfoFinish() { return this.query_filesystem_info_finish.apply(this, arguments); }
      },
      queryFilesystemInfo: {
        value: function queryFilesystemInfo() { return this.query_filesystem_info.apply(this, arguments); }
      },
      queryFileType: {
        value: function queryFileType() { return this.query_file_type.apply(this, arguments); }
      },
      queryInfoAsync: {
        value: function queryInfoAsync() { return this.query_info_async.apply(this, arguments); }
      },
      queryInfoFinish: {
        value: function queryInfoFinish() { return this.query_info_finish.apply(this, arguments); }
      },
      queryInfo: {
        value: function queryInfo() { return this.query_info.apply(this, arguments); }
      },
      querySettableAttributes: {
        value: function querySettableAttributes() { return this.query_settable_attributes.apply(this, arguments); }
      },
      queryWritableNamespaces: {
        value: function queryWritableNamespaces() { return this.query_writable_namespaces.apply(this, arguments); }
      },
      readAsync: {
        value: function readAsync() { return this.read_async.apply(this, arguments); }
      },
      readFinish: {
        value: function readFinish() { return this.read_finish.apply(this, arguments); }
      },
      replaceAsync: {
        value: function replaceAsync() { return this.replace_async.apply(this, arguments); }
      },
      replaceContentsAsync: {
        value: function replaceContentsAsync() { return this.replace_contents_async.apply(this, arguments); }
      },
      replaceContentsBytesAsync: {
        value: function replaceContentsBytesAsync() { return this.replace_contents_bytes_async.apply(this, arguments); }
      },
      replaceContentsFinish: {
        value: function replaceContentsFinish() { return this.replace_contents_finish.apply(this, arguments); }
      },
      replaceContents: {
        value: function replaceContents() { return this.replace_contents.apply(this, arguments); }
      },
      replaceFinish: {
        value: function replaceFinish() { return this.replace_finish.apply(this, arguments); }
      },
      replaceReadwriteAsync: {
        value: function replaceReadwriteAsync() { return this.replace_readwrite_async.apply(this, arguments); }
      },
      replaceReadwriteFinish: {
        value: function replaceReadwriteFinish() { return this.replace_readwrite_finish.apply(this, arguments); }
      },
      replaceReadwrite: {
        value: function replaceReadwrite() { return this.replace_readwrite.apply(this, arguments); }
      },
      resolveRelativePath: {
        value: function resolveRelativePath() { return this.resolve_relative_path.apply(this, arguments); }
      },
      setAttributeByteString: {
        value: function setAttributeByteString() { return this.set_attribute_byte_string.apply(this, arguments); }
      },
      setAttributeInt32: {
        value: function setAttributeInt32() { return this.set_attribute_int32.apply(this, arguments); }
      },
      setAttributeInt64: {
        value: function setAttributeInt64() { return this.set_attribute_int64.apply(this, arguments); }
      },
      setAttribute: {
        value: function setAttribute() { return this.set_attribute.apply(this, arguments); }
      },
      setAttributesAsync: {
        value: function setAttributesAsync() { return this.set_attributes_async.apply(this, arguments); }
      },
      setAttributesFinish: {
        value: function setAttributesFinish() { return this.set_attributes_finish.apply(this, arguments); }
      },
      setAttributesFromInfo: {
        value: function setAttributesFromInfo() { return this.set_attributes_from_info.apply(this, arguments); }
      },
      setAttributeString: {
        value: function setAttributeString() { return this.set_attribute_string.apply(this, arguments); }
      },
      setAttributeUint32: {
        value: function setAttributeUint32() { return this.set_attribute_uint32.apply(this, arguments); }
      },
      setAttributeUint64: {
        value: function setAttributeUint64() { return this.set_attribute_uint64.apply(this, arguments); }
      },
      setDisplayNameAsync: {
        value: function setDisplayNameAsync() { return this.set_display_name_async.apply(this, arguments); }
      },
      setDisplayNameFinish: {
        value: function setDisplayNameFinish() { return this.set_display_name_finish.apply(this, arguments); }
      },
      setDisplayName: {
        value: function setDisplayName() { return this.set_display_name.apply(this, arguments); }
      },
      startMountableFinish: {
        value: function startMountableFinish() { return this.start_mountable_finish.apply(this, arguments); }
      },
      startMountable: {
        value: function startMountable() { return this.start_mountable.apply(this, arguments); }
      },
      stopMountableFinish: {
        value: function stopMountableFinish() { return this.stop_mountable_finish.apply(this, arguments); }
      },
      stopMountable: {
        value: function stopMountable() { return this.stop_mountable.apply(this, arguments); }
      },
      supportsThreadContexts: {
        value: function supportsThreadContexts() { return this.supports_thread_contexts.apply(this, arguments); }
      },
      trashAsync: {
        value: function trashAsync() { return this.trash_async.apply(this, arguments); }
      },
      trashFinish: {
        value: function trashFinish() { return this.trash_finish.apply(this, arguments); }
      },
      unmountMountableFinish: {
        value: function unmountMountableFinish() { return this.unmount_mountable_finish.apply(this, arguments); }
      },
      unmountMountable: {
        value: function unmountMountable() { return this.unmount_mountable.apply(this, arguments); }
      },
      unmountMountableWithOperationFinish: {
        value: function unmountMountableWithOperationFinish() { return this.unmount_mountable_with_operation_finish.apply(this, arguments); }
      },
      unmountMountableWithOperation: {
        value: function unmountMountableWithOperation() { return this.unmount_mountable_with_operation.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FileAttributeMatcher.prototype,
    {
      enumerateNamespace: {
        value: function enumerateNamespace() { return this.enumerate_namespace.apply(this, arguments); }
      },
      enumerateNext: {
        value: function enumerateNext() { return this.enumerate_next.apply(this, arguments); }
      },
      matchesOnly: {
        value: function matchesOnly() { return this.matches_only.apply(this, arguments); }
      },
      toString: {
        value: function toString() { return this.to_string.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FileDescriptorBased.prototype,
    {
      getFd: {
        value: function getFd() { return this.get_fd.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FileEnumerator.prototype,
    {
      closeAsync: {
        value: function closeAsync() { return this.close_async.apply(this, arguments); }
      },
      closeFinish: {
        value: function closeFinish() { return this.close_finish.apply(this, arguments); }
      },
      getChild: {
        value: function getChild() { return this.get_child.apply(this, arguments); }
      },
      getContainer: {
        value: function getContainer() { return this.get_container.apply(this, arguments); }
      },
      hasPending: {
        value: function hasPending() { return this.has_pending.apply(this, arguments); }
      },
      isClosed: {
        value: function isClosed() { return this.is_closed.apply(this, arguments); }
      },
      nextFile: {
        value: function nextFile() { return this.next_file.apply(this, arguments); }
      },
      nextFilesAsync: {
        value: function nextFilesAsync() { return this.next_files_async.apply(this, arguments); }
      },
      nextFilesFinish: {
        value: function nextFilesFinish() { return this.next_files_finish.apply(this, arguments); }
      },
      setPending: {
        value: function setPending() { return this.set_pending.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FileIcon.prototype,
    {
      getFile: {
        value: function getFile() { return this.get_file.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FileInfo.prototype,
    {
      clearStatus: {
        value: function clearStatus() { return this.clear_status.apply(this, arguments); }
      },
      copyInto: {
        value: function copyInto() { return this.copy_into.apply(this, arguments); }
      },
      getAttributeAsString: {
        value: function getAttributeAsString() { return this.get_attribute_as_string.apply(this, arguments); }
      },
      getAttributeBoolean: {
        value: function getAttributeBoolean() { return this.get_attribute_boolean.apply(this, arguments); }
      },
      getAttributeByteString: {
        value: function getAttributeByteString() { return this.get_attribute_byte_string.apply(this, arguments); }
      },
      getAttributeData: {
        value: function getAttributeData() { return this.get_attribute_data.apply(this, arguments); }
      },
      getAttributeInt32: {
        value: function getAttributeInt32() { return this.get_attribute_int32.apply(this, arguments); }
      },
      getAttributeInt64: {
        value: function getAttributeInt64() { return this.get_attribute_int64.apply(this, arguments); }
      },
      getAttributeObject: {
        value: function getAttributeObject() { return this.get_attribute_object.apply(this, arguments); }
      },
      getAttributeStatus: {
        value: function getAttributeStatus() { return this.get_attribute_status.apply(this, arguments); }
      },
      getAttributeString: {
        value: function getAttributeString() { return this.get_attribute_string.apply(this, arguments); }
      },
      getAttributeStringv: {
        value: function getAttributeStringv() { return this.get_attribute_stringv.apply(this, arguments); }
      },
      getAttributeType: {
        value: function getAttributeType() { return this.get_attribute_type.apply(this, arguments); }
      },
      getAttributeUint32: {
        value: function getAttributeUint32() { return this.get_attribute_uint32.apply(this, arguments); }
      },
      getAttributeUint64: {
        value: function getAttributeUint64() { return this.get_attribute_uint64.apply(this, arguments); }
      },
      getContentType: {
        value: function getContentType() { return this.get_content_type.apply(this, arguments); }
      },
      getDeletionDate: {
        value: function getDeletionDate() { return this.get_deletion_date.apply(this, arguments); }
      },
      getDisplayName: {
        value: function getDisplayName() { return this.get_display_name.apply(this, arguments); }
      },
      getEditName: {
        value: function getEditName() { return this.get_edit_name.apply(this, arguments); }
      },
      getEtag: {
        value: function getEtag() { return this.get_etag.apply(this, arguments); }
      },
      getFileType: {
        value: function getFileType() { return this.get_file_type.apply(this, arguments); }
      },
      getIcon: {
        value: function getIcon() { return this.get_icon.apply(this, arguments); }
      },
      getIsBackup: {
        value: function getIsBackup() { return this.get_is_backup.apply(this, arguments); }
      },
      getIsHidden: {
        value: function getIsHidden() { return this.get_is_hidden.apply(this, arguments); }
      },
      getIsSymlink: {
        value: function getIsSymlink() { return this.get_is_symlink.apply(this, arguments); }
      },
      getModificationTime: {
        value: function getModificationTime() { return this.get_modification_time.apply(this, arguments); }
      },
      getName: {
        value: function getName() { return this.get_name.apply(this, arguments); }
      },
      getSize: {
        value: function getSize() { return this.get_size.apply(this, arguments); }
      },
      getSortOrder: {
        value: function getSortOrder() { return this.get_sort_order.apply(this, arguments); }
      },
      getSymbolicIcon: {
        value: function getSymbolicIcon() { return this.get_symbolic_icon.apply(this, arguments); }
      },
      getSymlinkTarget: {
        value: function getSymlinkTarget() { return this.get_symlink_target.apply(this, arguments); }
      },
      hasAttribute: {
        value: function hasAttribute() { return this.has_attribute.apply(this, arguments); }
      },
      hasNamespace: {
        value: function hasNamespace() { return this.has_namespace.apply(this, arguments); }
      },
      listAttributes: {
        value: function listAttributes() { return this.list_attributes.apply(this, arguments); }
      },
      removeAttribute: {
        value: function removeAttribute() { return this.remove_attribute.apply(this, arguments); }
      },
      setAttributeBoolean: {
        value: function setAttributeBoolean() { return this.set_attribute_boolean.apply(this, arguments); }
      },
      setAttributeByteString: {
        value: function setAttributeByteString() { return this.set_attribute_byte_string.apply(this, arguments); }
      },
      setAttributeInt32: {
        value: function setAttributeInt32() { return this.set_attribute_int32.apply(this, arguments); }
      },
      setAttributeInt64: {
        value: function setAttributeInt64() { return this.set_attribute_int64.apply(this, arguments); }
      },
      setAttributeMask: {
        value: function setAttributeMask() { return this.set_attribute_mask.apply(this, arguments); }
      },
      setAttributeObject: {
        value: function setAttributeObject() { return this.set_attribute_object.apply(this, arguments); }
      },
      setAttribute: {
        value: function setAttribute() { return this.set_attribute.apply(this, arguments); }
      },
      setAttributeStatus: {
        value: function setAttributeStatus() { return this.set_attribute_status.apply(this, arguments); }
      },
      setAttributeString: {
        value: function setAttributeString() { return this.set_attribute_string.apply(this, arguments); }
      },
      setAttributeStringv: {
        value: function setAttributeStringv() { return this.set_attribute_stringv.apply(this, arguments); }
      },
      setAttributeUint32: {
        value: function setAttributeUint32() { return this.set_attribute_uint32.apply(this, arguments); }
      },
      setAttributeUint64: {
        value: function setAttributeUint64() { return this.set_attribute_uint64.apply(this, arguments); }
      },
      setContentType: {
        value: function setContentType() { return this.set_content_type.apply(this, arguments); }
      },
      setDisplayName: {
        value: function setDisplayName() { return this.set_display_name.apply(this, arguments); }
      },
      setEditName: {
        value: function setEditName() { return this.set_edit_name.apply(this, arguments); }
      },
      setFileType: {
        value: function setFileType() { return this.set_file_type.apply(this, arguments); }
      },
      setIcon: {
        value: function setIcon() { return this.set_icon.apply(this, arguments); }
      },
      setIsHidden: {
        value: function setIsHidden() { return this.set_is_hidden.apply(this, arguments); }
      },
      setIsSymlink: {
        value: function setIsSymlink() { return this.set_is_symlink.apply(this, arguments); }
      },
      setModificationTime: {
        value: function setModificationTime() { return this.set_modification_time.apply(this, arguments); }
      },
      setName: {
        value: function setName() { return this.set_name.apply(this, arguments); }
      },
      setSize: {
        value: function setSize() { return this.set_size.apply(this, arguments); }
      },
      setSortOrder: {
        value: function setSortOrder() { return this.set_sort_order.apply(this, arguments); }
      },
      setSymbolicIcon: {
        value: function setSymbolicIcon() { return this.set_symbolic_icon.apply(this, arguments); }
      },
      setSymlinkTarget: {
        value: function setSymlinkTarget() { return this.set_symlink_target.apply(this, arguments); }
      },
      unsetAttributeMask: {
        value: function unsetAttributeMask() { return this.unset_attribute_mask.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FileInputStream.prototype,
    {
      queryInfoAsync: {
        value: function queryInfoAsync() { return this.query_info_async.apply(this, arguments); }
      },
      queryInfoFinish: {
        value: function queryInfoFinish() { return this.query_info_finish.apply(this, arguments); }
      },
      queryInfo: {
        value: function queryInfo() { return this.query_info.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FileIOStream.prototype,
    {
      getEtag: {
        value: function getEtag() { return this.get_etag.apply(this, arguments); }
      },
      queryInfoAsync: {
        value: function queryInfoAsync() { return this.query_info_async.apply(this, arguments); }
      },
      queryInfoFinish: {
        value: function queryInfoFinish() { return this.query_info_finish.apply(this, arguments); }
      },
      queryInfo: {
        value: function queryInfo() { return this.query_info.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FileMonitor.prototype,
    {
      emitEvent: {
        value: function emitEvent() { return this.emit_event.apply(this, arguments); }
      },
      isCancelled: {
        value: function isCancelled() { return this.is_cancelled.apply(this, arguments); }
      },
      setRateLimit: {
        value: function setRateLimit() { return this.set_rate_limit.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FilenameCompleter.prototype,
    {
      getCompletions: {
        value: function getCompletions() { return this.get_completions.apply(this, arguments); }
      },
      getCompletionSuffix: {
        value: function getCompletionSuffix() { return this.get_completion_suffix.apply(this, arguments); }
      },
      setDirsOnly: {
        value: function setDirsOnly() { return this.set_dirs_only.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FileOutputStream.prototype,
    {
      getEtag: {
        value: function getEtag() { return this.get_etag.apply(this, arguments); }
      },
      queryInfoAsync: {
        value: function queryInfoAsync() { return this.query_info_async.apply(this, arguments); }
      },
      queryInfoFinish: {
        value: function queryInfoFinish() { return this.query_info_finish.apply(this, arguments); }
      },
      queryInfo: {
        value: function queryInfo() { return this.query_info.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FilterInputStream.prototype,
    {
      getBaseStream: {
        value: function getBaseStream() { return this.get_base_stream.apply(this, arguments); }
      },
      getCloseBaseStream: {
        value: function getCloseBaseStream() { return this.get_close_base_stream.apply(this, arguments); }
      },
      setCloseBaseStream: {
        value: function setCloseBaseStream() { return this.set_close_base_stream.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.FilterOutputStream.prototype,
    {
      getBaseStream: {
        value: function getBaseStream() { return this.get_base_stream.apply(this, arguments); }
      },
      getCloseBaseStream: {
        value: function getCloseBaseStream() { return this.get_close_base_stream.apply(this, arguments); }
      },
      setCloseBaseStream: {
        value: function setCloseBaseStream() { return this.set_close_base_stream.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Icon.prototype,
    {
      newForString: {
        get: function () { return this.new_for_string; },
        set: function (value) { this.new_for_string = value; }
      },
      toString: {
        value: function toString() { return this.to_string.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.InetAddress.prototype,
    {
      getFamily: {
        value: function getFamily() { return this.get_family.apply(this, arguments); }
      },
      getIsAny: {
        value: function getIsAny() { return this.get_is_any.apply(this, arguments); }
      },
      getIsLinkLocal: {
        value: function getIsLinkLocal() { return this.get_is_link_local.apply(this, arguments); }
      },
      getIsLoopback: {
        value: function getIsLoopback() { return this.get_is_loopback.apply(this, arguments); }
      },
      getIsMcGlobal: {
        value: function getIsMcGlobal() { return this.get_is_mc_global.apply(this, arguments); }
      },
      getIsMcLinkLocal: {
        value: function getIsMcLinkLocal() { return this.get_is_mc_link_local.apply(this, arguments); }
      },
      getIsMcNodeLocal: {
        value: function getIsMcNodeLocal() { return this.get_is_mc_node_local.apply(this, arguments); }
      },
      getIsMcOrgLocal: {
        value: function getIsMcOrgLocal() { return this.get_is_mc_org_local.apply(this, arguments); }
      },
      getIsMcSiteLocal: {
        value: function getIsMcSiteLocal() { return this.get_is_mc_site_local.apply(this, arguments); }
      },
      getIsMulticast: {
        value: function getIsMulticast() { return this.get_is_multicast.apply(this, arguments); }
      },
      getIsSiteLocal: {
        value: function getIsSiteLocal() { return this.get_is_site_local.apply(this, arguments); }
      },
      getNativeSize: {
        value: function getNativeSize() { return this.get_native_size.apply(this, arguments); }
      },
      newAny: {
        get: function () { return this.new_any; },
        set: function (value) { this.new_any = value; }
      },
      newFromBytes: {
        get: function () { return this.new_from_bytes; },
        set: function (value) { this.new_from_bytes = value; }
      },
      newFromString: {
        get: function () { return this.new_from_string; },
        set: function (value) { this.new_from_string = value; }
      },
      newLoopback: {
        get: function () { return this.new_loopback; },
        set: function (value) { this.new_loopback = value; }
      },
      toString: {
        value: function toString() { return this.to_string.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.InetAddressMask.prototype,
    {
      getAddress: {
        value: function getAddress() { return this.get_address.apply(this, arguments); }
      },
      getFamily: {
        value: function getFamily() { return this.get_family.apply(this, arguments); }
      },
      getLength: {
        value: function getLength() { return this.get_length.apply(this, arguments); }
      },
      newFromString: {
        get: function () { return this.new_from_string; },
        set: function (value) { this.new_from_string = value; }
      },
      toString: {
        value: function toString() { return this.to_string.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.InetSocketAddress.prototype,
    {
      getAddress: {
        value: function getAddress() { return this.get_address.apply(this, arguments); }
      },
      getFlowinfo: {
        value: function getFlowinfo() { return this.get_flowinfo.apply(this, arguments); }
      },
      getPort: {
        value: function getPort() { return this.get_port.apply(this, arguments); }
      },
      getScopeId: {
        value: function getScopeId() { return this.get_scope_id.apply(this, arguments); }
      },
      newFromString: {
        get: function () { return this.new_from_string; },
        set: function (value) { this.new_from_string = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.InputStream.prototype,
    {
      clearPending: {
        value: function clearPending() { return this.clear_pending.apply(this, arguments); }
      },
      closeAsync: {
        value: function closeAsync() { return this.close_async.apply(this, arguments); }
      },
      closeFinish: {
        value: function closeFinish() { return this.close_finish.apply(this, arguments); }
      },
      hasPending: {
        value: function hasPending() { return this.has_pending.apply(this, arguments); }
      },
      isClosed: {
        value: function isClosed() { return this.is_closed.apply(this, arguments); }
      },
      readAll: {
        value: function readAll() { return this.read_all.apply(this, arguments); }
      },
      readAsync: {
        value: function readAsync() { return this.read_async.apply(this, arguments); }
      },
      readBytesAsync: {
        value: function readBytesAsync() { return this.read_bytes_async.apply(this, arguments); }
      },
      readBytesFinish: {
        value: function readBytesFinish() { return this.read_bytes_finish.apply(this, arguments); }
      },
      readBytes: {
        value: function readBytes() { return this.read_bytes.apply(this, arguments); }
      },
      readFinish: {
        value: function readFinish() { return this.read_finish.apply(this, arguments); }
      },
      setPending: {
        value: function setPending() { return this.set_pending.apply(this, arguments); }
      },
      skipAsync: {
        value: function skipAsync() { return this.skip_async.apply(this, arguments); }
      },
      skipFinish: {
        value: function skipFinish() { return this.skip_finish.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.IOExtension.prototype,
    {
      getName: {
        value: function getName() { return this.get_name.apply(this, arguments); }
      },
      getPriority: {
        value: function getPriority() { return this.get_priority.apply(this, arguments); }
      },
      getType: {
        value: function getType() { return this.get_type.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.IOExtensionPoint.prototype,
    {
      getExtensionByName: {
        value: function getExtensionByName() { return this.get_extension_by_name.apply(this, arguments); }
      },
      getExtensions: {
        value: function getExtensions() { return this.get_extensions.apply(this, arguments); }
      },
      getRequiredType: {
        value: function getRequiredType() { return this.get_required_type.apply(this, arguments); }
      },
      setRequiredType: {
        value: function setRequiredType() { return this.set_required_type.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.IOSchedulerJob.prototype,
    {
      sendToMainloopAsync: {
        value: function sendToMainloopAsync() { return this.send_to_mainloop_async.apply(this, arguments); }
      },
      sendToMainloop: {
        value: function sendToMainloop() { return this.send_to_mainloop.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.IOStream.prototype,
    {
      clearPending: {
        value: function clearPending() { return this.clear_pending.apply(this, arguments); }
      },
      closeAsync: {
        value: function closeAsync() { return this.close_async.apply(this, arguments); }
      },
      closeFinish: {
        value: function closeFinish() { return this.close_finish.apply(this, arguments); }
      },
      getInputStream: {
        value: function getInputStream() { return this.get_input_stream.apply(this, arguments); }
      },
      getOutputStream: {
        value: function getOutputStream() { return this.get_output_stream.apply(this, arguments); }
      },
      hasPending: {
        value: function hasPending() { return this.has_pending.apply(this, arguments); }
      },
      isClosed: {
        value: function isClosed() { return this.is_closed.apply(this, arguments); }
      },
      setPending: {
        value: function setPending() { return this.set_pending.apply(this, arguments); }
      },
      spliceAsync: {
        value: function spliceAsync() { return this.splice_async.apply(this, arguments); }
      },
      spliceFinish: {
        get: function () { return this.splice_finish; },
        set: function (value) { this.splice_finish = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.LoadableIcon.prototype,
    {
      loadAsync: {
        value: function loadAsync() { return this.load_async.apply(this, arguments); }
      },
      loadFinish: {
        value: function loadFinish() { return this.load_finish.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.MemoryInputStream.prototype,
    {
      addBytes: {
        value: function addBytes() { return this.add_bytes.apply(this, arguments); }
      },
      addData: {
        value: function addData() { return this.add_data.apply(this, arguments); }
      },
      newFromBytes: {
        get: function () { return this.new_from_bytes; },
        set: function (value) { this.new_from_bytes = value; }
      },
      newFromData: {
        get: function () { return this.new_from_data; },
        set: function (value) { this.new_from_data = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.MemoryOutputStream.prototype,
    {
      getData: {
        value: function getData() { return this.get_data.apply(this, arguments); }
      },
      getDataSize: {
        value: function getDataSize() { return this.get_data_size.apply(this, arguments); }
      },
      getSize: {
        value: function getSize() { return this.get_size.apply(this, arguments); }
      },
      newResizable: {
        get: function () { return this.new_resizable; },
        set: function (value) { this.new_resizable = value; }
      },
      stealAsBytes: {
        value: function stealAsBytes() { return this.steal_as_bytes.apply(this, arguments); }
      },
      stealData: {
        value: function stealData() { return this.steal_data.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Menu.prototype,
    {
      appendItem: {
        value: function appendItem() { return this.append_item.apply(this, arguments); }
      },
      appendSection: {
        value: function appendSection() { return this.append_section.apply(this, arguments); }
      },
      appendSubmenu: {
        value: function appendSubmenu() { return this.append_submenu.apply(this, arguments); }
      },
      insertItem: {
        value: function insertItem() { return this.insert_item.apply(this, arguments); }
      },
      insertSection: {
        value: function insertSection() { return this.insert_section.apply(this, arguments); }
      },
      insertSubmenu: {
        value: function insertSubmenu() { return this.insert_submenu.apply(this, arguments); }
      },
      prependItem: {
        value: function prependItem() { return this.prepend_item.apply(this, arguments); }
      },
      prependSection: {
        value: function prependSection() { return this.prepend_section.apply(this, arguments); }
      },
      prependSubmenu: {
        value: function prependSubmenu() { return this.prepend_submenu.apply(this, arguments); }
      },
      removeAll: {
        value: function removeAll() { return this.remove_all.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.MenuAttributeIter.prototype,
    {
      getName: {
        value: function getName() { return this.get_name.apply(this, arguments); }
      },
      getNext: {
        value: function getNext() { return this.get_next.apply(this, arguments); }
      },
      getValue: {
        value: function getValue() { return this.get_value.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.MenuItem.prototype,
    {
      getAttributeValue: {
        value: function getAttributeValue() { return this.get_attribute_value.apply(this, arguments); }
      },
      getLink: {
        value: function getLink() { return this.get_link.apply(this, arguments); }
      },
      newFromModel: {
        get: function () { return this.new_from_model; },
        set: function (value) { this.new_from_model = value; }
      },
      newSection: {
        get: function () { return this.new_section; },
        set: function (value) { this.new_section = value; }
      },
      newSubmenu: {
        get: function () { return this.new_submenu; },
        set: function (value) { this.new_submenu = value; }
      },
      setActionAndTargetValue: {
        value: function setActionAndTargetValue() { return this.set_action_and_target_value.apply(this, arguments); }
      },
      setAttributeValue: {
        value: function setAttributeValue() { return this.set_attribute_value.apply(this, arguments); }
      },
      setDetailedAction: {
        value: function setDetailedAction() { return this.set_detailed_action.apply(this, arguments); }
      },
      setIcon: {
        value: function setIcon() { return this.set_icon.apply(this, arguments); }
      },
      setLabel: {
        value: function setLabel() { return this.set_label.apply(this, arguments); }
      },
      setLink: {
        value: function setLink() { return this.set_link.apply(this, arguments); }
      },
      setSection: {
        value: function setSection() { return this.set_section.apply(this, arguments); }
      },
      setSubmenu: {
        value: function setSubmenu() { return this.set_submenu.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.MenuLinkIter.prototype,
    {
      getName: {
        value: function getName() { return this.get_name.apply(this, arguments); }
      },
      getNext: {
        value: function getNext() { return this.get_next.apply(this, arguments); }
      },
      getValue: {
        value: function getValue() { return this.get_value.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.MenuModel.prototype,
    {
      getItemAttributeValue: {
        value: function getItemAttributeValue() { return this.get_item_attribute_value.apply(this, arguments); }
      },
      getItemLink: {
        value: function getItemLink() { return this.get_item_link.apply(this, arguments); }
      },
      getNItems: {
        value: function getNItems() { return this.get_n_items.apply(this, arguments); }
      },
      isMutable: {
        value: function isMutable() { return this.is_mutable.apply(this, arguments); }
      },
      itemsChanged: {
        value: function itemsChanged() { return this.items_changed.apply(this, arguments); }
      },
      iterateItemAttributes: {
        value: function iterateItemAttributes() { return this.iterate_item_attributes.apply(this, arguments); }
      },
      iterateItemLinks: {
        value: function iterateItemLinks() { return this.iterate_item_links.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Mount.prototype,
    {
      canEject: {
        value: function canEject() { return this.can_eject.apply(this, arguments); }
      },
      canUnmount: {
        value: function canUnmount() { return this.can_unmount.apply(this, arguments); }
      },
      ejectFinish: {
        value: function ejectFinish() { return this.eject_finish.apply(this, arguments); }
      },
      ejectWithOperationFinish: {
        value: function ejectWithOperationFinish() { return this.eject_with_operation_finish.apply(this, arguments); }
      },
      ejectWithOperation: {
        value: function ejectWithOperation() { return this.eject_with_operation.apply(this, arguments); }
      },
      getDefaultLocation: {
        value: function getDefaultLocation() { return this.get_default_location.apply(this, arguments); }
      },
      getDrive: {
        value: function getDrive() { return this.get_drive.apply(this, arguments); }
      },
      getIcon: {
        value: function getIcon() { return this.get_icon.apply(this, arguments); }
      },
      getName: {
        value: function getName() { return this.get_name.apply(this, arguments); }
      },
      getRoot: {
        value: function getRoot() { return this.get_root.apply(this, arguments); }
      },
      getSortKey: {
        value: function getSortKey() { return this.get_sort_key.apply(this, arguments); }
      },
      getSymbolicIcon: {
        value: function getSymbolicIcon() { return this.get_symbolic_icon.apply(this, arguments); }
      },
      getUuid: {
        value: function getUuid() { return this.get_uuid.apply(this, arguments); }
      },
      getVolume: {
        value: function getVolume() { return this.get_volume.apply(this, arguments); }
      },
      guessContentTypeFinish: {
        value: function guessContentTypeFinish() { return this.guess_content_type_finish.apply(this, arguments); }
      },
      guessContentType: {
        value: function guessContentType() { return this.guess_content_type.apply(this, arguments); }
      },
      guessContentTypeSync: {
        value: function guessContentTypeSync() { return this.guess_content_type_sync.apply(this, arguments); }
      },
      isShadowed: {
        value: function isShadowed() { return this.is_shadowed.apply(this, arguments); }
      },
      remountFinish: {
        value: function remountFinish() { return this.remount_finish.apply(this, arguments); }
      },
      unmountFinish: {
        value: function unmountFinish() { return this.unmount_finish.apply(this, arguments); }
      },
      unmountWithOperationFinish: {
        value: function unmountWithOperationFinish() { return this.unmount_with_operation_finish.apply(this, arguments); }
      },
      unmountWithOperation: {
        value: function unmountWithOperation() { return this.unmount_with_operation.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.MountOperation.prototype,
    {
      getAnonymous: {
        value: function getAnonymous() { return this.get_anonymous.apply(this, arguments); }
      },
      getChoice: {
        value: function getChoice() { return this.get_choice.apply(this, arguments); }
      },
      getDomain: {
        value: function getDomain() { return this.get_domain.apply(this, arguments); }
      },
      getPassword: {
        value: function getPassword() { return this.get_password.apply(this, arguments); }
      },
      getPasswordSave: {
        value: function getPasswordSave() { return this.get_password_save.apply(this, arguments); }
      },
      getUsername: {
        value: function getUsername() { return this.get_username.apply(this, arguments); }
      },
      setAnonymous: {
        value: function setAnonymous() { return this.set_anonymous.apply(this, arguments); }
      },
      setChoice: {
        value: function setChoice() { return this.set_choice.apply(this, arguments); }
      },
      setDomain: {
        value: function setDomain() { return this.set_domain.apply(this, arguments); }
      },
      setPassword: {
        value: function setPassword() { return this.set_password.apply(this, arguments); }
      },
      setPasswordSave: {
        value: function setPasswordSave() { return this.set_password_save.apply(this, arguments); }
      },
      setUsername: {
        value: function setUsername() { return this.set_username.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.NetworkAddress.prototype,
    {
      getHostname: {
        value: function getHostname() { return this.get_hostname.apply(this, arguments); }
      },
      getPort: {
        value: function getPort() { return this.get_port.apply(this, arguments); }
      },
      getScheme: {
        value: function getScheme() { return this.get_scheme.apply(this, arguments); }
      },
      parseUri: {
        get: function () { return this.parse_uri; },
        set: function (value) { this.parse_uri = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.NetworkMonitor.prototype,
    {
      canReachAsync: {
        value: function canReachAsync() { return this.can_reach_async.apply(this, arguments); }
      },
      canReachFinish: {
        value: function canReachFinish() { return this.can_reach_finish.apply(this, arguments); }
      },
      canReach: {
        value: function canReach() { return this.can_reach.apply(this, arguments); }
      },
      getDefault: {
        get: function () { return this.get_default; },
        set: function (value) { this.get_default = value; }
      },
      getNetworkAvailable: {
        value: function getNetworkAvailable() { return this.get_network_available.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.NetworkService.prototype,
    {
      getDomain: {
        value: function getDomain() { return this.get_domain.apply(this, arguments); }
      },
      getProtocol: {
        value: function getProtocol() { return this.get_protocol.apply(this, arguments); }
      },
      getScheme: {
        value: function getScheme() { return this.get_scheme.apply(this, arguments); }
      },
      getService: {
        value: function getService() { return this.get_service.apply(this, arguments); }
      },
      setScheme: {
        value: function setScheme() { return this.set_scheme.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Notification.prototype,
    {
      addButton: {
        value: function addButton() { return this.add_button.apply(this, arguments); }
      },
      addButtonWithTarget: {
        value: function addButtonWithTarget() { return this.add_button_with_target.apply(this, arguments); }
      },
      setBody: {
        value: function setBody() { return this.set_body.apply(this, arguments); }
      },
      setDefaultActionAndTarget: {
        value: function setDefaultActionAndTarget() { return this.set_default_action_and_target.apply(this, arguments); }
      },
      setDefaultAction: {
        value: function setDefaultAction() { return this.set_default_action.apply(this, arguments); }
      },
      setIcon: {
        value: function setIcon() { return this.set_icon.apply(this, arguments); }
      },
      setTitle: {
        value: function setTitle() { return this.set_title.apply(this, arguments); }
      },
      setUrgent: {
        value: function setUrgent() { return this.set_urgent.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.OutputStream.prototype,
    {
      clearPending: {
        value: function clearPending() { return this.clear_pending.apply(this, arguments); }
      },
      closeAsync: {
        value: function closeAsync() { return this.close_async.apply(this, arguments); }
      },
      closeFinish: {
        value: function closeFinish() { return this.close_finish.apply(this, arguments); }
      },
      flushAsync: {
        value: function flushAsync() { return this.flush_async.apply(this, arguments); }
      },
      flushFinish: {
        value: function flushFinish() { return this.flush_finish.apply(this, arguments); }
      },
      hasPending: {
        value: function hasPending() { return this.has_pending.apply(this, arguments); }
      },
      isClosed: {
        value: function isClosed() { return this.is_closed.apply(this, arguments); }
      },
      isClosing: {
        value: function isClosing() { return this.is_closing.apply(this, arguments); }
      },
      setPending: {
        value: function setPending() { return this.set_pending.apply(this, arguments); }
      },
      spliceAsync: {
        value: function spliceAsync() { return this.splice_async.apply(this, arguments); }
      },
      spliceFinish: {
        value: function spliceFinish() { return this.splice_finish.apply(this, arguments); }
      },
      writeAll: {
        value: function writeAll() { return this.write_all.apply(this, arguments); }
      },
      writeAsync: {
        value: function writeAsync() { return this.write_async.apply(this, arguments); }
      },
      writeBytesAsync: {
        value: function writeBytesAsync() { return this.write_bytes_async.apply(this, arguments); }
      },
      writeBytesFinish: {
        value: function writeBytesFinish() { return this.write_bytes_finish.apply(this, arguments); }
      },
      writeBytes: {
        value: function writeBytes() { return this.write_bytes.apply(this, arguments); }
      },
      writeFinish: {
        value: function writeFinish() { return this.write_finish.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Permission.prototype,
    {
      acquireAsync: {
        value: function acquireAsync() { return this.acquire_async.apply(this, arguments); }
      },
      acquireFinish: {
        value: function acquireFinish() { return this.acquire_finish.apply(this, arguments); }
      },
      getAllowed: {
        value: function getAllowed() { return this.get_allowed.apply(this, arguments); }
      },
      getCanAcquire: {
        value: function getCanAcquire() { return this.get_can_acquire.apply(this, arguments); }
      },
      getCanRelease: {
        value: function getCanRelease() { return this.get_can_release.apply(this, arguments); }
      },
      implUpdate: {
        value: function implUpdate() { return this.impl_update.apply(this, arguments); }
      },
      releaseAsync: {
        value: function releaseAsync() { return this.release_async.apply(this, arguments); }
      },
      releaseFinish: {
        value: function releaseFinish() { return this.release_finish.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.PollableInputStream.prototype,
    {
      canPoll: {
        value: function canPoll() { return this.can_poll.apply(this, arguments); }
      },
      createSource: {
        value: function createSource() { return this.create_source.apply(this, arguments); }
      },
      isReadable: {
        value: function isReadable() { return this.is_readable.apply(this, arguments); }
      },
      readNonblocking: {
        value: function readNonblocking() { return this.read_nonblocking.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.PollableOutputStream.prototype,
    {
      canPoll: {
        value: function canPoll() { return this.can_poll.apply(this, arguments); }
      },
      createSource: {
        value: function createSource() { return this.create_source.apply(this, arguments); }
      },
      isWritable: {
        value: function isWritable() { return this.is_writable.apply(this, arguments); }
      },
      writeNonblocking: {
        value: function writeNonblocking() { return this.write_nonblocking.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.ProxyAddress.prototype,
    {
      getDestinationHostname: {
        value: function getDestinationHostname() { return this.get_destination_hostname.apply(this, arguments); }
      },
      getDestinationPort: {
        value: function getDestinationPort() { return this.get_destination_port.apply(this, arguments); }
      },
      getDestinationProtocol: {
        value: function getDestinationProtocol() { return this.get_destination_protocol.apply(this, arguments); }
      },
      getPassword: {
        value: function getPassword() { return this.get_password.apply(this, arguments); }
      },
      getProtocol: {
        value: function getProtocol() { return this.get_protocol.apply(this, arguments); }
      },
      getUri: {
        value: function getUri() { return this.get_uri.apply(this, arguments); }
      },
      getUsername: {
        value: function getUsername() { return this.get_username.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Proxy.prototype,
    {
      connectAsync: {
        value: function connectAsync() { return this.connect_async.apply(this, arguments); }
      },
      connectFinish: {
        value: function connectFinish() { return this.connect_finish.apply(this, arguments); }
      },
      getDefaultForProtocol: {
        get: function () { return this.get_default_for_protocol; },
        set: function (value) { this.get_default_for_protocol = value; }
      },
      supportsHostname: {
        value: function supportsHostname() { return this.supports_hostname.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.ProxyResolver.prototype,
    {
      getDefault: {
        get: function () { return this.get_default; },
        set: function (value) { this.get_default = value; }
      },
      isSupported: {
        value: function isSupported() { return this.is_supported.apply(this, arguments); }
      },
      lookupAsync: {
        value: function lookupAsync() { return this.lookup_async.apply(this, arguments); }
      },
      lookupFinish: {
        value: function lookupFinish() { return this.lookup_finish.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.RemoteActionGroup.prototype,
    {
      activateActionFull: {
        value: function activateActionFull() { return this.activate_action_full.apply(this, arguments); }
      },
      changeActionStateFull: {
        value: function changeActionStateFull() { return this.change_action_state_full.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Resolver.prototype,
    {
      getDefault: {
        get: function () { return this.get_default; },
        set: function (value) { this.get_default = value; }
      },
      lookupByAddressAsync: {
        value: function lookupByAddressAsync() { return this.lookup_by_address_async.apply(this, arguments); }
      },
      lookupByAddressFinish: {
        value: function lookupByAddressFinish() { return this.lookup_by_address_finish.apply(this, arguments); }
      },
      lookupByAddress: {
        value: function lookupByAddress() { return this.lookup_by_address.apply(this, arguments); }
      },
      lookupByNameAsync: {
        value: function lookupByNameAsync() { return this.lookup_by_name_async.apply(this, arguments); }
      },
      lookupByNameFinish: {
        value: function lookupByNameFinish() { return this.lookup_by_name_finish.apply(this, arguments); }
      },
      lookupByName: {
        value: function lookupByName() { return this.lookup_by_name.apply(this, arguments); }
      },
      lookupRecordsAsync: {
        value: function lookupRecordsAsync() { return this.lookup_records_async.apply(this, arguments); }
      },
      lookupRecordsFinish: {
        value: function lookupRecordsFinish() { return this.lookup_records_finish.apply(this, arguments); }
      },
      lookupRecords: {
        value: function lookupRecords() { return this.lookup_records.apply(this, arguments); }
      },
      lookupServiceAsync: {
        value: function lookupServiceAsync() { return this.lookup_service_async.apply(this, arguments); }
      },
      lookupServiceFinish: {
        value: function lookupServiceFinish() { return this.lookup_service_finish.apply(this, arguments); }
      },
      lookupService: {
        value: function lookupService() { return this.lookup_service.apply(this, arguments); }
      },
      setDefault: {
        value: function setDefault() { return this.set_default.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Resource.prototype,
    {
      enumerateChildren: {
        value: function enumerateChildren() { return this.enumerate_children.apply(this, arguments); }
      },
      getInfo: {
        value: function getInfo() { return this.get_info.apply(this, arguments); }
      },
      lookupData: {
        value: function lookupData() { return this.lookup_data.apply(this, arguments); }
      },
      newFromData: {
        get: function () { return this.new_from_data; },
        set: function (value) { this.new_from_data = value; }
      },
      openStream: {
        value: function openStream() { return this.open_stream.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Seekable.prototype,
    {
      canSeek: {
        value: function canSeek() { return this.can_seek.apply(this, arguments); }
      },
      canTruncate: {
        value: function canTruncate() { return this.can_truncate.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Settings.prototype,
    {
      bindWritable: {
        value: function bindWritable() { return this.bind_writable.apply(this, arguments); }
      },
      createAction: {
        value: function createAction() { return this.create_action.apply(this, arguments); }
      },
      getBoolean: {
        value: function getBoolean() { return this.get_boolean.apply(this, arguments); }
      },
      getChild: {
        value: function getChild() { return this.get_child.apply(this, arguments); }
      },
      getDefaultValue: {
        value: function getDefaultValue() { return this.get_default_value.apply(this, arguments); }
      },
      getDouble: {
        value: function getDouble() { return this.get_double.apply(this, arguments); }
      },
      getEnum: {
        value: function getEnum() { return this.get_enum.apply(this, arguments); }
      },
      getFlags: {
        value: function getFlags() { return this.get_flags.apply(this, arguments); }
      },
      getHasUnapplied: {
        value: function getHasUnapplied() { return this.get_has_unapplied.apply(this, arguments); }
      },
      getInt: {
        value: function getInt() { return this.get_int.apply(this, arguments); }
      },
      getMapped: {
        value: function getMapped() { return this.get_mapped.apply(this, arguments); }
      },
      getRange: {
        value: function getRange() { return this.get_range.apply(this, arguments); }
      },
      getString: {
        value: function getString() { return this.get_string.apply(this, arguments); }
      },
      getStrv: {
        value: function getStrv() { return this.get_strv.apply(this, arguments); }
      },
      getUint: {
        value: function getUint() { return this.get_uint.apply(this, arguments); }
      },
      getUserValue: {
        value: function getUserValue() { return this.get_user_value.apply(this, arguments); }
      },
      getValue: {
        value: function getValue() { return this.get_value.apply(this, arguments); }
      },
      isWritable: {
        value: function isWritable() { return this.is_writable.apply(this, arguments); }
      },
      listChildren: {
        value: function listChildren() { return this.list_children.apply(this, arguments); }
      },
      listKeys: {
        value: function listKeys() { return this.list_keys.apply(this, arguments); }
      },
      listRelocatableSchemas: {
        get: function () { return this.list_relocatable_schemas; },
        set: function (value) { this.list_relocatable_schemas = value; }
      },
      listSchemas: {
        get: function () { return this.list_schemas; },
        set: function (value) { this.list_schemas = value; }
      },
      newFull: {
        get: function () { return this.new_full; },
        set: function (value) { this.new_full = value; }
      },
      newWithBackendAndPath: {
        get: function () { return this.new_with_backend_and_path; },
        set: function (value) { this.new_with_backend_and_path = value; }
      },
      newWithBackend: {
        get: function () { return this.new_with_backend; },
        set: function (value) { this.new_with_backend = value; }
      },
      newWithPath: {
        get: function () { return this.new_with_path; },
        set: function (value) { this.new_with_path = value; }
      },
      rangeCheck: {
        value: function rangeCheck() { return this.range_check.apply(this, arguments); }
      },
      setBoolean: {
        value: function setBoolean() { return this.set_boolean.apply(this, arguments); }
      },
      setDouble: {
        value: function setDouble() { return this.set_double.apply(this, arguments); }
      },
      setEnum: {
        value: function setEnum() { return this.set_enum.apply(this, arguments); }
      },
      setFlags: {
        value: function setFlags() { return this.set_flags.apply(this, arguments); }
      },
      setInt: {
        value: function setInt() { return this.set_int.apply(this, arguments); }
      },
      setString: {
        value: function setString() { return this.set_string.apply(this, arguments); }
      },
      setStrv: {
        value: function setStrv() { return this.set_strv.apply(this, arguments); }
      },
      setUint: {
        value: function setUint() { return this.set_uint.apply(this, arguments); }
      },
      setValue: {
        value: function setValue() { return this.set_value.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SettingsSchema.prototype,
    {
      getId: {
        value: function getId() { return this.get_id.apply(this, arguments); }
      },
      getKey: {
        value: function getKey() { return this.get_key.apply(this, arguments); }
      },
      getPath: {
        value: function getPath() { return this.get_path.apply(this, arguments); }
      },
      hasKey: {
        value: function hasKey() { return this.has_key.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SettingsSchemaKey.prototype,
    {
      getDefaultValue: {
        value: function getDefaultValue() { return this.get_default_value.apply(this, arguments); }
      },
      getDescription: {
        value: function getDescription() { return this.get_description.apply(this, arguments); }
      },
      getRange: {
        value: function getRange() { return this.get_range.apply(this, arguments); }
      },
      getSummary: {
        value: function getSummary() { return this.get_summary.apply(this, arguments); }
      },
      getValueType: {
        value: function getValueType() { return this.get_value_type.apply(this, arguments); }
      },
      rangeCheck: {
        value: function rangeCheck() { return this.range_check.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SettingsSchemaSource.prototype,
    {
      getDefault: {
        get: function () { return this.get_default; },
        set: function (value) { this.get_default = value; }
      },
      listSchemas: {
        value: function listSchemas() { return this.list_schemas.apply(this, arguments); }
      },
      newFromDirectory: {
        get: function () { return this.new_from_directory; },
        set: function (value) { this.new_from_directory = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.SimpleActionGroup.prototype,
    {
      addEntries: {
        value: function addEntries() { return this.add_entries.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SimpleAction.prototype,
    {
      newStateful: {
        get: function () { return this.new_stateful; },
        set: function (value) { this.new_stateful = value; }
      },
      setEnabled: {
        value: function setEnabled() { return this.set_enabled.apply(this, arguments); }
      },
      setState: {
        value: function setState() { return this.set_state.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SimpleAsyncResult.prototype,
    {
      completeInIdle: {
        value: function completeInIdle() { return this.complete_in_idle.apply(this, arguments); }
      },
      getOpResGboolean: {
        value: function getOpResGboolean() { return this.get_op_res_gboolean.apply(this, arguments); }
      },
      getOpResGssize: {
        value: function getOpResGssize() { return this.get_op_res_gssize.apply(this, arguments); }
      },
      getOpResGvalue: {
        get: function () { return this.get_op_res_gvalue; },
        set: function (value) { this.get_op_res_gvalue = value; }
      },
      isValid: {
        get: function () { return this.is_valid; },
        set: function (value) { this.is_valid = value; }
      },
      newFromError: {
        get: function () { return this.new_from_error; },
        set: function (value) { this.new_from_error = value; }
      },
      propagateError: {
        value: function propagateError() { return this.propagate_error.apply(this, arguments); }
      },
      setCheckCancellable: {
        value: function setCheckCancellable() { return this.set_check_cancellable.apply(this, arguments); }
      },
      setFromError: {
        value: function setFromError() { return this.set_from_error.apply(this, arguments); }
      },
      setHandleCancellation: {
        value: function setHandleCancellation() { return this.set_handle_cancellation.apply(this, arguments); }
      },
      setOpResGboolean: {
        value: function setOpResGboolean() { return this.set_op_res_gboolean.apply(this, arguments); }
      },
      setOpResGssize: {
        value: function setOpResGssize() { return this.set_op_res_gssize.apply(this, arguments); }
      },
      setOpResGvalue: {
        get: function () { return this.set_op_res_gvalue; },
        set: function (value) { this.set_op_res_gvalue = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.SimpleProxyResolver.prototype,
    {
      setDefaultProxy: {
        value: function setDefaultProxy() { return this.set_default_proxy.apply(this, arguments); }
      },
      setIgnoreHosts: {
        value: function setIgnoreHosts() { return this.set_ignore_hosts.apply(this, arguments); }
      },
      setUriProxy: {
        value: function setUriProxy() { return this.set_uri_proxy.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Socket.prototype,
    {
      checkConnectResult: {
        value: function checkConnectResult() { return this.check_connect_result.apply(this, arguments); }
      },
      conditionCheck: {
        value: function conditionCheck() { return this.condition_check.apply(this, arguments); }
      },
      conditionTimedWait: {
        value: function conditionTimedWait() { return this.condition_timed_wait.apply(this, arguments); }
      },
      conditionWait: {
        value: function conditionWait() { return this.condition_wait.apply(this, arguments); }
      },
      connectionFactoryCreateConnection: {
        value: function connectionFactoryCreateConnection() { return this.connection_factory_create_connection.apply(this, arguments); }
      },
      getAvailableBytes: {
        value: function getAvailableBytes() { return this.get_available_bytes.apply(this, arguments); }
      },
      getBlocking: {
        value: function getBlocking() { return this.get_blocking.apply(this, arguments); }
      },
      getBroadcast: {
        value: function getBroadcast() { return this.get_broadcast.apply(this, arguments); }
      },
      getCredentials: {
        value: function getCredentials() { return this.get_credentials.apply(this, arguments); }
      },
      getFamily: {
        value: function getFamily() { return this.get_family.apply(this, arguments); }
      },
      getFd: {
        value: function getFd() { return this.get_fd.apply(this, arguments); }
      },
      getKeepalive: {
        value: function getKeepalive() { return this.get_keepalive.apply(this, arguments); }
      },
      getListenBacklog: {
        value: function getListenBacklog() { return this.get_listen_backlog.apply(this, arguments); }
      },
      getLocalAddress: {
        value: function getLocalAddress() { return this.get_local_address.apply(this, arguments); }
      },
      getMulticastLoopback: {
        value: function getMulticastLoopback() { return this.get_multicast_loopback.apply(this, arguments); }
      },
      getMulticastTtl: {
        value: function getMulticastTtl() { return this.get_multicast_ttl.apply(this, arguments); }
      },
      getOption: {
        value: function getOption() { return this.get_option.apply(this, arguments); }
      },
      getProtocol: {
        value: function getProtocol() { return this.get_protocol.apply(this, arguments); }
      },
      getRemoteAddress: {
        value: function getRemoteAddress() { return this.get_remote_address.apply(this, arguments); }
      },
      getSocketType: {
        value: function getSocketType() { return this.get_socket_type.apply(this, arguments); }
      },
      getTimeout: {
        value: function getTimeout() { return this.get_timeout.apply(this, arguments); }
      },
      getTtl: {
        value: function getTtl() { return this.get_ttl.apply(this, arguments); }
      },
      isClosed: {
        value: function isClosed() { return this.is_closed.apply(this, arguments); }
      },
      isConnected: {
        value: function isConnected() { return this.is_connected.apply(this, arguments); }
      },
      joinMulticastGroup: {
        value: function joinMulticastGroup() { return this.join_multicast_group.apply(this, arguments); }
      },
      leaveMulticastGroup: {
        value: function leaveMulticastGroup() { return this.leave_multicast_group.apply(this, arguments); }
      },
      newFromFd: {
        get: function () { return this.new_from_fd; },
        set: function (value) { this.new_from_fd = value; }
      },
      receiveFrom: {
        value: function receiveFrom() { return this.receive_from.apply(this, arguments); }
      },
      receiveMessage: {
        value: function receiveMessage() { return this.receive_message.apply(this, arguments); }
      },
      receiveWithBlocking: {
        value: function receiveWithBlocking() { return this.receive_with_blocking.apply(this, arguments); }
      },
      sendMessage: {
        value: function sendMessage() { return this.send_message.apply(this, arguments); }
      },
      sendTo: {
        value: function sendTo() { return this.send_to.apply(this, arguments); }
      },
      sendWithBlocking: {
        value: function sendWithBlocking() { return this.send_with_blocking.apply(this, arguments); }
      },
      setBlocking: {
        value: function setBlocking() { return this.set_blocking.apply(this, arguments); }
      },
      setBroadcast: {
        value: function setBroadcast() { return this.set_broadcast.apply(this, arguments); }
      },
      setKeepalive: {
        value: function setKeepalive() { return this.set_keepalive.apply(this, arguments); }
      },
      setListenBacklog: {
        value: function setListenBacklog() { return this.set_listen_backlog.apply(this, arguments); }
      },
      setMulticastLoopback: {
        value: function setMulticastLoopback() { return this.set_multicast_loopback.apply(this, arguments); }
      },
      setMulticastTtl: {
        value: function setMulticastTtl() { return this.set_multicast_ttl.apply(this, arguments); }
      },
      setOption: {
        value: function setOption() { return this.set_option.apply(this, arguments); }
      },
      setTimeout: {
        value: function setTimeout() { return this.set_timeout.apply(this, arguments); }
      },
      setTtl: {
        value: function setTtl() { return this.set_ttl.apply(this, arguments); }
      },
      speaksIpv4: {
        value: function speaksIpv4() { return this.speaks_ipv4.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SocketAddressEnumerator.prototype,
    {
      nextAsync: {
        value: function nextAsync() { return this.next_async.apply(this, arguments); }
      },
      nextFinish: {
        value: function nextFinish() { return this.next_finish.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SocketAddress.prototype,
    {
      getFamily: {
        value: function getFamily() { return this.get_family.apply(this, arguments); }
      },
      getNativeSize: {
        value: function getNativeSize() { return this.get_native_size.apply(this, arguments); }
      },
      newFromNative: {
        get: function () { return this.new_from_native; },
        set: function (value) { this.new_from_native = value; }
      },
      toNative: {
        value: function toNative() { return this.to_native.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SocketClient.prototype,
    {
      addApplicationProxy: {
        value: function addApplicationProxy() { return this.add_application_proxy.apply(this, arguments); }
      },
      connectAsync: {
        value: function connectAsync() { return this.connect_async.apply(this, arguments); }
      },
      connectFinish: {
        value: function connectFinish() { return this.connect_finish.apply(this, arguments); }
      },
      connectToHostAsync: {
        value: function connectToHostAsync() { return this.connect_to_host_async.apply(this, arguments); }
      },
      connectToHostFinish: {
        value: function connectToHostFinish() { return this.connect_to_host_finish.apply(this, arguments); }
      },
      connectToHost: {
        value: function connectToHost() { return this.connect_to_host.apply(this, arguments); }
      },
      connectToServiceAsync: {
        value: function connectToServiceAsync() { return this.connect_to_service_async.apply(this, arguments); }
      },
      connectToServiceFinish: {
        value: function connectToServiceFinish() { return this.connect_to_service_finish.apply(this, arguments); }
      },
      connectToService: {
        value: function connectToService() { return this.connect_to_service.apply(this, arguments); }
      },
      connectToUriAsync: {
        value: function connectToUriAsync() { return this.connect_to_uri_async.apply(this, arguments); }
      },
      connectToUriFinish: {
        value: function connectToUriFinish() { return this.connect_to_uri_finish.apply(this, arguments); }
      },
      connectToUri: {
        value: function connectToUri() { return this.connect_to_uri.apply(this, arguments); }
      },
      getEnableProxy: {
        value: function getEnableProxy() { return this.get_enable_proxy.apply(this, arguments); }
      },
      getFamily: {
        value: function getFamily() { return this.get_family.apply(this, arguments); }
      },
      getLocalAddress: {
        value: function getLocalAddress() { return this.get_local_address.apply(this, arguments); }
      },
      getProtocol: {
        value: function getProtocol() { return this.get_protocol.apply(this, arguments); }
      },
      getProxyResolver: {
        value: function getProxyResolver() { return this.get_proxy_resolver.apply(this, arguments); }
      },
      getSocketType: {
        value: function getSocketType() { return this.get_socket_type.apply(this, arguments); }
      },
      getTimeout: {
        value: function getTimeout() { return this.get_timeout.apply(this, arguments); }
      },
      getTls: {
        value: function getTls() { return this.get_tls.apply(this, arguments); }
      },
      getTlsValidationFlags: {
        value: function getTlsValidationFlags() { return this.get_tls_validation_flags.apply(this, arguments); }
      },
      setEnableProxy: {
        value: function setEnableProxy() { return this.set_enable_proxy.apply(this, arguments); }
      },
      setFamily: {
        value: function setFamily() { return this.set_family.apply(this, arguments); }
      },
      setLocalAddress: {
        value: function setLocalAddress() { return this.set_local_address.apply(this, arguments); }
      },
      setProtocol: {
        value: function setProtocol() { return this.set_protocol.apply(this, arguments); }
      },
      setProxyResolver: {
        value: function setProxyResolver() { return this.set_proxy_resolver.apply(this, arguments); }
      },
      setSocketType: {
        value: function setSocketType() { return this.set_socket_type.apply(this, arguments); }
      },
      setTimeout: {
        value: function setTimeout() { return this.set_timeout.apply(this, arguments); }
      },
      setTls: {
        value: function setTls() { return this.set_tls.apply(this, arguments); }
      },
      setTlsValidationFlags: {
        value: function setTlsValidationFlags() { return this.set_tls_validation_flags.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SocketConnectable.prototype,
    {
      proxyEnumerate: {
        value: function proxyEnumerate() { return this.proxy_enumerate.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SocketConnection.prototype,
    {
      connectAsync: {
        value: function connectAsync() { return this.connect_async.apply(this, arguments); }
      },
      connectFinish: {
        value: function connectFinish() { return this.connect_finish.apply(this, arguments); }
      },
      factoryLookupType: {
        get: function () { return this.factory_lookup_type; },
        set: function (value) { this.factory_lookup_type = value; }
      },
      factoryRegisterType: {
        get: function () { return this.factory_register_type; },
        set: function (value) { this.factory_register_type = value; }
      },
      getLocalAddress: {
        value: function getLocalAddress() { return this.get_local_address.apply(this, arguments); }
      },
      getRemoteAddress: {
        value: function getRemoteAddress() { return this.get_remote_address.apply(this, arguments); }
      },
      getSocket: {
        value: function getSocket() { return this.get_socket.apply(this, arguments); }
      },
      isConnected: {
        value: function isConnected() { return this.is_connected.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SocketControlMessage.prototype,
    {
      getLevel: {
        value: function getLevel() { return this.get_level.apply(this, arguments); }
      },
      getMsgType: {
        value: function getMsgType() { return this.get_msg_type.apply(this, arguments); }
      },
      getSize: {
        value: function getSize() { return this.get_size.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SocketListener.prototype,
    {
      acceptAsync: {
        value: function acceptAsync() { return this.accept_async.apply(this, arguments); }
      },
      acceptFinish: {
        value: function acceptFinish() { return this.accept_finish.apply(this, arguments); }
      },
      acceptSocketAsync: {
        value: function acceptSocketAsync() { return this.accept_socket_async.apply(this, arguments); }
      },
      acceptSocketFinish: {
        value: function acceptSocketFinish() { return this.accept_socket_finish.apply(this, arguments); }
      },
      acceptSocket: {
        value: function acceptSocket() { return this.accept_socket.apply(this, arguments); }
      },
      addAddress: {
        value: function addAddress() { return this.add_address.apply(this, arguments); }
      },
      addAnyInetPort: {
        value: function addAnyInetPort() { return this.add_any_inet_port.apply(this, arguments); }
      },
      addInetPort: {
        value: function addInetPort() { return this.add_inet_port.apply(this, arguments); }
      },
      addSocket: {
        value: function addSocket() { return this.add_socket.apply(this, arguments); }
      },
      setBacklog: {
        value: function setBacklog() { return this.set_backlog.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SocketService.prototype,
    {
      isActive: {
        value: function isActive() { return this.is_active.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SrvTarget.prototype,
    {
      getHostname: {
        value: function getHostname() { return this.get_hostname.apply(this, arguments); }
      },
      getPort: {
        value: function getPort() { return this.get_port.apply(this, arguments); }
      },
      getPriority: {
        value: function getPriority() { return this.get_priority.apply(this, arguments); }
      },
      getWeight: {
        value: function getWeight() { return this.get_weight.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.StaticResource.prototype,
    {
      getResource: {
        value: function getResource() { return this.get_resource.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Subprocess.prototype,
    {
      communicateAsync: {
        value: function communicateAsync() { return this.communicate_async.apply(this, arguments); }
      },
      communicateFinish: {
        value: function communicateFinish() { return this.communicate_finish.apply(this, arguments); }
      },
      communicateUtf8Async: {
        value: function communicateUtf8Async() { return this.communicate_utf8_async.apply(this, arguments); }
      },
      communicateUtf8Finish: {
        value: function communicateUtf8Finish() { return this.communicate_utf8_finish.apply(this, arguments); }
      },
      communicateUtf8: {
        value: function communicateUtf8() { return this.communicate_utf8.apply(this, arguments); }
      },
      forceExit: {
        value: function forceExit() { return this.force_exit.apply(this, arguments); }
      },
      getExitStatus: {
        value: function getExitStatus() { return this.get_exit_status.apply(this, arguments); }
      },
      getIdentifier: {
        value: function getIdentifier() { return this.get_identifier.apply(this, arguments); }
      },
      getIfExited: {
        value: function getIfExited() { return this.get_if_exited.apply(this, arguments); }
      },
      getIfSignaled: {
        value: function getIfSignaled() { return this.get_if_signaled.apply(this, arguments); }
      },
      getStatus: {
        value: function getStatus() { return this.get_status.apply(this, arguments); }
      },
      getStderrPipe: {
        value: function getStderrPipe() { return this.get_stderr_pipe.apply(this, arguments); }
      },
      getStdinPipe: {
        value: function getStdinPipe() { return this.get_stdin_pipe.apply(this, arguments); }
      },
      getStdoutPipe: {
        value: function getStdoutPipe() { return this.get_stdout_pipe.apply(this, arguments); }
      },
      getSuccessful: {
        value: function getSuccessful() { return this.get_successful.apply(this, arguments); }
      },
      getTermSig: {
        value: function getTermSig() { return this.get_term_sig.apply(this, arguments); }
      },
      sendSignal: {
        value: function sendSignal() { return this.send_signal.apply(this, arguments); }
      },
      waitAsync: {
        value: function waitAsync() { return this.wait_async.apply(this, arguments); }
      },
      waitCheckAsync: {
        value: function waitCheckAsync() { return this.wait_check_async.apply(this, arguments); }
      },
      waitCheckFinish: {
        value: function waitCheckFinish() { return this.wait_check_finish.apply(this, arguments); }
      },
      waitCheck: {
        value: function waitCheck() { return this.wait_check.apply(this, arguments); }
      },
      waitFinish: {
        value: function waitFinish() { return this.wait_finish.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.SubprocessLauncher.prototype,
    {
      setChildSetup: {
        value: function setChildSetup() { return this.set_child_setup.apply(this, arguments); }
      },
      setCwd: {
        value: function setCwd() { return this.set_cwd.apply(this, arguments); }
      },
      setEnviron: {
        value: function setEnviron() { return this.set_environ.apply(this, arguments); }
      },
      setFlags: {
        value: function setFlags() { return this.set_flags.apply(this, arguments); }
      },
      setStderrFilePath: {
        value: function setStderrFilePath() { return this.set_stderr_file_path.apply(this, arguments); }
      },
      setStdinFilePath: {
        value: function setStdinFilePath() { return this.set_stdin_file_path.apply(this, arguments); }
      },
      setStdoutFilePath: {
        value: function setStdoutFilePath() { return this.set_stdout_file_path.apply(this, arguments); }
      },
      takeFd: {
        value: function takeFd() { return this.take_fd.apply(this, arguments); }
      },
      takeStderrFd: {
        value: function takeStderrFd() { return this.take_stderr_fd.apply(this, arguments); }
      },
      takeStdinFd: {
        value: function takeStdinFd() { return this.take_stdin_fd.apply(this, arguments); }
      },
      takeStdoutFd: {
        value: function takeStdoutFd() { return this.take_stdout_fd.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Task.prototype,
    {
      getCancellable: {
        value: function getCancellable() { return this.get_cancellable.apply(this, arguments); }
      },
      getCheckCancellable: {
        value: function getCheckCancellable() { return this.get_check_cancellable.apply(this, arguments); }
      },
      getContext: {
        value: function getContext() { return this.get_context.apply(this, arguments); }
      },
      getPriority: {
        value: function getPriority() { return this.get_priority.apply(this, arguments); }
      },
      getReturnOnCancel: {
        value: function getReturnOnCancel() { return this.get_return_on_cancel.apply(this, arguments); }
      },
      getSourceObject: {
        value: function getSourceObject() { return this.get_source_object.apply(this, arguments); }
      },
      getSourceTag: {
        value: function getSourceTag() { return this.get_source_tag.apply(this, arguments); }
      },
      getTaskData: {
        value: function getTaskData() { return this.get_task_data.apply(this, arguments); }
      },
      hadError: {
        value: function hadError() { return this.had_error.apply(this, arguments); }
      },
      isValid: {
        get: function () { return this.is_valid; },
        set: function (value) { this.is_valid = value; }
      },
      propagateBoolean: {
        value: function propagateBoolean() { return this.propagate_boolean.apply(this, arguments); }
      },
      propagateInt: {
        value: function propagateInt() { return this.propagate_int.apply(this, arguments); }
      },
      propagatePointer: {
        value: function propagatePointer() { return this.propagate_pointer.apply(this, arguments); }
      },
      reportError: {
        get: function () { return this.report_error; },
        set: function (value) { this.report_error = value; }
      },
      returnBoolean: {
        value: function returnBoolean() { return this.return_boolean.apply(this, arguments); }
      },
      returnErrorIfCancelled: {
        value: function returnErrorIfCancelled() { return this.return_error_if_cancelled.apply(this, arguments); }
      },
      returnError: {
        value: function returnError() { return this.return_error.apply(this, arguments); }
      },
      returnInt: {
        value: function returnInt() { return this.return_int.apply(this, arguments); }
      },
      returnPointer: {
        value: function returnPointer() { return this.return_pointer.apply(this, arguments); }
      },
      setCheckCancellable: {
        value: function setCheckCancellable() { return this.set_check_cancellable.apply(this, arguments); }
      },
      setPriority: {
        value: function setPriority() { return this.set_priority.apply(this, arguments); }
      },
      setReturnOnCancel: {
        value: function setReturnOnCancel() { return this.set_return_on_cancel.apply(this, arguments); }
      },
      setSourceTag: {
        value: function setSourceTag() { return this.set_source_tag.apply(this, arguments); }
      },
      setTaskData: {
        value: function setTaskData() { return this.set_task_data.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.TcpConnection.prototype,
    {
      getGracefulDisconnect: {
        value: function getGracefulDisconnect() { return this.get_graceful_disconnect.apply(this, arguments); }
      },
      setGracefulDisconnect: {
        value: function setGracefulDisconnect() { return this.set_graceful_disconnect.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.TcpWrapperConnection.prototype,
    {
      getBaseIoStream: {
        value: function getBaseIoStream() { return this.get_base_io_stream.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.TestDBus.prototype,
    {
      addServiceDir: {
        value: function addServiceDir() { return this.add_service_dir.apply(this, arguments); }
      },
      getBusAddress: {
        value: function getBusAddress() { return this.get_bus_address.apply(this, arguments); }
      },
      getFlags: {
        value: function getFlags() { return this.get_flags.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.ThemedIcon.prototype,
    {
      appendName: {
        value: function appendName() { return this.append_name.apply(this, arguments); }
      },
      getNames: {
        value: function getNames() { return this.get_names.apply(this, arguments); }
      },
      newFromNames: {
        get: function () { return this.new_from_names; },
        set: function (value) { this.new_from_names = value; }
      },
      newWithDefaultFallbacks: {
        get: function () { return this.new_with_default_fallbacks; },
        set: function (value) { this.new_with_default_fallbacks = value; }
      },
      prependName: {
        value: function prependName() { return this.prepend_name.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.TlsBackend.prototype,
    {
      getCertificateType: {
        value: function getCertificateType() { return this.get_certificate_type.apply(this, arguments); }
      },
      getClientConnectionType: {
        value: function getClientConnectionType() { return this.get_client_connection_type.apply(this, arguments); }
      },
      getDefaultDatabase: {
        value: function getDefaultDatabase() { return this.get_default_database.apply(this, arguments); }
      },
      getDefault: {
        get: function () { return this.get_default; },
        set: function (value) { this.get_default = value; }
      },
      getFileDatabaseType: {
        value: function getFileDatabaseType() { return this.get_file_database_type.apply(this, arguments); }
      },
      getServerConnectionType: {
        value: function getServerConnectionType() { return this.get_server_connection_type.apply(this, arguments); }
      },
      supportsTls: {
        value: function supportsTls() { return this.supports_tls.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.TlsCertificate.prototype,
    {
      getIssuer: {
        value: function getIssuer() { return this.get_issuer.apply(this, arguments); }
      },
      isSame: {
        value: function isSame() { return this.is_same.apply(this, arguments); }
      },
      listNewFromFile: {
        get: function () { return this.list_new_from_file; },
        set: function (value) { this.list_new_from_file = value; }
      },
      newFromFile: {
        get: function () { return this.new_from_file; },
        set: function (value) { this.new_from_file = value; }
      },
      newFromFiles: {
        get: function () { return this.new_from_files; },
        set: function (value) { this.new_from_files = value; }
      },
      newFromPem: {
        get: function () { return this.new_from_pem; },
        set: function (value) { this.new_from_pem = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.TlsClientConnection.prototype,
    {
      getAcceptedCas: {
        value: function getAcceptedCas() { return this.get_accepted_cas.apply(this, arguments); }
      },
      getServerIdentity: {
        value: function getServerIdentity() { return this.get_server_identity.apply(this, arguments); }
      },
      getUseSsl3: {
        value: function getUseSsl3() { return this.get_use_ssl3.apply(this, arguments); }
      },
      getValidationFlags: {
        value: function getValidationFlags() { return this.get_validation_flags.apply(this, arguments); }
      },
      setServerIdentity: {
        value: function setServerIdentity() { return this.set_server_identity.apply(this, arguments); }
      },
      setUseSsl3: {
        value: function setUseSsl3() { return this.set_use_ssl3.apply(this, arguments); }
      },
      setValidationFlags: {
        value: function setValidationFlags() { return this.set_validation_flags.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.TlsConnection.prototype,
    {
      emitAcceptCertificate: {
        value: function emitAcceptCertificate() { return this.emit_accept_certificate.apply(this, arguments); }
      },
      getCertificate: {
        value: function getCertificate() { return this.get_certificate.apply(this, arguments); }
      },
      getDatabase: {
        value: function getDatabase() { return this.get_database.apply(this, arguments); }
      },
      getInteraction: {
        value: function getInteraction() { return this.get_interaction.apply(this, arguments); }
      },
      getPeerCertificateErrors: {
        value: function getPeerCertificateErrors() { return this.get_peer_certificate_errors.apply(this, arguments); }
      },
      getPeerCertificate: {
        value: function getPeerCertificate() { return this.get_peer_certificate.apply(this, arguments); }
      },
      getRehandshakeMode: {
        value: function getRehandshakeMode() { return this.get_rehandshake_mode.apply(this, arguments); }
      },
      getRequireCloseNotify: {
        value: function getRequireCloseNotify() { return this.get_require_close_notify.apply(this, arguments); }
      },
      getUseSystemCertdb: {
        value: function getUseSystemCertdb() { return this.get_use_system_certdb.apply(this, arguments); }
      },
      handshakeAsync: {
        value: function handshakeAsync() { return this.handshake_async.apply(this, arguments); }
      },
      handshakeFinish: {
        value: function handshakeFinish() { return this.handshake_finish.apply(this, arguments); }
      },
      setCertificate: {
        value: function setCertificate() { return this.set_certificate.apply(this, arguments); }
      },
      setDatabase: {
        value: function setDatabase() { return this.set_database.apply(this, arguments); }
      },
      setInteraction: {
        value: function setInteraction() { return this.set_interaction.apply(this, arguments); }
      },
      setRehandshakeMode: {
        value: function setRehandshakeMode() { return this.set_rehandshake_mode.apply(this, arguments); }
      },
      setRequireCloseNotify: {
        value: function setRequireCloseNotify() { return this.set_require_close_notify.apply(this, arguments); }
      },
      setUseSystemCertdb: {
        value: function setUseSystemCertdb() { return this.set_use_system_certdb.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.TlsDatabase.prototype,
    {
      createCertificateHandle: {
        value: function createCertificateHandle() { return this.create_certificate_handle.apply(this, arguments); }
      },
      lookupCertificateForHandleAsync: {
        value: function lookupCertificateForHandleAsync() { return this.lookup_certificate_for_handle_async.apply(this, arguments); }
      },
      lookupCertificateForHandleFinish: {
        value: function lookupCertificateForHandleFinish() { return this.lookup_certificate_for_handle_finish.apply(this, arguments); }
      },
      lookupCertificateForHandle: {
        value: function lookupCertificateForHandle() { return this.lookup_certificate_for_handle.apply(this, arguments); }
      },
      lookupCertificateIssuerAsync: {
        value: function lookupCertificateIssuerAsync() { return this.lookup_certificate_issuer_async.apply(this, arguments); }
      },
      lookupCertificateIssuerFinish: {
        value: function lookupCertificateIssuerFinish() { return this.lookup_certificate_issuer_finish.apply(this, arguments); }
      },
      lookupCertificateIssuer: {
        value: function lookupCertificateIssuer() { return this.lookup_certificate_issuer.apply(this, arguments); }
      },
      lookupCertificatesIssuedByAsync: {
        value: function lookupCertificatesIssuedByAsync() { return this.lookup_certificates_issued_by_async.apply(this, arguments); }
      },
      lookupCertificatesIssuedByFinish: {
        value: function lookupCertificatesIssuedByFinish() { return this.lookup_certificates_issued_by_finish.apply(this, arguments); }
      },
      lookupCertificatesIssuedBy: {
        value: function lookupCertificatesIssuedBy() { return this.lookup_certificates_issued_by.apply(this, arguments); }
      },
      verifyChainAsync: {
        value: function verifyChainAsync() { return this.verify_chain_async.apply(this, arguments); }
      },
      verifyChainFinish: {
        value: function verifyChainFinish() { return this.verify_chain_finish.apply(this, arguments); }
      },
      verifyChain: {
        value: function verifyChain() { return this.verify_chain.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.TlsInteraction.prototype,
    {
      askPasswordAsync: {
        value: function askPasswordAsync() { return this.ask_password_async.apply(this, arguments); }
      },
      askPasswordFinish: {
        value: function askPasswordFinish() { return this.ask_password_finish.apply(this, arguments); }
      },
      askPassword: {
        value: function askPassword() { return this.ask_password.apply(this, arguments); }
      },
      invokeAskPassword: {
        value: function invokeAskPassword() { return this.invoke_ask_password.apply(this, arguments); }
      },
      invokeRequestCertificate: {
        value: function invokeRequestCertificate() { return this.invoke_request_certificate.apply(this, arguments); }
      },
      requestCertificateAsync: {
        value: function requestCertificateAsync() { return this.request_certificate_async.apply(this, arguments); }
      },
      requestCertificateFinish: {
        value: function requestCertificateFinish() { return this.request_certificate_finish.apply(this, arguments); }
      },
      requestCertificate: {
        value: function requestCertificate() { return this.request_certificate.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.TlsPassword.prototype,
    {
      getDescription: {
        value: function getDescription() { return this.get_description.apply(this, arguments); }
      },
      getFlags: {
        value: function getFlags() { return this.get_flags.apply(this, arguments); }
      },
      getValue: {
        value: function getValue() { return this.get_value.apply(this, arguments); }
      },
      getWarning: {
        value: function getWarning() { return this.get_warning.apply(this, arguments); }
      },
      setDescription: {
        value: function setDescription() { return this.set_description.apply(this, arguments); }
      },
      setFlags: {
        value: function setFlags() { return this.set_flags.apply(this, arguments); }
      },
      setValueFull: {
        value: function setValueFull() { return this.set_value_full.apply(this, arguments); }
      },
      setValue: {
        value: function setValue() { return this.set_value.apply(this, arguments); }
      },
      setWarning: {
        value: function setWarning() { return this.set_warning.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.UnixConnection.prototype,
    {
      receiveCredentialsAsync: {
        value: function receiveCredentialsAsync() { return this.receive_credentials_async.apply(this, arguments); }
      },
      receiveCredentialsFinish: {
        value: function receiveCredentialsFinish() { return this.receive_credentials_finish.apply(this, arguments); }
      },
      receiveCredentials: {
        value: function receiveCredentials() { return this.receive_credentials.apply(this, arguments); }
      },
      receiveFd: {
        value: function receiveFd() { return this.receive_fd.apply(this, arguments); }
      },
      sendCredentialsAsync: {
        value: function sendCredentialsAsync() { return this.send_credentials_async.apply(this, arguments); }
      },
      sendCredentialsFinish: {
        value: function sendCredentialsFinish() { return this.send_credentials_finish.apply(this, arguments); }
      },
      sendCredentials: {
        value: function sendCredentials() { return this.send_credentials.apply(this, arguments); }
      },
      sendFd: {
        value: function sendFd() { return this.send_fd.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.UnixCredentialsMessage.prototype,
    {
      getCredentials: {
        value: function getCredentials() { return this.get_credentials.apply(this, arguments); }
      },
      isSupported: {
        get: function () { return this.is_supported; },
        set: function (value) { this.is_supported = value; }
      },
      newWithCredentials: {
        get: function () { return this.new_with_credentials; },
        set: function (value) { this.new_with_credentials = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.UnixFDList.prototype,
    {
      getLength: {
        value: function getLength() { return this.get_length.apply(this, arguments); }
      },
      newFromArray: {
        get: function () { return this.new_from_array; },
        set: function (value) { this.new_from_array = value; }
      },
      peekFds: {
        value: function peekFds() { return this.peek_fds.apply(this, arguments); }
      },
      stealFds: {
        value: function stealFds() { return this.steal_fds.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.UnixFDMessage.prototype,
    {
      appendFd: {
        value: function appendFd() { return this.append_fd.apply(this, arguments); }
      },
      getFdList: {
        value: function getFdList() { return this.get_fd_list.apply(this, arguments); }
      },
      newWithFdList: {
        get: function () { return this.new_with_fd_list; },
        set: function (value) { this.new_with_fd_list = value; }
      },
      stealFds: {
        value: function stealFds() { return this.steal_fds.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.UnixInputStream.prototype,
    {
      getCloseFd: {
        value: function getCloseFd() { return this.get_close_fd.apply(this, arguments); }
      },
      getFd: {
        value: function getFd() { return this.get_fd.apply(this, arguments); }
      },
      setCloseFd: {
        value: function setCloseFd() { return this.set_close_fd.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.UnixMountMonitor.prototype,
    {
      setRateLimit: {
        value: function setRateLimit() { return this.set_rate_limit.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.UnixMountPoint.prototype,
    {
      getDevicePath: {
        value: function getDevicePath() { return this.get_device_path.apply(this, arguments); }
      },
      getFsType: {
        value: function getFsType() { return this.get_fs_type.apply(this, arguments); }
      },
      getMountPath: {
        value: function getMountPath() { return this.get_mount_path.apply(this, arguments); }
      },
      getOptions: {
        value: function getOptions() { return this.get_options.apply(this, arguments); }
      },
      guessCanEject: {
        value: function guessCanEject() { return this.guess_can_eject.apply(this, arguments); }
      },
      guessIcon: {
        value: function guessIcon() { return this.guess_icon.apply(this, arguments); }
      },
      guessName: {
        value: function guessName() { return this.guess_name.apply(this, arguments); }
      },
      guessSymbolicIcon: {
        value: function guessSymbolicIcon() { return this.guess_symbolic_icon.apply(this, arguments); }
      },
      isLoopback: {
        value: function isLoopback() { return this.is_loopback.apply(this, arguments); }
      },
      isReadonly: {
        value: function isReadonly() { return this.is_readonly.apply(this, arguments); }
      },
      isUserMountable: {
        value: function isUserMountable() { return this.is_user_mountable.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.UnixOutputStream.prototype,
    {
      getCloseFd: {
        value: function getCloseFd() { return this.get_close_fd.apply(this, arguments); }
      },
      getFd: {
        value: function getFd() { return this.get_fd.apply(this, arguments); }
      },
      setCloseFd: {
        value: function setCloseFd() { return this.set_close_fd.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.UnixSocketAddress.prototype,
    {
      abstractNamesSupported: {
        get: function () { return this.abstract_names_supported; },
        set: function (value) { this.abstract_names_supported = value; }
      },
      getAddressType: {
        value: function getAddressType() { return this.get_address_type.apply(this, arguments); }
      },
      getIsAbstract: {
        value: function getIsAbstract() { return this.get_is_abstract.apply(this, arguments); }
      },
      getPathLen: {
        value: function getPathLen() { return this.get_path_len.apply(this, arguments); }
      },
      getPath: {
        value: function getPath() { return this.get_path.apply(this, arguments); }
      },
      newAbstract: {
        get: function () { return this.new_abstract; },
        set: function (value) { this.new_abstract = value; }
      },
      newWithType: {
        get: function () { return this.new_with_type; },
        set: function (value) { this.new_with_type = value; }
      }
    }
  );

  Object.defineProperties(
    Gio.Vfs.prototype,
    {
      getDefault: {
        get: function () { return this.get_default; },
        set: function (value) { this.get_default = value; }
      },
      getFileForPath: {
        value: function getFileForPath() { return this.get_file_for_path.apply(this, arguments); }
      },
      getFileForUri: {
        value: function getFileForUri() { return this.get_file_for_uri.apply(this, arguments); }
      },
      getLocal: {
        get: function () { return this.get_local; },
        set: function (value) { this.get_local = value; }
      },
      getSupportedUriSchemes: {
        value: function getSupportedUriSchemes() { return this.get_supported_uri_schemes.apply(this, arguments); }
      },
      isActive: {
        value: function isActive() { return this.is_active.apply(this, arguments); }
      },
      parseName: {
        value: function parseName() { return this.parse_name.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.Volume.prototype,
    {
      canEject: {
        value: function canEject() { return this.can_eject.apply(this, arguments); }
      },
      canMount: {
        value: function canMount() { return this.can_mount.apply(this, arguments); }
      },
      ejectFinish: {
        value: function ejectFinish() { return this.eject_finish.apply(this, arguments); }
      },
      ejectWithOperationFinish: {
        value: function ejectWithOperationFinish() { return this.eject_with_operation_finish.apply(this, arguments); }
      },
      ejectWithOperation: {
        value: function ejectWithOperation() { return this.eject_with_operation.apply(this, arguments); }
      },
      enumerateIdentifiers: {
        value: function enumerateIdentifiers() { return this.enumerate_identifiers.apply(this, arguments); }
      },
      getActivationRoot: {
        value: function getActivationRoot() { return this.get_activation_root.apply(this, arguments); }
      },
      getDrive: {
        value: function getDrive() { return this.get_drive.apply(this, arguments); }
      },
      getIcon: {
        value: function getIcon() { return this.get_icon.apply(this, arguments); }
      },
      getIdentifier: {
        value: function getIdentifier() { return this.get_identifier.apply(this, arguments); }
      },
      getMount: {
        value: function getMount() { return this.get_mount.apply(this, arguments); }
      },
      getName: {
        value: function getName() { return this.get_name.apply(this, arguments); }
      },
      getSortKey: {
        value: function getSortKey() { return this.get_sort_key.apply(this, arguments); }
      },
      getSymbolicIcon: {
        value: function getSymbolicIcon() { return this.get_symbolic_icon.apply(this, arguments); }
      },
      getUuid: {
        value: function getUuid() { return this.get_uuid.apply(this, arguments); }
      },
      mountFinish: {
        value: function mountFinish() { return this.mount_finish.apply(this, arguments); }
      },
      shouldAutomount: {
        value: function shouldAutomount() { return this.should_automount.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.VolumeMonitor.prototype,
    {
      adoptOrphanMount: {
        get: function () { return this.adopt_orphan_mount; },
        set: function (value) { this.adopt_orphan_mount = value; }
      },
      getConnectedDrives: {
        value: function getConnectedDrives() { return this.get_connected_drives.apply(this, arguments); }
      },
      getMountForUuid: {
        value: function getMountForUuid() { return this.get_mount_for_uuid.apply(this, arguments); }
      },
      getMounts: {
        value: function getMounts() { return this.get_mounts.apply(this, arguments); }
      },
      getVolumeForUuid: {
        value: function getVolumeForUuid() { return this.get_volume_for_uuid.apply(this, arguments); }
      },
      getVolumes: {
        value: function getVolumes() { return this.get_volumes.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.ZlibCompressor.prototype,
    {
      getFileInfo: {
        value: function getFileInfo() { return this.get_file_info.apply(this, arguments); }
      },
      setFileInfo: {
        value: function setFileInfo() { return this.set_file_info.apply(this, arguments); }
      }
    }
  );

  Object.defineProperties(
    Gio.ZlibDecompressor.prototype,
    {
      getFileInfo: {
        value: function getFileInfo() { return this.get_file_info.apply(this, arguments); }
      }
    }
  );


}(this));