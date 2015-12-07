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
      busGetFinish: {
        value: function busGetFinish() {
          return this.bus_get_finish.apply(this, arguments);
        }
      },
      busGet: {
        value: function busGet() {
          return this.bus_get.apply(this, arguments);
        }
      },
      busGetSync: {
        value: function busGetSync() {
          return this.bus_get_sync.apply(this, arguments);
        }
      },
      busOwnName: {
        value: function busOwnName() {
          return this.bus_own_name.apply(this, arguments);
        }
      },
      busOwnNameOnConnection: {
        value: function busOwnNameOnConnection() {
          return this.bus_own_name_on_connection.apply(this, arguments);
        }
      },
      busUnownName: {
        value: function busUnownName() {
          return this.bus_unown_name.apply(this, arguments);
        }
      },
      busUnwatchName: {
        value: function busUnwatchName() {
          return this.bus_unwatch_name.apply(this, arguments);
        }
      },
      busWatchName: {
        value: function busWatchName() {
          return this.bus_watch_name.apply(this, arguments);
        }
      },
      busWatchNameOnConnection: {
        value: function busWatchNameOnConnection() {
          return this.bus_watch_name_on_connection.apply(this, arguments);
        }
      },
      contentTypeCanBeExecutable: {
        value: function contentTypeCanBeExecutable() {
          return this.content_type_can_be_executable.apply(this, arguments);
        }
      },
      contentTypeEquals: {
        value: function contentTypeEquals() {
          return this.content_type_equals.apply(this, arguments);
        }
      },
      contentTypeFromMimeType: {
        value: function contentTypeFromMimeType() {
          return this.content_type_from_mime_type.apply(this, arguments);
        }
      },
      contentTypeGetDescription: {
        value: function contentTypeGetDescription() {
          return this.content_type_get_description.apply(this, arguments);
        }
      },
      contentTypeGetGenericIconName: {
        value: function contentTypeGetGenericIconName() {
          return this.content_type_get_generic_icon_name.apply(this, arguments);
        }
      },
      contentTypeGetIcon: {
        value: function contentTypeGetIcon() {
          return this.content_type_get_icon.apply(this, arguments);
        }
      },
      contentTypeGetMimeType: {
        value: function contentTypeGetMimeType() {
          return this.content_type_get_mime_type.apply(this, arguments);
        }
      },
      contentTypeGetSymbolicIcon: {
        value: function contentTypeGetSymbolicIcon() {
          return this.content_type_get_symbolic_icon.apply(this, arguments);
        }
      },
      contentTypeGuessForTree: {
        value: function contentTypeGuessForTree() {
          return this.content_type_guess_for_tree.apply(this, arguments);
        }
      },
      contentTypeGuess: {
        value: function contentTypeGuess() {
          return this.content_type_guess.apply(this, arguments);
        }
      },
      contentTypeIsA: {
        value: function contentTypeIsA() {
          return this.content_type_is_a.apply(this, arguments);
        }
      },
      contentTypeIsUnknown: {
        value: function contentTypeIsUnknown() {
          return this.content_type_is_unknown.apply(this, arguments);
        }
      },
      contentTypesGetRegistered: {
        value: function contentTypesGetRegistered() {
          return this.content_types_get_registered.apply(this, arguments);
        }
      },
      dbusAddressEscapeValue: {
        value: function dbusAddressEscapeValue() {
          return this.dbus_address_escape_value.apply(this, arguments);
        }
      },
      dbusAddressGetForBusSync: {
        value: function dbusAddressGetForBusSync() {
          return this.dbus_address_get_for_bus_sync.apply(this, arguments);
        }
      },
      dbusAddressGetStreamFinish: {
        value: function dbusAddressGetStreamFinish() {
          return this.dbus_address_get_stream_finish.apply(this, arguments);
        }
      },
      dbusAddressGetStream: {
        value: function dbusAddressGetStream() {
          return this.dbus_address_get_stream.apply(this, arguments);
        }
      },
      dbusAddressGetStreamSync: {
        value: function dbusAddressGetStreamSync() {
          return this.dbus_address_get_stream_sync.apply(this, arguments);
        }
      },
      dbusGenerateGuid: {
        value: function dbusGenerateGuid() {
          return this.dbus_generate_guid.apply(this, arguments);
        }
      },
      dbusGvalueToGvariant: {
        value: function dbusGvalueToGvariant() {
          return this.dbus_gvalue_to_gvariant.apply(this, arguments);
        }
      },
      dbusGvariantToGvalue: {
        value: function dbusGvariantToGvalue() {
          return this.dbus_gvariant_to_gvalue.apply(this, arguments);
        }
      },
      dbusIsAddress: {
        value: function dbusIsAddress() {
          return this.dbus_is_address.apply(this, arguments);
        }
      },
      dbusIsGuid: {
        value: function dbusIsGuid() {
          return this.dbus_is_guid.apply(this, arguments);
        }
      },
      dbusIsInterfaceName: {
        value: function dbusIsInterfaceName() {
          return this.dbus_is_interface_name.apply(this, arguments);
        }
      },
      dbusIsMemberName: {
        value: function dbusIsMemberName() {
          return this.dbus_is_member_name.apply(this, arguments);
        }
      },
      dbusIsName: {
        value: function dbusIsName() {
          return this.dbus_is_name.apply(this, arguments);
        }
      },
      dbusIsSupportedAddress: {
        value: function dbusIsSupportedAddress() {
          return this.dbus_is_supported_address.apply(this, arguments);
        }
      },
      dbusIsUniqueName: {
        value: function dbusIsUniqueName() {
          return this.dbus_is_unique_name.apply(this, arguments);
        }
      },
      ioErrorFromErrno: {
        value: function ioErrorFromErrno() {
          return this.io_error_from_errno.apply(this, arguments);
        }
      },
      ioErrorQuark: {
        value: function ioErrorQuark() {
          return this.io_error_quark.apply(this, arguments);
        }
      },
      ioModulesLoadAllInDirectory: {
        value: function ioModulesLoadAllInDirectory() {
          return this.io_modules_load_all_in_directory.apply(this, arguments);
        }
      },
      ioModulesLoadAllInDirectoryWithScope: {
        value: function ioModulesLoadAllInDirectoryWithScope() {
          return this.io_modules_load_all_in_directory_with_scope.apply(this, arguments);
        }
      },
      ioModulesScanAllInDirectory: {
        value: function ioModulesScanAllInDirectory() {
          return this.io_modules_scan_all_in_directory.apply(this, arguments);
        }
      },
      ioModulesScanAllInDirectoryWithScope: {
        value: function ioModulesScanAllInDirectoryWithScope() {
          return this.io_modules_scan_all_in_directory_with_scope.apply(this, arguments);
        }
      },
      ioSchedulerCancelAllJobs: {
        value: function ioSchedulerCancelAllJobs() {
          return this.io_scheduler_cancel_all_jobs.apply(this, arguments);
        }
      },
      ioSchedulerPushJob: {
        value: function ioSchedulerPushJob() {
          return this.io_scheduler_push_job.apply(this, arguments);
        }
      },
      networkingInit: {
        value: function networkingInit() {
          return this.networking_init.apply(this, arguments);
        }
      },
      pollableSourceNewFull: {
        value: function pollableSourceNewFull() {
          return this.pollable_source_new_full.apply(this, arguments);
        }
      },
      pollableSourceNew: {
        value: function pollableSourceNew() {
          return this.pollable_source_new.apply(this, arguments);
        }
      },
      pollableStreamRead: {
        value: function pollableStreamRead() {
          return this.pollable_stream_read.apply(this, arguments);
        }
      },
      pollableStreamWriteAll: {
        value: function pollableStreamWriteAll() {
          return this.pollable_stream_write_all.apply(this, arguments);
        }
      },
      pollableStreamWrite: {
        value: function pollableStreamWrite() {
          return this.pollable_stream_write.apply(this, arguments);
        }
      },
      resourcesEnumerateChildren: {
        value: function resourcesEnumerateChildren() {
          return this.resources_enumerate_children.apply(this, arguments);
        }
      },
      resourcesGetInfo: {
        value: function resourcesGetInfo() {
          return this.resources_get_info.apply(this, arguments);
        }
      },
      resourcesLookupData: {
        value: function resourcesLookupData() {
          return this.resources_lookup_data.apply(this, arguments);
        }
      },
      resourcesOpenStream: {
        value: function resourcesOpenStream() {
          return this.resources_open_stream.apply(this, arguments);
        }
      },
      resourcesRegister: {
        value: function resourcesRegister() {
          return this.resources_register.apply(this, arguments);
        }
      },
      resourcesUnregister: {
        value: function resourcesUnregister() {
          return this.resources_unregister.apply(this, arguments);
        }
      },
      simpleAsyncReportGerrorInIdle: {
        value: function simpleAsyncReportGerrorInIdle() {
          return this.simple_async_report_gerror_in_idle.apply(this, arguments);
        }
      },
      unixIsMountPathSystemInternal: {
        value: function unixIsMountPathSystemInternal() {
          return this.unix_is_mount_path_system_internal.apply(this, arguments);
        }
      },
      unixMountCompare: {
        value: function unixMountCompare() {
          return this.unix_mount_compare.apply(this, arguments);
        }
      },
      unixMountFree: {
        value: function unixMountFree() {
          return this.unix_mount_free.apply(this, arguments);
        }
      },
      unixMountGetDevicePath: {
        value: function unixMountGetDevicePath() {
          return this.unix_mount_get_device_path.apply(this, arguments);
        }
      },
      unixMountGetFsType: {
        value: function unixMountGetFsType() {
          return this.unix_mount_get_fs_type.apply(this, arguments);
        }
      },
      unixMountGetMountPath: {
        value: function unixMountGetMountPath() {
          return this.unix_mount_get_mount_path.apply(this, arguments);
        }
      },
      unixMountGuessCanEject: {
        value: function unixMountGuessCanEject() {
          return this.unix_mount_guess_can_eject.apply(this, arguments);
        }
      },
      unixMountGuessIcon: {
        value: function unixMountGuessIcon() {
          return this.unix_mount_guess_icon.apply(this, arguments);
        }
      },
      unixMountGuessName: {
        value: function unixMountGuessName() {
          return this.unix_mount_guess_name.apply(this, arguments);
        }
      },
      unixMountGuessShouldDisplay: {
        value: function unixMountGuessShouldDisplay() {
          return this.unix_mount_guess_should_display.apply(this, arguments);
        }
      },
      unixMountGuessSymbolicIcon: {
        value: function unixMountGuessSymbolicIcon() {
          return this.unix_mount_guess_symbolic_icon.apply(this, arguments);
        }
      },
      unixMountIsReadonly: {
        value: function unixMountIsReadonly() {
          return this.unix_mount_is_readonly.apply(this, arguments);
        }
      },
      unixMountIsSystemInternal: {
        value: function unixMountIsSystemInternal() {
          return this.unix_mount_is_system_internal.apply(this, arguments);
        }
      },
      unixMountPointsChangedSince: {
        value: function unixMountPointsChangedSince() {
          return this.unix_mount_points_changed_since.apply(this, arguments);
        }
      },
      unixMountsChangedSince: {
        value: function unixMountsChangedSince() {
          return this.unix_mounts_changed_since.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Action,
    {
      nameIsValid: {
        value: function nameIsValid() {
          return this.name_is_valid.apply(this, arguments);
        }
      },
      parseDetailedName: {
        value: function parseDetailedName() {
          return this.parse_detailed_name.apply(this, arguments);
        }
      },
      printDetailedName: {
        value: function printDetailedName() {
          return this.print_detailed_name.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Action.prototype,
    {
      changeState: {
        value: function changeState() {
          return this.change_state.apply(this, arguments);
        }
      },
      getEnabled: {
        value: function getEnabled() {
          return this.get_enabled.apply(this, arguments);
        }
      },
      getName: {
        value: function getName() {
          return this.get_name.apply(this, arguments);
        }
      },
      getParameterType: {
        value: function getParameterType() {
          return this.get_parameter_type.apply(this, arguments);
        }
      },
      getStateHint: {
        value: function getStateHint() {
          return this.get_state_hint.apply(this, arguments);
        }
      },
      getState: {
        value: function getState() {
          return this.get_state.apply(this, arguments);
        }
      },
      getStateType: {
        value: function getStateType() {
          return this.get_state_type.apply(this, arguments);
        }
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
        value: function actionAdded() {
          return this.action_added.apply(this, arguments);
        }
      },
      actionEnabledChanged: {
        value: function actionEnabledChanged() {
          return this.action_enabled_changed.apply(this, arguments);
        }
      },
      actionRemoved: {
        value: function actionRemoved() {
          return this.action_removed.apply(this, arguments);
        }
      },
      actionStateChanged: {
        value: function actionStateChanged() {
          return this.action_state_changed.apply(this, arguments);
        }
      },
      activateAction: {
        value: function activateAction() {
          return this.activate_action.apply(this, arguments);
        }
      },
      changeActionState: {
        value: function changeActionState() {
          return this.change_action_state.apply(this, arguments);
        }
      },
      getActionEnabled: {
        value: function getActionEnabled() {
          return this.get_action_enabled.apply(this, arguments);
        }
      },
      getActionParameterType: {
        value: function getActionParameterType() {
          return this.get_action_parameter_type.apply(this, arguments);
        }
      },
      getActionStateHint: {
        value: function getActionStateHint() {
          return this.get_action_state_hint.apply(this, arguments);
        }
      },
      getActionState: {
        value: function getActionState() {
          return this.get_action_state.apply(this, arguments);
        }
      },
      getActionStateType: {
        value: function getActionStateType() {
          return this.get_action_state_type.apply(this, arguments);
        }
      },
      hasAction: {
        value: function hasAction() {
          return this.has_action.apply(this, arguments);
        }
      },
      listActions: {
        value: function listActions() {
          return this.list_actions.apply(this, arguments);
        }
      },
      queryAction: {
        value: function queryAction() {
          return this.query_action.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.ActionMap.prototype,
    {
      addActionEntries: {
        value: function addActionEntries() {
          return this.add_action_entries.apply(this, arguments);
        }
      },
      addAction: {
        value: function addAction() {
          return this.add_action.apply(this, arguments);
        }
      },
      lookupAction: {
        value: function lookupAction() {
          return this.lookup_action.apply(this, arguments);
        }
      },
      removeAction: {
        value: function removeAction() {
          return this.remove_action.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.AppInfo,
    {
      createFromCommandline: {
        value: function createFromCommandline() {
          return this.create_from_commandline.apply(this, arguments);
        }
      },
      getAllForType: {
        value: function getAllForType() {
          return this.get_all_for_type.apply(this, arguments);
        }
      },
      getAll: {
        value: function getAll() {
          return this.get_all.apply(this, arguments);
        }
      },
      getDefaultForType: {
        value: function getDefaultForType() {
          return this.get_default_for_type.apply(this, arguments);
        }
      },
      getDefaultForUriScheme: {
        value: function getDefaultForUriScheme() {
          return this.get_default_for_uri_scheme.apply(this, arguments);
        }
      },
      getFallbackForType: {
        value: function getFallbackForType() {
          return this.get_fallback_for_type.apply(this, arguments);
        }
      },
      getRecommendedForType: {
        value: function getRecommendedForType() {
          return this.get_recommended_for_type.apply(this, arguments);
        }
      },
      launchDefaultForUri: {
        value: function launchDefaultForUri() {
          return this.launch_default_for_uri.apply(this, arguments);
        }
      },
      resetTypeAssociations: {
        value: function resetTypeAssociations() {
          return this.reset_type_associations.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.AppInfo.prototype,
    {
      addSupportsType: {
        value: function addSupportsType() {
          return this.add_supports_type.apply(this, arguments);
        }
      },
      canDelete: {
        value: function canDelete() {
          return this.can_delete.apply(this, arguments);
        }
      },
      canRemoveSupportsType: {
        value: function canRemoveSupportsType() {
          return this.can_remove_supports_type.apply(this, arguments);
        }
      },
      getCommandline: {
        value: function getCommandline() {
          return this.get_commandline.apply(this, arguments);
        }
      },
      getDescription: {
        value: function getDescription() {
          return this.get_description.apply(this, arguments);
        }
      },
      getDisplayName: {
        value: function getDisplayName() {
          return this.get_display_name.apply(this, arguments);
        }
      },
      getExecutable: {
        value: function getExecutable() {
          return this.get_executable.apply(this, arguments);
        }
      },
      getIcon: {
        value: function getIcon() {
          return this.get_icon.apply(this, arguments);
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
      getSupportedTypes: {
        value: function getSupportedTypes() {
          return this.get_supported_types.apply(this, arguments);
        }
      },
      launchUris: {
        value: function launchUris() {
          return this.launch_uris.apply(this, arguments);
        }
      },
      removeSupportsType: {
        value: function removeSupportsType() {
          return this.remove_supports_type.apply(this, arguments);
        }
      },
      setAsDefaultForExtension: {
        value: function setAsDefaultForExtension() {
          return this.set_as_default_for_extension.apply(this, arguments);
        }
      },
      setAsDefaultForType: {
        value: function setAsDefaultForType() {
          return this.set_as_default_for_type.apply(this, arguments);
        }
      },
      setAsLastUsedForType: {
        value: function setAsLastUsedForType() {
          return this.set_as_last_used_for_type.apply(this, arguments);
        }
      },
      shouldShow: {
        value: function shouldShow() {
          return this.should_show.apply(this, arguments);
        }
      },
      supportsFiles: {
        value: function supportsFiles() {
          return this.supports_files.apply(this, arguments);
        }
      },
      supportsUris: {
        value: function supportsUris() {
          return this.supports_uris.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.AppLaunchContext.prototype,
    {
      getDisplay: {
        value: function getDisplay() {
          return this.get_display.apply(this, arguments);
        }
      },
      getEnvironment: {
        value: function getEnvironment() {
          return this.get_environment.apply(this, arguments);
        }
      },
      getStartupNotifyId: {
        value: function getStartupNotifyId() {
          return this.get_startup_notify_id.apply(this, arguments);
        }
      },
      launchFailed: {
        value: function launchFailed() {
          return this.launch_failed.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Application,
    {
      getDefault: {
        value: function getDefault() {
          return this.get_default.apply(this, arguments);
        }
      },
      idIsValid: {
        value: function idIsValid() {
          return this.id_is_valid.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Application.prototype,
    {
      addMainOptionEntries: {
        value: function addMainOptionEntries() {
          return this.add_main_option_entries.apply(this, arguments);
        }
      },
      addOptionGroup: {
        value: function addOptionGroup() {
          return this.add_option_group.apply(this, arguments);
        }
      },
      getApplicationId: {
        value: function getApplicationId() {
          return this.get_application_id.apply(this, arguments);
        }
      },
      getDbusConnection: {
        value: function getDbusConnection() {
          return this.get_dbus_connection.apply(this, arguments);
        }
      },
      getDbusObjectPath: {
        value: function getDbusObjectPath() {
          return this.get_dbus_object_path.apply(this, arguments);
        }
      },
      getFlags: {
        value: function getFlags() {
          return this.get_flags.apply(this, arguments);
        }
      },
      getInactivityTimeout: {
        value: function getInactivityTimeout() {
          return this.get_inactivity_timeout.apply(this, arguments);
        }
      },
      getIsRegistered: {
        value: function getIsRegistered() {
          return this.get_is_registered.apply(this, arguments);
        }
      },
      getIsRemote: {
        value: function getIsRemote() {
          return this.get_is_remote.apply(this, arguments);
        }
      },
      markBusy: {
        value: function markBusy() {
          return this.mark_busy.apply(this, arguments);
        }
      },
      sendNotification: {
        value: function sendNotification() {
          return this.send_notification.apply(this, arguments);
        }
      },
      setActionGroup: {
        value: function setActionGroup() {
          return this.set_action_group.apply(this, arguments);
        }
      },
      setApplicationId: {
        value: function setApplicationId() {
          return this.set_application_id.apply(this, arguments);
        }
      },
      setDefault: {
        value: function setDefault() {
          return this.set_default.apply(this, arguments);
        }
      },
      setFlags: {
        value: function setFlags() {
          return this.set_flags.apply(this, arguments);
        }
      },
      setInactivityTimeout: {
        value: function setInactivityTimeout() {
          return this.set_inactivity_timeout.apply(this, arguments);
        }
      },
      unmarkBusy: {
        value: function unmarkBusy() {
          return this.unmark_busy.apply(this, arguments);
        }
      },
      withdrawNotification: {
        value: function withdrawNotification() {
          return this.withdraw_notification.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.ApplicationCommandLine.prototype,
    {
      createFileForArg: {
        value: function createFileForArg() {
          return this.create_file_for_arg.apply(this, arguments);
        }
      },
      getArguments: {
        value: function getArguments() {
          return this.get_arguments.apply(this, arguments);
        }
      },
      getCwd: {
        value: function getCwd() {
          return this.get_cwd.apply(this, arguments);
        }
      },
      getEnviron: {
        value: function getEnviron() {
          return this.get_environ.apply(this, arguments);
        }
      },
      getExitStatus: {
        value: function getExitStatus() {
          return this.get_exit_status.apply(this, arguments);
        }
      },
      getIsRemote: {
        value: function getIsRemote() {
          return this.get_is_remote.apply(this, arguments);
        }
      },
      getOptionsDict: {
        value: function getOptionsDict() {
          return this.get_options_dict.apply(this, arguments);
        }
      },
      getPlatformData: {
        value: function getPlatformData() {
          return this.get_platform_data.apply(this, arguments);
        }
      },
      getStdin: {
        value: function getStdin() {
          return this.get_stdin.apply(this, arguments);
        }
      },
      setExitStatus: {
        value: function setExitStatus() {
          return this.set_exit_status.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.AsyncInitable,
    {
      newvAsync: {
        value: function newvAsync() {
          return this.newv_async.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.AsyncInitable.prototype,
    {
      initAsync: {
        value: function initAsync() {
          return this.init_async.apply(this, arguments);
        }
      },
      initFinish: {
        value: function initFinish() {
          return this.init_finish.apply(this, arguments);
        }
      },
      newFinish: {
        value: function newFinish() {
          return this.new_finish.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.AsyncResult.prototype,
    {
      getSourceObject: {
        value: function getSourceObject() {
          return this.get_source_object.apply(this, arguments);
        }
      },
      getUserData: {
        value: function getUserData() {
          return this.get_user_data.apply(this, arguments);
        }
      },
      isTagged: {
        value: function isTagged() {
          return this.is_tagged.apply(this, arguments);
        }
      },
      legacyPropagateError: {
        value: function legacyPropagateError() {
          return this.legacy_propagate_error.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.BufferedInputStream,
    {
      newSized: {
        value: function newSized() {
          return this.new_sized.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.BufferedInputStream.prototype,
    {
      fillAsync: {
        value: function fillAsync() {
          return this.fill_async.apply(this, arguments);
        }
      },
      fillFinish: {
        value: function fillFinish() {
          return this.fill_finish.apply(this, arguments);
        }
      },
      getAvailable: {
        value: function getAvailable() {
          return this.get_available.apply(this, arguments);
        }
      },
      getBufferSize: {
        value: function getBufferSize() {
          return this.get_buffer_size.apply(this, arguments);
        }
      },
      peekBuffer: {
        value: function peekBuffer() {
          return this.peek_buffer.apply(this, arguments);
        }
      },
      readByte: {
        value: function readByte() {
          return this.read_byte.apply(this, arguments);
        }
      },
      setBufferSize: {
        value: function setBufferSize() {
          return this.set_buffer_size.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.BufferedOutputStream,
    {
      newSized: {
        value: function newSized() {
          return this.new_sized.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.BufferedOutputStream.prototype,
    {
      getAutoGrow: {
        value: function getAutoGrow() {
          return this.get_auto_grow.apply(this, arguments);
        }
      },
      getBufferSize: {
        value: function getBufferSize() {
          return this.get_buffer_size.apply(this, arguments);
        }
      },
      setAutoGrow: {
        value: function setAutoGrow() {
          return this.set_auto_grow.apply(this, arguments);
        }
      },
      setBufferSize: {
        value: function setBufferSize() {
          return this.set_buffer_size.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.BytesIcon.prototype,
    {
      getBytes: {
        value: function getBytes() {
          return this.get_bytes.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Cancellable,
    {
      getCurrent: {
        value: function getCurrent() {
          return this.get_current.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Cancellable.prototype,
    {
      getFd: {
        value: function getFd() {
          return this.get_fd.apply(this, arguments);
        }
      },
      isCancelled: {
        value: function isCancelled() {
          return this.is_cancelled.apply(this, arguments);
        }
      },
      makePollfd: {
        value: function makePollfd() {
          return this.make_pollfd.apply(this, arguments);
        }
      },
      popCurrent: {
        value: function popCurrent() {
          return this.pop_current.apply(this, arguments);
        }
      },
      pushCurrent: {
        value: function pushCurrent() {
          return this.push_current.apply(this, arguments);
        }
      },
      releaseFd: {
        value: function releaseFd() {
          return this.release_fd.apply(this, arguments);
        }
      },
      setErrorIfCancelled: {
        value: function setErrorIfCancelled() {
          return this.set_error_if_cancelled.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.CharsetConverter.prototype,
    {
      getNumFallbacks: {
        value: function getNumFallbacks() {
          return this.get_num_fallbacks.apply(this, arguments);
        }
      },
      getUseFallback: {
        value: function getUseFallback() {
          return this.get_use_fallback.apply(this, arguments);
        }
      },
      setUseFallback: {
        value: function setUseFallback() {
          return this.set_use_fallback.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.ConverterInputStream.prototype,
    {
      getConverter: {
        value: function getConverter() {
          return this.get_converter.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.ConverterOutputStream.prototype,
    {
      getConverter: {
        value: function getConverter() {
          return this.get_converter.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Credentials.prototype,
    {
      getUnixPid: {
        value: function getUnixPid() {
          return this.get_unix_pid.apply(this, arguments);
        }
      },
      getUnixUser: {
        value: function getUnixUser() {
          return this.get_unix_user.apply(this, arguments);
        }
      },
      isSameUser: {
        value: function isSameUser() {
          return this.is_same_user.apply(this, arguments);
        }
      },
      setNative: {
        value: function setNative() {
          return this.set_native.apply(this, arguments);
        }
      },
      setUnixUser: {
        value: function setUnixUser() {
          return this.set_unix_user.apply(this, arguments);
        }
      },
      toString: {
        value: function toString() {
          return this.to_string.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DataInputStream.prototype,
    {
      getByteOrder: {
        value: function getByteOrder() {
          return this.get_byte_order.apply(this, arguments);
        }
      },
      getNewlineType: {
        value: function getNewlineType() {
          return this.get_newline_type.apply(this, arguments);
        }
      },
      readByte: {
        value: function readByte() {
          return this.read_byte.apply(this, arguments);
        }
      },
      readInt16: {
        value: function readInt16() {
          return this.read_int16.apply(this, arguments);
        }
      },
      readInt32: {
        value: function readInt32() {
          return this.read_int32.apply(this, arguments);
        }
      },
      readInt64: {
        value: function readInt64() {
          return this.read_int64.apply(this, arguments);
        }
      },
      readLineAsync: {
        value: function readLineAsync() {
          return this.read_line_async.apply(this, arguments);
        }
      },
      readLineFinish: {
        value: function readLineFinish() {
          return this.read_line_finish.apply(this, arguments);
        }
      },
      readLineFinishUtf8: {
        value: function readLineFinishUtf8() {
          return this.read_line_finish_utf8.apply(this, arguments);
        }
      },
      readLine: {
        value: function readLine() {
          return this.read_line.apply(this, arguments);
        }
      },
      readLineUtf8: {
        value: function readLineUtf8() {
          return this.read_line_utf8.apply(this, arguments);
        }
      },
      readUint16: {
        value: function readUint16() {
          return this.read_uint16.apply(this, arguments);
        }
      },
      readUint32: {
        value: function readUint32() {
          return this.read_uint32.apply(this, arguments);
        }
      },
      readUint64: {
        value: function readUint64() {
          return this.read_uint64.apply(this, arguments);
        }
      },
      readUntilAsync: {
        value: function readUntilAsync() {
          return this.read_until_async.apply(this, arguments);
        }
      },
      readUntilFinish: {
        value: function readUntilFinish() {
          return this.read_until_finish.apply(this, arguments);
        }
      },
      readUntil: {
        value: function readUntil() {
          return this.read_until.apply(this, arguments);
        }
      },
      readUptoAsync: {
        value: function readUptoAsync() {
          return this.read_upto_async.apply(this, arguments);
        }
      },
      readUptoFinish: {
        value: function readUptoFinish() {
          return this.read_upto_finish.apply(this, arguments);
        }
      },
      readUpto: {
        value: function readUpto() {
          return this.read_upto.apply(this, arguments);
        }
      },
      setByteOrder: {
        value: function setByteOrder() {
          return this.set_byte_order.apply(this, arguments);
        }
      },
      setNewlineType: {
        value: function setNewlineType() {
          return this.set_newline_type.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DataOutputStream.prototype,
    {
      getByteOrder: {
        value: function getByteOrder() {
          return this.get_byte_order.apply(this, arguments);
        }
      },
      putByte: {
        value: function putByte() {
          return this.put_byte.apply(this, arguments);
        }
      },
      putInt16: {
        value: function putInt16() {
          return this.put_int16.apply(this, arguments);
        }
      },
      putInt32: {
        value: function putInt32() {
          return this.put_int32.apply(this, arguments);
        }
      },
      putInt64: {
        value: function putInt64() {
          return this.put_int64.apply(this, arguments);
        }
      },
      putString: {
        value: function putString() {
          return this.put_string.apply(this, arguments);
        }
      },
      putUint16: {
        value: function putUint16() {
          return this.put_uint16.apply(this, arguments);
        }
      },
      putUint32: {
        value: function putUint32() {
          return this.put_uint32.apply(this, arguments);
        }
      },
      putUint64: {
        value: function putUint64() {
          return this.put_uint64.apply(this, arguments);
        }
      },
      setByteOrder: {
        value: function setByteOrder() {
          return this.set_byte_order.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusAuthObserver.prototype,
    {
      allowMechanism: {
        value: function allowMechanism() {
          return this.allow_mechanism.apply(this, arguments);
        }
      },
      authorizeAuthenticatedPeer: {
        value: function authorizeAuthenticatedPeer() {
          return this.authorize_authenticated_peer.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusConnection,
    {
      newFinish: {
        value: function newFinish() {
          return this.new_finish.apply(this, arguments);
        }
      },
      newForAddressFinish: {
        value: function newForAddressFinish() {
          return this.new_for_address_finish.apply(this, arguments);
        }
      },
      newForAddress: {
        value: function newForAddress() {
          return this.new_for_address.apply(this, arguments);
        }
      },
      newForAddressSync: {
        value: function newForAddressSync() {
          return this.new_for_address_sync.apply(this, arguments);
        }
      },
      newSync: {
        value: function newSync() {
          return this.new_sync.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusConnection.prototype,
    {
      addFilter: {
        value: function addFilter() {
          return this.add_filter.apply(this, arguments);
        }
      },
      callFinish: {
        value: function callFinish() {
          return this.call_finish.apply(this, arguments);
        }
      },
      callSync: {
        value: function callSync() {
          return this.call_sync.apply(this, arguments);
        }
      },
      callWithUnixFdListFinish: {
        value: function callWithUnixFdListFinish() {
          return this.call_with_unix_fd_list_finish.apply(this, arguments);
        }
      },
      callWithUnixFdList: {
        value: function callWithUnixFdList() {
          return this.call_with_unix_fd_list.apply(this, arguments);
        }
      },
      callWithUnixFdListSync: {
        value: function callWithUnixFdListSync() {
          return this.call_with_unix_fd_list_sync.apply(this, arguments);
        }
      },
      closeFinish: {
        value: function closeFinish() {
          return this.close_finish.apply(this, arguments);
        }
      },
      closeSync: {
        value: function closeSync() {
          return this.close_sync.apply(this, arguments);
        }
      },
      emitSignal: {
        value: function emitSignal() {
          return this.emit_signal.apply(this, arguments);
        }
      },
      exportActionGroup: {
        value: function exportActionGroup() {
          return this.export_action_group.apply(this, arguments);
        }
      },
      exportMenuModel: {
        value: function exportMenuModel() {
          return this.export_menu_model.apply(this, arguments);
        }
      },
      flushFinish: {
        value: function flushFinish() {
          return this.flush_finish.apply(this, arguments);
        }
      },
      flushSync: {
        value: function flushSync() {
          return this.flush_sync.apply(this, arguments);
        }
      },
      getCapabilities: {
        value: function getCapabilities() {
          return this.get_capabilities.apply(this, arguments);
        }
      },
      getExitOnClose: {
        value: function getExitOnClose() {
          return this.get_exit_on_close.apply(this, arguments);
        }
      },
      getGuid: {
        value: function getGuid() {
          return this.get_guid.apply(this, arguments);
        }
      },
      getLastSerial: {
        value: function getLastSerial() {
          return this.get_last_serial.apply(this, arguments);
        }
      },
      getPeerCredentials: {
        value: function getPeerCredentials() {
          return this.get_peer_credentials.apply(this, arguments);
        }
      },
      getStream: {
        value: function getStream() {
          return this.get_stream.apply(this, arguments);
        }
      },
      getUniqueName: {
        value: function getUniqueName() {
          return this.get_unique_name.apply(this, arguments);
        }
      },
      isClosed: {
        value: function isClosed() {
          return this.is_closed.apply(this, arguments);
        }
      },
      registerObject: {
        value: function registerObject() {
          return this.register_object.apply(this, arguments);
        }
      },
      registerSubtree: {
        value: function registerSubtree() {
          return this.register_subtree.apply(this, arguments);
        }
      },
      removeFilter: {
        value: function removeFilter() {
          return this.remove_filter.apply(this, arguments);
        }
      },
      sendMessage: {
        value: function sendMessage() {
          return this.send_message.apply(this, arguments);
        }
      },
      sendMessageWithReplyFinish: {
        value: function sendMessageWithReplyFinish() {
          return this.send_message_with_reply_finish.apply(this, arguments);
        }
      },
      sendMessageWithReply: {
        value: function sendMessageWithReply() {
          return this.send_message_with_reply.apply(this, arguments);
        }
      },
      sendMessageWithReplySync: {
        value: function sendMessageWithReplySync() {
          return this.send_message_with_reply_sync.apply(this, arguments);
        }
      },
      setExitOnClose: {
        value: function setExitOnClose() {
          return this.set_exit_on_close.apply(this, arguments);
        }
      },
      signalSubscribe: {
        value: function signalSubscribe() {
          return this.signal_subscribe.apply(this, arguments);
        }
      },
      signalUnsubscribe: {
        value: function signalUnsubscribe() {
          return this.signal_unsubscribe.apply(this, arguments);
        }
      },
      startMessageProcessing: {
        value: function startMessageProcessing() {
          return this.start_message_processing.apply(this, arguments);
        }
      },
      unexportActionGroup: {
        value: function unexportActionGroup() {
          return this.unexport_action_group.apply(this, arguments);
        }
      },
      unexportMenuModel: {
        value: function unexportMenuModel() {
          return this.unexport_menu_model.apply(this, arguments);
        }
      },
      unregisterObject: {
        value: function unregisterObject() {
          return this.unregister_object.apply(this, arguments);
        }
      },
      unregisterSubtree: {
        value: function unregisterSubtree() {
          return this.unregister_subtree.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusError,
    {
      encodeGerror: {
        value: function encodeGerror() {
          return this.encode_gerror.apply(this, arguments);
        }
      },
      getRemoteError: {
        value: function getRemoteError() {
          return this.get_remote_error.apply(this, arguments);
        }
      },
      isRemoteError: {
        value: function isRemoteError() {
          return this.is_remote_error.apply(this, arguments);
        }
      },
      newForDbusError: {
        value: function newForDbusError() {
          return this.new_for_dbus_error.apply(this, arguments);
        }
      },
      registerErrorDomain: {
        value: function registerErrorDomain() {
          return this.register_error_domain.apply(this, arguments);
        }
      },
      registerError: {
        value: function registerError() {
          return this.register_error.apply(this, arguments);
        }
      },
      stripRemoteError: {
        value: function stripRemoteError() {
          return this.strip_remote_error.apply(this, arguments);
        }
      },
      unregisterError: {
        value: function unregisterError() {
          return this.unregister_error.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusInterface.prototype,
    {
      getInfo: {
        value: function getInfo() {
          return this.get_info.apply(this, arguments);
        }
      },
      getObject: {
        value: function getObject() {
          return this.get_object.apply(this, arguments);
        }
      },
      setObject: {
        value: function setObject() {
          return this.set_object.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusInterfaceInfo.prototype,
    {
      cacheBuild: {
        value: function cacheBuild() {
          return this.cache_build.apply(this, arguments);
        }
      },
      cacheRelease: {
        value: function cacheRelease() {
          return this.cache_release.apply(this, arguments);
        }
      },
      generateXml: {
        value: function generateXml() {
          return this.generate_xml.apply(this, arguments);
        }
      },
      lookupMethod: {
        value: function lookupMethod() {
          return this.lookup_method.apply(this, arguments);
        }
      },
      lookupProperty: {
        value: function lookupProperty() {
          return this.lookup_property.apply(this, arguments);
        }
      },
      lookupSignal: {
        value: function lookupSignal() {
          return this.lookup_signal.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusInterfaceSkeleton.prototype,
    {
      getConnection: {
        value: function getConnection() {
          return this.get_connection.apply(this, arguments);
        }
      },
      getConnections: {
        value: function getConnections() {
          return this.get_connections.apply(this, arguments);
        }
      },
      getFlags: {
        value: function getFlags() {
          return this.get_flags.apply(this, arguments);
        }
      },
      getInfo: {
        value: function getInfo() {
          return this.get_info.apply(this, arguments);
        }
      },
      getObjectPath: {
        value: function getObjectPath() {
          return this.get_object_path.apply(this, arguments);
        }
      },
      getProperties: {
        value: function getProperties() {
          return this.get_properties.apply(this, arguments);
        }
      },
      hasConnection: {
        value: function hasConnection() {
          return this.has_connection.apply(this, arguments);
        }
      },
      setFlags: {
        value: function setFlags() {
          return this.set_flags.apply(this, arguments);
        }
      },
      unexportFromConnection: {
        value: function unexportFromConnection() {
          return this.unexport_from_connection.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusMessage,
    {
      bytesNeeded: {
        value: function bytesNeeded() {
          return this.bytes_needed.apply(this, arguments);
        }
      },
      newFromBlob: {
        value: function newFromBlob() {
          return this.new_from_blob.apply(this, arguments);
        }
      },
      newMethodCall: {
        value: function newMethodCall() {
          return this.new_method_call.apply(this, arguments);
        }
      },
      newSignal: {
        value: function newSignal() {
          return this.new_signal.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusMessage.prototype,
    {
      getArg0: {
        value: function getArg0() {
          return this.get_arg0.apply(this, arguments);
        }
      },
      getBody: {
        value: function getBody() {
          return this.get_body.apply(this, arguments);
        }
      },
      getByteOrder: {
        value: function getByteOrder() {
          return this.get_byte_order.apply(this, arguments);
        }
      },
      getDestination: {
        value: function getDestination() {
          return this.get_destination.apply(this, arguments);
        }
      },
      getErrorName: {
        value: function getErrorName() {
          return this.get_error_name.apply(this, arguments);
        }
      },
      getFlags: {
        value: function getFlags() {
          return this.get_flags.apply(this, arguments);
        }
      },
      getHeaderFields: {
        value: function getHeaderFields() {
          return this.get_header_fields.apply(this, arguments);
        }
      },
      getHeader: {
        value: function getHeader() {
          return this.get_header.apply(this, arguments);
        }
      },
      getInterface: {
        value: function getInterface() {
          return this.get_interface.apply(this, arguments);
        }
      },
      getLocked: {
        value: function getLocked() {
          return this.get_locked.apply(this, arguments);
        }
      },
      getMember: {
        value: function getMember() {
          return this.get_member.apply(this, arguments);
        }
      },
      getMessageType: {
        value: function getMessageType() {
          return this.get_message_type.apply(this, arguments);
        }
      },
      getNumUnixFds: {
        value: function getNumUnixFds() {
          return this.get_num_unix_fds.apply(this, arguments);
        }
      },
      getPath: {
        value: function getPath() {
          return this.get_path.apply(this, arguments);
        }
      },
      getReplySerial: {
        value: function getReplySerial() {
          return this.get_reply_serial.apply(this, arguments);
        }
      },
      getSender: {
        value: function getSender() {
          return this.get_sender.apply(this, arguments);
        }
      },
      getSerial: {
        value: function getSerial() {
          return this.get_serial.apply(this, arguments);
        }
      },
      getSignature: {
        value: function getSignature() {
          return this.get_signature.apply(this, arguments);
        }
      },
      getUnixFdList: {
        value: function getUnixFdList() {
          return this.get_unix_fd_list.apply(this, arguments);
        }
      },
      newMethodErrorLiteral: {
        value: function newMethodErrorLiteral() {
          return this.new_method_error_literal.apply(this, arguments);
        }
      },
      newMethodReply: {
        value: function newMethodReply() {
          return this.new_method_reply.apply(this, arguments);
        }
      },
      setBody: {
        value: function setBody() {
          return this.set_body.apply(this, arguments);
        }
      },
      setByteOrder: {
        value: function setByteOrder() {
          return this.set_byte_order.apply(this, arguments);
        }
      },
      setDestination: {
        value: function setDestination() {
          return this.set_destination.apply(this, arguments);
        }
      },
      setErrorName: {
        value: function setErrorName() {
          return this.set_error_name.apply(this, arguments);
        }
      },
      setFlags: {
        value: function setFlags() {
          return this.set_flags.apply(this, arguments);
        }
      },
      setHeader: {
        value: function setHeader() {
          return this.set_header.apply(this, arguments);
        }
      },
      setInterface: {
        value: function setInterface() {
          return this.set_interface.apply(this, arguments);
        }
      },
      setMember: {
        value: function setMember() {
          return this.set_member.apply(this, arguments);
        }
      },
      setMessageType: {
        value: function setMessageType() {
          return this.set_message_type.apply(this, arguments);
        }
      },
      setNumUnixFds: {
        value: function setNumUnixFds() {
          return this.set_num_unix_fds.apply(this, arguments);
        }
      },
      setPath: {
        value: function setPath() {
          return this.set_path.apply(this, arguments);
        }
      },
      setReplySerial: {
        value: function setReplySerial() {
          return this.set_reply_serial.apply(this, arguments);
        }
      },
      setSender: {
        value: function setSender() {
          return this.set_sender.apply(this, arguments);
        }
      },
      setSerial: {
        value: function setSerial() {
          return this.set_serial.apply(this, arguments);
        }
      },
      setSignature: {
        value: function setSignature() {
          return this.set_signature.apply(this, arguments);
        }
      },
      setUnixFdList: {
        value: function setUnixFdList() {
          return this.set_unix_fd_list.apply(this, arguments);
        }
      },
      toBlob: {
        value: function toBlob() {
          return this.to_blob.apply(this, arguments);
        }
      },
      toGerror: {
        value: function toGerror() {
          return this.to_gerror.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusMethodInvocation.prototype,
    {
      getConnection: {
        value: function getConnection() {
          return this.get_connection.apply(this, arguments);
        }
      },
      getInterfaceName: {
        value: function getInterfaceName() {
          return this.get_interface_name.apply(this, arguments);
        }
      },
      getMessage: {
        value: function getMessage() {
          return this.get_message.apply(this, arguments);
        }
      },
      getMethodInfo: {
        value: function getMethodInfo() {
          return this.get_method_info.apply(this, arguments);
        }
      },
      getMethodName: {
        value: function getMethodName() {
          return this.get_method_name.apply(this, arguments);
        }
      },
      getObjectPath: {
        value: function getObjectPath() {
          return this.get_object_path.apply(this, arguments);
        }
      },
      getParameters: {
        value: function getParameters() {
          return this.get_parameters.apply(this, arguments);
        }
      },
      getPropertyInfo: {
        value: function getPropertyInfo() {
          return this.get_property_info.apply(this, arguments);
        }
      },
      getSender: {
        value: function getSender() {
          return this.get_sender.apply(this, arguments);
        }
      },
      returnDbusError: {
        value: function returnDbusError() {
          return this.return_dbus_error.apply(this, arguments);
        }
      },
      returnErrorLiteral: {
        value: function returnErrorLiteral() {
          return this.return_error_literal.apply(this, arguments);
        }
      },
      returnGerror: {
        value: function returnGerror() {
          return this.return_gerror.apply(this, arguments);
        }
      },
      returnValue: {
        value: function returnValue() {
          return this.return_value.apply(this, arguments);
        }
      },
      returnValueWithUnixFdList: {
        value: function returnValueWithUnixFdList() {
          return this.return_value_with_unix_fd_list.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusNodeInfo,
    {
      newForXml: {
        value: function newForXml() {
          return this.new_for_xml.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusNodeInfo.prototype,
    {
      generateXml: {
        value: function generateXml() {
          return this.generate_xml.apply(this, arguments);
        }
      },
      lookupInterface: {
        value: function lookupInterface() {
          return this.lookup_interface.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusObject.prototype,
    {
      getInterface: {
        value: function getInterface() {
          return this.get_interface.apply(this, arguments);
        }
      },
      getInterfaces: {
        value: function getInterfaces() {
          return this.get_interfaces.apply(this, arguments);
        }
      },
      getObjectPath: {
        value: function getObjectPath() {
          return this.get_object_path.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusObjectManagerClient,
    {
      newFinish: {
        value: function newFinish() {
          return this.new_finish.apply(this, arguments);
        }
      },
      newForBusFinish: {
        value: function newForBusFinish() {
          return this.new_for_bus_finish.apply(this, arguments);
        }
      },
      newForBus: {
        value: function newForBus() {
          return this.new_for_bus.apply(this, arguments);
        }
      },
      newForBusSync: {
        value: function newForBusSync() {
          return this.new_for_bus_sync.apply(this, arguments);
        }
      },
      newSync: {
        value: function newSync() {
          return this.new_sync.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusObjectManagerClient.prototype,
    {
      getConnection: {
        value: function getConnection() {
          return this.get_connection.apply(this, arguments);
        }
      },
      getFlags: {
        value: function getFlags() {
          return this.get_flags.apply(this, arguments);
        }
      },
      getName: {
        value: function getName() {
          return this.get_name.apply(this, arguments);
        }
      },
      getNameOwner: {
        value: function getNameOwner() {
          return this.get_name_owner.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusObjectManager.prototype,
    {
      getInterface: {
        value: function getInterface() {
          return this.get_interface.apply(this, arguments);
        }
      },
      getObject: {
        value: function getObject() {
          return this.get_object.apply(this, arguments);
        }
      },
      getObjectPath: {
        value: function getObjectPath() {
          return this.get_object_path.apply(this, arguments);
        }
      },
      getObjects: {
        value: function getObjects() {
          return this.get_objects.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusObjectManagerServer.prototype,
    {
      exportUniquely: {
        value: function exportUniquely() {
          return this.export_uniquely.apply(this, arguments);
        }
      },
      getConnection: {
        value: function getConnection() {
          return this.get_connection.apply(this, arguments);
        }
      },
      isExported: {
        value: function isExported() {
          return this.is_exported.apply(this, arguments);
        }
      },
      setConnection: {
        value: function setConnection() {
          return this.set_connection.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusObjectProxy.prototype,
    {
      getConnection: {
        value: function getConnection() {
          return this.get_connection.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusObjectSkeleton.prototype,
    {
      addInterface: {
        value: function addInterface() {
          return this.add_interface.apply(this, arguments);
        }
      },
      removeInterfaceByName: {
        value: function removeInterfaceByName() {
          return this.remove_interface_by_name.apply(this, arguments);
        }
      },
      removeInterface: {
        value: function removeInterface() {
          return this.remove_interface.apply(this, arguments);
        }
      },
      setObjectPath: {
        value: function setObjectPath() {
          return this.set_object_path.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusProxy,
    {
      newFinish: {
        value: function newFinish() {
          return this.new_finish.apply(this, arguments);
        }
      },
      newForBusFinish: {
        value: function newForBusFinish() {
          return this.new_for_bus_finish.apply(this, arguments);
        }
      },
      newForBus: {
        value: function newForBus() {
          return this.new_for_bus.apply(this, arguments);
        }
      },
      newForBusSync: {
        value: function newForBusSync() {
          return this.new_for_bus_sync.apply(this, arguments);
        }
      },
      newSync: {
        value: function newSync() {
          return this.new_sync.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusProxy.prototype,
    {
      callFinish: {
        value: function callFinish() {
          return this.call_finish.apply(this, arguments);
        }
      },
      callSync: {
        value: function callSync() {
          return this.call_sync.apply(this, arguments);
        }
      },
      callWithUnixFdListFinish: {
        value: function callWithUnixFdListFinish() {
          return this.call_with_unix_fd_list_finish.apply(this, arguments);
        }
      },
      callWithUnixFdList: {
        value: function callWithUnixFdList() {
          return this.call_with_unix_fd_list.apply(this, arguments);
        }
      },
      callWithUnixFdListSync: {
        value: function callWithUnixFdListSync() {
          return this.call_with_unix_fd_list_sync.apply(this, arguments);
        }
      },
      getCachedProperty: {
        value: function getCachedProperty() {
          return this.get_cached_property.apply(this, arguments);
        }
      },
      getCachedPropertyNames: {
        value: function getCachedPropertyNames() {
          return this.get_cached_property_names.apply(this, arguments);
        }
      },
      getConnection: {
        value: function getConnection() {
          return this.get_connection.apply(this, arguments);
        }
      },
      getDefaultTimeout: {
        value: function getDefaultTimeout() {
          return this.get_default_timeout.apply(this, arguments);
        }
      },
      getFlags: {
        value: function getFlags() {
          return this.get_flags.apply(this, arguments);
        }
      },
      getInterfaceInfo: {
        value: function getInterfaceInfo() {
          return this.get_interface_info.apply(this, arguments);
        }
      },
      getInterfaceName: {
        value: function getInterfaceName() {
          return this.get_interface_name.apply(this, arguments);
        }
      },
      getName: {
        value: function getName() {
          return this.get_name.apply(this, arguments);
        }
      },
      getNameOwner: {
        value: function getNameOwner() {
          return this.get_name_owner.apply(this, arguments);
        }
      },
      getObjectPath: {
        value: function getObjectPath() {
          return this.get_object_path.apply(this, arguments);
        }
      },
      setCachedProperty: {
        value: function setCachedProperty() {
          return this.set_cached_property.apply(this, arguments);
        }
      },
      setDefaultTimeout: {
        value: function setDefaultTimeout() {
          return this.set_default_timeout.apply(this, arguments);
        }
      },
      setInterfaceInfo: {
        value: function setInterfaceInfo() {
          return this.set_interface_info.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusServer,
    {
      newSync: {
        value: function newSync() {
          return this.new_sync.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DBusServer.prototype,
    {
      getClientAddress: {
        value: function getClientAddress() {
          return this.get_client_address.apply(this, arguments);
        }
      },
      getFlags: {
        value: function getFlags() {
          return this.get_flags.apply(this, arguments);
        }
      },
      getGuid: {
        value: function getGuid() {
          return this.get_guid.apply(this, arguments);
        }
      },
      isActive: {
        value: function isActive() {
          return this.is_active.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DesktopAppInfo,
    {
      newFromFilename: {
        value: function newFromFilename() {
          return this.new_from_filename.apply(this, arguments);
        }
      },
      newFromKeyfile: {
        value: function newFromKeyfile() {
          return this.new_from_keyfile.apply(this, arguments);
        }
      },
      setDesktopEnv: {
        value: function setDesktopEnv() {
          return this.set_desktop_env.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DesktopAppInfo.prototype,
    {
      getActionName: {
        value: function getActionName() {
          return this.get_action_name.apply(this, arguments);
        }
      },
      getBoolean: {
        value: function getBoolean() {
          return this.get_boolean.apply(this, arguments);
        }
      },
      getCategories: {
        value: function getCategories() {
          return this.get_categories.apply(this, arguments);
        }
      },
      getFilename: {
        value: function getFilename() {
          return this.get_filename.apply(this, arguments);
        }
      },
      getGenericName: {
        value: function getGenericName() {
          return this.get_generic_name.apply(this, arguments);
        }
      },
      getIsHidden: {
        value: function getIsHidden() {
          return this.get_is_hidden.apply(this, arguments);
        }
      },
      getKeywords: {
        value: function getKeywords() {
          return this.get_keywords.apply(this, arguments);
        }
      },
      getNodisplay: {
        value: function getNodisplay() {
          return this.get_nodisplay.apply(this, arguments);
        }
      },
      getShowIn: {
        value: function getShowIn() {
          return this.get_show_in.apply(this, arguments);
        }
      },
      getStartupWmClass: {
        value: function getStartupWmClass() {
          return this.get_startup_wm_class.apply(this, arguments);
        }
      },
      getString: {
        value: function getString() {
          return this.get_string.apply(this, arguments);
        }
      },
      hasKey: {
        value: function hasKey() {
          return this.has_key.apply(this, arguments);
        }
      },
      launchAction: {
        value: function launchAction() {
          return this.launch_action.apply(this, arguments);
        }
      },
      launchUrisAsManager: {
        value: function launchUrisAsManager() {
          return this.launch_uris_as_manager.apply(this, arguments);
        }
      },
      listActions: {
        value: function listActions() {
          return this.list_actions.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.DesktopAppInfoLookup.prototype,
    {
      getDefaultForUriScheme: {
        value: function getDefaultForUriScheme() {
          return this.get_default_for_uri_scheme.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Drive.prototype,
    {
      canEject: {
        value: function canEject() {
          return this.can_eject.apply(this, arguments);
        }
      },
      canPollForMedia: {
        value: function canPollForMedia() {
          return this.can_poll_for_media.apply(this, arguments);
        }
      },
      canStartDegraded: {
        value: function canStartDegraded() {
          return this.can_start_degraded.apply(this, arguments);
        }
      },
      canStart: {
        value: function canStart() {
          return this.can_start.apply(this, arguments);
        }
      },
      canStop: {
        value: function canStop() {
          return this.can_stop.apply(this, arguments);
        }
      },
      ejectFinish: {
        value: function ejectFinish() {
          return this.eject_finish.apply(this, arguments);
        }
      },
      ejectWithOperationFinish: {
        value: function ejectWithOperationFinish() {
          return this.eject_with_operation_finish.apply(this, arguments);
        }
      },
      ejectWithOperation: {
        value: function ejectWithOperation() {
          return this.eject_with_operation.apply(this, arguments);
        }
      },
      enumerateIdentifiers: {
        value: function enumerateIdentifiers() {
          return this.enumerate_identifiers.apply(this, arguments);
        }
      },
      getIcon: {
        value: function getIcon() {
          return this.get_icon.apply(this, arguments);
        }
      },
      getIdentifier: {
        value: function getIdentifier() {
          return this.get_identifier.apply(this, arguments);
        }
      },
      getName: {
        value: function getName() {
          return this.get_name.apply(this, arguments);
        }
      },
      getSortKey: {
        value: function getSortKey() {
          return this.get_sort_key.apply(this, arguments);
        }
      },
      getStartStopType: {
        value: function getStartStopType() {
          return this.get_start_stop_type.apply(this, arguments);
        }
      },
      getSymbolicIcon: {
        value: function getSymbolicIcon() {
          return this.get_symbolic_icon.apply(this, arguments);
        }
      },
      getVolumes: {
        value: function getVolumes() {
          return this.get_volumes.apply(this, arguments);
        }
      },
      hasMedia: {
        value: function hasMedia() {
          return this.has_media.apply(this, arguments);
        }
      },
      hasVolumes: {
        value: function hasVolumes() {
          return this.has_volumes.apply(this, arguments);
        }
      },
      isMediaCheckAutomatic: {
        value: function isMediaCheckAutomatic() {
          return this.is_media_check_automatic.apply(this, arguments);
        }
      },
      isMediaRemovable: {
        value: function isMediaRemovable() {
          return this.is_media_removable.apply(this, arguments);
        }
      },
      pollForMediaFinish: {
        value: function pollForMediaFinish() {
          return this.poll_for_media_finish.apply(this, arguments);
        }
      },
      pollForMedia: {
        value: function pollForMedia() {
          return this.poll_for_media.apply(this, arguments);
        }
      },
      startFinish: {
        value: function startFinish() {
          return this.start_finish.apply(this, arguments);
        }
      },
      stopFinish: {
        value: function stopFinish() {
          return this.stop_finish.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.EmblemedIcon.prototype,
    {
      addEmblem: {
        value: function addEmblem() {
          return this.add_emblem.apply(this, arguments);
        }
      },
      clearEmblems: {
        value: function clearEmblems() {
          return this.clear_emblems.apply(this, arguments);
        }
      },
      getEmblems: {
        value: function getEmblems() {
          return this.get_emblems.apply(this, arguments);
        }
      },
      getIcon: {
        value: function getIcon() {
          return this.get_icon.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Emblem,
    {
      newWithOrigin: {
        value: function newWithOrigin() {
          return this.new_with_origin.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Emblem.prototype,
    {
      getIcon: {
        value: function getIcon() {
          return this.get_icon.apply(this, arguments);
        }
      },
      getOrigin: {
        value: function getOrigin() {
          return this.get_origin.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.File,
    {
      newForCommandlineArgAndCwd: {
        value: function newForCommandlineArgAndCwd() {
          return this.new_for_commandline_arg_and_cwd.apply(this, arguments);
        }
      },
      newForCommandlineArg: {
        value: function newForCommandlineArg() {
          return this.new_for_commandline_arg.apply(this, arguments);
        }
      },
      newForPath: {
        value: function newForPath() {
          return this.new_for_path.apply(this, arguments);
        }
      },
      newForUri: {
        value: function newForUri() {
          return this.new_for_uri.apply(this, arguments);
        }
      },
      newTmp: {
        value: function newTmp() {
          return this.new_tmp.apply(this, arguments);
        }
      },
      parseName: {
        value: function parseName() {
          return this.parse_name.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.File.prototype,
    {
      appendToAsync: {
        value: function appendToAsync() {
          return this.append_to_async.apply(this, arguments);
        }
      },
      appendToFinish: {
        value: function appendToFinish() {
          return this.append_to_finish.apply(this, arguments);
        }
      },
      appendTo: {
        value: function appendTo() {
          return this.append_to.apply(this, arguments);
        }
      },
      copyAttributes: {
        value: function copyAttributes() {
          return this.copy_attributes.apply(this, arguments);
        }
      },
      copyFinish: {
        value: function copyFinish() {
          return this.copy_finish.apply(this, arguments);
        }
      },
      createAsync: {
        value: function createAsync() {
          return this.create_async.apply(this, arguments);
        }
      },
      createFinish: {
        value: function createFinish() {
          return this.create_finish.apply(this, arguments);
        }
      },
      createReadwriteAsync: {
        value: function createReadwriteAsync() {
          return this.create_readwrite_async.apply(this, arguments);
        }
      },
      createReadwriteFinish: {
        value: function createReadwriteFinish() {
          return this.create_readwrite_finish.apply(this, arguments);
        }
      },
      createReadwrite: {
        value: function createReadwrite() {
          return this.create_readwrite.apply(this, arguments);
        }
      },
      deleteAsync: {
        value: function deleteAsync() {
          return this.delete_async.apply(this, arguments);
        }
      },
      deleteFinish: {
        value: function deleteFinish() {
          return this.delete_finish.apply(this, arguments);
        }
      },
      ejectMountableFinish: {
        value: function ejectMountableFinish() {
          return this.eject_mountable_finish.apply(this, arguments);
        }
      },
      ejectMountable: {
        value: function ejectMountable() {
          return this.eject_mountable.apply(this, arguments);
        }
      },
      ejectMountableWithOperationFinish: {
        value: function ejectMountableWithOperationFinish() {
          return this.eject_mountable_with_operation_finish.apply(this, arguments);
        }
      },
      ejectMountableWithOperation: {
        value: function ejectMountableWithOperation() {
          return this.eject_mountable_with_operation.apply(this, arguments);
        }
      },
      enumerateChildrenAsync: {
        value: function enumerateChildrenAsync() {
          return this.enumerate_children_async.apply(this, arguments);
        }
      },
      enumerateChildrenFinish: {
        value: function enumerateChildrenFinish() {
          return this.enumerate_children_finish.apply(this, arguments);
        }
      },
      enumerateChildren: {
        value: function enumerateChildren() {
          return this.enumerate_children.apply(this, arguments);
        }
      },
      findEnclosingMountAsync: {
        value: function findEnclosingMountAsync() {
          return this.find_enclosing_mount_async.apply(this, arguments);
        }
      },
      findEnclosingMountFinish: {
        value: function findEnclosingMountFinish() {
          return this.find_enclosing_mount_finish.apply(this, arguments);
        }
      },
      findEnclosingMount: {
        value: function findEnclosingMount() {
          return this.find_enclosing_mount.apply(this, arguments);
        }
      },
      getBasename: {
        value: function getBasename() {
          return this.get_basename.apply(this, arguments);
        }
      },
      getChildForDisplayName: {
        value: function getChildForDisplayName() {
          return this.get_child_for_display_name.apply(this, arguments);
        }
      },
      getChild: {
        value: function getChild() {
          return this.get_child.apply(this, arguments);
        }
      },
      getParent: {
        value: function getParent() {
          return this.get_parent.apply(this, arguments);
        }
      },
      getParseName: {
        value: function getParseName() {
          return this.get_parse_name.apply(this, arguments);
        }
      },
      getPath: {
        value: function getPath() {
          return this.get_path.apply(this, arguments);
        }
      },
      getRelativePath: {
        value: function getRelativePath() {
          return this.get_relative_path.apply(this, arguments);
        }
      },
      getUri: {
        value: function getUri() {
          return this.get_uri.apply(this, arguments);
        }
      },
      getUriScheme: {
        value: function getUriScheme() {
          return this.get_uri_scheme.apply(this, arguments);
        }
      },
      hasParent: {
        value: function hasParent() {
          return this.has_parent.apply(this, arguments);
        }
      },
      hasPrefix: {
        value: function hasPrefix() {
          return this.has_prefix.apply(this, arguments);
        }
      },
      hasUriScheme: {
        value: function hasUriScheme() {
          return this.has_uri_scheme.apply(this, arguments);
        }
      },
      isNative: {
        value: function isNative() {
          return this.is_native.apply(this, arguments);
        }
      },
      loadContentsAsync: {
        value: function loadContentsAsync() {
          return this.load_contents_async.apply(this, arguments);
        }
      },
      loadContentsFinish: {
        value: function loadContentsFinish() {
          return this.load_contents_finish.apply(this, arguments);
        }
      },
      loadContents: {
        value: function loadContents() {
          return this.load_contents.apply(this, arguments);
        }
      },
      loadPartialContentsFinish: {
        value: function loadPartialContentsFinish() {
          return this.load_partial_contents_finish.apply(this, arguments);
        }
      },
      makeDirectoryAsync: {
        value: function makeDirectoryAsync() {
          return this.make_directory_async.apply(this, arguments);
        }
      },
      makeDirectoryFinish: {
        value: function makeDirectoryFinish() {
          return this.make_directory_finish.apply(this, arguments);
        }
      },
      makeDirectory: {
        value: function makeDirectory() {
          return this.make_directory.apply(this, arguments);
        }
      },
      makeDirectoryWithParents: {
        value: function makeDirectoryWithParents() {
          return this.make_directory_with_parents.apply(this, arguments);
        }
      },
      makeSymbolicLink: {
        value: function makeSymbolicLink() {
          return this.make_symbolic_link.apply(this, arguments);
        }
      },
      measureDiskUsageFinish: {
        value: function measureDiskUsageFinish() {
          return this.measure_disk_usage_finish.apply(this, arguments);
        }
      },
      monitorDirectory: {
        value: function monitorDirectory() {
          return this.monitor_directory.apply(this, arguments);
        }
      },
      monitorFile: {
        value: function monitorFile() {
          return this.monitor_file.apply(this, arguments);
        }
      },
      mountEnclosingVolumeFinish: {
        value: function mountEnclosingVolumeFinish() {
          return this.mount_enclosing_volume_finish.apply(this, arguments);
        }
      },
      mountEnclosingVolume: {
        value: function mountEnclosingVolume() {
          return this.mount_enclosing_volume.apply(this, arguments);
        }
      },
      mountMountableFinish: {
        value: function mountMountableFinish() {
          return this.mount_mountable_finish.apply(this, arguments);
        }
      },
      mountMountable: {
        value: function mountMountable() {
          return this.mount_mountable.apply(this, arguments);
        }
      },
      openReadwriteAsync: {
        value: function openReadwriteAsync() {
          return this.open_readwrite_async.apply(this, arguments);
        }
      },
      openReadwriteFinish: {
        value: function openReadwriteFinish() {
          return this.open_readwrite_finish.apply(this, arguments);
        }
      },
      openReadwrite: {
        value: function openReadwrite() {
          return this.open_readwrite.apply(this, arguments);
        }
      },
      pollMountableFinish: {
        value: function pollMountableFinish() {
          return this.poll_mountable_finish.apply(this, arguments);
        }
      },
      pollMountable: {
        value: function pollMountable() {
          return this.poll_mountable.apply(this, arguments);
        }
      },
      queryDefaultHandler: {
        value: function queryDefaultHandler() {
          return this.query_default_handler.apply(this, arguments);
        }
      },
      queryExists: {
        value: function queryExists() {
          return this.query_exists.apply(this, arguments);
        }
      },
      queryFilesystemInfoAsync: {
        value: function queryFilesystemInfoAsync() {
          return this.query_filesystem_info_async.apply(this, arguments);
        }
      },
      queryFilesystemInfoFinish: {
        value: function queryFilesystemInfoFinish() {
          return this.query_filesystem_info_finish.apply(this, arguments);
        }
      },
      queryFilesystemInfo: {
        value: function queryFilesystemInfo() {
          return this.query_filesystem_info.apply(this, arguments);
        }
      },
      queryFileType: {
        value: function queryFileType() {
          return this.query_file_type.apply(this, arguments);
        }
      },
      queryInfoAsync: {
        value: function queryInfoAsync() {
          return this.query_info_async.apply(this, arguments);
        }
      },
      queryInfoFinish: {
        value: function queryInfoFinish() {
          return this.query_info_finish.apply(this, arguments);
        }
      },
      queryInfo: {
        value: function queryInfo() {
          return this.query_info.apply(this, arguments);
        }
      },
      querySettableAttributes: {
        value: function querySettableAttributes() {
          return this.query_settable_attributes.apply(this, arguments);
        }
      },
      queryWritableNamespaces: {
        value: function queryWritableNamespaces() {
          return this.query_writable_namespaces.apply(this, arguments);
        }
      },
      readAsync: {
        value: function readAsync() {
          return this.read_async.apply(this, arguments);
        }
      },
      readFinish: {
        value: function readFinish() {
          return this.read_finish.apply(this, arguments);
        }
      },
      replaceAsync: {
        value: function replaceAsync() {
          return this.replace_async.apply(this, arguments);
        }
      },
      replaceContentsAsync: {
        value: function replaceContentsAsync() {
          return this.replace_contents_async.apply(this, arguments);
        }
      },
      replaceContentsBytesAsync: {
        value: function replaceContentsBytesAsync() {
          return this.replace_contents_bytes_async.apply(this, arguments);
        }
      },
      replaceContentsFinish: {
        value: function replaceContentsFinish() {
          return this.replace_contents_finish.apply(this, arguments);
        }
      },
      replaceContents: {
        value: function replaceContents() {
          return this.replace_contents.apply(this, arguments);
        }
      },
      replaceFinish: {
        value: function replaceFinish() {
          return this.replace_finish.apply(this, arguments);
        }
      },
      replaceReadwriteAsync: {
        value: function replaceReadwriteAsync() {
          return this.replace_readwrite_async.apply(this, arguments);
        }
      },
      replaceReadwriteFinish: {
        value: function replaceReadwriteFinish() {
          return this.replace_readwrite_finish.apply(this, arguments);
        }
      },
      replaceReadwrite: {
        value: function replaceReadwrite() {
          return this.replace_readwrite.apply(this, arguments);
        }
      },
      resolveRelativePath: {
        value: function resolveRelativePath() {
          return this.resolve_relative_path.apply(this, arguments);
        }
      },
      setAttributeByteString: {
        value: function setAttributeByteString() {
          return this.set_attribute_byte_string.apply(this, arguments);
        }
      },
      setAttribute: {
        value: function setAttribute() {
          return this.set_attribute.apply(this, arguments);
        }
      },
      setAttributeInt32: {
        value: function setAttributeInt32() {
          return this.set_attribute_int32.apply(this, arguments);
        }
      },
      setAttributeInt64: {
        value: function setAttributeInt64() {
          return this.set_attribute_int64.apply(this, arguments);
        }
      },
      setAttributesAsync: {
        value: function setAttributesAsync() {
          return this.set_attributes_async.apply(this, arguments);
        }
      },
      setAttributesFinish: {
        value: function setAttributesFinish() {
          return this.set_attributes_finish.apply(this, arguments);
        }
      },
      setAttributesFromInfo: {
        value: function setAttributesFromInfo() {
          return this.set_attributes_from_info.apply(this, arguments);
        }
      },
      setAttributeString: {
        value: function setAttributeString() {
          return this.set_attribute_string.apply(this, arguments);
        }
      },
      setAttributeUint32: {
        value: function setAttributeUint32() {
          return this.set_attribute_uint32.apply(this, arguments);
        }
      },
      setAttributeUint64: {
        value: function setAttributeUint64() {
          return this.set_attribute_uint64.apply(this, arguments);
        }
      },
      setDisplayNameAsync: {
        value: function setDisplayNameAsync() {
          return this.set_display_name_async.apply(this, arguments);
        }
      },
      setDisplayNameFinish: {
        value: function setDisplayNameFinish() {
          return this.set_display_name_finish.apply(this, arguments);
        }
      },
      setDisplayName: {
        value: function setDisplayName() {
          return this.set_display_name.apply(this, arguments);
        }
      },
      startMountableFinish: {
        value: function startMountableFinish() {
          return this.start_mountable_finish.apply(this, arguments);
        }
      },
      startMountable: {
        value: function startMountable() {
          return this.start_mountable.apply(this, arguments);
        }
      },
      stopMountableFinish: {
        value: function stopMountableFinish() {
          return this.stop_mountable_finish.apply(this, arguments);
        }
      },
      stopMountable: {
        value: function stopMountable() {
          return this.stop_mountable.apply(this, arguments);
        }
      },
      supportsThreadContexts: {
        value: function supportsThreadContexts() {
          return this.supports_thread_contexts.apply(this, arguments);
        }
      },
      trashAsync: {
        value: function trashAsync() {
          return this.trash_async.apply(this, arguments);
        }
      },
      trashFinish: {
        value: function trashFinish() {
          return this.trash_finish.apply(this, arguments);
        }
      },
      unmountMountableFinish: {
        value: function unmountMountableFinish() {
          return this.unmount_mountable_finish.apply(this, arguments);
        }
      },
      unmountMountable: {
        value: function unmountMountable() {
          return this.unmount_mountable.apply(this, arguments);
        }
      },
      unmountMountableWithOperationFinish: {
        value: function unmountMountableWithOperationFinish() {
          return this.unmount_mountable_with_operation_finish.apply(this, arguments);
        }
      },
      unmountMountableWithOperation: {
        value: function unmountMountableWithOperation() {
          return this.unmount_mountable_with_operation.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FileAttributeMatcher.prototype,
    {
      enumerateNamespace: {
        value: function enumerateNamespace() {
          return this.enumerate_namespace.apply(this, arguments);
        }
      },
      enumerateNext: {
        value: function enumerateNext() {
          return this.enumerate_next.apply(this, arguments);
        }
      },
      matchesOnly: {
        value: function matchesOnly() {
          return this.matches_only.apply(this, arguments);
        }
      },
      toString: {
        value: function toString() {
          return this.to_string.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FileDescriptorBased.prototype,
    {
      getFd: {
        value: function getFd() {
          return this.get_fd.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FileEnumerator.prototype,
    {
      closeAsync: {
        value: function closeAsync() {
          return this.close_async.apply(this, arguments);
        }
      },
      closeFinish: {
        value: function closeFinish() {
          return this.close_finish.apply(this, arguments);
        }
      },
      getChild: {
        value: function getChild() {
          return this.get_child.apply(this, arguments);
        }
      },
      getContainer: {
        value: function getContainer() {
          return this.get_container.apply(this, arguments);
        }
      },
      hasPending: {
        value: function hasPending() {
          return this.has_pending.apply(this, arguments);
        }
      },
      isClosed: {
        value: function isClosed() {
          return this.is_closed.apply(this, arguments);
        }
      },
      nextFile: {
        value: function nextFile() {
          return this.next_file.apply(this, arguments);
        }
      },
      nextFilesAsync: {
        value: function nextFilesAsync() {
          return this.next_files_async.apply(this, arguments);
        }
      },
      nextFilesFinish: {
        value: function nextFilesFinish() {
          return this.next_files_finish.apply(this, arguments);
        }
      },
      setPending: {
        value: function setPending() {
          return this.set_pending.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FileIcon.prototype,
    {
      getFile: {
        value: function getFile() {
          return this.get_file.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FileInfo.prototype,
    {
      clearStatus: {
        value: function clearStatus() {
          return this.clear_status.apply(this, arguments);
        }
      },
      copyInto: {
        value: function copyInto() {
          return this.copy_into.apply(this, arguments);
        }
      },
      getAttributeAsString: {
        value: function getAttributeAsString() {
          return this.get_attribute_as_string.apply(this, arguments);
        }
      },
      getAttributeBoolean: {
        value: function getAttributeBoolean() {
          return this.get_attribute_boolean.apply(this, arguments);
        }
      },
      getAttributeByteString: {
        value: function getAttributeByteString() {
          return this.get_attribute_byte_string.apply(this, arguments);
        }
      },
      getAttributeData: {
        value: function getAttributeData() {
          return this.get_attribute_data.apply(this, arguments);
        }
      },
      getAttributeInt32: {
        value: function getAttributeInt32() {
          return this.get_attribute_int32.apply(this, arguments);
        }
      },
      getAttributeInt64: {
        value: function getAttributeInt64() {
          return this.get_attribute_int64.apply(this, arguments);
        }
      },
      getAttributeObject: {
        value: function getAttributeObject() {
          return this.get_attribute_object.apply(this, arguments);
        }
      },
      getAttributeStatus: {
        value: function getAttributeStatus() {
          return this.get_attribute_status.apply(this, arguments);
        }
      },
      getAttributeString: {
        value: function getAttributeString() {
          return this.get_attribute_string.apply(this, arguments);
        }
      },
      getAttributeStringv: {
        value: function getAttributeStringv() {
          return this.get_attribute_stringv.apply(this, arguments);
        }
      },
      getAttributeType: {
        value: function getAttributeType() {
          return this.get_attribute_type.apply(this, arguments);
        }
      },
      getAttributeUint32: {
        value: function getAttributeUint32() {
          return this.get_attribute_uint32.apply(this, arguments);
        }
      },
      getAttributeUint64: {
        value: function getAttributeUint64() {
          return this.get_attribute_uint64.apply(this, arguments);
        }
      },
      getContentType: {
        value: function getContentType() {
          return this.get_content_type.apply(this, arguments);
        }
      },
      getDeletionDate: {
        value: function getDeletionDate() {
          return this.get_deletion_date.apply(this, arguments);
        }
      },
      getDisplayName: {
        value: function getDisplayName() {
          return this.get_display_name.apply(this, arguments);
        }
      },
      getEditName: {
        value: function getEditName() {
          return this.get_edit_name.apply(this, arguments);
        }
      },
      getEtag: {
        value: function getEtag() {
          return this.get_etag.apply(this, arguments);
        }
      },
      getFileType: {
        value: function getFileType() {
          return this.get_file_type.apply(this, arguments);
        }
      },
      getIcon: {
        value: function getIcon() {
          return this.get_icon.apply(this, arguments);
        }
      },
      getIsBackup: {
        value: function getIsBackup() {
          return this.get_is_backup.apply(this, arguments);
        }
      },
      getIsHidden: {
        value: function getIsHidden() {
          return this.get_is_hidden.apply(this, arguments);
        }
      },
      getIsSymlink: {
        value: function getIsSymlink() {
          return this.get_is_symlink.apply(this, arguments);
        }
      },
      getModificationTime: {
        value: function getModificationTime() {
          return this.get_modification_time.apply(this, arguments);
        }
      },
      getName: {
        value: function getName() {
          return this.get_name.apply(this, arguments);
        }
      },
      getSize: {
        value: function getSize() {
          return this.get_size.apply(this, arguments);
        }
      },
      getSortOrder: {
        value: function getSortOrder() {
          return this.get_sort_order.apply(this, arguments);
        }
      },
      getSymbolicIcon: {
        value: function getSymbolicIcon() {
          return this.get_symbolic_icon.apply(this, arguments);
        }
      },
      getSymlinkTarget: {
        value: function getSymlinkTarget() {
          return this.get_symlink_target.apply(this, arguments);
        }
      },
      hasAttribute: {
        value: function hasAttribute() {
          return this.has_attribute.apply(this, arguments);
        }
      },
      hasNamespace: {
        value: function hasNamespace() {
          return this.has_namespace.apply(this, arguments);
        }
      },
      listAttributes: {
        value: function listAttributes() {
          return this.list_attributes.apply(this, arguments);
        }
      },
      removeAttribute: {
        value: function removeAttribute() {
          return this.remove_attribute.apply(this, arguments);
        }
      },
      setAttributeBoolean: {
        value: function setAttributeBoolean() {
          return this.set_attribute_boolean.apply(this, arguments);
        }
      },
      setAttributeByteString: {
        value: function setAttributeByteString() {
          return this.set_attribute_byte_string.apply(this, arguments);
        }
      },
      setAttribute: {
        value: function setAttribute() {
          return this.set_attribute.apply(this, arguments);
        }
      },
      setAttributeInt32: {
        value: function setAttributeInt32() {
          return this.set_attribute_int32.apply(this, arguments);
        }
      },
      setAttributeInt64: {
        value: function setAttributeInt64() {
          return this.set_attribute_int64.apply(this, arguments);
        }
      },
      setAttributeMask: {
        value: function setAttributeMask() {
          return this.set_attribute_mask.apply(this, arguments);
        }
      },
      setAttributeObject: {
        value: function setAttributeObject() {
          return this.set_attribute_object.apply(this, arguments);
        }
      },
      setAttributeStatus: {
        value: function setAttributeStatus() {
          return this.set_attribute_status.apply(this, arguments);
        }
      },
      setAttributeString: {
        value: function setAttributeString() {
          return this.set_attribute_string.apply(this, arguments);
        }
      },
      setAttributeStringv: {
        value: function setAttributeStringv() {
          return this.set_attribute_stringv.apply(this, arguments);
        }
      },
      setAttributeUint32: {
        value: function setAttributeUint32() {
          return this.set_attribute_uint32.apply(this, arguments);
        }
      },
      setAttributeUint64: {
        value: function setAttributeUint64() {
          return this.set_attribute_uint64.apply(this, arguments);
        }
      },
      setContentType: {
        value: function setContentType() {
          return this.set_content_type.apply(this, arguments);
        }
      },
      setDisplayName: {
        value: function setDisplayName() {
          return this.set_display_name.apply(this, arguments);
        }
      },
      setEditName: {
        value: function setEditName() {
          return this.set_edit_name.apply(this, arguments);
        }
      },
      setFileType: {
        value: function setFileType() {
          return this.set_file_type.apply(this, arguments);
        }
      },
      setIcon: {
        value: function setIcon() {
          return this.set_icon.apply(this, arguments);
        }
      },
      setIsHidden: {
        value: function setIsHidden() {
          return this.set_is_hidden.apply(this, arguments);
        }
      },
      setIsSymlink: {
        value: function setIsSymlink() {
          return this.set_is_symlink.apply(this, arguments);
        }
      },
      setModificationTime: {
        value: function setModificationTime() {
          return this.set_modification_time.apply(this, arguments);
        }
      },
      setName: {
        value: function setName() {
          return this.set_name.apply(this, arguments);
        }
      },
      setSize: {
        value: function setSize() {
          return this.set_size.apply(this, arguments);
        }
      },
      setSortOrder: {
        value: function setSortOrder() {
          return this.set_sort_order.apply(this, arguments);
        }
      },
      setSymbolicIcon: {
        value: function setSymbolicIcon() {
          return this.set_symbolic_icon.apply(this, arguments);
        }
      },
      setSymlinkTarget: {
        value: function setSymlinkTarget() {
          return this.set_symlink_target.apply(this, arguments);
        }
      },
      unsetAttributeMask: {
        value: function unsetAttributeMask() {
          return this.unset_attribute_mask.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FileInputStream.prototype,
    {
      queryInfoAsync: {
        value: function queryInfoAsync() {
          return this.query_info_async.apply(this, arguments);
        }
      },
      queryInfoFinish: {
        value: function queryInfoFinish() {
          return this.query_info_finish.apply(this, arguments);
        }
      },
      queryInfo: {
        value: function queryInfo() {
          return this.query_info.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FileIOStream.prototype,
    {
      getEtag: {
        value: function getEtag() {
          return this.get_etag.apply(this, arguments);
        }
      },
      queryInfoAsync: {
        value: function queryInfoAsync() {
          return this.query_info_async.apply(this, arguments);
        }
      },
      queryInfoFinish: {
        value: function queryInfoFinish() {
          return this.query_info_finish.apply(this, arguments);
        }
      },
      queryInfo: {
        value: function queryInfo() {
          return this.query_info.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FileMonitor.prototype,
    {
      emitEvent: {
        value: function emitEvent() {
          return this.emit_event.apply(this, arguments);
        }
      },
      isCancelled: {
        value: function isCancelled() {
          return this.is_cancelled.apply(this, arguments);
        }
      },
      setRateLimit: {
        value: function setRateLimit() {
          return this.set_rate_limit.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FilenameCompleter.prototype,
    {
      getCompletions: {
        value: function getCompletions() {
          return this.get_completions.apply(this, arguments);
        }
      },
      getCompletionSuffix: {
        value: function getCompletionSuffix() {
          return this.get_completion_suffix.apply(this, arguments);
        }
      },
      setDirsOnly: {
        value: function setDirsOnly() {
          return this.set_dirs_only.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FileOutputStream.prototype,
    {
      getEtag: {
        value: function getEtag() {
          return this.get_etag.apply(this, arguments);
        }
      },
      queryInfoAsync: {
        value: function queryInfoAsync() {
          return this.query_info_async.apply(this, arguments);
        }
      },
      queryInfoFinish: {
        value: function queryInfoFinish() {
          return this.query_info_finish.apply(this, arguments);
        }
      },
      queryInfo: {
        value: function queryInfo() {
          return this.query_info.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FilterInputStream.prototype,
    {
      getBaseStream: {
        value: function getBaseStream() {
          return this.get_base_stream.apply(this, arguments);
        }
      },
      getCloseBaseStream: {
        value: function getCloseBaseStream() {
          return this.get_close_base_stream.apply(this, arguments);
        }
      },
      setCloseBaseStream: {
        value: function setCloseBaseStream() {
          return this.set_close_base_stream.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.FilterOutputStream.prototype,
    {
      getBaseStream: {
        value: function getBaseStream() {
          return this.get_base_stream.apply(this, arguments);
        }
      },
      getCloseBaseStream: {
        value: function getCloseBaseStream() {
          return this.get_close_base_stream.apply(this, arguments);
        }
      },
      setCloseBaseStream: {
        value: function setCloseBaseStream() {
          return this.set_close_base_stream.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Icon,
    {
      newForString: {
        value: function newForString() {
          return this.new_for_string.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Icon.prototype,
    {
      toString: {
        value: function toString() {
          return this.to_string.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.InetAddress,
    {
      newAny: {
        value: function newAny() {
          return this.new_any.apply(this, arguments);
        }
      },
      newFromBytes: {
        value: function newFromBytes() {
          return this.new_from_bytes.apply(this, arguments);
        }
      },
      newFromString: {
        value: function newFromString() {
          return this.new_from_string.apply(this, arguments);
        }
      },
      newLoopback: {
        value: function newLoopback() {
          return this.new_loopback.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.InetAddress.prototype,
    {
      getFamily: {
        value: function getFamily() {
          return this.get_family.apply(this, arguments);
        }
      },
      getIsAny: {
        value: function getIsAny() {
          return this.get_is_any.apply(this, arguments);
        }
      },
      getIsLinkLocal: {
        value: function getIsLinkLocal() {
          return this.get_is_link_local.apply(this, arguments);
        }
      },
      getIsLoopback: {
        value: function getIsLoopback() {
          return this.get_is_loopback.apply(this, arguments);
        }
      },
      getIsMcGlobal: {
        value: function getIsMcGlobal() {
          return this.get_is_mc_global.apply(this, arguments);
        }
      },
      getIsMcLinkLocal: {
        value: function getIsMcLinkLocal() {
          return this.get_is_mc_link_local.apply(this, arguments);
        }
      },
      getIsMcNodeLocal: {
        value: function getIsMcNodeLocal() {
          return this.get_is_mc_node_local.apply(this, arguments);
        }
      },
      getIsMcOrgLocal: {
        value: function getIsMcOrgLocal() {
          return this.get_is_mc_org_local.apply(this, arguments);
        }
      },
      getIsMcSiteLocal: {
        value: function getIsMcSiteLocal() {
          return this.get_is_mc_site_local.apply(this, arguments);
        }
      },
      getIsMulticast: {
        value: function getIsMulticast() {
          return this.get_is_multicast.apply(this, arguments);
        }
      },
      getIsSiteLocal: {
        value: function getIsSiteLocal() {
          return this.get_is_site_local.apply(this, arguments);
        }
      },
      getNativeSize: {
        value: function getNativeSize() {
          return this.get_native_size.apply(this, arguments);
        }
      },
      toString: {
        value: function toString() {
          return this.to_string.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.InetAddressMask,
    {
      newFromString: {
        value: function newFromString() {
          return this.new_from_string.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.InetAddressMask.prototype,
    {
      getAddress: {
        value: function getAddress() {
          return this.get_address.apply(this, arguments);
        }
      },
      getFamily: {
        value: function getFamily() {
          return this.get_family.apply(this, arguments);
        }
      },
      getLength: {
        value: function getLength() {
          return this.get_length.apply(this, arguments);
        }
      },
      toString: {
        value: function toString() {
          return this.to_string.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.InetSocketAddress,
    {
      newFromString: {
        value: function newFromString() {
          return this.new_from_string.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.InetSocketAddress.prototype,
    {
      getAddress: {
        value: function getAddress() {
          return this.get_address.apply(this, arguments);
        }
      },
      getFlowinfo: {
        value: function getFlowinfo() {
          return this.get_flowinfo.apply(this, arguments);
        }
      },
      getPort: {
        value: function getPort() {
          return this.get_port.apply(this, arguments);
        }
      },
      getScopeId: {
        value: function getScopeId() {
          return this.get_scope_id.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.InputStream.prototype,
    {
      clearPending: {
        value: function clearPending() {
          return this.clear_pending.apply(this, arguments);
        }
      },
      closeAsync: {
        value: function closeAsync() {
          return this.close_async.apply(this, arguments);
        }
      },
      closeFinish: {
        value: function closeFinish() {
          return this.close_finish.apply(this, arguments);
        }
      },
      hasPending: {
        value: function hasPending() {
          return this.has_pending.apply(this, arguments);
        }
      },
      isClosed: {
        value: function isClosed() {
          return this.is_closed.apply(this, arguments);
        }
      },
      readAll: {
        value: function readAll() {
          return this.read_all.apply(this, arguments);
        }
      },
      readAsync: {
        value: function readAsync() {
          return this.read_async.apply(this, arguments);
        }
      },
      readBytesAsync: {
        value: function readBytesAsync() {
          return this.read_bytes_async.apply(this, arguments);
        }
      },
      readBytesFinish: {
        value: function readBytesFinish() {
          return this.read_bytes_finish.apply(this, arguments);
        }
      },
      readBytes: {
        value: function readBytes() {
          return this.read_bytes.apply(this, arguments);
        }
      },
      readFinish: {
        value: function readFinish() {
          return this.read_finish.apply(this, arguments);
        }
      },
      setPending: {
        value: function setPending() {
          return this.set_pending.apply(this, arguments);
        }
      },
      skipAsync: {
        value: function skipAsync() {
          return this.skip_async.apply(this, arguments);
        }
      },
      skipFinish: {
        value: function skipFinish() {
          return this.skip_finish.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.IOExtension.prototype,
    {
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
      getType: {
        value: function getType() {
          return this.get_type.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.IOExtensionPoint.prototype,
    {
      getExtensionByName: {
        value: function getExtensionByName() {
          return this.get_extension_by_name.apply(this, arguments);
        }
      },
      getExtensions: {
        value: function getExtensions() {
          return this.get_extensions.apply(this, arguments);
        }
      },
      getRequiredType: {
        value: function getRequiredType() {
          return this.get_required_type.apply(this, arguments);
        }
      },
      setRequiredType: {
        value: function setRequiredType() {
          return this.set_required_type.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.IOSchedulerJob.prototype,
    {
      sendToMainloopAsync: {
        value: function sendToMainloopAsync() {
          return this.send_to_mainloop_async.apply(this, arguments);
        }
      },
      sendToMainloop: {
        value: function sendToMainloop() {
          return this.send_to_mainloop.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.IOStream,
    {
      spliceFinish: {
        value: function spliceFinish() {
          return this.splice_finish.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.IOStream.prototype,
    {
      clearPending: {
        value: function clearPending() {
          return this.clear_pending.apply(this, arguments);
        }
      },
      closeAsync: {
        value: function closeAsync() {
          return this.close_async.apply(this, arguments);
        }
      },
      closeFinish: {
        value: function closeFinish() {
          return this.close_finish.apply(this, arguments);
        }
      },
      getInputStream: {
        value: function getInputStream() {
          return this.get_input_stream.apply(this, arguments);
        }
      },
      getOutputStream: {
        value: function getOutputStream() {
          return this.get_output_stream.apply(this, arguments);
        }
      },
      hasPending: {
        value: function hasPending() {
          return this.has_pending.apply(this, arguments);
        }
      },
      isClosed: {
        value: function isClosed() {
          return this.is_closed.apply(this, arguments);
        }
      },
      setPending: {
        value: function setPending() {
          return this.set_pending.apply(this, arguments);
        }
      },
      spliceAsync: {
        value: function spliceAsync() {
          return this.splice_async.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.LoadableIcon.prototype,
    {
      loadAsync: {
        value: function loadAsync() {
          return this.load_async.apply(this, arguments);
        }
      },
      loadFinish: {
        value: function loadFinish() {
          return this.load_finish.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.MemoryInputStream,
    {
      newFromBytes: {
        value: function newFromBytes() {
          return this.new_from_bytes.apply(this, arguments);
        }
      },
      newFromData: {
        value: function newFromData() {
          return this.new_from_data.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.MemoryInputStream.prototype,
    {
      addBytes: {
        value: function addBytes() {
          return this.add_bytes.apply(this, arguments);
        }
      },
      addData: {
        value: function addData() {
          return this.add_data.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.MemoryOutputStream,
    {
      newResizable: {
        value: function newResizable() {
          return this.new_resizable.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.MemoryOutputStream.prototype,
    {
      getData: {
        value: function getData() {
          return this.get_data.apply(this, arguments);
        }
      },
      getDataSize: {
        value: function getDataSize() {
          return this.get_data_size.apply(this, arguments);
        }
      },
      getSize: {
        value: function getSize() {
          return this.get_size.apply(this, arguments);
        }
      },
      stealAsBytes: {
        value: function stealAsBytes() {
          return this.steal_as_bytes.apply(this, arguments);
        }
      },
      stealData: {
        value: function stealData() {
          return this.steal_data.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Menu.prototype,
    {
      appendItem: {
        value: function appendItem() {
          return this.append_item.apply(this, arguments);
        }
      },
      appendSection: {
        value: function appendSection() {
          return this.append_section.apply(this, arguments);
        }
      },
      appendSubmenu: {
        value: function appendSubmenu() {
          return this.append_submenu.apply(this, arguments);
        }
      },
      insertItem: {
        value: function insertItem() {
          return this.insert_item.apply(this, arguments);
        }
      },
      insertSection: {
        value: function insertSection() {
          return this.insert_section.apply(this, arguments);
        }
      },
      insertSubmenu: {
        value: function insertSubmenu() {
          return this.insert_submenu.apply(this, arguments);
        }
      },
      prependItem: {
        value: function prependItem() {
          return this.prepend_item.apply(this, arguments);
        }
      },
      prependSection: {
        value: function prependSection() {
          return this.prepend_section.apply(this, arguments);
        }
      },
      prependSubmenu: {
        value: function prependSubmenu() {
          return this.prepend_submenu.apply(this, arguments);
        }
      },
      removeAll: {
        value: function removeAll() {
          return this.remove_all.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.MenuAttributeIter.prototype,
    {
      getName: {
        value: function getName() {
          return this.get_name.apply(this, arguments);
        }
      },
      getNext: {
        value: function getNext() {
          return this.get_next.apply(this, arguments);
        }
      },
      getValue: {
        value: function getValue() {
          return this.get_value.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.MenuItem,
    {
      newFromModel: {
        value: function newFromModel() {
          return this.new_from_model.apply(this, arguments);
        }
      },
      newSection: {
        value: function newSection() {
          return this.new_section.apply(this, arguments);
        }
      },
      newSubmenu: {
        value: function newSubmenu() {
          return this.new_submenu.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.MenuItem.prototype,
    {
      getAttributeValue: {
        value: function getAttributeValue() {
          return this.get_attribute_value.apply(this, arguments);
        }
      },
      getLink: {
        value: function getLink() {
          return this.get_link.apply(this, arguments);
        }
      },
      setActionAndTargetValue: {
        value: function setActionAndTargetValue() {
          return this.set_action_and_target_value.apply(this, arguments);
        }
      },
      setAttributeValue: {
        value: function setAttributeValue() {
          return this.set_attribute_value.apply(this, arguments);
        }
      },
      setDetailedAction: {
        value: function setDetailedAction() {
          return this.set_detailed_action.apply(this, arguments);
        }
      },
      setIcon: {
        value: function setIcon() {
          return this.set_icon.apply(this, arguments);
        }
      },
      setLabel: {
        value: function setLabel() {
          return this.set_label.apply(this, arguments);
        }
      },
      setLink: {
        value: function setLink() {
          return this.set_link.apply(this, arguments);
        }
      },
      setSection: {
        value: function setSection() {
          return this.set_section.apply(this, arguments);
        }
      },
      setSubmenu: {
        value: function setSubmenu() {
          return this.set_submenu.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.MenuLinkIter.prototype,
    {
      getName: {
        value: function getName() {
          return this.get_name.apply(this, arguments);
        }
      },
      getNext: {
        value: function getNext() {
          return this.get_next.apply(this, arguments);
        }
      },
      getValue: {
        value: function getValue() {
          return this.get_value.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.MenuModel.prototype,
    {
      getItemAttributeValue: {
        value: function getItemAttributeValue() {
          return this.get_item_attribute_value.apply(this, arguments);
        }
      },
      getItemLink: {
        value: function getItemLink() {
          return this.get_item_link.apply(this, arguments);
        }
      },
      getNItems: {
        value: function getNItems() {
          return this.get_n_items.apply(this, arguments);
        }
      },
      isMutable: {
        value: function isMutable() {
          return this.is_mutable.apply(this, arguments);
        }
      },
      itemsChanged: {
        value: function itemsChanged() {
          return this.items_changed.apply(this, arguments);
        }
      },
      iterateItemAttributes: {
        value: function iterateItemAttributes() {
          return this.iterate_item_attributes.apply(this, arguments);
        }
      },
      iterateItemLinks: {
        value: function iterateItemLinks() {
          return this.iterate_item_links.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Mount.prototype,
    {
      canEject: {
        value: function canEject() {
          return this.can_eject.apply(this, arguments);
        }
      },
      canUnmount: {
        value: function canUnmount() {
          return this.can_unmount.apply(this, arguments);
        }
      },
      ejectFinish: {
        value: function ejectFinish() {
          return this.eject_finish.apply(this, arguments);
        }
      },
      ejectWithOperationFinish: {
        value: function ejectWithOperationFinish() {
          return this.eject_with_operation_finish.apply(this, arguments);
        }
      },
      ejectWithOperation: {
        value: function ejectWithOperation() {
          return this.eject_with_operation.apply(this, arguments);
        }
      },
      getDefaultLocation: {
        value: function getDefaultLocation() {
          return this.get_default_location.apply(this, arguments);
        }
      },
      getDrive: {
        value: function getDrive() {
          return this.get_drive.apply(this, arguments);
        }
      },
      getIcon: {
        value: function getIcon() {
          return this.get_icon.apply(this, arguments);
        }
      },
      getName: {
        value: function getName() {
          return this.get_name.apply(this, arguments);
        }
      },
      getRoot: {
        value: function getRoot() {
          return this.get_root.apply(this, arguments);
        }
      },
      getSortKey: {
        value: function getSortKey() {
          return this.get_sort_key.apply(this, arguments);
        }
      },
      getSymbolicIcon: {
        value: function getSymbolicIcon() {
          return this.get_symbolic_icon.apply(this, arguments);
        }
      },
      getUuid: {
        value: function getUuid() {
          return this.get_uuid.apply(this, arguments);
        }
      },
      getVolume: {
        value: function getVolume() {
          return this.get_volume.apply(this, arguments);
        }
      },
      guessContentTypeFinish: {
        value: function guessContentTypeFinish() {
          return this.guess_content_type_finish.apply(this, arguments);
        }
      },
      guessContentType: {
        value: function guessContentType() {
          return this.guess_content_type.apply(this, arguments);
        }
      },
      guessContentTypeSync: {
        value: function guessContentTypeSync() {
          return this.guess_content_type_sync.apply(this, arguments);
        }
      },
      isShadowed: {
        value: function isShadowed() {
          return this.is_shadowed.apply(this, arguments);
        }
      },
      remountFinish: {
        value: function remountFinish() {
          return this.remount_finish.apply(this, arguments);
        }
      },
      unmountFinish: {
        value: function unmountFinish() {
          return this.unmount_finish.apply(this, arguments);
        }
      },
      unmountWithOperationFinish: {
        value: function unmountWithOperationFinish() {
          return this.unmount_with_operation_finish.apply(this, arguments);
        }
      },
      unmountWithOperation: {
        value: function unmountWithOperation() {
          return this.unmount_with_operation.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.MountOperation.prototype,
    {
      getAnonymous: {
        value: function getAnonymous() {
          return this.get_anonymous.apply(this, arguments);
        }
      },
      getChoice: {
        value: function getChoice() {
          return this.get_choice.apply(this, arguments);
        }
      },
      getDomain: {
        value: function getDomain() {
          return this.get_domain.apply(this, arguments);
        }
      },
      getPassword: {
        value: function getPassword() {
          return this.get_password.apply(this, arguments);
        }
      },
      getPasswordSave: {
        value: function getPasswordSave() {
          return this.get_password_save.apply(this, arguments);
        }
      },
      getUsername: {
        value: function getUsername() {
          return this.get_username.apply(this, arguments);
        }
      },
      setAnonymous: {
        value: function setAnonymous() {
          return this.set_anonymous.apply(this, arguments);
        }
      },
      setChoice: {
        value: function setChoice() {
          return this.set_choice.apply(this, arguments);
        }
      },
      setDomain: {
        value: function setDomain() {
          return this.set_domain.apply(this, arguments);
        }
      },
      setPassword: {
        value: function setPassword() {
          return this.set_password.apply(this, arguments);
        }
      },
      setPasswordSave: {
        value: function setPasswordSave() {
          return this.set_password_save.apply(this, arguments);
        }
      },
      setUsername: {
        value: function setUsername() {
          return this.set_username.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.NetworkAddress,
    {
      parseUri: {
        value: function parseUri() {
          return this.parse_uri.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.NetworkAddress.prototype,
    {
      getHostname: {
        value: function getHostname() {
          return this.get_hostname.apply(this, arguments);
        }
      },
      getPort: {
        value: function getPort() {
          return this.get_port.apply(this, arguments);
        }
      },
      getScheme: {
        value: function getScheme() {
          return this.get_scheme.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.NetworkMonitor,
    {
      getDefault: {
        value: function getDefault() {
          return this.get_default.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.NetworkMonitor.prototype,
    {
      canReachAsync: {
        value: function canReachAsync() {
          return this.can_reach_async.apply(this, arguments);
        }
      },
      canReachFinish: {
        value: function canReachFinish() {
          return this.can_reach_finish.apply(this, arguments);
        }
      },
      canReach: {
        value: function canReach() {
          return this.can_reach.apply(this, arguments);
        }
      },
      getNetworkAvailable: {
        value: function getNetworkAvailable() {
          return this.get_network_available.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.NetworkService.prototype,
    {
      getDomain: {
        value: function getDomain() {
          return this.get_domain.apply(this, arguments);
        }
      },
      getProtocol: {
        value: function getProtocol() {
          return this.get_protocol.apply(this, arguments);
        }
      },
      getScheme: {
        value: function getScheme() {
          return this.get_scheme.apply(this, arguments);
        }
      },
      getService: {
        value: function getService() {
          return this.get_service.apply(this, arguments);
        }
      },
      setScheme: {
        value: function setScheme() {
          return this.set_scheme.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Notification.prototype,
    {
      addButton: {
        value: function addButton() {
          return this.add_button.apply(this, arguments);
        }
      },
      addButtonWithTarget: {
        value: function addButtonWithTarget() {
          return this.add_button_with_target.apply(this, arguments);
        }
      },
      setBody: {
        value: function setBody() {
          return this.set_body.apply(this, arguments);
        }
      },
      setDefaultActionAndTarget: {
        value: function setDefaultActionAndTarget() {
          return this.set_default_action_and_target.apply(this, arguments);
        }
      },
      setDefaultAction: {
        value: function setDefaultAction() {
          return this.set_default_action.apply(this, arguments);
        }
      },
      setIcon: {
        value: function setIcon() {
          return this.set_icon.apply(this, arguments);
        }
      },
      setTitle: {
        value: function setTitle() {
          return this.set_title.apply(this, arguments);
        }
      },
      setUrgent: {
        value: function setUrgent() {
          return this.set_urgent.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.OutputStream.prototype,
    {
      clearPending: {
        value: function clearPending() {
          return this.clear_pending.apply(this, arguments);
        }
      },
      closeAsync: {
        value: function closeAsync() {
          return this.close_async.apply(this, arguments);
        }
      },
      closeFinish: {
        value: function closeFinish() {
          return this.close_finish.apply(this, arguments);
        }
      },
      flushAsync: {
        value: function flushAsync() {
          return this.flush_async.apply(this, arguments);
        }
      },
      flushFinish: {
        value: function flushFinish() {
          return this.flush_finish.apply(this, arguments);
        }
      },
      hasPending: {
        value: function hasPending() {
          return this.has_pending.apply(this, arguments);
        }
      },
      isClosed: {
        value: function isClosed() {
          return this.is_closed.apply(this, arguments);
        }
      },
      isClosing: {
        value: function isClosing() {
          return this.is_closing.apply(this, arguments);
        }
      },
      setPending: {
        value: function setPending() {
          return this.set_pending.apply(this, arguments);
        }
      },
      spliceAsync: {
        value: function spliceAsync() {
          return this.splice_async.apply(this, arguments);
        }
      },
      spliceFinish: {
        value: function spliceFinish() {
          return this.splice_finish.apply(this, arguments);
        }
      },
      writeAll: {
        value: function writeAll() {
          return this.write_all.apply(this, arguments);
        }
      },
      writeAsync: {
        value: function writeAsync() {
          return this.write_async.apply(this, arguments);
        }
      },
      writeBytesAsync: {
        value: function writeBytesAsync() {
          return this.write_bytes_async.apply(this, arguments);
        }
      },
      writeBytesFinish: {
        value: function writeBytesFinish() {
          return this.write_bytes_finish.apply(this, arguments);
        }
      },
      writeBytes: {
        value: function writeBytes() {
          return this.write_bytes.apply(this, arguments);
        }
      },
      writeFinish: {
        value: function writeFinish() {
          return this.write_finish.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Permission.prototype,
    {
      acquireAsync: {
        value: function acquireAsync() {
          return this.acquire_async.apply(this, arguments);
        }
      },
      acquireFinish: {
        value: function acquireFinish() {
          return this.acquire_finish.apply(this, arguments);
        }
      },
      getAllowed: {
        value: function getAllowed() {
          return this.get_allowed.apply(this, arguments);
        }
      },
      getCanAcquire: {
        value: function getCanAcquire() {
          return this.get_can_acquire.apply(this, arguments);
        }
      },
      getCanRelease: {
        value: function getCanRelease() {
          return this.get_can_release.apply(this, arguments);
        }
      },
      implUpdate: {
        value: function implUpdate() {
          return this.impl_update.apply(this, arguments);
        }
      },
      releaseAsync: {
        value: function releaseAsync() {
          return this.release_async.apply(this, arguments);
        }
      },
      releaseFinish: {
        value: function releaseFinish() {
          return this.release_finish.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.PollableInputStream.prototype,
    {
      canPoll: {
        value: function canPoll() {
          return this.can_poll.apply(this, arguments);
        }
      },
      createSource: {
        value: function createSource() {
          return this.create_source.apply(this, arguments);
        }
      },
      isReadable: {
        value: function isReadable() {
          return this.is_readable.apply(this, arguments);
        }
      },
      readNonblocking: {
        value: function readNonblocking() {
          return this.read_nonblocking.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.PollableOutputStream.prototype,
    {
      canPoll: {
        value: function canPoll() {
          return this.can_poll.apply(this, arguments);
        }
      },
      createSource: {
        value: function createSource() {
          return this.create_source.apply(this, arguments);
        }
      },
      isWritable: {
        value: function isWritable() {
          return this.is_writable.apply(this, arguments);
        }
      },
      writeNonblocking: {
        value: function writeNonblocking() {
          return this.write_nonblocking.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.ProxyAddress.prototype,
    {
      getDestinationHostname: {
        value: function getDestinationHostname() {
          return this.get_destination_hostname.apply(this, arguments);
        }
      },
      getDestinationPort: {
        value: function getDestinationPort() {
          return this.get_destination_port.apply(this, arguments);
        }
      },
      getDestinationProtocol: {
        value: function getDestinationProtocol() {
          return this.get_destination_protocol.apply(this, arguments);
        }
      },
      getPassword: {
        value: function getPassword() {
          return this.get_password.apply(this, arguments);
        }
      },
      getProtocol: {
        value: function getProtocol() {
          return this.get_protocol.apply(this, arguments);
        }
      },
      getUri: {
        value: function getUri() {
          return this.get_uri.apply(this, arguments);
        }
      },
      getUsername: {
        value: function getUsername() {
          return this.get_username.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Proxy,
    {
      getDefaultForProtocol: {
        value: function getDefaultForProtocol() {
          return this.get_default_for_protocol.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Proxy.prototype,
    {
      connectAsync: {
        value: function connectAsync() {
          return this.connect_async.apply(this, arguments);
        }
      },
      connectFinish: {
        value: function connectFinish() {
          return this.connect_finish.apply(this, arguments);
        }
      },
      supportsHostname: {
        value: function supportsHostname() {
          return this.supports_hostname.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.ProxyResolver,
    {
      getDefault: {
        value: function getDefault() {
          return this.get_default.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.ProxyResolver.prototype,
    {
      isSupported: {
        value: function isSupported() {
          return this.is_supported.apply(this, arguments);
        }
      },
      lookupAsync: {
        value: function lookupAsync() {
          return this.lookup_async.apply(this, arguments);
        }
      },
      lookupFinish: {
        value: function lookupFinish() {
          return this.lookup_finish.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.RemoteActionGroup.prototype,
    {
      activateActionFull: {
        value: function activateActionFull() {
          return this.activate_action_full.apply(this, arguments);
        }
      },
      changeActionStateFull: {
        value: function changeActionStateFull() {
          return this.change_action_state_full.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Resolver,
    {
      getDefault: {
        value: function getDefault() {
          return this.get_default.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Resolver.prototype,
    {
      lookupByAddressAsync: {
        value: function lookupByAddressAsync() {
          return this.lookup_by_address_async.apply(this, arguments);
        }
      },
      lookupByAddressFinish: {
        value: function lookupByAddressFinish() {
          return this.lookup_by_address_finish.apply(this, arguments);
        }
      },
      lookupByAddress: {
        value: function lookupByAddress() {
          return this.lookup_by_address.apply(this, arguments);
        }
      },
      lookupByNameAsync: {
        value: function lookupByNameAsync() {
          return this.lookup_by_name_async.apply(this, arguments);
        }
      },
      lookupByNameFinish: {
        value: function lookupByNameFinish() {
          return this.lookup_by_name_finish.apply(this, arguments);
        }
      },
      lookupByName: {
        value: function lookupByName() {
          return this.lookup_by_name.apply(this, arguments);
        }
      },
      lookupRecordsAsync: {
        value: function lookupRecordsAsync() {
          return this.lookup_records_async.apply(this, arguments);
        }
      },
      lookupRecordsFinish: {
        value: function lookupRecordsFinish() {
          return this.lookup_records_finish.apply(this, arguments);
        }
      },
      lookupRecords: {
        value: function lookupRecords() {
          return this.lookup_records.apply(this, arguments);
        }
      },
      lookupServiceAsync: {
        value: function lookupServiceAsync() {
          return this.lookup_service_async.apply(this, arguments);
        }
      },
      lookupServiceFinish: {
        value: function lookupServiceFinish() {
          return this.lookup_service_finish.apply(this, arguments);
        }
      },
      lookupService: {
        value: function lookupService() {
          return this.lookup_service.apply(this, arguments);
        }
      },
      setDefault: {
        value: function setDefault() {
          return this.set_default.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Resource,
    {
      newFromData: {
        value: function newFromData() {
          return this.new_from_data.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Resource.prototype,
    {
      enumerateChildren: {
        value: function enumerateChildren() {
          return this.enumerate_children.apply(this, arguments);
        }
      },
      getInfo: {
        value: function getInfo() {
          return this.get_info.apply(this, arguments);
        }
      },
      lookupData: {
        value: function lookupData() {
          return this.lookup_data.apply(this, arguments);
        }
      },
      openStream: {
        value: function openStream() {
          return this.open_stream.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Seekable.prototype,
    {
      canSeek: {
        value: function canSeek() {
          return this.can_seek.apply(this, arguments);
        }
      },
      canTruncate: {
        value: function canTruncate() {
          return this.can_truncate.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Settings,
    {
      listRelocatableSchemas: {
        value: function listRelocatableSchemas() {
          return this.list_relocatable_schemas.apply(this, arguments);
        }
      },
      listSchemas: {
        value: function listSchemas() {
          return this.list_schemas.apply(this, arguments);
        }
      },
      newFull: {
        value: function newFull() {
          return this.new_full.apply(this, arguments);
        }
      },
      newWithBackendAndPath: {
        value: function newWithBackendAndPath() {
          return this.new_with_backend_and_path.apply(this, arguments);
        }
      },
      newWithBackend: {
        value: function newWithBackend() {
          return this.new_with_backend.apply(this, arguments);
        }
      },
      newWithPath: {
        value: function newWithPath() {
          return this.new_with_path.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Settings.prototype,
    {
      bindWritable: {
        value: function bindWritable() {
          return this.bind_writable.apply(this, arguments);
        }
      },
      createAction: {
        value: function createAction() {
          return this.create_action.apply(this, arguments);
        }
      },
      getBoolean: {
        value: function getBoolean() {
          return this.get_boolean.apply(this, arguments);
        }
      },
      getChild: {
        value: function getChild() {
          return this.get_child.apply(this, arguments);
        }
      },
      getDefaultValue: {
        value: function getDefaultValue() {
          return this.get_default_value.apply(this, arguments);
        }
      },
      getDouble: {
        value: function getDouble() {
          return this.get_double.apply(this, arguments);
        }
      },
      getEnum: {
        value: function getEnum() {
          return this.get_enum.apply(this, arguments);
        }
      },
      getFlags: {
        value: function getFlags() {
          return this.get_flags.apply(this, arguments);
        }
      },
      getHasUnapplied: {
        value: function getHasUnapplied() {
          return this.get_has_unapplied.apply(this, arguments);
        }
      },
      getInt: {
        value: function getInt() {
          return this.get_int.apply(this, arguments);
        }
      },
      getMapped: {
        value: function getMapped() {
          return this.get_mapped.apply(this, arguments);
        }
      },
      getRange: {
        value: function getRange() {
          return this.get_range.apply(this, arguments);
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
      getUint: {
        value: function getUint() {
          return this.get_uint.apply(this, arguments);
        }
      },
      getUserValue: {
        value: function getUserValue() {
          return this.get_user_value.apply(this, arguments);
        }
      },
      getValue: {
        value: function getValue() {
          return this.get_value.apply(this, arguments);
        }
      },
      isWritable: {
        value: function isWritable() {
          return this.is_writable.apply(this, arguments);
        }
      },
      listChildren: {
        value: function listChildren() {
          return this.list_children.apply(this, arguments);
        }
      },
      listKeys: {
        value: function listKeys() {
          return this.list_keys.apply(this, arguments);
        }
      },
      rangeCheck: {
        value: function rangeCheck() {
          return this.range_check.apply(this, arguments);
        }
      },
      setBoolean: {
        value: function setBoolean() {
          return this.set_boolean.apply(this, arguments);
        }
      },
      setDouble: {
        value: function setDouble() {
          return this.set_double.apply(this, arguments);
        }
      },
      setEnum: {
        value: function setEnum() {
          return this.set_enum.apply(this, arguments);
        }
      },
      setFlags: {
        value: function setFlags() {
          return this.set_flags.apply(this, arguments);
        }
      },
      setInt: {
        value: function setInt() {
          return this.set_int.apply(this, arguments);
        }
      },
      setString: {
        value: function setString() {
          return this.set_string.apply(this, arguments);
        }
      },
      setStrv: {
        value: function setStrv() {
          return this.set_strv.apply(this, arguments);
        }
      },
      setUint: {
        value: function setUint() {
          return this.set_uint.apply(this, arguments);
        }
      },
      setValue: {
        value: function setValue() {
          return this.set_value.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SettingsSchema.prototype,
    {
      getId: {
        value: function getId() {
          return this.get_id.apply(this, arguments);
        }
      },
      getKey: {
        value: function getKey() {
          return this.get_key.apply(this, arguments);
        }
      },
      getPath: {
        value: function getPath() {
          return this.get_path.apply(this, arguments);
        }
      },
      hasKey: {
        value: function hasKey() {
          return this.has_key.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SettingsSchemaKey.prototype,
    {
      getDefaultValue: {
        value: function getDefaultValue() {
          return this.get_default_value.apply(this, arguments);
        }
      },
      getDescription: {
        value: function getDescription() {
          return this.get_description.apply(this, arguments);
        }
      },
      getRange: {
        value: function getRange() {
          return this.get_range.apply(this, arguments);
        }
      },
      getSummary: {
        value: function getSummary() {
          return this.get_summary.apply(this, arguments);
        }
      },
      getValueType: {
        value: function getValueType() {
          return this.get_value_type.apply(this, arguments);
        }
      },
      rangeCheck: {
        value: function rangeCheck() {
          return this.range_check.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SettingsSchemaSource,
    {
      getDefault: {
        value: function getDefault() {
          return this.get_default.apply(this, arguments);
        }
      },
      newFromDirectory: {
        value: function newFromDirectory() {
          return this.new_from_directory.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SettingsSchemaSource.prototype,
    {
      listSchemas: {
        value: function listSchemas() {
          return this.list_schemas.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SimpleActionGroup.prototype,
    {
      addEntries: {
        value: function addEntries() {
          return this.add_entries.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SimpleAction,
    {
      newStateful: {
        value: function newStateful() {
          return this.new_stateful.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SimpleAction.prototype,
    {
      setEnabled: {
        value: function setEnabled() {
          return this.set_enabled.apply(this, arguments);
        }
      },
      setState: {
        value: function setState() {
          return this.set_state.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SimpleAsyncResult,
    {
      isValid: {
        value: function isValid() {
          return this.is_valid.apply(this, arguments);
        }
      },
      newFromError: {
        value: function newFromError() {
          return this.new_from_error.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SimpleAsyncResult.prototype,
    {
      getOpResGvalue: {
        get: function () { return this.get_op_res_gvalue; },
        set: function (value) { this.get_op_res_gvalue = value; }
      },
      setOpResGvalue: {
        get: function () { return this.set_op_res_gvalue; },
        set: function (value) { this.set_op_res_gvalue = value; }
      },
      completeInIdle: {
        value: function completeInIdle() {
          return this.complete_in_idle.apply(this, arguments);
        }
      },
      getOpResGboolean: {
        value: function getOpResGboolean() {
          return this.get_op_res_gboolean.apply(this, arguments);
        }
      },
      getOpResGssize: {
        value: function getOpResGssize() {
          return this.get_op_res_gssize.apply(this, arguments);
        }
      },
      propagateError: {
        value: function propagateError() {
          return this.propagate_error.apply(this, arguments);
        }
      },
      setCheckCancellable: {
        value: function setCheckCancellable() {
          return this.set_check_cancellable.apply(this, arguments);
        }
      },
      setFromError: {
        value: function setFromError() {
          return this.set_from_error.apply(this, arguments);
        }
      },
      setHandleCancellation: {
        value: function setHandleCancellation() {
          return this.set_handle_cancellation.apply(this, arguments);
        }
      },
      setOpResGboolean: {
        value: function setOpResGboolean() {
          return this.set_op_res_gboolean.apply(this, arguments);
        }
      },
      setOpResGssize: {
        value: function setOpResGssize() {
          return this.set_op_res_gssize.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SimpleProxyResolver.prototype,
    {
      setDefaultProxy: {
        value: function setDefaultProxy() {
          return this.set_default_proxy.apply(this, arguments);
        }
      },
      setIgnoreHosts: {
        value: function setIgnoreHosts() {
          return this.set_ignore_hosts.apply(this, arguments);
        }
      },
      setUriProxy: {
        value: function setUriProxy() {
          return this.set_uri_proxy.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Socket,
    {
      newFromFd: {
        value: function newFromFd() {
          return this.new_from_fd.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Socket.prototype,
    {
      checkConnectResult: {
        value: function checkConnectResult() {
          return this.check_connect_result.apply(this, arguments);
        }
      },
      conditionCheck: {
        value: function conditionCheck() {
          return this.condition_check.apply(this, arguments);
        }
      },
      conditionTimedWait: {
        value: function conditionTimedWait() {
          return this.condition_timed_wait.apply(this, arguments);
        }
      },
      conditionWait: {
        value: function conditionWait() {
          return this.condition_wait.apply(this, arguments);
        }
      },
      connectionFactoryCreateConnection: {
        value: function connectionFactoryCreateConnection() {
          return this.connection_factory_create_connection.apply(this, arguments);
        }
      },
      getAvailableBytes: {
        value: function getAvailableBytes() {
          return this.get_available_bytes.apply(this, arguments);
        }
      },
      getBlocking: {
        value: function getBlocking() {
          return this.get_blocking.apply(this, arguments);
        }
      },
      getBroadcast: {
        value: function getBroadcast() {
          return this.get_broadcast.apply(this, arguments);
        }
      },
      getCredentials: {
        value: function getCredentials() {
          return this.get_credentials.apply(this, arguments);
        }
      },
      getFamily: {
        value: function getFamily() {
          return this.get_family.apply(this, arguments);
        }
      },
      getFd: {
        value: function getFd() {
          return this.get_fd.apply(this, arguments);
        }
      },
      getKeepalive: {
        value: function getKeepalive() {
          return this.get_keepalive.apply(this, arguments);
        }
      },
      getListenBacklog: {
        value: function getListenBacklog() {
          return this.get_listen_backlog.apply(this, arguments);
        }
      },
      getLocalAddress: {
        value: function getLocalAddress() {
          return this.get_local_address.apply(this, arguments);
        }
      },
      getMulticastLoopback: {
        value: function getMulticastLoopback() {
          return this.get_multicast_loopback.apply(this, arguments);
        }
      },
      getMulticastTtl: {
        value: function getMulticastTtl() {
          return this.get_multicast_ttl.apply(this, arguments);
        }
      },
      getOption: {
        value: function getOption() {
          return this.get_option.apply(this, arguments);
        }
      },
      getProtocol: {
        value: function getProtocol() {
          return this.get_protocol.apply(this, arguments);
        }
      },
      getRemoteAddress: {
        value: function getRemoteAddress() {
          return this.get_remote_address.apply(this, arguments);
        }
      },
      getSocketType: {
        value: function getSocketType() {
          return this.get_socket_type.apply(this, arguments);
        }
      },
      getTimeout: {
        value: function getTimeout() {
          return this.get_timeout.apply(this, arguments);
        }
      },
      getTtl: {
        value: function getTtl() {
          return this.get_ttl.apply(this, arguments);
        }
      },
      isClosed: {
        value: function isClosed() {
          return this.is_closed.apply(this, arguments);
        }
      },
      isConnected: {
        value: function isConnected() {
          return this.is_connected.apply(this, arguments);
        }
      },
      joinMulticastGroup: {
        value: function joinMulticastGroup() {
          return this.join_multicast_group.apply(this, arguments);
        }
      },
      leaveMulticastGroup: {
        value: function leaveMulticastGroup() {
          return this.leave_multicast_group.apply(this, arguments);
        }
      },
      receiveFrom: {
        value: function receiveFrom() {
          return this.receive_from.apply(this, arguments);
        }
      },
      receiveMessage: {
        value: function receiveMessage() {
          return this.receive_message.apply(this, arguments);
        }
      },
      receiveWithBlocking: {
        value: function receiveWithBlocking() {
          return this.receive_with_blocking.apply(this, arguments);
        }
      },
      sendMessage: {
        value: function sendMessage() {
          return this.send_message.apply(this, arguments);
        }
      },
      sendTo: {
        value: function sendTo() {
          return this.send_to.apply(this, arguments);
        }
      },
      sendWithBlocking: {
        value: function sendWithBlocking() {
          return this.send_with_blocking.apply(this, arguments);
        }
      },
      setBlocking: {
        value: function setBlocking() {
          return this.set_blocking.apply(this, arguments);
        }
      },
      setBroadcast: {
        value: function setBroadcast() {
          return this.set_broadcast.apply(this, arguments);
        }
      },
      setKeepalive: {
        value: function setKeepalive() {
          return this.set_keepalive.apply(this, arguments);
        }
      },
      setListenBacklog: {
        value: function setListenBacklog() {
          return this.set_listen_backlog.apply(this, arguments);
        }
      },
      setMulticastLoopback: {
        value: function setMulticastLoopback() {
          return this.set_multicast_loopback.apply(this, arguments);
        }
      },
      setMulticastTtl: {
        value: function setMulticastTtl() {
          return this.set_multicast_ttl.apply(this, arguments);
        }
      },
      setOption: {
        value: function setOption() {
          return this.set_option.apply(this, arguments);
        }
      },
      setTimeout: {
        value: function setTimeout() {
          return this.set_timeout.apply(this, arguments);
        }
      },
      setTtl: {
        value: function setTtl() {
          return this.set_ttl.apply(this, arguments);
        }
      },
      speaksIpv4: {
        value: function speaksIpv4() {
          return this.speaks_ipv4.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SocketAddressEnumerator.prototype,
    {
      nextAsync: {
        value: function nextAsync() {
          return this.next_async.apply(this, arguments);
        }
      },
      nextFinish: {
        value: function nextFinish() {
          return this.next_finish.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SocketAddress,
    {
      newFromNative: {
        value: function newFromNative() {
          return this.new_from_native.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SocketAddress.prototype,
    {
      getFamily: {
        value: function getFamily() {
          return this.get_family.apply(this, arguments);
        }
      },
      getNativeSize: {
        value: function getNativeSize() {
          return this.get_native_size.apply(this, arguments);
        }
      },
      toNative: {
        value: function toNative() {
          return this.to_native.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SocketClient.prototype,
    {
      addApplicationProxy: {
        value: function addApplicationProxy() {
          return this.add_application_proxy.apply(this, arguments);
        }
      },
      connectAsync: {
        value: function connectAsync() {
          return this.connect_async.apply(this, arguments);
        }
      },
      connectFinish: {
        value: function connectFinish() {
          return this.connect_finish.apply(this, arguments);
        }
      },
      connectToHostAsync: {
        value: function connectToHostAsync() {
          return this.connect_to_host_async.apply(this, arguments);
        }
      },
      connectToHostFinish: {
        value: function connectToHostFinish() {
          return this.connect_to_host_finish.apply(this, arguments);
        }
      },
      connectToHost: {
        value: function connectToHost() {
          return this.connect_to_host.apply(this, arguments);
        }
      },
      connectToServiceAsync: {
        value: function connectToServiceAsync() {
          return this.connect_to_service_async.apply(this, arguments);
        }
      },
      connectToServiceFinish: {
        value: function connectToServiceFinish() {
          return this.connect_to_service_finish.apply(this, arguments);
        }
      },
      connectToService: {
        value: function connectToService() {
          return this.connect_to_service.apply(this, arguments);
        }
      },
      connectToUriAsync: {
        value: function connectToUriAsync() {
          return this.connect_to_uri_async.apply(this, arguments);
        }
      },
      connectToUriFinish: {
        value: function connectToUriFinish() {
          return this.connect_to_uri_finish.apply(this, arguments);
        }
      },
      connectToUri: {
        value: function connectToUri() {
          return this.connect_to_uri.apply(this, arguments);
        }
      },
      getEnableProxy: {
        value: function getEnableProxy() {
          return this.get_enable_proxy.apply(this, arguments);
        }
      },
      getFamily: {
        value: function getFamily() {
          return this.get_family.apply(this, arguments);
        }
      },
      getLocalAddress: {
        value: function getLocalAddress() {
          return this.get_local_address.apply(this, arguments);
        }
      },
      getProtocol: {
        value: function getProtocol() {
          return this.get_protocol.apply(this, arguments);
        }
      },
      getProxyResolver: {
        value: function getProxyResolver() {
          return this.get_proxy_resolver.apply(this, arguments);
        }
      },
      getSocketType: {
        value: function getSocketType() {
          return this.get_socket_type.apply(this, arguments);
        }
      },
      getTimeout: {
        value: function getTimeout() {
          return this.get_timeout.apply(this, arguments);
        }
      },
      getTls: {
        value: function getTls() {
          return this.get_tls.apply(this, arguments);
        }
      },
      getTlsValidationFlags: {
        value: function getTlsValidationFlags() {
          return this.get_tls_validation_flags.apply(this, arguments);
        }
      },
      setEnableProxy: {
        value: function setEnableProxy() {
          return this.set_enable_proxy.apply(this, arguments);
        }
      },
      setFamily: {
        value: function setFamily() {
          return this.set_family.apply(this, arguments);
        }
      },
      setLocalAddress: {
        value: function setLocalAddress() {
          return this.set_local_address.apply(this, arguments);
        }
      },
      setProtocol: {
        value: function setProtocol() {
          return this.set_protocol.apply(this, arguments);
        }
      },
      setProxyResolver: {
        value: function setProxyResolver() {
          return this.set_proxy_resolver.apply(this, arguments);
        }
      },
      setSocketType: {
        value: function setSocketType() {
          return this.set_socket_type.apply(this, arguments);
        }
      },
      setTimeout: {
        value: function setTimeout() {
          return this.set_timeout.apply(this, arguments);
        }
      },
      setTls: {
        value: function setTls() {
          return this.set_tls.apply(this, arguments);
        }
      },
      setTlsValidationFlags: {
        value: function setTlsValidationFlags() {
          return this.set_tls_validation_flags.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SocketConnectable.prototype,
    {
      proxyEnumerate: {
        value: function proxyEnumerate() {
          return this.proxy_enumerate.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SocketConnection,
    {
      factoryLookupType: {
        value: function factoryLookupType() {
          return this.factory_lookup_type.apply(this, arguments);
        }
      },
      factoryRegisterType: {
        value: function factoryRegisterType() {
          return this.factory_register_type.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SocketConnection.prototype,
    {
      connectAsync: {
        value: function connectAsync() {
          return this.connect_async.apply(this, arguments);
        }
      },
      connectFinish: {
        value: function connectFinish() {
          return this.connect_finish.apply(this, arguments);
        }
      },
      getLocalAddress: {
        value: function getLocalAddress() {
          return this.get_local_address.apply(this, arguments);
        }
      },
      getRemoteAddress: {
        value: function getRemoteAddress() {
          return this.get_remote_address.apply(this, arguments);
        }
      },
      getSocket: {
        value: function getSocket() {
          return this.get_socket.apply(this, arguments);
        }
      },
      isConnected: {
        value: function isConnected() {
          return this.is_connected.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SocketControlMessage.prototype,
    {
      getLevel: {
        value: function getLevel() {
          return this.get_level.apply(this, arguments);
        }
      },
      getMsgType: {
        value: function getMsgType() {
          return this.get_msg_type.apply(this, arguments);
        }
      },
      getSize: {
        value: function getSize() {
          return this.get_size.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SocketListener.prototype,
    {
      acceptAsync: {
        value: function acceptAsync() {
          return this.accept_async.apply(this, arguments);
        }
      },
      acceptFinish: {
        value: function acceptFinish() {
          return this.accept_finish.apply(this, arguments);
        }
      },
      acceptSocketAsync: {
        value: function acceptSocketAsync() {
          return this.accept_socket_async.apply(this, arguments);
        }
      },
      acceptSocketFinish: {
        value: function acceptSocketFinish() {
          return this.accept_socket_finish.apply(this, arguments);
        }
      },
      acceptSocket: {
        value: function acceptSocket() {
          return this.accept_socket.apply(this, arguments);
        }
      },
      addAddress: {
        value: function addAddress() {
          return this.add_address.apply(this, arguments);
        }
      },
      addAnyInetPort: {
        value: function addAnyInetPort() {
          return this.add_any_inet_port.apply(this, arguments);
        }
      },
      addInetPort: {
        value: function addInetPort() {
          return this.add_inet_port.apply(this, arguments);
        }
      },
      addSocket: {
        value: function addSocket() {
          return this.add_socket.apply(this, arguments);
        }
      },
      setBacklog: {
        value: function setBacklog() {
          return this.set_backlog.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SocketService.prototype,
    {
      isActive: {
        value: function isActive() {
          return this.is_active.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SrvTarget.prototype,
    {
      getHostname: {
        value: function getHostname() {
          return this.get_hostname.apply(this, arguments);
        }
      },
      getPort: {
        value: function getPort() {
          return this.get_port.apply(this, arguments);
        }
      },
      getPriority: {
        value: function getPriority() {
          return this.get_priority.apply(this, arguments);
        }
      },
      getWeight: {
        value: function getWeight() {
          return this.get_weight.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.StaticResource.prototype,
    {
      getResource: {
        value: function getResource() {
          return this.get_resource.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Subprocess.prototype,
    {
      communicateAsync: {
        value: function communicateAsync() {
          return this.communicate_async.apply(this, arguments);
        }
      },
      communicateFinish: {
        value: function communicateFinish() {
          return this.communicate_finish.apply(this, arguments);
        }
      },
      communicateUtf8Async: {
        value: function communicateUtf8Async() {
          return this.communicate_utf8_async.apply(this, arguments);
        }
      },
      communicateUtf8Finish: {
        value: function communicateUtf8Finish() {
          return this.communicate_utf8_finish.apply(this, arguments);
        }
      },
      communicateUtf8: {
        value: function communicateUtf8() {
          return this.communicate_utf8.apply(this, arguments);
        }
      },
      forceExit: {
        value: function forceExit() {
          return this.force_exit.apply(this, arguments);
        }
      },
      getExitStatus: {
        value: function getExitStatus() {
          return this.get_exit_status.apply(this, arguments);
        }
      },
      getIdentifier: {
        value: function getIdentifier() {
          return this.get_identifier.apply(this, arguments);
        }
      },
      getIfExited: {
        value: function getIfExited() {
          return this.get_if_exited.apply(this, arguments);
        }
      },
      getIfSignaled: {
        value: function getIfSignaled() {
          return this.get_if_signaled.apply(this, arguments);
        }
      },
      getStatus: {
        value: function getStatus() {
          return this.get_status.apply(this, arguments);
        }
      },
      getStderrPipe: {
        value: function getStderrPipe() {
          return this.get_stderr_pipe.apply(this, arguments);
        }
      },
      getStdinPipe: {
        value: function getStdinPipe() {
          return this.get_stdin_pipe.apply(this, arguments);
        }
      },
      getStdoutPipe: {
        value: function getStdoutPipe() {
          return this.get_stdout_pipe.apply(this, arguments);
        }
      },
      getSuccessful: {
        value: function getSuccessful() {
          return this.get_successful.apply(this, arguments);
        }
      },
      getTermSig: {
        value: function getTermSig() {
          return this.get_term_sig.apply(this, arguments);
        }
      },
      sendSignal: {
        value: function sendSignal() {
          return this.send_signal.apply(this, arguments);
        }
      },
      waitAsync: {
        value: function waitAsync() {
          return this.wait_async.apply(this, arguments);
        }
      },
      waitCheckAsync: {
        value: function waitCheckAsync() {
          return this.wait_check_async.apply(this, arguments);
        }
      },
      waitCheckFinish: {
        value: function waitCheckFinish() {
          return this.wait_check_finish.apply(this, arguments);
        }
      },
      waitCheck: {
        value: function waitCheck() {
          return this.wait_check.apply(this, arguments);
        }
      },
      waitFinish: {
        value: function waitFinish() {
          return this.wait_finish.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.SubprocessLauncher.prototype,
    {
      setChildSetup: {
        value: function setChildSetup() {
          return this.set_child_setup.apply(this, arguments);
        }
      },
      setCwd: {
        value: function setCwd() {
          return this.set_cwd.apply(this, arguments);
        }
      },
      setEnviron: {
        value: function setEnviron() {
          return this.set_environ.apply(this, arguments);
        }
      },
      setFlags: {
        value: function setFlags() {
          return this.set_flags.apply(this, arguments);
        }
      },
      setStderrFilePath: {
        value: function setStderrFilePath() {
          return this.set_stderr_file_path.apply(this, arguments);
        }
      },
      setStdinFilePath: {
        value: function setStdinFilePath() {
          return this.set_stdin_file_path.apply(this, arguments);
        }
      },
      setStdoutFilePath: {
        value: function setStdoutFilePath() {
          return this.set_stdout_file_path.apply(this, arguments);
        }
      },
      takeFd: {
        value: function takeFd() {
          return this.take_fd.apply(this, arguments);
        }
      },
      takeStderrFd: {
        value: function takeStderrFd() {
          return this.take_stderr_fd.apply(this, arguments);
        }
      },
      takeStdinFd: {
        value: function takeStdinFd() {
          return this.take_stdin_fd.apply(this, arguments);
        }
      },
      takeStdoutFd: {
        value: function takeStdoutFd() {
          return this.take_stdout_fd.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Task,
    {
      isValid: {
        value: function isValid() {
          return this.is_valid.apply(this, arguments);
        }
      },
      reportError: {
        value: function reportError() {
          return this.report_error.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Task.prototype,
    {
      getCancellable: {
        value: function getCancellable() {
          return this.get_cancellable.apply(this, arguments);
        }
      },
      getCheckCancellable: {
        value: function getCheckCancellable() {
          return this.get_check_cancellable.apply(this, arguments);
        }
      },
      getContext: {
        value: function getContext() {
          return this.get_context.apply(this, arguments);
        }
      },
      getPriority: {
        value: function getPriority() {
          return this.get_priority.apply(this, arguments);
        }
      },
      getReturnOnCancel: {
        value: function getReturnOnCancel() {
          return this.get_return_on_cancel.apply(this, arguments);
        }
      },
      getSourceObject: {
        value: function getSourceObject() {
          return this.get_source_object.apply(this, arguments);
        }
      },
      getSourceTag: {
        value: function getSourceTag() {
          return this.get_source_tag.apply(this, arguments);
        }
      },
      getTaskData: {
        value: function getTaskData() {
          return this.get_task_data.apply(this, arguments);
        }
      },
      hadError: {
        value: function hadError() {
          return this.had_error.apply(this, arguments);
        }
      },
      propagateBoolean: {
        value: function propagateBoolean() {
          return this.propagate_boolean.apply(this, arguments);
        }
      },
      propagateInt: {
        value: function propagateInt() {
          return this.propagate_int.apply(this, arguments);
        }
      },
      propagatePointer: {
        value: function propagatePointer() {
          return this.propagate_pointer.apply(this, arguments);
        }
      },
      returnBoolean: {
        value: function returnBoolean() {
          return this.return_boolean.apply(this, arguments);
        }
      },
      returnError: {
        value: function returnError() {
          return this.return_error.apply(this, arguments);
        }
      },
      returnErrorIfCancelled: {
        value: function returnErrorIfCancelled() {
          return this.return_error_if_cancelled.apply(this, arguments);
        }
      },
      returnInt: {
        value: function returnInt() {
          return this.return_int.apply(this, arguments);
        }
      },
      returnPointer: {
        value: function returnPointer() {
          return this.return_pointer.apply(this, arguments);
        }
      },
      setCheckCancellable: {
        value: function setCheckCancellable() {
          return this.set_check_cancellable.apply(this, arguments);
        }
      },
      setPriority: {
        value: function setPriority() {
          return this.set_priority.apply(this, arguments);
        }
      },
      setReturnOnCancel: {
        value: function setReturnOnCancel() {
          return this.set_return_on_cancel.apply(this, arguments);
        }
      },
      setSourceTag: {
        value: function setSourceTag() {
          return this.set_source_tag.apply(this, arguments);
        }
      },
      setTaskData: {
        value: function setTaskData() {
          return this.set_task_data.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TcpConnection.prototype,
    {
      getGracefulDisconnect: {
        value: function getGracefulDisconnect() {
          return this.get_graceful_disconnect.apply(this, arguments);
        }
      },
      setGracefulDisconnect: {
        value: function setGracefulDisconnect() {
          return this.set_graceful_disconnect.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TcpWrapperConnection.prototype,
    {
      getBaseIoStream: {
        value: function getBaseIoStream() {
          return this.get_base_io_stream.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TestDBus.prototype,
    {
      addServiceDir: {
        value: function addServiceDir() {
          return this.add_service_dir.apply(this, arguments);
        }
      },
      getBusAddress: {
        value: function getBusAddress() {
          return this.get_bus_address.apply(this, arguments);
        }
      },
      getFlags: {
        value: function getFlags() {
          return this.get_flags.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.ThemedIcon,
    {
      newFromNames: {
        value: function newFromNames() {
          return this.new_from_names.apply(this, arguments);
        }
      },
      newWithDefaultFallbacks: {
        value: function newWithDefaultFallbacks() {
          return this.new_with_default_fallbacks.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.ThemedIcon.prototype,
    {
      appendName: {
        value: function appendName() {
          return this.append_name.apply(this, arguments);
        }
      },
      getNames: {
        value: function getNames() {
          return this.get_names.apply(this, arguments);
        }
      },
      prependName: {
        value: function prependName() {
          return this.prepend_name.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TlsBackend,
    {
      getDefault: {
        value: function getDefault() {
          return this.get_default.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TlsBackend.prototype,
    {
      getCertificateType: {
        value: function getCertificateType() {
          return this.get_certificate_type.apply(this, arguments);
        }
      },
      getClientConnectionType: {
        value: function getClientConnectionType() {
          return this.get_client_connection_type.apply(this, arguments);
        }
      },
      getDefaultDatabase: {
        value: function getDefaultDatabase() {
          return this.get_default_database.apply(this, arguments);
        }
      },
      getFileDatabaseType: {
        value: function getFileDatabaseType() {
          return this.get_file_database_type.apply(this, arguments);
        }
      },
      getServerConnectionType: {
        value: function getServerConnectionType() {
          return this.get_server_connection_type.apply(this, arguments);
        }
      },
      supportsTls: {
        value: function supportsTls() {
          return this.supports_tls.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TlsCertificate,
    {
      listNewFromFile: {
        value: function listNewFromFile() {
          return this.list_new_from_file.apply(this, arguments);
        }
      },
      newFromFile: {
        value: function newFromFile() {
          return this.new_from_file.apply(this, arguments);
        }
      },
      newFromFiles: {
        value: function newFromFiles() {
          return this.new_from_files.apply(this, arguments);
        }
      },
      newFromPem: {
        value: function newFromPem() {
          return this.new_from_pem.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TlsCertificate.prototype,
    {
      getIssuer: {
        value: function getIssuer() {
          return this.get_issuer.apply(this, arguments);
        }
      },
      isSame: {
        value: function isSame() {
          return this.is_same.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TlsClientConnection.prototype,
    {
      getAcceptedCas: {
        value: function getAcceptedCas() {
          return this.get_accepted_cas.apply(this, arguments);
        }
      },
      getServerIdentity: {
        value: function getServerIdentity() {
          return this.get_server_identity.apply(this, arguments);
        }
      },
      getUseSsl3: {
        value: function getUseSsl3() {
          return this.get_use_ssl3.apply(this, arguments);
        }
      },
      getValidationFlags: {
        value: function getValidationFlags() {
          return this.get_validation_flags.apply(this, arguments);
        }
      },
      setServerIdentity: {
        value: function setServerIdentity() {
          return this.set_server_identity.apply(this, arguments);
        }
      },
      setUseSsl3: {
        value: function setUseSsl3() {
          return this.set_use_ssl3.apply(this, arguments);
        }
      },
      setValidationFlags: {
        value: function setValidationFlags() {
          return this.set_validation_flags.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TlsConnection.prototype,
    {
      emitAcceptCertificate: {
        value: function emitAcceptCertificate() {
          return this.emit_accept_certificate.apply(this, arguments);
        }
      },
      getCertificate: {
        value: function getCertificate() {
          return this.get_certificate.apply(this, arguments);
        }
      },
      getDatabase: {
        value: function getDatabase() {
          return this.get_database.apply(this, arguments);
        }
      },
      getInteraction: {
        value: function getInteraction() {
          return this.get_interaction.apply(this, arguments);
        }
      },
      getPeerCertificateErrors: {
        value: function getPeerCertificateErrors() {
          return this.get_peer_certificate_errors.apply(this, arguments);
        }
      },
      getPeerCertificate: {
        value: function getPeerCertificate() {
          return this.get_peer_certificate.apply(this, arguments);
        }
      },
      getRehandshakeMode: {
        value: function getRehandshakeMode() {
          return this.get_rehandshake_mode.apply(this, arguments);
        }
      },
      getRequireCloseNotify: {
        value: function getRequireCloseNotify() {
          return this.get_require_close_notify.apply(this, arguments);
        }
      },
      getUseSystemCertdb: {
        value: function getUseSystemCertdb() {
          return this.get_use_system_certdb.apply(this, arguments);
        }
      },
      handshakeAsync: {
        value: function handshakeAsync() {
          return this.handshake_async.apply(this, arguments);
        }
      },
      handshakeFinish: {
        value: function handshakeFinish() {
          return this.handshake_finish.apply(this, arguments);
        }
      },
      setCertificate: {
        value: function setCertificate() {
          return this.set_certificate.apply(this, arguments);
        }
      },
      setDatabase: {
        value: function setDatabase() {
          return this.set_database.apply(this, arguments);
        }
      },
      setInteraction: {
        value: function setInteraction() {
          return this.set_interaction.apply(this, arguments);
        }
      },
      setRehandshakeMode: {
        value: function setRehandshakeMode() {
          return this.set_rehandshake_mode.apply(this, arguments);
        }
      },
      setRequireCloseNotify: {
        value: function setRequireCloseNotify() {
          return this.set_require_close_notify.apply(this, arguments);
        }
      },
      setUseSystemCertdb: {
        value: function setUseSystemCertdb() {
          return this.set_use_system_certdb.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TlsDatabase.prototype,
    {
      createCertificateHandle: {
        value: function createCertificateHandle() {
          return this.create_certificate_handle.apply(this, arguments);
        }
      },
      lookupCertificateForHandleAsync: {
        value: function lookupCertificateForHandleAsync() {
          return this.lookup_certificate_for_handle_async.apply(this, arguments);
        }
      },
      lookupCertificateForHandleFinish: {
        value: function lookupCertificateForHandleFinish() {
          return this.lookup_certificate_for_handle_finish.apply(this, arguments);
        }
      },
      lookupCertificateForHandle: {
        value: function lookupCertificateForHandle() {
          return this.lookup_certificate_for_handle.apply(this, arguments);
        }
      },
      lookupCertificateIssuerAsync: {
        value: function lookupCertificateIssuerAsync() {
          return this.lookup_certificate_issuer_async.apply(this, arguments);
        }
      },
      lookupCertificateIssuerFinish: {
        value: function lookupCertificateIssuerFinish() {
          return this.lookup_certificate_issuer_finish.apply(this, arguments);
        }
      },
      lookupCertificateIssuer: {
        value: function lookupCertificateIssuer() {
          return this.lookup_certificate_issuer.apply(this, arguments);
        }
      },
      lookupCertificatesIssuedByAsync: {
        value: function lookupCertificatesIssuedByAsync() {
          return this.lookup_certificates_issued_by_async.apply(this, arguments);
        }
      },
      lookupCertificatesIssuedByFinish: {
        value: function lookupCertificatesIssuedByFinish() {
          return this.lookup_certificates_issued_by_finish.apply(this, arguments);
        }
      },
      lookupCertificatesIssuedBy: {
        value: function lookupCertificatesIssuedBy() {
          return this.lookup_certificates_issued_by.apply(this, arguments);
        }
      },
      verifyChainAsync: {
        value: function verifyChainAsync() {
          return this.verify_chain_async.apply(this, arguments);
        }
      },
      verifyChainFinish: {
        value: function verifyChainFinish() {
          return this.verify_chain_finish.apply(this, arguments);
        }
      },
      verifyChain: {
        value: function verifyChain() {
          return this.verify_chain.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TlsInteraction.prototype,
    {
      askPasswordAsync: {
        value: function askPasswordAsync() {
          return this.ask_password_async.apply(this, arguments);
        }
      },
      askPasswordFinish: {
        value: function askPasswordFinish() {
          return this.ask_password_finish.apply(this, arguments);
        }
      },
      askPassword: {
        value: function askPassword() {
          return this.ask_password.apply(this, arguments);
        }
      },
      invokeAskPassword: {
        value: function invokeAskPassword() {
          return this.invoke_ask_password.apply(this, arguments);
        }
      },
      invokeRequestCertificate: {
        value: function invokeRequestCertificate() {
          return this.invoke_request_certificate.apply(this, arguments);
        }
      },
      requestCertificateAsync: {
        value: function requestCertificateAsync() {
          return this.request_certificate_async.apply(this, arguments);
        }
      },
      requestCertificateFinish: {
        value: function requestCertificateFinish() {
          return this.request_certificate_finish.apply(this, arguments);
        }
      },
      requestCertificate: {
        value: function requestCertificate() {
          return this.request_certificate.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.TlsPassword.prototype,
    {
      getDescription: {
        value: function getDescription() {
          return this.get_description.apply(this, arguments);
        }
      },
      getFlags: {
        value: function getFlags() {
          return this.get_flags.apply(this, arguments);
        }
      },
      getValue: {
        value: function getValue() {
          return this.get_value.apply(this, arguments);
        }
      },
      getWarning: {
        value: function getWarning() {
          return this.get_warning.apply(this, arguments);
        }
      },
      setDescription: {
        value: function setDescription() {
          return this.set_description.apply(this, arguments);
        }
      },
      setFlags: {
        value: function setFlags() {
          return this.set_flags.apply(this, arguments);
        }
      },
      setValueFull: {
        value: function setValueFull() {
          return this.set_value_full.apply(this, arguments);
        }
      },
      setValue: {
        value: function setValue() {
          return this.set_value.apply(this, arguments);
        }
      },
      setWarning: {
        value: function setWarning() {
          return this.set_warning.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixConnection.prototype,
    {
      receiveCredentialsAsync: {
        value: function receiveCredentialsAsync() {
          return this.receive_credentials_async.apply(this, arguments);
        }
      },
      receiveCredentialsFinish: {
        value: function receiveCredentialsFinish() {
          return this.receive_credentials_finish.apply(this, arguments);
        }
      },
      receiveCredentials: {
        value: function receiveCredentials() {
          return this.receive_credentials.apply(this, arguments);
        }
      },
      receiveFd: {
        value: function receiveFd() {
          return this.receive_fd.apply(this, arguments);
        }
      },
      sendCredentialsAsync: {
        value: function sendCredentialsAsync() {
          return this.send_credentials_async.apply(this, arguments);
        }
      },
      sendCredentialsFinish: {
        value: function sendCredentialsFinish() {
          return this.send_credentials_finish.apply(this, arguments);
        }
      },
      sendCredentials: {
        value: function sendCredentials() {
          return this.send_credentials.apply(this, arguments);
        }
      },
      sendFd: {
        value: function sendFd() {
          return this.send_fd.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixCredentialsMessage,
    {
      isSupported: {
        value: function isSupported() {
          return this.is_supported.apply(this, arguments);
        }
      },
      newWithCredentials: {
        value: function newWithCredentials() {
          return this.new_with_credentials.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixCredentialsMessage.prototype,
    {
      getCredentials: {
        value: function getCredentials() {
          return this.get_credentials.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixFDList,
    {
      newFromArray: {
        value: function newFromArray() {
          return this.new_from_array.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixFDList.prototype,
    {
      getLength: {
        value: function getLength() {
          return this.get_length.apply(this, arguments);
        }
      },
      peekFds: {
        value: function peekFds() {
          return this.peek_fds.apply(this, arguments);
        }
      },
      stealFds: {
        value: function stealFds() {
          return this.steal_fds.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixFDMessage,
    {
      newWithFdList: {
        value: function newWithFdList() {
          return this.new_with_fd_list.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixFDMessage.prototype,
    {
      appendFd: {
        value: function appendFd() {
          return this.append_fd.apply(this, arguments);
        }
      },
      getFdList: {
        value: function getFdList() {
          return this.get_fd_list.apply(this, arguments);
        }
      },
      stealFds: {
        value: function stealFds() {
          return this.steal_fds.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixInputStream.prototype,
    {
      getCloseFd: {
        value: function getCloseFd() {
          return this.get_close_fd.apply(this, arguments);
        }
      },
      getFd: {
        value: function getFd() {
          return this.get_fd.apply(this, arguments);
        }
      },
      setCloseFd: {
        value: function setCloseFd() {
          return this.set_close_fd.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixMountMonitor.prototype,
    {
      setRateLimit: {
        value: function setRateLimit() {
          return this.set_rate_limit.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixMountPoint.prototype,
    {
      getDevicePath: {
        value: function getDevicePath() {
          return this.get_device_path.apply(this, arguments);
        }
      },
      getFsType: {
        value: function getFsType() {
          return this.get_fs_type.apply(this, arguments);
        }
      },
      getMountPath: {
        value: function getMountPath() {
          return this.get_mount_path.apply(this, arguments);
        }
      },
      getOptions: {
        value: function getOptions() {
          return this.get_options.apply(this, arguments);
        }
      },
      guessCanEject: {
        value: function guessCanEject() {
          return this.guess_can_eject.apply(this, arguments);
        }
      },
      guessIcon: {
        value: function guessIcon() {
          return this.guess_icon.apply(this, arguments);
        }
      },
      guessName: {
        value: function guessName() {
          return this.guess_name.apply(this, arguments);
        }
      },
      guessSymbolicIcon: {
        value: function guessSymbolicIcon() {
          return this.guess_symbolic_icon.apply(this, arguments);
        }
      },
      isLoopback: {
        value: function isLoopback() {
          return this.is_loopback.apply(this, arguments);
        }
      },
      isReadonly: {
        value: function isReadonly() {
          return this.is_readonly.apply(this, arguments);
        }
      },
      isUserMountable: {
        value: function isUserMountable() {
          return this.is_user_mountable.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixOutputStream.prototype,
    {
      getCloseFd: {
        value: function getCloseFd() {
          return this.get_close_fd.apply(this, arguments);
        }
      },
      getFd: {
        value: function getFd() {
          return this.get_fd.apply(this, arguments);
        }
      },
      setCloseFd: {
        value: function setCloseFd() {
          return this.set_close_fd.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixSocketAddress,
    {
      abstractNamesSupported: {
        value: function abstractNamesSupported() {
          return this.abstract_names_supported.apply(this, arguments);
        }
      },
      newAbstract: {
        value: function newAbstract() {
          return this.new_abstract.apply(this, arguments);
        }
      },
      newWithType: {
        value: function newWithType() {
          return this.new_with_type.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.UnixSocketAddress.prototype,
    {
      getAddressType: {
        value: function getAddressType() {
          return this.get_address_type.apply(this, arguments);
        }
      },
      getIsAbstract: {
        value: function getIsAbstract() {
          return this.get_is_abstract.apply(this, arguments);
        }
      },
      getPath: {
        value: function getPath() {
          return this.get_path.apply(this, arguments);
        }
      },
      getPathLen: {
        value: function getPathLen() {
          return this.get_path_len.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Vfs,
    {
      getDefault: {
        value: function getDefault() {
          return this.get_default.apply(this, arguments);
        }
      },
      getLocal: {
        value: function getLocal() {
          return this.get_local.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Vfs.prototype,
    {
      getFileForPath: {
        value: function getFileForPath() {
          return this.get_file_for_path.apply(this, arguments);
        }
      },
      getFileForUri: {
        value: function getFileForUri() {
          return this.get_file_for_uri.apply(this, arguments);
        }
      },
      getSupportedUriSchemes: {
        value: function getSupportedUriSchemes() {
          return this.get_supported_uri_schemes.apply(this, arguments);
        }
      },
      isActive: {
        value: function isActive() {
          return this.is_active.apply(this, arguments);
        }
      },
      parseName: {
        value: function parseName() {
          return this.parse_name.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.Volume.prototype,
    {
      canEject: {
        value: function canEject() {
          return this.can_eject.apply(this, arguments);
        }
      },
      canMount: {
        value: function canMount() {
          return this.can_mount.apply(this, arguments);
        }
      },
      ejectFinish: {
        value: function ejectFinish() {
          return this.eject_finish.apply(this, arguments);
        }
      },
      ejectWithOperationFinish: {
        value: function ejectWithOperationFinish() {
          return this.eject_with_operation_finish.apply(this, arguments);
        }
      },
      ejectWithOperation: {
        value: function ejectWithOperation() {
          return this.eject_with_operation.apply(this, arguments);
        }
      },
      enumerateIdentifiers: {
        value: function enumerateIdentifiers() {
          return this.enumerate_identifiers.apply(this, arguments);
        }
      },
      getActivationRoot: {
        value: function getActivationRoot() {
          return this.get_activation_root.apply(this, arguments);
        }
      },
      getDrive: {
        value: function getDrive() {
          return this.get_drive.apply(this, arguments);
        }
      },
      getIcon: {
        value: function getIcon() {
          return this.get_icon.apply(this, arguments);
        }
      },
      getIdentifier: {
        value: function getIdentifier() {
          return this.get_identifier.apply(this, arguments);
        }
      },
      getMount: {
        value: function getMount() {
          return this.get_mount.apply(this, arguments);
        }
      },
      getName: {
        value: function getName() {
          return this.get_name.apply(this, arguments);
        }
      },
      getSortKey: {
        value: function getSortKey() {
          return this.get_sort_key.apply(this, arguments);
        }
      },
      getSymbolicIcon: {
        value: function getSymbolicIcon() {
          return this.get_symbolic_icon.apply(this, arguments);
        }
      },
      getUuid: {
        value: function getUuid() {
          return this.get_uuid.apply(this, arguments);
        }
      },
      mountFinish: {
        value: function mountFinish() {
          return this.mount_finish.apply(this, arguments);
        }
      },
      shouldAutomount: {
        value: function shouldAutomount() {
          return this.should_automount.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.VolumeMonitor,
    {
      adoptOrphanMount: {
        value: function adoptOrphanMount() {
          return this.adopt_orphan_mount.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.VolumeMonitor.prototype,
    {
      getConnectedDrives: {
        value: function getConnectedDrives() {
          return this.get_connected_drives.apply(this, arguments);
        }
      },
      getMountForUuid: {
        value: function getMountForUuid() {
          return this.get_mount_for_uuid.apply(this, arguments);
        }
      },
      getMounts: {
        value: function getMounts() {
          return this.get_mounts.apply(this, arguments);
        }
      },
      getVolumeForUuid: {
        value: function getVolumeForUuid() {
          return this.get_volume_for_uuid.apply(this, arguments);
        }
      },
      getVolumes: {
        value: function getVolumes() {
          return this.get_volumes.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.ZlibCompressor.prototype,
    {
      getFileInfo: {
        value: function getFileInfo() {
          return this.get_file_info.apply(this, arguments);
        }
      },
      setFileInfo: {
        value: function setFileInfo() {
          return this.set_file_info.apply(this, arguments);
        }
      }
    }
  );
  Object.defineProperties(
    Gio.ZlibDecompressor.prototype,
    {
      getFileInfo: {
        value: function getFileInfo() {
          return this.get_file_info.apply(this, arguments);
        }
      }
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