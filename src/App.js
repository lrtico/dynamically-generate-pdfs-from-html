import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './App.css';

class App extends Component {
  state = {
    values: {
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
      diName: 'Henry Ford',
      diAge: '8',
      diSchool: 'Ty Cobb Elementary',
      diGrade: '3rd',
      diDateofbirth: '2011-06-07',
      diEvaluationlocation: 'One Neuro',
      diGender: 'Boy',
      diHandedness: 'Right',
      diEvaluator: 'Sissy Spacek',
      diDateoftesting: [
        {
          title: 'Date1',
          date: '2019-03-12',
        },
        {
          title: 'Date22',
          date: '2019-03-19',
        },
        {
          title: 'Date3',
          date: '2019-03-19',
        },
      ],
      paqName: 'Carey Grant',
      paqAddress: '32 Main Street, Sometown, CA 94553',
      paqHomePhone: '(342) 324-9482',
      paqCellPhone: '(342) 529-8411',
      paqWorkPhone: '(342) 922-4830',
      paqGuardian: 'Father',
      reasonReferral1: 'The brown fox',
      reasonReferral2: 'jumps over the purple moon',
      reasonReferral3: 'to reach the stars',
      recordsReviewed: [
        {
          title: 'Record reviewed 1',
          date: '2018-4-8',
        },
        {
          title: 'Record reviewed 2',
          date: '2018-12-3',
        },
      ],
      bhPrimaryCaregiverMother: true,
      bhMotherName: 'Belinda Monroe',
      bhStepmother: 'Yes',
      bhMotherCellPhone: '(432) 342-3443',
      bhMotherOccupation: '(323) 990-4899',
      bhMotherLengthEmployement: '3',
      bhMotherPrimaryLanguage: 'English',
      bhMotherAge: '32',
      bhMotherHomePhone: '(313) 990-9343',
      bhMotherWorkPhone: '(490) 909-2394',
      bhMotherEmployer: 'Spanx',
      bhMotherHighestGrade: '12th',
      bhMotherSecondaryLanguage: 'na',
      bhPrimaryCaregiverFather: false,
      bhFatherName: 'Ben Monroe',
      bhStepfather: 'No',
      bhFatherCellPhone: '(432) 342-3443',
      bhFatherOccupation: '(323) 990-4899',
      bhFatherLengthEmployement: '23',
      bhFatherPrimaryLanguage: 'English',
      bhFatherAge: '32',
      bhFatherHomePhone: '(313) 990-9343',
      bhFatherWorkPhone: '(490) 909-2394',
      bhFatherEmployer: 'Chase',
      bhFatherHighestGrade: '12th',
      bhFatherSecondaryLanguage: 'Spanish',
      bhPrimaryCaregiverName: 'Jebadiah Deliliah',
      bhOtherParentStepparentAge: '45',
      bhOtherParentStepparentGuardian: 'Foster parent',
      bhOtherParentStepparentHomePhone: '(895) 388-4292',
      bhOtherParentStepparentWorkPhone: '(310) 993-2310',
      bhOtherParentStepparentCellPhone: '(411) 499-2993',
      bhOtherParentStepparentAddress: '123 Main Street, Somecity, CA 90332',
      ccCaregiverGone: 'Sherlock Holmes',
      ccHoursPerDay: '3',
      //ccDifferentPeople: None,
      fhCloseness: 'Yes',
      fhParentalClosenessChoice: 'Mother',
      fhExperienced: 'No',
      fhLifeExperiencesDate: 'March 14, 2010',
      fhLifeExperiencesAge: '4',
      fhLifeExperiencesDetails: 'The mother and father had irreconsiable differences',
      fhCustodyMother: true,
      fhCustodyFather: false,
      fhCustodyBoth: false,
      fhVisitation: 'Every other weekend',
      brothersSisters: [
        {
          age: '3',
          relationship: 'Sister',
          home: 'Yes',
        },
        {
          age: '4',
          relationship: 'Brother',
          home: 'Yes',
        },
      ],
      bsGetAlong: 'They get along very well',
      crResidence: 'Single-family home',
      crResidenceLength: '4',
      frMovies: true,
      frGames: false,
      frMeals: true,
      frSports: true,
      frConversations: false,
      frVisitsRelatives: true,
      frTelevision: true,
      frChurch: true,
      frOther: false,
      frSpokenLanguage: 'English',
      frGrandparentFrequency: 'Never',
      frEnjoy: 'His smile',
      frDifficult: 'His tantrums',
      frCareer: 'Happy',
      frEducationLevel: 'College',
      frDisciplinarian: 'Other',
      frDisciplinarianOtherDesc: 'Grandmother',
      frAgreeDiscipline: 'Yes',
      frDisciplineTechniques: 'Tough love',
      mdhPlannedPregnancy: 'Yes',
      mdhDrCare: 'Yes',
      mdhTotalPregnancies: '2',
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
      mdhOtherComplicationDescription: 'Lots of frosted cake',
      mdhMothersAge: '42',
      mdhFathersAge: '39',
      mdhMothersAgeFirstChild: '23',
      mdhHospitalBirth: 'No',
      mdhBirthLocation: 'Home',
      mdhPregnancyLength: '59',
      mdhBirthWeight: '8lb 2oz',
      mdhLaborLength: '12',
      mdhApgarScore: '33',
      mdhBirthConditionChild: 'Excellent',
      mdhBirthConditionMother: 'Excellent',
      mdhForceps: true,
      mdhBreech: true,
      mdhInduced: true,
      mdhCeasarean: true,
      mdhDeliveryComplications: 'More delivery complications',
      mdhIncubator: '32',
      mdhJaundiced: '3',
      mdhBreathingProblems: 'No',
      mdhSupplementalOxygen: 'No',
      mdhAnesthesia: 'Yes',
      mdhMotherLengthHospital: '3',
      mdhChildLengthHospital: '4',
      mdhTurnOverMonths: '3',
      mdhTurnOverYear: '5',
      mdhWalkDownStairsMonths: '11',
      mdhWalkDownStairsYear: '2',
      mdhSitAloneMonths: '9',
      mdhSitAloneYear: '3',
      mdhAttractedSoundMonths: '4',
      mdhAttractedSoundYear: '1',
      mdhCrawlMonths: '10',
      mdhCrawlYear: null,
      mdhUnderstandWordsMonths: '1',
      mdhUnderstandWordsYear: '4',
      mdhStandAloneMonths: '2',
      mdhStandAloneYear: '1',
      mdhSpeakFirstWordsMonths: '12',
      mdhSpeakFirstWordsYear: '14',
      mdhWalkAloneMonths: '5',
      mdhWalkAloneYear: '2',
      mdhSpeakSentencesMonths: '0',
      mdhSpeakSentencesYear: '4',
      mdhWalkUpStairsMonths: '8',
      mdhWalkUpStairsYear: '1',
      mdhBreastFed: 'Yes',
      mdhBreastFedWeaned: '1 year',
      mdhBottleFed: 'Yes',
      mdhBottleFedWeaned: '3.5 years',
      mdhToiletTrainedDay: '4 years',
      mdhToiletTrainedNight: '2 years',
      mdhBedWetting: 'No',
      mdhBedWettingStop: null,
      mdhBedSoiling: 'Yes',
      mdhBedSoilingStop: '4 years',
      mdhBedWettingMedicalReasons: 'Yes',
      mdhBedWettingMedicalReasonsDescription: 'Lots and lots of frosted cake',
      mdhWalkingDifficulty: true,
      mdhWalkingDifficultyDescription: 'The brown foxed jumped over the moon to reach the stars',
      mdhUnclearSpeech: true,
      mdhUnclearSpeechDescription: 'The brown foxed jumped over the moon to reach the stars',
      mdhFeedingProblem: true,
      mdhFeedingProblemDescription: 'Ate too fast too much',
      mdhUnderweightProblem: true,
      mdhUnderweightProblemDescription: 'Seems to like running too much',
      mdhOverweightProblem: true,
      mdhOverweightProblemDescription: 'Likes the sweet stuff',
      mdhColic: true,
      mdhColicDescription: 'Eating seems to agitate the baby',
      mdhSleepProblem: true,
      mdhSleepProblemDescription: 'Sometimes has night terrors',
      mdhEatingProblem: true,
      mdhEatingProblemDescription: 'Major foodie',
      mdhLearningRideBike: true,
      mdhLearningRideBikeDescription: 'Afraid to run into the mailbox',
      mdhLearningSkip: true,
      mdhLearningSkipDescription: 'Unable to coordinate both feet to jump',
      mdhLearningThrowCatch: true,
      mdhLearningThrowCatchDescription: 'Scared of the ball',
      mdhMotorSkillsFirstFour: true,
      mdhMotorSkillsFirstFourDescription: null,
      mdhTemperTantrum: true,
      mdhTemperTantrumDescription: null,
      mdhNoThriveFirstFour: true,
      mdhNoThriveFirstFourDescription: null,
      mdhSeparationAnxiety: true,
      mdhSeparationAnxietyDescription: 'George has trouble being dropped off at preschool',
      mdhExcessiveCrying: true,
      mdhExcessiveCryingDescription: 'Lots of crying',
      mdhChangeWritingHand: 'Yes',
      mhMeaselsMonths: '1',
      mhMeaselsMonthsYear: '3',
      mhRheumaticFeverMonths: '11',
      mhRheumaticFeverYear: '4',
      mhGermanMeaselsMonths: '2',
      mhGermanMeaselsYear: '8',
      mhDiptheriaMonths: '3',
      mhDiptheriaYear: '12',
      mhMumpsMonths: '0',
      mhMumpsYear: '11',
      mhUnderstandWordsMonths: '8',
      mhUnderstandWordsYear: '21',
      mdhMeningitisMonths: '1',
      mdhMeningitisYear: '14',
      mhChickenPoxMonth: '2',
      mhChickenPoxYear: '5',
      mhEncephalitisMonth: '0',
      mhEncephalitisYear: '9',
      mhTuberculosisMonth: '4',
      mhTuberculosisYear: '15',
      mhAnemiaMonth: '3',
      mhAnemiaYear: '11',
      mhWhoopingCoughMonths: '4',
      mhWhoopingCoughYear: '12',
      mhFever104Months: '8',
      mhFever104Year: '2',
      mhScarletFeverMonths: '4',
      mhScarletFeverYear: '4',
      mhBrokenBonesMonths: '1',
      mhBrokenBonesYear: '3',
      mhConcussionMonths: '9',
      mhConcussionYear: '12',
      mhComaLossConsciousnessMonths: '3',
      mhComaLossConsciousnessYear: '12',
      mdColds: 'Every month',
      mdChronicCough: 'Once a year',
      mdAsthma: 'Daily',
      mdHayFever: 'Twice a year',
      mdSinusCondition: 'Annually',
      mdPhysicalExertion: 'Weekly',
      mdActivityLimits: 'Daily',
      mdHeartMurmur: 'Daily',
      mdVomiting: 'Monthly',
      mdDiarrhea: 'Weekly',
      mdConstipation: 'Bi-weekly',
      mdStomachPain: 'Daily',
      mdUrination: 'Daily',
      mdPainUrinating: 'Monthly',
      mdExessiveUrination: 'Daily',
      mdUrineOdor: 'Daily',
      mdMusclePain: 'Monthly',
      mdClumsyWalk: 'Daily',
      mdPoorPosture: 'Daily',
      mdOtherMuscleProblems: 'Weekly',
      mdFrequentRashes: 'Daily',
      mdBruises: 'Sometimes',
      mdSores: 'Weekly',
      mdAcne: 'Yes',
      mdItchy: 'Yes',
      mdSeizures: 'Yes',
      mdSpeechDefects: 'Yes',
      mdAccidentProne: 'Yes',
      mdNailBiter: 'Yes',
      mdSucksThumb: 'Yes',
      mdGrindsTeeth: 'At night',
      mdTwitches: 'Yes',
      mdBangsHead: 'Yes',
      mdRocks: 'Yes',
      mdBowelMovement: 'Yes',
      mdNeurologicalMeds: 'Yes',
      mdNeurologicalMedsDate: '3/21/14',
      mdNeurologicalMedsKind: 'Guanfacine',
      mdNeurologicalTranquilizer: 'Yes',
      mdNeurologicalTranquilizerDate: '3/21/14',
      mdNeurologicalTranquilizerKind: 'Guanfacine',
      mdNeurologicalAdhdMeds: 'Yes',
      mdNeurologicalAdhdMedsDate: '3/21/14',
      mdNeurologicalAdhdMedsKind: 'Guanfacine',
      mdhAllergiesMedicine: true,
      mdhAllergiesMedicineDescription: 'Voramir',
      mdhAllergiesFood: true,
      mdhAllergiesFoodDescription: 'Strawberries, pineapple, & wheat',
      mdhAllergiesOther: true,
      mdhAllergiesOtherDescription: 'The brown cow jumped over the purple moon',
      mdhSpeechStuttering: true,
      mdhSpeechStutteringDescription: 'The brown cow jumped over the purple moon',
      mdhSpeechUnclear: true,
      mdhSpeechUnclearDescription: 'The brown cow jumped over the purple moon',
      mdhSpeechOther: true,
      mdhSpeechOtherDescription: 'The brown cow jumped over the purple moon',
      mdhSpeechExamDate: '3/21/14',
      mdhHearingEarInfection: true,
      mdhHearingProblems: true,
      mdhHearingTubes: true,
      mdhHearingEarInfectionDescription: 'The brown cow jumped over the purple moon',
      mdhHearingProblemsDescription: 'The brown cow jumped over the purple moon',
      mdhHearingTubesDescription: 'The brown cow jumped over the purple moon',
      mdhHearingExamDate: '3/21/14',
      mdhVisionProblems: true,
      mdhVisionProblemsDescription: 'The brown cow jumped over the purple moon',
      mdhGlasses: true,
      mdhGlassesDescription: 'The brown cow jumped over the purple moon',
      mdhVisionExamDate: '3/21/14',
      mcDrName: 'Dr. Guzman',
      mcDrPhone: '(334) 398-3812',
      mcDrVisitCount: '4',
      mcDrLastVisit: '3/21/14',
      mcDrLastVisitMonths: '3 months',
      medicationListGroup: [
        {
          mcMedicationName: 'First med',
          mcMedicationReason: '1st Med reason',
        },
        {
          mcMedicationName: 'Second med',
          mcMedicationReason: '2nd Med reason',
        },
      ],
      mcSexualAbuse: 'No',
      counselingGroup: [
        {
          mcCounselingName: 'Dr. Yoman Knots',
          mcCounselingAddress: '43 Main Street, Anytown, CA 93443',
          mcCounselingPhone: '(382) 840-9938',
          mcCounselingReason: 'Depression',
          mcCounselingDate: '2/4/12',
        },
        {
          mcCounselingName: 'Dr. Smithson Anderson',
          mcCounselingAddress: '13 Blue Rd., Anytown, CA 93443',
          mcCounselingPhone: '(382) 840-9938',
          mcCounselingReason: 'Depression',
          mcCounselingDate: '2/4/14',
        },
        {
          mcCounselingName: 'Dr. Smithson Anderson',
          mcCounselingAddress: '13 Blue Rd., Anytown, CA 93443',
          mcCounselingPhone: '(382) 840-9938',
          mcCounselingReason: 'Depression',
          mcCounselingDate: '2/4/14',
        },
      ],
      nuerologicalGroup: [
        {
          mcNuerologicalName: 'Roger Bond',
          mcNuerologicalAddress: '884 Cavendish Lane, Anycity, CA 93112',
          mcNuerologicalDate: '2019-02-01',
          mcNuerologicalReason: 'ADHD',
        },
        {
          mcNuerologicalName: 'Dr. Sarah Liberte',
          mcNuerologicalAddress: '4 S. Broadway Ave., Sometown, CA 94888',
          mcNuerologicalDate: '2019-01-01',
          mcNuerologicalReason: 'ODD',
        },
      ],
      psychologyGroup: [
        {
          mcPsychologyExamName: 'Dr. Yin Zhang',
          mcPsychologyExamCity: 'Pasadena',
          mcPsychologyExamDate: '2019-01-01',
          mcPsychologyExamReason: 'Depression',
        },
        {
          mcPsychologyExamName: 'Dr. Yan Yan-Yan',
          mcPsychologyExamCity: 'Foster City',
          mcPsychologyExamDate: '2016-01-01',
          mcPsychologyExamReason: 'Depression',
        },
        {
          mcPsychologyExamName: 'Dr. Yan Yan-Yan',
          mcPsychologyExamCity: 'Foster City',
          mcPsychologyExamDate: '2016-01-01',
          mcPsychologyExamReason: 'Depression',
        },
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
      fhFathersHealth: 'Right as rain',
      fhMothersHealth: 'Peachy',
      specialEdGroup: [
        {
          mcSpecialEdName: 'Uncle Billy Boy',
          mcSpecialEdClass: 'OT',
        },
        {
          mcSpecialEdName: 'Cousin Sissy',
          mcSpecialEdClass: 'SEIT',
        },
        {
          mcSpecialEdName: 'Aunt May',
          mcSpecialEdClass: 'OT',
        },
      ],
      fRelatingProblems: 'Yes',
      fRelatingProblemsDesc: 'Trouble empathizing',
      fFight: 'Yes',
      fFightDesc: 'Easily riled up',
      fYoungerFriends: 'Yes',
      fYoungerFriendsDesc: "Most of the patient's friends are younger",
      fMakingFriends: 'Yes',
      fMakingFriendsDesc: 'It takes time',
      fAlone: 'Yes',
      fAloneDesc: 'The brown fox jumps',
      fNeighbhoodFriends: 'Yes',
      fNeighbhoodFriendsDesc: 'Sometimes',
      fRolePeerGroupGames: 'The sky turns yellow at night',
      fSmokeCigarettes: false,
      fChewTobacco: true,
      fInhale: false,
      fAlcholol: true,
      fDrugs: true,
      riActivitesSports: 'Football, baseball, swimming, track & field',
      riActivitesHobbies: 'Video games, DIY, Maker',
      riActivitesOther: 'Cub Scouts',
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
      btFears: 'The boogey man',
      btAngry: 'Transistion times',
      ehDaycare: 'Yes',
      ehDaycareAge: '3',
      ehDaycareTime: '3 hours a day',
      ehDaycareDays: '3 days a week',
      ehDaycareProblems: 'None',
      ehKindergarten: 'Yes',
      ehKindergartenProblems: 'Unable to follow directions',
      ehChangedSchools: 'Yes',
      ehChangedSchoolsDesc: 'Bullied',
      ehRepeatGrade: 'Yes',
      ehGradeRepeatDesc: 'Disinterested in school work',
      ehGradeSkip: 'Yes',
      ehGradeSkipDesc: 'Super genius',
      ehDifficultyReading: 'Yes',
      ehDifficultyReadingDesc: 'Low patience',
      ehDifficultyMath: 'Yes',
      ehDifficultyMathDesc: 'Struggles to follow precise instructions',
      ehPoorGrades: 'Yes',
      ehPoorGradesDesc: 'Lazy',
      ehSpecialEd: 'Yes',
      ehSpecialEdDesc: 'Lorem ipsum',
      ehSpecialEdCurrent: 'Yes',
      ehTypeSpecialEdClass: 'OT',
      ehTypeSpecialEdHours: '3',
      ehDislikesSchool: 'Yes',
      ehAbsent: 'Yes',
      ehAbsentDesc: 'Frequent stomach pains from nervousness',
      ehGraduateHsDesc: '5/31/2033',
      ehTeacherConcerns: 'No',
      ehTeacherConcernsDesc: null,
      rdaReligonAffiliation: 'Catholic',
      rdaReligonInvolvement: '5',
      rdaSpiritualImportance: 'Very important',
      rdaReligonBuilding: 'Church',
      rdaEthnicity: 'White',
      rdaRace: 'Italian',
      rdaIdenficationOther: 'n/a',
      otherInformation: 'The brown fox jumped over the blue moon to get the cheese',
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
      // ParentScaleTitles
      t1VerbalComprehension: true,
      t2VisualSpatial: true,
      t3FluidReasoning: false,
      t4WorkingMemory: true,
      t5ProcessingSpeed: false,
      t6Ados2Communication: false,
      t7Ados2ReciprocalSocialInteraction: false,
      t8Ados2RestrictedAndRepetitiveBehaviors: false,
      t9Ados2Communication: true,
      t10Ados2ReciprocalSocialInteraction: true,
      t11Ados2RestrictedAndRepetitiveBehaviors: false,
      t12Ados2Communication: false,
      t13Ados2ReciprocalSocialInteraction: false,
      t14Ados2RestrictedAndRepetitiveBehaviors: false,
      t15Ados2Communication: false,
      t16Ados2ReciprocalSocialInteraction: true,
      t17ComplimentarySubtests: true,
      t18BriefValidityScales: true,
      t19BriefBehavioralRegulationIndexBri: true,
      t20BriefMetacognitionIndexMi: true,
      t21BriefGlobalExecutiveCompositeGec: true,
      t22Cars2Cars2stItems: false,
      t23Cars2Cars2hfItems: true,
      t24Conners3ContentScales: true,
      t25Conners3DsmSymptomScales: true,
      t26Conners3Indices: false,
      t27Conners3ScreenerItems: true,
      t28Conners3CriticalItems: true,
      t29Conners3ValidityScales: true,
      t30Conners3ContentScales: false,
      t31Conners3DsmSymptomScales: true,
      t32Conners3Indices: false,
      t33Conners3ScreenerItems: true,
      t34Conners3CriticalItems: true,
      t35Conners3ValidityScales: true,
      t36Conners3ContentScales: true,
      t37Conners3DsmSymptomScales: true,
      t38Conners3Indices: true,
      t39Conners3ScreenerItems: true,
      t40Conners3CriticalItems: true,
      t41Conners3ValidityScales: true,
      t42DasiiEarlyYearsCore: true,
      t43DasiiEarlyYearsDiagnostic: true,
      t44DasiiSchoolAgeCore: true,
      t45DasiiSchoolAgeDiagnostic: true,
      t46DasiiDiagnosticSubtests: true,
      t47RbansImmediateMemory: false,
      t48RbansVisuospatialConstructional: false,
      t49RbansLanguage: false,
      t50RbansAttention: true,
      t51RbansDelayedMemory: true,
      t52VinelandiiCommunicationDomain: true,
      t53VinelandiiDailyLivingSkillsDomain: true,
      t54VinelandiiSocializationDomain: true,
      t55VinelandiiMotorSkillsDomainOnlyAgesBirthThrough6: true,
      t56VinelandiiMaladaptiveBehaviorDomainOptional: true,
      t57WasiiiVerbalComprehension: true,
      t58WasiiiPerceptualReasoning: true,
      t59EarlyYearsCore: true,
      t60Wraml2VerbalMemoryIndex: true,
      t61Wraml2VisualMemoryIndex: true,
      t62Wraml2AttentionconcentrationIndex: false,
      t63Wraml2OptionalSubtests: false,
      t64Wraml2DelayRecallSubtests: false,
      t65Wraml2RecognitionSubtests: true,
      t66ValidityIndexes: false,
      t67ClinicalScales: true,
      t68AdaptiveScales: true,
      t69ContentScales: true,
      t70SchoolProblems: false,
      t71InternalizingProblems: true,
      t72Inattentionhyperactivity: true,
      t73PersonalAdjustment: true,
      t74SchoolProblems: false,
      t75InternalizingProblems: true,
      t76Inattentionhyperactivity: true,
      t77EmotionalSymptomsIndex: true,
      t78PersonalAdjustment: true,
      t79InternalizingProblems: false,
      t80Inattentionhyperactivity: true,
      t81EmotionalSymptomsIndex: true,
      t82PersonalAdjustment: true,
      t85ValidityIndexes: true,
      t86ClinicalScales: true,
      t87AdaptiveScales: true,
      t88ContentScales: true,
      t89ExternalizingProblems: false,
      t90InternalizingProblems: true,
      t91AdaptiveSkills: true,
      t92BehavioralSymptomsIndex: true,
      t93ExternalizingProblems: false,
      t94InternalizingProblems: true,
      t95SchoolProblems: true,
      t96AdaptiveSkills: true,
      t97BehavioralSymptomsIndex: true,
      t98ExternalizingProblems: false,
      t99InternalizingProblems: true,
      t100AdaptiveSkills: true,
      t101BehavioralSymptomsIndex: true,
      t102ExternalizingProblems: false,
      t103InternalizingProblems: true,
      t104AdaptiveSkills: true,
      t105BehavioralSymptomsIndex: true,
      t106WaisivVerbalComprehension: true,
      t107WaisivPerceptualReasoning: true,
      t108WaisivWorkingMemory: true,
      t109WaisivProcessingSpeed: true,
      t110PiyCognitiveImpairmentScale: true,
      t111PiyImpulsivityAndDistractibilityScale: true,
      t112PiyDelinquencyScale: true,
      t113PiyFamilyDysfunctionScale: true,
      t114PiyRealityDistortionScale: true,
      t115PiySomaticConcernScale: true,
      t116PiyPsychologicalDiscomfortScale: true,
      t117PiySocialWithdrawalScale: true,
      t118PiySocialSkillDeficitScale: true,
      t119McmiivClinicalPersonalityPatterns: true,
      t120McmiivSeverePersonalityPathology: true,
      t121McmiivClinicalSyndromes: true,
      t122McmiivSevereClinicalSyndromes: true,
      t123McmiivModifyingIndices: true,
      t124McmiivRandomResponseIndicators: true,
      t125Mmpi2ClinicalScales: true,
      t126Mmpi2ValidityScales: true,
      t127MmpiaValidityScales: true,
      t128NepsyiiAttentionAndExecutiveFunctioning: true,
      t129NepsyiiLanguage: true,
      t130NepsyiiMemoryAndLearning: true,
      t131NepsyiiSensorimotor: true,
      t132NepsyiiSocialPerception: true,
      t133NepsyiiVisuospatialProcessing: true,
      t134WjivcogComprehensionKnowledgeGc: true,
      t135WjivcogFluidReasoningGf: true,
      t136WjivcogShortTermWorkingMemoryGwm: true,
      t137WjivcogCognitiveProcessingSpeedGs: true,
      t138WjivcogAuditoryProcessingSpeedGa: true,
      t139WjivcogLongTermRetrievalGlr: true,
      t140WjivcogVisualProcessingGv: true,
      t142TsccValidityScale: true,
      t143TsccClinicalScale: true,
      t144WjivachBasicReadingSkills: true,
      t146WjivachReadingComprehensionExtended: true,
      t147WjivachMathCalculationSkills: true,
      t148WjivachMathReasoning: false,
      t149WjivachWrittenExpression: false,
      t150WjivachWritingRelatedSubtest: false,
      t151Ctoni2Principals: true,
      t152Ctoni2Composites: true,
      t158WppsiivLanguage: true,
      t159EmotionalSymptomsIndex: true,
      t160MmpiaClinical: true,
      // Subtest scores
      t1SimilaritiesScore: undefined,
      t2VocabularyScore: undefined,
      t3InformationScore: '2',
      t4ComprehensionScore: '2',
      t5BlockDesignScore: '2',
      t6VocabularyScore: '2',
      t7MatrixReasoningScore: '2',
      t8FigureWeightsScore: '2',
      t9PictureConceptsScore: '2',
      t10ArithmeticScore: '2',
      t11DigitSpanScore: '2',
      t12PictureSpanScore: '2',
      t13LetterNumberSequencingScore: '2',
      t14CodingScore: '2',
      t15SymbolSearchScore: '2',
      t16CancellationScore: '2',
      t17Ados2FrequencyOfSpontaneousVocalizationDirectedToOthersA2Score: undefined,
      t18Ados2PointingA7Score: '89',
      t19Ados2GesturesA8Score: '28',
      t20Ados2UnusualEyeContactB1Score: '12',
      t21Ados2FacialExpressionsDirectedToOthersB3Score: undefined,
      t22Ados2IntegrationOfGazeAndOtherBehaviorsDuringSocialOverturesB4Score: undefined,
      t23Ados2SharedEnjoymentInInteractionB5Score: '98',
      t24Ados2ShowingB9Score: undefined,
      t25Ados2SpontaneousInitiationOfJointAttentionB10Score: undefined,
      t26Ados2ResponseToJointAttentionB11Score: undefined,
      t27Ados2QualityOfSocialOverturesB12Score: undefined,
      t28Ados2IntonationOfVocalizationsOrVerbalizationsA3Score: '39',
      t29Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA5Score: '32',
      t30Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score: undefined,
      t31Ados2HandAndFingerAndOtherComplexMannerismsD2Score: '31',
      t32Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsD4Score: '29',
      t33Ados2PointingA6Score: undefined,
      t34Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA7Score: '92',
      t35Ados2UnusualEyeContactB1Score: undefined,
      t36Ados2FacialExpressionsDirectedToOthersB2Score: '28',
      t37Ados2SharedEnjoymentInInteractionB3Score: undefined,
      t38Ados2ShowingB5Score: '84',
      t39Ados2SpontaneousInitiationOfJointAttentionB6Score: '44',
      t40Ados2QualityOfSocialOverturesB8Score: '84',
      t41Ados2AmountOfReciprocalSocialCommunicationB11Score: '77',
      t42Ados2OverallQualityOfRapportB12Score: undefined,
      t43Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score: undefined,
      t44Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score: '30',
      t45Ados2HandAndFingerAndOtherComplexMannerismsD2Score: '10',
      t46Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsScore: '82',
      t47Ados2ReportingOfEventsA7Score: undefined,
      t48Ados2ConversationA8Score: undefined,
      t49Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA9Score: '13',
      t50Ados2UnusualEyeContactB1Score: '81',
      t51Ados2FacialExpressionsDirectedToExaminerB2Score: undefined,
      t52Ados2SharedEnjoymentInInteractionB3Score: '20',
      t53Ados2SharedEnjoymentInInteractionB4Score: '55',
      t54Ados2QualityOfSocialOverturesB7Score: '19',
      t55Ados2QualityOfSocialResponseB9Score: undefined,
      t56Ados2AmountOfReciprocalSocialCommunicationB10Score: undefined,
      t57Ados2OverallQualityOfRapportB11Score: undefined,
      t58Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score: '80',
      t59Ados2UnusualSensoryInterestInPlayMaterialPersonD1Score: undefined,
      t60Ados2HandAndFingerAndOtherComplexMannerismsD2Score: '82',
      t61Ados2UnusuallyRepetitiveInterestsOrStereotypedBehaviorsScore: '72',
      t62Ados2StereotypedIdiosyncraticUseOfWordsOrPhrasesA4Score: undefined,
      t63Ados2ConversationA8Score: undefined,
      t64Ados2DescriptiveConventionalInstrumentalOrInformationalGesturesA9Score: '92',
      t65Ados2EmphaticOrEmotionalGesturesA10Score: '81',
      t66Ados2UnusualEyeContactB1Score: undefined,
      t67Ados2FacialExpressionsDirectedToExaminerB2Score: undefined,
      t68Ados2CommentsOnOthersEmotionsEmpathyB6Score: undefined,
      t69Ados2ResponsibilityB8Score: '18',
      t70Ados2QualityOfSocialOverturesB9Score: '87',
      t71Ados2QualityOfSocialResponseB11Score: undefined,
      t72Ados2AmountOfReciprocalSocialCommunicationB12Score: undefined,
      t30NelsonDennyStandardScore: '75',
      t30NelsonDennyPercentile: '75',
      t30NelsonDennyGradeEquivalent: '5th',
      t31NelsonDennyStandardScore: '75',
      t31NelsonDennyPercentile: '75',
      t31NelsonDennyGradeEquivalent: '3rd',
      t46QikCptAccuracyIndexScore: '22',
      t47QikCptSustainedAttentionScore: '32',
      t48QikCptImpulseControlScore: '52',
      t49QikCptPerformanceIndexScore: '62',
      t50QikCptSpeedOfResponseScore: '72',
      t51QikCptConsistencyOfResponseScore: '82',
      t73NamingSpeedLiteracyScore: '2',
      t74NamingSpeedQualityScore: '2',
      t75ImmediateSymbolTranslationScore: '2',
      t76DelayedSymbolTranslationScore: '2',
      t77RecognitionSymbolTranslationScore: '2',
      t78InconsistencyScaleScore: '81',
      t79NegativityScaleScore: '87',
      t82InhibitScore: '88',
      t83ShiftScore: '88',
      t84EmotionalControlScore: '88',
      t85InitiateScore: '88',
      t86WorkingMemoryScore: '88',
      t87PlanOrganizeScore: '88',
      t88OrganizationOfMaterialsScore: '88',
      t89MonitorScore: '88',
      t90InhibitScore: '88',
      t91ShiftScore: '88',
      t92EmotionalControlScore: '88',
      t93InitiateScore: '88',
      t94WorkingMemoryScore: '88',
      t95PlanOrganizeScore: '88',
      t96OrganizationOfMaterialsScore: '88',
      t97MonitorScore: '88',
      t98RelatingToPeopleScore: undefined,
      t99ImitationScore: undefined,
      t100EmotionalResponseScore: undefined,
      t101BodyUseScore: '49',
      t102ObjectUseScore: '49',
      t103AdaptionToChangeScore: '49',
      t104VisualResponseScore: '49',
      t105ListeningResponseScore: '49',
      t106TasteSmellAndTouchResponseAndUseSctore: '49',
      t107FearOrNervousnessScore: '49',
      t108VerbalCommunicationScore: '49',
      t109NonverbalCommunicationScore: '49',
      t110ActivityLevelScore: '49',
      t111LevelAndConsistencyOfIntellectualRestponseScore: '49',
      t112GeneralImpressionsScore: '49',
      t113SocialEmotionalUnderstandingScore: undefined,
      t114EmotionalExpressionAndRegulationOfEmtotionsScore: undefined,
      t115RelatingToPeopleScore: undefined,
      t116BodyUseScore: '49',
      t117ObjectUseInPlayScore: '49',
      t118VisualResponseScore: '49',
      t119ListeningResponseScore: '49',
      t646AdaptationToChangeRestrictedInterestsScore: '49',
      t120InattentionScore: undefined,
      t121HyperactivityImpulsivityScore: undefined,
      t122LearningProblemsScore: undefined,
      t123ExecutiveFunctioningScore: '23',
      t124DefianceAggressionScore: '23',
      t125PeerRelationsScore: '23',
      t126AdhdInattentiveScore: '23',
      t127AdhdHyperactiveImpulsiveScore: '23',
      t128ConductDisorderScore: '23',
      t129OppositionalDefiantDisorderScore: '23',
      t130Conners3AdhdIndexScore: '23',
      t131Conners3GlobalIndexScore: '23',
      t132AnxietyScore: '23',
      t133DepressionScore: '23',
      t134SevereConductScore: '23',
      t135PositiveImpressionScore: '23',
      t136NegativeImpressionScore: '23',
      t137InconsistencyIndexScore: '23',
      t138InattentionScore: '23',
      t139HyperactivityImpulsivityScore: '23',
      t140LearningProblemsExecutiveFunctioningScore: '23',
      t141LearningProblemsScore: '23',
      t142ExecutiveFunctioningScore: '23',
      t143DefianceAggressionScore: '23',
      t144PeerRelationsScore: '23',
      t145AdhdInattentiveScore: '23',
      t146AdhdHyperactiveImpulsiveScore: '23',
      t147ConductDisorderScore: '23',
      t148OppositionalDefiantDisorderScore: '23',
      t149Conners3AdhdIndexScore: '23',
      t150Conners3GlobalIndexScore: '23',
      t151AnxietyScore: '23',
      t152DepressionScore: '23',
      t153SevereConductScore: '23',
      t154PositiveImpressionScore: '23',
      t155NegativeImpressionScore: '23',
      t156InconsistencyIndexScore: '23',
      t157InattentionScore: '23',
      t158HyperactivityImpulsivityScore: '23',
      t159LearningProblemsScore: '23',
      t160DefianceAggressionScore: '23',
      t161FamilyRelationsScore: '23',
      t162AdhdInattentiveScore: '23',
      t163AdhdHyperactiveImpulsiveScore: '23',
      t164ConductDisorderScore: '23',
      t165OppositionalDefiantDisorderScore: '23',
      t166Conners3AdhdIndexScore: '23',
      t644AnxietyScore: '23',
      t167DepressionScore: '23',
      t168SevereConductScore: '23',
      t169PositiveImpressionScore: '23',
      t170NegativeImpressionScore: '23',
      t171InconsistencyIndexScore: '23',
      t172PictorialAnalogiesScore: '99',
      t173GeometricAnalogiesScore: '99',
      t174PictorialCategoriesScore: '99',
      t175GeometricCategoriesScore: '99',
      t176PictorialSequencesScore: '99',
      t177GeometricSequencesScore: '99',
      t178PictorialScaleScore: '99',
      t179GeometricScaleScore: '99',
      t180FullScaleScore: '99',
      t181VerbalComprehensionScore: '55',
      t182PictureSimilaritiesScore: '55',
      t183NamingVocabularyScore: '55',
      t184RecallOfObjectsImmediateScore: '55',
      t185PatternConstructionScore: '55',
      t186MatricesScore: '55',
      t187RecallOfObjectsDelayedScore: '55',
      t188CopyingScore: '55',
      t189RecallOfDesignsScore: '55',
      t190WordDefinitionsScore: '55',
      t191RecallOfObjectsImmediateScore: '55',
      t192PatternConstructionScore: '55',
      t193MatricesScore: '55',
      t194RecallOfObjectsDelayedScore: '55',
      t195VerbalSimilaritiesScore: '55',
      t196SequentialAndQuantitativeReasoningScore: '55',
      t197RecallOfDigitsForwardScore: '55',
      t198RecognitionOfPicturesScore: '55',
      t199EarlyNumberConceptsScore: '55',
      t200MatchingLetterLikeFormsScore: '55',
      t201RecallOfSequentialOrderScore: '55',
      t202SpeedOfInformationProcessingScore: '55',
      t203RecallOfDigitsBackwardScore: '55',
      t204PhonologicalProcessingScore: '55',
      t205RapidNamingScore: '55',
      t206TrailMakingTestScore: undefined,
      t207VerbalFluencyTestScore: '71',
      t208DesignFluencyTestScore: '71',
      t209ColorWordInterferenceTestScore: '71',
      t210SortingTestScore: '71',
      t211TwentyQuestionsTestScore: '71',
      t212WordContextTestScore: '71',
      t213TowerTestScore: '71',
      t214ProverbTestScore: '71',
      t215RestrictiveRepetitiveBehaviorsScore: '99',
      t216SocialInteractionScore: '99',
      t217SocialCommunicationScore: '99',
      t218EmotionalResponsesScore: '99',
      t219CognitiveStyleScore: '99',
      t220MaladaptiveSpeechScore: '99',
      t221ListLearningScore: '40',
      t222StoryMemoryScore: '40',
      t223FigureCopyScore: '40',
      t224LineOrientationScore: '40',
      t225PictureNamingScore: '40',
      t226SemanticFluencyScore: '40',
      t227DigitSpanScore: '40',
      t228CodingScore: '40',
      t229ListRecallScore: '40',
      t230ListRecognitionScore: '40',
      t231StoryRecallScore: '40',
      t232FigureRecallScore: '40',
      t233ReceptiveScore: '82',
      t234ExpressiveScore: '82',
      t235WrittenScore: '82',
      t236PersonalScore: '82',
      t237DomesticScore: '82',
      t238CommunityScore: '82',
      t239InterpersonalRelationshipsScore: '82',
      t240PlayAndLeisureTimeScore: '82',
      t241CopingSkillsScore: '82',
      t242GrossScore: '82',
      t243FineScore: '82',
      t244MaladaptiveBehaviorIndexScore: '82',
      t245MaladaptiveBehaviorCriticalItemsScore: '82',
      t246SimilaritiesScore: '41',
      t247VocabularyScore: '41',
      t248BlockDesignScore: '41',
      t249MatrixReasoningScore: '41',
      t250ListeningComprehensionGradesPK12Score: '78',
      t251EarlyReadingSkillsGradesPK3Score: '33',
      t252ReadingComprehensionGrades112Score: '81',
      t253MathProblemSolvingGradesPK12Score: '90',
      t254AlphabetWritingFluencyGradesPK3Score: '99',
      t266StoryMemoryScore: undefined,
      t267VerbalLearningScore: '67',
      t268DesignMemoryScore: undefined,
      t269PictureMemoryScore: '67',
      t270FingerWindowsScore: '67',
      t271NumberLetterScore: '67',
      t272SentenceMemoryScore: '67',
      t273SoundSymbolScore: '67',
      t274VerbalWorkingMemoryScore: '67',
      t275SymbolicWorkingMemoryScore: '67',
      t276StoryMemoryDelayRecallScore: '67',
      t277VerbalLearningDelayRecallScore: '67',
      t278SoundSymbolDelayRecallScore: '67',
      t279StoryMemoryRecognitionScore: '67',
      t280VerbalLearningRecognitionScore: '67',
      t281DesignMemoryRecognitionScore: '67',
      t282PictureMemoryRecognitionScore: '67',
      t283FIndexScore: '52',
      t284LIndexScore: '52',
      t285VIndexScore: '52',
      t286AlcoholAbuseScore: undefined,
      t288AttentionProblemsScore: '52',
      t289AttitudeToSchoolScore: '52',
      t287AnxietyScore: '52',
      t290AttitudeToTeachersScore: '52',
      t291AtypicalityScore: '52',
      t292DepressionScore: '52',
      t293HyperactivityScore: '52',
      t294LocusOfControlScore: '52',
      t295SchoolMaladjustmentScore: '52',
      t298SocialStressScore: '52',
      t296SensationSeekingScore: '52',
      t297SenseOfInadequacyScore: '52',
      t299SomatizationScore: '52',
      t300InterpersonalRelationsScore: '52',
      t301RelationsWithParentsScore: '52',
      t302SelfEsteemScore: '52',
      t303SelfRelianceScore: '52',
      t304AngerControlScore: '52',
      t305EgoStrengthScore: '52',
      t306ManiaScore: '52',
      t307TestAnxietyScore: '52',
      t308AttitudeToSchoolScore: '52',
      t309AttitudeToTeachersScore: '52',
      t310AtypicalityScore: '52',
      t311LocusOfControlScore: '52',
      t312SocialStressScore: '52',
      t313AnxietyScore: '52',
      t314DepressionScore: '52',
      t315SenseOfInadequacyScore: '52',
      t316AttentionProblemsScore: '52',
      t317HyperactivityScore: '52',
      t318SocialStressScore: '52',
      t319AnxietyScore: '52',
      t320DepressionScore: '52',
      t323SelfRelianceScore: '52',
      t321SenseOfInadequacyScore: '52',
      t322SelfEsteemScore: '52',
      t662SocialStressScore: '52',
      t664AnxietyScore: '52',
      t665DepressionScore: '52',
      t666SenseOfInadequacyScore: '52',
      t667SelfEsteemScore: '52',
      t668SelfRelianceScore: '52',
      t324InterpersonalRelationsScore: '52',
      t325RelationsWithParentsScore: '52',
      t327SelfRelianceScore: '52',
      t326SelfEsteemScore: '52',
      t328AttitudeToSchoolScore: '52',
      t329AttitudeToTeachersScore: '52',
      t330SensationSeekingScore: '52',
      t331AtypicalityScore: '52',
      t332LocusOfControlScore: '52',
      t333SocialStressScore: '52',
      t334AnxietyScore: '52',
      t335DepressionScore: '52',
      t336SenseOfInadequacyScore: '52',
      t337SomatizationScore: '52',
      t338AttentionProblemsScore: '52',
      t339HyperactivityScore: '52',
      t340SocialStressScore: '52',
      t341AnxietyScore: '52',
      t342DepressionScore: '52',
      t345SelfRelianceScore: '52',
      t343SenseOfInadequacyScore: '52',
      t344SelfEsteemScore: '52',
      t346InterpersonalRelationsScore: '52',
      t347RelationsWithParentsScore: '52',
      t349SelfRelianceScore: '52',
      t348SelfEsteemScore: '52',
      t350AtypicalityScore: '52',
      t351LocusOfControlScore: '52',
      t352SocialStressScore: '52',
      t353AnxietyScore: '52',
      t354DepressionScore: '52',
      t355SenseOfInadequacyScore: '52',
      t356SomatizationScore: '52',
      t357AttentionProblemsScore: '52',
      t358HyperactivityScore: '52',
      t359SocialStressScore: '52',
      t360AnxietyScore: '52',
      t361DepressionScore: '52',
      t364SelfRelianceScore: '52',
      t362SenseOfInadequacyScore: '52',
      t363SelfEsteemScore: '52',
      t365InterpersonalRelationsScore: '52',
      t366RelationsWithParentsScore: '52',
      t368SelfRelianceScore: '52',
      t367SelfEsteemScore: '52',
      t369FIndexScore: '52',
      t370AggressionScore: '52',
      t372AttentionProblemsScore: '52',
      t371AnxietyScore: '52',
      t373AtypicalityScore: '52',
      t374ConductProblemsScore: '52',
      t375DepressionScore: '52',
      t376HyperactivityScore: '52',
      t377LearningProblemsScore: '52',
      t378SomatizationScore: '52',
      t379WithdrawalScore: '52',
      t380ActivitiesOfDailyLivingScore: '52',
      t381AdaptabilityScore: '52',
      t382FunctionalCommunicationScore: '52',
      t383LeadershipScore: '52',
      t384SocialSkillsScore: '52',
      t385StudySkillsScore: '52',
      t386AngerControlScore: '52',
      t387BullyingScore: '52',
      t388DevelopmentalSocialDisordersScore: '52',
      t389EmotionalSelfControlScore: '52',
      t390ExecutiveFunctioningScore: '52',
      t391NegativeEmotionalityScore: '52',
      t392ResiliencyScore: '52',
      t393HyperactivityScore: '52',
      t394AggressionScore: '52',
      t395AnxietyScore: '52',
      t396DepressionScore: '52',
      t397SomatizationScore: '52',
      t398AdaptabilityScore: '52',
      t399SocialSkillsScore: '52',
      t400FunctionalCommunicationScore: '52',
      t401HyperactivityScore: '52',
      t402AggressionScore: '52',
      t403DepressionScore: '52',
      t404AttentionProblemsScore: '52',
      t406WithdrawalScore: '52',
      t405AtypicalityScore: '52',
      t407HyperactivityScore: '52',
      t408AggressionScore: '52',
      t409ConductProblemsScore: '52',
      t410AnxietyScore: '52',
      t411DepressionScore: '52',
      t412SomatizationScore: '52',
      t413LearningProblemsScore: '52',
      t414AttentionProblemsScore: '52',
      t415AdaptabilityScore: '52',
      t416SocialSkillsScore: '52',
      t417FunctionalCommunicationScore: '52',
      t418LeadershipScore: '52',
      t419StudySkillsScore: '52',
      t420HyperactivityScore: '52',
      t421AggressionScore: '52',
      t422DepressionScore: '52',
      t423AttentionProblemsScore: '52',
      t425WithdrawalScore: '52',
      t424AtypicalityScore: '52',
      t426HyperactivityScore: '52',
      t427AggressionScore: '52',
      t428AnxietyScore: '52',
      t429DepressionScore: '52',
      t430SomatizationScore: '52',
      t431AdaptabilityScore: '52',
      t432SocialSkillsScore: '52',
      t433FunctionalCommunicationScore: '52',
      t434ActivitiesOfDailyLivingScore: '52',
      t435HyperactivityScore: '52',
      t436AggressionScore: '52',
      t437DepressionScore: '52',
      t438AttentionProblemsScore: '52',
      t439AtypicalityScore: '52',
      t440WithdrawalScore: '52',
      t441HyperactivityScore: '52',
      t442AggressionScore: '52',
      t443ConductProblemsScore: '52',
      t444AnxietyScore: '52',
      t445DepressionScore: '52',
      t446SomatizationScore: '52',
      t447AdaptabilityScore: '52',
      t448SocialSkillsScore: '52',
      t449FunctionalCommunicationScore: '52',
      t450ActivitiesOfDailyLivingScore: '52',
      t451HyperactivityScore: '52',
      t452AggressionScore: '52',
      t453DepressionScore: '52',
      t454AttentionProblemsScore: '52',
      t455AtypicalityScore: '52',
      t456WithdrawalScore: '52',
      t459InformationScore: '37',
      t457SimilaritiesScore: '37',
      t458VocabularyScore: '37',
      t460ComprehensionScore: '37',
      t461BlockDesignScore: '37',
      t462MatrixReasoningScore: '37',
      t463VisualPuzzlesScore: '37',
      t464FigureWeightsScore: '37',
      t465PictureCompletionScore: '37',
      t466DigitSpanScore: '37',
      t467ArithmeticScore: '37',
      t468LetterNumberSequencingScore: '37',
      t469CodingScore: '37',
      t470SymbolSearchScore: '37',
      t471CancellationScore: '37',
      t472PoorAchievementAndMemoryScore: '23',
      t473InadequateAbilitiesScore: '23',
      t474LearningProblemsScore: '23',
      t475BrashnessScore: '23',
      t476DistractibilityAndOveractivityScore: '23',
      t477ImpulsivityScore: '23',
      t478AntisocialBehaviorScore: '23',
      t479DyscontrolScore: '23',
      t480NoncomplianceScore: '23',
      t481ParentChildConflictScore: '23',
      t482ParentMaladjustmentScore: '23',
      t483MaritalDiscordScore: '23',
      t484FeelingsOfAlienationScore: '23',
      t485HallucinationsAndDelusionsScore: '23',
      t486PsychosomaticSyndromeScore: '23',
      t487MuscularTensionAndAnxietyScore: '23',
      t488PreoccupationWithDiseaseScore: '23',
      t489FearAndWorryScore: '23',
      t490DepressionScore: '23',
      t491SleepDisturbanceScore: '23',
      t492SocialIntroversionScore: '23',
      t493IsolationScore: '23',
      t494LimitedPeerStatusScore: '23',
      t495ConflictWithPeersScore: '23',
      t496Schizoid1Score: '76',
      t497Avoidant2aScore: '76',
      t498Depressive2bScore: '76',
      t499Dependent3Score: '76',
      t500Histrionic4Score: '76',
      t501Narcissistic5Score: '76',
      t502Antisocial6aScore: '76',
      t503SadisticAggressive6bScore: '76',
      t504Compulsive7Score: '76',
      t505NegativisticPassiveAggressive8aScore: '76',
      t506MasochisticSelfDefeating8bScore: '76',
      t507SchizotypalSScore: '76',
      t508borderlineCScore: '76',
      t509ParanoidPScore: '76',
      t510AnxietyAScore: '76',
      t511SomatoformHScore: '76',
      t512bipolarManicNScore: '76',
      t513DysthymiaDScore: '76',
      t514AlcoholDependencebScore: '76',
      t515DrugDependenceTScore: '76',
      t516PostTraumaticStressDisorderRScore: '76',
      t517ThoughtDisorderSsScore: '76',
      t518MajorDepressionCcScore: '76',
      t519DelusionalDisorderPpScore: '76',
      t520DisclosureXScore: '76',
      t521DesirabilityYScore: '76',
      t522DebasementZScore: '76',
      t523InvalidityVScore: '76',
      t524InconsistencyWScore: '76',
      t525HypochondriasisHsScore: '58',
      t526DepressionDScore: '58',
      t527HysteriaHyScore: '58',
      t528PsychopathicDeviatePdScore: '58',
      t529MasculinityFemininityMfScore: '58',
      t530ParanoiaPaScore: '58',
      t531PsychastheniaPtScore: '58',
      t532SchizophreniaScScore: '58',
      t533HypomaniaMaScore: '58',
      t534SocialIntroversionSiScore: '58',
      t535LieLScore: '58',
      t536FScore: '58',
      t537BackFFbScore: '58',
      t538KScore: '58',
      t539HypochondriasisHsScore: '45',
      t540DepressionDScore: '45',
      t541HysteriaHyScore: '45',
      t542PsychopathicDeviatePdScore: '45',
      t543MasculinityFemininityMfScore: '45',
      t544ParanoiaPaScore: '45',
      t545PsychastheniaPtScore: '45',
      t546SchizophreniaScScore: '45',
      t547HypomaniaMaScore: '45',
      t548SocialIntroversionSiScore: '45',
      t549CnsScore: '45',
      t550VrinScore: '45',
      t551TrinScore: '45',
      t552FScore: '45',
      t553F1Score: '45',
      t554F2Score: '45',
      t555LScore: '45',
      t556KScore: '45',
      t557AnimalSortingAsScore: '64',
      t558AuditoryAttentionAaAndResponseSetRsScore: '64',
      t559ClocksClScore: '64',
      t560DesignFluencyDfScore: '64',
      t561InhibitionInScore: '64',
      t562StatueStScore: '64',
      t563BodyPartNamingBpnAndIdentificationBpiScore: '64',
      t564ComprehensionOfInstructionsCiScore: '64',
      t565OromotorSequencesOsScore: '64',
      t566PhonologicalProcessingPhScore: '64',
      t567RepetitionNonsenseWordsRnScore: '64',
      t568SpeededNamingSnScore: '64',
      t569WordGenerationWgScore: '64',
      t571ListMemoryLmListMemoryDelayedLmdScore: '64',
      t572MemoryForDesignsMdMemoryForDesignsDelayedMddScore: '64',
      t573MemoryForFacesMfMemoryForFacesDelayedMfdScore: '64',
      t574MemoryForNamesMnMemoryForNamesDelayedMndScore: '64',
      t575NarrativeMemoryNmScore: '64',
      t576SentenceRepetitionSrScore: '64',
      t577WordListInterferenceWiScore: '64',
      t578FingertipTappingFtScore: '64',
      t579ImitatingHandPositionsIhScore: '64',
      t580ManualMotorSequencesMmScore: '64',
      t581VisuomotorPrecisionVpScore: '64',
      t582AffectRecognitionArScore: '64',
      t583TheoryOfMindTmScore: '64',
      t584ArrowsAwScore: '64',
      t585BlockConstructionBcScore: '64',
      t586DesignCopyingDcScore: '64',
      t587GeometricPuzzlesGpScore: '64',
      t588PicturePuzzlesPpScore: '64',
      t589RouteFindingRfScore: '64',
      t590DrawingScore: '81',
      t591MatchingScore: '81',
      t592PegboardScore: '81',
      t593VocabularyScore: '49',
      t594GeneralInformationScore: '49',
      t595NumberSeriesScore: '49',
      t596ConceptFormationScore: '49',
      t597AnalysisSynthesisScore: '49',
      t598VerbalAttentionScore: '49',
      t599NumbersReversedScore: '49',
      t600ObjectNumberSequencingScore: '49',
      t601PairCancellationScore: '49',
      t645LetterPatternMatchingScore: '49',
      t602PhonologicalProcessingScore: '49',
      t603NonWordRepetitionScore: '49',
      t604RecallScore: '49',
      t605VisualAuditoryLearningScore: '49',
      t606VisualizationScore: '49',
      t607PictureRecognitionScore: '49',
      t608UnderresponseUndScore: '92',
      t609HyperresponseHypScore: '92',
      t610AnxietyAnxScore: '92',
      t611DepressionDepScore: '92',
      t612AngerAngScore: '92',
      t613PosttraumaticStressPtsScore: '92',
      t614DissociationDisScore: '92',
      t615SexualConcernsScScore: '92',
      t616LetterWordIdentificationScore: '23',
      t617WordAttackScore: '49',
      t618PassageComprehensionScore: '49',
      t619ReadingRecallScore: '49',
      t620ReadingVocabularyScore: '49',
      t621CalculationScore: '49',
      t622MathFactFluencyScore: '49',
      t623AppliedProblemsScore: '49',
      t624NumberMatricesScore: '49',
      t625WritingSamplesScore: '49',
      t626SentenceWritingFluencyScore: '49',
      t627OralReadingScore: '49',
      t628SentenceReadingFluencyScore: '49',
      t629SpellingScore: '49',
      t630SpellingOfSoundsScore: '49',
      t630SoundAwarenessScore: '49',
      t631EditingScore: '49',
      t632ScienceScore: '49',
      t633SocialStudiesScore: '49',
      t634HumanitiesScore: '49',
      t635WordAttackScore: '49',
      t636SpellingOfSoundsScore: '49',
      t637BriefCognitiveStatusExamScore: '17',
      t638LogicalMemoryScore: '17',
      t639VerbalPairedAssociatesScore: '17',
      t640DesignsScore: '17',
      t641VisualReproductionScore: '17',
      t642SpatialAdditionScore: '17',
      t643SymbolSpanScore: '17',
      t647SimilaritiesScore: '61',
      t648VocabularyScore: '61',
      t649InformationScore: '61',
      t650ComprehensionScore: '61',
      t653BlockDesignScore: '61',
      t654ObjectAssemblyScore: '61',
      t657BugSearchScore: '61',
      t658CancellationScore: '61',
      t659AnimalCodingScore: '61',
      t651MatrixReasoningScore: '61',
      t652PictureConceptsScore: '61',
      t655PictureMemoryScore: '61',
      t656ZooLocationsScore: '61',
      t660ReceptiveVocabularyScore: '61',
      t661PictureNamingScore: '61',
      t669BeeryMotorIntegrationVmiScore: '2',
      t670BeeryVisualPerceptionScore: '2',
      t671BeeryMotorCoordinationScore: '2',
      t672ListeningComprehensionGradesPk12Score: '32',
      t673OralExpressionGradesPk12Score: '87',
      t674EarlyReadingSkillsGradesPk3Score: '12',
      t675ReadingComprehensionGrades112Score: '54',
      t676WordReadingGrades112Score: '31',
      t677PseudowordDecodingGrades112Score: '78',
      t678OralReadingFluencyGrades112Score: '29',
      t679SpellingGradesK12Score: '87',
      t680AlphabetWritingFluencyGradesPk3Score: '90',
      t681SentenceCompositionGrades112Score: '57',
      t682EssayCompositionGrades312Score: '54',
      t683NumericalOperationsGradesK12Score: '42',
      t684MathProblemSolvingGradesPk12Score: '12',
      t685MathFluencyAdditionScore: '98',
      t686MathFluencySubtractionScore: '18',
      t687MathFluencyMultiplicationScore: '29',
      t688VocabularyScore: '32',
      t689ComprehensionScore: '34',
      t690ReadingRateScore: '98',
      t698VisualScanningScore: '2',
      t699NumberSequencingScore: '2',
      t700LetterSequencingScore: '2',
      t701CombinedNumberAndLetterSequencingScore: '2',
      t702NumberLetterSwitchingScore: '2',
      t703MotorSpeedScore: '2',
      t704LetterFluencyScore: '2',
      t705CategoryFluencyScore: '2',
      t706CategorySwitchingScore: '2',
      t707FilledDotsScore: '2',
      t708EmptyDotsOnlyScore: '2',
      t709SwitchingScore: '2',
      t710ColorNamingScore: '2',
      t711WordReadingScore: '2',
      t712InhibitionScore: '2',
      t713InhibitionSwitchingScore: '2',
      t714FreeSortingScore: '2',
      t715SortRecognitionScore: '2',
      t716Item1Score: '2',
      t717Item2Score: '2',
      t718Item3Score: '2',
      t719Item4Score: '2',
      t720Item1Score: '2',
      t721Item2Score: '2',
      t722Item1TwoDisksScore: '2',
      t723Item2TwoDisksScore: '2',
      t724Item3TwoDisksScore: '2',
      t725Item4ThreeDisksScore: '2',
      t726Item5ThreeDisksScore: '2',
      t727Item6FourDisksScore: '2',
      t728Item7FourDisksScore: '2',
      t729Item8FiveDisksScore: '2',
      t730Item9FiveDisksScore: '2',
      t731FreeInquiryScore: '2',
      t732MultipleChoiceScore: '2',
      t733RateScore: '24',
      t734AccuracyScore: '72',
      t735FluencyScore: '81',
      t736ComprehensionScore: '50',
      t737Trail1Score: '2',
      t738Trial2Score: '2',
      t739RetentionTrialScore: '2',
      t743VerbalComprehensionScore: '2',
      t744PictureSimilaritiesScore: '2',
      t745NamingVocabularyScore: '2',
      t746PatternConstructionScore: '2',
      t747MatricesScore: '2',
      t748CopyingScore: '2',
      t749RecallOfObjectsImmediateScore: '2',
      t750RecallOfObjectsDelayedScore: '2',
      t751RecallOfDigitsForwardScore: '2',
      t752RecognitionOfPicturesScore: '2',
      t753EarlyNumberConceptsScore: '2',
      t754MatchingLetterLikeFormsScore: '2',
      t755RecallOfSequentialOrderScore: '2',
      t756SpeedOfInformationProcessingScore: '2',
      t757RecallOfDigitsBackwardScore: '2',
      t758PhonologicalProcessingScore: '2',
      t759RapidNamingScore: '2',
      t760RecallOfDesignsScore: '2',
      t761WordDefinitionsScore: '2',
      t762PatternConstructionScore: '2',
      t763MatricesScore: '2',
      t764VerbalSimilaritiesScore: '2',
      t765SequentialAndQuantitativeReasoningScore: '2',
      t766RecallOfObjectsImmediateScore: '2',
      t767RecallOfObjectsDelayedScore: '2',
      t768RecallOfDigitsForwardScore: '2',
      t769RecognitionOfPicturesScore: '2',
      t770RecallOfSequentialOrderScore: '22',
      t771SpeedOfInformationProcessingScore: '2',
      t772RecallOfDigitsBackwardScore: '2',
      t773PhonologicalProcessingScore: '2',
      t110PoorAchievementAndMemoryPercentileRank: 'Captain',
      t110InadequateAbilitiesPercentileRank: 'Captain',
      t110LearningProblemsPercentileRank: 'Captain',
      t111BrashnessPercentileRank: 'Captain',
      t111DistractibilityAndOveractivityPercentileRank: 'Captain',
      t111ImpulsivityPercentileRank: 'Captain',
      t112AntisocialBehaviorPercentileRank: 'Captain',
      t112DyscontrolPercentileRank: 'Captain',
      t112NoncompliancePercentileRank: 'Captain',
      t113ParentChildConflictPercentileRank: 'Captain',
      t113ParentMaladjustmentPercentileRank: 'Captain',
      t113MaritalDiscordPercentileRank: 'Captain',
      t114FeelingsOfAlienationPercentileRank: 'Captain',
      t114HallucinationsAndDelusionsPercentileRank: 'Captain',
      t115PsychosomaticSyndromePercentileRank: 'Captain',
      t115MuscularTensionAndAnxietyPercentileRank: 'Captain',
      t115PreoccupationWithDiseasePercentileRank: 'Captain',
      t116FearAndWorryPercentileRank: 'Captain',
      t116DepressionPercentileRank: 'Captain',
      t116SleepDisturbancePercentileRank: 'Captain',
      t117SocialIntroversionPercentileRank: 'Captain',
      t117IsolationPercentileRank: 'Captain',
      t118LimitedPeerStatusPercentileRank: 'Captain',
      t118ConflictWithPeersPercentileRank: 'Captain',
      t33Gort5Percentile: '50',
      t33Gort5AgeLevelEquivalency: '7',
      t33Gort5GradeLevelEquivalency: '1st',
      t34Gort5Percentile: '50',
      t34Gort5AgeLevelEquivalency: '7',
      t34Gort5GradeLevelEquivalency: '1st',
      t35Gort5Percentile: '50',
      t35Gort5AgeLevelEquivalency: '7',
      t35Gort5GradeLevelEquivalency: '1st',
      t36Gort5Percentile: '50',
      t36Gort5AgeLevelEquivalency: '7',
      t36Gort5GradeLevelEquivalency: '1st',
      t2WiscvVisualSpatialIndexVsiCompositeScore: '3',
      t2WiscvVisualSpatialIndexVsiCompositePercentile: '3',
      t2WiscvVisualSpatialIndexVsiCompositeRange: 'low',
      t1WiscvVerbalComprehensionIndexVciCompositeScore: '2',
      t1WiscvVerbalComprehensionIndexVciCompositePercentile: '3',
      t1WiscvVerbalComprehensionIndexVciCompositeRange: 'low',
      t3WiscvFluidReasoningIndexFriCompositeScore: '2',
      t3WiscvFluidReasoningIndexFriCompositePercentile: '3',
      t3WiscvFluidReasoningIndexFriCompositeRange: 'low',
      t4WiscvWorkingMemoryIndexWmiCompositeScore: '2',
      t4WiscvWorkingMemoryIndexWmiCompositePercentile: '3',
      t4WiscvWorkingMemoryIndexWmiCompositeRange: 'low',
      t5WiscvProcessingSpeedIndexPsiCompositeScore: '2',
      t5WiscvProcessingSpeedIndexPsiCompositePercentile: '3',
      t5WiscvProcessingSpeedIndexPsiCompositeRange: 'low',
      t57WasiiiVerbalComprehensionConsistent: true,
      t57WasiiiVerbalComprehensionInconsistent: false,
      t57WasiiiVerbalComprehensionFreehandPerformance: '80',
      t57WasiiiVerbalComprehensionCompositeScore: '80',
      t57WasiiiVerbalComprehensionCompositePercentile: '80',
      t57WasiiiVerbalComprehensionCompositeRange: 'high',
      t58WasiiiPerceptualReasoningConsistent: true,
      t58WasiiiPerceptualReasoningInconsistent: false,
      t58WasiiiPerceptualReasoningCompositeScore: '15',
      t58WasiiiPerceptualReasoningCompositePercentile: '15',
      t58WasiiiPerceptualReasoningCompositeRange: 'low',
      t106WaisivVerbalComprehensionConsistent: true,
      t106WaisivVerbalComprehensionCompositeScore: '16',
      t106WaisivVerbalComprehensionCompositePercentile: '16',
      t106WaisivVerbalComprehensionCompositeRange: 'low',
      t107WaisivPerceptualReasoningConsistent: true,
      t107WaisivPerceptualReasoningCompositeScore: '16',
      t107WaisivPerceptualReasoningCompositePercentile: '16',
      t107WaisivPerceptualReasoningCompositeRange: 'low',
      t108WaisivWorkingMemoryConsistent: true,
      t108WaisivWorkingMemoryCompositeScore: '51',
      t108WaisivWorkingMemoryCompositePercentile: '51',
      t108WaisivWorkingMemoryCompositeRange: 'middle',
      t109WaisivProcessingSpeedConsistent: true,
      t109WaisivProcessingSpeedCompositeScore: '51',
      t109WaisivProcessingSpeedCompositePercentile: '51',
      t109WaisivProcessingSpeedCompositeRange: 'middle',
      t134WjivCogComprehensionKnowledgeGcConsistent: true,
      t134WjivCogComprehensionKnowledgeGcCompositeScore: '13',
      t134WjivCogComprehensionKnowledgeGcCompositePercentile: '13',
      t134WjivCogComprehensionKnowledgeGcCompositeRange: 'lowly',
      t135WjivCogFluidReasoningGfConsistent: true,
      t135WjivCogFluidReasoningGfCompositeScore: '13',
      t135WjivCogFluidReasoningGfCompositePercentile: '13',
      t135WjivCogFluidReasoningGfCompositeRange: 'super lowly',
      t136WjivCogShortTermWorkingMemoryGwmConsistent: true,
      t136WjivCogShortTermWorkingMemoryGwmCompositeScore: '13',
      t136WjivCogShortTermWorkingMemoryGwmCompositePercentile: '13',
      t136WjivCogShortTermWorkingMemoryGwmCompositeRange: 'super duper lowly',
      t137WjivCogCognitiveProcessingSpeedGsConsistent: true,
      t137WjivCogCognitiveProcessingSpeedGsCompositeScore: '13',
      t137WjivCogCognitiveProcessingSpeedGsCompositePercentile: '13',
      t137WjivCogCognitiveProcessingSpeedGsCompositeRange: 'mega low',
      t138WjivCogAuditoryProcessingSpeedGaConsistent: true,
      t138WjivCogAuditoryProcessingSpeedGaCompositeScore: '13',
      t138WjivCogAuditoryProcessingSpeedGaCompositePercentile: '13',
      t138WjivCogAuditoryProcessingSpeedGaCompositeRange: 'mega low',
      t139WjivCogLongTermRetrievalGlrConsistent: true,
      t139WjivCogLongTermRetrievalGlrCompositeScore: '13',
      t139WjivCogLongTermRetrievalGlrCompositePercentile: '13',
      t139WjivCogLongTermRetrievalGlrCompositeRange: 'mega low',
      t140WjivCogVisualProcessingGvConsistent: true,
      t140WjivCogVisualProcessingGvCompositeScore: '13',
      t140WjivCogVisualProcessingGvCompositePercentile: '13',
      t140WjivCogVisualProcessingGvCompositeRange: 'mega low',
      t153WppsiivVerbalComprehensionCompositeScore: '24',
      t153WppsiivVerbalComprehensionCompositePercentile: '24',
      t153WppsiivVerbalComprehensionCompositeRange: 'low',
      t154WppsiivFluidReasoningCompositeScore: '42',
      t154WppsiivFluidReasoningCompositePercentile: '42',
      t154WppsiivFluidReasoningCompositeRange: 'mid',
      t155WppsiivVisualSpatialReasoningCompositeScore: '72',
      t155WppsiivVisualSpatialReasoningCompositePercentile: '72',
      t155WppsiivVisualSpatialReasoningCompositeRange: 'medium',
      t156WppsiivWorkingMemoryCompositeScore: '77',
      t156WppsiivWorkingMemoryCompositePercentile: '77',
      t156WppsiivWorkingMemoryCompositeRange: 'medium-high',
      t157WppsiivProcessingSpeedCompositeScore: '80',
      t157WppsiivProcessingSpeedCompositePercentile: '80',
      t157WppsiivProcessingSpeedCompositeRange: 'high-medium',
      t7WjivCogFsiqRank: 'lowish',
      t7WjivCogFsiqScore: '32',
      t7WjivCogFsiqPercentile: '32',
      t1WiscvFsiqScore: '86',
      t1WiscvFsiqPercentile: '86',
      t1WiscvFsiqRank: 'High',
      t3WasiiiFsiqScore: '32',
      t3WasiiiFsiqPercentile: '32',
      t3WasiiiFsiqRank: 'awesome',
      t5WaisivFsiqScore: '99',
      t5WaisivFsiqPercentile: '99',
      t5WaisivFsiqRank: 'super mega high',
      t9WppsiivFsiqScore: '84',
      t9WppsiivFsiqPercentile: '84',
      t9WppsiivFsiqRank: 'Mid high',
      t1IfFsiqIsMeaningful: true,
      t2IfFsiqIsNotMeaningful: false,
      t3IfFsiqIsMeaningful: true,
      t4IfFsiqIsNotMeaningful: false,
      t5IfFsiqIsMeaningful: true,
      t6IfFsiqIsNotMeaningful: false,
      t9IfFsiqIsMeaningful: true,
      t2WiscvGaiRange: 'High',
      t2WiscvGaiPercentile: '86',
      t6WaisivGaiRange: 'low',
      t6WaisivGaiPercentile: '38',
      t9WppsiivGaiRange: 'middle',
      t9WppsiivGaiPercentile: '42',
      t7IfGiaIsMeaningful: true,
      t10DasiiGcaRange: 'super high',
      t10DasiiGcaScore: '55',
      t10DasiiGcaPercentile: '55',
      t10DasiiSncRange: 'high',
      t10DasiiSncScore: '55',
      t10DasiiSncPercentile: '55',
      t2DasiiSummaryAbilities: 'das super-powers',
      t2DasiiSummaryChallenges: 'das water villans',
      t3WasiiiSummaryAbilities: 'wasi super-powers',
      t3WasiiiSummaryChallenges: 'wasi water villans',
      t4WiatiiiSummaryAbilities: 'wiat super-powers',
      t4WiatiiiSummaryChallenges: 'wiat water villans',
      t5WaisivSummaryAbilities: 'wais super-powers',
      t5WaisivSummaryChallenges: 'wais water villans',
      t6WjivCogSummaryAbilities: 'wj cog super-powers',
      t6WjivCogSummaryChallenges: 'wj cog water villans',
      t9WppsiivSummaryAbilities: 'wppsi super-powers',
      t9WppsiivSummaryChallenges: 'wppsi water villans',
      t1AppendixWiscvSimilaritiesRank: '2',
      t1AppendixWiscvSimilaritiesRange: '3',
      t2AppendixWiscvVocabularyRank: '2',
      t2AppendixWiscvVocabularyRange: '3',
      t3AppendixWiscvInformationRank: '2',
      t3AppendixWiscvInformationRange: '3',
      t4AppendixWiscvComprehensionRank: '2',
      t4AppendixWiscvComprehensionRange: '3',
      t5AppendixWiscvBlockDesignRank: '2',
      t5AppendixWiscvBlockDesignRange: '3',
      t6AppendixWiscvVocabularyRank: '2',
      t6AppendixWiscvVocabularyRange: '3',
      t7AppendixWiscvMatrixReasoningRank: '2',
      t7AppendixWiscvMatrixReasoningRange: '3',
      t8AppendixWiscvFigureWeightsRank: '2',
      t8AppendixWiscvFigureWeightsRange: '3',
      t9AppendixWiscvPictureConceptsRank: '2',
      t9AppendixWiscvPictureConceptsRange: '3',
      t10AppendixWiscvArithmeticRank: '2',
      t10AppendixWiscvArithmeticRange: '3',
      t11AppendixWiscvDigitSpanRank: '2',
      t11AppendixWiscvDigitSpanRange: '3',
      t12AppendixWiscvPictureSpanRank: '2',
      t12AppendixWiscvPictureSpanRange: '3',
      t13AppendixWiscvLetterNumberSequencingRank: '2',
      t13AppendixWiscvLetterNumberSequencingRange: '3',
      t14AppendixWiscvCodingRank: '2',
      t14AppendixWiscvCodingRange: '3',
      t15AppendixWiscvSymbolSearchRank: '2',
      t15AppendixWiscvSymbolSearchRange: '3',
      t16AppendixWiscvCancellationRank: '2',
      t16AppendixWiscvCancellationRange: '3',
      t46AppendixQikCptAccuracyIndexRank: '2',
      t46AppendixQikCptAccuracyIndexRange: '3',
      t47AppendixQikCptSustainedAttentionRank: '2',
      t47AppendixQikCptSustainedAttentionRange: '3',
      t48AppendixQikCptImpulseControlRank: '2',
      t48AppendixQikCptImpulseControlRange: '3',
      t49AppendixQikCptPerformanceIndexRank: '2',
      t49AppendixQikCptPerformanceIndexRange: '3',
      t50AppendixQikCptSpeedOfResponseRank: '2',
      t50AppendixQikCptSpeedOfResponseRange: '3',
      t51AppendixQikCptConsistencyOfResponseRank: '2',
      t51AppendixQikCptConsistencyOfResponseRange: '3',
      t73AppendixWiscvNamingSpeedLiteracyRank: '2',
      t73AppendixWiscvNamingSpeedLiteracyRange: '3',
      t74AppendixWiscvNamingSpeedQualityRank: '2',
      t74AppendixWiscvNamingSpeedQualityRange: '3',
      t75AppendixWiscvImmediateSymbolTranslationRank: '2',
      t75AppendixWiscvImmediateSymbolTranslationRange: '3',
      t76AppendixWiscvDelayedSymbolTranslationRank: '2',
      t76AppendixWiscvDelayedSymbolTranslationRange: '3',
      t77AppendixWiscvRecognitionSymbolTranslationRank: '2',
      t77AppendixWiscvRecognitionSymbolTranslationRange: '3',
      t78AppendixBriefInconsistencyScaleRank: '42',
      t78AppendixBriefInconsistencyScaleRange: '< 4th',
      t79AppendixBriefNegativityScaleRank: '42',
      t79AppendixBriefNegativityScaleRange: '< 4th',
      t82AppendixBriefInhibitRank: '42',
      t82AppendixBriefInhibitRange: '< 4th',
      t83AppendixBriefShiftRank: '42',
      t83AppendixBriefShiftRange: '< 4th',
      t84AppendixBriefEmotionalControlRank: '42',
      t84AppendixBriefEmotionalControlRange: '< 4th',
      t85AppendixBriefInitiateRank: '42',
      t85AppendixBriefInitiateRange: '< 4th',
      t86AppendixBriefWorkingMemoryRank: '42',
      t86AppendixBriefWorkingMemoryRange: '< 4th',
      t87AppendixBriefPlanOrganizeRank: '42',
      t87AppendixBriefPlanOrganizeRange: '< 4th',
      t88AppendixBriefOrganizationOfMaterialsRank: '42',
      t88AppendixBriefOrganizationOfMaterialsRange: '< 4th',
      t89AppendixBriefMonitorRank: '42',
      t89AppendixBriefMonitorRange: '< 4th',
      t90AppendixBriefInhibitRank: '42',
      t90AppendixBriefInhibitRange: '< 4th',
      t91AppendixBriefShiftRank: '42',
      t91AppendixBriefShiftRange: '< 4th',
      t92AppendixBriefEmotionalControlRank: '42',
      t92AppendixBriefEmotionalControlRange: '< 4th',
      t93AppendixBriefInitiateRank: '42',
      t93AppendixBriefInitiateRange: '< 4th',
      t94AppendixBriefWorkingMemoryRank: '42',
      t94AppendixBriefWorkingMemoryRange: '< 4th',
      t95AppendixBriefPlanOrganizeRank: '42',
      t95AppendixBriefPlanOrganizeRange: '< 4th',
      t96AppendixBriefOrganizationOfMaterialsRank: '42',
      t96AppendixBriefOrganizationOfMaterialsRange: '< 4th',
      t97AppendixBriefMonitorRank: '42',
      t97AppendixBriefMonitorRange: '< 4th',
      t120AppendixConners3InattentionRank: '2',
      t120AppendixConners3InattentionRange: '3',
      t121AppendixConners3HyperactivityImpulsivityRank: '2',
      t121AppendixConners3HyperactivityImpulsivityRange: '3',
      t122AppendixConners3LearningProblemsRank: '2',
      t122AppendixConners3LearningProblemsRange: '3',
      t123AppendixConners3ExecutiveFunctioningRank: '2',
      t123AppendixConners3ExecutiveFunctioningRange: '3',
      t124AppendixConners3DefianceAggressionRank: '2',
      t124AppendixConners3DefianceAggressionRange: '3',
      t125AppendixConners3PeerRelationsRank: '2',
      t125AppendixConners3PeerRelationsRange: '3',
      t126AppendixConners3AdhdInattentiveRank: '2',
      t126AppendixConners3AdhdInattentiveRange: '3',
      t128AppendixConners3ConductDisorderRank: '2',
      t128AppendixConners3ConductDisorderRange: '3',
      t129AppendixConners3OppositionalDefiantDisorderRank: '2',
      t129AppendixConners3OppositionalDefiantDisorderRange: '3',
      t127AppendixConners3AdhdHyperactiveImpulsiveRank: '2',
      t127AppendixConners3AdhdHyperactiveImpulsiveRange: '3',
      t130AppendixConners3Conners3AdhdIndexRank: '2',
      t130AppendixConners3Conners3AdhdIndexRange: '3',
      t131AppendixConners3Conners3GlobalIndexRank: '2',
      t131AppendixConners3Conners3GlobalIndexRange: '3',
      t132AppendixConners3AnxietyRank: '2',
      t132AppendixConners3AnxietyRange: '3',
      t133AppendixConners3DepressionRank: '2',
      t133AppendixConners3DepressionRange: '2',
      t134AppendixConners3SevereConductRank: '2',
      t134AppendixConners3SevereConductRange: '3',
      t135AppendixConners3PositiveImpressionRank: '2',
      t135AppendixConners3PositiveImpressionRange: '3',
      t136AppendixConners3NegativeImpressionRank: '2',
      t136AppendixConners3NegativeImpressionRange: '3',
      t137AppendixConners3InconsistencyIndexRank: '2',
      t137AppendixConners3InconsistencyIndexRange: '3',
      t138AppendixConners3InattentionRank: '2',
      t138AppendixConners3InattentionRange: '3',
      t139AppendixConners3HyperactivityImpulsivityRank: '2',
      t139AppendixConners3HyperactivityImpulsivityRange: '3',
      t141AppendixConners3LearningProblemsRank: '2',
      t141AppendixConners3LearningProblemsRange: '3',
      t142AppendixConners3ExecutiveFunctioningRank: '2',
      t142AppendixConners3ExecutiveFunctioningRange: '3',
      t143AppendixConners3DefianceAggressionRank: '2',
      t143AppendixConners3DefianceAggressionRange: '3',
      t144AppendixConners3PeerRelationsRank: '2',
      t144AppendixConners3PeerRelationsRange: '3',
      t145AppendixConners3AdhdInattentiveRank: '2',
      t145AppendixConners3AdhdInattentiveRange: '3',
      t146AppendixConners3AdhdHyperactiveImpulsiveRank: '2',
      t146AppendixConners3AdhdHyperactiveImpulsiveRange: '3',
      t147AppendixConners3ConductDisorderRank: '2',
      t147AppendixConners3ConductDisorderRange: '3',
      t148AppendixConners3OppositionalDefiantDisorderRank: '2',
      t148AppendixConners3OppositionalDefiantDisorderRange: '3',
      t149AppendixConners3Conners3AdhdIndexRank: '2',
      t149AppendixConners3Conners3AdhdIndexRange: '3',
      t150AppendixConners3Conners3GlobalIndexRank: '2',
      t150AppendixConners3Conners3GlobalIndexRange: '3',
      t151AppendixConners3AnxietyRank: '2',
      t151AppendixConners3AnxietyRange: '3',
      t152AppendixConners3DepressionRank: '2',
      t152AppendixConners3DepressionRange: '3',
      t153AppendixConners3SevereConductRank: '2',
      t153AppendixConners3SevereConductRange: '3',
      t154AppendixConners3PositiveImpressionRank: '2',
      t154AppendixConners3PositiveImpressionRange: '3',
      t155AppendixConners3NegativeImpressionRank: '2',
      t155AppendixConners3NegativeImpressionRange: '3',
      t156AppendixConners3InconsistencyIndexRank: '2',
      t156AppendixConners3InconsistencyIndexRange: '3',
      t158AppendixConners3HyperactivityImpulsivityRank: '2',
      t158AppendixConners3HyperactivityImpulsivityRange: '3',
      t157AppendixConners3InattentionRank: '2',
      t157AppendixConners3InattentionRange: '3',
      t159AppendixConners3LearningProblemsRank: '2',
      t159AppendixConners3LearningProblemsRange: '3',
      t160AppendixConners3DefianceAggressionRank: '2',
      t160AppendixConners3DefianceAggressionRange: '3',
      t161AppendixConners3FamilyRelationsRank: '2',
      t161AppendixConners3FamilyRelationsRange: '3',
      t162AppendixConners3AdhdInattentiveRank: '2',
      t162AppendixConners3AdhdInattentiveRange: '3',
      t163AppendixConners3AdhdHyperactiveImpulsiveRank: '2',
      t163AppendixConners3AdhdHyperactiveImpulsiveRange: '3',
      t164AppendixConners3ConductDisorderRank: '2',
      t164AppendixConners3ConductDisorderRange: '3',
      t165AppendixConners3OppositionalDefiantDisorderRank: '2',
      t165AppendixConners3OppositionalDefiantDisorderRange: '3',
      t166AppendixConners3Conners3AdhdIndexRank: '2',
      t166AppendixConners3Conners3AdhdIndexRange: '3',
      t644AppendixConners3AnxietyRank: '3',
      t644AppendixConners3AnxietyRange: '3',
      t167AppendixConners3DepressionRank: '2',
      t167AppendixConners3DepressionRange: '3',
      t168AppendixConners3SevereConductRank: '2',
      t168AppendixConners3SevereConductRange: '3',
      t169AppendixConners3PositiveImpressionRank: '2',
      t169AppendixConners3PositiveImpressionRange: '3',
      t170AppendixConners3NegativeImpressionRank: '2',
      t170AppendixConners3NegativeImpressionRange: '3',
      t171AppendixConners3InconsistencyIndexRank: '2',
      t171AppendixConners3InconsistencyIndexRange: '3',
      t172AppendixCtoni2PictorialAnalogiesRank: '2',
      t172AppendixCtoni2PictorialAnalogiesRange: '3',
      t173AppendixCtoni2GeometricAnalogiesRank: '2',
      t173AppendixCtoni2GeometricAnalogiesRange: '3',
      t174AppendixCtoni2PictorialCategoriesRank: '2',
      t174AppendixCtoni2PictorialCategoriesRange: '3',
      t175AppendixCtoni2GeometricCategoriesRank: '2',
      t175AppendixCtoni2GeometricCategoriesRange: '3',
      t177AppendixCtoni2GeometricSequencesRank: '2',
      t177AppendixCtoni2GeometricSequencesRange: '3',
      t176AppendixCtoni2PictorialSequencesRank: '2',
      t176AppendixCtoni2PictorialSequencesRange: '3',
      t178AppendixCtoni2PictorialScaleRank: '2',
      t178AppendixCtoni2PictorialScaleRange: '3',
      t179AppendixCtoni2GeometricScaleRank: '2',
      t179AppendixCtoni2GeometricScaleRange: '3',
      t180AppendixCtoni2FullScaleRank: '2',
      t180AppendixCtoni2FullScaleRange: '3',
      t221AppendixRbansListLearningRank: '2',
      t221AppendixRbansListLearningRange: '3',
      t222AppendixRbansStoryMemoryRank: '2',
      t222AppendixRbansStoryMemoryRange: '3',
      t223AppendixRbansFigureCopyRank: '2',
      t223AppendixRbansFigureCopyRange: '3',
      t224AppendixRbansLineOrientationRank: '2',
      t224AppendixRbansLineOrientationRange: '3',
      t225AppendixRbansPictureNamingRank: '2',
      t225AppendixRbansPictureNamingRange: '3',
      t226AppendixRbansSemanticFluencyRank: '2',
      t226AppendixRbansSemanticFluencyRange: '3',
      t227AppendixRbansDigitSpanRank: '2',
      t227AppendixRbansDigitSpanRange: '3',
      t228AppendixRbansCodingRank: '2',
      t228AppendixRbansCodingRange: '3',
      t229AppendixRbansListRecallRank: '2',
      t229AppendixRbansListRecallRange: '3',
      t230AppendixRbansListRecognitionRank: '2',
      t230AppendixRbansListRecognitionRange: '3',
      t231AppendixRbansStoryRecallRank: '2',
      t231AppendixRbansStoryRecallRange: '3',
      t232AppendixRbansFigureRecallRank: '2',
      t232AppendixRbansFigureRecallRange: '3',
      t233AppendixVinelandiiReceptiveRank: '2',
      t233AppendixVinelandiiReceptiveRange: '3',
      t234AppendixVinelandiiExpressiveRank: '2',
      t234AppendixVinelandiiExpressiveRange: '3',
      t235AppendixVinelandiiWrittenRank: '2',
      t235AppendixVinelandiiWrittenRange: '3',
      t236AppendixVinelandiiPersonalRank: '2',
      t236AppendixVinelandiiPersonalRange: '3',
      t237AppendixVinelandiiDomesticRank: '2',
      t237AppendixVinelandiiDomesticRange: '3',
      t238AppendixVinelandiiCommunityRank: '2',
      t238AppendixVinelandiiCommunityRange: '3',
      t239AppendixVinelandiiInterpersonalRelationshipsRank: '2',
      t239AppendixVinelandiiInterpersonalRelationshipsRange: '3',
      t240AppendixVinelandiiPlayAndLeisureTimeRank: '2',
      t240AppendixVinelandiiPlayAndLeisureTimeRange: '3',
      t241AppendixVinelandiiCopingSkillsRank: '2',
      t241AppendixVinelandiiCopingSkillsRange: '3',
      t242AppendixVinelandiiGrossRank: '2',
      t242AppendixVinelandiiGrossRange: '3',
      t243AppendixVinelandiiFineRank: '2',
      t243AppendixVinelandiiFineRange: '3',
      t244AppendixVinelandiiMaladaptiveBehaviorIndexRank: '2',
      t244AppendixVinelandiiMaladaptiveBehaviorIndexRange: '3',
      t245AppendixVinelandiiMaladaptiveBehaviorCriticalItemsRank: '2',
      t245AppendixVinelandiiMaladaptiveBehaviorCriticalItemsRange: '3',
      t246AppendixWasiiiSimilaritiesRank: '2',
      t246AppendixWasiiiSimilaritiesRange: '3',
      t247AppendixWasiiiVocabularyRank: '2',
      t247AppendixWasiiiVocabularyRange: '3',
      t248AppendixWasiiiBlockDesignRank: '2',
      t248AppendixWasiiiBlockDesignRange: '3',
      t249AppendixWasiiiMatrixReasoningRank: '2',
      t249AppendixWasiiiMatrixReasoningRange: '3',
      t266AppendixWraml2StoryMemoryRank: '2',
      t266AppendixWraml2StoryMemoryRange: '3',
      t267AppendixWraml2VerbalLearningRank: '2',
      t267AppendixWraml2VerbalLearningRange: '3',
      t268AppendixWraml2DesignMemoryRank: '2',
      t268AppendixWraml2DesignMemoryRange: '3',
      t269AppendixWraml2PictureMemoryRank: '2',
      t269AppendixWraml2PictureMemoryRange: '3',
      t270AppendixWraml2FingerWindowsRank: '2',
      t270AppendixWraml2FingerWindowsRange: '3',
      t271AppendixWraml2NumberLetterRank: '2',
      t271AppendixWraml2NumberLetterRange: '3',
      t272AppendixWraml2SentenceMemoryRank: '2',
      t272AppendixWraml2SentenceMemoryRange: '3',
      t273AppendixWraml2SoundSymbolRank: '2',
      t273AppendixWraml2SoundSymbolRange: '3',
      t274AppendixWraml2VerbalWorkingMemoryRank: '2',
      t274AppendixWraml2VerbalWorkingMemoryRange: '3',
      t275AppendixWraml2SymbolicWorkingMemoryRank: '2',
      t275AppendixWraml2SymbolicWorkingMemoryRange: '3',
      t276AppendixWraml2StoryMemoryDelayRecallRank: '2',
      t276AppendixWraml2StoryMemoryDelayRecallRange: '3',
      t277AppendixWraml2VerbalLearningDelayRecallRank: '2',
      t277AppendixWraml2VerbalLearningDelayRecallRange: '3',
      t278AppendixWraml2SoundSymbolDelayRecallRank: '2',
      t278AppendixWraml2SoundSymbolDelayRecallRange: '3',
      t279AppendixWraml2StoryMemoryRecognitionRank: '2',
      t279AppendixWraml2StoryMemoryRecognitionRange: '3',
      t280AppendixWraml2VerbalLearningRecognitionRank: '2',
      t280AppendixWraml2VerbalLearningRecognitionRange: '3',
      t281AppendixWraml2DesignMemoryRecognitionRank: '2',
      t281AppendixWraml2DesignMemoryRecognitionRange: '3',
      t282AppendixWraml2PictureMemoryRecognitionRank: '2',
      t282AppendixWraml2PictureMemoryRecognitionRange: '3',
      trbansTotalRaleScore: '12',
      trbansTotalRaleScoreScaledScore: '12',
      trbansTotalRaleScorePercentileRank: '12',
      trbansTotalRaleScoreRange: '12',
      t283AppendixBasc3FIndexRank: '2',
      t283AppendixBasc3FIndexRange: '3',
      t284AppendixBasc3LIndexRank: '2',
      t284AppendixBasc3LIndexRange: '3',
      t285AppendixBasc3VIndexRank: '2',
      t285AppendixBasc3VIndexRange: '3',
      t286AppendixBasc3AlcoholAbuseRank: '2',
      t286AppendixBasc3AlcoholAbuseRange: '3',
      t287AppendixBasc3AnxietyRank: '2',
      t287AppendixBasc3AnxietyRange: '3',
      t288AppendixBasc3AttentionProblemsRank: '2',
      t288AppendixBasc3AttentionProblemsRange: '3',
      t289AppendixBasc3AttitudeToSchoolRank: '2',
      t289AppendixBasc3AttitudeToSchoolRange: '3',
      t290AppendixBasc3AttitudeToTeachersRank: '2',
      t290AppendixBasc3AttitudeToTeachersRange: '3',
      t291AppendixBasc3AtypicalityRank: '2',
      t291AppendixBasc3AtypicalityRange: '3',
      t292AppendixBasc3DepressionRank: '2',
      t292AppendixBasc3DepressionRange: '3',
      t293AppendixBasc3HyperactivityRank: '2',
      t293AppendixBasc3HyperactivityRange: '3',
      t294AppendixBasc3LocusOfControlRank: '2',
      t294AppendixBasc3LocusOfControlRange: '3',
      t295AppendixBasc3SchoolMaladjustmentRank: '2',
      t295AppendixBasc3SchoolMaladjustmentRange: '3',
      t296AppendixBasc3SensationSeekingRank: '2',
      t296AppendixBasc3SensationSeekingRange: '3',
      t297AppendixBasc3SenseOfInadequacyRank: '2',
      t297AppendixBasc3SenseOfInadequacyRange: '3',
      t298AppendixBasc3SocialStressRank: '2',
      t298AppendixBasc3SocialStressRange: '3',
      t299AppendixBasc3SomatizationRank: '2',
      t299AppendixBasc3SomatizationRange: '3',
      t300AppendixBasc3InterpersonalRelationsRank: '2',
      t300AppendixBasc3InterpersonalRelationsRange: '3',
      t301AppendixBasc3RelationsWithParentsRank: '2',
      t301AppendixBasc3RelationsWithParentsRange: '3',
      t302AppendixBasc3SelfEsteemRank: '2',
      t302AppendixBasc3SelfEsteemRange: '3',
      t303AppendixBasc3SelfRelianceRank: '2',
      t303AppendixBasc3SelfRelianceRange: '3',
      t304AppendixBasc3AngerControlRank: '2',
      t304AppendixBasc3AngerControlRange: '3',
      t305AppendixBasc3EgoStrengthRank: '2',
      t305AppendixBasc3EgoStrengthRange: '3',
      t306AppendixBasc3ManiaRank: '2',
      t306AppendixBasc3ManiaRange: '3',
      t307AppendixBasc3TestAnxietyRank: '2',
      t307AppendixBasc3TestAnxietyRange: '3',
      t308AppendixBasc3AttitudeToSchoolRank: '2',
      t308AppendixBasc3AttitudeToSchoolRange: '3',
      t309AppendixBasc3AttitudeToTeachersRank: '2',
      t309AppendixBasc3AttitudeToTeachersRange: '3',
      t310AppendixBasc3AtypicalityRank: '2',
      t310AppendixBasc3AtypicalityRange: '3',
      t311AppendixBasc3LocusOfControlRank: '2',
      t311AppendixBasc3LocusOfControlRange: '3',
      t312AppendixBasc3SocialStressRank: '2',
      t312AppendixBasc3SocialStressRange: '3',
      t313AppendixBasc3AnxietyRank: '2',
      t313AppendixBasc3AnxietyRange: '3',
      t314AppendixBasc3DepressionRank: '2',
      t314AppendixBasc3DepressionRange: '3',
      t315AppendixBasc3SenseOfInadequacyRank: '2',
      t315AppendixBasc3SenseOfInadequacyRange: '3',
      t316AppendixBasc3AttentionProblemsRank: '2',
      t316AppendixBasc3AttentionProblemsRange: '3',
      t317AppendixBasc3HyperactivityRank: '2',
      t317AppendixBasc3HyperactivityRange: '3',
      t662AppendixBasc3SocialStressRank: '2',
      t662AppendixBasc3SocialStressRange: '3',
      t664AppendixBasc3AnxietyRank: '2',
      t664AppendixBasc3AnxietyRange: '3',
      t665AppendixBasc3DepressionRank: '2',
      t665AppendixBasc3DepressionRange: '3',
      t666AppendixBasc3SenseOfInadequacyRank: '2',
      t666AppendixBasc3SenseOfInadequacyRange: '3',
      t667AppendixBasc3SelfEsteemRank: '2',
      t667AppendixBasc3SelfEsteemRange: '3',
      t668AppendixBasc3SelfRelianceRank: '2',
      t668AppendixBasc3SelfRelianceRange: '3',
      t324AppendixBasc3InterpersonalRelationsRank: '2',
      t324AppendixBasc3InterpersonalRelationsRange: '3',
      t325AppendixBasc3RelationsWithParentsRank: '2',
      t325AppendixBasc3RelationsWithParentsRange: '3',
      t326AppendixBasc3SelfEsteemRank: '2',
      t326AppendixBasc3SelfEsteemRange: '3',
      t327AppendixBasc3SelfRelianceRank: '2',
      t327AppendixBasc3SelfRelianceRange: '3',
      t328AppendixBasc3AttitudeToSchoolRank: '2',
      t328AppendixBasc3AttitudeToSchoolRange: '3',
      t329AppendixBasc3AttitudeToTeachersRank: '2',
      t329AppendixBasc3AttitudeToTeachersRange: '3',
      t330AppendixBasc3SensationSeekingRank: '2',
      t330AppendixBasc3SensationSeekingRange: '3',
      t331AppendixBasc3AtypicalityRank: '2',
      t331AppendixBasc3AtypicalityRange: '3',
      t332AppendixBasc3LocusOfControlRank: '2',
      t332AppendixBasc3LocusOfControlRange: '3',
      t333AppendixBasc3SocialStressRank: '2',
      t333AppendixBasc3SocialStressRange: '3',
      t334AppendixBasc3AnxietyRank: '2',
      t334AppendixBasc3AnxietyRange: '3',
      t335AppendixBasc3DepressionRank: '2',
      t335AppendixBasc3DepressionRange: '3',
      t336AppendixBasc3SenseOfInadequacyRank: '2',
      t336AppendixBasc3SenseOfInadequacyRange: '3',
      t337AppendixBasc3SomatizationRank: '2',
      t337AppendixBasc3SomatizationRange: '3',
      t338AppendixBasc3AttentionProblemsRank: '2',
      t338AppendixBasc3AttentionProblemsRange: '3',
      t339AppendixBasc3HyperactivityRank: '2',
      t339AppendixBasc3HyperactivityRange: '3',
      t340AppendixBasc3SocialStressRank: '2',
      t340AppendixBasc3SocialStressRange: '3',
      t341AppendixBasc3AnxietyRank: '2',
      t341AppendixBasc3AnxietyRange: '3',
      t342AppendixBasc3DepressionRank: '2',
      t342AppendixBasc3DepressionRange: '3',
      t343AppendixBasc3SenseOfInadequacyRank: '2',
      t343AppendixBasc3SenseOfInadequacyRange: '3',
      t344AppendixBasc3SelfEsteemRank: '2',
      t344AppendixBasc3SelfEsteemRange: '3',
      t345AppendixBasc3SelfRelianceRank: '2',
      t345AppendixBasc3SelfRelianceRange: '3',
      t346AppendixBasc3InterpersonalRelationsRank: '2',
      t346AppendixBasc3InterpersonalRelationsRange: '3',
      t347AppendixBasc3RelationsWithParentsRank: '2',
      t347AppendixBasc3RelationsWithParentsRange: '3',
      t348AppendixBasc3SelfEsteemRank: '2',
      t348AppendixBasc3SelfEsteemRange: '3',
      t349AppendixBasc3SelfRelianceRank: '2',
      t349AppendixBasc3SelfRelianceRange: '3',
      t350AppendixBasc3AtypicalityRank: '2',
      t350AppendixBasc3AtypicalityRange: '3',
      t351AppendixBasc3LocusOfControlRank: '2',
      t351AppendixBasc3LocusOfControlRange: '3',
      t352AppendixBasc3SocialStressRank: '2',
      t352AppendixBasc3SocialStressRange: '3',
      t353AppendixBasc3AnxietyRank: '2',
      t353AppendixBasc3AnxietyRange: '3',
      t354AppendixBasc3DepressionRank: '2',
      t354AppendixBasc3DepressionRange: '3',
      t355AppendixBasc3SenseOfInadequacyRank: '2',
      t355AppendixBasc3SenseOfInadequacyRange: '3',
      t356AppendixBasc3SomatizationRank: '2',
      t356AppendixBasc3SomatizationRange: '3',
      t357AppendixBasc3AttentionProblemsRank: '2',
      t357AppendixBasc3AttentionProblemsRange: '3',
      t358AppendixBasc3HyperactivityRank: '2',
      t358AppendixBasc3HyperactivityRange: '3',
      t359AppendixBasc3SocialStressRank: '2',
      t359AppendixBasc3SocialStressRange: '3',
      t360AppendixBasc3AnxietyRank: '2',
      t360AppendixBasc3AnxietyRange: '3',
      t361AppendixBasc3DepressionRank: '2',
      t361AppendixBasc3DepressionRange: '3',
      t362AppendixBasc3SenseOfInadequacyRank: '2',
      t362AppendixBasc3SenseOfInadequacyRange: '3',
      t363AppendixBasc3SelfEsteemRank: '2',
      t363AppendixBasc3SelfEsteemRange: '3',
      t364AppendixBasc3SelfRelianceRank: '2',
      t364AppendixBasc3SelfRelianceRange: '3',
      t365AppendixBasc3InterpersonalRelationsRank: '2',
      t365AppendixBasc3InterpersonalRelationsRange: '3',
      t366AppendixBasc3RelationsWithParentsRank: '2',
      t366AppendixBasc3RelationsWithParentsRange: '3',
      t367AppendixBasc3SelfEsteemRank: '2',
      t367AppendixBasc3SelfEsteemRange: '3',
      t368AppendixBasc3SelfRelianceRank: '2',
      t368AppendixBasc3SelfRelianceRange: '3',
      t369AppendixBasc3FIndexRank: '2',
      t369AppendixBasc3FIndexRange: '3',
      t370AppendixBasc3AggressionRank: '2',
      t370AppendixBasc3AggressionRange: '3',
      t371AppendixBasc3AnxietyRank: '2',
      t371AppendixBasc3AnxietyRange: '3',
      t372AppendixBasc3AttentionProblemsRank: '2',
      t372AppendixBasc3AttentionProblemsRange: '3',
      t373AppendixBasc3AtypicalityRank: '2',
      t373AppendixBasc3AtypicalityRange: '3',
      t374AppendixBasc3ConductProblemsRank: '2',
      t374AppendixBasc3ConductProblemsRange: '3',
      t375AppendixBasc3DepressionRank: '2',
      t375AppendixBasc3DepressionRange: '3',
      t376AppendixBasc3HyperactivityRank: '2',
      t376AppendixBasc3HyperactivityRange: '3',
      t377AppendixBasc3LearningProblemsRank: '2',
      t377AppendixBasc3LearningProblemsRange: '3',
      t378AppendixBasc3SomatizationRank: '2',
      t378AppendixBasc3SomatizationRange: '3',
      t379AppendixBasc3WithdrawalRank: '2',
      t379AppendixBasc3WithdrawalRange: '3',
      t380AppendixBasc3ActivitiesOfDailyLivingRank: '2',
      t380AppendixBasc3ActivitiesOfDailyLivingRange: '3',
      t381AppendixBasc3AdaptabilityRank: '2',
      t381AppendixBasc3AdaptabilityRange: '3',
      t382AppendixBasc3FunctionalCommunicationRank: '2',
      t382AppendixBasc3FunctionalCommunicationRange: '3',
      t383AppendixBasc3LeadershipRank: '2',
      t383AppendixBasc3LeadershipRange: '3',
      t384AppendixBasc3SocialSkillsRank: '2',
      t384AppendixBasc3SocialSkillsRange: '3',
      t385AppendixBasc3StudySkillsRank: '2',
      t385AppendixBasc3StudySkillsRange: '3',
      t386AppendixBasc3AngerControlRank: '2',
      t386AppendixBasc3AngerControlRange: '3',
      t387AppendixBasc3BullyingRank: '2',
      t387AppendixBasc3BullyingRange: '3',
      t388AppendixBasc3DevelopmentalSocialDisordersRank: '2',
      t388AppendixBasc3DevelopmentalSocialDisordersRange: '3',
      t389AppendixBasc3EmotionalSelfControlRank: '2',
      t389AppendixBasc3EmotionalSelfControlRange: '3',
      t390AppendixBasc3ExecutiveFunctioningRank: '2',
      t390AppendixBasc3ExecutiveFunctioningRange: '3',
      t391AppendixBasc3NegativeEmotionalityRank: '2',
      t391AppendixBasc3NegativeEmotionalityRange: '3',
      t392AppendixBasc3ResiliencyRank: '2',
      t392AppendixBasc3ResiliencyRange: '3',
      t393AppendixBasc3HyperactivityRank: '2',
      t393AppendixBasc3HyperactivityRange: '3',
      t394AppendixBasc3AggressionRank: '2',
      t394AppendixBasc3AggressionRange: '3',
      t395AppendixBasc3AnxietyRank: '2',
      t395AppendixBasc3AnxietyRange: '3',
      t396AppendixBasc3DepressionRank: '2',
      t396AppendixBasc3DepressionRange: '3',
      t397AppendixBasc3SomatizationRank: '2',
      t397AppendixBasc3SomatizationRange: '3',
      t398AppendixBasc3AdaptabilityRank: '2',
      t398AppendixBasc3AdaptabilityRange: '3',
      t399AppendixBasc3SocialSkillsRank: '2',
      t399AppendixBasc3SocialSkillsRange: '3',
      t400AppendixBasc3FunctionalCommunicationRank: '2',
      t400AppendixBasc3FunctionalCommunicationRange: '3',
      t401AppendixBasc3HyperactivityRank: '2',
      t401AppendixBasc3HyperactivityRange: '3',
      t402AppendixBasc3AggressionRank: '2',
      t402AppendixBasc3AggressionRange: '3',
      t403AppendixBasc3DepressionRank: '2',
      t403AppendixBasc3DepressionRange: '3',
      t404AppendixBasc3AttentionProblemsRank: '2',
      t404AppendixBasc3AttentionProblemsRange: '3',
      t405AppendixBasc3AtypicalityRank: '2',
      t405AppendixBasc3AtypicalityRange: '3',
      t406AppendixBasc3WithdrawalRank: '2',
      t406AppendixBasc3WithdrawalRange: '3',
      t407AppendixBasc3HyperactivityRank: '2',
      t407AppendixBasc3HyperactivityRange: '3',
      t408AppendixBasc3AggressionRank: '2',
      t408AppendixBasc3AggressionRange: '3',
      t409AppendixBasc3ConductProblemsRank: '2',
      t409AppendixBasc3ConductProblemsRange: '3',
      t410AppendixBasc3AnxietyRank: '2',
      t410AppendixBasc3AnxietyRange: '3',
      t411AppendixBasc3DepressionRank: '2',
      t411AppendixBasc3DepressionRange: '3',
      t412AppendixBasc3SomatizationRank: '2',
      t412AppendixBasc3SomatizationRange: '3',
      t413AppendixBasc3LearningProblemsRank: '2',
      t413AppendixBasc3LearningProblemsRange: '3',
      t414AppendixBasc3AttentionProblemsRank: '2',
      t414AppendixBasc3AttentionProblemsRange: '3',
      t415AppendixBasc3AdaptabilityRank: '2',
      t415AppendixBasc3AdaptabilityRange: '3',
      t416AppendixBasc3SocialSkillsRank: '2',
      t416AppendixBasc3SocialSkillsRange: '3',
      t417AppendixBasc3FunctionalCommunicationRank: '2',
      t417AppendixBasc3FunctionalCommunicationRange: '3',
      t418AppendixBasc3LeadershipRank: '2',
      t418AppendixBasc3LeadershipRange: '3',
      t419AppendixBasc3StudySkillsRank: '2',
      t419AppendixBasc3StudySkillsRange: '3',
      t420AppendixBasc3HyperactivityRank: '2',
      t420AppendixBasc3HyperactivityRange: '3',
      t421AppendixBasc3AggressionRank: '2',
      t421AppendixBasc3AggressionRange: '3',
      t422AppendixBasc3DepressionRank: '2',
      t422AppendixBasc3DepressionRange: '3',
      t423AppendixBasc3AttentionProblemsRank: '2',
      t423AppendixBasc3AttentionProblemsRange: '3',
      t424AppendixBasc3AtypicalityRank: '2',
      t424AppendixBasc3AtypicalityRange: '3',
      t425AppendixBasc3WithdrawalRank: '2',
      t425AppendixBasc3WithdrawalRange: '3',
      t426AppendixBasc3HyperactivityRank: '2',
      t426AppendixBasc3HyperactivityRange: '3',
      t427AppendixBasc3AggressionRank: '2',
      t427AppendixBasc3AggressionRange: '3',
      t428AppendixBasc3AnxietyRank: '2',
      t428AppendixBasc3AnxietyRange: '3',
      t429AppendixBasc3DepressionRank: '2',
      t429AppendixBasc3DepressionRange: '3',
      t430AppendixBasc3SomatizationRank: '2',
      t430AppendixBasc3SomatizationRange: '3',
      t431AppendixBasc3AdaptabilityRank: '2',
      t431AppendixBasc3AdaptabilityRange: '3',
      t432AppendixBasc3SocialSkillsRank: '2',
      t432AppendixBasc3SocialSkillsRange: '3',
      t433AppendixBasc3FunctionalCommunicationRank: '2',
      t433AppendixBasc3FunctionalCommunicationRange: '3',
      t434AppendixBasc3ActivitiesOfDailyLivingRank: '2',
      t434AppendixBasc3ActivitiesOfDailyLivingRange: '3',
      t435AppendixBasc3HyperactivityRank: '2',
      t435AppendixBasc3HyperactivityRange: '3',
      t436AppendixBasc3AggressionRank: '2',
      t436AppendixBasc3AggressionRange: '3',
      t437AppendixBasc3DepressionRank: '2',
      t437AppendixBasc3DepressionRange: '3',
      t438AppendixBasc3AttentionProblemsRank: '2',
      t438AppendixBasc3AttentionProblemsRange: '3',
      t439AppendixBasc3AtypicalityRank: '2',
      t439AppendixBasc3AtypicalityRange: '3',
      t440AppendixBasc3WithdrawalRank: '2',
      t440AppendixBasc3WithdrawalRange: '3',
      t441AppendixBasc3HyperactivityRank: '2',
      t441AppendixBasc3HyperactivityRange: '3',
      t442AppendixBasc3AggressionRank: '2',
      t442AppendixBasc3AggressionRange: '3',
      t443AppendixBasc3ConductProblemsRank: '2',
      t443AppendixBasc3ConductProblemsRange: '3',
      t444AppendixBasc3AnxietyRank: '2',
      t444AppendixBasc3AnxietyRange: '3',
      t445AppendixBasc3DepressionRank: '2',
      t445AppendixBasc3DepressionRange: '3',
      t446AppendixBasc3SomatizationRank: '2',
      t446AppendixBasc3SomatizationRange: '3',
      t447AppendixBasc3AdaptabilityRank: '2',
      t447AppendixBasc3AdaptabilityRange: '3',
      t448AppendixBasc3SocialSkillsRank: '2',
      t448AppendixBasc3SocialSkillsRange: '3',
      t449AppendixBasc3FunctionalCommunicationRank: '2',
      t449AppendixBasc3FunctionalCommunicationRange: '3',
      t450AppendixBasc3ActivitiesOfDailyLivingRank: '2',
      t450AppendixBasc3ActivitiesOfDailyLivingRange: '3',
      t451AppendixBasc3HyperactivityRank: '2',
      t451AppendixBasc3HyperactivityRange: '3',
      t452AppendixBasc3AggressionRank: '2',
      t452AppendixBasc3AggressionRange: '3',
      t453AppendixBasc3DepressionRank: '2',
      t453AppendixBasc3DepressionRange: '3',
      t454AppendixBasc3AttentionProblemsRank: '2',
      t454AppendixBasc3AttentionProblemsRange: '3',
      t455AppendixBasc3AtypicalityRank: '2',
      t455AppendixBasc3AtypicalityRange: '3',
      t456AppendixBasc3WithdrawalRank: '2',
      t456AppendixBasc3WithdrawalRange: '3',
      t457AppendixWaisivSimilaritiesRank: '2',
      t457AppendixWaisivSimilaritiesRange: '3',
      t458AppendixWaisivVocabularyRank: '2',
      t458AppendixWaisivVocabularyRange: '3',
      t459AppendixWaisivInformationRank: '2',
      t459AppendixWaisivInformationRange: '3',
      t460AppendixWaisivComprehensionRank: '2',
      t460AppendixWaisivComprehensionRange: '3',
      t461AppendixWaisivBlockDesignRank: '2',
      t461AppendixWaisivBlockDesignRange: '3',
      t462AppendixWaisivMatrixReasoningRank: '2',
      t462AppendixWaisivMatrixReasoningRange: '3',
      t463AppendixWaisivVisualPuzzlesRank: '2',
      t463AppendixWaisivVisualPuzzlesRange: '3',
      t464AppendixWaisivFigureWeightsRank: '2',
      t464AppendixWaisivFigureWeightsRange: '3',
      t465AppendixWaisivPictureCompletionRank: '2',
      t465AppendixWaisivPictureCompletionRange: '3',
      t466AppendixWaisivDigitSpanRank: '2',
      t466AppendixWaisivDigitSpanRange: '3',
      t467AppendixWaisivArithmeticRank: '2',
      t467AppendixWaisivArithmeticRange: '3',
      t468AppendixWaisivLetterNumberSequencingRank: '2',
      t468AppendixWaisivLetterNumberSequencingRange: '3',
      t469AppendixWaisivCodingRank: '2',
      t469AppendixWaisivCodingRange: '3',
      t470AppendixWaisivSymbolSearchRank: '2',
      t470AppendixWaisivSymbolSearchRange: '3',
      t471AppendixWaisivCancellationRank: '2',
      t471AppendixWaisivCancellationRange: '3',
      t472AppendixPiyPoorAchievementAndMemoryRange: '3',
      t473AppendixPiyInadequateAbilitiesRange: '3',
      t474AppendixPiyLearningProblemsRange: '3',
      t475AppendixPiyBrashnessRange: '3',
      t476AppendixPiyDistractibilityAndOveractivityRange: '3',
      t477AppendixPiyImpulsivityRange: '3',
      t478AppendixPiyAntisocialBehaviorRange: '3',
      t479AppendixPiyDyscontrolRange: '3',
      t480AppendixPiyNoncomplianceRange: '3',
      t481AppendixPiyParentChildConflictRange: '3',
      t482AppendixPiyParentMaladjustmentRange: '3',
      t483AppendixPiyMaritalDiscordRange: '3',
      t484AppendixPiyFeelingsOfAlienationRange: '3',
      t485AppendixPiyHallucinationsAndDelusionsRange: '3',
      t486AppendixPiyPsychosomaticSyndromeRange: '3',
      t487AppendixPiyMuscularTensionAndAnxietyRange: '3',
      t488AppendixPiyPreoccupationWithDiseaseRange: '3',
      t489AppendixPiyFearAndWorryRange: '3',
      t490AppendixPiyDepressionRange: '3',
      t491AppendixPiySleepDisturbanceRange: '3',
      t492AppendixPiySocialIntroversionRange: '3',
      t493AppendixPiyIsolationRange: '3',
      t494AppendixPiyLimitedPeerStatusRange: '3',
      t495AppendixPiyConflictWithPeersRange: '3',
      t525AppendixMmpi2HypochondriasisHsRange: '2',
      t526AppendixMmpi2DepressionDRange: '2',
      t527AppendixMmpi2HysteriaHyRange: '2',
      t528AppendixMmpi2PsychopathicDeviatePdRange: '2',
      t529AppendixMmpi2MasculinityFemininityMfRange: '2',
      t530AppendixMmpi2ParanoiaPaRange: '2',
      t531AppendixMmpi2PsychastheniaPtRange: '2',
      t532AppendixMmpi2SchizophreniaScRange: '2',
      t533AppendixMmpi2HypomaniaMaRange: '2',
      t534AppendixMmpi2SocialIntroversionSiRange: '2',
      t535AppendixMmpi2LieLRange: '2',
      t536AppendixMmpi2FRange: '2',
      t537AppendixMmpi2BackFFbRange: '2',
      t538AppendixMmpi2KRange: '2',
      t539AppendixMmpiaHypochondriasisHsRange: '2',
      t540AppendixMmpiaDepressionDRange: '2',
      t541AppendixMmpiaHysteriaHyRange: '2',
      t542AppendixMmpiaPsychopathicDeviatePdRange: '2',
      t543AppendixMmpiaMasculinityFemininityMfRange: '2',
      t544AppendixMmpiaParanoiaPaRange: '2',
      t545AppendixMmpiaPsychastheniaPtRange: '2',
      t546AppendixMmpiaSchizophreniaScRange: '2',
      t547AppendixMmpiaHypomaniaMaRange: '2',
      t548AppendixMmpiaSocialIntroversionSiRange: '2',
      t549AppendixMmpiaCnsRange: '2',
      t550AppendixMmpiaVrinRange: '2',
      t551AppendixMmpiaTrinRange: '2',
      t552AppendixMmpiaFRange: '2',
      t553AppendixMmpiaF1Range: '2',
      t554AppendixMmpiaF2Range: '2',
      t555AppendixMmpiaLRange: '2',
      t556AppendixMmpiaKRange: '2',
      t557AppendixNepsyiiAnimalSortingAsRank: '2',
      t557AppendixNepsyiiAnimalSortingAsRange: '3',
      t558AppendixNepsyiiAuditoryAttentionAaAndResponseSetRsRank: '2',
      t558AppendixNepsyiiAuditoryAttentionAaAndResponseSetRsRange: '3',
      t559AppendixNepsyiiClocksClRank: '2',
      t559AppendixNepsyiiClocksClRange: '3',
      t560AppendixNepsyiiDesignFluencyDfRank: '2',
      t560AppendixNepsyiiDesignFluencyDfRange: '3',
      t561AppendixNepsyiiInhibitionInRank: '2',
      t561AppendixNepsyiiInhibitionInRange: '3',
      t562AppendixNepsyiiStatueStRank: '2',
      t562AppendixNepsyiiStatueStRange: '3',
      t563AppendixNepsyiiBodyPartNamingBpnAndIdentificationBpiRank: '2',
      t563AppendixNepsyiiBodyPartNamingBpnAndIdentificationBpiRange: '3',
      t564AppendixNepsyiiComprehensionOfInstructionsCiRank: '2',
      t564AppendixNepsyiiComprehensionOfInstructionsCiRange: '3',
      t565AppendixNepsyiiOromotorSequencesOsRank: '2',
      t565AppendixNepsyiiOromotorSequencesOsRange: '3',
      t566AppendixNepsyiiPhonologicalProcessingPhRank: '2',
      t566AppendixNepsyiiPhonologicalProcessingPhRange: '3',
      t567AppendixNepsyiiRepetitionNonsenseWordsRnRank: '2',
      t567AppendixNepsyiiRepetitionNonsenseWordsRnRange: '3',
      t568AppendixNepsyiiSpeededNamingSnRank: '2',
      t568AppendixNepsyiiSpeededNamingSnRange: '3',
      t569AppendixNepsyiiWordGenerationWgRank: '2',
      t569AppendixNepsyiiWordGenerationWgRange: '3',
      t571AppendixNepsyiiListMemoryLmListMemoryDelayedLmdRank: '2',
      t571AppendixNepsyiiListMemoryLmListMemoryDelayedLmdRange: '3',
      t572AppendixNepsyiiMemoryForDesignsMdMemoryForDesignsDelayedMddRank: '2',
      t572AppendixNepsyiiMemoryForDesignsMdMemoryForDesignsDelayedMddRange: '3',
      t573AppendixNepsyiiMemoryForFacesMfMemoryForFacesDelayedMfdRank: '2',
      t573AppendixNepsyiiMemoryForFacesMfMemoryForFacesDelayedMfdRange: '3',
      t574AppendixNepsyiiMemoryForNamesMnMemoryForNamesDelayedMndRank: '2',
      t574AppendixNepsyiiMemoryForNamesMnMemoryForNamesDelayedMndRange: '3',
      t575AppendixNepsyiiNarrativeMemoryNmRank: '2',
      t575AppendixNepsyiiNarrativeMemoryNmRange: '3',
      t576AppendixNepsyiiSentenceRepetitionSrRank: '2',
      t576AppendixNepsyiiSentenceRepetitionSrRange: '3',
      t577AppendixNepsyiiWordListInterferenceWiRank: '2',
      t577AppendixNepsyiiWordListInterferenceWiRange: '3',
      t578AppendixNepsyiiFingertipTappingFtRank: '2',
      t578AppendixNepsyiiFingertipTappingFtRange: '3',
      t579AppendixNepsyiiImitatingHandPositionsIhRank: '2',
      t579AppendixNepsyiiImitatingHandPositionsIhRange: '3',
      t580AppendixNepsyiiManualMotorSequencesMmRank: '2',
      t580AppendixNepsyiiManualMotorSequencesMmRange: '3',
      t581AppendixNepsyiiVisuomotorPrecisionVpRank: '2',
      t581AppendixNepsyiiVisuomotorPrecisionVpRange: '3',
      t582AppendixNepsyiiAffectRecognitionArRank: '2',
      t582AppendixNepsyiiAffectRecognitionArRange: '3',
      t583AppendixNepsyiiTheoryOfMindTmRank: '2',
      t583AppendixNepsyiiTheoryOfMindTmRange: '3',
      t584AppendixNepsyiiArrowsAwRank: '2',
      t584AppendixNepsyiiArrowsAwRange: '3',
      t585AppendixNepsyiiBlockConstructionBcRank: '2',
      t585AppendixNepsyiiBlockConstructionBcRange: '3',
      t586AppendixNepsyiiDesignCopyingDcRank: '2',
      t586AppendixNepsyiiDesignCopyingDcRange: '3',
      t587AppendixNepsyiiGeometricPuzzlesGpRank: '2',
      t587AppendixNepsyiiGeometricPuzzlesGpRange: '3',
      t588AppendixNepsyiiPicturePuzzlesPpRank: '2',
      t588AppendixNepsyiiPicturePuzzlesPpRange: '3',
      t589AppendixNepsyiiRouteFindingRfRank: '2',
      t589AppendixNepsyiiRouteFindingRfRange: '3',
      t593AppendixWjivCogVocabularyRank: '2',
      t593AppendixWjivCogVocabularyRange: '3',
      t594AppendixWjivCogGeneralInformationRank: '2',
      t594AppendixWjivCogGeneralInformationRange: '3',
      t595AppendixWjivCogNumberSeriesRank: '2',
      t595AppendixWjivCogNumberSeriesRange: '3',
      t596AppendixWjivCogConceptFormationRank: '2',
      t596AppendixWjivCogConceptFormationRange: '3',
      t597AppendixWjivCogAnalysisSynthesisRank: '2',
      t597AppendixWjivCogAnalysisSynthesisRange: '3',
      t598AppendixWjivCogVerbalAttentionRank: '2',
      t598AppendixWjivCogVerbalAttentionRange: '3',
      t599AppendixWjivCogNumbersReversedRank: '2',
      t599AppendixWjivCogNumbersReversedRange: '3',
      t600AppendixWjivCogObjectNumberSequencingRank: '2',
      t600AppendixWjivCogObjectNumberSequencingRange: '3',
      t645AppendixWjivCogLetterPatternMatchingRank: '2',
      t645AppendixWjivCogLetterPatternMatchingRange: '3',
      t601AppendixWjivCogPairCancellationRank: '2',
      t601AppendixWjivCogPairCancellationRange: '3',
      t602AppendixWjivCogPhonologicalProcessingRank: '2',
      t602AppendixWjivCogPhonologicalProcessingRange: '3',
      t603AppendixWjivCogNonWordRepetitionRank: '2',
      t603AppendixWjivCogNonWordRepetitionRange: '3',
      t604AppendixWjivCogRecallRank: '2',
      t604AppendixWjivCogRecallRange: '3',
      t605AppendixWjivCogVisualAuditoryLearningRank: '2',
      t605AppendixWjivCogVisualAuditoryLearningRange: '3',
      t606AppendixWjivCogVisualizationRank: '2',
      t606AppendixWjivCogVisualizationRange: '3',
      t607AppendixWjivCogPictureRecognitionRank: '2',
      t607AppendixWjivCogPictureRecognitionRange: '3',
      t608AppendixTsccUnderresponseUndRange: '2',
      t609AppendixTsccHyperresponseHypRange: '2',
      t610AppendixTsccAnxietyAnxRange: '2',
      t611AppendixTsccDepressionDepRange: '2',
      t612AppendixTsccAngerAngRange: '2',
      t613AppendixTsccPosttraumaticStressPtsRange: '2',
      t614AppendixTsccDissociationDisRange: '2',
      t615AppendixTsccSexualConcernsScRange: '2',
      t616AppendixWjivAchLetterWordIdentificationRank: '34',
      t616AppendixWjivAchLetterWordIdentificationRange: '> 3',
      t617AppendixWjivAchWordAttackRank: '43',
      t617AppendixWjivAchWordAttackRange: '> 4',
      t618AppendixWjivAchPassageComprehensionRank: '32',
      t618AppendixWjivAchPassageComprehensionRange: '> 4',
      t619AppendixWjivAchReadingRecallRank: '53',
      t619AppendixWjivAchReadingRecallRange: '< 3',
      t620AppendixWjivAchReadingVocabularyRank: '12',
      t620AppendixWjivAchReadingVocabularyRange: '< 3',
      t621AppendixWjivAchCalculationRank: '32',
      t621AppendixWjivAchCalculationRange: '< 5',
      t622AppendixWjivAchMathFactFluencyRank: '89',
      t622AppendixWjivAchMathFactFluencyRange: 'M > 3',
      t623AppendixWjivAchAppliedProblemsRank: '21',
      t623AppendixWjivAchAppliedProblemsRange: '< 32',
      t624AppendixWjivAchNumberMatricesRank: '18',
      t624AppendixWjivAchNumberMatricesRange: '< 2',
      t625AppendixWjivAchWritingSamplesRank: '83',
      t625AppendixWjivAchWritingSamplesRange: '< 8',
      t626AppendixWjivAchSentenceWritingFluencyRank: '46',
      t626AppendixWjivAchSentenceWritingFluencyRange: '> 7',
      t627AppendixWjivAchOralReadingRank: '29',
      t627AppendixWjivAchOralReadingRange: '> 3, < 8',
      t628AppendixWjivAchSentenceReadingFluencyRank: '57',
      t628AppendixWjivAchSentenceReadingFluencyRange: '> 9',
      t629AppendixWjivAchSpellingRank: '47',
      t629AppendixWjivAchSpellingRange: '> 3',
      t630AppendixWjivAchSoundAwarenessRank: '77',
      t630AppendixWjivAchSpellingOfSoundsRange: '< 2',
      t631AppendixWjivAchEditingRank: '32',
      t631AppendixWjivAchEditingRange: '> 9',
      t632AppendixWjivAchScienceRank: '42',
      t632AppendixWjivAchScienceRange: '<= 12',
      t633AppendixWjivAchSocialStudiesRank: '28',
      t633AppendixWjivAchSocialStudiesRange: '> 4',
      t634AppendixWjivAchHumanitiesRank: '82',
      t634AppendixWjivAchHumanitiesRange: '< 3',
      t635AppendixWjivAchWordAttackRank: '42',
      t635AppendixWjivAchWordAttackRange: 'Maximum',
      t636AppendixWjivAchSpellingOfSoundsRank: '89',
      t636AppendixWjivAchSpellingOfSoundsRange: '< 3:3',
      t637AppendixWmsIvBriefCognitiveStatusExamRank: '2',
      t637AppendixWmsIvBriefCognitiveStatusExamRange: '2',
      t638AppendixWmsIvLogicalMemoryRank: '2',
      t638AppendixWmsIvLogicalMemoryRange: '2',
      t639AppendixWmsIvVerbalPairedAssociatesRank: '2',
      t639AppendixWmsIvVerbalPairedAssociatesRange: '2',
      t640AppendixWmsIvDesignsRank: '2',
      t640AppendixWmsIvDesignsRange: '2',
      t641AppendixWmsIvVisualReproductionRank: '2',
      t641AppendixWmsIvVisualReproductionRange: '2',
      t643AppendixWmsIvSymbolSpanRank: '2',
      t643AppendixWmsIvSymbolSpanRange: '2',
      t642AppendixWmsIvSpatialAdditionRank: '2',
      t642AppendixWmsIvSpatialAdditionRange: '2',
      t648AppendixWppsiivVocabularyRank: '2',
      t648AppendixWppsiivVocabularyRange: '3',
      t649AppendixWppsiivInformationRank: '2',
      t649AppendixWppsiivInformationRange: '3',
      t650AppendixWppsiivComprehensionRank: '2',
      t650AppendixWppsiivComprehensionRange: '3',
      t653AppendixWppsiivBlockDesignRank: '2',
      t653AppendixWppsiivBlockDesignRange: '3',
      t654AppendixWppsiivObjectAssemblyRank: '2',
      t654AppendixWppsiivObjectAssemblyRange: '3',
      t657AppendixWppsiivBugSearchRank: '2',
      t657AppendixWppsiivBugSearchRange: '3',
      t658AppendixWppsiivCancellationRank: '2',
      t658AppendixWppsiivCancellationRange: '3',
      t659AppendixWppsiivAnimalCodingRank: '2',
      t659AppendixWppsiivAnimalCodingRange: '3',
      t651AppendixWppsiivMatrixReasoningRank: '2',
      t651AppendixWppsiivMatrixReasoningRange: '3',
      t652AppendixWppsiivPictureConceptsRank: '2',
      t652AppendixWppsiivPictureConceptsRange: '3',
      t655AppendixWppsiivPictureMemoryRank: '2',
      t655AppendixWppsiivPictureMemoryRange: '3',
      t656AppendixWppsiivZooLocationsRank: '2',
      t656AppendixWppsiivZooLocationsRange: '3',
      t669AppendixBeeryVmiBeeryMotorIntegrationVmiRank: '2',
      t669AppendixBeeryVmiBeeryMotorIntegrationVmiRange: '3',
      t670AppendixBeeryVmiBeeryVisualPerceptionRank: '2',
      t670AppendixBeeryVmiBeeryVisualPerceptionRange: '3',
      t671AppendixBeeryVmiBeeryMotorCoordinationRank: '2',
      t671AppendixBeeryVmiBeeryMotorCoordinationRange: '3',
      t672AppendixWiatiiiListeningComprehensionGradesPk12Rank: 2,
      t672AppendixWiatiiiListeningComprehensionGradesPk12GradeEquivalent: 2,
      t672AppendixWiatiiiListeningComprehensionGradesPk12Range: 'low',
      t673AppendixWiatiiiOralExpressionGradesPk12Rank: 2,
      t673AppendixWiatiiiOralExpressionGradesPk12GradeEquivalent: 2,
      t673AppendixWiatiiiOralExpressionGradesPk12Range: 'low',
      t674AppendixWiatiiiEarlyReadingSkillsGradesPkRank: 2,
      t674AppendixWiatiiiEarlyReadingSkillsGradesPk3GradeEquivalent: 2,
      t674AppendixWiatiiiEarlyReadingSkillsGradesPkRange: 'low',
      t675AppendixWiatiiiReadingComprehensionGrades112Rank: 2,
      t675AppendixWiatiiiReadingComprehensionGrades112GradeEquivalent: 2,
      t675AppendixWiatiiiReadingComprehensionGrades112Range: 'low',
      t676AppendixWiatiiiWordReadingGrades112Rank: 2,
      t676AppendixWiatiiiWordReadingGrades112GradeEquivalent: 2,
      t676AppendixWiatiiiWordReadingGrades112Range: 'low',
      t677AppendixWiatiiiPseudowordDecodingGrades112Rank: 2,
      t677AppendixWiatiiiPseudowordDecodingGrades112GradeEquivalent: 2,
      t677AppendixWiatiiiPseudowordDecodingGrades112Range: 'low',
      t678AppendixWiatiiiOralReadingFluencyGrades112Rank: 2,
      t678AppendixWiatiiiOralReadingFluencyGrades112GradeEquivalent: 2,
      t678AppendixWiatiiiOralReadingFluencyGrades112Range: 'low',
      t679AppendixWiatiiiSpellingGradesk12Rank: 2,
      t679AppendixWiatiiiSpellingGradesk12GradeEquivalent: 2,
      t679AppendixWiatiiiSpellingGradesk12Range: 'low',
      t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3Rank: 2,
      t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3GradeEquivalent: 2,
      t680AppendixWiatiiiAlphabetWritingFluencyGradesPk3Range: 'low',
      t681AppendixWiatiiiSentenceCompositionGrades112Rank: 2,
      t681AppendixWiatiiiSentenceCompositionGrades112GradeEquivalent: 2,
      t681AppendixWiatiiiSentenceCompositionGrades112Range: 'low',
      t682AppendixWiatiiiEssayCompositionGrades312Rank: 2,
      t682AppendixWiatiiiEssayCompositionGrades312GradeEquivalent: 2,
      t682AppendixWiatiiiEssayCompositionGrades312Range: 'low',
      t683AppendixWiatiiiNumericalOperationsGradesk12Rank: 2,
      t683AppendixWiatiiiNumericalOperationsGradesk12GradeEquivalent: 2,
      t683AppendixWiatiiiNumericalOperationsGradesk12Range: 'low',
      t684AppendixWiatiiiMathProblemSolvingGradesPk12Rank: 2,
      t684AppendixWiatiiiMathProblemSolvingGradesPk12GradeEquivalent: 2,
      t684AppendixWiatiiiMathProblemSolvingGradesPk12Range: 'low',
      t685AppendixWiatiiiMathFluencyAdditionRank: 2,
      t685AppendixWiatiiiMathFluencyAdditionGradeEquivalent: 2,
      t685AppendixWiatiiiMathFluencyAdditionRange: 'low',
      t686AppendixWiatiiiMathFluencySubtractionRank: 2,
      t686AppendixWiatiiiMathFluencySubtractionGradeEquivalent: 2,
      t686AppendixWiatiiiMathFluencySubtractionRange: 'low',
      t687AppendixWiatiiiMathFluencyMultiplicationRank: 2,
      t687AppendixWiatiiiMathFluencyMultiplicationGradeEquivalent: 2,
      t687AppendixWiatiiiMathFluencyMultiplicationRange: 'low',
      t688AppendixNelsonDennyVocabularyRank: '23',
      t688AppendixNelsonDennyVocabularyRange: '4th',
      t689AppendixNelsonDennyComprehensionRank: '31',
      t689AppendixNelsonDennyComprehensionRange: '3rd',
      t690AppendixNelsonDennyReadingRateRank: '99',
      t690AppendixNelsonDennyReadingRateRange: '12th',
      t698AppendixDkefsVisualScanningRange: '3',
      t699AppendixDkefsNumberSequencingRange: '3',
      t700AppendixDkefsLetterSequencingRange: '3',
      t701AppendixDkefsCombinedNumberAndLetterSequencingRange: '3',
      t702AppendixDkefsNumberLetterSwitchingRange: '3',
      t703AppendixDkefsMotorSpeedRange: '3',
      t704AppendixDkefsLetterFluencyRange: '3',
      t705AppendixDkefsCategoryFluencyRange: '3',
      t706AppendixDkefsCategorySwitchingRange: '3',
      t707AppendixDkefsFilledDotsRange: '3',
      t708AppendixDkefsEmptyDotsOnlyRange: '3',
      t709AppendixDkefsSwitchingRange: '3',
      t710AppendixDkefsColorNamingRange: '3',
      t711AppendixDkefsWordReadingRange: '3',
      t712AppendixDkefsInhibitionRange: '3',
      t713AppendixDkefsInhibitionswitchingRange: '3',
      t714AppendixDkefsFreeSortingRange: '3',
      t715AppendixDkefsSortRecognitionRange: '3',
      t716AppendixDkefsItem1Range: '3',
      t717AppendixDkefsItem2Range: '3',
      t718AppendixDkefsItem3Range: '3',
      t719AppendixDkefsItem4Range: '3',
      t720AppendixDkefsItem1Range: '3',
      t721AppendixDkefsItem2Range: '3',
      t722AppendixDkefsItem1TwoDisksRange: '3',
      t723AppendixDkefsItem2TwoDisksRange: '3',
      t724AppendixDkefsItem3TwoDisksRange: '3',
      t725AppendixDkefsItem4ThreeDisksRange: '3',
      t726AppendixDkefsItem5ThreeDisksRange: '3',
      t727AppendixDkefsItem6FourDisksRange: '3',
      t728AppendixDkefsItem7FourDisksRange: '3',
      t729AppendixDkefsItem8FiveDisksRange: '3',
      t730AppendixDkefsItem9FiveDisksRange: '3',
      t731AppendixDkefsFreeInquiryRange: '3',
      t732AppendixDkefsMultipleChoiceRange: '3',
      t733AppendixGort5RateRank: '2',
      t733AppendixGort5RateRange: '3rd',
      t734AppendixGort5AccuracyRank: '2',
      t734AppendixGort5AccuracyRange: '3rd',
      t735AppendixGort5FluencyRank: '2',
      t735AppendixGort5FluencyRange: '4th',
      t736AppendixGort5ComprehensionRank: '2',
      t736AppendixGort5ComprehensionRange: '1st',
      t737AppendixTommTrail1Rank: '2',
      t737AppendixTommTrail1Range: '3',
      t738AppendixTommTrial2Rank: '2',
      t738AppendixTommTrial2Range: '3',
      t739AppendixTommRetentionTrialRank: '2',
      t739AppendixTommRetentionTrialRange: '3',
      t743AppendixDasiiVerbalComprehensionRank: '2',
      t743AppendixDasiiVerbalComprehensionRange: '3',
      t744AppendixDasiiPictureSimilaritiesRank: '2',
      t744AppendixDasiiPictureSimilaritiesRange: '3',
      t745AppendixDasiiNamingVocabularyRank: '2',
      t745AppendixDasiiNamingVocabularyRange: '3',
      t746AppendixDasiiPatternConstructionRank: '2',
      t746AppendixDasiiPatternConstructionRange: '3',
      t747AppendixDasiiMatricesRank: '2',
      t747AppendixDasiiMatricesRange: '3',
      t748AppendixDasiiCopyingRank: '2',
      t748AppendixDasiiCopyingRange: '3',
      t749AppendixDasiiRecallOfObjectsImmediateRank: '2',
      t749AppendixDasiiRecallOfObjectsImmediateRange: '3',
      t750AppendixDasiiRecallOfObjectsDelayedRank: '2',
      t750AppendixDasiiRecallOfObjectsDelayedRange: '3',
      t751AppendixDasiiRecallOfDigitsForwardRank: '2',
      t751AppendixDasiiRecallOfDigitsForwardRange: '3',
      t752AppendixDasiiRecognitionOfPicturesRank: '2',
      t752AppendixDasiiRecognitionOfPicturesRange: '3',
      t753AppendixDasiiEarlyNumberConceptsRank: '2',
      t753AppendixDasiiEarlyNumberConceptsRange: '3',
      t754AppendixDasiiMatchingLetterLikeFormsRank: '2',
      t754AppendixDasiiMatchingLetterLikeFormsRange: '3',
      t755AppendixDasiiRecallOfSequentialOrderRank: '2',
      t755AppendixDasiiRecallOfSequentialOrderRange: '3',
      t756AppendixDasiiSpeedOfInformationProcessingRank: '2',
      t756AppendixDasiiSpeedOfInformationProcessingRange: '3',
      t757AppendixDasiiRecallOfDigitsBackwardRank: '2',
      t757AppendixDasiiRecallOfDigitsBackwardRange: '3',
      t758AppendixDasiiPhonologicalProcessingRank: '2',
      t758AppendixDasiiPhonologicalProcessingRange: '3',
      t759AppendixDasiiRapidNamingRank: '2',
      t759AppendixDasiiRapidNamingRange: '3',
      t760AppendixDasiiRecallOfDesignsRank: '2',
      t760AppendixDasiiRecallOfDesignsRange: '3',
      t761AppendixDasiiWordDefinitionsRank: '2',
      t761AppendixDasiiWordDefinitionsRange: '3',
      t762AppendixDasiiPatternConstructionRank: '2',
      t762AppendixDasiiPatternConstructionRange: '3',
      t763AppendixDasiiMatricesRank: '2',
      t763AppendixDasiiMatricesRange: '3',
      t764AppendixDasiiVerbalSimilaritiesRank: '2',
      t764AppendixDasiiVerbalSimilaritiesRange: '3',
      t765AppendixDasiiSequentialAndQuantitativeReasoningRank: '2',
      t765AppendixDasiiSequentialAndQuantitativeReasoningRange: '3',
      t766AppendixDasiiRecallOfObjectsImmediateRank: '2',
      t766AppendixDasiiRecallOfObjectsImmediateRange: '3',
      t767AppendixDasiiRecallOfObjectsDelayedRank: '2',
      t767AppendixDasiiRecallOfObjectsDelayedRange: '3',
      t768AppendixDasiiRecallOfDigitsForwardRank: '2',
      t768AppendixDasiiRecallOfDigitsForwardRange: '3',
      t769AppendixDasiiRecognitionOfPicturesRank: '2',
      t769AppendixDasiiRecognitionOfPicturesRange: '3',
      t770AppendixDasiiRecallOfSequentialOrderRank: '2',
      t770AppendixDasiiRecallOfSequentialOrderRange: '3',
      t771AppendixDasiiSpeedOfInformationProcessingRank: '2',
      t771AppendixDasiiSpeedOfInformationProcessingRange: '3',
      t772AppendixDasiiRecallOfDigitsBackwardRank: '2',
      t772AppendixDasiiRecallOfDigitsBackwardRange: '3',
      t773AppendixDasiiPhonologicalProcessingRank: '2',
      t773AppendixDasiiPhonologicalProcessingRange: '3',
      t18ORIScore: '79',
      t18ApendixGort5ORIRank: '74',
      t18ApendixGort5ORIGradeEquivalent: '5th',
      relevantBackgroundHistory:
        'MotherName, motherAge, the stepmother, lives at motherAddress. Her home phone number is motherHomePhone, her cell phone is motherCellPhone, and her work phone is motherWorkPhone.motherName has worked motherWorkLength years for motherEmployer as a motherOccupation. Her primary language is motherPrimaryLang. Her secondary language is motherSecondaryLang.fatherName, fatherAge, the stepfather, lives at fatherAddress. His home phone number is fatherHomePhone, his cell phone is fatherCellPhone, and his work phone is fatherWorkPhone.fatherName has worked fatherWorkLength years for fatherEmployer as a fatherOccupation. His primary language is fatherPrimaryLang. His secondary language is fatherSecondaryLang.primaryCaregiverName, primaryCaregiverAge, the primaryCaregiverRelationship, lives at primaryCaregiverAddress. His home phone number is primaryCaregiverHomePhone, his cell phone is primaryCaregiverCellPhone, and his work phone is primaryCaregiverWorkPhone.',
      resultsCurrentAssessment: 'Current assessment results',
      summaryCurrentSituation: 'Summary of current situation',
      dsmCodes: [
        {
          codeDescription: 'Major Neurocognitive Disorder Due to Traumatic Brain Injury',
          codeSpecifier: 'Without behavioral disturbance',
          codeValue: '294.1',
          codeValueIcd10: 'F02.80',
        },
        {
          codeDescription: 'Overweight or Obesity',
          codeSpecifier: '',
          codeValue: '278',
          codeValueIcd10: 'E66.9',
        },
        {
          codeDescription: 'Probable Major Vascular Neurocognitive Disorder',
          codeSpecifier: 'With behavioral disturbance',
          codeValue: '290.4',
          codeValueIcd10: 'F01.51',
        },
        {
          codeDescription: 'Probable Major Vascular Neurocognitive Disorder',
          codeSpecifier: 'With behavioral disturbance',
          codeValue: '290.4',
          codeValueIcd10: 'F01.51',
        },
        {
          codeDescription: 'Major Depressive Disorder',
          codeSpecifier: 'Single episode, Severe',
          codeValue: '296.23',
          codeValueIcd10: 'F32.2',
        },
      ],
      eduCodeIntellectualDisabilityId: true,
      eduCodeHardOfHearingHh: true,
      eduCodeDeafnessDeafHearingImpairmentHi: true,
      eduCodeSpeechOrLanguageImpairmentSli: true,
      eduCodeVisualImpairmentVi: true,
      eduCodeEmotionalDisturbanceEd: true,
      eduCodeOrthopedicImpairmentOi: true,
      eduCodeOtherHealthImpairmentOhi: true,
      eduCodeEstablishedMedicalDisabilityEmd: true,
      eduCodeSpecificLearningDisabilitySld: true,
      eduCodeDeafBlindnessDb: true,
      eduCodeMultipleDisabilitiesMd: true,
      eduCodeAutismAut: true,
      eduCodeTraumaticBrainInjuryTbi: true,
      recommendationAdhd: true,
      recommendationAutism: false,
      recommendationDementia: false,
      recommendationDysthymia: false,
      recommendationLearningDisabilityMathematics: false,
      recommendationLearningDisabilityReading: false,
      recommendationNeurocognitiveDisorder: false,
      recommendationVisualProcessingChildrenAdults: false,
      recommendationVisualProcessingChildren: false,
      recommendationLearningDisabilityWritingChildrenAdults: false,
      recommendationLearningDisabilityWritingChildren: false,
      recommendationAuditoryProcessingWeaknessChildrenAdults: false,
      recommendationAuditoryProcessingWeaknessChildren: false,
      rAdhdRecommendationsFreehand:
        'ADHD additional recommendation freehand the brown fox jumps over the lazy purple moon.',
      rAutismRecommendationsFreehand: 'Autism additional recommendation freehand...',
      rDementiaRecommendationsFreehand: undefined,
      rDysthymiaRecommendationsFreehand: undefined,
      rLearningdisabilitymathematicsRecommendationsFreehand: undefined,
      rLearningdisabilityreadingRecommendationsFreehand: undefined,
      rNeurocognitivedisorderRecommendationsFreehand: undefined,
      rVisualprocessingweaknessforchildrenadultsRecommendationsFreehand: undefined,
      rVisualprocessingweaknessforchildrenRecommendationsFreehand: undefined,
      rLearningdisabilityinwritingdiagnosisforchildrenadultsRecommendationsFreehand: undefined,
      rLearningdisabilityinwritingdiagnosisforchildrenRecommendationsFreehand: undefined,
      rAuditoryprocessingweaknessforchildrenadultsRecommendationsFreehand: undefined,
      rAuditoryprocessingweaknessforchildrenRecommendationsFreehand: undefined,
      rTraumaPtsdRecommendationsFreehand: undefined,
      rPsychosisRecommendationsFreehand: undefined,
      rBehaviorchallengesRecommendationsFreehand: undefined,
      rSportsconcussionRecommendationsFreehand: undefined,
      rReactiveattachmentdisorderRecommendationsFreehand: undefined,
      rTraumaticbraininjuryRecommendationsFreehand: undefined,
    },
    testSelectedReducer: [
      {
        Id: 13,
        Name: 'The Wechsler Individual Achievement Test 3',
        Abbreviation: 'WIAT-III',
        Descriptions:
          'The Wechsler Individual Achievement Test – Third Edition (WIAT-III) is designed to measure the achievement of students who are in grades Prekindergarten (PK) through 12, or ages 4 years 0 months through 19 years 11 months. It consists of 16 subtests used to evaluate listening, speaking, reading, writing, and mathematics skills.',
        DomainId: 1,
        DomainName: 'Academic Achievement',
        SubTestType: 'Subtest',
        ScoreType: 'Score',
        DescriptionType: 'Description',
        CreatedDate: '2018-09-25T18:03:46.077',
        ParentGroupScales: [],
        TestIndexes: [],
        SubTests: [],
        TestSummaries: [
          {
            Id: 4,
            Name: 'SUMMARY AT END OF ACH SECTION',
            TestId: 13,
            Descriptions:
              "Overall, (client’s) performance on the WIAT-III provided a snapshot into (his/her) various academic abilities and strengths. (He/She) demonstrated well-developed <input type='text' id='txtWiat2AbilityScore' /> abilities. However, (he/she) also evidenced relative challenges with <input type='text' id='txtWiat2ChallengesScore' />. These challenges should continue to be monitored and evaluated so as to help (him/her) continue to perform at (his/her) best.",
          },
        ],
        ParentScaleTitles: [
          {
            Id: 59,
            ParentScaleName: 'Early Years Core',
            ParentScaleDescription: null,
            CreatedDate: null,
            SubTests: [
              {
                Id: 250,
                TestId: null,
                Name: 'Listening Comprehension (Grades PK-12)',
                Abbreviation: null,
                Description:
                  'This subtest contains two components:<ul>  <li>Receptive Vocabulary: Measures listening vocabulary. The student points to the picture that best illustrates the meaning of each word he or she hears.</li>  <li>Oral Discourse Comprehension: Measures the ability to make inferences about, and remember details from, oral sentences and discourse. The student listens to sentences and passages and orally responds to comprehension questions.</li></ul>',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 251,
                TestId: null,
                Name: 'Early Reading Skills (Grades PK-3)',
                Abbreviation: null,
                Description:
                  'This subtest measures several areas deemed important for developing reading skills: naming letters, letter-sound correspondence (alphabetic principle), phonological awareness, and word reading comprehension. The student names letters of the alphabet, identifies and generates rhyming words, identifies words with the same beginning and ending sounds, blends sounds, matches sounds with letters and letter blends, and matches written words with pictures that illustrate their meaning.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 252,
                TestId: null,
                Name: 'Reading Comprehension (Grades 1-12)',
                Abbreviation: null,
                Description:
                  'Measures untimed reading comprehension of various types of text, including fictional stories, informational text, advertisements, and how-to passages. The student may read passages aloud or silently. After each passage, the student orally responds to literal and inferential comprehension questions that are read aloud by the examiner.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 253,
                TestId: null,
                Name: 'Math Problem Solving (Grades PK-12)',
                Abbreviation: null,
                Description:
                  'Measures untimed math problem-solving skills in the following domains: basic concepts, everyday applications, geometry, and algebra. The student provides oral and pointing responses.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 254,
                TestId: null,
                Name: 'Alphabet Writing Fluency (Grades PK-3)',
                Abbreviation: null,
                Description:
                  'Measures the ability to write letters of the alphabet within a 30-second time limit. The student may write letters in any order, in cursive or print, in uppercase or lowercase.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 255,
                TestId: null,
                Name: 'Sentence Composition (Grades 1-12)',
                Abbreviation: null,
                Description:
                  'This subtest contains two components:<ul><li>  Sentence Combining: Measures sentence formulation skills and written syntactic maturity. The student combines two or three sentences into one sentence that preserves the meaning of the original sentences. </li>  <li>Sentence Building: Measures sentence formulation skills and written syntactic ability. For each item, the student is asked to write one sentence that uses a target word with appropriate context. </li></ul>',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 256,
                TestId: null,
                Name: 'Word Reading (Grades 1-12)',
                Abbreviation: null,
                Description:
                  'Measures speed and accuracy of decontextualized word recognition. The student reads aloud from a list of words that increase in difficulty.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 257,
                TestId: null,
                Name: 'Essay Composition (Grades 3-12)',
                Abbreviation: null,
                Description:
                  'Measures spontaneous, compositional writing skills within a 10-minute time limit.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 258,
                TestId: null,
                Name: 'Pseudoword Decoding (Grades 1-12)',
                Abbreviation: null,
                Description:
                  'Measures the ability to decode nonsense words. The student reads aloud from a list of pseudowords that increase in difficulty.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 259,
                TestId: null,
                Name: 'Numerical Operations (Grades K-12)',
                Abbreviation: null,
                Description:
                  'Measures untimed, written math calculation skills in the following domains: basic skills, basic operations with integers, geometry, algebra, and calculus.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 260,
                TestId: null,
                Name: 'Oral Expression (Grades PK-12)',
                Abbreviation: null,
                Description:
                  'This subtest contains three components:<ul>  <li>Expressive Vocabulary: Measures speaking vocabulary and word retrieval ability. The student says the word that best corresponds to a given picture and definition</li>  <li>Oral Word Fluency: Measures efficiency of word retrieval (i.e., how easily he or she can produce words) and flexibility of thought processes. The student names as many things as possible belonging to a given category (i.e., animals, colors) within 60 seconds.</li>  <li>Sentence Repetition: Measures oral syntactic knowledge and short-term memory. The student listens to sentences that increase in length and complexity and repeats each sentence verbatim. </li></ul>',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 261,
                TestId: null,
                Name: 'Oral Reading Fluency (Grades 1-12)',
                Abbreviation: null,
                Description:
                  'Measures speed, accuracy, fluency, and prosody of contextualized oral reading. The student reads passages aloud, and then orally responds to comprehension questions after each passage.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 262,
                TestId: null,
                Name: 'Spelling (Grades K-12)',
                Abbreviation: null,
                Description:
                  'Measures written spelling of letter sounds and single words. The student hears each letter sound within the context of a word, and each word within the context of a sentence, and then the student writes the target letter sound or word.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 263,
                TestId: null,
                Name: 'Math Fluency – Addition',
                Abbreviation: null,
                Description:
                  'Measures the speed and accuracy of a student’s math (addition) calculations. The student solves written addition problems within a 60-second time limit.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 264,
                TestId: null,
                Name: 'Math Fluency – Subtraction',
                Abbreviation: null,
                Description:
                  'Measures the speed and accuracy of a student’s math (subtraction) calculations. The student solves written subtraction problems within a 60-second time limit.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
              {
                Id: 265,
                TestId: null,
                Name: 'Math Fluency – Multiplication',
                Abbreviation: null,
                Description:
                  'Measures the speed and accuracy of a student’s math (multiplication) calculations. The student solves written multiplication problems within a 60-second time limit.',
                ParentScaleTitleId: 59,
                CreatedDate: null,
              },
            ],
            HasInput: false,
          },
        ],
        TestModules: [],
        ParentGroupSubScales: [],
        TestScoringTableDetails: [
          {
            Id: 3,
            Name: 'The Wechsler Individual Achievement Test – Third Edition',
            Description: 'Descriptive Classifications of Score Ranges',
            TestId: 13,
            ScoreHeader: null,
            TableHeaderRowTitles: {
              Id: 17,
              Col1: 'Standard Score Range',
              Col2: 'Descriptive Category',
              Col3: null,
              Col4: null,
              Col5: null,
              Col6: null,
              Description: null,
              ScoringTableHeaderId: 3,
              OrderNumber: 1,
              IsHeader: true,
              IsEditable: false,
            },
            TestScoringTableScores: [
              {
                Id: 18,
                Col1: 'Above 145',
                Col2: 'Very Superior',
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 2,
                IsHeader: false,
                IsEditable: false,
              },
              {
                Id: 19,
                Col1: '131-145',
                Col2: 'Superior',
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 3,
                IsHeader: false,
                IsEditable: false,
              },
              {
                Id: 20,
                Col1: '116-130',
                Col2: 'Above Average',
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 4,
                IsHeader: false,
                IsEditable: false,
              },
              {
                Id: 21,
                Col1: '85-115',
                Col2: 'Average',
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 5,
                IsHeader: false,
                IsEditable: false,
              },
              {
                Id: 22,
                Col1: '70-84',
                Col2: 'Below Average',
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 6,
                IsHeader: false,
                IsEditable: false,
              },
              {
                Id: 23,
                Col1: '55-69',
                Col2: 'Low',
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 7,
                IsHeader: false,
                IsEditable: false,
              },
              {
                Id: 24,
                Col1: 'Below 55',
                Col2: 'Very Low',
                Col3: null,
                Col4: null,
                Col5: null,
                Col6: null,
                Description: null,
                ScoringTableHeaderId: 3,
                OrderNumber: 8,
                IsHeader: false,
                IsEditable: false,
              },
            ],
          },
        ],
      },
      // {
      //   Id: 23,
      //   Name: "Nelson-Denny Reading Test",
      //   Abbreviation: "Nelson-Denny",
      //   Descriptions:
      //     "The Nelson Denny Reading Test's chief purpose is to identify students who have difficulty in reading, to gauge levels of progress after remediation, and to predict future potential for academic success. The Nelson-Denny measures the student's reading rate in words per minute; it also measures vocabulary level and reading comprehension.",
      //   DomainId: 1,
      //   DomainName: "Academic Achievement",
      //   SubTestType: null,
      //   ScoreType: null,
      //   DescriptionType: null,
      //   CreatedDate: "2018-11-05T12:16:44.46",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: [
      //     {
      //       Id: 5,
      //       Name: "Nelson-Denny Reading Test",
      //       Description: null,
      //       TestId: 23,
      //       ScoreHeader: null,
      //       TableHeaderRowTitles: {
      //         Id: 29,
      //         Col1: "Measure",
      //         Col2: "Standard Score",
      //         Col3: "Percentile",
      //         Col4: "Grade Equivalent",
      //         Col5: null,
      //         Col6: null,
      //         Description: null,
      //         ScoringTableHeaderId: 5,
      //         OrderNumber: 1,
      //         IsHeader: true,
      //         IsEditable: false
      //       },
      //       TestScoringTableScores: [
      //         {
      //           Id: 30,
      //           Col1: "Comprehension",
      //           Col2: "<Field>",
      //           Col3: "<Field>",
      //           Col4: "<Field>",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 5,
      //           OrderNumber: 2,
      //           IsHeader: false,
      //           IsEditable: true
      //         },
      //         {
      //           Id: 31,
      //           Col1: "Reading Rate",
      //           Col2: "<Field>",
      //           Col3: "<Field>",
      //           Col4: "<Field>",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 5,
      //           OrderNumber: 3,
      //           IsHeader: false,
      //           IsEditable: true
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   Id: 31,
      //   Name: 'Woodcock-Johnson IV-Tests of Achievement',
      //   Abbreviation: 'WJ-IV ACH',
      //   Descriptions:
      //     'The Woodcock-Johnson IV-Tests of Achievement (WJ-IV ACH) is a comprehensive set of individually administered tests to measure educational achievement in the areas of reading, mathematics, written language, oral language, academic skills, fluency and applications. The results are presented below:',
      //   DomainId: 1,
      //   DomainName: 'Academic Achievement',
      //   SubTestType: 'Subtest',
      //   ScoreType: 'Standard Score',
      //   DescriptionType: 'Description',
      //   CreatedDate: '2018-12-08T18:59:17.263',
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [
      //     {
      //       Id: 144,
      //       ParentScaleName: 'BASIC READING SKILLS',
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 616,
      //           TestId: null,
      //           Name: 'Letter-Word Identification',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>Low scores may mean student has not developed automatic word identification skills. </li>  <li>Student may require increased time and greater attention to phonological analysis to identify words. </li>  <li>Responses identify phonetic analysis skills (initial, medial, final sounds; vowel/consonant patterns</li>  <li>Responses identify structural analysis skills (syllables, prefixes, suffixes)</li></ul>',
      //           ParentScaleTitleId: 144,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 617,
      //           TestId: null,
      //           Name: 'Word Attack',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This sub-test measures a student’s ability to apply phonic/decoding skills to unfamiliar words.</li>  <li>The initial items require a student to produce sounds for a small set of single letters.</li>  <li>The majority of items require students to pronounce nonsense words of increasing complexity.</li>  <li>Poor performance usually indicates that the student has not developed or mastered phonetic decoding skills.</li></ul>',
      //           ParentScaleTitleId: 144,
      //           CreatedDate: null,
      //         },
      //       ],
      //       HasInput: false,
      //     },
      //     {
      //       Id: 146,
      //       ParentScaleName: 'READING COMPREHENSION-EXTENDED',
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 618,
      //           TestId: null,
      //           Name: 'Passage Comprehension',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This sub-test measures a student’s understanding of written text.</li>  <li>Initial items measure a student’s ability to match a rebus (picture symbol) with an actual picture.</li>  <li>The next set of items requires students to match a short phrase to the appropriate picture when given three choices.</li>  <li>The items become increasingly difficult by removing pictorial stimuli and by increasing passage length, level of vocabulary, and complexity of syntax.</li></ul>',
      //           ParentScaleTitleId: 146,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 619,
      //           TestId: null,
      //           Name: 'Reading Recall',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>Measures how well an examinee can reconstruct meaningful content that he or she has read.</li>  <li>Low performance may be related to:<ul>  <li>Limited basic reading skills  <li>Comprehension difficulties  <li>Attention and/or memory issues</li></ul></li></ul>',
      //           ParentScaleTitleId: 146,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 620,
      //           TestId: null,
      //           Name: 'Reading Vocabulary',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>Reading Vocabulary measures a stud ent’s ability to provide synonyms and antonyms and to complete analogies.</li>  <li>All items are presented in increasing difficulty.</li></ul>',
      //           ParentScaleTitleId: 146,
      //           CreatedDate: null,
      //         },
      //       ],
      //       HasInput: false,
      //     },
      //     {
      //       Id: 147,
      //       ParentScaleName: 'MATH CALCULATION SKILLS',
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 621,
      //           TestId: null,
      //           Name: 'Calculation',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This sub-test measures a student’s ability to perform paper and pencil math computations.</li>  <li>Items range from writing numbers through numerical operations (addition, subtraction, multiplication, division),as well as, geometric, trigonometric, logarithmic, and calculus operations if appropriate.</li></ul>',
      //           ParentScaleTitleId: 147,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 622,
      //           TestId: null,
      //           Name: 'Math Fact Fluency',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This sub-test measures a student’s ability to solve simple addition, subtraction and multiplication facts quickly.</li>  <li>Students are given a three-minute time limit and a series of math facts to complete in the student response book.</li></ul>',
      //           ParentScaleTitleId: 147,
      //           CreatedDate: null,
      //         },
      //       ],
      //       HasInput: false,
      //     },
      //     {
      //       Id: 148,
      //       ParentScaleName: 'MATH REASONING',
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 623,
      //           TestId: null,
      //           Name: 'Applied Problems',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This sub-test measures a student’s ability to analyze and solve math problems.</li>  <li>Initial items require application of simple number concepts.</li>  <li>The majority of items require a student to listen to the problem, recognize the mathematical procedure that must be followed, and perform the appropriate calculations.</li></ul>',
      //           ParentScaleTitleId: 148,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 624,
      //           TestId: null,
      //           Name: 'Number Matrices',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>Measures quantitative reasoning</li>  <li>Performance is affected by ability to inductively and deductively reason with numbers</li>  <li>Low performance may be a function of limited quantitative reasoning</li></ul>',
      //           ParentScaleTitleId: 148,
      //           CreatedDate: null,
      //         },
      //       ],
      //       HasInput: false,
      //     },
      //     {
      //       Id: 149,
      //       ParentScaleName: 'WRITTEN EXPRESSION',
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 625,
      //           TestId: null,
      //           Name: 'Writing Samples',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This sub-test measures a student’s ability to write sentences given a verbal and picture cue.</li>  <li>Initial items require students to complete sentences.</li>  <li>The next set of items requires students to write a sentence that complies with teacher directions.</li>  <li>Final items require more complex sentence construction and carry more difficult task demands.</li>  <li>Items on this sub-test are scored for the quality of expression.  Students are not penalized for errors in capitalization, punctuation, and spelling.  Written expression is measured at the single sentence level.</li></ul>',
      //           ParentScaleTitleId: 149,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 626,
      //           TestId: null,
      //           Name: 'Sentence Writing Fluency',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This sub-test measures a student’s ability formulate and write sentences quickly.</li>  <li>Students are given a set of three prompt words for each item and must construct as many sentences as possible within a seven-minute time limit.</li></ul>',
      //           ParentScaleTitleId: 149,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 627,
      //           TestId: null,
      //           Name: 'Oral Reading',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This test measures a student’s ability to understand short oral passages.</li>  <li>Measures ability to apply important aspects of reading fluency, such as accuracy and prosody, when reading sentences aloud.</li>  <li>Items require that a student supply a missing word to the end of a sentence, or related group of sentences.</li></ul>',
      //           ParentScaleTitleId: 149,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 628,
      //           TestId: null,
      //           Name: 'Sentence Reading Fluency',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>Measures reading speed and rate</li>  <li>Low scores indicate difficulty reading and comprehending simple sentences quickly.</li>  <li>Low performance may be a function of:<ul>  <li>Limited basic reading skills</li>  <li>Comprehension difficulties</li>  <li>Slow processing speed</li>  <li>Inability to sustain concentration</li></ul></li></ul>',
      //           ParentScaleTitleId: 149,
      //           CreatedDate: null,
      //         },
      //       ],
      //       HasInput: false,
      //     },
      //     {
      //       Id: 150,
      //       ParentScaleName: 'Writing Related Subtest',
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 629,
      //           TestId: null,
      //           Name: 'Spelling',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This sub-test measures a student’s ability to write orally presented words correctly.</li>  <li>Initial items measure prewriting skills such as drawing and tracing letters and writing upper and lower-case letters.</li>  <li>The majority of items require students to spell dictated words of increasing difficulty.</li></ul>',
      //           ParentScaleTitleId: 150,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 630,
      //           TestId: null,
      //           Name: 'Spelling of Sounds',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>Sound Awareness measures a student’s ability to understand and utilize the sounds within words.</li>  <li>Sound Awareness is comprised of four sub-tests: Rhyming, Deletion (student must remove a word part or sound and say remaining part of word), Substitution (student must change a word part or sound to create a new word) and Reversal (student must reverse word parts or individual sounds to form a new word).</li></ul>',
      //           ParentScaleTitleId: 150,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 631,
      //           TestId: null,
      //           Name: 'Editing',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This sub-test measures a student’s ability to identify and correct errors in a written passage.</li>  <li>Items require students to correct errors in punctuation, capitalization, spelling and word usage.  Passages gradually increase in difficulty.</li></ul>',
      //           ParentScaleTitleId: 150,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 632,
      //           TestId: null,
      //           Name: 'Science',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>Measures the examinee’s knowledge in the various areas of biological and physical sciences</li>  <li>Responds orally to questions read by the examiner</li>  <li>Items range in difficulty level from early preschool (age 2) through college and adult</li>  <li>No reading or writing</li></ul>',
      //           ParentScaleTitleId: 150,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 633,
      //           TestId: null,
      //           Name: 'Social Studies',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>Measures the knowledge of history, geography, government, economics and psychology</li></ul>',
      //           ParentScaleTitleId: 150,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 634,
      //           TestId: null,
      //           Name: 'Humanities',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>Measures knowledge in various areas of art, music, and literature</li></ul>',
      //           ParentScaleTitleId: 150,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 635,
      //           TestId: null,
      //           Name: 'Word Attack',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This sub-test is a brief measure of a student’s word knowledge.</li>  Initial items require a student to point to a named picture.</li>  The majority of items require a student to name pictures making this largely a test of expressive vocabulary at the single word level.</li></ul>',
      //           ParentScaleTitleId: 150,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 636,
      //           TestId: null,
      //           Name: 'Spelling of Sounds',
      //           Abbreviation: null,
      //           Description:
      //             '<ul><li>This sub-test measures a student’s ability to represent words using sound knowledge; as well as, knowledge of typical spelling patterns.</li>  <li>Initial items require students to write single letters, or sounds.</li>  <li>Most items require students to listen to and spell non-words.</li></ul>',
      //           ParentScaleTitleId: 150,
      //           CreatedDate: null,
      //         },
      //       ],
      //       HasInput: false,
      //     },
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null,
      // },
      // {
      //   Id: 3,
      //   Name: "Behavior Rating Inventory of Executive Function",
      //   Abbreviation: "BRIEF",
      //   Descriptions:
      //     "The Behavior Rating Inventory of Executive Function is a questionnaire for parents and teachers of school-age children that enables professionals to assess executive function behaviors (i.e., a collection of processes that are responsible for guiding, directing, and managing cognitive, emotional, and behavioral functions, particularly during active, novel problem solving) in the home and school environments. It is designed for a broad range of children, ages 5 to 18 years, including those with learning disabilities and attentional disorders, traumatic brain injuries, lead exposure, pervasive developmental disorders, depression and other developmental, neurological, psychiatric, and medical conditions. <br />The Parent and Teacher Forms of the BRIEF each contain 86 items within eight theoretically and empirically derived clinical scales that measure different aspects of executive functioning. These scales form two broader Indexes, Behavioral Regulation and Metacognition, as well as an overall score, the Global Executive Composite.",
      //   DomainId: 2,
      //   DomainName: "Attention & Executive Function",
      //   SubTestType: "Scale",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-09-22T18:55:23.407",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [
      //     {
      //       Id: 18,
      //       ParentScaleName: "Validity Scales",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 78,
      //           TestId: null,
      //           Name: "Inconsistency Scale",
      //           Abbreviation: null,
      //           Description:
      //             "Scores on this scale indicate the extent to which the respondent answers similar BRIEF items in an inconsistent manner relative to the clinical samples.",
      //           ParentScaleTitleId: 18,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 79,
      //           TestId: null,
      //           Name: "Negativity Scale",
      //           Abbreviation: null,
      //           Description:
      //             "This scale measures the extent to which the respondent answers selected BRIEF items in an unusually negative manner relative to the clinical samples. This could indicate that the respondent had an unusually negative response style or could represent accurate reporting on a child with severe executive dysfunction.",
      //           ParentScaleTitleId: 18,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 19,
      //       ParentScaleName: "Behavioral Regulation Index (BRI)",
      //       ParentScaleDescription:
      //         "represents a child’s ability to shift cognitive set and modulate emotions and behavior via appropriate inhibitory control. Appropriate behavioral regulation is likely to be a precursor to appropriate metacognitive problem-solving. Behavioral regulation enables the metacognitive processes to successfully guide active, systematic problem solving, and more generally, supports appropriate self-regulation.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 82,
      //           TestId: null,
      //           Name: "Inhibit",
      //           Abbreviation: null,
      //           Description:
      //             "This scale assesses inhibitory control (i.e., the ability to inhibit, resist, or not act on an impulse) and the ability to stop one’s behavior at the appropriate time.",
      //           ParentScaleTitleId: 19,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 83,
      //           TestId: null,
      //           Name: "Shift",
      //           Abbreviation: null,
      //           Description:
      //             "This scale assesses the ability to move freely from one situation, activity, or aspect of a problem to another as the circumstances demand. Key aspects of shifting include the ability to make transitions, problem-solve flexibly, switch or alternate attention, and change focus from one mindset or topic to another.",
      //           ParentScaleTitleId: 19,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 84,
      //           TestId: null,
      //           Name: "Emotional Control",
      //           Abbreviation: null,
      //           Description:
      //             "This scale addresses the manifestation of executive functions within the emotional realm and assesses a child’s ability to modulate emotional responses. Poor emotional control can be expressed as emotional lability or emotional explosiveness.",
      //           ParentScaleTitleId: 19,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 20,
      //       ParentScaleName: "Metacognition Index (MI)",
      //       ParentScaleDescription:
      //         "represents the child’s ability to initiate, plan, organize, and sustain future-oriented problem-solving in working memory. This index is interpreted as the ability to cognitively self-manage tasks and reflects the child’s ability to monitor his or her own performance. The MI related directly to a child’s ability to actively problem solve in a variety of contexts.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 85,
      //           TestId: null,
      //           Name: "Initiate",
      //           Abbreviation: null,
      //           Description:
      //             "This scale contains items relating to beginning a task or activity, as well as independently generating ideas, responses, or problem-solving strategies. Poor initiation typically does not reflect noncompliance or disinterest in a specific task.",
      //           ParentScaleTitleId: 20,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 86,
      //           TestId: null,
      //           Name: "Working Memory",
      //           Abbreviation: null,
      //           Description:
      //             "Items from this scale measure the capacity to hold information in mind for the purpose of completing a task. Working memory is essential to carry out multi-step activities, complete mental arithmetic, or follow complex instructions.",
      //           ParentScaleTitleId: 20,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 87,
      //           TestId: null,
      //           Name: "Plan/Organize",
      //           Abbreviation: null,
      //           Description:
      //             "This scale measures the child’s ability to manage current and future-oriented task demands. The plan component of this scale relates to the ability to anticipate future events, set goals, and develop appropriate steps ahead of time to carry out a task or activity. Planning involves imagining or developing a goal or end state and then strategically determining the most effective method or steps to attain that goal. It often requires sequencing or stringing together a series of steps. <br /> The organizing component of this scale relates to the ability to bring order to information and to appreciate main ideas or key concepts when learning or communicating information. This involves the ability to organize oral and written expression, as well as to understand main points expressed in presentations and written material. Organization also has a clerical component that is expressed, for example, in the ability to efficiently scan a visual array or to keep track of a homework assignment.",
      //           ParentScaleTitleId: 20,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 88,
      //           TestId: null,
      //           Name: "Organization of Materials",
      //           Abbreviation: null,
      //           Description:
      //             "This scale measures orderliness of work, play, and storage spaces (e.g., desks, lockers, backpacks, and bedrooms).",
      //           ParentScaleTitleId: 20,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 89,
      //           TestId: null,
      //           Name: "Monitor",
      //           Abbreviation: null,
      //           Description:
      //             "This scale assesses work-checking habits (i.e., whether a child assesses his or her own performance during or shortly after finishing a task to ensure appropriate attainment of a goal). This scale also evaluates a personal monitoring function (i.e., whether a child keeps track of the effect his or her behavior has on others).",
      //           ParentScaleTitleId: 20,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 21,
      //       ParentScaleName: "Global Executive Composite (GEC)",
      //       ParentScaleDescription:
      //         "is a summary score that incorporates all eight clinical scales of the BRIEF. To legitimately derive a GEC score, there must be no significant difference between the BRI and MI scores, as this would suggest that the GEC is likely to obscure important differences between the two index scores and should not be used as a summary measure.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 90,
      //           TestId: null,
      //           Name: "Inhibit",
      //           Abbreviation: null,
      //           Description:
      //             "This scale assesses inhibitory control (i.e., the ability to inhibit, resist, or not act on an impulse) and the ability to stop one’s behavior at the appropriate time.",
      //           ParentScaleTitleId: 21,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 91,
      //           TestId: null,
      //           Name: "Shift",
      //           Abbreviation: null,
      //           Description:
      //             "This scale assesses the ability to move freely from one situation, activity, or aspect of a problem to another as the circumstances demand. Key aspects of shifting include the ability to make transitions, problem-solve flexibly, switch or alternate attention, and change focus from one mindset or topic to another.",
      //           ParentScaleTitleId: 21,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 92,
      //           TestId: null,
      //           Name: "Emotional Control",
      //           Abbreviation: null,
      //           Description:
      //             "This scale addresses the manifestation of executive functions within the emotional realm and assesses a child’s ability to modulate emotional responses. Poor emotional control can be expressed as emotional lability or emotional explosiveness.",
      //           ParentScaleTitleId: 21,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 93,
      //           TestId: null,
      //           Name: "Initiate",
      //           Abbreviation: null,
      //           Description:
      //             "This scale contains items relating to beginning a task or activity, as well as independently generating ideas, responses, or problem-solving strategies. Poor initiation typically does not reflect noncompliance or disinterest in a specific task.",
      //           ParentScaleTitleId: 21,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 94,
      //           TestId: null,
      //           Name: "Working Memory",
      //           Abbreviation: null,
      //           Description:
      //             "Items from this scale measure the capacity to hold information in mind for the purpose of completing a task. Working memory is essential to carry out multi-step activities, complete mental arithmetic, or follow complex instructions.",
      //           ParentScaleTitleId: 21,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 95,
      //           TestId: null,
      //           Name: "Plan/Organize",
      //           Abbreviation: null,
      //           Description:
      //             "This scale measures the child’s ability to manage current and future-oriented task demands. The plan component of this scale relates to the ability to anticipate future events, set goals, and develop appropriate steps ahead of time to carry out a task or activity. Planning involves imagining or developing a goal or end state and then strategically determining the most effective method or steps to attain that goal. It often requires sequencing or stringing together a series of steps. <br />  The organizing component of this scale relates to the ability to bring order to information and to appreciate main ideas or key concepts when learning or communicating information. This involves the ability to organize oral and written expression, as well as to understand main points expressed in presentations and written material. Organization also has a clerical component that is expressed, for example, in the ability to efficiently scan a visual array or to keep track of a homework assignment.",
      //           ParentScaleTitleId: 21,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 96,
      //           TestId: null,
      //           Name: "Organization of Materials",
      //           Abbreviation: null,
      //           Description:
      //             "This scale measures orderliness of work, play, and storage spaces (e.g., desks, lockers, backpacks, and bedrooms).",
      //           ParentScaleTitleId: 21,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 97,
      //           TestId: null,
      //           Name: "Monitor",
      //           Abbreviation: null,
      //           Description:
      //             "This scale assesses work-checking habits (i.e., whether a child assesses his or her own performance during or shortly after finishing a task to ensure appropriate attainment of a goal). This scale also evaluates a personal monitoring function (i.e., whether a child keeps track of the effect his or her behavior has on others).",
      //           ParentScaleTitleId: 21,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 5,
      //   Name: 'Conners 3',
      //   Abbreviation: 'Conners-3',
      //   Descriptions:
      //     'Conners-3 is an assessment of Attention-Deficit/Hyperactivity Disorder (ADHD) and its most common comorbid problems and disorders in children and adolescents.',
      //   DomainId: 2,
      //   DomainName: 'Attention & Executive Function',
      //   SubTestType: 'Scale',
      //   ScoreType: 'Score',
      //   DescriptionType: 'Common Characteristics of High Scorers',
      //   CreatedDate: '2018-09-24T11:02:34.883',
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [
      //     {
      //       Id: 6,
      //       ParentGroupSubScaleName: 'Parent',
      //       ParentGroupScaleId: null,
      //       ParentScaleTitles: [
      //         {
      //           Id: 24,
      //           ParentScaleName: 'Content Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 120,
      //               TestId: null,
      //               Name: 'Inattention',
      //               Abbreviation: null,
      //               Description:
      //                 'May have poor concentration/attention or difficulty keeping his/her mind on work. May make careless mistakes. Maybe be easily distracted. May give up easily or be easily bored. May avoid schoolwork. May have difficulty starting and/or finishing tasks.',
      //               ParentScaleTitleId: 24,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 121,
      //               TestId: null,
      //               Name: 'Hyperactivity/Impulsivity',
      //               Abbreviation: null,
      //               Description:
      //                 'High activity levels. May be restless and/or impulsive. May have difficulty being quiet. May interrupt others or talk too much. May be easily excited.',
      //               ParentScaleTitleId: 24,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 122,
      //               TestId: null,
      //               Name: 'Learning Problems',
      //               Abbreviation: null,
      //               Description:
      //                 'Academic struggles (reading, spelling, and/or math). May have difficulty learning and/or remembering concepts. May need extra explanations or help.',
      //               ParentScaleTitleId: 24,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 123,
      //               TestId: null,
      //               Name: 'Executive Functioning',
      //               Abbreviation: null,
      //               Description:
      //                 'May have difficulty starting or finishing projects. May complete projects at the last minute. May have poor planning, prioritizing, or organizational skills.',
      //               ParentScaleTitleId: 24,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 124,
      //               TestId: null,
      //               Name: 'Defiance/Aggression',
      //               Abbreviation: null,
      //               Description:
      //                 'May be argumentative. May defy requests from adults. May have poor control of anger and may lose temper. May be physically and/or verbally aggressive. May show violent or destructive tendencies. May bully others. May be manipulative or cruel. May break rules and/or have legal issues.',
      //               ParentScaleTitleId: 24,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 125,
      //               TestId: null,
      //               Name: 'Peer Relations',
      //               Abbreviation: null,
      //               Description:
      //                 'May have difficulty with friendships, poor social skills, and limited social connections. May appear to be unaccepted by the group.',
      //               ParentScaleTitleId: 24,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 25,
      //           ParentScaleName: 'DSM Symptom Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 126,
      //               TestId: null,
      //               Name: 'ADHD Inattentive',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for ADHD Inattentive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 25,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 127,
      //               TestId: null,
      //               Name: 'ADHD Hyperactive-Impulsive',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for ADHD Hyperactive-Impulsive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 25,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 128,
      //               TestId: null,
      //               Name: 'Conduct Disorder',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for Conduct Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 25,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 129,
      //               TestId: null,
      //               Name: 'Oppositional Defiant Disorder',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for Oppositional Defiant Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 25,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 26,
      //           ParentScaleName: 'Indices',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 130,
      //               TestId: null,
      //               Name: 'Conners 3 ADHD Index',
      //               Abbreviation: null,
      //               Description:
      //                 'Features that are commonly seen in youth with inattention, hyperactivity, and/or impulsivity',
      //               ParentScaleTitleId: 26,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 131,
      //               TestId: null,
      //               Name: 'Conners 3 Global Index',
      //               Abbreviation: null,
      //               Description:
      //                 'Features of general psychological difficulty that may be expressed behaviorally, academically, socially, or emotionally',
      //               ParentScaleTitleId: 26,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 27,
      //           ParentScaleName: 'Screener Items',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 132,
      //               TestId: null,
      //               Name: 'Anxiety',
      //               Abbreviation: null,
      //               Description: 'Items that relate to generalized worrying',
      //               ParentScaleTitleId: 27,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 133,
      //               TestId: null,
      //               Name: 'Depression',
      //               Abbreviation: null,
      //               Description: 'Items that reflect key clinical presentations of depression',
      //               ParentScaleTitleId: 27,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 28,
      //           ParentScaleName: 'Critical Items',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 134,
      //               TestId: null,
      //               Name: 'Severe Conduct',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that represent severe misconduct (e.g., fire-setting, cruelty to animals, use of weapons) that require immediate investigation, and include behaviors that may predict future violence or harm to others.',
      //               ParentScaleTitleId: 28,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 29,
      //           ParentScaleName: 'Validity Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 135,
      //               TestId: null,
      //               Name: 'Positive Impression',
      //               Abbreviation: null,
      //               Description:
      //                 'Items rated extremely positively, and are in most cases unrealistic. Often indicates an overly positive description of youth’s behavior, but can also be the result of:  <ul><li>Youth’s exemplary behavior in a particular setting</li>  <li>Youth being extremely well-behaved for a specific parent or teacher</li>  <li>Rater has a tendency to forget positive traits and remember negative ones</li>  <li>Rater is motivated to describe the youth as “problem-free,” for example, wanting to avoid stigmatizing labels or services</li>  <li>Rater completed the Conners 3 erroneously, such as comparing the youth to another who has more difficulty (e.g., a quiet student in a class of troublemakers or a youth whose sibling shows severe clinical symptoms) rather than thinking of the youth’s behavior independently of any other youth’s behavior</li><ul>',
      //               ParentScaleTitleId: 29,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 136,
      //               TestId: null,
      //               Name: 'Negative Impression',
      //               Abbreviation: null,
      //               Description:
      //                 'A set of items that describe extremely negative behaviors that are unlikely to be true all the time. Often indicates an overly negative description of the youth’s behavior, but can also be the result of:<ul><li>  The youth really does misbehave most of the time, as seen in some severe clinical cases</li>  <li>There may be some variables that negatively impact the youth’s functioning in a particular setting (e.g., a student with a math disorder may show worse behavior in math class than in art class)</li>  <li>The rater may have very high standards that are difficult for the youth to meet</li>  <li>The rater may be highly motivated to describe the youth as problematic in order to obtain services or shift the youth to another placement</li>  <li>The rater may be erroneously comparing the youth to others who are older or who are exceptionally well-behaved. </li></ul>',
      //               ParentScaleTitleId: 29,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 137,
      //               TestId: null,
      //               Name: 'Inconsistency Index',
      //               Abbreviation: null,
      //               Description:
      //                 'Based on responses to pairs of items that tend to be rated similarly. When there is inconsistency in responses to similar items, this suggests that scores may not accurately reflect the individual due to a careless or unusual response to some items. Random responding, variable attention, or comprehension difficulties can contribute to this.',
      //               ParentScaleTitleId: 29,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //       ],
      //     },
      //     {
      //       Id: 7,
      //       ParentGroupSubScaleName: 'Teacher',
      //       ParentGroupScaleId: null,
      //       ParentScaleTitles: [
      //         {
      //           Id: 30,
      //           ParentScaleName: 'Content Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 138,
      //               TestId: null,
      //               Name: 'Inattention',
      //               Abbreviation: null,
      //               Description:
      //                 'May have poor concentration/attention or difficulty keeping his/her mind on work. May make careless mistakes. Maybe be easily distracted. May give up easily or be easily bored. May avoid schoolwork. May have difficulty starting and/or finishing tasks.',
      //               ParentScaleTitleId: 30,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 139,
      //               TestId: null,
      //               Name: 'Hyperactivity/Impulsivity',
      //               Abbreviation: null,
      //               Description:
      //                 'High activity levels. May be restless and/or impulsive. May have difficulty being quiet. May interrupt others or talk too much. May be easily excited.',
      //               ParentScaleTitleId: 30,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 141,
      //               TestId: null,
      //               Name: 'Learning Problems',
      //               Abbreviation: null,
      //               Description:
      //                 'Academic struggles (reading, spelling, and/or math). May have difficulty learning and/or remembering concepts. May need extra explanations or help.',
      //               ParentScaleTitleId: 30,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 142,
      //               TestId: null,
      //               Name: 'Executive Functioning',
      //               Abbreviation: null,
      //               Description:
      //                 'May have difficulty starting or finishing projects. May complete projects at the last minute. May have poor planning, prioritizing, or organizational skills.',
      //               ParentScaleTitleId: 30,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 143,
      //               TestId: null,
      //               Name: 'Defiance/Aggression',
      //               Abbreviation: null,
      //               Description:
      //                 'May be argumentative. May defy requests from adults. May have poor control of anger and may lose temper. May be physically and/or verbally aggressive. May show violent or destructive tendencies. May bully others. May be manipulative or cruel. May break rules and/or have legal issues.',
      //               ParentScaleTitleId: 30,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 144,
      //               TestId: null,
      //               Name: 'Peer Relations',
      //               Abbreviation: null,
      //               Description:
      //                 'May have difficulty with friendships, poor social skills, and limited social connections. May appear to be unaccepted by the group.',
      //               ParentScaleTitleId: 30,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 31,
      //           ParentScaleName: 'DSM Symptom Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 145,
      //               TestId: null,
      //               Name: 'ADHD Inattentive',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for ADHD Inattentive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 31,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 146,
      //               TestId: null,
      //               Name: 'ADHD Hyperactive-Impulsive',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for ADHD Hyperactive-Impulsive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 31,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 147,
      //               TestId: null,
      //               Name: 'Conduct Disorder',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for Conduct Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 31,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 148,
      //               TestId: null,
      //               Name: 'Oppositional Defiant Disorder',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for Oppositional Defiant Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 31,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 32,
      //           ParentScaleName: 'Indices',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 149,
      //               TestId: null,
      //               Name: 'Conners 3 ADHD Index',
      //               Abbreviation: null,
      //               Description:
      //                 'Features that are commonly seen in youth with inattention, hyperactivity, and/or impulsivity',
      //               ParentScaleTitleId: 32,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 150,
      //               TestId: null,
      //               Name: 'Conners 3 Global Index',
      //               Abbreviation: null,
      //               Description:
      //                 'Features of general psychological difficulty that may be expressed behaviorally, academically, socially, or emotionally',
      //               ParentScaleTitleId: 32,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 33,
      //           ParentScaleName: 'Screener Items',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 151,
      //               TestId: null,
      //               Name: 'Anxiety',
      //               Abbreviation: null,
      //               Description: 'Items that relate to generalized worrying',
      //               ParentScaleTitleId: 33,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 152,
      //               TestId: null,
      //               Name: 'Depression',
      //               Abbreviation: null,
      //               Description: 'Items that reflect key clinical presentations of depression',
      //               ParentScaleTitleId: 33,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 34,
      //           ParentScaleName: 'Critical Items',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 153,
      //               TestId: null,
      //               Name: 'Severe Conduct',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that represent severe misconduct (e.g., fire-setting, cruelty to animals, use of weapons) that require immediate investigation, and include behaviors that may predict future violence or harm to others.',
      //               ParentScaleTitleId: 34,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 35,
      //           ParentScaleName: 'Validity Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 154,
      //               TestId: null,
      //               Name: 'Positive Impression',
      //               Abbreviation: null,
      //               Description:
      //                 'Items rated extremely positively, and are in most cases unrealistic. Often indicates an overly positive description of youth’s behavior, but can also be the result of:<ul>  <li>Youth’s exemplary behavior in a particular setting</li>  <li>Youth being extremely well-behaved for a specific parent or teacher</li>  <li>Rater has a tendency to forget positive traits and remember negative ones</li>  <li>Rater is motivated to describe the youth as “problem-free,” for example, wanting to avoid stigmatizing labels or services</li>  <li>Rater completed the Conners 3 erroneously, such as comparing the youth to another who has more difficulty (e.g., a quiet student in a class of troublemakers or a youth whose sibling shows severe clinical symptoms) rather than thinking of the youth’s behavior independently of any other youth’s behavior</li></ul>',
      //               ParentScaleTitleId: 35,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 155,
      //               TestId: null,
      //               Name: 'Negative Impression',
      //               Abbreviation: null,
      //               Description:
      //                 'A set of items that describe extremely negative behaviors that are unlikely to be true all the time. Often indicates an overly negative description of the youth’s behavior, but can also be the result of:<ul>  <li>The youth really does misbehave most of the time, as seen in some severe clinical cases</li>  <li>There may be some variables that negatively impact the youth’s functioning in a particular setting (e.g., a student with a math disorder may show worse behavior in math class than in art class)</li>  <li>The rater may have very high standards that are difficult for the youth to meet</li>  <li>The rater may be highly motivated to describe the youth as problematic in order to obtain services or shift the youth to another placement</li>  <li>The rater may be erroneously comparing the youth to others who are older or who are exceptionally well-behaved. </li></ul>',
      //               ParentScaleTitleId: 35,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 156,
      //               TestId: null,
      //               Name: 'Inconsistency Index',
      //               Abbreviation: null,
      //               Description:
      //                 'Based on responses to pairs of items that tend to be rated similarly. When there is inconsistency in responses to similar items, this suggests that scores may not accurately reflect the individual due to a careless or unusual response to some items. Random responding, variable attention, or comprehension difficulties can contribute to this.',
      //               ParentScaleTitleId: 35,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //       ],
      //     },
      //     {
      //       Id: 8,
      //       ParentGroupSubScaleName: 'Self-Report',
      //       ParentGroupScaleId: null,
      //       ParentScaleTitles: [
      //         {
      //           Id: 36,
      //           ParentScaleName: 'Content Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 157,
      //               TestId: null,
      //               Name: 'Inattention',
      //               Abbreviation: null,
      //               Description:
      //                 'May have poor concentration/attention or difficulty keeping his/her mind on work. May make careless mistakes. Maybe be easily distracted. May give up easily or be easily bored. May avoid schoolwork. May have difficulty starting and/or finishing tasks.',
      //               ParentScaleTitleId: 36,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 158,
      //               TestId: null,
      //               Name: 'Hyperactivity/Impulsivity',
      //               Abbreviation: null,
      //               Description:
      //                 'High activity levels. May be restless and/or impulsive. May have difficulty being quiet. May interrupt others or talk too much. May be easily excited.',
      //               ParentScaleTitleId: 36,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 159,
      //               TestId: null,
      //               Name: 'Learning Problems',
      //               Abbreviation: null,
      //               Description:
      //                 'Academic struggles (reading, spelling, and/or math). May have difficulty learning and/or remembering concepts. May need extra explanations or help.',
      //               ParentScaleTitleId: 36,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 160,
      //               TestId: null,
      //               Name: 'Defiance/Aggression',
      //               Abbreviation: null,
      //               Description:
      //                 'May be argumentative. May defy requests from adults. May have poor control of anger and may lose temper. May be physically and/or verbally aggressive. May show violent or destructive tendencies. May bully others. May be manipulative or cruel. May break rules and/or have legal issues.',
      //               ParentScaleTitleId: 36,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 161,
      //               TestId: null,
      //               Name: 'Family Relations',
      //               Abbreviation: null,
      //               Description:
      //                 'May feel that parents do not love or notice him/her. May feel unjustly criticized and/or punished at home.',
      //               ParentScaleTitleId: 36,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 37,
      //           ParentScaleName: 'DSM Symptom Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 162,
      //               TestId: null,
      //               Name: 'ADHD Inattentive',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for ADHD Inattentive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 37,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 163,
      //               TestId: null,
      //               Name: 'ADHD Hyperactive-Impulsive',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for ADHD Hyperactive-Impulsive type. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 37,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 164,
      //               TestId: null,
      //               Name: 'Conduct Disorder',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for Conduct Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 37,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 165,
      //               TestId: null,
      //               Name: 'Oppositional Defiant Disorder',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that approximate to DSM symptoms for Oppositional Defiant Disorder. Additional criteria (e.g., age of onset, course, differential diagnosis, level of impairment, pervasiveness) must be met before a DSM diagnosis can be assigned.',
      //               ParentScaleTitleId: 37,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 38,
      //           ParentScaleName: 'Indices',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 166,
      //               TestId: null,
      //               Name: 'Conners 3 ADHD Index',
      //               Abbreviation: null,
      //               Description:
      //                 'Features that are commonly seen in youth with inattention, hyperactivity, and/or impulsivity',
      //               ParentScaleTitleId: 38,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 39,
      //           ParentScaleName: 'Screener Items',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 644,
      //               TestId: null,
      //               Name: 'Anxiety',
      //               Abbreviation: null,
      //               Description: 'Items that relate to generalized worrying',
      //               ParentScaleTitleId: 39,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 167,
      //               TestId: null,
      //               Name: 'Depression',
      //               Abbreviation: null,
      //               Description: 'Items that reflect key clinical presentations of depression',
      //               ParentScaleTitleId: 39,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 40,
      //           ParentScaleName: 'Critical Items',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 168,
      //               TestId: null,
      //               Name: 'Severe Conduct',
      //               Abbreviation: null,
      //               Description:
      //                 'Items that represent severe misconduct (e.g., fire-setting, cruelty to animals, use of weapons) that require immediate investigation, and include behaviors that may predict future violence or harm to others.',
      //               ParentScaleTitleId: 40,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 41,
      //           ParentScaleName: 'Validity Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 169,
      //               TestId: null,
      //               Name: 'Positive Impression',
      //               Abbreviation: null,
      //               Description:
      //                 'Items rated extremely positively, and are in most cases unrealistic. Often indicates an overly positive description of youth’s behavior, but can also be the result of:<ul>  <li>Rater has a tendency to forget positive traits and remember negative ones</li>  <li>Rater completed the Conners 3 erroneously, such as comparing self to another who has more difficulty (e.g., a quiet student in a class of troublemakers or a youth whose sibling shows severe clinical symptoms) rather than thinking of behavior independently of any other youth’s behavior.</li>  <li>Youth may be trying to please the examiner or other adults by responding in a socially desirable manner</li>  <li>Youth may be in denial of symptoms, lack awareness of problems, or have secondary motivations (e.g., avoiding social stigma of a label or evading special school services)</li></ul>',
      //               ParentScaleTitleId: 41,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 170,
      //               TestId: null,
      //               Name: 'Negative Impression',
      //               Abbreviation: null,
      //               Description:
      //                 'A set of items that describe extremely negative behaviors that are unlikely to be true all the time. Often indicates an overly negative description of the youth’s behavior, but can also be the result of:<ul>  <li>The youth really does misbehave most of the time, as seen in some severe clinical cases</li>  <li>There may be some variables that negatively impact the youth’s functioning in a particular setting (e.g., a student with a math disorder may show worse behavior in math class than in art class)</li>  <li>The rater may have very high standards that are difficult for the youth to meet</li>  <li>The rater may be highly motivated to describe the youth as problematic in order to obtain services or shift the youth to another placement</li>  <li>The rater may be erroneously comparing the youth to others who are older or who are exceptionally well-behaved. </li>  <li>May be seeking help, finding daily life to be a severe struggle and feeling that nobody is aware of his/her difficulties</li>  <li>Secondary motivations, such as obtaining special attention from teachers or parents.</li></ul>',
      //               ParentScaleTitleId: 41,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 171,
      //               TestId: null,
      //               Name: 'Inconsistency Index',
      //               Abbreviation: null,
      //               Description:
      //                 'Based on responses to pairs of items that tend to be rated similarly. When there is inconsistency in responses to similar items, this suggests that scores may not accurately reflect the individual due to a careless or unusual response to some items. Random responding, variable attention, or comprehension difficulties can contribute to this.',
      //               ParentScaleTitleId: 41,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //       ],
      //     },
      //   ],
      //   TestScoringTableDetails: null,
      // },
      // {
      //   Id: 8,
      //   Name: 'Delis-Kaplan Executive Function System',
      //   Abbreviation: 'D-KEFS',
      //   Descriptions:
      //     'Delis-Kaplan Executive Function System is a comprehensive assessment of higher-level cognitive functions—such as attention, language, and perception—in both children and adults (ages 8:0-89:0 years). The D-KEFS consists of nine tests that measure a wide spectrum of verbal and nonverbal executive functions. Each test is designed to be a standalone instrument that can be administered individually or along with other D-KEFS tests. The selection of tests to be administered depends on the assessment needs of the specific examinee or the time constraints on the examiner.',
      //   DomainId: 2,
      //   DomainName: 'Attention & Executive Function',
      //   SubTestType: 'Subtest',
      //   ScoreType: 'Score',
      //   DescriptionType: 'Description',
      //   CreatedDate: '2018-09-24T12:00:11.3',
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [
      //     {
      //       Id: 206,
      //       TestId: 8,
      //       Name: 'Trail Making Test',
      //       Abbreviation: null,
      //       Description:
      //         'This test consists of five conditions. The primary executive-function task is the Number-Letter Switching condition, a visual-motor sequencing procedure, which is a measure of flexibility of thinking. The other four conditions allow the examiner to evaluate several key component processes needed to perform the switching task. These fundamental components include visual scanning, number sequencing, letter sequencing, and motor speed in drawing lines.',
      //       ParentScaleTitleId: null,
      //       CreatedDate: null,
      //     },
      //     {
      //       Id: 207,
      //       TestId: 8,
      //       Name: 'Verbal Fluency Test',
      //       Abbreviation: null,
      //       Description:
      //         'This test is composed of three conditions: <ul>  <li>Letter Fluency: the examinee is asked to say words that begin with a specified letter as quickly as possible in three trials of 60 seconds each<ul><li>Taps the individual’s ability to generate words fluently in an effortful, phonetic format</li></ul></li><li>Category Fluency: the examinee is asked to say words that belong to a designated semantic category as quickly as possible in two trials of 60 seconds each<ul><li>Taps the individual’s ability to generate words fluently from overlearned concepts</li></ul></li> <li>Category Switching: evaluates the examinee’s ability to alternate between saying words from two different semantic categories as quickly as possible for 60 seconds  <ul><li>Taps the individual’s ability to generate words fluently while simultaneously shifting between overlearned concepts</li></ul></li>',
      //       ParentScaleTitleId: null,
      //       CreatedDate: null,
      //     },
      //     {
      //       Id: 208,
      //       TestId: 8,
      //       Name: 'Design Fluency Test',
      //       Abbreviation: null,
      //       Description:
      //         'This test is composed of three conditions. For each condition, the examinee is presented rows of boxes each containing an array of dots that the examinee must connect, with four lines only, to make a different design.<ul>  <li>Condition 1: Filled dots  <ul><li>Each response box contains five filled dots, and the examinee is asked to draw as many designs as possible in 60 seconds, by connecting these dots</li>  <li>Provides a basic test of design fluency</li></ul></li>  <li>Condition 2: Empty Dots Only  <ul><li>Each response box contains five filled dots and five unfilled (empty) dots. The examinee is required to inhibit connecting the filled dots and to connect only the unfilled dots in 60 seconds</li>  <li>Measures both design fluency and response inhibition</li></ul></li>  <li>Condition 3: Switching  <ul><li>The examinee is again presented with response boxes that contain both filled and unfilled dots, and is asked to draw the designs by alternating connections between filled and unfilled dots </li>  <li>Taps both design fluency and cognitive flexibility </li></ul></li></ul>',
      //       ParentScaleTitleId: null,
      //       CreatedDate: null,
      //     },
      //     {
      //       Id: 209,
      //       TestId: 8,
      //       Name: 'Color-Word Interference Test',
      //       Abbreviation: null,
      //       Description:
      //         'This test measures the examinee’s ability to inhibit a more automatic verbal response (reading) in order to generate a conflicting response of naming a dissonant ink color. Another condition requires the examinee to switch back and forth between naming the dissonant ink colors and reading the conflicting words. This condition is a measure of both inhibition and cognitive flexibility.',
      //       ParentScaleTitleId: null,
      //       CreatedDate: null,
      //     },
      //     {
      //       Id: 210,
      //       TestId: 8,
      //       Name: 'Sorting Test',
      //       Abbreviation: null,
      //       Description:
      //         'This tests consists of two conditions:  <ul><li>Free Sorting: the examinee is presented six mixed-up cards that display both perceptual features and printed words. The examinee is asked to sort the cards into two groups, with three cards per group, according to as many different concepts or rules as possible, and to describe the concepts employed to generate each sort. Each of the two card sets has a maximum of eight target sorts: three sorts based on verbal-semantic information from the printed words and five based on visual-spatial features or patterns on the cards. This provides a window into their ability to initiate problem-solving behavior</li>  <li>Sort Recognition: the examiner sorts the same sets of cards into two groups, with three cards per group, according to eight target sorts. After each sort is made by the examiner, the examinee attempts to identify and describe the correct rules or concepts used to generate the sort. This provides a window into their conceptual-reasoning skills. </li></ul>',
      //       ParentScaleTitleId: null,
      //       CreatedDate: null,
      //     },
      //     {
      //       Id: 211,
      //       TestId: 8,
      //       Name: 'Twenty Questions Test',
      //       Abbreviation: null,
      //       Description:
      //         'On this test, the examinee is presented with a stimulus page depicting pictures of 30 common objects. The examinee tried to ask the fewest number of yes/no questions in order to identify the unknown target object. Executive functions tapped by this test include the individual’s ability to identify the various categories and subcategories represented in the 30 objects and to formulate abstract, yes/no questions that eliminate the maximum number of objects regardless of the examiner’s answer.',
      //       ParentScaleTitleId: null,
      //       CreatedDate: null,
      //     },
      //     {
      //       Id: 212,
      //       TestId: 8,
      //       Name: 'Word Context Test',
      //       Abbreviation: null,
      //       Description:
      //         'The examinee’s main task in this test is to discover the meaning of made-up or mystery words based on clues given in sentences. For each mystery word, the examinee is shown five sentences (clues) that help him or her to decode the meaning of the word. With each new clue-sentence for the word, previously presented sentences are also displayed. The first sentence for each word provides only vague or general clues about the mystery word’s meaning. Each subsequent clue sentence provides progressively more detailed information. The examinee tries to decode the mystery word with as few clue sentences as possible and is asked to continue reporting the correct response to the remaining clue sentences of each item. This test is a means of evaluating executive functions in the verbal modality and assessing skills such as deductive reasoning, integration of multiple bits of information, hypothesis testing, and flexibility of thinking.',
      //       ParentScaleTitleId: null,
      //       CreatedDate: null,
      //     },
      //     {
      //       Id: 213,
      //       TestId: 8,
      //       Name: 'Tower Test',
      //       Abbreviation: null,
      //       Description:
      //         'The materials for this test include five disks that vary is size from small to large and a board with three vertical pegs. Each item begins by the examiner’s placing from two to five disks on the pegs in a predetermined starting position and displaying a picture of the tower to be built (i.e., the ending position). The examinee’s task is to move the disks across the three pegs to build the target tower in the fewest number of moves possible. In constructing the target towers, the examinee must follow two rules: (a) to move only one disk at a time and (b) never to place a larger disk over a smaller disk. Process measures include first-move completion time, total number of moves, item-completion time, final achievement (correct or incorrect tower), and number of rule violations. This test measures spatial planning, rule learning, inhibition of impulsive responding, inhibition of perseverative responding, and establishing and maintaining the instructional set.',
      //       ParentScaleTitleId: null,
      //       CreatedDate: null,
      //     },
      //     {
      //       Id: 214,
      //       TestId: 8,
      //       Name: 'Proverb Test',
      //       Abbreviation: null,
      //       Description:
      //         'In this test, proverbs are used as a means of assessing the nature of an individual’s verbal abstraction skills. The test consists of eight sayings that are presented in two conditions: Free Inquiry and Multiple Choice. For the Free Inquiry condition, the proverbs are read individually to examinees, who attempt to interpret them orally without assistance or cues. For the Multiple Choice condition, the same eight proverbs are presented individually along with four alternative interpretations from which the examinee must select the best one. The set of multiple-choice response alternatives for each proverb consists of (a) a correct abstract interpretation; (b) a correct concrete interpretation; (c) an incorrect, phonemically similar response, and (d) an unrelated saying. This task is designed for adolescents and adults aged 16-89.',
      //       ParentScaleTitleId: null,
      //       CreatedDate: null,
      //     },
      //   ],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null,
      // },
      // {
      //   Id: 10,
      //   Name: 'Repeatable Battery for the Assessment of Neuropsychological Status',
      //   Abbreviation: 'RBANS',
      //   Descriptions:
      //     'The Repeatable Battery for the Assessment of Neuropsychological Status measures attention, language, visuospatial/constructional abilities, and immediate and delayed memory.',
      //   DomainId: 2,
      //   DomainName: 'Attention & Executive Function',
      //   SubTestType: 'Subtest',
      //   ScoreType: 'Score',
      //   DescriptionType: 'Description',
      //   CreatedDate: '2018-09-25T13:38:35.09',
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [
      //     {
      //       Id: 9,
      //       ParentGroupSubScaleName: 'INDEX',
      //       ParentGroupScaleId: null,
      //       ParentScaleTitles: [
      //         {
      //           Id: 47,
      //           ParentScaleName: 'Immediate Memory',
      //           ParentScaleDescription:
      //             'measures initial encoding and learning of complex and simple verbal information. Indicates the examinee’s ability to remember information immediately after it is presented.',
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 221,
      //               TestId: null,
      //               Name: 'List Learning',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures rote verbal memory functioning. A list of 10 semantically unrelated words is orally presented, and the examinee is asked to recall as many words as he or she can. This process is repeated over 4 learning trials.',
      //               ParentScaleTitleId: 47,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 222,
      //               TestId: null,
      //               Name: 'Story Memory',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures memory for conceptually related, meaningful verbal information. A short story is orally presented, and the examinee is asked to retell the story from memory. The same story is presented a second time, and the examinee is again asked to retell the story from memory.',
      //               ParentScaleTitleId: 47,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 48,
      //           ParentScaleName: 'Visuospatial Constructional',
      //           ParentScaleDescription:
      //             'measures basic visuospatial perception and the ability to copy a design from a model. Indicates examinee’s ability to perceive spatial relations and to construct a spatially accurate copy of a drawing.',
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 223,
      //               TestId: null,
      //               Name: 'Figure Copy',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures visuospatial reasoning, attention to visual details, motor programming, organization, and fine-motor ability. The examinee is shown a multipart geometric drawing and is asked to make an exact copy while the drawing remains on display.',
      //               ParentScaleTitleId: 48,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 224,
      //               TestId: null,
      //               Name: 'Line Orientation',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures the ability to correctly identify spatial orientation of lines in two-dimensions. The examinee is presented with a drawing that consists of 13 equal lines radiating out from a single point to form a semicircular fan-shaped pattern. All lines are numbered (1-13). Below this drawing are two lines that match two of the lines from the array above. The examinee is asked to identify which two lines they match. Ten trials are given, with different sets of test lines on each trial.',
      //               ParentScaleTitleId: 48,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 49,
      //           ParentScaleName: 'Language',
      //           ParentScaleDescription:
      //             'measures expressive language functioning. Indicates the examinee’s ability to respond verbally to either naming or retrieving learned material.',
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 225,
      //               TestId: null,
      //               Name: 'Picture Naming',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures confrontation naming skills. The examinee is presented with a series of pictured objects and is asked to name each one. A semantic cue is provided only if an object is obviously misperceived.',
      //               ParentScaleTitleId: 49,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 226,
      //               TestId: null,
      //               Name: 'Semantic Fluency',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures the examinee’s ability to retrieve and express words using a semantic prompt. The examinee is given one minute to name as many exemplars as possible from a given semantic category (fruits and vegetables on Form A, animals found in a zoo on Form B).',
      //               ParentScaleTitleId: 49,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 50,
      //           ParentScaleName: 'Attention',
      //           ParentScaleDescription:
      //             'measures simple auditory registration, visual scanning, and processing speed. Indicates the examinee’s capacity to remember and manipulate both visually and orally presented information in short-term memory storage.',
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 227,
      //               TestId: null,
      //               Name: 'Digit Span',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures auditory registration and brief focused attention.  The examiner reads a string of digits and asks the examinee to repeat the digits in the same order. The length of the digit string increases by one on each trial.',
      //               ParentScaleTitleId: 50,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 228,
      //               TestId: null,
      //               Name: 'Coding',
      //               Abbreviation: null,
      //               Description:
      //                 'Is a measure of brief, focused, visual attentions, visual scanning, and processing speed. The examinee is presented a page filled with rows of boxes with a number from 1-9 above each box (in random sequence), and a blank space below the number. At the top of the page is a key with a unique, simple, geometric shape beneath each of the numbers, 1 through 9. Using the key, the examinee is asked to fill in the number corresponding to each shape, for as many boxes as the examinee can complete in 90 seconds.',
      //               ParentScaleTitleId: 50,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 51,
      //           ParentScaleName: 'Delayed Memory',
      //           ParentScaleDescription:
      //             'measures of delayed recall and recognition for verbal and visual information. Indicates the examinee’s anterograde memory capacity.',
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 229,
      //               TestId: null,
      //               Name: 'List Recall',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures delayed recall for unrelated verbal information, and long-term verbal memory encoding and retrieval. The examinee is asked to recall the list of 10 words learned in the List Learning subtest.',
      //               ParentScaleTitleId: 51,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 230,
      //               TestId: null,
      //               Name: 'List Recognition',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures delayed recognition memory for unrelated verbal information, and long-term verbal memory encoding and retrieval. The examinee is read 20 words (10 targets, 10 distractors) and asked to indicate whether each word was on the word list.',
      //               ParentScaleTitleId: 51,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 231,
      //               TestId: null,
      //               Name: 'Story Recall',
      //               Abbreviation: null,
      //               Description:
      //                 'Measured delayed recall for conceptually related verbal information, and long-term verbal memory encoding and retrieval for related information. The examinee is asked to retell the story they learned earlier.',
      //               ParentScaleTitleId: 51,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 232,
      //               TestId: null,
      //               Name: 'Figure Recall',
      //               Abbreviation: null,
      //               Description:
      //                 'Measured delayed free recall for conceptually related visuospatial and detail information. The examinee is asked to draw the figure shown earlier from memory.',
      //               ParentScaleTitleId: 51,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //       ],
      //     },
      //   ],
      //   TestScoringTableDetails: null,
      // },
      // {
      //   Id: 24,
      //   Name: "A Developmental Neuropsychological Assessment - Second Edition",
      //   Abbreviation: "NEPSY-II",
      //   Descriptions:
      //     "A Developmental Neuropsychological Assessment - Second Edition is a comprehensive instrument designed to assess neuropsychological development in preschool and school-age children. The NEPSY-II is designed to provide an assessment centered on specific diagnostic or referral questions and to allow for extended testing to provide more detailed or comprehensive information regarding the child’s neuropsychological functioning.",
      //   DomainId: 2,
      //   DomainName: "Attention & Executive Function",
      //   SubTestType: "Subtest",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-11-05T12:23:59.007",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [
      //     {
      //       Id: 128,
      //       ParentScaleName: "Attention and Executive Functioning",
      //       ParentScaleDescription:
      //         "Attention and executive functions are multidimensional concepts that contain several related processes. Both concepts require self-regulatory skills and have some common subprocesses.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 557,
      //           TestId: null,
      //           Name: "Animal Sorting (AS)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess the ability to formulate basic concepts, to transfer those concepts into action (sort into categories), and to shift set from one concept to another.",
      //           ParentScaleTitleId: 128,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 558,
      //           TestId: null,
      //           Name: "Auditory Attention (AA) and Response Set (RS)",
      //           Abbreviation: null,
      //           Description:
      //             "Auditory Attention is designed to assess selective auditory attention and the ability to sustain it (vigilance).Response Set is designed to assess the ability to shift and maintain a new and complex set involving both inhibition of previously learned responses and correctly responding to matching or contrasting stimuli.",
      //           ParentScaleTitleId: 128,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 559,
      //           TestId: null,
      //           Name: "Clocks (CL)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess planning and organization, visuoperceptual and visuospatial skills, and the concept of time in relation to analog clocks.",
      //           ParentScaleTitleId: 128,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 560,
      //           TestId: null,
      //           Name: "Design Fluency (DF)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess the behavioral productivity in the child’s ability to generate unique designs.",
      //           ParentScaleTitleId: 128,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 561,
      //           TestId: null,
      //           Name: "Inhibition (IN)",
      //           Abbreviation: null,
      //           Description:
      //             "This timed subtest is designed to assess the ability to inhibit automatic responses in favor of novel responses and the ability to switch between response types.",
      //           ParentScaleTitleId: 128,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 562,
      //           TestId: null,
      //           Name: "Statue (ST)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess motor persistence and inhibition.",
      //           ParentScaleTitleId: 128,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 129,
      //       ParentScaleName: "Language",
      //       ParentScaleDescription:
      //         "Language skills is the idea of input and output functions, that is, receptive and expressive skills. Receptive skills refer to the comprehension and decoding of speech. Expressive skills refer to language production.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 563,
      //           TestId: null,
      //           Name: "Body Part Naming (BPN) and Identification (BPI)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess confrontation naming and name recognition, basic components of expressive and receptive language.",
      //           ParentScaleTitleId: 129,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 564,
      //           TestId: null,
      //           Name: "Comprehension of Instructions (CI)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess the ability to receive, process, and execute oral instructions of increasing syntactic complexity.",
      //           ParentScaleTitleId: 129,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 565,
      //           TestId: null,
      //           Name: "Oromotor Sequences (OS)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess Oromotor coordination.",
      //           ParentScaleTitleId: 129,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 566,
      //           TestId: null,
      //           Name: "Phonological Processing (PH)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is composed of two phonological processing tasks designed to assess phonemic awareness. <b>Word Segment Recognition</b> requires identification of words from word segments. <b>Phonological Segmentation</b> is a test of elision. It is designed to assess phonological processing at the level of word segments (syllables) and of letter sounds (phonemes).",
      //           ParentScaleTitleId: 129,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 567,
      //           TestId: null,
      //           Name: "Repetition Nonsense Words (RN)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess phonological encoding and decoding.",
      //           ParentScaleTitleId: 129,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 568,
      //           TestId: null,
      //           Name: "Speeded Naming (SN)",
      //           Abbreviation: null,
      //           Description:
      //             "This timed subtest is designed to assess rapid semantic access to and production of names of colors, shapes, sizes, letters, or numbers.",
      //           ParentScaleTitleId: 129,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 569,
      //           TestId: null,
      //           Name: "Word Generation (WG)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess verbal productivity through the ability to generate words within specific semantic and initial letter categories.",
      //           ParentScaleTitleId: 129,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 130,
      //       ParentScaleName: "Memory and Learning",
      //       ParentScaleDescription:
      //         "In this manual, the term learning refers to the acquisition of new information. Learning, as used here, is more general than is applied to the concept of a learning disability as it is not limited to the acquisition of new academic skills. Memory, as used here, is a more technical term describing the particular forms of acquisition and retrieval.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 571,
      //           TestId: null,
      //           Name: "List Memory (LM) List Memory Delayed (LMD)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess verbal learning and memory, rate of learning, and the role of interference in recall for verbal material.",
      //           ParentScaleTitleId: 130,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 572,
      //           TestId: null,
      //           Name:
      //             "Memory for Designs (MD) Memory for Designs Delayed (MDD)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess spatial memory for novel visual material.",
      //           ParentScaleTitleId: 130,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 573,
      //           TestId: null,
      //           Name: "Memory for Faces (MF) Memory for Faces Delayed (MFD)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess encoding of facial features, as well as face discrimination and recognition.",
      //           ParentScaleTitleId: 130,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 574,
      //           TestId: null,
      //           Name: "Memory for Names (MN) Memory for Names Delayed (MND)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess the ability to learn the names of children over three trials.",
      //           ParentScaleTitleId: 130,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 575,
      //           TestId: null,
      //           Name: "Narrative Memory (NM)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess memory for organized verbal material under free recall, cued, recall, and recognition conditions.",
      //           ParentScaleTitleId: 130,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 576,
      //           TestId: null,
      //           Name: "Sentence Repetition (SR)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess the ability to repeat sentences of increasing complexity and length.",
      //           ParentScaleTitleId: 130,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 577,
      //           TestId: null,
      //           Name: "Word List Interference (WI)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess verbal working memory, repetition, and word recall following interference.",
      //           ParentScaleTitleId: 130,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 131,
      //       ParentScaleName: "Sensorimotor",
      //       ParentScaleDescription:
      //         "Sensorimotor functioning refers to the fact that motor control requires neural circuits connecting the motor guidance with sensory (e.g., kinesthetic, tactile, and visual) feedback.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 578,
      //           TestId: null,
      //           Name: "Fingertip Tapping (FT)",
      //           Abbreviation: null,
      //           Description:
      //             "This timed subtest has two parts. The first part is designed to assess the child’s finger dexterity and motor speed. The second part is used to assess rapid motor programming.",
      //           ParentScaleTitleId: 131,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 579,
      //           TestId: null,
      //           Name: "Imitating Hand Positions (IH)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess the ability to imitate hand/finger positions.",
      //           ParentScaleTitleId: 131,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 580,
      //           TestId: null,
      //           Name: "Manual Motor Sequences (MM)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess the ability to imitate a series of rhythmic movement sequences using one or both hands.",
      //           ParentScaleTitleId: 131,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 581,
      //           TestId: null,
      //           Name: "Visuomotor Precision (VP)",
      //           Abbreviation: null,
      //           Description:
      //             "This timed subtest is designed to assess graphomotor speed and accuracy.",
      //           ParentScaleTitleId: 131,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 132,
      //       ParentScaleName: "Social Perception",
      //       ParentScaleDescription:
      //         "The subcomponents of social perception assessed include facial affect recognition and the ability to comprehend others perspectives, intentions, and beliefs (i.e., theory of mind)",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 582,
      //           TestId: null,
      //           Name: "Affect Recognition (AR)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess the ability to recognize affect (happy, sad, anger, fear, disgust, and neutral) from photographs.",
      //           ParentScaleTitleId: 132,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 583,
      //           TestId: null,
      //           Name: "Theory of Mind (TM)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess the ability to understand mental functions such as belief, intention, deception, emotion, imagination, and pretending, as well as the ability to understand that others have their own thoughts, ideas, and feelings that may be different from one’s own and the ability to understand how emotion relates to social context and to recognize the appropriate affect given various social contexts.",
      //           ParentScaleTitleId: 132,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 133,
      //       ParentScaleName: "Visuospatial Processing",
      //       ParentScaleDescription:
      //         "The subcomponents of visuospatial processing that are assessed include the ability to judge line.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 584,
      //           TestId: null,
      //           Name: "Arrows (AW)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess the ability to judge line orientation.",
      //           ParentScaleTitleId: 133,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 585,
      //           TestId: null,
      //           Name: "Block Construction (BC)",
      //           Abbreviation: null,
      //           Description:
      //             "This timed subtest is designed to assess the visuospatial and visuomotor ability to reproduce three-dimensional constructions from models or from two-dimensional drawings.",
      //           ParentScaleTitleId: 133,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 586,
      //           TestId: null,
      //           Name: "Design Copying (DC)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess motor and visual-perceptual skills associated with the ability to copy two-dimensional geometric figures.",
      //           ParentScaleTitleId: 133,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 587,
      //           TestId: null,
      //           Name: "Geometric Puzzles (GP)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess mental rotation, visuospatial analysis, and attention to detail.",
      //           ParentScaleTitleId: 133,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 588,
      //           TestId: null,
      //           Name: "Picture Puzzles (PP)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess discrimination, spatial localization, and visual scanning, as well as the ability to deconstruct a picture into its constituent parts and recognize part-whole relationships.",
      //           ParentScaleTitleId: 133,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 589,
      //           TestId: null,
      //           Name: "Route Finding (RF)",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to assess knowledge of visual spatial relations and directionality, as well as the ability to use this knowledge to transfer a route from a simple schematic map to a more complex one.",
      //           ParentScaleTitleId: 133,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 28,
      //   Name: "QIK Continuous Performance Test",
      //   Abbreviation: "QIK CPT",
      //   Descriptions:
      //     "QIK Continuous Performance Test is a digital continuous performance test that measures an individual's attention, impulsivity, response time, and variability in their performance. In general, continuous performance tasks assess one’s ability to sustain attention over time. (Client) was asked to press a button following the presentation of a target symbol and to inhibit (his/her) response when presented with a distractor symbol.",
      //   DomainId: 2,
      //   DomainName: "Attention & Executive Function",
      //   SubTestType: null,
      //   ScoreType: null,
      //   DescriptionType: null,
      //   CreatedDate: "2018-12-08T18:26:51.92",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: [
      //     {
      //       Id: 7,
      //       Name: "QIK Continuous Performance Test",
      //       Description: null,
      //       TestId: 28,
      //       ScoreHeader: null,
      //       TableHeaderRowTitles: {
      //         Id: 45,
      //         Col1: "Accuracy Index",
      //         Col2: "Sustained Attention",
      //         Col3: "Impulse Control",
      //         Col4: "Performance Index",
      //         Col5: "Speed of Response",
      //         Col6: "Consistency of Response",
      //         Description: null,
      //         ScoringTableHeaderId: 7,
      //         OrderNumber: 1,
      //         IsHeader: true,
      //         IsEditable: false
      //       },
      //       TestScoringTableScores: [
      //         {
      //           Id: 46,
      //           Col1: "<Field>",
      //           Col2: "<Field>",
      //           Col3: "<Field>",
      //           Col4: "<Field>",
      //           Col5: "<Field>",
      //           Col6: "<Field>",
      //           Description: null,
      //           ScoringTableHeaderId: 7,
      //           OrderNumber: 1,
      //           IsHeader: false,
      //           IsEditable: false
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   Id: 11,
      //   Name: "Vineland 2",
      //   Abbreviation: "Vineland-II",
      //   Descriptions:
      //     "Vineland-II is an individually administered measure of adaptive behavior for ages birth through 90.",
      //   DomainId: 3,
      //   DomainName: "Adaptive Function",
      //   SubTestType: "Subdomain",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-09-25T14:03:23.91",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [
      //     {
      //       Id: 52,
      //       ParentScaleName: "Communication Domain",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 233,
      //           TestId: null,
      //           Name: "Receptive",
      //           Abbreviation: null,
      //           Description:
      //             "How the individual listens and pays attention, and what he or she understands",
      //           ParentScaleTitleId: 52,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 234,
      //           TestId: null,
      //           Name: "Expressive",
      //           Abbreviation: null,
      //           Description:
      //             "What the individual says, how he or she uses words and sentences to gather and provide information",
      //           ParentScaleTitleId: 52,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 235,
      //           TestId: null,
      //           Name: "Written",
      //           Abbreviation: null,
      //           Description:
      //             "What the individual understands about how letters make words, and what he or she reads and writes",
      //           ParentScaleTitleId: 52,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 53,
      //       ParentScaleName: "Daily Living Skills Domain",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 236,
      //           TestId: null,
      //           Name: "Personal",
      //           Abbreviation: null,
      //           Description:
      //             "How the individual eats, dresses, and practices personal hygiene",
      //           ParentScaleTitleId: 53,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 237,
      //           TestId: null,
      //           Name: "Domestic",
      //           Abbreviation: null,
      //           Description: "What household tasks the individual performs",
      //           ParentScaleTitleId: 53,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 238,
      //           TestId: null,
      //           Name: "Community",
      //           Abbreviation: null,
      //           Description:
      //             "How the individual uses time, money, the telephone, the computer, and job skills",
      //           ParentScaleTitleId: 53,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 54,
      //       ParentScaleName: "Socialization Domain",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 239,
      //           TestId: null,
      //           Name: "Interpersonal Relationships",
      //           Abbreviation: null,
      //           Description: "How the individual interacts with others",
      //           ParentScaleTitleId: 54,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 240,
      //           TestId: null,
      //           Name: "Play and Leisure Time",
      //           Abbreviation: null,
      //           Description: "How the individual plays and uses leisure time",
      //           ParentScaleTitleId: 54,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 241,
      //           TestId: null,
      //           Name: "Coping Skills",
      //           Abbreviation: null,
      //           Description:
      //             "How the individual demonstrates responsibility and sensitivity to others",
      //           ParentScaleTitleId: 54,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 55,
      //       ParentScaleName: "Motor Skills Domain (only ages birth through 6)",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 242,
      //           TestId: null,
      //           Name: "Gross",
      //           Abbreviation: null,
      //           Description:
      //             "How the individual uses arms and legs for movement and coordination",
      //           ParentScaleTitleId: 55,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 243,
      //           TestId: null,
      //           Name: "Fine",
      //           Abbreviation: null,
      //           Description:
      //             "How the individual uses hands and fingers to manipulate objects",
      //           ParentScaleTitleId: 55,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 56,
      //       ParentScaleName: "Maladaptive Behavior Domain (OPTIONAL)",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 244,
      //           TestId: null,
      //           Name: "Maladaptive Behavior Index",
      //           Abbreviation: null,
      //           Description:
      //             "A composite of Internalizing, Externalizing, and Other types of undesirable behavior that may interfere with the individual’s adaptive functioning",
      //           ParentScaleTitleId: 56,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 245,
      //           TestId: null,
      //           Name: "Maladaptive Behavior Critical Items",
      //           Abbreviation: null,
      //           Description:
      //             "More severe maladaptive behaviors that may provide clinically important information",
      //           ParentScaleTitleId: 56,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 2,
      //   Name: 'The Autism Diagnostic Observation Schedule - Second Edition',
      //   Abbreviation: 'ADOS-2',
      //   Descriptions:
      //     'The Autism Diagnostic Observation Schedule - Second Edition is a semi-structured, standardized assessment of communication, social interaction, play/imaginative use of materials, and restricted and repetitive behaviors for individuals who have been referred because of possible autism spectrum disorders (ASD).',
      //   DomainId: 4,
      //   DomainName: 'Autism',
      //   SubTestType: 'Subtest',
      //   ScoreType: 'Score',
      //   DescriptionType: 'Description',
      //   CreatedDate: '2018-09-09T20:43:10.213',
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [
      //     {
      //       Id: 1,
      //       Name: 'Module 1',
      //       Descriptions:
      //         'is intended for children who do not consistently use phrase speech (i.e., the flexible use of non-echoed, three-word utterances that sometimes involve a verb and that are spontaneous, meaningful word combinations). Therefore, children receiving this module have speech abilities ranging from no speech at all up to and including the use of simple phrases. Module 1 is most appropriate for children aged 31 months and older.',
      //       ParentGroupScales: [
      //         {
      //           Id: 2,
      //           ParentGroupScaleName: 'Social Affect (SA)',
      //           Description: null,
      //           ParentGroupSubScales: [],
      //           ParentScaleTitles: [
      //             {
      //               Id: 6,
      //               ParentScaleName: 'Communication',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 17,
      //                   TestId: null,
      //                   Name: 'Frequency of Spontaneous Vocalization Directed to Others (A-2)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the amount of spontaneous socially directed vocalizations.',
      //                   ParentScaleTitleId: 6,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 18,
      //                   TestId: null,
      //                   Name: 'Pointing (A-7)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on socially purposeful, visually directed pointing, which includes pointing for the purpose of requesting and/or for shared attention.',
      //                   ParentScaleTitleId: 6,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 19,
      //                   TestId: null,
      //                   Name: 'Gestures (A-8)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This item pertains to the use of any kind of gesture other than pointing. Gestures may be conventional or idiosyncratic, but they must be communicative and cannot involve moving someone else’s body or touching/holding an object. Mannerisms are not included.',
      //                   ParentScaleTitleId: 6,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 7,
      //               ParentScaleName: 'Reciprocal Social Interaction',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 20,
      //                   TestId: null,
      //                   Name: 'Unusual Eye Contact (B-1)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on clear, flexible, socially modulated, and appropriate gaze that is used for a variety of purposes. This is in contrast to gaze that is limited in flexibility, appropriateness, or contexts.',
      //                   ParentScaleTitleId: 7,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 21,
      //                   TestId: null,
      //                   Name: 'Facial Expressions Directed to Others (B-3)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on whether the child’s facial expressions are directed to another person for the purpose of communicating affective (e.g., enjoyment, frustration) or cognitive (e.g., puzzlement, skepticism) sates. Facial expressions that are directed to objects or that are undirected are not evaluated here.',
      //                   ParentScaleTitleId: 7,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 22,
      //                   TestId: null,
      //                   Name: 'Integration of Gaze and Other Behaviors During Social Overtures (B-4)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the quality of the child’s attempts to initiate interaction, particularly the integration of gaze with other behaviors, not the frequency of initiations.',
      //                   ParentScaleTitleId: 7,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 23,
      //                   TestId: null,
      //                   Name: 'Shared Enjoyment in Interaction (B-5)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the child’s directed pleasure during any of the activities or presses. It does not indicate his or her general emotional state during the evaluation and applies to the child’s ability to indicate pleasure to the examiner, not just to interact or respond.',
      //                   ParentScaleTitleId: 7,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 24,
      //                   TestId: null,
      //                   Name: 'Showing (B-9)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'Showing is defined as deliberately orienting or placing an object where it can be seen by another person with no identifiable purpose of getting help or participating in a routine. This must be accompanied by eye contact, but vocalization is not required.',
      //                   ParentScaleTitleId: 7,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 25,
      //                   TestId: null,
      //                   Name: 'Spontaneous Initiation of Joint Attention (B-10)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the child’s attempts to draw another person’s attention to objects that neither of them is touching and are clearly out of reach. This does not include such attempts if they are for the purpose of requesting.',
      //                   ParentScaleTitleId: 7,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 26,
      //                   TestId: null,
      //                   Name: 'Response to Joint Attention (B-11)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the child’s response to the examiner’s use of gaze and/or pointing to direct the child’s attention to a distant object.',
      //                   ParentScaleTitleId: 7,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 27,
      //                   TestId: null,
      //                   Name: 'Quality of Social Overtures (B-12)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This is a summary item that focuses on the quality of the child’s attempts to initiate social interaction, not on the frequency of such attempts.',
      //                   ParentScaleTitleId: 7,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //         {
      //           Id: 3,
      //           ParentGroupScaleName: 'Restricted and Repetitive Behavior (RRB)',
      //           Description: null,
      //           ParentGroupSubScales: [],
      //           ParentScaleTitles: [
      //             {
      //               Id: 8,
      //               ParentScaleName: 'Restricted and Repetitive Behaviors',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 28,
      //                   TestId: null,
      //                   Name: 'Intonation of Vocalizations or Verbalizations (A-3)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This is a general item that applies to all vocalizations or verbalizations, including crying and whining.',
      //                   ParentScaleTitleId: 8,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 29,
      //                   TestId: null,
      //                   Name: 'Stereotyped/Idiosyncratic Use of Words or Phrases (A-5)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the stereotyped or idiosyncratic quality of the phrasing, unusual use of words or formation of utterances, and/or their arbitrary association with a particular meaning.',
      //                   ParentScaleTitleId: 8,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 30,
      //                   TestId: null,
      //                   Name: 'Unusual Sensory Interest in Play Material/Person (D-1)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the child’s interest in or unusual behaviors associated with sensory aspects of toys or surroundings (e.g., sniffing, repetitive feeling of texture, licking, mouthing, or biting, unusually strong interest in the repetition of certain sounds, unusual or prolonged visual examination).',
      //                   ParentScaleTitleId: 8,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 31,
      //                   TestId: null,
      //                   Name: 'Hand and Finger and Other Complex Mannerisms (D-2)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on unusual and/or repetitive movements or posturing of the hands and fingers, arms, or body. This does not include repetitive clapping, finger tapping, nail biting, hair twisting, and thumb sucking.',
      //                   ParentScaleTitleId: 8,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 32,
      //                   TestId: null,
      //                   Name: 'Unusually Repetitive Interests or Stereotyped Behaviors (D-4)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on any unusually repetitive interests or stereotyped behaviors, including preoccupation with unusual activities or objects, repetitive nonfunctional use of toys, repetitive actions, and insistence on having the parent/caregiver or examiner act in a specific way.',
      //                   ParentScaleTitleId: 8,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       Id: 2,
      //       Name: 'Module 2',
      //       Descriptions:
      //         'is intended for children of any age who use phrase speech (i.e., the flexible use of non-echoed, three-word utterances that sometimes involve a verb and that are spontaneous, meaningful word combinations) but who are not yet verbally fluent (i.e., producing a range of flexible sentence types, providing language beyond the immediate context, and describing logical connections within a sentence).',
      //       ParentGroupScales: [
      //         {
      //           Id: 4,
      //           ParentGroupScaleName: 'Social Affect (SA)',
      //           Description: null,
      //           ParentGroupSubScales: [],
      //           ParentScaleTitles: [
      //             {
      //               Id: 9,
      //               ParentScaleName: 'Communication',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 33,
      //                   TestId: null,
      //                   Name: 'Pointing (A-6)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on social purposeful, visually directed pointing primarily to express interest (rather than to request).',
      //                   ParentScaleTitleId: 9,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 34,
      //                   TestId: null,
      //                   Name: 'Descriptive, Conventional, Instrumental, or Informational Gestures (A-7)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on descriptive gestures that enact or represent an object or event (such as acting out rinsing a toothbrush or showing how a roller coaster curves through the air).',
      //                   ParentScaleTitleId: 9,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 10,
      //               ParentScaleName: 'Reciprocal Social Interaction',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 35,
      //                   TestId: null,
      //                   Name: 'Unusual Eye Contact (B-1)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on clear, flexible, socially modulated, and appropriate gaze that is used for a variety of purposes. This is in contrast to gaze that is limited in flexibility, appropriateness, or contexts.',
      //                   ParentScaleTitleId: 10,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 36,
      //                   TestId: null,
      //                   Name: 'Facial Expressions Directed to Others (B-2)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on whether the child’s facial expressions are directed to another person for the purpose of communicating affective (e.g., enjoyment, frustration) or cognitive (e.g., puzzlement, skepticism) sates. Facial expressions that are directed to objects or that are undirected are not evaluated here.',
      //                   ParentScaleTitleId: 10,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 37,
      //                   TestId: null,
      //                   Name: 'Shared Enjoyment in Interaction (B-3)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the child’s directed pleasure during any of the activities or presses. It does not indicate his or her general emotional state during the evaluation and applies to the child’s ability to indicate pleasure to the examiner, not just to interact or respond.',
      //                   ParentScaleTitleId: 10,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 38,
      //                   TestId: null,
      //                   Name: 'Showing (B-5)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'Showing is defined as deliberately orienting or placing an object where it can be seen by another person with no identifiable purpose of getting help or participating in a routine. This must be accompanied by eye contact, but vocalization is not required.',
      //                   ParentScaleTitleId: 10,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 39,
      //                   TestId: null,
      //                   Name: 'Spontaneous Initiation of Joint Attention (B-6)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the child’s attempts to draw another person’s attention to objects that neither of them is touching and are clearly out of reach. This does not include such attempts if they are for the purpose of requesting.',
      //                   ParentScaleTitleId: 10,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 40,
      //                   TestId: null,
      //                   Name: 'Quality of Social Overtures (B-8)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This is a summary item that focuses on the quality of the child’s attempts to initiate social interaction with the examiner, not on the frequency of such attempts.',
      //                   ParentScaleTitleId: 10,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 41,
      //                   TestId: null,
      //                   Name: 'Amount of Reciprocal Social Communication (B-11)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the frequency with which reciprocal interchanges occur during the course of the ADOS-2 evaluation, using any mode of communication. Frequency here is defined both by absolute number of occurrences and distribution across a range of contexts.',
      //                   ParentScaleTitleId: 10,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 42,
      //                   TestId: null,
      //                   Name: 'Overall Quality of Rapport (B-12)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This item is a summary rating that reflects the examiner’s overall judgment of the rapport established with the child during the ADOS-2 evaluation. It particularly concerns the degree to which the examiner had to modify his or her own behavior to maintain the interaction successfully.',
      //                   ParentScaleTitleId: 10,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //         {
      //           Id: 5,
      //           ParentGroupScaleName: 'Restricted and Repetitive Behavior (RRB)',
      //           Description: null,
      //           ParentGroupSubScales: [],
      //           ParentScaleTitles: [
      //             {
      //               Id: 11,
      //               ParentScaleName: 'Restricted and Repetitive Behaviors',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 43,
      //                   TestId: null,
      //                   Name: 'Stereotyped/Idiosyncratic Use of Words or Phrases (A-4)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the stereotyped or idiosyncratic quality of the phrasing, unusual use of words or formation of utterances, and/or their arbitrary association with a particular meaning.',
      //                   ParentScaleTitleId: 11,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 44,
      //                   TestId: null,
      //                   Name: 'Unusual Sensory Interest in Play Material/Person (D-1)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the child’s interest in or unusual behaviors associated with sensory aspects of toys or surroundings (e.g., sniffing, repetitive feeling of texture, licking, mouthing, or biting, unusually strong interest in the repetition of certain sounds, unusual or prolonged visual examination).',
      //                   ParentScaleTitleId: 11,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 45,
      //                   TestId: null,
      //                   Name: 'Hand and Finger and Other Complex Mannerisms (D-2)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on unusual and/or repetitive movements or posturing of the hands and fingers, arms, or body. This does not include repetitive clapping, finger tapping, nail biting, hair twisting, and thumb sucking.',
      //                   ParentScaleTitleId: 11,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 46,
      //                   TestId: null,
      //                   Name: 'Unusually Repetitive Interests or Stereotyped Behaviors',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on any unusually repetitive interests or stereotyped behaviors, including preoccupation with unusual activities or objects, repetitive nonfunctional use of toys, repetitive actions, and insistence on having the parent/caregiver or examiner act in a specific way.',
      //                   ParentScaleTitleId: 11,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       Id: 3,
      //       Name: 'Module 3',
      //       Descriptions:
      //         'is intended for individuals who are verbally fluent. Verbal fluency is broadly defined in this context as language development equivalent to (or higher than) the expressive language skills of a typical 4-year-old child: producing a range of flexible sentence types and grammatical forms, using language to provide information about events out of the immediate context, and producing some logical connections within sentences (e.g., using but or though), although the individual may make some grammatical errors. Module 3 is best suited for verbally fluent children and adolescents for whom playing with action figure-type toys is age appropriate (usually under 16 years of age).',
      //       ParentGroupScales: [
      //         {
      //           Id: 6,
      //           ParentGroupScaleName: 'Social Affect (SA)',
      //           Description: null,
      //           ParentGroupSubScales: [],
      //           ParentScaleTitles: [
      //             {
      //               Id: 12,
      //               ParentScaleName: 'Communication',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 47,
      //                   TestId: null,
      //                   Name: 'Reporting of Events (A-7)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the participant’s ability to select an event spontaneously or in response to the examiner’s general questioning and to describe it in a comprehensible fashion without requiring specific probes. This should involve a sequential description of an event outside the immediate environment.',
      //                   ParentScaleTitleId: 12,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 48,
      //                   TestId: null,
      //                   Name: 'Conversation (A-8)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This is a summary item that focuses on the to-and-fro use of words and phrases in social conversation.',
      //                   ParentScaleTitleId: 12,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 49,
      //                   TestId: null,
      //                   Name: 'Descriptive, Conventional, Instrumental, or Informational Gestures (A-9)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on descriptive gestures that enact or represent an object or event (such as acting out rinsing a toothbrush or showing how a roller coaster curves through the air).',
      //                   ParentScaleTitleId: 12,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 13,
      //               ParentScaleName: 'Reciprocal Social Interaction',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 50,
      //                   TestId: null,
      //                   Name: 'Unusual Eye Contact (B-1)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on clear, flexible, socially modulated, and appropriate gaze that is used for a variety of purposes. This is in contrast to gaze that is limited in flexibility, appropriateness, or contexts.',
      //                   ParentScaleTitleId: 13,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 51,
      //                   TestId: null,
      //                   Name: 'Facial Expressions Directed to Examiner (B-2)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on whether the child’s facial expressions are directed to the examiner for the purpose of communicating affective (e.g., enjoyment, frustration) or cognitive (e.g., puzzlement, skepticism) sates. Facial expressions that are directed to objects, other people in the room, or that are undirected are not evaluated here.',
      //                   ParentScaleTitleId: 13,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 52,
      //                   TestId: null,
      //                   Name: 'Shared Enjoyment in Interaction (B-3)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the child’s directed pleasure during any of the activities or presses. It does not indicate his or her general emotional state during the evaluation and applies to the child’s ability to indicate pleasure to the examiner, not just to interact or respond.',
      //                   ParentScaleTitleId: 13,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 53,
      //                   TestId: null,
      //                   Name: 'Shared Enjoyment in Interaction (B-4)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the participant’s directed pleasure during any of the tasks or conversation. This item is not used to indicate his or her general emotional state during the ADOS-2 evaluation. The rating applies to the participant’s ability to indicate pleasure to the examiner, not just to interact or respond.',
      //                   ParentScaleTitleId: 13,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 54,
      //                   TestId: null,
      //                   Name: 'Quality of Social Overtures (B-7)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This is a summary item that focuses on the quality of the child’s attempts to initiate social interaction with the examiner, not on the frequency of such attempts. Special attention is given to the form of the overture and its appropriateness to the social context.',
      //                   ParentScaleTitleId: 13,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 55,
      //                   TestId: null,
      //                   Name: 'Quality of Social Response (B-9)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This is a summary item that focuses on the participant’s social responses throughout the ADOS-2 evaluation.',
      //                   ParentScaleTitleId: 13,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 56,
      //                   TestId: null,
      //                   Name: 'Amount of Reciprocal Social Communication (B-10)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the frequency with which reciprocal interchanges occur during the course of the ADOS-2 evaluation, using any mode of communication. Frequency here is defined both by absolute number of occurrences and distribution across a range of contexts.',
      //                   ParentScaleTitleId: 13,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 57,
      //                   TestId: null,
      //                   Name: 'Overall Quality of Rapport (B-11)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This item is a summary rating that reflects the examiner’s overall judgment of the rapport established with the child during the ADOS-2 evaluation. It particularly concerns the degree to which the examiner had to modify his or her own behavior to maintain the interaction successfully.',
      //                   ParentScaleTitleId: 13,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //         {
      //           Id: 7,
      //           ParentGroupScaleName: 'Restricted and Repetitive Behavior (RRB)',
      //           Description: null,
      //           ParentGroupSubScales: [],
      //           ParentScaleTitles: [
      //             {
      //               Id: 14,
      //               ParentScaleName: 'Restricted and Repetitive Behaviors',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 58,
      //                   TestId: null,
      //                   Name: 'Stereotyped/Idiosyncratic Use of Words or Phrases (A-4)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the stereotyped or idiosyncratic quality of the phrasing, unusual use of words or formation of utterances, and/or their arbitrary association with a particular meaning.',
      //                   ParentScaleTitleId: 14,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 59,
      //                   TestId: null,
      //                   Name: 'Unusual Sensory Interest in Play Material/Person (D-1)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the child’s interest in or unusual behaviors associated with sensory aspects of toys or surroundings (e.g., sniffing, repetitive feeling of texture, licking, mouthing, or biting, unusually strong interest in the repetition of certain sounds, unusual or prolonged visual examination).',
      //                   ParentScaleTitleId: 14,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 60,
      //                   TestId: null,
      //                   Name: 'Hand and Finger and Other Complex Mannerisms (D-2)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on unusual and/or repetitive movements or posturing of the hands and fingers, arms, or body. This does not include repetitive clapping, finger tapping, nail biting, hair twisting, and thumb sucking.',
      //                   ParentScaleTitleId: 14,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 61,
      //                   TestId: null,
      //                   Name: 'Unusually Repetitive Interests or Stereotyped Behaviors',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on any unusually repetitive interests or stereotyped behaviors, including preoccupation with unusual activities or objects, repetitive nonfunctional use of toys, repetitive actions, and insistence on having the parent/caregiver or examiner act in a specific way.',
      //                   ParentScaleTitleId: 14,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       Id: 4,
      //       Name: 'Module 4',
      //       Descriptions:
      //         'is intended for individuals who are verbally fluent Verbal fluency is broadly defined in this context as language development equivalent to (or higher than) the expressive language skills of a typical 4-year-old child: producing a range of flexible sentence types and grammatical forms, using language to provide information about events out of the immediate context, and producing some logical connections within sentences (e.g., using but or though), although the individual may make some grammatical errors. Module 4 is best suited for verbally fluent older adolescent and adults.',
      //       ParentGroupScales: [
      //         {
      //           Id: 8,
      //           ParentGroupScaleName: 'Social Affect (SA)',
      //           Description: null,
      //           ParentGroupSubScales: [],
      //           ParentScaleTitles: [
      //             {
      //               Id: 15,
      //               ParentScaleName: 'Communication',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 62,
      //                   TestId: null,
      //                   Name: 'Stereotyped/Idiosyncratic Use of Words or Phrases (A-4)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the stereotyped or idiosyncratic quality of the phrasing, unusual use of words or formation of utterances, and/or their arbitrary association with a particular meaning.',
      //                   ParentScaleTitleId: 15,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 63,
      //                   TestId: null,
      //                   Name: 'Conversation (A-8)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This is a summary item that focuses on the to-and-fro use of words and phrases in social conversation.',
      //                   ParentScaleTitleId: 15,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 64,
      //                   TestId: null,
      //                   Name: 'Descriptive, Conventional, Instrumental, or Informational Gestures (A-9)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on descriptive gestures that enact or represent an object or event (such as acting out rinsing a toothbrush or showing how a roller coaster curves through the air).',
      //                   ParentScaleTitleId: 15,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 65,
      //                   TestId: null,
      //                   Name: 'Emphatic or Emotional Gestures (A-10)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on emphatic (i.e., natural, rhythmic “beats” that often accompany speech) or emotional gestures (e.g., hand to mouth or hands up for “wow”).',
      //                   ParentScaleTitleId: 15,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 16,
      //               ParentScaleName: 'Reciprocal Social Interaction',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 66,
      //                   TestId: null,
      //                   Name: 'Unusual Eye Contact (B-1)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on clear, flexible, socially modulated, and appropriate gaze that is used for a variety of purposes. This is in contrast to gaze that is limited in flexibility, appropriateness, or contexts.',
      //                   ParentScaleTitleId: 16,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 67,
      //                   TestId: null,
      //                   Name: 'Facial Expressions Directed to Examiner (B-2)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on whether the child’s facial expressions are directed to the examiner for the purpose of communicating affective (e.g., enjoyment, frustration) or cognitive (e.g., puzzlement, skepticism) sates. Facial expressions that are directed to objects or other people in the room, or that are undirected, are not evaluated here.',
      //                   ParentScaleTitleId: 16,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 68,
      //                   TestId: null,
      //                   Name: 'Comments on Others’ Emotions/Empathy (B-6)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the participant’s communication of his or her recognition, understanding, and/or response to the feelings of other people or characters, real or conveyed in stories or other tasks.',
      //                   ParentScaleTitleId: 16,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 69,
      //                   TestId: null,
      //                   Name: 'Responsibility (B-8)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This item focuses on the participant’s references to and descriptions of being responsible for his or her own actions in typical daily living situations, in responding to normal social mores and expectations (from getting a haircut to finding a job) in an active, independent way.',
      //                   ParentScaleTitleId: 16,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 70,
      //                   TestId: null,
      //                   Name: 'Quality of Social Overtures (B-9)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This is a summary item that focuses on the quality of the child’s attempts to initiate social interaction with the examiner, not on the frequency of such attempts.',
      //                   ParentScaleTitleId: 16,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 71,
      //                   TestId: null,
      //                   Name: 'Quality of Social Response (B-11)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This is a summary item that focuses on the participant’s social responses throughout the ADOS-2 evaluation.',
      //                   ParentScaleTitleId: 16,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 72,
      //                   TestId: null,
      //                   Name: 'Amount of Reciprocal Social Communication (B-12)',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The focus of this item is on the frequency with which reciprocal interchanges occur during the course of the ADOS-2 evaluation, using any mode of communication. Frequency here is defined both by absolute number of occurrences and distribution across a range of contexts.',
      //                   ParentScaleTitleId: 16,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null,
      // },
      // {
      //   Id: 4,
      //   Name: 'Childhood Autism Rating Scale - 2',
      //   Abbreviation: 'CARS-2',
      //   Descriptions:
      //     '<p>The Childhood Autism Rating Scale - 2 identifies individuals with autism, based on direct observation. It discriminates between autism and severe cognitive deficits. This new edition is also more responsive to those on the high-functioning end of the spectrum. The Standard Version Rating Booklet and the High-Functioning Version Rating Booklet each address 15 functional areas. </p>  <p>A questionnaire for Parents or Caregivers is also included. The CARS2-QPC is an unscored form completed by the parent or caregiver of the individual being assessed. Its purpose is to give the clinician more information on which to base CARS2-ST or CARS2-HF ratings. The areas covered by the CARS2-QPC include the individuals early development; social, emotional, and communication skills; repetitive behaviors; play and routines; and unusual sensory interests.</p>',
      //   DomainId: 4,
      //   DomainName: 'Autism',
      //   SubTestType: 'Item',
      //   ScoreType: 'Score',
      //   DescriptionType: 'Description',
      //   CreatedDate: '2018-09-22T19:24:26.873',
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [
      //     {
      //       Id: 3,
      //       ParentGroupSubScaleName: 'CARS2-ST',
      //       ParentGroupScaleId: null,
      //       ParentScaleTitles: [
      //         {
      //           Id: 22,
      //           ParentScaleName: 'CARS-2-ST ITEMS',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 98,
      //               TestId: null,
      //               Name: 'Relating to People',
      //               Abbreviation: null,
      //               Description:
      //                 'This is a rating of how the child behaves in a variety of situations involving interaction with other people',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 99,
      //               TestId: null,
      //               Name: 'Imitation',
      //               Abbreviation: null,
      //               Description:
      //                 'This rating is based on how the child imitates both verbal and nonverbal acts. Behavior to be imitated should clearly be within the child’s abilities.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 100,
      //               TestId: null,
      //               Name: 'Emotional Response',
      //               Abbreviation: null,
      //               Description:
      //                 'This is a rating of how the child reacts to both pleasant and unpleasant situations. It involves a determination of whether the child’s emotions or feelings seem appropriate to the situation.  This items in concerned with the appropriateness of both the type of response and the intensity of the response.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 101,
      //               TestId: null,
      //               Name: 'Body Use',
      //               Abbreviation: null,
      //               Description:
      //                 'This area represents a rating of both coordination and appropriateness of body movements. It includes such deviations as posturing, spinning, tapping, rocking, toe-walking, and self-directed aggression.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 102,
      //               TestId: null,
      //               Name: 'Object Use',
      //               Abbreviation: null,
      //               Description:
      //                 'This is a rating of both the child’s interest in toys or other objects, and his or her uses of them.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 103,
      //               TestId: null,
      //               Name: 'Adaption to Change',
      //               Abbreviation: null,
      //               Description:
      //                 'This item concerns difficulties in changing established routines or patterns and in changing from one activity to another.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 104,
      //               TestId: null,
      //               Name: 'Visual Response',
      //               Abbreviation: null,
      //               Description:
      //                 'This is a rating of unusual visual attention patterns found in many individuals on the autism spectrum. This rating includes the child’s response when he or she is required to look at objects or material.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 105,
      //               TestId: null,
      //               Name: 'Listening Response',
      //               Abbreviation: null,
      //               Description:
      //                 'This is a rating of unusual listening behavior or unusual responses to sounds. It involves the child’s reaction to both human voices and other types of sound. This item is also concerned with the child’s interest in various sounds.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 106,
      //               TestId: null,
      //               Name: 'Taste, Smell, and Touch Response and Use',
      //               Abbreviation: null,
      //               Description:
      //                 'This is a rating of the child’s response to stimulation of the taste, smell, and touch senses (including pain). It is also a rating of whether the child makes appropriate use of these sense modalities. In contrast to the “distance” senses of hearing and vision rated in the previous two areas, this is a rating of the “near” senses.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 107,
      //               TestId: null,
      //               Name: 'Fear or Nervousness',
      //               Abbreviation: null,
      //               Description:
      //                 'This is a rating of unusual or unexplainable fears. However, it also includes rating the absence of fear under conditions where a typically developing child at the same developmental level would be likely to show fear or nervousness',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 108,
      //               TestId: null,
      //               Name: 'Verbal Communication',
      //               Abbreviation: null,
      //               Description:
      //                 'This is a rating of all facets of the child’s use of speech and language assess not only the presence or absence of speech but also the peculiarity, bizarreness, or inappropriateness of all elements of the child’s utterances when speech is present. Thus, when speech of any sort is present, assess the child’s vocabulary and sentence structure; the tonal quality, volume or loudness, and rhythm of utterances; and the situation appropriateness of the content of meaning of the child’s speech.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 109,
      //               TestId: null,
      //               Name: 'Nonverbal Communication',
      //               Abbreviation: null,
      //               Description:
      //                 'This is a rating of the child’s nonverbal communication through the use of facial expression, posture, gesture, and body movement. It also includes the child’s response to the nonverbal communication of others. If the child has reasonably good verbal communication skills, there may be less of nonverbal communication; however, a child with impairments of verbal communication may or may not have developed a nonverbal means of communication.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 110,
      //               TestId: null,
      //               Name: 'Activity Level',
      //               Abbreviation: null,
      //               Description:
      //                 'This rating refers to how much the child moves about in both restricted and unrestricted situations. Either overactivity or lethargy are part of this rating.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 111,
      //               TestId: null,
      //               Name: 'Level and Consistency of Intellectual Response',
      //               Abbreviation: null,
      //               Description:
      //                 'This rating is concerned both with the child’s general level of intellectual functioning and with the consistency or evenness of functioning from one type of skill to another. Some fluctuations in mental functioning occur in many typical children or in those with other problems besides autism. However, this area is intended to identify extremely unusual or “peak” skills.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 112,
      //               TestId: null,
      //               Name: 'General Impressions',
      //               Abbreviation: null,
      //               Description:
      //                 'This is intended to be an overall rating of autism based on your subjective impression of the degree to which the child has autism as defined by the other 14 items. This rating should be made without recourse to averaging the other ratings. In making this rating, you should take into account all available information concerning the child, including information from such sources as the case history, parent interviews, or past records.',
      //               ParentScaleTitleId: 22,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //       ],
      //     },
      //     {
      //       Id: 5,
      //       ParentGroupSubScaleName: 'CARS2-HF',
      //       ParentGroupScaleId: null,
      //       ParentScaleTitles: [
      //         {
      //           Id: 23,
      //           ParentScaleName: 'CARS-2-HF ITEMS',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 113,
      //               TestId: null,
      //               Name: 'Social-Emotional Understanding',
      //               Abbreviation: null,
      //               Description:
      //                 'Social-emotional understanding addresses an individual’s cognitive understanding of others’ communication, behaviors, and differing perspectives. The dimensions of social understanding that are included in this item are the ability to read the nonverbal cues of others and the ability to take another person’s perspective. This item does not reflect whether someone has friends or is in a relationship. Rather it deals with an individual’s ability to perceive and articulate how another person may feel or what his or her perspective may be in a situation.',
      //               ParentScaleTitleId: 23,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 114,
      //               TestId: null,
      //               Name: 'Emotional Expression and Regulation of Emotions',
      //               Abbreviation: null,
      //               Description:
      //                 'This rating is based on the individual’s ability to express and regulate his or her own emotions.',
      //               ParentScaleTitleId: 23,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 115,
      //               TestId: null,
      //               Name: 'Relating to People',
      //               Abbreviation: null,
      //               Description:
      //                 'This is a rating of how the individual behaves in a variety of situations involving interaction with other people. This item is related to the first two items, which also rate aspects of social relationships. This item differs in that it is confined to dimensions related to direct interpersonal interactions, and the person’s initiation of interactions and reaction to another individual. The two dimensions that are rated on this item are the individual’s initiation of interactions and the reciprocal nature of the interactions.',
      //               ParentScaleTitleId: 23,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 116,
      //               TestId: null,
      //               Name: 'Body Use',
      //               Abbreviation: null,
      //               Description:
      //                 'This area represents both coordination and appropriateness of body movements. Subtle forms of fine and gross motor coordination are rated here, as well as deviations such as posturing, spinning, tapping and rocking, toe-walking, and self-directed aggression.',
      //               ParentScaleTitleId: 23,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 117,
      //               TestId: null,
      //               Name: 'Object Use in Play',
      //               Abbreviation: null,
      //               Description:
      //                 'This rating includes the person’s interest in and use of toys or other objects. In addition to the traditional issues related to repetitive play with part of objects, the focus of this item also includes the degree to which the individual engages in imaginative symbolic play and the degree to which toy figures are used as agents.',
      //               ParentScaleTitleId: 23,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 646,
      //               TestId: null,
      //               Name: 'Adaptation to Change/Restricted Interests',
      //               Abbreviation: null,
      //               Description:
      //                 'This area concerns difficulty in changing established routines or patterns, difficulties in changing from one activity to another, and restricted special interests.',
      //               ParentScaleTitleId: 23,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 118,
      //               TestId: null,
      //               Name: 'Visual Response',
      //               Abbreviation: null,
      //               Description:
      //                 'This item covers the use of vision in three areas; visual fascinations, the ease with which the individual can shift visual attention, and the degree to which the individual’s eye contact is integrated with actions and communication.',
      //               ParentScaleTitleId: 23,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 119,
      //               TestId: null,
      //               Name: 'Listening Response',
      //               Abbreviation: null,
      //               Description:
      //                 'This rating is based on the person’s unusual responses to sounds and how the listening response is coordinated with the use of other senses.',
      //               ParentScaleTitleId: 23,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //       ],
      //     },
      //   ],
      //   TestScoringTableDetails: null,
      // },
      // {
      //   Id: 9,
      //   Name: "Gilliam Autism Rating Scale",
      //   Abbreviation: "GARS-3",
      //   Descriptions:
      //     "The Gilliam Autism Rating Scale is a norm-referenced screening instrument used to identify individuals 3-22 years of age who have severe behavioral problems that may be indicative of an autism spectrum disorder. The GARS-3 is composed of 58 clearly stated items divided into six subscales that describe specific, observable, and measurable behaviors.",
      //   DomainId: 4,
      //   DomainName: "Autism",
      //   SubTestType: "Subscale",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-09-24T12:10:25.677",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [
      //     {
      //       Id: 215,
      //       TestId: 9,
      //       Name: "Restrictive/Repetitive Behaviors",
      //       Abbreviation: null,
      //       Description:
      //         "Measures stereotyped behaviors, fixed interests, routines, or rituals.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 216,
      //       TestId: 9,
      //       Name: "Social Interaction",
      //       Abbreviation: null,
      //       Description: "Measures social behaviors.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 217,
      //       TestId: 9,
      //       Name: "Social Communication",
      //       Abbreviation: null,
      //       Description:
      //         "Measures the individual’s responses to social situations and understanding of the intent of social interaction and communication.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 218,
      //       TestId: 9,
      //       Name: "Emotional Responses",
      //       Abbreviation: null,
      //       Description:
      //         "Measures extreme emotional responses to everyday situations.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 219,
      //       TestId: 9,
      //       Name: "Cognitive Style",
      //       Abbreviation: null,
      //       Description:
      //         "Measures idiosyncratic fixated interests, characteristics, and cognitive abilities.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 220,
      //       TestId: 9,
      //       Name: "Maladaptive Speech",
      //       Abbreviation: null,
      //       Description:
      //         "Consists of items that describe deficits and idiosyncrasies in verbal communication.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     }
      //   ],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: [
      //     {
      //       Id: 1,
      //       Name: "The Autism Index",
      //       Description:
      //         "measures composite performance by summing the scaled scores for each subscale. In most cases, this will include all six subscales. However, if a person is noncommunicative, the Cognitive Skills and Maladaptive Speech subscales cannot be fully completed. When this occurs, a reliable and valid Autism Index score can be determined by summing the scaled scores for the four subscales that were completed.",
      //       TestId: 9,
      //       ScoreHeader: "Guidelines for Interpreting Autism Index Scores",
      //       TableHeaderRowTitles: {
      //         Id: 5,
      //         Col1: "Autism Index",
      //         Col2: "<= 54",
      //         Col3: "55-70",
      //         Col4: "71-100",
      //         Col5: ">= 101",
      //         Col6: null,
      //         Description: null,
      //         ScoringTableHeaderId: 1,
      //         OrderNumber: 1,
      //         IsHeader: true,
      //         IsEditable: false
      //       },
      //       TestScoringTableScores: [
      //         {
      //           Id: 6,
      //           Col1: "Probability of ASD",
      //           Col2: "Unlikely",
      //           Col3: "Probable",
      //           Col4: "Very likely",
      //           Col5: "Very likely",
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 1,
      //           OrderNumber: 2,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 7,
      //           Col1: "DSM-5 Severity Level for ASD",
      //           Col2: null,
      //           Col3: "Level 1",
      //           Col4: "Level 2",
      //           Col5: "Level 3",
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 1,
      //           OrderNumber: 3,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 8,
      //           Col1: "Descriptor",
      //           Col2: "Not ASD",
      //           Col3: "Minimal Support Required",
      //           Col4: "Requiring Substantial Support",
      //           Col5: "Requiring Very Substantial Support",
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 1,
      //           OrderNumber: 4,
      //           IsHeader: false,
      //           IsEditable: false
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   Id: 1,
      //   Name: 'Wechsler Intelligence Scale for Children – Fifth Edition',
      //   Abbreviation: 'WISC-V',
      //   Descriptions:
      //     'Wechsler Intelligence Scale for Children – Fifth Edition is a test of intellectual abilities, which assesses both cognitive strengths and weaknesses in children aged 6 years 0 months through 16 years 11 months (6:0-16:11).',
      //   DomainId: 5,
      //   DomainName: 'Intelligence',
      //   SubTestType: 'Subtest',
      //   ScoreType: 'Score',
      //   DescriptionType: 'Description',
      //   CreatedDate: '2018-09-08T16:53:28.24',
      //   ParentGroupScales: [
      //     {
      //       Id: 1,
      //       ParentGroupScaleName: 'Intellectual Functioning',
      //       Description: null,
      //       ParentGroupSubScales: [
      //         {
      //           Id: 1,
      //           ParentGroupSubScaleName: 'Full Scale',
      //           ParentGroupScaleId: 1,
      //           ParentScaleTitles: [
      //             {
      //               Id: 1,
      //               ParentScaleName: 'Verbal Comprehension',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 1,
      //                   TestId: null,
      //                   Name: 'Similarities',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The subtest is designed to measure verbal concept formation and abstract reasoning. It also involves crystallized intelligence, word knowledge, cognitive flexibility, auditory comprehension, long-term memory, associative and categorical thinking, distinction between nonessential and essential features, and verbal expression.',
      //                   ParentScaleTitleId: 1,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 2,
      //                   TestId: null,
      //                   Name: 'Vocabulary',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The subtest is designed to measure word knowledge and verbal concept formation. It also measures crystallized intelligence, fund of knowledge, learning ability, verbal expression, long-term memory, and degree of vocabulary development.',
      //                   ParentScaleTitleId: 1,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 3,
      //                   TestId: null,
      //                   Name: 'Information',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This subtest is designed to measure a child’s ability to acquire, retain, and retrieve general factual knowledge. It involves crystallized intelligence, long-term memory, and the ability to retain and retrieve knowledge from the environment and/or formal instruction.',
      //                   ParentScaleTitleId: 1,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 4,
      //                   TestId: null,
      //                   Name: 'Comprehension',
      //                   Abbreviation: null,
      //                   Description:
      //                     'It is designed to measure verbal reasoning and conceptualization, verbal comprehension and expression, the ability to evaluate and use past experience, and the ability to demonstrate practical knowledge and judgement. It also involved crystallized intelligence, knowledge of conventional standards of behavior, social judgement, long-term memory and common sense.',
      //                   ParentScaleTitleId: 1,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 2,
      //               ParentScaleName: 'Visual Spatial',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 5,
      //                   TestId: null,
      //                   Name: 'Block Design',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The subtest is designed to measure verbal concept formation and abstract reasoning. It also involves crystallized intelligence, word knowledge, cognitive flexibility, auditory comprehension, long-term memory, associative and categorical thinking, distinction between nonessential and essential features, and verbal expression.',
      //                   ParentScaleTitleId: 2,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 6,
      //                   TestId: null,
      //                   Name: 'Vocabulary',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The subtest is designed to measure the ability to analyze and synthesize abstract visual stimuli. It also involved nonverbal concept formation and reasoning, broad visual intelligence, visual perception and organization, simultaneous processing, visual-motor coordination, learning, and the ability to separate figure-ground in visual stimuli.',
      //                   ParentScaleTitleId: 2,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 5,
      //               ParentScaleName: 'Processing Speed',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 14,
      //                   TestId: null,
      //                   Name: 'Coding',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This subtest measures processing speed, short-term visual memory, procedural and incidental learning ability, psychomotor speed, visual perception, visual-motor coordination, visual scanning ability, cognitive flexibility, attention, concentration, and motivation.',
      //                   ParentScaleTitleId: 5,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 15,
      //                   TestId: null,
      //                   Name: 'Symbol Search',
      //                   Abbreviation: null,
      //                   Description:
      //                     'It involves visual-perceptual and decision-making speed, short-term visual memory, visual-motor coordination, inhibitory control, visual discrimination, psychomotor speed, sustained attention and concentration.',
      //                   ParentScaleTitleId: 5,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 16,
      //                   TestId: null,
      //                   Name: 'Cancellation',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This subtest measures rate of test taking, speed of visual-perceptual processing and decision making, visual scanning ability, and visual-perceptual recognition and discrimination.',
      //                   ParentScaleTitleId: 5,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //         {
      //           Id: 2,
      //           ParentGroupSubScaleName: 'General Abilities',
      //           ParentGroupScaleId: 1,
      //           ParentScaleTitles: [
      //             {
      //               Id: 3,
      //               ParentScaleName: 'Fluid Reasoning',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 7,
      //                   TestId: null,
      //                   Name: 'Matrix Reasoning',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The subtest is designed to measure fluid intelligence, broad visual intelligence, classification and spatial ability, knowledge of part-whole relationships, and simultaneous processing.',
      //                   ParentScaleTitleId: 3,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 8,
      //                   TestId: null,
      //                   Name: 'Figure Weights',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The subtest measures quantitative fluid reasoning and induction, as well as emphasized inductive or deductive logic.',
      //                   ParentScaleTitleId: 3,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 9,
      //                   TestId: null,
      //                   Name: 'Picture Concepts',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The subtest measures fluid and inductive reasoning, visual-perceptual recognition and processing, and conceptual thinking. It also requires visual scanning, working memory, and abstract reasoning.',
      //                   ParentScaleTitleId: 3,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 10,
      //                   TestId: null,
      //                   Name: 'Arithmetic',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The subtest involves mental manipulation, concentration, brief focused attention, working memory, short- and long-term memory, numerical reasoning ability, applied computational ability, and mental alertness. Additionally, it requires sequential processing; fluid, quantitative, and logical reasoning; and quantitative knowledge.',
      //                   ParentScaleTitleId: 3,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 4,
      //               ParentScaleName: 'Working Memory',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 11,
      //                   TestId: null,
      //                   Name: 'Digit Span',
      //                   Abbreviation: null,
      //                   Description:
      //                     'Requires cognitive flexibility, mental alertness, brief focused attention, auditory discrimination, and auditory rehearsal.<ul><li>Forward task – measures auditory rehearsal and temporary storage capacity in working memory.</li> <li>Backward task – involves working memory, transformation of information, mental manipulation, and may involve visuospatial imaging.</li>  <li>Sequencing task – measures working memory, mental manipulation, and complex sequencing.</li></ul>',
      //                   ParentScaleTitleId: 4,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 12,
      //                   TestId: null,
      //                   Name: 'Picture Span',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The subtest measures visual working memory and working memory capacity through the use of semantically meaningful stimuli.',
      //                   ParentScaleTitleId: 4,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 13,
      //                   TestId: null,
      //                   Name: 'Letter- Number Sequencing',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The subtest involves auditory discrimination, brief focused attention, concentration, registration, and auditory rehearsal. It also measures sequential processing, the ability to compare stimuli based on quantity or alphabetic principles, working memory capacity, and mental manipulation.',
      //                   ParentScaleTitleId: 4,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 17,
      //               ParentScaleName: 'Complimentary Subtests',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 73,
      //                   TestId: null,
      //                   Name: 'Naming Speed Literacy',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This subtest specifically measures the automaticity of visual-verbal associations, which should be well developed in school-age children. This subtest was not designed as a measure of intelligence but to enable clinicians to identify difficulties in cognitive processes associated with academic learning.',
      //                   ParentScaleTitleId: 17,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 74,
      //                   TestId: null,
      //                   Name: 'Naming Speed Quality',
      //                   Abbreviation: null,
      //                   Description:
      //                     'The subtest has tasks similar to the experimental literature that show greater sensitivity to mathematics skills and specific learning disorder-mathematics than do the traditional rapid automatized naming tasks that are more closely associated with reading – and writing – related variables.',
      //                   ParentScaleTitleId: 17,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 75,
      //                   TestId: null,
      //                   Name: 'Immediate Symbol Translation',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This subtest has tasks similar to Immediate Symbol Translation measure verbal-visual associative memory or paired associates learning, storage, and retrieval fluency and accuracy, and immediate recall. This subtest was not designed as a measure of intelligence but as a measure of cognitive processes that may be interfering with academic learning.',
      //                   ParentScaleTitleId: 17,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 76,
      //                   TestId: null,
      //                   Name: 'Delayed Symbol Translation',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This subtest is a cued memory paradigm. Tasks similar to Delayed Symbol Translation measure verbal-visual associative memory or paired associates learning, storage and retrieval fluency and accuracy, and delayed recall. This subtest is not designed as a measure of intelligence but as a measure of cognitive process related to learning difficulties.',
      //                   ParentScaleTitleId: 17,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 77,
      //                   TestId: null,
      //                   Name: 'Recognition Symbol Translation',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This subtest measure verbal-visual associative memory or paired associates learning, storage and retrieval fluency and accuracy, and delayed recognition. It is not a measure of intelligence but a measure of cognitive process related to learning.',
      //                   ParentScaleTitleId: 17,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //       ],
      //       ParentScaleTitles: [],
      //     },
      //   ],
      //   TestIndexes: [
      //     {
      //       Id: 1,
      //       IndexName: 'Full Scale IQ',
      //       IndexDescription:
      //         'is a composite score that represents general intellectual functioning and is calculated from all of the subtests within the five main indices: Verbal Comprehension, Visual Spatial, Fluid Reasoning, Working Memory and Processing Speed',
      //       TestId: 1,
      //       CreatedDate: '2018-09-08T00:00:00',
      //       SubTests: [],
      //       IndexConditions: [
      //         {
      //           Id: 1,
      //           Condition: 'If FSIQ is meaningful',
      //           ConditionDescription:
      //             '`Overall, (client) demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of <input type="text" id="txtFSIQScore" /> (<input type="text" id="txtFSIQPercentile" /> percentile), which falls within in the  <input type="text" id="txtFSIQRange" /> range when compared to (his/her) same-aged peers.`',
      //           isTrue: true,
      //           Score: null,
      //           ScorePercentile: null,
      //           ScoreRange: null,
      //           IndexId: null,
      //         },
      //         {
      //           Id: 2,
      //           Condition: 'If FSIQ is NOT meaningful',
      //           ConditionDescription:
      //             'Overall, (client) demonstrated an inconsistent performance on the WISC-V. As a result, (his/her) Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between the five Composite areas that constitute (his/her) Full-Scale score (FSIQ). Therefore, in order to better understand (his/her) cognitive strengths and weaknesses, a more in-depth look at all of (client’s) individual subtest scores is warranted.',
      //           isTrue: false,
      //           Score: null,
      //           ScorePercentile: null,
      //           ScoreRange: null,
      //           IndexId: null,
      //         },
      //       ],
      //       HasInput: false,
      //     },
      //     {
      //       Id: 2,
      //       IndexName: 'General Ability Index',
      //       IndexDescription:
      //         'is a composite score that provides an estimate of general intellectual ability, with reduced emphasis on working memory and processing speed relative to the FSIQ.',
      //       TestId: 1,
      //       CreatedDate: '2018-09-08T00:00:00',
      //       SubTests: [],
      //       IndexConditions: [],
      //       HasInput: true,
      //     },
      //   ],
      //   SubTests: [],
      //   TestSummaries: [
      //     {
      //       Id: 1,
      //       Name: 'SUMMARY AT END OF COG SECTION',
      //       TestId: 1,
      //       Descriptions:
      //         "Overall, (client’s) performance on the WISC-V provided a snapshot into (his/her) various cognitive abilities and strengths. (He/She) demonstrated well-developed <input type='text' id='txtFSIQAbilities' /> abilities. However, (he/she) also evidenced relative challenges with <input type='text' id='txtFSIQRelatedChallengues' /> These challenges should continue to be monitored and evaluated so as to help (him/her) continue to perform at (his/her) best.",
      //     },
      //   ],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null,
      // },
      // {
      //   Id: 6,
      //   Name: "The Comprehensive Test of Nonverbal Intelligence Second Edition",
      //   Abbreviation: "CTONI-2",
      //   Descriptions:
      //     "<p>The Comprehensive Test of Nonverbal Intelligence Second Edition is a norm-referenced assessment that uses nonverbal formats to measure general intelligence of children and adults (6-89 years) whose performance on traditional tests might be adversely affected by subtle or overt impairments involving language or motor abilities.</p>\r\n<p>The CTONI-2 measures analogical reasoning, categorical classification, and sequential reasoning, using six subtests in two different contexts: Pictures of familiar objects (e.g., people, toys, animals) and geometric designs (unfamiliar sketches and drawings).</p>",
      //   DomainId: 5,
      //   DomainName: "Intelligence",
      //   SubTestType: "Subtest",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-09-24T11:37:48.003",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [
      //     {
      //       Id: 151,
      //       ParentScaleName: "Principals",
      //       ParentScaleDescription:
      //         "The CTONI-2 has two principal uses. The first use is to estimate the intelligence of people for whom traditional ability tests might be inappropriate. For such persons, the heavy language content or the complicated motor response demands of most mental ability tests can result in a serious underestimation of the intelligence. This often leads to misidentifications, faulty diagnoses, erroneous placements, low expectations, and other undesirable consequences. Use of the CTONI-2 will avoid many of the hazards that are frequently encountered when testing people who have a variety of disabilities (e.g., traumatic brain injury, post-stroke syndrome, deafness, aphasia, autism, or other language disorders) or come from cultural, linguistic, educational, or socioeconomic backgrounds that might negatively influence their performance on ability tests. The CTONI-2’s second use is to provide researchers with a tool that they can use to study the nature of intelligence, the interaction of verbal and nonverbal abilities, and the role of nonverbal formats in assessing thinking and academic subject matters.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 172,
      //           TestId: null,
      //           Name: "Pictorial Analogies",
      //           Abbreviation: null,
      //           Description:
      //             "Measures the ability to recognize the relationship of two objects to each other and to find the same relationship between two different objects",
      //           ParentScaleTitleId: 151,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 173,
      //           TestId: null,
      //           Name: "Geometric Analogies",
      //           Abbreviation: null,
      //           Description:
      //             "Measures the ability to recognize the relationship of two geometric designs to each other and to find the same relationship between two different geometric designs.",
      //           ParentScaleTitleId: 151,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 174,
      //           TestId: null,
      //           Name: "Pictorial Categories",
      //           Abbreviation: null,
      //           Description:
      //             "Measures the ability to select from a set of different pictures the one that is the most similar to two other related pictures.",
      //           ParentScaleTitleId: 151,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 175,
      //           TestId: null,
      //           Name: "Geometric Categories",
      //           Abbreviation: null,
      //           Description:
      //             "Measures the ability to select from a set of different geometric designs the one that is most similar to two other related geometric designs.",
      //           ParentScaleTitleId: 151,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 176,
      //           TestId: null,
      //           Name: "Pictorial Sequences",
      //           Abbreviation: null,
      //           Description:
      //             "Measures the ability to select from a set of pictures the one that completes a sequence of actions shown in three pictures.",
      //           ParentScaleTitleId: 151,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 177,
      //           TestId: null,
      //           Name: "Geometric Sequences",
      //           Abbreviation: null,
      //           Description:
      //             "Measures the ability to select from a set of geometric designs the one that completes a sequence of action shown in three designs.",
      //           ParentScaleTitleId: 151,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 152,
      //       ParentScaleName: "Composites",
      //       ParentScaleDescription:
      //         "In addition to the subtests, the CTONI-2 also has three composites. Two composites represent the contexts used to measure the abilities (Pictorial Scale and Geometric Scale). The third composite, the Full Scale, is the overall ability score on the test. All three composites measure general intelligence.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 178,
      //           TestId: null,
      //           Name: "Pictorial Scale",
      //           Abbreviation: null,
      //           Description:
      //             "This composite is formed by combining the scaled scores of the three subtests that use pictures of objects (i.e., Pictorial Analogies, Pictorial Categories, and Pictorial Sequences.",
      //           ParentScaleTitleId: 152,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 179,
      //           TestId: null,
      //           Name: "Geometric Scale",
      //           Abbreviation: null,
      //           Description:
      //             "This composite is formed by combining the scaled scores of the three subtests that use images involving points, lines, angles, surfaces, and solids (i.e., Geometric Analogies, Geometric Categories, and Geometric Sequences).",
      //           ParentScaleTitleId: 152,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 180,
      //           TestId: null,
      //           Name: "Full Scale",
      //           Abbreviation: null,
      //           Description:
      //             "The index for the Full Scales is the best measure of intelligence because it is the most reliable score on the CTONI-2.",
      //           ParentScaleTitleId: 152,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: [
      //     {
      //       Id: 6,
      //       Name:
      //         "The Comprehensive Test of Nonverbal Intelligence Second Edition",
      //       Description: null,
      //       TestId: 6,
      //       ScoreHeader: null,
      //       TableHeaderRowTitles: {
      //         Id: 37,
      //         Col1: "Subtest scaled score",
      //         Col2: "Descriptive term",
      //         Col3: "% of sample in each interval",
      //         Col4: "Composite index",
      //         Col5: null,
      //         Col6: null,
      //         Description: null,
      //         ScoringTableHeaderId: 6,
      //         OrderNumber: 1,
      //         IsHeader: true,
      //         IsEditable: false
      //       },
      //       TestScoringTableScores: [
      //         {
      //           Id: 38,
      //           Col1: "17-20",
      //           Col2: "Very superior",
      //           Col3: "2.34",
      //           Col4: ">130",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 6,
      //           OrderNumber: 2,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 39,
      //           Col1: "15-16",
      //           Col2: "Superior",
      //           Col3: "6.87",
      //           Col4: "121-130",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 6,
      //           OrderNumber: 3,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 40,
      //           Col1: "13-14",
      //           Col2: "Above average",
      //           Col3: "16.12",
      //           Col4: "111-120",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 6,
      //           OrderNumber: 4,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 41,
      //           Col1: "8-12",
      //           Col2: "Average",
      //           Col3: "49.51",
      //           Col4: "90-110",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 6,
      //           OrderNumber: 5,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 42,
      //           Col1: "6-7",
      //           Col2: "Below average",
      //           Col3: "16.12",
      //           Col4: "80-89",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 6,
      //           OrderNumber: 6,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 43,
      //           Col1: "4-5",
      //           Col2: "Poor",
      //           Col3: "6.87",
      //           Col4: "70-79",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 6,
      //           OrderNumber: 7,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 44,
      //           Col1: "1-3",
      //           Col2: "Very poor",
      //           Col3: "2.34",
      //           Col4: "<70",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 6,
      //           OrderNumber: 8,
      //           IsHeader: false,
      //           IsEditable: false
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   Id: 7,
      //   Name: "Differential Ability Scales 2",
      //   Abbreviation: "DAS-II",
      //   Descriptions:
      //     "<p>Differential Ability Scale-II is a comprehensive and flexible instrument for assessing the cognitive abilities that are important to the learning processes of children and adolescents from ages 2 years 6 months through 17 years 11 months (2:6-17:11). <p>  <p>The core subtests yield a composite score that is focused on reasoning and conceptual abilities, called the General Conceptual Ability (GCA) score. A set of optional diagnostic subtests provide additional information on specific abilities. </p>  <p>In addition to contributing to the GCA, the core subtests produce two or three lower-level composite or cluster scores. For children ages 2:6-3:5, the core subtests yield cluster scores measuring Verbal Ability and Nonverbal Ability. For children ages 3:6-17:11, the core subtests yield three cluster scores measuring Verbal Ability, Nonverbal Reasoning Ability, and Spatial Ability. </p>",
      //   DomainId: 5,
      //   DomainName: "Intelligence",
      //   SubTestType: "Subtest",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-09-24T11:45:20.523",
      //   ParentGroupScales: [],
      //   TestIndexes: [
      //     {
      //       Id: 10,
      //       IndexName: "General Conceptual Ability",
      //       IndexDescription:
      //         "(CLIENT NAME) GCA score on the DAS-II places him/her in the <Field> range (DAS-II GCA score of <Field>, <Field> percentile) while his/her (Special Nonverbal Composite SNC score placed in the <Field> range (DAS-II SNC score of <Field>, <Field> percentile)",
      //       TestId: 7,
      //       CreatedDate: "2019-03-18T00:00:00",
      //       SubTests: [],
      //       IndexConditions: [],
      //       HasInput: true
      //     }
      //   ],
      //   SubTests: [],
      //   TestSummaries: [
      //     {
      //       Id: 2,
      //       Name: "SUMMARY AT END OF COG SECTION",
      //       TestId: 7,
      //       Descriptions:
      //         "Overall, (client’s) performance on the DAS-II provided a snapshot into (his/her) various cognitive abilities and strengths. (He/She) demonstrated well-developed <input type='text' id='txtDAS2SummaryAbilities' /> abilities. However, (he/she) also evidenced relative challenges with <input type='text' id='txtDAS2SummaryChallenges' />. These challenges should continue to be monitored and evaluated so as to help (him/her) continue to perform at (his/her) best."
      //     }
      //   ],
      //   ParentScaleTitles: [
      //     {
      //       Id: 42,
      //       ParentScaleName: "Early Years Core",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 181,
      //           TestId: null,
      //           Name: "Verbal Comprehension",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure receptive language through an understanding of oral instructions involving basic language concepts.",
      //           ParentScaleTitleId: 42,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 182,
      //           TestId: null,
      //           Name: "Picture Similarities",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure nonverbal reasoning shown by matching pictures that have a common element or concept.",
      //           ParentScaleTitleId: 42,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 183,
      //           TestId: null,
      //           Name: "Naming Vocabulary",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure expressive language and knowledge of names.",
      //           ParentScaleTitleId: 42,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 43,
      //       ParentScaleName: "Early Years Diagnostic",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 184,
      //           TestId: null,
      //           Name: "Recall of Objects – Immediate",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure short-term recall of verbal and pictorial information.",
      //           ParentScaleTitleId: 43,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 185,
      //           TestId: null,
      //           Name: "Pattern Construction",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure visual-perceptual matching, especially of spatial orientation, in copying block patterns. Additionally, it measures nonverbal reasoning and spatial visualization in reproducing designs with colored blocks.",
      //           ParentScaleTitleId: 43,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 186,
      //           TestId: null,
      //           Name: "Matrices",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure nonverbal reasoning, particularly, perception and application of relationships among abstract figures.",
      //           ParentScaleTitleId: 43,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 187,
      //           TestId: null,
      //           Name: "Recall of Objects – Delayed",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure intermediate-term recall of verbal and pictorial information.",
      //           ParentScaleTitleId: 43,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 188,
      //           TestId: null,
      //           Name: "Copying",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure visual-perceptual matching and fine-motor coordination in copying line drawings.",
      //           ParentScaleTitleId: 43,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 44,
      //       ParentScaleName: "School-Age Core",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 189,
      //           TestId: null,
      //           Name: "Recall of Designs",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure short-term recall of visual and spatial relationships through reproduction of abstract figures.",
      //           ParentScaleTitleId: 44,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 190,
      //           TestId: null,
      //           Name: "Word Definitions",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure knowledge of word meaning as demonstrated through spoken language.",
      //           ParentScaleTitleId: 44,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 45,
      //       ParentScaleName: "School-Age Diagnostic",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 191,
      //           TestId: null,
      //           Name: "Recall of Objects – Immediate",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure short-term recall of verbal and pictorial information.",
      //           ParentScaleTitleId: 45,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 192,
      //           TestId: null,
      //           Name: "Pattern Construction",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure visual-perceptual matching, especially of spatial orientation, in copying block patterns. Additionally, it measures nonverbal reasoning and spatial visualization in reproducing designs with colored blocks.",
      //           ParentScaleTitleId: 45,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 193,
      //           TestId: null,
      //           Name: "Matrices",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure nonverbal reasoning, particularly, perception and application of relationships among abstract figures.",
      //           ParentScaleTitleId: 45,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 194,
      //           TestId: null,
      //           Name: "Recall of Objects – Delayed",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure intermediate-term recall of verbal and pictorial information.",
      //           ParentScaleTitleId: 45,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 195,
      //           TestId: null,
      //           Name: "Verbal Similarities",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure verbal reasoning and verbal knowledge.",
      //           ParentScaleTitleId: 45,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 196,
      //           TestId: null,
      //           Name: "Sequential and Quantitative Reasoning",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure detection of sequential patterns in figures or numbers.",
      //           ParentScaleTitleId: 45,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 46,
      //       ParentScaleName: "Diagnostic Subtests",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 197,
      //           TestId: null,
      //           Name: "Recall of Digits Forward",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure short-term auditory memory and oral recall of sequences of numbers.",
      //           ParentScaleTitleId: 46,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 198,
      //           TestId: null,
      //           Name: "Recognition of Pictures",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure short-term, nonverbal visual memory through recognition of familiar objects.",
      //           ParentScaleTitleId: 46,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 199,
      //           TestId: null,
      //           Name: "Early Number Concepts",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure knowledge of prenumerical and numerical concepts.",
      //           ParentScaleTitleId: 46,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 200,
      //           TestId: null,
      //           Name: "Matching Letter-Like Forms",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure visual discrimination among similar shapes.",
      //           ParentScaleTitleId: 46,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 201,
      //           TestId: null,
      //           Name: "Recall of Sequential Order",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure short-term recall of verbal and pictorial information.",
      //           ParentScaleTitleId: 46,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 202,
      //           TestId: null,
      //           Name: "Speed of Information Processing",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure quickness in performing simple mental operations.",
      //           ParentScaleTitleId: 46,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 203,
      //           TestId: null,
      //           Name: "Recall of Digits Backward",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure short-term auditory memory and oral recall of sequences of numbers.",
      //           ParentScaleTitleId: 46,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 204,
      //           TestId: null,
      //           Name: "Phonological Processing",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure knowledge of sound structure of the English language and the ability to manipulate sound.",
      //           ParentScaleTitleId: 46,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 205,
      //           TestId: null,
      //           Name: "Rapid Naming",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure automaticity of integration of visual symbols with phonologically referenced naming.",
      //           ParentScaleTitleId: 46,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: [
      //     {
      //       Id: 2,
      //       Name: "Differential Ability Scales II",
      //       Description:
      //         "Descriptive Classification Labels for Composite, Cluster, and Subtest Scores",
      //       TestId: 7,
      //       ScoreHeader: null,
      //       TableHeaderRowTitles: {
      //         Id: 9,
      //         Col1: "Subtest Scores (M = 50; SD = 10)",
      //         Col2: "Composite and Cluster Scores (M = 100; SD = 15)",
      //         Col3: "Descriptive Category",
      //         Col4: "Percentiles",
      //         Col5: null,
      //         Col6: null,
      //         Description: null,
      //         ScoringTableHeaderId: 2,
      //         OrderNumber: 1,
      //         IsHeader: true,
      //         IsEditable: false
      //       },
      //       TestScoringTableScores: [
      //         {
      //           Id: 10,
      //           Col1: "70 and above",
      //           Col2: "130 and above",
      //           Col3: "Very High",
      //           Col4: "98-99",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 2,
      //           OrderNumber: 2,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 11,
      //           Col1: "63-69",
      //           Col2: "120-129",
      //           Col3: "High",
      //           Col4: "91-97",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 2,
      //           OrderNumber: 3,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 12,
      //           Col1: "57-62",
      //           Col2: "110-119",
      //           Col3: "Above Average",
      //           Col4: "75-90",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 2,
      //           OrderNumber: 4,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 13,
      //           Col1: "43-56",
      //           Col2: "90-109",
      //           Col3: "Average",
      //           Col4: "25-74",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 2,
      //           OrderNumber: 5,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 14,
      //           Col1: "37-42",
      //           Col2: "80-89",
      //           Col3: "Below Average",
      //           Col4: "9-24",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 2,
      //           OrderNumber: 6,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 15,
      //           Col1: "30-36",
      //           Col2: "70-79",
      //           Col3: "Low",
      //           Col4: "2-8",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 2,
      //           OrderNumber: 7,
      //           IsHeader: false,
      //           IsEditable: false
      //         },
      //         {
      //           Id: 16,
      //           Col1: "29 and below",
      //           Col2: "69 and below",
      //           Col3: "Very Low",
      //           Col4: "<2",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 2,
      //           OrderNumber: 8,
      //           IsHeader: false,
      //           IsEditable: false
      //         }
      //       ]
      //     }
      //   ]
      // }
      // {
      //   Id: 12,
      //   Name: "Wechsler Abbreviated Scale of Intelligence Second Edition",
      //   Abbreviation: "WASI-II",
      //   Descriptions:
      //     "The Wechsler Abbreviated Scale of Intelligence is an abbreviated test of intellectual abilities which is administered to adolescents and adults 16-90 years of age. The WASI-II estimates intellectual functioning in two areas (i.e., Verbal Comprehension and Perceptual Reasoning) and generates two composite scores that estimate general intellectual ability.",
      //   DomainId: 5,
      //   DomainName: "Intelligence",
      //   SubTestType: "Subtest",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-09-25T14:09:56.463",
      //   ParentGroupScales: [],
      //   TestIndexes: [
      //     {
      //       Id: 3,
      //       IndexName: "Full Scale IQ-2",
      //       IndexDescription:
      //         "is a composite score that represents estimated intellectual functioning and is calculated from 2 of the subtests within the Verbal Comprehension and Perceptual Reasoning indices.",
      //       TestId: 12,
      //       CreatedDate: "2018-09-25T00:00:00",
      //       SubTests: [],
      //       IndexConditions: [],
      //       HasInput: false
      //     },
      //     {
      //       Id: 4,
      //       IndexName: "Full Scale IQ-4",
      //       IndexDescription:
      //         "is a composite score that represents estimated intellectual functioning and is calculated from the 4 subtests within the Verbal Comprehension and Perceptual Reasoning indices.",
      //       TestId: 12,
      //       CreatedDate: "2018-09-25T00:00:00",
      //       SubTests: [],
      //       IndexConditions: [
      //         {
      //           Id: 3,
      //           Condition: "If FSIQ is meaningful",
      //           ConditionDescription:
      //             'Overall, (client) demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of <input type="text" id="txtFullScaleIQScore" /> (<input type="text" id="txtFullScaleIQPercentile" /> percentile), which falls within in the <input type="text" id="txtFullScaleIQRange" /> range of functioning',
      //           Score: null,
      //           ScorePercentile: null,
      //           ScoreRange: null,
      //           IndexId: null
      //         },
      //         {
      //           Id: 4,
      //           Condition: "If FSIQ is NOT meaningful",
      //           ConditionDescription:
      //             "Overall, (client) demonstrated an inconsistent performance on the WASI-II. As a result, (his/her) Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between subtests that constitute (his/her) Full-Scale score (FSIQ). Therefore, in order to better understand (his/her) cognitive strengths and weaknesses, a more in-depth look at all of (client’s) individual subtest scores is warranted.",
      //           Score: null,
      //           ScorePercentile: null,
      //           ScoreRange: null,
      //           IndexId: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   SubTests: [],
      //   TestSummaries: [
      //     {
      //       Id: 3,
      //       Name: "SUMMARY AT END OF COG SECTION:",
      //       TestId: 12,
      //       Descriptions:
      //         "Overall, (client’s) performance on the WASI-II provided a snapshot into (his/her) various cognitive abilities and strengths. (He/She) demonstrated well-developed <input type='text' id ='txtSummaryAbilities' /> abilities. However, (he/she) also evidenced relative challenges with <input type='text' id ='txtSummaryChallenges' />. These challenges should continue to be monitored and evaluated so as to help (him/her) continue to perform at (his/her) best."
      //     }
      //   ],
      //   ParentScaleTitles: [
      //     {
      //       Id: 57,
      //       ParentScaleName: "Verbal Comprehension",
      //       ParentScaleDescription:
      //         "(Client) demonstrated a relatively (inconsistent/consistent) performance on the subtests within the Verbal Comprehension Index (VCI). Specifically, (she/he) received a VCI Composite score of <input type='text' id='txtVerbalComprehensionScore' /> (<input type='text' id='txtVerbalComprehensionPercentile' /> percentile), which is in the <input type='text' id='txtVerbalComprehensionRange' /> range of functioning compared to other individuals (his/her) age. The VCI measured (client’s) verbal reasoning, knowledge and conceptualization.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 246,
      //           TestId: null,
      //           Name: "Similarities",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure verbal concept formation and abstract reasoning. It also involves crystallized intelligence, word knowledge, cognitive flexibility, auditory comprehension, long-term memory, associative and categorical thinking, distinction between nonessential and essential features, and verbal expression.",
      //           ParentScaleTitleId: 57,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 247,
      //           TestId: null,
      //           Name: "Vocabulary",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure word knowledge and verbal concept formation. It also measures crystallized intelligence, fund of knowledge, learning ability, verbal expression, long-term memory, and degree of vocabulary development.",
      //           ParentScaleTitleId: 57,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     },
      //     {
      //       Id: 58,
      //       ParentScaleName: "Perceptual Reasoning",
      //       ParentScaleDescription:
      //         "(Client) demonstrated a _____ performance on the subtests within the Fluid Reasoning Index (FRI). This index emphasizes visual-perceptual and visual-spatial reasoning, as well as conceptual reasoning and construction abilities requiring visual-perceptual integration. Specifically, (client) received a FRI Composite score of <input type='text' id='txtPerpetualReasonScore' /> (<input type='text' id='txtPerpetualReasonPercentile' /> percentile) which fell within the <input type='text' id='txtPerpetualReasonRange' /> range of functioning.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 248,
      //           TestId: null,
      //           Name: "Block Design",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure the ability to analyze and synthesize abstract visual stimuli. It also involved nonverbal concept formation and reasoning, broad visual intelligence, visual perception and organization, simultaneous processing, visual-motor coordination, learning, and the ability to separate figure-ground in visual stimuli.",
      //           ParentScaleTitleId: 58,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 249,
      //           TestId: null,
      //           Name: "Matrix Reasoning",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure fluid intelligence, broad visual intelligence, classification and spatial ability, knowledge of part-whole relationships, and simultaneous processing.",
      //           ParentScaleTitleId: 58,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 16,
      //   Name: "The Wechsler Adult Intelligence Scale 4",
      //   Abbreviation: "WAIS-IV",
      //   Descriptions:
      //     "The Wechsler Adult Intelligence Scale 4 is a test of intellectual abilities, which assesses both cognitive strengths and weaknesses in adolescents and adults 16-90 years of age.",
      //   DomainId: 5,
      //   DomainName: "Intelligence",
      //   SubTestType: "Subtest",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-10-05T16:19:52.917",
      //   ParentGroupScales: [],
      //   TestIndexes: [
      //     {
      //       Id: 5,
      //       IndexName: "Full Scale IQ",
      //       IndexDescription:
      //         "is a composite score that represents general intellectual functioning and is calculated from all of the subtests within the four main indices: Verbal Comprehension, Perceptual Reasoning, Working Memory and Processing Speed.",
      //       TestId: 16,
      //       CreatedDate: "2018-10-05T00:00:00",
      //       SubTests: [],
      //       IndexConditions: [
      //         {
      //           Id: 5,
      //           Condition: "If FSIQ is meaningful",
      //           ConditionDescription:
      //             'Overall, (client) demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of <input type="text" id="txtWASI4FullScaleIQScore" /> (<input type="text" id="txtWASI4FullScaleIQPercentile" /> percentile), which falls within in the <input type="text" id="txtWASI4FullScaleIQRange" /> range of functioning.',
      //           Score: null,
      //           ScorePercentile: null,
      //           ScoreRange: null,
      //           IndexId: null
      //         },
      //         {
      //           Id: 6,
      //           Condition: "If FSIQ is NOT meaningful",
      //           ConditionDescription:
      //             "Overall, (client) demonstrated an inconsistent performance on the WAIS-IV. As a result, (his/her) Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between the four Composite areas that constitute (his/her) Full-Scale score (FSIQ). Therefore, in order to better understand (his/her) cognitive strengths and weaknesses, a more in-depth look at all of (client’s) individual subtest scores is warranted.",
      //           Score: null,
      //           ScorePercentile: null,
      //           ScoreRange: null,
      //           IndexId: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 6,
      //       IndexName: "General Ability Index",
      //       IndexDescription:
      //         "is a composite score that provides an estimate of general intellectual ability, with reduced emphasis on working memory and processing speed relative to the FSIQ.",
      //       TestId: 16,
      //       CreatedDate: "2018-10-05T00:00:00",
      //       SubTests: [],
      //       IndexConditions: [],
      //       HasInput: true
      //     }
      //   ],
      //   SubTests: [],
      //   TestSummaries: [
      //     {
      //       Id: 5,
      //       Name: "SUMMARY AT END OF COG SECTION",
      //       TestId: 16,
      //       Descriptions:
      //         "Overall, (client’s) performance on the WAIS-IV provided a snapshot into (his/her) various cognitive abilities and strengths. (He/She) demonstrated well-developed <input type='text' id='txtWAIS4SummaryAbilitlies' /> abilities. However, (he/she) also evidenced relative challenges with <input type='text' id='txtWAIS4SummaryChallenges' /> These challenges should continue to be monitored and evaluated so as to help (him/her) continue to perform at (his/her) best."
      //     }
      //   ],
      //   ParentScaleTitles: [
      //     {
      //       Id: 106,
      //       ParentScaleName: "Verbal Comprehension",
      //       ParentScaleDescription:
      //         "(Client) demonstrated a relatively (inconsistent/consistent) performance on the subtests within the Verbal Comprehension Index (VCI). Specifically, (she/he) received a VCI Composite score of <input type='text' id='txtGeneralIndexScore' /> (<input type='text' id='txtGeneralIndexPercentile' /> percentile), which is in the <input type='text' id='txtGeneralIndexRange' /> range of functioning compared to other adults (his/her) age. The VCI measured (client’s) verbal reasoning, knowledge and conceptualization.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 457,
      //           TestId: null,
      //           Name: "Similarities",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure verbal concept formation and abstract  reasoning. It also involves crystallized intelligence, word knowledge,  cognitive flexibility, auditory comprehension, long-term memory,  associative and categorical thinking, distinction between nonessential and  essential features, and verbal expression.",
      //           ParentScaleTitleId: 106,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 458,
      //           TestId: null,
      //           Name: "Vocabulary",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure word knowledge and verbal concept formation. It also measures crystallized intelligence, fund of knowledge, learning ability, verbal expression, long-term memory, and degree of vocabulary development.",
      //           ParentScaleTitleId: 106,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 459,
      //           TestId: null,
      //           Name: "Information",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest is designed to measure a client’s ability to acquire, retain, and retrieve general factual knowledge. It involves crystallized intelligence, long-term memory, and the ability to retain and retrieve knowledge from the environment and/or formal instruction.",
      //           ParentScaleTitleId: 106,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 460,
      //           TestId: null,
      //           Name: "Comprehension",
      //           Abbreviation: null,
      //           Description:
      //             "It is designed to measure verbal reasoning and conceptualization, verbal comprehension and expression, the ability to evaluate and use past experience, and the ability to demonstrate practical knowledge and judgement. It also involved crystallized intelligence, knowledge of conventional standards of behavior, social judgement, long-term memory and common sense.",
      //           ParentScaleTitleId: 106,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     },
      //     {
      //       Id: 107,
      //       ParentScaleName: "Perceptual Reasoning",
      //       ParentScaleDescription:
      //         "(Client) demonstrated a <input type='text' id='txtPerpetualPerformanceScore' /> performance on the subtests within the Fluid Reasoning Index (FRI). This index emphasizes visual-perceptual and visual-spatial reasoning, as well as conceptual reasoning and construction abilities requiring visual-perceptual integration. Specifically, (client) received a FRI Composite score of <input type='text' id='txtPerpetualPerformanceFRIScore' /> (<input type='text' id='txtPerpetualPerformancePercentile' /> percentile) which fell within the <input type='text' id='txtPerpetualPerformanceRange' /> range of functioning.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 461,
      //           TestId: null,
      //           Name: "Block Design",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure the ability to analyze and synthesize abstract visual stimuli. It also involved nonverbal concept formation and reasoning, broad visual intelligence, visual perception and organization, simultaneous processing, visual-motor coordination, learning, and the ability to separate figure-ground in visual stimuli.",
      //           ParentScaleTitleId: 107,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 462,
      //           TestId: null,
      //           Name: "Matrix Reasoning",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure fluid intelligence, broad visual intelligence, classification and spatial ability, knowledge of part-whole relationships, and simultaneous processing.",
      //           ParentScaleTitleId: 107,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 463,
      //           TestId: null,
      //           Name: "Visual Puzzles",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure mental, non-motor construction ability, which requires visual and spatial reasoning, mental rotation, visual working memory, understanding part-whole relationships, and the ability to analyze and synthesize abstract visual stimuli.",
      //           ParentScaleTitleId: 107,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 464,
      //           TestId: null,
      //           Name: "Figure Weights",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest measures quantitative fluid reasoning and induction, as well as emphasized inductive or deductive logic.",
      //           ParentScaleTitleId: 107,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 465,
      //           TestId: null,
      //           Name: "Picture Completion",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure visual perception and organization, concentration, and visual recognition of essential details of objects.",
      //           ParentScaleTitleId: 107,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     },
      //     {
      //       Id: 108,
      //       ParentScaleName: "Working Memory",
      //       ParentScaleDescription:
      //         "Tasks within the Working Memory Index (WMI) measure attention, concentration, and working memory for both verbal and visual material. (Client) received a WMI Composite score of <input type='text' id='txtWMICompositeScore' /> (<input type='text' id='txtWMICompositePercentile' /> percentile) which fell within the <input type='text' id='txtWMICompositeRange' /> range compared to (his/her) peers.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 466,
      //           TestId: null,
      //           Name: "Digit Span",
      //           Abbreviation: null,
      //           Description:
      //             "requires cognitive flexibility, mental alertness, brief focused attention, auditory discrimination, and auditory rehearsal.  <ul><li>Forward task – measures auditory rehearsal and temporary storage capacity in working memory.</li>  <li>Backward task – involves working memory, transformation of information, mental manipulation, and may involve visuospatial imaging.</li>  <li>Sequencing task – measures working memory, mental manipulation, and complex sequencing.</li></ul>",
      //           ParentScaleTitleId: 108,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 467,
      //           TestId: null,
      //           Name: "Arithmetic",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest involves mental manipulation, concentration, brief focused attention, working memory, short- and long-term memory, numerical reasoning ability, applied computational ability, and mental alertness. Additionally, it requires sequential processing; fluid, quantitative, and logical reasoning; and quantitative knowledge.",
      //           ParentScaleTitleId: 108,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 468,
      //           TestId: null,
      //           Name: "Letter- Number Sequencing",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest involves auditory discrimination, brief focused attention, concentration, registration, and auditory rehearsal. It also measures sequential processing, the ability to compare stimuli based on quantity or alphabetic principles, working memory capacity, and mental manipulation.",
      //           ParentScaleTitleId: 108,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     },
      //     {
      //       Id: 109,
      //       ParentScaleName: "Processing Speed",
      //       ParentScaleDescription:
      //         "The Processing Speed domain measured (Client’s) speed of mental and graphomotor processing, as well as their ability to efficiently scan and process visual information.  (Client) received a PSI Composite score of <input type='text' id='txtPSICompositeScore' /> (<input type='text' id='txtPSICompositePercentile' /> percentile) which fell within the <input type='text' id='txtPSICompositeRange' /> range of functioning.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 469,
      //           TestId: null,
      //           Name: "Coding",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest measures processing speed, short-term visual memory, procedural and incidental learning ability, psychomotor speed, visual perception, visual-motor coordination, visual scanning ability, cognitive flexibility, attention, concentration, and motivation.",
      //           ParentScaleTitleId: 109,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 470,
      //           TestId: null,
      //           Name: "Symbol Search",
      //           Abbreviation: null,
      //           Description:
      //             "It involves visual-perceptual and decision-making speed, short-term visual memory, visual-motor coordination, inhibitory control, visual discrimination, psychomotor speed, sustained attention and concentration.",
      //           ParentScaleTitleId: 109,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 471,
      //           TestId: null,
      //           Name: "Cancellation",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest measures rate of test taking, speed of visual-perceptual processing and decision making, visual scanning ability, and visual-perceptual recognition and discrimination.",
      //           ParentScaleTitleId: 109,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 26,
      //   Name: "Woodcock-Johnson IV – Tests of Cognitive Abilities",
      //   Abbreviation: "WJ-IV COG",
      //   Descriptions:
      //     "Woodcock-Johnson IV – Tests of Cognitive Abilities is a test of intellectual abilities, which assesses both strengths and weaknesses in children and adults ages 2-90 years of age.",
      //   DomainId: 5,
      //   DomainName: "Intelligence",
      //   SubTestType: "Subtest",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-11-05T12:46:07.827",
      //   ParentGroupScales: [],
      //   TestIndexes: [
      //     {
      //       Id: 7,
      //       IndexName: "General Intellectual Ability (GIA)",
      //       IndexDescription:
      //         "is a composite score that represents an estimate of general intellectual functioning and is calculated from a combination of subtests that form various clusters: Comprehension Knowledge, Short Term Working Memory, Cognitive Processing Speed, Auditory Processing, Long Term Processing and Visual Processing.",
      //       TestId: 26,
      //       CreatedDate: "2018-11-05T00:00:00",
      //       SubTests: [],
      //       IndexConditions: [
      //         {
      //           Id: 7,
      //           Condition: "If GIA is meaningful",
      //           ConditionDescription:
      //             'Overall, (client) demonstrated a consistent performance on the WJ-IV and received a General Intellectual Ability (GIA) score of <input type="text" id="txtGIAScore" /> (<input type="text" id="txtGIAPercentile" /> percentile), which falls within the <input type="text" id="txtGIARange" /> range of functioning.',
      //           Score: null,
      //           ScorePercentile: null,
      //           ScoreRange: null,
      //           IndexId: null
      //         },
      //         {
      //           Id: 8,
      //           Condition: "If GIA is NOT meaningful",
      //           ConditionDescription:
      //             "Overall, (client) demonstrated an inconsistent performance on the WJ-IV. As a result, (his/her) GIA score cannot be interpreted meaningfully due to the significant discrepancies between the seven clusters. Therefore, in order to better understand (his/her) cognitive strengths and weaknesses, a more in-depth look at all of (client’s) individual subtest scores is warranted.",
      //           Score: null,
      //           ScorePercentile: null,
      //           ScoreRange: null,
      //           IndexId: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   SubTests: [],
      //   TestSummaries: [
      //     {
      //       Id: 6,
      //       Name: "SUMMARY AT END OF COG SECTION:",
      //       TestId: 26,
      //       Descriptions:
      //         "Overall, (client’s) performance on the WJ-IV provided a snapshot into (his/her) various cognitive abilities and strengths. (He/She) demonstrated well-developed <input type='text' id='txtWJIVAbilities' /> abilities. However, (he/she) also evidenced relative challenges with <input type='text' id='txtWJIVChallenges' />. These challenges should continue to be monitored and evaluated so as to help (him/her) continue to perform at (his/her) best."
      //     }
      //   ],
      //   ParentScaleTitles: [
      //     {
      //       Id: 134,
      //       ParentScaleName: "Comprehension-Knowledge <span>(Gc)</span>",
      //       ParentScaleDescription:
      //         "is a composite score that provides a estimate of crystalized intelligence or verbal ability, which is defined as a store of acquired knowledge that reflects the breadth and depth of knowledge of a culture. Comprehension-Knowledge (Gc) is composed of two tests Oral Vocabulary and General Information.<p>(Client) demonstrated a relatively (inconsistency/consistent) performance on the subtests within the Comprehension-Knowledge (Gc) cluster. Specifically, (she/he) received a Gc score of <input type='text' id='txtGCScore' /> (<input type='text' id='txtGCPercentile' /> percentile), which is in the <input type='text' id='txtGCRange' /> range of functioning compared to other individuals (his/her) age. The Gc cluster measured (client’s) breadth and depth of knowledge and skills, including verbal communication and reasoning ability</p>",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 593,
      //           TestId: null,
      //           Name: "Vocabulary",
      //           Abbreviation: null,
      //           Description:
      //             "Oral Vocabulary includes two subtests, Synonyms and Antonyms. Each subtest is designed to measure an aspect of vocabulary knowledge of spoken English to provide an estimate of an individual’s acquired knowledge.",
      //           ParentScaleTitleId: 134,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 594,
      //           TestId: null,
      //           Name: "General Information",
      //           Abbreviation: null,
      //           Description:
      //             "General Information includes two subtests, Where and What. The subtests are designed to measure an individual’s depth of knowledge and general information.",
      //           ParentScaleTitleId: 134,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     },
      //     {
      //       Id: 135,
      //       ParentScaleName: "Fluid Reasoning <span>(Gf)</span>",
      //       ParentScaleDescription:
      //         "is a composite score that provides an estimate of ability to reason, form concepts, and solve problems using unfamiliar information or novel procedures. Fluid reason requires deliberate and flexible control of attention to solve on the spot problems.<p>(Client) demonstrated a relatively (inconsistency/consistent) performance on the subtests within the Fluid Reasoning (Gf) cluster. Specifically, (she/he) received a Gf score of <input type='text' id='txtGfScore' /> (<input type='text' id='txtGfPercentile' /> percentile), which is in the <input type='text' id='txtGfRange' / range of functioning compared to other individuals (his/her) age. The Gf cluster measured (client’s) ability to reason, form concepts and solve problems using unfamiliar information or novel procedures.</p>",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 595,
      //           TestId: null,
      //           Name: "Number Series",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure quantitative reasoning and indicative reasoning, narrow abilities of fluid reasoning.",
      //           ParentScaleTitleId: 135,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 596,
      //           TestId: null,
      //           Name: "Concept Formation",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure concept formation, categorical reasoning and mental flexibility.",
      //           ParentScaleTitleId: 135,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 597,
      //           TestId: null,
      //           Name: "Analysis Synthesis",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest measures general deductive reasoning to draw conclusions from given conditions.",
      //           ParentScaleTitleId: 135,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     },
      //     {
      //       Id: 136,
      //       ParentScaleName: "Short-Term Working Memory <span>(Gwm)</span>",
      //       ParentScaleDescription:
      //         "is a composite score that provides an estimate of ability to apprehend and hold information in immediate awareness and then use or manipulate it to carry out a goal.<p>(Client) demonstrated a relatively (inconsistency/consistent) performance on the subtests within the Short-Term Working Memory (Gwm) cluster. Specifically, (she/he) received a Gwm score of <input type='text' id='txtGwmScore' /> (<input type='text' id='txtGwmPercentile' /> percentile), which is in the <input type='text' id='txtGwmRange' /> range of functioning compared to other individuals (his/her) age. The Gwm cluster measured (client’s) ability to apprehend and hold information in immediate awareness and then use or manipulate it.</p>",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 598,
      //           TestId: null,
      //           Name: "Verbal Attention",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest measures short-term working memory, specifically verbal working memory and attentional control.",
      //           ParentScaleTitleId: 136,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 599,
      //           TestId: null,
      //           Name: "Numbers Reversed",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest measures short-term working memory and attentional capacity.",
      //           ParentScaleTitleId: 136,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 600,
      //           TestId: null,
      //           Name: "Object Number Sequencing",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest measures short-term auditory working memory and working memory capacity.",
      //           ParentScaleTitleId: 136,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     },
      //     {
      //       Id: 137,
      //       ParentScaleName: "Cognitive Processing Speed <span>(Gs)</span>",
      //       ParentScaleDescription:
      //         "is a composite score that provides an estimate of ability to quickly perform both simple and complex cognitive tasks, particularly when measured under pressure to sustain controlled attention and concentration.<p>(Client) demonstrated a relatively (inconsistency/consistent) performance on the subtests within the Cognitive Processing Speed (Gs) cluster. Specifically, (she/he) received a Gs score of <input type='text' id='txtGsScore' /> (<input type='text' id='txtGsPercentile' /> percentile), which is in the <input type='text' id='txtGsRange' /> range of functioning compared to other individuals (his/her) age. The Gs cluster measured (client’s) ability to quickly perform both simple and complex cognitive tasks, particularly when measured under pressure to sustain controlled attention and concentration.</p>",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 645,
      //           TestId: null,
      //           Name: "Letter-Pattern Matching",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest measures perceptual speed and cognitive efficiency – the speed at which an individual can make visual symbol discriminations and identify common spelling patterns.",
      //           ParentScaleTitleId: 137,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 601,
      //           TestId: null,
      //           Name: "Pair Cancellation",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest measures executive processing, attention, concentration, and processing speed.",
      //           ParentScaleTitleId: 137,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     },
      //     {
      //       Id: 138,
      //       ParentScaleName: "Auditory Processing Speed <span>(Ga)</span>",
      //       ParentScaleDescription:
      //         "Auditory Processing Speed (Ga): (Client) demonstrated a relatively (inconsistency/consistent) performance on the subtests within the Auditory Processing Speed (Ga) cluster. Specifically, (she/he) received a Ga score of <input type='text' id='txtGaScore' /> (<input type='text' id='txtGaPercentile' /> percentile), which is in the <input type='text' id='txtGaPercentile' /> range of functioning compared to other individuals (his/her) age. The Ga cluster measured (client’s) ability to encode, synthesize, and discriminate auditory stimuli, including the ability to employ auditory information in task performance.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 602,
      //           TestId: null,
      //           Name: "Phonological Processing",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest measures speed of lexical access, a narrow ability of long-term retrieval.",
      //           ParentScaleTitleId: 138,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 603,
      //           TestId: null,
      //           Name: "Non-word Repetition",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest measures aspects of auditory processing and short-term working memory.",
      //           ParentScaleTitleId: 138,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     },
      //     {
      //       Id: 139,
      //       ParentScaleName: "Long-Term Retrieval <span>(Glr)</span>",
      //       ParentScaleDescription:
      //         "(Client) demonstrated a relatively (inconsistency/consistent) performance on the subtests within the Long-Term Retrieval (Glr) cluster. Specifically, (she/he) received a Glr score of <input type='text' id='txtGlrScore' /> (<input type='text' id='txtGlrPercentile' /> percentile), which is in the <input type='text' id='txtGlrRange' /> range of functioning compared to other individuals (his/her) age. The Glr cluster measured (client’s) ability to store information and fluently retrieve it later in the process of thinking.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 604,
      //           TestId: null,
      //           Name: "Recall",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure quantitative reasoning and indicative reasoning, narrow abilities of fluid reasoning.",
      //           ParentScaleTitleId: 139,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 605,
      //           TestId: null,
      //           Name: "Visual Auditory Learning",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest measures long-term storage and retrieval and associative memory.",
      //           ParentScaleTitleId: 139,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     },
      //     {
      //       Id: 140,
      //       ParentScaleName: "Visual Processing <span>(Gv)</span>",
      //       ParentScaleDescription:
      //         "(Client) demonstrated a relatively (inconsistency/consistent) performance on the subtests within the Visual Processing (Gv) cluster. Specifically, (she/he) received a Gv score of <input type='text' id='txtGvScore' /> (<input type='text' id='txtGvPercentile' /> percentile), which is in the <input type='text' id='txtGvRange' /> range of functioning compared to other individuals (his/her) age. The Gv cluster measured (client’s) ability to perceive, analyze, synthesize and think with visual patterns, including the ability to store and recall visual representations.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 606,
      //           TestId: null,
      //           Name: "Visualization",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest is designed to measure quantitative reasoning and indicative reasoning, narrow abilities of fluid reasoning.",
      //           ParentScaleTitleId: 140,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 607,
      //           TestId: null,
      //           Name: "Picture Recognition",
      //           Abbreviation: null,
      //           Description:
      //             "The subtest measures visual memory, a narrow ability of visual processing.",
      //           ParentScaleTitleId: 140,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: true
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 33,
      //   Name:
      //     "Wechsler Preschool and Primary Scale of Intelligence - Fourth Edition",
      //   Abbreviation: "WPPSI-IV",
      //   Descriptions:
      //     "Wechsler Preschool and Primary Scale of Intelligence - Fourth Edition is a test of intellectual abilities, which assesses both cognitive strengths and weaknesses in infants and children aged 2 years 6 months through 7 years 7 months (2:6-7:7).",
      //   DomainId: 5,
      //   DomainName: "Intelligence",
      //   SubTestType: "Subtest",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-12-15T14:13:33.93",
      //   ParentGroupScales: [
      //     {
      //       Id: 12,
      //       ParentGroupScaleName: "Intellectual Functioning",
      //       Description: null,
      //       ParentGroupSubScales: [
      //         {
      //           Id: 19,
      //           ParentGroupSubScaleName: "Full Scale",
      //           ParentGroupScaleId: 12,
      //           ParentScaleTitles: [
      //             {
      //               Id: 153,
      //               ParentScaleName: "Verbal Comprehension",
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 647,
      //                   TestId: null,
      //                   Name: "Similarities",
      //                   Abbreviation: null,
      //                   Description:
      //                     "The subtest is designed to measure verbal concept formation and abstract reasoning. It also involves crystallized intelligence, auditory comprehension, memory, associative and categorical thinking, distinction between nonessential and essential features, and verbal expression",
      //                   ParentScaleTitleId: 153,
      //                   CreatedDate: null
      //                 },
      //                 {
      //                   Id: 648,
      //                   TestId: null,
      //                   Name: "Vocabulary",
      //                   Abbreviation: null,
      //                   Description:
      //                     "The subtest is designed to measure word knowledge and verbal concept formation. It also measures crystallized intelligence, fund of knowledge, learning ability, verbal expression, long-term memory, and degree of vocabulary development.",
      //                   ParentScaleTitleId: 153,
      //                   CreatedDate: null
      //                 },
      //                 {
      //                   Id: 649,
      //                   TestId: null,
      //                   Name: "Information",
      //                   Abbreviation: null,
      //                   Description:
      //                     "This subtest is designed to measure a child’s ability to acquire, retain, and retrieve general factual knowledge. It involves crystallized intelligence, long-term memory, and the ability to retain and retrieve knowledge from the environment and/or school.",
      //                   ParentScaleTitleId: 153,
      //                   CreatedDate: null
      //                 },
      //                 {
      //                   Id: 650,
      //                   TestId: null,
      //                   Name: "Comprehension",
      //                   Abbreviation: null,
      //                   Description:
      //                     "It is designed to measure verbal reasoning and conceptualization, verbal comprehension and expression, the ability to evaluate and use past experience, and the ability to demonstrate practical knowledge and judgement. It also involved crystallized intelligence, knowledge of conventional standards of behavior, social judgement, long-term memory and common sense.",
      //                   ParentScaleTitleId: 153,
      //                   CreatedDate: null
      //                 }
      //               ],
      //               HasInput: false
      //             },
      //             {
      //               Id: 154,
      //               ParentScaleName: "Fluid Reasoning",
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 651,
      //                   TestId: null,
      //                   Name: "Matrix Reasoning",
      //                   Abbreviation: null,
      //                   Description:
      //                     "The subtest is designed to measure fluid intelligence, broad visual intelligence, classification and spatial ability, knowledge of part-whole relationships, simultaneous processing, and perceptual organization.",
      //                   ParentScaleTitleId: 154,
      //                   CreatedDate: null
      //                 },
      //                 {
      //                   Id: 652,
      //                   TestId: null,
      //                   Name: "Picture Concepts",
      //                   Abbreviation: null,
      //                   Description:
      //                     "The subtest measures fluid and inductive reasoning, visual-perceptual recognition and processing, and conceptual thinking.",
      //                   ParentScaleTitleId: 154,
      //                   CreatedDate: null
      //                 }
      //               ],
      //               HasInput: false
      //             },
      //             {
      //               Id: 155,
      //               ParentScaleName: "Visual-Spatial Reasoning",
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 653,
      //                   TestId: null,
      //                   Name: "Block Design",
      //                   Abbreviation: null,
      //                   Description:
      //                     "The subtest is designed to measure the ability to analyze and synthesize abstract visual stimuli. It also involved nonverbal concept formation and reasoning, broad visual intelligence, visual perception and organization, simultaneous processing, visual-motor coordination, learning, and the ability to separate figure-ground in visual stimuli.",
      //                   ParentScaleTitleId: 155,
      //                   CreatedDate: null
      //                 },
      //                 {
      //                   Id: 654,
      //                   TestId: null,
      //                   Name: "Object Assembly",
      //                   Abbreviation: null,
      //                   Description:
      //                     "It is designed to measure visual-perceptual organization, integration and synthesis of part-whole relationships, nonverbal reasoning, and trial-and-error learning. It also involves spatial ability, visual-motor coordination, cognitive flexibility, and persistence.",
      //                   ParentScaleTitleId: 155,
      //                   CreatedDate: null
      //                 }
      //               ],
      //               HasInput: false
      //             },
      //             {
      //               Id: 156,
      //               ParentScaleName: "Working Memory",
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 655,
      //                   TestId: null,
      //                   Name: "Picture Memory",
      //                   Abbreviation: null,
      //                   Description:
      //                     "The subtest measures visual working memory and working memory capacity through the use of meaningful stimuli.",
      //                   ParentScaleTitleId: 156,
      //                   CreatedDate: null
      //                 },
      //                 {
      //                   Id: 656,
      //                   TestId: null,
      //                   Name: "Zoo Locations",
      //                   Abbreviation: null,
      //                   Description:
      //                     "This subtest utilizes meaningful stimuli and proactive interference in order to measure spatial working memory.",
      //                   ParentScaleTitleId: 156,
      //                   CreatedDate: null
      //                 }
      //               ],
      //               HasInput: false
      //             },
      //             {
      //               Id: 157,
      //               ParentScaleName: "Processing Speed",
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 657,
      //                   TestId: null,
      //                   Name: "Bug Search",
      //                   Abbreviation: null,
      //                   Description:
      //                     "This subtest measures perceptual speed, short-term visual memory, visual-motor coordination, cognitive flexibility, visual discrimination, and concentration.",
      //                   ParentScaleTitleId: 157,
      //                   CreatedDate: null
      //                 },
      //                 {
      //                   Id: 658,
      //                   TestId: null,
      //                   Name: "Cancellation",
      //                   Abbreviation: null,
      //                   Description:
      //                     "This subtest measures perceptual speed, rate of test taking, speed of visual-processing and mental operation, visual scanning ability, and visual-perceptual recognition and discrimination. It may also involve attention, concentration, and visual recall.",
      //                   ParentScaleTitleId: 157,
      //                   CreatedDate: null
      //                 },
      //                 {
      //                   Id: 659,
      //                   TestId: null,
      //                   Name: "Animal Coding",
      //                   Abbreviation: null,
      //                   Description:
      //                     "It measures perceptual speed, short-term memory, learning and visual scanning ability, cognitive flexibility, attention, and motivation.",
      //                   ParentScaleTitleId: 157,
      //                   CreatedDate: null
      //                 }
      //               ],
      //               HasInput: false
      //             }
      //           ]
      //         }
      //       ],
      //       ParentScaleTitles: []
      //     }
      //   ],
      //   TestIndexes: [
      //     {
      //       Id: 8,
      //       IndexName: "Full Scale IQ",
      //       IndexDescription:
      //         "is a composite score that represents general intellectual functioning and is calculated from all of the subtests within the main indices.",
      //       TestId: 33,
      //       CreatedDate: "2018-12-15T00:00:00",
      //       SubTests: [],
      //       IndexConditions: [
      //         {
      //           Id: 9,
      //           Condition: "If FSIQ is meaningful",
      //           ConditionDescription:
      //             'Overall, (client) demonstrated a consistent performance on the WISC-V and received a Full-Scale IQ (FSIQ) score of <input type="text" id="txtWPSIIScore" /> (<input type="text" id="txtWPSIIPercentile" /> percentile), which falls within in the <input type="text" id="txtWPSIIRange" /> range of functioning.',
      //           Score: null,
      //           ScorePercentile: null,
      //           ScoreRange: null,
      //           IndexId: null
      //         },
      //         {
      //           Id: 10,
      //           Condition: "If FSIQ is NOT meaningful",
      //           ConditionDescription:
      //             "Overall, (client) demonstrated an inconsistent performance on the WPPSI-IV. As a result, (his/her) Full-Scale score cannot be interpreted meaningfully due to the significant discrepancies between the five Composite areas that constitute (his/her) Full-Scale score (FSIQ). Therefore, in order to better understand (his/her) cognitive strengths and weaknesses, a more in-depth look at all of (client’s) individual subtest scores is warranted.",
      //           Score: null,
      //           ScorePercentile: null,
      //           ScoreRange: null,
      //           IndexId: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 9,
      //       IndexName: "General Ability Index",
      //       IndexDescription:
      //         "is a composite score that provides an estimate of general intellectual ability, with reduced emphasis on working memory and processing speed relative to the FSIQ",
      //       TestId: 33,
      //       CreatedDate: "2018-12-15T00:00:00",
      //       SubTests: [],
      //       IndexConditions: [],
      //       HasInput: true
      //     }
      //   ],
      //   SubTests: [],
      //   TestSummaries: [
      //     {
      //       Id: 9,
      //       Name: "SUMMARY AT END OF COG SECTION",
      //       TestId: 33,
      //       Descriptions:
      //         "Overall, (client’s) performance on the WPPSI-IV provided a snapshot into (his/her) various cognitive abilities and strengths. (He/She) demonstrated well-developed  <input type='text' id='txtAbilities' /> abilities. However, (he/she) also evidenced relative challenges with <input type='text' id='txtChallenges' />. These challenges should continue to be monitored and evaluated so as to help (him/her) continue to perform at (his/her) best."
      //     }
      //   ],
      //   ParentScaleTitles: [
      //     {
      //       Id: 158,
      //       ParentScaleName: "Language",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 660,
      //           TestId: null,
      //           Name: "Receptive Vocabulary",
      //           Abbreviation: null,
      //           Description:
      //             "It is designed to measure receptive language ability and vocabulary development. It also involves lexical knowledge, fund of information, long-term memory, and perception of meaningful stimuli.",
      //           ParentScaleTitleId: 158,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 661,
      //           TestId: null,
      //           Name: "Picture Naming",
      //           Abbreviation: null,
      //           Description:
      //             "This subtest measures expressive language ability, specifically in the area of semantic (i.e., word knowledge) development. It also involves acquired knowledge, fund of information, long-term memory, and perception of meaningful stimuli.",
      //           ParentScaleTitleId: 158,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 14,
      //   Name: 'Wide Range Assessment of Memory and Learning 2',
      //   Abbreviation: 'WRAML2',
      //   Descriptions:
      //     'Wide Range Assessment of Memory and Learning 2 is an individually administered test battery designed to assess memory ability in individuals ages 5-90 years.',
      //   DomainId: 6,
      //   DomainName: 'Learning and Memory',
      //   SubTestType: 'Subtest',
      //   ScoreType: 'Score',
      //   DescriptionType: 'Description',
      //   CreatedDate: '2018-09-25T18:18:03.433',
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [
      //     {
      //       Id: 10,
      //       ParentGroupSubScaleName: 'Core Subtests and Indexes',
      //       ParentGroupScaleId: null,
      //       ParentScaleTitles: [
      //         {
      //           Id: 60,
      //           ParentScaleName: 'Verbal Memory Index',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 266,
      //               TestId: null,
      //               Name: 'Story Memory',
      //               Abbreviation: null,
      //               Description:
      //                 'Provides a measure of contextualized or meaningful verbal information. Given the need to remember extended, meaningful verbal information in everyday life (e.g., conversations, lectures, reading comprehension), performance on this subtest may be particularly important.',
      //               ParentScaleTitleId: 60,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 267,
      //               TestId: null,
      //               Name: 'Verbal Learning',
      //               Abbreviation: null,
      //               Description:
      //                 'Evaluates how well the individual actively learns and is able to recall initially unrelated verbal information with practice opportunities. A list of common nouns is repeated across four trials so that the Examiner can evaluate her ability to learn incrementally and then recall rote verbal information (e.g., remembering a grocery list, remembering the U.S. presidents of the 19th century).',
      //               ParentScaleTitleId: 60,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 61,
      //           ParentScaleName: 'Visual Memory Index',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 268,
      //               TestId: null,
      //               Name: 'Design Memory',
      //               Abbreviation: null,
      //               Description:
      //                 'Provides a measure of memory of visual material that is minimally meaningful. Five cards, each with an array of geometric shapes, are exposed and then after a brief delay the client is asked to draw what is remembered. Copying rote information from a chalkboard or remembering the shapes and locations of newly learned countries on a map are examples of everyday tasks tapping this type of visual memory. For this task, performance also is affected by attention, efficient scanning strategies, spatial skills, and executive skills.',
      //               ParentScaleTitleId: 61,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 269,
      //               TestId: null,
      //               Name: 'Picture Memory',
      //               Abbreviation: null,
      //               Description:
      //                 'Provides a measure of nonverbal immediate memory for contextualized information or meaningful information. Performance on this subtest may be noted in situations such as remembering where people sat around a table during a meeting earlier in the day or recalling the content of a photograph in a newspaper article that was read previously.  Good search strategies and sustained attention are important skills for this subtest.',
      //               ParentScaleTitleId: 61,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 62,
      //           ParentScaleName: 'Attention-Concentration Index',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 270,
      //               TestId: null,
      //               Name: 'Finger Windows',
      //               Abbreviation: null,
      //               Description:
      //                 'A measure of nonverbal, rote sequential recall. Although the Finger Windows subtest is a measure of visual rote recall, it also is heavily dependent on brief episodes of directed attention. An individual performing well on this subtest also may perform well learning an internal map to a new location or remembering sequential information from construction diagrams.',
      //               ParentScaleTitleId: 62,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 271,
      //               TestId: null,
      //               Name: 'Number/Letter',
      //               Abbreviation: null,
      //               Description:
      //                 'A measure of auditory, rote sequential recall. Although the Number Letter subtest is a measure of auditory rote recall, it is heavily dependent on brief episodes of directed attention. An individual performing well on this subtest also should perform well recording phone numbers, class assignments, or sporting team scores accurately.',
      //               ParentScaleTitleId: 62,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //       ],
      //     },
      //     {
      //       Id: 11,
      //       ParentGroupSubScaleName: 'Optional, Delay Recall, and Recognition Subtests',
      //       ParentGroupScaleId: null,
      //       ParentScaleTitles: [
      //         {
      //           Id: 63,
      //           ParentScaleName: 'Optional Subtests',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 272,
      //               TestId: null,
      //               Name: 'Sentence Memory',
      //               Abbreviation: null,
      //               Description:
      //                 'Requires the individual to repeat dictated single sentences of increasing length. This subtest evaluates immediate verbal memory skills similar to those needed to follow novel verbal directions or to relay a brief phone message accurately.',
      //               ParentScaleTitleId: 63,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 273,
      //               TestId: null,
      //               Name: 'Sound Symbol',
      //               Abbreviation: null,
      //               Description:
      //                 'A paired-associate task requiring the learner to recall sounds associated with various abstract figures. It is a cross-modal task (i.e., verbal-visual), and one that taps important aspects involved in the acquisition of the mechanics of reading or “word-calling.”',
      //               ParentScaleTitleId: 63,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 274,
      //               TestId: null,
      //               Name: 'Verbal Working Memory',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures how well an individual retains information that is manipulated while it is in the short-term memory buffer. On this subtest, the client listens to a list of nouns that are both animals and nonanimals and, immediately thereafter, must recall the words in a specified reorganized order. Two levels of difficulty are utilized. An individual performing well on this subtest also should perform well on tasks making heavy demands on verbal working memory, such as comprehending meanings in an extended reading passage, or listening to a radio sports broadcast and being able to figure out who won last night’s games as pairs of team nicknames are announced followed by their final scores.',
      //               ParentScaleTitleId: 63,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 275,
      //               TestId: null,
      //               Name: 'Symbolic Working memory',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures how well a person actively operates on and retains symbolic information (e.g., numbers, letters) prior to recall. On this subtest, the client first listens to a random list of numbers and then to a random list of numbers and letters. After each section, numbers are recalled in appropriate numerical order and then numbers and letters are recalled in numerical and alphabetical order. Although memory and attention are important for this task, executive skills also are important in finding an appropriate learning strategy. Rote sequential memory may be needed for solving some math problems or in learning irregularly spelled words.',
      //               ParentScaleTitleId: 63,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 64,
      //           ParentScaleName: 'Delay Recall Subtests',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 276,
      //               TestId: null,
      //               Name: 'Story Memory Delay Recall',
      //               Abbreviation: null,
      //               Description:
      //                 'Measures the examinees ability to remember presented stories after a delay interval of approximately 15 minutes',
      //               ParentScaleTitleId: 64,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 277,
      //               TestId: null,
      //               Name: 'Verbal Learning Delay Recall',
      //               Abbreviation: null,
      //               Description:
      //                 'Provides a measure of memory retrieval after the initial learning of new verbal information (approximately 15 minutes after initial learning).',
      //               ParentScaleTitleId: 64,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 278,
      //               TestId: null,
      //               Name: 'Sound Symbol Delay Recall',
      //               Abbreviation: null,
      //               Description:
      //                 'Provides a measure of memory retrieval after the initial learning of new sound symbol information (approximately 15 minutes after initial learning).',
      //               ParentScaleTitleId: 64,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 65,
      //           ParentScaleName: 'Recognition Subtests',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 279,
      //               TestId: null,
      //               Name: 'Story Memory Recognition',
      //               Abbreviation: null,
      //               Description:
      //                 'Provides a measure of recognition memory. A multiple choice format with questions from each story is used, providing an interesting comparison between free recall (i.e., in the immediate recall and the delayed recall Story Memory formats) and recognition.',
      //               ParentScaleTitleId: 65,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 280,
      //               TestId: null,
      //               Name: 'Verbal Learning Recognition',
      //               Abbreviation: null,
      //               Description:
      //                 'Provides a measure of recognition recall of verbal information presented previously (15 - 20 minutes prior).',
      //               ParentScaleTitleId: 65,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 281,
      //               TestId: null,
      //               Name: 'Design Memory Recognition',
      //               Abbreviation: null,
      //               Description:
      //                 'Provides a measure of recognition recall of visual information that was viewed approximately 20 minutes earlier. The individual is asked to look at and distinguish between designs that were and were not presented earlier in the testing session. Attention to visual detail and executive skills are involved in this task.',
      //               ParentScaleTitleId: 65,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 282,
      //               TestId: null,
      //               Name: 'Picture Memory Recognition',
      //               Abbreviation: null,
      //               Description:
      //                 'Provides a measure of recognition of meaningful visual information or contextualized visual information, such as that found in pictures, in scenes, or in the environment. An example would be correctly recognizing a place in a new city where one has been recently.',
      //               ParentScaleTitleId: 65,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //       ],
      //     },
      //   ],
      //   TestScoringTableDetails: null,
      // },
      // {
      //   Id: 18,
      //   Name: "Gray Oral Reading Tests 5",
      //   Abbreviation: "GORT-5",
      //   Descriptions:
      //     "Gray Oral Reading Tests 5 is a norm-referenced, reliable test that yields valid results for oral reading rate, accuracy, fluency, and comprehension for individuals ages 6 years 0 months (0-6) through 23 years 11 months (23-11).",
      //   DomainId: 6,
      //   DomainName: "Learning and Memory",
      //   SubTestType: null,
      //   ScoreType: null,
      //   DescriptionType: null,
      //   CreatedDate: "2018-11-05T11:46:46.7",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: [
      //     {
      //       Id: 4,
      //       Name: "Gray Oral Reading Tests–Fifth Edition",
      //       Description: null,
      //       TestId: 18,
      //       ScoreHeader: null,
      //       TableHeaderRowTitles: {
      //         Id: 32,
      //         Col1: "Oral Measure",
      //         Col2: "Percentile",
      //         Col3: "Age Level Equivalency",
      //         Col4: "Grade Level Equivalency",
      //         Col5: null,
      //         Col6: null,
      //         Description: null,
      //         ScoringTableHeaderId: 4,
      //         OrderNumber: 1,
      //         IsHeader: true,
      //         IsEditable: false
      //       },
      //       TestScoringTableScores: [
      //         {
      //           Id: 33,
      //           Col1: "Rate",
      //           Col2: "<Field>",
      //           Col3: "<Field>",
      //           Col4: "<Field>",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 4,
      //           OrderNumber: 2,
      //           IsHeader: false,
      //           IsEditable: true
      //         },
      //         {
      //           Id: 34,
      //           Col1: "Accuracy",
      //           Col2: "<Field>",
      //           Col3: "<Field>",
      //           Col4: "<Field>",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 4,
      //           OrderNumber: 3,
      //           IsHeader: false,
      //           IsEditable: true
      //         },
      //         {
      //           Id: 35,
      //           Col1: "Fluency",
      //           Col2: "<Field>",
      //           Col3: "<Field>",
      //           Col4: "<Field>",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 4,
      //           OrderNumber: 4,
      //           IsHeader: false,
      //           IsEditable: true
      //         },
      //         {
      //           Id: 36,
      //           Col1: "Comprehension",
      //           Col2: "<Field>",
      //           Col3: "<Field>",
      //           Col4: "<Field>",
      //           Col5: null,
      //           Col6: null,
      //           Description: null,
      //           ScoringTableHeaderId: 4,
      //           OrderNumber: 5,
      //           IsHeader: false,
      //           IsEditable: true
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   Id: 32,
      //   Name: "Wechsler Memory Scale-Fourth Edition",
      //   Abbreviation: "WMS-IV",
      //   Descriptions:
      //     "Wechsler Memory Scale-Fourth Edition is an individually administered battery designed to assess various memory and working memory abilities in individuals ages 16-90. The WMS-IV provides a detailed assessment of clinically-relevant aspects of memory functioning commonly report in individuals with suspected memory deficits or diagnoses with a wide range of neurological, psychiatric, and developmental disorders.",
      //   DomainId: 6,
      //   DomainName: "Learning and Memory",
      //   SubTestType: "Subtest",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-12-08T19:23:24.367",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [
      //     {
      //       Id: 637,
      //       TestId: 32,
      //       Name: "Brief Cognitive Status Exam",
      //       Abbreviation: "BCSE",
      //       Description:
      //         "This optional subtest assesses a variety of cognitive functions. The examinee performs simple tasks in a number of different area including orientation to time, mental control, clock drawing, incidental recall, automaticity and inhibitory control and verbal production.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 638,
      //       TestId: 32,
      //       Name: "Logical Memory",
      //       Abbreviation: "LM",
      //       Description:
      //         "This subtest assesses narrative memory under a free recall condition. Two short stories are orally presented. For older adults, one story is presented twice. The examinee is asked to retell each story from memory immediately after hearing it.<br /> <br />The delayed condition assesses long-term narrative memory with free recall and recognition tasks. The examinee is asked to retell both stories from the immediate condition. Then the examinee is asked yes/no questions about both stories.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 639,
      //       TestId: 32,
      //       Name: "Verbal Paired Associates",
      //       Abbreviation: "VPA",
      //       Description:
      //         "This subtest assesses verbal memory for associated word pairs. After 10 or 14 word pairs are read to the examinee, the first word of each pair is read, and the examinee is asked to provide the corresponding word. There are four trials of the same list in different orders.<br /> <br />The delayed condition assesses long-term recall for verbally paired information with cued recall and recognition tasks and includes a free recall task. The examinee is orally presented with the first word of each pair learned in the immediate condition and asked to provide the corresponding word.  The examinee is then read a list of word pairs and asked to identify each as either one of the word pairs he or she was asked to remember or a new word pair. Finally, during the optional word recall task, the examinee is asked to say as many of the words from the pairs as he or she can recall.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 640,
      //       TestId: 32,
      //       Name: "Designs",
      //       Abbreviation: "DE",
      //       Description:
      //         "This subtest assesses spatial memory for unfamiliar visual material. The examinee is shown a grid with 4-8 designs on a page for 10 seconds, which is then removed from view. The examinee then selects the designs from a set of cards and places the cards in a grid in the same place as previously shown.<br /> <br />The delated condition assesses long-term spatial and visual memory with free recall and recognition tasks. First, the examinee is asked to recreate the pages shown in the immediate condition with the cards and grid. Then he or she is shown a series of grids and asked to select the two designs that are correct and in the same place as on the pages shown in the immediate condition.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 641,
      //       TestId: 32,
      //       Name: "Visual Reproduction",
      //       Abbreviation: "VR",
      //       Description:
      //         "This subtest assesses memory for nonverbal visual stimuli. A series of five designs is shown, one at a time, for 10 seconds each. After each design is presented, the examinee is asked to draw the design from memory.<br /> <br />The delayed condition assesses long-term visual-spatial memory with free recall and recognition tasks and includes a direct copy task. First, the examinee is asked to draw the designs shown during the immediate condition from memory in any order. Second, the examinee is asked to choose which of six designs on a page matches the original design shown during the immediate condition. Third, for an optional copy task, the examinee is asked to draw the designs while looking at them.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 642,
      //       TestId: 32,
      //       Name: "Spatial Addition",
      //       Abbreviation: "SA",
      //       Description:
      //         "This subtest assesses visual-spatial working memory using a visual addition task. The examinee is shown, sequentially, two grids with blue and red circles. The examinee is then asked to add or subtract the location if the circles based on a set of rules.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 643,
      //       TestId: 32,
      //       Name: "Symbol Span",
      //       Abbreviation: "SSP",
      //       Description:
      //         "This subtest assesses visual working memory using novel visual stimuli. The examinee is briefly shown a series of abstract symbols on a page and then asked to select the symbols from an array of symbols, in the same order they were presented on the previous page.",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     }
      //   ],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 25,
      //   Name: "Wide Range Assessment of Visual Motor Ability",
      //   Abbreviation: "WRAVMA",
      //   Descriptions:
      //     "Wide Range Assessment of Visual Motor Ability is an efficient and economical measurement battery which assess three important aspects of visual-motor functioning in children and adolescents.",
      //   DomainId: 7,
      //   DomainName: "Sensorimotor Function",
      //   SubTestType: "Measure",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-11-05T12:38:16.28",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [
      //     {
      //       Id: 590,
      //       TestId: 25,
      //       Name: "Drawing",
      //       Abbreviation: null,
      //       Description:
      //         "Drawing Test measures integrated visual-motor ability",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 591,
      //       TestId: 25,
      //       Name: "Matching",
      //       Abbreviation: null,
      //       Description: "Matching Test measures visual-spatial ability",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     },
      //     {
      //       Id: 592,
      //       TestId: 25,
      //       Name: "Pegboard",
      //       Abbreviation: null,
      //       Description: "Pegboard Test measures fine motor ability",
      //       ParentScaleTitleId: null,
      //       CreatedDate: null
      //     }
      //   ],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 27,
      //   Name: "Beery-Buktenica Developmental Test of Visual-Motor Integration",
      //   Abbreviation: "Beery VMI",
      //   Descriptions:
      //     "The Beery-Buktenica Developmental Test of Visual-Motor Integration (Beery VMI) and it’s two supplemental standardized tests, Visual Perception and Motor Coordination, provide one of the most valid and economical visual-motor screening batteries available for preschool to adult ages. The purposes of the Beery VMI and its supplemental tests are to 1) help identify significant difficulties in visual-motor integration, 2) obtain needed services for individuals who exhibit these difficulties, 3) assess the effectiveness of educational and other intervention programs, and 4) sever as a research tool. The Beery VMI is designed to assess examinees 2-100 years of age.",
      //   DomainId: 7,
      //   DomainName: "Sensorimotor Function",
      //   SubTestType: null,
      //   ScoreType: null,
      //   DescriptionType: null,
      //   CreatedDate: "2018-12-08T18:21:02.147",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 17,
      //   Name: "Personality Inventory for Youth",
      //   Abbreviation: "PIY",
      //   Descriptions:
      //     "The Personality Inventory for Youth is a multidimensional, objective, self-report measures for use in the evaluation of children and adolescents aged 9 to 18 years (4th through 12th grades). The PIY assesses emotional and behavioral adjustment, family character and interaction, and school adjustment and academic ability.",
      //   DomainId: 8,
      //   DomainName: "Social-Emotional",
      //   SubTestType: "Subscale",
      //   ScoreType: "T-Score",
      //   DescriptionType: "Percentile Rank",
      //   CreatedDate: "2018-11-05T10:41:58.317",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [
      //     {
      //       Id: 110,
      //       ParentScaleName: "Cognitive Impairment Scale",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 472,
      //           TestId: null,
      //           Name: "Poor Achievement and Memory",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 110,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 473,
      //           TestId: null,
      //           Name: "Inadequate Abilities",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 110,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 474,
      //           TestId: null,
      //           Name: "Learning Problems",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 110,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 111,
      //       ParentScaleName: "Impulsivity and Distractibility Scale",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 475,
      //           TestId: null,
      //           Name: "Brashness",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 111,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 476,
      //           TestId: null,
      //           Name: "Distractibility and Overactivity",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 111,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 477,
      //           TestId: null,
      //           Name: "Impulsivity",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 111,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 112,
      //       ParentScaleName: "Delinquency Scale",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 478,
      //           TestId: null,
      //           Name: "Antisocial Behavior",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 112,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 479,
      //           TestId: null,
      //           Name: "Dyscontrol",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 112,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 480,
      //           TestId: null,
      //           Name: "Noncompliance",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 112,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 113,
      //       ParentScaleName: "Family Dysfunction Scale",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 481,
      //           TestId: null,
      //           Name: "Parent-Child Conflict",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 113,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 482,
      //           TestId: null,
      //           Name: "Parent Maladjustment",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 113,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 483,
      //           TestId: null,
      //           Name: "Marital Discord",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 113,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 114,
      //       ParentScaleName: "Reality Distortion Scale",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 484,
      //           TestId: null,
      //           Name: "Feelings of Alienation",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 114,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 485,
      //           TestId: null,
      //           Name: "Hallucinations and Delusions",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 114,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 115,
      //       ParentScaleName: "Somatic Concern Scale",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 486,
      //           TestId: null,
      //           Name: "Psychosomatic Syndrome",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 115,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 487,
      //           TestId: null,
      //           Name: "Muscular Tension and Anxiety",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 115,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 488,
      //           TestId: null,
      //           Name: "Preoccupation with Disease",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 115,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 116,
      //       ParentScaleName: "Psychological Discomfort Scale",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 489,
      //           TestId: null,
      //           Name: "Fear and Worry",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 116,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 490,
      //           TestId: null,
      //           Name: "Depression",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 116,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 491,
      //           TestId: null,
      //           Name: "Sleep Disturbance",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 116,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 117,
      //       ParentScaleName: "Social Withdrawal Scale",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 492,
      //           TestId: null,
      //           Name: "Social Introversion",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 117,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 493,
      //           TestId: null,
      //           Name: "Isolation",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 117,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 118,
      //       ParentScaleName: "Social Skill Deficit Scale",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 494,
      //           TestId: null,
      //           Name: "Limited Peer Status",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 118,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 495,
      //           TestId: null,
      //           Name: "Conflict with Peers",
      //           Abbreviation: null,
      //           Description: null,
      //           ParentScaleTitleId: 118,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      //   {
      //     "Id": 19,
      //     "Name": "House-Tree-Person",
      //     "Abbreviation": "H-T-P",
      //     "Descriptions": "The House-Tree-Person projective drawing technique is to elicit information about how an individual experience the self in relation to others and to the home environment.",
      //     "DomainId": 8,
      //     "DomainName": "Social-Emotional",
      //     "SubTestType": null,
      //     "ScoreType": null,
      //     "DescriptionType": null,
      //     "CreatedDate": "2018-11-05T11:52:07.29",
      //     "ParentGroupScales": [],
      //     "TestIndexes": [],
      //     "SubTests": [],
      //     "TestSummaries": [],
      //     "ParentScaleTitles": [],
      //     "TestModules": [],
      //     "ParentGroupSubScales": [],
      //     "TestScoringTableDetails": null
      // },
      // {
      //   Id: 20,
      //   Name: "Millon Clinical Multiaxial Inventory, 4th Edition",
      //   Abbreviation: "MCMI–IV",
      //   Descriptions:
      //     "Millon Clinical Multiaxial Inventory, 4th Edition (MCMI–IV) was designed to help determine personality style. The MCMI–IV is normed on a clinical population and is based on a biosocial-learning theory and evolutionary model in which personality formation is viewed as a process of learned strategies used to secure reinforcement and minimize punishment. More specifically, Millon’s personality theory considers behavioral response preferences in pleasure/pain, active/passive, and self/other domains.  The test also contains measures that gauge response style and test-taking attitude which can be used determine overall validity and provide adjustments to the profile when applicable.",
      //   DomainId: 8,
      //   DomainName: "Social-Emotional",
      //   SubTestType: "Scale",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-11-05T11:53:10.037",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [
      //     {
      //       Id: 119,
      //       ParentScaleName: "Clinical Personality Patterns",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 496,
      //           TestId: null,
      //           Name: "Schizoid (1)",
      //           Abbreviation: null,
      //           Description:
      //             "Schizoid individuals are noted for their lack of desire and their incapacity to experience deep pleasure or pain.",
      //           ParentScaleTitleId: 119,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 497,
      //           TestId: null,
      //           Name: "Avoidant (2A)",
      //           Abbreviation: null,
      //           Description:
      //             "Avoidant individuals experience few positive reinforcers from themselves or others.",
      //           ParentScaleTitleId: 119,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 498,
      //           TestId: null,
      //           Name: "Depressive (2B)",
      //           Abbreviation: null,
      //           Description:
      //             "There has been a significant loss, a sense of giving up, and a loss of hope that joy can be retrieved. The depressive personality experiences pain as permanent.",
      //           ParentScaleTitleId: 119,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 499,
      //           TestId: null,
      //           Name: "Dependent (3)",
      //           Abbreviation: null,
      //           Description:
      //             "Dependent individuals have learned not only to turn to others for nurturance and security but to wait passively for their leadership in providing them.",
      //           ParentScaleTitleId: 119,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 500,
      //           TestId: null,
      //           Name: "Histrionic (4)",
      //           Abbreviation: null,
      //           Description:
      //             "Although histrionic individuals turn to others no less than dependents do, they appear on the surface to be quite dissimilar from their passive counterparts. These individuals often exhibit an insatiable if not indiscriminate search for stimulation and affection.",
      //           ParentScaleTitleId: 119,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 501,
      //           TestId: null,
      //           Name: "Narcissistic (5)",
      //           Abbreviation: null,
      //           Description:
      //             "Narcissistic individuals are noted by their egotistic self-involvement, experiencing primary pleasure simply by passively being or focusing on themselves.",
      //           ParentScaleTitleId: 119,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 502,
      //           TestId: null,
      //           Name: "Antisocial (6A)",
      //           Abbreviation: null,
      //           Description:
      //             "Antisocial individuals act to counter the expectation of pain and depredation at the hands of others by engaging in duplicitous or illegal behavior designed to exploit the environment for self-gain.",
      //           ParentScaleTitleId: 119,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 503,
      //           TestId: null,
      //           Name: "Sadistic (Aggressive) 6B",
      //           Abbreviation: null,
      //           Description:
      //             "Individuals who are not judged to be antisocial may get personal pleasure and satisfaction in ways that humiliate others and violate their rights and feelings.",
      //           ParentScaleTitleId: 119,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 504,
      //           TestId: null,
      //           Name: "Compulsive (7)",
      //           Abbreviation: null,
      //           Description:
      //             "Compulsive individuals have been intimidated and coerced into accepting the demands and judgements imposed on them by others.",
      //           ParentScaleTitleId: 119,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 505,
      //           TestId: null,
      //           Name: "Negativistic (Passive-Aggressive) 8A",
      //           Abbreviation: null,
      //           Description:
      //             "Negativistic individuals are torn between following the rewards that are offered by others and those they desire themselves.",
      //           ParentScaleTitleId: 119,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 506,
      //           TestId: null,
      //           Name: "Masochistic (Self-Defeating) 8B",
      //           Abbreviation: null,
      //           Description:
      //             "Relating to others in an obsequious and self-sacrificing manner, masochistic individuals allow and perhaps encourage others to exploit or take advantage of them.",
      //           ParentScaleTitleId: 119,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 120,
      //       ParentScaleName: "Severe Personality Pathology",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 507,
      //           TestId: null,
      //           Name: "Schizotypal (S)",
      //           Abbreviation: null,
      //           Description:
      //             "Schizotypal personality disorder represents a cognitively dysfunctional and interpersonally detached orientation. Schizotypal individuals prefer social isolation with minimal personal attachments and obligations.",
      //           ParentScaleTitleId: 120,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 508,
      //           TestId: null,
      //           Name: "Borderline {C}",
      //           Abbreviation: null,
      //           Description:
      //             "Each borderline variant has structural defects and experiences intense endogenous moods with recurring periods of dejection and apathy, often interspersed with spells of anger, anxiety, or euphoria.",
      //           ParentScaleTitleId: 120,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 509,
      //           TestId: null,
      //           Name: "Paranoid (P)",
      //           Abbreviation: null,
      //           Description:
      //             "Paranoid personality displays a vigilant mistrust of others and an edgy defensiveness against anticipated criticism and deception. Paranoid individuals are distinctive in the immutability of their feelings and the inflexibility of their thoughts.",
      //           ParentScaleTitleId: 120,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 121,
      //       ParentScaleName: "Clinical Syndromes",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 510,
      //           TestId: null,
      //           Name: "Anxiety (A)",
      //           Abbreviation: null,
      //           Description:
      //             "An anxious patient often reports feeling either vaguely apprehensive or specifically phobic.",
      //           ParentScaleTitleId: 121,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 511,
      //           TestId: null,
      //           Name: "Somatoform (H)",
      //           Abbreviation: null,
      //           Description:
      //             "Patients with elevated scores on the Somatoform scale express their psychological difficulties through somatic channels, persistent periods of fatigue and weakness, and a preoccupation with ill health and with a variety of dramatic but largely nonspecific pains in different and unrelated regions of the body.",
      //           ParentScaleTitleId: 121,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 512,
      //           TestId: null,
      //           Name: "Bipolar Manic (N)",
      //           Abbreviation: null,
      //           Description:
      //             "Bipolar patients evidence periods of superficial elation, inflated self-esteem, restless overactivity and distractibility, pressured speech, impulsiveness, and irritability.",
      //           ParentScaleTitleId: 121,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 513,
      //           TestId: null,
      //           Name: "Dysthymia (D)",
      //           Abbreviation: null,
      //           Description:
      //             "Patients with high scores on the Dysthymia scale remain involved in everyday life but have been preoccupied over a period of years with feelings of discouragement or guilt, a lack of initiative, behavioral apathy, low self-esteem, and frequently expressed futility and self-deprecatory comments.",
      //           ParentScaleTitleId: 121,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 514,
      //           TestId: null,
      //           Name: "Alcohol Dependence (B)",
      //           Abbreviation: null,
      //           Description:
      //             "A patient with a high score on the Alcohol Dependence scale probably has a history of alcoholism, has tried to overcome the problem with minimal success, and as a consequence experiences considerable discomfort in family and work settings.",
      //           ParentScaleTitleId: 121,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 515,
      //           TestId: null,
      //           Name: "Drug Dependence (T)",
      //           Abbreviation: null,
      //           Description:
      //             "An elevated Drug Dependence score indicates that the patient probably has a recurrent or recent history of drug abuse, tends to find it difficult to restrain impulses or keep them within conventional social limits, and is unable to manage the personal consequences of this behavior.",
      //           ParentScaleTitleId: 121,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 516,
      //           TestId: null,
      //           Name: "Post-Traumatic Stress Disorder {R}",
      //           Abbreviation: null,
      //           Description:
      //             "Patients with elevated scores of Post-Traumatic Stress Disorder scale have experienced an event that involved a threat to their life and reacted to it with intense fear or feelings or helplessness.",
      //           ParentScaleTitleId: 121,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 122,
      //       ParentScaleName: "Severe Clinical Syndromes",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 517,
      //           TestId: null,
      //           Name: "Thought Disorder (SS)",
      //           Abbreviation: null,
      //           Description:
      //             "Depending on the length and course of the problem, patients with elevated scores on this scale are usually classified as “schizophrenic” or “schizophreniform” or as having a brief reactive psychosis.",
      //           ParentScaleTitleId: 122,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 518,
      //           TestId: null,
      //           Name: "Major Depression (CC)",
      //           Abbreviation: null,
      //           Description:
      //             "Patients with high scores on this scale are usually incapable of functioning in a normal environment, are severely depressed, and express a dread of the future, suicidal ideation, and a sense of hopeless resignation.",
      //           ParentScaleTitleId: 122,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 519,
      //           TestId: null,
      //           Name: "Delusional Disorder (PP)",
      //           Abbreviation: null,
      //           Description:
      //             "Patients with delusional disorder are frequently considered acutely paranoid and may become periodically belligerent, voicing irrational but interconnected delusions of a jealous, persecutory, or grandiose nature.",
      //           ParentScaleTitleId: 122,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 123,
      //       ParentScaleName: "Modifying Indices",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 520,
      //           TestId: null,
      //           Name: "Disclosure (X)",
      //           Abbreviation: null,
      //           Description:
      //             "The Disclosure index (Scale X) is the next index that may signify problematic response behavior, notably whether the patient was inclined to be frank and self-revealing or reticent and secretive.",
      //           ParentScaleTitleId: 123,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 521,
      //           TestId: null,
      //           Name: "Desirability (Y)",
      //           Abbreviation: null,
      //           Description:
      //             "The Desirability index (Scale Y) assesses the degree to which the patient’s results may have been affected by his or her inclination to appear socially attractive, morally virtuous, or emotionally well composed.",
      //           ParentScaleTitleId: 123,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 522,
      //           TestId: null,
      //           Name: "Debasement (Z)",
      //           Abbreviation: null,
      //           Description:
      //             "The Debasement index (Scale Z) generally reflects tendencies that are the opposite of those reflected by Scale Y.",
      //           ParentScaleTitleId: 123,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 124,
      //       ParentScaleName: "Random Response Indicators",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 523,
      //           TestId: null,
      //           Name: "Invalidity (V)",
      //           Abbreviation: null,
      //           Description:
      //             "Help detect random responding. Scale V consists of three items for which a True response is highly implausible if the test-take is responding to the item content.",
      //           ParentScaleTitleId: 124,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 524,
      //           TestId: null,
      //           Name: "Inconsistency (W)",
      //           Abbreviation: null,
      //           Description:
      //             "Help detect random responding. Scale W comprises 44 item response pairs: each keyed pair of responses is semantically contradictory.",
      //           ParentScaleTitleId: 124,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 21,
      //   Name: "Minnesota Personality Inventory-2",
      //   Abbreviation: "MMPI-2",
      //   Descriptions:
      //     "The Minnesota Personality Inventory-2 is a psychological test that assesses personality traits and psychopathology. The MMPI-2 is designed with 10 clinical scales which assess 10 major categories of abnormal human behavior, and four validity scales, which assess the person’s general test-taking attitude and whether they answered the items on the test in a truthful and accurate manner.",
      //   DomainId: 8,
      //   DomainName: "Social-Emotional",
      //   SubTestType: "Scale",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-11-05T12:01:28.97",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [
      //     {
      //       Id: 125,
      //       ParentScaleName: "Clinical Scales",
      //       ParentScaleDescription: null,
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 525,
      //           TestId: null,
      //           Name: "Hypochondriasis (Hs)",
      //           Abbreviation: null,
      //           Description:
      //             "The Hypochondriasis scale tapes a wide variety of vague and nonspecific complaints about bodily functioning. There are two primary factors that this subscale measures — poor physical health and gastrointestinal difficulties.",
      //           ParentScaleTitleId: 125,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 526,
      //           TestId: null,
      //           Name: "Depression (D)",
      //           Abbreviation: null,
      //           Description:
      //             "The Depression scale measures clinical depression, which is characterized by poor morale, lack of hope in the future, and a general dissatisfaction with one’s life.",
      //           ParentScaleTitleId: 125,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 527,
      //           TestId: null,
      //           Name: "Hysteria (Hy)",
      //           Abbreviation: null,
      //           Description:
      //             "The Hysteria scale primarily measures five components — poor physical health, shyness, cynicism, headaches and neuroticism.",
      //           ParentScaleTitleId: 125,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 528,
      //           TestId: null,
      //           Name: "Psychopathic Deviate (Pd)",
      //           Abbreviation: null,
      //           Description:
      //             "The Psychopathic Deviate scale measures general social maladjustment and the absence of strongly pleasant experiences.",
      //           ParentScaleTitleId: 125,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 529,
      //           TestId: null,
      //           Name: "Masculinity/Femininity (Mf)",
      //           Abbreviation: null,
      //           Description:
      //             "The Masculinity/Femininity scale measures interests in vocations and hobbies, aesthetic preferences, activity-passivity and personal sensitivity.",
      //           ParentScaleTitleId: 125,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 530,
      //           TestId: null,
      //           Name: "Paranoia (Pa)",
      //           Abbreviation: null,
      //           Description:
      //             "The Paranoia scale primarily measures interpersonal sensitivity, moral self-righteousness and suspiciousness",
      //           ParentScaleTitleId: 125,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 531,
      //           TestId: null,
      //           Name: "Psychasthenia (Pt)",
      //           Abbreviation: null,
      //           Description:
      //             "The Psychasthenia scale is intended to measure a person’s inability to resist specific actions or thoughts, regardless of their maladaptive nature.",
      //           ParentScaleTitleId: 125,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 532,
      //           TestId: null,
      //           Name: "Schizophrenia (Sc)",
      //           Abbreviation: null,
      //           Description:
      //             "The Schizophrenia scale measures bizarre thoughts, peculiar perceptions, social alienation, poor familial relationships, difficulties in concentration and impulse control, lack of deep interests, disturbing question of self-worth and self-identity, and sexual difficulties.",
      //           ParentScaleTitleId: 125,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 533,
      //           TestId: null,
      //           Name: "Hypomania (Ma)",
      //           Abbreviation: null,
      //           Description:
      //             "The Hypomania scale is intended to measure milder degrees of excitement, characterized by an elated but unstable mood, psychomotor excitement.",
      //           ParentScaleTitleId: 125,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 534,
      //           TestId: null,
      //           Name: "Social Introversion (Si)",
      //           Abbreviation: null,
      //           Description:
      //             "The Social Introversion scale measures the social introversion and extroversion of a person.",
      //           ParentScaleTitleId: 125,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 126,
      //       ParentScaleName: "Validity Scales",
      //       ParentScaleDescription:
      //         "The Minnesota Multiphasic Personality Inventory-2 (MMPI-2) contains four validity scales designed to measure a person’s test-taking attitude and approach to the test.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 535,
      //           TestId: null,
      //           Name: "Lie (L)",
      //           Abbreviation: null,
      //           Description:
      //             "The Lie scale is intended to identify individuals who are deliberately trying to avoid answering the MMPI honestly and in a frank manner.",
      //           ParentScaleTitleId: 126,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 536,
      //           TestId: null,
      //           Name: "F",
      //           Abbreviation: null,
      //           Description:
      //             "The F scale is intended to detect unusual or atypical ways of answering the test items.",
      //           ParentScaleTitleId: 126,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 537,
      //           TestId: null,
      //           Name: "Back F (F<sup>b</sup>)",
      //           Abbreviation: null,
      //           Description:
      //             "The Back F scale measures the same issues as the F scale, except only during the last half of the test.",
      //           ParentScaleTitleId: 126,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 538,
      //           TestId: null,
      //           Name: "K",
      //           Abbreviation: null,
      //           Description:
      //             "The K scale is designed to identify psychopathology in people who otherwise would have profiles within the normal range.",
      //           ParentScaleTitleId: 126,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 22,
      //   Name: "Minnesota Personality Inventory-A",
      //   Abbreviation: "MMPI-A",
      //   Descriptions:
      //     "The Minnesota Personality Inventory-A is a self-report instrument designed to aid in the assessment of a wide range of clinical conditions.",
      //   DomainId: 8,
      //   DomainName: "Social-Emotional",
      //   SubTestType: "Scale",
      //   ScoreType: "Score",
      //   DescriptionType: "Description",
      //   CreatedDate: "2018-11-05T12:10:43.133",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [
      //     {
      //       Id: 160,
      //       ParentScaleName: "Clinical",
      //       ParentScaleDescription:
      //         "The Minnesota Personality Inventory-A is a self-report instrument designed to aid in the assessment of a wide range of clinical conditions.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 539,
      //           TestId: null,
      //           Name: "Hypochondriasis (Hs)",
      //           Abbreviation: null,
      //           Description:
      //             "The Hypochondriasis scale tapes a wide variety of vague and nonspecific complaints about bodily functioning. There are two primary factors that this subscale measures — poor physical health and gastrointestinal difficulties.",
      //           ParentScaleTitleId: 160,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 540,
      //           TestId: null,
      //           Name: "Depression (D)",
      //           Abbreviation: null,
      //           Description:
      //             "The Depression scale measures clinical depression, which is characterized by poor morale, lack of hope in the future, and a general dissatisfaction with one’s life.",
      //           ParentScaleTitleId: 160,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 541,
      //           TestId: null,
      //           Name: "Hysteria (Hy)",
      //           Abbreviation: null,
      //           Description:
      //             "The Hysteria scale primarily measures five components — poor physical health, shyness, cynicism, headaches and neuroticism.",
      //           ParentScaleTitleId: 160,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 542,
      //           TestId: null,
      //           Name: "Psychopathic Deviate (Pd)",
      //           Abbreviation: null,
      //           Description:
      //             "The Psychopathic Deviate scale measures general social maladjustment and the absence of strongly pleasant experiences.",
      //           ParentScaleTitleId: 160,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 543,
      //           TestId: null,
      //           Name: "Masculinity/Femininity (Mf)",
      //           Abbreviation: null,
      //           Description:
      //             "The Masculinity/Femininity scale measures interests in vocations and hobbies, aesthetic preferences, activity-passivity and personal sensitivity.",
      //           ParentScaleTitleId: 160,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 544,
      //           TestId: null,
      //           Name: "Paranoia (Pa)",
      //           Abbreviation: null,
      //           Description:
      //             "The Paranoia scale primarily measures interpersonal sensitivity, moral self-righteousness and suspiciousness",
      //           ParentScaleTitleId: 160,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 545,
      //           TestId: null,
      //           Name: "Psychasthenia (Pt)",
      //           Abbreviation: null,
      //           Description:
      //             "The Psychasthenia scale is intended to measure a person’s inability to resist specific actions or thoughts, regardless of their maladaptive nature.",
      //           ParentScaleTitleId: 160,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 546,
      //           TestId: null,
      //           Name: "Schizophrenia (Sc)",
      //           Abbreviation: null,
      //           Description:
      //             "The Schizophrenia scale measures bizarre thoughts, peculiar perceptions, social alienation, poor familial relationships, difficulties in concentration and impulse control, lack of deep interests, disturbing question of self-worth and self-identity, and sexual difficulties.",
      //           ParentScaleTitleId: 160,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 547,
      //           TestId: null,
      //           Name: "Hypomania (Ma)",
      //           Abbreviation: null,
      //           Description:
      //             "The Hypomania scale is intended to measure milder degrees of excitement, characterized by an elated but unstable mood, psychomotor excitement.",
      //           ParentScaleTitleId: 160,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 548,
      //           TestId: null,
      //           Name: "Social Introversion (Si)",
      //           Abbreviation: null,
      //           Description:
      //             "The Social Introversion scale measures the social introversion and extroversion of a person.",
      //           ParentScaleTitleId: 160,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     },
      //     {
      //       Id: 127,
      //       ParentScaleName: "Validity Scales",
      //       ParentScaleDescription:
      //         "The Minnesota Multiphasic Personality Inventory-A (MMPI-A) contains eight validity scales used to describe the extent of the individual’s cooperation with the assessment. It can indicate whether the individual wanted to call attention to his or her symptoms or, conversely, if he or she was inclined to deny problems.",
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 549,
      //           TestId: null,
      //           Name: "CNS",
      //           Abbreviation: null,
      //           Description: "“Cannot Say”. Questions not answered.",
      //           ParentScaleTitleId: 127,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 550,
      //           TestId: null,
      //           Name: "VRIN",
      //           Abbreviation: null,
      //           Description:
      //             "Variable Response Inconsistency. Answering similar/opposite question pairs inconsistently.",
      //           ParentScaleTitleId: 127,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 551,
      //           TestId: null,
      //           Name: "TRIN",
      //           Abbreviation: null,
      //           Description:
      //             "True Response Inconsistency. Answering questions all true/all false.",
      //           ParentScaleTitleId: 127,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 552,
      //           TestId: null,
      //           Name: "F",
      //           Abbreviation: null,
      //           Description:
      //             "The F scale is intended to detect unusual or atypical ways of answering the test items.",
      //           ParentScaleTitleId: 127,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 553,
      //           TestId: null,
      //           Name: "F1",
      //           Abbreviation: null,
      //           Description:
      //             "The F1 scale is intended to detect unusual or atypical ways of answering questions in the first 350 items",
      //           ParentScaleTitleId: 127,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 554,
      //           TestId: null,
      //           Name: "F2",
      //           Abbreviation: null,
      //           Description:
      //             "The F2 scale is intended to detect unusual or atypical ways of answering questions after the first 240 items.",
      //           ParentScaleTitleId: 127,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 555,
      //           TestId: null,
      //           Name: "L",
      //           Abbreviation: null,
      //           Description:
      //             "The Lie scale is intended to identify individuals who are deliberately trying to avoid answering the MMPI honestly and in a frank manner.",
      //           ParentScaleTitleId: 127,
      //           CreatedDate: null
      //         },
      //         {
      //           Id: 556,
      //           TestId: null,
      //           Name: "K",
      //           Abbreviation: null,
      //           Description: "Defensiveness. Denial/Evasiveness.",
      //           ParentScaleTitleId: 127,
      //           CreatedDate: null
      //         }
      //       ],
      //       HasInput: false
      //     }
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 29,
      //   Name: "Rorschach Inkblot Method",
      //   Abbreviation: "Rorschach",
      //   Descriptions:
      //     "Rorschach Inkblot Method is a projective free response measure that prompts the examinee to provide responses to a series of inkblots. Responses are carefully analyzed according to the Comprehensive System. The test provides a measure of personality functioning across various domains including capacity for control, tolerance for stress, affect, self perception, interpersonal perception, information processing, cognitive mediation, and ideation.",
      //   DomainId: 8,
      //   DomainName: "Social-Emotional",
      //   SubTestType: null,
      //   ScoreType: null,
      //   DescriptionType: null,
      //   CreatedDate: "2018-12-08T18:35:00.367",
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null
      // },
      // {
      //   Id: 30,
      //   Name: 'Trauma Symptom Checklist for Children',
      //   Abbreviation: 'TSCC',
      //   Descriptions:
      //     'Trauma Symptom Checklist for Children is a self-report measure of posttraumatic distress and related psychological symptomatology. It is intended for use in the evaluation of children who have experienced traumatic events, including childhood physical and sexual abuse, victimization by peers (e.g., physical or sexual assault), major losses, the witnessing of violence done to others, and natural disasters.',
      //   DomainId: 8,
      //   DomainName: 'Social-Emotional',
      //   SubTestType: 'Scale',
      //   ScoreType: 'T-Score',
      //   DescriptionType: 'Description',
      //   CreatedDate: '2018-12-08T18:48:36.503',
      //   ParentGroupScales: [],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [
      //     {
      //       Id: 142,
      //       ParentScaleName: 'Validity Scale',
      //       ParentScaleDescription:
      //         'TSCC has two validity scales: one that taps a child’s tendency to deny any symptomatology and one that indexes a tendency to overrespond to symptom items.  <ul><li><b>Underresponse (UND) &#10142;</b> The UND scale reflects the extent to which the respondent denied behaviors, thoughts, or feelings that most others would report at some nonzero level.</li>  <li><b>Hyperresponse (HYP) &#10142;</b> Is when the child indiscriminately endorses the highest frequency point for many or all symptom items.</li></ul>',
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 608,
      //           TestId: null,
      //           Name: 'Underresponse (UND)',
      //           Abbreviation: null,
      //           Description:
      //             'Consists of the number of 0s endorsed for those items least likely to receive a 0 in the normative sample. Reflects a tendency toward denial, a general under-endorsement response set, or a need to appear unusually symptom-free.',
      //           ParentScaleTitleId: 142,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 609,
      //           TestId: null,
      //           Name: 'Hyperresponse (HYP)',
      //           Abbreviation: null,
      //           Description:
      //             'Consists of the number of 3s marked on diverse items that rarely received a 3 in the normative sample. Indicates a general overresponse to TSCC items, a specific need to appear especially symptomatic, or a state of being overwhelmed by traumatic stress.',
      //           ParentScaleTitleId: 142,
      //           CreatedDate: null,
      //         },
      //       ],
      //       HasInput: false,
      //     },
      //     {
      //       Id: 143,
      //       ParentScaleName: 'Clinical Scale',
      //       ParentScaleDescription:
      //         'The clinical scales of the TSCC measure the extent to which the child endorses six different types of potentially trauma-related symptoms. Five of the six scales (all but PTS) are nonoverlapping at the item level. Two of these clinical scales (DIS and SC) also contain scorable subscales, based upon principle components analyses and scale content.  <ul><li><b>Anxiety (ANX) &#10142;</b> Scores on the Anxiety (ANX) scale reflect the extent to which the child is experiencing generalized anxiety, hyperarousal, and worry, as well as specific fears of men or women, of the dark, and of being killed. Also tapped by this scale are episodes of free-floating anxiety and fears of impeding danger.</li>  <li><b>Depression (DEP) &#10142;</b> The Depression (DEP) scale taps feelings of sadness, unhappiness, and loneliness; episodes of tearfulness; and depressive cognitions such as guilt and self-denigration.</li>  <li><b>Anger (ANG)  &#10142;</b> Scores on the Anger (ANG) scale indicate the extent of angry thoughts, feelings, and behaviors reported by the child.</li>  <li><b>Posttraumatic Stress &#10142;</b> The Posttraumatic Stress (PTS) scale consists of items reflecting classic posttraumatic symptoms.</li>  <li><b>Dissociation (DIS) &#10142;</b> The Dissociation (DIS) scale measures the extent to which the child experiences mild-to-moderate dissociative symptomatology.</li>  <li><b>Sexual Concerns (SC) &#10142;</b> The Sexual Concerns (SC) scale measures sexual distress and preoccupation.</li></ul>',
      //       CreatedDate: null,
      //       SubTests: [
      //         {
      //           Id: 610,
      //           TestId: null,
      //           Name: 'Anxiety (ANX)',
      //           Abbreviation: null,
      //           Description:
      //             'Generalized anxiety, hyperarousal, and worry; specific fears (e.g., of men, women, or both; of the dark; of being killed); episodes of free-floating anxiety; and a sense of impeding danger.',
      //           ParentScaleTitleId: 143,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 611,
      //           TestId: null,
      //           Name: 'Depression (DEP)',
      //           Abbreviation: null,
      //           Description:
      //             'Feelings of sadness, unhappiness, and loneliness; episodes of tearfulness; depressive cognitions such as guilt and self-denigration; and self-injuriousness and suicidality.',
      //           ParentScaleTitleId: 143,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 612,
      //           TestId: null,
      //           Name: 'Anger (ANG)',
      //           Abbreviation: null,
      //           Description:
      //             'Any thoughts, feelings, and behaviors, including feeling mad, feeling mean, and hating others; having difficulty de-escalating anger; wanting to yell at or hurt people; and arguing and fighting.',
      //           ParentScaleTitleId: 143,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 613,
      //           TestId: null,
      //           Name: 'Posttraumatic Stress (PTS)',
      //           Abbreviation: null,
      //           Description:
      //             'Posttraumatic symptoms, including intrusive thoughts, sensations, and memories of painful past events; nightmares; fears; and cognitive avoidance of painful feelings.',
      //           ParentScaleTitleId: 143,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 614,
      //           TestId: null,
      //           Name: 'Dissociation (DIS)',
      //           Abbreviation: null,
      //           Description:
      //             'Dissociative symptomatology, including derealization; one’s mind going blank; emotional numbing; pretending to be someone else or somewhere else; day-dreaming; memory problems; and dissociative avoidance. Has two subscales: DIS-O (Overt Dissociation) and DIS-F (Fantasy).',
      //           ParentScaleTitleId: 143,
      //           CreatedDate: null,
      //         },
      //         {
      //           Id: 615,
      //           TestId: null,
      //           Name: 'Sexual Concerns (SC)',
      //           Abbreviation: null,
      //           Description:
      //             'Sexual thoughts or feelings that are atypical when they occur earlier than expected or with greater than normal frequency; sexual conflicts; negative responses to sexual stimuli; and fear of being sexually exploited. Has two subscales: SC-P (Sexual Preoccupation) and SC-D (Sexual Distress)',
      //           ParentScaleTitleId: 143,
      //           CreatedDate: null,
      //         },
      //       ],
      //       HasInput: false,
      //     },
      //   ],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null,
      // },
      // {
      //   Id: 15,
      //   Name: 'Behavior Assessment System for Children',
      //   Abbreviation: 'BASC-3',
      //   Descriptions:
      //     'The Behavior Assessment System for Children is a multimethod, multidimensional system used to evaluate the behavior and self-perceptions of children and young adults ages 2 through 25 years.',
      //   DomainId: 8,
      //   DomainName: 'Social-Emotional',
      //   SubTestType: 'Scale',
      //   ScoreType: 'Score',
      //   DescriptionType: 'Description',
      //   CreatedDate: '2018-09-27T09:41:51.087',
      //   ParentGroupScales: [
      //     {
      //       Id: 9,
      //       ParentGroupScaleName: 'Self-Report of Personality',
      //       Description:
      //         'this personality inventory consists of statements that respondents answer in one of two ways. Some of the items require a true or false response, while others use a four-point scale of frequency, ranging from Never to Almost Always. It has three age-level forms: child (ages 8-11), adolescent (ages 12-21), and young adults attending a postsecondary school (ages 18-25).',
      //       ParentGroupSubScales: [],
      //       ParentScaleTitles: [
      //         {
      //           Id: 66,
      //           ParentScaleName: 'Validity Indexes',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 283,
      //               TestId: null,
      //               Name: 'F Index',
      //               Abbreviation: null,
      //               Description:
      //                 'This index assesses the possibility that a child rated him- or herself in an inordinately negative fashion or, in fact, has severe diverse problems requiring immediate attention. It may also be considered a “faking bad” index because individuals, in an effort to look severely disturbed, may choose items that reflect an abnormally high number of symptoms.',
      //               ParentScaleTitleId: 66,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 284,
      //               TestId: null,
      //               Name: 'L Index',
      //               Abbreviation: null,
      //               Description:
      //                 'This index is designed to detect a response set that may be characterized as one of social desirability or “faking good.” A high score may simply reflect a high degree of psychological naivete and below-average insight into one’s own behavior and feelings. Alternatively, a high score may indicate that the individual is defensive or unwilling to share information about him or herself. It may also detect responses that tend to present an idealized view of the self; some people may choose item responses that correspond to the image they wish others had of them and not to how they really are.',
      //               ParentScaleTitleId: 66,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 285,
      //               TestId: null,
      //               Name: 'V Index',
      //               Abbreviation: null,
      //               Description:
      //                 'This index consists of nonsensical items that may be marked because of carelessness or a failure to understand the questions due to limited reading skills or cooperation with assessment procedures.',
      //               ParentScaleTitleId: 66,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 67,
      //           ParentScaleName: 'Clinical Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 286,
      //               TestId: null,
      //               Name: 'Alcohol Abuse',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses the tendency to use alcohol in ways that could lead to alcohol abuse.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 287,
      //               TestId: null,
      //               Name: 'Anxiety',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual. High scorers on this scale may feels a sense of dread and may be troubled by obsessive, intrusive, and bothersome thoughts. At clinically significant score levels, these thoughts may produce confusion in the decision-making process.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 288,
      //               TestId: null,
      //               Name: 'Attention Problems',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale was designed for use in diagnosing the presence or absence of the core symptoms of attention-deficit/hyperactivity disorder (ADHD). The scale measures the inability to maintain attention and the tendency to be easily distracted from tasks requiring attention.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 289,
      //               TestId: null,
      //               Name: 'Attitude to School',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale surveys the respondent’s general opinion of the utility of school, along with his or her level of comfort with school-related matters.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 290,
      //               TestId: null,
      //               Name: 'Attitude to Teachers',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses the individual’s perception of teachers as being uncaring, unfair, or unmotivated to help their students. Scores may fluctuate in reaction to recent occurrences of conflict with (or special assistance from) a teacher or school administrator.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 291,
      //               TestId: null,
      //               Name: 'Atypicality',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale evaluates unusual thoughts and perceptions (e.g., seeing or hearing things that are not there, feeling that one is being watched or targeted) that are commonly associated with severe forms of psychopathology such as schizophrenia.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 292,
      //               TestId: null,
      //               Name: 'Depression',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses traditional symptoms of depression, including feelings of loneliness, sadness, and an inability to enjoy life. A sense of hopelessness, pessimism, and dread underlies many of the items.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 293,
      //               TestId: null,
      //               Name: 'Hyperactivity',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale focuses primarily on the excessive activity level associated with ADHD disorders. It assesses behaviors such as having trouble standing still, talking while others are talking, and being too noisy.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 294,
      //               TestId: null,
      //               Name: 'Locus of Control',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses an individual’s perception of his or her level of control over external events. Low scores on this scale indicate the perception of having internal control over events, whereas a high score indicates the belief of being controlled by others or by fate or some other abstract force. These external; forces typically include authority figures such as parents or teachers.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 295,
      //               TestId: null,
      //               Name: 'School Maladjustment',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses the perceived difficulties associated with attending postsecondary institutions. Such difficulties might include boredom, feeling overwhelmed by school demands, feeling pressured to go to school, and generally lacking motivation to attend classes and do well academically. This scale is designed to show the student’s coping methods in making the challenging transition from secondary to postsecondary school.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 296,
      //               TestId: null,
      //               Name: 'Sensation Seeking',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses the respondent’s seeking of varied, novel, complex, and intense sensations and experiences, and the willingness to take physical, social, legal, and financial risks for the sake of such experience. This is assessed through investigating both the desire to engage in thrilling or potentially hazardous activities and a preference for excitement associated with risk-taking.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 297,
      //               TestId: null,
      //               Name: 'Sense of Inadequacy',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses perceptions of low achievement expectations, a tendency not to persevere, and a perception of being unsuccessful (primarily in academic endeavors). The person may feel inadequate to meet expectations set by either him- or herself or by others. This scale is related to the concept of level of aspiration, in that a child who sets or accepts unrealistically high goals would be likely to score high on this scale.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 298,
      //               TestId: null,
      //               Name: 'Social Stress',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses the level of stress children experience in relation to their interactions with peers and others. Feelings of tension, pressure, and a lack of coping resources (especially outlets through close friends and social contact) are evident in social stress.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 299,
      //               TestId: null,
      //               Name: 'Somatization',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses the tendency to complain about relatively minor physical problems as an expression of psychological difficulties. It evaluates the level and nature of a series of health-related problems, fears, and concerns. The various physical complaints noted may be experienced as real or imaginary but typically are psychogenic if more than a few items are marked.',
      //               ParentScaleTitleId: 67,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 68,
      //           ParentScaleName: 'Adaptive Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 300,
      //               TestId: null,
      //               Name: 'Interpersonal Relations',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses the individual’s reports of success in relating to others and the degree of enjoyment derived from this interaction.',
      //               ParentScaleTitleId: 68,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 301,
      //               TestId: null,
      //               Name: 'Relations with Parents',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale surveys the individual’s perception of being important in the family, the status of the child-parent relationship, and the child’s perception of the degree of parental trust and concern.',
      //               ParentScaleTitleId: 68,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 302,
      //               TestId: null,
      //               Name: 'Self-Esteem',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses a child’s and young adult’s self-satisfaction, with reference to both physical and more global characteristics. Those who score high on this scale are often seen by others as warm, open, venturesome, and self-assured. They typically have good peer relations, a positive sense of their identity, and appropriate levels of ego strength. Those who score low on this scale tend to reveal a pervasive sense of dissatisfaction with the self. Shyness and a feeling of tension are often evident.',
      //               ParentScaleTitleId: 68,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 303,
      //               TestId: null,
      //               Name: 'Self-Reliance',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale assesses self-confidence and assurance in one’s ability to make decisions. It is a strong measure of personal adjustment. High scorers tend to take on responsibility and to face life’s challenges. They tend not to be fearful of their emotions but to be well controlled by internal systems.',
      //               ParentScaleTitleId: 68,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //         {
      //           Id: 69,
      //           ParentScaleName: 'Content Scales',
      //           ParentScaleDescription: null,
      //           CreatedDate: null,
      //           SubTests: [
      //             {
      //               Id: 304,
      //               TestId: null,
      //               Name: 'Anger Control',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale gauges the tendency to become irritated and/or angry quickly and impulsively, coupled with an inability to regulate affect and self-control.',
      //               ParentScaleTitleId: 69,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 305,
      //               TestId: null,
      //               Name: 'Ego Strength',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale gauges the expression of a strong self-identity and overall emotional competence, including feelings of self-awareness. Self-acceptance, and positive perception of one’s social support network.',
      //               ParentScaleTitleId: 69,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 306,
      //               TestId: null,
      //               Name: 'Mania',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale gauges the tendency toward extended periods of heightened arousal, excessive activity (at times obsessive in focus), and rapid idea generation in the absence of normal fatigue.',
      //               ParentScaleTitleId: 69,
      //               CreatedDate: null,
      //             },
      //             {
      //               Id: 307,
      //               TestId: null,
      //               Name: 'Test Anxiety',
      //               Abbreviation: null,
      //               Description:
      //                 'This scale gauges the propensity for irrational worry over fear of taking routine school tests of aptitude or academic skills, regardless of one’s degree of study preparation or confidence in knowledge of the test content.',
      //               ParentScaleTitleId: 69,
      //               CreatedDate: null,
      //             },
      //           ],
      //           HasInput: false,
      //         },
      //       ],
      //     },
      //     {
      //       Id: 10,
      //       ParentGroupScaleName: 'SRP Composite Scales',
      //       Description: null,
      //       ParentGroupSubScales: [
      //         {
      //           Id: 12,
      //           ParentGroupSubScaleName: 'SRP-C',
      //           ParentGroupScaleId: 10,
      //           ParentScaleTitles: [
      //             {
      //               Id: 70,
      //               ParentScaleName: 'School Problems',
      //               ParentScaleDescription: 'a broad measure of adaptation to school.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 308,
      //                   TestId: null,
      //                   Name: 'Attitude to School',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale surveys the respondent’s general opinion of the utility of school, along with his or her level of comfort with school-related matters.',
      //                   ParentScaleTitleId: 70,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 309,
      //                   TestId: null,
      //                   Name: 'Attitude to Teachers',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the individual’s perception of teachers as being uncaring, unfair, or unmotivated to help their students. Scores may fluctuate in reaction to recent occurrences of conflict with (or special assistance from) a teacher or school administrator.',
      //                   ParentScaleTitleId: 70,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 71,
      //               ParentScaleName: 'Internalizing Problems',
      //               ParentScaleDescription:
      //                 'a broad measure of inwardly directed distress that reflects internalizing problems a child may experience.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 310,
      //                   TestId: null,
      //                   Name: 'Atypicality',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale evaluates unusual thoughts and perceptions (e.g., seeing or hearing things that are not there, feeling that one is being watched or targeted) that are commonly associated with severe forms of psychopathology such as schizophrenia.',
      //                   ParentScaleTitleId: 71,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 311,
      //                   TestId: null,
      //                   Name: 'Locus of Control',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses an individual’s perception of his or her level of control over external events. Low scores on this scale indicate the perception of having internal control over events, whereas a high score indicates the belief of being controlled by others or by fate or some other abstract force. These external; forces typically include authority figures such as parents or teachers.',
      //                   ParentScaleTitleId: 71,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 312,
      //                   TestId: null,
      //                   Name: 'Social Stress',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the level of stress children experience in relation to their interactions with peers and others. Feelings of tension, pressure, and a lack of coping resources (especially outlets through close friends and social contact) are evident in social stress.',
      //                   ParentScaleTitleId: 71,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 313,
      //                   TestId: null,
      //                   Name: 'Anxiety',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual. High scorers on this scale may feel a sense of dread and may be troubled by obsessive, intrusive, and bothersome thoughts. At clinically significant score levels, these thoughts may produce confusion in the decision-making process.',
      //                   ParentScaleTitleId: 71,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 314,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including feelings of loneliness, sadness, and an inability to enjoy life. A sense of hopelessness, pessimism, and dread underlies many of the items.',
      //                   ParentScaleTitleId: 71,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 315,
      //                   TestId: null,
      //                   Name: 'Sense of Inadequacy',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses perceptions of low achievement expectations, a tendency not to persevere, and a perception of being unsuccessful (primarily in academic endeavors). The person may feel inadequate to meet expectations set by either him- or herself or by others. This scale is related to the concept of level of aspiration, in that a child who sets or accepts unrealistically high goals would be likely to score high on this scale.',
      //                   ParentScaleTitleId: 71,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 72,
      //               ParentScaleName: 'Inattention/Hyperactivity',
      //               ParentScaleDescription:
      //                 'an aggregated score containing scales most directly associated with ADHD symptomatology.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 316,
      //                   TestId: null,
      //                   Name: 'Attention Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale was designed for use in diagnosing the presence or absence of the core symptoms of attention-deficit/hyperactivity disorder (ADHD). The scale measures the inability to maintain attention and the tendency to be easily distracted from tasks requiring attention.',
      //                   ParentScaleTitleId: 72,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 317,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale focuses primarily on the excessive activity level associated with ADHD disorders. It assesses behaviors such as having trouble standing still, talking while others are talking, and being too noisy.',
      //                   ParentScaleTitleId: 72,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 159,
      //               ParentScaleName: 'Emotional Symptoms Index',
      //               ParentScaleDescription:
      //                 'a global indicator of serious emotional disturbance, particularly internalized disorders.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 662,
      //                   TestId: null,
      //                   Name: 'Social Stress',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the level of stress children experience in relation to their interactions with peers and others. Feelings of tension, pressure, and a lack of coping resources (especially outlets through close friends and social contact) are evident in social stress.',
      //                   ParentScaleTitleId: 159,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 664,
      //                   TestId: null,
      //                   Name: 'Anxiety',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual. High scorers on this scale may feel a sense of dread and may be troubled by obsessive, intrusive, and bothersome thoughts. At clinically significant score levels, these thoughts may produce confusion in the decision-making process.',
      //                   ParentScaleTitleId: 159,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 665,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including feelings of loneliness, sadness, and an inability to enjoy life. A sense of hopelessness, pessimism, and dread underlies many of the items.',
      //                   ParentScaleTitleId: 159,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 666,
      //                   TestId: null,
      //                   Name: 'Sense of Inadequacy',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses perceptions of low achievement expectations, a tendency not to persevere, and a perception of being unsuccessful (primarily in academic endeavors). The person may feel inadequate to meet expectations set by either him- or herself or by others. This scale is related to the concept of level of aspiration, in that a child who sets or accepts unrealistically high goals would be likely to score high on this scale.',
      //                   ParentScaleTitleId: 159,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 667,
      //                   TestId: null,
      //                   Name: 'Self-Esteem',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses a child’s and young adult’s self-satisfaction, with reference to both physical and more global characteristics. Those who score high on this scale are often seen by others as warm, open, venturesome, and self-assured. They typically have good peer relations, a positive sense of their identity, and appropriate levels of ego strength. Those who score low on this scale tend to reveal a pervasive sense of dissatisfaction with the self. Shyness and a feeling of tension are often evident.',
      //                   ParentScaleTitleId: 159,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 668,
      //                   TestId: null,
      //                   Name: 'Self-Reliance',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses self-confidence and assurance in one’s ability to make decisions. It is a strong measure of personal adjustment. High scorers tend to take on responsibility and to face life’s challenges. They tend not to be fearful of their emotions but to be well controlled by internal systems.',
      //                   ParentScaleTitleId: 159,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 73,
      //               ParentScaleName: 'Personal Adjustment',
      //               ParentScaleDescription:
      //                 'a composite measuring level of adjustment related to interpersonal relationships, self-acceptance, identity development, ego strength, quality of one’s support system and coping skills, peer relationships, tendency towards withdrawal and introversion, tendency to repress uncomfortable feelings and thoughts, and positive outlets for relieving stress.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 324,
      //                   TestId: null,
      //                   Name: 'Interpersonal Relations',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the individual’s reports of success in relating to others and the degree of enjoyment derived from this interaction.',
      //                   ParentScaleTitleId: 73,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 325,
      //                   TestId: null,
      //                   Name: 'Relations with Parents',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale surveys the individual’s perception of being important in the family, the status of the child-parent relationship, and the child’s perception of the degree of parental trust and concern.',
      //                   ParentScaleTitleId: 73,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 326,
      //                   TestId: null,
      //                   Name: 'Self-Esteem',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses a child’s and young adult’s self-satisfaction, with reference to both physical and more global characteristics. Those who score high on this scale are often seen by others as warm, open, venturesome, and self-assured. They typically have good peer relations, a positive sense of their identity, and appropriate levels of ego strength. Those who score low on this scale tend to reveal a pervasive sense of dissatisfaction with the self. Shyness and a feeling of tension are often evident.',
      //                   ParentScaleTitleId: 73,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 327,
      //                   TestId: null,
      //                   Name: 'Self-Reliance',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses self-confidence and assurance in one’s ability to make decisions. It is a strong measure of personal adjustment. High scorers tend to take on responsibility and to face life’s challenges. They tend not to be fearful of their emotions but to be well controlled by internal systems.',
      //                   ParentScaleTitleId: 73,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //         {
      //           Id: 13,
      //           ParentGroupSubScaleName: 'SRP-A',
      //           ParentGroupScaleId: 10,
      //           ParentScaleTitles: [
      //             {
      //               Id: 74,
      //               ParentScaleName: 'School Problems',
      //               ParentScaleDescription: 'a broad measure of adaptation to school.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 328,
      //                   TestId: null,
      //                   Name: 'Attitude to School',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale surveys the respondent’s general opinion of the utility of school, along with his or her level of comfort with school-related matters.',
      //                   ParentScaleTitleId: 74,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 329,
      //                   TestId: null,
      //                   Name: 'Attitude to Teachers',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the individual’s perception of teachers as being uncaring, unfair, or unmotivated to help their students. Scores may fluctuate in reaction to recent occurrences of conflict with (or special assistance from) a teacher or school administrator.',
      //                   ParentScaleTitleId: 74,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 330,
      //                   TestId: null,
      //                   Name: 'Sensation Seeking',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the respondent’s seeking of varied, novel, complex, and intense sensations and experiences, and the willingness to take physical, social, legal, and financial risks for the sake of such experience. This is assessed through investigating both the desire to engage in thrilling or potentially hazardous activities and a preference for excitement associated with risk-taking.',
      //                   ParentScaleTitleId: 74,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 75,
      //               ParentScaleName: 'Internalizing Problems',
      //               ParentScaleDescription:
      //                 'a broad measure of inwardly directed distress that reflects internalizing problems a child may experience.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 331,
      //                   TestId: null,
      //                   Name: 'Atypicality',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale evaluates unusual thoughts and perceptions (e.g., seeing or hearing things that are not there, feeling that one is being watched or targeted) that are commonly associated with severe forms of psychopathology such as schizophrenia.',
      //                   ParentScaleTitleId: 75,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 332,
      //                   TestId: null,
      //                   Name: 'Locus of Control',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses an individual’s perception of his or her level of control over external events. Low scores on this scale indicate the perception of having internal control over events, whereas a high score indicates the belief of being controlled by others or by fate or some other abstract force. These external; forces typically include authority figures such as parents or teachers.',
      //                   ParentScaleTitleId: 75,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 333,
      //                   TestId: null,
      //                   Name: 'Social Stress',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the level of stress children experience in relation to their interactions with peers and others. Feelings of tension, pressure, and a lack of coping resources (especially outlets through close friends and social contact) are evident in social stress.',
      //                   ParentScaleTitleId: 75,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 334,
      //                   TestId: null,
      //                   Name: 'Anxiety',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual. High scorers on this scale may feel a sense of dread and may be troubled by obsessive, intrusive, and bothersome thoughts. At clinically significant score levels, these thoughts may produce confusion in the decision-making process.',
      //                   ParentScaleTitleId: 75,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 335,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including feelings of loneliness, sadness, and an inability to enjoy life. A sense of hopelessness, pessimism, and dread underlies many of the items.',
      //                   ParentScaleTitleId: 75,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 336,
      //                   TestId: null,
      //                   Name: 'Sense of Inadequacy',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses perceptions of low achievement expectations, a tendency not to persevere, and a perception of being unsuccessful (primarily in academic endeavors). The person may feel inadequate to meet expectations set by either him- or herself or by others. This scale is related to the concept of level of aspiration, in that a child who sets or accepts unrealistically high goals would be likely to score high on this scale.',
      //                   ParentScaleTitleId: 75,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 337,
      //                   TestId: null,
      //                   Name: 'Somatization',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to complain about relatively minor physical problems as an expression of psychological difficulties. It evaluates the level and nature of a series of health-related problems, fears, and concerns. The various physical complaints noted may be experienced as real or imaginary but typically are psychogenic if more than a few items are marked.',
      //                   ParentScaleTitleId: 75,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 76,
      //               ParentScaleName: 'Inattention/Hyperactivity',
      //               ParentScaleDescription:
      //                 'an aggregated score containing scales most directly associated with ADHD symptomatology.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 338,
      //                   TestId: null,
      //                   Name: 'Attention Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale was designed for use in diagnosing the presence or absence of the core symptoms of attention-deficit/hyperactivity disorder (ADHD). The scale measures the inability to maintain attention and the tendency to be easily distracted from tasks requiring attention.',
      //                   ParentScaleTitleId: 76,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 339,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale focuses primarily on the excessive activity level associated with ADHD disorders. It assesses behaviors such as having trouble standing still, talking while others are talking, and being too noisy.',
      //                   ParentScaleTitleId: 76,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 77,
      //               ParentScaleName: 'Emotional Symptoms Index',
      //               ParentScaleDescription:
      //                 'a global indicator of serious emotional disturbance, particularly internalized disorders.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 340,
      //                   TestId: null,
      //                   Name: 'Social Stress',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the level of stress children experience in relation to their interactions with peers and others. Feelings of tension, pressure, and a lack of coping resources (especially outlets through close friends and social contact) are evident in social stress.',
      //                   ParentScaleTitleId: 77,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 341,
      //                   TestId: null,
      //                   Name: 'Anxiety',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual. High scorers on this scale may feel a sense of dread and may be troubled by obsessive, intrusive, and bothersome thoughts. At clinically significant score levels, these thoughts may produce confusion in the decision-making process.',
      //                   ParentScaleTitleId: 77,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 342,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including feelings of loneliness, sadness, and an inability to enjoy life. A sense of hopelessness, pessimism, and dread underlies many of the items.',
      //                   ParentScaleTitleId: 77,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 343,
      //                   TestId: null,
      //                   Name: 'Sense of Inadequacy',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses perceptions of low achievement expectations, a tendency not to persevere, and a perception of being unsuccessful (primarily in academic endeavors). The person may feel inadequate to meet expectations set by either him- or herself or by others. This scale is related to the concept of level of aspiration, in that a child who sets or accepts unrealistically high goals would be likely to score high on this scale.',
      //                   ParentScaleTitleId: 77,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 344,
      //                   TestId: null,
      //                   Name: 'Self-Esteem',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses a child’s and young adult’s self-satisfaction, with reference to both physical and more global characteristics. Those who score high on this scale are often seen by others as warm, open, venturesome, and self-assured. They typically have good peer relations, a positive sense of their identity, and appropriate levels of ego strength. Those who score low on this scale tend to reveal a pervasive sense of dissatisfaction with the self. Shyness and a feeling of tension are often evident.',
      //                   ParentScaleTitleId: 77,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 345,
      //                   TestId: null,
      //                   Name: 'Self-Reliance',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses self-confidence and assurance in one’s ability to make decisions. It is a strong measure of personal adjustment. High scorers tend to take on responsibility and to face life’s challenges. They tend not to be fearful of their emotions but to be well controlled by internal systems.',
      //                   ParentScaleTitleId: 77,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 78,
      //               ParentScaleName: 'Personal Adjustment',
      //               ParentScaleDescription:
      //                 'a composite measuring level of adjustment related to interpersonal relationships, self-acceptance, identity development, ego strength, quality of one’s support system and coping skills, peer relationships, tendency towards withdrawal and introversion, tendency to repress uncomfortable feelings and thoughts, and positive outlets for relieving stress.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 346,
      //                   TestId: null,
      //                   Name: 'Interpersonal Relations',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the individual’s reports of success in relating to others and the degree of enjoyment derived from this interaction.',
      //                   ParentScaleTitleId: 78,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 347,
      //                   TestId: null,
      //                   Name: 'Relations with Parents',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale surveys the individual’s perception of being important in the family, the status of the child-parent relationship, and the child’s perception of the degree of parental trust and concern.',
      //                   ParentScaleTitleId: 78,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 348,
      //                   TestId: null,
      //                   Name: 'Self-Esteem',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses a child’s and young adult’s self-satisfaction, with reference to both physical and more global characteristics. Those who score high on this scale are often seen by others as warm, open, venturesome, and self-assured. They typically have good peer relations, a positive sense of their identity, and appropriate levels of ego strength. Those who score low on this scale tend to reveal a pervasive sense of dissatisfaction with the self. Shyness and a feeling of tension are often evident.',
      //                   ParentScaleTitleId: 78,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 349,
      //                   TestId: null,
      //                   Name: 'Self-Reliance',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses self-confidence and assurance in one’s ability to make decisions. It is a strong measure of personal adjustment. High scorers tend to take on responsibility and to face life’s challenges. They tend not to be fearful of their emotions but to be well controlled by internal systems.',
      //                   ParentScaleTitleId: 78,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //         {
      //           Id: 14,
      //           ParentGroupSubScaleName: 'SRP-COL',
      //           ParentGroupScaleId: 10,
      //           ParentScaleTitles: [
      //             {
      //               Id: 79,
      //               ParentScaleName: 'Internalizing Problems',
      //               ParentScaleDescription:
      //                 'a broad measure of inwardly directed distress that reflects internalizing problems a child may experience.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 350,
      //                   TestId: null,
      //                   Name: 'Atypicality',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale evaluates unusual thoughts and perceptions (e.g., seeing or hearing things that are not there, feeling that one is being watched or targeted) that are commonly associated with severe forms of psychopathology such as schizophrenia.',
      //                   ParentScaleTitleId: 79,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 351,
      //                   TestId: null,
      //                   Name: 'Locus of Control',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses an individual’s perception of his or her level of control over external events. Low scores on this scale indicate the perception of having internal control over events, whereas a high score indicates the belief of being controlled by others or by fate or some other abstract force. These external; forces typically include authority figures such as parents or teachers.',
      //                   ParentScaleTitleId: 79,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 352,
      //                   TestId: null,
      //                   Name: 'Social Stress',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the level of stress children experience in relation to their interactions with peers and others. Feelings of tension, pressure, and a lack of coping resources (especially outlets through close friends and social contact) are evident in social stress.',
      //                   ParentScaleTitleId: 79,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 353,
      //                   TestId: null,
      //                   Name: 'Anxiety',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual. High scorers on this scale may feel a sense of dread and may be troubled by obsessive, intrusive, and bothersome thoughts. At clinically significant score levels, these thoughts may produce confusion in the decision-making process.',
      //                   ParentScaleTitleId: 79,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 354,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including feelings of loneliness, sadness, and an inability to enjoy life. A sense of hopelessness, pessimism, and dread underlies many of the items.',
      //                   ParentScaleTitleId: 79,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 355,
      //                   TestId: null,
      //                   Name: 'Sense of Inadequacy',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses perceptions of low achievement expectations, a tendency not to persevere, and a perception of being unsuccessful (primarily in academic endeavors). The person may feel inadequate to meet expectations set by either him- or herself or by others. This scale is related to the concept of level of aspiration, in that a child who sets or accepts unrealistically high goals would be likely to score high on this scale.',
      //                   ParentScaleTitleId: 79,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 356,
      //                   TestId: null,
      //                   Name: 'Somatization',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to complain about relatively minor physical problems as an expression of psychological difficulties. It evaluates the level and nature of a series of health-related problems, fears, and concerns. The various physical complaints noted may be experienced as real or imaginary but typically are psychogenic if more than a few items are marked.',
      //                   ParentScaleTitleId: 79,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 80,
      //               ParentScaleName: 'Inattention/Hyperactivity',
      //               ParentScaleDescription:
      //                 'an aggregated score containing scales most directly associated with ADHD symptomatology.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 357,
      //                   TestId: null,
      //                   Name: 'Attention Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale was designed for use in diagnosing the presence or absence of the core symptoms of attention-deficit/hyperactivity disorder (ADHD). The scale measures the inability to maintain attention and the tendency to be easily distracted from tasks requiring attention.',
      //                   ParentScaleTitleId: 80,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 358,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale focuses primarily on the excessive activity level associated with ADHD disorders. It assesses behaviors such as having trouble standing still, talking while others are talking, and being too noisy.',
      //                   ParentScaleTitleId: 80,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 81,
      //               ParentScaleName: 'Emotional Symptoms Index',
      //               ParentScaleDescription:
      //                 'a global indicator of serious emotional disturbance, particularly internalized disorders.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 359,
      //                   TestId: null,
      //                   Name: 'Social Stress',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the level of stress children experience in relation to their interactions with peers and others. Feelings of tension, pressure, and a lack of coping resources (especially outlets through close friends and social contact) are evident in social stress.',
      //                   ParentScaleTitleId: 81,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 360,
      //                   TestId: null,
      //                   Name: 'Anxiety',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual. High scorers on this scale may feel a sense of dread and may be troubled by obsessive, intrusive, and bothersome thoughts. At clinically significant score levels, these thoughts may produce confusion in the decision-making process.',
      //                   ParentScaleTitleId: 81,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 361,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including feelings of loneliness, sadness, and an inability to enjoy life. A sense of hopelessness, pessimism, and dread underlies many of the items.',
      //                   ParentScaleTitleId: 81,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 362,
      //                   TestId: null,
      //                   Name: 'Sense of Inadequacy',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses perceptions of low achievement expectations, a tendency not to persevere, and a perception of being unsuccessful (primarily in academic endeavors). The person may feel inadequate to meet expectations set by either him- or herself or by others. This scale is related to the concept of level of aspiration, in that a child who sets or accepts unrealistically high goals would be likely to score high on this scale.',
      //                   ParentScaleTitleId: 81,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 363,
      //                   TestId: null,
      //                   Name: 'Self-Esteem',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses a child’s and young adult’s self-satisfaction, with reference to both physical and more global characteristics. Those who score high on this scale are often seen by others as warm, open, venturesome, and self-assured. They typically have good peer relations, a positive sense of their identity, and appropriate levels of ego strength. Those who score low on this scale tend to reveal a pervasive sense of dissatisfaction with the self. Shyness and a feeling of tension are often evident.',
      //                   ParentScaleTitleId: 81,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 364,
      //                   TestId: null,
      //                   Name: 'Self-Reliance',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses self-confidence and assurance in one’s ability to make decisions. It is a strong measure of personal adjustment. High scorers tend to take on responsibility and to face life’s challenges. They tend not to be fearful of their emotions but to be well controlled by internal systems.',
      //                   ParentScaleTitleId: 81,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 82,
      //               ParentScaleName: 'Personal Adjustment',
      //               ParentScaleDescription:
      //                 'a composite measuring level of adjustment related to interpersonal relationships, self-acceptance, identity development, ego strength, quality of one’s support system and coping skills, peer relationships, tendency towards withdrawal and introversion, tendency to repress uncomfortable feelings and thoughts, and positive outlets for relieving stress.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 365,
      //                   TestId: null,
      //                   Name: 'Interpersonal Relations',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the individual’s reports of success in relating to others and the degree of enjoyment derived from this interaction.',
      //                   ParentScaleTitleId: 82,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 366,
      //                   TestId: null,
      //                   Name: 'Relations with Parents',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale surveys the individual’s perception of being important in the family, the status of the child-parent relationship, and the child’s perception of the degree of parental trust and concern.',
      //                   ParentScaleTitleId: 82,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 367,
      //                   TestId: null,
      //                   Name: 'Self-Esteem',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses a child’s and young adult’s self-satisfaction, with reference to both physical and more global characteristics. Those who score high on this scale are often seen by others as warm, open, venturesome, and self-assured. They typically have good peer relations, a positive sense of their identity, and appropriate levels of ego strength. Those who score low on this scale tend to reveal a pervasive sense of dissatisfaction with the self. Shyness and a feeling of tension are often evident.',
      //                   ParentScaleTitleId: 82,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 368,
      //                   TestId: null,
      //                   Name: 'Self-Reliance',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses self-confidence and assurance in one’s ability to make decisions. It is a strong measure of personal adjustment. High scorers tend to take on responsibility and to face life’s challenges. They tend not to be fearful of their emotions but to be well controlled by internal systems.',
      //                   ParentScaleTitleId: 82,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 83,
      //               ParentScaleName: 'Parent Rating Scales',
      //               ParentScaleDescription:
      //                 'a comprehensive measure of a child’s adaptive and problem behaviors in community and home settings. The PRS has three forms with items targeted at three age levels: preschool (ages 2-5), child (ages 5-11), and adolescent (ages 12-21). The forms contain descriptors of behaviors that the respondent rates on a four-point scale of frequency, ranging from Never to Almost Always.',
      //               CreatedDate: null,
      //               SubTests: [],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 84,
      //               ParentScaleName: 'Teacher Rating Scales',
      //               ParentScaleDescription:
      //                 'a comprehensive measure of both adaptive and problem behaviors in the school setting. It is designed for use by teachers or others who fill a similar role, such as teacher assistants or preschool caregivers. The TRS has three forms with items targeted at three age levels: preschool (ages 2-5), child (ages 5-11), and adolescent (ages 12-21). The forms contain descriptors of behaviors that the respondent rates on a four-point scale of frequency, ranging from Never to Almost Always.',
      //               CreatedDate: null,
      //               SubTests: [],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 85,
      //               ParentScaleName: 'Validity Indexes',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 369,
      //                   TestId: null,
      //                   Name: 'F Index',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This index assesses the possibility that a teacher or parent rated a child in an inordinately negative fashion. High scores on this index either indicate that extraordinarily maladaptive behavior is present or suggest that the teacher or parents rated the child’s performance more severely than is warranted.',
      //                   ParentScaleTitleId: 85,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 86,
      //               ParentScaleName: 'Clinical Scales',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 370,
      //                   TestId: null,
      //                   Name: 'Aggression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to act in a hostile manner (either verbal or physical) that is threatening to others.',
      //                   ParentScaleTitleId: 86,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 371,
      //                   TestId: null,
      //                   Name: 'Anxiety',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual.',
      //                   ParentScaleTitleId: 86,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 372,
      //                   TestId: null,
      //                   Name: 'Attention Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures the inability to maintain attention and the tendency to be easily distracted from tasks requiring attention.',
      //                   ParentScaleTitleId: 86,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 373,
      //                   TestId: null,
      //                   Name: 'Atypicality',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures a child’s tendency to behave in ways that are considered odd or strange. Many of the atypicality items center on a child’s disconnection from or unawareness of his or her normal surroundings (e.g., being unaware of others, saying things that make no sense, acting like others aren’t there). Other items represent specific unusual behaviors (e.g., picking at things, banging head, babbling to self).',
      //                   ParentScaleTitleId: 86,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 374,
      //                   TestId: null,
      //                   Name: 'Conduct Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures socially deviant and disruptive behaviors that are characteristic of such DSM-5 disorders as oppositional defiant disorder (ODD) and conduct disorder (CD). These behaviors include general rule-breaking, cheating in school, stealing, lying, and deception',
      //                   ParentScaleTitleId: 86,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 375,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including sudden changes in mood, negativity, and sadness.',
      //                   ParentScaleTitleId: 86,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 376,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the hyperactivity and impulsivity aspects of ADHD. Item behaviors focusing on hyperactivity include fiddling with things, interrupting others, being overactive, and having poor self-control. Items related to impulsivity include acting without thinking and being unable to wait for one’s turn in a group activity.',
      //                   ParentScaleTitleId: 86,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 377,
      //                   TestId: null,
      //                   Name: 'Learning Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale was developed to gather information from teachers that may be valuable in screening for academic problems or determining the presence of learning disabilities. The scale samples a variety of academic domains, including reading, mathematics, and spelling as well as more general examples of school performance (e.g., failing grades, lessons going too fast, critical thinking skills).',
      //                   ParentScaleTitleId: 86,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 378,
      //                   TestId: null,
      //                   Name: 'Somatization',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to be overly sensitive and complain about relatively minor physical problems or ailments, and to over-report the occurrence of various physical complaints. Consistent with somatic symptom disorder, as characterized in the DSM-5, such complaints typically cannot be attribute to a physical cause or to generally poor physical health. Often these complaints have persisted for extended time periods (months to years). Scale items are a sampling of behaviors that include fears about being sick and complaints about symptoms and health. Many of the items center on the child’s complaints, encouraging the rater to attend to the child’s verbal report rather than interpret the child’s behavior.',
      //                   ParentScaleTitleId: 86,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 379,
      //                   TestId: null,
      //                   Name: 'Withdrawal',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures a child’s tendency to avoid social contact and to lack interest in making contact in social settings. Items include behaviors associated with shyness, initiating friendships, and preferring to be alone.',
      //                   ParentScaleTitleId: 86,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 87,
      //               ParentScaleName: 'Adaptive Scales',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 380,
      //                   TestId: null,
      //                   Name: 'Activities of Daily Living',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale is intended to screen for adaptive-behavior deficits and to alert the examiner to additional differential diagnostic considerations associated with lower levels of cognitive functioning. Items assess behaviors related to acting in a safe manner, performing simple daily tasks, and organizing tasks.',
      //                   ParentScaleTitleId: 87,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 381,
      //                   TestId: null,
      //                   Name: 'Adaptability',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the ability to adjust to changes in routine or plans, transition, and recover after a setback.',
      //                   ParentScaleTitleId: 87,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 382,
      //                   TestId: null,
      //                   Name: 'Functional Communication',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the child’s ability to express ideas and communicate in ways that others can easily understand.',
      //                   ParentScaleTitleId: 87,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 383,
      //                   TestId: null,
      //                   Name: 'Leadership',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses additional competencies related to good community and school adaptation. Items include behaviors associated with decision making, getting others to work together, creativity, and working well under pressure.',
      //                   ParentScaleTitleId: 87,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 384,
      //                   TestId: null,
      //                   Name: 'Social Skills',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale emphasizes the interpersonal aspects of social adaptation, including behaviors such as complimenting others, encouraging other, offering assistance, and saying “please” and “thank you.”',
      //                   ParentScaleTitleId: 87,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 385,
      //                   TestId: null,
      //                   Name: 'Study Skills',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses metamemory, learning strategies, the ability to analyze a problem before solving it, note-taking, motivation to achieve, and organizational skills (e.g., completing homework, trying to do well, turning in work on time).',
      //                   ParentScaleTitleId: 87,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 88,
      //               ParentScaleName: 'Content Scales',
      //               ParentScaleDescription: null,
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 386,
      //                   TestId: null,
      //                   Name: 'Anger Control',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale is intended to assess how well a child or adolescent can keep his or her anger-related emotions under control. High scorers tend to exhibit a quick escalation of emotions, poor conflict management skills, an inability to control anger, and general unhappiness.',
      //                   ParentScaleTitleId: 88,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 387,
      //                   TestId: null,
      //                   Name: 'Bullying',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale provides an indication of whether a child or adolescent engages in behaviors that are perceived as threatening or intimidating by others. Specific behaviors on the scale include teasing, making threats towards others, manipulating others, and minimizing others.',
      //                   ParentScaleTitleId: 88,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 388,
      //                   TestId: null,
      //                   Name: 'Developmental Social Disorders',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale provides a global indication of deficits in social skills, communication, interests, and activities. Behaviors included on this scale center on one’s ability to adjust to change, awareness of others and the present situation, ability to communicate and express emotions clearly, and unusual or repetitive movements or actions.',
      //                   ParentScaleTitleId: 88,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 389,
      //                   TestId: null,
      //                   Name: 'Emotional Self-Control',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures the ability to regulate one’s affect and emotions in response to environmental changes. It may reflect the influence of a variety of negative emotions, including sadness, frustration, and stress or fear.',
      //                   ParentScaleTitleId: 88,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 390,
      //                   TestId: null,
      //                   Name: 'Executive Functioning',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale provides an overall indication of one’s ability to exercise control over his or her behavior. Items on this scale assess a variety of behaviors associated with organization and planning, using a step-by-step approach to solving problems, attentional focus, remaining under control, and overall decision-making ability.',
      //                   ParentScaleTitleId: 88,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 391,
      //                   TestId: null,
      //                   Name: 'Negative Emotionality',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale describes a child or adolescent’s propensity to react in an overly negative way to changes in everyday activities or routines. Items on this scale capture behaviors associated with becoming quickly upset or frustrated, being overly negative or pessimistic, and being argumentative.',
      //                   ParentScaleTitleId: 88,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 392,
      //                   TestId: null,
      //                   Name: 'Resiliency',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures an ability to overcome adversity. Behaviors included on this scale highlight adjusting or coping with change, quickly recovering from setbacks, and demonstrating problem-solving ability.',
      //                   ParentScaleTitleId: 88,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //       ],
      //       ParentScaleTitles: [],
      //     },
      //     {
      //       Id: 11,
      //       ParentGroupScaleName: 'Composite Scales',
      //       Description: null,
      //       ParentGroupSubScales: [
      //         {
      //           Id: 15,
      //           ParentGroupSubScaleName: 'TRS-P',
      //           ParentGroupScaleId: 11,
      //           ParentScaleTitles: [
      //             {
      //               Id: 89,
      //               ParentScaleName: 'Externalizing Problems',
      //               ParentScaleDescription:
      //                 'a composite of the disruptive nature of the child’s behaviors.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 393,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the hyperactivity and impulsivity aspects of ADHD. Item behaviors focusing on hyperactivity include fiddling with things, interrupting others, being overactive, and having poor self-control. Items related to impulsivity include acting without thinking and being unable to wait for one’s turn in a group activity.',
      //                   ParentScaleTitleId: 89,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 394,
      //                   TestId: null,
      //                   Name: 'Aggression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to act in a hostile manner (either verbal or physical) that is threatening to others.',
      //                   ParentScaleTitleId: 89,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 90,
      //               ParentScaleName: 'Internalizing Problems',
      //               ParentScaleDescription:
      //                 'a composite of scales that reflect a child’s tendency to monitor their own actions to excess and to be compliant. Behaviors associated with these scales are typically not disruptive, but peer relationships could be adversely affected by their presence.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 395,
      //                   TestId: null,
      //                   Name: 'Anxiety',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual.',
      //                   ParentScaleTitleId: 90,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 396,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including sudden changes in mood, negativity, and sadness.',
      //                   ParentScaleTitleId: 90,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 397,
      //                   TestId: null,
      //                   Name: 'Somatization',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to be overly sensitive and complain about relatively minor physical problems or ailments, and to over-report the occurrence of various physical complaints. Consistent with somatic symptom disorder, as characterized in the DSM-5, such complaints typically cannot be attribute to a physical cause or to generally poor physical health. Often these complaints have persisted for extended time periods (months to years). Scale items are a sampling of behaviors that include fears about being sick and complaints about symptoms and health. Many of the items center on the child’s complaints, encouraging the rater to attend to the child’s verbal report rather than interpret the child’s behavior.',
      //                   ParentScaleTitleId: 90,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 91,
      //               ParentScaleName: 'Adaptive Skills',
      //               ParentScaleDescription:
      //                 'summarizes appropriate emotional expression and control, daily living skills inside and outside the home, and communication skills, as well as prosocial, organizational, study, and other adaptive skills',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 398,
      //                   TestId: null,
      //                   Name: 'Adaptability',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the ability to adjust to changes in routine or plans, transition, and recover after a setback.',
      //                   ParentScaleTitleId: 91,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 399,
      //                   TestId: null,
      //                   Name: 'Social Skills',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale emphasizes the interpersonal aspects of social adaptation, including behaviors such as complimenting others, encouraging other, offering assistance, and saying “please” and “thank you.”',
      //                   ParentScaleTitleId: 91,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 400,
      //                   TestId: null,
      //                   Name: 'Functional Communication',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the child’s ability to express ideas and communicate in ways that others can easily understand.',
      //                   ParentScaleTitleId: 91,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 92,
      //               ParentScaleName: 'Behavioral Symptoms Index',
      //               ParentScaleDescription:
      //                 'reflects the overall level of problem behavior. Reasonably estimates the general level of functioning or presence of impairment for an individual with a disability or diagnosed condition.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 401,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the hyperactivity and impulsivity aspects of ADHD. Item behaviors focusing on hyperactivity include fiddling with things, interrupting others, being overactive, and having poor self-control. Items related to impulsivity include acting without thinking and being unable to wait for one’s turn in a group activity.',
      //                   ParentScaleTitleId: 92,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 402,
      //                   TestId: null,
      //                   Name: 'Aggression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to act in a hostile manner (either verbal or physical) that is threatening to others.',
      //                   ParentScaleTitleId: 92,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 403,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including sudden changes in mood, negativity, and sadness.',
      //                   ParentScaleTitleId: 92,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 404,
      //                   TestId: null,
      //                   Name: 'Attention Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures the inability to maintain attention and the tendency to be easily distracted from tasks requiring attention.',
      //                   ParentScaleTitleId: 92,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 405,
      //                   TestId: null,
      //                   Name: 'Atypicality',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures a child’s tendency to behave in ways that are considered odd or strange. Many of the atypicality items center on a child’s disconnection from or unawareness of his or her normal surroundings (e.g., being unaware of others, saying things that make no sense, acting like others aren’t there). Other items represent specific unusual behaviors (e.g., picking at things, banging head, babbling to self).',
      //                   ParentScaleTitleId: 92,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 406,
      //                   TestId: null,
      //                   Name: 'Withdrawal',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures a child’s tendency to avoid social contact and to lack interest in making contact in social settings. Items include behaviors associated with shyness, initiating friendships, and preferring to be alone.',
      //                   ParentScaleTitleId: 92,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //         {
      //           Id: 16,
      //           ParentGroupSubScaleName: 'TRS-C / TRS-A',
      //           ParentGroupScaleId: 11,
      //           ParentScaleTitles: [
      //             {
      //               Id: 93,
      //               ParentScaleName: 'Externalizing Problems',
      //               ParentScaleDescription:
      //                 'a composite of the disruptive nature of the child’s behaviors.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 407,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the hyperactivity and impulsivity aspects of ADHD. Item behaviors focusing on hyperactivity include fiddling with things, interrupting others, being overactive, and having poor self-control. Items related to impulsivity include acting without thinking and being unable to wait for one’s turn in a group activity.',
      //                   ParentScaleTitleId: 93,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 408,
      //                   TestId: null,
      //                   Name: 'Aggression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to act in a hostile manner (either verbal or physical) that is threatening to others.',
      //                   ParentScaleTitleId: 93,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 409,
      //                   TestId: null,
      //                   Name: 'Conduct Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures socially deviant and disruptive behaviors that are characteristic of such DSM-5 disorders as oppositional defiant disorder (ODD) and conduct disorder (CD). These behaviors include general rule-breaking, cheating in school, stealing, lying, and deception',
      //                   ParentScaleTitleId: 93,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 94,
      //               ParentScaleName: 'Internalizing Problems',
      //               ParentScaleDescription:
      //                 'a composite of scales that reflect a child’s tendency to monitor their own actions to excess and to be compliant. Behaviors associated with these scales are typically not disruptive, but peer relationships could be adversely affected by their presence.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 410,
      //                   TestId: null,
      //                   Name: 'Anxiety',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual.',
      //                   ParentScaleTitleId: 94,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 411,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including sudden changes in mood, negativity, and sadness.',
      //                   ParentScaleTitleId: 94,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 412,
      //                   TestId: null,
      //                   Name: 'Somatization',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to be overly sensitive and complain about relatively minor physical problems or ailments, and to over-report the occurrence of various physical complaints. Consistent with somatic symptom disorder, as characterized in the DSM-5, such complaints typically cannot be attribute to a physical cause or to generally poor physical health. Often these complaints have persisted for extended time periods (months to years). Scale items are a sampling of behaviors that include fears about being sick and complaints about symptoms and health. Many of the items center on the child’s complaints, encouraging the rater to attend to the child’s verbal report rather than interpret the child’s behavior.',
      //                   ParentScaleTitleId: 94,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 95,
      //               ParentScaleName: 'School Problems',
      //               ParentScaleDescription:
      //                 'reflects academic difficulties, including problems of motivation, attention, and learning and cognition.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 413,
      //                   TestId: null,
      //                   Name: 'Learning Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale was developed to gather information from teachers that may be valuable in screening for academic problems or determining the presence of learning disabilities. The scale samples a variety of academic domains, including reading, mathematics, and spelling as well as more general examples of school performance (e.g., failing grades, lessons going too fast, critical thinking skills).',
      //                   ParentScaleTitleId: 95,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 414,
      //                   TestId: null,
      //                   Name: 'Attention Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures the inability to maintain attention and the tendency to be easily distracted from tasks requiring attention.',
      //                   ParentScaleTitleId: 95,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 96,
      //               ParentScaleName: 'Adaptive Skills',
      //               ParentScaleDescription:
      //                 'summarizes appropriate emotional expression and control, daily living skills inside and outside the home, and communication skills, as well as prosocial, organizational, study, and other adaptive skills',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 415,
      //                   TestId: null,
      //                   Name: 'Adaptability',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the ability to adjust to changes in routine or plans, transition, and recover after a setback.',
      //                   ParentScaleTitleId: 96,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 416,
      //                   TestId: null,
      //                   Name: 'Social Skills',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale emphasizes the interpersonal aspects of social adaptation, including behaviors such as complimenting others, encouraging other, offering assistance, and saying “please” and “thank you.”',
      //                   ParentScaleTitleId: 96,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 417,
      //                   TestId: null,
      //                   Name: 'Functional Communication',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the child’s ability to express ideas and communicate in ways that others can easily understand.',
      //                   ParentScaleTitleId: 96,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 418,
      //                   TestId: null,
      //                   Name: 'Leadership',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses additional competencies related to good community and school adaptation. Items include behaviors associated with decision making, getting others to work together, creativity, and working well under pressure.',
      //                   ParentScaleTitleId: 96,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 419,
      //                   TestId: null,
      //                   Name: 'Study Skills',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses metamemory, learning strategies, the ability to analyze a problem before solving it, note-taking, motivation to achieve, and organizational skills (e.g., completing homework, trying to do well, turning in work on time).',
      //                   ParentScaleTitleId: 96,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 97,
      //               ParentScaleName: 'Behavioral Symptoms Index',
      //               ParentScaleDescription:
      //                 'reflects the overall level of problem behavior. Reasonably estimates the general level of functioning or presence of impairment for an individual with a disability or diagnosed condition.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 420,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the hyperactivity and impulsivity aspects of ADHD. Item behaviors focusing on hyperactivity include fiddling with things, interrupting others, being overactive, and having poor self-control. Items related to impulsivity include acting without thinking and being unable to wait for one’s turn in a group activity.',
      //                   ParentScaleTitleId: 97,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 421,
      //                   TestId: null,
      //                   Name: 'Aggression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to act in a hostile manner (either verbal or physical) that is threatening to others.',
      //                   ParentScaleTitleId: 97,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 422,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including sudden changes in mood, negativity, and sadness.',
      //                   ParentScaleTitleId: 97,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 423,
      //                   TestId: null,
      //                   Name: 'Attention Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures the inability to maintain attention and the tendency to be easily distracted from tasks requiring attention.',
      //                   ParentScaleTitleId: 97,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 424,
      //                   TestId: null,
      //                   Name: 'Atypicality',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures a child’s tendency to behave in ways that are considered odd or strange. Many of the atypicality items center on a child’s disconnection from or unawareness of his or her normal surroundings (e.g., being unaware of others, saying things that make no sense, acting like others aren’t there). Other items represent specific unusual behaviors (e.g., picking at things, banging head, babbling to self).',
      //                   ParentScaleTitleId: 97,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 425,
      //                   TestId: null,
      //                   Name: 'Withdrawal',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures a child’s tendency to avoid social contact and to lack interest in making contact in social settings. Items include behaviors associated with shyness, initiating friendships, and preferring to be alone.',
      //                   ParentScaleTitleId: 97,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //         {
      //           Id: 17,
      //           ParentGroupSubScaleName: 'PRS-P',
      //           ParentGroupScaleId: 11,
      //           ParentScaleTitles: [
      //             {
      //               Id: 98,
      //               ParentScaleName: 'Externalizing Problems',
      //               ParentScaleDescription:
      //                 'a composite of the disruptive nature of the child’s behaviors.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 426,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the hyperactivity and impulsivity aspects of ADHD. Item behaviors focusing on hyperactivity include fiddling with things, interrupting others, being overactive, and having poor self-control. Items related to impulsivity include acting without thinking and being unable to wait for one’s turn in a group activity.',
      //                   ParentScaleTitleId: 98,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 427,
      //                   TestId: null,
      //                   Name: 'Aggression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to act in a hostile manner (either verbal or physical) that is threatening to others.',
      //                   ParentScaleTitleId: 98,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 99,
      //               ParentScaleName: 'Internalizing Problems',
      //               ParentScaleDescription:
      //                 'a composite of scales that reflect a child’s tendency to monitor their own actions to excess and to be compliant. Behaviors associated with these scales are typically not disruptive, but peer relationships could be adversely affected by their presence.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 428,
      //                   TestId: null,
      //                   Name: 'Anxiety',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual.',
      //                   ParentScaleTitleId: 99,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 429,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including sudden changes in mood, negativity, and sadness.',
      //                   ParentScaleTitleId: 99,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 430,
      //                   TestId: null,
      //                   Name: 'Somatization',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to be overly sensitive and complain about relatively minor physical problems or ailments, and to over-report the occurrence of various physical complaints. Consistent with somatic symptom disorder, as characterized in the DSM-5, such complaints typically cannot be attribute to a physical cause or to generally poor physical health. Often these complaints have persisted for extended time periods (months to years). Scale items are a sampling of behaviors that include fears about being sick and complaints about symptoms and health. Many of the items center on the child’s complaints, encouraging the rater to attend to the child’s verbal report rather than interpret the child’s behavior.',
      //                   ParentScaleTitleId: 99,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 100,
      //               ParentScaleName: 'Adaptive Skills',
      //               ParentScaleDescription:
      //                 'summarizes appropriate emotional expression and control, daily living skills inside and outside the home, and communication skills, as well as prosocial, organizational, study, and other adaptive skills',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 431,
      //                   TestId: null,
      //                   Name: 'Adaptability',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the ability to adjust to changes in routine or plans, transition, and recover after a setback.',
      //                   ParentScaleTitleId: 100,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 432,
      //                   TestId: null,
      //                   Name: 'Social Skills',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale emphasizes the interpersonal aspects of social adaptation, including behaviors such as complimenting others, encouraging other, offering assistance, and saying “please” and “thank you.”',
      //                   ParentScaleTitleId: 100,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 433,
      //                   TestId: null,
      //                   Name: 'Functional Communication',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the child’s ability to express ideas and communicate in ways that others can easily understand.',
      //                   ParentScaleTitleId: 100,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 434,
      //                   TestId: null,
      //                   Name: 'Activities of Daily Living',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale is intended to screen for adaptive-behavior deficits and to alert the examiner to additional differential diagnostic considerations associated with lower levels of cognitive functioning. Items assess behaviors related to acting in a safe manner, performing simple daily tasks, and organizing tasks.',
      //                   ParentScaleTitleId: 100,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 101,
      //               ParentScaleName: 'Behavioral Symptoms Index',
      //               ParentScaleDescription:
      //                 'reflects the overall level of problem behavior. Reasonably estimates the general level of functioning or presence of impairment for an individual with a disability or diagnosed condition.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 435,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the hyperactivity and impulsivity aspects of ADHD. Item behaviors focusing on hyperactivity include fiddling with things, interrupting others, being overactive, and having poor self-control. Items related to impulsivity include acting without thinking and being unable to wait for one’s turn in a group activity.',
      //                   ParentScaleTitleId: 101,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 436,
      //                   TestId: null,
      //                   Name: 'Aggression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to act in a hostile manner (either verbal or physical) that is threatening to others.',
      //                   ParentScaleTitleId: 101,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 437,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including sudden changes in mood, negativity, and sadness.',
      //                   ParentScaleTitleId: 101,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 438,
      //                   TestId: null,
      //                   Name: 'Attention Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures the inability to maintain attention and the tendency to be easily distracted from tasks requiring attention.',
      //                   ParentScaleTitleId: 101,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 439,
      //                   TestId: null,
      //                   Name: 'Atypicality',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures a child’s tendency to behave in ways that are considered odd or strange. Many of the atypicality items center on a child’s disconnection from or unawareness of his or her normal surroundings (e.g., being unaware of others, saying things that make no sense, acting like others aren’t there). Other items represent specific unusual behaviors (e.g., picking at things, banging head, babbling to self).',
      //                   ParentScaleTitleId: 101,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 440,
      //                   TestId: null,
      //                   Name: 'Withdrawal',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures a child’s tendency to avoid social contact and to lack interest in making contact in social settings. Items include behaviors associated with shyness, initiating friendships, and preferring to be alone.',
      //                   ParentScaleTitleId: 101,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //         {
      //           Id: 18,
      //           ParentGroupSubScaleName: 'PRS-C / PRS-A',
      //           ParentGroupScaleId: 11,
      //           ParentScaleTitles: [
      //             {
      //               Id: 102,
      //               ParentScaleName: 'Externalizing Problems',
      //               ParentScaleDescription:
      //                 'a composite of the disruptive nature of the child’s behaviors.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 441,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the hyperactivity and impulsivity aspects of ADHD. Item behaviors focusing on hyperactivity include fiddling with things, interrupting others, being overactive, and having poor self-control. Items related to impulsivity include acting without thinking and being unable to wait for one’s turn in a group activity.',
      //                   ParentScaleTitleId: 102,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 442,
      //                   TestId: null,
      //                   Name: 'Aggression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to act in a hostile manner (either verbal or physical) that is threatening to others.',
      //                   ParentScaleTitleId: 102,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 443,
      //                   TestId: null,
      //                   Name: 'Conduct Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures socially deviant and disruptive behaviors that are characteristic of such DSM-5 disorders as oppositional defiant disorder (ODD) and conduct disorder (CD). These behaviors include general rule-breaking, cheating in school, stealing, lying, and deception',
      //                   ParentScaleTitleId: 102,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 103,
      //               ParentScaleName: 'Internalizing Problems',
      //               ParentScaleDescription:
      //                 'a composite of scales that reflect a child’s tendency to monitor their own actions to excess and to be compliant. Behaviors associated with these scales are typically not disruptive, but peer relationships could be adversely affected by their presence.',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 444,
      //                   TestId: null,
      //                   Name: 'Anxiety',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses generalized fears, nervousness, and worries that are typically irrational and poorly defined in the mind of the individual.',
      //                   ParentScaleTitleId: 103,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 445,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including sudden changes in mood, negativity, and sadness.',
      //                   ParentScaleTitleId: 103,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 446,
      //                   TestId: null,
      //                   Name: 'Somatization',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to be overly sensitive and complain about relatively minor physical problems or ailments, and to over-report the occurrence of various physical complaints. Consistent with somatic symptom disorder, as characterized in the DSM-5, such complaints typically cannot be attribute to a physical cause or to generally poor physical health. Often these complaints have persisted for extended time periods (months to years). Scale items are a sampling of behaviors that include fears about being sick and complaints about symptoms and health. Many of the items center on the child’s complaints, encouraging the rater to attend to the child’s verbal report rather than interpret the child’s behavior.',
      //                   ParentScaleTitleId: 103,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 104,
      //               ParentScaleName: 'Adaptive Skills',
      //               ParentScaleDescription:
      //                 'summarizes appropriate emotional expression and control, daily living skills inside and outside the home, and communication skills, as well as prosocial, organizational, study, and other adaptive skills',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 447,
      //                   TestId: null,
      //                   Name: 'Adaptability',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the ability to adjust to changes in routine or plans, transition, and recover after a setback.',
      //                   ParentScaleTitleId: 104,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 448,
      //                   TestId: null,
      //                   Name: 'Social Skills',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale emphasizes the interpersonal aspects of social adaptation, including behaviors such as complimenting others, encouraging other, offering assistance, and saying “please” and “thank you.”',
      //                   ParentScaleTitleId: 104,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 449,
      //                   TestId: null,
      //                   Name: 'Functional Communication',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the child’s ability to express ideas and communicate in ways that others can easily understand.',
      //                   ParentScaleTitleId: 104,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 450,
      //                   TestId: null,
      //                   Name: 'Activities of Daily Living',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale is intended to screen for adaptive-behavior deficits and to alert the examiner to additional differential diagnostic considerations associated with lower levels of cognitive functioning. Items assess behaviors related to acting in a safe manner, performing simple daily tasks, and organizing tasks.',
      //                   ParentScaleTitleId: 104,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //             {
      //               Id: 105,
      //               ParentScaleName: 'Behavioral Symptoms Index',
      //               ParentScaleDescription:
      //                 'reflects the overall level of problem behavior. Reasonably estimates the general level of functioning or presence of impairment for an individual with a disability or diagnosed condition',
      //               CreatedDate: null,
      //               SubTests: [
      //                 {
      //                   Id: 451,
      //                   TestId: null,
      //                   Name: 'Hyperactivity',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the hyperactivity and impulsivity aspects of ADHD. Item behaviors focusing on hyperactivity include fiddling with things, interrupting others, being overactive, and having poor self-control. Items related to impulsivity include acting without thinking and being unable to wait for one’s turn in a group activity.',
      //                   ParentScaleTitleId: 105,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 452,
      //                   TestId: null,
      //                   Name: 'Aggression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses the tendency to act in a hostile manner (either verbal or physical) that is threatening to others.',
      //                   ParentScaleTitleId: 105,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 453,
      //                   TestId: null,
      //                   Name: 'Depression',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale assesses traditional symptoms of depression, including sudden changes in mood, negativity, and sadness.',
      //                   ParentScaleTitleId: 105,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 454,
      //                   TestId: null,
      //                   Name: 'Attention Problems',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures the inability to maintain attention and the tendency to be easily distracted from tasks requiring attention.',
      //                   ParentScaleTitleId: 105,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 455,
      //                   TestId: null,
      //                   Name: 'Atypicality',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures a child’s tendency to behave in ways that are considered odd or strange. Many of the atypicality items center on a child’s disconnection from or unawareness of his or her normal surroundings (e.g., being unaware of others, saying things that make no sense, acting like others aren’t there). Other items represent specific unusual behaviors (e.g., picking at things, banging head, babbling to self).',
      //                   ParentScaleTitleId: 105,
      //                   CreatedDate: null,
      //                 },
      //                 {
      //                   Id: 456,
      //                   TestId: null,
      //                   Name: 'Withdrawal',
      //                   Abbreviation: null,
      //                   Description:
      //                     'This scale measures a child’s tendency to avoid social contact and to lack interest in making contact in social settings. Items include behaviors associated with shyness, initiating friendships, and preferring to be alone.',
      //                   ParentScaleTitleId: 105,
      //                   CreatedDate: null,
      //                 },
      //               ],
      //               HasInput: false,
      //             },
      //           ],
      //         },
      //       ],
      //       ParentScaleTitles: [],
      //     },
      //   ],
      //   TestIndexes: [],
      //   SubTests: [],
      //   TestSummaries: [],
      //   ParentScaleTitles: [],
      //   TestModules: [],
      //   ParentGroupSubScales: [],
      //   TestScoringTableDetails: null,
      // },
    ],
    appendixReducer: [
      {
        Abbreviation: 'WIAT-III',
        Id: 13,
        ParentScale: [
          {
            Id: 164,
            ParentScaleTitle: 'Listening',
            SubTests: [
              {
                id: 672,
                name: 'Listening Comprehension (Grades PK-12)',
              },
              {
                id: 673,
                name: 'Oral Expression (Grades PK-12)',
              },
            ],
          },
          {
            Id: 165,
            ParentScaleTitle: 'Reading',
            SubTests: [
              {
                id: 674,
                name: 'Early Reading Skills (Grades PK-3)',
              },
              {
                id: 675,
                name: 'Reading Comprehension (Grades 1-12)',
              },
              {
                id: 676,
                name: 'Word Reading (Grades 1-12)',
              },
              {
                id: 677,
                name: 'Pseudoword Decoding (Grades 1-12)',
              },
              {
                id: 678,
                name: 'Oral Reading Fluency (Grades 1-12)',
              },
            ],
          },
          {
            Id: 166,
            ParentScaleTitle: 'Written Language',
            SubTests: [
              {
                id: 679,
                name: 'Spelling (Grades K-12)',
              },
              {
                id: 680,
                name: 'Alphabet Writing Fluency (Grades PK-3)',
              },
              {
                id: 681,
                name: 'Sentence Composition (Grades 1-12)',
              },
              {
                id: 682,
                name: 'Essay Composition (Grades 3-12)',
              },
            ],
          },
          {
            Id: 167,
            ParentScaleTitle: 'Mathematics',
            SubTests: [
              {
                id: 683,
                name: 'Numerical Operations (Grades K-12))',
              },
              {
                id: 684,
                name: 'Math Problem Solving (Grades PK-12)',
              },
              {
                id: 685,
                name: 'Math Fluency – Addition',
              },
              {
                id: 686,
                name: 'Math Fluency – Subtraction',
              },
              {
                id: 687,
                name: 'Math Fluency – Multiplication',
              },
            ],
          },
        ],
        TestName: 'The Wechsler Individual Achievement Test 3',
      },
      // {
      //   Abbreviation: "Nelson-Denny",
      //   Id: 23,
      //   SubTests: [
      //     {
      //       id: 688,
      //       name: "Vocabulary"
      //     },
      //     {
      //       id: 689,
      //       name: "Comprehension"
      //     },
      //     {
      //       id: 690,
      //       name: "Reading Rate"
      //     }
      //   ],
      //   TestName: "Nelson-Denny Reading Test"
      // },
      // {
      //   Abbreviation: 'WJ-IV ACH',
      //   Id: 616,
      //   ParentScale: [
      //     {
      //       Id: 144,
      //       ParentScaleTitle: 'BASIC READING SKILLS',
      //       SubTests: [
      //         {
      //           id: 616,
      //           name: 'Letter-Word Identification',
      //         },
      //         {
      //           id: 617,
      //           name: 'Word Attack',
      //         },
      //       ],
      //     },
      //     {
      //       Id: 146,
      //       ParentScaleTitle: 'READING COMPREHENSION-EXTENDED',
      //       SubTests: [
      //         {
      //           id: 618,
      //           name: 'Passage Comprehension',
      //         },
      //         {
      //           id: 619,
      //           name: 'Reading Recall',
      //         },
      //         {
      //           id: 620,
      //           name: 'Reading Vocabulary',
      //         },
      //       ],
      //     },
      //     {
      //       Id: 147,
      //       ParentScaleTitle: 'MATH CALCULATION SKILLS',
      //       SubTests: [
      //         {
      //           id: 621,
      //           name: 'Calculation',
      //         },
      //         {
      //           id: 622,
      //           name: 'Math Fact Fluency',
      //         },
      //       ],
      //     },
      //     {
      //       Id: 148,
      //       ParentScaleTitle: 'MATH REASONING',
      //       SubTests: [
      //         {
      //           id: 623,
      //           name: 'Applied Problems',
      //         },
      //         {
      //           id: 624,
      //           name: 'Number Matrices',
      //         },
      //       ],
      //     },
      //     {
      //       Id: 149,
      //       ParentScaleTitle: 'WRITTEN EXPRESSION',
      //       SubTests: [
      //         {
      //           id: 625,
      //           name: 'Writing Samples',
      //         },
      //         {
      //           id: 626,
      //           name: 'Sentence Writing Fluency',
      //         },
      //         {
      //           id: 627,
      //           name: 'Oral Reading',
      //         },
      //         {
      //           id: 628,
      //           name: 'Sentence Reading Fluency',
      //         },
      //       ],
      //     },
      //     {
      //       Id: 150,
      //       ParentScaleTitle: 'Writing Related Subtest',
      //       SubTests: [
      //         {
      //           id: 629,
      //           name: 'Spelling',
      //         },
      //         {
      //           id: 630,
      //           name: 'Sound Awareness',
      //         },
      //         {
      //           id: 631,
      //           name: 'Editing',
      //         },
      //         {
      //           id: 632,
      //           name: 'Science',
      //         },
      //         {
      //           id: 633,
      //           name: 'Social Studies',
      //         },
      //         {
      //           id: 634,
      //           name: 'Humanities',
      //         },
      //         {
      //           id: 635,
      //           name: 'Word Attack',
      //         },
      //         {
      //           id: 636,
      //           name: 'Spelling of Sounds',
      //         },
      //       ],
      //     },
      //   ],
      //   TestName: 'Woodcock-Johnson IV-Tests of Achievement',
      // },
      // {
      //   Abbreviation: "BRIEF",
      //   Id: 78,
      //   ParentScale: [
      //     {
      //       Id: 18,
      //       ParentScaleTitle: "Validity Scales",
      //       SubTests: [
      //         {
      //           id: 78,
      //           name: "Inconsistency Scale"
      //         },
      //         {
      //           id: 79,
      //           name: "Negativity Scale"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 19,
      //       ParentScaleTitle: "Behavioral Regulation Index (BRI)",
      //       SubTests: [
      //         {
      //           id: 82,
      //           name: "Inhibit"
      //         },
      //         {
      //           id: 83,
      //           name: "Shift"
      //         },
      //         {
      //           id: 84,
      //           name: "Emotional Control"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 20,
      //       ParentScaleTitle: "Metacognition Index (MI)",
      //       SubTests: [
      //         {
      //           id: 85,
      //           name: "Initiate"
      //         },
      //         {
      //           id: 86,
      //           name: "Working Memory"
      //         },
      //         {
      //           id: 87,
      //           name: "Plan/Organize"
      //         },
      //         {
      //           id: 88,
      //           name: "Organization of Materials"
      //         },
      //         {
      //           id: 89,
      //           name: "Monitor"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 21,
      //       ParentScaleTitle: "Global Executive Composite (GEC)",
      //       SubTests: [
      //         {
      //           id: 90,
      //           name: "Inhibit"
      //         },
      //         {
      //           id: 91,
      //           name: "Shift"
      //         },
      //         {
      //           id: 92,
      //           name: "Emotional Control"
      //         },
      //         {
      //           id: 93,
      //           name: "Initiate"
      //         },
      //         {
      //           id: 94,
      //           name: "Working Memory"
      //         },
      //         {
      //           id: 95,
      //           name: "Plan/Organize"
      //         },
      //         {
      //           id: 96,
      //           name: "Organization of Materials"
      //         },
      //         {
      //           id: 97,
      //           name: "Monitor"
      //         }
      //       ]
      //     }
      //   ],
      //   TestName: "Behavior Rating Inventory of Executive Function"
      // }
      // {
      //   Abbreviation: 'Conners-3',
      //   Id: 120,
      //   ParentGroupSubScales: [
      //     {
      //       Id: 6,
      //       ParentGroupSubScaleName: 'Parent',
      //       ParentScale: [
      //         {
      //           Id: 24,
      //           ParentScaleTitle: 'Content Scales',
      //           SubTests: [
      //             {
      //               id: 120,
      //               name: 'Inattention',
      //             },
      //             {
      //               id: 121,
      //               name: 'Hyperactivity/Impulsivity',
      //             },
      //             {
      //               id: 122,
      //               name: 'Learning Problems',
      //             },
      //             {
      //               id: 123,
      //               name: 'Executive Functioning',
      //             },
      //             {
      //               id: 124,
      //               name: 'Defiance/Aggression',
      //             },
      //             {
      //               id: 125,
      //               name: 'Peer Relations',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 25,
      //           ParentScaleTitle: 'DSM Symptom Scales',
      //           SubTests: [
      //             {
      //               id: 126,
      //               name: 'ADHD Inattentive',
      //             },
      //             {
      //               id: 127,
      //               name: 'ADHD Hyperactive-Impulsive',
      //             },
      //             {
      //               id: 128,
      //               name: 'Conduct Disorder',
      //             },
      //             {
      //               id: 129,
      //               name: 'Oppositional Defiant Disorder',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 26,
      //           ParentScaleTitle: 'Indices',
      //           SubTests: [
      //             {
      //               id: 130,
      //               name: 'Conners 3 ADHD Index',
      //             },
      //             {
      //               id: 131,
      //               name: 'Conners 3 Global Index',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 27,
      //           ParentScaleTitle: 'Screener Items',
      //           SubTests: [
      //             {
      //               id: 132,
      //               name: 'Anxiety',
      //             },
      //             {
      //               id: 133,
      //               name: 'Depression',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 28,
      //           ParentScaleTitle: 'Critical Items',
      //           SubTests: [
      //             {
      //               id: 134,
      //               name: 'Severe Conduct',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 29,
      //           ParentScaleTitle: 'Validity Scales',
      //           SubTests: [
      //             {
      //               id: 135,
      //               name: 'Positive Impression',
      //             },
      //             {
      //               id: 136,
      //               name: 'Negative Impression',
      //             },
      //             {
      //               id: 137,
      //               name: 'Inconsistency Index',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       Id: 7,
      //       ParentGroupSubScaleName: 'Teacher',
      //       ParentScale: [
      //         {
      //           Id: 30,
      //           ParentScaleTitle: 'Content Scales',
      //           SubTests: [
      //             {
      //               id: 138,
      //               name: 'Inattention',
      //             },
      //             {
      //               id: 139,
      //               name: 'Hyperactivity/Impulsivity',
      //             },
      //             {
      //               id: 141,
      //               name: 'Learning Problems',
      //             },
      //             {
      //               id: 142,
      //               name: 'Executive Functioning',
      //             },
      //             {
      //               id: 143,
      //               name: 'Defiance/Aggression',
      //             },
      //             {
      //               id: 144,
      //               name: 'Peer Relations',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 31,
      //           ParentScaleTitle: 'DSM Symptom Scales',
      //           SubTests: [
      //             {
      //               id: 145,
      //               name: 'ADHD Inattentive',
      //             },
      //             {
      //               id: 146,
      //               name: 'ADHD Hyperactive-Impulsive',
      //             },
      //             {
      //               id: 147,
      //               name: 'Conduct Disorder',
      //             },
      //             {
      //               id: 148,
      //               name: 'Oppositional Defiant Disorder',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 32,
      //           ParentScaleTitle: 'Indices',
      //           SubTests: [
      //             {
      //               id: 149,
      //               name: 'Conners 3 ADHD Index',
      //             },
      //             {
      //               id: 150,
      //               name: 'Conners 3 Global Index',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 33,
      //           ParentScaleTitle: 'Screener Items',
      //           SubTests: [
      //             {
      //               id: 151,
      //               name: 'Anxiety',
      //             },
      //             {
      //               id: 152,
      //               name: 'Depression',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 34,
      //           ParentScaleTitle: 'Critical Items',
      //           SubTests: [
      //             {
      //               id: 153,
      //               name: 'Severe Conduct',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 35,
      //           ParentScaleTitle: 'Validity Scales',
      //           SubTests: [
      //             {
      //               id: 154,
      //               name: 'Positive Impression',
      //             },
      //             {
      //               id: 155,
      //               name: 'Negative Impression',
      //             },
      //             {
      //               id: 156,
      //               name: 'Inconsistency Index',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       Id: 8,
      //       ParentGroupSubScaleName: 'Self-Report',
      //       ParentScale: [
      //         {
      //           Id: 36,
      //           ParentScaleTitle: 'Content Scales',
      //           SubTests: [
      //             {
      //               id: 157,
      //               name: 'Inattention',
      //             },
      //             {
      //               id: 158,
      //               name: 'Hyperactivity/Impulsivity',
      //             },
      //             {
      //               id: 159,
      //               name: 'Learning Problems',
      //             },
      //             {
      //               id: 160,
      //               name: 'Defiance/Aggression',
      //             },
      //             {
      //               id: 161,
      //               name: 'Peer Relations',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 37,
      //           ParentScaleTitle: 'DSM Symptom Scales',
      //           SubTests: [
      //             {
      //               id: 162,
      //               name: 'ADHD Inattentive',
      //             },
      //             {
      //               id: 163,
      //               name: 'ADHD Hyperactive-Impulsive',
      //             },
      //             {
      //               id: 164,
      //               name: 'Conduct Disorder',
      //             },
      //             {
      //               id: 165,
      //               name: 'Oppositional Defiant Disorder',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 38,
      //           ParentScaleTitle: 'Indices',
      //           SubTests: [
      //             {
      //               id: 166,
      //               name: 'Conners 3 ADHD Index',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 39,
      //           ParentScaleTitle: 'Screener Items',
      //           SubTests: [
      //             {
      //               id: 644,
      //               name: 'Anxiety',
      //             },
      //             {
      //               id: 167,
      //               name: 'Depression',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 40,
      //           ParentScaleTitle: 'Critical Items',
      //           SubTests: [
      //             {
      //               id: 168,
      //               name: 'Severe Conduct',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 41,
      //           ParentScaleTitle: 'Validity Scales',
      //           SubTests: [
      //             {
      //               id: 169,
      //               name: 'Positive Impression',
      //             },
      //             {
      //               id: 170,
      //               name: 'Negative Impression',
      //             },
      //             {
      //               id: 171,
      //               name: 'Inconsistency Index',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      //   TestName: 'Conners 3',
      // },
      // {
      //   Abbreviation: 'RBANS',
      //   Id: 2,
      //   ParentGroupSubScales: [
      //     {
      //       Id: 9,
      //       ParentGroupSubScaleName: 'INDEX',
      //       ParentScale: [
      //         {
      //           Id: 47,
      //           ParentScaleTitle: 'Immediate Memory',
      //           SubTests: [
      //             {
      //               id: 221,
      //               name: 'List Learning',
      //             },
      //             {
      //               id: 222,
      //               name: 'Story Memory',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 48,
      //           ParentScaleTitle: 'Visuospatial Constructional',
      //           SubTests: [
      //             {
      //               id: 223,
      //               name: 'Figure Copy',
      //             },
      //             {
      //               id: 224,
      //               name: 'Line Orientation',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 49,
      //           ParentScaleTitle: 'Language',
      //           SubTests: [
      //             {
      //               id: 225,
      //               name: 'Picture Naming',
      //             },
      //             {
      //               id: 226,
      //               name: 'Semantic Fluency',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 50,
      //           ParentScaleTitle: 'Attention',
      //           SubTests: [
      //             {
      //               id: 227,
      //               name: 'Digit Span',
      //             },
      //             {
      //               id: 228,
      //               name: 'Coding',
      //             },
      //           ],
      //         },
      //         {
      //           Id: 51,
      //           ParentScaleTitle: 'Delayed Memory',
      //           SubTests: [
      //             {
      //               id: 229,
      //               name: 'List Recall',
      //             },
      //             {
      //               id: 230,
      //               name: 'List Recognition',
      //             },
      //             {
      //               id: 231,
      //               name: 'Story Recall',
      //             },
      //             {
      //               id: 232,
      //               name: 'Figure Recall',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      //   TestName: 'Repeatable Battery for the Assessment of Neuropsychological Status',
      // },
      // {
      //   Abbreviation: "NEPSY-II",
      //   Id: 24,
      //   ParentScale: [
      //     {
      //       Id: 128,
      //       ParentScaleTitle: "Attention and Executive Functioning",
      //       SubTests: [
      //         {
      //           id: 557,
      //           name: "Animal Sorting (AS)"
      //         },
      //         {
      //           id: 558,
      //           name: "Auditory Attention (AA) and Response Set (RS)"
      //         },
      //         {
      //           id: 559,
      //           name: "Clocks (CL)"
      //         },
      //         {
      //           id: 560,
      //           name: "Design Fluency (DF)"
      //         },
      //         {
      //           id: 561,
      //           name: "Inhibition (IN)"
      //         },
      //         {
      //           id: 562,
      //           name: "Statue (ST)"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 129,
      //       ParentScaleTitle: "Language",
      //       SubTests: [
      //         {
      //           id: 563,
      //           name: "Body Part Naming (BPN) and Identification (BPI)"
      //         },
      //         {
      //           id: 564,
      //           name: "Comprehension of Instructions (CI)"
      //         },
      //         {
      //           id: 565,
      //           name: "Oromotor Sequences (OS)"
      //         },
      //         {
      //           id: 566,
      //           name: "Phonological Processing (PH)"
      //         },
      //         {
      //           id: 567,
      //           name: "Repetition Nonsense Words (RN)"
      //         },
      //         {
      //           id: 568,
      //           name: "Speeded Naming (SN)"
      //         },
      //         {
      //           id: 569,
      //           name: "Word Generation (WG)"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 130,
      //       ParentScaleTitle: "Memory and Learning",
      //       SubTests: [
      //         {
      //           id: 571,
      //           name: "List Memory (LM) List Memory Delayed (LMD)"
      //         },
      //         {
      //           id: 572,
      //           name:
      //             "Memory for Designs (MD) Memory for Designs Delayed (MDD)"
      //         },
      //         {
      //           id: 573,
      //           name: "Memory for Faces (MF) Memory for Faces Delayed (MFD)"
      //         },
      //         {
      //           id: 574,
      //           name: "Memory for Names (MN) Memory for Names Delayed (MND)"
      //         },
      //         {
      //           id: 575,
      //           name: "Narrative Memory (NM)"
      //         },
      //         {
      //           id: 576,
      //           name: "Sentence Repetition (SR)"
      //         },
      //         {
      //           id: 577,
      //           name: "Word List Interference (WI)"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 131,
      //       ParentScaleTitle: "Sensorimotor",
      //       SubTests: [
      //         {
      //           id: 578,
      //           name: "Fingertip Tapping (FT)"
      //         },
      //         {
      //           id: 579,
      //           name: "Imitating Hand Positions (IH)"
      //         },
      //         {
      //           id: 580,
      //           name: "Manual Motor Sequences (MM)"
      //         },
      //         {
      //           id: 581,
      //           name: "Visuomotor Precision (VP)"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 132,
      //       ParentScaleTitle: "Social Perception",
      //       SubTests: [
      //         {
      //           id: 582,
      //           name: "Affect Recognition (AR)"
      //         },
      //         {
      //           id: 583,
      //           name: "Theory of Mind (TM)"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 133,
      //       ParentScaleTitle: "Visuospatial Processing",
      //       SubTests: [
      //         {
      //           id: 584,
      //           name: "Arrows (AW)"
      //         },
      //         {
      //           id: 585,
      //           name: "Block Construction (BC)"
      //         },
      //         {
      //           id: 586,
      //           name: "Design Copying (DC)"
      //         },
      //         {
      //           id: 587,
      //           name: "Geometric Puzzles (GP)"
      //         },
      //         {
      //           id: 588,
      //           name: "Picture Puzzles (PP)"
      //         },
      //         {
      //           id: 589,
      //           name: "Route Finding (RF)"
      //         }
      //       ]
      //     }
      //   ],
      //   TestName:
      //     "A Developmental Neuropsychological Assessment - Second Edition"
      // }
      // {
      //   Abbreviation: "QIK CPT",
      //   Id: 46,
      //   TestName: "QIK Continuous Performance Test",
      //   TestScoringTableScores: [
      //     {
      //       id: 46,
      //       name: "Accuracy Index"
      //     },
      //     {
      //       id: 47,
      //       name: "Sustained Attention"
      //     },
      //     {
      //       id: 48,
      //       name: "Impulse Control"
      //     },
      //     {
      //       id: 49,
      //       name: "Performance Index"
      //     },
      //     {
      //       id: 50,
      //       name: "Speed of Response"
      //     },
      //     {
      //       id: 51,
      //       name: "Consistency of Response"
      //     }
      //   ]
      // },
      // {
      //   Abbreviation: "Vineland-II",
      //   Id: 233,
      //   TestName: "Vineland Adaptive Behavior Scales, 2nd ed.",
      //   ParentScale: [
      //     {
      //       Id: 52,
      //       ParentScaleTitle: "Communication Domain",
      //       SubTests: [
      //         {
      //           id: 233,
      //           name: "Receptive"
      //         },
      //         {
      //           id: 234,
      //           name: "Expressive"
      //         },
      //         {
      //           id: 235,
      //           name: "Written"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 53,
      //       ParentScaleTitle: "Daily Living Skills Domain",
      //       SubTests: [
      //         {
      //           id: 236,
      //           name: "Personal"
      //         },
      //         {
      //           id: 237,
      //           name: "Domestic"
      //         },
      //         {
      //           id: 238,
      //           name: "Community"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 54,
      //       ParentScaleTitle: "Socialization Domain",
      //       SubTests: [
      //         {
      //           id: 239,
      //           name: "Interpersonal Relationships"
      //         },
      //         {
      //           id: 240,
      //           name: "Play and Leisure Time"
      //         },
      //         {
      //           id: 241,
      //           name: "Coping Skills"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 55,
      //       ParentScaleTitle: "Motor Skills Domain (only ages birth through 6)",
      //       SubTests: [
      //         {
      //           id: 242,
      //           name: "Gross"
      //         },
      //         {
      //           id: 243,
      //           name: "Fine"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 56,
      //       ParentScaleTitle: "Maladaptive Behavior Domain (OPTIONAL)",
      //       SubTests: [
      //         {
      //           id: 244,
      //           name: "Maladaptive Behavior Index"
      //         },
      //         {
      //           id: 245,
      //           name: "Maladaptive Behavior Critical Items"
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   Abbreviation: "CTONI-2",
      //   Id: 172,
      //   TestName:
      //     "The Comprehensive Test of Nonverbal Intelligence Second Edition",
      //   ParentScale: [
      //     {
      //       Id: 151,
      //       ParentScaleTitle: "SUBTEST PERFORMANCE",
      //       SubTests: [
      //         {
      //           id: 172,
      //           name: "Pictorial Analogies"
      //         },
      //         {
      //           id: 173,
      //           name: "Geometric Analogies"
      //         },
      //         {
      //           id: 174,
      //           name: "Pictorial Categories"
      //         },
      //         {
      //           id: 175,
      //           name: "Geometric Categories"
      //         },
      //         {
      //           id: 177,
      //           name: "Geometric Sequences"
      //         },
      //         {
      //           id: 176,
      //           name: "Pictorial Sequences"
      //         }
      //       ]
      //     },
      //     {
      //       Id: 152,
      //       ParentScaleTitle: "COMPOSITE PERFORMANCE",
      //       SubTests: [
      //         {
      //           id: 178,
      //           name: "Pictorial Scale"
      //         },
      //         {
      //           id: 179,
      //           name: "Geometric Scale"
      //         },
      //         {
      //           id: 180,
      //           name: "Full Scale"
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   Abbreviation: 'WISC-V',
      //   Id: 1,
      //   TestName: 'Wechsler Intelligence Scale for Children – Fifth Edition',
      //   ParentScale: [
      //     {
      //       Id: 1,
      //       ParentScaleTitle: 'VERBAL  COMPREHENSION INDEX (VCI)',
      //       SubTests: [
      //         {
      //           id: 1,
      //           name: 'Similarities',
      //         },
      //         {
      //           id: 2,
      //           name: 'Vocabulary',
      //         },
      //         {
      //           id: 3,
      //           name: 'Information',
      //         },
      //         {
      //           id: 4,
      //           name: 'Comprehension',
      //         },
      //       ],
      //     },
      //     {
      //       Id: 2,
      //       ParentScaleTitle: 'VISUAL SPATIAL INDEX (VSI)',
      //       SubTests: [
      //         {
      //           id: 5,
      //           name: 'Block Design',
      //         },
      //         {
      //           id: 6,
      //           name: 'Vocabulary',
      //         },
      //       ],
      //     },
      //     {
      //       Id: 3,
      //       ParentScaleTitle: 'FLUID REASONING INDEX (FRI)',
      //       SubTests: [
      //         {
      //           id: 7,
      //           name: 'Matrix Reasoning',
      //         },
      //         {
      //           id: 8,
      //           name: 'Figure Weights',
      //         },
      //         {
      //           id: 9,
      //           name: 'Picture Concepts',
      //         },
      //         {
      //           id: 10,
      //           name: 'Arithmetic',
      //         },
      //       ],
      //     },
      //     {
      //       Id: 4,
      //       ParentScaleTitle: 'WORKING MEMORY INDEX (WMI)',
      //       SubTests: [
      //         {
      //           id: 11,
      //           name: 'Digit Span',
      //         },
      //         {
      //           id: 12,
      //           name: 'Picture Span',
      //         },
      //         {
      //           id: 13,
      //           name: 'Letter- Number Sequencing',
      //         },
      //       ],
      //     },
      //     {
      //       Id: 5,
      //       ParentScaleTitle: 'PROCESSING SPEED INDEX (PSI)',
      //       SubTests: [
      //         {
      //           id: 14,
      //           name: 'Coding',
      //         },
      //         {
      //           id: 15,
      //           name: 'Symbol Search',
      //         },
      //         {
      //           id: 16,
      //           name: 'Cancellation',
      //         },
      //       ],
      //     },
      //     {
      //       Id: 17,
      //       ParentScaleTitle: 'Complimentary Subtests',
      //       SubTests: [
      //         {
      //           id: 73,
      //           name: 'Naming Speed Literacy',
      //         },
      //         {
      //           id: 74,
      //           name: 'Naming Speed Quality',
      //         },
      //         {
      //           id: 75,
      //           name: 'Immediate Symbol Translation',
      //         },
      //         {
      //           id: 76,
      //           name: 'Delayed Symbol Translation',
      //         },
      //         {
      //           id: 77,
      //           name: 'Recognition Symbol Translation',
      //         },
      //       ],
      //     },
      //   ],
      //   TestIndexes: [
      //     {
      //       Id: 1,
      //       IndexName: 'Full Scale IQ',
      //     },
      //     {
      //       Id: 2,
      //       IndexName: 'VISUAL SPATIAL INDEX (VSI)',
      //     },
      //     {
      //       Id: 3,
      //       IndexName: 'VERBAL  COMPREHENSION INDEX (VCI)',
      //     },
      //     {
      //       Id: 4,
      //       IndexName: 'FLUID REASONING INDEX (FRI)',
      //     },
      //     {
      //       Id: 5,
      //       IndexName: 'WORKING MEMORY INDEX (WMI)',
      //     },
      //     {
      //       Id: 6,
      //       IndexName: 'PROCESSING SPEED INDEX (PSI)',
      //     },
      //   ],
      // },
      // {
      //   Abbreviation: "DAS-II",
      //   Id: 743,
      //   TestName: "Differential Ability Scales 2",
      //   ParentScale: [
      //     {
      //       Id: 42,
      //       ParentScaleTitle: "Early Years Core",
      //       SubTests: [
      //         { name: "Verbal Comprehension", id: 743 },
      //         { name: "Picture Similarities", id: 744 },
      //         { name: "Naming Vocabulary", id: 745 },
      //         { name: "Pattern Construction", id: 746 },
      //         { name: "Matrices", id: 747 },
      //         { name: "Copying", id: 748 }
      //       ]
      //     },
      //     {
      //       Id: 43,
      //       ParentScaleTitle: "Early Years Diagnostic",
      //       SubTests: [
      //         { name: "Recall of Objects – Immediate", id: 749 },
      //         { name: "Recall of Objects – Delayed", id: 750 },
      //         { name: "Recall of Digits Forward", id: 751 },
      //         { name: "Recognition of Pictures", id: 752 },
      //         { name: "Early Number Concepts", id: 753 },
      //         { name: "Matching Letter-Like Forms", id: 754 },
      //         { name: "Recall of Sequential Order", id: 755 },
      //         { name: "Speed of Information Processing", id: 756 },
      //         { name: "Recall of Digits Backward", id: 757 },
      //         { name: "Phonological Processing", id: 758 },
      //         { name: "Rapid Naming", id: 759 }
      //       ]
      //     },
      //     {
      //       Id: 44,
      //       ParentScaleTitle: "School-Age Core",
      //       SubTests: [
      //         { name: "Recall of Designs", id: 760 },
      //         { name: "Word Definitions", id: 761 },
      //         { name: "Pattern Construction", id: 762 },
      //         { name: "Matrices", id: 763 },
      //         { name: "Verbal Similarities", id: 764 },
      //         { name: "Sequential and Quantitative Reasoning", id: 765 }
      //       ]
      //     },
      //     {
      //       Id: 45,
      //       ParentScaleTitle: "School-Age Diagnostic",
      //       SubTests: [
      //         { name: "Recall of Objects – Immediate", id: 766 },
      //         { name: "Recall of Objects – Delayed", id: 767 },
      //         { name: "Recall of Digits Forward", id: 768 },
      //         { name: "Recognition of Pictures", id: 769 },
      //         { name: "Recall of Sequential Order", id: 770 },
      //         { name: "Speed of Information Processing", id: 771 },
      //         { name: "Recall of Digits Backward", id: 772 },
      //         { name: "Phonological Processing", id: 773 }
      //       ]
      //     }
      //   ],
      //   TestIndexes: [
      //     {
      //       Id: 10,
      //       IndexName: "General Conceptual Ability (GCA)"
      //     },
      //     {
      //       Id: 10,
      //       IndexName: "Special Nonverbal Composite (SNC)"
      //     }
      //   ]
      // },
      // {
      //   Abbreviation: "WAIS-IV",
      //   Id: 6,
      //   TestName: "The Wechsler Adult Intelligence Scale 4",
      //   ParentScale: [
      //     {
      //       Id: 106,
      //       ParentScaleTitle: "Verbal Comprehension",
      //       SubTests: [
      //         { name: "Similarities", id: 457 },
      //         { name: "Vocabulary", id: 458 },
      //         { name: "Information", id: 459 },
      //         { name: "Comprehension", id: 460 }
      //       ]
      //     },
      //     {
      //       Id: 107,
      //       ParentScaleTitle: "Perceptual Reasoning",
      //       SubTests: [
      //         { name: "Block Design", id: 461 },
      //         { name: "Matrix Reasoning", id: 462 },
      //         { name: "Visual Puzzles", id: 463 },
      //         { name: "Figure Weights", id: 464 },
      //         { name: "Picture Completion", id: 465 }
      //       ]
      //     },
      //     {
      //       Id: 108,
      //       ParentScaleTitle: "Working Memory",
      //       SubTests: [
      //         { name: "Digit Span", id: 466 },
      //         { name: "Arithmetic", id: 467 },
      //         { name: "Letter- Number Sequencing", id: 468 }
      //       ]
      //     },
      //     {
      //       Id: 109,
      //       ParentScaleTitle: "Processing Speed",
      //       SubTests: [
      //         { name: "Coding", id: 469 },
      //         { name: "Symbol Search", id: 470 },
      //         { name: "Cancellation", id: 471 }
      //       ]
      //     }
      //   ],
      //   TestIndexes: [
      //     { Id: 5, IndexName: "Full Scale IQ" },
      //     { Id: 6, IndexName: "General Ability Index" },
      //     { Id: 106, IndexName: "Verbal Comprehension" },
      //     { Id: 107, IndexName: "Perceptual Reasoning" },
      //     { Id: 108, IndexName: "Working Memory" },
      //     { Id: 109, IndexName: "Processing Speed" }
      //   ]
      // },
      // {
      //   Abbreviation: "WASI-IV",
      //   Id: 3,
      //   TestName: "Wechsler Abbreviated Scale of Intelligence, 2nd ed.",
      //   ParentScale: [
      //     {
      //       Id: 57,
      //       ParentScaleTitle: "Verbal Comprehension",
      //       SubTests: [
      //         { name: "Similarities", id: 246 },
      //         { name: "Vocabulary", id: 247 }
      //       ]
      //     },
      //     {
      //       Id: 58,
      //       ParentScaleTitle: "Perceptual Reasoning",
      //       SubTests: [
      //         { name: "Block Design", id: 248 },
      //         { name: "Matrix Reasoning", id: 249 }
      //       ]
      //     }
      //   ],
      //   TestIndexes: [
      //     { Id: 3, IndexName: "Full Scale IQ" },
      //     { Id: 57, IndexName: "Verbal Comprehension" },
      //     { Id: 58, IndexName: "Perceptual Reasoning" }
      //   ]
      // },
      // {
      //   Abbreviation: "WJ-IV COG",
      //   Id: 7,
      //   TestName: "Woodcock-Johnson IV Cognitive Abilities",
      //   ParentScale: [
      //     {
      //       Id: 134,
      //       ParentScaleTitle: "Comprehension-Knowledge <span>(Gc)</span>",
      //       SubTests: [
      //         { name: "Vocabulary", id: 593 },
      //         { name: "General Information", id: 594 }
      //       ]
      //     },
      //     {
      //       Id: 135,
      //       ParentScaleTitle: "Fluid Reasoning <span>(Gf)</span>",
      //       SubTests: [
      //         { name: "Number Series", id: 595 },
      //         { name: "Concept Formation", id: 596 },
      //         { name: "Analysis Synthesis", id: 597 }
      //       ]
      //     },
      //     {
      //       Id: 136,
      //       ParentScaleTitle: "Short-Term Working Memory <span>(Gwm)</span>",
      //       SubTests: [
      //         { name: "Verbal Attention", id: 598 },
      //         { name: "Numbers Reversed", id: 599 },
      //         { name: "Object Number Sequencing", id: 600 }
      //       ]
      //     },
      //     {
      //       Id: 137,
      //       ParentScaleTitle: "Cognitive Processing Speed <span>(Gs)</span>",
      //       SubTests: [
      //         { name: "Letter-Pattern Matching", id: 645 },
      //         { name: "Pair Cancellation", id: 601 }
      //       ]
      //     },
      //     {
      //       Id: 138,
      //       ParentScaleTitle: "Auditory Processing Speed <span>(Ga)</span>",
      //       SubTests: [
      //         { name: "Phonological Processing", id: 602 },
      //         { name: "Non-word Repetition", id: 603 }
      //       ]
      //     },
      //     {
      //       Id: 139,
      //       ParentScaleTitle: "Long-Term Retrieval <span>(Glr)</span>",
      //       SubTests: [
      //         { name: "Recall", id: 604 },
      //         { name: "Visual Auditory Learning", id: 605 }
      //       ]
      //     },
      //     {
      //       Id: 140,
      //       ParentScaleTitle: "Visual Processing <span>(Gv)</span>",
      //       SubTests: [
      //         { name: "Visualization", id: 606 },
      //         { name: "Picture Recognition", id: 607 }
      //       ]
      //     }
      //   ],
      //   TestIndexes: [
      //     { Id: 7, IndexName: "General Intellectual Ability (GIA)" },
      //     { Id: 134, IndexName: "Comprehension-Knowledge <span>(Gc)</span>" },
      //     { Id: 135, IndexName: "Fluid Reasoning <span>(Gf)</span>" },
      //     {
      //       Id: 136,
      //       IndexName: "Short-Term Working Memory <span>(Gwm)</span>"
      //     },
      //     {
      //       Id: 137,
      //       IndexName: "Cognitive Processing Speed <span>(Gs)</span>"
      //     },
      //     {
      //       Id: 138,
      //       IndexName: "Auditory Processing Speed <span>(Ga)</span>"
      //     },
      //     { Id: 139, IndexName: "Long-Term Retrieval <span>(Glr)</span>" },
      //     { Id: 140, IndexName: "Visual Processing <span>(Gv)</span>" }
      //   ]
      // },
      // {
      //   Abbreviation: "WPPSI-IV",
      //   Id: 9,
      //   TestName:
      //     "Wechsler Preschool & Primary Scale of Intelligence 4th Ed.",
      //   ParentScale: [
      //     {
      //       Id: 153,
      //       ParentScaleTitle: "Verbal Comprehension",
      //       SubTests: [
      //         { name: "Similarities", id: 647 },
      //         { name: "Vocabulary", id: 648 },
      //         { name: "Information", id: 649 },
      //         { name: "Comprehension", id: 650 }
      //       ]
      //     },
      //     {
      //       Id: 154,
      //       ParentScaleTitle: "Fluid Reasoning",
      //       SubTests: [
      //         { name: "Matrix Reasoning", id: 651 },
      //         { name: "Picture Concepts", id: 652 }
      //       ]
      //     },
      //     {
      //       Id: 155,
      //       ParentScaleTitle: "Visual-Spatial Reasoning",
      //       SubTests: [
      //         { name: "Block Design", id: 653 },
      //         { name: "Object Assembly", id: 654 }
      //       ]
      //     },
      //     {
      //       Id: 156,
      //       ParentScaleTitle: "Working Memory",
      //       SubTests: [
      //         { name: "Picture Memory", id: 655 },
      //         { name: "Zoo Locations", id: 656 }
      //       ]
      //     },
      //     {
      //       Id: 157,
      //       ParentScaleTitle: "Processing Speed",
      //       SubTests: [
      //         { name: "Bug Search", id: 657 },
      //         { name: "Cancellation", id: 658 },
      //         { name: "Animal Coding", id: 659 }
      //       ]
      //     }
      //   ],
      //   TestIndexes: [
      //     { Id: 9, IndexName: "Full Scale IQ" },
      //     { Id: 9, IndexName: "General Ability Index" },
      //     { Id: 153, IndexName: "Verbal Comprehension" },
      //     { Id: 155, IndexName: "Visual-Spatial Reasoning" },
      //     { Id: 157, IndexName: "Processing Speed" },
      //     { Id: 154, IndexName: "Fluid Reasoning" },
      //     { Id: 156, IndexName: "Working Memory" }
      //   ]
      // },
      // {
      //   Abbreviation: "GORT-5",
      //   Id: 18,
      //   SubTests: [
      //     { id: 733, name: "Rate" },
      //     { id: 734, name: "Accuracy" },
      //     { id: 735, name: "Fluency" },
      //     { id: 736, name: "Comprehension" }
      //   ],
      //   TestName: "Gray Oral Reading Tests 5"
      // },
      // {
      //   Abbreviation: "TOMM",
      //   Id: 34,
      //   SubTests: [
      //     { id: 737, name: "Trail 1" },
      //     { id: 738, name: "Trial 2" },
      //     { id: 739, name: "Retention Trial" }
      //   ],
      //   TestName: "Test of Memory Malingering"
      // },
      // {
      //   Abbreviation: 'WRAML2',
      //   Id: 14,
      //   ParentGroupSubScales: [
      //     {
      //       Id: 10,
      //       ParentGroupSubScaleName: 'Core Subtests and Indexes',
      //       ParentScale: [
      //         {
      //           Id: 60,
      //           ParentScaleTitle: 'Verbal Memory Index',
      //           SubTests: [
      //             { name: 'Story Memory', id: 266 },
      //             { name: 'Verbal Learning', id: 267 },
      //           ],
      //         },
      //         {
      //           Id: 61,
      //           ParentScaleTitle: 'Visual Memory Index',
      //           SubTests: [
      //             { name: 'Design Memory', id: 268 },
      //             { name: 'Picture Memory', id: 269 },
      //           ],
      //         },
      //         {
      //           Id: 62,
      //           ParentScaleTitle: 'Attention-Concentration Index',
      //           SubTests: [
      //             { name: 'Finger Windows', id: 270 },
      //             { name: 'Number/Letter', id: 271 },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       Id: 11,
      //       ParentGroupSubScaleName: 'Optional, Delay Recall, and Recognition Subtests',
      //       ParentScale: [
      //         {
      //           Id: 63,
      //           ParentScaleTitle: 'Optional Subtests',
      //           SubTests: [
      //             { name: 'Sentence Memory', id: 272 },
      //             { name: 'Sound Symbol', id: 273 },
      //             { name: 'Verbal Working Memory', id: 274 },
      //             { name: 'Symbolic Working memory', id: 275 },
      //           ],
      //         },
      //         {
      //           Id: 64,
      //           ParentScaleTitle: 'Delay Recall Subtests',
      //           SubTests: [
      //             { name: 'Story Memory Delay Recall', id: 276 },
      //             { name: 'Verbal Learning Delay Recall', id: 277 },
      //             { name: 'Sound Symbol Delay Recall', id: 278 },
      //           ],
      //         },
      //         {
      //           Id: 65,
      //           ParentScaleTitle: 'Recognition Subtests',
      //           SubTests: [
      //             { name: 'Story Memory Recognition', id: 279 },
      //             { name: 'Verbal Learning Recognition', id: 280 },
      //             { name: 'Design Memory Recognition', id: 281 },
      //             { name: 'Picture Memory Recognition', id: 282 },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      //   TestName: 'Wide Range Assessment of Memory and Learning 2',
      // },
      // {
      //   Abbreviation: "Beery VMI",
      //   Id: 3,
      //   TestName:
      //     "Beery-Buktenica Developmental Test of Visual-Motor Integration",
      //   ParentScale: [
      //     {
      //       Id: 161,
      //       ParentScaleTitle: "Visual-Motor Integration",
      //       SubTests: [{ name: "Beery-Motor Integration (VMI)", id: 669 }]
      //     },
      //     {
      //       Id: 162,
      //       ParentScaleTitle: "Visual Perception",
      //       SubTests: [{ name: "Beery-Visual Perception", id: 670 }]
      //     },
      //     {
      //       Id: 163,
      //       ParentScaleTitle: "Visual-Motor Coordination",
      //       SubTests: [
      //         { name: "Beery-Motor Coordination", id: 671 },
      //         { name: "Beery-Motor Coordination", id: 671 }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   Abbreviation: 'MCMI–IV',
      //   Id: 20,
      //   TestName: 'Millon Clinical Multiaxial Inventory, 4th Edition',
      //   ParentScale: [
      //     {
      //       Id: 119,
      //       ParentScaleTitle: 'Clinical Personality Patterns',
      //       SubTests: [
      //         { name: 'Schizoid (1)', id: 496 },
      //         { name: 'Depressive (2B)', id: 498 },
      //         { name: 'Dependent (3)', id: 499 },
      //         { name: 'Histrionic (4)', id: 500 },
      //         { name: 'Narcissistic (5)', id: 501 },
      //         { name: 'Sadistic (Aggressive) 6B', id: 503 },
      //         { name: 'Compulsive (7)', id: 504 },
      //       ],
      //     },
      //     {
      //       Id: 120,
      //       ParentScaleTitle: 'Severe Personality Pathology',
      //       SubTests: [
      //         { name: 'Schizotypal (S)', id: 507 },
      //         { name: 'Borderline {C}', id: 508 },
      //         { name: 'Paranoid (P)', id: 509 },
      //       ],
      //     },
      //     {
      //       Id: 121,
      //       ParentScaleTitle: 'Clinical Syndromes',
      //       SubTests: [
      //         { name: 'Anxiety (A)', id: 510 },
      //         { name: 'Somatoform (H)', id: 511 },
      //         { name: 'Bipolar Manic (N)', id: 512 },
      //         { name: 'Dysthymia (D)', id: 513 },
      //         { name: 'Alcohol Dependence (B)', id: 514 },
      //         { name: 'Drug Dependence (T)', id: 515 },
      //         { name: 'Post-Traumatic Stress Disorder {R}', id: 516 },
      //       ],
      //     },
      //     {
      //       Id: 122,
      //       ParentScaleTitle: 'Severe Clinical Syndromes',
      //       SubTests: [
      //         { name: 'Thought Disorder (SS)', id: 517 },
      //         { name: 'Major Depression (CC)', id: 518 },
      //         { name: 'Delusional Disorder (PP)', id: 519 },
      //       ],
      //     },
      //     {
      //       Id: 123,
      //       ParentScaleTitle: 'Modifying Indices',
      //       SubTests: [
      //         { name: 'Disclosure (X)', id: 520 },
      //         { name: 'Desirability (Y)', id: 521 },
      //         { name: 'Debasement (Z)', id: 522 },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   Abbreviation: "MMPI-2",
      //   Id: 21,
      //   TestName: "Minnesota Personality Inventory-2",
      //   ParentScale: [
      //     {
      //       Id: 125,
      //       ParentScaleTitle: "Clinical Scales",
      //       SubTests: [
      //         { name: "Hypochondriasis (Hs)", id: 525 },
      //         { name: "Depression (D)", id: 526 },
      //         { name: "Hysteria (Hy)", id: 527 },
      //         { name: "Psychopathic Deviate (Pd)", id: 528 },
      //         { name: "Masculinity/Femininity (Mf)", id: 529 },
      //         { name: "Paranoia (Pa)", id: 530 },
      //         { name: "Psychasthenia (Pt)", id: 531 },
      //         { name: "Schizophrenia (Sc)", id: 532 },
      //         { name: "Hypomania (Ma)", id: 533 },
      //         { name: "Social Introversion (Si)", id: 534 }
      //       ]
      //     },
      //     {
      //       Id: 126,
      //       ParentScaleTitle: "Validity Scales",
      //       SubTests: [
      //         { name: "Lie (L)", id: 535 },
      //         { name: "F", id: 536 },
      //         { name: "Back F (F<sup>b</sup>)", id: 537 },
      //         { name: "K", id: 538 }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   Abbreviation: "MMPI-A",
      //   Id: 22,
      //   TestName: "Minnesota Personality Inventory-A",
      //   ParentScale: [
      //     {
      //       Id: 160,
      //       ParentScaleTitle: "Clinical",
      //       SubTests: [
      //         { name: "Hypochondriasis (Hs)", id: 539 },
      //         { name: "Depression (D)", id: 540 },
      //         { name: "Hysteria (Hy)", id: 541 },
      //         { name: "Psychopathic Deviate (Pd)", id: 542 },
      //         { name: "Masculinity/Femininity (Mf)", id: 543 },
      //         { name: "Paranoia (Pa)", id: 544 },
      //         { name: "Psychasthenia (Pt)", id: 545 },
      //         { name: "Schizophrenia (Sc)", id: 546 },
      //         { name: "Hypomania (Ma)", id: 547 },
      //         { name: "Social Introversion (Si)", id: 548 }
      //       ]
      //     },
      //     {
      //       Id: 127,
      //       ParentScaleTitle: "Validity Scales",
      //       SubTests: [
      //         { name: "CNS", id: 549 },
      //         { name: "VRIN", id: 550 },
      //         { name: "TRIN", id: 551 },
      //         { name: "F", id: 552 },
      //         { name: "F1", id: 553 },
      //         { name: "F2", id: 554 },
      //         { name: "L", id: 555 },
      //         { name: "K", id: 556 }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   Abbreviation: "PIY",
      //   Id: 17,
      //   TestName: "Personality Inventory for Youth",
      //   ParentScale: [
      //     {
      //       Id: 110,
      //       ParentScaleTitle: "Cognitive Impairment Scale",
      //       SubTests: [
      //         { name: "Poor Achievement and Memory", id: 472 },
      //         { name: "Inadequate Abilities", id: 473 },
      //         { name: "Learning Problems", id: 474 }
      //       ]
      //     },
      //     {
      //       Id: 111,
      //       ParentScaleTitle: "Impulsivity and Distractibility Scale",
      //       SubTests: [
      //         { name: "Brashness", id: 475 },
      //         { name: "Distractibility and Overactivity", id: 476 },
      //         { name: "Impulsivity", id: 477 }
      //       ]
      //     },
      //     {
      //       Id: 112,
      //       ParentScaleTitle: "Delinquency Scale",
      //       SubTests: [
      //         { name: "Antisocial Behavior", id: 478 },
      //         { name: "Dyscontrol", id: 479 },
      //         { name: "Noncompliance", id: 480 }
      //       ]
      //     },
      //     {
      //       Id: 113,
      //       ParentScaleTitle: "Family Dysfunction Scale",
      //       SubTests: [
      //         { name: "Parent-Child Conflict", id: 481 },
      //         { name: "Parent Maladjustment", id: 482 },
      //         { name: "Marital Discord", id: 483 }
      //       ]
      //     },
      //     {
      //       Id: 114,
      //       ParentScaleTitle: "Reality Distortion Scale",
      //       SubTests: [
      //         { name: "Feelings of Alienation", id: 484 },
      //         { name: "Hallucinations and Delusions", id: 485 }
      //       ]
      //     },
      //     {
      //       Id: 115,
      //       ParentScaleTitle: "Somatic Concern Scale",
      //       SubTests: [
      //         { name: "Psychosomatic Syndrome", id: 486 },
      //         { name: "Muscular Tension and Anxiety", id: 487 },
      //         { name: "Preoccupation with Disease", id: 488 }
      //       ]
      //     },
      //     {
      //       Id: 116,
      //       ParentScaleTitle: "Psychological Discomfort Scale",
      //       SubTests: [
      //         { name: "Fear and Worry", id: 489 },
      //         { name: "Depression", id: 490 },
      //         { name: "Sleep Disturbance", id: 491 }
      //       ]
      //     },
      //     {
      //       Id: 117,
      //       ParentScaleTitle: "Social Withdrawal Scale",
      //       SubTests: [
      //         { name: "Social Introversion", id: 492 },
      //         { name: "Isolation", id: 493 }
      //       ]
      //     },
      //     {
      //       Id: 118,
      //       ParentScaleTitle: "Social Skill Deficit Scale",
      //       SubTests: [
      //         { name: "Limited Peer Status", id: 494 },
      //         { name: "Conflict with Peers", id: 495 }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   Abbreviation: 'TSCC',
      //   Id: 30,
      //   TestName: 'Trauma Symptom Checklist for Children',
      //   ParentScale: [
      //     {
      //       Id: 142,
      //       ParentScaleTitle: 'Validity Scale',
      //       SubTests: [
      //         { name: 'Underresponse (UND)', id: 608 },
      //         { name: 'Hyperresponse (HYP)', id: 609 },
      //       ],
      //     },
      //     {
      //       Id: 143,
      //       ParentScaleTitle: 'Clinical Scale',
      //       SubTests: [
      //         { name: 'Anxiety (ANX)', id: 610 },
      //         { name: 'Depression (DEP)', id: 611 },
      //         { name: 'Anger (ANG)', id: 612 },
      //         { name: 'Posttraumatic Stress (PTS)', id: 613 },
      //         { name: 'Dissociation (DIS)', id: 614 },
      //         { name: 'Sexual Concerns (SC)', id: 615 },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   Abbreviation: 'BASC-3',
      //   Id: 15,
      //   TestName: 'Behavior Assessment System for Children',
      //   ParentGroupScales: [
      //     {
      //       Id: 9,
      //       ParentGroupScaleName: 'Self-Report of Personality',
      //       ParentScaleTitles: [
      //         {
      //           Id: 66,
      //           ParentScaleName: 'Validity Indexes',
      //           SubTests: [
      //             { name: 'F Index', id: 283 },
      //             { name: 'L Index', id: 284 },
      //             { name: 'V Index', id: 285 },
      //           ],
      //         },
      //         {
      //           Id: 67,
      //           ParentScaleName: 'Clinical Scales',
      //           SubTests: [
      //             { name: 'Alcohol Abuse', id: 286 },
      //             { name: 'Anxiety', id: 287 },
      //             { name: 'Attention Problems', id: 288 },
      //             { name: 'Attitude to School', id: 289 },
      //             { name: 'Attitude to Teachers', id: 290 },
      //             { name: 'Atypicality', id: 291 },
      //             { name: 'Depression', id: 292 },
      //             { name: 'Hyperactivity', id: 293 },
      //             { name: 'Locus of Control', id: 294 },
      //             { name: 'School Maladjustment', id: 295 },
      //             { name: 'Sensation Seeking', id: 296 },
      //             { name: 'Sense of Inadequacy', id: 297 },
      //             { name: 'Social Stress', id: 298 },
      //             { name: 'Somatization', id: 299 },
      //           ],
      //         },
      //         {
      //           Id: 68,
      //           ParentScaleName: 'Adaptive Scales',
      //           SubTests: [
      //             { name: 'Interpersonal Relations', id: 300 },
      //             { name: 'Relations with Parents', id: 301 },
      //             { name: 'Relations with Parents', id: 301 },
      //             { name: 'Self-Esteem', id: 302 },
      //             { name: 'Self-Reliance', id: 303 },
      //           ],
      //         },
      //         {
      //           Id: 69,
      //           ParentScaleName: 'Content Scales',
      //           SubTests: [
      //             { name: 'Anger Control', id: 304 },
      //             { name: 'Ego Strength', id: 305 },
      //             { name: 'Mania', id: 306 },
      //             { name: 'Test Anxiety', id: 307 },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       Id: 10,
      //       ParentGroupScaleName: 'SRP Composite Scales',
      //       ParentGroupSubScales: [
      //         {
      //           Id: 12,
      //           ParentGroupSubScaleName: 'SRP-C',
      //           ParentScaleTitles: [
      //             {
      //               Id: 70,
      //               ParentScaleName: 'School Problems',
      //               SubTests: [
      //                 { name: 'Attitude to School', id: 308 },
      //                 { name: 'Attitude to Teachers', id: 309 },
      //               ],
      //             },
      //             {
      //               Id: 71,
      //               ParentScaleName: 'Internalizing Problems',
      //               SubTests: [
      //                 { name: 'Atypicality', id: 310 },
      //                 { name: 'Locus of Control', id: 311 },
      //                 { name: 'Social Stress', id: 312 },
      //                 { name: 'Anxiety', id: 313 },
      //                 { name: 'Depression', id: 314 },
      //                 { name: 'Sense of Inadequacy', id: 315 },
      //               ],
      //             },
      //             {
      //               Id: 72,
      //               ParentScaleName: 'Inattention/Hyperactivity',
      //               SubTests: [
      //                 { name: 'Attention Problems', id: 316 },
      //                 { name: 'Hyperactivity', id: 317 },
      //               ],
      //             },
      //             {
      //               Id: 159,
      //               ParentScaleName: 'Emotional Symptoms Index',
      //               SubTests: [
      //                 { name: 'Social Stress', id: 662 },
      //                 { name: 'Anxiety', id: 664 },
      //                 { name: 'Depression', id: 665 },
      //                 { name: 'Sense of Inadequacy', id: 666 },
      //                 { name: 'Self-Esteem', id: 667 },
      //                 { name: 'Self-Reliance', id: 668 },
      //               ],
      //             },
      //             {
      //               Id: 73,
      //               ParentScaleName: 'Personal Adjustment',
      //               SubTests: [
      //                 { name: 'Interpersonal Relations', id: 324 },
      //                 { name: 'Relations with Parents', id: 325 },
      //                 { name: 'Self-Esteem', id: 326 },
      //                 { name: 'Self-Reliance', id: 327 },
      //               ],
      //             },
      //             {
      //               Id: 74,
      //               ParentScaleName: 'Personal Adjustment',
      //               SubTests: [
      //                 { name: 'Interpersonal Relations', id: 324 },
      //                 { name: 'Relations with Parents', id: 325 },
      //                 { name: 'Self-Esteem', id: 326 },
      //                 { name: 'Self-Reliance', id: 327 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           Id: 13,
      //           ParentGroupSubScaleName: 'SRP-A',
      //           ParentScaleTitles: [
      //             {
      //               Id: 74,
      //               ParentScaleName: 'School Problems',
      //               SubTests: [
      //                 { name: 'Attitude to School', id: 328 },
      //                 { name: 'Attitude to Teachers', id: 329 },
      //                 { name: 'Sensation Seeking', id: 330 },
      //               ],
      //             },
      //             {
      //               Id: 75,
      //               ParentScaleName: 'Internalizing Problems',
      //               SubTests: [
      //                 { name: 'Atypicality', id: 331 },
      //                 { name: 'Locus of Control', id: 332 },
      //                 { name: 'Social Stress', id: 333 },
      //                 { name: 'Anxiety', id: 334 },
      //                 { name: 'Depression', id: 335 },
      //                 { name: 'Sense of Inadequacy', id: 336 },
      //                 { name: 'Somatization', id: 337 },
      //               ],
      //             },
      //             {
      //               Id: 76,
      //               ParentScaleName: 'Inattention/Hyperactivity',
      //               SubTests: [
      //                 { name: 'Attention Problems', id: 338 },
      //                 { name: 'Hyperactivity', id: 339 },
      //                 { name: 'Hyperactivity', id: 339 },
      //               ],
      //             },
      //             {
      //               Id: 77,
      //               ParentScaleName: 'Emotional Symptoms Index',
      //               SubTests: [
      //                 { name: 'Social Stress', id: 340 },
      //                 { name: 'Anxiety', id: 341 },
      //                 { name: 'Depression', id: 342 },
      //                 { name: 'Sense of Inadequacy', id: 343 },
      //                 { name: 'Self-Esteem', id: 344 },
      //                 { name: 'Social Stress', id: 340 },
      //                 { name: 'Anxiety', id: 341 },
      //                 { name: 'Depression', id: 342 },
      //                 { name: 'Sense of Inadequacy', id: 343 },
      //                 { name: 'Self-Esteem', id: 344 },
      //                 { name: 'Self-Reliance', id: 345 },
      //               ],
      //             },
      //             {
      //               Id: 78,
      //               ParentScaleName: 'Personal Adjustment',
      //               SubTests: [
      //                 { name: 'Interpersonal Relations', id: 346 },
      //                 { name: 'Relations with Parents', id: 347 },
      //                 { name: 'Self-Esteem', id: 348 },
      //                 { name: 'Self-Reliance', id: 349 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           Id: 14,
      //           ParentGroupSubScaleName: 'SRP-COL',
      //           ParentScaleTitles: [
      //             {
      //               Id: 79,
      //               ParentScaleName: 'Internalizing Problems',
      //               SubTests: [
      //                 { name: 'Atypicality', id: 350 },
      //                 { name: 'Locus of Control', id: 351 },
      //                 { name: 'Social Stress', id: 352 },
      //                 { name: 'Anxiety', id: 353 },
      //                 { name: 'Depression', id: 354 },
      //                 { name: 'Sense of Inadequacy', id: 355 },
      //                 { name: 'Somatization', id: 356 },
      //               ],
      //             },
      //             {
      //               Id: 80,
      //               ParentScaleName: 'Inattention/Hyperactivity',
      //               SubTests: [
      //                 { name: 'Attention Problems', id: 357 },
      //                 { name: 'Hyperactivity', id: 358 },
      //               ],
      //             },
      //             {
      //               Id: 81,
      //               ParentScaleName: 'Emotional Symptoms Index',
      //               SubTests: [
      //                 { name: 'Social Stress', id: 359 },
      //                 { name: 'Anxiety', id: 360 },
      //                 { name: 'Depression', id: 361 },
      //                 { name: 'Sense of Inadequacy', id: 362 },
      //                 { name: 'Self-Esteem', id: 363 },
      //                 { name: 'Self-Reliance', id: 364 },
      //               ],
      //             },
      //             {
      //               Id: 82,
      //               ParentScaleName: 'Personal Adjustment',
      //               SubTests: [
      //                 { name: 'Interpersonal Relations', id: 365 },
      //                 { name: 'Relations with Parents', id: 366 },
      //                 { name: 'Self-Esteem', id: 367 },
      //                 { name: 'Self-Reliance', id: 368 },
      //               ],
      //             },
      //             {
      //               Id: 85,
      //               ParentScaleName: 'Validity Indexes',
      //               SubTests: [{ name: 'F Index', id: 369 }],
      //             },
      //             {
      //               Id: 86,
      //               ParentScaleName: 'Clinical Scales',
      //               SubTests: [
      //                 { name: 'Aggression', id: 370 },
      //                 { name: 'Anxiety', id: 371 },
      //                 { name: 'Attention Problems', id: 372 },
      //                 { name: 'Atypicality', id: 373 },
      //                 { name: 'Conduct Problems', id: 374 },
      //                 { name: 'Depression', id: 375 },
      //                 { name: 'Hyperactivity', id: 376 },
      //                 { name: 'Learning Problems', id: 377 },
      //                 { name: 'Somatization', id: 378 },
      //                 { name: 'Withdrawal', id: 379 },
      //               ],
      //             },
      //             {
      //               Id: 87,
      //               ParentScaleName: 'Adaptive Scales',
      //               SubTests: [
      //                 { name: 'Activities of Daily Living', id: 380 },
      //                 { name: 'Adaptability', id: 381 },
      //                 { name: 'Functional Communication', id: 382 },
      //                 { name: 'Leadership', id: 383 },
      //                 { name: 'Social Skills', id: 384 },
      //                 { name: 'Study Skills', id: 385 },
      //               ],
      //             },
      //             {
      //               Id: 88,
      //               ParentScaleName: 'Content Scales',
      //               SubTests: [
      //                 { name: 'Anger Control', id: 386 },
      //                 { name: 'Bullying', id: 387 },
      //                 { name: 'Developmental Social Disorders', id: 388 },
      //                 { name: 'Emotional Self-Control', id: 389 },
      //                 { name: 'Executive Functioning', id: 390 },
      //                 { name: 'Negative Emotionality', id: 391 },
      //                 { name: 'Resiliency', id: 392 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       Id: 11,
      //       ParentGroupScaleName: 'Composite Scales',
      //       ParentGroupSubScales: [
      //         {
      //           Id: 15,
      //           ParentGroupSubScaleName: 'TRS-P',
      //           ParentScaleTitles: [
      //             {
      //               Id: 89,
      //               ParentScaleName: 'Externalizing Problems',
      //               SubTests: [
      //                 { name: 'Hyperactivity', id: 393 },
      //                 { name: 'Aggression', id: 394 },
      //                 { name: 'Hyperactivity', id: 393 },
      //                 { name: 'Aggression', id: 394 },
      //               ],
      //             },
      //             {
      //               Id: 90,
      //               ParentScaleName: 'Internalizing Problems',
      //               SubTests: [
      //                 { name: 'Anxiety', id: 395 },
      //                 { name: 'Depression', id: 396 },
      //                 { name: 'Somatization', id: 397 },
      //                 { name: 'Anxiety', id: 395 },
      //                 { name: 'Depression', id: 396 },
      //                 { name: 'Somatization', id: 397 },
      //               ],
      //             },
      //             {
      //               Id: 91,
      //               ParentScaleName: 'Adaptive Skills',
      //               SubTests: [
      //                 { name: 'Adaptability', id: 398 },
      //                 { name: 'Social Skills', id: 399 },
      //                 { name: 'Functional Communication', id: 400 },
      //               ],
      //             },
      //             {
      //               Id: 92,
      //               ParentScaleName: 'Behavioral Symptoms Index',
      //               SubTests: [
      //                 { name: 'Hyperactivity', id: 401 },
      //                 { name: 'Aggression', id: 402 },
      //                 { name: 'Depression', id: 403 },
      //                 { name: 'Attention Problems', id: 404 },
      //                 { name: 'Atypicality', id: 405 },
      //                 { name: 'Withdrawal', id: 406 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           Id: 16,
      //           ParentGroupSubScaleName: 'TRS-C / TRS-A',
      //           ParentScaleTitles: [
      //             {
      //               Id: 93,
      //               ParentScaleName: 'Externalizing Problems',
      //               SubTests: [
      //                 { name: 'Hyperactivity', id: 407 },
      //                 { name: 'Aggression', id: 408 },
      //                 { name: 'Conduct Problems', id: 409 },
      //               ],
      //             },
      //             {
      //               Id: 94,
      //               ParentScaleName: 'Internalizing Problems',
      //               SubTests: [
      //                 { name: 'Anxiety', id: 410 },
      //                 { name: 'Depression', id: 411 },
      //                 { name: 'Somatization', id: 412 },
      //               ],
      //             },
      //             {
      //               Id: 95,
      //               ParentScaleName: 'School Problems',
      //               SubTests: [
      //                 { name: 'Learning Problems', id: 413 },
      //                 { name: 'Attention Problems', id: 414 },
      //               ],
      //             },
      //             {
      //               Id: 96,
      //               ParentScaleName: 'Adaptive Skills',
      //               SubTests: [
      //                 { name: 'Adaptability', id: 415 },
      //                 { name: 'Social Skills', id: 416 },
      //                 { name: 'Functional Communication', id: 417 },
      //                 { name: 'Leadership', id: 418 },
      //                 { name: 'Study Skills', id: 419 },
      //               ],
      //             },
      //             {
      //               Id: 97,
      //               ParentScaleName: 'Behavioral Symptoms Index',
      //               SubTests: [
      //                 { name: 'Hyperactivity', id: 420 },
      //                 { name: 'Aggression', id: 421 },
      //                 { name: 'Depression', id: 422 },
      //                 { name: 'Attention Problems', id: 423 },
      //                 { name: 'Atypicality', id: 424 },
      //                 { name: 'Withdrawal', id: 425 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           Id: 17,
      //           ParentGroupSubScaleName: 'PRS-P',
      //           ParentScaleTitles: [
      //             {
      //               Id: 98,
      //               ParentScaleName: 'Externalizing Problems',
      //               SubTests: [
      //                 { name: 'Hyperactivity', id: 426 },
      //                 { name: 'Aggression', id: 427 },
      //               ],
      //             },
      //             {
      //               Id: 99,
      //               ParentScaleName: 'Internalizing Problems',
      //               SubTests: [
      //                 { name: 'Anxiety', id: 428 },
      //                 { name: 'Depression', id: 429 },
      //                 { name: 'Somatization', id: 430 },
      //               ],
      //             },
      //             {
      //               Id: 100,
      //               ParentScaleName: 'Adaptive Skills',
      //               SubTests: [
      //                 { name: 'Adaptability', id: 431 },
      //                 { name: 'Social Skills', id: 432 },
      //                 { name: 'Functional Communication', id: 433 },
      //                 { name: 'Activities of Daily Living', id: 434 },
      //               ],
      //             },
      //             {
      //               Id: 101,
      //               ParentScaleName: 'Behavioral Symptoms Index',
      //               SubTests: [
      //                 { name: 'Hyperactivity', id: 435 },
      //                 { name: 'Aggression', id: 436 },
      //                 { name: 'Depression', id: 437 },
      //                 { name: 'Attention Problems', id: 438 },
      //                 { name: 'Atypicality', id: 439 },
      //                 { name: 'Withdrawal', id: 440 },
      //               ],
      //             },
      //           ],
      //         },
      //         {
      //           Id: 18,
      //           ParentGroupSubScaleName: 'PRS-C / PRS-A',
      //           ParentScaleTitles: [
      //             {
      //               Id: 102,
      //               ParentScaleName: 'Externalizing Problems',
      //               SubTests: [
      //                 { name: 'Hyperactivity', id: 441 },
      //                 { name: 'Aggression', id: 442 },
      //                 { name: 'Conduct Problems', id: 443 },
      //               ],
      //             },
      //             {
      //               Id: 103,
      //               ParentScaleName: 'Internalizing Problems',
      //               SubTests: [
      //                 { name: 'Anxiety', id: 444 },
      //                 { name: 'Depression', id: 445 },
      //                 { name: 'Somatization', id: 446 },
      //               ],
      //             },
      //             {
      //               Id: 104,
      //               ParentScaleName: 'Adaptive Skills',
      //               SubTests: [
      //                 { name: 'Adaptability', id: 447 },
      //                 { name: 'Social Skills', id: 448 },
      //                 { name: 'Functional Communication', id: 449 },
      //                 { name: 'Activities of Daily Living', id: 450 },
      //               ],
      //             },
      //             {
      //               Id: 105,
      //               ParentScaleName: 'Behavioral Symptoms Index',
      //               SubTests: [
      //                 { name: 'Hyperactivity', id: 451 },
      //                 { name: 'Aggression', id: 452 },
      //                 { name: 'Depression', id: 453 },
      //                 { name: 'Attention Problems', id: 454 },
      //                 { name: 'Atypicality', id: 455 },
      //                 { name: 'Withdrawal', id: 456 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
    recommendations: [
      {
        id: 1,
        name: 'ADHD',
        selected: true,
        recommendation: [
          {
            id: 'adhd1',
            text: 'Similarly, CLIENT NAME would greatly benefit from continuing to learn and utilizing organizational techniques (i.e., making lists, brainstorming verbally, breaking down large tasks into smaller components) to help CLIENT NAME better manage CLIENT NAME work-related tasks.',
            subtext: [],
            selected: true,
          },
          {
            id: 'adhd2',
            text: 'CLIENT NAME may benefit from seeking out and utilizing individual therapeutic supports to help develop effective coping strategies to manage CLIENT NAME symptoms of anxiety and inattention, as well as build CLIENT NAME self-esteem.',
            subtext: [],
            selected: true,
          },
          {
            id: 'adhd3',
            text: 'CLIENT NAME may also benefit from participating in Neurofeedback to help CLIENT NAME better regulate CLIENT NAME symptoms of anxiety, agitation, and inattention. Neurofeedback is considered a natural treatment for improving attention and self-regulation for individuals who want to take a medication free approach to treatment or to enhance the effects of other treatments they are already receiving. With neurofeedback we are enhancing awareness of internal states by allowing the brain to witness its own EEG activity.  The goal is to allow the nervous system to calm down and reset itself onto a better path. It also addresses and better regulates symptoms of inattention and anxiety.',
            subtext: [],
            selected: true,
          },
          {
            id: 'adhd4',
            text: 'It is recommended that CLIENT NAME receive 50% extended testing time on tests and examinations to help CLIENT NAME illustrate CLIENT NAME knowledge base to the best of CLIENT NAME ability. Extended time would allow CLIENT NAME to take breaks, check CLIENT NAME work, access the full scope of the material presented to CLIENT NAME, and provide CLIENT NAME with the needed time to process the testing material.',
            subtext: [],
            selected: true,
          },
          {
            id: 'adhd5',
            text: 'CLIENT NAME is encouraged to utilize a schedule/planner daily to help CLIENT NAME keep track of important due dates and appointments.',
            subtext: [],
            selected: false,
          },
          {
            id: 'adhd6',
            text: 'Utilize a homework routine to help accomplish  nightly tasks. Example: Allow at most one hour after school to decompress before starting homework. Utilize an alarm to signal when the hour is up so not to lose track of time. To help stay motivated, reward CLIENT NAME during breaks by watching a preferred, short TV show or spending 15-30 minutes in a preferred activity.',
            subtext: [],
            selected: false,
          },
          {
            id: 'adhd7',
            text: "CLIENT NAME's functional impairments also require that CLIENT NAME be allowed to take examinations in a distraction reduced environment.",
            subtext: [],
            selected: false,
          },
          {
            id: 'adhd8',
            text: 'Given that CLIENT NAME’s symptoms continue to negatively affect CLIENT NAME performance at work, CLIENT NAME may also benefit from a psychiatric consultation to assess whether medication may be an appropriate intervention at this time.',
            subtext: [],
            selected: false,
          },
          {
            id: 'adhd9',
            text: 'CLIENT NAME would benefit from a medication consultation to determine if psychiatric medication would be appropriate at this time to help CLIENT NAME better manage CLIENT NAME symptoms of inattention, anxiety, and agitation.',
            subtext: [],
            selected: false,
          },
          {
            id: 'adhd10',
            text: 'CLIENT NAME is encouraged to sit closer to teacher/speaker, also require that CLIENT NAME be allowed to take examinations in a distraction reduced environment to help guard against lapses in CLIENT NAME attention and concentration.',
            subtext: [],
            selected: false,
          },
          {
            id: 'adhd11',
            text: 'In addressing ADHD symptoms in preschool, children with ADHD commonly have a great need to touch and move. Giving them something to do with their hands and bodies while sitting in class can help them self-regulate, focus, and function better in the classroom. Teachers are encouraged to experiment with sensory strategies and tools, such as the following <ul><li>Velcro adhered to the underside of chair or desk— somewhere that CLIENT NAME can easily reach and discretely rub it to keep CLIENT NAME hands busy.</li><li>Seating options such as a rocking chair,exercise ball, or wiggle cushions.</li><li>Fidget toys (also called sensory toys). Consider looking for resources from companies such as Therapy Shoppe (www.therapyshoppe.com).</li></ul>',
            subtext: [],
            selected: false,
          },
          {
            id: 'adhd12',
            text: 'CLIENT NAME would also benefit from having an end of the day study hall at school to help complete work.',
            subtext: [],
            selected: false,
          },
        ],
      },
      {
        id: 2,
        name: 'Autism',
        selected: true,
        recommendation: [
          {
            id: 'autism1',
            text: 'CLIENT NAME’s parents should share the results of this evaluation with GENDER current educators and the following recommendations should be incorporated into GENDER academic environment.',
            subtext: [],
            selected: true,
          },
          {
            id: 'autism2',
            text: 'Similarly, CLIENT NAME would also benefit from continuing to engage and participate in speech and language services, occupational therapy, as well social skills classes/groups (both in and out of school). Additionally, GENDER would also greatly benefit from A.B.A. therapy to help support GENDER needs outside of the classroom environment.',
            subtext: [],
            selected: true,
          },
          {
            id: 'autism3',
            text: 'CLIENT NAME would benefit from the following Educational and Academic supports and environments:',
            subtext: [
              {
                id: 'autism3a',
                text: 'GENDER requires a school that is familiar with and can work with individuals presenting on the Autism Spectrum.',
                selected: true,
              },
              {
                id: 'autism3b',
                text: 'CLIENT NAME’s diagnoses of Autism Spectrum Disorder and ADHD, Combined Type make it difficult for GENDER to attend in over-stimulating environments. Therefore, a small class size is recommended to help CLIENT NAME sustain attention, as there will be less extraneous stimuli in the room to distract GENDER. A classroom that has reduced noise will help CLIENT NAME successfully complete GENDER tasks. A small class size will also allow CLIENT NAME to receive the attention GENDER needs to succeed.',
                selected: true,
              },
              {
                id: 'autism3c',
                text: 'When being asked a question or given a directive, CLIENT NAME will need extra time to process, respond, and act accordingly. It is also imperative to ensure that CLIENT NAME is not perseverating or fixating on preferred items during delivery of directions and commands.',
                selected: true,
              },
              {
                id: 'autism3d',
                text: 'As academic work increases in difficulty, CLIENT NAME will also benefit from being provided 50% extended time on tests and in-class activities.',
                selected: true,
              },
              {
                id: 'autism3e',
                text: 'CLIENT NAME’s attention and behavioral difficulties require significant levels of external structure and support. In the class, CLIENT NAME should be provided with predictable routines and clear-cut instructions and expectations. Teachers should speak slowly and repeat instructions as needed. Frequent monitoring should be done to ensure that GENDER remains on task.',
                selected: true,
              },
              {
                id: 'autism3f',
                text: 'Multi-step directions/requests and lengthy assignments should be broken down as well.',
                selected: true,
              },
              {
                id: 'autism3g',
                text: 'CLIENT NAME will often need directions and prompts repeated to GENDER, as well as having possible answer choices provided to GENDER.',
                selected: true,
              },
              {
                id: 'autism3h',
                text: 'GENDER will also be more successful when verbal directives are paired with visual images to help cue GENDER to listen and ensure GENDER attention. When GENDER is not able to follow directions and comply, it is imperative to make sure GENDER understands what is being asked of GENDER.',
                selected: false,
              },
              {
                id: 'autism3i',
                text: 'Preferential seating near the teacher and in the front of the classroom to help monitor difficulties with attention as well as processing difficulties.',
                selected: false,
              },
              {
                id: 'autism3j',
                text: 'Teachers and caretakers working with CLIENT NAME should utilize short-term rewards (rather than longer, delayed rewards) as well as frequent, sensory breaks to help GENDER stay engaged, motivated and on-task with GENDER activities.',
                selected: false,
              },
              {
                id: 'autism3k',
                text: 'CLIENT NAME should be provided with frequent breaks during classroom instruction for GENDER to fully comprehend the information and to increase GENDER overall compliance.',
                selected: false,
              },
              {
                id: 'autism3l',
                text: 'Learning activities that increase motivation and arousal will facilitate sustaining attention (e.g., interactive and hands-on), rather than desk work. CLIENT NAME appears to be more of a visual and hands on learner, therefore GENDER will be more likely to comprehend the information when auditory information is supplemented with visual-based instruction.',
                selected: false,
              },
              {
                id: 'autism3m',
                text: 'Teachers should assist in helping CLIENT NAME to make and maintain friendships in the classroom. Praise and encouragement should be used to reinforce appropriate social skills.',
                selected: false,
              },
              {
                id: 'autism3n',
                text: 'Utilizing similar language and prompts both at home and at school to help support CLIENT NAME when GENDER perseverates and demonstrates difficulties with cognitive flexibility.',
                selected: false,
              },
              {
                id: 'autism3o',
                text: 'Consistency and reliability should be implemented as much as possible (i.e., same seat every day, predictable and logical flow/routine during the day).',
                selected: false,
              },
              {
                id: 'autism3p',
                text: 'Use of a timer as well to help with transitions between activities.',
                selected: false,
              },
              {
                id: 'autism3q',
                text: 'Schedule changes and transitions should be discussed ahead of time (as frequently as possible) to help CLIENT NAME shift activities and maintain a sense of control.',
                selected: false,
              },
              {
                id: 'autism3r',
                text: 'It would be beneficial for CLIENT’s PARENTS to schedule an IEP meeting, to revise CLIENT NAME’s previous IEP to reflect GENDER diagnosis of Autism Spectrum Disorder. It is important for the educational staff to be aware of CLIENT NAME’s difficulties socially, as well as GENDER difficulties sustaining attention. Because of GENDER tendency to be very verbal, others may not readily recognize that CLIENT NAME has significant difficulty understanding and interpreting social cues.',
                selected: false,
              },
            ],
            selected: true,
          },
          {
            id: 'autism4',
            text: 'CLIENT NAME will be successful when the environment has consistent structure and expectations. As a result, both home and school environments should help create a similar sense of structure.',
            subtext: [],
            selected: true,
          },
          {
            id: 'autism5',
            text: 'Due to CLIENT NAME’s rigidity, parents should provide a structured environment at home that encourages success and models effective coping strategies.',
            subtext: [],
            selected: true,
          },
          {
            id: 'autism6',
            text: 'CLIENT NAME would benefit from increasing GENDER understanding of social relationships and GENDER insight into how to make and maintain peer relationships. This training may best be implemented in a group setting where CLIENT NAME has an opportunity to practice skills under the supervision of a trained facilitator.',
            subtext: [],
            selected: false,
          },
          {
            id: 'autism7',
            text: 'CLIENT NAME would benefit from participation in a social skills group targeted toward teaching more complex social skills, such as understanding the pragmatics of social communication, perspective taking, and initiating and maintaining conversations about non-preferred topics. An individual therapist would also be helpful to review the specific social skills in a one to one setting.',
            subtext: [],
            selected: false,
          },
          {
            id: 'autism8',
            text: 'PARENTS/CARETAKER NAME should model and rehearse with CLIENT NAME appropriate social skills, to help GENDER use the skills when away from home.',
            subtext: [],
            selected: false,
          },
          {
            id: 'autism9',
            text: 'CLIENT NAME would benefit from opportunities to practice GENDER social skills in informal settings, such as outings with peers. Outings should be time limited (no more than 1-2 hours) and involve 1-2 peers to start. Activities should be selected in advance and should be activities that CLIENT NAME enjoys and that promote social engagement.',
            subtext: [],
            selected: false,
          },
          {
            id: 'autism10',
            text: 'It is recommended that CLIENT NAME be involved in activities that foster GENDER social development, to further increase GENDER social skills. Enrolling CLIENT NAME in activities that GENDER enjoys would help GENDER social development and may help to increase GENDER overall self-esteem.',
            subtext: [],
            selected: false,
          },
          {
            id: 'autism11',
            text: 'Lastly, CLIENT NAME and GENDER family may also find additional support and resources at the following websites:',
            subtext: [
              {
                id: 'autism11a',
                text: "National Resource Center on ADHD: <a href='https://chadd.org/'>https://chadd.org/</a>",
                selected: true,
              },
              {
                id: 'autism11b',
                text: "Autism speaks: <a href='https://www.autismspeaks.org'>https://www.autismspeaks.org</a>",
                selected: true,
              },
              {
                id: 'autism11c',
                text: "Michelle Winner’s Social Thinking program emphasizes how to be a part of the group, how to have conversations (topics other than the individual’s special interests), and perspective taking. <a href='https://www.socialthinking.com'>https://www.socialthinking.com</a>",
                selected: true,
              },
              {
                id: 'autism11d',
                text: "<a href='https://www.danielwendler.com/'>https://www.danielwendler.com/</a> for tips and a resource guide to improving social skills",
                selected: true,
              },
              {
                id: 'autism11e',
                text: "<a href='https://nationalautismassociation.org/'>https://nationalautismassociation.org/</a>",
                selected: true,
              },
              {
                id: 'autism11f',
                text: "Autism Society of America: <a href='https://www.autism-society.org'>https://www.autism-society.org/</a>",
                selected: false,
              },
              {
                id: 'autism11g',
                text: "<a href='https://autismnow.org/'>https://autismnow.org/</a>",
                selected: false,
              },
              {
                id: 'autism11h',
                text: "<a href='http://www.autismlearn101.com'>http://www.autismlearn101.com</a> for online activities",
                selected: false,
              },
              {
                id: 'autism11i',
                text: "Let’s Face It: <a href='http://www.web.uvic.ca/~letsface/letsfaceit'>http://www.web.uvic.ca/~letsface/letsfaceit</a> - teaches facial and emotional recognition",
                selected: false,
              },
            ],
            selected: false,
          },
        ],
      },
    ],
  };

  //Whenever the input changes, update the destructured state parameter matching the input's name
  handleChange = ({ target: { value, name } }) => this.setState({ [name]: value });

  createAndDownloadPDF = () => {
    //use axios' post method to the create-pdf route passing the data from state
    //blobs are immutable objects the represent raw data, like our PDF
    axios
      .post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'newPDF.pdf');
      });
  };

  render() {
    return (
      <div className="App" style={{ margin: '200px', width: '50%' }}>
        <p>Click the button to generate a PDF</p>
        <button onClick={this.createAndDownloadPDF}>Download PDF</button>
      </div>
    );
  }
}

export default App;
