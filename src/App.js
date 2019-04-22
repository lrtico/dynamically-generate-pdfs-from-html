import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import "./App.css";

class App extends Component {
  state = {
    wizardForm19Disabled: false,
    wizardForm20Disabled: false,
    wizardForm21Disabled: false,
    wizardForm22Disabled: false,
    wizardForm23Disabled: false,
    wizardForm24Disabled: false,
    wizardForm25Disabled: false,
    wizardForm26Disabled: false,
    wizardForm27Disabled: false,
    wizardForm28Disabled: false,
    wizardForm29Disabled: false,
    wizardForm30Disabled: false,
    wizardForm31Disabled: false,
    wizardForm32Disabled: false,
    wizardForm33Disabled: false,
    wizardForm34Disabled: false,
    wizardForm35Disabled: false,
    wizardForm42Disabled: false,
    wizardForm43Disabled: false,
    wizardForm44Disabled: false,
    wizardForm45Disabled: false,
    wizardForm46Disabled: false,
    diName: "George Mason",
    diAge: "8",
    diSchool: "Ty Cobb Elementary",
    diGrade: "3rd",
    diDateofbirth: "2011-06-07",
    diEvaluationlocation: "One Neuro",
    diGender: "Boy",
    diHandedness: "Right",
    diEvaluator: "Sissy Spacek",
    diDateoftesting: [
      {
        title: "Date1",
        date: "2019-03-12"
      },
      {
        title: "Date22",
        date: "2019-03-19"
      },
      {
        title: "Date3",
        date: "2019-03-19"
      }
    ],
    paqName: "Carey Grant",
    paqAddress: "32 Main Street, Sometown, CA 94553",
    paqHomePhone: "(342) 324-9482",
    paqCellPhone: "(342) 529-8411",
    paqWorkPhone: "(342) 922-4830",
    paqGuardian: "Father",
    reasonReferral1: "The brown fox",
    reasonReferral2: "jumps over the purple moon",
    reasonReferral3: "to reach the stars",
    recordsReviewed: [
      {
        title: "Record reviewed 1",
        date: "2018-4-8"
      },
      {
        title: "Record reviewed 2",
        date: "2018-12-3"
      }
    ],
    bhPrimaryCaregiverMother: true,
    bhMotherName: "Belinda Monroe",
    bhStepmother: "Yes",
    bhMotherCellPhone: "(432) 342-3443",
    bhMotherOccupation: "(323) 990-4899",
    bhMotherLengthEmployement: "3",
    bhMotherPrimaryLanguage: "English",
    bhMotherAge: "32",
    bhMotherHomePhone: "(313) 990-9343",
    bhMotherWorkPhone: "(490) 909-2394",
    bhMotherEmployer: "Spanx",
    bhMotherHighestGrade: "12th",
    bhMotherSecondaryLanguage: "na",
    bhPrimaryCaregiverFather: false,
    bhFatherName: "Ben Monroe",
    bhStepfather: "No",
    bhFatherCellPhone: "(432) 342-3443",
    bhFatherOccupation: "(323) 990-4899",
    bhFatherLengthEmployement: "23",
    bhFatherPrimaryLanguage: "English",
    bhFatherAge: "32",
    bhFatherHomePhone: "(313) 990-9343",
    bhFatherWorkPhone: "(490) 909-2394",
    bhFatherEmployer: "Chase",
    bhFatherHighestGrade: "12th",
    bhFatherSecondaryLanguage: "Spanish",
    bhPrimaryCaregiverName: "Jebadiah Deliliah",
    bhOtherParentStepparentAge: "45",
    bhOtherParentStepparentGuardian: "Foster parent",
    bhOtherParentStepparentHomePhone: "(895) 388-4292",
    bhOtherParentStepparentWorkPhone: "(310) 993-2310",
    bhOtherParentStepparentCellPhone: "(411) 499-2993",
    bhOtherParentStepparentAddress: "123 Main Street, Somecity, CA 90332",
    ccCaregiverGone: "Sherlock Holmes",
    ccHoursPerDay: "3",
    //ccDifferentPeople: None,
    fhCloseness: "Yes",
    fhParentalClosenessChoice: "Mother",
    fhExperienced: "No",
    fhLifeExperiencesDate: "March 14, 2010",
    fhLifeExperiencesAge: "4",
    fhLifeExperiencesDetails:
      "The mother and father had irreconsiable differences",
    fhCustodyMother: true,
    fhCustodyFather: false,
    fhCustodyBoth: false,
    fhVisitation: "Every other weekend",
    brothersSisters: [
      {
        age: "3",
        relationship: "Sister",
        home: "Yes"
      },
      {
        age: "4",
        relationship: "Brother",
        home: "Yes"
      }
    ],
    bsGetAlong: "They get along very well",
    crResidence: "Single-family home",
    crResidenceLength: "4",
    frMovies: true,
    frGames: false,
    frMeals: true,
    frSports: true,
    frConversations: false,
    frVisitsRelatives: true,
    frTelevision: true,
    frChurch: true,
    frOther: false,
    frSpokenLanguage: "English",
    frGrandparentFrequency: "Never",
    frEnjoy: "His smile",
    frDifficult: "His tantrums",
    frCareer: "Happy",
    frEducationLevel: "College",
    frDisciplinarian: "Other",
    frDisciplinarianOtherDesc: "Grandmother",
    frAgreeDiscipline: "Yes",
    frDisciplineTechniques: "Tough love",
    mdhPlannedPregnancy: "Yes",
    mdhDrCare: "Yes",
    mdhTotalPregnancies: "2",
    mdhPregnancyDifficultConception: true,
    mdhPregnancyToxemia: true,
    mdhPregnancyWeightGain: true,
    mdhPregnancyVomiting: true,
    mdhPregnancyGermanMeasels: true,
    mdhPregnancySwelling: true,
    mdhPregnancyEmotional: true,
    mdhPregnancyVaginalBleeding: true,
    mdhPregnancyFlu: true,
    mdhPregnancyAnemia: true,
    mdhPregnancyBloodPressure: true,
    mdhPregnancyInjury: true,
    mdhOtherComplication: true,
    mdhOtherComplicationDescription: "Lots of frosted cake",
    mdhMothersAge: "42",
    mdhFathersAge: "39",
    mdhMothersAgeFirstChild: "23",
    mdhHospitalBirth: "No",
    mdhBirthLocation: "Home",
    mdhPregnancyLength: "59",
    mdhBirthWeight: "8lb 2oz",
    mdhLaborLength: "12",
    mdhApgarScore: "33",
    mdhBirthConditionChild: "Excellent",
    mdhBirthConditionMother: "Excellent",
    mdhForceps: true,
    mdhBreech: true,
    mdhInduced: true,
    mdhCeasarean: true,
    mdhDeliveryComplications: "More delivery complications",
    mdhIncubator: "32",
    mdhJaundiced: "3",
    mdhBreathingProblems: "No",
    mdhSupplementalOxygen: "No",
    mdhAnesthesia: "Yes",
    mdhMotherLengthHospital: "3",
    mdhChildLengthHospital: "4",
    mdhTurnOverMonths: "3",
    mdhTurnOverYear: "5",
    mdhWalkDownStairsMonths: "11",
    mdhWalkDownStairsYear: "2",
    mdhSitAloneMonths: "9",
    mdhSitAloneYear: "3",
    mdhAttractedSoundMonths: "4",
    mdhAttractedSoundYear: "1",
    mdhCrawlMonths: "10",
    mdhCrawlYear: null,
    mdhUnderstandWordsMonths: "1",
    mdhUnderstandWordsYear: "4",
    mdhStandAloneMonths: "2",
    mdhStandAloneYear: "1",
    mdhSpeakFirstWordsMonths: "12",
    mdhSpeakFirstWordsYear: "14",
    mdhWalkAloneMonths: "5",
    mdhWalkAloneYear: "2",
    mdhSpeakSentencesMonths: "0",
    mdhSpeakSentencesYear: "4",
    mdhWalkUpStairsMonths: "8",
    mdhWalkUpStairsYear: "1",
    mdhBreastFed: "Yes",
    mdhBreastFedWeaned: "1 year",
    mdhBottleFed: "Yes",
    mdhBottleFedWeaned: "3.5 years",
    mdhToiletTrainedDay: "4 years",
    mdhToiletTrainedNight: "2 years",
    mdhBedWetting: "No",
    mdhBedWettingStop: null,
    mdhBedSoiling: "Yes",
    mdhBedSoilingStop: "4 years",
    mdhBedWettingMedicalReasons: "Yes",
    mdhBedWettingMedicalReasonsDescription: "Lots and lots of frosted cake",
    mdhWalkingDifficulty: true,
    mdhWalkingDifficultyDescription:
      "The brown foxed jumped over the moon to reach the stars",
    mdhUnclearSpeech: true,
    mdhUnclearSpeechDescription:
      "The brown foxed jumped over the moon to reach the stars",
    mdhFeedingProblem: true,
    mdhFeedingProblemDescription: "Ate too fast too much",
    mdhUnderweightProblem: true,
    mdhUnderweightProblemDescription: "Seems to like running too much",
    mdhOverweightProblem: true,
    mdhOverweightProblemDescription: "Likes the sweet stuff",
    mdhColic: true,
    mdhColicDescription: "Eating seems to agitate the baby",
    mdhSleepProblem: true,
    mdhSleepProblemDescription: "Sometimes has night terrors",
    mdhEatingProblem: true,
    mdhEatingProblemDescription: "Major foodie",
    mdhLearningRideBike: true,
    mdhLearningRideBikeDescription: "Afraid to run into the mailbox",
    mdhLearningSkip: true,
    mdhLearningSkipDescription: "Unable to coordinate both feet to jump",
    mdhLearningThrowCatch: true,
    mdhLearningThrowCatchDescription: "Scared of the ball",
    mdhMotorSkillsFirstFour: true,
    mdhMotorSkillsFirstFourDescription: null,
    mdhTemperTantrum: true,
    mdhTemperTantrumDescription: null,
    mdhNoThriveFirstFour: true,
    mdhNoThriveFirstFourDescription: null,
    mdhSeparationAnxiety: true,
    mdhSeparationAnxietyDescription:
      "George has trouble being dropped off at preschool",
    mdhExcessiveCrying: true,
    mdhExcessiveCryingDescription: "Lots of crying",
    mdhChangeWritingHand: "Yes",
    mhMeaselsMonths: "1",
    mhMeaselsMonthsYear: "3",
    mhRheumaticFeverMonths: "11",
    mhRheumaticFeverYear: "4",
    mhGermanMeaselsMonths: "2",
    mhGermanMeaselsYear: "8",
    mhDiptheriaMonths: "3",
    mhDiptheriaYear: "12",
    mhMumpsMonths: "0",
    mhMumpsYear: "11",
    mhUnderstandWordsMonths: "8",
    mhUnderstandWordsYear: "21",
    mdhMeningitisMonths: "1",
    mdhMeningitisYear: "14",
    mhChickenPoxMonth: "2",
    mhChickenPoxYear: "5",
    mhEncephalitisMonth: "0",
    mhEncephalitisYear: "9",
    mhTuberculosisMonth: "4",
    mhTuberculosisYear: "15",
    mhAnemiaMonth: "3",
    mhAnemiaYear: "11",
    mhWhoopingCoughMonths: "4",
    mhWhoopingCoughYear: "12",
    mhFever104Months: "8",
    mhFever104Year: "2",
    mhScarletFeverMonths: "4",
    mhScarletFeverYear: "4",
    mhBrokenBonesMonths: "1",
    mhBrokenBonesYear: "3",
    mhConcussionMonths: "9",
    mhConcussionYear: "12",
    mhComaLossConsciousnessMonths: "3",
    mhComaLossConsciousnessYear: "12",
    mdColds: "Every month",
    mdChronicCough: "Once a year",
    mdAsthma: "Daily",
    mdHayFever: "Twice a year",
    mdSinusCondition: "Annually",
    mdPhysicalExertion: "Weekly",
    mdActivityLimits: "Daily",
    mdHeartMurmur: "Daily",
    mdVomiting: "Monthly",
    mdDiarrhea: "Weekly",
    mdConstipation: "Bi-weekly",
    mdStomachPain: "Daily",
    mdUrination: "Daily",
    mdPainUrinating: "Monthly",
    mdExessiveUrination: "Daily",
    mdUrineOdor: "Daily",
    mdMusclePain: "Monthly",
    mdClumsyWalk: "Daily",
    mdPoorPosture: "Daily",
    mdOtherMuscleProblems: "Weekly",
    mdFrequentRashes: "Daily",
    mdBruisesEasily: "Sometimes",
    mdSores: "Weekly",
    mdSevereAcne: "Yes",
    mdItchySkin: "Yes",
    mdSeizuresConvulsions: "Yes",
    mdSpeechDefects: "Yes",
    mdAccidentProne: "Yes",
    mdNailBiter: "Yes",
    mdSucksThumb: "Yes",
    mdGrindsTeeth: "At night",
    mdTwitches: "Yes",
    mdBangsHead: "Yes",
    mdRocks: "Yes",
    mdBowelMovements: "Yes",
    mdNeurologicalMeds: "Yes",
    mdNeurologicalMedsDate: "3/21/14",
    mdNeurologicalMedsKind: "Guanfacine",
    mdNeurologicalTranquilizer: "Yes",
    mdNeurologicalTranquilizerDate: "3/21/14",
    mdNeurologicalTranquilizerKind: "Guanfacine",
    mdNeurologicalAdhdMeds: "Yes",
    mdNeurologicalAdhdMedsDate: "3/21/14",
    mdNeurologicalAdhdMedsKind: "Guanfacine",
    mdhAllergiesMedicine: true,
    mdhAllergiesMedicineDescription: "Voramir",
    mdhAllergiesFood: true,
    mdhAllergiesFoodDescription: "Strawberries, pineapple, & wheat",
    mdhAllergiesOther: true,
    mdhAllergiesOtherDescription: "The brown cow jumped over the purple moon",
    mdhSpeechStuttering: true,
    mdhSpeechStutteringDescription: "The brown cow jumped over the purple moon",
    mdhSpeechUnclear: true,
    mdhSpeechUnclearDescription: "The brown cow jumped over the purple moon",
    mdhSpeechOther: true,
    mdhSpeechOtherDescription: "The brown cow jumped over the purple moon",
    mdhSpeechExamDate: "3/21/14",
    mdhHearingEarInfection: true,
    mdhHearingProblems: true,
    mdhHearingTubes: true,
    mdhHearingEarInfectionDescription:
      "The brown cow jumped over the purple moon",
    mdhHearingProblemsDescription: "The brown cow jumped over the purple moon",
    mdhHearingTubesDescription: "The brown cow jumped over the purple moon",
    mdhHearingExamDate: "3/21/14",
    mdhVisionProblems: true,
    mdhVisionProblemsDescription: "The brown cow jumped over the purple moon",
    mdhGlasses: true,
    mdhGlassesDescription: "The brown cow jumped over the purple moon",
    mdhVisionExamDate: "3/21/14",
    mcDrName: "Dr. Guzman",
    mcDrPhone: "(334) 398-3812",
    mcDrVisitCount: "4",
    mcDrLastVisit: "3/21/14",
    medicationListGroup: [
      {
        mcMedicationName: "First med",
        mcMedicationReason: "1st Med reason"
      },
      {
        mcMedicationName: "Second med",
        mcMedicationReason: "2nd Med reason"
      }
    ],
    mcSexualAbuse: "No",
    counselingGroup: [
      {
        mcCounselingName: "Dr. Yoman Knots",
        mcCounselingAddress: "43 Main Street, Anytown, CA 93443",
        mcCounselingPhone: "(382) 840-9938",
        mcCounselingReason: "Depression",
        mcCounselingDate: "2/4/12"
      },
      {
        mcCounselingName: "Dr. Smithson Anderson",
        mcCounselingAddress: "13 Blue Rd., Anytown, CA 93443",
        mcCounselingPhone: "(382) 840-9938",
        mcCounselingReason: "Depression",
        mcCounselingDate: "2/4/14"
      },
      {
        mcCounselingName: "Dr. Smithson Anderson",
        mcCounselingAddress: "13 Blue Rd., Anytown, CA 93443",
        mcCounselingPhone: "(382) 840-9938",
        mcCounselingReason: "Depression",
        mcCounselingDate: "2/4/14"
      }
    ],
    nuerologicalGroup: [
      {
        mcNuerologicalName: "Roger Bond",
        mcNuerologicalAddress: "884 Cavendish Lane, Anycity, CA 93112",
        mcNuerologicalDate: "2019-02-01",
        mcNuerologicalReason: "ADHD"
      },
      {
        mcNuerologicalName: "Dr. Sarah Liberte",
        mcNuerologicalAddress: "4 S. Broadway Ave., Sometown, CA 94888",
        mcNuerologicalDate: "2019-01-01",
        mcNuerologicalReason: "ODD"
      }
    ],
    psychologyGroup: [
      {
        mcPsychologyExamName: "Dr. Yin Zhang",
        mcPsychologyExamCity: "Pasadena",
        mcPsychologyExamDate: "2019-01-01",
        mcPsychologyExamReason: "Depression"
      },
      {
        mcPsychologyExamName: "Dr. Yan Yan-Yan",
        mcPsychologyExamCity: "Foster City",
        mcPsychologyExamDate: "2016-01-01",
        mcPsychologyExamReason: "Depression"
      },
      {
        mcPsychologyExamName: "Dr. Yan Yan-Yan",
        mcPsychologyExamCity: "Foster City",
        mcPsychologyExamDate: "2016-01-01",
        mcPsychologyExamReason: "Depression"
      }
    ],
    fhDrugAbuse: true,
    fhAlzheimers: true,
    fhBehaviorDisorder: true,
    fhBirthDefect: true,
    fhCancer: true,
    fhCerbralPalsy: true,
    fhCysticFibrosis: true,
    fhDiabetes: true,
    fhEmotionalDisturbance: true,
    fhFoodAllergies: true,
    fhHeartDisease: true,
    fhHemophilia: true,
    fhHighBloodPressure: true,
    fhHuntingtonChorea: true,
    fhIntellectualDisability: true,
    fhKidneyDisease: true,
    fhMigraines: true,
    fhMultipleSclerosis: true,
    fhMuscularDystrophy: true,
    fhNervousnes: true,
    fhOtherLearningDisability: true,
    fhParkinsons: true,
    fhPhysicalHandicap: true,
    fhReadingProblem: true,
    fhSeizures: true,
    fhSevereHeadInjury: true,
    fhSickleCell: true,
    fhSpeechProblem: true,
    fhStroke: true,
    fhTaySachs: true,
    fhTourettes: true,
    fhTuberculosis: true,
    fhOther: true,
    fhFathersHealth: "Right as rain",
    fhMothersHealth: "Peachy",
    specialEdGroup: [
      {
        mcSpecialEdName: "Uncle Billy Boy",
        mcSpecialEdClass: "OT"
      },
      {
        mcSpecialEdName: "Cousin Sissy",
        mcSpecialEdClass: "SEIT"
      },
      {
        mcSpecialEdName: "Aunt May",
        mcSpecialEdClass: "OT"
      }
    ],
    fRelatingProblems: "Yes",
    fRelatingProblemsDesc: "Trouble empathizing",
    fFight: "Yes",
    fFightDesc: "Easily riled up",
    fYoungerFriends: "Yes",
    fYoungerFriendsDesc: "Most of the patient's friends are younger",
    fMakingFriends: "Yes",
    fMakingFriendsDesc: "It takes time",
    fAlone: "Yes",
    fAloneDesc: "The brown fox jumps",
    fNeighbhoodFriends: "Yes",
    fNeighbhoodFriendsDesc: "Sometimes",
    fRolePeerGroupGames: "The sky turns yellow at night",
    fSmokeCigarettes: false,
    fChewTobacco: true,
    fInhale: false,
    fAlcholol: true,
    fDrugs: true,
    riActivitesSports: "Football, baseball, swimming, track & field",
    riActivitesHobbies: "Video games, DIY, Maker",
    riActivitesOther: "Cub Scouts",
    btAttentionSpan: false,
    btSelfControl: false,
    btUnhappy: true,
    btAffectionless: false,
    btHidesFeelings: true,
    btOverEngergetic: true,
    btImpulsive: true,
    btOverreactsProblems: true,
    btShy: true,
    btParentalAttention: true,
    btCannotCalm: true,
    btFears: "The boogey man",
    btAngry: "Transistion times",
    ehDaycare: "Yes",
    ehDaycareAge: "3",
    ehDaycareTime: "3 hours a day",
    ehDaycareDays: "3 days a week",
    ehDaycareProblems: "None",
    ehKindergarten: "Yes",
    ehKindergartenProblems: "Unable to follow directions",
    ehChangedSchools: "Yes",
    ehChangedSchoolsDesc: "Bullied",
    ehRepeatGrade: "Yes",
    ehGradeRepeatDesc: "Disinterested in school work",
    ehGradeSkip: "Yes",
    ehGradeSkipDesc: "Super genius",
    ehDifficultyReading: "Yes",
    ehDifficultyReadingDesc: "Low patience",
    ehDifficultyMath: "Yes",
    ehDifficultyMathDesc: "Struggles to follow precise instructions",
    ehPoorGrades: "Yes",
    ehPoorGradesDesc: "Lazy",
    ehSpecialEd: "Yes",
    ehSpecialEdDesc: "Lorem ipsum",
    ehSpecialEdCurrent: "Yes",
    ehTypeSpecialEdClass: "OT",
    ehTypeSpecialEdHours: "3",
    ehDislikesSchool: "Yes",
    ehAbsent: "Yes",
    ehAbsentDesc: "Frequent stomach pains from nervousness",
    ehGraduateHsDesc: "5/31/2033",
    ehTeacherConcerns: "No",
    ehTeacherConcernsDesc: null,
    rdaReligonAffiliation: "Catholic",
    rdaReligonInvolvement: "5",
    rdaSpiritualImportance: "Very important",
    rdaReligonBuilding: "Church",
    rdaEthnicity: "White",
    rdaRace: "Italian",
    rdaIdenficationOther: "n/a",
    otherInformation:
      "The brown fox jumped over the blue moon to get the cheese",
    WIATIII: true,
    NelsonDenny: true,
    WJIVACH: true,
    BRIEF: true,
    Conners3: true,
    DKEFS: true,
    RBANS: true,
    NEPSYII: true,
    QIKCPT: true,
    VinelandII: true,
    ADOS2: true,
    CARS2: true,
    GARS3: true,
    WISCV: true,
    CTONI2: true,
    DASII: true,
    WASIII: true,
    WAISIV: true,
    WJIVCOG: true,
    WPPSIIV: true,
    WRAML2: true,
    GORT5: true,
    WMSIV: true,
    WRAVMA: true,
    BeeryVMI: true,
    BASC3: true,
    PIY: true,
    HTP: true,
    MCMIIV: true,
    MMPI2: true,
    MMPIA: true,
    Rorschach: true,
    TSCC: true,
    t59EarlyYearsCore: true,
    t120InattentionScore: "23",
    t121HyperactivityImpulsivityScore: "23",
    t122LearningProblemsScore: "23",
    t123ExecutiveFunctioningScore: "23",
    t124DefianceAggressionScore: "23",
    t125PeerRelationsScore: "23",
    t126AdhdInattentiveScore: "23",
    t127AdhdHyperactiveImpulsiveScore: "23",
    t128ConductDisorderScore: "23",
    t129OppositionalDefiantDisorderScore: "23",
    t130Conners3AdhdIndexScore: "23",
    t131Conners3GlobalIndexScore: "23",
    t132AnxietyScore: "23",
    t133DepressionScore: "23",
    t134SevereConductScore: "23",
    t135PositiveImpressionScore: "23",
    t136NegativeImpressionScore: "23",
    t137InconsistencyIndexScore: "23",
    t138InattentionScore: "23",
    t139HyperactivityImpulsivityScore: "23",
    t140LearningProblemsExecutiveFunctioningScore: "23",
    t141LearningProblemsScore: "23",
    t142ExecutiveFunctioningScore: "23",
    t143DefianceAggressionScore: "23",
    t144PeerRelationsScore: "23",
    t145AdhdInattentiveScore: "23",
    t146AdhdHyperactiveImpulsiveScore: "23",
    t147ConductDisorderScore: "23",
    t148OppositionalDefiantDisorderScore: "23",
    t149Conners3AdhdIndexScore: "23",
    t150Conners3GlobalIndexScore: "23",
    t151AnxietyScore: "23",
    t152DepressionScore: "23",
    t153SevereConductScore: "23",
    t154PositiveImpressionScore: "23",
    t155NegativeImpressionScore: "23",
    t156InconsistencyIndexScore: "23",
    t157InattentionScore: "23",
    t158HyperactivityImpulsivityScore: "23",
    t159LearningProblemsScore: "23",
    t160DefianceAggressionScore: "23",
    t161FamilyRelationsScore: "23",
    t162AdhdInattentiveScore: "23",
    t163AdhdHyperactiveImpulsiveScore: "23",
    t164ConductDisorderScore: "23",
    t165OppositionalDefiantDisorderScore: "23",
    t166Conners3AdhdIndexScore: "23",
    t644AnxietyScore: "23",
    t167DepressionScore: "23",
    t168SevereConductScore: "23",
    t169PositiveImpressionScore: "23",
    t170NegativeImpressionScore: "23",
    t171InconsistencyIndexScore: "23",
    t250ListeningComprehensionGradesPk12Score: "32",
    t251EarlyReadingSkillsGradesPk3Score: "87",
    t252ReadingComprehensionGrades112Score: "12",
    t253MathProblemSolvingGradesPk12Score: "54",
    t254AlphabetWritingFluencyGradesPk3Score: "31",
    t255SentenceCompositionGrades112Score: "78",
    t256WordReadingGrades112Score: "29",
    t257EssayCompositionGrades312Score: "87",
    t258PseudowordDecodingGrades112Score: "90",
    t259NumericalOperationsGradesk12Score: "57",
    t260OralExpressionGradespk12Score: "54",
    t261OralReadingFluencyGrades112Score: "42",
    t262ApellingGradesk12Score: "12",
    t263MathFluencyAdditionScore: "98",
    t264MathFluencySubtractionScore: "18",
    t265MathFluencyMultiplicationScore: "29",
    t4WiatiiiSummaryAbilities: "super-powers",
    t4WiatiiiSummaryChallenges: "water villans",
    t30NelsonDennyStandardScore: "75",
    t30NelsonDennyPercentile: "75",
    t30NelsonDennyGradeEquivalent: "5th",
    t31NelsonDennyStandardScore: "75",
    t31NelsonDennyPercentile: "75",
    t31NelsonDennyGradeEquivalent: "3rd",
    t616LetterWordIdentificationScore: "49",
    t617WordAttackScore: "49",
    t618PassageComprehensionScore: "49",
    t619ReadingRecallScore: "49",
    t620ReadingVocabularyScore: "49",
    t621CalculationScore: "49",
    t622MathFactFluencyScore: "49",
    t623AppliedProblemsScore: "49",
    t624NumberMatricesScore: "49",
    t625WritingSamplesScore: "49",
    t626SentenceWritingFluencyScore: "49",
    t627OralReadingScore: "49",
    t628SentenceReadingFluencyScore: "49",
    t629SpellingScore: "49",
    t630SpellingOfSoundsScore: "49",
    t631EditingScore: "49",
    t632ScienceScore: "49",
    t633SocialStudiesScore: "49",
    t634HumanitiesScore: "49",
    t635WordAttackScore: "49",
    t636SpellingOfSoundsScore: "49",
    t78InconsistencyScaleScore: "81",
    t79NegativityScaleScore: "87",
    t82InhibitScore: "88",
    t83ShiftScore: "88",
    t84EmotionalControlScore: "88",
    t85InitiateScore: "88",
    t86WorkingMemoryScore: "88",
    t87PlanOrganizeScore: "88",
    t88OrganizationOfMaterialsScore: "88",
    t89MonitorScore: "88",
    t90InhibitScore: "88",
    t91ShiftScore: "88",
    t92EmotionalControlScore: "88",
    t93InitiateScore: "88",
    t94WorkingMemoryScore: "88",
    t95PlanOrganizeScore: "88",
    t96OrganizationOfMaterialsScore: "88",
    t97MonitorScore: "88",
    testSelectedReducer: [
      {
        Id: 13,
        Name: "The Wechsler Individual Achievement Test 3",
        Abbreviation: "WIAT-III",
        Descriptions:
          "The Wechsler Individual Achievement Test – Third Edition (WIAT-III) is designed to measure the achievement of students who are in grades Prekindergarten (PK) through 12, or ages 4 years 0 months through 19 years 11 months. It consists of 16 subtests used to evaluate listening, speaking, reading, writing, and mathematics skills.",
        DomainId: 1,
        DomainName: "Academic Achievement",
        SubTestType: "Subtest",
        ScoreType: "Score",
        DescriptionType: "Description",
        CreatedDate: "2018-09-25T18:03:46.077",
        ParentGroupScales: [],
        TestIndexes: [],
        SubTests: [],
        TestSummaries: [
          {
            Id: 4,
            Name: "SUMMARY AT END OF ACH SECTION",
            TestId: 13,
            Descriptions:
              "Overall, (client’s) performance on the WIAT-III provided a snapshot into (his/her) various academic abilities and strengths. (He/She) demonstrated well-developed <input type='text' id='txtWiat2AbilityScore' /> abilities. However, (he/she) also evidenced relative challenges with <input type='text' id='txtWiat2ChallengesScore' />. These challenges should continue to be monitored and evaluated so as to help (him/her) continue to perform at (his/her) best."
          }
        ],
        ParentScaleTitles: [
          {
            Id: 59,
            ParentScaleName: "Early Years Core",
            ParentScaleDescription: null,
            CreatedDate: null,
            SubTests: [
              {
                Id: 250,
                TestId: null,
                Name: "Listening Comprehension (Grades PK-12)",
                Abbreviation: null,
                Description:
                  "This subtest contains two components:<ul>  <li>Receptive Vocabulary: Measures listening vocabulary. The student points to the picture that best illustrates the meaning of each word he or she hears.</li>  <li>Oral Discourse Comprehension: Measures the ability to make inferences about, and remember details from, oral sentences and discourse. The student listens to sentences and passages and orally responds to comprehension questions.</li></ul>",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 251,
                TestId: null,
                Name: "Early Reading Skills (Grades PK-3)",
                Abbreviation: null,
                Description:
                  "This subtest measures several areas deemed important for developing reading skills: naming letters, letter-sound correspondence (alphabetic principle), phonological awareness, and word reading comprehension. The student names letters of the alphabet, identifies and generates rhyming words, identifies words with the same beginning and ending sounds, blends sounds, matches sounds with letters and letter blends, and matches written words with pictures that illustrate their meaning.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 252,
                TestId: null,
                Name: "Reading Comprehension (Grades 1-12)",
                Abbreviation: null,
                Description:
                  "Measures untimed reading comprehension of various types of text, including fictional stories, informational text, advertisements, and how-to passages. The student may read passages aloud or silently. After each passage, the student orally responds to literal and inferential comprehension questions that are read aloud by the examiner.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 253,
                TestId: null,
                Name: "Math Problem Solving (Grades PK-12)",
                Abbreviation: null,
                Description:
                  "Measures untimed math problem-solving skills in the following domains: basic concepts, everyday applications, geometry, and algebra. The student provides oral and pointing responses.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 254,
                TestId: null,
                Name: "Alphabet Writing Fluency (Grades PK-3)",
                Abbreviation: null,
                Description:
                  "Measures the ability to write letters of the alphabet within a 30-second time limit. The student may write letters in any order, in cursive or print, in uppercase or lowercase.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 255,
                TestId: null,
                Name: "Sentence Composition (Grades 1-12)",
                Abbreviation: null,
                Description:
                  "This subtest contains two components:<ul><li>  Sentence Combining: Measures sentence formulation skills and written syntactic maturity. The student combines two or three sentences into one sentence that preserves the meaning of the original sentences. </li>  <li>Sentence Building: Measures sentence formulation skills and written syntactic ability. For each item, the student is asked to write one sentence that uses a target word with appropriate context. </li></ul>",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 256,
                TestId: null,
                Name: "Word Reading (Grades 1-12)",
                Abbreviation: null,
                Description:
                  "Measures speed and accuracy of decontextualized word recognition. The student reads aloud from a list of words that increase in difficulty.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 257,
                TestId: null,
                Name: "Essay Composition (Grades 3-12)",
                Abbreviation: null,
                Description:
                  "Measures spontaneous, compositional writing skills within a 10-minute time limit.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 258,
                TestId: null,
                Name: "Pseudoword Decoding (Grades 1-12)",
                Abbreviation: null,
                Description:
                  "Measures the ability to decode nonsense words. The student reads aloud from a list of pseudowords that increase in difficulty.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 259,
                TestId: null,
                Name: "Numerical Operations (Grades K-12)",
                Abbreviation: null,
                Description:
                  "Measures untimed, written math calculation skills in the following domains: basic skills, basic operations with integers, geometry, algebra, and calculus.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 260,
                TestId: null,
                Name: "Oral Expression (Grades PK-12)",
                Abbreviation: null,
                Description:
                  "This subtest contains three components:<ul>  <li>Expressive Vocabulary: Measures speaking vocabulary and word retrieval ability. The student says the word that best corresponds to a given picture and definition</li>  <li>Oral Word Fluency: Measures efficiency of word retrieval (i.e., how easily he or she can produce words) and flexibility of thought processes. The student names as many things as possible belonging to a given category (i.e., animals, colors) within 60 seconds.</li>  <li>Sentence Repetition: Measures oral syntactic knowledge and short-term memory. The student listens to sentences that increase in length and complexity and repeats each sentence verbatim. </li></ul>",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 261,
                TestId: null,
                Name: "Oral Reading Fluency (Grades 1-12)",
                Abbreviation: null,
                Description:
                  "Measures speed, accuracy, fluency, and prosody of contextualized oral reading. The student reads passages aloud, and then orally responds to comprehension questions after each passage.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 262,
                TestId: null,
                Name: "Spelling (Grades K-12)",
                Abbreviation: null,
                Description:
                  "Measures written spelling of letter sounds and single words. The student hears each letter sound within the context of a word, and each word within the context of a sentence, and then the student writes the target letter sound or word.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 263,
                TestId: null,
                Name: "Math Fluency – Addition",
                Abbreviation: null,
                Description:
                  "Measures the speed and accuracy of a student’s math (addition) calculations. The student solves written addition problems within a 60-second time limit.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 264,
                TestId: null,
                Name: "Math Fluency – Subtraction",
                Abbreviation: null,
                Description:
                  "Measures the speed and accuracy of a student’s math (subtraction) calculations. The student solves written subtraction problems within a 60-second time limit.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              },
              {
                Id: 265,
                TestId: null,
                Name: "Math Fluency – Multiplication",
                Abbreviation: null,
                Description:
                  "Measures the speed and accuracy of a student’s math (multiplication) calculations. The student solves written multiplication problems within a 60-second time limit.",
                ParentScaleTitleId: 59,
                CreatedDate: null
              }
            ],
            HasInput: false
          }
        ],
        TestModules: [],
        ParentGroupSubScales: [],
        TestScoringTableDetails: [
          {
            Id: 3,
            Name: "The Wechsler Individual Achievement Test – Third Edition",
            Description: "Descriptive Classifications of Score Ranges",
            TestId: 13,
            ScoreHeader: null,
            TableHeaderRowTitles: {
              Id: 17,
              Col1: "Standard Score Range",
              Col2: "Descriptive Category",
              Col3: null,
              Col4: null,
              Col5: null,
              Col6: null,
              Description: null,
              ScoringTableHeaderId: 3,
              OrderNumber: 1,
              IsHeader: true,
              IsEditable: false
            },
            TestScoringTableScores: [
              {
                Id: 18,
                Col1: "Above 145",
                Col2: "Very Superior",
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 2,
                IsHeader: false,
                IsEditable: false
              },
              {
                Id: 19,
                Col1: "131-145",
                Col2: "Superior",
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 3,
                IsHeader: false,
                IsEditable: false
              },
              {
                Id: 20,
                Col1: "116-130",
                Col2: "Above Average",
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 4,
                IsHeader: false,
                IsEditable: false
              },
              {
                Id: 21,
                Col1: "85-115",
                Col2: "Average",
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 5,
                IsHeader: false,
                IsEditable: false
              },
              {
                Id: 22,
                Col1: "70-84",
                Col2: "Below Average",
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 6,
                IsHeader: false,
                IsEditable: false
              },
              {
                Id: 23,
                Col1: "55-69",
                Col2: "Low",
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 7,
                IsHeader: false,
                IsEditable: false
              },
              {
                Id: 24,
                Col1: "Below 55",
                Col2: "Very Low",
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 8,
                IsHeader: false,
                IsEditable: false
              }
            ]
          }
        ]
      },
      {
        Id: 23,
        Name: "Nelson-Denny Reading Test",
        Abbreviation: "Nelson-Denny",
        Descriptions:
          "The Nelson Denny Reading Test's chief purpose is to identify students who have difficulty in reading, to gauge levels of progress after remediation, and to predict future potential for academic success. The Nelson-Denny measures the student's reading rate in words per minute; it also measures vocabulary level and reading comprehension.",
        DomainId: 1,
        DomainName: "Academic Achievement",
        SubTestType: null,
        ScoreType: null,
        DescriptionType: null,
        CreatedDate: "2018-11-05T12:16:44.46",
        ParentGroupScales: [],
        TestIndexes: [],
        SubTests: [],
        TestSummaries: [],
        ParentScaleTitles: [],
        TestModules: [],
        ParentGroupSubScales: [],
        TestScoringTableDetails: [
          {
            Id: 5,
            Name: "Nelson-Denny Reading Test",
            Description: null,
            TestId: 23,
            ScoreHeader: null,
            TableHeaderRowTitles: {
              Id: 29,
              Col1: "Measure",
              Col2: "Standard Score",
              Col3: "Percentile",
              Col4: "Grade Equivalent",
              Col5: null,
              Col6: null,
              Description: null,
              ScoringTableHeaderId: 5,
              OrderNumber: 1,
              IsHeader: true,
              IsEditable: false
            },
            TestScoringTableScores: [
              {
                Id: 30,
                Col1: "Comprehension",
                Col2: "<Field>",
                Col3: "<Field>",
                Col4: "<Field>",
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 5,
                OrderNumber: 2,
                IsHeader: false,
                IsEditable: true
              },
              {
                Id: 31,
                Col1: "Reading Rate",
                Col2: "<Field>",
                Col3: "<Field>",
                Col4: "<Field>",
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 5,
                OrderNumber: 3,
                IsHeader: false,
                IsEditable: true
              }
            ]
          }
        ]
      },
      {
        Id: 31,
        Name: "Woodcock-Johnson IV-Tests of Achievement",
        Abbreviation: "WJ-IV ACH",
        Descriptions:
          "The Woodcock-Johnson IV-Tests of Achievement (WJ-IV ACH) is a comprehensive set of individually administered tests to measure educational achievement in the areas of reading, mathematics, written language, oral language, academic skills, fluency and applications. The results are presented below:",
        DomainId: 1,
        DomainName: "Academic Achievement",
        SubTestType: "Subtest",
        ScoreType: "Standard Score",
        DescriptionType: "Description",
        CreatedDate: "2018-12-08T18:59:17.263",
        ParentGroupScales: [],
        TestIndexes: [],
        SubTests: [],
        TestSummaries: [],
        ParentScaleTitles: [
          {
            Id: 144,
            ParentScaleName: "BASIC READING SKILLS",
            ParentScaleDescription: null,
            CreatedDate: null,
            SubTests: [
              {
                Id: 616,
                TestId: null,
                Name: "Letter-Word Identification",
                Abbreviation: null,
                Description:
                  "<ul><li>Low scores may mean student has not developed automatic word identification skills. </li>  <li>Student may require increased time and greater attention to phonological analysis to identify words. </li>  <li>Responses identify phonetic analysis skills (initial, medial, final sounds; vowel/consonant patterns</li>  <li>Responses identify structural analysis skills (syllables, prefixes, suffixes)</li></ul>",
                ParentScaleTitleId: 144,
                CreatedDate: null
              },
              {
                Id: 617,
                TestId: null,
                Name: "Word Attack",
                Abbreviation: null,
                Description:
                  "<ul><li>This sub-test measures a student’s ability to apply phonic/decoding skills to unfamiliar words.</li>  <li>The initial items require a student to produce sounds for a small set of single letters.</li>  <li>The majority of items require students to pronounce nonsense words of increasing complexity.</li>  <li>Poor performance usually indicates that the student has not developed or mastered phonetic decoding skills.</li></ul>",
                ParentScaleTitleId: 144,
                CreatedDate: null
              }
            ],
            HasInput: false
          },
          {
            Id: 146,
            ParentScaleName: "READING COMPREHENSION-EXTENDED",
            ParentScaleDescription: null,
            CreatedDate: null,
            SubTests: [
              {
                Id: 618,
                TestId: null,
                Name: "Passage Comprehension",
                Abbreviation: null,
                Description:
                  "<ul><li>This sub-test measures a student’s understanding of written text.</li>  <li>Initial items measure a student’s ability to match a rebus (picture symbol) with an actual picture.</li>  <li>The next set of items requires students to match a short phrase to the appropriate picture when given three choices.</li>  <li>The items become increasingly difficult by removing pictorial stimuli and by increasing passage length, level of vocabulary, and complexity of syntax.</li></ul>",
                ParentScaleTitleId: 146,
                CreatedDate: null
              },
              {
                Id: 619,
                TestId: null,
                Name: "Reading Recall",
                Abbreviation: null,
                Description:
                  "<ul><li>Measures how well an examinee can reconstruct meaningful content that he or she has read.</li>  <li>Low performance may be related to:<ul>  <li>Limited basic reading skills  <li>Comprehension difficulties  <li>Attention and/or memory issues</li></ul></li></ul>",
                ParentScaleTitleId: 146,
                CreatedDate: null
              },
              {
                Id: 620,
                TestId: null,
                Name: "Reading Vocabulary",
                Abbreviation: null,
                Description:
                  "<ul><li>Reading Vocabulary measures a stud ent’s ability to provide synonyms and antonyms and to complete analogies.</li>  <li>All items are presented in increasing difficulty.</li></ul>",
                ParentScaleTitleId: 146,
                CreatedDate: null
              }
            ],
            HasInput: false
          },
          {
            Id: 147,
            ParentScaleName: "MATH CALCULATION SKILLS",
            ParentScaleDescription: null,
            CreatedDate: null,
            SubTests: [
              {
                Id: 621,
                TestId: null,
                Name: "Calculation",
                Abbreviation: null,
                Description:
                  "<ul><li>This sub-test measures a student’s ability to perform paper and pencil math computations.</li>  <li>Items range from writing numbers through numerical operations (addition, subtraction, multiplication, division),as well as, geometric, trigonometric, logarithmic, and calculus operations if appropriate.</li></ul>",
                ParentScaleTitleId: 147,
                CreatedDate: null
              },
              {
                Id: 622,
                TestId: null,
                Name: "Math Fact Fluency",
                Abbreviation: null,
                Description:
                  "<ul><li>This sub-test measures a student’s ability to solve simple addition, subtraction and multiplication facts quickly.</li>  <li>Students are given a three-minute time limit and a series of math facts to complete in the student response book.</li></ul>",
                ParentScaleTitleId: 147,
                CreatedDate: null
              }
            ],
            HasInput: false
          },
          {
            Id: 148,
            ParentScaleName: "MATH REASONING",
            ParentScaleDescription: null,
            CreatedDate: null,
            SubTests: [
              {
                Id: 623,
                TestId: null,
                Name: "Applied Problems",
                Abbreviation: null,
                Description:
                  "<ul><li>This sub-test measures a student’s ability to analyze and solve math problems.</li>  <li>Initial items require application of simple number concepts.</li>  <li>The majority of items require a student to listen to the problem, recognize the mathematical procedure that must be followed, and perform the appropriate calculations.</li></ul>",
                ParentScaleTitleId: 148,
                CreatedDate: null
              },
              {
                Id: 624,
                TestId: null,
                Name: "Number Matrices",
                Abbreviation: null,
                Description:
                  "<ul><li>Measures quantitative reasoning</li>  <li>Performance is affected by ability to inductively and deductively reason with numbers</li>  <li>Low performance may be a function of limited quantitative reasoning</li></ul>",
                ParentScaleTitleId: 148,
                CreatedDate: null
              }
            ],
            HasInput: false
          },
          {
            Id: 149,
            ParentScaleName: "WRITTEN EXPRESSION",
            ParentScaleDescription: null,
            CreatedDate: null,
            SubTests: [
              {
                Id: 625,
                TestId: null,
                Name: "Writing Samples",
                Abbreviation: null,
                Description:
                  "<ul><li>This sub-test measures a student’s ability to write sentences given a verbal and picture cue.</li>  <li>Initial items require students to complete sentences.</li>  <li>The next set of items requires students to write a sentence that complies with teacher directions.</li>  <li>Final items require more complex sentence construction and carry more difficult task demands.</li>  <li>Items on this sub-test are scored for the quality of expression.  Students are not penalized for errors in capitalization, punctuation, and spelling.  Written expression is measured at the single sentence level.</li></ul>",
                ParentScaleTitleId: 149,
                CreatedDate: null
              },
              {
                Id: 626,
                TestId: null,
                Name: "Sentence Writing Fluency",
                Abbreviation: null,
                Description:
                  "<ul><li>This sub-test measures a student’s ability formulate and write sentences quickly.</li>  <li>Students are given a set of three prompt words for each item and must construct as many sentences as possible within a seven-minute time limit.</li></ul>",
                ParentScaleTitleId: 149,
                CreatedDate: null
              },
              {
                Id: 627,
                TestId: null,
                Name: "Oral Reading",
                Abbreviation: null,
                Description:
                  "<ul><li>This test measures a student’s ability to understand short oral passages.</li>  <li>Measures ability to apply important aspects of reading fluency, such as accuracy and prosody, when reading sentences aloud.</li>  <li>Items require that a student supply a missing word to the end of a sentence, or related group of sentences.</li></ul>",
                ParentScaleTitleId: 149,
                CreatedDate: null
              },
              {
                Id: 628,
                TestId: null,
                Name: "Sentence Reading Fluency",
                Abbreviation: null,
                Description:
                  "<ul><li>Measures reading speed and rate</li>  <li>Low scores indicate difficulty reading and comprehending simple sentences quickly.</li>  <li>Low performance may be a function of:<ul>  <li>Limited basic reading skills</li>  <li>Comprehension difficulties</li>  <li>Slow processing speed</li>  <li>Inability to sustain concentration</li></ul></li></ul>",
                ParentScaleTitleId: 149,
                CreatedDate: null
              }
            ],
            HasInput: false
          },
          {
            Id: 150,
            ParentScaleName: "Writing Related Subtest",
            ParentScaleDescription: null,
            CreatedDate: null,
            SubTests: [
              {
                Id: 629,
                TestId: null,
                Name: "Spelling",
                Abbreviation: null,
                Description:
                  "<ul><li>This sub-test measures a student’s ability to write orally presented words correctly.</li>  <li>Initial items measure prewriting skills such as drawing and tracing letters and writing upper and lower-case letters.</li>  <li>The majority of items require students to spell dictated words of increasing difficulty.</li></ul>",
                ParentScaleTitleId: 150,
                CreatedDate: null
              },
              {
                Id: 630,
                TestId: null,
                Name: "Spelling of Sounds",
                Abbreviation: null,
                Description:
                  "<ul><li>Sound Awareness measures a student’s ability to understand and utilize the sounds within words.</li>  <li>Sound Awareness is comprised of four sub-tests: Rhyming, Deletion (student must remove a word part or sound and say remaining part of word), Substitution (student must change a word part or sound to create a new word) and Reversal (student must reverse word parts or individual sounds to form a new word).</li></ul>",
                ParentScaleTitleId: 150,
                CreatedDate: null
              },
              {
                Id: 631,
                TestId: null,
                Name: "Editing",
                Abbreviation: null,
                Description:
                  "<ul><li>This sub-test measures a student’s ability to identify and correct errors in a written passage.</li>  <li>Items require students to correct errors in punctuation, capitalization, spelling and word usage.  Passages gradually increase in difficulty.</li></ul>",
                ParentScaleTitleId: 150,
                CreatedDate: null
              },
              {
                Id: 632,
                TestId: null,
                Name: "Science",
                Abbreviation: null,
                Description:
                  "<ul><li>Measures the examinee’s knowledge in the various areas of biological and physical sciences</li>  <li>Responds orally to questions read by the examiner</li>  <li>Items range in difficulty level from early preschool (age 2) through college and adult</li>  <li>No reading or writing</li></ul>",
                ParentScaleTitleId: 150,
                CreatedDate: null
              },
              {
                Id: 633,
                TestId: null,
                Name: "Social Studies",
                Abbreviation: null,
                Description:
                  "<ul><li>Measures the knowledge of history, geography, government, economics and psychology</li></ul>",
                ParentScaleTitleId: 150,
                CreatedDate: null
              },
              {
                Id: 634,
                TestId: null,
                Name: "Humanities",
                Abbreviation: null,
                Description:
                  "<ul><li>Measures knowledge in various areas of art, music, and literature</li></ul>",
                ParentScaleTitleId: 150,
                CreatedDate: null
              },
              {
                Id: 635,
                TestId: null,
                Name: "Word Attack",
                Abbreviation: null,
                Description:
                  "<ul><li>This sub-test is a brief measure of a student’s word knowledge.</li>  Initial items require a student to point to a named picture.</li>  The majority of items require a student to name pictures making this largely a test of expressive vocabulary at the single word level.</li></ul>",
                ParentScaleTitleId: 150,
                CreatedDate: null
              },
              {
                Id: 636,
                TestId: null,
                Name: "Spelling of Sounds",
                Abbreviation: null,
                Description:
                  "<ul><li>This sub-test measures a student’s ability to represent words using sound knowledge; as well as, knowledge of typical spelling patterns.</li>  <li>Initial items require students to write single letters, or sounds.</li>  <li>Most items require students to listen to and spell non-words.</li></ul>",
                ParentScaleTitleId: 150,
                CreatedDate: null
              }
            ],
            HasInput: false
          }
        ],
        TestModules: [],
        ParentGroupSubScales: [],
        TestScoringTableDetails: null
      },
      {
        Id: 3,
        Name: "Behavior Rating Inventory of Executive Function",
        Abbreviation: "BRIEF",
        Descriptions:
          "The Behavior Rating Inventory of Executive Function is a questionnaire for parents and teachers of school-age children that enables professionals to assess executive function behaviors (i.e., a collection of processes that are responsible for guiding, directing, and managing cognitive, emotional, and behavioral functions, particularly during active, novel problem solving) in the home and school environments. It is designed for a broad range of children, ages 5 to 18 years, including those with learning disabilities and attentional disorders, traumatic brain injuries, lead exposure, pervasive developmental disorders, depression and other developmental, neurological, psychiatric, and medical conditions. <br />The Parent and Teacher Forms of the BRIEF each contain 86 items within eight theoretically and empirically derived clinical scales that measure different aspects of executive functioning. These scales form two broader Indexes, Behavioral Regulation and Metacognition, as well as an overall score, the Global Executive Composite.",
        DomainId: 2,
        DomainName: "Attention & Executive Function",
        SubTestType: "Scale",
        ScoreType: "Score",
        DescriptionType: "Description",
        CreatedDate: "2018-09-22T18:55:23.407",
        ParentGroupScales: [],
        TestIndexes: [],
        SubTests: [],
        TestSummaries: [],
        ParentScaleTitles: [
          {
            Id: 18,
            ParentScaleName: "Validity Scales",
            ParentScaleDescription: null,
            CreatedDate: null,
            SubTests: [
              {
                Id: 78,
                TestId: null,
                Name: "Inconsistency Scale",
                Abbreviation: null,
                Description:
                  "Scores on this scale indicate the extent to which the respondent answers similar BRIEF items in an inconsistent manner relative to the clinical samples.",
                ParentScaleTitleId: 18,
                CreatedDate: null
              },
              {
                Id: 79,
                TestId: null,
                Name: "Negativity Scale",
                Abbreviation: null,
                Description:
                  "This scale measures the extent to which the respondent answers selected BRIEF items in an unusually negative manner relative to the clinical samples. This could indicate that the respondent had an unusually negative response style or could represent accurate reporting on a child with severe executive dysfunction.",
                ParentScaleTitleId: 18,
                CreatedDate: null
              }
            ],
            HasInput: false
          },
          {
            Id: 19,
            ParentScaleName: "Behavioral Regulation Index (BRI)",
            ParentScaleDescription:
              "represents a child’s ability to shift cognitive set and modulate emotions and behavior via appropriate inhibitory control. Appropriate behavioral regulation is likely to be a precursor to appropriate metacognitive problem-solving. Behavioral regulation enables the metacognitive processes to successfully guide active, systematic problem solving, and more generally, supports appropriate self-regulation.",
            CreatedDate: null,
            SubTests: [
              {
                Id: 82,
                TestId: null,
                Name: "Inhibit",
                Abbreviation: null,
                Description:
                  "This scale assesses inhibitory control (i.e., the ability to inhibit, resist, or not act on an impulse) and the ability to stop one’s behavior at the appropriate time.",
                ParentScaleTitleId: 19,
                CreatedDate: null
              },
              {
                Id: 83,
                TestId: null,
                Name: "Shift",
                Abbreviation: null,
                Description:
                  "This scale assesses the ability to move freely from one situation, activity, or aspect of a problem to another as the circumstances demand. Key aspects of shifting include the ability to make transitions, problem-solve flexibly, switch or alternate attention, and change focus from one mindset or topic to another.",
                ParentScaleTitleId: 19,
                CreatedDate: null
              },
              {
                Id: 84,
                TestId: null,
                Name: "Emotional Control",
                Abbreviation: null,
                Description:
                  "This scale addresses the manifestation of executive functions within the emotional realm and assesses a child’s ability to modulate emotional responses. Poor emotional control can be expressed as emotional lability or emotional explosiveness.",
                ParentScaleTitleId: 19,
                CreatedDate: null
              }
            ],
            HasInput: false
          },
          {
            Id: 20,
            ParentScaleName: "Metacognition Index (MI)",
            ParentScaleDescription:
              "represents the child’s ability to initiate, plan, organize, and sustain future-oriented problem-solving in working memory. This index is interpreted as the ability to cognitively self-manage tasks and reflects the child’s ability to monitor his or her own performance. The MI related directly to a child’s ability to actively problem solve in a variety of contexts.",
            CreatedDate: null,
            SubTests: [
              {
                Id: 85,
                TestId: null,
                Name: "Initiate",
                Abbreviation: null,
                Description:
                  "This scale contains items relating to beginning a task or activity, as well as independently generating ideas, responses, or problem-solving strategies. Poor initiation typically does not reflect noncompliance or disinterest in a specific task.",
                ParentScaleTitleId: 20,
                CreatedDate: null
              },
              {
                Id: 86,
                TestId: null,
                Name: "Working Memory",
                Abbreviation: null,
                Description:
                  "Items from this scale measure the capacity to hold information in mind for the purpose of completing a task. Working memory is essential to carry out multi-step activities, complete mental arithmetic, or follow complex instructions.",
                ParentScaleTitleId: 20,
                CreatedDate: null
              },
              {
                Id: 87,
                TestId: null,
                Name: "Plan/Organize",
                Abbreviation: null,
                Description:
                  "This scale measures the child’s ability to manage current and future-oriented task demands. The plan component of this scale relates to the ability to anticipate future events, set goals, and develop appropriate steps ahead of time to carry out a task or activity. Planning involves imagining or developing a goal or end state and then strategically determining the most effective method or steps to attain that goal. It often requires sequencing or stringing together a series of steps. <br /> The organizing component of this scale relates to the ability to bring order to information and to appreciate main ideas or key concepts when learning or communicating information. This involves the ability to organize oral and written expression, as well as to understand main points expressed in presentations and written material. Organization also has a clerical component that is expressed, for example, in the ability to efficiently scan a visual array or to keep track of a homework assignment.",
                ParentScaleTitleId: 20,
                CreatedDate: null
              },
              {
                Id: 88,
                TestId: null,
                Name: "Organization of Materials",
                Abbreviation: null,
                Description:
                  "This scale measures orderliness of work, play, and storage spaces (e.g., desks, lockers, backpacks, and bedrooms).",
                ParentScaleTitleId: 20,
                CreatedDate: null
              },
              {
                Id: 89,
                TestId: null,
                Name: "Monitor",
                Abbreviation: null,
                Description:
                  "This scale assesses work-checking habits (i.e., whether a child assesses his or her own performance during or shortly after finishing a task to ensure appropriate attainment of a goal). This scale also evaluates a personal monitoring function (i.e., whether a child keeps track of the effect his or her behavior has on others).",
                ParentScaleTitleId: 20,
                CreatedDate: null
              }
            ],
            HasInput: false
          },
          {
            Id: 21,
            ParentScaleName: "Global Executive Composite (GEC)",
            ParentScaleDescription:
              "is a summary score that incorporates all eight clinical scales of the BRIEF. To legitimately derive a GEC score, there must be no significant difference between the BRI and MI scores, as this would suggest that the GEC is likely to obscure important differences between the two index scores and should not be used as a summary measure.",
            CreatedDate: null,
            SubTests: [
              {
                Id: 90,
                TestId: null,
                Name: "Inhibit",
                Abbreviation: null,
                Description:
                  "This scale assesses inhibitory control (i.e., the ability to inhibit, resist, or not act on an impulse) and the ability to stop one’s behavior at the appropriate time.",
                ParentScaleTitleId: 21,
                CreatedDate: null
              },
              {
                Id: 91,
                TestId: null,
                Name: "Shift",
                Abbreviation: null,
                Description:
                  "This scale assesses the ability to move freely from one situation, activity, or aspect of a problem to another as the circumstances demand. Key aspects of shifting include the ability to make transitions, problem-solve flexibly, switch or alternate attention, and change focus from one mindset or topic to another.",
                ParentScaleTitleId: 21,
                CreatedDate: null
              },
              {
                Id: 92,
                TestId: null,
                Name: "Emotional Control",
                Abbreviation: null,
                Description:
                  "This scale addresses the manifestation of executive functions within the emotional realm and assesses a child’s ability to modulate emotional responses. Poor emotional control can be expressed as emotional lability or emotional explosiveness.",
                ParentScaleTitleId: 21,
                CreatedDate: null
              },
              {
                Id: 93,
                TestId: null,
                Name: "Initiate",
                Abbreviation: null,
                Description:
                  "This scale contains items relating to beginning a task or activity, as well as independently generating ideas, responses, or problem-solving strategies. Poor initiation typically does not reflect noncompliance or disinterest in a specific task.",
                ParentScaleTitleId: 21,
                CreatedDate: null
              },
              {
                Id: 94,
                TestId: null,
                Name: "Working Memory",
                Abbreviation: null,
                Description:
                  "Items from this scale measure the capacity to hold information in mind for the purpose of completing a task. Working memory is essential to carry out multi-step activities, complete mental arithmetic, or follow complex instructions.",
                ParentScaleTitleId: 21,
                CreatedDate: null
              },
              {
                Id: 95,
                TestId: null,
                Name: "Plan/Organize",
                Abbreviation: null,
                Description:
                  "This scale measures the child’s ability to manage current and future-oriented task demands. The plan component of this scale relates to the ability to anticipate future events, set goals, and develop appropriate steps ahead of time to carry out a task or activity. Planning involves imagining or developing a goal or end state and then strategically determining the most effective method or steps to attain that goal. It often requires sequencing or stringing together a series of steps. <br />  The organizing component of this scale relates to the ability to bring order to information and to appreciate main ideas or key concepts when learning or communicating information. This involves the ability to organize oral and written expression, as well as to understand main points expressed in presentations and written material. Organization also has a clerical component that is expressed, for example, in the ability to efficiently scan a visual array or to keep track of a homework assignment.",
                ParentScaleTitleId: 21,
                CreatedDate: null
              },
              {
                Id: 96,
                TestId: null,
                Name: "Organization of Materials",
                Abbreviation: null,
                Description:
                  "This scale measures orderliness of work, play, and storage spaces (e.g., desks, lockers, backpacks, and bedrooms).",
                ParentScaleTitleId: 21,
                CreatedDate: null
              },
              {
                Id: 97,
                TestId: null,
                Name: "Monitor",
                Abbreviation: null,
                Description:
                  "This scale assesses work-checking habits (i.e., whether a child assesses his or her own performance during or shortly after finishing a task to ensure appropriate attainment of a goal). This scale also evaluates a personal monitoring function (i.e., whether a child keeps track of the effect his or her behavior has on others).",
                ParentScaleTitleId: 21,
                CreatedDate: null
              }
            ],
            HasInput: false
          }
        ],
        TestModules: [],
        ParentGroupSubScales: [],
        TestScoringTableDetails: null
      },
      {
        Id: 5,
        Name: "Conners 3",
        Abbreviation: "Conners-3",
        Descriptions:
          "Conners-3 is an assessment of Attention-Deficit/Hyperactivity Disorder (ADHD) and its most common comorbid problems and disorders in children and adolescents.",
        DomainId: 2,
        DomainName: "Attention & Executive Function",
        SubTestType: "Scale",
        ScoreType: "Score",
        DescriptionType: "Common Characteristics of High Scorers",
        CreatedDate: "2018-09-24T11:02:34.883",
        ParentGroupScales: [],
        TestIndexes: [],
        SubTests: [],
        TestSummaries: [],
        ParentScaleTitles: [],
        TestModules: [],
        ParentGroupSubScales: [
          {
            Id: 6,
            ParentGroupSubScaleName: "Parent",
            ParentGroupScaleId: null,
            ParentScaleTitles: [
              {
                Id: 24,
                ParentScaleName: "Content Scales",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 120,
                    TestId: null,
                    Name: "Inattention",
                    Abbreviation: null,
                    Description:
                      "May have poor concentration/attention or difficulty keeping his/her mind on work. May make careless mistakes. Maybe be easily distracted. May give up easily or be easily bored. May avoid schoolwork. May have difficulty starting and/or finishing tasks.",
                    ParentScaleTitleId: 24,
                    CreatedDate: null
                  },
                  {
                    Id: 121,
                    TestId: null,
                    Name: "Hyperactivity/Impulsivity",
                    Abbreviation: null,
                    Description:
                      "High activity levels. May be restless and/or impulsive. May have difficulty being quiet. May interrupt others or talk too much. May be easily excited.",
                    ParentScaleTitleId: 24,
                    CreatedDate: null
                  },
                  {
                    Id: 122,
                    TestId: null,
                    Name: "Learning Problems",
                    Abbreviation: null,
                    Description:
                      "Academic struggles (reading, spelling, and/or math). May have difficulty learning and/or remembering concepts. May need extra explanations or help.",
                    ParentScaleTitleId: 24,
                    CreatedDate: null
                  },
                  {
                    Id: 123,
                    TestId: null,
                    Name: "Executive Functioning",
                    Abbreviation: null,
                    Description:
                      "May have difficulty starting or finishing projects. May complete projects at the last minute. May have poor planning, prioritizing, or organizational skills.",
                    ParentScaleTitleId: 24,
                    CreatedDate: null
                  },
                  {
                    Id: 124,
                    TestId: null,
                    Name: "Defiance/Aggression",
                    Abbreviation: null,
                    Description:
                      "May be argumentative. May defy requests from adults. May have poor control of anger and may lose temper. May be physically and/or verbally aggressive. May show violent or destructive tendencies. May bully others. May be manipulative or cruel. May break rules and/or have legal issues.",
                    ParentScaleTitleId: 24,
                    CreatedDate: null
                  },
                  {
                    Id: 125,
                    TestId: null,
                    Name: "Peer Relations",
                    Abbreviation: null,
                    Description:
                      "May have difficulty with friendships, poor social skills, and limited social connections. May appear to be unaccepted by the group.",
                    ParentScaleTitleId: 24,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 25,
                ParentScaleName: "DSM Symptom Scales",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 126,
                    TestId: null,
                    Name: "ADHD Inattentive",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for ADHD Inattentive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 25,
                    CreatedDate: null
                  },
                  {
                    Id: 127,
                    TestId: null,
                    Name: "ADHD Hyperactive-Impulsive",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for ADHD Hyperactive-Impulsive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 25,
                    CreatedDate: null
                  },
                  {
                    Id: 128,
                    TestId: null,
                    Name: "Conduct Disorder",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for Conduct Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 25,
                    CreatedDate: null
                  },
                  {
                    Id: 129,
                    TestId: null,
                    Name: "Oppositional Defiant Disorder",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for Oppositional Defiant Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 25,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 26,
                ParentScaleName: "Indices",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 130,
                    TestId: null,
                    Name: "Conners 3 ADHD Index",
                    Abbreviation: null,
                    Description:
                      "Features that are commonly seen in youth with inattention, hyperactivity, and/or impulsivity",
                    ParentScaleTitleId: 26,
                    CreatedDate: null
                  },
                  {
                    Id: 131,
                    TestId: null,
                    Name: "Conners 3 Global Index",
                    Abbreviation: null,
                    Description:
                      "Features of general psychological difficulty that may be expressed behaviorally, academically, socially, or emotionally",
                    ParentScaleTitleId: 26,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 27,
                ParentScaleName: "Screener Items",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 132,
                    TestId: null,
                    Name: "Anxiety",
                    Abbreviation: null,
                    Description: "Items that relate to generalized worrying",
                    ParentScaleTitleId: 27,
                    CreatedDate: null
                  },
                  {
                    Id: 133,
                    TestId: null,
                    Name: "Depression",
                    Abbreviation: null,
                    Description:
                      "Items that reflect key clinical presentations of depression",
                    ParentScaleTitleId: 27,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 28,
                ParentScaleName: "Critical Items",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 134,
                    TestId: null,
                    Name: "Severe Conduct",
                    Abbreviation: null,
                    Description:
                      "Items that represent severe misconduct (e.g., fire-setting, cruelty to animals, use of weapons) that require immediate investigation, and include behaviors that may predict future violence or harm to others.",
                    ParentScaleTitleId: 28,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 29,
                ParentScaleName: "Validity Scales",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 135,
                    TestId: null,
                    Name: "Positive Impression",
                    Abbreviation: null,
                    Description:
                      "Items rated extremely positively, and are in most cases unrealistic. Often indicates an overly positive description of youth’s behavior, but can also be the result of:  <ul><li>Youth’s exemplary behavior in a particular setting</li>  <li>Youth being extremely well-behaved for a specific parent or teacher</li>  <li>Rater has a tendency to forget positive traits and remember negative ones</li>  <li>Rater is motivated to describe the youth as “problem-free,” for example, wanting to avoid stigmatizing labels or services</li>  <li>Rater completed the Conners 3 erroneously, such as comparing the youth to another who has more difficulty (e.g., a quiet student in a class of troublemakers or a youth whose sibling shows severe clinical symptoms) rather than thinking of the youth’s behavior independently of any other youth’s behavior</li><ul>",
                    ParentScaleTitleId: 29,
                    CreatedDate: null
                  },
                  {
                    Id: 136,
                    TestId: null,
                    Name: "Negative Impression",
                    Abbreviation: null,
                    Description:
                      "A set of items that describe extremely negative behaviors that are unlikely to be true all the time. Often indicates an overly negative description of the youth’s behavior, but can also be the result of:<ul><li>  The youth really does misbehave most of the time, as seen in some severe clinical cases</li>  <li>There may be some variables that negatively impact the youth’s functioning in a particular setting (e.g., a student with a math disorder may show worse behavior in math class than in art class)</li>  <li>The rater may have very high standards that are difficult for the youth to meet</li>  <li>The rater may be highly motivated to describe the youth as problematic in order to obtain services or shift the youth to another placement</li>  <li>The rater may be erroneously comparing the youth to others who are older or who are exceptionally well-behaved. </li></ul>",
                    ParentScaleTitleId: 29,
                    CreatedDate: null
                  },
                  {
                    Id: 137,
                    TestId: null,
                    Name: "Inconsistency Index",
                    Abbreviation: null,
                    Description:
                      "Based on responses to pairs of items that tend to be rated similarly. When there is inconsistency in responses to similar items, this suggests that scores may not accurately reflect the individual due to a careless or unusual response to some items. Random responding, variable attention, or comprehension difficulties can contribute to this.",
                    ParentScaleTitleId: 29,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              }
            ]
          },
          {
            Id: 7,
            ParentGroupSubScaleName: "Teacher",
            ParentGroupScaleId: null,
            ParentScaleTitles: [
              {
                Id: 30,
                ParentScaleName: "Content Scales",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 138,
                    TestId: null,
                    Name: "Inattention",
                    Abbreviation: null,
                    Description:
                      "May have poor concentration/attention or difficulty keeping his/her mind on work. May make careless mistakes. Maybe be easily distracted. May give up easily or be easily bored. May avoid schoolwork. May have difficulty starting and/or finishing tasks.",
                    ParentScaleTitleId: 30,
                    CreatedDate: null
                  },
                  {
                    Id: 139,
                    TestId: null,
                    Name: "Hyperactivity/Impulsivity",
                    Abbreviation: null,
                    Description:
                      "High activity levels. May be restless and/or impulsive. May have difficulty being quiet. May interrupt others or talk too much. May be easily excited.",
                    ParentScaleTitleId: 30,
                    CreatedDate: null
                  },
                  {
                    Id: 141,
                    TestId: null,
                    Name: "Learning Problems",
                    Abbreviation: null,
                    Description:
                      "Academic struggles (reading, spelling, and/or math). May have difficulty learning and/or remembering concepts. May need extra explanations or help.",
                    ParentScaleTitleId: 30,
                    CreatedDate: null
                  },
                  {
                    Id: 142,
                    TestId: null,
                    Name: "Executive Functioning",
                    Abbreviation: null,
                    Description:
                      "May have difficulty starting or finishing projects. May complete projects at the last minute. May have poor planning, prioritizing, or organizational skills.",
                    ParentScaleTitleId: 30,
                    CreatedDate: null
                  },
                  {
                    Id: 143,
                    TestId: null,
                    Name: "Defiance/Aggression",
                    Abbreviation: null,
                    Description:
                      "May be argumentative. May defy requests from adults. May have poor control of anger and may lose temper. May be physically and/or verbally aggressive. May show violent or destructive tendencies. May bully others. May be manipulative or cruel. May break rules and/or have legal issues.",
                    ParentScaleTitleId: 30,
                    CreatedDate: null
                  },
                  {
                    Id: 144,
                    TestId: null,
                    Name: "Peer Relations",
                    Abbreviation: null,
                    Description:
                      "May have difficulty with friendships, poor social skills, and limited social connections. May appear to be unaccepted by the group.",
                    ParentScaleTitleId: 30,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 31,
                ParentScaleName: "DSM Symptom Scales",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 145,
                    TestId: null,
                    Name: "ADHD Inattentive",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for ADHD Inattentive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 31,
                    CreatedDate: null
                  },
                  {
                    Id: 146,
                    TestId: null,
                    Name: "ADHD Hyperactive-Impulsive",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for ADHD Hyperactive-Impulsive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 31,
                    CreatedDate: null
                  },
                  {
                    Id: 147,
                    TestId: null,
                    Name: "Conduct Disorder",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for Conduct Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 31,
                    CreatedDate: null
                  },
                  {
                    Id: 148,
                    TestId: null,
                    Name: "Oppositional Defiant Disorder",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for Oppositional Defiant Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 31,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 32,
                ParentScaleName: "Indices",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 149,
                    TestId: null,
                    Name: "Conners 3 ADHD Index",
                    Abbreviation: null,
                    Description:
                      "Features that are commonly seen in youth with inattention, hyperactivity, and/or impulsivity",
                    ParentScaleTitleId: 32,
                    CreatedDate: null
                  },
                  {
                    Id: 150,
                    TestId: null,
                    Name: "Conners 3 Global Index",
                    Abbreviation: null,
                    Description:
                      "Features of general psychological difficulty that may be expressed behaviorally, academically, socially, or emotionally",
                    ParentScaleTitleId: 32,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 33,
                ParentScaleName: "Screener Items",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 151,
                    TestId: null,
                    Name: "Anxiety",
                    Abbreviation: null,
                    Description: "Items that relate to generalized worrying",
                    ParentScaleTitleId: 33,
                    CreatedDate: null
                  },
                  {
                    Id: 152,
                    TestId: null,
                    Name: "Depression",
                    Abbreviation: null,
                    Description:
                      "Items that reflect key clinical presentations of depression",
                    ParentScaleTitleId: 33,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 34,
                ParentScaleName: "Critical Items",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 153,
                    TestId: null,
                    Name: "Severe Conduct",
                    Abbreviation: null,
                    Description:
                      "Items that represent severe misconduct (e.g., fire-setting, cruelty to animals, use of weapons) that require immediate investigation, and include behaviors that may predict future violence or harm to others.",
                    ParentScaleTitleId: 34,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 35,
                ParentScaleName: "Validity Scales",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 154,
                    TestId: null,
                    Name: "Positive Impression",
                    Abbreviation: null,
                    Description:
                      "Items rated extremely positively, and are in most cases unrealistic. Often indicates an overly positive description of youth’s behavior, but can also be the result of:<ul>  <li>Youth’s exemplary behavior in a particular setting</li>  <li>Youth being extremely well-behaved for a specific parent or teacher</li>  <li>Rater has a tendency to forget positive traits and remember negative ones</li>  <li>Rater is motivated to describe the youth as “problem-free,” for example, wanting to avoid stigmatizing labels or services</li>  <li>Rater completed the Conners 3 erroneously, such as comparing the youth to another who has more difficulty (e.g., a quiet student in a class of troublemakers or a youth whose sibling shows severe clinical symptoms) rather than thinking of the youth’s behavior independently of any other youth’s behavior</li></ul>",
                    ParentScaleTitleId: 35,
                    CreatedDate: null
                  },
                  {
                    Id: 155,
                    TestId: null,
                    Name: "Negative Impression",
                    Abbreviation: null,
                    Description:
                      "A set of items that describe extremely negative behaviors that are unlikely to be true all the time. Often indicates an overly negative description of the youth’s behavior, but can also be the result of:<ul>  <li>The youth really does misbehave most of the time, as seen in some severe clinical cases</li>  <li>There may be some variables that negatively impact the youth’s functioning in a particular setting (e.g., a student with a math disorder may show worse behavior in math class than in art class)</li>  <li>The rater may have very high standards that are difficult for the youth to meet</li>  <li>The rater may be highly motivated to describe the youth as problematic in order to obtain services or shift the youth to another placement</li>  <li>The rater may be erroneously comparing the youth to others who are older or who are exceptionally well-behaved. </li></ul>",
                    ParentScaleTitleId: 35,
                    CreatedDate: null
                  },
                  {
                    Id: 156,
                    TestId: null,
                    Name: "Inconsistency Index",
                    Abbreviation: null,
                    Description:
                      "Based on responses to pairs of items that tend to be rated similarly. When there is inconsistency in responses to similar items, this suggests that scores may not accurately reflect the individual due to a careless or unusual response to some items. Random responding, variable attention, or comprehension difficulties can contribute to this.",
                    ParentScaleTitleId: 35,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              }
            ]
          },
          {
            Id: 8,
            ParentGroupSubScaleName: "Self-Report",
            ParentGroupScaleId: null,
            ParentScaleTitles: [
              {
                Id: 36,
                ParentScaleName: "Content Scales",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 157,
                    TestId: null,
                    Name: "Inattention",
                    Abbreviation: null,
                    Description:
                      "May have poor concentration/attention or difficulty keeping his/her mind on work. May make careless mistakes. Maybe be easily distracted. May give up easily or be easily bored. May avoid schoolwork. May have difficulty starting and/or finishing tasks.",
                    ParentScaleTitleId: 36,
                    CreatedDate: null
                  },
                  {
                    Id: 158,
                    TestId: null,
                    Name: "Hyperactivity/Impulsivity",
                    Abbreviation: null,
                    Description:
                      "High activity levels. May be restless and/or impulsive. May have difficulty being quiet. May interrupt others or talk too much. May be easily excited.",
                    ParentScaleTitleId: 36,
                    CreatedDate: null
                  },
                  {
                    Id: 159,
                    TestId: null,
                    Name: "Learning Problems",
                    Abbreviation: null,
                    Description:
                      "Academic struggles (reading, spelling, and/or math). May have difficulty learning and/or remembering concepts. May need extra explanations or help.",
                    ParentScaleTitleId: 36,
                    CreatedDate: null
                  },
                  {
                    Id: 160,
                    TestId: null,
                    Name: "Defiance/Aggression",
                    Abbreviation: null,
                    Description:
                      "May be argumentative. May defy requests from adults. May have poor control of anger and may lose temper. May be physically and/or verbally aggressive. May show violent or destructive tendencies. May bully others. May be manipulative or cruel. May break rules and/or have legal issues.",
                    ParentScaleTitleId: 36,
                    CreatedDate: null
                  },
                  {
                    Id: 161,
                    TestId: null,
                    Name: "Family Relations",
                    Abbreviation: null,
                    Description:
                      "May feel that parents do not love or notice him/her. May feel unjustly criticized and/or punished at home.",
                    ParentScaleTitleId: 36,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 37,
                ParentScaleName: "DSM Symptom Scales",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 162,
                    TestId: null,
                    Name: "ADHD Inattentive",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for ADHD Inattentive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 37,
                    CreatedDate: null
                  },
                  {
                    Id: 163,
                    TestId: null,
                    Name: "ADHD Hyperactive-Impulsive",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for ADHD Hyperactive-Impulsive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 37,
                    CreatedDate: null
                  },
                  {
                    Id: 164,
                    TestId: null,
                    Name: "Conduct Disorder",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for Conduct Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 37,
                    CreatedDate: null
                  },
                  {
                    Id: 165,
                    TestId: null,
                    Name: "Oppositional Defiant Disorder",
                    Abbreviation: null,
                    Description:
                      "Items that approximate to DSM symptoms for Oppositional Defiant Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.",
                    ParentScaleTitleId: 37,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 38,
                ParentScaleName: "Indices",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 166,
                    TestId: null,
                    Name: "Conners 3 ADHD Index",
                    Abbreviation: null,
                    Description:
                      "Features that are commonly seen in youth with inattention, hyperactivity, and/or impulsivity",
                    ParentScaleTitleId: 38,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 39,
                ParentScaleName: "Screener Items",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 644,
                    TestId: null,
                    Name: "Anxiety",
                    Abbreviation: null,
                    Description: "Items that relate to generalized worrying",
                    ParentScaleTitleId: 39,
                    CreatedDate: null
                  },
                  {
                    Id: 167,
                    TestId: null,
                    Name: "Depression",
                    Abbreviation: null,
                    Description:
                      "Items that reflect key clinical presentations of depression",
                    ParentScaleTitleId: 39,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 40,
                ParentScaleName: "Critical Items",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 168,
                    TestId: null,
                    Name: "Severe Conduct",
                    Abbreviation: null,
                    Description:
                      "Items that represent severe misconduct (e.g., fire-setting, cruelty to animals, use of weapons) that require immediate investigation, and include behaviors that may predict future violence or harm to others.",
                    ParentScaleTitleId: 40,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              },
              {
                Id: 41,
                ParentScaleName: "Validity Scales",
                ParentScaleDescription: null,
                CreatedDate: null,
                SubTests: [
                  {
                    Id: 169,
                    TestId: null,
                    Name: "Positive Impression",
                    Abbreviation: null,
                    Description:
                      "Items rated extremely positively, and are in most cases unrealistic. Often indicates an overly positive description of youth’s behavior, but can also be the result of:<ul>  <li>Rater has a tendency to forget positive traits and remember negative ones</li>  <li>Rater completed the Conners 3 erroneously, such as comparing self to another who has more difficulty (e.g., a quiet student in a class of troublemakers or a youth whose sibling shows severe clinical symptoms) rather than thinking of behavior independently of any other youth’s behavior.</li>  <li>Youth may be trying to please the examiner or other adults by responding in a socially desirable manner</li>  <li>Youth may be in denial of symptoms, lack awareness of problems, or have secondary motivations (e.g., avoiding social stigma of a label or evading special school services)</li></ul>",
                    ParentScaleTitleId: 41,
                    CreatedDate: null
                  },
                  {
                    Id: 170,
                    TestId: null,
                    Name: "Negative Impression",
                    Abbreviation: null,
                    Description:
                      "A set of items that describe extremely negative behaviors that are unlikely to be true all the time. Often indicates an overly negative description of the youth’s behavior, but can also be the result of:<ul>  <li>The youth really does misbehave most of the time, as seen in some severe clinical cases</li>  <li>There may be some variables that negatively impact the youth’s functioning in a particular setting (e.g., a student with a math disorder may show worse behavior in math class than in art class)</li>  <li>The rater may have very high standards that are difficult for the youth to meet</li>  <li>The rater may be highly motivated to describe the youth as problematic in order to obtain services or shift the youth to another placement</li>  <li>The rater may be erroneously comparing the youth to others who are older or who are exceptionally well-behaved. </li>  <li>May be seeking help, finding daily life to be a severe struggle and feeling that nobody is aware of his/her difficulties</li>  <li>Secondary motivations, such as obtaining special attention from teachers or parents.</li></ul>",
                    ParentScaleTitleId: 41,
                    CreatedDate: null
                  },
                  {
                    Id: 171,
                    TestId: null,
                    Name: "Inconsistency Index",
                    Abbreviation: null,
                    Description:
                      "Based on responses to pairs of items that tend to be rated similarly. When there is inconsistency in responses to similar items, this suggests that scores may not accurately reflect the individual due to a careless or unusual response to some items. Random responding, variable attention, or comprehension difficulties can contribute to this.",
                    ParentScaleTitleId: 41,
                    CreatedDate: null
                  }
                ],
                HasInput: false
              }
            ]
          }
        ],
        TestScoringTableDetails: null
      }
    ]
  };

  //Whenever the input changes, update the destructured state parameter matching the input's name
  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPDF = () => {
    //use axios' post method to the create-pdf route passing the data from state
    //blobs are immutable objects the represent raw data, like our PDF
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPDF.pdf");
      });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Receipt ID"
          name="receiptId"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 1"
          name="price1"
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="Price 2"
          name="price2"
          onChange={this.handleChange}
        />
        <button onClick={this.createAndDownloadPDF}>Download PDF</button>
      </div>
    );
  }
}

export default App;
