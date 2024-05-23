export * from "./customIconTypes";
// Icons to import
import * as CustomSVGIcons from "./custom";

// Renders an icon by type
export const CustomIcons = (iconType:number, height?:number, width?:number, className?:string) => {
    switch(iconType) {
		case 1:
			return CustomSVGIcons.AIP(height, width, className);
		case 2:
			return CustomSVGIcons.Bookings(height, width, className);
		case 3:
			return CustomSVGIcons.Dataverse(height, width, className);
		case 4:
			return CustomSVGIcons.Defender(height, width, className);
		case 5:
			return CustomSVGIcons.Dynamics(height, width, className);
		case 6:
			return CustomSVGIcons.Entra(height, width, className);
		case 7:
			return CustomSVGIcons.Exchange(height, width, className);
		case 8:
			return CustomSVGIcons.Forms(height, width, className);
		case 9:
			return CustomSVGIcons.Intune(height, width, className);
		case 10:
			return CustomSVGIcons.KeyVault(height, width, className);
		case 11:
			return CustomSVGIcons.M365(height, width, className);
		case 12:
			return CustomSVGIcons.MDM(height, width, className);
		case 13:
			return CustomSVGIcons.Office(height, width, className);
		case 14:
			return CustomSVGIcons.OfficeOnline(height, width, className);
		case 15:
			return CustomSVGIcons.OneDrive(height, width, className);
		case 16:
			return CustomSVGIcons.Planner(height, width, className);
		case 17:
			return CustomSVGIcons.PowerApps(height, width, className);
		case 18:
			return CustomSVGIcons.PowerAutomate(height, width, className);
		case 19:
			return CustomSVGIcons.PowerBI(height, width, className);
		case 20:
			return CustomSVGIcons.PowerPlatform(height, width, className);
		case 21:
			return CustomSVGIcons.Project(height, width, className);
		case 22:
			return CustomSVGIcons.SecurityCenter(height, width, className);
		case 23:
			return CustomSVGIcons.ServiceHealth(height, width, className);
		case 24:
			return CustomSVGIcons.SharePoint(height, width, className);
		case 25:
			return CustomSVGIcons.Skype(height, width, className);
		case 26:
			return CustomSVGIcons.Stream(height, width, className);
		case 27:
			return CustomSVGIcons.Sway(height, width, className);
		case 28:
			return CustomSVGIcons.Teams(height, width, className);
		case 29:
			return CustomSVGIcons.Viva(height, width, className);
    }
}