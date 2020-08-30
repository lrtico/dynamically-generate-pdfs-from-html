//export a function that returns all the necessary HTML and generates the PDF

module.exports = ({
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
  t4WiatiiiSummaryAbilities,
  t4WiatiiiSummaryChallenges,
  t30NelsonDennyStandardScore,
  t30NelsonDennyPercentile,
  t30NelsonDennyGradeEquivalent,
  t31NelsonDennyStandardScore,
  t31NelsonDennyPercentile,
  t31NelsonDennyGradeEquivalent,
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
  t631EditingScore,
  t632ScienceScore,
  t633SocialStudiesScore,
  t634HumanitiesScore,
  t635WordAttackScore,
  t636SpellingOfSoundsScore,
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
  testSelectedReducer
}) => {
  const subtestVal = id => {
    let val;
    switch (id) {
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
                margin: 0.25in 0.125in;
              }
              article,
              aside,
              footer,
              header,
              nav,
              section {
                display: block;
              }
              //table { page-break-inside:auto }
              // div   { page-break-inside:avoid; }
              // thead { display:table-header-group }
              // tfoot { display:table-footer-group }
              // .pdf-t main section h2 {
              //   page-break-after: avoid !important;
              // }
              // .pdf-t main section > h2 + p {
              //   page-break-after: avoid !important;
              //   orphans: 2;
              // }

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
              .pdf-t main section > table {
                width: 100%;
                line-height: inherit;
                text-align: left;
                }
              .pdf-t main section > table td {
                vertical-align: top;
              }
              .pdf-t main section > table div p {
                color: #007cb3;
                font-style: italic;
              }
              .pdf-t main section > table div p span {
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
              .pdf-t main section .test-table.test-table--appendix .table__row > div:nth-child(1) {
                flex: none;
                width: 3in;
                flex-grow: 1;
              }
              .pdf-t main section .test-table.test-table--appendix .table__row > div:nth-child(2) {
                flex: none;
                margin-right: 0.25in;
                width: 1.5in;
              }
              .pdf-t main section .test-table.test-table--appendix .table__row > div:nth-child(3) {
                flex: none;
                margin-right: 0.25in;
                width: 1.25in;
              }
              .pdf-t main section .test-table.test-table--appendix .table__row > div:nth-child(4) {
                flex: none;
                margin-right: 0.25in;
                width: 1.25in;
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
              .pdf-t main section .domain__test h4 {
                color: #464646;
                display: inline-block;
                font-family: "Lato", "Montserrat", sans-serif;
                font-size: 14pt;
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
              .pdf-t main section .test__table h5 {
                color: #777;
                font-family: "Montserrat", sans-serif;
                font-size: 12pt;
                margin: 36px 0 9px;
                text-transform: uppercase;
              }
              .pdf-t main section .domain__test h5 .lowercase {
                text-transform: none;
              }
              .pdf-t main section .domain__test h6 ~ h5 {
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
              .pdf-t main section .test-table h6 {
                color: #39a4d4;
                font-family: "Lato", "Merriweather", "Georgia", serif;
                font-size: 12pt;
                font-style: italic;
                font-weight: normal;
                margin: 36px 0 0;
                text-transform: capitalize;
              }
              .pdf-t main section .domain__test h5 ~ h6 {
                margin-top: 36px;
              }
              .pdf-t main section .domain__test span.h7 {
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
                margin: 0.5in 0;
              }
              .appendices .appendix h2 {
                flex: 0 1 auto;
                font-size: 18pt;
                margin: 0;
              }
              .appendices .appendix h5 {
                color: #777;
                font-family: "Montserrat", sans-serif;
                font-size: 16pt;
                margin: 0.5in 0 0.25in;
                text-transform: uppercase;
              }
              .appendices .appendix h5:first-of-type {
                margin: 0.25in 0;
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
              .appendices .appendix .test-table--appendix .table__row.table__header {
                border-top: none;
                border-bottom: none;
                font-size: 12pt;
                padding: 0;
              }
              .appendices .appendix .test-table--appendix .table__row {
                border-bottom: none;
                font-size: 12pt;
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
              @media print {
                @page {
                  size: letter;
                  //margin:0;
                }
                html, body {
                    // width: 200mm;
                    // height: 270mm;
                    // background: #FFF;
                    // overflow:visible;
                }
                body {
                    // padding-top:5mm;
                    // padding-bottom:5mm;
                }
              }
            </style>
         </head>
         <body id="html-pdf-template" class="pdf-t">
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
                  <td>
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
                  <td>
                    <div>
                      <p>Place of Evaluation: <span>${diEvaluationlocation}</span></p>
                      <p>Date(s) of Evaluation: 
                        <ul>
                          ${
                            diDateoftesting.length > 0
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
                  <td>
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
                  <td>
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

            <section>
              <h2>Records Reviewed</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <ul>
                        ${
                          recordsReviewed.length > 0
                            ? recordsReviewed
                                .map(
                                  record =>
                                    `<li>${record.title}, Report dated: ${
                                      record.date
                                    }</li>`
                                )
                                .join("")
                            : null
                        }
                      </ul>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Background Information</h2>
              <p><em>The following background information was obtained from a clinical interview with ${diEvaluator}.</em></p>
              ${
                bhPrimaryCaregiverMother !== null &&
                bhPrimaryCaregiverMother == true
                  ? `<div class="primary-caregiver--active"><h3>Mother</h3><span>Primary caregiver</span></div>`
                  : `<h3>Mother</h3>`
              }
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        bhMotherName !== null
                          ? `<p>Name: <span>${bhMotherName}</span></p>`
                          : null
                      }
                      ${
                        bhStepmother === "Yes"
                          ? `<p>Relationship: <span>Stepmother</span></p>`
                          : `<p>Relationship: <span>Mother</span></p>`
                      }
                      <p>Cell phone: <span>${bhMotherCellPhone}</span></p>
                      <p>Occupation: <span>${bhMotherOccupation}</span></p>
                      <p>Years: <span>${bhMotherLengthEmployement}</span></p>
                      <p>Primarylanguage: <span>${bhMotherPrimaryLanguage}</span></p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>Age: <span>${bhMotherAge}</span></p>
                      <p>Home phone: <span>${bhMotherHomePhone}</span></p>
                      <p>Work phone: <span>${bhMotherWorkPhone}</span></p>
                      <p>Employer: <span>${bhMotherEmployer}</span></p>
                      <p>Highest grade: <span>${bhMotherHighestGrade}</span></p>
                      <p>Secondary language: <span>${bhMotherSecondaryLanguage}</span></p>
                    </div>
                  </td>
                </tr>
              </table>

              ${
                bhPrimaryCaregiverFather !== null &&
                bhPrimaryCaregiverFather == true
                  ? `<div class="primary-caregiver--active"><h3>Father</h3><span>Primary caregiver</span></div>`
                  : `<h3>Father</h3>`
              }
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        bhFatherName !== null
                          ? `<p>Name: <span>${bhFatherName}</span></p>`
                          : null
                      }
                      ${
                        bhStepfather === "Yes"
                          ? `<p>Relationship: <span>Stepfather</span></p>`
                          : `<p>Relationship: <span>Father</span></p>`
                      }
                      <p>Cell phone: <span>${bhFatherCellPhone}</span></p>
                      <p>Occupation: <span>${bhFatherOccupation}</span></p>
                      <p>Years: <span>${bhFatherLengthEmployement}</span></p>
                      <p>Primarylanguage: <span>${bhFatherPrimaryLanguage}</span></p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>Age: <span>${bhFatherAge}</span></p>
                      <p>Home phone: <span>${bhFatherHomePhone}</span></p>
                      <p>Work phone: <span>${bhFatherWorkPhone}</span></p>
                      <p>Employer: <span>${bhFatherEmployer}</span></p>
                      <p>Highest grade: <span>${bhFatherHighestGrade}</span></p>
                      <p>Secondary language: <span>${bhFatherSecondaryLanguage}</span></p>
                    </div>
                  </td>
                </tr>
              </table>

              <h3>Primary Caregiver Not Mother or Father</h3>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        bhPrimaryCaregiverName !== null
                          ? `<p>Name: <span>${bhPrimaryCaregiverName}</span></p>`
                          : null
                      }
                      <p>Age: <span>${bhOtherParentStepparentAge}</span></p>
                      <p>Relationship: <span>${bhOtherParentStepparentGuardian}</span></p>
                      <p>Home phone: <span>${bhOtherParentStepparentHomePhone}</span></p>
                      <p>Work phone: <span>${bhOtherParentStepparentWorkPhone}</span></p>
                      <p>Cell phone: <span>${bhOtherParentStepparentCellPhone}</span></p>
                      <p>Address: <span>${bhOtherParentStepparentAddress}</span></p>
                    </div>
                  </td>
                </tr> 
              </table>
            </section>

            <section>
              <h2>Childcare Information</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      ${
                        ccCaregiverGone !== null
                          ? `<p>Who takes care of this child if the caregivers are gone? <span>${ccCaregiverGone}</span></p>`
                          : null
                      }
                      <p>How many hours per day is this child in a childcare setting? <span>${ccHoursPerDay}</span></p>
                      ${
                        ccDifferentPeople !== undefined
                          ? `<p>Who are the different individuals that care for this child? <span>${ccDifferentPeople}</span></p>`
                          : ""
                      }
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
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
                      <p>Has this child ever experienced any parental separations, divorces, or deaths? <span>${fhExperienced}</span></p>
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
            </section>

            <section>
              <h2>Siblings</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <ul>
                        ${
                          brothersSisters.length > 0
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
                            : null
                        }
                      </ul>
                      <div>
                        <p>How does this child get along with brother(s) and/or sister(s)? <span>${bsGetAlong}</span></p>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            ${
              crResidence !== undefined && crResidenceLength !== undefined
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

            <section>
              <h2>Family Residence</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <p>All the activities in which this child often participates with the family is:</p>
                      <ul>
                        ${frMovies === true ? `<li>Movies</li>` : ""}
                        ${frGames === true ? `<li>Games</li>` : ""}
                        ${frMeals === true ? `<li>Meals</li>` : ""}
                        ${frSports === true ? `<li>Sports</li>` : ""}
                        ${
                          frConversations === true
                            ? `<li>Conversations</li>`
                            : ""
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
                      <p>What is the language spoken at home? <span>${frSpokenLanguage}</span></p>
                      <p>How frequently does this child see grandparents? <span>${frGrandparentFrequency}</span></p>
                      <p>What do you most enjoy about this child? <span>${frEnjoy}</span></p>
                      <p>What do you find most difficult about raising this child? <span>${frDifficult}</span></p>
                      <p>What would you like this child to be when he grows up? <span>${frCareer}</span></p>
                      <p>What level of education do you hope this child will complete? <span>${frEducationLevel}</span></p>
                      <p>Who is mainly in charge of discipline in the home? <span>${frDisciplinarian}</span></p>
                      <p>Do all caregivers agree on discipline? <span>${frAgreeDiscipline}</span></p>
                      <p>Please describe discipline techniques? <span>${frDisciplineTechniques}</span></p>
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Medical & Development History</h2>
              <h3>Pregnancy</h3>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <p>Was this child a planned pregnancy? <span>${mdhPlannedPregnancy}</span></p>
                      <p>Was the mother under doctor’s care? <span>${mdhDrCare}</span></p>
                      <p>The number of previous pregnancies/miscarriages? <span>${mdhTotalPregnancies}</span></p>
                      <p>Complications that occurred during pregnancy:</p>
                      <ul>
                        ${
                          mdhPregnancyDifficultConception === true
                            ? `<li>Difficulty in conception</li>`
                            : ""
                        }
                        ${
                          mdhPregnancyToxemia === true ? `<li>Toxemia</li>` : ""
                        }
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
                      </ul>
                      
                    </div>
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h3>Birth</h3>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <p>At this child’s birth, what was the mother’s age? <span>${mdhMothersAge}</span></p>
                      <p>Father’s? <span>${mdhFathersAge}</span></p>
                      <p>Mother’s age at birth of first child: <span>${mdhMothersAgeFirstChild}</span></p>
                      <p>Was this child born in a hospital? <span>${mdhHospitalBirth}</span></p>
                      ${
                        mdhHospitalBirth === "No"
                          ? `<p>Was this child born in a hospital? <span>${mdhBirthLocation}</span></p>`
                          : ""
                      }
                      <p>Length of pregnancy: <span>${mdhPregnancyLength}</span></p>
                      <p>Birth weight: <span>${mdhBirthWeight}</span></p>
                      <p>Length of labor: <span>${mdhLaborLength}</span></p>
                      <p>Apgar score: <span>${mdhApgarScore}</span></p>
                      <p>Child’s condition at birth: <span>${mdhBirthConditionChild}</span></p>  
                      <p>Mother’s condition at birth: <span>${mdhBirthConditionMother}</span></p>  
                      <p>Complications that occurred during birth:</p>
                      <ul>
                        ${mdhForceps === true ? `<li>Forceps</li>` : ""}
                        ${mdhBreech === true ? `<li>Breech</li>` : ""}
                        ${mdhInduced === true ? `<li>Induced</li>` : ""}
                        ${mdhCeasarean === true ? `<li>Ceasarean</li>` : ""}
                      </ul>
                      <p>Other deliver complications: <span>${mdhDeliveryComplications}</span></p>  
                      <p>Incubator: <span>${mdhIncubator}</span></p>  
                      <p>Jaundiced: <span>${mdhJaundiced}</span></p>  
                      <p>Breathing problems right after birth? <span>${mdhBreathingProblems}</span></p>  
                      <p>Supplemental oxygen? <span>${mdhSupplementalOxygen}</span></p>  
                      <p>Was anesthesia used during delivery? If so, what kind? <span>${mdhAnesthesia}</span></p>  
                      <p>Mother's length of hospital stay? <span>${mdhMotherLengthHospital}</span></p>  
                      <p>Child's length of hospital stay? <span>${mdhChildLengthHospital}</span></p>  
                    </div>
                    
                  </td>
                </tr>
              </table>
            </section>

            <section>
              <h2>Development</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <p>At what age did this child first do the following?</p>  
                      <ul>
                        ${
                          mdhTurnOverMonths !== null || mdhTurnOverYear !== null
                            ? `<li><p>Turn over: ${
                                mdhTurnOverMonths !== null
                                  ? `<span>${mdhTurnOverMonths} ${
                                      mdhTurnOverMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhTurnOverYear !== null
                                  ? ` <span>${mdhTurnOverYear} ${
                                      mdhTurnOverYear === "1" ? `year` : `years`
                                    }</span>`
                                  : ""
                              }</p></li>`
                            : ""
                        }
                        ${
                          mdhWalkDownStairsMonths !== null ||
                          mdhWalkDownStairsYear !== null
                            ? `<li><p>Walk down stairs: ${
                                mdhWalkDownStairsMonths !== null
                                  ? `<span>${mdhWalkDownStairsMonths} ${
                                      mdhWalkDownStairsMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhWalkDownStairsYear !== null
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
                          mdhSitAloneMonths !== null || mdhSitAloneYear !== null
                            ? `<li><p>Sit alone: ${
                                mdhSitAloneMonths !== null
                                  ? `<span>${mdhSitAloneMonths} ${
                                      mdhSitAloneMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhSitAloneYear !== null
                                  ? ` <span>${mdhSitAloneYear} ${
                                      mdhSitAloneYear === "1" ? `year` : `years`
                                    }</span>`
                                  : ""
                              }</p></li>`
                            : ""
                        }
                        ${
                          mdhAttractedSoundMonths !== null ||
                          mdhAttractedSoundYear !== null
                            ? `<li><p>Show interest in or attraction to sound: ${
                                mdhAttractedSoundMonths !== null
                                  ? `<span>${mdhAttractedSoundMonths} ${
                                      mdhAttractedSoundMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhAttractedSoundYear !== null
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
                          mdhCrawlMonths !== null || mdhCrawlYear !== null
                            ? `<li><p>Crawl: ${
                                mdhCrawlMonths !== null
                                  ? `<span>${mdhCrawlMonths} ${
                                      mdhCrawlMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhCrawlYear !== null
                                  ? ` <span>${mdhCrawlYear} ${
                                      mdhCrawlYear === "1" ? `year` : `years`
                                    }</span>`
                                  : ""
                              }</p></li>`
                            : ""
                        }
                        ${
                          mdhUnderstandWordsMonths !== null ||
                          mdhUnderstandWordsYear !== null
                            ? `<li><p>Understand first words: ${
                                mdhUnderstandWordsMonths !== null
                                  ? `<span>${mdhUnderstandWordsMonths} ${
                                      mdhUnderstandWordsMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhUnderstandWordsYear !== null
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
                          mdhStandAloneMonths !== null ||
                          mdhStandAloneYear !== null
                            ? `<li><p>Stand alone: ${
                                mdhStandAloneMonths !== null
                                  ? `<span>${mdhStandAloneMonths} ${
                                      mdhStandAloneMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhStandAloneYear !== null
                                  ? ` <span>${mdhStandAloneYear} ${
                                      mdhStandAloneYear === "1"
                                        ? `year`
                                        : `years`
                                    }</span>`
                                  : ""
                              }</p></li>`
                            : ""
                        }
                        ${
                          mdhSpeakFirstWordsMonths !== null ||
                          mdhSpeakFirstWordsYear !== null
                            ? `<li><p>Speak first words: ${
                                mdhSpeakFirstWordsMonths !== null
                                  ? `<span>${mdhSpeakFirstWordsMonths} ${
                                      mdhSpeakFirstWordsMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhSpeakFirstWordsYear !== null
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
                          mdhWalkAloneMonths !== null ||
                          mdhWalkAloneYear !== null
                            ? `<li><p>Walk alone: ${
                                mdhWalkAloneMonths !== null
                                  ? `<span>${mdhWalkAloneMonths} ${
                                      mdhWalkAloneMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhWalkAloneYear !== null
                                  ? ` <span>${mdhWalkAloneYear} ${
                                      mdhWalkAloneYear === "1"
                                        ? `year`
                                        : `years`
                                    }</span>`
                                  : ""
                              }</p></li>`
                            : ""
                        }
                        ${
                          mdhSpeakSentencesMonths !== null ||
                          mdhSpeakSentencesYear !== null
                            ? `<li><p>Speak in sentences: ${
                                mdhSpeakSentencesMonths !== null
                                  ? `<span>${mdhSpeakSentencesMonths} ${
                                      mdhSpeakSentencesMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhSpeakSentencesYear !== null
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
                          mdhWalkUpStairsMonths !== null ||
                          mdhWalkUpStairsYear !== null
                            ? `<li><p>Walk up stairs: ${
                                mdhWalkUpStairsMonths !== null
                                  ? `<span>${mdhWalkUpStairsMonths} ${
                                      mdhWalkUpStairsMonths === "1"
                                        ? `month`
                                        : `months`
                                    }</span>`
                                  : ""
                              } ${
                                mdhWalkUpStairsYear !== null
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
            </section>

            <section>
              <h3>Early Years</h3>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <div>
                      <p>Was this child breast-fed? <span>${mdhBreastFed}</span></p>
                      <p>When weaned? <span>${mdhBreastFedWeaned}</span></p>
                      <p>Was this child bottle-fed? <span>${mdhBottleFed}</span></p>
                      <p>When weaned? <span>${mdhBottleFedWeaned}</span></p>
                      <p>When was this child toilet trained?</p>
                      <ul>
                      ${
                        mdhToiletTrainedDay !== null
                          ? `<li><p>Days: <span>${mdhToiletTrainedDay}</span></p></li>`
                          : ""
                      }
                      ${
                        mdhToiletTrainedNight !== null
                          ? `<li><p>Nights: <span>${mdhToiletTrainedNight}</span></p></li>`
                          : ""
                      }
                      </ul>
                      <p>Did bed-wetting occur after toilet training? <span>${mdhBedWetting}</span></p>  
                      ${
                        mdhBedWetting === "Yes"
                          ? `
                              <p>If yes, until what age? <span>${mdhBedWettingStop}</span></p>
                            `
                          : ""
                      }
                      <p>Did bed-soiling occur? <span>${mdhBedSoiling}</span></p>  
                      ${
                        mdhBedSoiling === "Yes"
                          ? `
                              <p>If yes, until what age? <span>${mdhBedSoilingStop}</span></p>
                            `
                          : ""
                      }
                      <p>Were there medical reasons for bed-wetting or bed-soiling? <span>${mdhBedWettingMedicalReasons}</span></p>  
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
            </section>

            ${
              mdhWalkingDifficulty === true ||
              mdhUnclearSpeech == true ||
              wizardForm19Disabled !== true
                ? `<section>
                  <h3>Developmental</h3>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <p>${diName} experienced the following problems:</p>  
                          <ul>
                            ${
                              mdhWalkingDifficulty === true
                                ? `<li><p>Walking difficulty${
                                    mdhWalkingDifficultyDescription !== null
                                      ? `: <span>${mdhWalkingDifficultyDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhUnclearSpeech === true
                                ? `<li><p>Unclear speech${
                                    mdhUnclearSpeechDescription !== null
                                      ? `: <span>${mdhUnclearSpeechDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhFeedingProblem === true
                                ? `<li><p>Feeding problem${
                                    mdhFeedingProblemDescription !== null
                                      ? `: <span>${mdhFeedingProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhUnderweightProblem === true
                                ? `<li><p>Underweight problem${
                                    mdhUnderweightProblemDescription !== null
                                      ? `: <span>${mdhUnderweightProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhOverweightProblem === true
                                ? `<li><p>Overweight problem${
                                    mdhOverweightProblemDescription !== null
                                      ? `: <span>${mdhOverweightProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhColic === true
                                ? `<li><p>Colic${
                                    mdhColicDescription !== null
                                      ? `: <span>${mdhColicDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhSleepProblem === true
                                ? `<li><p>Sleep problem${
                                    mdhSleepProblemDescription !== null
                                      ? `: <span>${mdhSleepProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhEatingProblem === true
                                ? `<li><p>Eating problem${
                                    mdhEatingProblemDescription !== null
                                      ? `: <span>${mdhEatingProblemDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhLearningRideBike === true
                                ? `<li><p>Difficulty learning to ride a bike${
                                    mdhLearningRideBikeDescription !== null
                                      ? `: <span>${mdhLearningRideBikeDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhLearningSkip === true
                                ? `<li><p>Difficulty learning how to skip${
                                    mdhLearningSkipDescription !== null
                                      ? `: <span>${mdhLearningSkipDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhLearningThrowCatch === true
                                ? `<li><p>Difficulty learning to throw or catch${
                                    mdhLearningThrowCatchDescription !== null
                                      ? `: <span>${mdhLearningThrowCatchDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhMotorSkillsFirstFour === true
                                ? `<li><p>Motor skills${
                                    mdhMotorSkillsFirstFourDescription !== null
                                      ? `: <span>${mdhMotorSkillsFirstFourDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhTemperTantrum === true
                                ? `<li><p>Temper tantrums${
                                    mdhTemperTantrumDescription !== null
                                      ? `: <span>${mdhTemperTantrumDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhNoThriveFirstFour === true
                                ? `<li><p>Failure to thrive${
                                    mdhNoThriveFirstFourDescription !== null
                                      ? `: <span>${mdhNoThriveFirstFourDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhSeparationAnxiety === true
                                ? `<li><p>Separating from parents${
                                    mdhSeparationAnxietyDescription !== null
                                      ? `: <span>${mdhSeparationAnxietyDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                            ${
                              mdhExcessiveCrying === true
                                ? `<li><p>Excessive crying${
                                    mdhExcessiveCryingDescription !== null
                                      ? `: <span>${mdhExcessiveCryingDescription}</span></p></li>`
                                      : ""
                                  }`
                                : ""
                            }
                          </ul>
                          ${
                            mdhChangeWritingHand !== null
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
              wizardForm20Disabled !== true ||
              mhMeaselsMonths !== undefined ||
              mhMeaselsMonthsYear !== undefined
                ? `<section>
                  <h2>Medical history</h2>
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <div>
                          <p>${diName} has the following illnesses:</p>  
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
              medicationListGroup.length > 0 ||
              mcSexualAbuse !== undefined ||
              counselingGroup.length > 0 ||
              nuerologicalGroup.length > 0 ||
              psychologyGroup.length > 0 ||
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
                                medicationListGroup.length > 0
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
                              counselingGroup.length > 0
                                ? `<p>Psychology counseling or therapy this child has had:</p>
                                  <ul>
                                    ${
                                      counselingGroup.length > 0
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
                              nuerologicalGroup.length > 0
                                ? `<p>Neurological exam(s) this child has had:</p>
                                  <ul>
                                    ${
                                      nuerologicalGroup.length > 0
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
                              psychologyGroup.length > 0
                                ? `<p>Psychiatric exam(s) this child has had:</p>
                                  <ul>
                                    ${
                                      psychologyGroup.length > 0
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
              specialEdGroup.length > 0 ||
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
                            specialEdGroup.length > 0
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
                    <p>Please refer to the table below for the numerical results of John’ performance on all of the measures, as well as his classification level.</p>
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
                    <p>${t.Descriptions}</p>
                  </div>
                ${
                  t.ParentScaleTitles.length > 0
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
                                  <td><strong>${subtestVal(t.Id)}</strong></td>
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
                  t.ParentGroupSubScales.length > 0
                    ? t.ParentGroupSubScales.map(
                        t =>
                          `<div class="domain__test">
                          <h5>${t.ParentGroupSubScaleName}</h5>
                          ${t.ParentScaleTitles.map(
                            t => `
                              <div>
                                <h6 className="h7">${t.ParentScaleName}</h6>
                              </div>
                              <p>${t.ParentScaleDescription}</p>
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
                  t.TestScoringTableDetails !== null
                    ? t.TestScoringTableDetails.map(
                        t =>
                          `<div class="test-table test-table--fourCols">
                          <h6>${
                            t.Description !== null ? t.Description : ""
                          }</h6>
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
                                  ? `<td>Variable t.Col5</td>`
                                  : `<td>${t.Col5}</td>`
                              }
                              ${
                                t.Col6 === null
                                  ? ""
                                  : t.Col6 === "<Field>"
                                  ? `<td>Variable t.Col6</td>`
                                  : `<td>${t.Col6}</td>`
                              }
                            </tr>`
                          ).join("")}
                        </table>`
                      )
                    : ""
                }
                ${
                  t.TestSummaries.length > 0
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
                                snapshot into (his/her) various cognitive
                                abilities and strengths. (He/She) demonstrated
                                well-developed ${t4WiatiiiSummaryAbilities}.
                              </span>
                            </p>
                            <p className="test__list">
                              <span>
                                However, (he/she) also evidenced relative
                                challenges with ${t4WiatiiiSummaryChallenges}.
                              </span>
                            </p>
                            <p>
                              These challenges should continue to be monitored and
                              evaluated so as to help (him/her) continue to
                              perform at (his/her) best.
                            </p>
                          </div>`
                      ).join("")
                    : ""
                }
              </section>`
              )
              .join("")}

          </main>
        </body>
      </html>
    `;
};
