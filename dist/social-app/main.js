(self["webpackChunksocial_app"] = self["webpackChunksocial_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/login/login.component */ 28);
/* harmony import */ var _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/logout/logout.component */ 2217);
/* harmony import */ var _component_message_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/message/message.component */ 5988);
/* harmony import */ var _component_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/post-detail/post-detail.component */ 330);
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/profile/profile.component */ 365);
/* harmony import */ var _component_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/reset-password/reset-password.component */ 5535);
/* harmony import */ var _component_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/settings/settings.component */ 9117);
/* harmony import */ var _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/signup/signup.component */ 686);
/* harmony import */ var _component_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/timeline/timeline.component */ 2962);
/* harmony import */ var _component_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/verify-email/verify-email.component */ 3649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);













const routes = [
    { path: '', component: _component_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__.TimelineComponent },
    { path: 'posts/tags/:tagName', component: _component_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__.TimelineComponent },
    { path: 'profile', component: _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent },
    { path: 'users/:userId', component: _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent },
    { path: 'signup', component: _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__.SignupComponent },
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'logout', component: _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_1__.LogoutComponent },
    { path: 'settings', component: _component_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent },
    { path: 'verify-email/:token', component: _component_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_9__.VerifyEmailComponent },
    { path: 'reset-password/:token', component: _component_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__.ResetPasswordComponent },
    { path: 'posts/:postId', component: _component_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_3__.PostDetailComponent },
    { path: 'message', component: _component_message_message_component__WEBPACK_IMPORTED_MODULE_2__.MessageComponent },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/header/header.component */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    constructor() {
        this.title = 'social-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    } }, directives: [_component_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material-moment-adapter */ 8441);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptor/auth.interceptor */ 2070);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ 5826);
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/login/login.component */ 28);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/header/header.component */ 4456);
/* harmony import */ var _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/signup/signup.component */ 686);
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/profile/profile.component */ 365);
/* harmony import */ var _component_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/timeline/timeline.component */ 2962);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/logout/logout.component */ 2217);
/* harmony import */ var _component_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/verify-email/verify-email.component */ 3649);
/* harmony import */ var _component_message_message_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/message/message.component */ 5988);
/* harmony import */ var _component_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/error-page/error-page.component */ 9138);
/* harmony import */ var _component_post_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/post/post.component */ 3219);
/* harmony import */ var _component_post_like_dialog_post_like_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/post-like-dialog/post-like-dialog.component */ 578);
/* harmony import */ var _component_post_share_dialog_post_share_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/post-share-dialog/post-share-dialog.component */ 5295);
/* harmony import */ var _component_post_comment_dialog_post_comment_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/post-comment-dialog/post-comment-dialog.component */ 6827);
/* harmony import */ var _component_comment_like_dialog_comment_like_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/comment-like-dialog/comment-like-dialog.component */ 7878);
/* harmony import */ var _component_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/confirmation-dialog/confirmation-dialog.component */ 4440);
/* harmony import */ var _component_share_confirm_dialog_share_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/share-confirm-dialog/share-confirm-dialog.component */ 5936);
/* harmony import */ var _component_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/snackbar/snackbar.component */ 225);
/* harmony import */ var _component_following_follower_list_dialog_following_follower_list_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/following-follower-list-dialog/following-follower-list-dialog.component */ 4374);
/* harmony import */ var _component_view_photo_dialog_view_photo_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/view-photo-dialog/view-photo-dialog.component */ 5763);
/* harmony import */ var _component_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/post-dialog/post-dialog.component */ 5487);
/* harmony import */ var _component_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/post-detail/post-detail.component */ 330);
/* harmony import */ var _component_waiting_dialog_waiting_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/waiting-dialog/waiting-dialog.component */ 1703);
/* harmony import */ var _component_settings_settings_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/settings/settings.component */ 9117);
/* harmony import */ var _common_app_date_formats__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./common/app-date-formats */ 9658);
/* harmony import */ var _component_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./component/search-dialog/search-dialog.component */ 8471);
/* harmony import */ var _component_photo_upload_dialog_photo_upload_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/photo-upload-dialog/photo-upload-dialog.component */ 1885);
/* harmony import */ var _component_tag_dialog_tag_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/tag-dialog/tag-dialog.component */ 8130);
/* harmony import */ var _component_forgot_password_dialog_forgot_password_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component/forgot-password-dialog/forgot-password-dialog.component */ 8668);
/* harmony import */ var _component_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/reset-password/reset-password.component */ 5535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 3184);





























































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ providers: [
        _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HTTP_INTERCEPTORS, useClass: _interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__.AuthInterceptor, multi: true },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_35__.MAT_DATE_FORMATS, useValue: _common_app_date_formats__WEBPACK_IMPORTED_MODULE_27__.APP_DATE_FORMATS }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_41__.MatButtonModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__.MatMenuModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_43__.MatCardModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_44__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__.MatFormFieldModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_46__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_47__.MatProgressSpinnerModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_48__.MatDividerModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_49__.MatListModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__.MatTooltipModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_51__.MatChipsModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_52__.MatBadgeModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_53__.MatDialogModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_54__.MatSnackBarModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_35__.MatRippleModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__.MatTabsModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_56__.MatSelectModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_57__.MatRadioModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_58__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_35__.MatNativeDateModule,
            _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_59__.MatMomentDateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _component_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent,
        _component_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__.SignupComponent,
        _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent,
        _component_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__.TimelineComponent,
        _component_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__.LogoutComponent,
        _component_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__.VerifyEmailComponent,
        _component_message_message_component__WEBPACK_IMPORTED_MODULE_11__.MessageComponent,
        _component_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__.ErrorPageComponent,
        _component_post_post_component__WEBPACK_IMPORTED_MODULE_13__.PostComponent,
        _component_post_like_dialog_post_like_dialog_component__WEBPACK_IMPORTED_MODULE_14__.PostLikeDialogComponent,
        _component_post_share_dialog_post_share_dialog_component__WEBPACK_IMPORTED_MODULE_15__.PostShareDialogComponent,
        _component_post_comment_dialog_post_comment_dialog_component__WEBPACK_IMPORTED_MODULE_16__.PostCommentDialogComponent,
        _component_comment_like_dialog_comment_like_dialog_component__WEBPACK_IMPORTED_MODULE_17__.CommentLikeDialogComponent,
        _component_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_18__.ConfirmationDialogComponent,
        _component_share_confirm_dialog_share_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__.ShareConfirmDialogComponent,
        _component_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_20__.SnackbarComponent,
        _component_following_follower_list_dialog_following_follower_list_dialog_component__WEBPACK_IMPORTED_MODULE_21__.FollowingFollowerListDialogComponent,
        _component_view_photo_dialog_view_photo_dialog_component__WEBPACK_IMPORTED_MODULE_22__.ViewPhotoDialogComponent,
        _component_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_23__.PostDialogComponent,
        _component_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_24__.PostDetailComponent,
        _component_waiting_dialog_waiting_dialog_component__WEBPACK_IMPORTED_MODULE_25__.WaitingDialogComponent,
        _component_settings_settings_component__WEBPACK_IMPORTED_MODULE_26__.SettingsComponent,
        _component_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_28__.SearchDialogComponent,
        _component_photo_upload_dialog_photo_upload_dialog_component__WEBPACK_IMPORTED_MODULE_29__.PhotoUploadDialogComponent,
        _component_tag_dialog_tag_dialog_component__WEBPACK_IMPORTED_MODULE_30__.TagDialogComponent,
        _component_forgot_password_dialog_forgot_password_dialog_component__WEBPACK_IMPORTED_MODULE_31__.ForgotPasswordDialogComponent,
        _component_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_32__.ResetPasswordComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_36__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_34__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_37__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_38__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_38__.ReactiveFormsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_41__.MatButtonModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_42__.MatMenuModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_43__.MatCardModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_44__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_45__.MatFormFieldModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_46__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_47__.MatProgressSpinnerModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_48__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_49__.MatListModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__.MatTooltipModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_51__.MatChipsModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_52__.MatBadgeModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_53__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_54__.MatSnackBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_35__.MatRippleModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_55__.MatTabsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_56__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_57__.MatRadioModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_58__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_35__.MatNativeDateModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_59__.MatMomentDateModule] }); })();


/***/ }),

/***/ 9133:
/*!*****************************************!*\
  !*** ./src/app/common/app-constants.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConstants": () => (/* binding */ AppConstants)
/* harmony export */ });
class AppConstants {
}
AppConstants.messageTypeLabel = 'messageType';
AppConstants.messageHeaderLabel = 'messageHeader';
AppConstants.messageDetailLabel = 'messageDetail';
AppConstants.errorLabel = 'error';
AppConstants.successLabel = 'success';
AppConstants.toSignupLabel = 'toSignup';
AppConstants.toLoginLabel = 'toLogin';
AppConstants.trueLabel = 'true';
AppConstants.falseLabel = 'false';
AppConstants.signupSuccessHeader = "Registration Successful";
AppConstants.signupSuccessDetail = "Your account has been successfully created. A confirmation email has been sent to your email address. Please, verify.";
AppConstants.emailVerifySuccessHeader = "Email Verified";
AppConstants.emailVerifySuccessDetail = "Your email has been verified successfully.";
AppConstants.emailChangeSuccessHeader = "Email Changed Successfully | Verify";
AppConstants.emailChangeSuccessDetail = "Your email has been changed successfully. A confirmation email has been sent to your email address. Please, verify.";
AppConstants.forgotPasswordSuccessHeader = "Email Sent";
AppConstants.forgotPasswordSuccessDetail = "An email has been sent to the given email address if it exist in our database. Please, verify.";
AppConstants.passwordChangeSuccessHeader = "Password Changed Successfully";
AppConstants.passwordChangeSuccessDetail = "Your password has been changed successfully. Please, login with your new password.";
AppConstants.tokenErrorHeader = 'Token Invalid or Expired';
AppConstants.tokenErrorDetail = 'Token is invalid or has been expired. Please, try again later.';
AppConstants.notFoundErrorHeader = '404 Not Found';
AppConstants.notFoundErrorDetail = 'What you are looking for does not exist.';
AppConstants.snackbarErrorContent = 'Could not perform the task. Please, try again later.';


/***/ }),

/***/ 9658:
/*!********************************************!*\
  !*** ./src/app/common/app-date-formats.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_DATE_FORMATS": () => (/* binding */ APP_DATE_FORMATS)
/* harmony export */ });
const APP_DATE_FORMATS = {
    parse: {
        dateInput: 'DD-MM-YYYY',
    },
    display: {
        dateInput: 'MMM DD, YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    }
};


/***/ }),

/***/ 6086:
/*!***************************************************!*\
  !*** ./src/app/common/repeat-password-matcher.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatPasswordMatcher": () => (/* binding */ RepeatPasswordMatcher)
/* harmony export */ });
class RepeatPasswordMatcher {
    isErrorState(control, form) {
        return (control && control.parent.get('password').value !== control.parent.get('passwordRepeat').value && control.dirty);
    }
}


/***/ }),

/***/ 7878:
/*!********************************************************************************!*\
  !*** ./src/app/component/comment-like-dialog/comment-like-dialog.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentLikeDialogComponent": () => (/* binding */ CommentLikeDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/comment.service */ 4298);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var src_app_model_comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/comment */ 7483);












function CommentLikeDialogComponent_hr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "hr", 6);
} }
function CommentLikeDialogComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 7)(1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const like_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMapInterpolate1"]("width: 30px; height: 30px; background-image: url('", like_r4.profilePhoto ? like_r4.profilePhoto : ctx_r1.defaultProfilePhotoUrl, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "/users/", like_r4.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](like_r4.firstName + " " + like_r4.lastName);
} }
function CommentLikeDialogComponent_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CommentLikeDialogComponent_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.loadCommentLikes(ctx_r7.resultPage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CommentLikeDialogComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CommentLikeDialogComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CommentLikeDialogComponent_div_6_button_1_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CommentLikeDialogComponent_div_6_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.hasMoreResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.fetchingResult && ctx_r2.resultPage > 1);
} }
function CommentLikeDialogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class CommentLikeDialogComponent {
    constructor(dataComment, commentService, matSnackbar) {
        this.dataComment = dataComment;
        this.commentService = commentService;
        this.matSnackbar = matSnackbar;
        this.likeList = [];
        this.resultPage = 1;
        this.resultSize = 1;
        this.hasMoreResult = false;
        this.fetchingResult = false;
        this.defaultProfilePhotoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultProfilePhotoUrl;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadCommentLikes(1);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    loadCommentLikes(currentPage) {
        if (this.dataComment.likeCount > 0) {
            this.fetchingResult = true;
            this.subscriptions.push(this.commentService.getCommentLikes(this.dataComment.id, currentPage, this.resultSize).subscribe({
                next: (resultList) => {
                    resultList.forEach(like => this.likeList.push(like));
                    if (currentPage * this.resultSize < this.dataComment.likeCount) {
                        this.hasMoreResult = true;
                    }
                    else {
                        this.hasMoreResult = false;
                    }
                    this.resultPage++;
                    this.fetchingResult = false;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                    this.fetchingResult = false;
                }
            }));
        }
    }
}
CommentLikeDialogComponent.ɵfac = function CommentLikeDialogComponent_Factory(t) { return new (t || CommentLikeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_comment_service__WEBPACK_IMPORTED_MODULE_3__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar)); };
CommentLikeDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CommentLikeDialogComponent, selectors: [["app-comment-like-dialog"]], decls: 8, vars: 5, consts: [[1, "position-relative"], [1, "mat-h2", "m-0"], ["class", "divider", 4, "ngIf"], ["class", "list-group list-group-flush", 4, "ngFor", "ngForOf"], ["class", "mt-3 mb-3", 4, "ngIf"], ["class", "position-absolute", "style", "top: 0; right: 0;", 4, "ngIf"], [1, "divider"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "ps-0", "pt-2", "pe-0", "pb-2"], [1, "rounded-circle", "d-inline-block", "align-middle", "centered-bg-image"], [1, "d-inline-block", "text-decoration-none", "text-dark", "align-middle", "ps-2", "fw-500", "cursor-pointer", 3, "href"], [1, "mt-3", "mb-3"], ["mat-raised-button", "", "color", "primary", "class", "rounded-pill align-middle", 3, "click", 4, "ngIf"], ["class", "d-inline-block float-end", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "rounded-pill", "align-middle", 3, "click"], [1, "d-inline-block", "float-end"], [2, "zoom", "0.3"], [1, "position-absolute", 2, "top", "0", "right", "0"]], template: function CommentLikeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-dialog-content")(1, "div", 0)(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CommentLikeDialogComponent_hr_4_Template, 1, 0, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CommentLikeDialogComponent_ul_5_Template, 5, 5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CommentLikeDialogComponent_div_6_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, CommentLikeDialogComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.dataComment.likeCount > 0 ? "Likes(" + ctx.dataComment.likeCount + ")" : "No Likes", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataComment.likeCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.likeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasMoreResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fetchingResult && ctx.resultPage === 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tZW50LWxpa2UtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4440:
/*!********************************************************************************!*\
  !*** ./src/app/component/confirmation-dialog/confirmation-dialog.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationDialogComponent": () => (/* binding */ ConfirmationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);




class ConfirmationDialogComponent {
    constructor(dataHeader) {
        this.dataHeader = dataHeader;
    }
    ngOnInit() {
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmationDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], decls: 8, vars: 2, consts: [[1, "mat-h2", "m-0"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content")(1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions", 1)(4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataHeader, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9138:
/*!**************************************************************!*\
  !*** ./src/app/component/error-page/error-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageComponent": () => (/* binding */ ErrorPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 2, vars: 0, template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4374:
/*!******************************************************************************************************!*\
  !*** ./src/app/component/following-follower-list-dialog/following-follower-list-dialog.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowingFollowerListDialogComponent": () => (/* binding */ FollowingFollowerListDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);











function FollowingFollowerListDialogComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.data.user.followingCount > 0 ? "Following(" + ctx_r0.data.user.followingCount + ")" : "0 Following", " ");
} }
function FollowingFollowerListDialogComponent_h2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.data.user.followerCount > 0 ? "Follower(" + ctx_r1.data.user.followerCount + ")" : "0 Follower", " ");
} }
function FollowingFollowerListDialogComponent_hr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "hr", 7);
} }
function FollowingFollowerListDialogComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 8)(1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const userResponse_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMapInterpolate1"]("width: 30px; height: 30px; background-image: url('", userResponse_r6.user.profilePhoto ? userResponse_r6.user.profilePhoto : ctx_r3.defaultProfilePhotoUrl, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("href", "/users/", userResponse_r6.user.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](userResponse_r6.user.firstName + " " + userResponse_r6.user.lastName);
} }
function FollowingFollowerListDialogComponent_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FollowingFollowerListDialogComponent_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.loadUsers(ctx_r9.resultPage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FollowingFollowerListDialogComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function FollowingFollowerListDialogComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FollowingFollowerListDialogComponent_div_6_button_1_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FollowingFollowerListDialogComponent_div_6_div_2_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.hasMoreResult && !(ctx_r4.fetchingResult && ctx_r4.resultPage > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.fetchingResult && ctx_r4.resultPage > 1);
} }
function FollowingFollowerListDialogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class FollowingFollowerListDialogComponent {
    constructor(data, userService, matSnackbar) {
        this.data = data;
        this.userService = userService;
        this.matSnackbar = matSnackbar;
        this.userResponseList = [];
        this.resultPage = 1;
        this.resultSize = 5;
        this.hasMoreResult = false;
        this.fetchingResult = false;
        this.defaultProfilePhotoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultProfilePhotoUrl;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadUsers(1);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    loadUsers(currentPage) {
        if (!this.fetchingResult) {
            if (this.data.type === 'following') {
                if (this.data.user.followingCount > 0) {
                    this.fetchingResult = true;
                    this.subscriptions.push(this.userService.getUserFollowingList(this.data.user.id, currentPage, this.resultSize).subscribe({
                        next: (followingList) => {
                            followingList.forEach(uR => this.userResponseList.push(uR));
                            if (currentPage * this.resultSize < this.data.user.followingCount) {
                                this.hasMoreResult = true;
                            }
                            else {
                                this.hasMoreResult = false;
                            }
                            this.resultPage++;
                            this.fetchingResult = false;
                        },
                        error: (errorResponse) => {
                            this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                                data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                                panelClass: ['bg-danger'],
                                duration: 5000
                            });
                            this.fetchingResult = false;
                        }
                    }));
                }
            }
            else if (this.data.type === 'follower') {
                if (this.data.user.followerCount > 0) {
                    this.fetchingResult = true;
                    this.subscriptions.push(this.userService.getUserFollowerList(this.data.user.id, currentPage, this.resultSize).subscribe({
                        next: (followerList) => {
                            followerList.forEach(uR => this.userResponseList.push(uR));
                            if (currentPage * this.resultSize < this.data.user.followerCount) {
                                this.hasMoreResult = true;
                            }
                            else {
                                this.hasMoreResult = false;
                            }
                            this.resultPage++;
                            this.fetchingResult = false;
                        },
                        error: (errorResponse) => {
                            this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                                data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                                panelClass: ['bg-danger'],
                                duration: 5000
                            });
                            this.fetchingResult = false;
                        }
                    }));
                }
            }
        }
    }
}
FollowingFollowerListDialogComponent.ɵfac = function FollowingFollowerListDialogComponent_Factory(t) { return new (t || FollowingFollowerListDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar)); };
FollowingFollowerListDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FollowingFollowerListDialogComponent, selectors: [["app-following-follower-list-dialog"]], decls: 8, vars: 6, consts: [[1, "position-relative"], ["class", "mat-h2 m-0", 4, "ngIf"], ["class", "divider", 4, "ngIf"], ["class", "list-group list-group-flush", 4, "ngFor", "ngForOf"], ["class", "mt-3 mb-3 text-center", 4, "ngIf"], ["class", "position-absolute", "style", "transform: scale(0.3); top: -35px; right: -35px;", 4, "ngIf"], [1, "mat-h2", "m-0"], [1, "divider"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "ps-0", "pt-2", "pe-0", "pb-2"], [1, "rounded-circle", "d-inline-block", "align-middle", "centered-bg-image"], [1, "d-inline-block", "text-decoration-none", "text-dark", "align-middle", "ps-2", "fw-500", "cursor-pointer", 3, "href"], [1, "mt-3", "mb-3", "text-center"], ["mat-raised-button", "", "color", "primary", "class", "rounded-pill align-middle", 3, "click", 4, "ngIf"], ["class", "d-inline-block", "style", "transform: scale(0.3); margin-top: -33px;", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "rounded-pill", "align-middle", 3, "click"], [1, "d-inline-block", 2, "transform", "scale(0.3)", "margin-top", "-33px"], [2, "margin", "0 auto"], [1, "position-absolute", 2, "transform", "scale(0.3)", "top", "-35px", "right", "-35px"]], template: function FollowingFollowerListDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-dialog-content")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FollowingFollowerListDialogComponent_h2_2_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FollowingFollowerListDialogComponent_h2_3_Template, 2, 1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FollowingFollowerListDialogComponent_hr_4_Template, 1, 0, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FollowingFollowerListDialogComponent_ul_5_Template, 5, 5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, FollowingFollowerListDialogComponent_div_6_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FollowingFollowerListDialogComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.type === "following");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.type === "follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.userResponseList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.userResponseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasMoreResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fetchingResult && ctx.resultPage === 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb2xsb3dpbmctZm9sbG93ZXItbGlzdC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8668:
/*!**************************************************************************************!*\
  !*** ./src/app/component/forgot-password-dialog/forgot-password-dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordDialogComponent": () => (/* binding */ ForgotPasswordDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);














function ForgotPasswordDialogComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} }
function ForgotPasswordDialogComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ForgotPasswordDialogComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class ForgotPasswordDialogComponent {
    constructor(userService, formBuilder, matSnackbar, thisDialogRef, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.matSnackbar = matSnackbar;
        this.thisDialogRef = thisDialogRef;
        this.router = router;
        this.fetchingResult = false;
        this.subscriptions = [];
    }
    get email() { return this.forgotPasswordFormGroup.get('email'); }
    ngOnInit() {
        this.forgotPasswordFormGroup = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(64)])
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    sendForgotPasswordEmail() {
        if (this.forgotPasswordFormGroup.valid) {
            if (!this.fetchingResult) {
                this.fetchingResult = true;
                this.subscriptions.push(this.userService.forgotPassword(this.email.value).subscribe({
                    next: (result) => {
                        localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageTypeLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.successLabel);
                        localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageHeaderLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.forgotPasswordSuccessHeader);
                        localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageDetailLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.forgotPasswordSuccessDetail);
                        localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toLoginLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.falseLabel);
                        this.fetchingResult = false;
                        this.thisDialogRef.close();
                        this.router.navigateByUrl('/message');
                    },
                    error: (errorResponse) => {
                        this.fetchingResult = false;
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_1__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: ['bg-danger'],
                            duration: 5000
                        });
                    }
                }));
            }
        }
    }
}
ForgotPasswordDialogComponent.ɵfac = function ForgotPasswordDialogComponent_Factory(t) { return new (t || ForgotPasswordDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
ForgotPasswordDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ForgotPasswordDialogComponent, selectors: [["app-forgot-password-dialog"]], decls: 15, vars: 4, consts: [[1, "position-relative"], [1, "mat-h2", "m-0"], [1, "divider"], [1, "position-relative", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-100", 2, "padding-right", "90px"], ["matInput", "", "formControlName", "email", "placeholder", "Email"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "position-absolute", 2, "top", "4px", "right", "0"], ["class", "position-absolute", "style", "transform: scale(0.3); top: -35px; right: -35px;", 4, "ngIf"], [1, "position-absolute", 2, "transform", "scale(0.3)", "top", "-35px", "right", "-35px"]], template: function ForgotPasswordDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-dialog-content")(1, "div", 0)(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Retrieve Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ForgotPasswordDialogComponent_Template_form_ngSubmit_5_listener() { return ctx.sendForgotPasswordEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ForgotPasswordDialogComponent_mat_error_10_Template, 4, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ForgotPasswordDialogComponent_mat_error_11_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Retrieve");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ForgotPasswordDialogComponent_div_14_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.forgotPasswordFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.email.hasError("email") || ctx.email.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.fetchingResult);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4456:
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-dialog/post-dialog.component */ 5487);
/* harmony import */ var _search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-dialog/search-dialog.component */ 8471);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/notification.service */ 7320);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 89);

















function HeaderComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMapInterpolate1"]("width: 30px; height: 30px; background-color: white; background-image: url('", ctx_r0.authUser.profilePhoto ? ctx_r0.authUser.profilePhoto : ctx_r0.defaultProfilePhotoUrl, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.authUser == null ? null : ctx_r0.authUser.firstName);
} }
function HeaderComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 28);
} }
function HeaderComponent_div_7_h2_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_7_h2_10_Template_h2_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_h2_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_7_h2_11_Template_h2_click_0_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_a_12_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_a_12_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_a_12_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_a_12_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](notification_r13.sender.firstName + " " + notification_r13.sender.lastName);
} }
function HeaderComponent_div_7_a_12_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "An App User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_a_12_span_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", notification_r13.owningPost.likeCount - 1, " other ");
} }
function HeaderComponent_div_7_a_12_span_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" post \"", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, notification_r13.owningPost.content, 0, 44), "...\" ");
} }
function HeaderComponent_div_7_a_12_span_6_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_a_12_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HeaderComponent_div_7_a_12_span_6_span_1_Template, 4, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " liked your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HeaderComponent_div_7_a_12_span_6_span_3_Template, 3, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HeaderComponent_div_7_a_12_span_6_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.owningPost.likeCount > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.owningPost.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !notification_r13.owningPost.content);
} }
function HeaderComponent_div_7_a_12_span_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", notification_r13.owningPost.commentCount - 1, " other ");
} }
function HeaderComponent_div_7_a_12_span_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" post \"", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, notification_r13.owningPost.content, 0, 24), "...\" ");
} }
function HeaderComponent_div_7_a_12_span_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_a_12_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HeaderComponent_div_7_a_12_span_7_span_1_Template, 4, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " commented on your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HeaderComponent_div_7_a_12_span_7_span_3_Template, 3, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HeaderComponent_div_7_a_12_span_7_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.owningPost.commentCount > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.owningPost.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !notification_r13.owningPost.content);
} }
function HeaderComponent_div_7_a_12_span_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", notification_r13.owningPost.shareCount - 1, " other ");
} }
function HeaderComponent_div_7_a_12_span_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" post \"", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](2, 1, notification_r13.owningPost.content, 0, 24), "...\" ");
} }
function HeaderComponent_div_7_a_12_span_8_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " photo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_a_12_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HeaderComponent_div_7_a_12_span_8_span_1_Template, 4, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " shared your ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HeaderComponent_div_7_a_12_span_8_span_3_Template, 3, 5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HeaderComponent_div_7_a_12_span_8_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.owningPost.shareCount > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.owningPost.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !notification_r13.owningPost.content);
} }
function HeaderComponent_div_7_a_12_span_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", notification_r13.owningComment.likeCount - 1, " other ");
} }
function HeaderComponent_div_7_a_12_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HeaderComponent_div_7_a_12_span_9_span_1_Template, 4, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.owningComment.likeCount > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" liked your comment \"", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](3, 2, notification_r13.owningComment.content, 0, 24), "...\" ");
} }
function HeaderComponent_div_7_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HeaderComponent_div_7_a_12_mat_icon_1_Template, 2, 0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HeaderComponent_div_7_a_12_mat_icon_2_Template, 2, 0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, HeaderComponent_div_7_a_12_mat_icon_3_Template, 2, 0, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HeaderComponent_div_7_a_12_span_4_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, HeaderComponent_div_7_a_12_span_5_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, HeaderComponent_div_7_a_12_span_6_Template, 5, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, HeaderComponent_div_7_a_12_span_7_Template, 5, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, HeaderComponent_div_7_a_12_span_8_Template, 5, 3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, HeaderComponent_div_7_a_12_span_9_Template, 4, 6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notification_r13 = ctx.$implicit;
    const last_r14 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("href", "/posts/", notification_r13.owningPost.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", last_r14 ? "" : "border-bottom-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.type === "POST_LIKE" || notification_r13.type === "COMMENT_LIKE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.type === "POST_COMMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.type === "POST_SHARE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.sender);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !notification_r13.sender);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.type === "POST_LIKE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.type === "POST_COMMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.type === "POST_SHARE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", notification_r13.type === "COMMENT_LIKE");
} }
function HeaderComponent_div_7_div_14_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_7_div_14_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r48.loadNotifications(ctx_r48.resultPage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_7_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HeaderComponent_div_7_div_14_button_1_Template, 2, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HeaderComponent_div_7_div_14_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.hasMoreNotifications && !(ctx_r9.fetchingResult && ctx_r9.resultPage > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.fetchingResult && ctx_r9.resultPage > 1);
} }
function HeaderComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r50.openSearchDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_7_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r52.handleUnseenNotifications(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, HeaderComponent_div_7_span_7_Template, 1, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-menu", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, HeaderComponent_div_7_h2_10_Template, 2, 0, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, HeaderComponent_div_7_h2_11_Template, 2, 0, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, HeaderComponent_div_7_a_12_Template, 10, 11, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_7_Template_div_click_13_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, HeaderComponent_div_7_div_14_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 23)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-menu", 16, 24)(20, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.hasUnseenNotification);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.notifications.length <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.notifications.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.notifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.hasMoreNotifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r10);
} }
class HeaderComponent {
    constructor(authService, notificationService, matDialog, matSnackbar) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.matDialog = matDialog;
        this.matSnackbar = matSnackbar;
        this.isUserLoggedIn = false;
        this.isProfilePage = false;
        this.notifications = [];
        this.hasUnseenNotification = false;
        this.resultPage = 1;
        this.resultSize = 5;
        this.hasMoreNotifications = false;
        this.fetchingResult = false;
        this.defaultProfilePhotoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultProfilePhotoUrl;
        this.subscriptions = [];
    }
    ngOnInit() {
        if (this.authService.isUserLoggedIn()) {
            this.isUserLoggedIn = true;
            this.authUser = this.authService.getAuthUserFromCache();
        }
        else {
            this.isUserLoggedIn = false;
        }
        if (this.isUserLoggedIn) {
            this.loadNotifications(1);
        }
        this.authService.logoutSubject.subscribe(loggedOut => {
            if (loggedOut) {
                this.isUserLoggedIn = false;
            }
        });
        this.authService.loginSubject.subscribe(loggedInUser => {
            if (loggedInUser) {
                this.authUser = loggedInUser;
                this.isUserLoggedIn = true;
            }
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    openPostDialog() {
        this.matDialog.open(_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_2__.PostDialogComponent, {
            data: null,
            autoFocus: false,
            minWidth: '500px',
            maxWidth: '700px'
        });
    }
    openSearchDialog() {
        this.matDialog.open(_search_dialog_search_dialog_component__WEBPACK_IMPORTED_MODULE_3__.SearchDialogComponent, {
            autoFocus: true,
            width: '500px'
        });
    }
    loadNotifications(page) {
        this.fetchingResult = true;
        this.subscriptions.push(this.notificationService.getNotifications(page, this.resultSize).subscribe({
            next: (notifications) => {
                this.fetchingResult = false;
                notifications.forEach(n => {
                    this.notifications.push(n);
                    if (!n.isSeen)
                        this.hasUnseenNotification = true;
                });
                if (notifications.length > 0) {
                    this.hasMoreNotifications = true;
                }
                else {
                    this.hasMoreNotifications = false;
                }
                this.resultPage++;
            },
            error: (errorResponse) => {
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__.SnackbarComponent, {
                    data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                    panelClass: ['bg-danger'],
                    duration: 5000
                });
                this.fetchingResult = false;
            }
        }));
    }
    handleUnseenNotifications() {
        if (this.hasUnseenNotification) {
            this.subscriptions.push(this.notificationService.markAllSeen().subscribe({
                next: (response) => {
                    this.hasUnseenNotification = false;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                }
            }));
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 11, vars: 4, consts: [["color", "primary", 1, "position-fixed", "top-0", "mat-elevation-z3", "p-4", 2, "z-index", "999"], ["href", "/", 1, "text-white", "text-decoration-none"], [1, "example-spacer"], ["href", "/profile", "class", "rounded-pill ps-2 pt-1 pe-3 pb-1 text-white text-decoration-none", 4, "ngIf"], ["mat-raised-button", "", "class", "me-3", "href", "/login", 4, "ngIf"], ["mat-raised-button", "", "href", "/signup", 4, "ngIf"], [4, "ngIf"], ["mat-fab", "", "color", "primary", "matTooltip", "Create New Post", "matTooltipPosition", "left", 1, "position-fixed", 2, "bottom", "30px", "right", "30px", 3, "click"], ["href", "/profile", 1, "rounded-pill", "ps-2", "pt-1", "pe-3", "pb-1", "text-white", "text-decoration-none"], [1, "rounded-circle", "d-inline-block", "align-middle", "centered-bg-image"], [1, "mat-body-strong", "d-inline-block", "align-middle", "ps-2"], ["mat-raised-button", "", "href", "/login", 1, "me-3"], ["mat-raised-button", "", "href", "/signup"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["class", "position-absolute translate-middle p-2 bg-danger rounded-circle", "style", "top: 10px; right: -5px;", 4, "ngIf"], ["xPosition", "before"], ["notificationMenu", "matMenu"], ["class", "mat-h2 m-0 text-center", "style", "padding: 12px 36px", 3, "click", 4, "ngIf"], ["class", "mat-h2 m-0 text-center", "style", "padding: 12px 20px 20px 20px;", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "class", "border border-1 border-start-0 border-end-0", "style", "height: auto; line-height: 1.6; white-space: normal; font-size: 14px; padding: 16px 20px;", 3, "href", "ngClass", 4, "ngFor", "ngForOf"], [1, "position-relative", "ps-3", "pe-3", 3, "click"], ["class", "text-center", "style", "margin: 20px 12px 12px 12px;", 4, "ngIf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mainMenu", "matMenu"], ["mat-menu-item", "", "href", "/profile"], ["mat-menu-item", "", "href", "/settings"], ["mat-menu-item", "", "href", "/logout"], [1, "position-absolute", "translate-middle", "p-2", "bg-danger", "rounded-circle", 2, "top", "10px", "right", "-5px"], [1, "mat-h2", "m-0", "text-center", 2, "padding", "12px 36px", 3, "click"], [1, "mat-h2", "m-0", "text-center", 2, "padding", "12px 20px 20px 20px", 3, "click"], ["mat-menu-item", "", 1, "border", "border-1", "border-start-0", "border-end-0", 2, "height", "auto", "line-height", "1.6", "white-space", "normal", "font-size", "14px", "padding", "16px 20px", 3, "href", "ngClass"], ["color", "primary", "style", "margin-right: 5px;", 4, "ngIf"], ["class", "fw-500", 4, "ngIf"], ["class", "fw-500 text-danger", 4, "ngIf"], ["color", "primary", 2, "margin-right", "5px"], [1, "fw-500"], [1, "fw-500", "text-danger"], [1, "text-center", 2, "margin", "20px 12px 12px 12px"], ["mat-raised-button", "", "color", "primary", "class", "rounded-pill align-middle", 3, "click", 4, "ngIf"], ["class", "d-inline-block", "style", "margin-top: 3px;", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "rounded-pill", "align-middle", 3, "click"], [1, "d-inline-block", 2, "margin-top", "3px"], [2, "zoom", "0.3", "margin", "0 auto"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Social App");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, HeaderComponent_a_4_Template, 4, 4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, HeaderComponent_a_5_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, HeaderComponent_a_6_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 26, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_8_listener() { return ctx.openPostDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isUserLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isUserLoggedIn);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.SlicePipe], styles: [".example-spacer[_ngcontent-%COMP%] {\r\n\tflex: 1 1 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztBQUNmIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuXHRmbGV4OiAxIDEgYXV0bztcclxufSJdfQ== */"] });


/***/ }),

/***/ 28:
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_model_user_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/model/user-login */ 3);
/* harmony import */ var _forgot_password_dialog_forgot_password_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forgot-password-dialog/forgot-password-dialog.component */ 8668);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
















function LoginComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function LoginComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please, enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function LoginComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password must be 6 to 32 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password has to be alpha numeric and must include uppercase, lowercase, and special characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_card_footer_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(authService, router, formBuilder, matSnackbar, matDialog) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.matSnackbar = matSnackbar;
        this.matDialog = matDialog;
        this.submittingForm = false;
        this.subscriptions = [];
    }
    get email() { return this.loginFormGroup.get('email'); }
    get password() { return this.loginFormGroup.get('password'); }
    ngOnInit() {
        if (this.authService.isUserLoggedIn()) {
            this.router.navigateByUrl('/profile');
            return;
        }
        this.loginFormGroup = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(32)])
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    handleLogin() {
        var _a, _b;
        if (this.loginFormGroup.valid) {
            this.submittingForm = true;
            const userLogin = new src_app_model_user_login__WEBPACK_IMPORTED_MODULE_0__.UserLogin();
            userLogin.email = (_a = this.email) === null || _a === void 0 ? void 0 : _a.value;
            userLogin.password = (_b = this.password) === null || _b === void 0 ? void 0 : _b.value;
            this.subscriptions.push(this.authService.login(userLogin).subscribe({
                next: (response) => {
                    const authToken = response.headers.get('Jwt-Token');
                    this.authService.storeTokenInCache(authToken);
                    this.authService.storeAuthUserInCache(response.body);
                    this.submittingForm = false;
                    this.router.navigateByUrl('/profile');
                },
                error: (errorResponse) => {
                    const validationErrors = errorResponse.error.validationErrors;
                    if (validationErrors != null) {
                        Object.keys(validationErrors).forEach(key => {
                            const formControl = this.loginFormGroup.get(key);
                            if (formControl) {
                                formControl.setErrors({
                                    serverError: validationErrors[key]
                                });
                            }
                        });
                    }
                    else {
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                            data: 'Incorrect email or password.',
                            panelClass: ['bg-danger'],
                            duration: 5000
                        });
                    }
                    this.submittingForm = false;
                }
            }));
        }
    }
    openForgotPasswordDialog(e) {
        e.preventDefault();
        this.matDialog.open(_forgot_password_dialog_forgot_password_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordDialogComponent, {
            autoFocus: true,
            width: '500px'
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 25, vars: 7, consts: [[1, "mt-100", "me-auto", "ms-auto", "pb-5", 2, "width", "500px"], [1, "mat-elevation-z3"], [1, "text-center", "ps-3", "pt-5", "pe-3"], [1, "p-4"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-100", "pb-2"], ["type", "text", "matInput", "", "formControlName", "email", "placeholder", "Ex. johndoe@example.com"], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "password", "placeholder", "*************"], [1, "d-inline-block", "text-secondary", "text-decoration-none", "cursor-pointer", "mt-3", 3, "click"], ["align", "end", 2, "margin-top", "-35px", "padding-right", "8px"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mode", "indeterminate"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Login To Your Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-content", 3)(5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.handleLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-form-field", 5)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, LoginComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-form-field", 5)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, LoginComponent_mat_error_17_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, LoginComponent_mat_error_18_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_19_listener($event) { return ctx.openForgotPasswordDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Forgot Password? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-card-actions", 10)(22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, LoginComponent_mat_card_footer_24_Template, 2, 0, "mat-card-footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.email.hasError("email") || ctx.email.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.password.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.password.hasError("minlength", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.password.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.submittingForm == true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardFooter, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2217:
/*!******************************************************!*\
  !*** ./src/app/component/logout/logout.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class LogoutComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LogoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "logout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5988:
/*!********************************************************!*\
  !*** ./src/app/component/message/message.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageComponent": () => (/* binding */ MessageComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);






function MessageComponent_mat_card_actions_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-actions", 4)(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
const _c0 = function (a0, a1) { return { "text-danger": a0, "text-success": a1 }; };
class MessageComponent {
    constructor(router) {
        this.router = router;
        this.toSignup = false;
        this.toLogin = false;
    }
    ngOnInit() {
        this.messageType = localStorage.getItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageTypeLabel);
        this.messageHeader = localStorage.getItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageHeaderLabel);
        this.messageDetail = localStorage.getItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageDetailLabel);
        this.toSignup = localStorage.getItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toSignupLabel) === 'true' ? true : false;
        this.toLogin = localStorage.getItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toLoginLabel) === 'true' ? true : false;
        if (this.messageType === null || this.messageHeader === null) {
            this.router.navigateByUrl('/');
        }
    }
    ngOnDestroy() {
        localStorage.removeItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageTypeLabel);
        localStorage.removeItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageHeaderLabel);
        localStorage.removeItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageDetailLabel);
        localStorage.removeItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toSignupLabel);
        localStorage.removeItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toLoginLabel);
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
MessageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], decls: 7, vars: 7, consts: [[1, "mt-100", "me-auto", "ms-auto", 2, "width", "500px"], [1, "p-4"], [1, "pb-3", 3, "ngClass"], ["align", "end", 4, "ngIf"], ["align", "end"], ["mat-raised-button", "", "color", "primary", "routerLink", "'/login"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MessageComponent_mat_card_actions_6_Template, 3, 0, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx.messageType === "error", ctx.messageType === "success"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.messageHeader, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.messageDetail, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toLogin === true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardSubtitle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 1885:
/*!********************************************************************************!*\
  !*** ./src/app/component/photo-upload-dialog/photo-upload-dialog.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoUploadDialogComponent": () => (/* binding */ PhotoUploadDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);












class PhotoUploadDialogComponent {
    constructor(data, authService, userService, thisDialogRef, matSnackbar) {
        this.data = data;
        this.authService = authService;
        this.userService = userService;
        this.thisDialogRef = thisDialogRef;
        this.matSnackbar = matSnackbar;
        this.defaultProfilePhotoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultProfilePhotoUrl;
        this.defaultCoverPhotoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultCoverPhotoUrl;
        this.subscriptions = [];
    }
    ngOnInit() {
        if (this.data.uploadType === 'profilePhoto') {
            this.photoPreviewUrl = this.data.authUser.profilePhoto ? this.data.authUser.profilePhoto : this.defaultProfilePhotoUrl;
        }
        else if (this.data.uploadType === 'coverPhoto') {
            this.photoPreviewUrl = this.data.authUser.coverPhoto ? this.data.authUser.coverPhoto : this.defaultCoverPhotoUrl;
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    previewPhoto(e) {
        if (e.target.files) {
            this.photo = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(this.photo);
            reader.onload = (e) => {
                this.photoPreviewUrl = e.target.result;
            };
        }
    }
    savePhoto() {
        if (this.photo) {
            if (this.data.uploadType === 'profilePhoto') {
                this.subscriptions.push(this.userService.updateProfilePhoto(this.photo).subscribe({
                    next: (updatedUser) => {
                        this.authService.storeAuthUserInCache(updatedUser);
                        this.photoPreviewUrl = null;
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                            data: 'Profile photo updated successfully.',
                            duration: 5000
                        });
                        this.thisDialogRef.close({ updatedUser });
                    },
                    error: (errorResponse) => {
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: ['bg-danger'],
                            duration: 5000
                        });
                    }
                }));
            }
            else if (this.data.uploadType === 'coverPhoto') {
                this.subscriptions.push(this.userService.updateCoverPhoto(this.photo).subscribe({
                    next: (updatedUser) => {
                        this.authService.storeAuthUserInCache(updatedUser);
                        this.photoPreviewUrl = null;
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                            data: 'Cover photo updated successfully.',
                            duration: 5000
                        });
                        this.thisDialogRef.close({ updatedUser });
                    },
                    error: (errorResponse) => {
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: ['bg-danger'],
                            duration: 5000
                        });
                    }
                }));
            }
        }
        else {
            this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                data: 'Please, first upload a photo to save.',
                panelClass: ['bg-danger'],
                duration: 5000
            });
        }
    }
    ;
}
PhotoUploadDialogComponent.ɵfac = function PhotoUploadDialogComponent_Factory(t) { return new (t || PhotoUploadDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar)); };
PhotoUploadDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PhotoUploadDialogComponent, selectors: [["app-photo-upload-dialog"]], decls: 16, vars: 2, consts: [[1, "mat-h2", "m-0"], [1, "divider"], ["alt", "", 2, "max-width", "100%", "max-height", "300px", 3, "src"], [1, "mt-3"], ["type", "file", "id", "photoFile", 1, "d-none", "visually-hidden", 3, "change"], ["for", "photoFile", "matRipple", "", 1, "d-inline-block", "cursor-pointer"], ["mat-stroked-button", "", "color", "primary", 2, "pointer-events", "none"], ["mat-raised-button", "", "color", "primary", 1, "float-end", 3, "click"]], template: function PhotoUploadDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-dialog-content")(1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function PhotoUploadDialogComponent_Template_input_change_8_listener($event) { return ctx.previewPhoto($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 5)(10, "button", 6)(11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "camera_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Upload New Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PhotoUploadDialogComponent_Template_button_click_14_listener() { return ctx.savePhoto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Save Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.data.header, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx.photoPreviewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatRipple, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by11cGxvYWQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6827:
/*!********************************************************************************!*\
  !*** ./src/app/component/post-comment-dialog/post-comment-dialog.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCommentDialogComponent": () => (/* binding */ PostCommentDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _comment_like_dialog_comment_like_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comment-like-dialog/comment-like-dialog.component */ 7878);
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ 4440);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var src_app_service_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/post.service */ 2593);
/* harmony import */ var src_app_service_comment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/comment.service */ 4298);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var src_app_model_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/post */ 1414);
























function PostCommentDialogComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Comment cannot be empty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PostCommentDialogComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Comment length cannot exceed 1024 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PostCommentDialogComponent_li_16_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PostCommentDialogComponent_li_16_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const commentResponse_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r8.openCommentDeleteConfirmDialog(commentResponse_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "delete_sweep");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} }
function PostCommentDialogComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 15)(3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "span", 17)(7, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "watch_later");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "mat-chip-list", 21)(15, "mat-chip", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PostCommentDialogComponent_li_16_Template_mat_chip_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12); const commentResponse_r6 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r11.openCommentLikeDialog(commentResponse_r6.comment); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, " Likes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 24)(20, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PostCommentDialogComponent_li_16_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r12); const commentResponse_r6 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r13.likeOrUnlikeComment(commentResponse_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, PostCommentDialogComponent_li_16_button_23_Template, 3, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const commentResponse_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMapInterpolate1"]("width: 35px; height: 35px; background-image: url('", commentResponse_r6.comment.author.profilePhoto ? commentResponse_r6.comment.author.profilePhoto : ctx_r3.defaultProfilePhotoUrl, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate1"]("href", "/users/", commentResponse_r6.comment.author.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](commentResponse_r6.comment.author.firstName + " " + commentResponse_r6.comment.author.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](11, 11, commentResponse_r6.comment.dateCreated, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](commentResponse_r6.comment.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", commentResponse_r6.comment.likeCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("matTooltip", commentResponse_r6.likedByAuthUser ? "Unlike" : "Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", commentResponse_r6.likedByAuthUser ? "text-danger" : "text-secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", commentResponse_r6.comment.author.id === ctx_r3.authUserId);
} }
function PostCommentDialogComponent_div_17_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PostCommentDialogComponent_div_17_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r16.loadComments(ctx_r16.resultPage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PostCommentDialogComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-spinner", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PostCommentDialogComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PostCommentDialogComponent_div_17_button_1_Template, 2, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PostCommentDialogComponent_div_17_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.hasMoreResult && !(ctx_r4.fetchingResult && ctx_r4.resultPage > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r4.fetchingResult && ctx_r4.resultPage > 1);
} }
function PostCommentDialogComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
class PostCommentDialogComponent {
    constructor(dataPost, authService, postService, commentService, formBuilder, matDialog, matSnackbar) {
        this.dataPost = dataPost;
        this.authService = authService;
        this.postService = postService;
        this.commentService = commentService;
        this.formBuilder = formBuilder;
        this.matDialog = matDialog;
        this.matSnackbar = matSnackbar;
        this.updatedCommentCountEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.commentResponseList = [];
        this.resultPage = 1;
        this.resultSize = 5;
        this.hasMoreResult = false;
        this.fetchingResult = false;
        this.creatingComment = false;
        this.defaultProfilePhotoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultProfilePhotoUrl;
        this.subscriptions = [];
    }
    get content() { return this.commentFormGroup.get('content'); }
    ngOnInit() {
        this.authUserId = this.authService.getAuthUserId();
        this.commentFormGroup = this.formBuilder.group({
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(1024)])
        });
        this.loadComments(1);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    loadComments(currentPage) {
        if (!this.fetchingResult) {
            if (this.dataPost.commentCount > 0) {
                this.fetchingResult = true;
                this.subscriptions.push(this.postService.getPostComments(this.dataPost.id, currentPage, this.resultSize).subscribe({
                    next: (resultList) => {
                        resultList.forEach(commentResponse => this.commentResponseList.push(commentResponse));
                        if (currentPage * this.resultSize < this.dataPost.commentCount) {
                            this.hasMoreResult = true;
                        }
                        else {
                            this.hasMoreResult = false;
                        }
                        this.resultPage++;
                        this.fetchingResult = false;
                    },
                    error: (errorResponse) => {
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: ['bg-danger'],
                            duration: 5000
                        });
                        this.fetchingResult = false;
                    }
                }));
            }
        }
    }
    createNewComment() {
        this.creatingComment = true;
        this.subscriptions.push(this.postService.createPostComment(this.dataPost.id, this.content.value).subscribe({
            next: (newComment) => {
                this.commentFormGroup.reset();
                Object.keys(this.commentFormGroup.controls).forEach(key => {
                    this.commentFormGroup.get(key).setErrors(null);
                });
                this.commentResponseList.unshift(newComment);
                this.updatedCommentCountEvent.emit(this.commentResponseList.length);
                this.creatingComment = false;
            },
            error: (errorResponse) => {
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__.SnackbarComponent, {
                    data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                    panelClass: ['bg-danger'],
                    duration: 5000
                });
                this.creatingComment = false;
            }
        }));
    }
    openCommentLikeDialog(comment) {
        this.matDialog.open(_comment_like_dialog_comment_like_dialog_component__WEBPACK_IMPORTED_MODULE_2__.CommentLikeDialogComponent, {
            data: comment,
            minWidth: '500px',
            maxWidth: '700px'
        });
    }
    likeOrUnlikeComment(commentResponse) {
        if (commentResponse.likedByAuthUser) {
            this.subscriptions.push(this.commentService.unlikeComment(commentResponse.comment.id).subscribe({
                next: (response) => {
                    const targetCommentResponse = this.commentResponseList.find(cR => cR === commentResponse);
                    targetCommentResponse.likedByAuthUser = false;
                    targetCommentResponse.comment.likeCount--;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                }
            }));
        }
        else {
            this.subscriptions.push(this.commentService.likeComment(commentResponse.comment.id).subscribe({
                next: (response) => {
                    const targetCommentResponse = this.commentResponseList.find(cR => cR === commentResponse);
                    targetCommentResponse.likedByAuthUser = true;
                    targetCommentResponse.comment.likeCount++;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                }
            }));
        }
    }
    openCommentDeleteConfirmDialog(commentResponse) {
        const dialogRef = this.matDialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ConfirmationDialogComponent, {
            data: 'Do you want to delete this comment permanently?',
            autoFocus: false,
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.deleteComment(commentResponse);
        });
    }
    deleteComment(commentResponse) {
        this.subscriptions.push(this.commentService.deleteComment(this.dataPost.id, commentResponse.comment.id).subscribe({
            next: (response) => {
                const targetIndex = this.commentResponseList.indexOf(commentResponse);
                this.commentResponseList.splice(targetIndex, 1);
                this.dataPost.commentCount--;
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__.SnackbarComponent, {
                    data: 'Comment deleted successfully.',
                    duration: 5000
                });
            },
            error: (errorResponse) => {
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__.SnackbarComponent, {
                    data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                    panelClass: ['bg-danger'],
                    duration: 5000
                });
            }
        }));
    }
}
PostCommentDialogComponent.ɵfac = function PostCommentDialogComponent_Factory(t) { return new (t || PostCommentDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_post_service__WEBPACK_IMPORTED_MODULE_6__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_service_comment_service__WEBPACK_IMPORTED_MODULE_7__.CommentService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar)); };
PostCommentDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: PostCommentDialogComponent, selectors: [["app-post-comment-dialog"]], outputs: { updatedCommentCountEvent: "updatedCommentCountEvent", newItemEvent: "newItemEvent" }, decls: 19, vars: 7, consts: [[1, "position-relative"], [1, "mat-h2", "m-0"], [1, "divider"], [1, "position-relative", 3, "formGroup", "ngSubmit"], ["commentForm", "ngForm"], ["appearance", "outline", 1, "w-100", 2, "padding-right", "90px"], ["matInput", "", "formControlName", "content", "placeholder", "Post new comment"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "position-absolute", 2, "top", "4px", "right", "0"], [1, "list-group", "list-group-flush"], ["class", "list-group-item ps-0 pt-3 pe-0 pb-3", 4, "ngFor", "ngForOf"], ["class", "mt-3 mb-3 text-center", 4, "ngIf"], ["class", "position-absolute", "style", "transform: scale(0.3); top: -35px; right: -35px;", 4, "ngIf"], [1, "list-group-item", "ps-0", "pt-3", "pe-0", "pb-3"], [1, "rounded-circle", "d-inline-block", "align-middle", "centered-bg-image"], [1, "ps-5", 2, "margin-top", "-38px"], [1, "d-inline-block", "text-decoration-none", "text-dark", "align-middle", "fw-500", "cursor-pointer", 3, "href"], [1, "text-secondary", "d-inline-block"], [1, "align-middle", "w-auto", "h-auto", 2, "font-size", "16px"], [1, "align-middle", "ps-1", "small", "fw-500"], [1, "pt-2", "pb-3"], ["aria-label", "Fish selection"], [1, "me-3", "cursor-pointer", 2, "padding", "4px 10px !important", "min-height", "24px", 3, "click"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-secondary"], [2, "margin-top", "-40px", "text-align", "right"], ["mat-icon-button", "", 3, "matTooltip", "click"], [3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], [1, "text-secondary"], [1, "mt-3", "mb-3", "text-center"], ["mat-raised-button", "", "color", "primary", "class", "rounded-pill align-middle", 3, "click", 4, "ngIf"], ["class", "d-inline-block", "style", "transform: scale(0.3); margin-top: -33px;", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "rounded-pill", "align-middle", 3, "click"], [1, "d-inline-block", 2, "transform", "scale(0.3)", "margin-top", "-33px"], [2, "margin", "0 auto"], [1, "position-absolute", 2, "transform", "scale(0.3)", "top", "-35px", "right", "-35px"]], template: function PostCommentDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-dialog-content")(1, "div", 0)(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function PostCommentDialogComponent_Template_form_ngSubmit_5_listener() { return ctx.createNewComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-form-field", 5)(8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "Post new comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "textarea", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, PostCommentDialogComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, PostCommentDialogComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, PostCommentDialogComponent_li_16_Template, 24, 14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, PostCommentDialogComponent_div_17_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, PostCommentDialogComponent_div_18_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx.dataPost.commentCount > 0 ? "Comments(" + ctx.dataPost.commentCount + ")" : "No Comment", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.commentFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.content.hasError("required") && _r0.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.content.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.commentResponseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.hasMoreResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.fetchingResult && ctx.resultPage === 1 || ctx.creatingComment);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_18__.MatChip, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinner], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWNvbW1lbnQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 330:
/*!****************************************************************!*\
  !*** ./src/app/component/post-detail/post-detail.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDetailComponent": () => (/* binding */ PostDetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/post.service */ 2593);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post/post.component */ 3219);









function PostDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PostDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-post", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("postResponse", ctx_r1.postResponse)("isDetailedPost", true);
} }
class PostDetailComponent {
    constructor(authService, router, postService, activatedRoute, matSnackbar) {
        this.authService = authService;
        this.router = router;
        this.postService = postService;
        this.activatedRoute = activatedRoute;
        this.matSnackbar = matSnackbar;
        this.fetchingResult = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        if (!this.authService.isUserLoggedIn()) {
            this.router.navigateByUrl('/login');
        }
        else {
            this.fetchingResult = true;
            this.postId = Number(this.activatedRoute.snapshot.paramMap.get('postId'));
            this.subscriptions.push(this.postService.getPostById(this.postId).subscribe({
                next: (postResponse) => {
                    this.postResponse = postResponse;
                    this.fetchingResult = false;
                },
                error: (errorResponse) => {
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageTypeLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.errorLabel);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageHeaderLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.notFoundErrorHeader);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageDetailLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.notFoundErrorDetail);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toLoginLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.falseLabel);
                    this.fetchingResult = false;
                    this.router.navigateByUrl('/message');
                }
            }));
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
PostDetailComponent.ɵfac = function PostDetailComponent_Factory(t) { return new (t || PostDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_post_service__WEBPACK_IMPORTED_MODULE_2__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar)); };
PostDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PostDetailComponent, selectors: [["app-post-detail"]], decls: 2, vars: 2, consts: [["class", "text-center fully-centered", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "text-center", "fully-centered"], [1, "text-center", "ms-auto", "me-auto", 2, "zoom", "0.5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-6", "mb-4", 2, "margin-top", "110px"], [3, "postResponse", "isDetailedPost"]], template: function PostDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, PostDetailComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PostDetailComponent_div_1_Template, 4, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.fetchingResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.fetchingResult);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _post_post_component__WEBPACK_IMPORTED_MODULE_3__.PostComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5487:
/*!****************************************************************!*\
  !*** ./src/app/component/post-dialog/post-dialog.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDialogComponent": () => (/* binding */ PostDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ 4440);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _tag_dialog_tag_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag-dialog/tag-dialog.component */ 8130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/post.service */ 2593);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/text-field */ 1307);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var src_app_model_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/post */ 1414);





















function PostDialogComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cannot exceed 4096 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PostDialogComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.postPhotoPreviewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function PostDialogComponent_div_14_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostDialogComponent_div_14_span_1_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const tag_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r9.removeTag(tag_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", tag_r8.action === "remove" ? "d-none visually-hidden" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tag_r8.tagName, " ");
} }
function PostDialogComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PostDialogComponent_div_14_span_1_Template, 4, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.postTags);
} }
function PostDialogComponent_input_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function PostDialogComponent_input_15_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.previewPostPhoto($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PostDialogComponent_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 22)(1, "div", 23)(2, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "camera_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.dataPost && ctx_r4.dataPost.postPhoto ? "Update Photo" : "Add Photo", " ");
} }
function PostDialogComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostDialogComponent_span_17_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.openPostPhotoDeleteConfirmDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Delete Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PostDialogComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class PostDialogComponent {
    constructor(dataPost, postService, formBuilder, router, matDialog, matDialogRef, matSnackbar) {
        this.dataPost = dataPost;
        this.postService = postService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.matDialog = matDialog;
        this.matDialogRef = matDialogRef;
        this.matSnackbar = matSnackbar;
        this.postTags = [];
        this.creatingPost = false;
        this.subscriptions = [];
    }
    get content() { return this.postFormGroup.get('content'); }
    ngOnInit() {
        this.postFormGroup = this.formBuilder.group({
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(((this.dataPost && this.dataPost.content) ? this.dataPost.content : ''), [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(4096)])
        });
        if (this.dataPost) {
            if (this.dataPost.postPhoto) {
                this.postPhotoPreviewUrl = this.dataPost.postPhoto;
            }
            this.populateWithPostTags();
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    previewPostPhoto(event) {
        if (event.target.files) {
            this.postPhoto = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(this.postPhoto);
            reader.onload = (e) => {
                this.postPhotoPreviewUrl = e.target.result;
            };
        }
    }
    openPostPhotoDeleteConfirmDialog() {
        const dialogRef = this.matDialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialogComponent, {
            data: 'Do you want to delete this photo?',
            width: '500px',
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.deletePostPhoto();
            }
        });
    }
    openAddTagDialog(e) {
        e.preventDefault();
        const dialogRef = this.matDialog.open(_tag_dialog_tag_dialog_component__WEBPACK_IMPORTED_MODULE_3__.TagDialogComponent, {
            width: '500px',
            autoFocus: true
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const tagIndex = this.postTags.findIndex(tN => tN === result.tagName);
                if (tagIndex >= 0) {
                    this.postTags[tagIndex].action = 'add';
                }
                else {
                    this.postTags.push({
                        tagName: result.tagName,
                        action: 'add'
                    });
                }
            }
            console.log(this.postTags);
        });
    }
    removeTag(tagName) {
        const tagIndex = this.postTags.findIndex(tN => tN === tagName);
        if (this.postTags[tagIndex].action === 'saved') {
            this.postTags[tagIndex].action = 'remove';
        }
        else {
            this.postTags.splice(tagIndex, 1);
        }
        console.log(this.postTags);
    }
    handlePostSubmit() {
        if (this.content.value.length <= 0 && !this.postPhoto) {
            this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                data: 'Post cannot be empty.',
                panelClass: ['bg-danger'],
                duration: 5000
            });
            return;
        }
        if (this.dataPost) {
            this.updatePost();
        }
        else {
            this.createNewPost();
        }
    }
    createNewPost() {
        if (!this.creatingPost) {
            this.creatingPost = true;
            this.subscriptions.push(this.postService.createNewPost(this.content.value, this.postPhoto, this.postTags).subscribe({
                next: (createdPost) => {
                    this.matDialogRef.close();
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                        data: 'Post created successfully.',
                        duration: 5000
                    });
                    this.creatingPost = false;
                    this.router.navigateByUrl(`/posts/${createdPost.id}`).then(() => {
                        window.location.reload();
                    });
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                    this.creatingPost = false;
                }
            }));
        }
    }
    updatePost() {
        this.subscriptions.push(this.postService.updatePost(this.dataPost.id, this.content.value, this.postPhoto, this.postTags).subscribe({
            next: (createdPost) => {
                this.matDialogRef.close();
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                    data: 'Post updated successfully.',
                    duration: 5000
                });
                this.router.navigateByUrl(`/posts/${createdPost.id}`);
            },
            error: (errorResponse) => {
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                    data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                    panelClass: ['bg-danger'],
                    duration: 5000
                });
            }
        }));
    }
    deletePostPhoto() {
        this.subscriptions.push(this.postService.deletePostPhoto(this.dataPost.id).subscribe({
            next: (createdPost) => {
                this.postPhotoPreviewUrl = null;
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                    data: 'Photo deleted successfully.',
                    duration: 5000
                });
            },
            error: (errorResponse) => {
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                    data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                    panelClass: ['bg-danger'],
                    duration: 5000
                });
            }
        }));
    }
    populateWithPostTags() {
        this.dataPost.postTags.forEach(tag => {
            this.postTags.push({
                tagName: tag.name,
                action: 'saved'
            });
        });
    }
}
PostDialogComponent.ɵfac = function PostDialogComponent_Factory(t) { return new (t || PostDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_post_service__WEBPACK_IMPORTED_MODULE_4__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar)); };
PostDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PostDialogComponent, selectors: [["app-post-dialog"]], decls: 24, vars: 10, consts: [[1, "position-relative"], [1, "mat-h2", "m-0"], [1, "divider"], ["enctype", "multipart/form-data", 1, "position-relative", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-100", 2, "padding-right", "90px"], ["matInput", "", "formControlName", "content", "placeholder", "What do you want to post?", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "2", "cdkAutosizeMaxRows", "10"], [4, "ngIf"], ["class", "pb-3", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], ["type", "file", "class", "d-none visually-hidden", "id", "postPhotoFile", 3, "change", 4, "ngIf"], ["for", "postPhotoFile", 4, "ngIf"], ["class", "fw-500 align-middle cursor-pointer text-danger d-inline-block ms-4", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Add New Tag", "matTooltipPosition", "left", 1, "float-end", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "position-absolute", 2, "top", "4px", "right", "0"], ["class", "position-absolute", "style", "transform: scale(0.3); top: -35px; right: -35px;", 4, "ngIf"], [1, "pb-3"], ["alt", "", 2, "max-width", "100%", 3, "src"], [1, "mb-3"], ["class", "badge rounded-pill text-dark fw-normal d-inline-block position-relative text-center m-2", "style", "font-size: 16px; background-color: rgba(0,0,0,0.1);", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "badge", "rounded-pill", "text-dark", "fw-normal", "d-inline-block", "position-relative", "text-center", "m-2", 2, "font-size", "16px", "background-color", "rgba(0,0,0,0.1)", 3, "ngClass"], ["matTooltip", "Remove Tag", "matTooltipPosition", "above", 1, "position-absolute", "top-0", "start-100", "translate-middle", "bg-danger", "fw-bold", "text-white", "rounded-circle", "text-center", "cursor-pointer", 2, "width", "20px", "height", "20px", "line-height", "20px", 3, "click"], ["type", "file", "id", "postPhotoFile", 1, "d-none", "visually-hidden", 3, "change"], ["for", "postPhotoFile"], [1, "border", "border-1", "rounded-pill", "ps-3", "pt-1", "pe-3", "pb-1", "cursor-pointer"], [1, "align-middle"], [1, "align-middle", "fw-500", "ps-2"], [1, "fw-500", "align-middle", "cursor-pointer", "text-danger", "d-inline-block", "ms-4", 3, "click"], [1, "position-absolute", 2, "transform", "scale(0.3)", "top", "-35px", "right", "-35px"]], template: function PostDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-dialog-content")(1, "div", 0)(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function PostDialogComponent_Template_form_ngSubmit_5_listener() { return ctx.handlePostSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "What do you want to post?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\t\t\t\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PostDialogComponent_mat_error_11_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, PostDialogComponent_div_12_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, PostDialogComponent_div_14_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, PostDialogComponent_input_15_Template, 1, 0, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, PostDialogComponent_label_16_Template, 6, 1, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, PostDialogComponent_span_17_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostDialogComponent_Template_button_click_18_listener($event) { return ctx.openAddTagDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, PostDialogComponent_div_23_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.dataPost ? "Edit This Post" : "Create New Post", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.postFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.content.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.postPhotoPreviewUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.postTags.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.dataPost || ctx.dataPost && !ctx.dataPost.isTypeShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.dataPost || ctx.dataPost && !ctx.dataPost.isTypeShare);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dataPost && ctx.dataPost.postPhoto);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.dataPost ? "Update" : "Post", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.creatingPost);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_13__.CdkTextareaAutosize, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 578:
/*!**************************************************************************!*\
  !*** ./src/app/component/post-like-dialog/post-like-dialog.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostLikeDialogComponent": () => (/* binding */ PostLikeDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/post.service */ 2593);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var src_app_model_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/post */ 1414);












function PostLikeDialogComponent_hr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "hr", 6);
} }
function PostLikeDialogComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 7)(1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const like_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMapInterpolate1"]("width: 30px; height: 30px; background-image: url('", like_r4.profilePhoto ? like_r4.profilePhoto : ctx_r1.defaultProfilePhotoUrl, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "/users/", like_r4.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](like_r4.firstName + " " + like_r4.lastName);
} }
function PostLikeDialogComponent_div_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostLikeDialogComponent_div_6_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r7.loadLikes(ctx_r7.resultPage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostLikeDialogComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostLikeDialogComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PostLikeDialogComponent_div_6_button_1_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PostLikeDialogComponent_div_6_div_2_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.hasMoreResult && !(ctx_r2.fetchingResult && ctx_r2.resultPage > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.fetchingResult && ctx_r2.resultPage > 1);
} }
function PostLikeDialogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class PostLikeDialogComponent {
    constructor(dataPost, postService, matSnackbar) {
        this.dataPost = dataPost;
        this.postService = postService;
        this.matSnackbar = matSnackbar;
        this.likeList = [];
        this.resultPage = 1;
        this.resultSize = 5;
        this.hasMoreResult = false;
        this.fetchingResult = false;
        this.defaultProfilePhotoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultProfilePhotoUrl;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.loadLikes(1);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    loadLikes(currentPage) {
        if (!this.fetchingResult) {
            if (this.dataPost.likeCount > 0) {
                this.fetchingResult = true;
                this.subscriptions.push(this.postService.getPostLikes(this.dataPost.id, currentPage, this.resultSize).subscribe({
                    next: (resultList) => {
                        resultList.forEach(like => this.likeList.push(like));
                        if (currentPage * this.resultSize < this.dataPost.likeCount) {
                            this.hasMoreResult = true;
                        }
                        else {
                            this.hasMoreResult = false;
                        }
                        this.resultPage++;
                        this.fetchingResult = false;
                    },
                    error: (errorResponse) => {
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: ['bg-danger'],
                            duration: 5000
                        });
                        this.fetchingResult = false;
                    }
                }));
            }
        }
    }
}
PostLikeDialogComponent.ɵfac = function PostLikeDialogComponent_Factory(t) { return new (t || PostLikeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_post_service__WEBPACK_IMPORTED_MODULE_3__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar)); };
PostLikeDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PostLikeDialogComponent, selectors: [["app-post-like-dialog"]], decls: 8, vars: 5, consts: [[1, "position-relative"], [1, "mat-h2", "m-0"], ["class", "divider", 4, "ngIf"], ["class", "list-group list-group-flush", 4, "ngFor", "ngForOf"], ["class", "mt-3 mb-3 text-center", 4, "ngIf"], ["class", "position-absolute", "style", "transform: scale(0.3); top: -35px; right: -35px;", 4, "ngIf"], [1, "divider"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "ps-0", "pt-2", "pe-0", "pb-2"], [1, "rounded-circle", "d-inline-block", "align-middle", "centered-bg-image"], [1, "d-inline-block", "text-decoration-none", "text-dark", "align-middle", "ps-2", "fw-500", "cursor-pointer", 3, "href"], [1, "mt-3", "mb-3", "text-center"], ["mat-raised-button", "", "color", "primary", "class", "rounded-pill align-middle", 3, "click", 4, "ngIf"], ["class", "d-inline-block", "style", "transform: scale(0.3); margin-top: -33px;", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "rounded-pill", "align-middle", 3, "click"], [1, "d-inline-block", 2, "transform", "scale(0.3)", "margin-top", "-33px"], [2, "margin", "0 auto"], [1, "position-absolute", 2, "transform", "scale(0.3)", "top", "-35px", "right", "-35px"]], template: function PostLikeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-dialog-content")(1, "div", 0)(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, PostLikeDialogComponent_hr_4_Template, 1, 0, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, PostLikeDialogComponent_ul_5_Template, 5, 5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PostLikeDialogComponent_div_6_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PostLikeDialogComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.dataPost.likeCount > 0 ? "Likes(" + ctx.dataPost.likeCount + ")" : "No Like", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataPost.likeCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.likeList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hasMoreResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fetchingResult && ctx.resultPage === 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner], styles: ["mat-dialog-content[_ngcontent-%COMP%] {\r\n    min-width: 300px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtbGlrZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJwb3N0LWxpa2UtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5295:
/*!****************************************************************************!*\
  !*** ./src/app/component/post-share-dialog/post-share-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostShareDialogComponent": () => (/* binding */ PostShareDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _post_like_dialog_post_like_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-like-dialog/post-like-dialog.component */ 578);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/post.service */ 2593);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var src_app_model_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/post */ 1414);















function PostShareDialogComponent_hr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "hr", 7);
} }
function PostShareDialogComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 10)(3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 12)(7, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "watch_later");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "View Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-chip-list", 17)(17, "mat-chip", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostShareDialogComponent_li_6_Template_mat_chip_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const postShareResponse_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.openPostLikeDialog(postShareResponse_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Likes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 20)(22, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostShareDialogComponent_li_6_Template_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const postShareResponse_r4 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.likeOrUnlikePostShare(postShareResponse_r4.likedByAuthUser, postShareResponse_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const postShareResponse_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMapInterpolate1"]("width: 35px; height: 35px; background-image: url('", postShareResponse_r4.post.author.profilePhoto ? postShareResponse_r4.post.author.profilePhoto : ctx_r1.defaultProfilePhotoUrl, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("href", "/users/", postShareResponse_r4.post.author.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](postShareResponse_r4.post.author.firstName + " " + postShareResponse_r4.post.author.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 10, postShareResponse_r4.post.dateCreated, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](postShareResponse_r4.post.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("href", "/posts/", postShareResponse_r4.post.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", postShareResponse_r4.post.likeCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", postShareResponse_r4.likedByAuthUser ? "text-danger" : "text-secondary");
} }
function PostShareDialogComponent_div_7_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostShareDialogComponent_div_7_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r10.loadPostShares(ctx_r10.resultPage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PostShareDialogComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function PostShareDialogComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, PostShareDialogComponent_div_7_button_1_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, PostShareDialogComponent_div_7_div_2_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.hasMoreResult && !(ctx_r2.fetchingResult && ctx_r2.resultPage > 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.fetchingResult && ctx_r2.resultPage > 1);
} }
function PostShareDialogComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class PostShareDialogComponent {
    constructor(dataPost, postService, matDialog, matSnackbar) {
        this.dataPost = dataPost;
        this.postService = postService;
        this.matDialog = matDialog;
        this.matSnackbar = matSnackbar;
        this.postShareResponseList = [];
        this.resultPage = 1;
        this.resultSize = 5;
        this.hasMoreResult = false;
        this.fetchingResult = false;
        this.defaultProfilePhotoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultProfilePhotoUrl;
        this.subscriptions = [];
    }
    ngOnInit() {
        if (this.dataPost.shareCount > 0) {
            this.loadPostShares(1);
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    loadPostShares(currentPage) {
        if (!this.fetchingResult) {
            this.fetchingResult = true;
            this.subscriptions.push(this.postService.getPostShares(this.dataPost.id, currentPage, this.resultSize).subscribe({
                next: (resultList) => {
                    resultList.forEach(postShareResponse => this.postShareResponseList.push(postShareResponse));
                    if (currentPage * this.resultSize < this.dataPost.shareCount) {
                        this.hasMoreResult = true;
                    }
                    else {
                        this.hasMoreResult = false;
                    }
                    this.resultPage++;
                    this.fetchingResult = false;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                }
            }));
        }
    }
    likeOrUnlikePostShare(likedByAuthUser, postResponse) {
        if (likedByAuthUser) {
            this.subscriptions.push(this.postService.unlikePost(postResponse.post.id).subscribe({
                next: (response) => {
                    postResponse.likedByAuthUser = false;
                    postResponse.post.likeCount--;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                }
            }));
        }
        else {
            this.subscriptions.push(this.postService.likePost(postResponse.post.id).subscribe({
                next: (response) => {
                    postResponse.likedByAuthUser = true;
                    postResponse.post.likeCount++;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-'],
                        duration: 5000
                    });
                }
            }));
        }
    }
    openPostLikeDialog(postResponse) {
        this.matDialog.open(_post_like_dialog_post_like_dialog_component__WEBPACK_IMPORTED_MODULE_2__.PostLikeDialogComponent, {
            data: postResponse.post,
            minWidth: '500px',
            maxWidth: '700px'
        });
    }
}
PostShareDialogComponent.ɵfac = function PostShareDialogComponent_Factory(t) { return new (t || PostShareDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_post_service__WEBPACK_IMPORTED_MODULE_4__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar)); };
PostShareDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PostShareDialogComponent, selectors: [["app-post-share-dialog"]], decls: 9, vars: 5, consts: [[1, "position-relative"], [1, "mat-h2", "m-0"], ["class", "divider", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item p-3", 4, "ngFor", "ngForOf"], ["class", "mt-4 mb-3 text-center", 4, "ngIf"], ["class", "position-absolute", "style", "transform: scale(0.3); top: -35px; right: -35px;", 4, "ngIf"], [1, "divider"], [1, "list-group-item", "p-3"], [1, "rounded-circle", "d-inline-block", "align-middle", "centered-bg-image"], [1, "ps-5", 2, "margin-top", "-38px"], [1, "d-inline-block", "text-decoration-none", "text-dark", "align-middle", "fw-500", "cursor-pointer", 3, "href"], [1, "text-secondary", "d-inline-block"], [1, "align-middle", "w-auto", "h-auto", 2, "font-size", "16px"], [1, "align-middle", "ps-1", "small", "fw-500"], [1, "pt-2"], [1, "d-inline-block", "text-decoration-none", "fw-500", "mb-3", 3, "href"], ["aria-label", "Fish selection", 1, ""], [1, "me-3", "cursor-pointer", 2, "padding", "4px 10px !important", "min-height", "24px", 3, "click"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-secondary"], [2, "margin-top", "-40px", "text-align", "right"], ["mat-icon-button", "", 3, "click"], [3, "ngClass"], [1, "mt-4", "mb-3", "text-center"], ["mat-raised-button", "", "color", "primary", "class", "rounded-pill align-middle", 3, "click", 4, "ngIf"], ["class", "d-inline-block", "style", "transform: scale(0.3); margin-top: -33px;", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "rounded-pill", "align-middle", 3, "click"], [1, "d-inline-block", 2, "transform", "scale(0.3)", "margin-top", "-33px"], [2, "margin", "0 auto"], [1, "position-absolute", 2, "transform", "scale(0.3)", "top", "-35px", "right", "-35px"]], template: function PostShareDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-dialog-content")(1, "div", 0)(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PostShareDialogComponent_hr_4_Template, 1, 0, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, PostShareDialogComponent_li_6_Template, 25, 13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, PostShareDialogComponent_div_7_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, PostShareDialogComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.dataPost.shareCount > 0 ? "Shares(" + ctx.dataPost.shareCount + ")" : "No Share", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dataPost.shareCount > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.postShareResponseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.hasMoreResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.fetchingResult && ctx.resultPage === 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChip, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LXNoYXJlLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3219:
/*!**************************************************!*\
  !*** ./src/app/component/post/post.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostComponent": () => (/* binding */ PostComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ 4440);
/* harmony import */ var _post_comment_dialog_post_comment_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-comment-dialog/post-comment-dialog.component */ 6827);
/* harmony import */ var _post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post-dialog/post-dialog.component */ 5487);
/* harmony import */ var _post_like_dialog_post_like_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post-like-dialog/post-like-dialog.component */ 578);
/* harmony import */ var _post_share_dialog_post_share_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-share-dialog/post-share-dialog.component */ 5295);
/* harmony import */ var _share_confirm_dialog_share_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share-confirm-dialog/share-confirm-dialog.component */ 5936);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _waiting_dialog_waiting_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../waiting-dialog/waiting-dialog.component */ 1703);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var src_app_service_post_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/post.service */ 2593);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 89);























function PostComponent_mat_card_0_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21)(1, "button", 22)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-menu", null, 23)(6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PostComponent_mat_card_0_div_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r11.openPostEditDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, " Edit Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PostComponent_mat_card_0_div_12_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r13.openPostDeleteConfirmDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "delete_sweep");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matMenuTriggerFor", _r10);
} }
function PostComponent_mat_card_0_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("src", ctx_r2.postResponse.post.postPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function PostComponent_mat_card_0_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r3.postResponse.post.content, " ");
} }
function PostComponent_mat_card_0_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r4.postResponse.post.content.length > 128 ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](2, 1, ctx_r4.postResponse.post.content, 0, 128) + "..." : ctx_r4.postResponse.post.content, " ");
} }
function PostComponent_mat_card_0_a_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " View Full Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("href", "/posts/", ctx_r5.postResponse.post.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function PostComponent_mat_card_0_div_18_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("href", "/posts/tags/", tag_r15.name, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("#", tag_r15.name, "");
} }
function PostComponent_mat_card_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PostComponent_mat_card_0_div_18_a_1_Template, 2, 2, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r6.postResponse.post.postTags);
} }
function PostComponent_mat_card_0_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Shared post has been deleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function PostComponent_mat_card_0_div_19_div_2_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "img", 38);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("src", ctx_r18.postResponse.post.sharedPost.postPhoto, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function PostComponent_mat_card_0_div_19_div_2_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r19.postResponse.post.sharedPost.content.length > 128 ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](2, 1, ctx_r19.postResponse.post.sharedPost.content, 0, 128) + "..." : ctx_r19.postResponse.post.sharedPost.content);
} }
function PostComponent_mat_card_0_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 33)(3, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 35)(7, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "watch_later");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, PostComponent_mat_card_0_div_19_div_2_img_13_Template, 1, 1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, PostComponent_mat_card_0_div_19_div_2_p_14_Template, 3, 5, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "View Shared Post ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleMapInterpolate1"]("width: 35px; height: 35px; background-image: url('", ctx_r17.postResponse.post.sharedPost.author.profilePhoto ? ctx_r17.postResponse.post.sharedPost.author.profilePhoto : ctx_r17.defaultProfilePhotoUrl, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("href", "/users/", ctx_r17.postResponse.post.sharedPost.author.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r17.postResponse.post.sharedPost.author.firstName + " " + ctx_r17.postResponse.post.sharedPost.author.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](11, 9, ctx_r17.postResponse.post.sharedPost.dateCreated, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r17.postResponse.post.sharedPost.postPhoto);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r17.postResponse.post.sharedPost.content.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("href", "/posts/", ctx_r17.postResponse.post.sharedPost.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function PostComponent_mat_card_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PostComponent_mat_card_0_div_19_div_1_Template, 3, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, PostComponent_mat_card_0_div_19_div_2_Template, 17, 12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r7.postResponse.post.sharedPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.postResponse.post.sharedPost);
} }
function PostComponent_mat_card_0_mat_chip_30_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-chip", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PostComponent_mat_card_0_mat_chip_30_Template_mat_chip_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r20.openShareDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Shares ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r8.postResponse.post.shareCount, " ");
} }
function PostComponent_mat_card_0_button_35_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PostComponent_mat_card_0_button_35_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r22.openShareConfirmDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} }
function PostComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-card", 1)(1, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-card-title")(4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-card-subtitle")(7, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "watch_later");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, PostComponent_mat_card_0_div_12_Template, 14, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, PostComponent_mat_card_0_img_13_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "mat-card-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, PostComponent_mat_card_0_p_15_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, PostComponent_mat_card_0_p_16_Template, 3, 5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, PostComponent_mat_card_0_a_17_Template, 2, 1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, PostComponent_mat_card_0_div_18_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, PostComponent_mat_card_0_div_19_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "mat-chip-list")(22, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PostComponent_mat_card_0_Template_mat_chip_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r24.openLikeDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, " Likes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "mat-chip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PostComponent_mat_card_0_Template_mat_chip_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r26.openCommentDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, PostComponent_mat_card_0_mat_chip_30_Template, 4, 1, "mat-chip", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "mat-card-actions", 17)(32, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PostComponent_mat_card_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r27.likeOrUnlikePost(ctx_r27.postResponse.likedByAuthUser); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, PostComponent_mat_card_0_button_35_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r0.postResponse.post.author.profilePhoto ? ctx_r0.postResponse.post.author.profilePhoto : ctx_r0.defaultProfilePhotoUrl, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("href", "/users/", ctx_r0.postResponse.post.author.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r0.postResponse.post.author.firstName + " " + ctx_r0.postResponse.post.author.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](11, 19, ctx_r0.postResponse.post.dateCreated, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.postResponse.post.author.id === ctx_r0.authUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.postResponse.post.postPhoto);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isDetailedPost && ctx_r0.postResponse.post.content.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.isDetailedPost && ctx_r0.postResponse.post.content.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.isDetailedPost && ctx_r0.postResponse.post.content.length > 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.postResponse.post.postTags.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.postResponse.post.isTypeShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r0.postResponse.post.likeCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r0.postResponse.post.commentCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.postResponse.post.isTypeShare);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("matTooltip", ctx_r0.postResponse.likedByAuthUser ? "Unlike" : "Like");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", ctx_r0.postResponse.likedByAuthUser ? "text-danger" : "text-secondary");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r0.postResponse.post.isTypeShare || ctx_r0.postResponse.post.sharedPost);
} }
class PostComponent {
    constructor(matDialog, matSnackbar, authService, postService) {
        this.matDialog = matDialog;
        this.matSnackbar = matSnackbar;
        this.authService = authService;
        this.postService = postService;
        this.postDeletedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.defaultProfilePhotoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultProfilePhotoUrl;
        this.subscriptions = [];
    }
    ngOnInit() {
        this.authUserId = this.authService.getAuthUserId();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    openLikeDialog() {
        this.matDialog.open(_post_like_dialog_post_like_dialog_component__WEBPACK_IMPORTED_MODULE_5__.PostLikeDialogComponent, {
            data: this.postResponse.post,
            minWidth: '400px',
            maxWidth: '700px'
        });
    }
    openCommentDialog() {
        const dialogRef = this.matDialog.open(_post_comment_dialog_post_comment_dialog_component__WEBPACK_IMPORTED_MODULE_3__.PostCommentDialogComponent, {
            data: this.postResponse.post,
            autoFocus: false,
            minWidth: '500px',
            maxWidth: '700px'
        });
        dialogRef.componentInstance.updatedCommentCountEvent.subscribe(data => this.postResponse.post.commentCount = data);
    }
    openShareDialog() {
        const dialogRef = this.matDialog.open(_post_share_dialog_post_share_dialog_component__WEBPACK_IMPORTED_MODULE_6__.PostShareDialogComponent, {
            data: this.postResponse.post,
            autoFocus: false,
            minWidth: '500px',
            maxWidth: '700px'
        });
    }
    openShareConfirmDialog() {
        this.matDialog.open(_share_confirm_dialog_share_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ShareConfirmDialogComponent, {
            data: this.postResponse.post,
            autoFocus: false,
            minWidth: '500px',
            maxWidth: '700px'
        });
    }
    openPostEditDialog() {
        const dialogRef = this.matDialog.open(_post_dialog_post_dialog_component__WEBPACK_IMPORTED_MODULE_4__.PostDialogComponent, {
            data: this.postResponse.post,
            autoFocus: false,
            minWidth: '500px',
            maxWidth: '900px'
        });
    }
    openPostDeleteConfirmDialog() {
        const dialogRef = this.matDialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
            data: 'Do you want to delete this post permanently?',
            autoFocus: false,
            width: '500px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result)
                this.deletePost(this.postResponse.post.id, this.postResponse.post.isTypeShare);
        });
    }
    deletePost(postId, isTypeShare) {
        const dialogRef = this.matDialog.open(_waiting_dialog_waiting_dialog_component__WEBPACK_IMPORTED_MODULE_9__.WaitingDialogComponent, {
            data: 'Please, wait while we are deleting the post.',
            width: '500px',
            disableClose: true
        });
        this.subscriptions.push(this.postService.deletePost(postId, isTypeShare).subscribe({
            next: (response) => {
                this.postDeletedEvent.emit(this.postResponse);
                dialogRef.close();
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__.SnackbarComponent, {
                    data: 'Post deleted successfully.',
                    panelClass: ['bg-success'],
                    duration: 5000
                });
            },
            error: (errorResponse) => {
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__.SnackbarComponent, {
                    data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                    panelClass: ['bg-danger'],
                    duration: 5000
                });
                dialogRef.close();
            }
        }));
    }
    likeOrUnlikePost(likedByAuthUser) {
        if (likedByAuthUser) {
            this.subscriptions.push(this.postService.unlikePost(this.postResponse.post.id).subscribe({
                next: (response) => {
                    this.postResponse.likedByAuthUser = false;
                    this.postResponse.post.likeCount--;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                }
            }));
        }
        else {
            this.subscriptions.push(this.postService.likePost(this.postResponse.post.id).subscribe({
                next: (response) => {
                    this.postResponse.likedByAuthUser = true;
                    this.postResponse.post.likeCount++;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_8__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                }
            }));
        }
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_service_post_service__WEBPACK_IMPORTED_MODULE_11__.PostService)); };
PostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { postResponse: "postResponse", isDetailedPost: "isDetailedPost" }, outputs: { postDeletedEvent: "postDeletedEvent" }, decls: 1, vars: 1, consts: [["class", "position-relative mat-elevation-z3 mb-4", 4, "ngIf"], [1, "position-relative", "mat-elevation-z3", "mb-4"], ["mat-card-avatar", "", 1, "centered-bg-image"], [1, "text-decoration-none", "text-dark", 3, "href"], [1, "align-middle", "w-auto", "h-auto", 2, "font-size", "16px"], [1, "align-middle", "ps-1", "small", "fw-500"], ["align", "end", "style", "position: absolute; top: 10px; right: 10px", 4, "ngIf"], ["mat-card-image", "", "alt", "", 3, "src", 4, "ngIf"], [1, "mb-4"], ["class", "p-2", 4, "ngIf"], ["class", "text-decoration-none fw-500", 3, "href", 4, "ngIf"], [4, "ngIf"], ["class", "mt-3 p-3 border border-1 rounded", 4, "ngIf"], [1, "divider", "mb-4"], [1, "me-3", "cursor-pointer", 2, "padding", "4px 10px !important", "min-height", "28px", 3, "click"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-secondary"], ["class", "cursor-pointer", "style", "padding: 4px 10px !important; min-height: 28px;", 3, "click", 4, "ngIf"], ["align", "end", 2, "margin-top", "-50px !important", "padding-bottom", "20px"], ["mat-icon-button", "", 1, "me-2", 3, "matTooltip", "click"], [3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Share", 3, "click", 4, "ngIf"], ["align", "end", 2, "position", "absolute", "top", "10px", "right", "10px"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["coverPhotoMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-card-image", "", "alt", "", 3, "src"], [1, "p-2"], [1, "text-decoration-none", "fw-500", 3, "href"], ["class", "text-decoration-none d-inline-block ms-0 mt-2 me-2 mb-0", 3, "href", 4, "ngFor", "ngForOf"], [1, "text-decoration-none", "d-inline-block", "ms-0", "mt-2", "me-2", "mb-0", 3, "href"], [1, "mt-3", "p-3", "border", "border-1", "rounded"], [1, "badge", "rounded-pill", "bg-secondary"], [1, "rounded-circle", "d-inline-block", "align-middle", "centered-bg-image"], [1, "ps-5", 2, "margin-top", "-38px"], [1, "d-inline-block", "text-decoration-none", "text-dark", "align-middle", "fw-500", "cursor-pointer", 3, "href"], [1, "text-secondary", "d-inline-block"], ["class", "mt-3", "style", "max-width: 100%;", "mat-card-image", "", "alt", "", 3, "src", 4, "ngIf"], ["class", "pt-2", 4, "ngIf"], ["mat-card-image", "", "alt", "", 1, "mt-3", 2, "max-width", "100%", 3, "src"], [1, "pt-2"], [1, "cursor-pointer", 2, "padding", "4px 10px !important", "min-height", "28px", 3, "click"], ["mat-icon-button", "", "matTooltip", "Share", 3, "click"], [1, "text-secondary"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, PostComponent_mat_card_0_Template, 36, 22, "mat-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.postResponse);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardSubtitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuItem, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__.MatChip, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardActions, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 365:
/*!********************************************************!*\
  !*** ./src/app/component/profile/profile.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ 4440);
/* harmony import */ var _following_follower_list_dialog_following_follower_list_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../following-follower-list-dialog/following-follower-list-dialog.component */ 4374);
/* harmony import */ var _photo_upload_dialog_photo_upload_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../photo-upload-dialog/photo-upload-dialog.component */ 1885);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _view_photo_dialog_view_photo_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-photo-dialog/view-photo-dialog.component */ 5763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post/post.component */ 3219);




















function ProfileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileComponent_div_1_div_5_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r18.openPhotoUploadDialog($event, "coverPhoto"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 31)(2, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} }
function ProfileComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileComponent_div_1_div_10_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r20.openPhotoUploadDialog($event, "profilePhoto"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 31)(2, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} }
function ProfileComponent_div_1_div_21_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileComponent_div_1_div_21_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r24.openFollowConfirmDialog(ctx_r24.profileUser.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_1_div_21_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileComponent_div_1_div_21_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r26.openUnfollowConfirmDialog(ctx_r26.profileUser.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Unfollow");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileComponent_div_1_div_21_button_1_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProfileComponent_div_1_div_21_button_2_Template, 2, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r4.viewerFollowsProfileUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.viewerFollowsProfileUser);
} }
function ProfileComponent_div_1_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r5.profileUser.intro, " ");
} }
function ProfileComponent_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "mat-list-item")(2, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.profileUser.email);
} }
function ProfileComponent_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "mat-list-item")(3, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "work");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Works At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r7.profileUser.workplace);
} }
function ProfileComponent_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "mat-list-item")(2, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "school");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Studied At ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r8.profileUser.eduInstitution);
} }
function ProfileComponent_div_1_div_30_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-list-item")(1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r28.profileUser.hometown);
} }
function ProfileComponent_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileComponent_div_1_div_30_mat_list_item_1_Template, 7, 1, "mat-list-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.profileUser.hometown);
} }
function ProfileComponent_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "mat-list-item")(2, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "person_pin_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Lives In ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r10.profileUser.currentCity);
} }
function ProfileComponent_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "mat-list-item")(2, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "place");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Country ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r11.profileUser.country.name);
} }
function ProfileComponent_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "mat-list-item")(2, "mat-icon", 32)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r12.profileUser.gender);
} }
function ProfileComponent_div_1_app_post_36_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-post", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("postDeletedEvent", function ProfileComponent_div_1_app_post_36_Template_app_post_postDeletedEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r30.handlePostDeletedEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const postResponse_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("id", "profilePost" + postResponse_r29.post.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("postResponse", postResponse_r29)("isDetailedPost", false);
} }
function ProfileComponent_div_1_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileComponent_div_1_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r32.loadProfilePosts(ctx_r32.resultPage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_1_mat_spinner_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-spinner", 43);
} }
function ProfileComponent_div_1_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_1_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "No More Posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function ProfileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileComponent_div_1_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r34.openViewPhotoDialog(ctx_r34.profileUser.coverPhoto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ProfileComponent_div_1_div_5_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 10)(9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileComponent_div_1_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r36.openViewPhotoDialog(ctx_r36.profileUser.profilePhoto); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ProfileComponent_div_1_div_10_Template, 4, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 13)(12, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "p")(15, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileComponent_div_1_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r37.openFollowingDialog(ctx_r37.profileUser); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProfileComponent_div_1_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r38.openFollowerDialog(ctx_r38.profileUser); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, ProfileComponent_div_1_div_21_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "div", 18)(23, "div", 19)(24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](25, ProfileComponent_div_1_p_25_Template, 2, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, ProfileComponent_div_1_div_27_Template, 8, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, ProfileComponent_div_1_div_28_Template, 10, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](29, ProfileComponent_div_1_div_29_Template, 9, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](30, ProfileComponent_div_1_div_30_Template, 3, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, ProfileComponent_div_1_div_31_Template, 9, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, ProfileComponent_div_1_div_32_Template, 9, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, ProfileComponent_div_1_div_33_Template, 9, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 23)(35, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, ProfileComponent_div_1_app_post_36_Template, 1, 3, "app-post", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, ProfileComponent_div_1_button_38_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](39, ProfileComponent_div_1_mat_spinner_39_Template, 1, 0, "mat-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, ProfileComponent_div_1_span_40_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, ProfileComponent_div_1_span_41_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMapInterpolate1"]("height: 300px; background-image: url('", ctx_r1.profileUser.coverPhoto, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isProfileViewerOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleMapInterpolate1"]("margin-top: -100px; height: 180px; width: 180px; background-color: white; background-image: url('", ctx_r1.profileUser.profilePhoto, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.isProfileViewerOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.profileUser.firstName + " " + ctx_r1.profileUser.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.profileUser.followingCount, " Following ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.profileUser.followerCount, " Follower ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.isProfileViewerOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.profileUser.intro);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.profileUser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.profileUser.workplace);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.profileUser.eduInstitution);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.profileUser.hometown);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.profileUser.currentCity);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.profileUser.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.profileUser.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.profileUserPostResponses);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.hasMoreResult && !ctx_r1.fetchingResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.fetchingResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.hasNoPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.hasMoreResult && !ctx_r1.hasNoPost);
} }
class ProfileComponent {
    constructor(userService, authService, router, activatedRoute, matDialog, matSnackbar) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.matDialog = matDialog;
        this.matSnackbar = matSnackbar;
        this.profileUserPostResponses = [];
        this.isProfileViewerOwner = false;
        this.viewerFollowsProfileUser = false;
        this.resultPage = 1;
        this.resultSize = 5;
        this.hasMoreResult = true;
        this.fetchingResult = false;
        this.loadingProfile = false;
        this.hasNoPost = false;
        this.subscriptions = [];
    }
    ngOnInit() {
        if (!this.authService.isUserLoggedIn()) {
            this.router.navigateByUrl('/login');
        }
        else {
            this.loadingProfile = true;
            this.authUser = this.authService.getAuthUserFromCache();
            if (this.activatedRoute.snapshot.paramMap.get('userId') === null) {
                this.isProfileViewerOwner = true;
                this.profileUserId = this.authService.getAuthUserId();
            }
            else {
                this.profileUserId = Number(this.activatedRoute.snapshot.paramMap.get('userId'));
            }
            this.subscriptions.push(this.userService.getUserById(this.profileUserId).subscribe({
                next: (foundUserResponse) => {
                    const foundUser = foundUserResponse.user;
                    if (foundUser.id === this.authUser.id) {
                        this.router.navigateByUrl('/profile');
                    }
                    this.viewerFollowsProfileUser = foundUserResponse.followedByAuthUser;
                    if (!foundUser.profilePhoto) {
                        foundUser.profilePhoto = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultProfilePhotoUrl;
                    }
                    if (!foundUser.coverPhoto) {
                        foundUser.coverPhoto = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultCoverPhotoUrl;
                    }
                    this.profileUser = foundUser;
                    this.loadProfilePosts(1);
                    this.loadingProfile = false;
                },
                error: (errorResponse) => {
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageTypeLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.errorLabel);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageHeaderLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.notFoundErrorHeader);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageDetailLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.notFoundErrorDetail);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toLoginLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.falseLabel);
                    this.loadingProfile = false;
                    this.router.navigateByUrl('/message');
                }
            }));
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    stopPropagation(e) {
        e.stopPropagation();
    }
    loadProfilePosts(currentPage) {
        if (!this.fetchingResult) {
            this.fetchingResult = true;
            this.subscriptions.push(this.userService.getUserPosts(this.profileUserId, currentPage, this.resultSize).subscribe({
                next: (postResponses) => {
                    postResponses.forEach(post => this.profileUserPostResponses.push(post));
                    if (postResponses.length <= 0 && this.resultPage === 1)
                        this.hasNoPost = true;
                    if (postResponses.length <= 0)
                        this.hasMoreResult = false;
                    this.fetchingResult = false;
                    this.resultPage++;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                }
            }));
        }
    }
    openFollowingDialog(user) {
        this.matDialog.open(_following_follower_list_dialog_following_follower_list_dialog_component__WEBPACK_IMPORTED_MODULE_3__.FollowingFollowerListDialogComponent, {
            data: {
                user,
                type: 'following'
            },
            autoFocus: false,
            minWidth: '400px',
            maxWidth: '500px'
        });
    }
    openFollowerDialog(user) {
        this.matDialog.open(_following_follower_list_dialog_following_follower_list_dialog_component__WEBPACK_IMPORTED_MODULE_3__.FollowingFollowerListDialogComponent, {
            data: {
                user,
                type: 'follower'
            },
            autoFocus: false,
            minWidth: '400px',
            maxWidth: '500px'
        });
    }
    openViewPhotoDialog(photoUrl) {
        this.matDialog.open(_view_photo_dialog_view_photo_dialog_component__WEBPACK_IMPORTED_MODULE_6__.ViewPhotoDialogComponent, {
            data: photoUrl,
            autoFocus: false,
            maxWidth: '1200px'
        });
    }
    openFollowConfirmDialog(userId) {
        const dialogRef = this.matDialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
            data: `Do you want to follow ${this.profileUser.firstName + ' ' + this.profileUser.lastName}?`,
            autoFocus: false,
            maxWidth: '500px'
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.subscriptions.push(this.userService.followUser(userId).subscribe({
                    next: (response) => {
                        this.viewerFollowsProfileUser = true;
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__.SnackbarComponent, {
                            data: `You are following ${this.profileUser.firstName + ' ' + this.profileUser.lastName}.`,
                            duration: 5000
                        });
                    },
                    error: (errorResponse) => {
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: ['bg-danger'],
                            duration: 5000
                        });
                    }
                }));
            }
        });
    }
    openUnfollowConfirmDialog(userId) {
        const dialogRef = this.matDialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
            data: `Do you want to stop following ${this.profileUser.firstName + ' ' + this.profileUser.lastName}?`,
            autoFocus: false,
            maxWidth: '500px'
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.subscriptions.push(this.userService.unfollowUser(userId).subscribe({
                    next: (response) => {
                        this.viewerFollowsProfileUser = false;
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__.SnackbarComponent, {
                            data: `You no longer follow ${this.profileUser.firstName + ' ' + this.profileUser.lastName}.`,
                            duration: 5000
                        });
                    },
                    error: (errorResponse) => {
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_5__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: ['bg-danger'],
                            duration: 5000
                        });
                    }
                }));
            }
        });
    }
    openPhotoUploadDialog(e, uploadType) {
        e.stopPropagation();
        let header;
        if (uploadType === 'profilePhoto') {
            header = 'Upload Profile Photo';
        }
        else if (uploadType === 'coverPhoto') {
            header = 'Upload Cover Photo';
        }
        const dialogRef = this.matDialog.open(_photo_upload_dialog_photo_upload_dialog_component__WEBPACK_IMPORTED_MODULE_4__.PhotoUploadDialogComponent, {
            data: { authUser: this.authUser, uploadType, header },
            autoFocus: false,
            minWidth: '300px',
            maxWidth: '900px',
            maxHeight: '500px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (uploadType === 'profilePhoto') {
                    this.profileUser.profilePhoto = result.updatedUser.profilePhoto;
                }
                else if (uploadType === 'coverPhoto') {
                    this.profileUser.coverPhoto = result.updatedUser.coverPhoto;
                }
            }
        });
    }
    handlePostDeletedEvent(postResponse) {
        document.getElementById(`profilePost${postResponse.post.id}`).remove();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 2, consts: [["class", "text-center fully-centered", 4, "ngIf"], ["class", "profile-header", "style", "margin-top: 64px", 4, "ngIf"], [1, "text-center", "fully-centered"], [1, "text-center", "ms-auto", "me-auto", 2, "zoom", "0.5"], [1, "profile-header", 2, "margin-top", "64px"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-10"], [1, "profile-cover-photo", "centered-bg-image", "mat-elevation-z5", "cursor-pointer", 3, "click"], ["align", "end", "class", "float-end", "style", "margin-top: 10px; margin-right: 10px", 3, "click", 4, "ngIf"], [1, "bg-white", "position-relative", "p-5", "mat-elevation-z3", "rounded-bottom"], [1, "profile-picture", "centered-bg-image", "d-inline-block", "border", "border-5", "border-white", "rounded-3", "cursor-pointer", "mat-elevation-z3", "p-0", 3, "click"], ["align", "end", "class", "float-end", "style", "margin-top: -20px; margin-right: -20px", 3, "click", 4, "ngIf"], [1, "profile-info", "d-inline-block", "align-top", "ps-3", 2, "margin-top", "-30px"], [1, "mat-display-1", "mb-3", 2, "font-weight", "500"], [1, "text-decoration-none", "text-secondary", "mat-h3", "cursor-pointer", 2, "font-weight", "500", 3, "click"], [1, "ps-2", "pe-2", "mat-h3", "fw-bold"], ["style", "position: absolute; right: 30px; top: 30px;", 4, "ngIf"], [1, "row", "justify-content-center", "mt-5"], [1, "col-4"], [1, "profile-sidebar", "position-sticky", "bg-white", "rounded", "mat-elevation-z3", "p-3", "mb-5", 2, "top", "64px"], ["class", "text-center ps-2 pt-3 pe-2 pb-0", 4, "ngIf"], [4, "ngIf"], [1, "col-6", "mb-4"], [1, "profile-posts"], [3, "id", "postResponse", "isDetailedPost", "postDeletedEvent", 4, "ngFor", "ngForOf"], [1, "text-center", "mt-3"], ["mat-raised-button", "", "color", "primary", "class", "mat-btn-lg rounded-pill", 3, "click", 4, "ngIf"], ["style", "transform: scale(0.3);", "class", "text-center ms-auto me-auto", 4, "ngIf"], ["class", "fw-500", 4, "ngIf"], ["align", "end", 1, "float-end", 2, "margin-top", "10px", "margin-right", "10px", 3, "click"], ["mat-mini-fab", "", "color", "basic"], [1, "text-secondary"], ["align", "end", 1, "float-end", 2, "margin-top", "-20px", "margin-right", "-20px", 3, "click"], [2, "position", "absolute", "right", "30px", "top", "30px"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"], [1, "text-center", "ps-2", "pt-3", "pe-2", "pb-0"], [1, "fw-500", "ps-3", "small"], [3, "id", "postResponse", "isDetailedPost", "postDeletedEvent"], ["mat-raised-button", "", "color", "primary", 1, "mat-btn-lg", "rounded-pill", 3, "click"], [1, "text-center", "ms-auto", "me-auto", 2, "transform", "scale(0.3)"], [1, "fw-500"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProfileComponent_div_1_Template, 42, 25, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loadingProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loadingProfile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _post_post_component__WEBPACK_IMPORTED_MODULE_9__.PostComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5535:
/*!**********************************************************************!*\
  !*** ./src/app/component/reset-password/reset-password.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_app_common_repeat_password_matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/repeat-password-matcher */ 6086);
/* harmony import */ var src_app_model_reset_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/reset-password */ 959);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);

















function ResetPasswordComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ResetPasswordComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password must be 6 to 32 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password has to be alpha numeric and must include uppercase, lowercase, and special characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password Repeat is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function ResetPasswordComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password did not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_card_footer_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-progress-bar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ResetPasswordComponent {
    constructor(userService, router, formBuilder, matSnackbar, activatedRoute, matDialog) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.matSnackbar = matSnackbar;
        this.activatedRoute = activatedRoute;
        this.matDialog = matDialog;
        this.fetchingResult = false;
        this.repeatPasswordMatcher = new src_app_common_repeat_password_matcher__WEBPACK_IMPORTED_MODULE_1__.RepeatPasswordMatcher();
        this.subscriptions = [];
        this.matchPasswords = (group) => {
            const password = group.get('password').value;
            const passwordRepeat = group.get('passwordRepeat').value;
            return password === passwordRepeat ? null : { passwordMissMatch: true };
        };
    }
    get password() { return this.resetPasswordFormGroup.get('password'); }
    get passwordRepeat() { return this.resetPasswordFormGroup.get('passwordRepeat'); }
    ngOnInit() {
        this.token = this.activatedRoute.snapshot.paramMap.get('token');
        this.resetPasswordFormGroup = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(32)]),
            passwordRepeat: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
        }, { validators: this.matchPasswords });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    resetPassword() {
        var _a, _b;
        if (this.resetPasswordFormGroup.valid) {
            if (!this.fetchingResult) {
                this.fetchingResult = true;
                const resetPassword = new src_app_model_reset_password__WEBPACK_IMPORTED_MODULE_2__.ResetPassword();
                resetPassword.password = (_a = this.password) === null || _a === void 0 ? void 0 : _a.value;
                resetPassword.passwordRepeat = (_b = this.passwordRepeat) === null || _b === void 0 ? void 0 : _b.value;
                this.subscriptions.push(this.userService.resetPassword(this.token, resetPassword).subscribe({
                    next: (result) => {
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                            data: 'Your password has been changed successfully.',
                            duration: 5000
                        });
                        this.fetchingResult = false;
                        this.router.navigateByUrl('/login');
                    },
                    error: (errorResponse) => {
                        this.fetchingResult = false;
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: ['bg-danger'],
                            duration: 5000
                        });
                    }
                }));
            }
        }
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 23, vars: 8, consts: [[1, "mt-100", "me-auto", "ms-auto", "pb-5", 2, "width", "500px"], [1, "mat-elevation-z3"], [1, "text-center", "ps-3", "pt-5", "pe-3"], [1, "p-4"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-100", "pb-2"], ["type", "password", "matInput", "", "formControlName", "password", "placeholder", "*************"], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "passwordRepeat", "placeholder", "*************", 3, "errorStateMatcher"], ["align", "end", 2, "padding-right", "8px"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mode", "indeterminate"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Get A New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content", 3)(5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_5_listener() { return ctx.resetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 5)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ResetPasswordComponent_mat_error_10_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ResetPasswordComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ResetPasswordComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 5)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Repeat Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ResetPasswordComponent_mat_error_17_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ResetPasswordComponent_mat_error_18_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-card-actions", 9)(20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ResetPasswordComponent_mat_card_footer_22_Template, 2, 0, "mat-card-footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.resetPasswordFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.password.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.password.hasError("minlength", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.password.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("errorStateMatcher", ctx.repeatPasswordMatcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passwordRepeat.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.resetPasswordFormGroup.hasError("passwordMissMatch") || ctx.passwordRepeat.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fetchingResult);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardFooter, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__.MatProgressBar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8471:
/*!********************************************************************!*\
  !*** ./src/app/component/search-dialog/search-dialog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchDialogComponent": () => (/* binding */ SearchDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../confirmation-dialog/confirmation-dialog.component */ 4440);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
















function SearchDialogComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Must be 3 to 64 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SearchDialogComponent_div_13_li_2_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchDialogComponent_div_13_li_2_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const userResponse_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r10.openFollowConfirmDialog(userResponse_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SearchDialogComponent_div_13_li_2_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchDialogComponent_div_13_li_2_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const userResponse_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r13.openUnfollowConfirmDialog(userResponse_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Unfollow");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SearchDialogComponent_div_13_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SearchDialogComponent_div_13_li_2_button_4_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SearchDialogComponent_div_13_li_2_button_5_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userResponse_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMapInterpolate1"]("width: 35px; height: 35px; background-image: url('", userResponse_r7.user.profilePhoto ? userResponse_r7.user.profilePhoto : ctx_r4.defaultProfilePhotoUrl, "');");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "/users/", userResponse_r7.user.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](userResponse_r7.user.firstName + " " + userResponse_r7.user.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !userResponse_r7.followedByAuthUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", userResponse_r7.followedByAuthUser);
} }
function SearchDialogComponent_div_13_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 21);
} }
function SearchDialogComponent_div_13_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchDialogComponent_div_13_div_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r18.searchUser(ctx_r18.resultPage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SearchDialogComponent_div_13_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SearchDialogComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SearchDialogComponent_div_13_div_4_button_1_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SearchDialogComponent_div_13_div_4_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.hasMoreResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.fetchingResult && ctx_r6.resultPage > 1);
} }
function SearchDialogComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SearchDialogComponent_div_13_li_2_Template, 6, 7, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SearchDialogComponent_div_13_span_3_Template, 1, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SearchDialogComponent_div_13_div_4_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.searchResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.searchResult.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.hasMoreResult);
} }
function SearchDialogComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No user found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SearchDialogComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class SearchDialogComponent {
    constructor(userService, formBuilder, matSnackbar, matDialog, router) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.matSnackbar = matSnackbar;
        this.matDialog = matDialog;
        this.router = router;
        this.searchResult = [];
        this.resultPage = 1;
        this.resultSize = 5;
        this.hasMoreResult = false;
        this.noResult = false;
        this.fetchingResult = false;
        this.defaultProfilePhotoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultProfilePhotoUrl;
        this.subscriptions = [];
    }
    get key() { return this.searchUserFormGroup.get('key'); }
    ngOnInit() {
        this.searchUserFormGroup = this.formBuilder.group({
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(64)])
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    searchUser(currentPage) {
        if (!this.fetchingResult) {
            if (this.key.value.length >= 3) {
                this.fetchingResult = true;
                if (currentPage === 1)
                    this.searchResult = [];
                this.subscriptions.push(this.userService.getUserSearchResult(this.key.value, currentPage, this.resultSize).subscribe({
                    next: (resultList) => {
                        if (resultList.length <= 0 && currentPage === 1) {
                            this.noResult = true;
                        }
                        else {
                            this.noResult = false;
                        }
                        resultList.forEach(uR => this.searchResult.push(uR));
                        this.resultPage++;
                        this.fetchingResult = false;
                        if (resultList.length < this.resultSize) {
                            this.hasMoreResult = false;
                            this.resultPage = 1;
                        }
                        else {
                            this.hasMoreResult = true;
                        }
                    },
                    error: (errorResponse) => {
                        this.fetchingResult = false;
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: ['bg-danger'],
                            duration: 5000
                        });
                    }
                }));
            }
            else {
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                    data: 'Search key must be between 3 to 64 characters long.',
                    panelClass: ['bg-danger'],
                    duration: 5000
                });
            }
        }
    }
    openFollowConfirmDialog(userResponse) {
        const dialogRef = this.matDialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
            data: `Do you want to follow this ${userResponse.user.firstName + ' ' + userResponse.user.lastName}?`,
            autoFocus: false,
            maxWidth: '500px'
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.subscriptions.push(this.userService.followUser(userResponse.user.id).subscribe({
                    next: (response) => {
                        const targetResult = this.searchResult.find(uR => uR === userResponse);
                        targetResult.followedByAuthUser = true;
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                            data: `You are now following ${userResponse.user.firstName + ' ' + userResponse.user.lastName}.`,
                            duration: 5000
                        });
                    },
                    error: (errorResponse) => {
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: 'bg-danger',
                            duration: 5000
                        });
                    }
                }));
            }
        });
    }
    openUnfollowConfirmDialog(userResponse) {
        const dialogRef = this.matDialog.open(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmationDialogComponent, {
            data: `Do you want to stop following ${userResponse.user.firstName + ' ' + userResponse.user.lastName}?`,
            autoFocus: false,
            maxWidth: '500px'
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.subscriptions.push(this.userService.unfollowUser(userResponse.user.id).subscribe({
                    next: (response) => {
                        const targetResult = this.searchResult.find(uR => uR === userResponse);
                        targetResult.followedByAuthUser = false;
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                            data: `You no longer follow ${userResponse.user.firstName + ' ' + userResponse.user.lastName}.`,
                            duration: 5000
                        });
                    },
                    error: (errorResponse) => {
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: 'bg-danger',
                            duration: 5000
                        });
                    }
                }));
            }
        });
    }
}
SearchDialogComponent.ɵfac = function SearchDialogComponent_Factory(t) { return new (t || SearchDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
SearchDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SearchDialogComponent, selectors: [["app-search-dialog"]], decls: 16, vars: 5, consts: [[1, "position-relative"], [1, "mat-h2", "m-0"], [1, "divider"], ["autocomplete", "off", 1, "position-relative", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-100", 2, "padding-right", "90px"], ["matInput", "", "formControlName", "key", "placeholder", "Who do you want to find?"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "position-absolute", 2, "top", "4px", "right", "0"], ["class", "text-center", 4, "ngIf"], ["class", "position-absolute", "style", "transform: scale(0.3); top: -35px; right: -35px;", 4, "ngIf"], [1, "list-group", "list-group-flush"], ["class", "list-group-item ps-0 pt-2 pe-0 pb-2 border border-1 border-start-0 border-bottom-0 border-end-0", 4, "ngFor", "ngForOf"], ["class", "d-block border border-1 border-start-0 border-top-0 border-end-0", 4, "ngIf"], ["class", "mt-3 mb-3", 4, "ngIf"], [1, "list-group-item", "ps-0", "pt-2", "pe-0", "pb-2", "border", "border-1", "border-start-0", "border-bottom-0", "border-end-0"], [1, "rounded-circle", "d-inline-block", "align-middle", "centered-bg-image"], [1, "d-inline-block", "text-decoration-none", "text-dark", "align-middle", "ps-2", "fw-500", "cursor-pointer", 3, "href"], ["mat-stroked-button", "", "color", "primary", "class", "float-end rounded-pill", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "warn", "class", "float-end rounded-pill", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 1, "float-end", "rounded-pill", 3, "click"], ["mat-stroked-button", "", "color", "warn", 1, "float-end", "rounded-pill", 3, "click"], [1, "d-block", "border", "border-1", "border-start-0", "border-top-0", "border-end-0"], [1, "mt-3", "mb-3"], ["mat-raised-button", "", "color", "primary", "class", "rounded-pill align-middle", 3, "click", 4, "ngIf"], ["class", "d-inline-block float-end", "style", "transform: scale(0.3); margin-top: -33px;", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "rounded-pill", "align-middle", 3, "click"], [1, "d-inline-block", "float-end", 2, "transform", "scale(0.3)", "margin-top", "-33px"], [2, "margin", "0 auto"], [1, "text-center"], [1, "position-absolute", 2, "transform", "scale(0.3)", "top", "-35px", "right", "-35px"]], template: function SearchDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-dialog-content")(1, "div", 0)(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Find Someone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function SearchDialogComponent_Template_form_ngSubmit_5_listener() { return ctx.searchUser(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Who do you want to find?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SearchDialogComponent_mat_error_10_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, SearchDialogComponent_div_13_Template, 5, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SearchDialogComponent_div_14_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, SearchDialogComponent_div_15_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.searchUserFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.key.hasError("minlength") || ctx.key.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.noResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.noResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.fetchingResult && ctx.resultPage === 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9117:
/*!**********************************************************!*\
  !*** ./src/app/component/settings/settings.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_app_model_update_user_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/update-user-info */ 3345);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var src_app_common_repeat_password_matcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/repeat-password-matcher */ 6086);
/* harmony import */ var src_app_model_update_user_email__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/update-user-email */ 3571);
/* harmony import */ var src_app_model_update_user_password__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/update-user-password */ 4073);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var src_app_service_country_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/country.service */ 7173);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/text-field */ 1307);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);



























function SettingsComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Cannot exceed 100 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " This field is required and cannot exceed 64 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " This field is required and cannot exceed 64 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Cannot exceed 128 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Cannot exceed 128 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Cannot exceed 128 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Cannot exceed 128 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Enter a valid birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", country_r28.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", country_r28.name, " ");
} }
function SettingsComponent_mat_error_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Enter a valid country name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Enter a valid gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_progress_bar_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-progress-bar", 38);
} }
function SettingsComponent_mat_error_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " This field is required and cannot exceed 64 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SettingsComponent_mat_error_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password must be 6 to 32 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password has to be alpha numeric and must include uppercase, lowercase, and special characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_progress_bar_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-progress-bar", 38);
} }
function SettingsComponent_mat_error_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SettingsComponent_mat_error_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password must be 6 to 32 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password has to be alpha numeric and must include uppercase, lowercase, and special characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password Repeat is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SettingsComponent_mat_error_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password did not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} }
function SettingsComponent_mat_error_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password must be 6 to 32 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_error_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Password has to be alpha numeric and must include uppercase, lowercase, and special characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function SettingsComponent_mat_progress_bar_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "mat-progress-bar", 38);
} }
class SettingsComponent {
    constructor(authService, userService, countryService, formBuilder, matSnackbar, router) {
        this.authService = authService;
        this.userService = userService;
        this.countryService = countryService;
        this.formBuilder = formBuilder;
        this.matSnackbar = matSnackbar;
        this.router = router;
        this.submittingForm = false;
        this.countryList = [];
        this.repeatPasswordMatcher = new src_app_common_repeat_password_matcher__WEBPACK_IMPORTED_MODULE_3__.RepeatPasswordMatcher();
        this.subscriptions = [];
        this.matchPasswords = (group) => {
            const password = group.get('password').value;
            const passwordRepeat = group.get('passwordRepeat').value;
            return password === passwordRepeat ? null : { passwordMissMatch: true };
        };
    }
    get updateInfoFirstName() { return this.updateInfoFormGroup.get('firstName'); }
    get updateInfoLastName() { return this.updateInfoFormGroup.get('lastName'); }
    get updateInfoIntro() { return this.updateInfoFormGroup.get('intro'); }
    get updateInfoGender() { return this.updateInfoFormGroup.get('gender'); }
    get updateInfoHometown() { return this.updateInfoFormGroup.get('hometown'); }
    get updateInfoCurrentCity() { return this.updateInfoFormGroup.get('currentCity'); }
    get updateInfoEduInstitution() { return this.updateInfoFormGroup.get('eduInstitution'); }
    get updateInfoWorkplace() { return this.updateInfoFormGroup.get('workplace'); }
    get updateInfoCountryName() { return this.updateInfoFormGroup.get('countryName'); }
    get updateInfoBirthDate() { return this.updateInfoFormGroup.get('birthDate'); }
    get updateEmailNewEmail() { return this.updateEmailFormGroup.get('email'); }
    get updateEmailPassword() { return this.updateEmailFormGroup.get('password'); }
    get updatePasswordNewPassword() { return this.updatePasswordFormGroup.get('password'); }
    get updatePasswordPasswordRepeat() { return this.updatePasswordFormGroup.get('passwordRepeat'); }
    get updatePasswordOldPassword() { return this.updatePasswordFormGroup.get('oldPassword'); }
    ngOnInit() {
        if (!this.authService.isUserLoggedIn()) {
            this.router.navigateByUrl('/login');
        }
        else {
            this.authUser = this.authService.getAuthUserFromCache();
            this.countryService.getCountryList().subscribe({
                next: (countryList) => {
                    this.countryList = countryList;
                },
                error: (errorResponse) => { }
            });
            this.updateInfoFormGroup = this.formBuilder.group({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.authUser.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(64)]),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.authUser.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(64)]),
                intro: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.authUser.intro, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(100)]),
                hometown: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.authUser.hometown, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(128)]),
                currentCity: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.authUser.currentCity, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(128)]),
                eduInstitution: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.authUser.eduInstitution, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(128)]),
                workplace: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.authUser.workplace, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(128)]),
                gender: [this.authUser.gender],
                countryName: [this.authUser.country ? this.authUser.country.name : null],
                birthDate: [this.authUser.birthDate]
            });
            this.updateEmailFormGroup = this.formBuilder.group({
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.authUser.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(64)]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(32)])
            });
            this.updatePasswordFormGroup = this.formBuilder.group({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(32)]),
                passwordRepeat: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(32)]),
                oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(32)])
            }, { validators: this.matchPasswords });
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    handleUpdateInfo() {
        this.submittingForm = true;
        const updateUserInfo = new src_app_model_update_user_info__WEBPACK_IMPORTED_MODULE_1__.UpdateUserInfo();
        updateUserInfo.firstName = this.updateInfoFirstName.value;
        updateUserInfo.lastName = this.updateInfoLastName.value;
        updateUserInfo.intro = this.updateInfoIntro.value;
        updateUserInfo.gender = this.updateInfoGender.value;
        updateUserInfo.hometown = this.updateInfoHometown.value;
        updateUserInfo.currentCity = this.updateInfoCurrentCity.value;
        updateUserInfo.eduInstitution = this.updateInfoEduInstitution.value;
        updateUserInfo.workplace = this.updateInfoWorkplace.value;
        updateUserInfo.countryName = this.updateInfoCountryName.value;
        updateUserInfo.birthDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.updateInfoBirthDate.value).format('YYYY-MM-DD HH:mm:ss').toString();
        this.subscriptions.push(this.userService.updateUserInfo(updateUserInfo).subscribe({
            next: (updatedUser) => {
                this.authService.storeAuthUserInCache(updatedUser);
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                    data: 'Your account has been updated successfully.',
                    panelClass: ['bg-success'],
                    duration: 5000
                });
                this.submittingForm = false;
                this.router.navigateByUrl('/profile');
            },
            error: (errorResponse) => {
                const validationErrors = errorResponse.error.validationErrors;
                if (validationErrors != null) {
                    Object.keys(validationErrors).forEach(key => {
                        const formControl = this.updateInfoFormGroup.get(key);
                        if (formControl) {
                            formControl.setErrors({
                                serverError: validationErrors[key]
                            });
                        }
                    });
                }
                else {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                }
                this.submittingForm = false;
            }
        }));
    }
    handleUpdateEmail() {
        this.submittingForm = true;
        const updateUserEmail = new src_app_model_update_user_email__WEBPACK_IMPORTED_MODULE_4__.UpdateUserEmail();
        updateUserEmail.email = this.updateEmailFormGroup.get('email').value;
        updateUserEmail.password = this.updateEmailFormGroup.get('password').value;
        this.subscriptions.push(this.userService.updateUserEmail(updateUserEmail).subscribe({
            next: (result) => {
                localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageTypeLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.successLabel);
                localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageHeaderLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.emailChangeSuccessHeader);
                localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageDetailLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.emailChangeSuccessDetail);
                localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toLoginLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.trueLabel);
                this.authService.logout();
                this.submittingForm = false;
                this.router.navigateByUrl('/message');
            },
            error: (errorResponse) => {
                const validationErrors = errorResponse.error.validationErrors;
                if (validationErrors != null) {
                    Object.keys(validationErrors).forEach(key => {
                        const formControl = this.updateInfoFormGroup.get(key);
                        if (formControl) {
                            formControl.setErrors({
                                serverError: validationErrors[key]
                            });
                        }
                    });
                }
                else {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                }
                this.submittingForm = false;
            }
        }));
    }
    handleUpdatePassword() {
        this.submittingForm = true;
        const updateUserPassword = new src_app_model_update_user_password__WEBPACK_IMPORTED_MODULE_5__.UpdateUserPassword();
        updateUserPassword.password = this.updatePasswordFormGroup.get('password').value;
        updateUserPassword.passwordRepeat = this.updatePasswordFormGroup.get('passwordRepeat').value;
        updateUserPassword.oldPassword = this.updatePasswordFormGroup.get('oldPassword').value;
        this.subscriptions.push(this.userService.updateUserPassword(updateUserPassword).subscribe({
            next: (result) => {
                localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageTypeLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.successLabel);
                localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageHeaderLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.passwordChangeSuccessHeader);
                localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageDetailLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.passwordChangeSuccessDetail);
                localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toLoginLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.trueLabel);
                this.authService.logout();
                this.submittingForm = false;
                this.router.navigateByUrl('/message');
            },
            error: (errorResponse) => {
                const validationErrors = errorResponse.error.validationErrors;
                if (validationErrors != null) {
                    Object.keys(validationErrors).forEach(key => {
                        const formControl = this.updateInfoFormGroup.get(key);
                        if (formControl) {
                            formControl.setErrors({
                                serverError: validationErrors[key]
                            });
                        }
                    });
                }
                else {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                }
                this.submittingForm = false;
            }
        }));
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_service_country_service__WEBPACK_IMPORTED_MODULE_9__.CountryService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router)); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 116, vars: 33, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-6", 2, "margin-top", "110px"], [1, "bg-white", "mat-elevation-z3", "rounded", "mb-5"], ["mat-stretch-tabs", "", "dynamicHeight", ""], ["label", "Update Info"], [1, "p-5"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-100", "pb-2"], ["matInput", "", "formControlName", "intro", "placeholder", "Say Something About You", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "2", "cdkAutosizeMaxRows", "5"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "firstName", "placeholder", "Ex. John"], ["type", "text", "matInput", "", "formControlName", "lastName", "placeholder", "Ex. Doe"], ["type", "text", "matInput", "", "formControlName", "hometown", "placeholder", "Ex. Dhaka"], ["type", "text", "matInput", "", "formControlName", "currentCity", "placeholder", "Ex. Dhaka"], ["type", "text", "matInput", "", "formControlName", "eduInstitution", "placeholder", "Ex. University of XYZ"], ["type", "text", "matInput", "", "formControlName", "workplace", "placeholder", "Ex. Software Engineer at ABC Inc."], ["appearance", "outline", 1, "d-block", "pb-2"], ["formControlName", "birthDate", "matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["birthDatePicker", ""], ["formControlName", "countryName"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "gender", 1, "d-block", "mb-2"], ["value", "Male", 1, "me-3"], ["value", "Female"], [1, "d-block", "mb-4", "pb-2"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mode", "indeterminate", 4, "ngIf"], ["label", "Update Email"], ["type", "text", "matInput", "", "formControlName", "email", "placeholder", "Ex. John"], ["type", "password", "matInput", "", "formControlName", "password", "placeholder", "*************"], ["label", "Update Password"], ["type", "password", "matInput", "", "formControlName", "passwordRepeat", "placeholder", "*************", 3, "errorStateMatcher"], ["appearance", "outline", 1, "w-100", "pb-3"], ["type", "password", "matInput", "", "formControlName", "oldPassword", "placeholder", "*************"], [3, "value"], ["mode", "indeterminate"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-tab-group", 4)(5, "mat-tab", 5)(6, "div", 6)(7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_7_listener() { return ctx.handleUpdateInfo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-form-field", 8)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Say Something About You");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "\t\t\t\t\t\t\t\t\t");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, SettingsComponent_mat_error_13_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, SettingsComponent_mat_error_18_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "mat-form-field", 8)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, SettingsComponent_mat_error_23_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Hometown");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, SettingsComponent_mat_error_28_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "mat-form-field", 8)(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Current City");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, SettingsComponent_mat_error_33_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "mat-form-field", 8)(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "College/University");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, SettingsComponent_mat_error_38_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "mat-form-field", 8)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Workplace");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, SettingsComponent_mat_error_43_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "mat-form-field", 17)(45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Select your birth date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "input", 18)(48, "mat-datepicker-toggle", 19)(49, "mat-datepicker", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](51, SettingsComponent_mat_error_51_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "mat-form-field", 17)(53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "Select your country");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](56, SettingsComponent_mat_option_56_Template, 2, 2, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, SettingsComponent_mat_error_57_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "mat-radio-group", 24)(59, "mat-radio-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "mat-radio-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](63, SettingsComponent_mat_error_63_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](64, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "mat-card-actions")(66, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "Save Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](68, SettingsComponent_mat_progress_bar_68_Template, 1, 0, "mat-progress-bar", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "mat-tab", 30)(70, "div", 6)(71, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_71_listener() { return ctx.handleUpdateEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "mat-form-field", 8)(73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, "New Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](75, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](76, SettingsComponent_mat_error_76_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](77, SettingsComponent_mat_error_77_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "mat-form-field", 8)(79, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](81, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](82, SettingsComponent_mat_error_82_Template, 4, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](83, SettingsComponent_mat_error_83_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](84, SettingsComponent_mat_error_84_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "mat-card-actions")(86, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](87, "Change Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](88, SettingsComponent_mat_progress_bar_88_Template, 1, 0, "mat-progress-bar", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "mat-tab", 33)(90, "div", 6)(91, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_91_listener() { return ctx.handleUpdatePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "mat-form-field", 8)(93, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](95, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](96, SettingsComponent_mat_error_96_Template, 4, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](97, SettingsComponent_mat_error_97_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](98, SettingsComponent_mat_error_98_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "mat-form-field", 8)(100, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101, "Repeat New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](102, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](103, SettingsComponent_mat_error_103_Template, 4, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](104, SettingsComponent_mat_error_104_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "mat-form-field", 35)(106, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](107, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](108, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](109, SettingsComponent_mat_error_109_Template, 4, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](110, SettingsComponent_mat_error_110_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](111, SettingsComponent_mat_error_111_Template, 2, 0, "mat-error", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "mat-card-actions")(113, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](114, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](115, SettingsComponent_mat_progress_bar_115_Template, 1, 0, "mat-progress-bar", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.updateInfoFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateInfoIntro.hasError("maxlength") || ctx.updateInfoIntro.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateInfoFirstName.hasError("required") || ctx.updateInfoFirstName.hasError("maxlength") || ctx.updateInfoFirstName.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateInfoLastName.hasError("required") || ctx.updateInfoLastName.hasError("maxlength") || ctx.updateInfoLastName.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateInfoHometown.hasError("maxlength") || ctx.updateInfoHometown.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateInfoCurrentCity.hasError("maxlength") || ctx.updateInfoCurrentCity.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateInfoEduInstitution.hasError("maxlength") || ctx.updateInfoEduInstitution.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateInfoWorkplace.hasError("maxlength") || ctx.updateInfoWorkplace.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("matDatepicker", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("for", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateInfoBirthDate.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateInfoCountryName.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateInfoGender.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.submittingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.updateEmailFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateEmailNewEmail.hasError("email") || ctx.updateEmailNewEmail.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updateEmailNewEmail.hasError("required") || ctx.updateEmailNewEmail.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updatePasswordNewPassword.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updatePasswordNewPassword.hasError("minlength", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updatePasswordNewPassword.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.submittingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.updatePasswordFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updatePasswordNewPassword.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updatePasswordNewPassword.hasError("minlength", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updatePasswordNewPassword.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("errorStateMatcher", ctx.repeatPasswordMatcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updatePasswordPasswordRepeat.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updatePasswordFormGroup.hasError("passwordMissMatch") || ctx.updatePasswordPasswordRepeat.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updatePasswordOldPassword.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updatePasswordOldPassword.hasError("minlength", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.updatePasswordOldPassword.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.submittingForm);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__.CdkTextareaAutosize, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepicker, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__.MatRadioButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__.MatProgressBar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5936:
/*!**********************************************************************************!*\
  !*** ./src/app/component/share-confirm-dialog/share-confirm-dialog.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShareConfirmDialogComponent": () => (/* binding */ ShareConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/post.service */ 2593);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var src_app_model_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/post */ 1414);

















function ShareConfirmDialogComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cannot exceed 4096 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ShareConfirmDialogComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ShareConfirmDialogComponent {
    constructor(dataPost, thisMatDialogRef, router, postService, formBuilder, matSnackbar) {
        this.dataPost = dataPost;
        this.thisMatDialogRef = thisMatDialogRef;
        this.router = router;
        this.postService = postService;
        this.formBuilder = formBuilder;
        this.matSnackbar = matSnackbar;
        this.creatingShare = false;
        this.defaultProfilePhotoUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultProfilePhotoUrl;
        this.subscriptions = [];
    }
    get content() { return this.shareFormGroup.get('content'); }
    ngOnInit() {
        this.shareFormGroup = this.formBuilder.group({
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(4096)])
        });
        this.targetPostId = this.dataPost.isTypeShare ? this.dataPost.sharedPost.id : this.dataPost.id;
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    createNewPostShare() {
        if (!this.creatingShare) {
            this.creatingShare = true;
            this.subscriptions.push(this.postService.createPostShare(this.targetPostId, this.content.value).subscribe({
                next: (newPostShare) => {
                    this.thisMatDialogRef.close();
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                        data: 'Post shared successfully.',
                        panelClass: ['bg-success'],
                        duration: 5000
                    });
                    this.creatingShare = false;
                    this.router.navigateByUrl(`/posts/${newPostShare.id}`);
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_2__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-error'],
                        duration: 5000
                    });
                    this.creatingShare = false;
                }
            }));
        }
    }
}
ShareConfirmDialogComponent.ɵfac = function ShareConfirmDialogComponent_Factory(t) { return new (t || ShareConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_post_service__WEBPACK_IMPORTED_MODULE_3__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar)); };
ShareConfirmDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ShareConfirmDialogComponent, selectors: [["app-share-confirm-dialog"]], decls: 14, vars: 3, consts: [[1, "position-relative"], [1, "mat-h2", "m-0"], [1, "divider"], [1, "position-relative", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-100", 2, "padding-right", "90px"], ["matInput", "", "formControlName", "content", "placeholder", "What do you want to say"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "position-absolute", 2, "top", "4px", "right", "0"], ["class", "position-absolute", "style", "transform: scale(0.3); top: -35px; right: -35px;", 4, "ngIf"], [1, "position-absolute", 2, "transform", "scale(0.3)", "top", "-35px", "right", "-35px"]], template: function ShareConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-dialog-content")(1, "div", 0)(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Share this post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ShareConfirmDialogComponent_Template_form_ngSubmit_5_listener() { return ctx.createNewPostShare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "What do you want to say");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ShareConfirmDialogComponent_mat_error_10_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ShareConfirmDialogComponent_div_13_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.shareFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.content.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.creatingShare);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZS1jb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 686:
/*!******************************************************!*\
  !*** ./src/app/component/signup/signup.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var src_app_common_repeat_password_matcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/repeat-password-matcher */ 6086);
/* harmony import */ var src_app_model_user_signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/user-signup */ 7318);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
















function SignupComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " First Name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function SignupComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Your first name must be within 64 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Last Name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function SignupComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Your last name must be within 64 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function SignupComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please, enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function SignupComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password must be 6 to 32 characters long ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password has to be alpha numeric and must include uppercase, lowercase, and special characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password Repeat is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function SignupComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Password did not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_card_footer_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-progress-bar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(authService, router, formBuilder, matSnackbar) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.matSnackbar = matSnackbar;
        this.repeatPasswordMatcher = new src_app_common_repeat_password_matcher__WEBPACK_IMPORTED_MODULE_1__.RepeatPasswordMatcher();
        this.submittingForm = false;
        this.subscriptions = [];
        this.matchPasswords = (group) => {
            const password = group.get('passwordGroup.password').value;
            const passwordRepeat = group.get('passwordGroup.passwordRepeat').value;
            return password === passwordRepeat ? null : { passwordMissMatch: true };
        };
    }
    ngOnInit() {
        if (this.authService.isUserLoggedIn()) {
            this.router.navigateByUrl('/profile');
        }
        this.signupFormGroup = this.formBuilder.group({
            infoGroup: this.formBuilder.group({
                firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(64)]),
                lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(64)]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(64)])
            }),
            passwordGroup: this.formBuilder.group({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(32)]),
                passwordRepeat: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
            })
        }, { validators: this.matchPasswords });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    get firstName() { return this.signupFormGroup.get('infoGroup.firstName'); }
    get lastName() { return this.signupFormGroup.get('infoGroup.lastName'); }
    get email() { return this.signupFormGroup.get('infoGroup.email'); }
    get password() { return this.signupFormGroup.get('passwordGroup.password'); }
    get passwordRepeat() { return this.signupFormGroup.get('passwordGroup.passwordRepeat'); }
    handleSignup() {
        var _a, _b, _c, _d, _e;
        if (this.signupFormGroup.valid) {
            this.submittingForm = true;
            const userSignup = new src_app_model_user_signup__WEBPACK_IMPORTED_MODULE_2__.UserSignup();
            userSignup.firstName = (_a = this.firstName) === null || _a === void 0 ? void 0 : _a.value;
            userSignup.lastName = (_b = this.lastName) === null || _b === void 0 ? void 0 : _b.value;
            userSignup.email = (_c = this.email) === null || _c === void 0 ? void 0 : _c.value;
            userSignup.password = (_d = this.password) === null || _d === void 0 ? void 0 : _d.value;
            userSignup.passwordRepeat = (_e = this.passwordRepeat) === null || _e === void 0 ? void 0 : _e.value;
            this.subscriptions.push(this.authService.signup(userSignup).subscribe({
                next: (response) => {
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageTypeLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.successLabel);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageHeaderLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.signupSuccessHeader);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageDetailLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.signupSuccessDetail);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.toLoginLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.trueLabel);
                    this.submittingForm = false;
                    this.router.navigateByUrl('/message');
                },
                error: (errorResponse) => {
                    const validationErrors = errorResponse.error.validationErrors;
                    if (validationErrors != null) {
                        Object.keys(validationErrors).forEach(key => {
                            let formGroup = 'infoGroup';
                            if (key === 'password' || key === 'passwordRepeat')
                                formGroup = 'passwordGroup';
                            const formControl = this.signupFormGroup.get(`${formGroup}.${key}`);
                            if (formControl) {
                                formControl.setErrors({
                                    serverError: validationErrors[key]
                                });
                            }
                        });
                    }
                    else {
                        this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_3__.SnackbarComponent, {
                            data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                            panelClass: ['bg-danger'],
                            duration: 5000
                        });
                    }
                    this.submittingForm = false;
                }
            }));
        }
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar)); };
SignupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 43, vars: 14, consts: [[1, "mt-100", "me-auto", "ms-auto", "pb-5", 2, "width", "500px"], [1, "mat-elevation-z3"], [1, "text-center", "ps-3", "pt-5", "pe-3"], [1, "p-4"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", "formGroupName", "infoGroup", 1, "w-100", "pb-2"], ["type", "text", "matInput", "", "formControlName", "firstName", "placeholder", "Ex. John"], [4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "lastName", "placeholder", "Ex. Doe"], ["type", "text", "matInput", "", "formControlName", "email", "placeholder", "Ex. johndoe@example.com"], ["appearance", "outline", "formGroupName", "passwordGroup", 1, "w-100", "pb-2"], ["type", "password", "matInput", "", "formControlName", "password", "placeholder", "*************"], ["type", "password", "matInput", "", "formControlName", "passwordRepeat", "placeholder", "*************", 3, "errorStateMatcher"], ["routerLink", "/login", 1, "d-inline-block", "text-secondary", "text-decoration-none", "mt-3"], ["align", "end", 2, "margin-top", "-35px", "padding-right", "8px"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["mode", "indeterminate"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Create A New Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-content", 3)(5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_5_listener() { return ctx.handleSignup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 5)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, SignupComponent_mat_error_10_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, SignupComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field", 5)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, SignupComponent_mat_error_16_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, SignupComponent_mat_error_17_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field", 5)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, SignupComponent_mat_error_22_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, SignupComponent_mat_error_23_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 10)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, SignupComponent_mat_error_28_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, SignupComponent_mat_error_29_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, SignupComponent_mat_error_30_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 10)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Repeat Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, SignupComponent_mat_error_35_Template, 4, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, SignupComponent_mat_error_36_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " I already have an account. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-card-actions", 14)(40, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, SignupComponent_mat_card_footer_42_Template, 2, 0, "mat-card-footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.signupFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.firstName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.firstName.hasError("maxlength") || ctx.firstName.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lastName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.lastName.hasError("maxlength") || ctx.lastName.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.email.hasError("email") || ctx.email.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.password.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.password.hasError("minlength", "maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.password.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("errorStateMatcher", ctx.repeatPasswordMatcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.passwordRepeat.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.signupFormGroup.hasError("passwordMissMatch") || ctx.passwordRepeat.hasError("serverError"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submittingForm == true);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardFooter, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_14__.MatProgressBar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 225:
/*!**********************************************************!*\
  !*** ./src/app/component/snackbar/snackbar.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarComponent": () => (/* binding */ SnackbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class SnackbarComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) { return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA)); };
SnackbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SnackbarComponent, selectors: [["app-snackbar"]], decls: 2, vars: 1, consts: [[1, "fw-500"]], template: function SnackbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbmFja2Jhci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8130:
/*!**************************************************************!*\
  !*** ./src/app/component/tag-dialog/tag-dialog.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagDialogComponent": () => (/* binding */ TagDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);








function TagDialogComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Must be 3 to 64 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TagDialogComponent {
    constructor(thisDialogRef, formBuilder) {
        this.thisDialogRef = thisDialogRef;
        this.formBuilder = formBuilder;
    }
    get name() { return this.tagFormGroup.get('name'); }
    ngOnInit() {
        this.tagFormGroup = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.maxLength(64)])
        });
    }
    addTag(e) {
        e.preventDefault();
        this.thisDialogRef.close({ tagName: this.name.value });
        this.tagFormGroup.reset();
        Object.keys(this.tagFormGroup.controls).forEach(key => {
            this.tagFormGroup.get(key).setErrors(null);
        });
    }
}
TagDialogComponent.ɵfac = function TagDialogComponent_Factory(t) { return new (t || TagDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder)); };
TagDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagDialogComponent, selectors: [["app-tag-dialog"]], decls: 13, vars: 2, consts: [[1, "position-relative"], [1, "mat-h2", "m-0"], [1, "divider"], ["autocomplete", "off", 1, "position-relative", 3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "w-100", 2, "padding-right", "90px"], ["matInput", "", "formControlName", "name", "placeholder", "Type a tag name"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "position-absolute", 2, "top", "4px", "right", "0"]], template: function TagDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content")(1, "div", 0)(2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add A Tag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TagDialogComponent_Template_form_ngSubmit_5_listener($event) { return ctx.addTag($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Type a tag name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TagDialogComponent_mat_error_10_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.tagFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name.hasError("minlength") || ctx.name.hasError("maxlength"));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWctZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2962:
/*!**********************************************************!*\
  !*** ./src/app/component/timeline/timeline.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineComponent": () => (/* binding */ TimelineComponent)
/* harmony export */ });
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snackbar/snackbar.component */ 225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth.service */ 892);
/* harmony import */ var src_app_service_timeline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/timeline.service */ 9097);
/* harmony import */ var src_app_service_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/post.service */ 2593);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../post/post.component */ 3219);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);












function TimelineComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TimelineComponent_div_1_div_5_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    const last_r12 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("href", "/posts/tags/", tag_r11.name, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", last_r12 ? "" : "border-bottom-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" #", tag_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](tag_r11.tagUseCounter);
} }
function TimelineComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Most Used Tags");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TimelineComponent_div_1_div_5_a_3_Template, 4, 4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.timelineTagList);
} }
function TimelineComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "No Tags Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} }
function TimelineComponent_div_1_h3_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Posts with tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("#", ctx_r4.targetTagName, "");
} }
function TimelineComponent_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No Post Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TimelineComponent_div_1_app_post_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-post", 25);
} if (rf & 2) {
    const postResponse_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", "profilePost" + postResponse_r13.post.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("postResponse", postResponse_r13)("isDetailedPost", false);
} }
function TimelineComponent_div_1_mat_spinner_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-spinner", 26);
} }
function TimelineComponent_div_1_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimelineComponent_div_1_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r14.loadTimelinePosts(ctx_r14.resultPage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TimelineComponent_div_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TimelineComponent_div_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r16.loadTaggedPosts(ctx_r16.targetTagName, ctx_r16.resultPage); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Load More");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function TimelineComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TimelineComponent_div_1_div_5_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, TimelineComponent_div_1_div_6_Template, 3, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TimelineComponent_div_1_h3_8_Template, 4, 1, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, TimelineComponent_div_1_p_10_Template, 2, 0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, TimelineComponent_div_1_app_post_11_Template, 1, 3, "app-post", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, TimelineComponent_div_1_mat_spinner_13_Template, 1, 0, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, TimelineComponent_div_1_button_14_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, TimelineComponent_div_1_button_15_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.timelineTagList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.timelineTagList.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isTaggedPostPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.noPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.timelinePostResponseList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.fetchingResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.hasMoreResult && !ctx_r1.fetchingResult && !ctx_r1.isTaggedPostPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.hasMoreResult && !ctx_r1.fetchingResult && ctx_r1.isTaggedPostPage);
} }
class TimelineComponent {
    constructor(authService, timelineService, postService, router, activatedRoute, matSnackbar) {
        this.authService = authService;
        this.timelineService = timelineService;
        this.postService = postService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.matSnackbar = matSnackbar;
        this.timelinePostResponseList = [];
        this.timelineTagList = [];
        this.noPost = false;
        this.resultPage = 1;
        this.resultSize = 5;
        this.hasMoreResult = true;
        this.fetchingResult = false;
        this.isTaggedPostPage = false;
        this.loadingTimelinePostsInitially = true;
        this.loadingTimelineTagsInitially = true;
        this.subscriptions = [];
    }
    ngOnInit() {
        if (!this.authService.isUserLoggedIn()) {
            this.router.navigateByUrl('/login');
        }
        else {
            if (this.router.url !== '/') {
                this.targetTagName = this.activatedRoute.snapshot.paramMap.get('tagName');
                this.isTaggedPostPage = true;
                this.loadTaggedPosts(this.targetTagName, 1);
            }
            else {
                this.loadTimelinePosts(1);
            }
            this.loadTimelineTags();
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
    loadTimelinePosts(currentPage) {
        if (!this.fetchingResult) {
            this.fetchingResult = true;
            this.subscriptions.push(this.timelineService.getTimelinePosts(currentPage, this.resultSize).subscribe({
                next: (postResponseList) => {
                    if (postResponseList.length === 0 && currentPage === 1)
                        this.noPost = true;
                    postResponseList.forEach(pR => this.timelinePostResponseList.push(pR));
                    if (postResponseList.length > 0) {
                        this.hasMoreResult = true;
                    }
                    else {
                        this.hasMoreResult = false;
                    }
                    this.resultPage++;
                    this.fetchingResult = false;
                    this.loadingTimelinePostsInitially = false;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_1__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                    this.fetchingResult = false;
                }
            }));
        }
    }
    loadTaggedPosts(tagName, currentPage) {
        if (!this.fetchingResult) {
            this.fetchingResult = true;
            this.subscriptions.push(this.postService.getPostsByTag(tagName, currentPage, this.resultSize).subscribe({
                next: (postResponseList) => {
                    if (postResponseList.length === 0 && currentPage === 1)
                        this.noPost = true;
                    postResponseList.forEach(pR => this.timelinePostResponseList.push(pR));
                    if (postResponseList.length > 0) {
                        this.hasMoreResult = true;
                    }
                    else {
                        this.hasMoreResult = false;
                    }
                    this.resultPage++;
                    this.fetchingResult = false;
                },
                error: (errorResponse) => {
                    this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_1__.SnackbarComponent, {
                        data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                        panelClass: ['bg-danger'],
                        duration: 5000
                    });
                    this.fetchingResult = false;
                }
            }));
        }
    }
    loadTimelineTags() {
        this.fetchingResult = true;
        this.subscriptions.push(this.timelineService.getTimelineTags().subscribe({
            next: (tagList) => {
                tagList.forEach(t => this.timelineTagList.push(t));
                this.loadingTimelineTagsInitially = false;
                this.fetchingResult = false;
            },
            error: (errorResponse) => {
                this.matSnackbar.openFromComponent(_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_1__.SnackbarComponent, {
                    data: src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.snackbarErrorContent,
                    panelClass: ['bg-danger'],
                    duration: 5000
                });
                this.fetchingResult = false;
            }
        }));
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_timeline_service__WEBPACK_IMPORTED_MODULE_3__.TimelineService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_service_post_service__WEBPACK_IMPORTED_MODULE_4__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar)); };
TimelineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 2, vars: 2, consts: [["class", "text-center fully-centered", 4, "ngIf"], ["style", "margin-top: 100px", 4, "ngIf"], [1, "text-center", "fully-centered"], [1, "text-center", "ms-auto", "me-auto", 2, "zoom", "0.5"], [2, "margin-top", "100px"], [1, "container"], [1, "row", "justify-content-center", "mt-5"], [1, "col-4"], [1, "profile-sidebar", "position-sticky", "bg-white", "rounded", "mat-elevation-z3", "p-3", 2, "top", "64px"], [4, "ngIf"], [1, "col-6"], ["class", "mat-h3 fw-500", 4, "ngIf"], [1, "timeline-posts"], ["class", "fw-500 text-center", 4, "ngIf"], [3, "id", "postResponse", "isDetailedPost", 4, "ngFor", "ngForOf"], [1, "text-center", "mb-4"], ["style", "transform: scale(0.3);", "class", "text-center ms-auto me-auto", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "class", "mat-btn-lg rounded-pill", 3, "click", 4, "ngIf"], [1, "mat-h2"], ["class", "d-block p-3 text-decoration-none fw-500 border border-1 border-start-0 border-end-0", "style", " font-size: 14px;", 3, "href", "ngClass", 4, "ngFor", "ngForOf"], [1, "d-block", "p-3", "text-decoration-none", "fw-500", "border", "border-1", "border-start-0", "border-end-0", 2, "font-size", "14px", 3, "href", "ngClass"], [1, "badge", "rounded-pill", "text-dark", "float-end", 2, "background-color", "rgba(0,0,0,0.15)"], [1, "mat-h2", "m-0", "text-center"], [1, "mat-h3", "fw-500"], [1, "fw-500", "text-center"], [3, "id", "postResponse", "isDetailedPost"], [1, "text-center", "ms-auto", "me-auto", 2, "transform", "scale(0.3)"], ["mat-raised-button", "", "color", "primary", 1, "mat-btn-lg", "rounded-pill", 3, "click"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, TimelineComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TimelineComponent_div_1_Template, 16, 8, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loadingTimelinePostsInitially || ctx.loadingTimelineTagsInitially);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loadingTimelinePostsInitially && !ctx.loadingTimelineTagsInitially);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _post_post_component__WEBPACK_IMPORTED_MODULE_5__.PostComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lbGluZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3649:
/*!******************************************************************!*\
  !*** ./src/app/component/verify-email/verify-email.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailComponent": () => (/* binding */ VerifyEmailComponent)
/* harmony export */ });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/app-constants */ 9133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/user.service */ 4981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);







class VerifyEmailComponent {
    constructor(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.jwtService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService();
        this.subscriptions = [];
    }
    ngOnInit() {
        this.token = this.route.snapshot.paramMap.get('token');
        if (this.token !== null) {
            if (!this.jwtService.isTokenExpired(this.token)) {
                this.subscriptions.push(this.userService.verifyEmail(this.token).subscribe((response) => {
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageTypeLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.successLabel);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageHeaderLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.emailVerifySuccessHeader);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageDetailLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.emailVerifySuccessDetail);
                    this.router.navigateByUrl('/message');
                }, (errorResponse) => {
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageTypeLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.errorLabel);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageHeaderLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.tokenErrorHeader);
                    localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageDetailLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.tokenErrorDetail);
                    this.router.navigateByUrl('/message');
                }));
            }
            else {
                localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageTypeLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.errorLabel);
                localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageHeaderLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.tokenErrorHeader);
                localStorage.setItem(src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.messageDetailLabel, src_app_common_app_constants__WEBPACK_IMPORTED_MODULE_0__.AppConstants.tokenErrorDetail);
                this.router.navigateByUrl('/message');
            }
        }
        else {
            this.router.navigateByUrl('/');
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
VerifyEmailComponent.ɵfac = function VerifyEmailComponent_Factory(t) { return new (t || VerifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
VerifyEmailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VerifyEmailComponent, selectors: [["app-verify-email"]], decls: 8, vars: 0, consts: [[1, "mt-100", "me-auto", "ms-auto", 2, "width", "500px"], [1, "example-card"], ["mode", "indeterminate"]], template: function VerifyEmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Verifying");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Please, wait while we verity your email address. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardFooter, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__.MatProgressBar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktZW1haWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5763:
/*!****************************************************************************!*\
  !*** ./src/app/component/view-photo-dialog/view-photo-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPhotoDialogComponent": () => (/* binding */ ViewPhotoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class ViewPhotoDialogComponent {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
    }
    ngOnInit() {
    }
}
ViewPhotoDialogComponent.ɵfac = function ViewPhotoDialogComponent_Factory(t) { return new (t || ViewPhotoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ViewPhotoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewPhotoDialogComponent, selectors: [["app-view-photo-dialog"]], decls: 2, vars: 1, consts: [[2, "max-width", "100%", "max-height", "500px", 3, "src"]], template: function ViewPhotoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.dataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXBob3RvLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1703:
/*!**********************************************************************!*\
  !*** ./src/app/component/waiting-dialog/waiting-dialog.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WaitingDialogComponent": () => (/* binding */ WaitingDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);




class WaitingDialogComponent {
    constructor(dataHeader) {
        this.dataHeader = dataHeader;
    }
    ngOnInit() {
    }
}
WaitingDialogComponent.ɵfac = function WaitingDialogComponent_Factory(t) { return new (t || WaitingDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
WaitingDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WaitingDialogComponent, selectors: [["app-waiting-dialog"]], decls: 4, vars: 1, consts: [[1, "text-center"], [2, "margin", "-25px auto 0", "transform", "scale(0.3)"], [1, "mat-h2", "m-0"]], template: function WaitingDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataHeader, " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__.MatProgressSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWl0aW5nLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5826:
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.isUserLoggedIn();
    }
    isUserLoggedIn() {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        this.router.navigateByUrl('/login');
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2070:
/*!*************************************************!*\
  !*** ./src/app/interceptor/auth.interceptor.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ 892);



class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    intercept(request, next) {
        if (request.url.includes(`${this.host}/signup`)) {
            return next.handle(request);
        }
        if (request.url.includes(`${this.host}/login`)) {
            return next.handle(request);
        }
        if (request.url.includes(`${this.host}/verify-email`)) {
            return next.handle(request);
        }
        if (request.url.includes(`${this.host}/forgot-password`)) {
            return next.handle(request);
        }
        if (request.url.includes(`${this.host}/reset-password`)) {
            return next.handle(request);
        }
        const authToken = this.authService.getAuthTokenFromCache();
        const newRequest = request.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } });
        return next.handle(newRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 7483:
/*!**********************************!*\
  !*** ./src/app/model/comment.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comment": () => (/* binding */ Comment)
/* harmony export */ });
class Comment {
}


/***/ }),

/***/ 1414:
/*!*******************************!*\
  !*** ./src/app/model/post.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Post": () => (/* binding */ Post)
/* harmony export */ });
class Post {
}


/***/ }),

/***/ 959:
/*!*****************************************!*\
  !*** ./src/app/model/reset-password.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPassword": () => (/* binding */ ResetPassword)
/* harmony export */ });
class ResetPassword {
}


/***/ }),

/***/ 3571:
/*!********************************************!*\
  !*** ./src/app/model/update-user-email.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserEmail": () => (/* binding */ UpdateUserEmail)
/* harmony export */ });
class UpdateUserEmail {
}


/***/ }),

/***/ 3345:
/*!*******************************************!*\
  !*** ./src/app/model/update-user-info.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserInfo": () => (/* binding */ UpdateUserInfo)
/* harmony export */ });
class UpdateUserInfo {
}


/***/ }),

/***/ 4073:
/*!***********************************************!*\
  !*** ./src/app/model/update-user-password.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserPassword": () => (/* binding */ UpdateUserPassword)
/* harmony export */ });
class UpdateUserPassword {
}


/***/ }),

/***/ 3:
/*!*************************************!*\
  !*** ./src/app/model/user-login.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLogin": () => (/* binding */ UserLogin)
/* harmony export */ });
class UserLogin {
}


/***/ }),

/***/ 7318:
/*!**************************************!*\
  !*** ./src/app/model/user-signup.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSignup": () => (/* binding */ UserSignup)
/* harmony export */ });
class UserSignup {
}


/***/ }),

/***/ 892:
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);





class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.logoutSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.loginSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.jwtService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService();
    }
    signup(userSignup) {
        return this.httpClient.post(`${this.host}/signup`, userSignup);
    }
    login(userLogin) {
        return this.httpClient.post(`${this.host}/login`, userLogin, { observe: 'response' });
    }
    logout() {
        this.authToken = null;
        this.authUser = null;
        this.principal = null;
        localStorage.removeItem('authUser');
        localStorage.removeItem('authToken');
        this.logoutSubject.next(true);
    }
    storeTokenInCache(authToken) {
        if (authToken != null && authToken != '') {
            this.authToken = authToken;
            localStorage.setItem('authToken', authToken);
        }
    }
    loadAuthTokenFromCache() {
        this.authToken = localStorage.getItem('authToken');
    }
    getAuthTokenFromCache() {
        return localStorage.getItem('authToken');
    }
    storeAuthUserInCache(authUser) {
        if (authUser != null) {
            this.authUser = authUser;
            localStorage.setItem('authUser', JSON.stringify(authUser));
        }
        this.loginSubject.next(authUser);
    }
    getAuthUserFromCache() {
        return JSON.parse(localStorage.getItem('authUser'));
    }
    getAuthUserId() {
        return this.getAuthUserFromCache().id;
    }
    isUserLoggedIn() {
        this.loadAuthTokenFromCache();
        if (this.authToken != null && this.authToken != '') {
            if (this.jwtService.decodeToken(this.authToken).sub != null || '') {
                if (!this.jwtService.isTokenExpired(this.authToken)) {
                    this.principal = this.jwtService.decodeToken(this.authToken).sub;
                    return true;
                }
            }
        }
        this.logout();
        return false;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4298:
/*!********************************************!*\
  !*** ./src/app/service/comment.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentService": () => (/* binding */ CommentService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class CommentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    likeComment(commentId) {
        return this.httpClient.post(`${this.host}/posts/comments/${commentId}/like`, null);
    }
    unlikeComment(commentId) {
        return this.httpClient.post(`${this.host}/posts/comments/${commentId}/unlike`, null);
    }
    deleteComment(postId, commentId) {
        return this.httpClient.post(`${this.host}/posts/${postId}/comments/${commentId}/delete`, null);
    }
    getCommentLikes(commentId, page, size) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', page).set('size', size);
        return this.httpClient.get(`${this.host}/posts/comments/${commentId}/likes`, { params: reqParams });
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
CommentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7173:
/*!********************************************!*\
  !*** ./src/app/service/country.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryService": () => (/* binding */ CountryService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class CountryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getCountryList() {
        return this.httpClient.get(`${this.host}/countries`);
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CountryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7320:
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class NotificationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getNotifications(page, size) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', page).set('size', size);
        return this.httpClient.get(`${this.host}/notifications`, { params: reqParams });
    }
    markAllSeen() {
        return this.httpClient.post(`${this.host}/notifications/mark-seen`, null);
    }
    markAsRead(notificationId) {
        return this.httpClient.post(`${this.host}/notifications/${notificationId}/mark-read`, null);
    }
    markAllRead() {
        return this.httpClient.post(`${this.host}/notifications/mark-read`, null);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2593:
/*!*****************************************!*\
  !*** ./src/app/service/post.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostService": () => (/* binding */ PostService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class PostService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    createNewPost(content, postPhoto, postTags) {
        const formData = new FormData();
        formData.append('content', content);
        formData.append('postPhoto', postPhoto);
        formData.append('postTags', JSON.stringify(postTags));
        return this.httpClient.post(`${this.host}/posts/create`, formData);
    }
    updatePost(postId, content, postPhoto, postTags) {
        const formData = new FormData();
        formData.append('content', content);
        formData.append('postPhoto', postPhoto);
        formData.append('postTags', JSON.stringify(postTags));
        return this.httpClient.post(`${this.host}/posts/${postId}/update`, formData);
    }
    deletePostPhoto(postId) {
        return this.httpClient.post(`${this.host}/posts/${postId}/photo/delete`, null);
    }
    deletePost(postId, isTypeShare) {
        if (isTypeShare) {
            return this.httpClient.post(`${this.host}/posts/${postId}/share/delete`, null);
        }
        else {
            return this.httpClient.post(`${this.host}/posts/${postId}/delete`, null);
        }
    }
    getPostById(postId) {
        return this.httpClient.get(`${this.host}/posts/${postId}`);
    }
    getPostLikes(postId, page, size) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', page).set('size', size);
        return this.httpClient.get(`${this.host}/posts/${postId}/likes`, { params: reqParams });
    }
    getPostComments(postId, page, size) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', page).set('size', size);
        return this.httpClient.get(`${this.host}/posts/${postId}/comments`, { params: reqParams });
    }
    getPostShares(postId, page, size) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', page).set('size', size);
        return this.httpClient.get(`${this.host}/posts/${postId}/shares`, { params: reqParams });
    }
    likePost(postId) {
        return this.httpClient.post(`${this.host}/posts/${postId}/like`, null);
    }
    unlikePost(postId) {
        return this.httpClient.post(`${this.host}/posts/${postId}/unlike`, null);
    }
    createPostComment(postId, content) {
        const formData = new FormData();
        formData.append('content', content);
        return this.httpClient.post(`${this.host}/posts/${postId}/comments/create`, formData);
    }
    likePostComment(commentId) {
        return this.httpClient.post(`${this.host}/posts/comments/${commentId}/like`, null);
    }
    createPostShare(postId, content) {
        const formData = new FormData();
        formData.append('content', content);
        return this.httpClient.post(`${this.host}/posts/${postId}/share/create`, formData);
    }
    getPostsByTag(tagName, page, size) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', page).set('size', size);
        return this.httpClient.get(`${this.host}/posts/tags/${tagName}`, { params: reqParams });
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
PostService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9097:
/*!*********************************************!*\
  !*** ./src/app/service/timeline.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineService": () => (/* binding */ TimelineService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class TimelineService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    getTimelinePosts(page, size) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('page', page).set('size', size);
        return this.httpClient.get(`${this.host}/`, { params: reqParams });
    }
    getTimelineTags() {
        return this.httpClient.get(`${this.host}/tags`);
    }
}
TimelineService.ɵfac = function TimelineService_Factory(t) { return new (t || TimelineService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
TimelineService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TimelineService, factory: TimelineService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4981:
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        this.jwtService = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtHelperService();
    }
    getUserById(userId) {
        return this.httpClient.get(`${this.host}/users/${userId}`);
    }
    getUserFollowingList(userId, page, size) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('page', page).set('size', size);
        return this.httpClient.get(`${this.host}/users/${userId}/following`, { params: reqParams });
    }
    getUserFollowerList(userId, page, size) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('page', page).set('size', size);
        return this.httpClient.get(`${this.host}/users/${userId}/follower`, { params: reqParams });
    }
    getUserPosts(userId, page, size) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('page', page).set('size', size);
        return this.httpClient.get(`${this.host}/users/${userId}/posts`, { params: reqParams });
    }
    verifyEmail(token) {
        return this.httpClient.post(`${this.host}/verify-email/${token}`, null);
    }
    updateUserInfo(updateUserInfo) {
        return this.httpClient.post(`${this.host}/account/update/info`, updateUserInfo);
    }
    updateUserEmail(updateUserEmail) {
        return this.httpClient.post(`${this.host}/account/update/email`, updateUserEmail);
    }
    updateUserPassword(updateUserPassword) {
        return this.httpClient.post(`${this.host}/account/update/password`, updateUserPassword);
    }
    updateProfilePhoto(profilePhoto) {
        const formData = new FormData();
        formData.append('profilePhoto', profilePhoto);
        return this.httpClient.post(`${this.host}/account/update/profile-photo`, formData);
    }
    updateCoverPhoto(coverPhoto) {
        const formData = new FormData();
        formData.append('coverPhoto', coverPhoto);
        return this.httpClient.post(`${this.host}/account/update/cover-photo`, formData);
    }
    followUser(userId) {
        return this.httpClient.post(`${this.host}/account/follow/${userId}`, null);
    }
    unfollowUser(userId) {
        return this.httpClient.post(`${this.host}/account/unfollow/${userId}`, null);
    }
    getUserSearchResult(key, page, size) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('key', key).set('page', page).set('size', size);
        return this.httpClient.get(`${this.host}/users/search`, { params: reqParams });
    }
    forgotPassword(email) {
        const reqParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('email', email);
        return this.httpClient.post(`${this.host}/forgot-password`, null, { params: reqParams });
    }
    resetPassword(token, resetPassword) {
        return this.httpClient.post(`${this.host}/reset-password/${token}`, resetPassword);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api/v1',
    defaultProfilePhotoUrl: 'http://localhost:4200/assets/images/avatar.jpg',
    defaultCoverPhotoUrl: 'http://localhost:4200/assets/images/cover.jpg'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map