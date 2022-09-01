export class Team {
    name: string;
    teamID: number;
    captainDisplayName: string;
    eventName: string;
    eventID: number;
    numDonations: number;
    sumDonations: number;
    fundraisingGoal: number;
    numParticipants: number;
    donateURL: string;
    pageURL: string;
    hasActivityTracking: boolean;
    hasTeamOnlyDonations: boolean;
    isCustomAvatarImage: boolean;
    createdDateUTC: string;
    sourceTeamID: number;
    avatarImageURL: string;
    sumPledges: number;

    constructor(team: { [key: string]: any }) {
        this.numParticipants = team.numParticipants;
        this.fundraisingGoal = team.fundraisingGoal;
        this.eventName = team.eventName;
        this.donateURL = team.links.donate;
        this.pageURL = team.links.page;
        this.hasActivityTracking = team.hasActivityTracking;
        this.captainDisplayName = team.captainDisplayName;
        this.hasTeamOnlyDonations = team.hasTeamOnlyDonations;
        this.isCustomAvatarImage = team.isCustomAvatarImage;
        this.eventID = team.eventID;
        this.sumDonations = team.sumDonations;
        this.createdDateUTC = team.createdDateUTC;
        this.sourceTeamID = team.sourceTeamID;
        this.name = team.name;
        this.avatarImageURL = team.avatarImageURL;
        this.teamID = team.teamID;
        this.sumPledges = team.sumPledges;
        this.numDonations = team.numDonations;
    }
}