/*!
* DevExtreme (dx.messages.en.js)
* Version: 21.1.5
* Build date: Mon Aug 02 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define((function(require) {
            factory(require("devextreme/localization"))
        }))
    } else if ("object" === typeof module && module.exports) {
        factory(require("devextreme/localization"))
    } else {
        factory(DevExpress.localization)
    }
}(0, (function(localization) {
    localization.loadMessages({
        en: {
            Yes: "Yes",
            No: "No",
            Cancel: "Cancel",
            Clear: "Clear",
            Done: "Done",
            Loading: "Loading...",
            Select: "Select...",
            Search: "Search",
            Back: "Back",
            OK: "OK",
            "dxCollectionWidget-noDataText": "No data to display",
            "dxDropDownEditor-selectLabel": "Select",
            "validation-required": "Required",
            "validation-required-formatted": "{0} is required",
            "validation-numeric": "Value must be a number",
            "validation-numeric-formatted": "{0} must be a number",
            "validation-range": "Value is out of range",
            "validation-range-formatted": "{0} is out of range",
            "validation-stringLength": "The length of the value is not correct",
            "validation-stringLength-formatted": "The length of {0} is not correct",
            "validation-custom": "Value is invalid",
            "validation-custom-formatted": "{0} is invalid",
            "validation-async": "Value is invalid",
            "validation-async-formatted": "{0} is invalid",
            "validation-compare": "Values do not match",
            "validation-compare-formatted": "{0} does not match",
            "validation-pattern": "Value does not match pattern",
            "validation-pattern-formatted": "{0} does not match pattern",
            "validation-email": "Email is invalid",
            "validation-email-formatted": "{0} is invalid",
            "validation-mask": "Value is invalid",
            "dxLookup-searchPlaceholder": "Minimum character number: {0}",
            "dxList-pullingDownText": "Pull down to refresh...",
            "dxList-pulledDownText": "Release to refresh...",
            "dxList-refreshingText": "Refreshing...",
            "dxList-pageLoadingText": "Loading...",
            "dxList-nextButtonText": "More",
            "dxList-selectAll": "Select All",
            "dxListEditDecorator-delete": "Delete",
            "dxListEditDecorator-more": "More",
            "dxScrollView-pullingDownText": "Pull down to refresh...",
            "dxScrollView-pulledDownText": "Release to refresh...",
            "dxScrollView-refreshingText": "Refreshing...",
            "dxScrollView-reachBottomText": "Loading...",
            "dxDateBox-simulatedDataPickerTitleTime": "Select time",
            "dxDateBox-simulatedDataPickerTitleDate": "Select date",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Select date and time",
            "dxDateBox-validation-datetime": "Value must be a date or time",
            "dxFileUploader-selectFile": "Select file",
            "dxFileUploader-dropFile": "or Drop file here",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Upload",
            "dxFileUploader-uploaded": "Uploaded",
            "dxFileUploader-readyToUpload": "Ready to upload",
            "dxFileUploader-uploadAbortedMessage": "Upload cancelled",
            "dxFileUploader-uploadFailedMessage": "Upload failed",
            "dxFileUploader-invalidFileExtension": "File type is not allowed",
            "dxFileUploader-invalidMaxFileSize": "File is too large",
            "dxFileUploader-invalidMinFileSize": "File is too small",
            "dxRangeSlider-ariaFrom": "From",
            "dxRangeSlider-ariaTill": "Till",
            "dxSwitch-switchedOnText": "ON",
            "dxSwitch-switchedOffText": "OFF",
            "dxForm-optionalMark": "optional",
            "dxForm-requiredMessage": "{0} is required",
            "dxNumberBox-invalidValueMessage": "Value must be a number",
            "dxNumberBox-noDataText": "No data",
            "dxDataGrid-columnChooserTitle": "Column Chooser",
            "dxDataGrid-columnChooserEmptyText": "Drag a column here to hide it",
            "dxDataGrid-groupContinuesMessage": "Continues on the next page",
            "dxDataGrid-groupContinuedMessage": "Continued from the previous page",
            "dxDataGrid-groupHeaderText": "Group by This Column",
            "dxDataGrid-ungroupHeaderText": "Ungroup",
            "dxDataGrid-ungroupAllText": "Ungroup All",
            "dxDataGrid-editingEditRow": "Edit",
            "dxDataGrid-editingSaveRowChanges": "Save",
            "dxDataGrid-editingCancelRowChanges": "Cancel",
            "dxDataGrid-editingDeleteRow": "Delete",
            "dxDataGrid-editingUndeleteRow": "Undelete",
            "dxDataGrid-editingConfirmDeleteMessage": "Are you sure you want to delete this record?",
            "dxDataGrid-validationCancelChanges": "Cancel changes",
            "dxDataGrid-groupPanelEmptyText": "Drag a column header here to group by that column",
            "dxDataGrid-noDataText": "No data",
            "dxDataGrid-searchPanelPlaceholder": "Search...",
            "dxDataGrid-filterRowShowAllText": "(All)",
            "dxDataGrid-filterRowResetOperationText": "Reset",
            "dxDataGrid-filterRowOperationEquals": "Equals",
            "dxDataGrid-filterRowOperationNotEquals": "Does not equal",
            "dxDataGrid-filterRowOperationLess": "Less than",
            "dxDataGrid-filterRowOperationLessOrEquals": "Less than or equal to",
            "dxDataGrid-filterRowOperationGreater": "Greater than",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Greater than or equal to",
            "dxDataGrid-filterRowOperationStartsWith": "Starts with",
            "dxDataGrid-filterRowOperationContains": "Contains",
            "dxDataGrid-filterRowOperationNotContains": "Does not contain",
            "dxDataGrid-filterRowOperationEndsWith": "Ends with",
            "dxDataGrid-filterRowOperationBetween": "Between",
            "dxDataGrid-filterRowOperationBetweenStartText": "Start",
            "dxDataGrid-filterRowOperationBetweenEndText": "End",
            "dxDataGrid-applyFilterText": "Apply filter",
            "dxDataGrid-trueText": "true",
            "dxDataGrid-falseText": "false",
            "dxDataGrid-sortingAscendingText": "Sort Ascending",
            "dxDataGrid-sortingDescendingText": "Sort Descending",
            "dxDataGrid-sortingClearText": "Clear Sorting",
            "dxDataGrid-editingSaveAllChanges": "Save changes",
            "dxDataGrid-editingCancelAllChanges": "Discard changes",
            "dxDataGrid-editingAddRow": "Add a row",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min of {1} is {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max of {1} is {0}",
            "dxDataGrid-summaryAvg": "Avg: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Avg of {1} is {0}",
            "dxDataGrid-summarySum": "Sum: {0}",
            "dxDataGrid-summarySumOtherColumn": "Sum of {1} is {0}",
            "dxDataGrid-summaryCount": "Count: {0}",
            "dxDataGrid-columnFixingFix": "Fix",
            "dxDataGrid-columnFixingUnfix": "Unfix",
            "dxDataGrid-columnFixingLeftPosition": "To the left",
            "dxDataGrid-columnFixingRightPosition": "To the right",
            "dxDataGrid-exportTo": "Export",
            "dxDataGrid-exportToExcel": "Export to Excel file",
            "dxDataGrid-exporting": "Exporting...",
            "dxDataGrid-excelFormat": "Excel file",
            "dxDataGrid-selectedRows": "Selected rows",
            "dxDataGrid-exportSelectedRows": "Export selected rows",
            "dxDataGrid-exportAll": "Export all data",
            "dxDataGrid-headerFilterEmptyValue": "(Blanks)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Cancel",
            "dxDataGrid-ariaAdaptiveCollapse": "Hide additional data",
            "dxDataGrid-ariaAdaptiveExpand": "Display additional data",
            "dxDataGrid-ariaColumn": "Column",
            "dxDataGrid-ariaValue": "Value",
            "dxDataGrid-ariaFilterCell": "Filter cell",
            "dxDataGrid-ariaCollapse": "Collapse",
            "dxDataGrid-ariaExpand": "Expand",
            "dxDataGrid-ariaDataGrid": "Data grid",
            "dxDataGrid-ariaSearchInGrid": "Search in the data grid",
            "dxDataGrid-ariaSelectAll": "Select all",
            "dxDataGrid-ariaSelectRow": "Select row",
            "dxDataGrid-ariaToolbar": "Data grid toolbar",
            "dxDataGrid-filterBuilderPopupTitle": "Filter Builder",
            "dxDataGrid-filterPanelCreateFilter": "Create Filter",
            "dxDataGrid-filterPanelClearFilter": "Clear",
            "dxDataGrid-filterPanelFilterEnabledHint": "Enable the filter",
            "dxTreeList-ariaTreeList": "Tree list",
            "dxTreeList-ariaSearchInGrid": "Search in the tree list",
            "dxTreeList-ariaToolbar": "Tree list toolbar",
            "dxTreeList-editingAddRowToNode": "Add",
            "dxPager-infoText": "Page {0} of {1} ({2} items)",
            "dxPager-pagesCountText": "of",
            "dxPager-pageSizesAllText": "All",
            "dxPivotGrid-grandTotal": "Grand Total",
            "dxPivotGrid-total": "{0} Total",
            "dxPivotGrid-fieldChooserTitle": "Field Chooser",
            "dxPivotGrid-showFieldChooser": "Show Field Chooser",
            "dxPivotGrid-expandAll": "Expand All",
            "dxPivotGrid-collapseAll": "Collapse All",
            "dxPivotGrid-sortColumnBySummary": 'Sort "{0}" by This Column',
            "dxPivotGrid-sortRowBySummary": 'Sort "{0}" by This Row',
            "dxPivotGrid-removeAllSorting": "Remove All Sorting",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "Row Fields",
            "dxPivotGrid-columnFields": "Column Fields",
            "dxPivotGrid-dataFields": "Data Fields",
            "dxPivotGrid-filterFields": "Filter Fields",
            "dxPivotGrid-allFields": "All Fields",
            "dxPivotGrid-columnFieldArea": "Drop Column Fields Here",
            "dxPivotGrid-dataFieldArea": "Drop Data Fields Here",
            "dxPivotGrid-rowFieldArea": "Drop Row Fields Here",
            "dxPivotGrid-filterFieldArea": "Drop Filter Fields Here",
            "dxScheduler-editorLabelTitle": "Subject",
            "dxScheduler-editorLabelStartDate": "Start Date",
            "dxScheduler-editorLabelEndDate": "End Date",
            "dxScheduler-editorLabelDescription": "Description",
            "dxScheduler-editorLabelRecurrence": "Repeat",
            "dxScheduler-openAppointment": "Open appointment",
            "dxScheduler-recurrenceNever": "Never",
            "dxScheduler-recurrenceMinutely": "Every minute",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Daily",
            "dxScheduler-recurrenceWeekly": "Weekly",
            "dxScheduler-recurrenceMonthly": "Monthly",
            "dxScheduler-recurrenceYearly": "Yearly",
            "dxScheduler-recurrenceRepeatEvery": "Repeat Every",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "End repeat",
            "dxScheduler-recurrenceAfter": "After",
            "dxScheduler-recurrenceOn": "On",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "day(s)",
            "dxScheduler-recurrenceRepeatWeekly": "week(s)",
            "dxScheduler-recurrenceRepeatMonthly": "month(s)",
            "dxScheduler-recurrenceRepeatYearly": "year(s)",
            "dxScheduler-switcherDay": "Day",
            "dxScheduler-switcherWeek": "Week",
            "dxScheduler-switcherWorkWeek": "Work Week",
            "dxScheduler-switcherMonth": "Month",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Timeline Day",
            "dxScheduler-switcherTimelineWeek": "Timeline Week",
            "dxScheduler-switcherTimelineWorkWeek": "Timeline Work Week",
            "dxScheduler-switcherTimelineMonth": "Timeline Month",
            "dxScheduler-recurrenceRepeatOnDate": "on date",
            "dxScheduler-recurrenceRepeatCount": "occurrence(s)",
            "dxScheduler-allDay": "All day",
            "dxScheduler-confirmRecurrenceEditMessage": "Do you want to edit only this appointment or the whole series?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Do you want to delete only this appointment or the whole series?",
            "dxScheduler-confirmRecurrenceEditSeries": "Edit series",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Delete series",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Edit appointment",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Delete appointment",
            "dxScheduler-noTimezoneTitle": "No timezone",
            "dxScheduler-moreAppointments": "{0} more",
            "dxCalendar-todayButtonText": "Today",
            "dxCalendar-ariaWidgetName": "Calendar",
            "dxColorView-ariaRed": "Red",
            "dxColorView-ariaGreen": "Green",
            "dxColorView-ariaBlue": "Blue",
            "dxColorView-ariaAlpha": "Transparency",
            "dxColorView-ariaHex": "Color code",
            "dxTagBox-selected": "{0} selected",
            "dxTagBox-allSelected": "All selected ({0})",
            "dxTagBox-moreSelected": "{0} more",
            "vizExport-printingButtonText": "Print",
            "vizExport-titleMenuText": "Exporting/Printing",
            "vizExport-exportButtonText": "{0} file",
            "dxFilterBuilder-and": "And",
            "dxFilterBuilder-or": "Or",
            "dxFilterBuilder-notAnd": "Not And",
            "dxFilterBuilder-notOr": "Not Or",
            "dxFilterBuilder-addCondition": "Add Condition",
            "dxFilterBuilder-addGroup": "Add Group",
            "dxFilterBuilder-enterValueText": "<enter a value>",
            "dxFilterBuilder-filterOperationEquals": "Equals",
            "dxFilterBuilder-filterOperationNotEquals": "Does not equal",
            "dxFilterBuilder-filterOperationLess": "Is less than",
            "dxFilterBuilder-filterOperationLessOrEquals": "Is less than or equal to",
            "dxFilterBuilder-filterOperationGreater": "Is greater than",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Is greater than or equal to",
            "dxFilterBuilder-filterOperationStartsWith": "Starts with",
            "dxFilterBuilder-filterOperationContains": "Contains",
            "dxFilterBuilder-filterOperationNotContains": "Does not contain",
            "dxFilterBuilder-filterOperationEndsWith": "Ends with",
            "dxFilterBuilder-filterOperationIsBlank": "Is blank",
            "dxFilterBuilder-filterOperationIsNotBlank": "Is not blank",
            "dxFilterBuilder-filterOperationBetween": "Is between",
            "dxFilterBuilder-filterOperationAnyOf": "Is any of",
            "dxFilterBuilder-filterOperationNoneOf": "Is none of",
            "dxHtmlEditor-dialogColorCaption": "Change Font Color",
            "dxHtmlEditor-dialogBackgroundCaption": "Change Background Color",
            "dxHtmlEditor-dialogLinkCaption": "Add Link",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Text",
            "dxHtmlEditor-dialogLinkTargetField": "Open link in new window",
            "dxHtmlEditor-dialogImageCaption": "Add Image",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Alternate text",
            "dxHtmlEditor-dialogImageWidthField": "Width (px)",
            "dxHtmlEditor-dialogImageHeightField": "Height (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "Rows",
            "dxHtmlEditor-dialogInsertTableColumnsField": "Columns",
            "dxHtmlEditor-dialogInsertTableCaption": "Insert Table",
            "dxHtmlEditor-heading": "Heading",
            "dxHtmlEditor-normalText": "Normal text",
            "dxHtmlEditor-background": "Background Color",
            "dxHtmlEditor-bold": "Bold",
            "dxHtmlEditor-color": "Font Color",
            "dxHtmlEditor-font": "Font",
            "dxHtmlEditor-italic": "Italic",
            "dxHtmlEditor-link": "Add Link",
            "dxHtmlEditor-image": "Add Image",
            "dxHtmlEditor-size": "Size",
            "dxHtmlEditor-strike": "Strikethrough",
            "dxHtmlEditor-subscript": "Subscript",
            "dxHtmlEditor-superscript": "Superscript",
            "dxHtmlEditor-underline": "Underline",
            "dxHtmlEditor-blockquote": "Blockquote",
            "dxHtmlEditor-header": "Header",
            "dxHtmlEditor-increaseIndent": "Increase Indent",
            "dxHtmlEditor-decreaseIndent": "Decrease Indent",
            "dxHtmlEditor-orderedList": "Ordered List",
            "dxHtmlEditor-bulletList": "Bullet List",
            "dxHtmlEditor-alignLeft": "Align Left",
            "dxHtmlEditor-alignCenter": "Align Center",
            "dxHtmlEditor-alignRight": "Align Right",
            "dxHtmlEditor-alignJustify": "Align Justify",
            "dxHtmlEditor-codeBlock": "Code Block",
            "dxHtmlEditor-variable": "Add Variable",
            "dxHtmlEditor-undo": "Undo",
            "dxHtmlEditor-redo": "Redo",
            "dxHtmlEditor-clear": "Clear Formatting",
            "dxHtmlEditor-insertTable": "Insert Table",
            "dxHtmlEditor-insertRowAbove": "Insert Row Above",
            "dxHtmlEditor-insertRowBelow": "Insert Row Below",
            "dxHtmlEditor-insertColumnLeft": "Insert Column Left",
            "dxHtmlEditor-insertColumnRight": "Insert Column Right",
            "dxHtmlEditor-deleteColumn": "Delete Column",
            "dxHtmlEditor-deleteRow": "Delete Row",
            "dxHtmlEditor-deleteTable": "Delete Table",
            "dxHtmlEditor-list": "List",
            "dxHtmlEditor-ordered": "Ordered",
            "dxHtmlEditor-bullet": "Bullet",
            "dxHtmlEditor-align": "Align",
            "dxHtmlEditor-center": "Center",
            "dxHtmlEditor-left": "Left",
            "dxHtmlEditor-right": "Right",
            "dxHtmlEditor-indent": "Indent",
            "dxHtmlEditor-justify": "Justify",
            "dxFileManager-newDirectoryName": "Untitled directory",
            "dxFileManager-rootDirectoryName": "Files",
            "dxFileManager-errorNoAccess": "Access Denied. Operation could not be completed.",
            "dxFileManager-errorDirectoryExistsFormat": "Directory '{0}' already exists.",
            "dxFileManager-errorFileExistsFormat": "File '{0}' already exists.",
            "dxFileManager-errorFileNotFoundFormat": "File '{0}' not found.",
            "dxFileManager-errorDirectoryNotFoundFormat": "Directory '{0}' not found.",
            "dxFileManager-errorWrongFileExtension": "File extension is not allowed.",
            "dxFileManager-errorMaxFileSizeExceeded": "File size exceeds the maximum allowed size.",
            "dxFileManager-errorInvalidSymbols": "This name contains invalid characters.",
            "dxFileManager-errorDefault": "Unspecified error.",
            "dxFileManager-errorDirectoryOpenFailed": "The directory cannot be opened",
            "dxFileManager-commandCreate": "New directory",
            "dxFileManager-commandRename": "Rename",
            "dxFileManager-commandMove": "Move to",
            "dxFileManager-commandCopy": "Copy to",
            "dxFileManager-commandDelete": "Delete",
            "dxFileManager-commandDownload": "Download",
            "dxFileManager-commandUpload": "Upload files",
            "dxFileManager-commandRefresh": "Refresh",
            "dxFileManager-commandThumbnails": "Thumbnails View",
            "dxFileManager-commandDetails": "Details View",
            "dxFileManager-commandClearSelection": "Clear selection",
            "dxFileManager-commandShowNavPane": "Toggle navigation pane",
            "dxFileManager-dialogDirectoryChooserMoveTitle": "Move to",
            "dxFileManager-dialogDirectoryChooserMoveButtonText": "Move",
            "dxFileManager-dialogDirectoryChooserCopyTitle": "Copy to",
            "dxFileManager-dialogDirectoryChooserCopyButtonText": "Copy",
            "dxFileManager-dialogRenameItemTitle": "Rename",
            "dxFileManager-dialogRenameItemButtonText": "Save",
            "dxFileManager-dialogCreateDirectoryTitle": "New directory",
            "dxFileManager-dialogCreateDirectoryButtonText": "Create",
            "dxFileManager-dialogDeleteItemTitle": "Delete",
            "dxFileManager-dialogDeleteItemButtonText": "Delete",
            "dxFileManager-dialogDeleteItemSingleItemConfirmation": "Are you sure you want to delete {0}?",
            "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "Are you sure you want to delete {0} items?",
            "dxFileManager-dialogButtonCancel": "Cancel",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "Creating a directory inside {0}",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "Created a directory inside {0}",
            "dxFileManager-editingCreateSingleItemErrorMessage": "Directory was not created",
            "dxFileManager-editingCreateCommonErrorMessage": "Directory was not created",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "Renaming an item inside {0}",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "Renamed an item inside {0}",
            "dxFileManager-editingRenameSingleItemErrorMessage": "Item was not renamed",
            "dxFileManager-editingRenameCommonErrorMessage": "Item was not renamed",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "Deleting an item from {0}",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "Deleting {0} items from {1}",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "Deleted an item from {0}",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "Deleted {0} items from {1}",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "Item was not deleted",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} items were not deleted",
            "dxFileManager-editingDeleteCommonErrorMessage": "Some items were not deleted",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "Moving an item to {0}",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "Moving {0} items to {1}",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "Moved an item to {0}",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "Moved {0} items to {1}",
            "dxFileManager-editingMoveSingleItemErrorMessage": "Item was not moved",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} items were not moved",
            "dxFileManager-editingMoveCommonErrorMessage": "Some items were not moved",
            "dxFileManager-editingCopySingleItemProcessingMessage": "Copying an item to {0}",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "Copying {0} items to {1}",
            "dxFileManager-editingCopySingleItemSuccessMessage": "Copied an item to {0}",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "Copied {0} items to {1}",
            "dxFileManager-editingCopySingleItemErrorMessage": "Item was not copied",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} items were not copied",
            "dxFileManager-editingCopyCommonErrorMessage": "Some items were not copied",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "Uploading an item to {0}",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "Uploading {0} items to {1}",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "Uploaded an item to {0}",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "Uploaded {0} items to {1}",
            "dxFileManager-editingUploadSingleItemErrorMessage": "Item was not uploaded",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} items were not uploaded",
            "dxFileManager-editingUploadCanceledMessage": "Canceled",
            "dxFileManager-listDetailsColumnCaptionName": "Name",
            "dxFileManager-listDetailsColumnCaptionDateModified": "Date Modified",
            "dxFileManager-listDetailsColumnCaptionFileSize": "File Size",
            "dxFileManager-listThumbnailsTooltipTextSize": "Size",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "Date Modified",
            "dxFileManager-notificationProgressPanelTitle": "Progress",
            "dxFileManager-notificationProgressPanelEmptyListText": "No operations",
            "dxFileManager-notificationProgressPanelOperationCanceled": "Canceled",
            "dxDiagram-categoryGeneral": "General",
            "dxDiagram-categoryFlowchart": "Flowchart",
            "dxDiagram-categoryOrgChart": "Org Chart",
            "dxDiagram-categoryContainers": "Containers",
            "dxDiagram-categoryCustom": "Custom",
            "dxDiagram-commandExportToSvg": "Export to SVG",
            "dxDiagram-commandExportToPng": "Export to PNG",
            "dxDiagram-commandExportToJpg": "Export to JPEG",
            "dxDiagram-commandUndo": "Undo",
            "dxDiagram-commandRedo": "Redo",
            "dxDiagram-commandFontName": "Font Name",
            "dxDiagram-commandFontSize": "Font Size",
            "dxDiagram-commandBold": "Bold",
            "dxDiagram-commandItalic": "Italic",
            "dxDiagram-commandUnderline": "Underline",
            "dxDiagram-commandTextColor": "Font Color",
            "dxDiagram-commandLineColor": "Line Color",
            "dxDiagram-commandLineWidth": "Line Width",
            "dxDiagram-commandLineStyle": "Line Style",
            "dxDiagram-commandLineStyleSolid": "Solid",
            "dxDiagram-commandLineStyleDotted": "Dotted",
            "dxDiagram-commandLineStyleDashed": "Dashed",
            "dxDiagram-commandFillColor": "Fill Color",
            "dxDiagram-commandAlignLeft": "Align Left",
            "dxDiagram-commandAlignCenter": "Align Center",
            "dxDiagram-commandAlignRight": "Align Right",
            "dxDiagram-commandConnectorLineType": "Connector Line Type",
            "dxDiagram-commandConnectorLineStraight": "Straight",
            "dxDiagram-commandConnectorLineOrthogonal": "Orthogonal",
            "dxDiagram-commandConnectorLineStart": "Connector Line Start",
            "dxDiagram-commandConnectorLineEnd": "Connector Line End",
            "dxDiagram-commandConnectorLineNone": "None",
            "dxDiagram-commandConnectorLineArrow": "Arrow",
            "dxDiagram-commandFullscreen": "Full Screen",
            "dxDiagram-commandUnits": "Units",
            "dxDiagram-commandPageSize": "Page Size",
            "dxDiagram-commandPageOrientation": "Page Orientation",
            "dxDiagram-commandPageOrientationLandscape": "Landscape",
            "dxDiagram-commandPageOrientationPortrait": "Portrait",
            "dxDiagram-commandPageColor": "Page Color",
            "dxDiagram-commandShowGrid": "Show Grid",
            "dxDiagram-commandSnapToGrid": "Snap to Grid",
            "dxDiagram-commandGridSize": "Grid Size",
            "dxDiagram-commandZoomLevel": "Zoom Level",
            "dxDiagram-commandAutoZoom": "Auto Zoom",
            "dxDiagram-commandFitToContent": "Fit to Content",
            "dxDiagram-commandFitToWidth": "Fit to Width",
            "dxDiagram-commandAutoZoomByContent": "Auto Zoom by Content",
            "dxDiagram-commandAutoZoomByWidth": "Auto Zoom by Width",
            "dxDiagram-commandSimpleView": "Simple View",
            "dxDiagram-commandCut": "Cut",
            "dxDiagram-commandCopy": "Copy",
            "dxDiagram-commandPaste": "Paste",
            "dxDiagram-commandSelectAll": "Select All",
            "dxDiagram-commandDelete": "Delete",
            "dxDiagram-commandBringToFront": "Bring to Front",
            "dxDiagram-commandSendToBack": "Send to Back",
            "dxDiagram-commandLock": "Lock",
            "dxDiagram-commandUnlock": "Unlock",
            "dxDiagram-commandInsertShapeImage": "Insert Image...",
            "dxDiagram-commandEditShapeImage": "Change Image...",
            "dxDiagram-commandDeleteShapeImage": "Delete Image",
            "dxDiagram-commandLayoutLeftToRight": "Left-to-right",
            "dxDiagram-commandLayoutRightToLeft": "Right-to-left",
            "dxDiagram-commandLayoutTopToBottom": "Top-to-bottom",
            "dxDiagram-commandLayoutBottomToTop": "Bottom-to-top",
            "dxDiagram-unitIn": "in",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "Cancel",
            "dxDiagram-dialogInsertShapeImageTitle": "Insert Image",
            "dxDiagram-dialogEditShapeImageTitle": "Change Image",
            "dxDiagram-dialogEditShapeImageSelectButton": "Select image",
            "dxDiagram-dialogEditShapeImageLabelText": "or drop file here",
            "dxDiagram-uiExport": "Export",
            "dxDiagram-uiProperties": "Properties",
            "dxDiagram-uiSettings": "Settings",
            "dxDiagram-uiShowToolbox": "Show Toolbox",
            "dxDiagram-uiSearch": "Search",
            "dxDiagram-uiStyle": "Style",
            "dxDiagram-uiLayout": "Layout",
            "dxDiagram-uiLayoutTree": "Tree",
            "dxDiagram-uiLayoutLayered": "Layered",
            "dxDiagram-uiDiagram": "Diagram",
            "dxDiagram-uiText": "Text",
            "dxDiagram-uiObject": "Object",
            "dxDiagram-uiConnector": "Connector",
            "dxDiagram-uiPage": "Page",
            "dxDiagram-shapeText": "Text",
            "dxDiagram-shapeRectangle": "Rectangle",
            "dxDiagram-shapeEllipse": "Ellipse",
            "dxDiagram-shapeCross": "Cross",
            "dxDiagram-shapeTriangle": "Triangle",
            "dxDiagram-shapeDiamond": "Diamond",
            "dxDiagram-shapeHeart": "Heart",
            "dxDiagram-shapePentagon": "Pentagon",
            "dxDiagram-shapeHexagon": "Hexagon",
            "dxDiagram-shapeOctagon": "Octagon",
            "dxDiagram-shapeStar": "Star",
            "dxDiagram-shapeArrowLeft": "Left Arrow",
            "dxDiagram-shapeArrowUp": "Up Arrow",
            "dxDiagram-shapeArrowRight": "Right Arrow",
            "dxDiagram-shapeArrowDown": "Down Arrow",
            "dxDiagram-shapeArrowUpDown": "Up Down Arrow",
            "dxDiagram-shapeArrowLeftRight": "Left Right Arrow",
            "dxDiagram-shapeProcess": "Process",
            "dxDiagram-shapeDecision": "Decision",
            "dxDiagram-shapeTerminator": "Terminator",
            "dxDiagram-shapePredefinedProcess": "Predefined Process",
            "dxDiagram-shapeDocument": "Document",
            "dxDiagram-shapeMultipleDocuments": "Multiple Documents",
            "dxDiagram-shapeManualInput": "Manual Input",
            "dxDiagram-shapePreparation": "Preparation",
            "dxDiagram-shapeData": "Data",
            "dxDiagram-shapeDatabase": "Database",
            "dxDiagram-shapeHardDisk": "Hard Disk",
            "dxDiagram-shapeInternalStorage": "Internal Storage",
            "dxDiagram-shapePaperTape": "Paper Tape",
            "dxDiagram-shapeManualOperation": "Manual Operation",
            "dxDiagram-shapeDelay": "Delay",
            "dxDiagram-shapeStoredData": "Stored Data",
            "dxDiagram-shapeDisplay": "Display",
            "dxDiagram-shapeMerge": "Merge",
            "dxDiagram-shapeConnector": "Connector",
            "dxDiagram-shapeOr": "Or",
            "dxDiagram-shapeSummingJunction": "Summing Junction",
            "dxDiagram-shapeContainerDefaultText": "Container",
            "dxDiagram-shapeVerticalContainer": "Vertical Container",
            "dxDiagram-shapeHorizontalContainer": "Horizontal Container",
            "dxDiagram-shapeCardDefaultText": "Person's Name",
            "dxDiagram-shapeCardWithImageOnLeft": "Card with Image on the Left",
            "dxDiagram-shapeCardWithImageOnTop": "Card with Image on the Top",
            "dxDiagram-shapeCardWithImageOnRight": "Card with Image on the Right",
            "dxGantt-dialogTitle": "Title",
            "dxGantt-dialogStartTitle": "Start",
            "dxGantt-dialogEndTitle": "End",
            "dxGantt-dialogProgressTitle": "Progress",
            "dxGantt-dialogResourcesTitle": "Resources",
            "dxGantt-dialogResourceManagerTitle": "Resource Manager",
            "dxGantt-dialogTaskDetailsTitle": "Task Details",
            "dxGantt-dialogEditResourceListHint": "Edit Resource List",
            "dxGantt-dialogEditNoResources": "No resources",
            "dxGantt-dialogButtonAdd": "Add",
            "dxGantt-contextMenuNewTask": "New Task",
            "dxGantt-contextMenuNewSubtask": "New Subtask",
            "dxGantt-contextMenuDeleteTask": "Delete Task",
            "dxGantt-contextMenuDeleteDependency": "Delete Dependency",
            "dxGantt-dialogTaskDeleteConfirmation": "Deleting a task also deletes all its dependencies and subtasks. Are you sure you want to delete this task?",
            "dxGantt-dialogDependencyDeleteConfirmation": "Are you sure you want to delete the dependency from the task?",
            "dxGantt-dialogResourcesDeleteConfirmation": "Deleting a resource also deletes it from tasks to which this resource is assigned. Are you sure you want to delete these resources? Resources: {0}",
            "dxGantt-dialogConstraintCriticalViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. This change would conflict with dependency rules. How would you like to proceed?",
            "dxGantt-dialogConstraintViolationMessage": "The task you are attempting to move is linked to a second task by a dependency relation. How would you like to proceed?",
            "dxGantt-dialogCancelOperationMessage": "Cancel the operation",
            "dxGantt-dialogDeleteDependencyMessage": "Delete the dependency",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Move the task and keep the dependency",
            "dxGantt-undo": "Undo",
            "dxGantt-redo": "Redo",
            "dxGantt-expandAll": "Expand All",
            "dxGantt-collapseAll": "Collapse All",
            "dxGantt-addNewTask": "Add New Task",
            "dxGantt-deleteSelectedTask": "Delete Selected Task",
            "dxGantt-zoomIn": "Zoom In",
            "dxGantt-zoomOut": "Zoom Out",
            "dxGantt-fullScreen": "Full Screen",
            "dxGantt-quarter": "Q{0}"
        }
    })
}));
