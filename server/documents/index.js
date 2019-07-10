//export a function that returns all the necessary HTML and generates the PDF

module.exports = ({
  values: {
    wizardForm5Disabled,
    wizardForm6Disabled,
    wizardForm7Disabled,
    wizardForm8Disabled,
    wizardForm9Disabled,
    wizardForm10Disabled,
    wizardForm11Disabled,
    wizardForm12Disabled,
    wizardForm13Disabled,
    wizardForm14Disabled,
    wizardForm15Disabled,
    wizardForm16Disabled,
    wizardForm17Disabled,
    wizardForm18Disabled,
    wizardForm19Disabled,
    wizardForm20Disabled,
    wizardForm21Disabled,
    wizardForm22Disabled,
    wizardForm23Disabled,
    wizardForm24Disabled,
    wizardForm25Disabled,
    wizardForm26Disabled,
    wizardForm27Disabled,
    wizardForm28Disabled,
    wizardForm29Disabled,
    wizardForm30Disabled,
    wizardForm31Disabled,
    wizardForm32Disabled,
    wizardForm33Disabled,
    wizardForm34Disabled,
    wizardForm35Disabled,
    wizardForm42Disabled,
    wizardForm43Disabled,
    wizardForm44Disabled,
    wizardForm45Disabled,
    wizardForm46Disabled,
    diName,
    diAge,
    diDateofbirth,
    diDateoftesting,
    diEvaluationlocation,
    diEvaluator,
    diGender,
    diGrade,
    diHandedness,
    diSchool,
    paqAddress,
    paqCellPhone,
    paqGuardian,
    paqHomePhone,
    paqName,
    paqWorkPhone,
    reasonReferral1,
    reasonReferral2,
    reasonReferral3,
    recordsReviewed,
    bhPrimaryCaregiverMother,
    bhMotherName,
    bhStepmother,
    bhMotherCellPhone,
    bhMotherOccupation,
    bhMotherLengthEmployement,
    bhMotherPrimaryLanguage,
    bhMotherAge,
    bhMotherHomePhone,
    bhMotherWorkPhone,
    bhMotherEmployer,
    bhMotherHighestGrade,
    bhMotherSecondaryLanguage,
    bhPrimaryCaregiverFather,
    bhFatherName,
    bhStepfather,
    bhFatherCellPhone,
    bhFatherOccupation,
    bhFatherLengthEmployement,
    bhFatherPrimaryLanguage,
    bhFatherAge,
    bhFatherHomePhone,
    bhFatherWorkPhone,
    bhFatherEmployer,
    bhFatherHighestGrade,
    bhFatherSecondaryLanguage,
    bhPrimaryCaregiverName,
    bhOtherParentStepparentAge,
    bhOtherParentStepparentGuardian,
    bhOtherParentStepparentHomePhone,
    bhOtherParentStepparentWorkPhone,
    bhOtherParentStepparentCellPhone,
    bhOtherParentStepparentAddress,
    ccCaregiverGone,
    ccHoursPerDay,
    ccDifferentPeople,
    fhCloseness,
    fhParentalClosenessChoice,
    fhExperienced,
    fhLifeExperiencesDate,
    fhLifeExperiencesAge,
    fhLifeExperiencesDetails,
    fhCustodyMother,
    fhCustodyFather,
    fhCustodyBoth,
    fhVisitation,
    brothersSisters,
    bsGetAlong,
    crResidence,
    crResidenceLength,
    frMovies,
    frGames,
    frMeals,
    frSports,
    frConversations,
    frVisitsRelatives,
    frTelevision,
    frChurch,
    frOther,
    frSpokenLanguage,
    frGrandparentFrequency,
    frEnjoy,
    frDifficult,
    frCareer,
    frEducationLevel,
    frDisciplinarian,
    frDisciplinarianOtherDesc,
    frAgreeDiscipline,
    frDisciplineTechniques,
    mdhPlannedPregnancy,
    mdhDrCare,
    mdhTotalPregnancies,
    mdhPregnancyDifficultConception,
    mdhPregnancyToxemia,
    mdhPregnancyWeightGain,
    mdhPregnancyVomiting,
    mdhPregnancyGermanMeasels,
    mdhPregnancySwelling,
    mdhPregnancyEmotional,
    mdhPregnancyVaginalBleeding,
    mdhPregnancyFlu,
    mdhPregnancyAnemia,
    mdhPregnancyBloodPressure,
    mdhPregnancyInjury,
    mdhOtherComplication,
    mdhOtherComplicationDescription,
    mdhMothersAge,
    mdhFathersAge,
    mdhMothersAgeFirstChild,
    mdhHospitalBirth,
    mdhBirthLocation,
    mdhPregnancyLength,
    mdhBirthWeight,
    mdhLaborLength,
    mdhApgarScore,
    mdhBirthConditionChild,
    mdhBirthConditionMother,
    mdhForceps,
    mdhBreech,
    mdhInduced,
    mdhCeasarean,
    mdhDeliveryComplications,
    mdhIncubator,
    mdhJaundiced,
    mdhBreathingProblems,
    mdhSupplementalOxygen,
    mdhAnesthesia,
    mdhMotherLengthHospital,
    mdhChildLengthHospital,
    mdhTurnOverMonths,
    mdhTurnOverYear,
    mdhWalkDownStairsMonths,
    mdhWalkDownStairsYear,
    mdhSitAloneMonths,
    mdhSitAloneYear,
    mdhAttractedSoundMonths,
    mdhAttractedSoundYear,
    mdhCrawlMonths,
    mdhCrawlYear,
    mdhUnderstandWordsMonths,
    mdhUnderstandWordsYear,
    mdhStandAloneMonths,
    mdhStandAloneYear,
    mdhSpeakFirstWordsMonths,
    mdhSpeakFirstWordsYear,
    mdhWalkAloneMonths,
    mdhWalkAloneYear,
    mdhSpeakSentencesMonths,
    mdhSpeakSentencesYear,
    mdhWalkUpStairsMonths,
    mdhWalkUpStairsYear,
    mdhBreastFed,
    mdhBreastFedWeaned,
    mdhBottleFed,
    mdhBottleFedWeaned,
    mdhToiletTrainedDay,
    mdhToiletTrainedNight,
    mdhBedWetting,
    mdhBedWettingStop,
    mdhBedSoiling,
    mdhBedSoilingStop,
    mdhBedWettingMedicalReasons,
    mdhBedWettingMedicalReasonsDescription,
    mdhWalkingDifficulty,
    mdhWalkingDifficultyDescription,
    mdhUnclearSpeech,
    mdhUnclearSpeechDescription,
    mdhFeedingProblem,
    mdhFeedingProblemDescription,
    mdhUnderweightProblem,
    mdhUnderweightProblemDescription,
    mdhOverweightProblem,
    mdhOverweightProblemDescription,
    mdhColic,
    mdhColicDescription,
    mdhSleepProblem,
    mdhSleepProblemDescription,
    mdhEatingProblem,
    mdhEatingProblemDescription,
    mdhLearningRideBike,
    mdhLearningRideBikeDescription,
    mdhLearningSkip,
    mdhLearningSkipDescription,
    mdhLearningThrowCatch,
    mdhLearningThrowCatchDescription,
    mdhMotorSkillsFirstFour,
    mdhMotorSkillsFirstFourDescription,
    mdhTemperTantrum,
    mdhTemperTantrumDescription,
    mdhNoThriveFirstFour,
    mdhNoThriveFirstFourDescription,
    mdhSeparationAnxiety,
    mdhSeparationAnxietyDescription,
    mdhExcessiveCrying,
    mdhExcessiveCryingDescription,
    mdhChangeWritingHand,
    mhMeaselsMonths,
    mhMeaselsMonthsYear,
    mhRheumaticFeverMonths,
    mhRheumaticFeverYear,
    mhGermanMeaselsMonths,
    mhGermanMeaselsYear,
    mhDiptheriaMonths,
    mhDiptheriaYear,
    mhMumpsMonths,
    mhMumpsYear,
    mhUnderstandWordsMonths,
    mhUnderstandWordsYear,
    mdhMeningitisMonths,
    mdhMeningitisYear,
    mhChickenPoxMonth,
    mhChickenPoxYear,
    mhEncephalitisMonth,
    mhEncephalitisYear,
    mhTuberculosisMonth,
    mhTuberculosisYear,
    mhAnemiaMonth,
    mhAnemiaYear,
    mhWhoopingCoughMonths,
    mhWhoopingCoughYear,
    mhFever104Months,
    mhFever104Year,
    mhScarletFeverMonths,
    mhScarletFeverYear,
    mhBrokenBonesMonths,
    mhBrokenBonesYear,
    mhConcussionMonths,
    mhConcussionYear,
    mhComaLossConsciousnessMonths,
    mhComaLossConsciousnessYear,
    mdColds,
    mdChronicCough,
    mdAsthma,
    mdHayFever,
    mdSinusCondition,
    mdPhysicalExertion,
    mdActivityLimits,
    mdHeartMurmur,
    mdVomiting,
    mdDiarrhea,
    mdConstipation,
    mdStomachPain,
    mdUrination,
    mdPainUrinating,
    mdExessiveUrination,
    mdUrineOdor,
    mdMusclePain,
    mdClumsyWalk,
    mdPoorPosture,
    mdOtherMuscleProblems,
    mdFrequentRashes,
    mdBruisesEasily,
    mdSores,
    mdSevereAcne,
    mdItchySkin,
    mdSeizuresConvulsions,
    mdSpeechDefects,
    mdAccidentProne,
    mdNailBiter,
    mdSucksThumb,
    mdGrindsTeeth,
    mdTwitches,
    mdBangsHead,
    mdRocks,
    mdBowelMovements,
    mdNeurologicalMeds,
    mdNeurologicalMedsDate,
    mdNeurologicalMedsKind,
    mdNeurologicalTranquilizer,
    mdNeurologicalTranquilizerDate,
    mdNeurologicalTranquilizerKind,
    mdNeurologicalAdhdMeds,
    mdNeurologicalAdhdMedsDate,
    mdNeurologicalAdhdMedsKind,
    mdhAllergiesMedicine,
    mdhAllergiesMedicineDescription,
    mdhAllergiesFood,
    mdhAllergiesFoodDescription,
    mdhAllergiesOther,
    mdhAllergiesOtherDescription,
    mdhSpeechStuttering,
    mdhSpeechStutteringDescription,
    mdhSpeechUnclear,
    mdhSpeechUnclearDescription,
    mdhSpeechOther,
    mdhSpeechOtherDescription,
    mdhSpeechExamDate,
    mdhHearingEarInfection,
    mdhHearingProblems,
    mdhHearingTubes,
    mdhHearingEarInfectionDescription,
    mdhHearingProblemsDescription,
    mdhHearingTubesDescription,
    mdhHearingExamDate,
    mdhVisionProblems,
    mdhVisionProblemsDescription,
    mdhGlasses,
    mdhGlassesDescription,
    mdhVisionExamDate,
    mcDrName,
    mcDrPhone,
    mcDrVisitCount,
    mcDrLastVisit,
    mcDrLastVisitMonths,
    medicationListGroup,
    mcSexualAbuse,
    counselingGroup,
    nuerologicalGroup,
    psychologyGroup,
    fhDrugAbuse,
    fhAlzheimers,
    fhBehaviorDisorder,
    fhBirthDefect,
    fhCancer,
    fhCerbralPalsy,
    fhCysticFibrosis,
    fhDiabetes,
    fhEmotionalDisturbance,
    fhFoodAllergies,
    fhHeartDisease,
    fhHemophilia,
    fhHighBloodPressure,
    fhHuntingtonChorea,
    fhIntellectualDisability,
    fhKidneyDisease,
    fhMentalIllness,
    fhMigraines,
    fhMultipleSclerosis,
    fhMuscularDystrophy,
    fhNervousnes,
    fhOtherLearningDisability,
    fhParkinsons,
    fhPhysicalHandicap,
    fhReadingProblem,
    fhSeizures,
    fhSevereHeadInjury,
    fhSickleCell,
    fhSpeechProblem,
    fhStroke,
    fhTaySachs,
    fhTourettes,
    fhTuberculosis,
    fhOther,
    fhFathersHealth,
    fhMothersHealth,
    specialEdGroup,
    fRelatingProblems,
    fRelatingProblemsDesc,
    fFight,
    fFightDesc,
    fYoungerFriends,
    fYoungerFriendsDesc,
    fMakingFriends,
    fMakingFriendsDesc,
    fAlone,
    fAloneDesc,
    fNeighbhoodFriendsDesc,
    fNeighbhoodFriends,
    fRolePeerGroupGames,
    fSmokeCigarettes,
    fChewTobacco,
    fInhale,
    fAlcholol,
    fDrugs,
    riActivitesSports,
    riActivitesHobbies,
    riActivitesOther,
    btOverstimulated,
    btAttentionSpan,
    btSelfControl,
    btUnhappy,
    btAffectionless,
    btHidesFeelings,
    btOverEngergetic,
    btImpulsive,
    btOverreactsProblems,
    btShy,
    btParentalAttention,
    btCannotCalm,
    btFears,
    btAngry,
    ehDaycare,
    ehDaycareAge,
    ehDaycareTime,
    ehDaycareDays,
    ehDaycareProblems,
    ehKindergarten,
    ehKindergartenProblems,
    ehChangedSchools,
    ehChangedSchoolsDesc,
    ehRepeatGrade,
    ehGradeRepeatDesc,
    ehGradeSkip,
    ehGradeSkipDesc,
    ehDifficultyReading,
    ehDifficultyReadingDesc,
    ehDifficultyMath,
    ehDifficultyMathDesc,
    ehPoorGrades,
    ehPoorGradesDesc,
    ehSpecialEd,
    ehSpecialEdDesc,
    ehSpecialEdCurrent,
    ehTypeSpecialEdClass,
    ehTypeSpecialEdHours,
    ehDislikesSchool,
    ehAbsent,
    ehAbsentDesc,
    ehGraduateHsDesc,
    ehTeacherConcerns,
    ehTeacherConcernsDesc,
    rdaReligonAffiliation,
    rdaReligonInvolvement,
    rdaSpiritualImportance,
    rdaReligonBuilding,
    rdaEthnicity,
    rdaRace,
    rdaIdenficationOther,
    otherInformation,
    WIATIII,
    NelsonDenny,
    WJIVACH,
    BRIEF,
    Conners3,
    DKEFS,
    RBANS,
    NEPSYII,
    QIKCPT,
    VinelandII,
    ADOS2,
    CARS2,
    GARS3,
    WISCV,
    CTONI2,
    DASII,
    WASIII,
    WAISIV,
    WJIVCOG,
    WPPSIIV,
    WRAML2,
    GORT5,
    WMSIV,
    WRAVMA,
    BeeryVMI,
    BASC3,
    PIY,
    HTP,
    MCMIIV,
    MMPI2,
    MMPIA,
    Rorschach,
    TSCC,
    t59EarlyYearsCore,
    t1SimilaritiesScore,
    t2VocabularyScore,
    t3InformationScore,
    t4ComprehensionScore,
    t5BlockDesignScore,
    t6VocabularyScore,
    t7MatrixReasoningScore,
    t8FigureWeightsScore,
    t9PictureConceptsScore,
    t10ArithmeticScore,
    t11DigitSpanScore,
    t12PictureSpanScore,
    t13LetterNumberSequencingScore,
    t14CodingScore,
    t15SymbolSearchScore,
    t16CancellationScore,
    t73NamingSpeedLiteracyScore,
    t74NamingSpeedQualityScore,
    t75ImmediateSymbolTranslationScore,
    t76DelayedSymbolTranslationScore,
    t77RecognitionSymbolTranslationScore,
    t30NelsonDennyStandardScore,
    t30NelsonDennyPercentile,
    t30NelsonDennyGradeEquivalent,
    t31NelsonDennyStandardScore,
    t31NelsonDennyPercentile,
    t31NelsonDennyGradeEquivalent,
    t46QikCptAccuracyIndexScore,
    t47QikCptSustainedAttentionScore,
    t48QikCptImpulseControlScore,
    t49QikCptPerformanceIndexScore,
    t50QikCptSpeedOfResponseScore,
    t51QikCptConsistencyOfResponseScore,
    t78InconsistencyScaleScore,
    t79NegativityScaleScore,
    t82InhibitScore,
    t83ShiftScore,
    t84EmotionalControlScore,
    t85InitiateScore,
    t86WorkingMemoryScore,
    t87PlanOrganizeScore,
    t88OrganizationOfMaterialsScore,
    t89MonitorScore,
    t90InhibitScore,
    t91ShiftScore,
    t92EmotionalControlScore,
    t93InitiateScore,
    t94WorkingMemoryScore,
    t95PlanOrganizeScore,
    t96OrganizationOfMaterialsScore,
    t97MonitorScore,
    t98RelatingToPeopleScore,
    t99ImitationScore,
    t100EmotionalResponseScore,
    t101BodyUseScore,
    t102ObjectUseScore,
    t103AdaptionToChangeScore,
    t104VisualResponseScore,
    t105ListeningResponseScore,
    t106TasteSmellAndTouchResponseAndUseSctore,
    t107FearOrNervousnessScore,
    t108VerbalCommunicationScore,
    t109NonverbalCommunicationScore,
    t110ActivityLevelScore,
    t111LevelAndConsistencyOfIntellectualRestponseScore,
    t112GeneralImpressionsScore,
    t113SocialEmotionalUnderstandingScore,
    t114EmotionalExpressionAndRegulationOfEmtotionsScore,
    t115RelatingToPeopleScore,
    t116BodyUseScore,
    t117ObjectUseInPlayScore,
    t118VisualResponseScore,
    t119ListeningResponseScore,
    t646AdaptationToChangeRestrictedInterestsScore,
    t120InattentionScore,
    t121HyperactivityImpulsivityScore,
    t122LearningProblemsScore,
    t123ExecutiveFunctioningScore,
    t124DefianceAggressionScore,
    t125PeerRelationsScore,
    t126AdhdInattentiveScore,
    t127AdhdHyperactiveImpulsiveScore,
    t128ConductDisorderScore,
    t129OppositionalDefiantDisorderScore,
    t130Conners3AdhdIndexScore,
    t131Conners3GlobalIndexScore,
    t132AnxietyScore,
    t133DepressionScore,
    t134SevereConductScore,
    t135PositiveImpressionScore,
    t136NegativeImpressionScore,
    t137InconsistencyIndexScore,
    t138InattentionScore,
    t139HyperactivityImpulsivityScore,
    t140LearningProblemsExecutiveFunctioningScore,
    t141LearningProblemsScore,
    t142ExecutiveFunctioningScore,
    t143DefianceAggressionScore,
    t144PeerRelationsScore,
    t145AdhdInattentiveScore,
    t146AdhdHyperactiveImpulsiveScore,
    t147ConductDisorderScore,
    t148OppositionalDefiantDisorderScore,
    t149Conners3AdhdIndexScore,
    t150Conners3GlobalIndexScore,
    t151AnxietyScore,
    t152DepressionScore,
    t153SevereConductScore,
    t154PositiveImpressionScore,
    t155NegativeImpressionScore,
    t156InconsistencyIndexScore,
    t157InattentionScore,
    t158HyperactivityImpulsivityScore,
    t159LearningProblemsScore,
    t160DefianceAggressionScore,
    t161FamilyRelationsScore,
    t162AdhdInattentiveScore,
    t163AdhdHyperactiveImpulsiveScore,
    t164ConductDisorderScore,
    t165OppositionalDefiantDisorderScore,
    t166Conners3AdhdIndexScore,
    t644AnxietyScore,
    t167DepressionScore,
    t168SevereConductScore,
    t169PositiveImpressionScore,
    t170NegativeImpressionScore,
    t171InconsistencyIndexScore,
    t172PictorialAnalogiesScore,
    t173GeometricAnalogiesScore,
    t174PictorialCategoriesScore,
    t175GeometricCategoriesScore,
    t176PictorialSequencesScore,
    t177GeometricSequencesScore,
    t178PictorialScaleScore,
    t179GeometricScaleScore,
    t180FullScaleScore,
    t181VerbalComprehensionScore,
    t182PictureSimilaritiesScore,
    t183NamingVocabularyScore,
    t184RecallOfObjectsImmediateScore,
    t185PatternConstructionScore,
    t186MatricesScore,
    t187RecallOfObjectsDelayedScore,
    t188CopyingScore,
    t189RecallOfDesignsScore,
    t190WordDefinitionsScore,
    t191RecallOfObjectsImmediateScore,
    t192PatternConstructionScore,
    t193MatricesScore,
    t194RecallOfObjectsDelayedScore,
    t195VerbalSimilaritiesScore,
    t196SequentialAndQuantitativeReasoningScore,
    t197RecallOfDigitsForwardScore,
    t198RecognitionOfPicturesScore,
    t199EarlyNumberConceptsScore,
    t200MatchingLetterLikeFormsScore,
    t201RecallOfSequentialOrderScore,
    t202SpeedOfInformationProcessingScore,
    t203RecallOfDigitsBackwardScore,
    t204PhonologicalProcessingScore,
    t205RapidNamingScore,
    t206TrailMakingTestScore,
    t207VerbalFluencyTestScore,
    t208DesignFluencyTestScore,
    t209ColorWordInterferenceTestScore,
    t210SortingTestScore,
    t211TwentyQuestionsTestScore,
    t212WordContextTestScore,
    t213TowerTestScore,
    t214ProverbTestScore,
    t215RestrictiveRepetitiveBehaviorsScore,
    t216SocialInteractionScore,
    t217SocialCommunicationScore,
    t218EmotionalResponsesScore,
    t219CognitiveStyleScore,
    t220MaladaptiveSpeechScore,
    t221ListLearningScore,
    t222StoryMemoryScore,
    t223FigureCopyScore,
    t224LineOrientationScore,
    t225PictureNamingScore,
    t226SemanticFluencyScore,
    t227DigitSpanScore,
    t228CodingScore,
    t229ListRecallScore,
    t230ListRecognitionScore,
    t231StoryRecallScore,
    t232FigureRecallScore,
    t233ReceptiveScore,
    t234ExpressiveScore,
    t235WrittenScore,
    t236PersonalScore,
    t237DomesticScore,
    t238CommunityScore,
    t239InterpersonalRelationshipsScore,
    t240PlayAndLeisureTimeScore,
    t241CopingSkillsScore,
    t242GrossScore,
    t243FineScore,
    t244MaladaptiveBehaviorIndexScore,
    t245MaladaptiveBehaviorCriticalItemsScore,
    t246SimilaritiesScore,
    t247VocabularyScore,
    t248BlockDesignScore,
    t249MatrixReasoningScore,
    t250ListeningComprehensionGradesPk12Score,
    t251EarlyReadingSkillsGradesPk3Score,
    t252ReadingComprehensionGrades112Score,
    t253MathProblemSolvingGradesPk12Score,
    t254AlphabetWritingFluencyGradesPk3Score,
    t255SentenceCompositionGrades112Score,
    t256WordReadingGrades112Score,
    t257EssayCompositionGrades312Score,
    t258PseudowordDecodingGrades112Score,
    t259NumericalOperationsGradesk12Score,
    t260OralExpressionGradespk12Score,
    t261OralReadingFluencyGrades112Score,
    t262ApellingGradesk12Score,
    t263MathFluencyAdditionScore,
    t264MathFluencySubtractionScore,
    t265MathFluencyMultiplicationScore,
    t266StoryMemoryScore,
    t267VerbalLearningScore,
    t268DesignMemoryScore,
    t269PictureMemoryScore,
    t270FingerWindowsScore,
    t271NumberLetterScore,
    t272SentenceMemoryScore,
    t273SoundSymbolScore,
    t274VerbalWorkingMemoryScore,
    t275SymbolicWorkingMemoryScore,
    t276StoryMemoryDelayRecallScore,
    t277VerbalLearningDelayRecallScore,
    t278SoundSymbolDelayRecallScore,
    t279StoryMemoryRecognitionScore,
    t280VerbalLearningRecognitionScore,
    t281DesignMemoryRecognitionScore,
    t282PictureMemoryRecognitionScore,
    t283FIndexScore,
    t284LIndexScore,
    t285VIndexScore,
    t286AlcoholAbuseScore,
    t288AttentionProblemsScore,
    t289AttitudeToSchoolScore,
    t287AnxietyScore,
    t290AttitudeToTeachersScore,
    t291AtypicalityScore,
    t292DepressionScore,
    t293HyperactivityScore,
    t294LocusOfControlScore,
    t295SchoolMaladjustmentScore,
    t298SocialStressScore,
    t296SensationSeekingScore,
    t297SenseOfInadequacyScore,
    t299SomatizationScore,
    t300InterpersonalRelationsScore,
    t301RelationsWithParentsScore,
    t302SelfEsteemScore,
    t303SelfRelianceScore,
    t304AngerControlScore,
    t305EgoStrengthScore,
    t306ManiaScore,
    t307TestAnxietyScore,
    t308AttitudeToSchoolScore,
    t309AttitudeToTeachersScore,
    t310AtypicalityScore,
    t311LocusOfControlScore,
    t312SocialStressScore,
    t313AnxietyScore,
    t314DepressionScore,
    t315SenseOfInadequacyScore,
    t316AttentionProblemsScore,
    t317HyperactivityScore,
    t318SocialStressScore,
    t319AnxietyScore,
    t320DepressionScore,
    t323SelfRelianceScore,
    t321SenseOfInadequacyScore,
    t322SelfEsteemScore,
    t662SocialStressScore,
    t664AnxietyScore,
    t665DepressionScore,
    t666SenseOfInadequacyScore,
    t667SelfEsteemScore,
    t668SelfRelianceScore,
    t324InterpersonalRelationsScore,
    t325RelationsWithParentsScore,
    t327SelfRelianceScore,
    t326SelfEsteemScore,
    t328AttitudeToSchoolScore,
    t329AttitudeToTeachersScore,
    t330SensationSeekingScore,
    t331AtypicalityScore,
    t332LocusOfControlScore,
    t333SocialStressScore,
    t334AnxietyScore,
    t335DepressionScore,
    t336SenseOfInadequacyScore,
    t337SomatizationScore,
    t338AttentionProblemsScore,
    t339HyperactivityScore,
    t340SocialStressScore,
    t341AnxietyScore,
    t342DepressionScore,
    t345SelfRelianceScore,
    t343SenseOfInadequacyScore,
    t344SelfEsteemScore,
    t346InterpersonalRelationsScore,
    t347RelationsWithParentsScore,
    t349SelfRelianceScore,
    t348SelfEsteemScore,
    t350AtypicalityScore,
    t351LocusOfControlScore,
    t352SocialStressScore,
    t353AnxietyScore,
    t354DepressionScore,
    t355SenseOfInadequacyScore,
    t356SomatizationScore,
    t357AttentionProblemsScore,
    t358HyperactivityScore,
    t359SocialStressScore,
    t360AnxietyScore,
    t361DepressionScore,
    t364SelfRelianceScore,
    t362SenseOfInadequacyScore,
    t363SelfEsteemScore,
    t365InterpersonalRelationsScore,
    t366RelationsWithParentsScore,
    t368SelfRelianceScore,
    t367SelfEsteemScore,
    t369FIndexScore,
    t370AggressionScore,
    t372AttentionProblemsScore,
    t371AnxietyScore,
    t373AtypicalityScore,
    t374ConductProblemsScore,
    t375DepressionScore,
    t376HyperactivityScore,
    t377LearningProblemsScore,
    t378SomatizationScore,
    t379WithdrawalScore,
    t380ActivitiesOfDailyLivingScore,
    t381AdaptabilityScore,
    t382FunctionalCommunicationScore,
    t383LeadershipScore,
    t384SocialSkillsScore,
    t385StudySkillsScore,
    t386AngerControlScore,
    t387BullyingScore,
    t388DevelopmentalSocialDisordersScore,
    t389EmotionalSelfControlScore,
    t390ExecutiveFunctioningScore,
    t391NegativeEmotionalityScore,
    t392ResiliencyScore,
    t393HyperactivityScore,
    t394AggressionScore,
    t395AnxietyScore,
    t396DepressionScore,
    t397SomatizationScore,
    t398AdaptabilityScore,
    t399SocialSkillsScore,
    t400FunctionalCommunicationScore,
    t401HyperactivityScore,
    t402AggressionScore,
    t403DepressionScore,
    t404AttentionProblemsScore,
    t406WithdrawalScore,
    t405AtypicalityScore,
    t407HyperactivityScore,
    t408AggressionScore,
    t409ConductProblemsScore,
    t410AnxietyScore,
    t411DepressionScore,
    t412SomatizationScore,
    t413LearningProblemsScore,
    t414AttentionProblemsScore,
    t415AdaptabilityScore,
    t416SocialSkillsScore,
    t417FunctionalCommunicationScore,
    t418LeadershipScore,
    t419StudySkillsScore,
    t420HyperactivityScore,
    t421AggressionScore,
    t422DepressionScore,
    t423AttentionProblemsScore,
    t425WithdrawalScore,
    t424AtypicalityScore,
    t426HyperactivityScore,
    t427AggressionScore,
    t428AnxietyScore,
    t429DepressionScore,
    t430SomatizationScore,
    t431AdaptabilityScore,
    t432SocialSkillsScore,
    t433FunctionalCommunicationScore,
    t434ActivitiesOfDailyLivingScore,
    t435HyperactivityScore,
    t436AggressionScore,
    t437DepressionScore,
    t438AttentionProblemsScore,
    t439AtypicalityScore,
    t440WithdrawalScore,
    t441HyperactivityScore,
    t442AggressionScore,
    t443ConductProblemsScore,
    t444AnxietyScore,
    t445DepressionScore,
    t446SomatizationScore,
    t447AdaptabilityScore,
    t448SocialSkillsScore,
    t449FunctionalCommunicationScore,
    t450ActivitiesOfDailyLivingScore,
    t451HyperactivityScore,
    t452AggressionScore,
    t453DepressionScore,
    t454AttentionProblemsScore,
    t455AtypicalityScore,
    t456WithdrawalScore,
    t459InformationScore,
    t457SimilaritiesScore,
    t458VocabularyScore,
    t460ComprehensionScore,
    t461BlockDesignScore,
    t462MatrixReasoningScore,
    t463VisualPuzzlesScore,
    t464FigureWeightsScore,
    t465PictureCompletionScore,
    t466DigitSpanScore,
    t467ArithmeticScore,
    t468LetterNumberSequencingScore,
    t469CodingScore,
    t470SymbolSearchScore,
    t471CancellationScore,
    t472PoorAchievementAndMemoryScore,
    t473InadequateAbilitiesScore,
    t474LearningProblemsScore,
    t475BrashnessScore,
    t476DistractibilityAndOveractivityScore,
    t477ImpulsivityScore,
    t478AntisocialBehaviorScore,
    t479DyscontrolScore,
    t480NoncomplianceScore,
    t481ParentChildConflictScore,
    t482ParentMaladjustmentScore,
    t483MaritalDiscordScore,
    t484FeelingsOfAlienationScore,
    t485HallucinationsAndDelusionsScore,
    t486PsychosomaticSyndromeScore,
    t487MuscularTensionAndAnxietyScore,
    t488PreoccupationWithDiseaseScore,
    t489FearAndWorryScore,
    t490DepressionScore,
    t491SleepDisturbanceScore,
    t492SocialIntroversionScore,
    t493IsolationScore,
    t494LimitedPeerStatusScore,
    t495ConflictWithPeersScore,
    t496Schizoid1Score,
    t497Avoidant2aScore,
    t498Depressive2bScore,
    t499Dependent3Score,
    t500Histrionic4Score,
    t501Narcissistic5Score,
    t502Antisocial6aScore,
    t503SadisticAggressive6bScore,
    t504Compulsive7Score,
    t505NegativisticPassiveAggressive8aScore,
    t506MasochisticSelfDefeating8bScore,
    t507SchizotypalSScore,
    t508borderlineCScore,
    t509ParanoidPScore,
    t510AnxietyAScore,
    t511SomatoformHScore,
    t512bipolarManicNScore,
    t513DysthymiaDScore,
    t514AlcoholDependencebScore,
    t515DrugDependenceTScore,
    t516PostTraumaticStressDisorderRScore,
    t517ThoughtDisorderSsScore,
    t518MajorDepressionCcScore,
    t519DelusionalDisorderPpScore,
    t520DisclosureXScore,
    t521DesirabilityYScore,
    t522DebasementZScore,
    t523InvalidityVScore,
    t524InconsistencyWScore,
    t525HypochondriasisHsScore,
    t526DepressionDScore,
    t527HysteriaHyScore,
    t528PsychopathicDeviatePdScore,
    t529MasculinityFemininityMfScore,
    t530ParanoiaPaScore,
    t531PsychastheniaPtScore,
    t532SchizophreniaScScore,
    t533HypomaniaMaScore,
    t534SocialIntroversionSiScore,
    t535LieLScore,
    t536FScore,
    t537BackFFbScore,
    t538KScore,
    t539HypochondriasisHsScore,
    t540DepressionDScore,
    t541HysteriaHyScore,
    t542PsychopathicDeviatePdScore,
    t543MasculinityFemininityMfScore,
    t544ParanoiaPaScore,
    t545PsychastheniaPtScore,
    t546SchizophreniaScScore,
    t547HypomaniaMaScore,
    t548SocialIntroversionSiScore,
    t549CnsScore,
    t550VrinScore,
    t551TrinScore,
    t552FScore,
    t553F1Score,
    t554F2Score,
    t555LScore,
    t556KScore,
    t557AnimalSortingAsScore,
    t558AuditoryAttentionAaAndResponseSetRsScore,
    t559ClocksClScore,
    t560DesignFluencyDfScore,
    t561InhibitionInScore,
    t562StatueStScore,
    t563BodyPartNamingBpnAndIdentificationBpiScore,
    t564ComprehensionOfInstructionsCiScore,
    t565OromotorSequencesOsScore,
    t566PhonologicalProcessingPhScore,
    t567RepetitionNonsenseWordsRnScore,
    t568SpeededNamingSnScore,
    t569WordGenerationWgScore,
    t571ListMemoryLmListMemoryDelayedLmdScore,
    t572MemoryForDesignsMdMemoryForDesignsDelayedMddScore,
    t573MemoryForFacesMfMemoryForFacesDelayedMfdScore,
    t574MemoryForNamesMnMemoryForNamesDelayedMndScore,
    t575NarrativeMemoryNmScore,
    t576SentenceRepetitionSrScore,
    t577WordListInterferenceWiScore,
    t578FingertipTappingFtScore,
    t579ImitatingHandPositionsIhScore,
    t580ManualMotorSequencesMmScore,
    t581VisuomotorPrecisionVpScore,
    t582AffectRecognitionArScore,
    t583TheoryOfMindTmScore,
    t584ArrowsAwScore,
    t585BlockConstructionBcScore,
    t586DesignCopyingDcScore,
    t587GeometricPuzzlesGpScore,
    t588PicturePuzzlesPpScore,
    t589RouteFindingRfScore,
    t590DrawingScore,
    t591MatchingScore,
    t592PegboardScore,
    t593VocabularyScore,
    t594GeneralInformationScore,
    t595NumberSeriesScore,
    t596ConceptFormationScore,
    t597AnalysisSynthesisScore,
    t598VerbalAttentionScore,
    t599NumbersReversedScore,
    t600ObjectNumberSequencingScore,
    t601PairCancellationScore,
    t645LetterPatternMatchingScore,
    t602PhonologicalProcessingScore,
    t603NonWordRepetitionScore,
    t604RecallScore,
    t605VisualAuditoryLearningScore,
    t606VisualizationScore,
    t607PictureRecognitionScore,
    t608UnderresponseUndScore,
    t609HyperresponseHypScore,
    t610AnxietyAnxScore,
    t611DepressionDepScore,
    t612AngerAngScore,
    t613PosttraumaticStressPtsScore,
    t614DissociationDisScore,
    t615SexualConcernsScScore,
    t616LetterWordIdentificationScore,
    t617WordAttackScore,
    t618PassageComprehensionScore,
    t619ReadingRecallScore,
    t620ReadingVocabularyScore,
    t621CalculationScore,
    t622MathFactFluencyScore,
    t623AppliedProblemsScore,
    t624NumberMatricesScore,
    t625WritingSamplesScore,
    t626SentenceWritingFluencyScore,
    t627OralReadingScore,
    t628SentenceReadingFluencyScore,
    t629SpellingScore,
    t630SpellingOfSoundsScore,
    t630SoundAwarenessScore,
    t631EditingScore,
    t632ScienceScore,
    t633SocialStudiesScore,
    t634HumanitiesScore,
    t635WordAttackScore,
    t636SpellingOfSoundsScore,
    t637BriefCognitiveStatusExamScore,
    t638LogicalMemoryScore,
    t639VerbalPairedAssociatesScore,
    t640DesignsScore,
    t641VisualReproductionScore,
    t642SpatialAdditionScore,
    t643SymbolSpanScore,
    t647SimilaritiesScore,
    t648VocabularyScore,
    t649InformationScore,
    t650ComprehensionScore,
    t653BlockDesignScore,
    t654ObjectAssemblyScore,
    t657BugSearchScore,
    t658CancellationScore,
    t659AnimalCodingScore,
    t651MatrixReasoningScore,
    t652PictureConceptsScore,
    t655PictureMemoryScore,
    t656ZooLocationsScore,
    t660ReceptiveVocabularyScore,
    t661PictureNamingScore,
    t733RateScore,
    t734AccuracyScore,
    t735FluencyScore,
    t736ComprehensionScore,
    t737Trail1Score,
    t738Trial2Score,
    t739RetentionTrialScore,
    t743VerbalComprehensionScore,
    t744PictureSimilaritiesScore,
    t745NamingVocabularyScore,
    t746PatternConstructionScore,
    t747MatricesScore,
    t748CopyingScore,
    t749RecallOfObjectsImmediateScore,
    t750RecallOfObjectsDelayedScore,
    t751RecallOfDigitsForwardScore,
    t752RecognitionOfPicturesScore,
    t753EarlyNumberConceptsScore,
    t754MatchingLetterLikeFormsScore,
    t755RecallOfSequentialOrderScore,
    t756SpeedOfInformationProcessingScore,
    t757RecallOfDigitsBackwardScore,
    t758PhonologicalProcessingScore,
    t759RapidNamingScore,
    t760RecallOfDesignsScore,
    t761WordDefinitionsScore,
    t762PatternConstructionScore,
    t763MatricesScore,
    t764VerbalSimilaritiesScore,
    t765SequentialAndQuantitativeReasoningScore,
    t766RecallOfObjectsImmediateScore,
    t767RecallOfObjectsDelayedScore,
    t768RecallOfDigitsForwardScore,
    t769RecognitionOfPicturesScore,
    t770RecallOfSequentialOrderScore,
    t771SpeedOfInformationProcessingScore,
    t772RecallOfDigitsBackwardScore,
    t773PhonologicalProcessingScore,
    t110PoorAchievementAndMemoryPercentileRank,
    t110InadequateAbilitiesPercentileRank,
    t110LearningProblemsPercentileRank,
    t111BrashnessPercentileRank,
    t111DistractibilityAndOveractivityPercentileRank,
    t111ImpulsivityPercentileRank,
    t112AntisocialBehaviorPercentileRank,
    t112DyscontrolPercentileRank,
    t112NoncompliancePercentileRank,
    t113ParentChildConflictPercentileRank,
    t113ParentMaladjustmentPercentileRank,
    t113MaritalDiscordPercentileRank,
    t114FeelingsOfAlienationPercentileRank,
    t114HallucinationsAndDelusionsPercentileRank,
    t115PsychosomaticSyndromePercentileRank,
    t115MuscularTensionAndAnxietyPercentileRank,
    t115PreoccupationWithDiseasePercentileRank,
    t116FearAndWorryPercentileRank,
    t116DepressionPercentileRank,
    t116SleepDisturbancePercentileRank,
    t117SocialIntroversionPercentileRank,
    t117IsolationPercentileRank,
    t118LimitedPeerStatusPercentileRank,
    t118ConflictWithPeersPercentileRank,
    t33Gort5Percentile,
    t33Gort5AgeLevelEquivalency,
    t33Gort5GradeLevelEquivalency,
    t34Gort5Percentile,
    t34Gort5AgeLevelEquivalency,
    t34Gort5GradeLevelEquivalency,
    t35Gort5Percentile,
    t35Gort5AgeLevelEquivalency,
    t35Gort5GradeLevelEquivalency,
    t36Gort5Percentile,
    t36Gort5AgeLevelEquivalency,
    t36Gort5GradeLevelEquivalency,
    t57WasiiiVerbalComprehensionConsistent,
    t57WasiiiVerbalComprehensionInconsistent,
    t57WasiiiVerbalComprehensionFreehandPerformance,
    t57WasiiiVerbalComprehensionCompositeScore,
    t57WasiiiVerbalComprehensionCompositePercentile,
    t57WasiiiVerbalComprehensionCompositeRange,
    t58WasiiiPerceptualReasoningConsistent,
    t58WasiiiPerceptualReasoningInconsistent,
    t58WasiiiPerceptualReasoningCompositeScore,
    t58WasiiiPerceptualReasoningCompositePercentile,
    t58WasiiiPerceptualReasoningCompositeRange,
    t106WaisivVerbalComprehensionConsistent,
    t106WaisIvVerbalComprehensionCompositeScore,
    t106WaisIvVerbalComprehensionCompositePercentile,
    t106WaisIvVerbalComprehensionCompositeRange,
    t107WaisIvPerceptualReasoningConsistent,
    t107WaisIvPerceptualReasoningCompositeScore,
    t107WaisIvPerceptualReasoningCompositePercentile,
    t107WaisIvPerceptualReasoningCompositeRange,
    t108WaisIvWorkingMemoryConsistent,
    t108WaisIvWorkingMemoryCompositeScore,
    t108WaisIvWorkingMemoryCompositePercentile,
    t108WaisIvWorkingMemoryCompositeRange,
    t109WaisIvProcessingSpeedConsistent,
    t109WaisIvProcessingSpeedCompositeScore,
    t109WaisIvProcessingSpeedCompositePercentile,
    t109WaisIvProcessingSpeedCompositeRange,
    t134WjIvCogComprehensionKnowledgeGcConsistent,
    t134WjIvCogComprehensionKnowledgeGcCompositeScore,
    t134WjIvCogComprehensionKnowledgeGcCompositePercentile,
    t134WjIvCogComprehensionKnowledgeGcCompositeRange,
    t135WjIvCogFluidReasoningGfConsistent,
    t135WjIvCogFluidReasoningGfCompositeScore,
    t135WjIvCogFluidReasoningGfCompositePercentile,
    t135WjIvCogFluidReasoningGfCompositeRange,
    t136WjIvCogShortTermWorkingMemoryGwmConsistent,
    t136WjIvCogShortTermWorkingMemoryGwmCompositeScore,
    t136WjIvCogShortTermWorkingMemoryGwmCompositePercentile,
    t136WjIvCogShortTermWorkingMemoryGwmCompositeRange,
    t137WjIvCogCognitiveProcessingSpeedGsConsistent,
    t137WjIvCogCognitiveProcessingSpeedGsCompositeScore,
    t137WjIvCogCognitiveProcessingSpeedGsCompositePercentile,
    t137WjIvCogCognitiveProcessingSpeedGsCompositeRange,
    t138WjIvCogAuditoryProcessingSpeedGaConsistent,
    t138WjIvCogAuditoryProcessingSpeedGaCompositeScore,
    t138WjIvCogAuditoryProcessingSpeedGaCompositePercentile,
    t138WjIvCogAuditoryProcessingSpeedGaCompositeRange,
    t139WjIvCogLongTermRetrievalGlrConsistent,
    t139WjIvCogLongTermRetrievalGlrCompositeScore,
    t139WjIvCogLongTermRetrievalGlrCompositePercentile,
    t139WjIvCogLongTermRetrievalGlrCompositeRange,
    t140WjIvCogVisualProcessingGvConsistent,
    t140WjIvCogVisualProcessingGvCompositeScore,
    t140WjIvCogVisualProcessingGvCompositePercentile,
    t140WjIvCogVisualProcessingGvCompositeRange,
    t153WppsiIvVerbalComprehensionCompositeScore,
    t153WppsiIvVerbalComprehensionCompositePercentile,
    t153WppsiIvVerbalComprehensionCompositeRange,
    t154WppsiIvFluidReasoningCompositeScore,
    t154WppsiIvFluidReasoningCompositePercentile,
    t154WppsiIvFluidReasoningCompositeRange,
    t155WppsiIvVisualSpatialReasoningCompositeScore,
    t155WppsiIvVisualSpatialReasoningCompositePercentile,
    t155WppsiIvVisualSpatialReasoningCompositeRange,
    t156WppsiIvWorkingMemoryCompositeScore,
    t156WppsiIvWorkingMemoryCompositePercentile,
    t156WppsiIvWorkingMemoryCompositeRange,
    t157WppsiIvProcessingSpeedCompositeScore,
    t157WppsiIvProcessingSpeedCompositePercentile,
    t157WppsiIvProcessingSpeedCompositeRange,
    t1IfFsiqIsMeaningful,
    t2IfFsiqIsNotMeaningful,
    t3IfFsiqIsMeaningful,
    t4IfFsiqIsNotMeaningful,
    t5IfFsiqIsMeaningful,
    t6IfFsiqIsNotMeaningful,
    t9IfFsiqIsMeaningful,
    t1WiscvFsiqScore,
    t1WiscvFsiqPercentile,
    t1WiscvFsiqRank,
    t3WasiiiFsiqScore,
    t3WasiiiFsiqPercentile,
    t3WasiiiFsiqRank,
    t5WaisivFsiqScore,
    t5WaisivFsiqPercentile,
    t7WjivCogFsiqRank,
    t7WjivCogFsiqScore,
    t7WjivCogFsiqPercentile,
    t5WaisivFsiqRank,
    t9WppsiivFsiqScore,
    t9WppsiivFsiqPercentile,
    t9WppsiivFsiqRank,
    t2WiscvGaiRange,
    t2WiscvGaiPercentile,
    t6WaisivGaiRange,
    t6WaisivGaiPercentile,
    t7IfGiaIsMeaningful,
    t9WppsiivGaiRange,
    t9WppsiivGaiPercentile,
    t10DasIiGcaScore,
    t10DasIiGcaRange,
    t10DasIiGcaPercentile,
    t10DasIiSncScore,
    t10DasIiSncRange,
    t10DasIiSncPercentile,
    t1WiscVVerbalComprehensionIndexVciCompositeScore,
    t1WiscVVerbalComprehensionIndexVciCompositePercentile,
    t1WiscVVerbalComprehensionIndexVciCompositeRange,
    t2WiscVVisualSpatialIndexVsiCompositeScore,
    t2WiscVVisualSpatialIndexVsiCompositePercentile,
    t2WiscVVisualSpatialIndexVsiCompositeRange,
    t3WiscVFluidReasoningIndexFriCompositeScore,
    t3WiscVFluidReasoningIndexFriCompositePercentile,
    t3WiscVFluidReasoningIndexFriCompositeRange,
    t4WiscVWorkingMemoryIndexWmiCompositeScore,
    t4WiscVWorkingMemoryIndexWmiCompositePercentile,
    t4WiscVWorkingMemoryIndexWmiCompositeRange,
    t5WiscVProcessingSpeedIndexPsiCompositeScore,
    t5WiscVProcessingSpeedIndexPsiCompositePercentile,
    t5WiscVProcessingSpeedIndexPsiCompositeRange,
    t2DasIiSummaryAbilities,
    t2DasIiSummaryChallenges,
    t3WasiiiSummaryAbilities,
    t3WasiiiSummaryChallenges,
    t4WiatiiiSummaryAbilities,
    t4WiatiiiSummaryChallenges,
    t5WaisivSummaryAbilities,
    t5WaisivSummaryChallenges,
    t6WjivCogSummaryAbilities,
    t6WjivCogSummaryChallenges,
    t9WppsiivSummaryAbilities,
    t9WppsiivSummaryChallenges
  },
  testSelectedReducer,
  relevantBackgroundHistory,
  resultsCurrentAssessment,
  summaryCurrentSituation,
  dsmCodes,
  eduCodeIntellectualDisabilityId,
  eduCodeHardOfHearingHh,
  eduCodeDeafnessDeafHearingImpairmentHi,
  eduCodeSpeechOrLanguageImpairmentSli,
  eduCodeVisualImpairmentVi,
  eduCodeEmotionalDisturbanceEd,
  eduCodeOrthopedicImpairmentOi,
  eduCodeOtherHealthImpairmentOhi,
  eduCodeEstablishedMedicalDisabilityEmd,
  eduCodeSpecificLearningDisabilitySld,
  eduCodeDeafBlindnessDb,
  eduCodeMultipleDisabilitiesMd,
  eduCodeAutismAut,
  eduCodeTraumaticBrainInjuryTbi,
  recommendations,
  recommendationAdhd,
  recommendationAutism,
  recommendationDementia,
  recommendationDysthymia,
  recommendationLearningDisabilityMathematics,
  recommendationLearningDisabilityReading,
  recommendationNeurocognitiveDisorder,
  recommendationVisualProcessingChildrenAdults,
  recommendationVisualProcessingChildren,
  recommendationLearningDisabilityWritingChildrenAdults,
  recommendationLearningDisabilityWritingChildren,
  recommendationAuditoryProcessingWeaknessChildrenAdults,
  recommendationAuditoryProcessingWeaknessChildren,
  adhdRecommendationsFreehand,
  appendixReducer,
  t1AppendixWiscVSimilaritiesRank,
  t1AppendixWiscVSimilaritiesRange,
  t2AppendixWiscVVocabularyRank,
  t2AppendixWiscVVocabularyRange,
  t3AppendixWiscVInformationRank,
  t3AppendixWiscVInformationRange,
  t4AppendixWiscVComprehensionRank,
  t4AppendixWiscVComprehensionRange,
  t5AppendixWiscVBlockDesignRank,
  t5AppendixWiscVBlockDesignRange,
  t6AppendixWiscVVocabularyRank,
  t6AppendixWiscVVocabularyRange,
  t7AppendixWiscVMatrixReasoningRank,
  t7AppendixWiscVMatrixReasoningRange,
  t8AppendixWiscVFigureWeightsRank,
  t8AppendixWiscVFigureWeightsRange,
  t9AppendixWiscVPictureConceptsRank,
  t9AppendixWiscVPictureConceptsRange,
  t10AppendixWiscVArithmeticRank,
  t10AppendixWiscVArithmeticRange,
  t11AppendixWiscVDigitSpanRank,
  t11AppendixWiscVDigitSpanRange,
  t12AppendixWiscVPictureSpanRank,
  t12AppendixWiscVPictureSpanRange,
  t13AppendixWiscVLetterNumberSequencingRank,
  t13AppendixWiscVLetterNumberSequencingRange,
  t14AppendixWiscVCodingRank,
  t14AppendixWiscVCodingRange,
  t15AppendixWiscVSymbolSearchRank,
  t15AppendixWiscVSymbolSearchRange,
  t16AppendixWiscVCancellationRank,
  t16AppendixWiscVCancellationRange,
  t46AppendixQikCptAccuracyIndexRank,
  t46AppendixQikCptAccuracyIndexRange,
  t47AppendixQikCptSustainedAttentionRank,
  t47AppendixQikCptSustainedAttentionRange,
  t48AppendixQikCptImpulseControlRank,
  t48AppendixQikCptImpulseControlRange,
  t49AppendixQikCptPerformanceIndexRank,
  t49AppendixQikCptPerformanceIndexRange,
  t50AppendixQikCptSpeedOfResponseRank,
  t50AppendixQikCptSpeedOfResponseRange,
  t51AppendixQikCptConsistencyOfResponseRank,
  t51AppendixQikCptConsistencyOfResponseRange,
  t73AppendixWiscVNamingSpeedLiteracyRank,
  t73AppendixWiscVNamingSpeedLiteracyRange,
  t74AppendixWiscVNamingSpeedQualityRank,
  t74AppendixWiscVNamingSpeedQualityRange,
  t75AppendixWiscVImmediateSymbolTranslationRank,
  t75AppendixWiscVImmediateSymbolTranslationRange,
  t76AppendixWiscVDelayedSymbolTranslationRank,
  t76AppendixWiscVDelayedSymbolTranslationRange,
  t77AppendixWiscVRecognitionSymbolTranslationRank,
  t77AppendixWiscVRecognitionSymbolTranslationRange,
  t78AppendixBriefInconsistencyScaleRank,
  t78AppendixBriefInconsistencyScaleRange,
  t79AppendixBriefNegativityScaleRank,
  t79AppendixBriefNegativityScaleRange,
  t82AppendixBriefInhibitRank,
  t82AppendixBriefInhibitRange,
  t83AppendixBriefShiftRank,
  t83AppendixBriefShiftRange,
  t84AppendixBriefEmotionalControlRank,
  t84AppendixBriefEmotionalControlRange,
  t85AppendixBriefInitiateRank,
  t85AppendixBriefInitiateRange,
  t86AppendixBriefWorkingMemoryRank,
  t86AppendixBriefWorkingMemoryRange,
  t87AppendixBriefPlanOrganizeRank,
  t87AppendixBriefPlanOrganizeRange,
  t88AppendixBriefOrganizationOfMaterialsRank,
  t88AppendixBriefOrganizationOfMaterialsRange,
  t89AppendixBriefMonitorRank,
  t89AppendixBriefMonitorRange,
  t90AppendixBriefInhibitRank,
  t90AppendixBriefInhibitRange,
  t91AppendixBriefShiftRank,
  t91AppendixBriefShiftRange,
  t92AppendixBriefEmotionalControlRank,
  t92AppendixBriefEmotionalControlRange,
  t93AppendixBriefInitiateRank,
  t93AppendixBriefInitiateRange,
  t94AppendixBriefWorkingMemoryRank,
  t94AppendixBriefWorkingMemoryRange,
  t95AppendixBriefPlanOrganizeRank,
  t95AppendixBriefPlanOrganizeRange,
  t96AppendixBriefOrganizationOfMaterialsRank,
  t96AppendixBriefOrganizationOfMaterialsRange,
  t97AppendixBriefMonitorRank,
  t97AppendixBriefMonitorRange,
  t120AppendixConners3InattentionRank,
  t120AppendixConners3InattentionRange,
  t121AppendixConners3HyperactivityImpulsivityRank,
  t121AppendixConners3HyperactivityImpulsivityRange,
  t122AppendixConners3LearningProblemsRank,
  t122AppendixConners3LearningProblemsRange,
  t123AppendixConners3ExecutiveFunctioningRank,
  t123AppendixConners3ExecutiveFunctioningRange,
  t124AppendixConners3DefianceAggressionRank,
  t124AppendixConners3DefianceAggressionRange,
  t125AppendixConners3PeerRelationsRank,
  t125AppendixConners3PeerRelationsRange,
  t126AppendixConners3AdhdInattentiveRank,
  t126AppendixConners3AdhdInattentiveRange,
  t128AppendixConners3ConductDisorderRank,
  t128AppendixConners3ConductDisorderRange,
  t129AppendixConners3OppositionalDefiantDisorderRank,
  t129AppendixConners3OppositionalDefiantDisorderRange,
  t127AppendixConners3AdhdHyperactiveImpulsiveRank,
  t127AppendixConners3AdhdHyperactiveImpulsiveRange,
  t130AppendixConners3Conners3AdhdIndexRank,
  t130AppendixConners3Conners3AdhdIndexRange,
  t131AppendixConners3Conners3GlobalIndexRank,
  t131AppendixConners3Conners3GlobalIndexRange,
  t132AppendixConners3AnxietyRank,
  t132AppendixConners3AnxietyRange,
  t133AppendixConners3DepressionRank,
  t133AppendixConners3DepressionRange,
  t134AppendixConners3SevereConductRank,
  t134AppendixConners3SevereConductRange,
  t135AppendixConners3PositiveImpressionRank,
  t135AppendixConners3PositiveImpressionRange,
  t136AppendixConners3NegativeImpressionRank,
  t136AppendixConners3NegativeImpressionRange,
  t137AppendixConners3InconsistencyIndexRank,
  t137AppendixConners3InconsistencyIndexRange,
  t138AppendixConners3InattentionRank,
  t138AppendixConners3InattentionRange,
  t139AppendixConners3HyperactivityImpulsivityRank,
  t139AppendixConners3HyperactivityImpulsivityRange,
  t141AppendixConners3LearningProblemsRank,
  t141AppendixConners3LearningProblemsRange,
  t142AppendixConners3ExecutiveFunctioningRank,
  t142AppendixConners3ExecutiveFunctioningRange,
  t143AppendixConners3DefianceAggressionRank,
  t143AppendixConners3DefianceAggressionRange,
  t144AppendixConners3PeerRelationsRank,
  t144AppendixConners3PeerRelationsRange,
  t145AppendixConners3AdhdInattentiveRank,
  t145AppendixConners3AdhdInattentiveRange,
  t146AppendixConners3AdhdHyperactiveImpulsiveRank,
  t146AppendixConners3AdhdHyperactiveImpulsiveRange,
  t147AppendixConners3ConductDisorderRank,
  t147AppendixConners3ConductDisorderRange,
  t148AppendixConners3OppositionalDefiantDisorderRank,
  t148AppendixConners3OppositionalDefiantDisorderRange,
  t149AppendixConners3Conners3AdhdIndexRank,
  t149AppendixConners3Conners3AdhdIndexRange,
  t150AppendixConners3Conners3GlobalIndexRank,
  t150AppendixConners3Conners3GlobalIndexRange,
  t151AppendixConners3AnxietyRank,
  t151AppendixConners3AnxietyRange,
  t152AppendixConners3DepressionRank,
  t152AppendixConners3DepressionRange,
  t153AppendixConners3SevereConductRank,
  t153AppendixConners3SevereConductRange,
  t154AppendixConners3PositiveImpressionRank,
  t154AppendixConners3PositiveImpressionRange,
  t155AppendixConners3NegativeImpressionRank,
  t155AppendixConners3NegativeImpressionRange,
  t156AppendixConners3InconsistencyIndexRank,
  t156AppendixConners3InconsistencyIndexRange,
  t158AppendixConners3HyperactivityImpulsivityRank,
  t158AppendixConners3HyperactivityImpulsivityRange,
  t157AppendixConners3InattentionRank,
  t157AppendixConners3InattentionRange,
  t159AppendixConners3LearningProblemsRank,
  t159AppendixConners3LearningProblemsRange,
  t160AppendixConners3DefianceAggressionRank,
  t160AppendixConners3DefianceAggressionRange,
  t161AppendixConners3FamilyRelationsRank,
  t161AppendixConners3FamilyRelationsRange,
  t162AppendixConners3AdhdInattentiveRank,
  t162AppendixConners3AdhdInattentiveRange,
  t163AppendixConners3AdhdHyperactiveImpulsiveRank,
  t163AppendixConners3AdhdHyperactiveImpulsiveRange,
  t164AppendixConners3ConductDisorderRank,
  t164AppendixConners3ConductDisorderRange,
  t165AppendixConners3OppositionalDefiantDisorderRank,
  t165AppendixConners3OppositionalDefiantDisorderRange,
  t166AppendixConners3Conners3AdhdIndexRank,
  t166AppendixConners3Conners3AdhdIndexRange,
  t283AppendixBasc3FIndexRank,
  t283AppendixBasc3FIndexRange,
  t284AppendixBasc3LIndexRank,
  t284AppendixBasc3LIndexRange,
  t285AppendixBasc3VIndexRank,
  t285AppendixBasc3VIndexRange,
  t286AppendixBasc3AlcoholAbuseRank,
  t286AppendixBasc3AlcoholAbuseRange,
  t287AppendixBasc3AnxietyRank,
  t287AppendixBasc3AnxietyRange,
  t288AppendixBasc3AttentionProblemsRank,
  t288AppendixBasc3AttentionProblemsRange,
  t289AppendixBasc3AttitudeToSchoolRank,
  t289AppendixBasc3AttitudeToSchoolRange,
  t290AppendixBasc3AttitudeToTeachersRank,
  t290AppendixBasc3AttitudeToTeachersRange,
  t291AppendixBasc3AtypicalityRank,
  t291AppendixBasc3AtypicalityRange,
  t292AppendixBasc3DepressionRank,
  t292AppendixBasc3DepressionRange,
  t293AppendixBasc3HyperactivityRank,
  t293AppendixBasc3HyperactivityRange,
  t294AppendixBasc3LocusOfControlRank,
  t294AppendixBasc3LocusOfControlRange,
  t295AppendixBasc3SchoolMaladjustmentRank,
  t295AppendixBasc3SchoolMaladjustmentRange,
  t296AppendixBasc3SensationSeekingRank,
  t296AppendixBasc3SensationSeekingRange,
  t297AppendixBasc3SenseOfInadequacyRank,
  t297AppendixBasc3SenseOfInadequacyRange,
  t298AppendixBasc3SocialStressRank,
  t298AppendixBasc3SocialStressRange,
  t299AppendixBasc3SomatizationRank,
  t299AppendixBasc3SomatizationRange,
  t300AppendixBasc3InterpersonalRelationsRank,
  t300AppendixBasc3InterpersonalRelationsRange,
  t301AppendixBasc3RelationsWithParentsRank,
  t301AppendixBasc3RelationsWithParentsRange,
  t302AppendixBasc3SelfEsteemRank,
  t302AppendixBasc3SelfEsteemRange,
  t303AppendixBasc3SelfRelianceRank,
  t303AppendixBasc3SelfRelianceRange,
  t304AppendixBasc3AngerControlRank,
  t304AppendixBasc3AngerControlRange,
  t305AppendixBasc3EgoStrengthRank,
  t305AppendixBasc3EgoStrengthRange,
  t306AppendixBasc3ManiaRank,
  t306AppendixBasc3ManiaRange,
  t307AppendixBasc3TestAnxietyRank,
  t307AppendixBasc3TestAnxietyRange,
  t308AppendixBasc3AttitudeToSchoolRank,
  t308AppendixBasc3AttitudeToSchoolRange,
  t309AppendixBasc3AttitudeToTeachersRank,
  t309AppendixBasc3AttitudeToTeachersRange,
  t310AppendixBasc3AtypicalityRank,
  t310AppendixBasc3AtypicalityRange,
  t311AppendixBasc3LocusOfControlRank,
  t311AppendixBasc3LocusOfControlRange,
  t312AppendixBasc3SocialStressRank,
  t312AppendixBasc3SocialStressRange,
  t313AppendixBasc3AnxietyRank,
  t313AppendixBasc3AnxietyRange,
  t314AppendixBasc3DepressionRank,
  t314AppendixBasc3DepressionRange,
  t315AppendixBasc3SenseOfInadequacyRank,
  t315AppendixBasc3SenseOfInadequacyRange,
  t316AppendixBasc3AttentionProblemsRank,
  t316AppendixBasc3AttentionProblemsRange,
  t317AppendixBasc3HyperactivityRank,
  t317AppendixBasc3HyperactivityRange,
  t662AppendixBasc3SocialStressRank,
  t662AppendixBasc3SocialStressRange,
  t664AppendixBasc3AnxietyRank,
  t664AppendixBasc3AnxietyRange,
  t665AppendixBasc3DepressionRank,
  t665AppendixBasc3DepressionRange,
  t666AppendixBasc3SenseOfInadequacyRank,
  t666AppendixBasc3SenseOfInadequacyRange,
  t667AppendixBasc3SelfEsteemRank,
  t667AppendixBasc3SelfEsteemRange,
  t668AppendixBasc3SelfRelianceRank,
  t668AppendixBasc3SelfRelianceRange,
  t324AppendixBasc3InterpersonalRelationsRank,
  t324AppendixBasc3InterpersonalRelationsRange,
  t325AppendixBasc3RelationsWithParentsRank,
  t325AppendixBasc3RelationsWithParentsRange,
  t326AppendixBasc3SelfEsteemRank,
  t326AppendixBasc3SelfEsteemRange,
  t327AppendixBasc3SelfRelianceRank,
  t327AppendixBasc3SelfRelianceRange,
  t328AppendixBasc3AttitudeToSchoolRank,
  t328AppendixBasc3AttitudeToSchoolRange,
  t329AppendixBasc3AttitudeToTeachersRank,
  t329AppendixBasc3AttitudeToTeachersRange,
  t330AppendixBasc3SensationSeekingRank,
  t330AppendixBasc3SensationSeekingRange,
  t331AppendixBasc3AtypicalityRank,
  t331AppendixBasc3AtypicalityRange,
  t332AppendixBasc3LocusOfControlRank,
  t332AppendixBasc3LocusOfControlRange,
  t333AppendixBasc3SocialStressRank,
  t333AppendixBasc3SocialStressRange,
  t334AppendixBasc3AnxietyRank,
  t334AppendixBasc3AnxietyRange,
  t335AppendixBasc3DepressionRank,
  t335AppendixBasc3DepressionRange,
  t336AppendixBasc3SenseOfInadequacyRank,
  t336AppendixBasc3SenseOfInadequacyRange,
  t337AppendixBasc3SomatizationRank,
  t337AppendixBasc3SomatizationRange,
  t338AppendixBasc3AttentionProblemsRank,
  t338AppendixBasc3AttentionProblemsRange,
  t339AppendixBasc3HyperactivityRank,
  t339AppendixBasc3HyperactivityRange,
  t340AppendixBasc3SocialStressRank,
  t340AppendixBasc3SocialStressRange,
  t341AppendixBasc3AnxietyRank,
  t341AppendixBasc3AnxietyRange,
  t342AppendixBasc3DepressionRank,
  t342AppendixBasc3DepressionRange,
  t343AppendixBasc3SenseOfInadequacyRank,
  t343AppendixBasc3SenseOfInadequacyRange,
  t344AppendixBasc3SelfEsteemRank,
  t344AppendixBasc3SelfEsteemRange,
  t345AppendixBasc3SelfRelianceRank,
  t345AppendixBasc3SelfRelianceRange,
  t346AppendixBasc3InterpersonalRelationsRank,
  t346AppendixBasc3InterpersonalRelationsRange,
  t347AppendixBasc3RelationsWithParentsRank,
  t347AppendixBasc3RelationsWithParentsRange,
  t348AppendixBasc3SelfEsteemRank,
  t348AppendixBasc3SelfEsteemRange,
  t349AppendixBasc3SelfRelianceRank,
  t349AppendixBasc3SelfRelianceRange,
  t350AppendixBasc3AtypicalityRank,
  t350AppendixBasc3AtypicalityRange,
  t351AppendixBasc3LocusOfControlRank,
  t351AppendixBasc3LocusOfControlRange,
  t352AppendixBasc3SocialStressRank,
  t352AppendixBasc3SocialStressRange,
  t353AppendixBasc3AnxietyRank,
  t353AppendixBasc3AnxietyRange,
  t354AppendixBasc3DepressionRank,
  t354AppendixBasc3DepressionRange,
  t355AppendixBasc3SenseOfInadequacyRank,
  t355AppendixBasc3SenseOfInadequacyRange,
  t356AppendixBasc3SomatizationRank,
  t356AppendixBasc3SomatizationRange,
  t357AppendixBasc3AttentionProblemsRank,
  t357AppendixBasc3AttentionProblemsRange,
  t358AppendixBasc3HyperactivityRank,
  t358AppendixBasc3HyperactivityRange,
  t359AppendixBasc3SocialStressRank,
  t359AppendixBasc3SocialStressRange,
  t360AppendixBasc3AnxietyRank,
  t360AppendixBasc3AnxietyRange,
  t361AppendixBasc3DepressionRank,
  t361AppendixBasc3DepressionRange,
  t362AppendixBasc3SenseOfInadequacyRank,
  t362AppendixBasc3SenseOfInadequacyRange,
  t363AppendixBasc3SelfEsteemRank,
  t363AppendixBasc3SelfEsteemRange,
  t364AppendixBasc3SelfRelianceRank,
  t364AppendixBasc3SelfRelianceRange,
  t365AppendixBasc3InterpersonalRelationsRank,
  t365AppendixBasc3InterpersonalRelationsRange,
  t366AppendixBasc3RelationsWithParentsRank,
  t366AppendixBasc3RelationsWithParentsRange,
  t367AppendixBasc3SelfEsteemRank,
  t367AppendixBasc3SelfEsteemRange,
  t368AppendixBasc3SelfRelianceRank,
  t368AppendixBasc3SelfRelianceRange,
  t369AppendixBasc3FIndexRank,
  t369AppendixBasc3FIndexRange,
  t370AppendixBasc3AggressionRank,
  t370AppendixBasc3AggressionRange,
  t371AppendixBasc3AnxietyRank,
  t371AppendixBasc3AnxietyRange,
  t372AppendixBasc3AttentionProblemsRank,
  t372AppendixBasc3AttentionProblemsRange,
  t373AppendixBasc3AtypicalityRank,
  t373AppendixBasc3AtypicalityRange,
  t374AppendixBasc3ConductProblemsRank,
  t374AppendixBasc3ConductProblemsRange,
  t375AppendixBasc3DepressionRank,
  t375AppendixBasc3DepressionRange,
  t376AppendixBasc3HyperactivityRank,
  t376AppendixBasc3HyperactivityRange,
  t377AppendixBasc3LearningProblemsRank,
  t377AppendixBasc3LearningProblemsRange,
  t378AppendixBasc3SomatizationRank,
  t378AppendixBasc3SomatizationRange,
  t379AppendixBasc3WithdrawalRank,
  t379AppendixBasc3WithdrawalRange,
  t380AppendixBasc3ActivitiesOfDailyLivingRank,
  t380AppendixBasc3ActivitiesOfDailyLivingRange,
  t381AppendixBasc3AdaptabilityRank,
  t381AppendixBasc3AdaptabilityRange,
  t382AppendixBasc3FunctionalCommunicationRank,
  t382AppendixBasc3FunctionalCommunicationRange,
  t383AppendixBasc3LeadershipRank,
  t383AppendixBasc3LeadershipRange,
  t384AppendixBasc3SocialSkillsRank,
  t384AppendixBasc3SocialSkillsRange,
  t385AppendixBasc3StudySkillsRank,
  t385AppendixBasc3StudySkillsRange,
  t386AppendixBasc3AngerControlRank,
  t386AppendixBasc3AngerControlRange,
  t387AppendixBasc3BullyingRank,
  t387AppendixBasc3BullyingRange,
  t388AppendixBasc3DevelopmentalSocialDisordersRank,
  t388AppendixBasc3DevelopmentalSocialDisordersRange,
  t389AppendixBasc3EmotionalSelfControlRank,
  t389AppendixBasc3EmotionalSelfControlRange,
  t390AppendixBasc3ExecutiveFunctioningRank,
  t390AppendixBasc3ExecutiveFunctioningRange,
  t391AppendixBasc3NegativeEmotionalityRank,
  t391AppendixBasc3NegativeEmotionalityRange,
  t392AppendixBasc3ResiliencyRank,
  t392AppendixBasc3ResiliencyRange,
  t393AppendixBasc3HyperactivityRank,
  t393AppendixBasc3HyperactivityRange,
  t394AppendixBasc3AggressionRank,
  t394AppendixBasc3AggressionRange,
  t395AppendixBasc3AnxietyRank,
  t395AppendixBasc3AnxietyRange,
  t396AppendixBasc3DepressionRank,
  t396AppendixBasc3DepressionRange,
  t397AppendixBasc3SomatizationRank,
  t397AppendixBasc3SomatizationRange,
  t398AppendixBasc3AdaptabilityRank,
  t398AppendixBasc3AdaptabilityRange,
  t399AppendixBasc3SocialSkillsRank,
  t399AppendixBasc3SocialSkillsRange,
  t400AppendixBasc3FunctionalCommunicationRank,
  t400AppendixBasc3FunctionalCommunicationRange,
  t401AppendixBasc3HyperactivityRank,
  t401AppendixBasc3HyperactivityRange,
  t402AppendixBasc3AggressionRank,
  t402AppendixBasc3AggressionRange,
  t403AppendixBasc3DepressionRank,
  t403AppendixBasc3DepressionRange,
  t404AppendixBasc3AttentionProblemsRank,
  t404AppendixBasc3AttentionProblemsRange,
  t405AppendixBasc3AtypicalityRank,
  t405AppendixBasc3AtypicalityRange,
  t406AppendixBasc3WithdrawalRank,
  t406AppendixBasc3WithdrawalRange,
  t407AppendixBasc3HyperactivityRank,
  t407AppendixBasc3HyperactivityRange,
  t408AppendixBasc3AggressionRank,
  t408AppendixBasc3AggressionRange,
  t409AppendixBasc3ConductProblemsRank,
  t409AppendixBasc3ConductProblemsRange,
  t410AppendixBasc3AnxietyRank,
  t410AppendixBasc3AnxietyRange,
  t411AppendixBasc3DepressionRank,
  t411AppendixBasc3DepressionRange,
  t412AppendixBasc3SomatizationRank,
  t412AppendixBasc3SomatizationRange,
  t413AppendixBasc3LearningProblemsRank,
  t413AppendixBasc3LearningProblemsRange,
  t414AppendixBasc3AttentionProblemsRank,
  t414AppendixBasc3AttentionProblemsRange,
  t415AppendixBasc3AdaptabilityRank,
  t415AppendixBasc3AdaptabilityRange,
  t416AppendixBasc3SocialSkillsRank,
  t416AppendixBasc3SocialSkillsRange,
  t417AppendixBasc3FunctionalCommunicationRank,
  t417AppendixBasc3FunctionalCommunicationRange,
  t418AppendixBasc3LeadershipRank,
  t418AppendixBasc3LeadershipRange,
  t419AppendixBasc3StudySkillsRank,
  t419AppendixBasc3StudySkillsRange,
  t420AppendixBasc3HyperactivityRank,
  t420AppendixBasc3HyperactivityRange,
  t421AppendixBasc3AggressionRank,
  t421AppendixBasc3AggressionRange,
  t422AppendixBasc3DepressionRank,
  t422AppendixBasc3DepressionRange,
  t423AppendixBasc3AttentionProblemsRank,
  t423AppendixBasc3AttentionProblemsRange,
  t424AppendixBasc3AtypicalityRank,
  t424AppendixBasc3AtypicalityRange,
  t425AppendixBasc3WithdrawalRank,
  t425AppendixBasc3WithdrawalRange,
  t426AppendixBasc3HyperactivityRank,
  t426AppendixBasc3HyperactivityRange,
  t427AppendixBasc3AggressionRank,
  t427AppendixBasc3AggressionRange,
  t428AppendixBasc3AnxietyRank,
  t428AppendixBasc3AnxietyRange,
  t429AppendixBasc3DepressionRank,
  t429AppendixBasc3DepressionRange,
  t430AppendixBasc3SomatizationRank,
  t430AppendixBasc3SomatizationRange,
  t431AppendixBasc3AdaptabilityRank,
  t431AppendixBasc3AdaptabilityRange,
  t432AppendixBasc3SocialSkillsRank,
  t432AppendixBasc3SocialSkillsRange,
  t433AppendixBasc3FunctionalCommunicationRank,
  t433AppendixBasc3FunctionalCommunicationRange,
  t434AppendixBasc3ActivitiesOfDailyLivingRank,
  t434AppendixBasc3ActivitiesOfDailyLivingRange,
  t435AppendixBasc3HyperactivityRank,
  t435AppendixBasc3HyperactivityRange,
  t436AppendixBasc3AggressionRank,
  t436AppendixBasc3AggressionRange,
  t437AppendixBasc3DepressionRank,
  t437AppendixBasc3DepressionRange,
  t438AppendixBasc3AttentionProblemsRank,
  t438AppendixBasc3AttentionProblemsRange,
  t439AppendixBasc3AtypicalityRank,
  t439AppendixBasc3AtypicalityRange,
  t440AppendixBasc3WithdrawalRank,
  t440AppendixBasc3WithdrawalRange,
  t441AppendixBasc3HyperactivityRank,
  t441AppendixBasc3HyperactivityRange,
  t442AppendixBasc3AggressionRank,
  t442AppendixBasc3AggressionRange,
  t443AppendixBasc3ConductProblemsRank,
  t443AppendixBasc3ConductProblemsRange,
  t444AppendixBasc3AnxietyRank,
  t444AppendixBasc3AnxietyRange,
  t445AppendixBasc3DepressionRank,
  t445AppendixBasc3DepressionRange,
  t446AppendixBasc3SomatizationRank,
  t446AppendixBasc3SomatizationRange,
  t447AppendixBasc3AdaptabilityRank,
  t447AppendixBasc3AdaptabilityRange,
  t448AppendixBasc3SocialSkillsRank,
  t448AppendixBasc3SocialSkillsRange,
  t449AppendixBasc3FunctionalCommunicationRank,
  t449AppendixBasc3FunctionalCommunicationRange,
  t450AppendixBasc3ActivitiesOfDailyLivingRank,
  t450AppendixBasc3ActivitiesOfDailyLivingRange,
  t451AppendixBasc3HyperactivityRank,
  t451AppendixBasc3HyperactivityRange,
  t452AppendixBasc3AggressionRank,
  t452AppendixBasc3AggressionRange,
  t453AppendixBasc3DepressionRank,
  t453AppendixBasc3DepressionRange,
  t454AppendixBasc3AttentionProblemsRank,
  t454AppendixBasc3AttentionProblemsRange,
  t455AppendixBasc3AtypicalityRank,
  t455AppendixBasc3AtypicalityRange,
  t456AppendixBasc3WithdrawalRank,
  t456AppendixBasc3WithdrawalRange,
  t457AppendixWaisIvSimilaritiesRank,
  t457AppendixWaisIvSimilaritiesRange,
  t458AppendixWaisIvVocabularyRank,
  t458AppendixWaisIvVocabularyRange,
  t459AppendixWaisIvInformationRank,
  t459AppendixWaisIvInformationRange,
  t460AppendixWaisIvComprehensionRank,
  t460AppendixWaisIvComprehensionRange,
  t461AppendixWaisIvBlockDesignRank,
  t461AppendixWaisIvBlockDesignRange,
  t462AppendixWaisIvMatrixReasoningRank,
  t462AppendixWaisIvMatrixReasoningRange,
  t463AppendixWaisIvVisualPuzzlesRank,
  t463AppendixWaisIvVisualPuzzlesRange,
  t464AppendixWaisIvFigureWeightsRank,
  t464AppendixWaisIvFigureWeightsRange,
  t465AppendixWaisIvPictureCompletionRank,
  t465AppendixWaisIvPictureCompletionRange,
  t466AppendixWaisIvDigitSpanRank,
  t466AppendixWaisIvDigitSpanRange,
  t467AppendixWaisIvArithmeticRank,
  t467AppendixWaisIvArithmeticRange,
  t468AppendixWaisIvLetterNumberSequencingRank,
  t468AppendixWaisIvLetterNumberSequencingRange,
  t469AppendixWaisIvCodingRank,
  t469AppendixWaisIvCodingRange,
  t470AppendixWaisIvSymbolSearchRank,
  t470AppendixWaisIvSymbolSearchRange,
  t471AppendixWaisIvCancellationRank,
  t471AppendixWaisIvCancellationRange,
  t557AppendixNepsyIiAnimalSortingAsRank,
  t557AppendixNepsyIiAnimalSortingAsRange,
  t558AppendixNepsyIiAuditoryAttentionAaAndResponseSetRsRank,
  t558AppendixNepsyIiAuditoryAttentionAaAndResponseSetRsRange,
  t559AppendixNepsyIiClocksClRank,
  t559AppendixNepsyIiClocksClRange,
  t560AppendixNepsyIiDesignFluencyDfRank,
  t560AppendixNepsyIiDesignFluencyDfRange,
  t561AppendixNepsyIiInhibitionInRank,
  t561AppendixNepsyIiInhibitionInRange,
  t562AppendixNepsyIiStatueStRank,
  t562AppendixNepsyIiStatueStRange,
  t563AppendixNepsyIiBodyPartNamingBpnAndIdentificationBpiRank,
  t563AppendixNepsyIiBodyPartNamingBpnAndIdentificationBpiRange,
  t564AppendixNepsyIiComprehensionOfInstructionsCiRank,
  t564AppendixNepsyIiComprehensionOfInstructionsCiRange,
  t565AppendixNepsyIiOromotorSequencesOsRank,
  t565AppendixNepsyIiOromotorSequencesOsRange,
  t566AppendixNepsyIiPhonologicalProcessingPhRank,
  t566AppendixNepsyIiPhonologicalProcessingPhRange,
  t567AppendixNepsyIiRepetitionNonsenseWordsRnRank,
  t567AppendixNepsyIiRepetitionNonsenseWordsRnRange,
  t568AppendixNepsyIiSpeededNamingSnRank,
  t568AppendixNepsyIiSpeededNamingSnRange,
  t569AppendixNepsyIiWordGenerationWgRank,
  t569AppendixNepsyIiWordGenerationWgRange,
  t571AppendixNepsyIiListMemoryLmListMemoryDelayedLmdRank,
  t571AppendixNepsyIiListMemoryLmListMemoryDelayedLmdRange,
  t572AppendixNepsyIiMemoryForDesignsMdMemoryForDesignsDelayedMddRank,
  t572AppendixNepsyIiMemoryForDesignsMdMemoryForDesignsDelayedMddRange,
  t573AppendixNepsyIiMemoryForFacesMfMemoryForFacesDelayedMfdRank,
  t573AppendixNepsyIiMemoryForFacesMfMemoryForFacesDelayedMfdRange,
  t574AppendixNepsyIiMemoryForNamesMnMemoryForNamesDelayedMndRank,
  t574AppendixNepsyIiMemoryForNamesMnMemoryForNamesDelayedMndRange,
  t575AppendixNepsyIiNarrativeMemoryNmRank,
  t575AppendixNepsyIiNarrativeMemoryNmRange,
  t576AppendixNepsyIiSentenceRepetitionSrRank,
  t576AppendixNepsyIiSentenceRepetitionSrRange,
  t577AppendixNepsyIiWordListInterferenceWiRank,
  t577AppendixNepsyIiWordListInterferenceWiRange,
  t578AppendixNepsyIiFingertipTappingFtRank,
  t578AppendixNepsyIiFingertipTappingFtRange,
  t579AppendixNepsyIiImitatingHandPositionsIhRank,
  t579AppendixNepsyIiImitatingHandPositionsIhRange,
  t580AppendixNepsyIiManualMotorSequencesMmRank,
  t580AppendixNepsyIiManualMotorSequencesMmRange,
  t581AppendixNepsyIiVisuomotorPrecisionVpRank,
  t581AppendixNepsyIiVisuomotorPrecisionVpRange,
  t582AppendixNepsyIiAffectRecognitionArRank,
  t582AppendixNepsyIiAffectRecognitionArRange,
  t583AppendixNepsyIiTheoryOfMindTmRank,
  t583AppendixNepsyIiTheoryOfMindTmRange,
  t584AppendixNepsyIiArrowsAwRank,
  t584AppendixNepsyIiArrowsAwRange,
  t585AppendixNepsyIiBlockConstructionBcRank,
  t585AppendixNepsyIiBlockConstructionBcRange,
  t586AppendixNepsyIiDesignCopyingDcRank,
  t586AppendixNepsyIiDesignCopyingDcRange,
  t587AppendixNepsyIiGeometricPuzzlesGpRank,
  t587AppendixNepsyIiGeometricPuzzlesGpRange,
  t588AppendixNepsyIiPicturePuzzlesPpRank,
  t588AppendixNepsyIiPicturePuzzlesPpRange,
  t589AppendixNepsyIiRouteFindingRfRank,
  t589AppendixNepsyIiRouteFindingRfRange,
  t593AppendixWjIvCogVocabularyRank,
  t593AppendixWjIvCogVocabularyRange,
  t594AppendixWjIvCogGeneralInformationRank,
  t594AppendixWjIvCogGeneralInformationRange,
  t595AppendixWjIvCogNumberSeriesRank,
  t595AppendixWjIvCogNumberSeriesRange,
  t596AppendixWjIvCogConceptFormationRank,
  t596AppendixWjIvCogConceptFormationRange,
  t597AppendixWjIvCogAnalysisSynthesisRank,
  t597AppendixWjIvCogAnalysisSynthesisRange,
  t598AppendixWjIvCogVerbalAttentionRank,
  t598AppendixWjIvCogVerbalAttentionRange,
  t599AppendixWjIvCogNumbersReversedRank,
  t599AppendixWjIvCogNumbersReversedRange,
  t600AppendixWjIvCogObjectNumberSequencingRank,
  t600AppendixWjIvCogObjectNumberSequencingRange,
  t645AppendixWjIvCogLetterPatternMatchingRank,
  t645AppendixWjIvCogLetterPatternMatchingRange,
  t601AppendixWjIvCogPairCancellationRank,
  t601AppendixWjIvCogPairCancellationRange,
  t602AppendixWjIvCogPhonologicalProcessingRank,
  t602AppendixWjIvCogPhonologicalProcessingRange,
  t603AppendixWjIvCogNonWordRepetitionRank,
  t603AppendixWjIvCogNonWordRepetitionRange,
  t604AppendixWjIvCogRecallRank,
  t604AppendixWjIvCogRecallRange,
  t605AppendixWjIvCogVisualAuditoryLearningRank,
  t605AppendixWjIvCogVisualAuditoryLearningRange,
  t606AppendixWjIvCogVisualizationRank,
  t606AppendixWjIvCogVisualizationRange,
  t607AppendixWjIvCogPictureRecognitionRank,
  t607AppendixWjIvCogPictureRecognitionRange,
  t644AppendixConners3AnxietyRank,
  t644AppendixConners3AnxietyRange,
  t167AppendixConners3DepressionRank,
  t167AppendixConners3DepressionRange,
  t168AppendixConners3SevereConductRank,
  t168AppendixConners3SevereConductRange,
  t169AppendixConners3PositiveImpressionRank,
  t169AppendixConners3PositiveImpressionRange,
  t170AppendixConners3NegativeImpressionRank,
  t170AppendixConners3NegativeImpressionRange,
  t171AppendixConners3InconsistencyIndexRank,
  t171AppendixConners3InconsistencyIndexRange,
  t172AppendixCtoni2PictorialAnalogiesRank,
  t172AppendixCtoni2PictorialAnalogiesRange,
  t173AppendixCtoni2GeometricAnalogiesRank,
  t173AppendixCtoni2GeometricAnalogiesRange,
  t174AppendixCtoni2PictorialCategoriesRank,
  t174AppendixCtoni2PictorialCategoriesRange,
  t175AppendixCtoni2GeometricCategoriesRank,
  t175AppendixCtoni2GeometricCategoriesRange,
  t177AppendixCtoni2GeometricSequencesRank,
  t177AppendixCtoni2GeometricSequencesRange,
  t176AppendixCtoni2PictorialSequencesRank,
  t176AppendixCtoni2PictorialSequencesRange,
  t178AppendixCtoni2PictorialScaleRank,
  t178AppendixCtoni2PictorialScaleRange,
  t179AppendixCtoni2GeometricScaleRank,
  t179AppendixCtoni2GeometricScaleRange,
  t180AppendixCtoni2FullScaleRank,
  t180AppendixCtoni2FullScaleRange,
  t221AppendixRbansListLearningRank,
  t221AppendixRbansListLearningRange,
  t222AppendixRbansStoryMemoryRank,
  t222AppendixRbansStoryMemoryRange,
  t223AppendixRbansFigureCopyRank,
  t223AppendixRbansFigureCopyRange,
  t224AppendixRbansLineOrientationRank,
  t224AppendixRbansLineOrientationRange,
  t225AppendixRbansPictureNamingRank,
  t225AppendixRbansPictureNamingRange,
  t226AppendixRbansSemanticFluencyRank,
  t226AppendixRbansSemanticFluencyRange,
  t227AppendixRbansDigitSpanRank,
  t227AppendixRbansDigitSpanRange,
  t228AppendixRbansCodingRank,
  t228AppendixRbansCodingRange,
  t229AppendixRbansListRecallRank,
  t229AppendixRbansListRecallRange,
  t230AppendixRbansListRecognitionRank,
  t230AppendixRbansListRecognitionRange,
  t231AppendixRbansStoryRecallRank,
  t231AppendixRbansStoryRecallRange,
  t232AppendixRbansFigureRecallRank,
  t232AppendixRbansFigureRecallRange,
  t233AppendixVinelandIiReceptiveRank,
  t233AppendixVinelandIiReceptiveRange,
  t234AppendixVinelandIiExpressiveRank,
  t234AppendixVinelandIiExpressiveRange,
  t235AppendixVinelandIiWrittenRank,
  t235AppendixVinelandIiWrittenRange,
  t236AppendixVinelandIiPersonalRank,
  t236AppendixVinelandIiPersonalRange,
  t237AppendixVinelandIiDomesticRank,
  t237AppendixVinelandIiDomesticRange,
  t238AppendixVinelandIiCommunityRank,
  t238AppendixVinelandIiCommunityRange,
  t239AppendixVinelandIiInterpersonalRelationshipsRank,
  t239AppendixVinelandIiInterpersonalRelationshipsRange,
  t240AppendixVinelandIiPlayAndLeisureTimeRank,
  t240AppendixVinelandIiPlayAndLeisureTimeRange,
  t241AppendixVinelandIiCopingSkillsRank,
  t241AppendixVinelandIiCopingSkillsRange,
  t242AppendixVinelandIiGrossRank,
  t242AppendixVinelandIiGrossRange,
  t243AppendixVinelandIiFineRank,
  t243AppendixVinelandIiFineRange,
  t244AppendixVinelandIiMaladaptiveBehaviorIndexRank,
  t244AppendixVinelandIiMaladaptiveBehaviorIndexRange,
  t245AppendixVinelandIiMaladaptiveBehaviorCriticalItemsRank,
  t245AppendixVinelandIiMaladaptiveBehaviorCriticalItemsRange,
  t246AppendixWasiIiSimilaritiesRank,
  t246AppendixWasiIiSimilaritiesRange,
  t247AppendixWasiIiVocabularyRank,
  t247AppendixWasiIiVocabularyRange,
  t248AppendixWasiIiBlockDesignRank,
  t248AppendixWasiIiBlockDesignRange,
  t249AppendixWasiIiMatrixReasoningRank,
  t249AppendixWasiIiMatrixReasoningRange,
  t266AppendixWraml2StoryMemoryRank,
  t266AppendixWraml2StoryMemoryRange,
  t267AppendixWraml2VerbalLearningRank,
  t267AppendixWraml2VerbalLearningRange,
  t268AppendixWraml2DesignMemoryRank,
  t268AppendixWraml2DesignMemoryRange,
  t269AppendixWraml2PictureMemoryRank,
  t269AppendixWraml2PictureMemoryRange,
  t270AppendixWraml2FingerWindowsRank,
  t270AppendixWraml2FingerWindowsRange,
  t271AppendixWraml2NumberLetterRank,
  t271AppendixWraml2NumberLetterRange,
  t272AppendixWraml2SentenceMemoryRank,
  t272AppendixWraml2SentenceMemoryRange,
  t273AppendixWraml2SoundSymbolRank,
  t273AppendixWraml2SoundSymbolRange,
  t274AppendixWraml2VerbalWorkingMemoryRank,
  t274AppendixWraml2VerbalWorkingMemoryRange,
  t275AppendixWraml2SymbolicWorkingMemoryRank,
  t275AppendixWraml2SymbolicWorkingMemoryRange,
  t276AppendixWraml2StoryMemoryDelayRecallRank,
  t276AppendixWraml2StoryMemoryDelayRecallRange,
  t277AppendixWraml2VerbalLearningDelayRecallRank,
  t277AppendixWraml2VerbalLearningDelayRecallRange,
  t278AppendixWraml2SoundSymbolDelayRecallRank,
  t278AppendixWraml2SoundSymbolDelayRecallRange,
  t279AppendixWraml2StoryMemoryRecognitionRank,
  t279AppendixWraml2StoryMemoryRecognitionRange,
  t280AppendixWraml2VerbalLearningRecognitionRank,
  t280AppendixWraml2VerbalLearningRecognitionRange,
  t281AppendixWraml2DesignMemoryRecognitionRank,
  t281AppendixWraml2DesignMemoryRecognitionRange,
  t282AppendixWraml2PictureMemoryRecognitionRank,
  t282AppendixWraml2PictureMemoryRecognitionRange,
  trbansTotalRaleScore,
  trbansTotalRaleScoreScaledScore,
  trbansTotalRaleScorePercentileRank,
  trbansTotalRaleScoreRange,
  t472AppendixPiyPoorAchievementAndMemoryRange,
  t473AppendixPiyInadequateAbilitiesRange,
  t474AppendixPiyLearningProblemsRange,
  t475AppendixPiyBrashnessRange,
  t476AppendixPiyDistractibilityAndOveractivityRange,
  t477AppendixPiyImpulsivityRange,
  t478AppendixPiyAntisocialBehaviorRange,
  t479AppendixPiyDyscontrolRange,
  t480AppendixPiyNoncomplianceRange,
  t481AppendixPiyParentChildConflictRange,
  t482AppendixPiyParentMaladjustmentRange,
  t483AppendixPiyMaritalDiscordRange,
  t484AppendixPiyFeelingsOfAlienationRange,
  t485AppendixPiyHallucinationsAndDelusionsRange,
  t486AppendixPiyPsychosomaticSyndromeRange,
  t487AppendixPiyMuscularTensionAndAnxietyRange,
  t488AppendixPiyPreoccupationWithDiseaseRange,
  t489AppendixPiyFearAndWorryRange,
  t490AppendixPiyDepressionRange,
  t491AppendixPiySleepDisturbanceRange,
  t492AppendixPiySocialIntroversionRange,
  t493AppendixPiyIsolationRange,
  t494AppendixPiyLimitedPeerStatusRange,
  t495AppendixPiyConflictWithPeersRange,
  t525AppendixMmpi2HypochondriasisHsRange,
  t526AppendixMmpi2DepressionDRange,
  t527AppendixMmpi2HysteriaHyRange,
  t528AppendixMmpi2PsychopathicDeviatePdRange,
  t529AppendixMmpi2MasculinityFemininityMfRange,
  t530AppendixMmpi2ParanoiaPaRange,
  t531AppendixMmpi2PsychastheniaPtRange,
  t532AppendixMmpi2SchizophreniaScRange,
  t533AppendixMmpi2HypomaniaMaRange,
  t534AppendixMmpi2SocialIntroversionSiRange,
  t535AppendixMmpi2LieLRange,
  t536AppendixMmpi2FRange,
  t537AppendixMmpi2BackFFbRange,
  t538AppendixMmpi2KRange,
  t539AppendixMmpiAHypochondriasisHsRange,
  t540AppendixMmpiADepressionDRange,
  t541AppendixMmpiAHysteriaHyRange,
  t542AppendixMmpiAPsychopathicDeviatePdRange,
  t543AppendixMmpiAMasculinityFemininityMfRange,
  t544AppendixMmpiAParanoiaPaRange,
  t545AppendixMmpiAPsychastheniaPtRange,
  t546AppendixMmpiASchizophreniaScRange,
  t547AppendixMmpiAHypomaniaMaRange,
  t548AppendixMmpiASocialIntroversionSiRange,
  t549AppendixMmpiACnsRange,
  t550AppendixMmpiAVrinRange,
  t551AppendixMmpiATrinRange,
  t552AppendixMmpiAFRange,
  t553AppendixMmpiAF1Range,
  t554AppendixMmpiAF2Range,
  t555AppendixMmpiALRange,
  t556AppendixMmpiAKRange,
  t608AppendixTsccUnderresponseUndRange,
  t609AppendixTsccHyperresponseHypRange,
  t610AppendixTsccAnxietyAnxRange,
  t611AppendixTsccDepressionDepRange,
  t612AppendixTsccAngerAngRange,
  t613AppendixTsccPosttraumaticStressPtsRange,
  t614AppendixTsccDissociationDisRange,
  t615AppendixTsccSexualConcernsScRange,
  t616AppendixWjIvAchLetterWordIdentificationRank,
  t616AppendixWjIvAchLetterWordIdentificationRange,
  t617AppendixWjIvAchWordAttackRank,
  t617AppendixWjIvAchWordAttackRange,
  t618AppendixWjIvAchPassageComprehensionRank,
  t618AppendixWjIvAchPassageComprehensionRange,
  t619AppendixWjIvAchReadingRecallRank,
  t619AppendixWjIvAchReadingRecallRange,
  t620AppendixWjIvAchReadingVocabularyRank,
  t620AppendixWjIvAchReadingVocabularyRange,
  t621AppendixWjIvAchCalculationRank,
  t621AppendixWjIvAchCalculationRange,
  t622AppendixWjIvAchMathFactFluencyRank,
  t622AppendixWjIvAchMathFactFluencyRange,
  t623AppendixWjIvAchAppliedProblemsRank,
  t623AppendixWjIvAchAppliedProblemsRange,
  t624AppendixWjIvAchNumberMatricesRank,
  t624AppendixWjIvAchNumberMatricesRange,
  t625AppendixWjIvAchWritingSamplesRank,
  t625AppendixWjIvAchWritingSamplesRange,
  t626AppendixWjIvAchSentenceWritingFluencyRank,
  t626AppendixWjIvAchSentenceWritingFluencyRange,
  t627AppendixWjIvAchOralReadingRank,
  t627AppendixWjIvAchOralReadingRange,
  t628AppendixWjIvAchSentenceReadingFluencyRank,
  t628AppendixWjIvAchSentenceReadingFluencyRange,
  t629AppendixWjIvAchSpellingRank,
  t629AppendixWjIvAchSpellingRange,
  t630AppendixWjIvAchSoundAwarenessRank,
  t630AppendixWjIvAchSpellingOfSoundsRank,
  t630AppendixWjIvAchSpellingOfSoundsRange,
  t631AppendixWjIvAchEditingRank,
  t631AppendixWjIvAchEditingRange,
  t632AppendixWjIvAchScienceRank,
  t632AppendixWjIvAchScienceRange,
  t633AppendixWjIvAchSocialStudiesRank,
  t633AppendixWjIvAchSocialStudiesRange,
  t634AppendixWjIvAchHumanitiesRank,
  t634AppendixWjIvAchHumanitiesRange,
  t635AppendixWjIvAchWordAttackRank,
  t635AppendixWjIvAchWordAttackRange,
  t636AppendixWjIvAchSpellingOfSoundsRank,
  t636AppendixWjIvAchSpellingOfSoundsRange,
  t648AppendixWppsiIvVocabularyRank,
  t648AppendixWppsiIvVocabularyRange,
  t649AppendixWppsiIvInformationRank,
  t649AppendixWppsiIvInformationRange,
  t650AppendixWppsiIvComprehensionRank,
  t650AppendixWppsiIvComprehensionRange,
  t653AppendixWppsiIvBlockDesignRank,
  t653AppendixWppsiIvBlockDesignRange,
  t654AppendixWppsiIvObjectAssemblyRank,
  t654AppendixWppsiIvObjectAssemblyRange,
  t657AppendixWppsiIvBugSearchRank,
  t657AppendixWppsiIvBugSearchRange,
  t658AppendixWppsiIvCancellationRank,
  t658AppendixWppsiIvCancellationRange,
  t659AppendixWppsiIvAnimalCodingRank,
  t659AppendixWppsiIvAnimalCodingRange,
  t651AppendixWppsiIvMatrixReasoningRank,
  t651AppendixWppsiIvMatrixReasoningRange,
  t652AppendixWppsiIvPictureConceptsRank,
  t652AppendixWppsiIvPictureConceptsRange,
  t655AppendixWppsiIvPictureMemoryRank,
  t655AppendixWppsiIvPictureMemoryRange,
  t656AppendixWppsiIvZooLocationsRank,
  t656AppendixWppsiIvZooLocationsRange,
  t669BeeryMotorIntegrationVmiScore,
  t670BeeryVisualPerceptionScore,
  t671BeeryMotorCoordinationScore,
  t669AppendixBeeryVmiBeeryMotorIntegrationVmiRank,
  t669AppendixBeeryVmiBeeryMotorIntegrationVmiRange,
  t670AppendixBeeryVmiBeeryVisualPerceptionRank,
  t670AppendixBeeryVmiBeeryVisualPerceptionRange,
  t671AppendixBeeryVmiBeeryMotorCoordinationRank,
  t671AppendixBeeryVmiBeeryMotorCoordinationRange,
  t672ListeningComprehensionGradesPk12Score,
  t672AppendixWiatiiiListeningComprehensionGradesPk12Rank,
  t672AppendixWiatiiiListeningComprehensionGradesPk12GradeEquivalent,
  t672AppendixWiatiiiListeningComprehensionGradesPk12Range,
  t673OralExpressionGradesPk12Score,
  t673AppendixWiatiiiOralExpressionGradesPk12Rank,
  t673AppendixWiatiiiOralExpressionGradesPk12GradeEquivalent,
  t673AppendixWiatiiiOralExpressionGradesPk12Range,
  t674EarlyReadingSkillsGradesPk3Score,
  t674AppendixWiatiiiEarlyReadingSkillsGradesPkRank,
  t674AppendixWiatiiiEarlyReadingSkillsGradesPk3GradeEquivalent,
  t674AppendixWiatiiiEarlyReadingSkillsGradesPkRange,
  t675ReadingComprehensionGrades112Score,
  t675AppendixWiatiiiReadingComprehensionGrades112Rank,
  t675AppendixWiatiiiReadingComprehensionGrades112GradeEquivalent,
  t675AppendixWiatiiiReadingComprehensionGrades112Range,
  t676WordReadingGrades112Score,
  t676AppendixWiatiiiWordReadingGrades112Rank,
  t676AppendixWiatiiiWordReadingGrades112GradeEquivalent,
  t676AppendixWiatiiiWordReadingGrades112Range,
  t677PseudowordDecodingGrades112Score,
  t677AppendixWiatiiiPseudowordDecodingGrades112Rank,
  t677AppendixWiatiiiPseudowordDecodingGrades112GradeEquivalent,
  t677AppendixWiatiiiPseudowordDecodingGrades112Range,
  t678OralReadingFluencyGrades112Score,
  t678AppendixWiatiiiOralReadingFluencyGrades112Rank,
  t678AppendixWiatiiiOralReadingFluencyGrades112GradeEquivalent,
  t678AppendixWiatiiiOralReadingFluencyGrades112Range,
  t679SpellingGradesK12Score,
  t679AppendixWiatiiiSpellingGradesk12Rank,
  t679AppendixWiatiiiSpellingGradesk12GradeEquivalent,
  t679AppendixWiatiiiSpellingGradesk12Range,
  t680AlphabetWritingFluencyGradesPk3Score,
  t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3Rank,
  t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3GradeEquivalent,
  t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3Range,
  t681SentenceCompositionGrades112Score,
  t681AppendixWiatiiiSentenceCompositionGrades112Rank,
  t681AppendixWiatiiiSentenceCompositionGrades112GradeEquivalent,
  t681AppendixWiatiiiSentenceCompositionGrades112Range,
  t682EssayCompositionGrades312Score,
  t682AppendixWiatiiiEssayCompositionGrades312Rank,
  t682AppendixWiatiiiEssayCompositionGrades312GradeEquivalent,
  t682AppendixWiatiiiEssayCompositionGrades312Range,
  t683NumericalOperationsGradesK12Score,
  t683AppendixWiatiiiNumericalOperationsGradesk12Rank,
  t683AppendixWiatiiiNumericalOperationsGradesk12GradeEquivalent,
  t683AppendixWiatiiiNumericalOperationsGradesk12Range,
  t684MathProblemSolvingGradesPk12Score,
  t684AppendixWiatiiiMathProblemSolvingGradesPk12Rank,
  t684AppendixWiatiiiMathProblemSolvingGradesPk12GradeEquivalent,
  t684AppendixWiatiiiMathProblemSolvingGradesPk12Range,
  t685MathFluencyAdditionScore,
  t685AppendixWiatiiiMathFluencyAdditionRank,
  t685AppendixWiatiiiMathFluencyAdditionGradeEquivalent,
  t685AppendixWiatiiiMathFluencyAdditionRange,
  t686MathFluencySubtractionScore,
  t686AppendixWiatiiiMathFluencySubtractionRank,
  t686AppendixWiatiiiMathFluencySubtractionGradeEquivalent,
  t686AppendixWiatiiiMathFluencySubtractionRange,
  t687MathFluencyMultiplicationScore,
  t687AppendixWiatiiiMathFluencyMultiplicationRank,
  t687AppendixWiatiiiMathFluencyMultiplicationGradeEquivalent,
  t687AppendixWiatiiiMathFluencyMultiplicationRange,
  t688VocabularyScore,
  t688AppendixNelsonDennyVocabularyRank,
  t688AppendixNelsonDennyVocabularyRange,
  t689ComprehensionScore,
  t689AppendixNelsonDennyComprehensionRank,
  t689AppendixNelsonDennyComprehensionRange,
  t690ReadingRateScore,
  t690AppendixNelsonDennyReadingRateRank,
  t690AppendixNelsonDennyReadingRateRange,
  t733AppendixGort5RateRank,
  t733AppendixGort5RateRange,
  t734AppendixGort5AccuracyRank,
  t734AppendixGort5AccuracyRange,
  t735AppendixGort5FluencyRank,
  t735AppendixGort5FluencyRange,
  t736AppendixGort5ComprehensionRank,
  t736AppendixGort5ComprehensionRange,
  t737AppendixTommTrail1Rank,
  t737AppendixTommTrail1Range,
  t738AppendixTommTrial2Rank,
  t738AppendixTommTrial2Range,
  t739AppendixTommRetentionTrialRank,
  t739AppendixTommRetentionTrialRange,
  t743AppendixDasIiVerbalComprehensionRank,
  t743AppendixDasIiVerbalComprehensionRange,
  t744AppendixDasIiPictureSimilaritiesRank,
  t744AppendixDasIiPictureSimilaritiesRange,
  t745AppendixDasIiNamingVocabularyRank,
  t745AppendixDasIiNamingVocabularyRange,
  t746AppendixDasIiPatternConstructionRank,
  t746AppendixDasIiPatternConstructionRange,
  t747AppendixDasIiMatricesRank,
  t747AppendixDasIiMatricesRange,
  t748AppendixDasIiCopyingRank,
  t748AppendixDasIiCopyingRange,
  t749AppendixDasIiRecallOfObjectsImmediateRank,
  t749AppendixDasIiRecallOfObjectsImmediateRange,
  t750AppendixDasIiRecallOfObjectsDelayedRank,
  t750AppendixDasIiRecallOfObjectsDelayedRange,
  t751AppendixDasIiRecallOfDigitsForwardRank,
  t751AppendixDasIiRecallOfDigitsForwardRange,
  t752AppendixDasIiRecognitionOfPicturesRank,
  t752AppendixDasIiRecognitionOfPicturesRange,
  t753AppendixDasIiEarlyNumberConceptsRank,
  t753AppendixDasIiEarlyNumberConceptsRange,
  t754AppendixDasIiMatchingLetterLikeFormsRank,
  t754AppendixDasIiMatchingLetterLikeFormsRange,
  t755AppendixDasIiRecallOfSequentialOrderRank,
  t755AppendixDasIiRecallOfSequentialOrderRange,
  t756AppendixDasIiSpeedOfInformationProcessingRank,
  t756AppendixDasIiSpeedOfInformationProcessingRange,
  t757AppendixDasIiRecallOfDigitsBackwardRank,
  t757AppendixDasIiRecallOfDigitsBackwardRange,
  t758AppendixDasIiPhonologicalProcessingRank,
  t758AppendixDasIiPhonologicalProcessingRange,
  t759AppendixDasIiRapidNamingRank,
  t759AppendixDasIiRapidNamingRange,
  t760AppendixDasIiRecallOfDesignsRank,
  t760AppendixDasIiRecallOfDesignsRange,
  t761AppendixDasIiWordDefinitionsRank,
  t761AppendixDasIiWordDefinitionsRange,
  t762AppendixDasIiPatternConstructionRank,
  t762AppendixDasIiPatternConstructionRange,
  t763AppendixDasIiMatricesRank,
  t763AppendixDasIiMatricesRange,
  t764AppendixDasIiVerbalSimilaritiesRank,
  t764AppendixDasIiVerbalSimilaritiesRange,
  t765AppendixDasIiSequentialAndQuantitativeReasoningRank,
  t765AppendixDasIiSequentialAndQuantitativeReasoningRange,
  t766AppendixDasIiRecallOfObjectsImmediateRank,
  t766AppendixDasIiRecallOfObjectsImmediateRange,
  t767AppendixDasIiRecallOfObjectsDelayedRank,
  t767AppendixDasIiRecallOfObjectsDelayedRange,
  t768AppendixDasIiRecallOfDigitsForwardRank,
  t768AppendixDasIiRecallOfDigitsForwardRange,
  t769AppendixDasIiRecognitionOfPicturesRank,
  t769AppendixDasIiRecognitionOfPicturesRange,
  t770AppendixDasIiRecallOfSequentialOrderRank,
  t770AppendixDasIiRecallOfSequentialOrderRange,
  t771AppendixDasIiSpeedOfInformationProcessingRank,
  t771AppendixDasIiSpeedOfInformationProcessingRange,
  t772AppendixDasIiRecallOfDigitsBackwardRank,
  t772AppendixDasIiRecallOfDigitsBackwardRange,
  t773AppendixDasIiPhonologicalProcessingRank,
  t773AppendixDasIiPhonologicalProcessingRange,
  t18ApendixGort5ORIRank,
  t18ApendixGort5ORIGradeEquivalent,
  t18ORIScore
}) => {
  const subtestVal = id => {
    let val;
    switch (id) {
      case 1:
        val = t1SimilaritiesScore;
        break;
      case 2:
        val = t2VocabularyScore;
        break;
      case 3:
        val = t3InformationScore;
        break;
      case 4:
        val = t4ComprehensionScore;
        break;
      case 5:
        val = t5BlockDesignScore;
        break;
      case 6:
        val = t6VocabularyScore;
        break;
      case 7:
        val = t7MatrixReasoningScore;
        break;
      case 8:
        val = t8FigureWeightsScore;
        break;
      case 9:
        val = t9PictureConceptsScore;
        break;
      case 10:
        val = t10ArithmeticScore;
        break;
      case 11:
        val = t11DigitSpanScore;
        break;
      case 12:
        val = t12PictureSpanScore;
        break;
      case 13:
        val = t13LetterNumberSequencingScore;
        break;
      case 14:
        val = t14CodingScore;
        break;
      case 15:
        val = t15SymbolSearchScore;
        break;
      case 16:
        val = t16CancellationScore;
        break;
      case 73:
        val = t73NamingSpeedLiteracyScore;
        break;
      case 74:
        val = t74NamingSpeedQualityScore;
        break;
      case 75:
        val = t75ImmediateSymbolTranslationScore;
        break;
      case 76:
        val = t76DelayedSymbolTranslationScore;
        break;
      case 77:
        val = t77RecognitionSymbolTranslationScore;
        break;
      case 78:
        val = t78InconsistencyScaleScore;
        break;
      case 79:
        val = t79NegativityScaleScore;
        break;
      case 82:
        val = t82InhibitScore;
        break;
      case 83:
        val = t83ShiftScore;
        break;
      case 84:
        val = t84EmotionalControlScore;
        break;
      case 85:
        val = t85InitiateScore;
        break;
      case 86:
        val = t86WorkingMemoryScore;
        break;
      case 87:
        val = t87PlanOrganizeScore;
        break;
      case 88:
        val = t88OrganizationOfMaterialsScore;
        break;
      case 89:
        val = t89MonitorScore;
        break;
      case 90:
        val = t90InhibitScore;
        break;
      case 91:
        val = t91ShiftScore;
        break;
      case 92:
        val = t92EmotionalControlScore;
        break;
      case 93:
        val = t93InitiateScore;
        break;
      case 94:
        val = t94WorkingMemoryScore;
        break;
      case 95:
        val = t95PlanOrganizeScore;
        break;
      case 96:
        val = t96OrganizationOfMaterialsScore;
        break;
      case 97:
        val = t97MonitorScore;
        break;
      case 98:
        val = t98RelatingToPeopleScore;
        break;
      case 99:
        val = t99ImitationScore;
        break;
      case 100:
        val = t100EmotionalResponseScore;
        break;
      case 101:
        val = t101BodyUseScore;
        break;
      case 102:
        val = t102ObjectUseScore;
        break;
      case 103:
        val = t103AdaptionToChangeScore;
        break;
      case 104:
        val = t104VisualResponseScore;
        break;
      case 105:
        val = t105ListeningResponseScore;
        break;
      case 106:
        val = t106TasteSmellAndTouchResponseAndUseSctore;
        break;
      case 107:
        val = t107FearOrNervousnessScore;
        break;
      case 108:
        val = t108VerbalCommunicationScore;
        break;
      case 109:
        val = t109NonverbalCommunicationScore;
        break;
      case 110:
        val = t110ActivityLevelScore;
        break;
      case 111:
        val = t111LevelAndConsistencyOfIntellectualRestponseScore;
        break;
      case 112:
        val = t112GeneralImpressionsScore;
        break;
      case 113:
        val = t113SocialEmotionalUnderstandingScore;
        break;
      case 114:
        val = t114EmotionalExpressionAndRegulationOfEmtotionsScore;
        break;
      case 115:
        val = t115RelatingToPeopleScore;
        break;
      case 116:
        val = t116BodyUseScore;
        break;
      case 117:
        val = t117ObjectUseInPlayScore;
        break;
      case 118:
        val = t118VisualResponseScore;
        break;
      case 119:
        val = t119ListeningResponseScore;
        break;
      case 646:
        val = t646AdaptationToChangeRestrictedInterestsScore;
        break;
      case 120:
        val = t120InattentionScore;
        break;
      case 121:
        val = t121HyperactivityImpulsivityScore;
        break;
      case 122:
        val = t122LearningProblemsScore;
        break;
      case 123:
        val = t123ExecutiveFunctioningScore;
        break;
      case 124:
        val = t124DefianceAggressionScore;
        break;
      case 125:
        val = t125PeerRelationsScore;
        break;
      case 126:
        val = t126AdhdInattentiveScore;
        break;
      case 127:
        val = t127AdhdHyperactiveImpulsiveScore;
        break;
      case 128:
        val = t128ConductDisorderScore;
        break;
      case 129:
        val = t129OppositionalDefiantDisorderScore;
        break;
      case 130:
        val = t130Conners3AdhdIndexScore;
        break;
      case 131:
        val = t131Conners3GlobalIndexScore;
        break;
      case 132:
        val = t132AnxietyScore;
        break;
      case 133:
        val = t133DepressionScore;
        break;
      case 134:
        val = t134SevereConductScore;
        break;
      case 135:
        val = t135PositiveImpressionScore;
        break;
      case 136:
        val = t136NegativeImpressionScore;
        break;
      case 137:
        val = t137InconsistencyIndexScore;
        break;
      case 138:
        val = t138InattentionScore;
        break;
      case 139:
        val = t139HyperactivityImpulsivityScore;
        break;
      case 140:
        val = t140LearningProblemsExecutiveFunctioningScore;
        break;
      case 141:
        val = t141LearningProblemsScore;
        break;
      case 142:
        val = t142ExecutiveFunctioningScore;
        break;
      case 143:
        val = t143DefianceAggressionScore;
        break;
      case 144:
        val = t144PeerRelationsScore;
        break;
      case 145:
        val = t145AdhdInattentiveScore;
        break;
      case 146:
        val = t146AdhdHyperactiveImpulsiveScore;
        break;
      case 147:
        val = t147ConductDisorderScore;
        break;
      case 148:
        val = t148OppositionalDefiantDisorderScore;
        break;
      case 149:
        val = t149Conners3AdhdIndexScore;
        break;
      case 150:
        val = t150Conners3GlobalIndexScore;
        break;
      case 151:
        val = t151AnxietyScore;
        break;
      case 152:
        val = t152DepressionScore;
        break;
      case 153:
        val = t153SevereConductScore;
        break;
      case 154:
        val = t154PositiveImpressionScore;
        break;
      case 155:
        val = t155NegativeImpressionScore;
        break;
      case 156:
        val = t156InconsistencyIndexScore;
        break;
      case 157:
        val = t157InattentionScore;
        break;
      case 158:
        val = t158HyperactivityImpulsivityScore;
        break;
      case 159:
        val = t159LearningProblemsScore;
        break;
      case 160:
        val = t160DefianceAggressionScore;
        break;
      case 161:
        val = t161FamilyRelationsScore;
        break;
      case 162:
        val = t162AdhdInattentiveScore;
        break;
      case 163:
        val = t163AdhdHyperactiveImpulsiveScore;
        break;
      case 164:
        val = t164ConductDisorderScore;
        break;
      case 165:
        val = t165OppositionalDefiantDisorderScore;
        break;
      case 166:
        val = t166Conners3AdhdIndexScore;
        break;
      case 644:
        val = t644AnxietyScore;
        break;
      case 167:
        val = t167DepressionScore;
        break;
      case 168:
        val = t168SevereConductScore;
        break;
      case 169:
        val = t169PositiveImpressionScore;
        break;
      case 170:
        val = t170NegativeImpressionScore;
        break;
      case 171:
        val = t171InconsistencyIndexScore;
        break;
      case 172:
        val = t172PictorialAnalogiesScore;
        break;
      case 173:
        val = t173GeometricAnalogiesScore;
        break;
      case 174:
        val = t174PictorialCategoriesScore;
        break;
      case 175:
        val = t175GeometricCategoriesScore;
        break;
      case 176:
        val = t176PictorialSequencesScore;
        break;
      case 177:
        val = t177GeometricSequencesScore;
        break;
      case 178:
        val = t178PictorialScaleScore;
        break;
      case 179:
        val = t179GeometricScaleScore;
        break;
      case 180:
        val = t180FullScaleScore;
        break;
      case 181:
        val = t181VerbalComprehensionScore;
        break;
      case 182:
        val = t182PictureSimilaritiesScore;
        break;
      case 183:
        val = t183NamingVocabularyScore;
        break;
      case 184:
        val = t184RecallOfObjectsImmediateScore;
        break;
      case 185:
        val = t185PatternConstructionScore;
        break;
      case 186:
        val = t186MatricesScore;
        break;
      case 187:
        val = t187RecallOfObjectsDelayedScore;
        break;
      case 188:
        val = t188CopyingScore;
        break;
      case 189:
        val = t189RecallOfDesignsScore;
        break;
      case 190:
        val = t190WordDefinitionsScore;
        break;
      case 191:
        val = t191RecallOfObjectsImmediateScore;
        break;
      case 192:
        val = t192PatternConstructionScore;
        break;
      case 193:
        val = t193MatricesScore;
        break;
      case 194:
        val = t194RecallOfObjectsDelayedScore;
        break;
      case 195:
        val = t195VerbalSimilaritiesScore;
        break;
      case 196:
        val = t196SequentialAndQuantitativeReasoningScore;
        break;
      case 197:
        val = t197RecallOfDigitsForwardScore;
        break;
      case 198:
        val = t198RecognitionOfPicturesScore;
        break;
      case 199:
        val = t199EarlyNumberConceptsScore;
        break;
      case 200:
        val = t200MatchingLetterLikeFormsScore;
        break;
      case 201:
        val = t201RecallOfSequentialOrderScore;
        break;
      case 202:
        val = t202SpeedOfInformationProcessingScore;
        break;
      case 203:
        val = t203RecallOfDigitsBackwardScore;
        break;
      case 204:
        val = t204PhonologicalProcessingScore;
        break;
      case 205:
        val = t205RapidNamingScore;
        break;
      case 206:
        val = t206TrailMakingTestScore;
        break;
      case 207:
        val = t207VerbalFluencyTestScore;
        break;
      case 208:
        val = t208DesignFluencyTestScore;
        break;
      case 209:
        val = t209ColorWordInterferenceTestScore;
        break;
      case 210:
        val = t210SortingTestScore;
        break;
      case 211:
        val = t211TwentyQuestionsTestScore;
        break;
      case 212:
        val = t212WordContextTestScore;
        break;
      case 213:
        val = t213TowerTestScore;
        break;
      case 214:
        val = t214ProverbTestScore;
        break;
      case 215:
        val = t215RestrictiveRepetitiveBehaviorsScore;
        break;
      case 216:
        val = t216SocialInteractionScore;
        break;
      case 217:
        val = t217SocialCommunicationScore;
        break;
      case 218:
        val = t218EmotionalResponsesScore;
        break;
      case 219:
        val = t219CognitiveStyleScore;
        break;
      case 220:
        val = t220MaladaptiveSpeechScore;
        break;
      case 221:
        val = t221ListLearningScore;
        break;
      case 222:
        val = t222StoryMemoryScore;
        break;
      case 223:
        val = t223FigureCopyScore;
        break;
      case 224:
        val = t224LineOrientationScore;
        break;
      case 225:
        val = t225PictureNamingScore;
        break;
      case 226:
        val = t226SemanticFluencyScore;
        break;
      case 227:
        val = t227DigitSpanScore;
        break;
      case 228:
        val = t228CodingScore;
        break;
      case 229:
        val = t229ListRecallScore;
        break;
      case 230:
        val = t230ListRecognitionScore;
        break;
      case 231:
        val = t231StoryRecallScore;
        break;
      case 232:
        val = t232FigureRecallScore;
        break;
      case 233:
        val = t233ReceptiveScore;
        break;
      case 234:
        val = t234ExpressiveScore;
        break;
      case 235:
        val = t235WrittenScore;
        break;
      case 236:
        val = t236PersonalScore;
        break;
      case 237:
        val = t237DomesticScore;
        break;
      case 238:
        val = t238CommunityScore;
        break;
      case 239:
        val = t239InterpersonalRelationshipsScore;
        break;
      case 240:
        val = t240PlayAndLeisureTimeScore;
        break;
      case 241:
        val = t241CopingSkillsScore;
        break;
      case 242:
        val = t242GrossScore;
        break;
      case 243:
        val = t243FineScore;
        break;
      case 244:
        val = t244MaladaptiveBehaviorIndexScore;
        break;
      case 245:
        val = t245MaladaptiveBehaviorCriticalItemsScore;
        break;
      case 246:
        val = t246SimilaritiesScore;
        break;
      case 247:
        val = t247VocabularyScore;
        break;
      case 248:
        val = t248BlockDesignScore;
        break;
      case 249:
        val = t249MatrixReasoningScore;
        break;
      case 250:
        val = t250ListeningComprehensionGradesPk12Score;
        break;
      case 251:
        val = t251EarlyReadingSkillsGradesPk3Score;
        break;
      case 252:
        val = t252ReadingComprehensionGrades112Score;
        break;
      case 253:
        val = t253MathProblemSolvingGradesPk12Score;
        break;
      case 254:
        val = t254AlphabetWritingFluencyGradesPk3Score;
        break;
      case 255:
        val = t255SentenceCompositionGrades112Score;
        break;
      case 256:
        val = t256WordReadingGrades112Score;
        break;
      case 257:
        val = t257EssayCompositionGrades312Score;
        break;
      case 258:
        val = t258PseudowordDecodingGrades112Score;
        break;
      case 259:
        val = t259NumericalOperationsGradesk12Score;
        break;
      case 260:
        val = t260OralExpressionGradespk12Score;
        break;
      case 261:
        val = t261OralReadingFluencyGrades112Score;
        break;
      case 262:
        val = t262ApellingGradesk12Score;
        break;
      case 263:
        val = t263MathFluencyAdditionScore;
        break;
      case 264:
        val = t264MathFluencySubtractionScore;
        break;
      case 265:
        val = t265MathFluencyMultiplicationScore;
        break;
      case 266:
        val = t266StoryMemoryScore;
        break;
      case 267:
        val = t267VerbalLearningScore;
        break;
      case 268:
        val = t268DesignMemoryScore;
        break;
      case 269:
        val = t269PictureMemoryScore;
        break;
      case 270:
        val = t270FingerWindowsScore;
        break;
      case 271:
        val = t271NumberLetterScore;
        break;
      case 272:
        val = t272SentenceMemoryScore;
        break;
      case 273:
        val = t273SoundSymbolScore;
        break;
      case 274:
        val = t274VerbalWorkingMemoryScore;
        break;
      case 275:
        val = t275SymbolicWorkingMemoryScore;
        break;
      case 276:
        val = t276StoryMemoryDelayRecallScore;
        break;
      case 277:
        val = t277VerbalLearningDelayRecallScore;
        break;
      case 278:
        val = t278SoundSymbolDelayRecallScore;
        break;
      case 279:
        val = t279StoryMemoryRecognitionScore;
        break;
      case 280:
        val = t280VerbalLearningRecognitionScore;
        break;
      case 281:
        val = t281DesignMemoryRecognitionScore;
        break;
      case 282:
        val = t282PictureMemoryRecognitionScore;
        break;
      case 283:
        val = t283FIndexScore;
        break;
      case 284:
        val = t284LIndexScore;
        break;
      case 285:
        val = t285VIndexScore;
        break;
      case 286:
        val = t286AlcoholAbuseScore;
        break;
      case 287:
        val = t287AnxietyScore;
        break;
      case 288:
        val = t288AttentionProblemsScore;
        break;
      case 289:
        val = t289AttitudeToSchoolScore;
        break;
      case 290:
        val = t290AttitudeToTeachersScore;
        break;
      case 291:
        val = t291AtypicalityScore;
        break;
      case 292:
        val = t292DepressionScore;
        break;
      case 293:
        val = t293HyperactivityScore;
        break;
      case 294:
        val = t294LocusOfControlScore;
        break;
      case 295:
        val = t295SchoolMaladjustmentScore;
        break;
      case 296:
        val = t296SensationSeekingScore;
        break;
      case 297:
        val = t297SenseOfInadequacyScore;
        break;
      case 298:
        val = t298SocialStressScore;
        break;
      case 299:
        val = t299SomatizationScore;
        break;
      case 300:
        val = t300InterpersonalRelationsScore;
        break;
      case 301:
        val = t301RelationsWithParentsScore;
        break;
      case 302:
        val = t302SelfEsteemScore;
        break;
      case 303:
        val = t303SelfRelianceScore;
        break;
      case 304:
        val = t304AngerControlScore;
        break;
      case 305:
        val = t305EgoStrengthScore;
        break;
      case 306:
        val = t306ManiaScore;
        break;
      case 307:
        val = t307TestAnxietyScore;
        break;
      case 308:
        val = t308AttitudeToSchoolScore;
        break;
      case 309:
        val = t309AttitudeToTeachersScore;
        break;
      case 310:
        val = t310AtypicalityScore;
        break;
      case 311:
        val = t311LocusOfControlScore;
        break;
      case 312:
        val = t312SocialStressScore;
        break;
      case 313:
        val = t313AnxietyScore;
        break;
      case 314:
        val = t314DepressionScore;
        break;
      case 315:
        val = t315SenseOfInadequacyScore;
        break;
      case 316:
        val = t316AttentionProblemsScore;
        break;
      case 317:
        val = t317HyperactivityScore;
        break;
      case 318:
        val = t318SocialStressScore;
        break;
      case 319:
        val = t319AnxietyScore;
        break;
      case 320:
        val = t320DepressionScore;
        break;
      case 321:
        val = t321SenseOfInadequacyScore;
        break;
      case 322:
        val = t322SelfEsteemScore;
        break;
      case 323:
        val = t323SelfRelianceScore;
        break;
      case 324:
        val = t324InterpersonalRelationsScore;
        break;
      case 325:
        val = t325RelationsWithParentsScore;
        break;
      case 326:
        val = t326SelfEsteemScore;
        break;
      case 327:
        val = t327SelfRelianceScore;
        break;
      case 328:
        val = t328AttitudeToSchoolScore;
        break;
      case 329:
        val = t329AttitudeToTeachersScore;
        break;
      case 330:
        val = t330SensationSeekingScore;
        break;
      case 331:
        val = t331AtypicalityScore;
        break;
      case 332:
        val = t332LocusOfControlScore;
        break;
      case 333:
        val = t333SocialStressScore;
        break;
      case 334:
        val = t334AnxietyScore;
        break;
      case 335:
        val = t335DepressionScore;
        break;
      case 336:
        val = t336SenseOfInadequacyScore;
        break;
      case 337:
        val = t337SomatizationScore;
        break;
      case 338:
        val = t338AttentionProblemsScore;
        break;
      case 339:
        val = t339HyperactivityScore;
        break;
      case 340:
        val = t340SocialStressScore;
        break;
      case 341:
        val = t341AnxietyScore;
        break;
      case 342:
        val = t342DepressionScore;
        break;
      case 343:
        val = t343SenseOfInadequacyScore;
        break;
      case 344:
        val = t344SelfEsteemScore;
        break;
      case 345:
        val = t345SelfRelianceScore;
        break;
      case 346:
        val = t346InterpersonalRelationsScore;
        break;
      case 347:
        val = t347RelationsWithParentsScore;
        break;
      case 348:
        val = t348SelfEsteemScore;
        break;
      case 349:
        val = t349SelfRelianceScore;
        break;
      case 350:
        val = t350AtypicalityScore;
        break;
      case 351:
        val = t351LocusOfControlScore;
        break;
      case 352:
        val = t352SocialStressScore;
        break;
      case 353:
        val = t353AnxietyScore;
        break;
      case 354:
        val = t354DepressionScore;
        break;
      case 355:
        val = t355SenseOfInadequacyScore;
        break;
      case 356:
        val = t356SomatizationScore;
        break;
      case 357:
        val = t357AttentionProblemsScore;
        break;
      case 358:
        val = t358HyperactivityScore;
        break;
      case 359:
        val = t359SocialStressScore;
        break;
      case 360:
        val = t360AnxietyScore;
        break;
      case 361:
        val = t361DepressionScore;
        break;
      case 362:
        val = t362SenseOfInadequacyScore;
        break;
      case 363:
        val = t363SelfEsteemScore;
        break;
      case 364:
        val = t364SelfRelianceScore;
        break;
      case 365:
        val = t365InterpersonalRelationsScore;
        break;
      case 366:
        val = t366RelationsWithParentsScore;
        break;
      case 367:
        val = t367SelfEsteemScore;
        break;
      case 368:
        val = t368SelfRelianceScore;
        break;
      case 369:
        val = t369FIndexScore;
        break;
      case 370:
        val = t370AggressionScore;
        break;
      case 371:
        val = t371AnxietyScore;
        break;
      case 372:
        val = t372AttentionProblemsScore;
        break;
      case 373:
        val = t373AtypicalityScore;
        break;
      case 374:
        val = t374ConductProblemsScore;
        break;
      case 375:
        val = t375DepressionScore;
        break;
      case 376:
        val = t376HyperactivityScore;
        break;
      case 377:
        val = t377LearningProblemsScore;
        break;
      case 378:
        val = t378SomatizationScore;
        break;
      case 379:
        val = t379WithdrawalScore;
        break;
      case 380:
        val = t380ActivitiesOfDailyLivingScore;
        break;
      case 381:
        val = t381AdaptabilityScore;
        break;
      case 382:
        val = t382FunctionalCommunicationScore;
        break;
      case 383:
        val = t383LeadershipScore;
        break;
      case 384:
        val = t384SocialSkillsScore;
        break;
      case 385:
        val = t385StudySkillsScore;
        break;
      case 386:
        val = t386AngerControlScore;
        break;
      case 387:
        val = t387BullyingScore;
        break;
      case 388:
        val = t388DevelopmentalSocialDisordersScore;
        break;
      case 389:
        val = t389EmotionalSelfControlScore;
        break;
      case 390:
        val = t390ExecutiveFunctioningScore;
        break;
      case 391:
        val = t391NegativeEmotionalityScore;
        break;
      case 392:
        val = t392ResiliencyScore;
        break;
      case 393:
        val = t393HyperactivityScore;
        break;
      case 394:
        val = t394AggressionScore;
        break;
      case 395:
        val = t395AnxietyScore;
        break;
      case 396:
        val = t396DepressionScore;
        break;
      case 397:
        val = t397SomatizationScore;
        break;
      case 398:
        val = t398AdaptabilityScore;
        break;
      case 399:
        val = t399SocialSkillsScore;
        break;
      case 400:
        val = t400FunctionalCommunicationScore;
        break;
      case 401:
        val = t401HyperactivityScore;
        break;
      case 402:
        val = t402AggressionScore;
        break;
      case 403:
        val = t403DepressionScore;
        break;
      case 404:
        val = t404AttentionProblemsScore;
        break;
      case 405:
        val = t405AtypicalityScore;
        break;
      case 406:
        val = t406WithdrawalScore;
        break;
      case 407:
        val = t407HyperactivityScore;
        break;
      case 408:
        val = t408AggressionScore;
        break;
      case 409:
        val = t409ConductProblemsScore;
        break;
      case 410:
        val = t410AnxietyScore;
        break;
      case 411:
        val = t411DepressionScore;
        break;
      case 412:
        val = t412SomatizationScore;
        break;
      case 413:
        val = t413LearningProblemsScore;
        break;
      case 414:
        val = t414AttentionProblemsScore;
        break;
      case 415:
        val = t415AdaptabilityScore;
        break;
      case 416:
        val = t416SocialSkillsScore;
        break;
      case 417:
        val = t417FunctionalCommunicationScore;
        break;
      case 418:
        val = t418LeadershipScore;
        break;
      case 419:
        val = t419StudySkillsScore;
        break;
      case 420:
        val = t420HyperactivityScore;
        break;
      case 421:
        val = t421AggressionScore;
        break;
      case 422:
        val = t422DepressionScore;
        break;
      case 423:
        val = t423AttentionProblemsScore;
        break;
      case 424:
        val = t424AtypicalityScore;
        break;
      case 425:
        val = t425WithdrawalScore;
        break;
      case 426:
        val = t426HyperactivityScore;
        break;
      case 427:
        val = t427AggressionScore;
        break;
      case 428:
        val = t428AnxietyScore;
        break;
      case 429:
        val = t429DepressionScore;
        break;
      case 430:
        val = t430SomatizationScore;
        break;
      case 431:
        val = t431AdaptabilityScore;
        break;
      case 432:
        val = t432SocialSkillsScore;
        break;
      case 433:
        val = t433FunctionalCommunicationScore;
        break;
      case 434:
        val = t434ActivitiesOfDailyLivingScore;
        break;
      case 435:
        val = t435HyperactivityScore;
        break;
      case 436:
        val = t436AggressionScore;
        break;
      case 437:
        val = t437DepressionScore;
        break;
      case 438:
        val = t438AttentionProblemsScore;
        break;
      case 439:
        val = t439AtypicalityScore;
        break;
      case 440:
        val = t440WithdrawalScore;
        break;
      case 441:
        val = t441HyperactivityScore;
        break;
      case 442:
        val = t442AggressionScore;
        break;
      case 443:
        val = t443ConductProblemsScore;
        break;
      case 444:
        val = t444AnxietyScore;
        break;
      case 445:
        val = t445DepressionScore;
        break;
      case 446:
        val = t446SomatizationScore;
        break;
      case 447:
        val = t447AdaptabilityScore;
        break;
      case 448:
        val = t448SocialSkillsScore;
        break;
      case 449:
        val = t449FunctionalCommunicationScore;
        break;
      case 450:
        val = t450ActivitiesOfDailyLivingScore;
        break;
      case 451:
        val = t451HyperactivityScore;
        break;
      case 452:
        val = t452AggressionScore;
        break;
      case 453:
        val = t453DepressionScore;
        break;
      case 454:
        val = t454AttentionProblemsScore;
        break;
      case 455:
        val = t455AtypicalityScore;
        break;
      case 456:
        val = t456WithdrawalScore;
        break;
      case 457:
        val = t457SimilaritiesScore;
        break;
      case 458:
        val = t458VocabularyScore;
        break;
      case 459:
        val = t459InformationScore;
        break;
      case 460:
        val = t460ComprehensionScore;
        break;
      case 461:
        val = t461BlockDesignScore;
        break;
      case 462:
        val = t462MatrixReasoningScore;
        break;
      case 463:
        val = t463VisualPuzzlesScore;
        break;
      case 464:
        val = t464FigureWeightsScore;
        break;
      case 465:
        val = t465PictureCompletionScore;
        break;
      case 466:
        val = t466DigitSpanScore;
        break;
      case 467:
        val = t467ArithmeticScore;
        break;
      case 468:
        val = t468LetterNumberSequencingScore;
        break;
      case 469:
        val = t469CodingScore;
        break;
      case 470:
        val = t470SymbolSearchScore;
        break;
      case 471:
        val = t471CancellationScore;
        break;
      case 472:
        val = t472PoorAchievementAndMemoryScore;
        break;
      case 473:
        val = t473InadequateAbilitiesScore;
        break;
      case 474:
        val = t474LearningProblemsScore;
        break;
      case 475:
        val = t475BrashnessScore;
        break;
      case 476:
        val = t476DistractibilityAndOveractivityScore;
        break;
      case 477:
        val = t477ImpulsivityScore;
        break;
      case 478:
        val = t478AntisocialBehaviorScore;
        break;
      case 479:
        val = t479DyscontrolScore;
        break;
      case 480:
        val = t480NoncomplianceScore;
        break;
      case 481:
        val = t481ParentChildConflictScore;
        break;
      case 482:
        val = t482ParentMaladjustmentScore;
        break;
      case 483:
        val = t483MaritalDiscordScore;
        break;
      case 484:
        val = t484FeelingsOfAlienationScore;
        break;
      case 485:
        val = t485HallucinationsAndDelusionsScore;
        break;
      case 486:
        val = t486PsychosomaticSyndromeScore;
        break;
      case 487:
        val = t487MuscularTensionAndAnxietyScore;
        break;
      case 488:
        val = t488PreoccupationWithDiseaseScore;
        break;
      case 489:
        val = t489FearAndWorryScore;
        break;
      case 490:
        val = t490DepressionScore;
        break;
      case 491:
        val = t491SleepDisturbanceScore;
        break;
      case 492:
        val = t492SocialIntroversionScore;
        break;
      case 493:
        val = t493IsolationScore;
        break;
      case 494:
        val = t494LimitedPeerStatusScore;
        break;
      case 495:
        val = t495ConflictWithPeersScore;
        break;
      case 496:
        val = t496Schizoid1Score;
        break;
      case 497:
        val = t497Avoidant2aScore;
        break;
      case 498:
        val = t498Depressive2bScore;
        break;
      case 499:
        val = t499Dependent3Score;
        break;
      case 500:
        val = t500Histrionic4Score;
        break;
      case 501:
        val = t501Narcissistic5Score;
        break;
      case 502:
        val = t502Antisocial6aScore;
        break;
      case 503:
        val = t503SadisticAggressive6bScore;
        break;
      case 504:
        val = t504Compulsive7Score;
        break;
      case 505:
        val = t505NegativisticPassiveAggressive8aScore;
        break;
      case 506:
        val = t506MasochisticSelfDefeating8bScore;
        break;
      case 507:
        val = t507SchizotypalSScore;
        break;
      case 508:
        val = t508borderlineCScore;
        break;
      case 509:
        val = t509ParanoidPScore;
        break;
      case 510:
        val = t510AnxietyAScore;
        break;
      case 511:
        val = t511SomatoformHScore;
        break;
      case 512:
        val = t512bipolarManicNScore;
        break;
      case 513:
        val = t513DysthymiaDScore;
        break;
      case 514:
        val = t514AlcoholDependencebScore;
        break;
      case 515:
        val = t515DrugDependenceTScore;
        break;
      case 516:
        val = t516PostTraumaticStressDisorderRScore;
        break;
      case 517:
        val = t517ThoughtDisorderSsScore;
        break;
      case 518:
        val = t518MajorDepressionCcScore;
        break;
      case 519:
        val = t519DelusionalDisorderPpScore;
        break;
      case 520:
        val = t520DisclosureXScore;
        break;
      case 521:
        val = t521DesirabilityYScore;
        break;
      case 522:
        val = t522DebasementZScore;
        break;
      case 523:
        val = t523InvalidityVScore;
        break;
      case 524:
        val = t524InconsistencyWScore;
        break;
      case 525:
        val = t525HypochondriasisHsScore;
        break;
      case 526:
        val = t526DepressionDScore;
        break;
      case 527:
        val = t527HysteriaHyScore;
        break;
      case 528:
        val = t528PsychopathicDeviatePdScore;
        break;
      case 529:
        val = t529MasculinityFemininityMfScore;
        break;
      case 530:
        val = t530ParanoiaPaScore;
        break;
      case 531:
        val = t531PsychastheniaPtScore;
        break;
      case 532:
        val = t532SchizophreniaScScore;
        break;
      case 533:
        val = t533HypomaniaMaScore;
        break;
      case 534:
        val = t534SocialIntroversionSiScore;
        break;
      case 535:
        val = t535LieLScore;
        break;
      case 536:
        val = t536FScore;
        break;
      case 537:
        val = t537BackFFbScore;
        break;
      case 538:
        val = t538KScore;
        break;
      case 539:
        val = t539HypochondriasisHsScore;
        break;
      case 540:
        val = t540DepressionDScore;
        break;
      case 541:
        val = t541HysteriaHyScore;
        break;
      case 542:
        val = t542PsychopathicDeviatePdScore;
        break;
      case 543:
        val = t543MasculinityFemininityMfScore;
        break;
      case 544:
        val = t544ParanoiaPaScore;
        break;
      case 545:
        val = t545PsychastheniaPtScore;
        break;
      case 546:
        val = t546SchizophreniaScScore;
        break;
      case 547:
        val = t547HypomaniaMaScore;
        break;
      case 548:
        val = t548SocialIntroversionSiScore;
        break;
      case 549:
        val = t549CnsScore;
        break;
      case 550:
        val = t550VrinScore;
        break;
      case 551:
        val = t551TrinScore;
        break;
      case 552:
        val = t552FScore;
        break;
      case 553:
        val = t553F1Score;
        break;
      case 554:
        val = t554F2Score;
        break;
      case 555:
        val = t555LScore;
        break;
      case 556:
        val = t556KScore;
        break;
      case 557:
        val = t557AnimalSortingAsScore;
        break;
      case 558:
        val = t558AuditoryAttentionAaAndResponseSetRsScore;
        break;
      case 559:
        val = t559ClocksClScore;
        break;
      case 560:
        val = t560DesignFluencyDfScore;
        break;
      case 561:
        val = t561InhibitionInScore;
        break;
      case 562:
        val = t562StatueStScore;
        break;
      case 563:
        val = t563BodyPartNamingBpnAndIdentificationBpiScore;
        break;
      case 564:
        val = t564ComprehensionOfInstructionsCiScore;
        break;
      case 565:
        val = t565OromotorSequencesOsScore;
        break;
      case 566:
        val = t566PhonologicalProcessingPhScore;
        break;
      case 567:
        val = t567RepetitionNonsenseWordsRnScore;
        break;
      case 568:
        val = t568SpeededNamingSnScore;
        break;
      case 569:
        val = t569WordGenerationWgScore;
        break;
      case 571:
        val = t571ListMemoryLmListMemoryDelayedLmdScore;
        break;
      case 572:
        val = t572MemoryForDesignsMdMemoryForDesignsDelayedMddScore;
        break;
      case 573:
        val = t573MemoryForFacesMfMemoryForFacesDelayedMfdScore;
        break;
      case 574:
        val = t574MemoryForNamesMnMemoryForNamesDelayedMndScore;
        break;
      case 575:
        val = t575NarrativeMemoryNmScore;
        break;
      case 576:
        val = t576SentenceRepetitionSrScore;
        break;
      case 577:
        val = t577WordListInterferenceWiScore;
        break;
      case 578:
        val = t578FingertipTappingFtScore;
        break;
      case 579:
        val = t579ImitatingHandPositionsIhScore;
        break;
      case 580:
        val = t580ManualMotorSequencesMmScore;
        break;
      case 581:
        val = t581VisuomotorPrecisionVpScore;
        break;
      case 582:
        val = t582AffectRecognitionArScore;
        break;
      case 583:
        val = t583TheoryOfMindTmScore;
        break;
      case 584:
        val = t584ArrowsAwScore;
        break;
      case 585:
        val = t585BlockConstructionBcScore;
        break;
      case 586:
        val = t586DesignCopyingDcScore;
        break;
      case 587:
        val = t587GeometricPuzzlesGpScore;
        break;
      case 588:
        val = t588PicturePuzzlesPpScore;
        break;
      case 589:
        val = t589RouteFindingRfScore;
        break;
      case 590:
        val = t590DrawingScore;
        break;
      case 591:
        val = t591MatchingScore;
        break;
      case 592:
        val = t592PegboardScore;
        break;
      case 593:
        val = t593VocabularyScore;
        break;
      case 594:
        val = t594GeneralInformationScore;
        break;
      case 595:
        val = t595NumberSeriesScore;
        break;
      case 596:
        val = t596ConceptFormationScore;
        break;
      case 597:
        val = t597AnalysisSynthesisScore;
        break;
      case 598:
        val = t598VerbalAttentionScore;
        break;
      case 599:
        val = t599NumbersReversedScore;
        break;
      case 600:
        val = t600ObjectNumberSequencingScore;
        break;
      case 601:
        val = t601PairCancellationScore;
        break;
      case 645:
        val = t645LetterPatternMatchingScore;
        break;
      case 602:
        val = t602PhonologicalProcessingScore;
        break;
      case 603:
        val = t603NonWordRepetitionScore;
        break;
      case 604:
        val = t604RecallScore;
        break;
      case 605:
        val = t605VisualAuditoryLearningScore;
        break;
      case 606:
        val = t606VisualizationScore;
        break;
      case 607:
        val = t607PictureRecognitionScore;
        break;
      case 608:
        val = t608UnderresponseUndScore;
        break;
      case 609:
        val = t609HyperresponseHypScore;
        break;
      case 610:
        val = t610AnxietyAnxScore;
        break;
      case 611:
        val = t611DepressionDepScore;
        break;
      case 612:
        val = t612AngerAngScore;
        break;
      case 613:
        val = t613PosttraumaticStressPtsScore;
        break;
      case 614:
        val = t614DissociationDisScore;
        break;
      case 615:
        val = t615SexualConcernsScScore;
        break;
      case 616:
        val = t616LetterWordIdentificationScore;
        break;
      case 617:
        val = t617WordAttackScore;
        break;
      case 618:
        val = t618PassageComprehensionScore;
        break;
      case 619:
        val = t619ReadingRecallScore;
        break;
      case 620:
        val = t620ReadingVocabularyScore;
        break;
      case 621:
        val = t621CalculationScore;
        break;
      case 622:
        val = t622MathFactFluencyScore;
        break;
      case 623:
        val = t623AppliedProblemsScore;
        break;
      case 624:
        val = t624NumberMatricesScore;
        break;
      case 625:
        val = t625WritingSamplesScore;
        break;
      case 626:
        val = t626SentenceWritingFluencyScore;
        break;
      case 627:
        val = t627OralReadingScore;
        break;
      case 628:
        val = t628SentenceReadingFluencyScore;
        break;
      case 629:
        val = t629SpellingScore;
        break;
      case 630:
        val = t630SpellingOfSoundsScore;
        break;
      case 631:
        val = t631EditingScore;
        break;
      case 632:
        val = t632ScienceScore;
        break;
      case 633:
        val = t633SocialStudiesScore;
        break;
      case 634:
        val = t634HumanitiesScore;
        break;
      case 635:
        val = t635WordAttackScore;
        break;
      case 636:
        val = t636SpellingOfSoundsScore;
        break;
      case 637:
        val = t637BriefCognitiveStatusExamScore;
        break;
      case 638:
        val = t638LogicalMemoryScore;
        break;
      case 639:
        val = t639VerbalPairedAssociatesScore;
        break;
      case 640:
        val = t640DesignsScore;
        break;
      case 641:
        val = t641VisualReproductionScore;
        break;
      case 642:
        val = t642SpatialAdditionScore;
        break;
      case 643:
        val = t643SymbolSpanScore;
        break;
      case 647:
        val = t647SimilaritiesScore;
        break;
      case 648:
        val = t648VocabularyScore;
        break;
      case 649:
        val = t649InformationScore;
        break;
      case 650:
        val = t650ComprehensionScore;
        break;
      case 651:
        val = t651MatrixReasoningScore;
        break;
      case 652:
        val = t652PictureConceptsScore;
        break;
      case 653:
        val = t653BlockDesignScore;
        break;
      case 654:
        val = t654ObjectAssemblyScore;
        break;
      case 655:
        val = t655PictureMemoryScore;
        break;
      case 656:
        val = t656ZooLocationsScore;
        break;
      case 657:
        val = t657BugSearchScore;
        break;
      case 658:
        val = t658CancellationScore;
        break;
      case 659:
        val = t659AnimalCodingScore;
        break;
      case 660:
        val = t660ReceptiveVocabularyScore;
        break;
      case 661:
        val = t661PictureNamingScore;
        break;
      case 662:
        val = t662SocialStressScore;
        break;
      case 663:
        val = "";
        break;
      case 664:
        val = t664AnxietyScore;
        break;
      case 665:
        val = t665DepressionScore;
        break;
      case 666:
        val = t666SenseOfInadequacyScore;
        break;
      case 667:
        val = t667SelfEsteemScore;
        break;
      case 668:
        val = t668SelfRelianceScore;
        break;
      case 669:
        val = t669BeeryMotorIntegrationVmiScore;
        break;
      case 670:
        val = t670BeeryVisualPerceptionScore;
        break;
      case 671:
        val = t671BeeryMotorCoordinationScore;
        break;
      case 733:
        val = t733RateScore;
        break;
      case 734:
        val = t734AccuracyScore;
        break;
      case 735:
        val = t735FluencyScore;
        break;
      case 736:
        val = t736ComprehensionScore;
        break;
      case 737:
        val = t737Trail1Score;
        break;
      case 738:
        val = t738Trial2Score;
        break;
      case 739:
        val = t739RetentionTrialScore;
        break;
      case 743:
        val = t743VerbalComprehensionScore;
        break;
      case 744:
        val = t744PictureSimilaritiesScore;
        break;
      case 745:
        val = t745NamingVocabularyScore;
        break;
      case 746:
        val = t746PatternConstructionScore;
        break;
      case 747:
        val = t747MatricesScore;
        break;
      case 748:
        val = t748CopyingScore;
        break;
      case 749:
        val = t749RecallOfObjectsImmediateScore;
        break;
      case 750:
        val = t750RecallOfObjectsDelayedScore;
        break;
      case 751:
        val = t751RecallOfDigitsForwardScore;
        break;
      case 752:
        val = t752RecognitionOfPicturesScore;
        break;
      case 753:
        val = t753EarlyNumberConceptsScore;
        break;
      case 754:
        val = t754MatchingLetterLikeFormsScore;
        break;
      case 755:
        val = t755RecallOfSequentialOrderScore;
        break;
      case 756:
        val = t756SpeedOfInformationProcessingScore;
        break;
      case 757:
        val = t757RecallOfDigitsBackwardScore;
        break;
      case 758:
        val = t758PhonologicalProcessingScore;
        break;
      case 759:
        val = t759RapidNamingScore;
        break;
      case 760:
        val = t760RecallOfDesignsScore;
        break;
      case 761:
        val = t761WordDefinitionsScore;
        break;
      case 762:
        val = t762PatternConstructionScore;
        break;
      case 763:
        val = t763MatricesScore;
        break;
      case 764:
        val = t764VerbalSimilaritiesScore;
        break;
      case 765:
        val = t765SequentialAndQuantitativeReasoningScore;
        break;
      case 766:
        val = t766RecallOfObjectsImmediateScore;
        break;
      case 767:
        val = t767RecallOfObjectsDelayedScore;
        break;
      case 768:
        val = t768RecallOfDigitsForwardScore;
        break;
      case 769:
        val = t769RecognitionOfPicturesScore;
        break;
      case 770:
        val = t770RecallOfSequentialOrderScore;
        break;
      case 771:
        val = t771SpeedOfInformationProcessingScore;
        break;
      case 772:
        val = t772RecallOfDigitsBackwardScore;
        break;
      case 773:
        val = t773PhonologicalProcessingScore;
        break;
    }
    return val;
  };

  const subTestDescriptionColVal = id => {
    let val;
    switch (id) {
      case 472:
        val = t110PoorAchievementAndMemoryPercentileRank;
        break;
      case 473:
        val = t110InadequateAbilitiesPercentileRank;
        break;
      case 474:
        val = t110LearningProblemsPercentileRank;
        break;
      case 475:
        val = t111BrashnessPercentileRank;
        break;
      case 476:
        val = t111DistractibilityAndOveractivityPercentileRank;
        break;
      case 477:
        val = t111ImpulsivityPercentileRank;
        break;
      case 478:
        val = t112AntisocialBehaviorPercentileRank;
        break;
      case 479:
        val = t112DyscontrolPercentileRank;
        break;
      case 480:
        val = t112NoncompliancePercentileRank;
        break;
      case 481:
        val = t113ParentChildConflictPercentileRank;
        break;
      case 482:
        val = t113ParentMaladjustmentPercentileRank;
        break;
      case 483:
        val = t113MaritalDiscordPercentileRank;
        break;
      case 484:
        val = t114FeelingsOfAlienationPercentileRank;
        break;
      case 485:
        val = t114HallucinationsAndDelusionsPercentileRank;
        break;
      case 486:
        val = t115PsychosomaticSyndromePercentileRank;
        break;
      case 487:
        val = t115MuscularTensionAndAnxietyPercentileRank;
        break;
      case 488:
        val = t115PreoccupationWithDiseasePercentileRank;
        break;
      case 489:
        val = t116FearAndWorryPercentileRank;
        break;
      case 490:
        val = t116DepressionPercentileRank;
        break;
      case 491:
        val = t116SleepDisturbancePercentileRank;
        break;
      case 492:
        val = t117SocialIntroversionPercentileRank;
        break;
      case 493:
        val = t117IsolationPercentileRank;
        break;
      case 494:
        val = t118LimitedPeerStatusPercentileRank;
        break;
      case 495:
        val = t118ConflictWithPeersPercentileRank;
        break;
      default:
        val = "";
    }
    return val;
  };

  const testScoringTableScoresCol1Val = id => {
    let val;
    switch (id) {
      case 30:
        val = t30NelsonDennyStandardScore;
        break;
      case 31:
        val = t31NelsonDennyStandardScore;
        break;
      case 46:
        val = t46QikCptAccuracyIndexScore;
        break;
      default:
        val = "";
    }
    return val;
  };

  const testScoringTableScoresCol2Val = id => {
    let val;
    switch (id) {
      case 30:
        val = t30NelsonDennyStandardScore;
        break;
      case 31:
        val = t31NelsonDennyStandardScore;
        break;
      case 33:
        val = t33Gort5Percentile;
        break;
      case 34:
        val = t34Gort5Percentile;
        break;
      case 35:
        val = t35Gort5Percentile;
        break;
      case 36:
        val = t36Gort5Percentile;
        break;
      case 46:
        val = t46QikCptSustainedAttentionScore;
        break;
      default:
        val = "";
    }
    return val;
  };

  const testScoringTableScoresCol3Val = id => {
    let val;
    switch (id) {
      case 30:
        val = t30NelsonDennyPercentile;
        break;
      case 31:
        val = t31NelsonDennyPercentile;
        break;
      case 33:
        val = t33Gort5AgeLevelEquivalency;
        break;
      case 34:
        val = t34Gort5AgeLevelEquivalency;
        break;
      case 35:
        val = t35Gort5AgeLevelEquivalency;
        break;
      case 36:
        val = t36Gort5AgeLevelEquivalency;
        break;
      case 46:
        val = t46QikCptImpulseControlScore;
        break;
      default:
        val = "";
    }
    return val;
  };

  const testScoringTableScoresCol4Val = id => {
    let val;
    switch (id) {
      case 30:
        val = t30NelsonDennyGradeEquivalent;
        break;
      case 31:
        val = t31NelsonDennyGradeEquivalent;
        break;
      case 33:
        val = t33Gort5GradeLevelEquivalency;
        break;
      case 34:
        val = t34Gort5GradeLevelEquivalency;
        break;
      case 35:
        val = t35Gort5GradeLevelEquivalency;
        break;
      case 36:
        val = t36Gort5GradeLevelEquivalency;
        break;
      case 46:
        val = t46QikCptPerformanceIndexScore;
        break;
      default:
        val = "";
    }
    return val;
  };

  const testScoringTableScoresCol5Val = id => {
    let val;
    switch (id) {
      case 46:
        val = t46QikCptSpeedOfResponseScore;
        break;
      default:
        val = "";
    }
    return val;
  };

  const testScoringTableScoresCol6Val = id => {
    let val;
    switch (id) {
      case 46:
        val = t46QikCptConsistencyOfResponseScore;
        break;
      default:
        val = "";
    }
    return val;
  };

  const gaiRange = id => {
    let val;
    switch (id) {
      case 2:
        val = t2WiscvGaiRange;
        break;
      case 6:
        val = t6WaisivGaiRange;
        break;
      case 9:
        val = t9WppsiivGaiRange;
        break;
      default:
        val = "";
    }
    return val;
  };

  const gaiPercentile = id => {
    let val;
    switch (id) {
      case 2:
        val = t2WiscvGaiPercentile;
        break;
      case 6:
        val = t6WaisivGaiPercentile;
        break;
      case 9:
        val = t9WppsiivGaiPercentile;
        break;
      default:
        val = "";
    }
    return val;
  };

  const gcaRange = id => {
    let val;
    switch (id) {
      case 10:
        val = t10DasIiGcaRange;
        break;
      default:
        val = "";
    }
    return val;
  };

  const gcaScore = id => {
    let val;
    switch (id) {
      case 10:
        val = t10DasIiGcaScore;
        break;
      default:
        val = "";
    }
    return val;
  };

  const gcaPercentile = id => {
    let val;
    switch (id) {
      case 10:
        val = t10DasIiGcaPercentile;
        break;
      default:
        val = "";
    }
    return val;
  };

  const sncRange = id => {
    let val;
    switch (id) {
      case 10:
        val = t10DasIiSncRange;
        break;
      default:
        val = "";
    }
    return val;
  };

  const sncScore = id => {
    let val;
    switch (id) {
      case 10:
        val = t10DasIiSncScore;
        break;
      default:
        val = "";
    }
    return val;
  };

  const sncPercentile = id => {
    let val;
    switch (id) {
      case 10:
        val = t10DasIiSncPercentile;
        break;
      default:
        val = "";
    }
    return val;
  };

  const indexConditionVal = id => {
    let val;
    switch (id) {
      case 1:
        val = `${
          t1IfFsiqIsMeaningful === true
            ? `Overall, ${diName} demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of ${t1WiscvFsiqScore} (${t1WiscvFsiqPercentile} percentile), which falls within in the  ${t1WiscvFsiqRank} range when compared to ${
                diGender === "Boy" ? "his" : "her"
              } same-aged peers.`
            : `Overall, ${diName} demonstrated an inconsistent performance on the WISC-V. As a result, ${
                diGender === "Boy" ? "his" : "her"
              } Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between the five Composite areas that constitute ${
                diGender === "Boy" ? "his" : "her"
              } Full-Scale score (FSIQ). Therefore, in order to better understand ${
                diGender === "Boy" ? "his" : "her"
              } cognitive strengths and weaknesses, a more in-depth look at all of ${diName}'s individual subtest scores is warranted.`
        }`;
        break;
      case 3:
        val = `${
          t57WasiiiVerbalComprehensionConsistent === true
            ? `Overall, ${diName} demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of ${t57WasiiiVerbalComprehensionCompositeScore} (${t57WasiiiVerbalComprehensionCompositePercentile} percentile), which falls within in the ${t57WasiiiVerbalComprehensionCompositeRange} range of functioning.`
            : `Overall, ${diName} demonstrated an inconsistent performance on the WASI-II. As a result, ${
                diGender === "Boy" ? "his" : "her"
              } Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between subtests that constitute ${
                diGender === "Boy" ? "his" : "her"
              } Full-Scale score (FSIQ). Therefore, in order to better understand ${
                diGender === "Boy" ? "his" : "her"
              } cognitive strengths and weaknesses, a more in-depth look at all of ${diName}'s individual subtest scores is warranted.`
        }`;
        break;
      case 5:
        val = `${
          t5IfFsiqIsMeaningful === true
            ? `Overall, ${diName} demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of ${t5WaisivFsiqScore} (${t5WaisivFsiqPercentile} percentile), which falls within in the ${t5WaisivFsiqRank} range of functioning.`
            : `Overall, ${diName} emonstrated an inconsistent performance on the WAIS-IV. As a result, ${
                diGender === "Boy" ? "his" : "her"
              } Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between the four Composite areas that constitute ${
                diGender === "Boy" ? "his" : "her"
              } Full-Scale score (FSIQ). Therefore, in order to better understand ${
                diGender === "Boy" ? "his" : "her"
              } cognitive strengths and weaknesses, a more in-depth look at all of ${diName}'s individual subtest scores is warranted.`
        }`;
        break;
      case 7:
        val = `${
          t7IfGiaIsMeaningful === true
            ? `Overall, ${diName} demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of ${t7WjivCogFsiqScore} (${t7WjivCogFsiqPercentile} percentile), which falls within in the ${t7WjivCogFsiqRank} range of functioning.`
            : `Overall, ${diName} demonstrated an inconsistent performance on the WJ-IV. As a result, ${
                diGender === "Boy" ? "his" : "her"
              } GIA score cannot be interpreted meaningfully due to the significant discrepancies between the seven clusters. Therefore, in order to better understand ${
                diGender === "Boy" ? "his" : "her"
              } cognitive strengths and weaknesses, a more in-depth look at all of ${diName}'s individual subtest scores is warranted.`
        }`;
        break;
      case 9:
        val = `${
          t9IfFsiqIsMeaningful === true
            ? `Overall, ${diName} demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of ${t9WppsiivFsiqScore} (${t9WppsiivFsiqPercentile} percentile), which falls within in the ${t9WppsiivFsiqRank} range of functioning.`
            : `Overall, ${diName} demonstrated an inconsistent performance on the WPPSI-IV. As a result, ${
                diGender === "Boy" ? "his" : "her"
              } Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between the five Composite areas that constitute ${
                diGender === "Boy" ? "his" : "her"
              } Full-Scale score (FSIQ). Therefore, in order to better understand ${
                diGender === "Boy" ? "his" : "her"
              } cognitive strengths and weaknesses, a more in-depth look at all of ${diName}'s individual subtest scores is warranted.`
        }`;
        break;
      default:
        val = "default";
    }
    return val;
  };

  const parentScaleDescVal = id => {
    let val;
    switch (id) {
      case 57:
        val = `${diName} demonstrated a relatively ${
          t57WasiiiVerbalComprehensionConsistent === true
            ? "consistent"
            : "inconsistent"
        } performance on the subtests within the Verbal Comprehension Index (VCI). Specifically, 
        ${diGender === "Boy" ? `he` : `she`}
        received a VCI Composite score of ${t57WasiiiVerbalComprehensionCompositeScore}, (${t57WasiiiVerbalComprehensionCompositePercentile} percentile), which is in the ${t57WasiiiVerbalComprehensionCompositeRange} range of functioning compared to other individuals ${
          diGender === "Boy" ? `his` : `her`
        } age. The VCI measured ${diName}'s verbal reasoning, knowledge and conceptualization.`;
        break;
      case 58:
        val = `${diName} demonstrated a relatively ${
          t58WasiiiPerceptualReasoningConsistent === true
            ? "consistent"
            : "inconsistent"
        } performance on the subtests within the Fluid Reasoning Index (FRI). This index emphasizes visual-perceptual and visual-spatial reasoning, as well as conceptual reasoning and construction abilities requiring visual-perceptual integration. Specifically, ${diName} received a FRI Composite score of ${t58WasiiiPerceptualReasoningCompositeScore} (${t58WasiiiPerceptualReasoningCompositePercentile} percentile) which fell within the ${t58WasiiiPerceptualReasoningCompositeRange} range of functioning.`;
        break;
      case 106:
        val = `${diName} demonstrated a relatively ${
          t106WaisivVerbalComprehensionConsistent === true
            ? "consistent"
            : "inconsistent"
        } performance on the subtests within the Verbal Comprehension Index (VCI). Specifically, 
        ${diGender === "Boy" ? `he` : `she`}
        received a VCI Composite score of ${t106WaisivVerbalComprehensionCompositeScore}, (${t106WaisivVerbalComprehensionCompositePercentile} percentile), which is in the ${t106WaisivVerbalComprehensionCompositeRange} range of functioning compared to other individuals ${
          diGender === "Boy" ? `his` : `her`
        } age. The VCI measured ${diName}'s verbal reasoning, knowledge and conceptualization.`;
        break;
      case 107:
        val = `${diName} demonstrated a relatively ${
          t107WaisivPerceptualReasoningConsistent === true
            ? "consistent"
            : "inconsistent"
        } performance on the subtests within the Fluid Reasoning Index (FRI). This index emphasizes visual-perceptual and visual-spatial reasoning, as well as conceptual reasoning and construction abilities requiring visual-perceptual integration. Specifically, ${diName} received a FRI Composite score of ${t107WaisivPerceptualReasoningCompositeScore} (${t107WaisivPerceptualReasoningCompositePercentile} percentile) which fell within the ${t107WaisivPerceptualReasoningCompositeRange} range of functioning.`;
        break;
      case 108:
        val = `${diName} demonstrated a relatively ${
          t108WaisivWorkingMemoryConsistent === true
            ? "consistent"
            : "inconsistent"
        } Tasks within the Working Memory Index (WMI) measure attention, concentration, and working memory for both verbal and visual material. ${diName} received a WMI Composite score of ${t108WaisivWorkingMemoryCompositeScore} (${t108WaisivWorkingMemoryCompositePercentile} percentile) which fell within the ${t108WaisivWorkingMemoryCompositeRange} range compared to ${
          diGender === "Boy" ? `his` : `her`
        } peers.`;
        break;
      case 109:
        val = `${diName} demonstrated a relatively ${
          t109WaisvProcessingSpeedConsistent === true
            ? "consistent"
            : "inconsistent"
        } The Processing Speed domain measured ${diName}'s speed of mental and graphomotor processing, as well as their ability to efficiently scan and process visual information. ${diName} received a PSI Composite score of ${t109WaisvProcessingSpeedCompositeScore} (${t109WaisvProcessingSpeedCompositePercentile} percentile) which fell within the ${t109WaisvProcessingSpeedCompositeRange} range of functioning.`;
        break;
      case 127:
        val = `The Minnesota Multiphasic Personality Inventory-A (MMPI-A) contains eight validity scales used to describe the extent of the individual’s cooperation with the assessment. It can indicate whether the individual wanted to call attention to his or her symptoms or, conversely, if he or she was inclined to deny problems.`;
        break;
      case 134:
        val = `Comprehension-Knowledge (Gc) is a composite score that provides a estimate of crystalized intelligence or verbal ability, which is defined as a store of acquired knowledge that reflects the breadth and depth of knowledge of a culture. Comprehension-Knowledge (Gc) is composed of two tests Oral Vocabulary and General Information.<p>${diName} demonstrated a relatively ${
          t134WjivCogComprehensionKnowledgeGcConsistent === true
            ? "consistent"
            : "inconsistent"
        } performance on the subtests within the Comprehension-Knowledge (Gc) cluster. Specifically, ${
          diGender === "Boy" ? `he` : `she`
        } received a Gc score of ${t134WjivCogComprehensionKnowledgeGcCompositeScore} (${t134WjivCogComprehensionKnowledgeGcCompositePercentile} percentile) which fell within the ${t134WjivCogComprehensionKnowledgeGcCompositeRange} range of functioning compared to other individuals ${
          diGender === "Boy" ? `his` : `her`
        } age. The Gc cluster measured ${diName}'s breadth and depth of knowledge and skills, including verbal communication and reasoning ability.</p>`;
        break;
      case 135:
        val = `Fluid Reasoning (Gf) is a composite score that provides an estimate of ability to reason, form concepts, and solve problems using unfamiliar information or novel procedures. Fluid reason requires deliberate and flexible control of attention to solve on the spot problems.<p>${diName} demonstrated a relatively ${
          t135WjivCogFluidReasoningGfConsistent === true
            ? "consistent"
            : "inconsistent"
        } performance on the subtests within the Fluid Reasoning (Gf) cluster. Specifically, ${
          diGender === "Boy" ? `he` : `she`
        } received a Gf score of ${t135WjivCogFluidReasoningGfCompositeScore} (${t135WjivCogFluidReasoningGfCompositePercentile} percentile) which fell within the ${t135WjivCogFluidReasoningGfCompositeRange} range of functioning compared to other individuals ${
          diGender === "Boy" ? `his` : `her`
        } age. The Gf cluster measured ${diName}'s ability to reason, form concepts and solve problems using unfamiliar information or novel procedures.</p>`;
        break;
      case 136:
        val = `Short-Term Working Memory (Gwm) is a composite score that provides an estimate of ability to apprehend and hold information in immediate awareness and then use or manipulate it to carry out a goal.<p>${diName} demonstrated a relatively ${
          t136WjivCogShortTermWorkingMemoryGwmConsistent === true
            ? "consistent"
            : "inconsistent"
        } performance on the subtests within the Short-Term Working Memory (Gwm) cluster. Specifically, ${
          diGender === "Boy" ? `he` : `she`
        } received a Gwm score of ${t136WjivCogShortTermWorkingMemoryGwmCompositeScore} (${t136WjivCogShortTermWorkingMemoryGwmCompositePercentile} percentile) which fell within the ${t136WjivCogShortTermWorkingMemoryGwmCompositeRange} range of functioning compared to other individuals ${
          diGender === "Boy" ? `his` : `her`
        } age. The Gwm cluster measured ${diName}'s ability to apprehend and hold information in immediate awareness and then use or manipulate it.</p>`;
        break;
      case 137:
        val = `Cognitive Processing Speed (Gs) cluster is a composite score that provides an estimate of ability to quickly perform both simple and complex cognitive tasks, particularly when measured under pressure to sustain controlled attention and concentration.<p>${diName} demonstrated a relatively ${
          t137WjivCogCognitiveProcessingSpeedGsConsistent === true
            ? "consistent"
            : "inconsistent"
        } performance on the subtests within the Cognitive Processing Speed (Gs) cluster. Specifically, ${
          diGender === "Boy" ? `he` : `she`
        } received a Gs score of ${t137WjivCogCognitiveProcessingSpeedGsCompositeScore} (${t137WjivCogCognitiveProcessingSpeedGsCompositePercentile} percentile) which fell within the ${t137WjivCogCognitiveProcessingSpeedGsCompositeRange} range of functioning compared to other individuals ${
          diGender === "Boy" ? `his` : `her`
        } age. The Gs cluster measured ${diName}'s ability to quickly perform both simple and complex cognitive tasks, particularly when measured under pressure to sustain controlled attention and concentration.</p>`;
        break;
      case 138:
        val = `Auditory Processing Speed (Ga): ${diName} demonstrated a relatively ${
          t138WjivCogAuditoryProcessingSpeedGaConsistent === true
            ? "consistent"
            : "inconsistent"
        } performance on the subtests within the Auditory Processing Speed (Ga) cluster. Specifically, ${
          diGender === "Boy" ? `he` : `she`
        } received a Ga score of ${t138WjivCogAuditoryProcessingSpeedGaCompositeScore} (${t138WjivCogAuditoryProcessingSpeedGaCompositePercentile} percentile) which fell within the ${t138WjivCogAuditoryProcessingSpeedGaCompositeRange} range of functioning compared to other individuals ${
          diGender === "Boy" ? `his` : `her`
        } age. The Ga cluster measured ${diName}'s ability to encode, synthesize, and discriminate auditory stimuli, including the ability to employ auditory information in task performance.`;
        break;
      case 139:
        val = `${diName} demonstrated a relatively ${
          t139WjivCogLongTermRetrievalGlrConsistent === true
            ? "consistent"
            : "inconsistent"
        } performance on the subtests within the Long-Term Retrieval (Glr) cluster. Specifically, ${
          diGender === "Boy" ? `he` : `she`
        } received a Glr score of ${t139WjivCogLongTermRetrievalGlrCompositeScore} (${t139WjivCogLongTermRetrievalGlrCompositePercentile} percentile) which fell within the ${t139WjivCogLongTermRetrievalGlrCompositeRange} range of functioning compared to other individuals ${
          diGender === "Boy" ? `his` : `her`
        } age. The Glr cluster measured ${diName}'s ability to store information and fluently retrieve it later in the process of thinking.`;
        break;
      case 140:
        val = `${diName} demonstrated a relatively ${
          t140WjivCogVisualProcessingGvConsistent === true
            ? "consistent"
            : "inconsistent"
        } performance on the subtests within the Visual Processing (Gv) cluster. Specifically, ${
          diGender === "Boy" ? `he` : `she`
        } received a Gv score of ${t140WjivCogVisualProcessingGvCompositeScore} (${t140WjivCogVisualProcessingGvCompositePercentile} percentile) which fell within the ${t140WjivCogVisualProcessingGvCompositeRange} range of functioning compared to other individuals (his/her) age. The Gv cluster measured ${diName}'s ability to perceive, analyze, synthesize and think with visual patterns, including the ability to store and recall visual representations.`;
        break;
      case 142:
        val = `TSCC has two validity scales: one that taps a child’s tendency to deny any symptomatology and one that indexes a tendency to overrespond to symptom items. <ul><li><b>Underresponse (UND) &#10142;</b> The UND scale reflects the extent to which the respondent denied behaviors, thoughts, or feelings that most others would report at some nonzero level.</li><li><b>Hyperresponse (HYP) &#10142;</b> Is when the child indiscriminately endorses the highest frequency point for many or all symptom items.</li></ul>`;
        break;
      case 143:
        val = `The clinical scales of the TSCC measure the extent to which the child endorses six different types of potentially trauma-related symptoms. Five of the six scales (all but PTS) are nonoverlapping at the item level. Two of these clinical scales (DIS and SC) also contain scorable subscales, based upon principle components analyses and scale content.<ul><li><b>Anxiety (ANX) &#10142;</b> Scores on the Anxiety (ANX) scale reflect the extent to which the child is experiencing generalized anxiety, hyperarousal, and worry, as well as specific fears of men or women, of the dark, and of being killed. Also tapped by this scale are episodes of free-floating anxiety and fears of impeding danger.</li><li><b>Depression (DEP) &#10142;</b> The Depression (DEP) scale taps feelings of sadness, unhappiness, and loneliness; episodes of tearfulness; and depressive cognitions such as guilt and self-denigration.</li>  <li><b>Anger (ANG)  &#10142;</b> Scores on the Anger (ANG) scale indicate the extent of angry thoughts, feelings, and behaviors reported by the child.</li>  <li><b>Posttraumatic Stress &#10142;</b> The Posttraumatic Stress (PTS) scale consists of items reflecting classic posttraumatic symptoms.</li><li><b>Dissociation (DIS) &#10142;</b> The Dissociation (DIS) scale measures the extent to which the child experiences mild-to-moderate dissociative symptomatology.</li>  <li><b>Sexual Concerns (SC) &#10142;</b> The Sexual Concerns (SC) scale measures sexual distress and preoccupation.</li></ul>`;
        break;
      case 160:
        val = `The Minnesota Personality Inventory-A is a self-report instrument designed to aid in the assessment of a wide range of clinical conditions.`;
        break;
      default:
        val = "default";
    }
    return val;
  };

  const summaryAbilities = id => {
    let val;
    switch (id) {
      case 2:
        val = t2DasIISummaryAbilities;
        break;
      case 3:
        val = t3WasiiiSummaryAbilities;
        break;
      case 4:
        val = t4WiatiiiSummaryAbilities;
        break;
      case 5:
        val = t5WaisivSummaryAbilities;
        break;
      case 6:
        val = t6WjivCogSummaryAbilities;
        break;
      case 9:
        val = t9WppsiivSummaryAbilities;
        break;
      default:
        val = "";
    }
    return val;
  };

  const summaryChallenges = id => {
    let val;
    switch (id) {
      case 2:
        val = t2DasIISummaryChallenges;
        break;
      case 3:
        val = t3WasiiiSummaryChallenges;
        break;
      case 4:
        val = t4WiatiiiSummaryChallenges;
        break;
      case 5:
        val = t5WaisivSummaryChallenges;
        break;
      case 6:
        val = t6WjivCogSummaryChallenges;
        break;
      case 9:
        val = t9WppsiivSummaryChallenges;
        break;
      default:
        val = "";
    }
    return val;
  };

  const appendixTestIndexScoreVal = (id, name) => {
    let val;
    switch (id) {
      case 1:
        name === "Full Scale IQ"
          ? (val = t1WiscvFsiqScore)
          : (val = t1WiscVVerbalComprehensionIndexVciCompositeScore);
        break;
      case 2:
        val = t2WiscVVisualSpatialIndexVsiCompositeScore;
        break;
      case 3:
        name === "Full Scale IQ"
          ? (val = t3WasiiiFsiqScore)
          : (val = t3WiscVFluidReasoningIndexFriCompositeScore);
        break;
      case 4:
        val = t4WiscVWorkingMemoryIndexWmiCompositeScore;
        break;
      case 5:
        name === "Full Scale IQ"
          ? (val = t5WaisivFsiqScore)
          : (val = t5WiscVProcessingSpeedIndexPsiCompositeScore);
        break;
      case 6:
        val = "";
        break;
      case 7:
        val = t7WjivCogFsiqScore;
        break;
      case 9:
        val = t9WppsiivFsiqScore;
        break;
      case 10:
        name === "General Conceptual Ability (GCA)"
          ? (val = t10DasIiGcaScore)
          : (val = t10DasIiSncScore);
        break;
      case 57:
        val = t57WasiiiVerbalComprehensionCompositeScore;
        break;
      case 58:
        val = t58WasiiiPerceptualReasoningCompositeScore;
        break;
      case 106:
        val = t106WaisIvVerbalComprehensionCompositeScore;
        break;
      case 107:
        val = t107WaisIvPerceptualReasoningCompositeScore;
        break;
      case 108:
        val = t108WaisIvWorkingMemoryCompositeScore;
        break;
      case 109:
        val = t109WaisIvProcessingSpeedCompositeScore;
        break;
      case 134:
        val = t134WjIvCogComprehensionKnowledgeGcCompositeScore;
        break;
      case 135:
        val = t135WjIvCogFluidReasoningGfCompositeScore;
        break;
      case 136:
        val = t136WjIvCogShortTermWorkingMemoryGwmCompositeScore;
        break;
      case 137:
        val = t137WjIvCogCognitiveProcessingSpeedGsCompositeScore;
        break;
      case 138:
        val = t138WjIvCogAuditoryProcessingSpeedGaCompositeScore;
        break;
      case 139:
        val = t139WjIvCogLongTermRetrievalGlrCompositeScore;
        break;
      case 140:
        val = t140WjIvCogVisualProcessingGvCompositeScore;
        break;
      case 153:
        val = t153WppsiIvVerbalComprehensionCompositeScore;
        break;
      case 154:
        val = t154WppsiIvFluidReasoningCompositeScore;
        break;
      case 155:
        val = t155WppsiIvVisualSpatialReasoningCompositeScore;
        break;
      case 156:
        val = t156WppsiIvWorkingMemoryCompositeScore;
        break;
      case 157:
        val = t157WppsiIvProcessingSpeedCompositeScore;
        break;
      default:
        val = "";
    }
    return val;
  };

  const appendixTestIndexRankVal = (id, name) => {
    let val;
    switch (id) {
      case 1:
        if (name === "Full Scale IQ") {
          val = t1WiscvFsiqPercentile;
        } else {
          val = t1WiscVVerbalComprehensionIndexVciCompositePercentile;
        }
        break;
      case 2:
        val = t2WiscVVisualSpatialIndexVsiCompositePercentile;
      case 3:
        if (name === "Full Scale IQ") {
          val = t3WasiiiFsiqPercentile;
        } else {
          val = t3WiscVFluidReasoningIndexFriCompositePercentile;
        }
        break;
      case 4:
        val = t4WiscVWorkingMemoryIndexWmiCompositePercentile;
        break;
      case 5:
        if (name === "Full Scale IQ") {
          val = t5WaisivFsiqPercentile;
        } else {
          val = t5WiscVProcessingSpeedIndexPsiCompositePercentile;
        }
        break;
      case 6:
        val = t6WaisivGaiPercentile;
        break;
      case 7:
        val = t7WjivCogFsiqPercentile;
        break;
      case 9:
        name === "Full Scale IQ"
          ? (val = t9WppsiivFsiqPercentile)
          : (val = t9WppsiivGaiPercentile);
        break;
      case 10:
        name === "General Conceptual Ability (GCA)"
          ? (val = t10DasIiGcaPercentile)
          : (val = t10DasIiSncPercentile);
        break;
      case 57:
        val = t57WasiiiVerbalComprehensionCompositePercentile;
        break;
      case 58:
        val = t58WasiiiPerceptualReasoningCompositePercentile;
        break;
      case 106:
        val = t106WaisIvVerbalComprehensionCompositePercentile;
        break;
      case 107:
        val = t107WaisIvPerceptualReasoningCompositePercentile;
        break;
      case 108:
        val = t108WaisIvWorkingMemoryCompositePercentile;
        break;
      case 109:
        val = t109WaisIvProcessingSpeedCompositePercentile;
        break;
      case 134:
        val = t134WjIvCogComprehensionKnowledgeGcCompositePercentile;
        break;
      case 135:
        val = t135WjIvCogFluidReasoningGfCompositePercentile;
        break;
      case 136:
        val = t136WjIvCogShortTermWorkingMemoryGwmCompositePercentile;
        break;
      case 137:
        val = t137WjIvCogCognitiveProcessingSpeedGsCompositePercentile;
        break;
      case 138:
        val = t138WjIvCogAuditoryProcessingSpeedGaCompositePercentile;
        break;
      case 139:
        val = t139WjIvCogLongTermRetrievalGlrCompositePercentile;
        break;
      case 140:
        val = t140WjIvCogVisualProcessingGvCompositePercentile;
        break;
      case 153:
        val = t153WppsiIvVerbalComprehensionCompositePercentile;
        break;
      case 154:
        val = t154WppsiIvFluidReasoningCompositePercentile;
        break;
      case 155:
        val = t155WppsiIvVisualSpatialReasoningCompositePercentile;
        break;
      case 156:
        val = t156WppsiIvWorkingMemoryCompositePercentile;
        break;
      case 157:
        val = t157WppsiIvProcessingSpeedCompositePercentile;
        break;
      default:
        val = "";
    }
    return val;
  };

  const appendixTestIndexRangeVal = (id, name) => {
    let val;
    switch (id) {
      case 1:
        if (name === "Full Scale IQ") {
          val = t1WiscvFsiqRank;
        } else {
          val = t1WiscVVerbalComprehensionIndexVciCompositeRange;
        }
        break;
      case 2:
        val = t2WiscVVisualSpatialIndexVsiCompositeRange;
        break;
      case 3:
        if (name === "Full Scale IQ") {
          val = t3WasiiiFsiqRank;
        } else {
          val = t3WiscVFluidReasoningIndexFriCompositeRange;
        }
        break;
      case 4:
        val = t4WiscVWorkingMemoryIndexWmiCompositeRange;
        break;
      case 5:
        if (name === "Full Scale IQ") {
          val = t5WaisivFsiqRank;
        } else {
          val = t5WiscVProcessingSpeedIndexPsiCompositeRange;
        }
        break;
      case 6:
        val = t6WaisivGaiRange;
        break;
      case 7:
        val = t7WjivCogFsiqRank;
        break;
      case 9:
        name === "Full Scale IQ"
          ? (val = t9WppsiivFsiqRank)
          : (val = t9WppsiivGaiRange);
        break;
      case 10:
        name === "General Conceptual Ability (GCA)"
          ? (val = t10DasIiGcaRange)
          : (val = t10DasIiSncRange);
        break;
      case 57:
        val = t57WasiiiVerbalComprehensionCompositeRange;
        break;
      case 58:
        val = t58WasiiiPerceptualReasoningCompositeRange;
        break;
      case 106:
        val = t106WaisIvVerbalComprehensionCompositeRange;
        break;
      case 107:
        val = t107WaisIvPerceptualReasoningCompositeRange;
        break;
      case 108:
        val = t108WaisIvWorkingMemoryCompositeRange;
        break;
      case 109:
        val = t109WaisIvProcessingSpeedCompositeRange;
        break;
      case 134:
        val = t134WjIvCogComprehensionKnowledgeGcCompositeRange;
        break;
      case 135:
        val = t135WjIvCogFluidReasoningGfCompositeRange;
        break;
      case 136:
        val = t136WjIvCogShortTermWorkingMemoryGwmCompositeRange;
        break;
      case 137:
        val = t137WjIvCogCognitiveProcessingSpeedGsCompositeRange;
        break;
      case 138:
        val = t138WjIvCogAuditoryProcessingSpeedGaCompositeRange;
        break;
      case 139:
        val = t139WjIvCogLongTermRetrievalGlrCompositeRange;
        break;
      case 140:
        val = t140WjIvCogVisualProcessingGvCompositeRange;
        break;
      case 153:
        val = t153WppsiIvVerbalComprehensionCompositeRange;
        break;
      case 154:
        val = t154WppsiIvFluidReasoningCompositeRange;
        break;
      case 155:
        val = t155WppsiIvVisualSpatialReasoningCompositeRange;
        break;
      case 156:
        val = t156WppsiIvWorkingMemoryCompositeRange;
        break;
      case 157:
        val = t157WppsiIvProcessingSpeedCompositeRange;
        break;
      default:
        val = "";
    }
    return val;
  };

  const appendixSubtestScoreVal = id => {
    let val;
    switch (id) {
      case 1:
        val = t1SimilaritiesScore;
        break;
      case 2:
        val = t2VocabularyScore;
        break;
      case 3:
        val = t3InformationScore;
        break;
      case 4:
        val = t4ComprehensionScore;
        break;
      case 5:
        val = t5BlockDesignScore;
        break;
      case 6:
        val = t6VocabularyScore;
        break;
      case 7:
        val = t7MatrixReasoningScore;
        break;
      case 8:
        val = t8FigureWeightsScore;
        break;
      case 9:
        val = t9PictureConceptsScore;
        break;
      case 10:
        val = t10ArithmeticScore;
        break;
      case 11:
        val = t11DigitSpanScore;
        break;
      case 12:
        val = t12PictureSpanScore;
        break;
      case 13:
        val = t13LetterNumberSequencingScore;
        break;
      case 14:
        val = t14CodingScore;
        break;
      case 15:
        val = t15SymbolSearchScore;
        break;
      case 16:
        val = t16CancellationScore;
        break;
      case 46:
        val = t46QikCptAccuracyIndexScore;
        break;
      case 47:
        val = t47QikCptSustainedAttentionScore;
        break;
      case 48:
        val = t48QikCptImpulseControlScore;
        break;
      case 49:
        val = t49QikCptPerformanceIndexScore;
        break;
      case 50:
        val = t50QikCptSpeedOfResponseScore;
        break;
      case 51:
        val = t51QikCptConsistencyOfResponseScore;
        break;
      case 73:
        val = t73NamingSpeedLiteracyScore;
        break;
      case 74:
        val = t74NamingSpeedQualityScore;
        break;
      case 75:
        val = t75ImmediateSymbolTranslationScore;
        break;
      case 76:
        val = t76DelayedSymbolTranslationScore;
        break;
      case 77:
        val = t77RecognitionSymbolTranslationScore;
        break;
      case 78:
        val = t78InconsistencyScaleScore;
        break;
      case 79:
        val = t79NegativityScaleScore;
        break;
      case 82:
        val = t82InhibitScore;
        break;
      case 83:
        val = t83ShiftScore;
        break;
      case 84:
        val = t84EmotionalControlScore;
        break;
      case 85:
        val = t85InitiateScore;
        break;
      case 86:
        val = t86WorkingMemoryScore;
        break;
      case 87:
        val = t87PlanOrganizeScore;
        break;
      case 88:
        val = t88OrganizationOfMaterialsScore;
        break;
      case 89:
        val = t89MonitorScore;
        break;
      case 90:
        val = t90InhibitScore;
        break;
      case 91:
        val = t91ShiftScore;
        break;
      case 92:
        val = t92EmotionalControlScore;
        break;
      case 93:
        val = t93InitiateScore;
        break;
      case 94:
        val = t94WorkingMemoryScore;
        break;
      case 95:
        val = t95PlanOrganizeScore;
        break;
      case 96:
        val = t96OrganizationOfMaterialsScore;
        break;
      case 97:
        val = t97MonitorScore;
        break;
      case 106:
        val = t106WaisivVerbalComprehensionCompositeScore;
        break;
      case 107:
        val = t107WaisivPerceptualReasoningCompositeScore;
        break;
      case 108:
        val = t108WaisivWorkingMemoryCompositeScore;
        break;
      case 109:
        val = t109WaisivProcessingSpeedCompositeScore;
        break;
      case 120:
        val = t120InattentionScore;
        break;
      case 121:
        val = t121HyperactivityImpulsivityScore;
        break;
      case 122:
        val = t122LearningProblemsScore;
        break;
      case 123:
        val = t123ExecutiveFunctioningScore;
        break;
      case 124:
        val = t124DefianceAggressionScore;
        break;
      case 125:
        val = t125PeerRelationsScore;
        break;
      case 126:
        val = t126AdhdInattentiveScore;
        break;
      case 127:
        val = t127AdhdHyperactiveImpulsiveScore;
        break;
      case 128:
        val = t128ConductDisorderScore;
        break;
      case 129:
        val = t129OppositionalDefiantDisorderScore;
        break;
      case 130:
        val = t130Conners3AdhdIndexScore;
        break;
      case 131:
        val = t131Conners3GlobalIndexScore;
        break;
      case 132:
        val = t132AnxietyScore;
        break;
      case 133:
        val = t133DepressionScore;
        break;
      case 134:
        val = t134SevereConductScore;
        break;
      case 135:
        val = t135PositiveImpressionScore;
        break;
      case 136:
        val = t136NegativeImpressionScore;
        break;
      case 137:
        val = t137InconsistencyIndexScore;
        break;
      case 138:
        val = t138InattentionScore;
        break;
      case 139:
        val = t139HyperactivityImpulsivityScore;
        break;
      case 141:
        val = t141LearningProblemsScore;
        break;
      case 142:
        val = t142ExecutiveFunctioningScore;
        break;
      case 143:
        val = t143DefianceAggressionScore;
        break;
      case 144:
        val = t144PeerRelationsScore;
        break;
      case 145:
        val = t145AdhdInattentiveScore;
        break;
      case 146:
        val = t146AdhdHyperactiveImpulsiveScore;
        break;
      case 147:
        val = t147ConductDisorderScore;
        break;
      case 148:
        val = t148OppositionalDefiantDisorderScore;
        break;
      case 149:
        val = t149Conners3AdhdIndexScore;
        break;
      case 150:
        val = t150Conners3GlobalIndexScore;
        break;
      case 151:
        val = t151AnxietyScore;
        break;
      case 152:
        val = t152DepressionScore;
        break;
      case 153:
        val = t153SevereConductScore;
        break;
      case 154:
        val = t154PositiveImpressionScore;
        break;
      case 155:
        val = t155NegativeImpressionScore;
        break;
      case 156:
        val = t156InconsistencyIndexScore;
        break;
      case 157:
        val = t157InattentionScore;
        break;
      case 158:
        val = t158HyperactivityImpulsivityScore;
        break;
      case 159:
        val = t159LearningProblemsScore;
        break;
      case 160:
        val = t160DefianceAggressionScore;
        break;
      case 161:
        val = t161FamilyRelationsScore;
        break;
      case 162:
        val = t162AdhdInattentiveScore;
        break;
      case 163:
        val = t163AdhdHyperactiveImpulsiveScore;
        break;
      case 164:
        val = t164ConductDisorderScore;
        break;
      case 165:
        val = t165OppositionalDefiantDisorderScore;
        break;
      case 166:
        val = t166Conners3AdhdIndexScore;
        break;
      case 644:
        val = t644AnxietyScore;
        break;
      case 167:
        val = t167DepressionScore;
        break;
      case 168:
        val = t168SevereConductScore;
        break;
      case 169:
        val = t169PositiveImpressionScore;
        break;
      case 170:
        val = t170NegativeImpressionScore;
        break;
      case 171:
        val = t171InconsistencyIndexScore;
        break;
      case 172:
        val = t172PictorialAnalogiesScore;
        break;
      case 173:
        val = t173GeometricAnalogiesScore;
        break;
      case 174:
        val = t174PictorialCategoriesScore;
        break;
      case 175:
        val = t175GeometricCategoriesScore;
        break;
      case 176:
        val = t176PictorialSequencesScore;
        break;
      case 177:
        val = t177GeometricSequencesScore;
        break;
      case 178:
        val = t178PictorialScaleScore;
        break;
      case 179:
        val = t179GeometricScaleScore;
        break;
      case 180:
        val = t180FullScaleScore;
        break;
      case 221:
        val = t221ListLearningScore;
        break;
      case 222:
        val = t222StoryMemoryScore;
        break;
      case 223:
        val = t223FigureCopyScore;
        break;
      case 224:
        val = t224LineOrientationScore;
        break;
      case 225:
        val = t225PictureNamingScore;
        break;
      case 226:
        val = t226SemanticFluencyScore;
        break;
      case 227:
        val = t227DigitSpanScore;
        break;
      case 228:
        val = t228CodingScore;
        break;
      case 229:
        val = t229ListRecallScore;
        break;
      case 230:
        val = t230ListRecognitionScore;
        break;
      case 231:
        val = t231StoryRecallScore;
        break;
      case 232:
        val = t232FigureRecallScore;
        break;
      case 233:
        val = t233ReceptiveScore;
        break;
      case 234:
        val = t234ExpressiveScore;
        break;
      case 235:
        val = t235WrittenScore;
        break;
      case 236:
        val = t236PersonalScore;
        break;
      case 237:
        val = t237DomesticScore;
        break;
      case 238:
        val = t238CommunityScore;
        break;
      case 239:
        val = t239InterpersonalRelationshipsScore;
        break;
      case 240:
        val = t240PlayAndLeisureTimeScore;
        break;
      case 241:
        val = t241CopingSkillsScore;
        break;
      case 242:
        val = t242GrossScore;
        break;
      case 243:
        val = t243FineScore;
        break;
      case 244:
        val = t244MaladaptiveBehaviorIndexScore;
        break;
      case 245:
        val = t245MaladaptiveBehaviorCriticalItemsScore;
        break;
      case 246:
        val = t246SimilaritiesScore;
        break;
      case 247:
        val = t247VocabularyScore;
        break;
      case 248:
        val = t248BlockDesignScore;
        break;
      case 249:
        val = t249MatrixReasoningScore;
        break;
      case 266:
        val = t266StoryMemoryScore;
        break;
      case 267:
        val = t267VerbalLearningScore;
        break;
      case 268:
        val = t268DesignMemoryScore;
        break;
      case 269:
        val = t269PictureMemoryScore;
        break;
      case 270:
        val = t270FingerWindowsScore;
        break;
      case 271:
        val = t271NumberLetterScore;
        break;
      case 272:
        val = t272SentenceMemoryScore;
        break;
      case 273:
        val = t273SoundSymbolScore;
        break;
      case 274:
        val = t274VerbalWorkingMemoryScore;
        break;
      case 275:
        val = t275SymbolicWorkingMemoryScore;
        break;
      case 276:
        val = t276StoryMemoryDelayRecallScore;
        break;
      case 277:
        val = t277VerbalLearningDelayRecallScore;
        break;
      case 278:
        val = t278SoundSymbolDelayRecallScore;
        break;
      case 279:
        val = t279StoryMemoryRecognitionScore;
        break;
      case 280:
        val = t280VerbalLearningRecognitionScore;
        break;
      case 281:
        val = t281DesignMemoryRecognitionScore;
        break;
      case 282:
        val = t282PictureMemoryRecognitionScore;
        break;
      case 283:
        val = t283FIndexScore;
        break;
      case 284:
        val = t284LIndexScore;
        break;
      case 285:
        val = t285VIndexScore;
        break;
      case 286:
        val = t286AlcoholAbuseScore;
        break;
      case 287:
        val = t287AnxietyScore;
        break;
      case 288:
        val = t288AttentionProblemsScore;
        break;
      case 289:
        val = t289AttitudeToSchoolScore;
        break;
      case 290:
        val = t290AttitudeToTeachersScore;
        break;
      case 291:
        val = t291AtypicalityScore;
        break;
      case 292:
        val = t292DepressionScore;
        break;
      case 293:
        val = t293HyperactivityScore;
        break;
      case 294:
        val = t294LocusOfControlScore;
        break;
      case 295:
        val = t295SchoolMaladjustmentScore;
        break;
      case 296:
        val = t296SensationSeekingScore;
        break;
      case 297:
        val = t297SenseOfInadequacyScore;
        break;
      case 298:
        val = t298SocialStressScore;
        break;
      case 299:
        val = t299SomatizationScore;
        break;
      case 300:
        val = t300InterpersonalRelationsScore;
        break;
      case 301:
        val = t301RelationsWithParentsScore;
        break;
      case 302:
        val = t302SelfEsteemScore;
        break;
      case 303:
        val = t303SelfRelianceScore;
        break;
      case 304:
        val = t304AngerControlScore;
        break;
      case 305:
        val = t305EgoStrengthScore;
        break;
      case 306:
        val = t306ManiaScore;
        break;
      case 307:
        val = t307TestAnxietyScore;
        break;
      case 308:
        val = t308AttitudeToSchoolScore;
        break;
      case 309:
        val = t309AttitudeToTeachersScore;
        break;
      case 310:
        val = t310AtypicalityScore;
        break;
      case 311:
        val = t311LocusOfControlScore;
        break;
      case 312:
        val = t312SocialStressScore;
        break;
      case 313:
        val = t313AnxietyScore;
        break;
      case 314:
        val = t314DepressionScore;
        break;
      case 315:
        val = t315SenseOfInadequacyScore;
        break;
      case 316:
        val = t316AttentionProblemsScore;
        break;
      case 317:
        val = t317HyperactivityScore;
        break;
      case 662:
        val = t318SocialStressScore;
        break;
      case 664:
        val = t319AnxietyScore;
        break;
      case 665:
        val = t320DepressionScore;
        break;
      case 666:
        val = t321SenseOfInadequacyScore;
        break;
      case 667:
        val = t322SelfEsteemScore;
        break;
      case 668:
        val = t323SelfRelianceScore;
        break;
      case 324:
        val = t324InterpersonalRelationsScore;
        break;
      case 325:
        val = t325RelationsWithParentsScore;
        break;
      case 326:
        val = t326SelfEsteemScore;
        break;
      case 327:
        val = t327SelfRelianceScore;
        break;
      case 328:
        val = t328AttitudeToSchoolScore;
        break;
      case 329:
        val = t329AttitudeToTeachersScore;
        break;
      case 330:
        val = t330SensationSeekingScore;
        break;
      case 331:
        val = t331AtypicalityScore;
        break;
      case 332:
        val = t332LocusOfControlScore;
        break;
      case 333:
        val = t333SocialStressScore;
        break;
      case 334:
        val = t334AnxietyScore;
        break;
      case 335:
        val = t335DepressionScore;
        break;
      case 336:
        val = t336SenseOfInadequacyScore;
        break;
      case 337:
        val = t337SomatizationScore;
        break;
      case 338:
        val = t338AttentionProblemsScore;
        break;
      case 339:
        val = t339HyperactivityScore;
        break;
      case 340:
        val = t340SocialStressScore;
        break;
      case 341:
        val = t341AnxietyScore;
        break;
      case 342:
        val = t342DepressionScore;
        break;
      case 343:
        val = t343SenseOfInadequacyScore;
        break;
      case 344:
        val = t344SelfEsteemScore;
        break;
      case 345:
        val = t345SelfRelianceScore;
        break;
      case 346:
        val = t346InterpersonalRelationsScore;
        break;
      case 347:
        val = t347RelationsWithParentsScore;
        break;
      case 348:
        val = t348SelfEsteemScore;
        break;
      case 349:
        val = t349SelfRelianceScore;
        break;
      case 350:
        val = t350AtypicalityScore;
        break;
      case 351:
        val = t351LocusOfControlScore;
        break;
      case 352:
        val = t352SocialStressScore;
        break;
      case 353:
        val = t353AnxietyScore;
        break;
      case 354:
        val = t354DepressionScore;
        break;
      case 355:
        val = t355SenseOfInadequacyScore;
        break;
      case 356:
        val = t356SomatizationScore;
        break;
      case 357:
        val = t357AttentionProblemsScore;
        break;
      case 358:
        val = t358HyperactivityScore;
        break;
      case 359:
        val = t359SocialStressScore;
        break;
      case 360:
        val = t360AnxietyScore;
        break;
      case 361:
        val = t361DepressionScore;
        break;
      case 362:
        val = t362SenseOfInadequacyScore;
        break;
      case 363:
        val = t363SelfEsteemScore;
        break;
      case 364:
        val = t364SelfRelianceScore;
        break;
      case 365:
        val = t365InterpersonalRelationsScore;
        break;
      case 366:
        val = t366RelationsWithParentsScore;
        break;
      case 367:
        val = t367SelfEsteemScore;
        break;
      case 368:
        val = t368SelfRelianceScore;
        break;
      case 369:
        val = t369FIndexScore;
        break;
      case 370:
        val = t370AggressionScore;
        break;
      case 371:
        val = t371AnxietyScore;
        break;
      case 372:
        val = t372AttentionProblemsScore;
        break;
      case 373:
        val = t373AtypicalityScore;
        break;
      case 374:
        val = t374ConductProblemsScore;
        break;
      case 375:
        val = t375DepressionScore;
        break;
      case 376:
        val = t376HyperactivityScore;
        break;
      case 377:
        val = t377LearningProblemsScore;
        break;
      case 378:
        val = t378SomatizationScore;
        break;
      case 379:
        val = t379WithdrawalScore;
        break;
      case 380:
        val = t380ActivitiesOfDailyLivingScore;
        break;
      case 381:
        val = t381AdaptabilityScore;
        break;
      case 382:
        val = t382FunctionalCommunicationScore;
        break;
      case 383:
        val = t383LeadershipScore;
        break;
      case 384:
        val = t384SocialSkillsScore;
        break;
      case 385:
        val = t385StudySkillsScore;
        break;
      case 386:
        val = t386AngerControlScore;
        break;
      case 387:
        val = t387BullyingScore;
        break;
      case 388:
        val = t388DevelopmentalSocialDisordersScore;
        break;
      case 389:
        val = t389EmotionalSelfControlScore;
        break;
      case 390:
        val = t390ExecutiveFunctioningScore;
        break;
      case 391:
        val = t391NegativeEmotionalityScore;
        break;
      case 392:
        val = t392ResiliencyScore;
        break;
      case 393:
        val = t393HyperactivityScore;
        break;
      case 394:
        val = t394AggressionScore;
        break;
      case 395:
        val = t395AnxietyScore;
        break;
      case 396:
        val = t396DepressionScore;
        break;
      case 397:
        val = t397SomatizationScore;
        break;
      case 398:
        val = t398AdaptabilityScore;
        break;
      case 399:
        val = t399SocialSkillsScore;
        break;
      case 400:
        val = t400FunctionalCommunicationScore;
        break;
      case 401:
        val = t401HyperactivityScore;
        break;
      case 402:
        val = t402AggressionScore;
        break;
      case 403:
        val = t403DepressionScore;
        break;
      case 404:
        val = t404AttentionProblemsScore;
        break;
      case 405:
        val = t405AtypicalityScore;
        break;
      case 406:
        val = t406WithdrawalScore;
        break;
      case 407:
        val = t407HyperactivityScore;
        break;
      case 408:
        val = t408AggressionScore;
        break;
      case 409:
        val = t409ConductProblemsScore;
        break;
      case 410:
        val = t410AnxietyScore;
        break;
      case 411:
        val = t411DepressionScore;
        break;
      case 412:
        val = t412SomatizationScore;
        break;
      case 413:
        val = t413LearningProblemsScore;
        break;
      case 414:
        val = t414AttentionProblemsScore;
        break;
      case 415:
        val = t415AdaptabilityScore;
        break;
      case 416:
        val = t416SocialSkillsScore;
        break;
      case 417:
        val = t417FunctionalCommunicationScore;
        break;
      case 418:
        val = t418LeadershipScore;
        break;
      case 419:
        val = t419StudySkillsScore;
        break;
      case 420:
        val = t420HyperactivityScore;
        break;
      case 421:
        val = t421AggressionScore;
        break;
      case 422:
        val = t422DepressionScore;
        break;
      case 423:
        val = t423AttentionProblemsScore;
        break;
      case 424:
        val = t424AtypicalityScore;
        break;
      case 425:
        val = t425WithdrawalScore;
        break;
      case 426:
        val = t426HyperactivityScore;
        break;
      case 427:
        val = t427AggressionScore;
        break;
      case 428:
        val = t428AnxietyScore;
        break;
      case 429:
        val = t429DepressionScore;
        break;
      case 430:
        val = t430SomatizationScore;
        break;
      case 431:
        val = t431AdaptabilityScore;
        break;
      case 432:
        val = t432SocialSkillsScore;
        break;
      case 433:
        val = t433FunctionalCommunicationScore;
        break;
      case 434:
        val = t434ActivitiesOfDailyLivingScore;
        break;
      case 435:
        val = t435HyperactivityScore;
        break;
      case 436:
        val = t436AggressionScore;
        break;
      case 437:
        val = t437DepressionScore;
        break;
      case 438:
        val = t438AttentionProblemsScore;
        break;
      case 439:
        val = t439AtypicalityScore;
        break;
      case 440:
        val = t440WithdrawalScore;
        break;
      case 441:
        val = t441HyperactivityScore;
        break;
      case 442:
        val = t442AggressionScore;
        break;
      case 443:
        val = t443ConductProblemsScore;
        break;
      case 444:
        val = t444AnxietyScore;
        break;
      case 445:
        val = t445DepressionScore;
        break;
      case 446:
        val = t446SomatizationScore;
        break;
      case 447:
        val = t447AdaptabilityScore;
        break;
      case 448:
        val = t448SocialSkillsScore;
        break;
      case 449:
        val = t449FunctionalCommunicationScore;
        break;
      case 450:
        val = t450ActivitiesOfDailyLivingScore;
        break;
      case 451:
        val = t451HyperactivityScore;
        break;
      case 452:
        val = t452AggressionScore;
        break;
      case 453:
        val = t453DepressionScore;
        break;
      case 454:
        val = t454AttentionProblemsScore;
        break;
      case 455:
        val = t455AtypicalityScore;
        break;
      case 456:
        val = t456WithdrawalScore;
        break;
      case 457:
        val = t457SimilaritiesScore;
        break;
      case 458:
        val = t458VocabularyScore;
        break;
      case 459:
        val = t459InformationScore;
        break;
      case 460:
        val = t460ComprehensionScore;
        break;
      case 461:
        val = t461BlockDesignScore;
        break;
      case 462:
        val = t462MatrixReasoningScore;
        break;
      case 463:
        val = t463VisualPuzzlesScore;
        break;
      case 464:
        val = t464FigureWeightsScore;
        break;
      case 465:
        val = t465PictureCompletionScore;
        break;
      case 466:
        val = t466DigitSpanScore;
        break;
      case 467:
        val = t467ArithmeticScore;
        break;
      case 468:
        val = t468LetterNumberSequencingScore;
        break;
      case 469:
        val = t469CodingScore;
        break;
      case 470:
        val = t470SymbolSearchScore;
        break;
      case 471:
        val = t471CancellationScore;
        break;
      case 472:
        val = t472PoorAchievementAndMemoryScore;
        break;
      case 473:
        val = t473InadequateAbilitiesScore;
        break;
      case 474:
        val = t474LearningProblemsScore;
        break;
      case 475:
        val = t475BrashnessScore;
        break;
      case 476:
        val = t476DistractibilityAndOveractivityScore;
        break;
      case 477:
        val = t477ImpulsivityScore;
        break;
      case 478:
        val = t478AntisocialBehaviorScore;
        break;
      case 479:
        val = t479DyscontrolScore;
        break;
      case 480:
        val = t480NoncomplianceScore;
        break;
      case 481:
        val = t481ParentChildConflictScore;
        break;
      case 482:
        val = t482ParentMaladjustmentScore;
        break;
      case 483:
        val = t483MaritalDiscordScore;
        break;
      case 484:
        val = t484FeelingsOfAlienationScore;
        break;
      case 485:
        val = t485HallucinationsAndDelusionsScore;
        break;
      case 486:
        val = t486PsychosomaticSyndromeScore;
        break;
      case 487:
        val = t487MuscularTensionAndAnxietyScore;
        break;
      case 488:
        val = t488PreoccupationWithDiseaseScore;
        break;
      case 489:
        val = t489FearAndWorryScore;
        break;
      case 490:
        val = t490DepressionScore;
        break;
      case 491:
        val = t491SleepDisturbanceScore;
        break;
      case 492:
        val = t492SocialIntroversionScore;
        break;
      case 493:
        val = t493IsolationScore;
        break;
      case 494:
        val = t494LimitedPeerStatusScore;
        break;
      case 495:
        val = t495ConflictWithPeersScore;
        break;
      case 525:
        val = t525HypochondriasisHsScore;
        break;
      case 526:
        val = t526DepressionDScore;
        break;
      case 527:
        val = t527HysteriaHyScore;
        break;
      case 528:
        val = t528PsychopathicDeviatePdScore;
        break;
      case 529:
        val = t529MasculinityFemininityMfScore;
        break;
      case 530:
        val = t530ParanoiaPaScore;
        break;
      case 531:
        val = t531PsychastheniaPtScore;
        break;
      case 532:
        val = t532SchizophreniaScScore;
        break;
      case 533:
        val = t533HypomaniaMaScore;
        break;
      case 534:
        val = t534SocialIntroversionSiScore;
        break;
      case 535:
        val = t535LieLScore;
        break;
      case 536:
        val = t536FScore;
        break;
      case 537:
        val = t537BackFFbScore;
        break;
      case 538:
        val = t538KScore;
        break;
      case 539:
        val = t539HypochondriasisHsScore;
        break;
      case 540:
        val = t540DepressionDScore;
        break;
      case 541:
        val = t541HysteriaHyScore;
        break;
      case 542:
        val = t542PsychopathicDeviatePdScore;
        break;
      case 543:
        val = t543MasculinityFemininityMfScore;
        break;
      case 544:
        val = t544ParanoiaPaScore;
        break;
      case 545:
        val = t545PsychastheniaPtScore;
        break;
      case 546:
        val = t546SchizophreniaScScore;
        break;
      case 547:
        val = t547HypomaniaMaScore;
        break;
      case 548:
        val = t548SocialIntroversionSiScore;
        break;
      case 549:
        val = t549CnsScore;
        break;
      case 550:
        val = t550VrinScore;
        break;
      case 551:
        val = t551TrinScore;
        break;
      case 552:
        val = t552FScore;
        break;
      case 553:
        val = t553F1Score;
        break;
      case 554:
        val = t554F2Score;
        break;
      case 555:
        val = t555LScore;
        break;
      case 556:
        val = t556KScore;
        break;
      case 557:
        val = t557AnimalSortingAsScore;
        break;
      case 558:
        val = t558AuditoryAttentionAaAndResponseSetRsScore;
        break;
      case 559:
        val = t559ClocksClScore;
        break;
      case 560:
        val = t560DesignFluencyDfScore;
        break;
      case 561:
        val = t561InhibitionInScore;
        break;
      case 562:
        val = t562StatueStScore;
        break;
      case 563:
        val = t563BodyPartNamingBpnAndIdentificationBpiScore;
        break;
      case 564:
        val = t564ComprehensionOfInstructionsCiScore;
        break;
      case 565:
        val = t565OromotorSequencesOsScore;
        break;
      case 566:
        val = t566PhonologicalProcessingPhScore;
        break;
      case 567:
        val = t567RepetitionNonsenseWordsRnScore;
        break;
      case 568:
        val = t568SpeededNamingSnScore;
        break;
      case 569:
        val = t569WordGenerationWgScore;
        break;
      case 571:
        val = t571ListMemoryLmListMemoryDelayedLmdScore;
        break;
      case 572:
        val = t572MemoryForDesignsMdMemoryForDesignsDelayedMddScore;
        break;
      case 573:
        val = t573MemoryForFacesMfMemoryForFacesDelayedMfdScore;
        break;
      case 574:
        val = t574MemoryForNamesMnMemoryForNamesDelayedMndScore;
        break;
      case 575:
        val = t575NarrativeMemoryNmScore;
        break;
      case 576:
        val = t576SentenceRepetitionSrScore;
        break;
      case 577:
        val = t577WordListInterferenceWiScore;
        break;
      case 578:
        val = t578FingertipTappingFtScore;
        break;
      case 579:
        val = t579ImitatingHandPositionsIhScore;
        break;
      case 580:
        val = t580ManualMotorSequencesMmScore;
        break;
      case 581:
        val = t581VisuomotorPrecisionVpScore;
        break;
      case 582:
        val = t582AffectRecognitionArScore;
        break;
      case 583:
        val = t583TheoryOfMindTmScore;
        break;
      case 584:
        val = t584ArrowsAwScore;
        break;
      case 585:
        val = t585BlockConstructionBcScore;
        break;
      case 586:
        val = t586DesignCopyingDcScore;
        break;
      case 587:
        val = t587GeometricPuzzlesGpScore;
        break;
      case 588:
        val = t588PicturePuzzlesPpScore;
        break;
      case 589:
        val = t589RouteFindingRfScore;
        break;
      case 593:
        val = t593VocabularyScore;
        break;
      case 594:
        val = t594GeneralInformationScore;
        break;
      case 595:
        val = t595NumberSeriesScore;
        break;
      case 596:
        val = t596ConceptFormationScore;
        break;
      case 597:
        val = t597AnalysisSynthesisScore;
        break;
      case 598:
        val = t598VerbalAttentionScore;
        break;
      case 599:
        val = t599NumbersReversedScore;
        break;
      case 600:
        val = t600ObjectNumberSequencingScore;
        break;
      case 601:
        val = t601PairCancellationScore;
        break;
      case 645:
        val = t645LetterPatternMatchingScore;
        break;
      case 602:
        val = t602PhonologicalProcessingScore;
        break;
      case 603:
        val = t603NonWordRepetitionScore;
        break;
      case 604:
        val = t604RecallScore;
        break;
      case 605:
        val = t605VisualAuditoryLearningScore;
        break;
      case 606:
        val = t606VisualizationScore;
        break;
      case 607:
        val = t607PictureRecognitionScore;
        break;
      case 608:
        val = t608UnderresponseUndScore;
        break;
      case 609:
        val = t609HyperresponseHypScore;
        break;
      case 610:
        val = t610AnxietyAnxScore;
        break;
      case 611:
        val = t611DepressionDepScore;
        break;
      case 612:
        val = t612AngerAngScore;
        break;
      case 613:
        val = t613PosttraumaticStressPtsScore;
        break;
      case 614:
        val = t614DissociationDisScore;
        break;
      case 615:
        val = t615SexualConcernsScScore;
        break;
      case 616:
        val = t616LetterWordIdentificationScore;
        break;
      case 617:
        val = t617WordAttackScore;
        break;
      case 618:
        val = t618PassageComprehensionScore;
        break;
      case 619:
        val = t619ReadingRecallScore;
        break;
      case 620:
        val = t620ReadingVocabularyScore;
        break;
      case 621:
        val = t621CalculationScore;
        break;
      case 622:
        val = t622MathFactFluencyScore;
        break;
      case 623:
        val = t623AppliedProblemsScore;
        break;
      case 624:
        val = t624NumberMatricesScore;
        break;
      case 625:
        val = t625WritingSamplesScore;
        break;
      case 626:
        val = t626SentenceWritingFluencyScore;
        break;
      case 627:
        val = t627OralReadingScore;
        break;
      case 628:
        val = t628SentenceReadingFluencyScore;
        break;
      case 629:
        val = t629SpellingScore;
        break;
      case 630:
        val = t630SoundAwarenessScore;
        break;
      case 631:
        val = t631EditingScore;
        break;
      case 632:
        val = t632ScienceScore;
        break;
      case 633:
        val = t633SocialStudiesScore;
        break;
      case 634:
        val = t634HumanitiesScore;
        break;
      case 635:
        val = t635WordAttackScore;
        break;
      case 636:
        val = t636SpellingOfSoundsScore;
        break;
      case 648:
        val = t648VocabularyScore;
        break;
      case 649:
        val = t649InformationScore;
        break;
      case 650:
        val = t650ComprehensionScore;
        break;
      case 651:
        val = t651MatrixReasoningScore;
        break;
      case 652:
        val = t652PictureConceptsScore;
        break;
      case 653:
        val = t653BlockDesignScore;
        break;
      case 654:
        val = t654ObjectAssemblyScore;
        break;
      case 655:
        val = t655PictureMemoryScore;
        break;
      case 656:
        val = t656ZooLocationsScore;
        break;
      case 657:
        val = t657BugSearchScore;
        break;
      case 658:
        val = t658CancellationScore;
        break;
      case 659:
        val = t659AnimalCodingScore;
        break;
      case 669:
        val = t669BeeryMotorIntegrationVmiScore;
        break;
      case 670:
        val = t670BeeryVisualPerceptionScore;
        break;
      case 671:
        val = t671BeeryMotorCoordinationScore;
        break;
      case 672:
        val = t672ListeningComprehensionGradesPk12Score;
        break;
      case 673:
        val = t673OralExpressionGradesPk12Score;
        break;
      case 674:
        val = t674EarlyReadingSkillsGradesPk3Score;
        break;
      case 675:
        val = t675ReadingComprehensionGrades112Score;
        break;
      case 676:
        val = t676WordReadingGrades112Score;
        break;
      case 677:
        val = t677PseudowordDecodingGrades112Score;
        break;
      case 678:
        val = t678OralReadingFluencyGrades112Score;
        break;
      case 679:
        val = t679SpellingGradesK12Score;
        break;
      case 680:
        val = t680AlphabetWritingFluencyGradesPk3Score;
        break;
      case 681:
        val = t681SentenceCompositionGrades112Score;
        break;
      case 682:
        val = t682EssayCompositionGrades312Score;
        break;
      case 683:
        val = t683NumericalOperationsGradesK12Score;
        break;
      case 684:
        val = t684MathProblemSolvingGradesPk12Score;
        break;
      case 685:
        val = t685MathFluencyAdditionScore;
        break;
      case 686:
        val = t686MathFluencySubtractionScore;
        break;
      case 687:
        val = t687MathFluencyMultiplicationScore;
        break;
      case 688:
        val = t688VocabularyScore;
        break;
      case 689:
        val = t689ComprehensionScore;
        break;
      case 690:
        val = t690ReadingRateScore;
        break;
      case 733:
        val = t733RateScore;
        break;
      case 734:
        val = t734AccuracyScore;
        break;
      case 735:
        val = t735FluencyScore;
        break;
      case 736:
        val = t736ComprehensionScore;
        break;
      case 737:
        val = t737Trail1Score;
        break;
      case 738:
        val = t738Trial2Score;
        break;
      case 739:
        val = t739RetentionTrialScore;
        break;
      case 743:
        val = t743VerbalComprehensionScore;
        break;
      case 744:
        val = t744PictureSimilaritiesScore;
        break;
      case 745:
        val = t745NamingVocabularyScore;
        break;
      case 746:
        val = t746PatternConstructionScore;
        break;
      case 747:
        val = t747MatricesScore;
        break;
      case 748:
        val = t748CopyingScore;
        break;
      case 749:
        val = t749RecallOfObjectsImmediateScore;
        break;
      case 750:
        val = t750RecallOfObjectsDelayedScore;
        break;
      case 751:
        val = t751RecallOfDigitsForwardScore;
        break;
      case 752:
        val = t752RecognitionOfPicturesScore;
        break;
      case 753:
        val = t753EarlyNumberConceptsScore;
        break;
      case 754:
        val = t754MatchingLetterLikeFormsScore;
        break;
      case 755:
        val = t755RecallOfSequentialOrderScore;
        break;
      case 756:
        val = t756SpeedOfInformationProcessingScore;
        break;
      case 757:
        val = t757RecallOfDigitsBackwardScore;
        break;
      case 758:
        val = t758PhonologicalProcessingScore;
        break;
      case 759:
        val = t759RapidNamingScore;
        break;
      case 760:
        val = t760RecallOfDesignsScore;
        break;
      case 761:
        val = t761WordDefinitionsScore;
        break;
      case 762:
        val = t762PatternConstructionScore;
        break;
      case 763:
        val = t763MatricesScore;
        break;
      case 764:
        val = t764VerbalSimilaritiesScore;
        break;
      case 765:
        val = t765SequentialAndQuantitativeReasoningScore;
        break;
      case 766:
        val = t766RecallOfObjectsImmediateScore;
        break;
      case 767:
        val = t767RecallOfObjectsDelayedScore;
        break;
      case 768:
        val = t768RecallOfDigitsForwardScore;
        break;
      case 769:
        val = t769RecognitionOfPicturesScore;
        break;
      case 770:
        val = t770RecallOfSequentialOrderScore;
        break;
      case 771:
        val = t771SpeedOfInformationProcessingScore;
        break;
      case 772:
        val = t772RecallOfDigitsBackwardScore;
        break;
      case 773:
        val = t773PhonologicalProcessingScore;
        break;
      default:
        val = "";
    }
    return val;
  };

  const appendixSubtestRankVal = id => {
    let val;
    switch (id) {
      case 1:
        val = t1AppendixWiscVSimilaritiesRank;
        break;
      case 2:
        val = t2AppendixWiscVVocabularyRank;
        break;
      case 3:
        val = t3AppendixWiscVInformationRank;
        break;
      case 4:
        val = t4AppendixWiscVComprehensionRank;
        break;
      case 5:
        val = t5AppendixWiscVBlockDesignRank;
        break;
      case 6:
        val = t6AppendixWiscVVocabularyRank;
        break;
      case 7:
        val = t7AppendixWiscVMatrixReasoningRank;
        break;
      case 8:
        val = t8AppendixWiscVFigureWeightsRank;
        break;
      case 9:
        val = t9AppendixWiscVPictureConceptsRank;
        break;
      case 10:
        val = t10AppendixWiscVArithmeticRank;
        break;
      case 11:
        val = t11AppendixWiscVDigitSpanRank;
        break;
      case 12:
        val = t12AppendixWiscVPictureSpanRank;
        break;
      case 13:
        val = t13AppendixWiscVLetterNumberSequencingRank;
        break;
      case 14:
        val = t14AppendixWiscVCodingRank;
        break;
      case 15:
        val = t15AppendixWiscVSymbolSearchRank;
        break;
      case 16:
        val = t16AppendixWiscVCancellationRank;
        break;
      case 46:
        val = t46AppendixQikCptAccuracyIndexRank;
        break;
      case 47:
        val = t47AppendixQikCptSustainedAttentionRank;
        break;
      case 48:
        val = t48AppendixQikCptImpulseControlRank;
        break;
      case 49:
        val = t49AppendixQikCptPerformanceIndexRank;
        break;
      case 50:
        val = t50AppendixQikCptSpeedOfResponseRank;
        break;
      case 51:
        val = t51AppendixQikCptConsistencyOfResponseRank;
        break;
      case 73:
        val = t73AppendixWiscVNamingSpeedLiteracyRank;
        break;
      case 74:
        val = t74AppendixWiscVNamingSpeedQualityRank;
        break;
      case 75:
        val = t75AppendixWiscVImmediateSymbolTranslationRank;
        break;
      case 76:
        val = t76AppendixWiscVDelayedSymbolTranslationRank;
        break;
      case 77:
        val = t77AppendixWiscVRecognitionSymbolTranslationRank;
        break;
      case 78:
        val = t78AppendixBriefInconsistencyScaleRank;
        break;
      case 79:
        val = t79AppendixBriefNegativityScaleRank;
        break;
      case 82:
        val = t82AppendixBriefInhibitRank;
        break;
      case 83:
        val = t83AppendixBriefShiftRank;
        break;
      case 84:
        val = t84AppendixBriefEmotionalControlRank;
        break;
      case 85:
        val = t85AppendixBriefInitiateRank;
        break;
      case 86:
        val = t86AppendixBriefWorkingMemoryRank;
        break;
      case 87:
        val = t87AppendixBriefPlanOrganizeRank;
        break;
      case 88:
        val = t88AppendixBriefOrganizationOfMaterialsRank;
        break;
      case 89:
        val = t89AppendixBriefMonitorRank;
        break;
      case 90:
        val = t90AppendixBriefInhibitRank;
        break;
      case 91:
        val = t91AppendixBriefShiftRank;
        break;
      case 92:
        val = t92AppendixBriefEmotionalControlRank;
        break;
      case 93:
        val = t93AppendixBriefInitiateRank;
        break;
      case 94:
        val = t94AppendixBriefWorkingMemoryRank;
        break;
      case 95:
        val = t95AppendixBriefPlanOrganizeRank;
        break;
      case 96:
        val = t96AppendixBriefOrganizationOfMaterialsRank;
        break;
      case 97:
        val = t97AppendixBriefMonitorRank;
        break;
      case 106:
        val = t106WaisivVerbalComprehensionCompositePercentile;
        break;
      case 107:
        val = t107WaisivPerceptualReasoningCompositePercentile;
        break;
      case 108:
        val = t108WaisivWorkingMemoryCompositePercentile;
        break;
      case 109:
        val = t109WaisivProcessingSpeedCompositePercentile;
        break;
      case 120:
        val = t120AppendixConners3InattentionRank;
        break;
      case 121:
        val = t121AppendixConners3HyperactivityImpulsivityRank;
        break;
      case 122:
        val = t122AppendixConners3LearningProblemsRank;
        break;
      case 123:
        val = t123AppendixConners3ExecutiveFunctioningRank;
        break;
      case 124:
        val = t124AppendixConners3DefianceAggressionRank;
        break;
      case 125:
        val = t125AppendixConners3PeerRelationsRank;
        break;
      case 126:
        val = t126AppendixConners3AdhdInattentiveRank;
        break;
      case 127:
        val = t127AppendixConners3AdhdHyperactiveImpulsiveRank;
        break;
      case 128:
        val = t128AppendixConners3ConductDisorderRank;
        break;
      case 129:
        val = t129AppendixConners3OppositionalDefiantDisorderRank;
        break;
      case 130:
        val = t130AppendixConners3Conners3AdhdIndexRank;
        break;
      case 131:
        val = t131AppendixConners3Conners3GlobalIndexRank;
        break;
      case 132:
        val = t132AppendixConners3AnxietyRank;
        break;
      case 133:
        val = t133AppendixConners3DepressionRank;
        break;
      case 134:
        val = t134AppendixConners3SevereConductRank;
        break;
      case 135:
        val = t135AppendixConners3PositiveImpressionRank;
        break;
      case 136:
        val = t136AppendixConners3NegativeImpressionRank;
        break;
      case 137:
        val = t137AppendixConners3InconsistencyIndexRank;
        break;
      case 138:
        val = t138AppendixConners3InattentionRank;
        break;
      case 139:
        val = t139AppendixConners3HyperactivityImpulsivityRank;
        break;
      case 141:
        val = t141AppendixConners3LearningProblemsRank;
        break;
      case 142:
        val = t142AppendixConners3ExecutiveFunctioningRank;
        break;
      case 143:
        val = t143AppendixConners3DefianceAggressionRank;
        break;
      case 144:
        val = t144AppendixConners3PeerRelationsRank;
        break;
      case 145:
        val = t145AppendixConners3AdhdInattentiveRank;
        break;
      case 146:
        val = t146AppendixConners3AdhdHyperactiveImpulsiveRank;
        break;
      case 147:
        val = t147AppendixConners3ConductDisorderRank;
        break;
      case 148:
        val = t148AppendixConners3OppositionalDefiantDisorderRank;
        break;
      case 149:
        val = t149AppendixConners3Conners3AdhdIndexRank;
        break;
      case 150:
        val = t150AppendixConners3Conners3GlobalIndexRank;
        break;
      case 151:
        val = t151AppendixConners3AnxietyRank;
        break;
      case 152:
        val = t152AppendixConners3DepressionRank;
        break;
      case 153:
        val = t153AppendixConners3SevereConductRank;
        break;
      case 154:
        val = t154AppendixConners3PositiveImpressionRank;
        break;
      case 155:
        val = t155AppendixConners3NegativeImpressionRank;
        break;
      case 156:
        val = t156AppendixConners3InconsistencyIndexRank;
        break;
      case 157:
        val = t157AppendixConners3InattentionRank;
        break;
      case 158:
        val = t158AppendixConners3HyperactivityImpulsivityRank;
        break;
      case 159:
        val = t159AppendixConners3LearningProblemsRank;
        break;
      case 160:
        val = t160AppendixConners3DefianceAggressionRank;
        break;
      case 161:
        val = t161AppendixConners3FamilyRelationsRank;
        break;
      case 162:
        val = t162AppendixConners3AdhdInattentiveRank;
        break;
      case 163:
        val = t163AppendixConners3AdhdHyperactiveImpulsiveRank;
        break;
      case 164:
        val = t164AppendixConners3ConductDisorderRank;
        break;
      case 165:
        val = t165AppendixConners3OppositionalDefiantDisorderRank;
        break;
      case 166:
        val = t166AppendixConners3Conners3AdhdIndexRank;
        break;
      case 172:
        val = t172AppendixCtoni2PictorialAnalogiesRank;
        break;
      case 173:
        val = t173AppendixCtoni2GeometricAnalogiesRank;
        break;
      case 174:
        val = t174AppendixCtoni2PictorialCategoriesRank;
        break;
      case 175:
        val = t175AppendixCtoni2GeometricCategoriesRank;
        break;
      case 176:
        val = t176AppendixCtoni2PictorialSequencesRank;
        break;
      case 177:
        val = t177AppendixCtoni2GeometricSequencesRank;
        break;
      case 178:
        val = t178AppendixCtoni2PictorialScaleRank;
        break;
      case 179:
        val = t179AppendixCtoni2GeometricScaleRank;
        break;
      case 180:
        val = t180AppendixCtoni2FullScaleRank;
        break;
      case 644:
        val = t644AppendixConners3AnxietyRank;
        break;
      case 167:
        val = t167AppendixConners3DepressionRank;
        break;
      case 168:
        val = t168AppendixConners3SevereConductRank;
        break;
      case 169:
        val = t169AppendixConners3PositiveImpressionRank;
        break;
      case 170:
        val = t170AppendixConners3NegativeImpressionRank;
        break;
      case 171:
        val = t171AppendixConners3InconsistencyIndexRank;
        break;
      case 221:
        val = t221AppendixRbansListLearningRank;
        break;
      case 222:
        val = t222AppendixRbansStoryMemoryRank;
        break;
      case 223:
        val = t223AppendixRbansFigureCopyRank;
        break;
      case 224:
        val = t224AppendixRbansLineOrientationRank;
        break;
      case 225:
        val = t225AppendixRbansPictureNamingRank;
        break;
      case 226:
        val = t226AppendixRbansSemanticFluencyRank;
        break;
      case 227:
        val = t227AppendixRbansDigitSpanRank;
        break;
      case 228:
        val = t228AppendixRbansCodingRank;
        break;
      case 229:
        val = t229AppendixRbansListRecallRank;
        break;
      case 230:
        val = t230AppendixRbansListRecognitionRank;
        break;
      case 231:
        val = t231AppendixRbansStoryRecallRank;
        break;
      case 232:
        val = t232AppendixRbansFigureRecallRank;
        break;
      case 233:
        val = t233AppendixVinelandIiReceptiveRank;
        break;
      case 234:
        val = t234AppendixVinelandIiExpressiveRank;
        break;
      case 235:
        val = t235AppendixVinelandIiWrittenRank;
        break;
      case 236:
        val = t236AppendixVinelandIiPersonalRank;
        break;
      case 237:
        val = t237AppendixVinelandIiDomesticRank;
        break;
      case 238:
        val = t238AppendixVinelandIiCommunityRank;
        break;
      case 239:
        val = t239AppendixVinelandIiInterpersonalRelationshipsRank;
        break;
      case 240:
        val = t240AppendixVinelandIiPlayAndLeisureTimeRank;
        break;
      case 241:
        val = t241AppendixVinelandIiCopingSkillsRank;
        break;
      case 242:
        val = t242AppendixVinelandIiGrossRank;
        break;
      case 243:
        val = t243AppendixVinelandIiFineRank;
        break;
      case 244:
        val = t244AppendixVinelandIiMaladaptiveBehaviorIndexRank;
        break;
      case 245:
        val = t245AppendixVinelandIiMaladaptiveBehaviorCriticalItemsRank;
        break;
      case 246:
        val = t246AppendixWasiIiSimilaritiesRank;
        break;
      case 247:
        val = t247AppendixWasiIiVocabularyRank;
        break;
      case 248:
        val = t248AppendixWasiIiBlockDesignRank;
        break;
      case 249:
        val = t249AppendixWasiIiMatrixReasoningRank;
        break;
      case 266:
        val = t266AppendixWraml2StoryMemoryRank;
        break;
      case 267:
        val = t267AppendixWraml2VerbalLearningRank;
        break;
      case 268:
        val = t268AppendixWraml2DesignMemoryRank;
        break;
      case 269:
        val = t269AppendixWraml2PictureMemoryRank;
        break;
      case 270:
        val = t270AppendixWraml2FingerWindowsRank;
        break;
      case 271:
        val = t271AppendixWraml2NumberLetterRank;
        break;
      case 272:
        val = t272AppendixWraml2SentenceMemoryRank;
        break;
      case 273:
        val = t273AppendixWraml2SoundSymbolRank;
        break;
      case 274:
        val = t274AppendixWraml2VerbalWorkingMemoryRank;
        break;
      case 275:
        val = t275AppendixWraml2SymbolicWorkingMemoryRank;
        break;
      case 276:
        val = t276AppendixWraml2StoryMemoryDelayRecallRank;
        break;
      case 277:
        val = t277AppendixWraml2VerbalLearningDelayRecallRank;
        break;
      case 278:
        val = t278AppendixWraml2SoundSymbolDelayRecallRank;
        break;
      case 279:
        val = t279AppendixWraml2StoryMemoryRecognitionRank;
        break;
      case 280:
        val = t280AppendixWraml2VerbalLearningRecognitionRank;
        break;
      case 281:
        val = t281AppendixWraml2DesignMemoryRecognitionRank;
        break;
      case 282:
        val = t282AppendixWraml2PictureMemoryRecognitionRank;
        break;
      case 283:
        val = t283AppendixBasc3FIndexRank;
        break;
      case 284:
        val = t284AppendixBasc3LIndexRank;
        break;
      case 285:
        val = t285AppendixBasc3VIndexRank;
        break;
      case 286:
        val = t286AppendixBasc3AlcoholAbuseRank;
        break;
      case 287:
        val = t287AppendixBasc3AnxietyRank;
        break;
      case 288:
        val = t288AppendixBasc3AttentionProblemsRank;
        break;
      case 289:
        val = t289AppendixBasc3AttitudeToSchoolRank;
        break;
      case 290:
        val = t290AppendixBasc3AttitudeToTeachersRank;
        break;
      case 291:
        val = t291AppendixBasc3AtypicalityRank;
        break;
      case 292:
        val = t292AppendixBasc3DepressionRank;
        break;
      case 293:
        val = t293AppendixBasc3HyperactivityRank;
        break;
      case 294:
        val = t294AppendixBasc3LocusOfControlRank;
        break;
      case 295:
        val = t295AppendixBasc3SchoolMaladjustmentRank;
        break;
      case 296:
        val = t296AppendixBasc3SensationSeekingRank;
        break;
      case 297:
        val = t297AppendixBasc3SenseOfInadequacyRank;
        break;
      case 298:
        val = t298AppendixBasc3SocialStressRank;
        break;
      case 299:
        val = t299AppendixBasc3SomatizationRank;
        break;
      case 300:
        val = t300AppendixBasc3InterpersonalRelationsRank;
        break;
      case 301:
        val = t301AppendixBasc3RelationsWithParentsRank;
        break;
      case 302:
        val = t302AppendixBasc3SelfEsteemRank;
        break;
      case 303:
        val = t303AppendixBasc3SelfRelianceRank;
        break;
      case 304:
        val = t304AppendixBasc3AngerControlRank;
        break;
      case 305:
        val = t305AppendixBasc3EgoStrengthRank;
        break;
      case 306:
        val = t306AppendixBasc3ManiaRank;
        break;
      case 307:
        val = t307AppendixBasc3TestAnxietyRank;
        break;
      case 308:
        val = t308AppendixBasc3AttitudeToSchoolRank;
        break;
      case 309:
        val = t309AppendixBasc3AttitudeToTeachersRank;
        break;
      case 310:
        val = t310AppendixBasc3AtypicalityRank;
        break;
      case 311:
        val = t311AppendixBasc3LocusOfControlRank;
        break;
      case 312:
        val = t312AppendixBasc3SocialStressRank;
        break;
      case 313:
        val = t313AppendixBasc3AnxietyRank;
        break;
      case 314:
        val = t314AppendixBasc3DepressionRank;
        break;
      case 315:
        val = t315AppendixBasc3SenseOfInadequacyRank;
        break;
      case 316:
        val = t316AppendixBasc3AttentionProblemsRank;
        break;
      case 317:
        val = t317AppendixBasc3HyperactivityRank;
        break;
      case 662:
        val = t662AppendixBasc3SocialStressRank;
        break;
      case 664:
        val = t664AppendixBasc3AnxietyRank;
        break;
      case 665:
        val = t665AppendixBasc3DepressionRank;
        break;
      case 666:
        val = t666AppendixBasc3SenseOfInadequacyRank;
        break;
      case 667:
        val = t667AppendixBasc3SelfEsteemRank;
        break;
      case 668:
        val = t668AppendixBasc3SelfRelianceRank;
        break;
      case 324:
        val = t324AppendixBasc3InterpersonalRelationsRank;
        break;
      case 325:
        val = t325AppendixBasc3RelationsWithParentsRank;
        break;
      case 326:
        val = t326AppendixBasc3SelfEsteemRank;
        break;
      case 327:
        val = t327AppendixBasc3SelfRelianceRank;
        break;
      case 328:
        val = t328AppendixBasc3AttitudeToSchoolRank;
        break;
      case 329:
        val = t329AppendixBasc3AttitudeToTeachersRank;
        break;
      case 330:
        val = t330AppendixBasc3SensationSeekingRank;
        break;
      case 331:
        val = t331AppendixBasc3AtypicalityRank;
        break;
      case 332:
        val = t332AppendixBasc3LocusOfControlRank;
        break;
      case 333:
        val = t333AppendixBasc3SocialStressRank;
        break;
      case 334:
        val = t334AppendixBasc3AnxietyRank;
        break;
      case 335:
        val = t335AppendixBasc3DepressionRank;
        break;
      case 336:
        val = t336AppendixBasc3SenseOfInadequacyRank;
        break;
      case 337:
        val = t337AppendixBasc3SomatizationRank;
        break;
      case 338:
        val = t338AppendixBasc3AttentionProblemsRank;
        break;
      case 339:
        val = t339AppendixBasc3HyperactivityRank;
        break;
      case 340:
        val = t340AppendixBasc3SocialStressRank;
        break;
      case 341:
        val = t341AppendixBasc3AnxietyRank;
        break;
      case 342:
        val = t342AppendixBasc3DepressionRank;
        break;
      case 343:
        val = t343AppendixBasc3SenseOfInadequacyRank;
        break;
      case 344:
        val = t344AppendixBasc3SelfEsteemRank;
        break;
      case 345:
        val = t345AppendixBasc3SelfRelianceRank;
        break;
      case 346:
        val = t346AppendixBasc3InterpersonalRelationsRank;
        break;
      case 347:
        val = t347AppendixBasc3RelationsWithParentsRank;
        break;
      case 348:
        val = t348AppendixBasc3SelfEsteemRank;
        break;
      case 349:
        val = t349AppendixBasc3SelfRelianceRank;
        break;
      case 350:
        val = t350AppendixBasc3AtypicalityRank;
        break;
      case 351:
        val = t351AppendixBasc3LocusOfControlRank;
        break;
      case 352:
        val = t352AppendixBasc3SocialStressRank;
        break;
      case 353:
        val = t353AppendixBasc3AnxietyRank;
        break;
      case 354:
        val = t354AppendixBasc3DepressionRank;
        break;
      case 355:
        val = t355AppendixBasc3SenseOfInadequacyRank;
        break;
      case 356:
        val = t356AppendixBasc3SomatizationRank;
        break;
      case 357:
        val = t357AppendixBasc3AttentionProblemsRank;
        break;
      case 358:
        val = t358AppendixBasc3HyperactivityRank;
        break;
      case 359:
        val = t359AppendixBasc3SocialStressRank;
        break;
      case 360:
        val = t360AppendixBasc3AnxietyRank;
        break;
      case 361:
        val = t361AppendixBasc3DepressionRank;
        break;
      case 362:
        val = t362AppendixBasc3SenseOfInadequacyRank;
        break;
      case 363:
        val = t363AppendixBasc3SelfEsteemRank;
        break;
      case 364:
        val = t364AppendixBasc3SelfRelianceRank;
        break;
      case 365:
        val = t365AppendixBasc3InterpersonalRelationsRank;
        break;
      case 366:
        val = t366AppendixBasc3RelationsWithParentsRank;
        break;
      case 367:
        val = t367AppendixBasc3SelfEsteemRank;
        break;
      case 368:
        val = t368AppendixBasc3SelfRelianceRank;
        break;
      case 369:
        val = t369AppendixBasc3FIndexRank;
        break;
      case 370:
        val = t370AppendixBasc3AggressionRank;
        break;
      case 371:
        val = t371AppendixBasc3AnxietyRank;
        break;
      case 372:
        val = t372AppendixBasc3AttentionProblemsRank;
        break;
      case 373:
        val = t373AppendixBasc3AtypicalityRank;
        break;
      case 374:
        val = t374AppendixBasc3ConductProblemsRank;
        break;
      case 375:
        val = t375AppendixBasc3DepressionRank;
        break;
      case 376:
        val = t376AppendixBasc3HyperactivityRank;
        break;
      case 377:
        val = t377AppendixBasc3LearningProblemsRank;
        break;
      case 378:
        val = t378AppendixBasc3SomatizationRank;
        break;
      case 379:
        val = t379AppendixBasc3WithdrawalRank;
        break;
      case 380:
        val = t380AppendixBasc3ActivitiesOfDailyLivingRank;
        break;
      case 381:
        val = t381AppendixBasc3AdaptabilityRank;
        break;
      case 382:
        val = t382AppendixBasc3FunctionalCommunicationRank;
        break;
      case 383:
        val = t383AppendixBasc3LeadershipRank;
        break;
      case 384:
        val = t384AppendixBasc3SocialSkillsRank;
        break;
      case 385:
        val = t385AppendixBasc3StudySkillsRank;
        break;
      case 386:
        val = t386AppendixBasc3AngerControlRank;
        break;
      case 387:
        val = t387AppendixBasc3BullyingRank;
        break;
      case 388:
        val = t388AppendixBasc3DevelopmentalSocialDisordersRank;
        break;
      case 389:
        val = t389AppendixBasc3EmotionalSelfControlRank;
        break;
      case 390:
        val = t390AppendixBasc3ExecutiveFunctioningRank;
        break;
      case 391:
        val = t391AppendixBasc3NegativeEmotionalityRank;
        break;
      case 392:
        val = t392AppendixBasc3ResiliencyRank;
        break;
      case 393:
        val = t393AppendixBasc3HyperactivityRank;
        break;
      case 394:
        val = t394AppendixBasc3AggressionRank;
        break;
      case 395:
        val = t395AppendixBasc3AnxietyRank;
        break;
      case 396:
        val = t396AppendixBasc3DepressionRank;
        break;
      case 397:
        val = t397AppendixBasc3SomatizationRank;
        break;
      case 398:
        val = t398AppendixBasc3AdaptabilityRank;
        break;
      case 399:
        val = t399AppendixBasc3SocialSkillsRank;
        break;
      case 400:
        val = t400AppendixBasc3FunctionalCommunicationRank;
        break;
      case 401:
        val = t401AppendixBasc3HyperactivityRank;
        break;
      case 402:
        val = t402AppendixBasc3AggressionRank;
        break;
      case 403:
        val = t403AppendixBasc3DepressionRank;
        break;
      case 404:
        val = t404AppendixBasc3AttentionProblemsRank;
        break;
      case 405:
        val = t405AppendixBasc3AtypicalityRank;
        break;
      case 406:
        val = t406AppendixBasc3WithdrawalRank;
        break;
      case 407:
        val = t407AppendixBasc3HyperactivityRank;
        break;
      case 408:
        val = t408AppendixBasc3AggressionRank;
        break;
      case 409:
        val = t409AppendixBasc3ConductProblemsRank;
        break;
      case 410:
        val = t410AppendixBasc3AnxietyRank;
        break;
      case 411:
        val = t411AppendixBasc3DepressionRank;
        break;
      case 412:
        val = t412AppendixBasc3SomatizationRank;
        break;
      case 413:
        val = t413AppendixBasc3LearningProblemsRank;
        break;
      case 414:
        val = t414AppendixBasc3AttentionProblemsRank;
        break;
      case 415:
        val = t415AppendixBasc3AdaptabilityRank;
        break;
      case 416:
        val = t416AppendixBasc3SocialSkillsRank;
        break;
      case 417:
        val = t417AppendixBasc3FunctionalCommunicationRank;
        break;
      case 418:
        val = t418AppendixBasc3LeadershipRank;
        break;
      case 419:
        val = t419AppendixBasc3StudySkillsRank;
        break;
      case 420:
        val = t420AppendixBasc3HyperactivityRank;
        break;
      case 421:
        val = t421AppendixBasc3AggressionRank;
        break;
      case 422:
        val = t422AppendixBasc3DepressionRank;
        break;
      case 423:
        val = t423AppendixBasc3AttentionProblemsRank;
        break;
      case 424:
        val = t424AppendixBasc3AtypicalityRank;
        break;
      case 425:
        val = t425AppendixBasc3WithdrawalRank;
        break;
      case 426:
        val = t426AppendixBasc3HyperactivityRank;
        break;
      case 427:
        val = t427AppendixBasc3AggressionRank;
        break;
      case 428:
        val = t428AppendixBasc3AnxietyRank;
        break;
      case 429:
        val = t429AppendixBasc3DepressionRank;
        break;
      case 430:
        val = t430AppendixBasc3SomatizationRank;
        break;
      case 431:
        val = t431AppendixBasc3AdaptabilityRank;
        break;
      case 432:
        val = t432AppendixBasc3SocialSkillsRank;
        break;
      case 433:
        val = t433AppendixBasc3FunctionalCommunicationRank;
        break;
      case 434:
        val = t434AppendixBasc3ActivitiesOfDailyLivingRank;
        break;
      case 435:
        val = t435AppendixBasc3HyperactivityRank;
        break;
      case 436:
        val = t436AppendixBasc3AggressionRank;
        break;
      case 437:
        val = t437AppendixBasc3DepressionRank;
        break;
      case 438:
        val = t438AppendixBasc3AttentionProblemsRank;
        break;
      case 439:
        val = t439AppendixBasc3AtypicalityRank;
        break;
      case 440:
        val = t440AppendixBasc3WithdrawalRank;
        break;
      case 441:
        val = t441AppendixBasc3HyperactivityRank;
        break;
      case 442:
        val = t442AppendixBasc3AggressionRank;
        break;
      case 443:
        val = t443AppendixBasc3ConductProblemsRank;
        break;
      case 444:
        val = t444AppendixBasc3AnxietyRank;
        break;
      case 445:
        val = t445AppendixBasc3DepressionRank;
        break;
      case 446:
        val = t446AppendixBasc3SomatizationRank;
        break;
      case 447:
        val = t447AppendixBasc3AdaptabilityRank;
        break;
      case 448:
        val = t448AppendixBasc3SocialSkillsRank;
        break;
      case 449:
        val = t449AppendixBasc3FunctionalCommunicationRank;
        break;
      case 450:
        val = t450AppendixBasc3ActivitiesOfDailyLivingRank;
        break;
      case 451:
        val = t451AppendixBasc3HyperactivityRank;
        break;
      case 452:
        val = t452AppendixBasc3AggressionRank;
        break;
      case 453:
        val = t453AppendixBasc3DepressionRank;
        break;
      case 454:
        val = t454AppendixBasc3AttentionProblemsRank;
        break;
      case 455:
        val = t455AppendixBasc3AtypicalityRank;
        break;
      case 456:
        val = t456AppendixBasc3WithdrawalRank;
        break;
      case 457:
        val = t457AppendixWaisIvSimilaritiesRank;
        break;
      case 458:
        val = t458AppendixWaisIvVocabularyRank;
        break;
      case 459:
        val = t459AppendixWaisIvInformationRank;
        break;
      case 460:
        val = t460AppendixWaisIvComprehensionRank;
        break;
      case 461:
        val = t461AppendixWaisIvBlockDesignRank;
        break;
      case 462:
        val = t462AppendixWaisIvMatrixReasoningRank;
        break;
      case 463:
        val = t463AppendixWaisIvVisualPuzzlesRank;
        break;
      case 464:
        val = t464AppendixWaisIvFigureWeightsRank;
        break;
      case 465:
        val = t465AppendixWaisIvPictureCompletionRank;
        break;
      case 466:
        val = t466AppendixWaisIvDigitSpanRank;
        break;
      case 467:
        val = t467AppendixWaisIvArithmeticRank;
        break;
      case 468:
        val = t468AppendixWaisIvLetterNumberSequencingRank;
        break;
      case 469:
        val = t469AppendixWaisIvCodingRank;
        break;
      case 470:
        val = t470AppendixWaisIvSymbolSearchRank;
        break;
      case 471:
        val = t471AppendixWaisIvCancellationRank;
        break;
      case 472:
        val = t472AppendixPiyPoorAchievementAndMemoryRange;
        break;
      case 473:
        val = t473AppendixPiyInadequateAbilitiesRange;
        break;
      case 474:
        val = t474AppendixPiyLearningProblemsRange;
        break;
      case 475:
        val = t475AppendixPiyBrashnessRange;
        break;
      case 476:
        val = t476AppendixPiyDistractibilityAndOveractivityRange;
        break;
      case 477:
        val = t477AppendixPiyImpulsivityRange;
        break;
      case 478:
        val = t478AppendixPiyAntisocialBehaviorRange;
        break;
      case 479:
        val = t479AppendixPiyDyscontrolRange;
        break;
      case 480:
        val = t480AppendixPiyNoncomplianceRange;
        break;
      case 481:
        val = t481AppendixPiyParentChildConflictRange;
        break;
      case 482:
        val = t482AppendixPiyParentMaladjustmentRange;
        break;
      case 483:
        val = t483AppendixPiyMaritalDiscordRange;
        break;
      case 484:
        val = t484AppendixPiyFeelingsOfAlienationRange;
        break;
      case 485:
        val = t485AppendixPiyHallucinationsAndDelusionsRange;
        break;
      case 486:
        val = t486AppendixPiyPsychosomaticSyndromeRange;
        break;
      case 487:
        val = t487AppendixPiyMuscularTensionAndAnxietyRange;
        break;
      case 488:
        val = t488AppendixPiyPreoccupationWithDiseaseRange;
        break;
      case 489:
        val = t489AppendixPiyFearAndWorryRange;
        break;
      case 490:
        val = t490AppendixPiyDepressionRange;
        break;
      case 491:
        val = t491AppendixPiySleepDisturbanceRange;
        break;
      case 492:
        val = t492AppendixPiySocialIntroversionRange;
        break;
      case 493:
        val = t493AppendixPiyIsolationRange;
        break;
      case 494:
        val = t494AppendixPiyLimitedPeerStatusRange;
        break;
      case 495:
        val = t495AppendixPiyConflictWithPeersRange;
        break;
      case 557:
        val = t557AppendixNepsyIiAnimalSortingAsRank;
        break;
      case 558:
        val = t558AppendixNepsyIiAuditoryAttentionAaAndResponseSetRsRank;
        break;
      case 559:
        val = t559AppendixNepsyIiClocksClRank;
        break;
      case 560:
        val = t560AppendixNepsyIiDesignFluencyDfRank;
        break;
      case 561:
        val = t561AppendixNepsyIiInhibitionInRank;
        break;
      case 562:
        val = t562AppendixNepsyIiStatueStRank;
        break;
      case 563:
        val = t563AppendixNepsyIiBodyPartNamingBpnAndIdentificationBpiRank;
        break;
      case 564:
        val = t564AppendixNepsyIiComprehensionOfInstructionsCiRank;
        break;
      case 565:
        val = t565AppendixNepsyIiOromotorSequencesOsRank;
        break;
      case 566:
        val = t566AppendixNepsyIiPhonologicalProcessingPhRank;
        break;
      case 567:
        val = t567AppendixNepsyIiRepetitionNonsenseWordsRnRank;
        break;
      case 568:
        val = t568AppendixNepsyIiSpeededNamingSnRank;
        break;
      case 569:
        val = t569AppendixNepsyIiWordGenerationWgRank;
        break;
      case 571:
        val = t571AppendixNepsyIiListMemoryLmListMemoryDelayedLmdRank;
        break;
      case 572:
        val = t572AppendixNepsyIiMemoryForDesignsMdMemoryForDesignsDelayedMddRank;
        break;
      case 573:
        val = t573AppendixNepsyIiMemoryForFacesMfMemoryForFacesDelayedMfdRank;
        break;
      case 574:
        val = t574AppendixNepsyIiMemoryForNamesMnMemoryForNamesDelayedMndRank;
        break;
      case 575:
        val = t575AppendixNepsyIiNarrativeMemoryNmRank;
        break;
      case 576:
        val = t576AppendixNepsyIiSentenceRepetitionSrRank;
        break;
      case 577:
        val = t577AppendixNepsyIiWordListInterferenceWiRank;
        break;
      case 578:
        val = t578AppendixNepsyIiFingertipTappingFtRank;
        break;
      case 579:
        val = t579AppendixNepsyIiImitatingHandPositionsIhRank;
        break;
      case 580:
        val = t580AppendixNepsyIiManualMotorSequencesMmRank;
        break;
      case 581:
        val = t581AppendixNepsyIiVisuomotorPrecisionVpRank;
        break;
      case 582:
        val = t582AppendixNepsyIiAffectRecognitionArRank;
        break;
      case 583:
        val = t583AppendixNepsyIiTheoryOfMindTmRank;
        break;
      case 584:
        val = t584AppendixNepsyIiArrowsAwRank;
        break;
      case 585:
        val = t585AppendixNepsyIiBlockConstructionBcRank;
        break;
      case 586:
        val = t586AppendixNepsyIiDesignCopyingDcRank;
        break;
      case 587:
        val = t587AppendixNepsyIiGeometricPuzzlesGpRank;
        break;
      case 588:
        val = t588AppendixNepsyIiPicturePuzzlesPpRank;
        break;
      case 589:
        val = t589AppendixNepsyIiRouteFindingRfRank;
        break;
      case 593:
        val = t593AppendixWjIvCogVocabularyRank;
        break;
      case 594:
        val = t594AppendixWjIvCogGeneralInformationRank;
        break;
      case 595:
        val = t595AppendixWjIvCogNumberSeriesRank;
        break;
      case 596:
        val = t596AppendixWjIvCogConceptFormationRank;
        break;
      case 597:
        val = t597AppendixWjIvCogAnalysisSynthesisRank;
        break;
      case 598:
        val = t598AppendixWjIvCogVerbalAttentionRank;
        break;
      case 599:
        val = t599AppendixWjIvCogNumbersReversedRank;
        break;
      case 600:
        val = t600AppendixWjIvCogObjectNumberSequencingRank;
        break;
      case 601:
        val = t601AppendixWjIvCogPairCancellationRank;
        break;
      case 645:
        val = t645AppendixWjIvCogLetterPatternMatchingRank;
        break;
      case 602:
        val = t602AppendixWjIvCogPhonologicalProcessingRank;
        break;
      case 603:
        val = t603AppendixWjIvCogNonWordRepetitionRank;
        break;
      case 604:
        val = t604AppendixWjIvCogRecallRank;
        break;
      case 605:
        val = t605AppendixWjIvCogVisualAuditoryLearningRank;
        break;
      case 606:
        val = t606AppendixWjIvCogVisualizationRank;
        break;
      case 607:
        val = t607AppendixWjIvCogPictureRecognitionRank;
        break;
      case 616:
        val = t616AppendixWjIvAchLetterWordIdentificationRank;
        break;
      case 617:
        val = t617AppendixWjIvAchWordAttackRank;
        break;
      case 618:
        val = t618AppendixWjIvAchPassageComprehensionRank;
        break;
      case 619:
        val = t619AppendixWjIvAchReadingRecallRank;
        break;
      case 620:
        val = t620AppendixWjIvAchReadingVocabularyRank;
        break;
      case 621:
        val = t621AppendixWjIvAchCalculationRank;
        break;
      case 622:
        val = t622AppendixWjIvAchMathFactFluencyRank;
        break;
      case 623:
        val = t623AppendixWjIvAchAppliedProblemsRank;
        break;
      case 624:
        val = t624AppendixWjIvAchNumberMatricesRank;
        break;
      case 625:
        val = t625AppendixWjIvAchWritingSamplesRank;
        break;
      case 626:
        val = t626AppendixWjIvAchSentenceWritingFluencyRank;
        break;
      case 627:
        val = t627AppendixWjIvAchOralReadingRank;
        break;
      case 628:
        val = t628AppendixWjIvAchSentenceReadingFluencyRank;
        break;
      case 629:
        val = t629AppendixWjIvAchSpellingRank;
        break;
      case 630:
        val = t630AppendixWjIvAchSoundAwarenessRank;
        break;
      case 631:
        val = t631AppendixWjIvAchEditingRank;
        break;
      case 632:
        val = t632AppendixWjIvAchScienceRank;
        break;
      case 633:
        val = t633AppendixWjIvAchSocialStudiesRank;
        break;
      case 634:
        val = t634AppendixWjIvAchHumanitiesRank;
        break;
      case 635:
        val = t635AppendixWjIvAchWordAttackRank;
        break;
      case 636:
        val = t636AppendixWjIvAchSpellingOfSoundsRank;
        break;
      case 648:
        val = t648AppendixWppsiIvVocabularyRank;
        break;
      case 649:
        val = t649AppendixWppsiIvInformationRank;
        break;
      case 650:
        val = t650AppendixWppsiIvComprehensionRank;
        break;
      case 651:
        val = t651AppendixWppsiIvMatrixReasoningRank;
        break;
      case 652:
        val = t652AppendixWppsiIvPictureConceptsRank;
        break;
      case 653:
        val = t653AppendixWppsiIvBlockDesignRank;
        break;
      case 654:
        val = t654AppendixWppsiIvObjectAssemblyRank;
        break;
      case 655:
        val = t655AppendixWppsiIvPictureMemoryRank;
        break;
      case 656:
        val = t656AppendixWppsiIvZooLocationsRank;
        break;
      case 657:
        val = t657AppendixWppsiIvBugSearchRank;
        break;
      case 658:
        val = t658AppendixWppsiIvCancellationRank;
        break;
      case 659:
        val = t659AppendixWppsiIvAnimalCodingRank;
        break;
      case 669:
        val = t669AppendixBeeryVmiBeeryMotorIntegrationVmiRank;
        break;
      case 670:
        val = t670AppendixBeeryVmiBeeryVisualPerceptionRank;
        break;
      case 671:
        val = t671AppendixBeeryVmiBeeryMotorCoordinationRank;
        break;
      case 672:
        val = t672AppendixWiatiiiListeningComprehensionGradesPk12Rank;
        break;
      case 673:
        val = t673AppendixWiatiiiOralExpressionGradesPk12Rank;
        break;
      case 674:
        val = t674AppendixWiatiiiEarlyReadingSkillsGradesPkRank;
        break;
      case 675:
        val = t675AppendixWiatiiiReadingComprehensionGrades112Rank;
        break;
      case 676:
        val = t676AppendixWiatiiiWordReadingGrades112Rank;
        break;
      case 677:
        val = t677AppendixWiatiiiPseudowordDecodingGrades112Rank;
        break;
      case 678:
        val = t678AppendixWiatiiiOralReadingFluencyGrades112Rank;
        break;
      case 679:
        val = t679AppendixWiatiiiSpellingGradesk12Rank;
        break;
      case 680:
        val = t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3Rank;
        break;
      case 681:
        val = t681AppendixWiatiiiSentenceCompositionGrades112Rank;
        break;
      case 682:
        val = t682AppendixWiatiiiEssayCompositionGrades312Rank;
        break;
      case 683:
        val = t683AppendixWiatiiiNumericalOperationsGradesk12Rank;
        break;
      case 684:
        val = t684AppendixWiatiiiMathProblemSolvingGradesPk12Rank;
        break;
      case 685:
        val = t685AppendixWiatiiiMathFluencyAdditionRank;
        break;
      case 686:
        val = t686AppendixWiatiiiMathFluencySubtractionRank;
        break;
      case 687:
        val = t687AppendixWiatiiiMathFluencyMultiplicationRank;
        break;
      case 688:
        val = t688AppendixNelsonDennyVocabularyRank;
        break;
      case 689:
        val = t689AppendixNelsonDennyComprehensionRank;
        break;
      case 690:
        val = t690AppendixNelsonDennyReadingRateRank;
        break;
      case 733:
        val = t733AppendixGort5RateRank;
        break;
      case 734:
        val = t734AppendixGort5AccuracyRank;
        break;
      case 735:
        val = t735AppendixGort5FluencyRank;
        break;
      case 736:
        val = t736AppendixGort5ComprehensionRank;
        break;
      case 737:
        val = t737AppendixTommTrail1Rank;
        break;
      case 738:
        val = t738AppendixTommTrial2Rank;
        break;
      case 739:
        val = t739AppendixTommRetentionTrialRank;
        break;
      case 743:
        val = t743AppendixDasIiVerbalComprehensionRank;
        break;
      case 744:
        val = t744AppendixDasIiPictureSimilaritiesRank;
        break;
      case 745:
        val = t745AppendixDasIiNamingVocabularyRank;
        break;
      case 746:
        val = t746AppendixDasIiPatternConstructionRank;
        break;
      case 747:
        val = t747AppendixDasIiMatricesRank;
        break;
      case 748:
        val = t748AppendixDasIiCopyingRank;
        break;
      case 749:
        val = t749AppendixDasIiRecallOfObjectsImmediateRank;
        break;
      case 750:
        val = t750AppendixDasIiRecallOfObjectsDelayedRank;
        break;
      case 751:
        val = t751AppendixDasIiRecallOfDigitsForwardRank;
        break;
      case 752:
        val = t752AppendixDasIiRecognitionOfPicturesRank;
        break;
      case 753:
        val = t753AppendixDasIiEarlyNumberConceptsRank;
        break;
      case 754:
        val = t754AppendixDasIiMatchingLetterLikeFormsRank;
        break;
      case 755:
        val = t755AppendixDasIiRecallOfSequentialOrderRank;
        break;
      case 756:
        val = t756AppendixDasIiSpeedOfInformationProcessingRank;
        break;
      case 757:
        val = t757AppendixDasIiRecallOfDigitsBackwardRank;
        break;
      case 758:
        val = t758AppendixDasIiPhonologicalProcessingRank;
        break;
      case 759:
        val = t759AppendixDasIiRapidNamingRank;
        break;
      case 760:
        val = t760AppendixDasIiRecallOfDesignsRank;
        break;
      case 761:
        val = t761AppendixDasIiWordDefinitionsRank;
        break;
      case 762:
        val = t762AppendixDasIiPatternConstructionRank;
        break;
      case 763:
        val = t763AppendixDasIiMatricesRank;
        break;
      case 764:
        val = t764AppendixDasIiVerbalSimilaritiesRank;
        break;
      case 765:
        val = t765AppendixDasIiSequentialAndQuantitativeReasoningRank;
        break;
      case 766:
        val = t766AppendixDasIiRecallOfObjectsImmediateRank;
        break;
      case 767:
        val = t767AppendixDasIiRecallOfObjectsDelayedRank;
        break;
      case 768:
        val = t768AppendixDasIiRecallOfDigitsForwardRank;
        break;
      case 769:
        val = t769AppendixDasIiRecognitionOfPicturesRank;
        break;
      case 770:
        val = t770AppendixDasIiRecallOfSequentialOrderRank;
        break;
      case 771:
        val = t771AppendixDasIiSpeedOfInformationProcessingRank;
        break;
      case 772:
        val = t772AppendixDasIiRecallOfDigitsBackwardRank;
        break;
      case 773:
        val = t773AppendixDasIiPhonologicalProcessingRank;
        break;
      default:
        val = "";
    }
    return val;
  };

  const appendixSubtestGradeEquivalentVal = id => {
    let val;
    switch (id) {
      case 672:
        val = t672AppendixWiatiiiListeningComprehensionGradesPk12GradeEquivalent;
        break;
      case 673:
        val = t673AppendixWiatiiiOralExpressionGradesPk12GradeEquivalent;
        break;
      case 674:
        val = t674AppendixWiatiiiEarlyReadingSkillsGradesPk3GradeEquivalent;
        break;
      case 675:
        val = t675AppendixWiatiiiReadingComprehensionGrades112GradeEquivalent;
        break;
      case 676:
        val = t676AppendixWiatiiiWordReadingGrades112GradeEquivalent;
        break;
      case 677:
        val = t677AppendixWiatiiiPseudowordDecodingGrades112GradeEquivalent;
        break;
      case 678:
        val = t678AppendixWiatiiiOralReadingFluencyGrades112GradeEquivalent;
        break;
      case 679:
        val = t679AppendixWiatiiiSpellingGradesk12GradeEquivalent;
        break;
      case 680:
        val = t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3GradeEquivalent;
        break;
      case 681:
        val = t681AppendixWiatiiiSentenceCompositionGrades112GradeEquivalent;
        break;
      case 682:
        val = t682AppendixWiatiiiEssayCompositionGrades312GradeEquivalent;
        break;
      case 683:
        val = t683AppendixWiatiiiNumericalOperationsGradesk12GradeEquivalent;
        break;
      case 684:
        val = t684AppendixWiatiiiMathProblemSolvingGradesPk12GradeEquivalent;
        break;
      case 685:
        val = t685AppendixWiatiiiMathFluencyAdditionGradeEquivalent;
        break;
      case 686:
        val = t686AppendixWiatiiiMathFluencySubtractionGradeEquivalent;
        break;
      case 687:
        val = t687AppendixWiatiiiMathFluencyMultiplicationGradeEquivalent;
        break;
      case 688:
        val = t688AppendixNelsonDennyVocabularyRange;
        break;
      case 689:
        val = t689AppendixNelsonDennyComprehensionRange;
        break;
      case 690:
        val = t690AppendixNelsonDennyReadingRateRange;
        break;
      case 743:
        val = t743AppendixDasIiVerbalComprehensionRange;
        break;
      case 744:
        val = t744AppendixDasIiPictureSimilaritiesRange;
        break;
      case 745:
        val = t745AppendixDasIiNamingVocabularyRange;
        break;
      case 746:
        val = t746AppendixDasIiPatternConstructionRange;
        break;
      case 747:
        val = t747AppendixDasIiMatricesRange;
        break;
      case 748:
        val = t748AppendixDasIiCopyingRange;
        break;
      case 749:
        val = t749AppendixDasIiRecallOfObjectsImmediateRange;
        break;
      case 750:
        val = t750AppendixDasIiRecallOfObjectsDelayedRange;
        break;
      case 751:
        val = t751AppendixDasIiRecallOfDigitsForwardRange;
        break;
      case 752:
        val = t752AppendixDasIiRecognitionOfPicturesRange;
        break;
      case 753:
        val = t753AppendixDasIiEarlyNumberConceptsRange;
        break;
      case 754:
        val = t754AppendixDasIiMatchingLetterLikeFormsRange;
        break;
      case 755:
        val = t755AppendixDasIiRecallOfSequentialOrderRange;
        break;
      case 756:
        val = t756AppendixDasIiSpeedOfInformationProcessingRange;
        break;
      case 757:
        val = t757AppendixDasIiRecallOfDigitsBackwardRange;
        break;
      case 758:
        val = t758AppendixDasIiPhonologicalProcessingRange;
        break;
      case 759:
        val = t759AppendixDasIiRapidNamingRange;
        break;
      case 760:
        val = t760AppendixDasIiRecallOfDesignsRange;
        break;
      case 761:
        val = t761AppendixDasIiWordDefinitionsRange;
        break;
      case 762:
        val = t762AppendixDasIiPatternConstructionRange;
        break;
      case 763:
        val = t763AppendixDasIiMatricesRange;
        break;
      case 764:
        val = t764AppendixDasIiVerbalSimilaritiesRange;
        break;
      case 765:
        val = t765AppendixDasIiSequentialAndQuantitativeReasoningRange;
        break;
      case 766:
        val = t766AppendixDasIiRecallOfObjectsImmediateRange;
        break;
      case 767:
        val = t767AppendixDasIiRecallOfObjectsDelayedRange;
        break;
      case 768:
        val = t768AppendixDasIiRecallOfDigitsForwardRange;
        break;
      case 769:
        val = t769AppendixDasIiRecognitionOfPicturesRange;
        break;
      case 770:
        val = t770AppendixDasIiRecallOfSequentialOrderRange;
        break;
      case 771:
        val = t771AppendixDasIiSpeedOfInformationProcessingRange;
        break;
      case 772:
        val = t772AppendixDasIiRecallOfDigitsBackwardRange;
        break;
      case 773:
        val = t773AppendixDasIiPhonologicalProcessingRange;
        break;
      default:
        val = "";
    }
    return val;
  };

  const appendixSubtestClassificationVal = id => {
    let val;
    switch (id) {
      case 1:
        val = t1AppendixWiscVSimilaritiesRange;
        break;
      case 2:
        val = t2AppendixWiscVVocabularyRange;
        break;
      case 3:
        val = t3AppendixWiscVInformationRange;
        break;
      case 4:
        val = t4AppendixWiscVComprehensionRange;
        break;
      case 5:
        val = t5AppendixWiscVBlockDesignRange;
        break;
      case 6:
        val = t6AppendixWiscVVocabularyRange;
        break;
      case 7:
        val = t7AppendixWiscVMatrixReasoningRange;
        break;
      case 8:
        val = t8AppendixWiscVFigureWeightsRange;
        break;
      case 9:
        val = t9AppendixWiscVPictureConceptsRange;
        break;
      case 10:
        val = t10AppendixWiscVArithmeticRange;
        break;
      case 11:
        val = t11AppendixWiscVDigitSpanRange;
        break;
      case 12:
        val = t12AppendixWiscVPictureSpanRange;
        break;
      case 13:
        val = t13AppendixWiscVLetterNumberSequencingRange;
        break;
      case 14:
        val = t14AppendixWiscVCodingRange;
        break;
      case 15:
        val = t15AppendixWiscVSymbolSearchRange;
        break;
      case 16:
        val = t16AppendixWiscVCancellationRange;
        break;
      case 46:
        val = t46AppendixQikCptAccuracyIndexRange;
        break;
      case 47:
        val = t47AppendixQikCptSustainedAttentionRange;
        break;
      case 48:
        val = t48AppendixQikCptImpulseControlRange;
        break;
      case 49:
        val = t49AppendixQikCptPerformanceIndexRange;
        break;
      case 50:
        val = t50AppendixQikCptSpeedOfResponseRange;
        break;
      case 51:
        val = t51AppendixQikCptConsistencyOfResponseRange;
        break;
      case 73:
        val = t73AppendixWiscVNamingSpeedLiteracyRange;
        break;
      case 74:
        val = t74AppendixWiscVNamingSpeedQualityRange;
        break;
      case 75:
        val = t75AppendixWiscVImmediateSymbolTranslationRange;
        break;
      case 76:
        val = t76AppendixWiscVDelayedSymbolTranslationRange;
        break;
      case 77:
        val = t77AppendixWiscVRecognitionSymbolTranslationRange;
        break;
      case 78:
        val = t78AppendixBriefInconsistencyScaleRange;
        break;
      case 79:
        val = t79AppendixBriefNegativityScaleRange;
        break;
      case 82:
        val = t82AppendixBriefInhibitRange;
        break;
      case 83:
        val = t83AppendixBriefShiftRange;
        break;
      case 84:
        val = t84AppendixBriefEmotionalControlRange;
        break;
      case 85:
        val = t85AppendixBriefInitiateRange;
        break;
      case 86:
        val = t86AppendixBriefWorkingMemoryRange;
        break;
      case 87:
        val = t87AppendixBriefPlanOrganizeRange;
        break;
      case 88:
        val = t88AppendixBriefOrganizationOfMaterialsRange;
        break;
      case 89:
        val = t89AppendixBriefMonitorRange;
        break;
      case 90:
        val = t90AppendixBriefInhibitRange;
        break;
      case 91:
        val = t91AppendixBriefShiftRange;
        break;
      case 92:
        val = t92AppendixBriefEmotionalControlRange;
        break;
      case 93:
        val = t93AppendixBriefInitiateRange;
        break;
      case 94:
        val = t94AppendixBriefWorkingMemoryRange;
        break;
      case 95:
        val = t95AppendixBriefPlanOrganizeRange;
        break;
      case 96:
        val = t96AppendixBriefOrganizationOfMaterialsRange;
        break;
      case 97:
        val = t97AppendixBriefMonitorRange;
        break;
      case 106:
        val = t106WaisivVerbalComprehensionCompositeRange;
        break;
      case 107:
        val = t107WaisivPerceptualReasoningCompositeRange;
        break;
      case 108:
        val = t108WaisivWorkingMemoryCompositeRange;
        break;
      case 109:
        val = t109WaisivProcessingSpeedCompositeRange;
        break;
      case 120:
        val = t120AppendixConners3InattentionRange;
        break;
      case 121:
        val = t121AppendixConners3HyperactivityImpulsivityRange;
        break;
      case 122:
        val = t122AppendixConners3LearningProblemsRange;
        break;
      case 123:
        val = t123AppendixConners3ExecutiveFunctioningRange;
        break;
      case 124:
        val = t124AppendixConners3DefianceAggressionRange;
        break;
      case 125:
        val = t125AppendixConners3PeerRelationsRange;
        break;
      case 126:
        val = t126AppendixConners3AdhdInattentiveRange;
        break;
      case 127:
        val = t127AppendixConners3AdhdHyperactiveImpulsiveRange;
        break;
      case 128:
        val = t128AppendixConners3ConductDisorderRange;
        break;
      case 129:
        val = t129AppendixConners3OppositionalDefiantDisorderRange;
        break;
      case 130:
        val = t130AppendixConners3Conners3AdhdIndexRange;
        break;
      case 131:
        val = t131AppendixConners3Conners3GlobalIndexRange;
        break;
      case 132:
        val = t132AppendixConners3AnxietyRange;
        break;
      case 133:
        val = t133AppendixConners3DepressionRange;
        break;
      case 134:
        val = t134AppendixConners3SevereConductRange;
        break;
      case 135:
        val = t135AppendixConners3PositiveImpressionRange;
        break;
      case 136:
        val = t136AppendixConners3NegativeImpressionRange;
        break;
      case 137:
        val = t137AppendixConners3InconsistencyIndexRange;
        break;
      case 138:
        val = t138AppendixConners3InattentionRange;
        break;
      case 139:
        val = t139AppendixConners3HyperactivityImpulsivityRange;
        break;
      case 141:
        val = t141AppendixConners3LearningProblemsRange;
        break;
      case 142:
        val = t142AppendixConners3ExecutiveFunctioningRange;
        break;
      case 143:
        val = t143AppendixConners3DefianceAggressionRange;
        break;
      case 144:
        val = t144AppendixConners3PeerRelationsRange;
        break;
      case 145:
        val = t145AppendixConners3AdhdInattentiveRange;
        break;
      case 146:
        val = t146AppendixConners3AdhdHyperactiveImpulsiveRange;
        break;
      case 147:
        val = t147AppendixConners3ConductDisorderRange;
        break;
      case 148:
        val = t148AppendixConners3OppositionalDefiantDisorderRange;
        break;
      case 149:
        val = t149AppendixConners3Conners3AdhdIndexRange;
        break;
      case 150:
        val = t150AppendixConners3Conners3GlobalIndexRange;
        break;
      case 151:
        val = t151AppendixConners3AnxietyRange;
        break;
      case 152:
        val = t152AppendixConners3DepressionRange;
        break;
      case 153:
        val = t153AppendixConners3SevereConductRange;
        break;
      case 154:
        val = t154AppendixConners3PositiveImpressionRange;
        break;
      case 155:
        val = t155AppendixConners3NegativeImpressionRange;
        break;
      case 156:
        val = t156AppendixConners3InconsistencyIndexRange;
        break;
      case 157:
        val = t157AppendixConners3InattentionRange;
        break;
      case 158:
        val = t158AppendixConners3HyperactivityImpulsivityRange;
        break;
      case 159:
        val = t159AppendixConners3LearningProblemsRange;
        break;
      case 160:
        val = t160AppendixConners3DefianceAggressionRange;
        break;
      case 161:
        val = t161AppendixConners3FamilyRelationsRange;
        break;
      case 162:
        val = t162AppendixConners3AdhdInattentiveRange;
        break;
      case 163:
        val = t163AppendixConners3AdhdHyperactiveImpulsiveRange;
        break;
      case 164:
        val = t164AppendixConners3ConductDisorderRange;
        break;
      case 165:
        val = t165AppendixConners3OppositionalDefiantDisorderRange;
        break;
      case 166:
        val = t166AppendixConners3Conners3AdhdIndexRange;
        break;
      case 644:
        val = t644AppendixConners3AnxietyRange;
        break;
      case 167:
        val = t167AppendixConners3DepressionRange;
        break;
      case 168:
        val = t168AppendixConners3SevereConductRange;
        break;
      case 169:
        val = t169AppendixConners3PositiveImpressionRange;
        break;
      case 170:
        val = t170AppendixConners3NegativeImpressionRange;
        break;
      case 171:
        val = t171AppendixConners3InconsistencyIndexRange;
        break;
      case 172:
        val = t172AppendixCtoni2PictorialAnalogiesRange;
        break;
      case 173:
        val = t173AppendixCtoni2GeometricAnalogiesRange;
        break;
      case 174:
        val = t174AppendixCtoni2PictorialCategoriesRange;
        break;
      case 175:
        val = t175AppendixCtoni2GeometricCategoriesRange;
        break;
      case 176:
        val = t176AppendixCtoni2PictorialSequencesRange;
        break;
      case 177:
        val = t177AppendixCtoni2GeometricSequencesRange;
        break;
      case 178:
        val = t178AppendixCtoni2PictorialScaleRange;
        break;
      case 179:
        val = t179AppendixCtoni2GeometricScaleRange;
        break;
      case 180:
        val = t180AppendixCtoni2FullScaleRange;
        break;
      case 221:
        val = t221AppendixRbansListLearningRange;
        break;
      case 222:
        val = t222AppendixRbansStoryMemoryRange;
        break;
      case 223:
        val = t223AppendixRbansFigureCopyRange;
        break;
      case 224:
        val = t224AppendixRbansLineOrientationRange;
        break;
      case 225:
        val = t225AppendixRbansPictureNamingRange;
        break;
      case 226:
        val = t226AppendixRbansSemanticFluencyRange;
        break;
      case 227:
        val = t227AppendixRbansDigitSpanRange;
        break;
      case 228:
        val = t228AppendixRbansCodingRange;
        break;
      case 229:
        val = t229AppendixRbansListRecallRange;
        break;
      case 230:
        val = t230AppendixRbansListRecognitionRange;
        break;
      case 231:
        val = t231AppendixRbansStoryRecallRange;
        break;
      case 232:
        val = t232AppendixRbansFigureRecallRange;
        break;
      case 233:
        val = t233AppendixVinelandIiReceptiveRange;
        break;
      case 234:
        val = t234AppendixVinelandIiExpressiveRange;
        break;
      case 235:
        val = t235AppendixVinelandIiWrittenRange;
        break;
      case 236:
        val = t236AppendixVinelandIiPersonalRange;
        break;
      case 237:
        val = t237AppendixVinelandIiDomesticRange;
        break;
      case 238:
        val = t238AppendixVinelandIiCommunityRange;
        break;
      case 239:
        val = t239AppendixVinelandIiInterpersonalRelationshipsRange;
        break;
      case 240:
        val = t240AppendixVinelandIiPlayAndLeisureTimeRange;
        break;
      case 241:
        val = t241AppendixVinelandIiCopingSkillsRange;
        break;
      case 242:
        val = t242AppendixVinelandIiGrossRange;
        break;
      case 243:
        val = t243AppendixVinelandIiFineRange;
        break;
      case 244:
        val = t244AppendixVinelandIiMaladaptiveBehaviorIndexRange;
        break;
      case 245:
        val = t245AppendixVinelandIiMaladaptiveBehaviorCriticalItemsRange;
        break;
      case 246:
        val = t246AppendixWasiIiSimilaritiesRange;
        break;
      case 247:
        val = t247AppendixWasiIiVocabularyRange;
        break;
      case 248:
        val = t248AppendixWasiIiBlockDesignRange;
        break;
      case 249:
        val = t249AppendixWasiIiMatrixReasoningRange;
        break;
      case 266:
        val = t266AppendixWraml2StoryMemoryRange;
        break;
      case 267:
        val = t267AppendixWraml2VerbalLearningRange;
        break;
      case 268:
        val = t268AppendixWraml2DesignMemoryRange;
        break;
      case 269:
        val = t269AppendixWraml2PictureMemoryRange;
        break;
      case 270:
        val = t270AppendixWraml2FingerWindowsRange;
        break;
      case 271:
        val = t271AppendixWraml2NumberLetterRange;
        break;
      case 272:
        val = t272AppendixWraml2SentenceMemoryRange;
        break;
      case 273:
        val = t273AppendixWraml2SoundSymbolRange;
        break;
      case 274:
        val = t274AppendixWraml2VerbalWorkingMemoryRange;
        break;
      case 275:
        val = t275AppendixWraml2SymbolicWorkingMemoryRange;
        break;
      case 276:
        val = t276AppendixWraml2StoryMemoryDelayRecallRange;
        break;
      case 277:
        val = t277AppendixWraml2VerbalLearningDelayRecallRange;
        break;
      case 278:
        val = t278AppendixWraml2SoundSymbolDelayRecallRange;
        break;
      case 279:
        val = t279AppendixWraml2StoryMemoryRecognitionRange;
        break;
      case 280:
        val = t280AppendixWraml2VerbalLearningRecognitionRange;
        break;
      case 281:
        val = t281AppendixWraml2DesignMemoryRecognitionRange;
        break;
      case 282:
        val = t282AppendixWraml2PictureMemoryRecognitionRange;
        break;
      case 283:
        val = t283AppendixBasc3FIndexRange;
        break;
      case 284:
        val = t284AppendixBasc3LIndexRange;
        break;
      case 285:
        val = t285AppendixBasc3VIndexRange;
        break;
      case 286:
        val = t286AppendixBasc3AlcoholAbuseRange;
        break;
      case 287:
        val = t287AppendixBasc3AnxietyRange;
        break;
      case 288:
        val = t288AppendixBasc3AttentionProblemsRange;
        break;
      case 289:
        val = t289AppendixBasc3AttitudeToSchoolRange;
        break;
      case 290:
        val = t290AppendixBasc3AttitudeToTeachersRange;
        break;
      case 291:
        val = t291AppendixBasc3AtypicalityRange;
        break;
      case 292:
        val = t292AppendixBasc3DepressionRange;
        break;
      case 293:
        val = t293AppendixBasc3HyperactivityRange;
        break;
      case 294:
        val = t294AppendixBasc3LocusOfControlRange;
        break;
      case 295:
        val = t295AppendixBasc3SchoolMaladjustmentRange;
        break;
      case 296:
        val = t296AppendixBasc3SensationSeekingRange;
        break;
      case 297:
        val = t297AppendixBasc3SenseOfInadequacyRange;
        break;
      case 298:
        val = t298AppendixBasc3SocialStressRange;
        break;
      case 299:
        val = t299AppendixBasc3SomatizationRange;
        break;
      case 300:
        val = t300AppendixBasc3InterpersonalRelationsRange;
        break;
      case 301:
        val = t301AppendixBasc3RelationsWithParentsRange;
        break;
      case 302:
        val = t302AppendixBasc3SelfEsteemRange;
        break;
      case 303:
        val = t303AppendixBasc3SelfRelianceRange;
        break;
      case 304:
        val = t304AppendixBasc3AngerControlRange;
        break;
      case 305:
        val = t305AppendixBasc3EgoStrengthRange;
        break;
      case 306:
        val = t306AppendixBasc3ManiaRange;
        break;
      case 307:
        val = t307AppendixBasc3TestAnxietyRange;
        break;
      case 308:
        val = t308AppendixBasc3AttitudeToSchoolRange;
        break;
      case 309:
        val = t309AppendixBasc3AttitudeToTeachersRange;
        break;
      case 310:
        val = t310AppendixBasc3AtypicalityRange;
        break;
      case 311:
        val = t311AppendixBasc3LocusOfControlRange;
        break;
      case 312:
        val = t312AppendixBasc3SocialStressRange;
        break;
      case 313:
        val = t313AppendixBasc3AnxietyRange;
        break;
      case 314:
        val = t314AppendixBasc3DepressionRange;
        break;
      case 315:
        val = t315AppendixBasc3SenseOfInadequacyRange;
        break;
      case 316:
        val = t316AppendixBasc3AttentionProblemsRange;
        break;
      case 317:
        val = t317AppendixBasc3HyperactivityRange;
        break;
      case 662:
        val = t662AppendixBasc3SocialStressRange;
        break;
      case 664:
        val = t664AppendixBasc3AnxietyRange;
        break;
      case 665:
        val = t665AppendixBasc3DepressionRange;
        break;
      case 666:
        val = t666AppendixBasc3SenseOfInadequacyRange;
        break;
      case 667:
        val = t667AppendixBasc3SelfEsteemRange;
        break;
      case 668:
        val = t668AppendixBasc3SelfRelianceRange;
        break;
      case 324:
        val = t324AppendixBasc3InterpersonalRelationsRange;
        break;
      case 325:
        val = t325AppendixBasc3RelationsWithParentsRange;
        break;
      case 326:
        val = t326AppendixBasc3SelfEsteemRange;
        break;
      case 327:
        val = t327AppendixBasc3SelfRelianceRange;
        break;
      case 328:
        val = t328AppendixBasc3AttitudeToSchoolRange;
        break;
      case 329:
        val = t329AppendixBasc3AttitudeToTeachersRange;
        break;
      case 330:
        val = t330AppendixBasc3SensationSeekingRange;
        break;
      case 331:
        val = t331AppendixBasc3AtypicalityRange;
        break;
      case 332:
        val = t332AppendixBasc3LocusOfControlRange;
        break;
      case 333:
        val = t333AppendixBasc3SocialStressRange;
        break;
      case 334:
        val = t334AppendixBasc3AnxietyRange;
        break;
      case 335:
        val = t335AppendixBasc3DepressionRange;
        break;
      case 336:
        val = t336AppendixBasc3SenseOfInadequacyRange;
        break;
      case 337:
        val = t337AppendixBasc3SomatizationRange;
        break;
      case 338:
        val = t338AppendixBasc3AttentionProblemsRange;
        break;
      case 339:
        val = t339AppendixBasc3HyperactivityRange;
        break;
      case 340:
        val = t340AppendixBasc3SocialStressRange;
        break;
      case 341:
        val = t341AppendixBasc3AnxietyRange;
        break;
      case 342:
        val = t342AppendixBasc3DepressionRange;
        break;
      case 343:
        val = t343AppendixBasc3SenseOfInadequacyRange;
        break;
      case 344:
        val = t344AppendixBasc3SelfEsteemRange;
        break;
      case 345:
        val = t345AppendixBasc3SelfRelianceRange;
        break;
      case 346:
        val = t346AppendixBasc3InterpersonalRelationsRange;
        break;
      case 347:
        val = t347AppendixBasc3RelationsWithParentsRange;
        break;
      case 348:
        val = t348AppendixBasc3SelfEsteemRange;
        break;
      case 349:
        val = t349AppendixBasc3SelfRelianceRange;
        break;
      case 350:
        val = t350AppendixBasc3AtypicalityRange;
        break;
      case 351:
        val = t351AppendixBasc3LocusOfControlRange;
        break;
      case 352:
        val = t352AppendixBasc3SocialStressRange;
        break;
      case 353:
        val = t353AppendixBasc3AnxietyRange;
        break;
      case 354:
        val = t354AppendixBasc3DepressionRange;
        break;
      case 355:
        val = t355AppendixBasc3SenseOfInadequacyRange;
        break;
      case 356:
        val = t356AppendixBasc3SomatizationRange;
        break;
      case 357:
        val = t357AppendixBasc3AttentionProblemsRange;
        break;
      case 358:
        val = t358AppendixBasc3HyperactivityRange;
        break;
      case 359:
        val = t359AppendixBasc3SocialStressRange;
        break;
      case 360:
        val = t360AppendixBasc3AnxietyRange;
        break;
      case 361:
        val = t361AppendixBasc3DepressionRange;
        break;
      case 362:
        val = t362AppendixBasc3SenseOfInadequacyRange;
        break;
      case 363:
        val = t363AppendixBasc3SelfEsteemRange;
        break;
      case 364:
        val = t364AppendixBasc3SelfRelianceRange;
        break;
      case 365:
        val = t365AppendixBasc3InterpersonalRelationsRange;
        break;
      case 366:
        val = t366AppendixBasc3RelationsWithParentsRange;
        break;
      case 367:
        val = t367AppendixBasc3SelfEsteemRange;
        break;
      case 368:
        val = t368AppendixBasc3SelfRelianceRange;
        break;
      case 369:
        val = t369AppendixBasc3FIndexRange;
        break;
      case 370:
        val = t370AppendixBasc3AggressionRange;
        break;
      case 371:
        val = t371AppendixBasc3AnxietyRange;
        break;
      case 372:
        val = t372AppendixBasc3AttentionProblemsRange;
        break;
      case 373:
        val = t373AppendixBasc3AtypicalityRange;
        break;
      case 374:
        val = t374AppendixBasc3ConductProblemsRange;
        break;
      case 375:
        val = t375AppendixBasc3DepressionRange;
        break;
      case 376:
        val = t376AppendixBasc3HyperactivityRange;
        break;
      case 377:
        val = t377AppendixBasc3LearningProblemsRange;
        break;
      case 378:
        val = t378AppendixBasc3SomatizationRange;
        break;
      case 379:
        val = t379AppendixBasc3WithdrawalRange;
        break;
      case 380:
        val = t380AppendixBasc3ActivitiesOfDailyLivingRange;
        break;
      case 381:
        val = t381AppendixBasc3AdaptabilityRange;
        break;
      case 382:
        val = t382AppendixBasc3FunctionalCommunicationRange;
        break;
      case 383:
        val = t383AppendixBasc3LeadershipRange;
        break;
      case 384:
        val = t384AppendixBasc3SocialSkillsRange;
        break;
      case 385:
        val = t385AppendixBasc3StudySkillsRange;
        break;
      case 386:
        val = t386AppendixBasc3AngerControlRange;
        break;
      case 387:
        val = t387AppendixBasc3BullyingRange;
        break;
      case 388:
        val = t388AppendixBasc3DevelopmentalSocialDisordersRange;
        break;
      case 389:
        val = t389AppendixBasc3EmotionalSelfControlRange;
        break;
      case 390:
        val = t390AppendixBasc3ExecutiveFunctioningRange;
        break;
      case 391:
        val = t391AppendixBasc3NegativeEmotionalityRange;
        break;
      case 392:
        val = t392AppendixBasc3ResiliencyRange;
        break;
      case 393:
        val = t393AppendixBasc3HyperactivityRange;
        break;
      case 394:
        val = t394AppendixBasc3AggressionRange;
        break;
      case 395:
        val = t395AppendixBasc3AnxietyRange;
        break;
      case 396:
        val = t396AppendixBasc3DepressionRange;
        break;
      case 397:
        val = t397AppendixBasc3SomatizationRange;
        break;
      case 398:
        val = t398AppendixBasc3AdaptabilityRange;
        break;
      case 399:
        val = t399AppendixBasc3SocialSkillsRange;
        break;
      case 400:
        val = t400AppendixBasc3FunctionalCommunicationRange;
        break;
      case 401:
        val = t401AppendixBasc3HyperactivityRange;
        break;
      case 402:
        val = t402AppendixBasc3AggressionRange;
        break;
      case 403:
        val = t403AppendixBasc3DepressionRange;
        break;
      case 404:
        val = t404AppendixBasc3AttentionProblemsRange;
        break;
      case 405:
        val = t405AppendixBasc3AtypicalityRange;
        break;
      case 406:
        val = t406AppendixBasc3WithdrawalRange;
        break;
      case 407:
        val = t407AppendixBasc3HyperactivityRange;
        break;
      case 408:
        val = t408AppendixBasc3AggressionRange;
        break;
      case 409:
        val = t409AppendixBasc3ConductProblemsRange;
        break;
      case 410:
        val = t410AppendixBasc3AnxietyRange;
        break;
      case 411:
        val = t411AppendixBasc3DepressionRange;
        break;
      case 412:
        val = t412AppendixBasc3SomatizationRange;
        break;
      case 413:
        val = t413AppendixBasc3LearningProblemsRange;
        break;
      case 414:
        val = t414AppendixBasc3AttentionProblemsRange;
        break;
      case 415:
        val = t415AppendixBasc3AdaptabilityRange;
        break;
      case 416:
        val = t416AppendixBasc3SocialSkillsRange;
        break;
      case 417:
        val = t417AppendixBasc3FunctionalCommunicationRange;
        break;
      case 418:
        val = t418AppendixBasc3LeadershipRange;
        break;
      case 419:
        val = t419AppendixBasc3StudySkillsRange;
        break;
      case 420:
        val = t420AppendixBasc3HyperactivityRange;
        break;
      case 421:
        val = t421AppendixBasc3AggressionRange;
        break;
      case 422:
        val = t422AppendixBasc3DepressionRange;
        break;
      case 423:
        val = t423AppendixBasc3AttentionProblemsRange;
        break;
      case 424:
        val = t424AppendixBasc3AtypicalityRange;
        break;
      case 425:
        val = t425AppendixBasc3WithdrawalRange;
        break;
      case 426:
        val = t426AppendixBasc3HyperactivityRange;
        break;
      case 427:
        val = t427AppendixBasc3AggressionRange;
        break;
      case 428:
        val = t428AppendixBasc3AnxietyRange;
        break;
      case 429:
        val = t429AppendixBasc3DepressionRange;
        break;
      case 430:
        val = t430AppendixBasc3SomatizationRange;
        break;
      case 431:
        val = t431AppendixBasc3AdaptabilityRange;
        break;
      case 432:
        val = t432AppendixBasc3SocialSkillsRange;
        break;
      case 433:
        val = t433AppendixBasc3FunctionalCommunicationRange;
        break;
      case 434:
        val = t434AppendixBasc3ActivitiesOfDailyLivingRange;
        break;
      case 435:
        val = t435AppendixBasc3HyperactivityRange;
        break;
      case 436:
        val = t436AppendixBasc3AggressionRange;
        break;
      case 437:
        val = t437AppendixBasc3DepressionRange;
        break;
      case 438:
        val = t438AppendixBasc3AttentionProblemsRange;
        break;
      case 439:
        val = t439AppendixBasc3AtypicalityRange;
        break;
      case 440:
        val = t440AppendixBasc3WithdrawalRange;
        break;
      case 441:
        val = t441AppendixBasc3HyperactivityRange;
        break;
      case 442:
        val = t442AppendixBasc3AggressionRange;
        break;
      case 443:
        val = t443AppendixBasc3ConductProblemsRange;
        break;
      case 444:
        val = t444AppendixBasc3AnxietyRange;
        break;
      case 445:
        val = t445AppendixBasc3DepressionRange;
        break;
      case 446:
        val = t446AppendixBasc3SomatizationRange;
        break;
      case 447:
        val = t447AppendixBasc3AdaptabilityRange;
        break;
      case 448:
        val = t448AppendixBasc3SocialSkillsRange;
        break;
      case 449:
        val = t449AppendixBasc3FunctionalCommunicationRange;
        break;
      case 450:
        val = t450AppendixBasc3ActivitiesOfDailyLivingRange;
        break;
      case 451:
        val = t451AppendixBasc3HyperactivityRange;
        break;
      case 452:
        val = t452AppendixBasc3AggressionRange;
        break;
      case 453:
        val = t453AppendixBasc3DepressionRange;
        break;
      case 454:
        val = t454AppendixBasc3AttentionProblemsRange;
        break;
      case 455:
        val = t455AppendixBasc3AtypicalityRange;
        break;
      case 456:
        val = t456AppendixBasc3WithdrawalRange;
        break;
      case 457:
        val = t457AppendixWaisIvSimilaritiesRange;
        break;
      case 458:
        val = t458AppendixWaisIvVocabularyRange;
        break;
      case 459:
        val = t459AppendixWaisIvInformationRange;
        break;
      case 460:
        val = t460AppendixWaisIvComprehensionRange;
        break;
      case 461:
        val = t461AppendixWaisIvBlockDesignRange;
        break;
      case 462:
        val = t462AppendixWaisIvMatrixReasoningRange;
        break;
      case 463:
        val = t463AppendixWaisIvVisualPuzzlesRange;
        break;
      case 464:
        val = t464AppendixWaisIvFigureWeightsRange;
        break;
      case 465:
        val = t465AppendixWaisIvPictureCompletionRange;
        break;
      case 466:
        val = t466AppendixWaisIvDigitSpanRange;
        break;
      case 467:
        val = t467AppendixWaisIvArithmeticRange;
        break;
      case 468:
        val = t468AppendixWaisIvLetterNumberSequencingRange;
        break;
      case 469:
        val = t469AppendixWaisIvCodingRange;
        break;
      case 470:
        val = t470AppendixWaisIvSymbolSearchRange;
        break;
      case 471:
        val = t471AppendixWaisIvCancellationRange;
        break;
      case 525:
        val = t525AppendixMmpi2HypochondriasisHsRange;
        break;
      case 526:
        val = t526AppendixMmpi2DepressionDRange;
        break;
      case 527:
        val = t527AppendixMmpi2HysteriaHyRange;
        break;
      case 528:
        val = t528AppendixMmpi2PsychopathicDeviatePdRange;
        break;
      case 529:
        val = t529AppendixMmpi2MasculinityFemininityMfRange;
        break;
      case 530:
        val = t530AppendixMmpi2ParanoiaPaRange;
        break;
      case 531:
        val = t531AppendixMmpi2PsychastheniaPtRange;
        break;
      case 532:
        val = t532AppendixMmpi2SchizophreniaScRange;
        break;
      case 533:
        val = t533AppendixMmpi2HypomaniaMaRange;
        break;
      case 534:
        val = t534AppendixMmpi2SocialIntroversionSiRange;
        break;
      case 535:
        val = t535AppendixMmpi2LieLRange;
        break;
      case 536:
        val = t536AppendixMmpi2FRange;
        break;
      case 537:
        val = t537AppendixMmpi2BackFFbRange;
        break;
      case 538:
        val = t538AppendixMmpi2KRange;
        break;
      case 539:
        val = t539AppendixMmpiAHypochondriasisHsRange;
        break;
      case 540:
        val = t540AppendixMmpiADepressionDRange;
        break;
      case 541:
        val = t541AppendixMmpiAHysteriaHyRange;
        break;
      case 542:
        val = t542AppendixMmpiAPsychopathicDeviatePdRange;
        break;
      case 543:
        val = t543AppendixMmpiAMasculinityFemininityMfRange;
        break;
      case 544:
        val = t544AppendixMmpiAParanoiaPaRange;
        break;
      case 545:
        val = t545AppendixMmpiAPsychastheniaPtRange;
        break;
      case 546:
        val = t546AppendixMmpiASchizophreniaScRange;
        break;
      case 547:
        val = t547AppendixMmpiAHypomaniaMaRange;
        break;
      case 548:
        val = t548AppendixMmpiASocialIntroversionSiRange;
        break;
      case 549:
        val = t549AppendixMmpiACnsRange;
        break;
      case 550:
        val = t550AppendixMmpiAVrinRange;
        break;
      case 551:
        val = t551AppendixMmpiATrinRange;
        break;
      case 552:
        val = t552AppendixMmpiAFRange;
        break;
      case 553:
        val = t553AppendixMmpiAF1Range;
        break;
      case 554:
        val = t554AppendixMmpiAF2Range;
        break;
      case 555:
        val = t555AppendixMmpiALRange;
        break;
      case 556:
        val = t556AppendixMmpiAKRange;
        break;
      case 557:
        val = t557AppendixNepsyIiAnimalSortingAsRange;
        break;
      case 558:
        val = t558AppendixNepsyIiAuditoryAttentionAaAndResponseSetRsRange;
        break;
      case 559:
        val = t559AppendixNepsyIiClocksClRange;
        break;
      case 560:
        val = t560AppendixNepsyIiDesignFluencyDfRange;
        break;
      case 561:
        val = t561AppendixNepsyIiInhibitionInRange;
        break;
      case 562:
        val = t562AppendixNepsyIiStatueStRange;
        break;
      case 563:
        val = t563AppendixNepsyIiBodyPartNamingBpnAndIdentificationBpiRange;
        break;
      case 564:
        val = t564AppendixNepsyIiComprehensionOfInstructionsCiRange;
        break;
      case 565:
        val = t565AppendixNepsyIiOromotorSequencesOsRange;
        break;
      case 566:
        val = t566AppendixNepsyIiPhonologicalProcessingPhRange;
        break;
      case 567:
        val = t567AppendixNepsyIiRepetitionNonsenseWordsRnRange;
        break;
      case 568:
        val = t568AppendixNepsyIiSpeededNamingSnRange;
        break;
      case 569:
        val = t569AppendixNepsyIiWordGenerationWgRange;
        break;
      case 571:
        val = t571AppendixNepsyIiListMemoryLmListMemoryDelayedLmdRange;
        break;
      case 572:
        val = t572AppendixNepsyIiMemoryForDesignsMdMemoryForDesignsDelayedMddRange;
        break;
      case 573:
        val = t573AppendixNepsyIiMemoryForFacesMfMemoryForFacesDelayedMfdRange;
        break;
      case 574:
        val = t574AppendixNepsyIiMemoryForNamesMnMemoryForNamesDelayedMndRange;
        break;
      case 575:
        val = t575AppendixNepsyIiNarrativeMemoryNmRange;
        break;
      case 576:
        val = t576AppendixNepsyIiSentenceRepetitionSrRange;
        break;
      case 577:
        val = t577AppendixNepsyIiWordListInterferenceWiRange;
        break;
      case 578:
        val = t578AppendixNepsyIiFingertipTappingFtRange;
        break;
      case 579:
        val = t579AppendixNepsyIiImitatingHandPositionsIhRange;
        break;
      case 580:
        val = t580AppendixNepsyIiManualMotorSequencesMmRange;
        break;
      case 581:
        val = t581AppendixNepsyIiVisuomotorPrecisionVpRange;
        break;
      case 582:
        val = t582AppendixNepsyIiAffectRecognitionArRange;
        break;
      case 583:
        val = t583AppendixNepsyIiTheoryOfMindTmRange;
        break;
      case 584:
        val = t584AppendixNepsyIiArrowsAwRange;
        break;
      case 585:
        val = t585AppendixNepsyIiBlockConstructionBcRange;
        break;
      case 586:
        val = t586AppendixNepsyIiDesignCopyingDcRange;
        break;
      case 587:
        val = t587AppendixNepsyIiGeometricPuzzlesGpRange;
        break;
      case 588:
        val = t588AppendixNepsyIiPicturePuzzlesPpRange;
        break;
      case 589:
        val = t589AppendixNepsyIiRouteFindingRfRange;
        break;
      case 593:
        val = t593AppendixWjIvCogVocabularyRange;
        break;
      case 594:
        val = t594AppendixWjIvCogGeneralInformationRange;
        break;
      case 595:
        val = t595AppendixWjIvCogNumberSeriesRange;
        break;
      case 596:
        val = t596AppendixWjIvCogConceptFormationRange;
        break;
      case 597:
        val = t597AppendixWjIvCogAnalysisSynthesisRange;
        break;
      case 598:
        val = t598AppendixWjIvCogVerbalAttentionRange;
        break;
      case 599:
        val = t599AppendixWjIvCogNumbersReversedRange;
        break;
      case 600:
        val = t600AppendixWjIvCogObjectNumberSequencingRange;
        break;
      case 601:
        val = t601AppendixWjIvCogPairCancellationRange;
        break;
      case 645:
        val = t645AppendixWjIvCogLetterPatternMatchingRange;
        break;
      case 602:
        val = t602AppendixWjIvCogPhonologicalProcessingRange;
        break;
      case 603:
        val = t603AppendixWjIvCogNonWordRepetitionRange;
        break;
      case 604:
        val = t604AppendixWjIvCogRecallRange;
        break;
      case 605:
        val = t605AppendixWjIvCogVisualAuditoryLearningRange;
        break;
      case 606:
        val = t606AppendixWjIvCogVisualizationRange;
        break;
      case 607:
        val = t607AppendixWjIvCogPictureRecognitionRange;
        break;
      case 608:
        val = t608AppendixTsccUnderresponseUndRange;
        break;
      case 609:
        val = t609AppendixTsccHyperresponseHypRange;
        break;
      case 610:
        val = t610AppendixTsccAnxietyAnxRange;
        break;
      case 611:
        val = t611AppendixTsccDepressionDepRange;
        break;
      case 612:
        val = t612AppendixTsccAngerAngRange;
        break;
      case 613:
        val = t613AppendixTsccPosttraumaticStressPtsRange;
        break;
      case 614:
        val = t614AppendixTsccDissociationDisRange;
        break;
      case 615:
        val = t615AppendixTsccSexualConcernsScRange;
        break;
      case 616:
        val = t616AppendixWjIvAchLetterWordIdentificationRange;
        break;
      case 617:
        val = t617AppendixWjIvAchWordAttackRange;
        break;
      case 618:
        val = t618AppendixWjIvAchPassageComprehensionRange;
        break;
      case 619:
        val = t619AppendixWjIvAchReadingRecallRange;
        break;
      case 620:
        val = t620AppendixWjIvAchReadingVocabularyRange;
        break;
      case 621:
        val = t621AppendixWjIvAchCalculationRange;
        break;
      case 622:
        val = t622AppendixWjIvAchMathFactFluencyRange;
        break;
      case 623:
        val = t623AppendixWjIvAchAppliedProblemsRange;
        break;
      case 624:
        val = t624AppendixWjIvAchNumberMatricesRange;
        break;
      case 625:
        val = t625AppendixWjIvAchWritingSamplesRange;
        break;
      case 626:
        val = t626AppendixWjIvAchSentenceWritingFluencyRange;
        break;
      case 627:
        val = t627AppendixWjIvAchOralReadingRange;
        break;
      case 628:
        val = t628AppendixWjIvAchSentenceReadingFluencyRange;
        break;
      case 629:
        val = t629AppendixWjIvAchSpellingRange;
        break;
      case 630:
        val = t630AppendixWjIvAchSpellingOfSoundsRange;
        break;
      case 631:
        val = t631AppendixWjIvAchEditingRange;
        break;
      case 632:
        val = t632AppendixWjIvAchScienceRange;
        break;
      case 633:
        val = t633AppendixWjIvAchSocialStudiesRange;
        break;
      case 634:
        val = t634AppendixWjIvAchHumanitiesRange;
        break;
      case 635:
        val = t635AppendixWjIvAchWordAttackRange;
        break;
      case 636:
        val = t636AppendixWjIvAchSpellingOfSoundsRange;
        break;
      case 648:
        val = t648AppendixWppsiIvVocabularyRange;
        break;
      case 649:
        val = t649AppendixWppsiIvInformationRange;
        break;
      case 650:
        val = t650AppendixWppsiIvComprehensionRange;
        break;
      case 651:
        val = t651AppendixWppsiIvMatrixReasoningRange;
        break;
      case 652:
        val = t652AppendixWppsiIvPictureConceptsRange;
        break;
      case 653:
        val = t653AppendixWppsiIvBlockDesignRange;
        break;
      case 654:
        val = t654AppendixWppsiIvObjectAssemblyRange;
        break;
      case 655:
        val = t655AppendixWppsiIvPictureMemoryRange;
        break;
      case 656:
        val = t656AppendixWppsiIvZooLocationsRange;
        break;
      case 657:
        val = t657AppendixWppsiIvBugSearchRange;
        break;
      case 658:
        val = t658AppendixWppsiIvCancellationRange;
        break;
      case 659:
        val = t659AppendixWppsiIvAnimalCodingRange;
        break;
      case 669:
        val = t669AppendixBeeryVmiBeeryMotorIntegrationVmiRange;
        break;
      case 670:
        val = t670AppendixBeeryVmiBeeryVisualPerceptionRange;
        break;
      case 671:
        val = t671AppendixBeeryVmiBeeryMotorCoordinationRange;
        break;
      case 672:
        val = t672AppendixWiatiiiListeningComprehensionGradesPk12Range;
        break;
      case 673:
        val = t673AppendixWiatiiiOralExpressionGradesPk12Range;
        break;
      case 674:
        val = t674AppendixWiatiiiEarlyReadingSkillsGradesPkRange;
        break;
      case 675:
        val = t675AppendixWiatiiiReadingComprehensionGrades112Range;
        break;
      case 676:
        val = t676AppendixWiatiiiWordReadingGrades112Range;
        break;
      case 677:
        val = t677AppendixWiatiiiPseudowordDecodingGrades112Range;
        break;
      case 678:
        val = t678AppendixWiatiiiOralReadingFluencyGrades112Range;
        break;
      case 679:
        val = t679AppendixWiatiiiSpellingGradesk12Range;
        break;
      case 680:
        val = t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3Range;
        break;
      case 681:
        val = t681AppendixWiatiiiSentenceCompositionGrades112Range;
        break;
      case 682:
        val = t682AppendixWiatiiiEssayCompositionGrades312Range;
        break;
      case 683:
        val = t683AppendixWiatiiiNumericalOperationsGradesk12Range;
        break;
      case 684:
        val = t684AppendixWiatiiiMathProblemSolvingGradesPk12Range;
        break;
      case 685:
        val = t685AppendixWiatiiiMathFluencyAdditionRange;
        break;
      case 686:
        val = t686AppendixWiatiiiMathFluencySubtractionRange;
        break;
      case 687:
        val = t687AppendixWiatiiiMathFluencyMultiplicationRange;
        break;
      case 733:
        val = t733AppendixGort5RateRange;
        break;
      case 734:
        val = t734AppendixGort5AccuracyRange;
        break;
      case 735:
        val = t735AppendixGort5FluencyRange;
        break;
      case 736:
        val = t736AppendixGort5ComprehensionRange;
        break;
      case 737:
        val = t737AppendixTommTrail1Range;
        break;
      case 738:
        val = t738AppendixTommTrial2Range;
        break;
      case 739:
        val = t739AppendixTommRetentionTrialRange;
        break;
      default:
        val = "";
    }
    return val;
  };

  return `
    <!doctype html>
      <html>
         <head>
            <meta charset="utf-8">
            <title>PDF Result Template</title>
            <script>
              function subst() {
                var vars={};
                var x=window.location.search.substring(1).split('&');
                for (var i in x) {var z=x[i].split('=',2);vars[z[0]] = unescape(z[1]);}
                var x=['frompage','topage','page','webpage','section','subsection','subsubsection'];
                for (var i in x) {
                  var y = document.getElementsByClassName(x[i]);
                  for (var j=0; j<y.length; ++j) y[j].textContent = vars[x[i]];
                }
              }
            </script>
            <style>
              html {
                font-size: 62.5%;
              }
              html {
                  font-family: "Lato", sans-serif;
                  line-height: 1.15;
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
              }
              body {
                background-color: white;
                font-size: 12pt;
                font-family: "Lato", sans-serif;
              }
              article,
              aside,
              footer,
              header,
              nav,
              section {
                display: block;
              }

              .pdf-t {
                background-color: white;
                font-size: 10pt;
                font-family: "Lato", sans-serif;
                margin: 0.25in 0.125in;
              }
              .pdf-t p {
                flex: 1 1 100%;
                font-size: 10pt;
                line-height: 11pt;
                margin: 0 0 0.0625in 0;
              }
              .pdf-t main {
                margin: 0 0.5in;
              }
              .pdf-t main h1 {
                font-size: 18pt;
                font-weight: 700;
                margin: 0.25in 0;
              }
              .pdf-t main section {
                // display: flex;
                // flex-flow: wrap;
                display: table;
              }
              .pdf-t main section h2 {
                flex: 1 1 100%;
                font-size: 16pt;
                font-weight: 700;
                margin: 0.25in 0 0.125in;
              }
              .pdf-t main section h3 {
                color: #666;
                flex: 1 1 100%;
                font-weight: 700;
                font-size: 12pt;
                margin: 0.25in 0 0.125in;
                text-transform: uppercase;
              }
              .pdf-t main section p em {
                color: #007cb3;
              }
              .pdf-t main section .bell-curve {
                margin-top: 45px;
                max-width: 100%;
              }
              .pdf-t main section ul {
                flex: 1 1 100%;
                margin: 0;
                list-style: none;
                padding: 0 0 0 12px;
                width: 100%;
              }
              .pdf-t main section ul li {
                font-size: 10pt;
                font-weight: 700;
                line-height: 12pt;
                margin-bottom: 6pt;
                margin-left: 0.0625in;
                margin-right: 0;
                position: relative;
                width: 100%;
              }
              .pdf-t main section ul li p {
                font-size: 10pt;
                margin-left: 0;
                margin-right: 0;
              }
              .pdf-t main section ul li em {
                font-weight: 400;
              }
              .pdf-t main section ul li a {
                font-size: 10pt;
              }
              .pdf-t main section ul li ul li {
                font-weight: 500;
                margin-top: 9px;
              }
              .pdf-t main section ul li ul li > ul > li:before {
                content: "";
                border-color: #d4ce15;
                position: absolute;
                top: 3px;
                left: -0.1875in;
              }
              .pdf-t main section ul li ul li:before {
                content: "";
                border: 4px solid hotpink;
                border-radius: 50%;
                position: absolute;
                top: 3px;
                left: -0.1875in;
              }
              .pdf-t main section ul li:before {
                content: "";
                border: 4px solid #39a4d4;
                border-radius: 50%;
                position: absolute;
                top: 3px;
                left: -0.1875in;
              }
              .pdf-t main section table {
                width: 100%;
                line-height: inherit;
                text-align: left;
                vertical-align: top;
                }
              .pdf-t main section table td {
                vertical-align: top;
              }
              .pdf-t main section table td.col2eq {
                width: 400px
              }
              .pdf-t main section table div p,
              .pdf-t main section div p {
                color: #007cb3;
                font-style: italic;
              }
              .pdf-t main section table div p span,
              .pdf-t main section div p span {
                color: black;
                font-style: normal;
              }
              .pdf-t main section .test-table {
                font-family: "Lato", sans-serif;
              }
              .pdf-t main section table.test-table {
                border-collapse: collapse;
                font-family: "Lato", sans-serif;
                font-size: 9pt;
                width: 100%;
              }
              .pdf-t main section .test-table td, .pdf-t main section .test-table th {
                border-bottom: 1px solid #a3a3a3;
                font-size: 9pt;
                font-weight: normal;
                text-align: left;
                padding: 15px 0;
              }
              .pdf-t main section .test-table th {
                color: #39a4d4;
                vertical-align: bottom;
              }
              .pdf-t main section .test-table .table__row.table__header {
                border-bottom: 1px solid #a3a3a3;
                font-size: 9pt;
                color: #39a4d4;
                padding: 9px 0;
              }
              .pdf-t main section .test-table .table__row {
                border-bottom: 1px solid #a3a3a3;
                color: #474747;
                font-size: 9pt;
                margin: 9px 0 0;
                padding-bottom: 9px;
              }
              .pdf-t main section .test-table .table__row li {
                font-size: 9pt !important;
                line-height: 11pt !important;
                margin-bottom: 6pt !important;
              }
              .pdf-t main section .test-table .table__row > div:nth-child(1) {
                flex: 0 0 220px;
                margin-right: 18px;
              }
              .pdf-t main section .test-table .table__row > div:nth-child(2) {
                flex: 1 1 100px;
                margin-right: 18px;
              }
              .pdf-t main section .test-table .table__row > div:nth-child(3) {
                flex: 1 1 100px;
                margin-right: 18px;
              }
              .pdf-t main section .test-table .table__row > div:nth-child(4) {
                flex: 1 1 100px;
                margin-right: 18px;
              }
              .pdf-t main section .test-table .table__row > div:nth-child(5) {
                flex: 1 1 100px;
              }
              .pdf-t main section .test-table .table__row ul {
                margin-top: 0;
              }
              .pdf-t main section .test-table .table__row ul li {
                font-size: 12pt;
                font-weight: normal;
                line-height: 14pt;
                margin-bottom: 6pt;
              }
              .pdf-t main section .test-table.test-table-cols4-equal .table__row > div {
                flex: 1 1 25%;
              }
              .pdf-t main section .test-table.test-table-cols4-equal.test-table-cols4--4th-col-narrow .table__row > div:nth-child(4) {
                flex: 1 1 50px;
              }
              .pdf-t main section .test-table.test-table--col3-scores .table__row > div:nth-child(1) {
                flex: 1 0 220px;
              }
              .pdf-t main section .test-table.test-table--col3-scores .table__row > div:nth-child(2) {
                flex: 1 0 100px;
              }
              .pdf-t main section .test-table.test-table--col3-scores .table__row > div:nth-child(2) {
                flex: 1 0 100px;
              }

              .appendices, .appendix, .test-table.test-table--appendix {
                width: 100%;
              }
              
              .pdf-t main section .test-table.test-table--appendix .table__row--last {
                border-bottom: 1px solid #a3a3a3;
                margin-bottom: 36px;
              }
              .pdf-t main section .domain__test {
                margin-top: 0.5in;
              }
              .pdf-t main section .domain__test h3 {
                color: #39a4d4;
                font-size: 12pt;
                font-weight: normal;
                margin-bottom: 9px;
              }
              .pdf-t main section .domain__test h3 .h3--sib-h4 {
                margin-bottom: 18px;
              }
              .pdf-t main section .domain__test h3 + .flex > h4, .pdf-t main section .domain__test h3 + .flex--space-between > h4, .pdf-t main section .domain__test h3 + .flex--center > h4, .pdf-t main section .domain__test h3 + .flex--stretch > h4, .pdf-t main section .domain__test h3 + .flex--center-vertical > h4, .pdf-t main section .domain__test h3 + .flex--wrap > h4, .pdf-t main section .domain__test h3 + .flex--flex-end > h4, .pdf-t main section .domain__test h3 + .flex--col > h4, .pdf-t main section .domain__test h3 + .flex--align-items-end > h4 {
                margin-bottom: 72px;
              }
              .pdf-t main section .domain__test h4, 
              .appendices .appendix h4 {
                color: #464646;
                display: inline-block;
                font-family: "Lato", "Montserrat", sans-serif;
                font-size: 12pt;
                margin-bottom: 0.125in !important;
                margin-top: 0;
                text-transform: capitalize;
              }
              .pdf-t main section .domain__test h5 {
                color: #777;
                font-family: "Montserrat", sans-serif;
                font-size: 12pt;
                margin: 36px 0 9px;
                text-transform: uppercase;
              }
              .pdf-t main section .test-table h5 {
                color: #777;
                font-family: "Montserrat", sans-serif;
                font-size: 12pt;
                margin: 36px 0 9px;
                text-transform: uppercase;
              }
              .pdf-t main section .domain__test h5 .lowercase,
              .pdf-t main section .domain__test h5 > span {
                text-transform: none;
              }
              .pdf-t main section .domain__test h6 + h5 {
                margin: 9px 0;
              }
              .pdf-t main section .domain__test h6 {
                color: #39a4d4;
                font-family: "Lato", "Merriweather", "Georgia", serif;
                font-size: 15pt;
                font-style: italic;
                font-weight: normal;
                margin: 0px;
                text-transform: capitalize;
              }
              .pdf-t main section .test-table h6,
              .pdf-t .appendices .appendix h6 {
                color: #222;
                font-family: "Lato", "Merriweather", "Georgia", serif;
                font-size: 12pt;
                font-style: italic;
                font-weight: normal;
                margin: 36px 0 0;
                text-transform: capitalize;
              }
              .pdf-t .appendices .appendix h6:first-of-type {
                margin-top: 18px;
              }
              .pdf-t main section .domain__test h5 ~ h6,
              .pdf-t .appendices .appendix h5 ~ h6 {
                margin-top: 18px;
              }
              .pdf-t main section .domain__test span.h7,
              .appendices .appendix span.h7 {
                color: #464646;
                font-weight: bold;
                font-size: 8pt;
              }
              .pdf-t main section .domain__test p {
                color: black;
                font-family: "Lato", "Merriweather", "Georgia", serif;
                font-size: 9pt;
                font-style: normal;
                line-height: 11pt;
              }
              .pdf-t main section .domain__test hr {
                margin: 36px auto;
                width: 1.5in;
              }
              .pdf-t main section .primary-caregiver {
                display: flex;
                flex: 1 1 100%;
                align-items: center;
              }
              .pdf-t main section .primary-caregiver h3 {
                flex: 0 1 auto;
              }
              .pdf-t main section .primary-caregiver > span {
                background-color: #00a6d8;
                border-radius: 0.0375in;
                color: white;
                display: none;
                font-weight: 700;
                opacity: 0;
                margin-top: 0.125in;
                margin-left: 0.25in;
                padding: 0.0625in 0.125in;
                transition: all 250ms ease-in-out;
              }
              .pdf-t main section .primary-caregiver--active {
                display: block;
              }
              .pdf-t main section .primary-caregiver--active h3 {
                display: inline-block;
              }
              .pdf-t main section .primary-caregiver--active > span {
                border-radius: 0.0375in;
                background-color: #00a6d8;
                color: white;
                display: inline-block;
                font-weight: 700;
                margin-top: 0.125in;
                margin-left: 0.25in;
                opacity: 1;
                padding: 0.0625in 0.125in;
              }
              .pdf-t main section.li-not-bold li {
                font-weight: 400;
              }
              .pdf-t main section.no-flex {
                display: block;
                flex-flow: unset;
              }
              
              .pdf-t main section.recommendations {
                display: block;
              }
              .flex, .flex--space-between, .flex--center, .flex--stretch, .flex--center-vertical, .flex--wrap, .flex--flex-end, .flex--col, .flex--align-items-end,
              .flex--space-between,
              .flex--center,
              .flex--stretch,
              .flex--center-vertical,
              .flex--wrap,
              .flex--flex-end,
              .flex--col,
              .flex--align-items-end {
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
                -webkit-flex-wrap: nowrap;
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
                -webkit-justify-content: flex-start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                -webkit-align-content: stretch;
                -ms-flex-line-pack: stretch;
                align-content: stretch;
                -webkit-align-items: flex-start;
                -ms-flex-align: start;
                align-items: flex-start;
              }

              .flex--center-vertical {
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;
              }

              .appendices .appendix {
                margin: 0.25in 0;
                margin-bottom: 0.5in !important;
              }
              .appendices .appendix:first-of-type {
                margin: 0;
              }
              .appendices h2 {
                font-size: 18pt;
              }
              .appendices .appendix h2 {
                flex: 0 1 auto;
                font-size: 18pt;
                margin: 0;
              }
              .appendices .appendix h4 {
                font-size: 14pt;
              }
              .appendices .appendix h5 {
                color: #777;
                font-family: "Montserrat", sans-serif;
                font-size: 12pt;
                margin: 0.125in 0 0;
                text-transform: capitalize;
              }
              .appendices .appendix h5:first-of-type {
                margin: 0.25in 0 0;
              }
              .appendices .appendix span.h7 + .test-table--appendix > h5:first-of-type {
                margin: 0.125in 0 0;
              }
              .appendices .appendix h4 + h5 {
                margin: 0.125in 0 0;
              }
              .appendices .appendix .parentGroupSubScale__parentGroupSubScaleName + h5 {
                margin: 0;
              }
              .appendices .appendix .parentGroupSubScale__parentGroupSubScaleName {
                margin: 0.25in 0 0;
              }
              .appendices .appendix .test-table--appendix {
                border-bottom: 1px solid #a3a3a3;
              }
              .appendices .appendix .test-table--appendix h3 {
                color: #666;
                font-size: 16pt;
                text-transform: capitalize;
              }
              .appendices .appendix .test-table--appendix h3 > span {
                color: black;
              }
              .appendices .appendix .test-table--appendix h6 {
                color: #666;
                font-size: 15pt;
                font-weight: normal;
                margin: 0 0 0.125in;
              }
              .appendices .appendix .test-table.test-table--appendix .table__row.table__header {
                border-top: none;
                border-bottom: none;
                font-size: 12pt;
                padding: 0;
              }
              .appendices .appendix .test-table.test-table--appendix .table__row {
                border-top: none;
                border-bottom: none;
                font-size: 12pt;
              }
              .pdf-t main section .test-table.test-table--appendix td {
                border-bottom: none;
                font-size: 9pt;
                font-weight: normal;
                text-align: left;
                padding: 0 0 9px 0;
              }
              .pdf-t main section .test-table.test-table--appendix th {
                border-bottom: none;
                font-size: 9pt;
                font-weight: normal;
                padding: 0.125in 0 6px 0;
                text-align: left;
              }
              
              #footer {
                align-items: center;
                font-family: "Lato", Helvetica, Arial, sans-serif;
                font-size: 9pt;
                font-weight: 300;
                width: 550px;
                margin-top: 40px;
              }
              #footer p {
                float: left;
                font-size: 9pt;
                font-weight: 300;
                margin-left: 60px;
                margin-top: 20px;
              }
              #footer p span {
                text-transform: capitalize;
              }
              #footer .footer__page-num {
                font-size: 10pt;
                float: right;
                background-color: #39a4d4;
                border-radius: 50%;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 30px;
                width: 35px;
              }
              .header-footer__slash {
                color: #39a4d4;
                font-weight: 700;
              }
              
              #header {
                margin-left: 0.125in;
              }
              #header > div {
                margin-left: 0.3in;
              }
              #header div {
                font-family: "Lato", Helvetica, Arial, sans-serif;
                font-size: 7.5pt;
                line-height:8.5pt;
                font-weight: 400;
              }
              #header .header__logo {
                vertical-align: middle;
                width: 150px;
                margin-left: 0px;
              }
              #header .header__text {
                vertical-align: middle;
                margin-top: 7px;
                margin-right: 50px;
              }
              @page {
                size: 8.5in 11in;
                margin-top: 2cm;
                margin-bottom: 2cm;
                margin-left: 2cm;
                margin-right: 2cm;
              }
              
            </style>
         </head>
         <body id="html-pdf-template" class="pdf-t" onload="subst()">
          <header id="header" class="flex flex--center-vertical">
            <img class="header__logo" src="http://www.lrtico.com/on/img/logo.png" alt="logo">
            <div class="header__text" style="margin-left:.3in;">
              <div>
                <span>Phone +1 (310) 207-1720</span>
                <span class="header-footer__slash">/</span>
                <span>Fax +1 (310) 207-1638</span>
              </div>
              <div>
                <span>11633 San Vincente Blvd. #106</span>
                <span class="header-footer__slash">/</span>
                <span>hello@oneneuro.com</span>
                <span>www.oneneuro.com</span>
              </div>
            </div>
          </header>
          <main>
            <h1>Confidential Neuropsychological Evaluation</h1>
            <section>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td class="col2eq">
                    <div>
                      ${
                        diName !== null
                          ? `<p>Name: <span>${diName}</span></p>`
                          : null
                      }
                      <p>Date of Birth: <span>${diDateofbirth}</span></p>
                      <p>Age: <span>${diAge}</span></p>
                      <p>Gender: <span>${diGender}</span></p>
                      <p>Handedness: <span>${diHandedness}</span></p>
                    </div>
                  </td>
                  <td class="col2eq">
                    <div>
                      <p>Place of Evaluation: <span>${diEvaluationlocation}</span></p>
                      <p>Date(s) of Evaluation: 
                        <ul>
                          ${
                            diDateoftesting !== undefined
                              ? diDateoftesting
                                  .map(
                                    date =>
                                      `<li>${date.title}, ${date.date}</li>`
                                  )
                                  .join("")
                              : null
                          }
                        </ul>
                      </p>
                      <p>Evaluator's Name: <span>${diEvaluator}</span></p>
                      <p>School: <span>${diSchool}</span></p>
                      <p>Grade: <span>${diGrade}</span></p>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Person Answering Questions</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td class="col2eq">
                    <div>
                      ${
                        paqName !== null
                          ? `<p>Name: <span>${paqName}</span></p>`
                          : null
                      }
                      <p>Relationship to the child: <span>${paqGuardian}</span></p>
                      <p>Cell phone: <span>${paqCellPhone}</span></p>
                    </div>
                  </td>
                  <td class="col2eq">
                    <div>
                      <p>Address: <span>${paqAddress}</span></p>
                      <p>Home phone: <span>${paqHomePhone}</span></p>
                      <p>Work phone: <span>${paqWorkPhone}</span></p>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Reason for Referral</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <ul>
                        ${
                          reasonReferral1 !== null
                            ? `<li>${reasonReferral1}</li>`
                            : null
                        }
                        ${
                          reasonReferral2 !== null
                            ? `<li>${reasonReferral2}</li>`
                            : null
                        }
                        ${
                          reasonReferral3 !== null
                            ? `<li>${reasonReferral3}</li>`
                            : null
                        }
                      </ul>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            ${
              wizardForm5Disabled !== true && recordsReviewed !== undefined
                ? `<section>
                <h2>Records Reviewed</h2>
                <table cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <div>
                        <ul>
                          ${
                            recordsReviewed !== undefined
                              ? recordsReviewed
                                  .map(
                                    record =>
                                      `<li>${record.title}, Report dated: ${
                                        record.date
                                      }</li>`
                                  )
                                  .join("")
                              : ""
                          }
                        </ul>
                      </div>
                    </td>
                  </tr>
                </table>
              </section>`
                : ""
            }
            ${
              wizardForm6Disabled !== true ||
              wizardForm7Disabled !== true ||
              wizardForm8Disabled !== true
                ? `<section>
            <h2>Background Information</h2>
            <p><em>The following background information was obtained from a clinical interview with ${diEvaluator}.</em></p>
            ${
              wizardForm6Disabled !== true
                ? `${
                    bhPrimaryCaregiverMother !== undefined &&
                    bhPrimaryCaregiverMother === true
                      ? `<div class="primary-caregiver--active"><h3>Mother</h3><span>Primary caregiver</span></div>`
                      : `<h3>Mother</h3>`
                  }
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div>
                    ${
                      bhMotherName !== undefined
                        ? `<p>Name: <span>${bhMotherName}</span></p>`
                        : ""
                    }
                    ${
                      bhStepmother === "Yes"
                        ? `<p>Relationship: <span>Stepmother</span></p>`
                        : `<p>Relationship: <span>Mother</span></p>`
                    }
                    ${
                      bhMotherCellPhone !== undefined
                        ? `<p>Cell phone: <span>${bhMotherCellPhone}</span></p>`
                        : ""
                    }
                    ${
                      bhMotherOccupation !== undefined
                        ? `<p>Occupation: <span>${bhMotherOccupation}</span></p>`
                        : ""
                    }
                    ${
                      bhMotherLengthEmployement !== undefined
                        ? `<p>Years: <span>${bhMotherLengthEmployement}</span></p>`
                        : ""
                    }
                    ${
                      bhMotherPrimaryLanguage !== undefined
                        ? `<p>Primary language: <span>${bhMotherPrimaryLanguage}</span></p>`
                        : ""
                    }
                  </div>
                </td>
                <td>
                  <div>
                    ${
                      bhMotherAge !== undefined
                        ? `<p>Age: <span>${bhMotherAge}</span></p>`
                        : ""
                    }
                    ${
                      bhMotherHomePhone !== undefined
                        ? `<p>Home phone: <span>${bhMotherHomePhone}</span></p>`
                        : ""
                    }
                    ${
                      bhMotherWorkPhone !== undefined
                        ? `<p>Work phone: <span>${bhMotherWorkPhone}</span></p>`
                        : ""
                    }
                    ${
                      bhMotherEmployer !== undefined
                        ? `<p>Employer: <span>${bhMotherEmployer}</span></p>`
                        : ""
                    }
                    ${
                      bhMotherHighestGrade !== undefined
                        ? `<p>Highest grade: <span>${bhMotherHighestGrade}</span></p>`
                        : ""
                    }
                    ${
                      bhMotherSecondaryLanguage !== undefined
                        ? `<p>Secondary language: <span>${bhMotherSecondaryLanguage}</span></p>`
                        : ""
                    }
                  </div>
                </td>
              </tr>
            </table>`
                : ""
            }

            ${
              wizardForm7Disabled !== true
                ? `${
                    bhPrimaryCaregiverFather !== undefined &&
                    bhPrimaryCaregiverFather === true
                      ? `<div class="primary-caregiver--active"><h3>Father</h3><span>Primary caregiver</span></div>`
                      : `<h3>Father</h3>`
                  }
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div>
                    ${
                      bhFatherName !== undefined
                        ? `<p>Name: <span>${bhFatherName}</span></p>`
                        : ""
                    }
                    ${
                      bhStepfather === "Yes"
                        ? `<p>Relationship: <span>Stepfather</span></p>`
                        : `<p>Relationship: <span>Father</span></p>`
                    }
                    ${
                      bhFatherCellPhone !== undefined
                        ? `<p>Cell phone: <span>${bhFatherCellPhone}</span></p>`
                        : ""
                    }
                    ${
                      bhFatherOccupation !== undefined
                        ? `<p>Occupation: <span>${bhFatherOccupation}</span></p>`
                        : ""
                    }
                    ${
                      bhFatherLengthEmployement !== undefined
                        ? `<p>Years: <span>${bhFatherLengthEmployement}</span></p>`
                        : ""
                    }
                    ${
                      bhFatherPrimaryLanguage !== undefined
                        ? `<p>Primarylanguage: <span>${bhFatherPrimaryLanguage}</span></p>`
                        : ""
                    }
                  </div>
                </td>
                <td>
                  <div>
                    ${
                      bhFatherAge !== undefined
                        ? `<p>Age: <span>${bhFatherAge}</span></p>`
                        : ""
                    }
                    ${
                      bhFatherHomePhone !== undefined
                        ? `<p>Home phone: <span>${bhFatherHomePhone}</span></p>`
                        : ""
                    }
                    ${
                      bhFatherWorkPhone !== undefined
                        ? `<p>Work phone: <span>${bhFatherWorkPhone}</span></p>`
                        : ""
                    }
                    ${
                      bhFatherEmployer !== undefined
                        ? `<p>Employer: <span>${bhFatherEmployer}</span></p>`
                        : ""
                    }
                    ${
                      bhFatherHighestGrade !== undefined
                        ? `<p>Highest grade: <span>${bhFatherHighestGrade}</span></p>`
                        : ""
                    }
                    ${
                      bhFatherSecondaryLanguage !== undefined
                        ? `<p>Secondary language: <span>${bhFatherSecondaryLanguage}</span></p>`
                        : ""
                    }
                  </div>
                </td>
              </tr>
            </table>`
                : ""
            }
            ${
              wizardForm8Disabled !== true
                ? `<h3>Primary Caregiver Not Mother or Father</h3>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        bhPrimaryCaregiverName !== undefined
                          ? `<p>Name: <span>${bhPrimaryCaregiverName}</span></p>`
                          : ""
                      }
                      ${
                        bhOtherParentStepparentAge !== undefined
                          ? `<p>Age: <span>${bhOtherParentStepparentAge}</span></p>`
                          : ""
                      }
                      ${
                        bhOtherParentStepparentGuardian !== undefined
                          ? `<p>Relationship: <span>${bhOtherParentStepparentGuardian}</span></p>`
                          : ""
                      }
                      ${
                        bhOtherParentStepparentHomePhone !== undefined
                          ? `<p>Home phone: <span>${bhOtherParentStepparentHomePhone}</span></p>`
                          : ""
                      }
                      ${
                        bhOtherParentStepparentWorkPhone !== undefined
                          ? `<p>Work phone: <span>${bhOtherParentStepparentWorkPhone}</span></p>`
                          : ""
                      }
                      ${
                        bhOtherParentStepparentCellPhone !== undefined
                          ? `<p>Cell phone: <span>${bhOtherParentStepparentCellPhone}</span></p>`
                          : ""
                      }
                      ${
                        bhOtherParentStepparentAddress !== undefined
                          ? `<p>Address: <span>${bhOtherParentStepparentAddress}</span></p>`
                          : ""
                      }
                    </div>
                  </td>
                </tr> 
              </table>`
                : ""
            }
          </section>`
                : ""
            }

            ${
              wizardForm9Disabled !== true
                ? `<section>
            <h2>Childcare Information</h2>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div>
                    ${
                      ccCaregiverGone !== undefined
                        ? `<p>Who takes care of this child if the caregivers are gone? <span>${ccCaregiverGone}</span></p>`
                        : ""
                    }
                    ${
                      ccHoursPerDay !== undefined
                        ? `<p>How many hours per day is this child in a childcare setting? <span>${ccHoursPerDay}</span></p>`
                        : ""
                    }
                    ${
                      ccDifferentPeople !== undefined
                        ? `<p>Who are the different individuals that care for this child? <span>${ccDifferentPeople}</span></p>`
                        : ""
                    }
                  </div>
                </td>
              </tr>
            </table>
          </section>`
                : ""
            }

            ${
              wizardForm10Disabled !== true
                ? `<section>
            <h2>Family History</h2>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div>
                    ${
                      fhCloseness !== undefined
                        ? `<p>Is this child closer to one parent than the other? <span>${fhCloseness}</span></p>`
                        : ""
                    }
                    ${
                      fhCloseness === "Yes"
                        ? `<p>If yes, which one? <span>${fhParentalClosenessChoice}</span></p>`
                        : ""
                    }
                    ${
                      fhExperienced !== undefined
                        ? `<p>Has this child ever experienced any parental separations, divorces, or deaths? <span>${fhExperienced}</span></p>`
                        : ""
                    }
                    ${
                      fhExperienced === "Yes"
                        ? `
                            <p>If yes, when? <span>${fhLifeExperiencesDate}</span></p>
                            <p>Child's age at the time? <span>${fhLifeExperiencesAge}</span></p>
                            <p>Please describe the circumstances.  <span>${fhLifeExperiencesDetails}</span></p>
                          `
                        : ""
                    }
                    ${
                      fhCustodyMother === true ||
                      fhCustodyFather === true ||
                      fhCustodyBoth === true
                        ? `<p>Who has custody of this child? <span>${
                            fhCustodyMother === true ? "Mother" : ""
                          }${fhCustodyFather === true ? "Father" : ""}${
                            fhCustodyBoth === true ? "Both" : ""
                          }</span></p>`
                        : ""
                    }
                    ${
                      fhVisitation !== undefined
                        ? `<p>How often does one parent see this child? <span>${fhVisitation}</span></p>`
                        : ""
                    }
                  </div>
                </td>
              </tr>
            </table>
          </section>`
                : ""
            }

            ${
              wizardForm11Disabled !== true
                ? `<section>
            <h2>Siblings</h2>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div>
                    <ul>
                      ${
                        brothersSisters !== undefined
                          ? brothersSisters
                              .map(
                                sib =>
                                  `<li>
                                  <p>
                                    <span>
                                        ${sib.relationship},
                                    </span>
                                        <span>${sib.age} years old, </span>
                                    <span>
                                        ${
                                          sib.home === "Yes"
                                            ? `lives at home`
                                            : `does not live at home`
                                        }
                                    </span>
                                </p>
                            </li>`
                              )
                              .join("")
                          : ""
                      }
                    </ul>
                    <div>
                      ${
                        bsGetAlong !== undefined
                          ? `<p>How does this child get along with brother(s) and/or sister(s)? <span>${bsGetAlong}</span></p>`
                          : ""
                      }
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </section>`
                : ""
            }

            ${
              wizardForm12Disabled !== true
                ? `
                    <section>
                      <h2>Child’s Residence</h2>
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <div>
                              ${
                                crResidence !== undefined
                                  ? `<p>Where does this child live? <span>${crResidence}</span></p>`
                                  : ""
                              }
                              ${
                                crResidenceLength !== undefined
                                  ? `<p>How many years living at the current address? <span>${crResidenceLength}</span></p>`
                                  : ""
                              }
                            </div>
                          </td>
                        </tr>
                      </table>
                    </section>
                  `
                : ""
            }

            ${
              wizardForm13Disabled !== true
                ? `<section>
            <h2>Family Residence</h2>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div>
                    ${
                      frMovies !== undefined ||
                      frGames !== undefined ||
                      frMeals !== undefined ||
                      frSports !== undefined ||
                      frConversations !== undefined ||
                      frVisitsRelatives !== undefined ||
                      frTelevision !== undefined ||
                      frChurch !== undefined ||
                      frOther !== undefined
                        ? `<p>All the activities in which this child often participates with the family is:</p>`
                        : ""
                    }
                    <ul>
                      ${frMovies === true ? `<li>Movies</li>` : ""}
                      ${frGames === true ? `<li>Games</li>` : ""}
                      ${frMeals === true ? `<li>Meals</li>` : ""}
                      ${frSports === true ? `<li>Sports</li>` : ""}
                      ${
                        frConversations === true ? `<li>Conversations</li>` : ""
                      }
                      ${
                        frVisitsRelatives === true
                          ? `<li>Visits with relatives</li>`
                          : ""
                      }
                      ${frTelevision === true ? `<li>Television</li>` : ""}
                      ${frChurch === true ? `<li>Church</li>` : ""}
                      ${frOther === true ? `<li>Other</li>` : ""}
                    </ul>
                    ${
                      frSpokenLanguage !== undefined
                        ? `<p>What is the language spoken at home? <span>${frSpokenLanguage}</span></p>`
                        : ""
                    }
                    ${
                      frGrandparentFrequency !== undefined
                        ? `<p>How frequently does this child see grandparents? <span>${frGrandparentFrequency}</span></p>`
                        : ""
                    }
                    ${
                      frEnjoy !== undefined
                        ? `<p>What do you most enjoy about this child? <span>${frEnjoy}</span></p>`
                        : ""
                    }
                    ${
                      frDifficult !== undefined
                        ? `<p>What do you find most difficult about raising this child? <span>${frDifficult}</span></p>`
                        : ""
                    }
                    ${
                      frCareer !== undefined
                        ? `<p>What would you like this child to be when he grows up? <span>${frCareer}</span></p>`
                        : ""
                    }
                    ${
                      frEducationLevel !== undefined
                        ? `<p>What level of education do you hope this child will complete? <span>${frEducationLevel}</span></p>`
                        : ""
                    }
                    ${
                      frDisciplinarian !== undefined &&
                      frDisciplinarian === "Other"
                        ? `<p>Who is mainly in charge of discipline in the home? <span>${frDisciplinarianOtherDesc}</span></p>`
                        : frDisciplinarian !== undefined
                        ? `<p>Who is mainly in charge of discipline in the home? <span>${frDisciplinarian}</span></p>`
                        : ""
                    }
                    ${
                      frAgreeDiscipline !== undefined
                        ? `<p>Do all caregivers agree on discipline? <span>${frAgreeDiscipline}</span></p>`
                        : ""
                    }
                    ${
                      frDisciplineTechniques !== undefined
                        ? `<p>Please describe discipline techniques? <span>${frDisciplineTechniques}</span></p>`
                        : ""
                    }
                  </div>
                </td>
              </tr>
            </table>
          </section>`
                : ""
            }

            ${
              wizardForm14Disabled !== true
                ? `<section>
            <h2>Medical & Development History</h2>
            <h3>Pregnancy</h3>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div>
                    ${
                      mdhPlannedPregnancy !== undefined
                        ? `<p>Was this child a planned pregnancy? <span>${mdhPlannedPregnancy}</span></p>`
                        : ""
                    }
                    ${
                      mdhDrCare !== undefined
                        ? `<p>Was the mother under doctor’s care? <span>${mdhDrCare}</span></p>`
                        : ""
                    }
                    ${
                      mdhTotalPregnancies !== undefined
                        ? `<p>The number of previous pregnancies/miscarriages? <span>${mdhTotalPregnancies}</span></p>`
                        : ""
                    }
                    ${
                      mdhPregnancyDifficultConception === true ||
                      mdhPregnancyToxemia === true ||
                      mdhPregnancyWeightGain === true ||
                      mdhPregnancyVomiting === true ||
                      mdhPregnancyGermanMeasels === true ||
                      mdhPregnancySwelling === true ||
                      mdhPregnancyEmotional === true ||
                      mdhPregnancyVaginalBleeding === true ||
                      mdhPregnancyFlu === true ||
                      mdhPregnancyAnemia === true ||
                      mdhPregnancyBloodPressure === true ||
                      mdhPregnancyInjury === true ||
                      mdhOtherComplication === true
                        ? `<p>Complications that occurred during pregnancy:</p>
                    <ul>
                      ${
                        mdhPregnancyDifficultConception === true
                          ? `<li>Difficulty in conception</li>`
                          : ""
                      }
                      ${mdhPregnancyToxemia === true ? `<li>Toxemia</li>` : ""}
                      ${
                        mdhPregnancyWeightGain === true
                          ? `<li>Abnormal weight gain</li>`
                          : ""
                      }
                      ${
                        mdhPregnancyVomiting === true
                          ? `<li>Excessive vomiting</li>`
                          : ""
                      }
                      ${
                        mdhPregnancyGermanMeasels === true
                          ? `<li>German measels</li>`
                          : ""
                      }
                      ${
                        mdhPregnancySwelling === true
                          ? `<li>Excessive swelling</li>`
                          : ""
                      }
                      ${
                        mdhPregnancyEmotional === true
                          ? `<li>Emotional problems</li>`
                          : ""
                      }
                      ${
                        mdhPregnancyVaginalBleeding === true
                          ? `<li>Vaginal bleeding</li>`
                          : ""
                      }
                      ${mdhPregnancyFlu === true ? `<li>Flu</li>` : ""}
                      ${mdhPregnancyAnemia === true ? `<li>Anemia</li>` : ""}
                      ${
                        mdhPregnancyBloodPressure === true
                          ? `<li>High blood pressure</li>`
                          : ""
                      }
                      ${
                        mdhPregnancyInjury === true
                          ? `<li>Maternal injury</li>`
                          : ""
                      }
                      ${
                        mdhOtherComplication === true
                          ? `<li>${mdhOtherComplicationDescription}</li>`
                          : ""
                      }
                    </ul>`
                        : ""
                    }
                  </div>
                </td>
              </tr>
            </table>
          </section>`
                : ""
            }

            ${
              wizardForm15Disabled !== true
                ? `<section>
            <h3>Birth</h3>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div>
                    ${
                      mdhMothersAge !== undefined
                        ? `<p>At this child’s birth, what was the mother’s age? <span>${mdhMothersAge}</span></p>`
                        : ""
                    }
                    ${
                      mdhFathersAge !== undefined
                        ? `<p>Father’s? <span>${mdhFathersAge}</span></p>`
                        : ""
                    }
                    ${
                      mdhMothersAgeFirstChild !== undefined
                        ? `<p>Mother’s age at birth of first child: <span>${mdhMothersAgeFirstChild}</span></p>`
                        : ""
                    }
                    ${
                      mdhHospitalBirth !== undefined
                        ? `<p>Was this child born in a hospital? <span>${mdhHospitalBirth}</span></p>`
                        : ""
                    }
                    ${
                      mdhHospitalBirth === "No"
                        ? `<p>If no, where? <span>${mdhBirthLocation}</span></p>`
                        : ""
                    }
                    ${
                      mdhPregnancyLength !== undefined
                        ? `<p>Length of pregnancy: <span>${mdhPregnancyLength}</span></p>`
                        : ""
                    }
                    ${
                      mdhBirthWeight !== undefined
                        ? `<p>Birth weight: <span>${mdhBirthWeight}</span></p>`
                        : ""
                    }
                    ${
                      mdhLaborLength !== undefined
                        ? `<p>Length of labor: <span>${mdhLaborLength}</span></p>`
                        : ""
                    }
                    ${
                      mdhApgarScore !== undefined
                        ? `<p>Apgar score: <span>${mdhApgarScore}</span></p>`
                        : ""
                    }
                    ${
                      mdhBirthConditionChild !== undefined
                        ? `<p>Child’s condition at birth: <span>${mdhBirthConditionChild}</span></p>`
                        : ""
                    }
                    ${
                      mdhBirthConditionMother !== undefined
                        ? `<p>Mother’s condition at birth: <span>${mdhBirthConditionMother}</span></p>`
                        : ""
                    }
                    ${
                      mdhForceps === true ||
                      mdhBreech === true ||
                      mdhInduced === true ||
                      mdhCeasarean === true
                        ? `<p>Complications that occurred during birth:</p>
                      <ul>
                        ${mdhForceps === true ? `<li>Forceps</li>` : ""}
                        ${mdhBreech === true ? `<li>Breech</li>` : ""}
                        ${mdhInduced === true ? `<li>Induced</li>` : ""}
                        ${mdhCeasarean === true ? `<li>Ceasarean</li>` : ""}
                      </ul>`
                        : ""
                    }
                    ${
                      mdhDeliveryComplications !== undefined
                        ? `<p>Other deliver complications: <span>${mdhDeliveryComplications}</span></p>`
                        : ""
                    }  
                    ${
                      mdhIncubator !== undefined
                        ? `<p>Incubator: <span>${mdhIncubator}</span></p>`
                        : ""
                    }
                    ${
                      mdhJaundiced !== undefined
                        ? `<p>Jaundiced: <span>${mdhJaundiced}</span></p>`
                        : ""
                    }
                    ${
                      mdhBreathingProblems !== undefined
                        ? `<p>Breathing problems right after birth? <span>${mdhBreathingProblems}</span></p>`
                        : ""
                    }
                    ${
                      mdhSupplementalOxygen !== undefined
                        ? `<p>Supplemental oxygen? <span>${mdhSupplementalOxygen}</span></p>`
                        : ""
                    }
                    ${
                      mdhAnesthesia !== undefined
                        ? `<p>Was anesthesia used during delivery? If so, what kind? <span>${mdhAnesthesia}</span></p>`
                        : ""
                    }
                    ${
                      mdhMotherLengthHospital !== undefined
                        ? `<p>Mother's length of hospital stay? <span>${mdhMotherLengthHospital}</span></p>`
                        : ""
                    }
                    ${
                      mdhChildLengthHospital !== undefined
                        ? `<p>Child's length of hospital stay? <span>${mdhChildLengthHospital}</span></p>`
                        : ""
                    }
                  </div>
                </td>
              </tr>
            </table>
          </section>`
                : ""
            }

            ${
              wizardForm16Disabled !== true
                ? `<section>
            <h2>Development</h2>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div>
                    <p>At what age did this child first do the following?</p>  
                    <ul>
                      ${
                        mdhTurnOverMonths !== undefined ||
                        mdhTurnOverYear !== undefined
                          ? `<li><p>Turn over: ${
                              mdhTurnOverMonths !== undefined
                                ? `<span>${mdhTurnOverMonths} ${
                                    mdhTurnOverMonths === "1"
                                      ? `month`
                                      : `months`
                                  }</span>`
                                : ""
                            } ${
                              mdhTurnOverYear !== undefined
                                ? ` <span>${mdhTurnOverYear} ${
                                    mdhTurnOverYear === "1" ? `year` : `years`
                                  }</span>`
                                : ""
                            }</p></li>`
                          : ""
                      }
                      ${
                        mdhWalkDownStairsMonths !== undefined ||
                        mdhWalkDownStairsYear !== undefined
                          ? `<li><p>Walk down stairs: ${
                              mdhWalkDownStairsMonths !== undefined
                                ? `<span>${mdhWalkDownStairsMonths} ${
                                    mdhWalkDownStairsMonths === "1"
                                      ? `month`
                                      : `months`
                                  }</span>`
                                : ""
                            } ${
                              mdhWalkDownStairsYear !== undefined
                                ? ` <span>${mdhWalkDownStairsYear} ${
                                    mdhWalkDownStairsYear === "1"
                                      ? `year`
                                      : `years`
                                  }</span>`
                                : ""
                            }</p></li>`
                          : ""
                      }
                      ${
                        mdhSitAloneMonths !== undefined ||
                        mdhSitAloneYear !== undefined
                          ? `<li><p>Sit alone: ${
                              mdhSitAloneMonths !== undefined
                                ? `<span>${mdhSitAloneMonths} ${
                                    mdhSitAloneMonths === "1"
                                      ? `month`
                                      : `months`
                                  }</span>`
                                : ""
                            } ${
                              mdhSitAloneYear !== undefined
                                ? ` <span>${mdhSitAloneYear} ${
                                    mdhSitAloneYear === "1" ? `year` : `years`
                                  }</span>`
                                : ""
                            }</p></li>`
                          : ""
                      }
                      ${
                        mdhAttractedSoundMonths !== undefined ||
                        mdhAttractedSoundYear !== undefined
                          ? `<li><p>Show interest in or attraction to sound: ${
                              mdhAttractedSoundMonths !== undefined
                                ? `<span>${mdhAttractedSoundMonths} ${
                                    mdhAttractedSoundMonths === "1"
                                      ? `month`
                                      : `months`
                                  }</span>`
                                : ""
                            } ${
                              mdhAttractedSoundYear !== undefined
                                ? ` <span>${mdhAttractedSoundYear} ${
                                    mdhAttractedSoundYear === "1"
                                      ? `year`
                                      : `years`
                                  }</span>`
                                : ""
                            }</p></li>`
                          : ""
                      }
                      ${
                        mdhCrawlMonths !== undefined ||
                        mdhCrawlYear !== undefined
                          ? `<li><p>Crawl: ${
                              mdhCrawlMonths !== undefined
                                ? `<span>${mdhCrawlMonths} ${
                                    mdhCrawlMonths === "1" ? `month` : `months`
                                  }</span>`
                                : ""
                            } ${
                              mdhCrawlYear !== undefined
                                ? ` <span>${mdhCrawlYear} ${
                                    mdhCrawlYear === "1" ? `year` : `years`
                                  }</span>`
                                : ""
                            }</p></li>`
                          : ""
                      }
                      ${
                        mdhUnderstandWordsMonths !== undefined ||
                        mdhUnderstandWordsYear !== undefined
                          ? `<li><p>Understand first words: ${
                              mdhUnderstandWordsMonths !== undefined
                                ? `<span>${mdhUnderstandWordsMonths} ${
                                    mdhUnderstandWordsMonths === "1"
                                      ? `month`
                                      : `months`
                                  }</span>`
                                : ""
                            } ${
                              mdhUnderstandWordsYear !== undefined
                                ? ` <span>${mdhUnderstandWordsYear} ${
                                    mdhUnderstandWordsYear === "1"
                                      ? `year`
                                      : `years`
                                  }</span>`
                                : ""
                            }</p></li>`
                          : ""
                      }
                      ${
                        mdhStandAloneMonths !== undefined ||
                        mdhStandAloneYear !== undefined
                          ? `<li><p>Stand alone: ${
                              mdhStandAloneMonths !== undefined
                                ? `<span>${mdhStandAloneMonths} ${
                                    mdhStandAloneMonths === "1"
                                      ? `month`
                                      : `months`
                                  }</span>`
                                : ""
                            } ${
                              mdhStandAloneYear !== undefined
                                ? ` <span>${mdhStandAloneYear} ${
                                    mdhStandAloneYear === "1" ? `year` : `years`
                                  }</span>`
                                : ""
                            }</p></li>`
                          : ""
                      }
                      ${
                        mdhSpeakFirstWordsMonths !== undefined ||
                        mdhSpeakFirstWordsYear !== undefined
                          ? `<li><p>Speak first words: ${
                              mdhSpeakFirstWordsMonths !== undefined
                                ? `<span>${mdhSpeakFirstWordsMonths} ${
                                    mdhSpeakFirstWordsMonths === "1"
                                      ? `month`
                                      : `months`
                                  }</span>`
                                : ""
                            } ${
                              mdhSpeakFirstWordsYear !== undefined
                                ? ` <span>${mdhSpeakFirstWordsYear} ${
                                    mdhSpeakFirstWordsYear === "1"
                                      ? `year`
                                      : `years`
                                  }</span>`
                                : ""
                            }</p></li>`
                          : ""
                      }
                      ${
                        mdhWalkAloneMonths !== undefined ||
                        mdhWalkAloneYear !== undefined
                          ? `<li><p>Walk alone: ${
                              mdhWalkAloneMonths !== undefined
                                ? `<span>${mdhWalkAloneMonths} ${
                                    mdhWalkAloneMonths === "1"
                                      ? `month`
                                      : `months`
                                  }</span>`
                                : ""
                            } ${
                              mdhWalkAloneYear !== undefined
                                ? ` <span>${mdhWalkAloneYear} ${
                                    mdhWalkAloneYear === "1" ? `year` : `years`
                                  }</span>`
                                : ""
                            }</p></li>`
                          : ""
                      }
                      ${
                        mdhSpeakSentencesMonths !== undefined ||
                        mdhSpeakSentencesYear !== undefined
                          ? `<li><p>Speak in sentences: ${
                              mdhSpeakSentencesMonths !== undefined
                                ? `<span>${mdhSpeakSentencesMonths} ${
                                    mdhSpeakSentencesMonths === "1"
                                      ? `month`
                                      : `months`
                                  }</span>`
                                : ""
                            } ${
                              mdhSpeakSentencesYear !== undefined
                                ? ` <span>${mdhSpeakSentencesYear} ${
                                    mdhSpeakSentencesYear === "1"
                                      ? `year`
                                      : `years`
                                  }</span>`
                                : ""
                            }</p></li>`
                          : ""
                      }
                      ${
                        mdhWalkUpStairsMonths !== undefined ||
                        mdhWalkUpStairsYear !== undefined
                          ? `<li><p>Walk up stairs: ${
                              mdhWalkUpStairsMonths !== undefined
                                ? `<span>${mdhWalkUpStairsMonths} ${
                                    mdhWalkUpStairsMonths === "1"
                                      ? `month`
                                      : `months`
                                  }</span>`
                                : ""
                            } ${
                              mdhWalkUpStairsYear !== undefined
                                ? ` <span>${mdhWalkUpStairsYear} ${
                                    mdhWalkUpStairsYear === "1"
                                      ? `year`
                                      : `years`
                                  }</span>`
                                : ""
                            }</p></li>`
                          : ""
                      }
                    </ul>
                  </div>
                </td>
              </tr>
            </table>
          </section>`
                : ""
            }

            ${
              wizardForm17Disabled !== true
                ? `<section>
            <h3>Early Years</h3>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div>
                    ${
                      mdhBreastFed !== undefined
                        ? `<p>Was this child breast-fed? <span>${mdhBreastFed}</span></p>`
                        : ""
                    }
                    ${
                      mdhBreastFedWeaned !== undefined
                        ? `<p>When weaned? <span>${mdhBreastFedWeaned}</span></p>`
                        : ""
                    }
                    ${
                      mdhBottleFed !== undefined
                        ? `<p>Was this child bottle-fed? <span>${mdhBottleFed}</span></p>`
                        : ""
                    }
                    ${
                      mdhBottleFedWeaned !== undefined
                        ? `<p>When weaned? <span>${mdhBottleFedWeaned}</span></p>`
                        : ""
                    }
                    ${
                      mdhToiletTrainedDay !== undefined ||
                      mdhToiletTrainedNight !== undefined
                        ? `<p>When was this child toilet trained?</p>
                    <ul>
                    ${
                      mdhToiletTrainedDay !== undefined
                        ? `<li><p>Days: <span>${mdhToiletTrainedDay}</span></p></li>`
                        : ""
                    }
                    ${
                      mdhToiletTrainedNight !== undefined
                        ? `<li><p>Nights: <span>${mdhToiletTrainedNight}</span></p></li>`
                        : ""
                    }
                    </ul>`
                        : ""
                    }
                    ${
                      mdhBedWetting !== undefined
                        ? `<p>Did bed-wetting occur after toilet training? <span>${mdhBedWetting}</span></p>`
                        : ""
                    }
                    ${
                      mdhBedWetting === "Yes"
                        ? `
                            <p>If yes, until what age? <span>${mdhBedWettingStop}</span></p>
                          `
                        : ""
                    }
                    ${
                      mdhBedSoiling !== undefined
                        ? `<p>Did bed-soiling occur? <span>${mdhBedSoiling}</span></p>`
                        : ""
                    }
                    ${
                      mdhBedSoiling === "Yes"
                        ? `
                            <p>If yes, until what age? <span>${mdhBedSoilingStop}</span></p>
                          `
                        : ""
                    }
                    ${
                      mdhBedWettingMedicalReasons !== undefined
                        ? `<p>Were there medical reasons for bed-wetting or bed-soiling? <span>${mdhBedWettingMedicalReasons}</span></p>`
                        : ""
                    }
                    ${
                      mdhBedWettingMedicalReasons === "Yes"
                        ? `
                            <p>If yes, please describe: <span>${mdhBedWettingMedicalReasonsDescription}</span></p>
                          `
                        : ""
                    }
                  </div>
                </td>
              </tr>
            </table>
          </section>`
                : ""
            }

            ${
              wizardForm18Disabled !== true
                ? `<section>
                  <h3>Developmental</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <p>${
                            diName !== undefined ? diName : "Client"
                          } experienced the following problems:</p>  
                          <ul>
                            ${
                              mdhWalkingDifficulty === true
                                ? `<li><p>Walking difficulty${
                                    mdhWalkingDifficultyDescription !==
                                    undefined
                                      ? `: <span>${mdhWalkingDifficultyDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhUnclearSpeech === true
                                ? `<li><p>Unclear speech${
                                    mdhUnclearSpeechDescription !== undefined
                                      ? `: <span>${mdhUnclearSpeechDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhFeedingProblem === true
                                ? `<li><p>Feeding problem${
                                    mdhFeedingProblemDescription !== undefined
                                      ? `: <span>${mdhFeedingProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhUnderweightProblem === true
                                ? `<li><p>Underweight problem${
                                    mdhUnderweightProblemDescription !==
                                    undefined
                                      ? `: <span>${mdhUnderweightProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhOverweightProblem === true
                                ? `<li><p>Overweight problem${
                                    mdhOverweightProblemDescription !==
                                    undefined
                                      ? `: <span>${mdhOverweightProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhColic === true
                                ? `<li><p>Colic${
                                    mdhColicDescription !== undefined
                                      ? `: <span>${mdhColicDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhSleepProblem === true
                                ? `<li><p>Sleep problem${
                                    mdhSleepProblemDescription !== undefined
                                      ? `: <span>${mdhSleepProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhEatingProblem === true
                                ? `<li><p>Eating problem${
                                    mdhEatingProblemDescription !== undefined
                                      ? `: <span>${mdhEatingProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhLearningRideBike === true
                                ? `<li><p>Difficulty learning to ride a bike${
                                    mdhLearningRideBikeDescription !== undefined
                                      ? `: <span>${mdhLearningRideBikeDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhLearningSkip === true
                                ? `<li><p>Difficulty learning how to skip${
                                    mdhLearningSkipDescription !== undefined
                                      ? `: <span>${mdhLearningSkipDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhLearningThrowCatch === true
                                ? `<li><p>Difficulty learning to throw or catch${
                                    mdhLearningThrowCatchDescription !==
                                    undefined
                                      ? `: <span>${mdhLearningThrowCatchDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }

           ${
             wizardForm19Disabled !== true
               ? `<section>
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <div>
                    <p>${
                      diName !== undefined ? diName : "Client"
                    } experienced the following problems:</p>  
                    <ul>
                    ${
                      mdhMotorSkillsFirstFour === true
                        ? `<li><p>Motor skills${
                            mdhMotorSkillsFirstFourDescription !== undefined
                              ? `: <span>${mdhMotorSkillsFirstFourDescription}</span></p></li>`
                              : ""
                          }`
                        : ""
                    }
                    ${
                      mdhTemperTantrum === true
                        ? `<li><p>Temper tantrums${
                            mdhTemperTantrumDescription !== undefined
                              ? `: <span>${mdhTemperTantrumDescription}</span></p></li>`
                              : ""
                          }`
                        : ""
                    }
                    ${
                      mdhNoThriveFirstFour === true
                        ? `<li><p>Failure to thrive${
                            mdhNoThriveFirstFourDescription !== undefined
                              ? `: <span>${mdhNoThriveFirstFourDescription}</span></p></li>`
                              : ""
                          }`
                        : ""
                    }
                    ${
                      mdhSeparationAnxiety === true
                        ? `<li><p>Separating from parents${
                            mdhSeparationAnxietyDescription !== undefined
                              ? `: <span>${mdhSeparationAnxietyDescription}</span></p></li>`
                              : ""
                          }`
                        : ""
                    }
                    ${
                      mdhExcessiveCrying === true
                        ? `<li><p>Excessive crying${
                            mdhExcessiveCryingDescription !== undefined
                              ? `: <span>${mdhExcessiveCryingDescription}</span></p></li>`
                              : ""
                          }`
                        : ""
                    }
                    </ul>
                    ${
                      mdhChangeWritingHand !== undefined
                        ? `<p>Has this child ever been forced to change writing hand? <span>${mdhChangeWritingHand}</span></p>`
                        : ""
                    }
                  </div>
                  </td>
                </tr>
            </table>
            </section>`
               : ""
           }
            
            ${
              wizardForm20Disabled !== true
                ? `<section>
                  <h2>Medical history</h2>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <p>${
                            diName !== undefined ? diName : "Client"
                          } has the following illnesses:</p>  
                          <ul>
                          ${
                            mhMeaselsMonths !== undefined ||
                            mhMeaselsMonthsYear !== undefined
                              ? `<li><p>Measels: ${
                                  mhMeaselsMonths !== undefined
                                    ? `<span>${mhMeaselsMonths} ${
                                        mhMeaselsMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhMeaselsMonths !== undefined
                                    ? ` <span>${mhMeaselsMonths} ${
                                        mhMeaselsMonths === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhRheumaticFeverMonths !== undefined ||
                            mhRheumaticFeverYear !== undefined
                              ? `<li><p>Rheumatic fever: ${
                                  mhRheumaticFeverMonths !== undefined
                                    ? `<span>${mhRheumaticFeverMonths} ${
                                        mhRheumaticFeverMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhRheumaticFeverYear !== undefined
                                    ? ` <span>${mhRheumaticFeverYear} ${
                                        mhRheumaticFeverYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhGermanMeaselsMonths !== undefined ||
                            mhGermanMeaselsYear !== undefined
                              ? `<li><p>German measels: ${
                                  mhGermanMeaselsMonths !== undefined
                                    ? `<span>${mhGermanMeaselsMonths} ${
                                        mhGermanMeaselsMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhGermanMeaselsYear !== undefined
                                    ? ` <span>${mhGermanMeaselsYear} ${
                                        mhGermanMeaselsYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhDiptheriaMonths !== undefined ||
                            mhDiptheriaYear !== undefined
                              ? `<li><p>Diptheria: ${
                                  mhDiptheriaMonths !== undefined
                                    ? `<span>${mhDiptheriaMonths} ${
                                        mhDiptheriaMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhDiptheriaYear !== undefined
                                    ? ` <span>${mhDiptheriaYear} ${
                                        mhDiptheriaYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhMumpsMonths !== undefined ||
                            mhMumpsYear !== undefined
                              ? `<li><p>Mumps: ${
                                  mhMumpsMonths !== undefined
                                    ? `<span>${mhMumpsMonths} ${
                                        mhMumpsMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhMumpsYear !== undefined
                                    ? ` <span>${mhMumpsYear} ${
                                        mhMumpsYear === "1" ? `year` : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhUnderstandWordsMonths !== undefined ||
                            mhUnderstandWordsYear !== undefined
                              ? `<li><p>Understand first words: ${
                                  mhUnderstandWordsMonths !== undefined
                                    ? `<span>${mhUnderstandWordsMonths} ${
                                        mhUnderstandWordsMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhUnderstandWordsYear !== undefined
                                    ? ` <span>${mhUnderstandWordsYear} ${
                                        mhUnderstandWordsYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mdhMeningitisMonths !== undefined ||
                            mdhMeningitisYear !== undefined
                              ? `<li><p>Meningitis: ${
                                  mdhMeningitisMonths !== undefined
                                    ? `<span>${mdhMeningitisMonths} ${
                                        mdhMeningitisMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mdhMeningitisYear !== undefined
                                    ? ` <span>${mdhMeningitisYear} ${
                                        mdhMeningitisYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhChickenPoxMonth !== undefined ||
                            mhChickenPoxYear !== undefined
                              ? `<li><p>Chicken pox: ${
                                  mhChickenPoxMonth !== undefined
                                    ? `<span>${mhChickenPoxMonth} ${
                                        mhChickenPoxMonth === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhChickenPoxYear !== undefined
                                    ? ` <span>${mhChickenPoxYear} ${
                                        mhChickenPoxYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhEncephalitisMonth !== undefined ||
                            mhEncephalitisYear !== undefined
                              ? `<li><p>Encephalitis: ${
                                  mhEncephalitisMonth !== undefined
                                    ? `<span>${mhEncephalitisMonth} ${
                                        mhEncephalitisMonth === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhEncephalitisYear !== undefined
                                    ? ` <span>${mhEncephalitisYear} ${
                                        mhEncephalitisYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhTuberculosisMonth !== undefined ||
                            mhTuberculosisYear !== undefined
                              ? `<li><p>Tuberculosis: ${
                                  mhTuberculosisMonth !== undefined
                                    ? `<span>${mhTuberculosisMonth} ${
                                        mhTuberculosisMonth === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhTuberculosisYear !== undefined
                                    ? ` <span>${mhTuberculosisYear} ${
                                        mhTuberculosisYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhAnemiaMonth !== undefined ||
                            mhAnemiaYear !== undefined
                              ? `<li><p>Anemia: ${
                                  mhAnemiaMonth !== undefined
                                    ? `<span>${mhAnemiaMonth} ${
                                        mhAnemiaMonth === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhAnemiaYear !== undefined
                                    ? ` <span>${mhAnemiaYear} ${
                                        mhAnemiaYear === "1" ? `year` : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhWhoopingCoughMonths !== undefined ||
                            mhWhoopingCoughYear !== undefined
                              ? `<li><p>Whooping cough: ${
                                  mhWhoopingCoughMonths !== undefined
                                    ? `<span>${mhWhoopingCoughMonths} ${
                                        mhWhoopingCoughMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhWhoopingCoughYear !== undefined
                                    ? ` <span>${mhWhoopingCoughYear} ${
                                        mhWhoopingCoughYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhFever104Months !== undefined ||
                            mhFever104Year !== undefined
                              ? `<li><p>Fever above 104°: ${
                                  mhFever104Months !== undefined
                                    ? `<span>${mhFever104Months} ${
                                        mhFever104Months === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhFever104Year !== undefined
                                    ? ` <span>${mhFever104Year} ${
                                        mhFever104Year === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhScarletFeverMonths !== undefined ||
                            mhScarletFeverYear !== undefined
                              ? `<li><p>Scarlet fever: ${
                                  mhScarletFeverMonths !== undefined
                                    ? `<span>${mhScarletFeverMonths} ${
                                        mhScarletFeverMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhScarletFeverYear !== undefined
                                    ? ` <span>${mhScarletFeverYear} ${
                                        mhScarletFeverYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhBrokenBonesMonths !== undefined ||
                            mhBrokenBonesYear !== undefined
                              ? `<li><p>Broken bones: ${
                                  mhBrokenBonesMonths !== undefined
                                    ? `<span>${mhBrokenBonesMonths} ${
                                        mhBrokenBonesMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhBrokenBonesYear !== undefined
                                    ? ` <span>${mhBrokenBonesYear} ${
                                        mhBrokenBonesYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhConcussionMonths !== undefined ||
                            mhConcussionYear !== undefined
                              ? `<li><p>Concussion: ${
                                  mhConcussionMonths !== undefined
                                    ? `<span>${mhConcussionMonths} ${
                                        mhConcussionMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhConcussionYear !== undefined
                                    ? ` <span>${mhConcussionYear} ${
                                        mhConcussionYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          ${
                            mhComaLossConsciousnessMonths !== undefined ||
                            mhComaLossConsciousnessYear !== undefined
                              ? `<li><p>Coma or loss of consiousness: ${
                                  mhComaLossConsciousnessMonths !== undefined
                                    ? `<span>${mhComaLossConsciousnessMonths} ${
                                        mhComaLossConsciousnessMonths === "1"
                                          ? `month`
                                          : `months`
                                      }</span>`
                                    : ""
                                } ${
                                  mhComaLossConsciousnessYear !== undefined
                                    ? ` <span>${mhComaLossConsciousnessYear} ${
                                        mhComaLossConsciousnessYear === "1"
                                          ? `year`
                                          : `years`
                                      }</span>`
                                    : ""
                                }</p></li>`
                              : ""
                          }
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }

            ${
              mdColds !== undefined ||
              mdChronicCough !== undefined ||
              mdAsthma !== undefined ||
              mdHayFever !== undefined ||
              mdSinusCondition !== undefined ||
              wizardForm21Disabled !== true
                ? `<section>
                  <h2>Medical development</h2>
                  <h3>Respiratory</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <ul>
                            ${
                              mdColds !== undefined
                                ? `<li><p>Frequent colds: <span>${mdColds}</span></p></li>`
                                : ""
                            }
                            ${
                              mdChronicCough !== undefined
                                ? `<li><p>Chronic cough: <span>${mdChronicCough}</span></p></li>`
                                : ""
                            }
                            ${
                              mdAsthma !== undefined
                                ? `<li><p>Asthma: <span>${mdAsthma}</span></p></li>`
                                : ""
                            }
                            ${
                              mdHayFever !== undefined
                                ? `<li><p>Hay fever: <span>${mdHayFever}</span></p></li>`
                                : ""
                            }
                            ${
                              mdSinusCondition !== undefined
                                ? `<li><p>Sinus condition: <span>${mdSinusCondition}</span></p></li>`
                                : ""
                            }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }

            ${
              mdColds !== undefined ||
              mdChronicCough !== undefined ||
              mdAsthma !== undefined ||
              mdHayFever !== undefined ||
              mdSinusCondition !== undefined ||
              wizardForm21Disabled !== true
                ? `<section>
                  <h3>Cardiovascular</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <ul>
                            ${
                              mdPhysicalExertion !== undefined
                                ? `<li><p>Shortness of breath or dizziness with physical exertion: <span>${mdPhysicalExertion}</span></p></li>`
                                : ""
                            }
                            ${
                              mdActivityLimits !== undefined
                                ? `<li><p>Activity limitation due to heart condition: <span>${mdActivityLimits}</span></p></li>`
                                : ""
                            }
                            ${
                              mdHeartMurmur !== undefined
                                ? `<li><p>Heart murmur: <span>${mdHeartMurmur}</span></p></li>`
                                : ""
                            }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }
            
            ${
              mdVomiting !== undefined ||
              mdDiarrhea !== undefined ||
              mdConstipation !== undefined ||
              mdStomachPain !== undefined ||
              wizardForm22Disabled !== true
                ? `<section>
                  <h3>Gastrointestinal</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <ul>
                            ${
                              mdVomiting !== undefined
                                ? `<li><p>Excessive vomitting: <span>${mdVomiting}</span></p></li>`
                                : ""
                            }
                            ${
                              mdDiarrhea !== undefined
                                ? `<li><p>Frequent diarrhea: <span>${mdDiarrhea}</span></p></li>`
                                : ""
                            }
                            ${
                              mdConstipation !== undefined
                                ? `<li><p>Constipation: <span>${mdConstipation}</span></p></li>`
                                : ""
                            }
                            ${
                              mdStomachPain !== undefined
                                ? `<li><p>Stomach pain: <span>${mdStomachPain}</span></p></li>`
                                : ""
                            }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }
            
            ${
              mdUrination !== undefined ||
              mdPainUrinating !== undefined ||
              mdExessiveUrination !== undefined ||
              mdUrineOdor !== undefined ||
              wizardForm23Disabled !== true
                ? `<section>
                  <h3>Genitourinary</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <ul>
                            ${
                              mdUrination !== undefined
                                ? `<li><p>Urination in pants: <span>${mdUrination}</span></p></li>`
                                : ""
                            }
                            ${
                              mdPainUrinating !== undefined
                                ? `<li><p>Pain while urinating: <span>${mdPainUrinating}</span></p></li>`
                                : ""
                            }
                            ${
                              mdExessiveUrination !== undefined
                                ? `<li><p>Excessive urination: <span>${mdExessiveUrination}</span></p></li>`
                                : ""
                            }
                            ${
                              mdUrineOdor !== undefined
                                ? `<li><p>Strong odor to urine: <span>${mdUrineOdor}</span></p></li>`
                                : ""
                            }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }
            
            ${
              mdMusclePain !== undefined ||
              mdClumsyWalk !== undefined ||
              mdPoorPosture !== undefined ||
              mdOtherMuscleProblems !== undefined ||
              wizardForm24Disabled !== true
                ? `<section>
                  <h3>Musculoskeletal</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <ul>
                            ${
                              mdMusclePain !== undefined
                                ? `<li><p>Muscle pain: <span>${mdMusclePain}</span></p></li>`
                                : ""
                            }
                            ${
                              mdClumsyWalk !== undefined
                                ? `<li><p>Clumsy walk: <span>${mdClumsyWalk}</span></p></li>`
                                : ""
                            }
                            ${
                              mdPoorPosture !== undefined
                                ? `<li><p>Poor posture: <span>${mdPoorPosture}</span></p></li>`
                                : ""
                            }
                            ${
                              mdOtherMuscleProblems !== undefined
                                ? `<li><p>Other muscle problems: <span>${mdOtherMuscleProblems}</span></p></li>`
                                : ""
                            }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }
            
            ${
              mdFrequentRashes !== undefined ||
              mdBruisesEasily !== undefined ||
              mdSores !== undefined ||
              mdSevereAcne !== undefined ||
              mdItchySkin !== undefined ||
              wizardForm25Disabled !== true
                ? `<section>
                  <h3>Skin</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <ul>
                            ${
                              mdFrequentRashes !== undefined
                                ? `<li><p>Frequent rashes: <span>${mdFrequentRashes}</span></p></li>`
                                : ""
                            }
                            ${
                              mdBruisesEasily !== undefined
                                ? `<li><p>Bruises easily: <span>${mdBruisesEasily}</span></p></li>`
                                : ""
                            }
                            ${
                              mdSores !== undefined
                                ? `<li><p>Sores: <span>${mdSores}</span></p></li>`
                                : ""
                            }
                            ${
                              mdSevereAcne !== undefined
                                ? `<li><p>Severe acne: <span>${mdSevereAcne}</span></p></li>`
                                : ""
                            }
                            ${
                              mdItchySkin !== undefined
                                ? `<li><p>Itchy skin: <span>${mdItchySkin}</span></p></li>`
                                : ""
                            }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }
            
            ${
              mdSeizuresConvulsions !== undefined ||
              mdSpeechDefects !== undefined ||
              mdAccidentProne !== undefined ||
              mdNailBiter !== undefined ||
              mdSucksThumb !== undefined ||
              mdGrindsTeeth !== undefined ||
              mdTwitches !== undefined ||
              mdBangsHead !== undefined ||
              mdRocks !== undefined ||
              mdBowelMovements !== undefined ||
              mdNeurologicalMeds !== undefined ||
              mdNeurologicalMedsDate !== undefined ||
              mdNeurologicalMedsKind !== undefined ||
              mdNeurologicalTranquilizer !== undefined ||
              mdNeurologicalTranquilizerDate !== undefined ||
              mdNeurologicalTranquilizerKind !== undefined ||
              mdNeurologicalAdhdMeds !== undefined ||
              mdNeurologicalAdhdMedsDate !== undefined ||
              mdNeurologicalAdhdMedsKind !== undefined ||
              wizardForm25Disabled !== true
                ? `<section>
                  <h3>Neurological</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <ul>
                            ${
                              mdSeizuresConvulsions !== undefined
                                ? `<li><p>Seizures/convulsions: <span>${mdSeizuresConvulsions}</span></p></li>`
                                : ""
                            }
                            ${
                              mdSpeechDefects !== undefined
                                ? `<li><p>Speech defects: <span>${mdSpeechDefects}</span></p></li>`
                                : ""
                            }
                            ${
                              mdAccidentProne !== undefined
                                ? `<li><p>Accident prone: <span>${mdAccidentProne}</span></p></li>`
                                : ""
                            }
                            ${
                              mdNailBiter !== undefined
                                ? `<li><p>Nail biter: <span>${mdNailBiter}</span></p></li>`
                                : ""
                            }
                            ${
                              mdSucksThumb !== undefined
                                ? `<li><p>Sucks thumb: <span>${mdSucksThumb}</span></p></li>`
                                : ""
                            }
                            ${
                              mdGrindsTeeth !== undefined
                                ? `<li><p>Grinds teeth: <span>${mdGrindsTeeth}</span></p></li>`
                                : ""
                            }
                            ${
                              mdTwitches !== undefined
                                ? `<li><p>Has tics/twitches: <span>${mdTwitches}</span></p></li>`
                                : ""
                            }
                            ${
                              mdBangsHead !== undefined
                                ? `<li><p>Bangs head: <span>${mdBangsHead}</span></p></li>`
                                : ""
                            }
                            ${
                              mdRocks !== undefined
                                ? `<li><p>Rocks back and forth: <span>${mdRocks}</span></p></li>`
                                : ""
                            }
                            ${
                              mdBowelMovements !== undefined
                                ? `<li><p>Bowel movements in pants/bed: <span>${mdBowelMovements}</span></p></li>`
                                : ""
                            }
                          </ul>
                          ${
                            mdNeurologicalMeds === "Yes"
                              ? `<p>Has this child ever taken medication to increase activity? <span>${mdNeurologicalMeds}</span></p>`
                              : ""
                          }
                          ${
                            mdNeurologicalMeds === "Yes"
                              ? `
                                  <p>If yes, when? <span>${mdNeurologicalMedsDate}</span></p>
                                  <p>What medication? <span>${mdNeurologicalMedsKind}</span></p>
                                `
                              : ""
                          }
                          ${
                            mdNeurologicalTranquilizer === "Yes"
                              ? `<p>Has this child ever taken tranquilizer medication? <span>${mdNeurologicalTranquilizer}</span></p>`
                              : ""
                          }
                          ${
                            mdNeurologicalTranquilizer === "Yes"
                              ? `
                                  <p>If yes, when? <span>${mdNeurologicalTranquilizerDate}</span></p>
                                  <p>What medication? <span>${mdNeurologicalTranquilizerKind}</span></p>
                                `
                              : ""
                          }
                          ${
                            mdNeurologicalAdhdMeds === "Yes"
                              ? `<p>Has this child ever taken medication for ADD, ADHD, or similar problems? <span>${mdNeurologicalAdhdMeds}</span></p>`
                              : ""
                          }
                          ${
                            mdNeurologicalAdhdMeds === "Yes"
                              ? `
                                  <p>If yes, when? <span>${mdNeurologicalAdhdMedsDate}</span></p>
                                  <p>What medication? <span>${mdNeurologicalAdhdMedsKind}</span></p>
                                `
                              : ""
                          }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }

            ${
              mdhAllergiesMedicine === true ||
              mdhAllergiesFood == true ||
              mdhAllergiesOther == true ||
              wizardForm26Disabled !== true
                ? `<section>
                  <h3>Allergies</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <ul>
                            ${
                              mdhAllergiesMedicine === true
                                ? `<li><p>Walking difficulty${
                                    mdhAllergiesMedicineDescription !== null
                                      ? `: <span>${mdhAllergiesMedicineDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhAllergiesFood === true
                                ? `<li><p>Walking difficulty${
                                    mdhAllergiesFoodDescription !== null
                                      ? `: <span>${mdhAllergiesFoodDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhAllergiesOther === true
                                ? `<li><p>Walking difficulty${
                                    mdhAllergiesOtherDescription !== null
                                      ? `: <span>${mdhAllergiesOtherDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }

            ${
              mdhSpeechStuttering === true ||
              mdhSpeechUnclear === true ||
              mdhSpeechOther === true ||
              mdhSpeechStutteringDescription !== undefined ||
              mdhSpeechUnclearDescription !== undefined ||
              mdhSpeechOtherDescription !== undefined ||
              mdhSpeechExamDate !== undefined ||
              wizardForm27Disabled !== true
                ? `<section>
                  <h3>Speech</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <ul>
                            ${
                              mdhSpeechStuttering === true
                                ? `<li><p>Stuttering${
                                    mdhSpeechStutteringDescription !== null
                                      ? `: <span>${mdhSpeechStutteringDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhSpeechUnclear === true
                                ? `<li><p>Unclear speech${
                                    mdhSpeechUnclearDescription !== null
                                      ? `: <span>${mdhSpeechUnclearDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhSpeechOther === true
                                ? `<li><p>Other speech problems${
                                    mdhSpeechOtherDescription !== null
                                      ? `: <span>${mdhSpeechOtherDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                          </ul>
                          ${
                            mdhSpeechExamDate !== undefined
                              ? `<p>Date of most recent speech exam: <span>${mdhSpeechExamDate}</span></p>`
                              : ""
                          }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }

            ${
              mdhHearingEarInfection === true ||
              mdhHearingProblems === true ||
              mdhHearingTubes === true ||
              mdhHearingEarInfectionDescription !== undefined ||
              mdhHearingProblemsDescription !== undefined ||
              mdhHearingTubesDescription !== undefined ||
              mdhHearingExamDate !== undefined ||
              wizardForm28Disabled !== true
                ? `<section>
                  <h3>Hearing</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <ul>
                            ${
                              mdhHearingEarInfection === true
                                ? `<li><p>Ear infections${
                                    mdhHearingEarInfectionDescription !== null
                                      ? `: <span>${mdhHearingEarInfectionDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhHearingProblems === true
                                ? `<li><p>Hearing problems${
                                    mdhHearingProblemsDescription !== null
                                      ? `: <span>${mdhHearingProblemsDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhHearingTubes === true
                                ? `<li><p>Ear tubes${
                                    mdhHearingTubesDescription !== null
                                      ? `: <span>${mdhHearingTubesDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                          </ul>
                          ${
                            mdhHearingExamDate !== undefined
                              ? `<p>Date of most recent hearing exam: <span>${mdhHearingExamDate}</span></p>`
                              : ""
                          }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }

            ${
              mdhVisionProblems === true ||
              mdhGlasses === true ||
              mdhVisionProblemsDescription !== undefined ||
              mdhGlassesDescription !== undefined ||
              mdhVisionExamDate !== undefined ||
              wizardForm28Disabled !== true
                ? `<section>
                  <h3>Vision</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <ul>
                            ${
                              mdhVisionProblems === true
                                ? `<li><p>Vision problems${
                                    mdhVisionProblemsDescription !== null
                                      ? `: <span>${mdhVisionProblemsDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhGlasses === true
                                ? `<li><p>Wears glasses or contacts${
                                    mdhGlassesDescription !== null
                                      ? `: <span>${mdhGlassesDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                          </ul>
                          ${
                            mdhHearingExamDate !== undefined
                              ? `<p>Date of most recent vision exam: <span>${mdhVisionExamDate}</span></p>`
                              : ""
                          }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }

            ${
              mcDrName !== undefined ||
              mcDrPhone !== undefined ||
              mcDrVisitCount !== undefined ||
              mcDrLastVisit !== undefined ||
              medicationListGroup !== undefined ||
              mcSexualAbuse !== undefined ||
              counselingGroup !== undefined ||
              nuerologicalGroup !== undefined ||
              psychologyGroup !== undefined ||
              wizardForm29Disabled !== true
                ? `<section>
                    <h3>Medical Care</h3>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <div>
                            ${
                              mcDrName !== undefined
                                ? `<p>What is the primary physicians name? <span>${mcDrName}</span></p>`
                                : ""
                            }
                            ${
                              mcDrPhone !== undefined
                                ? `<p>What's the doctor's phone? <span>${mcDrPhone}</span></p>`
                                : ""
                            }
                            ${
                              mcDrVisitCount !== undefined
                                ? `<p>How often do they visit? <span>${mcDrVisitCount}</span></p>`
                                : ""
                            }
                            ${
                              mcDrLastVisit !== undefined
                                ? `<p>Date of last visit? <span>${mcDrLastVisit}</span></p>`
                                : `<p>How long since last visit? <span>${mcDrLastVisitMonths}</span></p>`
                            }
                            <p>List any medication this child is currently taking:</p>
                            <ul>
                              ${
                                medicationListGroup !== undefined
                                  ? medicationListGroup
                                      .map(
                                        med =>
                                          `<li>
                                            <p>
                                              <span>
                                                  ${med.mcMedicationName},
                                              </span>
                                              <span> ${
                                                med.mcMedicationReason
                                              }</span>
                                            </p>
                                          </li>`
                                      )
                                      .join("")
                                  : null
                              }
                            </ul>
                            ${
                              mcSexualAbuse !== undefined
                                ? `<p>Has this child ever been sexually abused? <span>${mcSexualAbuse}</span></p>`
                                : ""
                            }
                            ${
                              counselingGroup !== undefined
                                ? `<p>Psychology counseling or therapy this child has had:</p>
                                  <ul>
                                    ${
                                      counselingGroup !== undefined
                                        ? counselingGroup
                                            .map(
                                              session =>
                                                `<li>
                                                  <p>
                                                    <span>
                                                        ${
                                                          session.mcCounselingName
                                                        },
                                                    </span>
                                                    <span> ${
                                                      session.mcCounselingAddress
                                                    },</span>
                                                    <span> ${
                                                      session.mcCounselingPhone
                                                    },</span>
                                                    <span> ${
                                                      session.mcCounselingReason
                                                    },</span>
                                                    <span> ${
                                                      session.mcCounselingDate
                                                    }</span>
                                                  </p>
                                                </li>`
                                            )
                                            .join("")
                                        : null
                                    }
                                  </ul>`
                                : ""
                            }

                            ${
                              nuerologicalGroup !== undefined
                                ? `<p>Neurological exam(s) this child has had:</p>
                                  <ul>
                                    ${
                                      nuerologicalGroup !== undefined
                                        ? nuerologicalGroup
                                            .map(
                                              session =>
                                                `<li>
                                                  <p>
                                                    <span>
                                                        ${
                                                          session.mcNuerologicalName
                                                        },
                                                    </span>
                                                    <span> ${
                                                      session.mcNuerologicalAddress
                                                    },</span>
                                                    <span> ${
                                                      session.mcNuerologicalDate
                                                    },</span>
                                                    <span> ${
                                                      session.mcNuerologicalReason
                                                    }</span>
                                                  </p>
                                                </li>`
                                            )
                                            .join("")
                                        : null
                                    }
                                  </ul>`
                                : ""
                            }

                            ${
                              psychologyGroup !== undefined
                                ? `<p>Psychiatric exam(s) this child has had:</p>
                                  <ul>
                                    ${
                                      psychologyGroup !== undefined
                                        ? psychologyGroup
                                            .map(
                                              session =>
                                                `<li>
                                                  <p>
                                                    <span>
                                                        ${
                                                          session.mcPsychologyExamName
                                                        },
                                                    </span>
                                                    <span> ${
                                                      session.mcPsychologyExamCity
                                                    },</span>
                                                    <span> ${
                                                      session.mcPsychologyExamDate
                                                    },</span>
                                                    <span> ${
                                                      session.mcPsychologyExamReason
                                                    }</span>
                                                  </p>
                                                </li>`
                                            )
                                            .join("")
                                        : null
                                    }
                                  </ul>`
                                : ""
                            }
                            
                          </div>
                        </td>
                      </tr>
                    </table>
                  </section>`
                : ""
            }

            ${
              fhDrugAbuse === true ||
              fhAlzheimers === true ||
              fhBehaviorDisorder === true ||
              fhBirthDefect === true ||
              fhCancer === true ||
              fhCerbralPalsy === true ||
              fhCysticFibrosis === true ||
              fhDiabetes === true ||
              fhEmotionalDisturbance === true ||
              fhFoodAllergies === true ||
              fhHeartDisease === true ||
              fhHemophilia === true ||
              fhHighBloodPressure === true ||
              fhHuntingtonChorea === true ||
              fhIntellectualDisability === true ||
              fhKidneyDisease === true ||
              fhMentalIllness === true ||
              fhMigraines === true ||
              fhMultipleSclerosis === true ||
              fhMuscularDystrophy === true ||
              fhNervousnes === true ||
              fhOtherLearningDisability === true ||
              fhParkinsons === true ||
              fhPhysicalHandicap === true ||
              fhReadingProblem === true ||
              fhSeizures === true ||
              fhSevereHeadInjury === true ||
              fhSickleCell === true ||
              fhSpeechProblem === true ||
              fhStroke === true ||
              fhTaySachs === true ||
              fhTourettes === true ||
              fhTuberculosis === true ||
              fhOther === true ||
              fhFathersHealth !== undefined ||
              fhMothersHealth !== undefined ||
              specialEdGroup !== undefined ||
              wizardForm30Disabled !== true
                ? `<section>
                  <h2>Family History</h2>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <p>Family members had the following:</p>
                          <ul>
                            ${
                              fhDrugAbuse === true
                                ? `<li><p>Alcohol/Drug abuse</p>`
                                : ""
                            }
                            ${
                              fhAlzheimers === true
                                ? `<li><p>Alzheimers Disease</p>`
                                : ""
                            }
                            ${
                              fhBehaviorDisorder === true
                                ? `<li><p>Behavior disorder</p>`
                                : ""
                            }
                            ${
                              fhBirthDefect === true
                                ? `<li><p>Birth defect</p>`
                                : ""
                            }
                            ${fhCancer === true ? `<li><p>Cancer</p>` : ""}
                            ${
                              fhCerbralPalsy === true
                                ? `<li><p>Cerbral Palsy</p>`
                                : ""
                            }
                            ${
                              fhCysticFibrosis === true
                                ? `<li><p>Cystic Fibrosis</p>`
                                : ""
                            }
                            ${fhDiabetes === true ? `<li><p>Diabetes</p>` : ""}
                            ${
                              fhEmotionalDisturbance === true
                                ? `<li><p>Emotional Disturbance</p>`
                                : ""
                            }
                            ${
                              fhFoodAllergies === true
                                ? `<li><p>Food Allergies</p>`
                                : ""
                            }
                            ${
                              fhHeartDisease === true
                                ? `<li><p>Heart Disease</p>`
                                : ""
                            }
                            ${
                              fhHemophilia === true
                                ? `<li><p>Hemophilia</p>`
                                : ""
                            }
                            ${
                              fhHighBloodPressure === true
                                ? `<li><p>High Blood Pressure</p>`
                                : ""
                            }
                            ${
                              fhHuntingtonChorea === true
                                ? `<li><p>Huntington Chorea</p>`
                                : ""
                            }
                            ${
                              fhIntellectualDisability === true
                                ? `<li><p>Intellectual Disability</p>`
                                : ""
                            }
                            ${
                              fhKidneyDisease === true
                                ? `<li><p>Kidney Disease</p>`
                                : ""
                            }
                            ${
                              fhMentalIllness === true
                                ? `<li><p>Mental Illness</p>`
                                : ""
                            }
                            ${
                              fhMigraines === true ? `<li><p>Migraines</p>` : ""
                            }
                            ${
                              fhMultipleSclerosis === true
                                ? `<li><p>Multiple Sclerosis</p>`
                                : ""
                            }
                            ${
                              fhMuscularDystrophy === true
                                ? `<li><p>Muscular Dystrophy</p>`
                                : ""
                            }
                            ${
                              fhNervousnes === true
                                ? `<li><p>Nervousnes</p>`
                                : ""
                            }
                            ${
                              fhOtherLearningDisability === true
                                ? `<li><p>Other Learning Disability</p>`
                                : ""
                            }
                            ${
                              fhParkinsons === true
                                ? `<li><p>Parkinsons</p>`
                                : ""
                            }
                            ${
                              fhPhysicalHandicap === true
                                ? `<li><p>Physical Handicap</p>`
                                : ""
                            }
                            ${
                              fhReadingProblem === true
                                ? `<li><p>Reading Problem</p>`
                                : ""
                            }
                            ${fhSeizures === true ? `<li><p>Seizures</p>` : ""}
                            ${
                              fhSevereHeadInjury === true
                                ? `<li><p>Severe Head Injury</p>`
                                : ""
                            }
                            ${
                              fhSickleCell === true
                                ? `<li><p>Sickle Cell</p>`
                                : ""
                            }
                            ${
                              fhSpeechProblem === true
                                ? `<li><p>Speech Problem</p>`
                                : ""
                            }
                            ${fhStroke === true ? `<li><p>Stroke</p>` : ""}
                            ${fhTaySachs === true ? `<li><p>Tay Sachs</p>` : ""}
                            ${
                              fhTourettes === true ? `<li><p>Tourettes</p>` : ""
                            }
                            ${
                              fhTuberculosis === true
                                ? `<li><p>Tuberculosis</p>`
                                : ""
                            }
                            ${fhOther === true ? `<li><p>Other</p>` : ""}
                          </ul>
                          ${
                            fhFathersHealth !== undefined
                              ? `<p>Describe the father’s present health: <span>${fhFathersHealth}</span></p>`
                              : ""
                          }
                          ${
                            fhMothersHealth !== undefined
                              ? `<p>Describe the mother’s present health: <span>${fhMothersHealth}</span></p>`
                              : ""
                          }
                          ${
                            specialEdGroup !== undefined
                              ? `<p>Has anyone in the family ever been in special education?</p>
                                <ul>
                                  ${specialEdGroup
                                    .map(
                                      person =>
                                        `<li>
                                                <p>
                                                  <span>
                                                      ${person.mcSpecialEdName},
                                                  </span>
                                                  <span> ${
                                                    person.mcSpecialEdClass
                                                  }</span>
                                                </p>
                                              </li>`
                                    )
                                    .join("")}
                                </ul>`
                              : ""
                          }
                        </div>
                      </td>
                    </tr>
                  </table>
                </section>`
                : ""
            }

            ${
              wizardForm31Disabled !== true
                ? `<section>
                  ${
                    fRelatingProblems !== undefined ||
                    fRelatingProblemsDesc !== undefined ||
                    fFight !== undefined ||
                    fFightDesc !== undefined ||
                    fYoungerFriends !== undefined ||
                    fYoungerFriendsDesc !== undefined ||
                    fMakingFriends !== undefined ||
                    fMakingFriendsDesc !== undefined ||
                    fAlone !== undefined ||
                    fAloneDesc !== undefined ||
                    fNeighbhoodFriends !== undefined ||
                    fNeighbhoodFriendsDesc !== undefined ||
                    fNeighbhoodFriends !== undefined ||
                    fNeighbhoodFriendsDesc !== undefined ||
                    fRolePeerGroupGames !== undefined ||
                    fSmokeCigarettes !== undefined ||
                    fChewTobacco !== undefined ||
                    fInhale !== undefined ||
                    fAlcholol !== undefined ||
                    fDrugs !== undefined
                      ? `<h2>Friendships</h2>
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <div>
                              ${
                                fRelatingProblems !== undefined ||
                                fRelatingProblemsDesc !== undefined
                                  ? `<p>
                                      <em>Does this child have problems relating to or playing with children? </em> 
                                      ${
                                        fRelatingProblems === "Yes"
                                          ? `<span>Yes. ${fRelatingProblemsDesc}</span>`
                                          : `<span>No</span>`
                                      } 
                                    </p>`
                                  : ""
                              }
                              ${
                                fFight !== undefined || fFightDesc !== undefined
                                  ? `<p>
                                      <em>Does this child fight frequently with playmates? </em> 
                                      ${
                                        fFight === "Yes"
                                          ? `<span>Yes. ${fFightDesc}</span>`
                                          : `<span>No</span>`
                                      } 
                                    </p>`
                                  : ""
                              }
                              ${
                                fYoungerFriends !== undefined ||
                                fYoungerFriendsDesc !== undefined
                                  ? `<p>
                                      <em>Does this child prefer playing with younger children? </em> 
                                      ${
                                        fYoungerFriends === "Yes"
                                          ? `<span>Yes. ${fYoungerFriendsDesc}</span>`
                                          : `<span>No</span>`
                                      } 
                                    </p>`
                                  : ""
                              }
                              ${
                                fMakingFriends !== undefined ||
                                fMakingFriendsDesc !== undefined
                                  ? `<p>
                                      <em>Does this child have difficulty making friends? </em> 
                                      ${
                                        fMakingFriends === "Yes"
                                          ? `<span>Yes. ${fMakingFriendsDesc}</span>`
                                          : `<span>No</span>`
                                      } 
                                    </p>`
                                  : ""
                              }
                              ${
                                fAlone !== undefined || fAloneDesc !== undefined
                                  ? `<p>
                                      <em>Does this child prefer to play alone? </em> 
                                      ${
                                        fAlone === "Yes"
                                          ? `<span>Yes. ${fAloneDesc}</span>`
                                          : `<span>No</span>`
                                      } 
                                    </p>`
                                  : ""
                              }
                              ${
                                fNeighbhoodFriends !== undefined ||
                                fNeighbhoodFriendsDesc !== undefined
                                  ? `<p>
                                      <em>Are there children in the neighborhood with whom this child could play with? </em> 
                                      ${
                                        fNeighbhoodFriends === "Yes"
                                          ? `<span>Yes. ${fNeighbhoodFriendsDesc}</span>`
                                          : `<span>No</span>`
                                      } 
                                    </p>`
                                  : ""
                              }
                              ${
                                fRolePeerGroupGames !== undefined
                                  ? `<p>
                                    <em>What role does this child take in peer group games?</em> <span>${fRolePeerGroupGames}</span></p>`
                                  : ""
                              }
                              ${
                                fSmokeCigarettes === true ||
                                fChewTobacco === true ||
                                fInhale === true ||
                                fAlcholol === true ||
                                fDrugs === true
                                  ? `<p><em>Does this child’s friends do any of the following:</em></p>
                                  <ul> 
                                      ${
                                        fSmokeCigarettes !== undefined
                                          ? `<li>
                                              ${
                                                fSmokeCigarettes === true
                                                  ? `<p><em>Smoke cigarettes? </em><span>Yes</span></p>`
                                                  : `<p><em>Smoke cigarettes? </em><span>No</span></p>`
                                              } 
                                            </li>`
                                          : ""
                                      }
                                      ${
                                        fChewTobacco !== undefined
                                          ? `<li>
                                              ${
                                                fChewTobacco === true
                                                  ? `<p><em>Chew tobacco? </em><span>Yes</span></p>`
                                                  : `<p><em>Chew tobacco? </em><span>No</span></p>`
                                              } 
                                            </li>`
                                          : ""
                                      }
                                      ${
                                        fInhale !== undefined
                                          ? `<li>
                                              ${
                                                fInhale === true
                                                  ? `<p><em>Inhale toxic substances (e.g., paint)? </em><span>Yes</span></p>`
                                                  : `<p><em>Inhale toxic substances (e.g., paint)? </em><span>No</span></p>`
                                              } 
                                            </li>`
                                          : ""
                                      }
                                      ${
                                        fAlcholol !== undefined
                                          ? `<li>
                                              ${
                                                fAlcholol === true
                                                  ? `<p><em>Drink beer, wine, or liquor? </em><span>Yes</span></p>`
                                                  : `<p><em>Drink beer, wine, or liquor? </em><span>No</span></p>`
                                              } 
                                            </li>`
                                          : ""
                                      }
                                      ${
                                        fDrugs !== undefined
                                          ? `<li>
                                              ${
                                                fDrugs === true
                                                  ? `<p><em>Use drugs illegally (e.g., marijuana)? </em><span>Yes</span></p>`
                                                  : `<p><em>Use drugs illegally (e.g., marijuana)? </em><span>No</span></p>`
                                              } 
                                            </li>`
                                          : ""
                                      }
                                  </ul>`
                                  : ""
                              }
                            </div>
                          </td>
                        </tr>
                      </table>`
                      : ""
                  }
                </section>`
                : ""
            }

            ${
              wizardForm32Disabled != true
                ? `<section>
                    ${
                      riActivitesSports != undefined ||
                      riActivitesHobbies != undefined ||
                      riActivitesOther != undefined
                        ? `
                          <h2>Recreation &amp; Interests</h2>
                          <div>
                            ${
                              riActivitesSports != undefined
                                ? `<p><em>What sport activities does this child enjoy?</em> <span>${riActivitesSports}</span></p>`
                                : ""
                            }
                            ${
                              riActivitesHobbies != undefined
                                ? `<p><em>What hobbies does this child enjoy?</em> <span>${riActivitesHobbies}</span></p>`
                                : ""
                            }
                            ${
                              riActivitesOther != undefined
                                ? `<p><em>What other activities does this child enjoy?</em> <span>${riActivitesOther}</span></p>`
                                : ""
                            }
                          </div>`
                        : ""
                    }
                  </section>`
                : ""
            }

            ${
              wizardForm33Disabled !== true
                ? `<section>
                    ${
                      btOverstimulated === true ||
                      btAttentionSpan === true ||
                      btSelfControl === true ||
                      btUnhappy === true ||
                      btAffectionless === true ||
                      btHidesFeelings === true ||
                      btOverEngergetic === true ||
                      btImpulsive === true ||
                      btOverreactsProblems === true ||
                      btShy === true ||
                      btParentalAttention === true ||
                      btCannotCalm === true
                        ? `<h2>Behavior &amp; Treatment</h2>
                          <p><em>John exhibits the following:</em></p>
                          <ul>
                            ${
                              btOverstimulated === true
                                ? `<li><p>Is easily overstimulated in play</p></li>`
                                : ""
                            }
                            ${
                              btAttentionSpan === true
                                ? `<li><p>Has a short attention span</p></li>`
                                : ""
                            }
                            ${
                              btSelfControl === true
                                ? `<li><p>Lacks selfControl</p></li>`
                                : ""
                            }
                            ${
                              btUnhappy === true
                                ? `<li><p>Seems unhappy most of the time</p></li>`
                                : ""
                            }
                            ${
                              btAffectionless === true
                                ? `<li><p>Withholds affection</p></li>`
                                : ""
                            }
                            ${
                              btHidesFeelings === true
                                ? `<li><p>Hides feelings</p></li>`
                                : ""
                            }
                            ${
                              btOverEngergetic === true
                                ? `<li><p>Seems over energetic in play</p></li>`
                                : ""
                            }
                            ${
                              btImpulsive === true
                                ? `<li><p>Seems impulsive</p></li>`
                                : ""
                            }
                            ${
                              btOverreactsProblems === true
                                ? `<li><p>Overreacts in the face of problems</p></li>`
                                : ""
                            }
                            ${
                              btShy === true
                                ? `<li><p>Uncomfortable meeting new people</p></li>`
                                : ""
                            }
                            ${
                              btParentalAttention === true
                                ? `<li><p>Requires a lot of parental attention</p></li>`
                                : ""
                            }
                            ${
                              btCannotCalm === true
                                ? `<li><p>Cannot calm down</p></li>`
                                : ""
                            }
                          </ul>
                          ${
                            btFears !== undefined
                              ? `<p><em>Does this child have fears?</em> <span>${btFears}</span></p>`
                              : ""
                          }
                          ${
                            btAngry !== undefined
                              ? `<p><em>What makes this child angry?</em> <span>${btAngry}</span></p>`
                              : ""
                          }`
                        : ""
                    }
                      </section>`
                : ""
            }

            ${
              wizardForm34Disabled !== true
                ? `<section>
                    ${
                      ehDaycare !== undefined ||
                      ehDaycareAge !== undefined ||
                      ehDaycareTime !== undefined ||
                      ehDaycareDays !== undefined ||
                      ehKindergarten !== undefined ||
                      ehKindergartenProblems !== undefined
                        ? `<h2>Educational History</h2>
                          <h3>PRESCHOOL &amp; DAYCARE</h3>
                          ${
                            ehDaycare !== undefined
                              ? `<p>
                                  <em>Does or did this child attend preschool/daycare? </em> 
                                  ${
                                    ehDaycare === "Yes"
                                      ? `<span>Yes</span>`
                                      : `<span>No</span>`
                                  } 
                                </p>`
                              : ""
                          }
                          ${
                            ehDaycare === "Yes"
                              ? `<ul>
                                ${
                                  ehDaycareAge !== undefined
                                    ? `<li><p><em>Age:</em> ${ehDaycareAge}</p></li>`
                                    : ""
                                }
                                ${
                                  ehDaycareTime !== undefined
                                    ? `<li><p><em>Hours per week:</em> ${ehDaycareTime}</p></li>`
                                    : ""
                                }
                                ${
                                  ehDaycareDays !== undefined
                                    ? `<li><p><em>Days per week:</em> ${ehDaycareDays}</p></li>`
                                    : ""
                                }
                                ${
                                  ehDaycareProblems !== undefined
                                    ? `<li><p><em>Problems:</em> ${ehDaycareProblems}</p></li>`
                                    : ""
                                }
                              </ul>`
                              : ""
                          }
                        ${
                          ehKindergarten !== undefined
                            ? `<p><em>Does or did this child attend kindergarten? </em> 
                                ${
                                  ehKindergarten === "Yes"
                                    ? `<span>Yes</span>`
                                    : `<span>No</span>`
                                } 
                              </p>`
                            : ""
                        }
                        ${
                          ehKindergarten === "Yes"
                            ? `<p><em>Any problems in kindergarten?</em><span> ${ehKindergartenProblems}</span></p>`
                            : ""
                        }`
                        : ""
                    }
                  </section>`
                : ""
            }

            ${
              wizardForm35Disabled !== true
                ? `<section>
                    ${
                      ehChangedSchools !== undefined ||
                      ehChangedSchoolsDesc !== undefined ||
                      ehRepeatGrade !== undefined ||
                      ehGradeRepeatDesc !== undefined ||
                      ehGradeSkip !== undefined ||
                      ehGradeSkipDesc !== undefined ||
                      ehDifficultyReading !== undefined ||
                      ehDifficultyReadingDesc !== undefined ||
                      ehDifficultyMath !== undefined ||
                      ehDifficultyMathDesc !== undefined ||
                      ehSpecialEd !== undefined ||
                      ehSpecialEdCurrent !== undefined ||
                      ehTypeSpecialEdClass !== undefined ||
                      ehTypeSpecialEdHours !== undefined ||
                      ehDislikesSchool !== undefined ||
                      ehAbsent !== undefined ||
                      ehAbsentDesc !== undefined ||
                      ehGraduateHsDesc !== undefined ||
                      ehTeacherConcerns !== undefined ||
                      ehTeacherConcernsDesc !== undefined
                        ? `<h3>ELEMENTARY/HIGH SCHOOL</h3>`
                        : ""
                    }
                    ${
                      ehChangedSchools !== undefined
                        ? `<p><em>Changed schools for reasons other than normal academic progression? </em> 
                            ${
                              ehChangedSchools === "Yes"
                                ? `<span>Yes. ${ehChangedSchoolsDesc}</span>`
                                : `<span>No</span>`
                            }</p>`
                        : ""
                    }
                    ${
                      ehRepeatGrade !== undefined
                        ? `<p><em>Has been retained a grade in school? </em> 
                          ${
                            ehRepeatGrade === "Yes"
                              ? `<span>Yes. ${ehGradeRepeatDesc}</span>`
                              : `<span>No</span>`
                          } 
                          </p>`
                        : ""
                    }
                    ${
                      ehGradeSkip !== undefined
                        ? `<p><em>Has skipped a grade in school? </em> 
                          ${
                            ehGradeSkip == "Yes"
                              ? `<span>Yes. ${ehGradeSkipDesc}</span>`
                              : `<span>No</span>`
                          } 
                          </p>`
                        : ""
                    }
                    ${
                      ehDifficultyReading !== undefined
                        ? `<p><em>Does this child have difficulty reading? </em> 
                              ${
                                ehDifficultyReading == "Yes"
                                  ? `<span>Yes. ${ehDifficultyReadingDesc}</span>`
                                  : `<span>No</span>`
                              } 
                          </p>`
                        : ""
                    }
                    ${
                      ehDifficultyMath !== undefined
                        ? `<p><em>Does this child difficulty with math? </em> 
                            ${
                              ehDifficultyMath == "Yes"
                                ? `<span>Yes. ${ehDifficultyMathDesc}</span>`
                                : `<span>No</span>`
                            } 
                          </p>`
                        : ""
                    }
                    ${
                      ehPoorGrades !== undefined
                        ? `<p><em>Gets poor grades? </em> 
                            ${
                              ehPoorGrades == "Yes"
                                ? `<span>Yes. ${ehPoorGradesDesc}</span>`
                                : `<span>No</span>`
                            } 
                          </p>`
                        : ""
                    }
                    ${
                      ehSpecialEd !== undefined
                        ? `<p><em>Has been tested for special education? </em> 
                            ${
                              ehSpecialEd == "Yes"
                                ? `<span>Yes. ${ehSpecialEdDesc}</span>`
                                : `<span>No</span>`
                            } 
                          </p>`
                        : ""
                    }
                    ${
                      ehSpecialEdCurrent !== undefined
                        ? `<p><em>Currently is placed in special education? </em> 
                            ${
                              ehSpecialEdCurrent == "Yes"
                                ? `<span>Yes</span>`
                                : `<span>No</span>`
                            } 
                          </p>`
                        : ""
                    }
                    ${
                      ehSpecialEdCurrent == "Yes"
                        ? `<ul>
                              ${
                                ehTypeSpecialEdClass !== undefined
                                  ? `<li><p><em>What type of class?</em> ${ehTypeSpecialEdClass}</p></li>`
                                  : ""
                              } 
                              ${
                                ehTypeSpecialEdHours !== undefined
                                  ? `<li><p><em>Hours per day?</em> ${ehTypeSpecialEdHours}</p></li>`
                                  : ""
                              }
                          </ul>`
                        : ""
                    }
                    ${
                      ehDislikesSchool !== undefined
                        ? `<p><em>Dislikes going to school? </em> 
                            ${
                              ehDislikesSchool == "Yes"
                                ? `<span>Yes</span>`
                                : `<span>No</span>`
                            } 
                          </p>`
                        : ""
                    }
                    ${
                      ehAbsent !== undefined
                        ? `<p><em>Is absent from school frequently? </em> 
                            ${
                              ehAbsent == "Yes"
                                ? `<span>Yes. ${ehAbsentDesc}</span>`
                                : `<span>No</span>`
                            } 
                          </p>`
                        : ""
                    }
                    ${
                      ehGraduateHsDesc !== undefined
                        ? `<p><em>${diName} will graduate high school on </em>${ehGraduateHsDesc}</p>`
                        : ""
                    }
                    ${
                      ehTeacherConcerns !== undefined
                        ? `<p><em>Do you have any concerns about the quality of this child's teachers? </em> 
                            ${
                              ehTeacherConcerns == "Yes"
                                ? `<span>Yes. ${ehTeacherConcernsDesc}</span>`
                                : `<span>No</span>`
                            } 
                          </p>`
                        : ""
                    }
                  </section>`
                : ""
            }

            ${
              wizardForm42Disabled !== true
                ? `<section>
                    ${
                      rdaReligonAffiliation !== undefined ||
                      rdaReligonInvolvement !== undefined
                        ? `<h2>Religious &amp; Racial Ethnic Identification</h2>`
                        : ""
                    }
                    ${
                      rdaReligonAffiliation !== undefined ||
                      rdaReligonInvolvement !== undefined
                        ? `<div>  
                            <p><em>Current religious denomination/affiliation:</em></p>
                            <ul>
                              <li>
                                <p><em>Denomination:</em> <span>${rdaReligonAffiliation}</span></p>
                              </li>
                              <li>
                                <p><em>Level of involvement:</em> <span>${rdaReligonInvolvement}</span></p>
                              </li>
                            </ul>
                          </div>`
                        : ""
                    }
                  </section>`
                : ""
            }

            ${
              wizardForm43Disabled !== true
                ? `<section>
                    ${
                      rdaSpiritualImportance !== undefined
                        ? `<div>  
                            <p><em>How important are spirtial concerns in your life?</em> <span>${rdaSpiritualImportance}</span></p>
                          </div>`
                        : ""
                    }
                  </section>`
                : ""
            }

            ${
              wizardForm44Disabled !== true
                ? `<section>
                    ${
                      rdaReligonBuilding !== undefined
                        ? `<div>  
                            <p><em>Which, if any, are you involved with:</em> <span>${rdaReligonBuilding}</span></p>
                          </div>`
                        : ""
                    }
                  </section>`
                : ""
            }
            
            ${
              wizardForm45Disabled !== true
                ? `<section>
                    ${
                      rdaEthnicity !== undefined
                        ? `<div>  
                            <p><em>${diName}'s ethnicity is</em> <span>${rdaEthnicity}</span></p>
                          </div>`
                        : ""
                    }
                    ${
                      rdaRace !== undefined
                        ? `<div>  
                            <p><em>${diName}'s race is</em> <span>${rdaRace}</span></p>
                          </div>`
                        : ""
                    }
                    ${
                      rdaIdenficationOther !== undefined
                        ? `<div>  
                            <p><em>Any other way you identify yourself and consider important?</em> <span>${rdaIdenficationOther}</span></p>
                          </div>`
                        : ""
                    }
                  </section>`
                : ""
            }

            ${
              wizardForm46Disabled !== true
                ? `<section>
                    ${
                      otherInformation !== undefined
                        ? `<h2>Other Information</h2>
                            <p><em>Is there anything else we should know that doesn't appear on this or other forms, but that is or might be important?</em> <span>${otherInformation}</span></p>`
                        : ""
                    }
                  </section>`
                : ""
            }

            ${
              WIATIII === true ||
              NelsonDenny === true ||
              WJIVACH === true ||
              BRIEF === true ||
              Conners3 === true ||
              DKEFS === true ||
              RBANS === true ||
              NEPSYII === true ||
              QIKCPT === true ||
              VinelandII === true ||
              ADOS2 === true ||
              CARS2 === true ||
              GARS3 === true ||
              WISCV === true ||
              CTONI2 === true ||
              DASII === true ||
              WASIII === true ||
              WAISIV === true ||
              WJIVCOG === true ||
              WPPSIIV === true ||
              WRAML2 === true ||
              GORT5 === true ||
              WMSIV === true ||
              WRAVMA === true ||
              BeeryVMI === true ||
              BASC3 === true ||
              PIY === true ||
              HTP === true ||
              MCMIIV === true ||
              MMPI2 === true ||
              MMPIA === true ||
              Rorschach === true ||
              TSCC === true
                ? `<section>
                    <div>
                      <img src="http://www.lrtico.com/on/img/bell-curve.png" alt="Bell curve" class="bell-curve" />
                    </div>
                    <h2>Test Results</h2>
                    <p>Consistent with common medical practice, ability levels are described statistically. It is important to be aware that mild deficits from a statistical standpoint may interfere significantly with daily functioning. Percentiles are used to describe how many people out of 100 this individual would score above. For example, at the 50th percentile (exactly Average), ${diName} would score higher than 50 out of 100 people.</p>
                    <p>The following table is presented below to further describe the statistical classifications, unless otherwise specified (e.g., BASC-3, BRIEF-2, Vineland-3). </p>
                    <p>Please refer to the table below for the numerical results of ${diName}'s performance on all of the measures, as well as his classification level.</p>
                    <p>Note for interpretation of test results: these test results are to be interpreted only within the context of this report. They are not to be interpreted independent of this report.</p>
                    <table class="test-table">
                      <tr class="table__row table__header">
                        <th>Classification Level</th>
                        <th>% Rank</th>
                        <th>Standard Score</th>
                        <th>Scaled Score</th>
                        <th>T-Score</th>
                      </tr>
                      <tr>
                        <td>Very superior</td>
                        <td>> 98</td>
                        <td>131 & up</td>
                        <td>&#62;17</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>Superior</td>
                        <td>92-98</td>
                        <td>120-130</td>
                        <td>15-16</td>
                        <td>64-69</td>
                      </tr>
                      <tr>
                        <td>High/Above Average</td>
                        <td>76-91</td>
                        <td>110-119</td>
                        <td>13-14</td>
                        <td>58-63</td>
                      </tr>
                      <tr>
                        <td>Average</td>
                        <td>25-75</td>
                        <td>90-109</td>
                        <td>8-12</td>
                        <td>44-57</td>
                      </tr>
                      <tr>
                        <td>Low/Below Average</td>
                        <td>9-24</td>
                        <td>80-89</td>
                        <td>6-7</td>
                        <td>37-43</td>
                      </tr>
                      <tr>
                        <td>Very Low</td>
                        <td>2-8</td>
                        <td>70-79</td>
                        <td>4-5</td>
                        <td>30-36</td>
                      </tr>
                      <tr>
                        <td>Extremely Low</td>
                        <td>&#60;2</td>
                        <td>&#60;70</td>
                        <td>1-3</td>
                        <td>&#60;30</td>
                      </tr>
                    </table>
                  </section>`
                : ""
            }

            ${testSelectedReducer
              .map(
                (t, i) => `
                <section>
                  <div class="domain__test">
                    <h3>${t.DomainName}</h3>
                    <div>
                        <h4>${t.Name}</h4>
                        <span class="h7">&nbsp;${t.Abbreviation}</span>
                    </div>
                    <p>${t.Descriptions.replace("(Client)", `${diName}`)}</p>
                  </div>
                  ${
                    t.TestIndexes !== undefined
                      ? t.TestIndexes.map(
                          t =>
                            `<div class="domain__test">
                          ${
                            t.IndexName === "General Ability Index"
                              ? `<div className="test__list">
                                <h5>${t.IndexName}</h5>
                                <p>${t.IndexDescription}
                                  ${t.HasInput &&
                                    `<span>
                                    ${diName}'s GAI places ${
                                      diGender === "Boy" ? `him` : `her`
                                    } in the ${gaiRange(
                                      t.Id
                                    )} range and at the ${gaiPercentile(
                                      t.Id
                                    )} percentile.
                                    </span>`}
                                </p>
                              </div>`
                              : t.IndexName === "General Conceptual Ability"
                              ? `<div>
                                  <h5>${t.IndexName}</h5>
                                  <div className="test__list">
                                    ${diName}'s GCA score on the DAS-II places ${
                                  diGender === "Boy" ? `him` : `her`
                                } in
                                    the ${gcaRange(
                                      t.Id
                                    )} range DAS-II GCA score of ${gcaScore(
                                  t.Id
                                )}, 
                                    ${gcaPercentile(t.Id)} percentile while ${
                                  diGender === "Boy" ? `his` : `her`
                                } Special Nonverbal Composite SNC
                                    score placed in the ${sncRange(
                                      t.Id
                                    )} range DAS-II SNC score of ${sncScore(
                                  t.Id
                                )}, ${sncPercentile(t.Id)} percentile.
                                  </div>
                                </div>`
                              : `<div>
                                <h5>${t.IndexName}</h5>
                                <p>${t.IndexDescription}</p>
                              </div>`
                          }
                          ${
                            t.IndexConditions !== undefined
                              ? `<p>${indexConditionVal(
                                  t.IndexConditions[0].Id
                                )}</p>`
                              : ""
                          }
                          </div>`
                        ).join("")
                      : ""
                  }
                  ${
                    t.ParentScaleTitles !== undefined
                      ? t.ParentScaleTitles.map(
                          t => `
                          <div class="domain__test">
                            <h5>${t.ParentScaleName}</h5>
                          ${
                            t.ParentScaleDescription !== null
                              ? `<p>
                                  ${parentScaleDescVal(t.Id)}
                                </p>`
                              : ""
                          }
                          <table class="test-table">
                            <tr class="table__row table__header">
                              <th style="width:25%">${
                                testSelectedReducer[i].SubTestType
                              }</th>
                              <th style="width:15%">${
                                testSelectedReducer[i].ScoreType
                              }</th>
                              <th style="width:60%">${
                                testSelectedReducer[i].DescriptionType
                              }</th>
                            </tr>
                            ${t.SubTests.map(
                              t =>
                                `<tr class="table__row">
                                  <td>${t.Name}</td>
                                  <td><strong>${subtestVal(t.Id)}</strong></td>
                                  <td>
                                    <div>${
                                      t.Description === null
                                        ? subTestDescriptionColVal(t.Id)
                                        : t.Description
                                    }</div>
                                  </td>
                                </tr>`
                            ).join("")}
                          </table>
                        </div>`
                        ).join("")
                      : ""
                  }
                ${
                  t.SubTests !== undefined
                    ? `<table class="test-table">
                      <tr class="table__row table__header">
                        <th style="width:25%">${
                          testSelectedReducer[i].SubTestType
                        }</th>
                        <th style="width:15%">${
                          testSelectedReducer[i].ScoreType
                        }</th>
                        <th style="width:60%">${
                          testSelectedReducer[i].DescriptionType
                        }</th>
                      </tr>
                      ${t.SubTests.map(
                        t =>
                          `<tr class="table__row">
                          <td>${t.Name}</td>
                          <td><strong>${subtestVal(t.Id)}</strong></td>
                          <td>
                            <div>${t.Description}</div>
                          </td>
                        </tr>`
                      ).join("")}
                    </table>`
                    : ""
                }
                ${
                  t.ParentGroupScales !== undefined
                    ? t.ParentGroupScales.map(
                        t => `<div class="domain__test">
                        <h5>${t.ParentGroupScaleName}</h5>
                        ${
                          t.ParentScaleTitles !== undefined
                            ? t.ParentScaleTitles.map(
                                t => `
                                <div class="domain__test">
                                  <h5>${t.ParentScaleName}</h5>
                                </div>
                                <table class="test-table">
                                  <tr class="table__row table__header">
                                    <th style="width:25%">${
                                      testSelectedReducer[i].SubTestType
                                    }</th>
                                    <th style="width:15%">${
                                      testSelectedReducer[i].ScoreType
                                    }</th>
                                    <th style="width:60%">${
                                      testSelectedReducer[i].DescriptionType
                                    }</th>
                                  </tr>
                                  ${t.SubTests.map(
                                    t =>
                                      `<tr class="table__row">
                                        <td>${t.Name}</td>
                                        <td><strong>${subtestVal(
                                          t.Id
                                        )}</strong></td>
                                        <td>
                                          <div>${t.Description}</div>
                                        </td>
                                      </tr>`
                                  ).join("")}
                                </table>
                              `
                              ).join("")
                            : ""
                        }
                        ${
                          t.ParentGroupSubScales !== undefined
                            ? t.ParentGroupSubScales.map(
                                t =>
                                  `<div class="domain__test">
                                  <h6>${t.ParentGroupSubScaleName}</h6>
                                  ${t.ParentScaleTitles.map(
                                    t => `
                                      <h5>${t.ParentScaleName}</h5>
                                      ${
                                        t.ParentScaleDescription !== null
                                          ? `<p>${t.ParentScaleDescription}</p>`
                                          : ""
                                      }
                                      <table class="test-table">
                                        <tr class="table__row table__header">
                                          <th style="width:25%">${
                                            testSelectedReducer[i].SubTestType
                                          }</th>
                                          <th style="width:15%">${
                                            testSelectedReducer[i].ScoreType
                                          }</th>
                                          <th style="width:60%">${
                                            testSelectedReducer[i]
                                              .DescriptionType
                                          }</th>
                                        </tr>
                                        ${t.SubTests.map(
                                          t =>
                                            `<tr class="table__row">
                                              <td>${t.Name}</td>
                                              <td><strong>${subtestVal(
                                                t.Id
                                              )}</strong></td>
                                              <td>
                                                <div>${t.Description}</div>
                                              </td>
                                            </tr>`
                                        ).join("")}
                                      </table>`
                                  ).join("")}
                                </div>`
                              ).join("")
                            : ""
                        }
                      </div>`
                      ).join("")
                    : ""
                }
                ${
                  t.ParentGroupSubScales !== undefined
                    ? t.ParentGroupSubScales.map(
                        t =>
                          `<div class="domain__test">
                          <h6>${t.ParentGroupSubScaleName}</h6>
                          ${t.ParentScaleTitles.map(
                            t => `
                              <h5>${t.ParentScaleName}</h5>
                              ${
                                t.ParentScaleDescription !== null
                                  ? `<p>${t.ParentScaleDescription}</p>`
                                  : ""
                              }
                              <table class="test-table">
                                <tr class="table__row table__header">
                                  <th style="width:25%">${
                                    testSelectedReducer[i].SubTestType
                                  }</th>
                                  <th style="width:15%">${
                                    testSelectedReducer[i].ScoreType
                                  }</th>
                                  <th style="width:60%">${
                                    testSelectedReducer[i].DescriptionType
                                  }</th>
                                </tr>
                                ${t.SubTests.map(
                                  t =>
                                    `<tr class="table__row">
                                      <td>${t.Name}</td>
                                      <td><strong>${subtestVal(
                                        t.Id
                                      )}</strong></td>
                                      <td>
                                        <div>${t.Description}</div>
                                      </td>
                                    </tr>`
                                ).join("")}
                              </table>`
                          ).join("")}
                        </div>`
                      ).join("")
                    : ""
                }
                ${
                  t.TestModules !== undefined
                    ? t.TestModules.map(
                        t =>
                          `<div class="domain__test">
                        <h5>${t.Name}</h5>
                        <p>${t.Descriptions}</p>
                        ${t.ParentGroupScales.map(
                          t =>
                            `<div>
                            <div className="test-table-heading">
                              <h6>${t.ParentGroupScaleName} </h6>
                            </div>
                            ${t.ParentScaleTitles.map(
                              t =>
                                `<h5>${t.ParentScaleName}</h5>
                                ${
                                  t.ParentScaleDescription !== null
                                    ? `<p>${t.ParentScaleDescription}</p>`
                                    : ""
                                }
                                <table class="test-table">
                                  <tr class="table__row table__header">
                                    <th style="width:25%">${
                                      testSelectedReducer[i].SubTestType
                                    }</th>
                                    <th style="width:15%">${
                                      testSelectedReducer[i].ScoreType
                                    }</th>
                                    <th style="width:60%">${
                                      testSelectedReducer[i].DescriptionType
                                    }</th>
                                  </tr>
                                  ${t.SubTests.map(
                                    t =>
                                      `<tr class="table__row">
                                      <td>${t.Name}</td>
                                      <td><strong>${subtestVal(
                                        t.Id
                                      )}</strong></td>
                                      <td>
                                        <div>${t.Description}</div>
                                      </td>
                                    </tr>`
                                  ).join("")}
                                </table>`
                            ).join("")}
                            </div>`
                        ).join("")}
                        </div>`
                      ).join("")
                    : ""
                }
                ${
                  t.TestScoringTableDetails !== null
                    ? t.TestScoringTableDetails.map(
                        t =>
                          `<div class="test-table test-table--fourCols">
                          <h5 class="test-table__name">${
                            t.Name !== null ? t.Name : ""
                          }</h5>
                          <p>${t.Description !== null ? t.Description : ""}</p>
                          ${
                            t.ScoreHeader === null
                              ? ""
                              : `<p>${t.ScoreHeader}</p>`
                          }
                          <table class="test-table">
                            <tr class="table__row table__header">
                              ${
                                t.TableHeaderRowTitles.Col1 === null
                                  ? `<td></td>`
                                  : `<td>${t.TableHeaderRowTitles.Col1}</td>`
                              }
                              ${
                                t.TableHeaderRowTitles.Col2 === null
                                  ? `<td></td>`
                                  : `<td>${t.TableHeaderRowTitles.Col2}</td>`
                              }
                              ${
                                t.TableHeaderRowTitles.Col3 === null
                                  ? `<td></td>`
                                  : `<td>${t.TableHeaderRowTitles.Col3}</td>`
                              }
                              ${
                                t.TableHeaderRowTitles.Col4 === null
                                  ? `<td></td>`
                                  : `<td>${t.TableHeaderRowTitles.Col4}</td>`
                              }
                              ${
                                t.TableHeaderRowTitles.Col5 === null
                                  ? ""
                                  : `<td>${t.TableHeaderRowTitles.Col5}</td>`
                              }
                              ${
                                t.TableHeaderRowTitles.Col6 === null
                                  ? ""
                                  : `<td>${t.TableHeaderRowTitles.Col6}</td>`
                              }
                            </tr>
                          ${t.TestScoringTableScores.map(
                            t =>
                              `<tr className="table__row">
                              ${
                                t.Col1 === null
                                  ? `<td></td>`
                                  : t.Col1 === "<Field>"
                                  ? `<td>${testScoringTableScoresCol1Val(
                                      t.Id
                                    )}</td>`
                                  : `<td>${t.Col1}</td>`
                              }
                              ${
                                t.Col2 === null
                                  ? `<td></td>`
                                  : t.Col2 === "<Field>"
                                  ? `<td>${testScoringTableScoresCol2Val(
                                      t.Id
                                    )}</td>`
                                  : `<td>${t.Col2}</td>`
                              }
                              ${
                                t.Col3 === null
                                  ? `<td></td>`
                                  : t.Col3 === "<Field>"
                                  ? `<td>${testScoringTableScoresCol3Val(
                                      t.Id
                                    )}</td>`
                                  : `<td>${t.Col3}</td>`
                              }
                              ${
                                t.Col4 === null
                                  ? `<td></td>`
                                  : t.Col4 === "<Field>"
                                  ? `<td>${testScoringTableScoresCol4Val(
                                      t.Id
                                    )}</td>`
                                  : `<td>${t.Col4}</td>`
                              }
                              ${
                                t.Col5 === null
                                  ? ""
                                  : t.Col5 === "<Field>"
                                  ? `<td>${testScoringTableScoresCol5Val(
                                      t.Id
                                    )}</td>`
                                  : `<td>${t.Col5}</td>`
                              }
                              ${
                                t.Col6 === null
                                  ? ""
                                  : t.Col6 === "<Field>"
                                  ? `<td>${testScoringTableScoresCol6Val(
                                      t.Id
                                    )}</td>`
                                  : `<td>${t.Col6}</td>`
                              }
                            </tr>`
                          ).join("")}
                        </table>`
                      )
                    : ""
                }
                ${
                  t.TestSummaries !== undefined
                    ? t.TestSummaries.map(
                        t =>
                          `<div class="domain__test">
                            <h5>SUMMARY</h5>
                            <p className="test__list">
                              <span>
                                Overall, ${diName} performance on the&nbsp;
                                ${
                                  testSelectedReducer[0].Abbreviation
                                } provided a
                                snapshot into ${
                                  diGender === "Boy" ? `his` : `her`
                                } various cognitive
                                abilities and strengths. ${
                                  diGender === "Boy" ? `He` : `She`
                                } demonstrated
                                well-developed ${summaryAbilities(t.Id)}.
                              </span>
                            </p>
                            <p className="test__list">
                              <span>
                                However, ${
                                  diGender === "Boy" ? `he` : `she`
                                } also evidenced relative
                                challenges with ${summaryChallenges(t.Id)}.
                              </span>
                            </p>
                            <p>
                              These challenges should continue to be monitored and
                              evaluated so as to help ${
                                diGender === "Boy" ? `him` : `her`
                              } continue to
                              perform at ${
                                diGender === "Boy" ? `his` : `her`
                              } best.
                            </p>
                          </div>`
                      ).join("")
                    : ""
                }
              </section>`
              )
              .join("")}

              <section>
              ${
                diName !== null ||
                diAge !== null ||
                reasonReferral1 !== null ||
                reasonReferral2 !== null ||
                reasonReferral3 !== null ||
                relevantBackgroundHistory !== null ||
                resultsCurrentAssessment !== null ||
                summaryCurrentSituation !== null
                  ? `<h2>Summary of Findings</h2>`
                  : ""
              }

              ${
                diName !== undefined || diAge !== undefined
                  ? `<ul>
                      <li>
                        <p><em>Patient's name: </em><span>${diName}</span></p>
                      </li>
                      <li>
                        <p><em>Patient's age: </em><span>${diAge}</span></p>
                      </li>
                    </ul>`
                  : ""
              }

              ${
                reasonReferral1 !== undefined ||
                reasonReferral2 !== undefined ||
                reasonReferral3 !== undefined
                  ? `<h3>Reasons for Referral</h3>
                      <ul>
                          <li>
                            <p>${reasonReferral1}</p>
                          </li>
                          <li>
                            <p>${reasonReferral2}</p>
                          </li>
                          <li>
                            <p>${reasonReferral3}</p>
                          </li>
                      </ul>`
                  : ""
              }

              ${
                relevantBackgroundHistory !== null
                  ? `<h3>Relevant Background History</h3>
                    <div>
                      <p><span>${relevantBackgroundHistory}</span></p>
                    </div>`
                  : ""
              }

              ${
                resultsCurrentAssessment !== null
                  ? `<h3>Results of Current Assessment</h3>
                    <div>
                      <p><span>${resultsCurrentAssessment}</span></p>
                    </div>`
                  : ""
              }

              ${
                summaryCurrentSituation !== null
                  ? `<h3>Overall summary of current situation</h3>
                    <div>
                      <p><span>${summaryCurrentSituation}</span></p>
                    </div>`
                  : ""
              }
              </section>

              <section>
              ${
                dsmCodes !== undefined ||
                eduCodeIntellectualDisabilityId === true ||
                eduCodeHardOfHearingHh === true ||
                eduCodeDeafnessDeafHearingImpairmentHi === true ||
                eduCodeSpeechOrLanguageImpairmentSli === true ||
                eduCodeVisualImpairmentVi === true ||
                eduCodeEmotionalDisturbanceEd === true ||
                eduCodeOrthopedicImpairmentOi === true ||
                eduCodeOtherHealthImpairmentOhi === true ||
                eduCodeEstablishedMedicalDisabilityEmd === true ||
                eduCodeSpecificLearningDisabilitySld === true ||
                eduCodeDeafBlindnessDb === true ||
                eduCodeMultipleDisabilitiesMd === true ||
                eduCodeAutismAut === true ||
                eduCodeTraumaticBrainInjuryTbi === true
                  ? `<h2>Diagnostic considerations</h2>`
                  : ""
              }
              
              ${
                dsmCodes !== undefined
                  ? `<h3>DSM-5 diagnosis (ICD-10)</h3>
                    <ul>
                      ${dsmCodes
                        .map(
                          code =>
                            `<li>
                            <p><span>${code.codeValue}</span></p>
                        </li>`
                        )
                        .join("")}
                    </ul>`
                  : ""
              }

              ${
                eduCodeIntellectualDisabilityId === true ||
                eduCodeHardOfHearingHh === true ||
                eduCodeDeafnessDeafHearingImpairmentHi === true ||
                eduCodeSpeechOrLanguageImpairmentSli === true ||
                eduCodeVisualImpairmentVi === true ||
                eduCodeEmotionalDisturbanceEd === true ||
                eduCodeOrthopedicImpairmentOi === true ||
                eduCodeOtherHealthImpairmentOhi === true ||
                eduCodeEstablishedMedicalDisabilityEmd === true ||
                eduCodeSpecificLearningDisabilitySld === true ||
                eduCodeDeafBlindnessDb === true ||
                eduCodeMultipleDisabilitiesMd === true ||
                eduCodeAutismAut === true ||
                eduCodeTraumaticBrainInjuryTbi === true
                  ? `<h3>Educational classification</h3>
                  <div>
                    ${
                      eduCodeIntellectualDisabilityId === true
                        ? `<p>Intellectual Disability (ID) <span>Intellectual Disability means significantly subaverage general intellectual functioning, existing concurrently with deficits in adaptive behavior, and manifested during the developmental period, that adversely affects a child's educational performance. (34 Code of Federal Regulations (CFR), Sec. 300.8(c)(6)).</span></p>`
                        : ""
                    }
                    
                    ${
                      eduCodeHardOfHearingHh === true
                        ? `<p>Hard of hearing (HH) <span>Hard of Hearing means hearing, impairment, whether permanent or fluctuating, that adversely affects a child's educational performance, but that is not included under the definition of deaf in this section.</span></p>`
                        : ""
                    }
                    
                    ${
                      eduCodeDeafnessDeafHearingImpairmentHi === true
                        ? `<p>Deafness (DEAF)/Hearing impairment (HI) <span>Deafness means a hearing impairment that is so severe that the child is impaired in processing linguistic information through learning, with or without amplification, which adversely affects educational performance. (34 CFR Sec. 300.8(c)(3) Hearing Impairment is a federal category of disability, which includes both hard of hearing and deaf individuals as defined above.</span></p>`
                        : ""
                    }
          
                    ${
                      eduCodeSpeechOrLanguageImpairmentSli === true
                        ? `<p>Speech or language impairment (SLI) <span>Speech or Language Impairment means a communication disorder such as stuttering, impaired articulation, language impairment, or a voice impairment, that adversely affects a child's educational performance. (34 CFR Sec. 300.8(c)(11)).</span></p>`
                        : ""
                    }
          
                    ${
                      eduCodeVisualImpairmentVi === true
                        ? `<p>Visual impairment (VI) <span>Visually Impaired, including blindness means impairment in vision that, even with correction, adversely affects a child's educational performance. The term includes both partially seeing and blind children. (34 CFR Sec. 300.8(c)(13)).</span></p>`
                        : ""
                    }
          
                    ${
                      eduCodeEmotionalDisturbanceEd === true
                        ? `<p>Emotional disturbance (ED) <span>Emotional Disturbance means a condition exhibiting one or more of the following characteristics, over a long period of time and to a marked degree, that adversely affects educational performance: (A) An inability to learn which cannot be explained by intellectual, sensory, or health factors; (B) An inability to build or maintain satisfactory interpersonal relationships with peers and teachers; (C) Inappropriate types of behavior or feeling under normal circumstances; (D) A general pervasive mood of unhappiness or depression; or (E) A tendency to develop physical symptoms or fears associated with personal or school problems. The term (ED) includes schizophrenia. The term does not apply to children who are socially maladjusted, unless it is determined that they have an emotional disturbance. (34 CFR Sec. 300.8(c)(4)).</span></p>`
                        : ""
                    }
                                
                    ${
                      eduCodeOrthopedicImpairmentOi === true
                        ? `<p>Orthopedic impairment (OI) <span>Orthopedic Impairment means a severe orthopedic impairment that adversely affects a child's educational performance. The term includes impairments caused by congenital anomaly (e.g., clubfoot, absence of some member, etc.), impairments caused by disease (e.g., poliomyelitis, bone tuberculosis, etc.), and impairments from other causes (e.g., cerebral palsy, amputations, and fractures or burns which cause contractures). (34 CFR Sec. 300.8(b)(6 Sec. 300.8(c)(8)).</span></p>`
                        : ""
                    }
                                
                    ${
                      eduCodeOtherHealthImpairmentOhi === true
                        ? `<p>Other health impairment (OHI) <span>Other Health Impairment means having limited strength, vitality or alertness, due to chronic or acute health problems such as a heart condition, tuberculosis, rheumatic fever, nephritis, asthma, sickle cell anemia, hemophilia, epilepsy, lead poisoning, leukemia, or diabetes, which adversely affects a child's educational performance. (34 CFR Part 300.8 (c) (9)).</span></p>`
                        : ""
                    }
          
                    ${
                      eduCodeEstablishedMedicalDisabilityEmd === true
                        ? `<p>Established medical disability (EMD) <span>A disabling medical condition or congenital syndrome that the individualized education program (IEP) team determines has a high predictability of requiring special education and services. (CA Ed Code, Section 56441.11(d)) (Note: This eligibility category is only applicable for children ages 3-5).</span></p>`
                        : ""
                    }
          
                    ${
                      eduCodeSpecificLearningDisabilitySld === true
                        ? `<p>Specific learning disability (SLD) <span>Specific Learning Disability means a disorder in one or more of the basic psychological processes involved in understanding or using language, spoken or written, that may manifest itself in an imperfect ability to listen, think, speak, read, write, spell, or to do mathematical calculations, including such conditions as perceptual disabilities, brain injury, minimal brain dysfunction, dyslexia, and developmental aphasia. The term does not include learning problems that are primarily the result of visual, hearing, or motor handicaps, of mental retardation, of emotional disturbance or of environmental, cultural, or economic disadvantage. (34 CFR Sec. 300.8(c)(10)).</span></p>`
                        : ""
                    }
          
                    ${
                      eduCodeDeafBlindnessDb === true
                        ? `<p>DeafBlindness (DB) <span>DeafBlindness means concomitant hearing and visual impairments, the combination of which causes such severe communication and other developmental and educational needs that they cannot be accommodated in special education programs solely for children with deafness or children with blindness. (34 CFR Sec. 300.8(c)(2)).</span></p>`
                        : ""
                    }
                    
                    ${
                      eduCodeMultipleDisabilitiesMd === true
                        ? `<p>Multiple disabilities (MD) <span>Multiple Disabilities means concomitant impairments (such as mental retardationBlindness, mental retardationOrthopedic impairment, etc.,) the combination of which causes such severe educational needs that they cannot be accommodated in special education programs solely for one of the impairments. The term does not include deafBlind children. (34 CFR Sec. 300.8(c)(7)).</span></p>`
                        : ""
                    }
                    
                    ${
                      eduCodeAutismAut === true
                        ? `<p>Autism (AUT) <span>Autism means a developmental disability significantly affecting verbal and nonVerbal communication and social interaction, generally evident before age three, which adversely affects educational performance. Other characteristics often associated with autism include, engagement in repetitive activities and stereotyped movements, resistance to environmental change or change in daily routines, and unusual responses to sensory experiences. The term does not does not apply if a child's educational performance is adversely affected primarily because the child has an emotional disturbance. A child who manifests characteristics of autism after age three, that child could be diagnosed as having autism if the criteria in the above paragraph are satisfied. (34 CFR Sec. 300.8(c)(1)).</span></p>`
                        : ""
                    }
                    
                    ${
                      eduCodeTraumaticBrainInjuryTbi === true
                        ? `<p>Traumatic brain injury (TBI) <span>Traumatic Brain Injury means an acquired injury to the brain caused by an external physical force, resulting in total or partial functional disability or psychosocial impairment, which adversely affects educational performance. The term applies to both open or closed head injuries resulting in impairments in one or more areas, such as cognition; language; memory; attention; reasoning; abstract thinking; judgment; problemSolving; sensory, perceptual and motor abilities; psychosocial behavior; physical functions; information processing; and speech. The term does not include brain injuries that are congenital or degenerative, nor brain injuries induced by birth trauma. (34 CFR Sec. 300.8(c)(12)).</span></p>`
                        : ""
                    }
                  </div>`
                  : ""
              }
              </section>

              ${
                recommendationAdhd === true ||
                recommendationAutism === true ||
                recommendationDementia === true ||
                recommendationDysthymia === true ||
                recommendationLearningDisabilityMathematics === true ||
                recommendationLearningDisabilityReading === true ||
                recommendationNeurocognitiveDisorder === true ||
                recommendationVisualProcessingChildrenAdults === true ||
                recommendationVisualProcessingChildren === true ||
                recommendationLearningDisabilityWritingChildrenAdults ===
                  true ||
                recommendationLearningDisabilityWritingChildren === true ||
                recommendationAuditoryProcessingWeaknessChildrenAdults ===
                  true ||
                recommendationAuditoryProcessingWeaknessChildren === true
                  ? `<section class="li-not-bold recommendations">
                      <h2>Recommendations</h2>
                      <p>
                        Based on the current testing results, recommendations to support ${diName}’s needs and strengths are as follows:
                      </p>
                      ${recommendations
                        .map(r =>
                          r.selected === true
                            ? `<div className="recommendations">
                              <h3>${r.name}</h3>
                              <ul>
                              ${r.recommendation
                                .map(
                                  item =>
                                    `<li>${item.text.replace(
                                      /CLIENT NAME/g,
                                      `${diName}`
                                    )}</li>
                                  ${
                                    item.subtext.length > 0
                                      ? item.subtext
                                          .map(
                                            r =>
                                              `<ul>
                                        <li>${r.text.replace(
                                          /CLIENT NAME/g,
                                          `${diName}`
                                        )}</li>
                                      </ul>`
                                          )
                                          .join("")
                                      : ""
                                  }`
                                )
                                .join("")}
                              </ul>
                              ${
                                adhdRecommendationsFreehand !== undefined
                                  ? `<p>Additional ADHD recommendations: <span>${adhdRecommendationsFreehand}</span></p>`
                                  : ""
                              }
                            </div>`
                            : ""
                        )
                        .join("")}
                    </section>`
                  : ""
              }
              ${
                WIATIII === true ||
                NelsonDenny === true ||
                WJIVACH === true ||
                BRIEF === true ||
                Conners3 === true ||
                DKEFS === true ||
                RBANS === true ||
                NEPSYII === true ||
                QIKCPT === true ||
                VinelandII === true ||
                ADOS2 === true ||
                CARS2 === true ||
                GARS3 === true ||
                WISCV === true ||
                CTONI2 === true ||
                DASII === true ||
                WASIII === true ||
                WAISIV === true ||
                WJIVCOG === true ||
                WPPSIIV === true ||
                WRAML2 === true ||
                GORT5 === true ||
                WMSIV === true ||
                WRAVMA === true ||
                BeeryVMI === true ||
                BASC3 === true ||
                PIY === true ||
                HTP === true ||
                MCMIIV === true ||
                MMPI2 === true ||
                MMPIA === true ||
                Rorschach === true ||
                TSCC === true
                  ? `<section class="appendices">
                      <h2>Appendix of scores</h2>
                    ${appendixReducer.Tests.map(
                      (a, i) =>
                        `<div class="appendix">
                        <h4>${a.TestName}</h4>
                        <span class="h7">&nbsp;${a.Abbreviation}</span>
                        ${
                          a.TestIndexes !== undefined
                            ? `<div>
                            <table class="test-table test-table--appendix">
                            <tr class="table__row table__header">
                              <th style="width:50%">Subtest</th>
                              <th style="width:10%">Score</th>
                              <th style="width:10%">% Rank</th>
                              <th style="width:20%">Range</th>
                            </tr>
                            ${a.TestIndexes.map(
                              testIndex => `<tr class="table__row">
                            <td style="width:50%">${testIndex.IndexName.replace(
                              "<span>",
                              ""
                            )
                              .replace("</span>", "")
                              .replace(/\(|\)/g, "")}</td>
                            <td style="width:10%"><strong>${appendixTestIndexScoreVal(
                              testIndex.Id,
                              testIndex.IndexName
                            )}</strong></td>
                            <td style="width:10%"><strong>${appendixTestIndexRankVal(
                              testIndex.Id,
                              testIndex.IndexName
                            )}</strong></td>
                            <td style="width:20%"><strong>${appendixTestIndexRangeVal(
                              testIndex.Id,
                              testIndex.IndexName
                            )}</strong></td>
                          </tr>`
                            ).join("")}
                            </table>
                          </div>`
                            : ""
                        }
                        ${
                          a.SubTests !== undefined
                            ? `<div>
                            <table class="test-table test-table--appendix">
                              <tr class="table__row table__header">
                                <th style="width:50%">Subtest</th>
                                <th style="width:10%">Score</th>
                                ${
                                  appendixReducer.Tests[i].Abbreviation ===
                                  "TOMM"
                                    ? `<th style="width:10%"># Correct</th>`
                                    : `<th style="width:10%">% Rank</th>`
                                }
                                ${
                                  appendixReducer.Tests[i].Abbreviation ===
                                    "GORT-5" ||
                                  appendixReducer.Tests[i].Abbreviation ===
                                    "TOMM"
                                    ? ""
                                    : `<th style="width:20%">Gr. Eqv.</th>`
                                }
                                ${
                                  appendixReducer.Tests[i].Abbreviation ===
                                  "GORT-5"
                                    ? `<th style="width:20%">Classification</th>`
                                    : ""
                                }
                                ${
                                  appendixReducer.Tests[i].Abbreviation ===
                                  "TOMM"
                                    ? `<th style="width:20%">Percentile</th>`
                                    : ""
                                }
                              </tr>
                              ${a.SubTests.map(
                                subtest =>
                                  `<tr class="table__row">
                                  <td style="width:50%">${subtest.name}</td>
                                  <td style="width:10%"><strong>${appendixSubtestScoreVal(
                                    subtest.id
                                  )}</strong></td>
                                  <td style="width:10%"><strong>${appendixSubtestRankVal(
                                    subtest.id
                                  )}</strong></td>
                                  ${
                                    appendixReducer.Tests[i].Abbreviation ===
                                      "GORT-5" ||
                                    appendixReducer.Tests[i].Abbreviation ===
                                      "TOMM"
                                      ? `<td style="width:20%"><strong>${appendixSubtestClassificationVal(
                                          subtest.id
                                        )}</strong></td>`
                                      : `<td style="width:20%"><strong>${appendixSubtestGradeEquivalentVal(
                                          subtest.id
                                        )}</strong></td>`
                                  }
                                </tr>`
                              ).join("")}
                              ${
                                appendixReducer.Tests[i].Id === 18
                                  ? `<tr class="table__row">
                                <td style="width:50%">ORI (Oral Reading Index)</td>
                                <td style="width:10%"><strong>${t18ORIScore}</strong></td>
                                <td style="width:10%"><strong>${t18ApendixGort5ORIGradeEquivalent}</strong></td>
                                <td style="width:20%"><strong>${t18ApendixGort5ORIRank}</strong></td>
                                </tr>`
                                  : ""
                              }
                              </table>
                            </div>`
                            : ""
                        }
                        ${
                          a.ParentScale !== undefined
                            ? a.ParentScale.map(
                                p => `
                              <div>
                                <h5>${p.ParentScaleTitle}</h5>
                                <table class="test-table test-table--appendix">
                                  <tr class="table__row table__header">
                                    <th style="width:50%">Subtest</th>
                                    <th style="width:10%">Score</th>
                                    ${
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "MMPI-2" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "MMPI-A" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "TSCC"
                                        ? ""
                                        : `<th style="width:10%">% Rank</th>`
                                    }
                                    ${
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "WJ-IV ACH" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "BRIEF" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "NEPSY-II" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "Vineland-II" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "CTONI-2" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "WISC-V" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "WAIS-IV" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "WASI-IV" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "WJ-IV COG" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "WPPSI-IV" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "Beery VMI" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "MMPI-2" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "MMPI-A" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "PIY" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "TSCC"
                                        ? ""
                                        : `<th style="width:10%">Gr. Eqv.</th>`
                                    }
                                    ${
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "DAS-II" ||
                                      appendixReducer.Tests[i].Abbreviation ===
                                        "PIY"
                                        ? ""
                                        : `<th style="width:20%">Classification</th>`
                                    }
                                  </tr>
                                  ${p.SubTests.map(
                                    subtest =>
                                      `<tr class="table__row">
                                        <td style="width:50%">${
                                          subtest.name
                                        }</td>
                                        <td style="width:10%"><strong>${appendixSubtestScoreVal(
                                          subtest.id
                                        )}</strong></td>
                                        ${
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "MMPI-2" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "MMPI-A" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "TSCC"
                                            ? ""
                                            : `<td style="width:10%"><strong>${appendixSubtestRankVal(
                                                subtest.id
                                              )}</strong></td>`
                                        }
                                        ${
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "WJ-IV ACH" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "BRIEF" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "NEPSY-II" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "Vineland-II" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "CTONI-2" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "WISC-V" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "WAIS-IV" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "WASI-IV" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "WJ-IV COG" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "WPPSI-IV" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "Beery VMI" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "MMPI-2" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "MMPI-A" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "PIY" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "TSCC"
                                            ? ""
                                            : `<td style="width:10%"><strong>${appendixSubtestGradeEquivalentVal(
                                                subtest.id
                                              )}</strong></td>`
                                        }
                                        ${
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "DAS-II" ||
                                          appendixReducer.Tests[i]
                                            .Abbreviation === "PIY"
                                            ? ""
                                            : `<td style="width:20%"><strong>${appendixSubtestClassificationVal(
                                                subtest.id
                                              )}</strong></td>`
                                        }
                                      </tr>`
                                  ).join("")}
                                </table>
                              </div>`
                              ).join("")
                            : ""
                        }
                        ${
                          a.ParentGroupSubScales !== undefined
                            ? a.ParentGroupSubScales.map(
                                pgs =>
                                  `<div>
                              <h6>${pgs.ParentGroupSubScaleName}</h6>
                                ${pgs.ParentScale.map(
                                  p => `
                                    <div>
                                      <h5>${p.ParentScaleTitle}</h5>
                                      <table class="test-table test-table--appendix">
                                        <tr class="table__row table__header">
                                          <th style="width:50%">Subtest</th>
                                          <th style="width:10%">Score</th>
                                          <th style="width:10%">% Rank</th>
                                          ${
                                            appendixReducer.Tests[i]
                                              .Abbreviation === "WJ-IV ACH" ||
                                            appendixReducer.Tests[i]
                                              .Abbreviation === "BRIEF" ||
                                            appendixReducer.Tests[i]
                                              .Abbreviation === "Conners-3" ||
                                            appendixReducer.Tests[i]
                                              .Abbreviation === "RBANS" ||
                                            appendixReducer.Tests[i]
                                              .Abbreviation === "WRAML2"
                                              ? ""
                                              : `<th style="width:10%">Gr. Eqv.</th>`
                                          }
                                          <th style="width:20%">Classification</th>
                                        </tr>
                                        ${p.SubTests.map(
                                          subtest =>
                                            `<tr class="table__row">
                                              <td style="width:50%">${
                                                subtest.name
                                              }</td>
                                              <td style="width:10%"><strong>${appendixSubtestScoreVal(
                                                subtest.id
                                              )}</strong></td>
                                              <td style="width:10%"><strong>${appendixSubtestRankVal(
                                                subtest.id
                                              )}</strong></td>
                                              ${
                                                appendixReducer.Tests[i]
                                                  .Abbreviation ===
                                                  "WJ-IV ACH" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation === "BRIEF" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation ===
                                                  "Conners-3" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation === "RBANS" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation === "WRAML2"
                                                  ? ""
                                                  : `<td style="width:10%"><strong>${appendixSubtestGradeEquivalentVal(
                                                      subtest.id
                                                    )}</strong></td>`
                                              }
                                              <td style="width:20%"><strong>${appendixSubtestClassificationVal(
                                                subtest.id
                                              )}</strong></td>
                                            </tr>`
                                        ).join("")}
                                      </table>
                                  </div>`
                                ).join("")}
                              </div>`
                              ).join("")
                            : ""
                        }
                        ${
                          a.ParentGroupScales !== undefined
                            ? a.ParentGroupScales.map(
                                pgs =>
                                  `<div>
                                ${
                                  pgs.ParentScaleTitles !== undefined
                                    ? `<div>
                                        <h6>${pgs.ParentGroupScaleName}</h6>
                                        ${pgs.ParentScaleTitles.map(
                                          pst => `
                                        <div>
                                          <h5>${pst.ParentScaleName}</h5>
                                          <table class="test-table test-table--appendix">
                                            <tr class="table__row table__header">
                                              <th style="width:50%">Subtest</th>
                                              <th style="width:10%">Score</th>
                                              <th style="width:10%">% Rank</th>
                                              ${
                                                appendixReducer.Tests[i]
                                                  .Abbreviation ===
                                                  "WJ-IV ACH" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation === "BRIEF" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation ===
                                                  "Conners-3" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation === "RBANS" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation === "WRAML2" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation === "BASC-3"
                                                  ? ""
                                                  : `<th style="width:10%">Gr. Eqv.</th>`
                                              }
                                              <th style="width:20%">Classification</th>
                                            </tr>
                                            ${pst.SubTests.map(
                                              subtest =>
                                                `<tr class="table__row">
                                                  <td style="width:50%">${
                                                    subtest.name
                                                  }</td>
                                                  <td style="width:10%"><strong>${appendixSubtestScoreVal(
                                                    subtest.id
                                                  )}</strong></td>
                                                  <td style="width:10%"><strong>${appendixSubtestRankVal(
                                                    subtest.id
                                                  )}</strong></td>
                                                  ${
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation ===
                                                      "WJ-IV ACH" ||
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation ===
                                                      "BRIEF" ||
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation ===
                                                      "Conners-3" ||
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation ===
                                                      "RBANS" ||
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation ===
                                                      "WRAML2" ||
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation === "BASC-3"
                                                      ? ""
                                                      : `<td style="width:10%"><strong>${appendixSubtestGradeEquivalentVal(
                                                          subtest.id
                                                        )}</strong></td>`
                                                  }
                                                  <td style="width:20%"><strong>${appendixSubtestClassificationVal(
                                                    subtest.id
                                                  )}</strong></td>
                                                </tr>`
                                            ).join("")}
                                          </table>
                                      </div>`
                                        ).join("")}
                                  </div>`
                                    : ""
                                }
                                ${
                                  pgs.ParentGroupSubScales !== undefined
                                    ? `<div>
                                        <h6>${pgs.ParentGroupScaleName}</h6>
                                        ${pgs.ParentGroupSubScales.map(
                                          pgss => `
                                        <div>
                                          <h4 class="parentGroupSubScale__parentGroupSubScaleName">${
                                            pgss.ParentGroupSubScaleName
                                          }</h4>
                                          ${pgss.ParentScaleTitles.map(
                                            pst => `
                                          <h5>${pst.ParentScaleName}</h5>
                                          <table class="test-table test-table--appendix">
                                            <tr class="table__row table__header">
                                              <th style="width:50%">Subtest</th>
                                              <th style="width:10%">Score</th>
                                              <th style="width:10%">% Rank</th>
                                              ${
                                                appendixReducer.Tests[i]
                                                  .Abbreviation ===
                                                  "WJ-IV ACH" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation === "BRIEF" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation ===
                                                  "Conners-3" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation === "RBANS" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation === "WRAML2" ||
                                                appendixReducer.Tests[i]
                                                  .Abbreviation === "BASC-3"
                                                  ? ""
                                                  : `<th style="width:10%">Gr. Eqv.</th>`
                                              }
                                              <th style="width:20%">Classification</th>
                                            </tr>
                                            ${pst.SubTests.map(
                                              subtest =>
                                                `<tr class="table__row">
                                                  <td style="width:50%">${
                                                    subtest.name
                                                  }</td>
                                                  <td style="width:10%"><strong>${appendixSubtestScoreVal(
                                                    subtest.id
                                                  )}</strong></td>
                                                  <td style="width:10%"><strong>${appendixSubtestRankVal(
                                                    subtest.id
                                                  )}</strong></td>
                                                  ${
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation ===
                                                      "WJ-IV ACH" ||
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation ===
                                                      "BRIEF" ||
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation ===
                                                      "Conners-3" ||
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation ===
                                                      "RBANS" ||
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation ===
                                                      "WRAML2" ||
                                                    appendixReducer.Tests[i]
                                                      .Abbreviation === "BASC-3"
                                                      ? ""
                                                      : `<td style="width:10%"><strong>${appendixSubtestGradeEquivalentVal(
                                                          subtest.id
                                                        )}</strong></td>`
                                                  }
                                                  <td style="width:20%"><strong>${appendixSubtestClassificationVal(
                                                    subtest.id
                                                  )}</strong></td>
                                                </tr>`
                                            ).join("")}
                                          </table>
                                          `
                                          ).join("")}
                                      </div>`
                                        ).join("")}
                                  </div>`
                                    : ""
                                }
                              </div>`
                              ).join("")
                            : ""
                        }
                        ${
                          a.TestScoringTableScores !== undefined
                            ? `<div>
                            <table class="test-table test-table--appendix">
                              <tr class="table__row table__header">
                                <th style="width:50%">Subtest</th>
                                <th style="width:10%">Score</th>
                                <th style="width:10%">% Rank</th>
                                <th style="width:20%">Classification</th>
                              </tr>
                              ${a.TestScoringTableScores.map(
                                item =>
                                  `<tr class="table__row">
                                  <td style="width:50%">${item.name}</td>
                                  <td style="width:10%"><strong>${appendixSubtestScoreVal(
                                    item.id
                                  )}</strong></td>
                                  <td style="width:10%"><strong>${appendixSubtestRankVal(
                                    item.id
                                  )}</strong></td>
                                  <td style="width:20%"><strong>${appendixSubtestClassificationVal(
                                    item.id
                                  )}</strong></td>
                                </tr>`
                              ).join("")}
                            </table>
                            </div>`
                            : ""
                        }
                      </div>`
                    ).join("")}
                    </section>`
                  : ""
              }
          </main>
        </body>
      </html>
    `;
};
