# BACKEND ARCHITECTURE & SERVICES MAP

Total Services: **33**
Total Resolvers: **35**

### NestJS Services

- **BusinessCodeService** (`apps/backend/src/common/business-code/business-code.service.ts`): Methods: generate, nextSequence, resolve
- **AccountingService** (`apps/backend/src/modules/accounting/application/services/accounting.service.ts`): Methods: postJournalEntry, getEntriesByDeviceId, getAllEntries
- **AddressService** (`apps/backend/src/modules/address/application/services/address.service.ts`): Methods: list, loadOwned, create, update, setDefault, remove
- **AuthService** (`apps/backend/src/modules/auth/application/services/auth.service.ts`): Methods: generateCustomerId, sendOtp, verifyOtpAndLogin, getProfile, updateProfile, requestContactChangeOtp, confirmContactChange, changePassword
- **EmailService** (`apps/backend/src/modules/auth/application/services/email.service.ts`): Methods: sendOtpEmail, sendTestEmail, getSmtpConfig
- **OtpService** (`apps/backend/src/modules/auth/application/services/otp.service.ts`): Methods: generateAndSendOtp, verifyOtp
- **AttributeConfigService** (`apps/backend/src/modules/catalog/application/services/attribute-config.service.ts`): Methods: getGroups, getGroupById, createGroup, updateGroup, deleteGroup, getAttributes, getAttributeById, getVariantAttributes, createAttribute, updateAttribute, deleteAttribute, getAttributeValues, getAttributeValueById, createAttributeValue, updateAttributeValue, deleteAttributeValue, getFlowAttributes, setFlowAttributes, getVariantAttributeValues, setVariantAttributes
- **BusinessFlowService** (`apps/backend/src/modules/catalog/application/services/business-flow.service.ts`): Methods: getFlows, getFlowById, getFlowBySlug, createFlow, updateFlow, deleteFlow, getFlowCategories, setFlowCategories, getJourneyBySlug, updateJourneyConfig, getPublicJourneys, getFlowPaymentProfiles, setFlowPaymentProfiles, getFlowAssessmentProfiles, setFlowAssessmentProfiles, getPricingProfiles, getPricingProfileById, createPricingProfile, updatePricingProfile, deletePricingProfile, getPricingRules, setPricingRules, getPricingFormulas, setPricingFormulas, getNotificationProfiles, getNotificationProfileById, createNotificationProfile, updateNotificationProfile, deleteNotificationProfile, getNotificationTemplates, setNotificationTemplates, getDocumentProfiles, getDocumentProfileById, createDocumentProfile, updateDocumentProfile, deleteDocumentProfile, getDocumentRequirements, setDocumentRequirements, getLogisticsProfiles, getLogisticsProfileById, createLogisticsProfile, updateLogisticsProfile, deleteLogisticsProfile, getLogisticsRules, setLogisticsRules, seedBusinessFlows
- **CatalogReadService** (`apps/backend/src/modules/catalog/application/services/catalog-read.service.ts`): Methods: getCategories, getCategoryById, getBrands, getBrandById, getBrandCategories, getBrandsByCategory, getSeries, getSeriesById, getProducts, getProductById, getProductMedia, getVariants, getVariantById, getTrendingProducts
- **CatalogWriteService** (`apps/backend/src/modules/catalog/application/services/catalog-write.service.ts`): Methods: createCategory, updateCategory, deleteCategory, restoreCategory, bulkUpdateCategoryStatus, createBrand, updateBrand, deleteBrand, bulkUpdateBrandStatus, createSeries, updateSeries, deleteSeries, bulkUpdateSeriesStatus, createProduct, deleteProduct, bulkUpdateProductStatus, updateProduct, toggleProductTrending, createVariant, createVariants, updateVariant, deleteVariant, bulkUpdateStatus, seedCatalog, seedMockTransactions
- **PriceService** (`apps/backend/src/modules/catalog/application/services/price.service.ts`): Methods: createInitialPrice, updatePrice, getPriceHistory, getCurrentPrice
- **WorkflowConfigService** (`apps/backend/src/modules/catalog/application/services/workflow-config.service.ts`): Methods: getStepTypes, getStepTypeById, createStepType, updateStepType, deleteStepType, getComponents, getComponentById, createComponent, updateComponent, deleteComponent, getFlowSteps, createFlowStep, updateFlowStep, deleteFlowStep, reorderFlowSteps, getStepComponents, setStepComponents
- **InventoryService** (`apps/backend/src/modules/inventory/application/services/inventory.service.ts`): Methods: registerDevice, updateDeviceDetails, getDeviceById, getDeviceByLeadId, getAllDevices, createWarehouse, getWarehouses, updateWarehouse, deleteWarehouse
- **LeadService** (`apps/backend/src/modules/lead/application/services/lead.service.ts`): Methods: createLead, getLeadById, getAllLeads, updateLeadStatus, updateLead
- **OfferService** (`apps/backend/src/modules/offer/application/services/offer.service.ts`): Methods: createOffer, getOfferById, getOffersByLeadId, deleteOffer, updateOfferStatus
- **OrderService** (`apps/backend/src/modules/order/application/services/order.service.ts`): Methods: generateOrderCode, createOrder, getOrdersByCustomerId, getOrderById, getAllOrders, countOrders, updateOrderStatus, cancelOrder
- **PaymentService** (`apps/backend/src/modules/payment/application/services/payment.service.ts`): Methods: initiatePayment, processPayment, getPaymentsByOrder, getPaymentsByCustomer, getAllPayments, countPayments
- **PickupService** (`apps/backend/src/modules/pickup/application/services/pickup.service.ts`): Methods: createPickup, getPickupById, getPickupsByLeadId, deletePickup, updatePickupStatus
- **ProcurementService** (`apps/backend/src/modules/procurement/application/services/procurement.service.ts`): Methods: createProcurement, deleteProcurement, completeProcurement, getProcurementById, getProcurementByDeviceId, getAllProcurements
- **ProfitabilityService** (`apps/backend/src/modules/profitability/application/services/profitability.service.ts`): Methods: getReportByDeviceId, getAllReports
- **QCService** (`apps/backend/src/modules/qc/application/services/qc.service.ts`): Methods: submitQC, getQCById, getQCByDeviceId, updateQcAudit, deleteQcAudit
- **ReferralService** (`apps/backend/src/modules/referral/application/services/referral.service.ts`): Methods: getConfig, updateConfig, generateUniqueCode, ensureReferralCode, getSummary, registerReferral, listAll, updateStatus
- **RefurbishmentService** (`apps/backend/src/modules/refurbishment/application/services/refurbishment.service.ts`): Methods: createWorkOrder, updateWorkOrderStatus, completeRefurbishment, getWorkOrderById, getWorkOrdersByDeviceId, deleteWorkOrder
- **SalesService** (`apps/backend/src/modules/sales/application/services/sales.service.ts`): Methods: createSalesOrder, completeSale, getSalesOrderById, getSalesOrderByDeviceId, getAllSalesOrders, updateSalesOrder, deleteSalesOrder
- **SettlementService** (`apps/backend/src/modules/settlement/application/services/settlement.service.ts`): Methods: createSettlement, processPayout, getSettlementById, getSettlementByDeviceId, getAllSettlements, deleteSettlement
- **AssessmentTypeService** (`apps/backend/src/modules/valuation/application/services/assessment-type.service.ts`): Methods: onModuleInit, findAll, findById, findByCode, findBySlug, resolveGeneralTypeId, listPricingSourceOptions, ensureGeneralType, backfillSlugs, create, update, delete, reorder, toggleActive, validateUniqueness, validateSlugUniqueness, validateNameUniqueness
- **AssessmentService** (`apps/backend/src/modules/valuation/application/services/assessment.service.ts`): Methods: logAudit, resolveAssessmentMerged, cloneFlowSetup, createVersionDraft, publishVersion
- **FunctionalCodeService** (`apps/backend/src/modules/valuation/application/services/functional-code.service.ts`): Methods: generateQuestionFunctionalCode, generateOptionFunctionalCode
- **PageDesignerService** (`apps/backend/src/modules/valuation/application/services/page-designer.service.ts`): Methods: updatePageDesignConfig, updateGroupPresentationConfig, updateQuestionCardConfig, updateTemplateTheme, setNestedQuestion, removeNestedQuestion, getQuestionTree, updatePageVisibilityRules, getPageVisibilityRules, saveDesignAsTemplate, getDesignTemplates, getAssessmentAnalytics
- **TemplateCrudService** (`apps/backend/src/modules/valuation/application/services/template-crud.service.ts`): Methods: getActiveVersion, resolveAssessmentTypeId, ensureTemplateExists, deepCopyTemplate, ensureDefaultCategoryTemplate, getTemplateWithQuestions, getTemplatePages, updateTemplateName, deleteTemplate, cleanupOrphanedTemplateData, createTemplatePage, updateTemplatePage, deleteTemplatePage, getTemplateAncestorIds, validateScope, resolvePageTemplateId, resolveGroupTemplateId, resolveQuestionTemplateId, materializeTemplatePage, materializeTemplateGroup, materializeTemplateQuestion, createTemplateGroup, updateTemplateGroup, deleteTemplateGroup, createTemplateQuestion, updateTemplateQuestion, deleteTemplateQuestion, createTemplateOption, updateTemplateOption, deleteTemplateOption, bulkCreateTemplateOptions, logAudit
- **TemplateOverrideService** (`apps/backend/src/modules/valuation/application/services/template-override.service.ts`): Methods: addQuestionToTemplate, hideQuestionInTemplate, unhideQuestionInTemplate, hideGroupInTemplate, unhideGroupInTemplate, modifyQuestionInTemplate, hideOptionInTemplate, showOptionInTemplate
- **TemplateService** (`apps/backend/src/modules/valuation/application/services/template.service.ts`): Methods: resolveAssessmentTypeId, resolveTemplate, getTemplateTree, overrideImpactPreview, resolveEffectivePages, findEffectiveParent
- **ValuationCalculatorService** (`apps/backend/src/modules/valuation/application/services/valuation-calculator.service.ts`): Methods: N/A

### GraphQL Resolvers

- **HealthResolver** (`apps/backend/src/common/health/health.resolver.ts`): Services Used: N/A
- **JournalEntryType** (`apps/backend/src/modules/accounting/interface/resolvers/accounting.resolver.ts`): Services Used: AccountingService
- **AddressType** (`apps/backend/src/modules/address/interface/resolvers/address.resolver.ts`): Services Used: AddressService
- **AuthResolver** (`apps/backend/src/modules/auth/interface/resolvers/auth.resolver.ts`): Services Used: AuthService, EmailService
- **SystemConfigEntryType** (`apps/backend/src/modules/auth/interface/resolvers/system-config.resolver.ts`): Services Used: N/A
- **AttributeConfigResolver** (`apps/backend/src/modules/catalog/interface/resolvers/attribute-config.resolver.ts`): Services Used: AttributeConfigService
- **AuditLogResolver** (`apps/backend/src/modules/catalog/interface/resolvers/audit-log.resolver.ts`): Services Used: N/A
- **BrandResolver** (`apps/backend/src/modules/catalog/interface/resolvers/brand.resolver.ts`): Services Used: CatalogReadService, CatalogWriteService
- **BusinessFlowResolver** (`apps/backend/src/modules/catalog/interface/resolvers/business-flow.resolver.ts`): Services Used: BusinessFlowService
- **CategoryResolver** (`apps/backend/src/modules/catalog/interface/resolvers/category.resolver.ts`): Services Used: CatalogReadService, CatalogWriteService
- **ProductResolver** (`apps/backend/src/modules/catalog/interface/resolvers/product.resolver.ts`): Services Used: CatalogReadService, CatalogWriteService
- **SearchResultType** (`apps/backend/src/modules/catalog/interface/resolvers/search.resolver.ts`): Services Used: N/A
- **SeedResolver** (`apps/backend/src/modules/catalog/interface/resolvers/seed.resolver.ts`): Services Used: BusinessFlowService, CatalogWriteService
- **SeriesResolver** (`apps/backend/src/modules/catalog/interface/resolvers/series.resolver.ts`): Services Used: CatalogReadService, CatalogWriteService
- **ProductVariantResolver** (`apps/backend/src/modules/catalog/interface/resolvers/variant.resolver.ts`): Services Used: CatalogReadService, CatalogWriteService, PriceService
- **WorkflowConfigResolver** (`apps/backend/src/modules/catalog/interface/resolvers/workflow-config.resolver.ts`): Services Used: WorkflowConfigService
- **WarehouseType** (`apps/backend/src/modules/inventory/interface/resolvers/inventory.resolver.ts`): Services Used: InventoryService
- **LeadType** (`apps/backend/src/modules/lead/interface/resolvers/lead.resolver.ts`): Services Used: LeadService
- **OfferType** (`apps/backend/src/modules/offer/interface/resolvers/offer.resolver.ts`): Services Used: OfferService
- **CustomerOrderType** (`apps/backend/src/modules/order/interface/resolvers/order.resolver.ts`): Services Used: OrderService
- **PaymentType** (`apps/backend/src/modules/payment/interface/resolvers/payment.resolver.ts`): Services Used: PaymentService
- **PickupType** (`apps/backend/src/modules/pickup/interface/resolvers/pickup.resolver.ts`): Services Used: PickupService
- **ProcurementType** (`apps/backend/src/modules/procurement/interface/resolvers/procurement.resolver.ts`): Services Used: ProcurementService
- **ProfitabilityReportType** (`apps/backend/src/modules/profitability/interface/resolvers/profitability.resolver.ts`): Services Used: ProfitabilityService
- **QCAuditType** (`apps/backend/src/modules/qc/interface/resolvers/qc.resolver.ts`): Services Used: QCService
- **ReferralConfigType** (`apps/backend/src/modules/referral/interface/resolvers/referral.resolver.ts`): Services Used: ReferralService
- **RefurbishmentType** (`apps/backend/src/modules/refurbishment/interface/resolvers/refurbishment.resolver.ts`): Services Used: RefurbishmentService
- **SalesOrderType** (`apps/backend/src/modules/sales/interface/resolvers/sales.resolver.ts`): Services Used: SalesService
- **SettlementType** (`apps/backend/src/modules/settlement/interface/resolvers/settlement.resolver.ts`): Services Used: SettlementService
- **AssessmentTypeResolver** (`apps/backend/src/modules/valuation/interface/resolvers/assessment-type.resolver.ts`): Services Used: AssessmentTypeService
- **AssessmentResolver** (`apps/backend/src/modules/valuation/interface/resolvers/assessment.resolver.ts`): Services Used: AssessmentService, TemplateCrudService, TemplateService
- **PageDesignerResolver** (`apps/backend/src/modules/valuation/interface/resolvers/page-designer.resolver.ts`): Services Used: PageDesignerService
- **TemplateCrudResolver** (`apps/backend/src/modules/valuation/interface/resolvers/template-crud.resolver.ts`): Services Used: BusinessCodeService, TemplateCrudService, TemplateOverrideService, TemplateService
- **AssessmentTemplateFieldResolver** (`apps/backend/src/modules/valuation/interface/resolvers/template-field.resolver.ts`): Services Used: N/A
- **ValuationOperationsResolver** (`apps/backend/src/modules/valuation/interface/resolvers/valuation-operations.resolver.ts`): Services Used: AssessmentService, ValuationCalculatorService
