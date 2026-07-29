# GRAPHQL & REST API CATALOG

Total GraphQL Operations: **317**

| Operation Name | Type | Resolver | In Schema.gql | Admin Consumers | Customer Consumers |
| --- | --- | --- | --- | --- | --- |
| `systemHealth` | **QUERY** | `resolver.healthresolver` | Yes | 1 | 0 |
| `journalEntriesByDevice` | **QUERY** | `resolver.journalentrytype` | Yes | 0 | 0 |
| `journalEntries` | **QUERY** | `resolver.journalentrytype` | Yes | 1 | 0 |
| `journalEntryList` | **QUERY** | `resolver.journalentrytype` | Yes | 0 | 0 |
| `myAddresses` | **QUERY** | `resolver.addresstype` | Yes | 0 | 2 |
| `pincodeLookup` | **QUERY** | `resolver.addresstype` | Yes | 0 | 4 |
| `me` | **MUTATION** | `resolver.authresolver` | Yes | 69 | 83 |
| `sendTestEmail` | **MUTATION** | `resolver.authresolver` | Yes | 1 | 0 |
| `sendOtp` | **MUTATION** | `resolver.authresolver` | Yes | 0 | 1 |
| `systemConfigs` | **QUERY** | `resolver.systemconfigentrytype` | Yes | 1 | 0 |
| `systemConfig` | **QUERY** | `resolver.systemconfigentrytype` | Yes | 1 | 0 |
| `updateSystemConfig` | **MUTATION** | `resolver.systemconfigentrytype` | Yes | 1 | 0 |
| `attributeGroups` | **QUERY** | `resolver.attributeconfigresolver` | Yes | 1 | 0 |
| `attributeGroup` | **QUERY** | `resolver.attributeconfigresolver` | Yes | 1 | 0 |
| `productAttributes` | **MUTATION** | `resolver.attributeconfigresolver` | Yes | 1 | 0 |
| `productAttribute` | **QUERY** | `resolver.attributeconfigresolver` | Yes | 1 | 0 |
| `variantAttributes` | **QUERY** | `resolver.attributeconfigresolver` | Yes | 0 | 0 |
| `attributeValues` | **MUTATION** | `resolver.attributeconfigresolver` | Yes | 1 | 0 |
| `attributeValue` | **QUERY** | `resolver.attributeconfigresolver` | Yes | 1 | 0 |
| `flowAttributes` | **MUTATION** | `resolver.attributeconfigresolver` | Yes | 0 | 2 |
| `variantAttributeValues` | **MUTATION** | `resolver.attributeconfigresolver` | Yes | 0 | 0 |
| `createAttributeGroup` | **MUTATION** | `resolver.attributeconfigresolver` | Yes | 1 | 0 |
| `updateAttributeGroup` | **MUTATION** | `resolver.attributeconfigresolver` | Yes | 1 | 0 |
| `createProductAttribute` | **MUTATION** | `resolver.attributeconfigresolver` | Yes | 1 | 0 |
| `updateProductAttribute` | **MUTATION** | `resolver.attributeconfigresolver` | Yes | 1 | 0 |
| `createAttributeValue` | **MUTATION** | `resolver.attributeconfigresolver` | Yes | 1 | 0 |
| `updateAttributeValue` | **MUTATION** | `resolver.attributeconfigresolver` | Yes | 0 | 0 |
| `setVariantAttributes` | **MUTATION** | `resolver.attributeconfigresolver` | Yes | 0 | 0 |
| `auditLogs` | **QUERY** | `resolver.auditlogresolver` | Yes | 0 | 0 |
| `allAuditLogs` | **QUERY** | `resolver.auditlogresolver` | Yes | 1 | 0 |
| `rollbackBatch` | **MUTATION** | `resolver.auditlogresolver` | Yes | 0 | 0 |
| `brands` | **QUERY** | `resolver.brandresolver` | Yes | 13 | 10 |
| `brand` | **QUERY** | `resolver.brandresolver` | Yes | 19 | 21 |
| `createBrand` | **MUTATION** | `resolver.brandresolver` | Yes | 1 | 0 |
| `deleteBrand` | **MUTATION** | `resolver.brandresolver` | Yes | 1 | 0 |
| `updateBrand` | **MUTATION** | `resolver.brandresolver` | Yes | 1 | 0 |
| `bulkUpdateBrandStatus` | **MUTATION** | `resolver.brandresolver` | Yes | 1 | 0 |
| `businessFlows` | **QUERY** | `resolver.businessflowresolver` | Yes | 3 | 1 |
| `businessFlow` | **QUERY** | `resolver.businessflowresolver` | Yes | 3 | 2 |
| `businessFlowBySlug` | **QUERY** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `businessFlowCategories` | **MUTATION** | `resolver.businessflowresolver` | Yes | 1 | 2 |
| `resolveJourneySlug` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 7 |
| `publicJourneys` | **QUERY** | `resolver.businessflowresolver` | Yes | 0 | 2 |
| `businessFlowPaymentProfiles` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 1 |
| `businessFlowAssessmentProfiles` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `pricingProfiles` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `pricingProfile` | **QUERY** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `pricingRules` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `pricingFormulas` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `notificationProfiles` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `notificationProfile` | **QUERY** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `notificationTemplates` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `documentProfiles` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `documentProfile` | **QUERY** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `documentRequirements` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `logisticsProfiles` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `logisticsProfile` | **QUERY** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `logisticsRules` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `createBusinessFlow` | **MUTATION** | `resolver.businessflowresolver` | Yes | 1 | 0 |
| `updateBusinessFlow` | **MUTATION** | `resolver.businessflowresolver` | Yes | 1 | 0 |
| `createPricingProfile` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `updatePricingProfile` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `createNotificationProfile` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `updateNotificationProfile` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `createDocumentProfile` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `updateDocumentProfile` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `createLogisticsProfile` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `updateLogisticsProfile` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `setLogisticsRules` | **MUTATION** | `resolver.businessflowresolver` | Yes | 0 | 0 |
| `categories` | **QUERY** | `resolver.categoryresolver` | Yes | 17 | 6 |
| `category` | **QUERY** | `resolver.categoryresolver` | Yes | 18 | 23 |
| `createCategory` | **MUTATION** | `resolver.categoryresolver` | Yes | 1 | 0 |
| `deleteCategory` | **MUTATION** | `resolver.categoryresolver` | Yes | 1 | 0 |
| `updateCategory` | **MUTATION** | `resolver.categoryresolver` | Yes | 1 | 0 |
| `bulkUpdateCategoryStatus` | **MUTATION** | `resolver.categoryresolver` | Yes | 1 | 0 |
| `restoreCategory` | **MUTATION** | `resolver.categoryresolver` | Yes | 0 | 0 |
| `products` | **QUERY** | `resolver.productresolver` | Yes | 11 | 8 |
| `product` | **QUERY** | `resolver.productresolver` | Yes | 16 | 17 |
| `trendingProducts` | **QUERY** | `resolver.productresolver` | Yes | 0 | 2 |
| `toggleProductTrending` | **MUTATION** | `resolver.productresolver` | Yes | 1 | 0 |
| `createProduct` | **MUTATION** | `resolver.productresolver` | Yes | 3 | 0 |
| `updateProduct` | **MUTATION** | `resolver.productresolver` | Yes | 3 | 0 |
| `deleteProduct` | **MUTATION** | `resolver.productresolver` | Yes | 3 | 0 |
| `bulkUpdateProductStatus` | **MUTATION** | `resolver.productresolver` | Yes | 1 | 0 |
| `searchAll` | **QUERY** | `resolver.searchresulttype` | Yes | 0 | 1 |
| `resolveBusinessCode` | **QUERY** | `resolver.searchresulttype` | Yes | 0 | 0 |
| `seedCatalog` | **MUTATION** | `resolver.seedresolver` | Yes | 1 | 0 |
| `seedBusinessFlows` | **MUTATION** | `resolver.seedresolver` | Yes | 0 | 0 |
| `seedMockTransactions` | **MUTATION** | `resolver.seedresolver` | Yes | 2 | 0 |
| `series` | **QUERY** | `resolver.seriesresolver` | Yes | 12 | 16 |
| `seriesById` | **QUERY** | `resolver.seriesresolver` | Yes | 0 | 0 |
| `createSeries` | **MUTATION** | `resolver.seriesresolver` | Yes | 1 | 0 |
| `deleteSeries` | **MUTATION** | `resolver.seriesresolver` | Yes | 1 | 0 |
| `updateSeries` | **MUTATION** | `resolver.seriesresolver` | Yes | 1 | 0 |
| `bulkUpdateSeriesStatus` | **MUTATION** | `resolver.seriesresolver` | Yes | 1 | 0 |
| `variants` | **QUERY** | `resolver.productvariantresolver` | Yes | 7 | 15 |
| `variant` | **QUERY** | `resolver.productvariantresolver` | Yes | 32 | 20 |
| `createVariant` | **MUTATION** | `resolver.productvariantresolver` | Yes | 2 | 0 |
| `createVariants` | **MUTATION** | `resolver.productvariantresolver` | Yes | 1 | 0 |
| `deleteVariant` | **MUTATION** | `resolver.productvariantresolver` | Yes | 1 | 0 |
| `updateVariant` | **MUTATION** | `resolver.productvariantresolver` | Yes | 3 | 0 |
| `updateVariantPrice` | **MUTATION** | `resolver.productvariantresolver` | Yes | 3 | 0 |
| `bulkUpdateVariantStatus` | **MUTATION** | `resolver.productvariantresolver` | Yes | 1 | 0 |
| `workflowStepTypes` | **QUERY** | `resolver.workflowconfigresolver` | Yes | 1 | 0 |
| `workflowStepType` | **QUERY** | `resolver.workflowconfigresolver` | Yes | 1 | 0 |
| `workflowComponents` | **MUTATION** | `resolver.workflowconfigresolver` | Yes | 1 | 0 |
| `workflowComponent` | **QUERY** | `resolver.workflowconfigresolver` | Yes | 1 | 0 |
| `flowWorkflowSteps` | **MUTATION** | `resolver.workflowconfigresolver` | Yes | 1 | 2 |
| `flowStepComponents` | **MUTATION** | `resolver.workflowconfigresolver` | Yes | 0 | 0 |
| `createWorkflowStepType` | **MUTATION** | `resolver.workflowconfigresolver` | Yes | 0 | 0 |
| `updateWorkflowStepType` | **MUTATION** | `resolver.workflowconfigresolver` | Yes | 0 | 0 |
| `createWorkflowComponent` | **MUTATION** | `resolver.workflowconfigresolver` | Yes | 0 | 0 |
| `updateWorkflowComponent` | **MUTATION** | `resolver.workflowconfigresolver` | Yes | 0 | 0 |
| `createFlowWorkflowStep` | **MUTATION** | `resolver.workflowconfigresolver` | Yes | 1 | 0 |
| `setFlowWorkflowSteps` | **MUTATION** | `resolver.workflowconfigresolver` | Yes | 1 | 0 |
| `setFlowStepComponents` | **MUTATION** | `resolver.workflowconfigresolver` | Yes | 0 | 0 |
| `devices` | **QUERY** | `resolver.warehousetype` | Yes | 6 | 5 |
| `deviceList` | **QUERY** | `resolver.warehousetype` | Yes | 0 | 0 |
| `device` | **QUERY** | `resolver.warehousetype` | Yes | 20 | 24 |
| `deviceByLead` | **QUERY** | `resolver.warehousetype` | Yes | 0 | 0 |
| `warehouses` | **MUTATION** | `resolver.warehousetype` | Yes | 1 | 0 |
| `warehouseList` | **QUERY** | `resolver.warehousetype` | Yes | 0 | 0 |
| `updateDeviceDetails` | **MUTATION** | `resolver.warehousetype` | Yes | 1 | 0 |
| `createWarehouse` | **MUTATION** | `resolver.warehousetype` | Yes | 1 | 0 |
| `updateWarehouse` | **MUTATION** | `resolver.warehousetype` | Yes | 0 | 0 |
| `leads` | **QUERY** | `resolver.leadtype` | Yes | 7 | 0 |
| `leadList` | **QUERY** | `resolver.leadtype` | Yes | 0 | 0 |
| `lead` | **QUERY** | `resolver.leadtype` | Yes | 14 | 24 |
| `createLead` | **MUTATION** | `resolver.leadtype` | Yes | 2 | 3 |
| `updateLead` | **MUTATION** | `resolver.leadtype` | Yes | 1 | 0 |
| `updateLeadStatus` | **MUTATION** | `resolver.leadtype` | Yes | 1 | 0 |
| `offer` | **QUERY** | `resolver.offertype` | Yes | 4 | 6 |
| `offersByLead` | **QUERY** | `resolver.offertype` | Yes | 1 | 1 |
| `offerList` | **QUERY** | `resolver.offertype` | Yes | 0 | 0 |
| `createOffer` | **MUTATION** | `resolver.offertype` | Yes | 2 | 0 |
| `deleteOffer` | **MUTATION** | `resolver.offertype` | Yes | 1 | 0 |
| `updateOfferStatus` | **MUTATION** | `resolver.offertype` | Yes | 2 | 0 |
| `orders` | **QUERY** | `resolver.customerordertype` | Yes | 7 | 10 |
| `order` | **QUERY** | `resolver.customerordertype` | Yes | 59 | 56 |
| `myOrders` | **QUERY** | `resolver.customerordertype` | Yes | 0 | 3 |
| `createOrder` | **MUTATION** | `resolver.customerordertype` | Yes | 0 | 3 |
| `updateOrderStatus` | **MUTATION** | `resolver.customerordertype` | Yes | 0 | 0 |
| `cancelOrder` | **MUTATION** | `resolver.customerordertype` | Yes | 0 | 0 |
| `payments` | **QUERY** | `resolver.paymenttype` | Yes | 2 | 0 |
| `paymentsByOrder` | **QUERY** | `resolver.paymenttype` | Yes | 0 | 0 |
| `paymentsByCustomer` | **QUERY** | `resolver.paymenttype` | Yes | 0 | 0 |
| `payment` | **QUERY** | `resolver.paymenttype` | Yes | 3 | 13 |
| `initiatePayment` | **MUTATION** | `resolver.paymenttype` | Yes | 0 | 3 |
| `processPayment` | **MUTATION** | `resolver.paymenttype` | Yes | 0 | 0 |
| `pickup` | **QUERY** | `resolver.pickuptype` | Yes | 5 | 18 |
| `pickupsByLead` | **QUERY** | `resolver.pickuptype` | Yes | 1 | 1 |
| `pickupList` | **QUERY** | `resolver.pickuptype` | Yes | 0 | 0 |
| `createPickup` | **MUTATION** | `resolver.pickuptype` | Yes | 2 | 0 |
| `deletePickup` | **MUTATION** | `resolver.pickuptype` | Yes | 1 | 0 |
| `updatePickupStatus` | **MUTATION** | `resolver.pickuptype` | Yes | 2 | 0 |
| `procurement` | **QUERY** | `resolver.procurementtype` | Yes | 4 | 0 |
| `procurements` | **QUERY** | `resolver.procurementtype` | Yes | 2 | 0 |
| `procurementList` | **QUERY** | `resolver.procurementtype` | Yes | 0 | 0 |
| `createProcurement` | **MUTATION** | `resolver.procurementtype` | Yes | 2 | 0 |
| `deleteProcurement` | **MUTATION** | `resolver.procurementtype` | Yes | 1 | 0 |
| `completeProcurement` | **MUTATION** | `resolver.procurementtype` | Yes | 2 | 0 |
| `profitabilityReportByDevice` | **QUERY** | `resolver.profitabilityreporttype` | Yes | 0 | 0 |
| `profitabilityReports` | **QUERY** | `resolver.profitabilityreporttype` | Yes | 3 | 0 |
| `profitabilityReportList` | **QUERY** | `resolver.profitabilityreporttype` | Yes | 0 | 0 |
| `qcAudit` | **QUERY** | `resolver.qcaudittype` | Yes | 1 | 0 |
| `qcAuditsByDevice` | **QUERY** | `resolver.qcaudittype` | Yes | 1 | 0 |
| `qcAuditList` | **QUERY** | `resolver.qcaudittype` | Yes | 0 | 0 |
| `submitQC` | **MUTATION** | `resolver.qcaudittype` | Yes | 2 | 0 |
| `updateQcAudit` | **MUTATION** | `resolver.qcaudittype` | Yes | 1 | 0 |
| `deleteQcAudit` | **MUTATION** | `resolver.qcaudittype` | Yes | 1 | 0 |
| `myReferrals` | **QUERY** | `resolver.referralconfigtype` | Yes | 0 | 1 |
| `referralConfig` | **QUERY** | `resolver.referralconfigtype` | Yes | 1 | 0 |
| `allReferrals` | **QUERY** | `resolver.referralconfigtype` | Yes | 1 | 0 |
| `updateReferralConfig` | **MUTATION** | `resolver.referralconfigtype` | Yes | 1 | 0 |
| `updateReferralStatus` | **MUTATION** | `resolver.referralconfigtype` | Yes | 1 | 0 |
| `refurbishment` | **QUERY** | `resolver.refurbishmenttype` | Yes | 3 | 1 |
| `refurbishmentsByDevice` | **QUERY** | `resolver.refurbishmenttype` | Yes | 1 | 0 |
| `refurbishmentList` | **QUERY** | `resolver.refurbishmenttype` | Yes | 0 | 0 |
| `createWorkOrder` | **MUTATION** | `resolver.refurbishmenttype` | Yes | 1 | 0 |
| `updateWorkOrderStatus` | **MUTATION** | `resolver.refurbishmenttype` | Yes | 1 | 0 |
| `deleteWorkOrder` | **MUTATION** | `resolver.refurbishmenttype` | Yes | 1 | 0 |
| `completeRefurbishment` | **MUTATION** | `resolver.refurbishmenttype` | Yes | 2 | 0 |
| `salesOrder` | **QUERY** | `resolver.salesordertype` | Yes | 2 | 0 |
| `salesOrders` | **QUERY** | `resolver.salesordertype` | Yes | 2 | 0 |
| `salesOrderList` | **QUERY** | `resolver.salesordertype` | Yes | 0 | 0 |
| `createSalesOrder` | **MUTATION** | `resolver.salesordertype` | Yes | 2 | 0 |
| `completeSale` | **MUTATION** | `resolver.salesordertype` | Yes | 2 | 0 |
| `updateSalesOrder` | **MUTATION** | `resolver.salesordertype` | Yes | 1 | 0 |
| `deleteSalesOrder` | **MUTATION** | `resolver.salesordertype` | Yes | 1 | 0 |
| `settlement` | **QUERY** | `resolver.settlementtype` | Yes | 4 | 0 |
| `settlementByDevice` | **QUERY** | `resolver.settlementtype` | Yes | 0 | 0 |
| `settlements` | **QUERY** | `resolver.settlementtype` | Yes | 4 | 0 |
| `settlementList` | **QUERY** | `resolver.settlementtype` | Yes | 0 | 0 |
| `createSettlement` | **MUTATION** | `resolver.settlementtype` | Yes | 1 | 0 |
| `processPayout` | **MUTATION** | `resolver.settlementtype` | Yes | 2 | 0 |
| `deleteSettlement` | **MUTATION** | `resolver.settlementtype` | Yes | 0 | 0 |
| `assessmentTypes` | **QUERY** | `resolver.assessmenttyperesolver` | Yes | 4 | 1 |
| `assessmentTypeList` | **QUERY** | `resolver.assessmenttyperesolver` | Yes | 0 | 0 |
| `assessmentTypeById` | **QUERY** | `resolver.assessmenttyperesolver` | Yes | 0 | 0 |
| `assessmentTypeByCode` | **QUERY** | `resolver.assessmenttyperesolver` | Yes | 0 | 0 |
| `assessmentTypeBySlug` | **QUERY** | `resolver.assessmenttyperesolver` | Yes | 0 | 1 |
| `previewAssessmentTypeUrl` | **QUERY** | `resolver.assessmenttyperesolver` | Yes | 0 | 0 |
| `assessmentPricingSourceOptions` | **QUERY** | `resolver.assessmenttyperesolver` | Yes | 1 | 0 |
| `createAssessmentType` | **MUTATION** | `resolver.assessmenttyperesolver` | Yes | 1 | 0 |
| `updateAssessmentType` | **MUTATION** | `resolver.assessmenttyperesolver` | Yes | 1 | 0 |
| `deleteAssessmentType` | **MUTATION** | `resolver.assessmenttyperesolver` | Yes | 1 | 0 |
| `toggleAssessmentTypeActive` | **MUTATION** | `resolver.assessmenttyperesolver` | Yes | 0 | 0 |
| `valuationPages` | **QUERY** | `resolver.assessmentresolver` | Yes | 4 | 4 |
| `valuationGroups` | **QUERY** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `valuationQuestions` | **QUERY** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `templateTree` | **QUERY** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `templateWithQuestions` | **QUERY** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `templateQuestions` | **QUERY** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `assessmentTemplates` | **QUERY** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `overrideImpactPreview` | **QUERY** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `valuationAuditLogs` | **QUERY** | `resolver.valuationoperationsresolver` | Yes | 1 | 0 |
| `deductionRules` | **QUERY** | `resolver.valuationoperationsresolver` | Yes | 1 | 0 |
| `assessmentTemplateById` | **QUERY** | `resolver.assessmentresolver` | Yes | 2 | 0 |
| `templatePages` | **QUERY** | `resolver.templatecrudresolver` | Yes | 2 | 0 |
| `createValuationPage` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `updateValuationPage` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `deleteValuationPage` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `createValuationGroup` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `updateValuationGroup` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `deleteValuationGroup` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `createValuationQuestion` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `updateValuationQuestion` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `deleteValuationQuestion` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `createValuationOption` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `updateValuationOption` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `deleteValuationOption` | **MUTATION** | `resolver.assessmentresolver` | Yes | 0 | 0 |
| `cloneValuationFlow` | **MUTATION** | `resolver.valuationoperationsresolver` | Yes | 1 | 0 |
| `getQuestionTree` | **QUERY** | `resolver.pagedesignerresolver` | Yes | 0 | 0 |
| `getPageVisibilityRules` | **QUERY** | `resolver.pagedesignerresolver` | Yes | 0 | 0 |
| `getDesignTemplates` | **QUERY** | `resolver.pagedesignerresolver` | Yes | 0 | 0 |
| `getAssessmentAnalytics` | **QUERY** | `resolver.pagedesignerresolver` | Yes | 0 | 0 |
| `updatePageDesignConfig` | **MUTATION** | `resolver.pagedesignerresolver` | Yes | 1 | 0 |
| `updateGroupPresentationConfig` | **MUTATION** | `resolver.pagedesignerresolver` | Yes | 1 | 0 |
| `updateQuestionCardConfig` | **MUTATION** | `resolver.pagedesignerresolver` | Yes | 1 | 0 |
| `updateTemplateTheme` | **MUTATION** | `resolver.pagedesignerresolver` | Yes | 0 | 0 |
| `setNestedQuestion` | **MUTATION** | `resolver.pagedesignerresolver` | Yes | 0 | 0 |
| `removeNestedQuestion` | **MUTATION** | `resolver.pagedesignerresolver` | Yes | 0 | 0 |
| `updatePageVisibilityRules` | **MUTATION** | `resolver.pagedesignerresolver` | Yes | 0 | 0 |
| `saveDesignAsTemplate` | **MUTATION** | `resolver.pagedesignerresolver` | Yes | 0 | 0 |
| `templateQuestionList` | **QUERY** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `assessmentTemplateList` | **QUERY** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `entityOverrides` | **QUERY** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `entityOverrideList` | **QUERY** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `createAssessmentTemplate` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `updateTemplateName` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `deleteAssessmentTemplate` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `ensureTemplateExists` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 3 | 0 |
| `createTemplatePage` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `updateTemplatePage` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `deleteTemplatePage` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `createTemplateGroup` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `updateTemplateGroup` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `deleteTemplateGroup` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `createTemplateQuestion` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `updateTemplateQuestion` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `deleteTemplateQuestion` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `createTemplateOption` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `updateTemplateOption` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `deleteTemplateOption` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `bulkCreateTemplateOptions` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `addQuestionToTemplate` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `hideQuestionInTemplate` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 2 | 0 |
| `hideGroupInTemplate` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `unhideQuestionInTemplate` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `unhideGroupInTemplate` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `modifyQuestionInTemplate` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `hideOptionInTemplate` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `showOptionInTemplate` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 1 | 0 |
| `addOptionToTemplate` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `applyEntityOverride` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `removeEntityOverride` | **MUTATION** | `resolver.templatecrudresolver` | Yes | 0 | 0 |
| `deductionRuleList` | **QUERY** | `resolver.valuationoperationsresolver` | Yes | 0 | 0 |
| `valuationVersions` | **QUERY** | `resolver.valuationoperationsresolver` | Yes | 1 | 0 |
| `valuationVersionList` | **QUERY** | `resolver.valuationoperationsresolver` | Yes | 0 | 0 |
| `valuationAuditLogList` | **QUERY** | `resolver.valuationoperationsresolver` | Yes | 0 | 0 |
| `updateDeductionRule` | **MUTATION** | `resolver.valuationoperationsresolver` | Yes | 1 | 0 |
| `deleteDeductionRule` | **MUTATION** | `resolver.valuationoperationsresolver` | Yes | 1 | 0 |
| `runValuationSimulation` | **MUTATION** | `resolver.valuationoperationsresolver` | Yes | 1 | 3 |
| `createVersionDraft` | **MUTATION** | `resolver.valuationoperationsresolver` | Yes | 1 | 0 |
| `publishVersion` | **MUTATION** | `resolver.valuationoperationsresolver` | Yes | 1 | 0 |
| `deleteVersion` | **MUTATION** | `resolver.valuationoperationsresolver` | Yes | 1 | 0 |
| `executeSession` | **MUTATION** | `resolver.valuationoperationsresolver` | Yes | 0 | 0 |
| `deleteBusinessFlow` | **MUTATION** | `Backend Resolver` | Yes | 1 | 0 |
| `setFlowCategories` | **MUTATION** | `Backend Resolver` | Yes | 1 | 1 |
| `updateJourneyConfig` | **MUTATION** | `Backend Resolver` | Yes | 1 | 0 |
| `setFlowPaymentProfiles` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `setFlowAssessmentProfiles` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `deletePricingProfile` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `setPricingRules` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `setPricingFormulas` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `deleteNotificationProfile` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `setNotificationTemplates` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `deleteDocumentProfile` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `setDocumentRequirements` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `deleteLogisticsProfile` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `deleteAttributeGroup` | **MUTATION** | `Backend Resolver` | Yes | 1 | 0 |
| `deleteProductAttribute` | **MUTATION** | `Backend Resolver` | Yes | 1 | 0 |
| `deleteAttributeValue` | **MUTATION** | `Backend Resolver` | Yes | 1 | 0 |
| `setFlowAttributes` | **MUTATION** | `Backend Resolver` | Yes | 0 | 1 |
| `deleteWorkflowStepType` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `deleteWorkflowComponent` | **MUTATION** | `Backend Resolver` | Yes | 0 | 0 |
| `deleteFlowWorkflowStep` | **MUTATION** | `Backend Resolver` | Yes | 1 | 0 |
| `deleteWarehouse` | **MUTATION** | `Backend Resolver` | Yes | 1 | 0 |
| `verifyOtp` | **MUTATION** | `Backend Resolver` | Yes | 0 | 1 |
| `updateProfile` | **MUTATION** | `Backend Resolver` | Yes | 0 | 2 |
| `requestContactChangeOtp` | **MUTATION** | `Backend Resolver` | Yes | 0 | 1 |
| `confirmContactChange` | **MUTATION** | `Backend Resolver` | Yes | 0 | 1 |
| `changePassword` | **MUTATION** | `Backend Resolver` | Yes | 0 | 1 |
| `createAddress` | **MUTATION** | `Backend Resolver` | Yes | 0 | 2 |
| `updateAddress` | **MUTATION** | `Backend Resolver` | Yes | 0 | 2 |
| `setDefaultAddress` | **MUTATION** | `Backend Resolver` | Yes | 0 | 2 |
| `deleteAddress` | **MUTATION** | `Backend Resolver` | Yes | 0 | 2 |
