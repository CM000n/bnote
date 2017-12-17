/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["jquery.sap.global"],function(q){"use strict";var U={};var _="/sap/bc/ui2/app_index/?basedOnId=";var a="/sap/bc/ui2/app_index/?sap.app/id=";U.ajaxRequest=function(r){return new Promise(function(b,c){q.ajax(r).done(function(R){return b(R);}).fail(function(e){return c(e);});});};U.getAppVariants=function(c,t){var r={url:_+c+'&fields=descriptorUrl',type:"GET"};return this.ajaxRequest(r).then(function(R){var A=R.results;return this.getAppVariantDescriptorInfo(A,t);}.bind(this));};U.getAppVariantDescriptorInfo=function(A,t){var b=[];var c=this;A.some(function(o){b.push(c.getAppVariantsProperties(o,t));});return Promise.all(b).then(function(r){return r;});};U.getAppVariantsProperties=function(A,t){var o={},r;r={url:A["descriptorUrl"],type:"GET"};return this.ajaxRequest(r).then(function(R){var b=R;o.id=b["sap.app"].id;o.title=b["sap.app"].title;o.subTitle=b["sap.app"].subTitle;o.description=b["sap.app"].description;o.icon=b["sap.ui"].icons.icon;o.componentName=b["sap.ui5"].componentName;o.type=t;return Promise.resolve(o);});};U.getOriginalAppProperties=function(o,t){var r={url:a+o+'&fields=descriptorUrl',type:"GET"};return this.ajaxRequest(r).then(function(R){var A=R.results;return this.getAppVariantDescriptorInfo(A,t);}.bind(this));};return U;},true);