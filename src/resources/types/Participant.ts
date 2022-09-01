export class Participant {
    displayName: string;
    participantID: number;
    teamName: string;
    teamID: number;
    role: string;
    isTeamCaptain: boolean;
    eventName: string;
    eventID: number;
    numDonations: number;
    sumDonations: number;
    fundraisingGoal: number;
    donateURL: string;
    streamURL: string;
    pageURL: string;
    facebookFundraiserURL: string;
    hasActivityTracking: boolean;
    isTeamCoCaptain: boolean;
    numIncentives: number;
    streamingPlatform: string;
    isCustomAvatarImage: boolean;
    createdDateUTC: string;
    numMilestones: number;
    avatarImageURL: string;
    streamIsLive: boolean;
    streamingChannel: string;
    streamIsEnabled: boolean;
    sumPledges: number;

    constructor(participant: { [key: string]: any }) {
        this.fundraisingGoal = participant.fundraisingGoal;
        this.donateURL = participant.links.donate;
        this.streamURL = participant.links.stream;
        this.eventName = participant.eventName;
        this.pageURL = participant.links.page;
        this.facebookFundraiserURL = participant.links.facebookFundraiser;
        this.hasActivityTracking = participant.hasActivityTracking;
        this.role = participant.role;
        this.isTeamCoCaptain = participant.isTeamCoCaptain;
        this.participantID = participant.participantID;
        this.teamName = participant.teamName;
        this.streamIsLive = participant.streamIsLive;
        this.numIncentives = participant.numIncentives;
        this.streamingPlatform = participant.streamingPlatform;
        this.isCustomAvatarImage = participant.isCustomAvatarImage;
        this.displayName = participant.displayName;
        this.sumDonations = participant.sumDonations;
        this.eventID = participant.eventID;
        this.createdDateUTC = participant.createdDateUTC;
        this.numMilestones = participant.numMilestones;
        this.avatarImageURL = participant.avatarImageURL;
        this.teamID = participant.teamID;
        this.isTeamCaptain = participant.isTeamCaptain;
        this.streamIsEnabled = participant.streamIsEnabled;
        this.sumPledges = participant.sumPledges;
        this.streamingChannel = participant.streamingChannel;
        this.numDonations = participant.numDonations;
    }
}