export * from "./iconTypes";
// Icons to import
import * as SVGIcons from "./svgs";

// Renders an icon by type
export const Icons = (iconType:number, height?:number, width?:number, className?:string) => {
	// See which icon is selected
	switch(iconType) {
		// 123.svg
		case 1:
			return SVGIcons._123(height, width, className);
		// activity.svg
		case 2:
			return SVGIcons.activity(height, width, className);
		// alarm-fill.svg
		case 3:
			return SVGIcons.alarmFill(height, width, className);
		// alarm.svg
		case 4:
			return SVGIcons.alarm(height, width, className);
		// align-bottom.svg
		case 5:
			return SVGIcons.alignBottom(height, width, className);
		// align-center.svg
		case 6:
			return SVGIcons.alignCenter(height, width, className);
		// align-end.svg
		case 7:
			return SVGIcons.alignEnd(height, width, className);
		// align-middle.svg
		case 8:
			return SVGIcons.alignMiddle(height, width, className);
		// align-start.svg
		case 9:
			return SVGIcons.alignStart(height, width, className);
		// align-top.svg
		case 10:
			return SVGIcons.alignTop(height, width, className);
		// alt.svg
		case 11:
			return SVGIcons.alt(height, width, className);
		// app-indicator.svg
		case 12:
			return SVGIcons.appIndicator(height, width, className);
		// app.svg
		case 13:
			return SVGIcons.app(height, width, className);
		// apple.svg
		case 14:
			return SVGIcons.apple(height, width, className);
		// archive-fill.svg
		case 15:
			return SVGIcons.archiveFill(height, width, className);
		// archive.svg
		case 16:
			return SVGIcons.archive(height, width, className);
		// arrow-90deg-down.svg
		case 17:
			return SVGIcons.arrow90degDown(height, width, className);
		// arrow-90deg-left.svg
		case 18:
			return SVGIcons.arrow90degLeft(height, width, className);
		// arrow-90deg-right.svg
		case 19:
			return SVGIcons.arrow90degRight(height, width, className);
		// arrow-90deg-up.svg
		case 20:
			return SVGIcons.arrow90degUp(height, width, className);
		// arrow-bar-down.svg
		case 21:
			return SVGIcons.arrowBarDown(height, width, className);
		// arrow-bar-left.svg
		case 22:
			return SVGIcons.arrowBarLeft(height, width, className);
		// arrow-bar-right.svg
		case 23:
			return SVGIcons.arrowBarRight(height, width, className);
		// arrow-bar-up.svg
		case 24:
			return SVGIcons.arrowBarUp(height, width, className);
		// arrow-clockwise.svg
		case 25:
			return SVGIcons.arrowClockwise(height, width, className);
		// arrow-counterclockwise.svg
		case 26:
			return SVGIcons.arrowCounterclockwise(height, width, className);
		// arrow-down-circle-fill.svg
		case 27:
			return SVGIcons.arrowDownCircleFill(height, width, className);
		// arrow-down-circle.svg
		case 28:
			return SVGIcons.arrowDownCircle(height, width, className);
		// arrow-down-left-circle-fill.svg
		case 29:
			return SVGIcons.arrowDownLeftCircleFill(height, width, className);
		// arrow-down-left-circle.svg
		case 30:
			return SVGIcons.arrowDownLeftCircle(height, width, className);
		// arrow-down-left-square-fill.svg
		case 31:
			return SVGIcons.arrowDownLeftSquareFill(height, width, className);
		// arrow-down-left-square.svg
		case 32:
			return SVGIcons.arrowDownLeftSquare(height, width, className);
		// arrow-down-left.svg
		case 33:
			return SVGIcons.arrowDownLeft(height, width, className);
		// arrow-down-right-circle-fill.svg
		case 34:
			return SVGIcons.arrowDownRightCircleFill(height, width, className);
		// arrow-down-right-circle.svg
		case 35:
			return SVGIcons.arrowDownRightCircle(height, width, className);
		// arrow-down-right-square-fill.svg
		case 36:
			return SVGIcons.arrowDownRightSquareFill(height, width, className);
		// arrow-down-right-square.svg
		case 37:
			return SVGIcons.arrowDownRightSquare(height, width, className);
		// arrow-down-right.svg
		case 38:
			return SVGIcons.arrowDownRight(height, width, className);
		// arrow-down-short.svg
		case 39:
			return SVGIcons.arrowDownShort(height, width, className);
		// arrow-down-square-fill.svg
		case 40:
			return SVGIcons.arrowDownSquareFill(height, width, className);
		// arrow-down-square.svg
		case 41:
			return SVGIcons.arrowDownSquare(height, width, className);
		// arrow-down-up.svg
		case 42:
			return SVGIcons.arrowDownUp(height, width, className);
		// arrow-down.svg
		case 43:
			return SVGIcons.arrowDown(height, width, className);
		// arrow-left-circle-fill.svg
		case 44:
			return SVGIcons.arrowLeftCircleFill(height, width, className);
		// arrow-left-circle.svg
		case 45:
			return SVGIcons.arrowLeftCircle(height, width, className);
		// arrow-left-right.svg
		case 46:
			return SVGIcons.arrowLeftRight(height, width, className);
		// arrow-left-short.svg
		case 47:
			return SVGIcons.arrowLeftShort(height, width, className);
		// arrow-left-square-fill.svg
		case 48:
			return SVGIcons.arrowLeftSquareFill(height, width, className);
		// arrow-left-square.svg
		case 49:
			return SVGIcons.arrowLeftSquare(height, width, className);
		// arrow-left.svg
		case 50:
			return SVGIcons.arrowLeft(height, width, className);
		// arrow-repeat.svg
		case 51:
			return SVGIcons.arrowRepeat(height, width, className);
		// arrow-return-left.svg
		case 52:
			return SVGIcons.arrowReturnLeft(height, width, className);
		// arrow-return-right.svg
		case 53:
			return SVGIcons.arrowReturnRight(height, width, className);
		// arrow-right-circle-fill.svg
		case 54:
			return SVGIcons.arrowRightCircleFill(height, width, className);
		// arrow-right-circle.svg
		case 55:
			return SVGIcons.arrowRightCircle(height, width, className);
		// arrow-right-short.svg
		case 56:
			return SVGIcons.arrowRightShort(height, width, className);
		// arrow-right-square-fill.svg
		case 57:
			return SVGIcons.arrowRightSquareFill(height, width, className);
		// arrow-right-square.svg
		case 58:
			return SVGIcons.arrowRightSquare(height, width, className);
		// arrow-right.svg
		case 59:
			return SVGIcons.arrowRight(height, width, className);
		// arrow-through-heart-fill.svg
		case 60:
			return SVGIcons.arrowThroughHeartFill(height, width, className);
		// arrow-through-heart.svg
		case 61:
			return SVGIcons.arrowThroughHeart(height, width, className);
		// arrow-up-circle-fill.svg
		case 62:
			return SVGIcons.arrowUpCircleFill(height, width, className);
		// arrow-up-circle.svg
		case 63:
			return SVGIcons.arrowUpCircle(height, width, className);
		// arrow-up-left-circle-fill.svg
		case 64:
			return SVGIcons.arrowUpLeftCircleFill(height, width, className);
		// arrow-up-left-circle.svg
		case 65:
			return SVGIcons.arrowUpLeftCircle(height, width, className);
		// arrow-up-left-square-fill.svg
		case 66:
			return SVGIcons.arrowUpLeftSquareFill(height, width, className);
		// arrow-up-left-square.svg
		case 67:
			return SVGIcons.arrowUpLeftSquare(height, width, className);
		// arrow-up-left.svg
		case 68:
			return SVGIcons.arrowUpLeft(height, width, className);
		// arrow-up-right-circle-fill.svg
		case 69:
			return SVGIcons.arrowUpRightCircleFill(height, width, className);
		// arrow-up-right-circle.svg
		case 70:
			return SVGIcons.arrowUpRightCircle(height, width, className);
		// arrow-up-right-square-fill.svg
		case 71:
			return SVGIcons.arrowUpRightSquareFill(height, width, className);
		// arrow-up-right-square.svg
		case 72:
			return SVGIcons.arrowUpRightSquare(height, width, className);
		// arrow-up-right.svg
		case 73:
			return SVGIcons.arrowUpRight(height, width, className);
		// arrow-up-short.svg
		case 74:
			return SVGIcons.arrowUpShort(height, width, className);
		// arrow-up-square-fill.svg
		case 75:
			return SVGIcons.arrowUpSquareFill(height, width, className);
		// arrow-up-square.svg
		case 76:
			return SVGIcons.arrowUpSquare(height, width, className);
		// arrow-up.svg
		case 77:
			return SVGIcons.arrowUp(height, width, className);
		// arrows-angle-contract.svg
		case 78:
			return SVGIcons.arrowsAngleContract(height, width, className);
		// arrows-angle-expand.svg
		case 79:
			return SVGIcons.arrowsAngleExpand(height, width, className);
		// arrows-collapse.svg
		case 80:
			return SVGIcons.arrowsCollapse(height, width, className);
		// arrows-expand.svg
		case 81:
			return SVGIcons.arrowsExpand(height, width, className);
		// arrows-fullscreen.svg
		case 82:
			return SVGIcons.arrowsFullscreen(height, width, className);
		// arrows-move.svg
		case 83:
			return SVGIcons.arrowsMove(height, width, className);
		// aspect-ratio-fill.svg
		case 84:
			return SVGIcons.aspectRatioFill(height, width, className);
		// aspect-ratio.svg
		case 85:
			return SVGIcons.aspectRatio(height, width, className);
		// asterisk.svg
		case 86:
			return SVGIcons.asterisk(height, width, className);
		// at.svg
		case 87:
			return SVGIcons.at(height, width, className);
		// award-fill.svg
		case 88:
			return SVGIcons.awardFill(height, width, className);
		// award.svg
		case 89:
			return SVGIcons.award(height, width, className);
		// back.svg
		case 90:
			return SVGIcons.back(height, width, className);
		// backspace-fill.svg
		case 91:
			return SVGIcons.backspaceFill(height, width, className);
		// backspace-reverse-fill.svg
		case 92:
			return SVGIcons.backspaceReverseFill(height, width, className);
		// backspace-reverse.svg
		case 93:
			return SVGIcons.backspaceReverse(height, width, className);
		// backspace.svg
		case 94:
			return SVGIcons.backspace(height, width, className);
		// badge-3d-fill.svg
		case 95:
			return SVGIcons.badge3dFill(height, width, className);
		// badge-3d.svg
		case 96:
			return SVGIcons.badge3d(height, width, className);
		// badge-4k-fill.svg
		case 97:
			return SVGIcons.badge4kFill(height, width, className);
		// badge-4k.svg
		case 98:
			return SVGIcons.badge4k(height, width, className);
		// badge-8k-fill.svg
		case 99:
			return SVGIcons.badge8kFill(height, width, className);
		// badge-8k.svg
		case 100:
			return SVGIcons.badge8k(height, width, className);
		// badge-ad-fill.svg
		case 101:
			return SVGIcons.badgeAdFill(height, width, className);
		// badge-ad.svg
		case 102:
			return SVGIcons.badgeAd(height, width, className);
		// badge-ar-fill.svg
		case 103:
			return SVGIcons.badgeArFill(height, width, className);
		// badge-ar.svg
		case 104:
			return SVGIcons.badgeAr(height, width, className);
		// badge-cc-fill.svg
		case 105:
			return SVGIcons.badgeCcFill(height, width, className);
		// badge-cc.svg
		case 106:
			return SVGIcons.badgeCc(height, width, className);
		// badge-hd-fill.svg
		case 107:
			return SVGIcons.badgeHdFill(height, width, className);
		// badge-hd.svg
		case 108:
			return SVGIcons.badgeHd(height, width, className);
		// badge-sd-fill.svg
		case 109:
			return SVGIcons.badgeSdFill(height, width, className);
		// badge-sd.svg
		case 110:
			return SVGIcons.badgeSd(height, width, className);
		// badge-tm-fill.svg
		case 111:
			return SVGIcons.badgeTmFill(height, width, className);
		// badge-tm.svg
		case 112:
			return SVGIcons.badgeTm(height, width, className);
		// badge-vo-fill.svg
		case 113:
			return SVGIcons.badgeVoFill(height, width, className);
		// badge-vo.svg
		case 114:
			return SVGIcons.badgeVo(height, width, className);
		// badge-vr-fill.svg
		case 115:
			return SVGIcons.badgeVrFill(height, width, className);
		// badge-vr.svg
		case 116:
			return SVGIcons.badgeVr(height, width, className);
		// badge-wc-fill.svg
		case 117:
			return SVGIcons.badgeWcFill(height, width, className);
		// badge-wc.svg
		case 118:
			return SVGIcons.badgeWc(height, width, className);
		// bag-check-fill.svg
		case 119:
			return SVGIcons.bagCheckFill(height, width, className);
		// bag-check.svg
		case 120:
			return SVGIcons.bagCheck(height, width, className);
		// bag-dash-fill.svg
		case 121:
			return SVGIcons.bagDashFill(height, width, className);
		// bag-dash.svg
		case 122:
			return SVGIcons.bagDash(height, width, className);
		// bag-fill.svg
		case 123:
			return SVGIcons.bagFill(height, width, className);
		// bag-heart-fill.svg
		case 124:
			return SVGIcons.bagHeartFill(height, width, className);
		// bag-heart.svg
		case 125:
			return SVGIcons.bagHeart(height, width, className);
		// bag-plus-fill.svg
		case 126:
			return SVGIcons.bagPlusFill(height, width, className);
		// bag-plus.svg
		case 127:
			return SVGIcons.bagPlus(height, width, className);
		// bag-x-fill.svg
		case 128:
			return SVGIcons.bagXFill(height, width, className);
		// bag-x.svg
		case 129:
			return SVGIcons.bagX(height, width, className);
		// bag.svg
		case 130:
			return SVGIcons.bag(height, width, className);
		// balloon-fill.svg
		case 131:
			return SVGIcons.balloonFill(height, width, className);
		// balloon-heart-fill.svg
		case 132:
			return SVGIcons.balloonHeartFill(height, width, className);
		// balloon-heart.svg
		case 133:
			return SVGIcons.balloonHeart(height, width, className);
		// balloon.svg
		case 134:
			return SVGIcons.balloon(height, width, className);
		// bandaid-fill.svg
		case 135:
			return SVGIcons.bandaidFill(height, width, className);
		// bandaid.svg
		case 136:
			return SVGIcons.bandaid(height, width, className);
		// bank.svg
		case 137:
			return SVGIcons.bank(height, width, className);
		// bank2.svg
		case 138:
			return SVGIcons.bank2(height, width, className);
		// bar-chart-fill.svg
		case 139:
			return SVGIcons.barChartFill(height, width, className);
		// bar-chart-line-fill.svg
		case 140:
			return SVGIcons.barChartLineFill(height, width, className);
		// bar-chart-line.svg
		case 141:
			return SVGIcons.barChartLine(height, width, className);
		// bar-chart-steps.svg
		case 142:
			return SVGIcons.barChartSteps(height, width, className);
		// bar-chart.svg
		case 143:
			return SVGIcons.barChart(height, width, className);
		// basket-fill.svg
		case 144:
			return SVGIcons.basketFill(height, width, className);
		// basket.svg
		case 145:
			return SVGIcons.basket(height, width, className);
		// basket2-fill.svg
		case 146:
			return SVGIcons.basket2Fill(height, width, className);
		// basket2.svg
		case 147:
			return SVGIcons.basket2(height, width, className);
		// basket3-fill.svg
		case 148:
			return SVGIcons.basket3Fill(height, width, className);
		// basket3.svg
		case 149:
			return SVGIcons.basket3(height, width, className);
		// battery-charging.svg
		case 150:
			return SVGIcons.batteryCharging(height, width, className);
		// battery-full.svg
		case 151:
			return SVGIcons.batteryFull(height, width, className);
		// battery-half.svg
		case 152:
			return SVGIcons.batteryHalf(height, width, className);
		// battery.svg
		case 153:
			return SVGIcons.battery(height, width, className);
		// behance.svg
		case 154:
			return SVGIcons.behance(height, width, className);
		// bell-fill.svg
		case 155:
			return SVGIcons.bellFill(height, width, className);
		// bell-slash-fill.svg
		case 156:
			return SVGIcons.bellSlashFill(height, width, className);
		// bell-slash.svg
		case 157:
			return SVGIcons.bellSlash(height, width, className);
		// bell.svg
		case 158:
			return SVGIcons.bell(height, width, className);
		// bezier.svg
		case 159:
			return SVGIcons.bezier(height, width, className);
		// bezier2.svg
		case 160:
			return SVGIcons.bezier2(height, width, className);
		// bicycle.svg
		case 161:
			return SVGIcons.bicycle(height, width, className);
		// binoculars-fill.svg
		case 162:
			return SVGIcons.binocularsFill(height, width, className);
		// binoculars.svg
		case 163:
			return SVGIcons.binoculars(height, width, className);
		// blockquote-left.svg
		case 164:
			return SVGIcons.blockquoteLeft(height, width, className);
		// blockquote-right.svg
		case 165:
			return SVGIcons.blockquoteRight(height, width, className);
		// bluetooth.svg
		case 166:
			return SVGIcons.bluetooth(height, width, className);
		// body-text.svg
		case 167:
			return SVGIcons.bodyText(height, width, className);
		// book-fill.svg
		case 168:
			return SVGIcons.bookFill(height, width, className);
		// book-half.svg
		case 169:
			return SVGIcons.bookHalf(height, width, className);
		// book.svg
		case 170:
			return SVGIcons.book(height, width, className);
		// bookmark-check-fill.svg
		case 171:
			return SVGIcons.bookmarkCheckFill(height, width, className);
		// bookmark-check.svg
		case 172:
			return SVGIcons.bookmarkCheck(height, width, className);
		// bookmark-dash-fill.svg
		case 173:
			return SVGIcons.bookmarkDashFill(height, width, className);
		// bookmark-dash.svg
		case 174:
			return SVGIcons.bookmarkDash(height, width, className);
		// bookmark-fill.svg
		case 175:
			return SVGIcons.bookmarkFill(height, width, className);
		// bookmark-heart-fill.svg
		case 176:
			return SVGIcons.bookmarkHeartFill(height, width, className);
		// bookmark-heart.svg
		case 177:
			return SVGIcons.bookmarkHeart(height, width, className);
		// bookmark-plus-fill.svg
		case 178:
			return SVGIcons.bookmarkPlusFill(height, width, className);
		// bookmark-plus.svg
		case 179:
			return SVGIcons.bookmarkPlus(height, width, className);
		// bookmark-star-fill.svg
		case 180:
			return SVGIcons.bookmarkStarFill(height, width, className);
		// bookmark-star.svg
		case 181:
			return SVGIcons.bookmarkStar(height, width, className);
		// bookmark-x-fill.svg
		case 182:
			return SVGIcons.bookmarkXFill(height, width, className);
		// bookmark-x.svg
		case 183:
			return SVGIcons.bookmarkX(height, width, className);
		// bookmark.svg
		case 184:
			return SVGIcons.bookmark(height, width, className);
		// bookmarks-fill.svg
		case 185:
			return SVGIcons.bookmarksFill(height, width, className);
		// bookmarks.svg
		case 186:
			return SVGIcons.bookmarks(height, width, className);
		// bookshelf.svg
		case 187:
			return SVGIcons.bookshelf(height, width, className);
		// boombox-fill.svg
		case 188:
			return SVGIcons.boomboxFill(height, width, className);
		// boombox.svg
		case 189:
			return SVGIcons.boombox(height, width, className);
		// bootstrap-fill.svg
		case 190:
			return SVGIcons.bootstrapFill(height, width, className);
		// bootstrap-reboot.svg
		case 191:
			return SVGIcons.bootstrapReboot(height, width, className);
		// bootstrap.svg
		case 192:
			return SVGIcons.bootstrap(height, width, className);
		// border-all.svg
		case 193:
			return SVGIcons.borderAll(height, width, className);
		// border-bottom.svg
		case 194:
			return SVGIcons.borderBottom(height, width, className);
		// border-center.svg
		case 195:
			return SVGIcons.borderCenter(height, width, className);
		// border-inner.svg
		case 196:
			return SVGIcons.borderInner(height, width, className);
		// border-left.svg
		case 197:
			return SVGIcons.borderLeft(height, width, className);
		// border-middle.svg
		case 198:
			return SVGIcons.borderMiddle(height, width, className);
		// border-outer.svg
		case 199:
			return SVGIcons.borderOuter(height, width, className);
		// border-right.svg
		case 200:
			return SVGIcons.borderRight(height, width, className);
		// border-style.svg
		case 201:
			return SVGIcons.borderStyle(height, width, className);
		// border-top.svg
		case 202:
			return SVGIcons.borderTop(height, width, className);
		// border-width.svg
		case 203:
			return SVGIcons.borderWidth(height, width, className);
		// border.svg
		case 204:
			return SVGIcons.border(height, width, className);
		// bounding-box-circles.svg
		case 205:
			return SVGIcons.boundingBoxCircles(height, width, className);
		// bounding-box.svg
		case 206:
			return SVGIcons.boundingBox(height, width, className);
		// box-arrow-down-left.svg
		case 207:
			return SVGIcons.boxArrowDownLeft(height, width, className);
		// box-arrow-down-right.svg
		case 208:
			return SVGIcons.boxArrowDownRight(height, width, className);
		// box-arrow-down.svg
		case 209:
			return SVGIcons.boxArrowDown(height, width, className);
		// box-arrow-in-down-left.svg
		case 210:
			return SVGIcons.boxArrowInDownLeft(height, width, className);
		// box-arrow-in-down-right.svg
		case 211:
			return SVGIcons.boxArrowInDownRight(height, width, className);
		// box-arrow-in-down.svg
		case 212:
			return SVGIcons.boxArrowInDown(height, width, className);
		// box-arrow-in-left.svg
		case 213:
			return SVGIcons.boxArrowInLeft(height, width, className);
		// box-arrow-in-right.svg
		case 214:
			return SVGIcons.boxArrowInRight(height, width, className);
		// box-arrow-in-up-left.svg
		case 215:
			return SVGIcons.boxArrowInUpLeft(height, width, className);
		// box-arrow-in-up-right.svg
		case 216:
			return SVGIcons.boxArrowInUpRight(height, width, className);
		// box-arrow-in-up.svg
		case 217:
			return SVGIcons.boxArrowInUp(height, width, className);
		// box-arrow-left.svg
		case 218:
			return SVGIcons.boxArrowLeft(height, width, className);
		// box-arrow-right.svg
		case 219:
			return SVGIcons.boxArrowRight(height, width, className);
		// box-arrow-up-left.svg
		case 220:
			return SVGIcons.boxArrowUpLeft(height, width, className);
		// box-arrow-up-right.svg
		case 221:
			return SVGIcons.boxArrowUpRight(height, width, className);
		// box-arrow-up.svg
		case 222:
			return SVGIcons.boxArrowUp(height, width, className);
		// box-seam.svg
		case 223:
			return SVGIcons.boxSeam(height, width, className);
		// box.svg
		case 224:
			return SVGIcons.box(height, width, className);
		// box2-fill.svg
		case 225:
			return SVGIcons.box2Fill(height, width, className);
		// box2-heart-fill.svg
		case 226:
			return SVGIcons.box2HeartFill(height, width, className);
		// box2-heart.svg
		case 227:
			return SVGIcons.box2Heart(height, width, className);
		// box2.svg
		case 228:
			return SVGIcons.box2(height, width, className);
		// boxes.svg
		case 229:
			return SVGIcons.boxes(height, width, className);
		// braces-asterisk.svg
		case 230:
			return SVGIcons.bracesAsterisk(height, width, className);
		// braces.svg
		case 231:
			return SVGIcons.braces(height, width, className);
		// bricks.svg
		case 232:
			return SVGIcons.bricks(height, width, className);
		// briefcase-fill.svg
		case 233:
			return SVGIcons.briefcaseFill(height, width, className);
		// briefcase.svg
		case 234:
			return SVGIcons.briefcase(height, width, className);
		// brightness-alt-high-fill.svg
		case 235:
			return SVGIcons.brightnessAltHighFill(height, width, className);
		// brightness-alt-high.svg
		case 236:
			return SVGIcons.brightnessAltHigh(height, width, className);
		// brightness-alt-low-fill.svg
		case 237:
			return SVGIcons.brightnessAltLowFill(height, width, className);
		// brightness-alt-low.svg
		case 238:
			return SVGIcons.brightnessAltLow(height, width, className);
		// brightness-high-fill.svg
		case 239:
			return SVGIcons.brightnessHighFill(height, width, className);
		// brightness-high.svg
		case 240:
			return SVGIcons.brightnessHigh(height, width, className);
		// brightness-low-fill.svg
		case 241:
			return SVGIcons.brightnessLowFill(height, width, className);
		// brightness-low.svg
		case 242:
			return SVGIcons.brightnessLow(height, width, className);
		// broadcast-pin.svg
		case 243:
			return SVGIcons.broadcastPin(height, width, className);
		// broadcast.svg
		case 244:
			return SVGIcons.broadcast(height, width, className);
		// brush-fill.svg
		case 245:
			return SVGIcons.brushFill(height, width, className);
		// brush.svg
		case 246:
			return SVGIcons.brush(height, width, className);
		// bucket-fill.svg
		case 247:
			return SVGIcons.bucketFill(height, width, className);
		// bucket.svg
		case 248:
			return SVGIcons.bucket(height, width, className);
		// bug-fill.svg
		case 249:
			return SVGIcons.bugFill(height, width, className);
		// bug.svg
		case 250:
			return SVGIcons.bug(height, width, className);
		// building.svg
		case 251:
			return SVGIcons.building(height, width, className);
		// bullseye.svg
		case 252:
			return SVGIcons.bullseye(height, width, className);
		// calculator-fill.svg
		case 253:
			return SVGIcons.calculatorFill(height, width, className);
		// calculator.svg
		case 254:
			return SVGIcons.calculator(height, width, className);
		// calendar-check-fill.svg
		case 255:
			return SVGIcons.calendarCheckFill(height, width, className);
		// calendar-check.svg
		case 256:
			return SVGIcons.calendarCheck(height, width, className);
		// calendar-date-fill.svg
		case 257:
			return SVGIcons.calendarDateFill(height, width, className);
		// calendar-date.svg
		case 258:
			return SVGIcons.calendarDate(height, width, className);
		// calendar-day-fill.svg
		case 259:
			return SVGIcons.calendarDayFill(height, width, className);
		// calendar-day.svg
		case 260:
			return SVGIcons.calendarDay(height, width, className);
		// calendar-event-fill.svg
		case 261:
			return SVGIcons.calendarEventFill(height, width, className);
		// calendar-event.svg
		case 262:
			return SVGIcons.calendarEvent(height, width, className);
		// calendar-fill.svg
		case 263:
			return SVGIcons.calendarFill(height, width, className);
		// calendar-heart-fill.svg
		case 264:
			return SVGIcons.calendarHeartFill(height, width, className);
		// calendar-heart.svg
		case 265:
			return SVGIcons.calendarHeart(height, width, className);
		// calendar-minus-fill.svg
		case 266:
			return SVGIcons.calendarMinusFill(height, width, className);
		// calendar-minus.svg
		case 267:
			return SVGIcons.calendarMinus(height, width, className);
		// calendar-month-fill.svg
		case 268:
			return SVGIcons.calendarMonthFill(height, width, className);
		// calendar-month.svg
		case 269:
			return SVGIcons.calendarMonth(height, width, className);
		// calendar-plus-fill.svg
		case 270:
			return SVGIcons.calendarPlusFill(height, width, className);
		// calendar-plus.svg
		case 271:
			return SVGIcons.calendarPlus(height, width, className);
		// calendar-range-fill.svg
		case 272:
			return SVGIcons.calendarRangeFill(height, width, className);
		// calendar-range.svg
		case 273:
			return SVGIcons.calendarRange(height, width, className);
		// calendar-week-fill.svg
		case 274:
			return SVGIcons.calendarWeekFill(height, width, className);
		// calendar-week.svg
		case 275:
			return SVGIcons.calendarWeek(height, width, className);
		// calendar-x-fill.svg
		case 276:
			return SVGIcons.calendarXFill(height, width, className);
		// calendar-x.svg
		case 277:
			return SVGIcons.calendarX(height, width, className);
		// calendar.svg
		case 278:
			return SVGIcons.calendar(height, width, className);
		// calendar2-check-fill.svg
		case 279:
			return SVGIcons.calendar2CheckFill(height, width, className);
		// calendar2-check.svg
		case 280:
			return SVGIcons.calendar2Check(height, width, className);
		// calendar2-date-fill.svg
		case 281:
			return SVGIcons.calendar2DateFill(height, width, className);
		// calendar2-date.svg
		case 282:
			return SVGIcons.calendar2Date(height, width, className);
		// calendar2-day-fill.svg
		case 283:
			return SVGIcons.calendar2DayFill(height, width, className);
		// calendar2-day.svg
		case 284:
			return SVGIcons.calendar2Day(height, width, className);
		// calendar2-event-fill.svg
		case 285:
			return SVGIcons.calendar2EventFill(height, width, className);
		// calendar2-event.svg
		case 286:
			return SVGIcons.calendar2Event(height, width, className);
		// calendar2-fill.svg
		case 287:
			return SVGIcons.calendar2Fill(height, width, className);
		// calendar2-heart-fill.svg
		case 288:
			return SVGIcons.calendar2HeartFill(height, width, className);
		// calendar2-heart.svg
		case 289:
			return SVGIcons.calendar2Heart(height, width, className);
		// calendar2-minus-fill.svg
		case 290:
			return SVGIcons.calendar2MinusFill(height, width, className);
		// calendar2-minus.svg
		case 291:
			return SVGIcons.calendar2Minus(height, width, className);
		// calendar2-month-fill.svg
		case 292:
			return SVGIcons.calendar2MonthFill(height, width, className);
		// calendar2-month.svg
		case 293:
			return SVGIcons.calendar2Month(height, width, className);
		// calendar2-plus-fill.svg
		case 294:
			return SVGIcons.calendar2PlusFill(height, width, className);
		// calendar2-plus.svg
		case 295:
			return SVGIcons.calendar2Plus(height, width, className);
		// calendar2-range-fill.svg
		case 296:
			return SVGIcons.calendar2RangeFill(height, width, className);
		// calendar2-range.svg
		case 297:
			return SVGIcons.calendar2Range(height, width, className);
		// calendar2-week-fill.svg
		case 298:
			return SVGIcons.calendar2WeekFill(height, width, className);
		// calendar2-week.svg
		case 299:
			return SVGIcons.calendar2Week(height, width, className);
		// calendar2-x-fill.svg
		case 300:
			return SVGIcons.calendar2XFill(height, width, className);
		// calendar2-x.svg
		case 301:
			return SVGIcons.calendar2X(height, width, className);
		// calendar2.svg
		case 302:
			return SVGIcons.calendar2(height, width, className);
		// calendar3-event-fill.svg
		case 303:
			return SVGIcons.calendar3EventFill(height, width, className);
		// calendar3-event.svg
		case 304:
			return SVGIcons.calendar3Event(height, width, className);
		// calendar3-fill.svg
		case 305:
			return SVGIcons.calendar3Fill(height, width, className);
		// calendar3-range-fill.svg
		case 306:
			return SVGIcons.calendar3RangeFill(height, width, className);
		// calendar3-range.svg
		case 307:
			return SVGIcons.calendar3Range(height, width, className);
		// calendar3-week-fill.svg
		case 308:
			return SVGIcons.calendar3WeekFill(height, width, className);
		// calendar3-week.svg
		case 309:
			return SVGIcons.calendar3Week(height, width, className);
		// calendar3.svg
		case 310:
			return SVGIcons.calendar3(height, width, className);
		// calendar4-event.svg
		case 311:
			return SVGIcons.calendar4Event(height, width, className);
		// calendar4-range.svg
		case 312:
			return SVGIcons.calendar4Range(height, width, className);
		// calendar4-week.svg
		case 313:
			return SVGIcons.calendar4Week(height, width, className);
		// calendar4.svg
		case 314:
			return SVGIcons.calendar4(height, width, className);
		// camera-fill.svg
		case 315:
			return SVGIcons.cameraFill(height, width, className);
		// camera-reels-fill.svg
		case 316:
			return SVGIcons.cameraReelsFill(height, width, className);
		// camera-reels.svg
		case 317:
			return SVGIcons.cameraReels(height, width, className);
		// camera-video-fill.svg
		case 318:
			return SVGIcons.cameraVideoFill(height, width, className);
		// camera-video-off-fill.svg
		case 319:
			return SVGIcons.cameraVideoOffFill(height, width, className);
		// camera-video-off.svg
		case 320:
			return SVGIcons.cameraVideoOff(height, width, className);
		// camera-video.svg
		case 321:
			return SVGIcons.cameraVideo(height, width, className);
		// camera.svg
		case 322:
			return SVGIcons.camera(height, width, className);
		// camera2.svg
		case 323:
			return SVGIcons.camera2(height, width, className);
		// capslock-fill.svg
		case 324:
			return SVGIcons.capslockFill(height, width, className);
		// capslock.svg
		case 325:
			return SVGIcons.capslock(height, width, className);
		// card-checklist.svg
		case 326:
			return SVGIcons.cardChecklist(height, width, className);
		// card-heading.svg
		case 327:
			return SVGIcons.cardHeading(height, width, className);
		// card-image.svg
		case 328:
			return SVGIcons.cardImage(height, width, className);
		// card-list.svg
		case 329:
			return SVGIcons.cardList(height, width, className);
		// card-text.svg
		case 330:
			return SVGIcons.cardText(height, width, className);
		// caret-down-fill.svg
		case 331:
			return SVGIcons.caretDownFill(height, width, className);
		// caret-down-square-fill.svg
		case 332:
			return SVGIcons.caretDownSquareFill(height, width, className);
		// caret-down-square.svg
		case 333:
			return SVGIcons.caretDownSquare(height, width, className);
		// caret-down.svg
		case 334:
			return SVGIcons.caretDown(height, width, className);
		// caret-left-fill.svg
		case 335:
			return SVGIcons.caretLeftFill(height, width, className);
		// caret-left-square-fill.svg
		case 336:
			return SVGIcons.caretLeftSquareFill(height, width, className);
		// caret-left-square.svg
		case 337:
			return SVGIcons.caretLeftSquare(height, width, className);
		// caret-left.svg
		case 338:
			return SVGIcons.caretLeft(height, width, className);
		// caret-right-fill.svg
		case 339:
			return SVGIcons.caretRightFill(height, width, className);
		// caret-right-square-fill.svg
		case 340:
			return SVGIcons.caretRightSquareFill(height, width, className);
		// caret-right-square.svg
		case 341:
			return SVGIcons.caretRightSquare(height, width, className);
		// caret-right.svg
		case 342:
			return SVGIcons.caretRight(height, width, className);
		// caret-up-fill.svg
		case 343:
			return SVGIcons.caretUpFill(height, width, className);
		// caret-up-square-fill.svg
		case 344:
			return SVGIcons.caretUpSquareFill(height, width, className);
		// caret-up-square.svg
		case 345:
			return SVGIcons.caretUpSquare(height, width, className);
		// caret-up.svg
		case 346:
			return SVGIcons.caretUp(height, width, className);
		// cart-check-fill.svg
		case 347:
			return SVGIcons.cartCheckFill(height, width, className);
		// cart-check.svg
		case 348:
			return SVGIcons.cartCheck(height, width, className);
		// cart-dash-fill.svg
		case 349:
			return SVGIcons.cartDashFill(height, width, className);
		// cart-dash.svg
		case 350:
			return SVGIcons.cartDash(height, width, className);
		// cart-fill.svg
		case 351:
			return SVGIcons.cartFill(height, width, className);
		// cart-plus-fill.svg
		case 352:
			return SVGIcons.cartPlusFill(height, width, className);
		// cart-plus.svg
		case 353:
			return SVGIcons.cartPlus(height, width, className);
		// cart-x-fill.svg
		case 354:
			return SVGIcons.cartXFill(height, width, className);
		// cart-x.svg
		case 355:
			return SVGIcons.cartX(height, width, className);
		// cart.svg
		case 356:
			return SVGIcons.cart(height, width, className);
		// cart2.svg
		case 357:
			return SVGIcons.cart2(height, width, className);
		// cart3.svg
		case 358:
			return SVGIcons.cart3(height, width, className);
		// cart4.svg
		case 359:
			return SVGIcons.cart4(height, width, className);
		// cash-coin.svg
		case 360:
			return SVGIcons.cashCoin(height, width, className);
		// cash-stack.svg
		case 361:
			return SVGIcons.cashStack(height, width, className);
		// cash.svg
		case 362:
			return SVGIcons.cash(height, width, className);
		// cast.svg
		case 363:
			return SVGIcons.cast(height, width, className);
		// chat-dots-fill.svg
		case 364:
			return SVGIcons.chatDotsFill(height, width, className);
		// chat-dots.svg
		case 365:
			return SVGIcons.chatDots(height, width, className);
		// chat-fill.svg
		case 366:
			return SVGIcons.chatFill(height, width, className);
		// chat-heart-fill.svg
		case 367:
			return SVGIcons.chatHeartFill(height, width, className);
		// chat-heart.svg
		case 368:
			return SVGIcons.chatHeart(height, width, className);
		// chat-left-dots-fill.svg
		case 369:
			return SVGIcons.chatLeftDotsFill(height, width, className);
		// chat-left-dots.svg
		case 370:
			return SVGIcons.chatLeftDots(height, width, className);
		// chat-left-fill.svg
		case 371:
			return SVGIcons.chatLeftFill(height, width, className);
		// chat-left-heart-fill.svg
		case 372:
			return SVGIcons.chatLeftHeartFill(height, width, className);
		// chat-left-heart.svg
		case 373:
			return SVGIcons.chatLeftHeart(height, width, className);
		// chat-left-quote-fill.svg
		case 374:
			return SVGIcons.chatLeftQuoteFill(height, width, className);
		// chat-left-quote.svg
		case 375:
			return SVGIcons.chatLeftQuote(height, width, className);
		// chat-left-text-fill.svg
		case 376:
			return SVGIcons.chatLeftTextFill(height, width, className);
		// chat-left-text.svg
		case 377:
			return SVGIcons.chatLeftText(height, width, className);
		// chat-left.svg
		case 378:
			return SVGIcons.chatLeft(height, width, className);
		// chat-quote-fill.svg
		case 379:
			return SVGIcons.chatQuoteFill(height, width, className);
		// chat-quote.svg
		case 380:
			return SVGIcons.chatQuote(height, width, className);
		// chat-right-dots-fill.svg
		case 381:
			return SVGIcons.chatRightDotsFill(height, width, className);
		// chat-right-dots.svg
		case 382:
			return SVGIcons.chatRightDots(height, width, className);
		// chat-right-fill.svg
		case 383:
			return SVGIcons.chatRightFill(height, width, className);
		// chat-right-heart-fill.svg
		case 384:
			return SVGIcons.chatRightHeartFill(height, width, className);
		// chat-right-heart.svg
		case 385:
			return SVGIcons.chatRightHeart(height, width, className);
		// chat-right-quote-fill.svg
		case 386:
			return SVGIcons.chatRightQuoteFill(height, width, className);
		// chat-right-quote.svg
		case 387:
			return SVGIcons.chatRightQuote(height, width, className);
		// chat-right-text-fill.svg
		case 388:
			return SVGIcons.chatRightTextFill(height, width, className);
		// chat-right-text.svg
		case 389:
			return SVGIcons.chatRightText(height, width, className);
		// chat-right.svg
		case 390:
			return SVGIcons.chatRight(height, width, className);
		// chat-square-dots-fill.svg
		case 391:
			return SVGIcons.chatSquareDotsFill(height, width, className);
		// chat-square-dots.svg
		case 392:
			return SVGIcons.chatSquareDots(height, width, className);
		// chat-square-fill.svg
		case 393:
			return SVGIcons.chatSquareFill(height, width, className);
		// chat-square-heart-fill.svg
		case 394:
			return SVGIcons.chatSquareHeartFill(height, width, className);
		// chat-square-heart.svg
		case 395:
			return SVGIcons.chatSquareHeart(height, width, className);
		// chat-square-quote-fill.svg
		case 396:
			return SVGIcons.chatSquareQuoteFill(height, width, className);
		// chat-square-quote.svg
		case 397:
			return SVGIcons.chatSquareQuote(height, width, className);
		// chat-square-text-fill.svg
		case 398:
			return SVGIcons.chatSquareTextFill(height, width, className);
		// chat-square-text.svg
		case 399:
			return SVGIcons.chatSquareText(height, width, className);
		// chat-square.svg
		case 400:
			return SVGIcons.chatSquare(height, width, className);
		// chat-text-fill.svg
		case 401:
			return SVGIcons.chatTextFill(height, width, className);
		// chat-text.svg
		case 402:
			return SVGIcons.chatText(height, width, className);
		// chat.svg
		case 403:
			return SVGIcons.chat(height, width, className);
		// check-all.svg
		case 404:
			return SVGIcons.checkAll(height, width, className);
		// check-circle-fill.svg
		case 405:
			return SVGIcons.checkCircleFill(height, width, className);
		// check-circle.svg
		case 406:
			return SVGIcons.checkCircle(height, width, className);
		// check-lg.svg
		case 407:
			return SVGIcons.checkLg(height, width, className);
		// check-square-fill.svg
		case 408:
			return SVGIcons.checkSquareFill(height, width, className);
		// check-square.svg
		case 409:
			return SVGIcons.checkSquare(height, width, className);
		// check.svg
		case 410:
			return SVGIcons.check(height, width, className);
		// check2-all.svg
		case 411:
			return SVGIcons.check2All(height, width, className);
		// check2-circle.svg
		case 412:
			return SVGIcons.check2Circle(height, width, className);
		// check2-square.svg
		case 413:
			return SVGIcons.check2Square(height, width, className);
		// check2.svg
		case 414:
			return SVGIcons.check2(height, width, className);
		// chevron-bar-contract.svg
		case 415:
			return SVGIcons.chevronBarContract(height, width, className);
		// chevron-bar-down.svg
		case 416:
			return SVGIcons.chevronBarDown(height, width, className);
		// chevron-bar-expand.svg
		case 417:
			return SVGIcons.chevronBarExpand(height, width, className);
		// chevron-bar-left.svg
		case 418:
			return SVGIcons.chevronBarLeft(height, width, className);
		// chevron-bar-right.svg
		case 419:
			return SVGIcons.chevronBarRight(height, width, className);
		// chevron-bar-up.svg
		case 420:
			return SVGIcons.chevronBarUp(height, width, className);
		// chevron-compact-down.svg
		case 421:
			return SVGIcons.chevronCompactDown(height, width, className);
		// chevron-compact-left.svg
		case 422:
			return SVGIcons.chevronCompactLeft(height, width, className);
		// chevron-compact-right.svg
		case 423:
			return SVGIcons.chevronCompactRight(height, width, className);
		// chevron-compact-up.svg
		case 424:
			return SVGIcons.chevronCompactUp(height, width, className);
		// chevron-contract.svg
		case 425:
			return SVGIcons.chevronContract(height, width, className);
		// chevron-double-down.svg
		case 426:
			return SVGIcons.chevronDoubleDown(height, width, className);
		// chevron-double-left.svg
		case 427:
			return SVGIcons.chevronDoubleLeft(height, width, className);
		// chevron-double-right.svg
		case 428:
			return SVGIcons.chevronDoubleRight(height, width, className);
		// chevron-double-up.svg
		case 429:
			return SVGIcons.chevronDoubleUp(height, width, className);
		// chevron-down.svg
		case 430:
			return SVGIcons.chevronDown(height, width, className);
		// chevron-expand.svg
		case 431:
			return SVGIcons.chevronExpand(height, width, className);
		// chevron-left.svg
		case 432:
			return SVGIcons.chevronLeft(height, width, className);
		// chevron-right.svg
		case 433:
			return SVGIcons.chevronRight(height, width, className);
		// chevron-up.svg
		case 434:
			return SVGIcons.chevronUp(height, width, className);
		// circle-fill.svg
		case 435:
			return SVGIcons.circleFill(height, width, className);
		// circle-half.svg
		case 436:
			return SVGIcons.circleHalf(height, width, className);
		// circle-square.svg
		case 437:
			return SVGIcons.circleSquare(height, width, className);
		// circle.svg
		case 438:
			return SVGIcons.circle(height, width, className);
		// clipboard-check-fill.svg
		case 439:
			return SVGIcons.clipboardCheckFill(height, width, className);
		// clipboard-check.svg
		case 440:
			return SVGIcons.clipboardCheck(height, width, className);
		// clipboard-data-fill.svg
		case 441:
			return SVGIcons.clipboardDataFill(height, width, className);
		// clipboard-data.svg
		case 442:
			return SVGIcons.clipboardData(height, width, className);
		// clipboard-fill.svg
		case 443:
			return SVGIcons.clipboardFill(height, width, className);
		// clipboard-heart-fill.svg
		case 444:
			return SVGIcons.clipboardHeartFill(height, width, className);
		// clipboard-heart.svg
		case 445:
			return SVGIcons.clipboardHeart(height, width, className);
		// clipboard-minus-fill.svg
		case 446:
			return SVGIcons.clipboardMinusFill(height, width, className);
		// clipboard-minus.svg
		case 447:
			return SVGIcons.clipboardMinus(height, width, className);
		// clipboard-plus-fill.svg
		case 448:
			return SVGIcons.clipboardPlusFill(height, width, className);
		// clipboard-plus.svg
		case 449:
			return SVGIcons.clipboardPlus(height, width, className);
		// clipboard-pulse.svg
		case 450:
			return SVGIcons.clipboardPulse(height, width, className);
		// clipboard-x-fill.svg
		case 451:
			return SVGIcons.clipboardXFill(height, width, className);
		// clipboard-x.svg
		case 452:
			return SVGIcons.clipboardX(height, width, className);
		// clipboard.svg
		case 453:
			return SVGIcons.clipboard(height, width, className);
		// clipboard2-check-fill.svg
		case 454:
			return SVGIcons.clipboard2CheckFill(height, width, className);
		// clipboard2-check.svg
		case 455:
			return SVGIcons.clipboard2Check(height, width, className);
		// clipboard2-data-fill.svg
		case 456:
			return SVGIcons.clipboard2DataFill(height, width, className);
		// clipboard2-data.svg
		case 457:
			return SVGIcons.clipboard2Data(height, width, className);
		// clipboard2-fill.svg
		case 458:
			return SVGIcons.clipboard2Fill(height, width, className);
		// clipboard2-heart-fill.svg
		case 459:
			return SVGIcons.clipboard2HeartFill(height, width, className);
		// clipboard2-heart.svg
		case 460:
			return SVGIcons.clipboard2Heart(height, width, className);
		// clipboard2-minus-fill.svg
		case 461:
			return SVGIcons.clipboard2MinusFill(height, width, className);
		// clipboard2-minus.svg
		case 462:
			return SVGIcons.clipboard2Minus(height, width, className);
		// clipboard2-plus-fill.svg
		case 463:
			return SVGIcons.clipboard2PlusFill(height, width, className);
		// clipboard2-plus.svg
		case 464:
			return SVGIcons.clipboard2Plus(height, width, className);
		// clipboard2-pulse-fill.svg
		case 465:
			return SVGIcons.clipboard2PulseFill(height, width, className);
		// clipboard2-pulse.svg
		case 466:
			return SVGIcons.clipboard2Pulse(height, width, className);
		// clipboard2-x-fill.svg
		case 467:
			return SVGIcons.clipboard2XFill(height, width, className);
		// clipboard2-x.svg
		case 468:
			return SVGIcons.clipboard2X(height, width, className);
		// clipboard2.svg
		case 469:
			return SVGIcons.clipboard2(height, width, className);
		// clock-fill.svg
		case 470:
			return SVGIcons.clockFill(height, width, className);
		// clock-history.svg
		case 471:
			return SVGIcons.clockHistory(height, width, className);
		// clock.svg
		case 472:
			return SVGIcons.clock(height, width, className);
		// cloud-arrow-down-fill.svg
		case 473:
			return SVGIcons.cloudArrowDownFill(height, width, className);
		// cloud-arrow-down.svg
		case 474:
			return SVGIcons.cloudArrowDown(height, width, className);
		// cloud-arrow-up-fill.svg
		case 475:
			return SVGIcons.cloudArrowUpFill(height, width, className);
		// cloud-arrow-up.svg
		case 476:
			return SVGIcons.cloudArrowUp(height, width, className);
		// cloud-check-fill.svg
		case 477:
			return SVGIcons.cloudCheckFill(height, width, className);
		// cloud-check.svg
		case 478:
			return SVGIcons.cloudCheck(height, width, className);
		// cloud-download-fill.svg
		case 479:
			return SVGIcons.cloudDownloadFill(height, width, className);
		// cloud-download.svg
		case 480:
			return SVGIcons.cloudDownload(height, width, className);
		// cloud-drizzle-fill.svg
		case 481:
			return SVGIcons.cloudDrizzleFill(height, width, className);
		// cloud-drizzle.svg
		case 482:
			return SVGIcons.cloudDrizzle(height, width, className);
		// cloud-fill.svg
		case 483:
			return SVGIcons.cloudFill(height, width, className);
		// cloud-fog-fill.svg
		case 484:
			return SVGIcons.cloudFogFill(height, width, className);
		// cloud-fog.svg
		case 485:
			return SVGIcons.cloudFog(height, width, className);
		// cloud-fog2-fill.svg
		case 486:
			return SVGIcons.cloudFog2Fill(height, width, className);
		// cloud-fog2.svg
		case 487:
			return SVGIcons.cloudFog2(height, width, className);
		// cloud-hail-fill.svg
		case 488:
			return SVGIcons.cloudHailFill(height, width, className);
		// cloud-hail.svg
		case 489:
			return SVGIcons.cloudHail(height, width, className);
		// cloud-haze-fill.svg
		case 490:
			return SVGIcons.cloudHazeFill(height, width, className);
		// cloud-haze.svg
		case 491:
			return SVGIcons.cloudHaze(height, width, className);
		// cloud-haze2-fill.svg
		case 492:
			return SVGIcons.cloudHaze2Fill(height, width, className);
		// cloud-haze2.svg
		case 493:
			return SVGIcons.cloudHaze2(height, width, className);
		// cloud-lightning-fill.svg
		case 494:
			return SVGIcons.cloudLightningFill(height, width, className);
		// cloud-lightning-rain-fill.svg
		case 495:
			return SVGIcons.cloudLightningRainFill(height, width, className);
		// cloud-lightning-rain.svg
		case 496:
			return SVGIcons.cloudLightningRain(height, width, className);
		// cloud-lightning.svg
		case 497:
			return SVGIcons.cloudLightning(height, width, className);
		// cloud-minus-fill.svg
		case 498:
			return SVGIcons.cloudMinusFill(height, width, className);
		// cloud-minus.svg
		case 499:
			return SVGIcons.cloudMinus(height, width, className);
		// cloud-moon-fill.svg
		case 500:
			return SVGIcons.cloudMoonFill(height, width, className);
		// cloud-moon.svg
		case 501:
			return SVGIcons.cloudMoon(height, width, className);
		// cloud-plus-fill.svg
		case 502:
			return SVGIcons.cloudPlusFill(height, width, className);
		// cloud-plus.svg
		case 503:
			return SVGIcons.cloudPlus(height, width, className);
		// cloud-rain-fill.svg
		case 504:
			return SVGIcons.cloudRainFill(height, width, className);
		// cloud-rain-heavy-fill.svg
		case 505:
			return SVGIcons.cloudRainHeavyFill(height, width, className);
		// cloud-rain-heavy.svg
		case 506:
			return SVGIcons.cloudRainHeavy(height, width, className);
		// cloud-rain.svg
		case 507:
			return SVGIcons.cloudRain(height, width, className);
		// cloud-slash-fill.svg
		case 508:
			return SVGIcons.cloudSlashFill(height, width, className);
		// cloud-slash.svg
		case 509:
			return SVGIcons.cloudSlash(height, width, className);
		// cloud-sleet-fill.svg
		case 510:
			return SVGIcons.cloudSleetFill(height, width, className);
		// cloud-sleet.svg
		case 511:
			return SVGIcons.cloudSleet(height, width, className);
		// cloud-snow-fill.svg
		case 512:
			return SVGIcons.cloudSnowFill(height, width, className);
		// cloud-snow.svg
		case 513:
			return SVGIcons.cloudSnow(height, width, className);
		// cloud-sun-fill.svg
		case 514:
			return SVGIcons.cloudSunFill(height, width, className);
		// cloud-sun.svg
		case 515:
			return SVGIcons.cloudSun(height, width, className);
		// cloud-upload-fill.svg
		case 516:
			return SVGIcons.cloudUploadFill(height, width, className);
		// cloud-upload.svg
		case 517:
			return SVGIcons.cloudUpload(height, width, className);
		// cloud.svg
		case 518:
			return SVGIcons.cloud(height, width, className);
		// clouds-fill.svg
		case 519:
			return SVGIcons.cloudsFill(height, width, className);
		// clouds.svg
		case 520:
			return SVGIcons.clouds(height, width, className);
		// cloudy-fill.svg
		case 521:
			return SVGIcons.cloudyFill(height, width, className);
		// cloudy.svg
		case 522:
			return SVGIcons.cloudy(height, width, className);
		// code-slash.svg
		case 523:
			return SVGIcons.codeSlash(height, width, className);
		// code-square.svg
		case 524:
			return SVGIcons.codeSquare(height, width, className);
		// code.svg
		case 525:
			return SVGIcons.code(height, width, className);
		// coin.svg
		case 526:
			return SVGIcons.coin(height, width, className);
		// collection-fill.svg
		case 527:
			return SVGIcons.collectionFill(height, width, className);
		// collection-play-fill.svg
		case 528:
			return SVGIcons.collectionPlayFill(height, width, className);
		// collection-play.svg
		case 529:
			return SVGIcons.collectionPlay(height, width, className);
		// collection.svg
		case 530:
			return SVGIcons.collection(height, width, className);
		// columns-gap.svg
		case 531:
			return SVGIcons.columnsGap(height, width, className);
		// columns.svg
		case 532:
			return SVGIcons.columns(height, width, className);
		// command.svg
		case 533:
			return SVGIcons.command(height, width, className);
		// compass-fill.svg
		case 534:
			return SVGIcons.compassFill(height, width, className);
		// compass.svg
		case 535:
			return SVGIcons.compass(height, width, className);
		// cone-striped.svg
		case 536:
			return SVGIcons.coneStriped(height, width, className);
		// cone.svg
		case 537:
			return SVGIcons.cone(height, width, className);
		// controller.svg
		case 538:
			return SVGIcons.controller(height, width, className);
		// cpu-fill.svg
		case 539:
			return SVGIcons.cpuFill(height, width, className);
		// cpu.svg
		case 540:
			return SVGIcons.cpu(height, width, className);
		// credit-card-2-back-fill.svg
		case 541:
			return SVGIcons.creditCard2BackFill(height, width, className);
		// credit-card-2-back.svg
		case 542:
			return SVGIcons.creditCard2Back(height, width, className);
		// credit-card-2-front-fill.svg
		case 543:
			return SVGIcons.creditCard2FrontFill(height, width, className);
		// credit-card-2-front.svg
		case 544:
			return SVGIcons.creditCard2Front(height, width, className);
		// credit-card-fill.svg
		case 545:
			return SVGIcons.creditCardFill(height, width, className);
		// credit-card.svg
		case 546:
			return SVGIcons.creditCard(height, width, className);
		// crop.svg
		case 547:
			return SVGIcons.crop(height, width, className);
		// cup-fill.svg
		case 548:
			return SVGIcons.cupFill(height, width, className);
		// cup-straw.svg
		case 549:
			return SVGIcons.cupStraw(height, width, className);
		// cup.svg
		case 550:
			return SVGIcons.cup(height, width, className);
		// currency-bitcoin.svg
		case 551:
			return SVGIcons.currencyBitcoin(height, width, className);
		// currency-dollar.svg
		case 552:
			return SVGIcons.currencyDollar(height, width, className);
		// currency-euro.svg
		case 553:
			return SVGIcons.currencyEuro(height, width, className);
		// currency-exchange.svg
		case 554:
			return SVGIcons.currencyExchange(height, width, className);
		// currency-pound.svg
		case 555:
			return SVGIcons.currencyPound(height, width, className);
		// currency-yen.svg
		case 556:
			return SVGIcons.currencyYen(height, width, className);
		// cursor-fill.svg
		case 557:
			return SVGIcons.cursorFill(height, width, className);
		// cursor-text.svg
		case 558:
			return SVGIcons.cursorText(height, width, className);
		// cursor.svg
		case 559:
			return SVGIcons.cursor(height, width, className);
		// dash-circle-dotted.svg
		case 560:
			return SVGIcons.dashCircleDotted(height, width, className);
		// dash-circle-fill.svg
		case 561:
			return SVGIcons.dashCircleFill(height, width, className);
		// dash-circle.svg
		case 562:
			return SVGIcons.dashCircle(height, width, className);
		// dash-lg.svg
		case 563:
			return SVGIcons.dashLg(height, width, className);
		// dash-square-dotted.svg
		case 564:
			return SVGIcons.dashSquareDotted(height, width, className);
		// dash-square-fill.svg
		case 565:
			return SVGIcons.dashSquareFill(height, width, className);
		// dash-square.svg
		case 566:
			return SVGIcons.dashSquare(height, width, className);
		// dash.svg
		case 567:
			return SVGIcons.dash(height, width, className);
		// device-hdd-fill.svg
		case 568:
			return SVGIcons.deviceHddFill(height, width, className);
		// device-hdd.svg
		case 569:
			return SVGIcons.deviceHdd(height, width, className);
		// device-ssd-fill.svg
		case 570:
			return SVGIcons.deviceSsdFill(height, width, className);
		// device-ssd.svg
		case 571:
			return SVGIcons.deviceSsd(height, width, className);
		// diagram-2-fill.svg
		case 572:
			return SVGIcons.diagram2Fill(height, width, className);
		// diagram-2.svg
		case 573:
			return SVGIcons.diagram2(height, width, className);
		// diagram-3-fill.svg
		case 574:
			return SVGIcons.diagram3Fill(height, width, className);
		// diagram-3.svg
		case 575:
			return SVGIcons.diagram3(height, width, className);
		// diamond-fill.svg
		case 576:
			return SVGIcons.diamondFill(height, width, className);
		// diamond-half.svg
		case 577:
			return SVGIcons.diamondHalf(height, width, className);
		// diamond.svg
		case 578:
			return SVGIcons.diamond(height, width, className);
		// dice-1-fill.svg
		case 579:
			return SVGIcons.dice1Fill(height, width, className);
		// dice-1.svg
		case 580:
			return SVGIcons.dice1(height, width, className);
		// dice-2-fill.svg
		case 581:
			return SVGIcons.dice2Fill(height, width, className);
		// dice-2.svg
		case 582:
			return SVGIcons.dice2(height, width, className);
		// dice-3-fill.svg
		case 583:
			return SVGIcons.dice3Fill(height, width, className);
		// dice-3.svg
		case 584:
			return SVGIcons.dice3(height, width, className);
		// dice-4-fill.svg
		case 585:
			return SVGIcons.dice4Fill(height, width, className);
		// dice-4.svg
		case 586:
			return SVGIcons.dice4(height, width, className);
		// dice-5-fill.svg
		case 587:
			return SVGIcons.dice5Fill(height, width, className);
		// dice-5.svg
		case 588:
			return SVGIcons.dice5(height, width, className);
		// dice-6-fill.svg
		case 589:
			return SVGIcons.dice6Fill(height, width, className);
		// dice-6.svg
		case 590:
			return SVGIcons.dice6(height, width, className);
		// disc-fill.svg
		case 591:
			return SVGIcons.discFill(height, width, className);
		// disc.svg
		case 592:
			return SVGIcons.disc(height, width, className);
		// discord.svg
		case 593:
			return SVGIcons.discord(height, width, className);
		// display-fill.svg
		case 594:
			return SVGIcons.displayFill(height, width, className);
		// display.svg
		case 595:
			return SVGIcons.display(height, width, className);
		// displayport-fill.svg
		case 596:
			return SVGIcons.displayportFill(height, width, className);
		// displayport.svg
		case 597:
			return SVGIcons.displayport(height, width, className);
		// distribute-horizontal.svg
		case 598:
			return SVGIcons.distributeHorizontal(height, width, className);
		// distribute-vertical.svg
		case 599:
			return SVGIcons.distributeVertical(height, width, className);
		// door-closed-fill.svg
		case 600:
			return SVGIcons.doorClosedFill(height, width, className);
		// door-closed.svg
		case 601:
			return SVGIcons.doorClosed(height, width, className);
		// door-open-fill.svg
		case 602:
			return SVGIcons.doorOpenFill(height, width, className);
		// door-open.svg
		case 603:
			return SVGIcons.doorOpen(height, width, className);
		// dot.svg
		case 604:
			return SVGIcons.dot(height, width, className);
		// download.svg
		case 605:
			return SVGIcons.download(height, width, className);
		// dpad-fill.svg
		case 606:
			return SVGIcons.dpadFill(height, width, className);
		// dpad.svg
		case 607:
			return SVGIcons.dpad(height, width, className);
		// dribbble.svg
		case 608:
			return SVGIcons.dribbble(height, width, className);
		// droplet-fill.svg
		case 609:
			return SVGIcons.dropletFill(height, width, className);
		// droplet-half.svg
		case 610:
			return SVGIcons.dropletHalf(height, width, className);
		// droplet.svg
		case 611:
			return SVGIcons.droplet(height, width, className);
		// ear-fill.svg
		case 612:
			return SVGIcons.earFill(height, width, className);
		// ear.svg
		case 613:
			return SVGIcons.ear(height, width, className);
		// earbuds.svg
		case 614:
			return SVGIcons.earbuds(height, width, className);
		// easel-fill.svg
		case 615:
			return SVGIcons.easelFill(height, width, className);
		// easel.svg
		case 616:
			return SVGIcons.easel(height, width, className);
		// easel2-fill.svg
		case 617:
			return SVGIcons.easel2Fill(height, width, className);
		// easel2.svg
		case 618:
			return SVGIcons.easel2(height, width, className);
		// easel3-fill.svg
		case 619:
			return SVGIcons.easel3Fill(height, width, className);
		// easel3.svg
		case 620:
			return SVGIcons.easel3(height, width, className);
		// egg-fill.svg
		case 621:
			return SVGIcons.eggFill(height, width, className);
		// egg-fried.svg
		case 622:
			return SVGIcons.eggFried(height, width, className);
		// egg.svg
		case 623:
			return SVGIcons.egg(height, width, className);
		// eject-fill.svg
		case 624:
			return SVGIcons.ejectFill(height, width, className);
		// eject.svg
		case 625:
			return SVGIcons.eject(height, width, className);
		// emoji-angry-fill.svg
		case 626:
			return SVGIcons.emojiAngryFill(height, width, className);
		// emoji-angry.svg
		case 627:
			return SVGIcons.emojiAngry(height, width, className);
		// emoji-dizzy-fill.svg
		case 628:
			return SVGIcons.emojiDizzyFill(height, width, className);
		// emoji-dizzy.svg
		case 629:
			return SVGIcons.emojiDizzy(height, width, className);
		// emoji-expressionless-fill.svg
		case 630:
			return SVGIcons.emojiExpressionlessFill(height, width, className);
		// emoji-expressionless.svg
		case 631:
			return SVGIcons.emojiExpressionless(height, width, className);
		// emoji-frown-fill.svg
		case 632:
			return SVGIcons.emojiFrownFill(height, width, className);
		// emoji-frown.svg
		case 633:
			return SVGIcons.emojiFrown(height, width, className);
		// emoji-heart-eyes-fill.svg
		case 634:
			return SVGIcons.emojiHeartEyesFill(height, width, className);
		// emoji-heart-eyes.svg
		case 635:
			return SVGIcons.emojiHeartEyes(height, width, className);
		// emoji-kiss-fill.svg
		case 636:
			return SVGIcons.emojiKissFill(height, width, className);
		// emoji-kiss.svg
		case 637:
			return SVGIcons.emojiKiss(height, width, className);
		// emoji-laughing-fill.svg
		case 638:
			return SVGIcons.emojiLaughingFill(height, width, className);
		// emoji-laughing.svg
		case 639:
			return SVGIcons.emojiLaughing(height, width, className);
		// emoji-neutral-fill.svg
		case 640:
			return SVGIcons.emojiNeutralFill(height, width, className);
		// emoji-neutral.svg
		case 641:
			return SVGIcons.emojiNeutral(height, width, className);
		// emoji-smile-fill.svg
		case 642:
			return SVGIcons.emojiSmileFill(height, width, className);
		// emoji-smile-upside-down-fill.svg
		case 643:
			return SVGIcons.emojiSmileUpsideDownFill(height, width, className);
		// emoji-smile-upside-down.svg
		case 644:
			return SVGIcons.emojiSmileUpsideDown(height, width, className);
		// emoji-smile.svg
		case 645:
			return SVGIcons.emojiSmile(height, width, className);
		// emoji-sunglasses-fill.svg
		case 646:
			return SVGIcons.emojiSunglassesFill(height, width, className);
		// emoji-sunglasses.svg
		case 647:
			return SVGIcons.emojiSunglasses(height, width, className);
		// emoji-wink-fill.svg
		case 648:
			return SVGIcons.emojiWinkFill(height, width, className);
		// emoji-wink.svg
		case 649:
			return SVGIcons.emojiWink(height, width, className);
		// envelope-check-fill.svg
		case 650:
			return SVGIcons.envelopeCheckFill(height, width, className);
		// envelope-check.svg
		case 651:
			return SVGIcons.envelopeCheck(height, width, className);
		// envelope-dash-fill.svg
		case 652:
			return SVGIcons.envelopeDashFill(height, width, className);
		// envelope-dash.svg
		case 653:
			return SVGIcons.envelopeDash(height, width, className);
		// envelope-exclamation-fill.svg
		case 654:
			return SVGIcons.envelopeExclamationFill(height, width, className);
		// envelope-exclamation.svg
		case 655:
			return SVGIcons.envelopeExclamation(height, width, className);
		// envelope-fill.svg
		case 656:
			return SVGIcons.envelopeFill(height, width, className);
		// envelope-heart-fill.svg
		case 657:
			return SVGIcons.envelopeHeartFill(height, width, className);
		// envelope-heart.svg
		case 658:
			return SVGIcons.envelopeHeart(height, width, className);
		// envelope-open-fill.svg
		case 659:
			return SVGIcons.envelopeOpenFill(height, width, className);
		// envelope-open-heart-fill.svg
		case 660:
			return SVGIcons.envelopeOpenHeartFill(height, width, className);
		// envelope-open-heart.svg
		case 661:
			return SVGIcons.envelopeOpenHeart(height, width, className);
		// envelope-open.svg
		case 662:
			return SVGIcons.envelopeOpen(height, width, className);
		// envelope-paper-fill.svg
		case 663:
			return SVGIcons.envelopePaperFill(height, width, className);
		// envelope-paper-heart-fill.svg
		case 664:
			return SVGIcons.envelopePaperHeartFill(height, width, className);
		// envelope-paper-heart.svg
		case 665:
			return SVGIcons.envelopePaperHeart(height, width, className);
		// envelope-paper.svg
		case 666:
			return SVGIcons.envelopePaper(height, width, className);
		// envelope-plus-fill.svg
		case 667:
			return SVGIcons.envelopePlusFill(height, width, className);
		// envelope-plus.svg
		case 668:
			return SVGIcons.envelopePlus(height, width, className);
		// envelope-slash-fill.svg
		case 669:
			return SVGIcons.envelopeSlashFill(height, width, className);
		// envelope-slash.svg
		case 670:
			return SVGIcons.envelopeSlash(height, width, className);
		// envelope-x-fill.svg
		case 671:
			return SVGIcons.envelopeXFill(height, width, className);
		// envelope-x.svg
		case 672:
			return SVGIcons.envelopeX(height, width, className);
		// envelope.svg
		case 673:
			return SVGIcons.envelope(height, width, className);
		// eraser-fill.svg
		case 674:
			return SVGIcons.eraserFill(height, width, className);
		// eraser.svg
		case 675:
			return SVGIcons.eraser(height, width, className);
		// ethernet.svg
		case 676:
			return SVGIcons.ethernet(height, width, className);
		// exclamation-circle-fill.svg
		case 677:
			return SVGIcons.exclamationCircleFill(height, width, className);
		// exclamation-circle.svg
		case 678:
			return SVGIcons.exclamationCircle(height, width, className);
		// exclamation-diamond-fill.svg
		case 679:
			return SVGIcons.exclamationDiamondFill(height, width, className);
		// exclamation-diamond.svg
		case 680:
			return SVGIcons.exclamationDiamond(height, width, className);
		// exclamation-lg.svg
		case 681:
			return SVGIcons.exclamationLg(height, width, className);
		// exclamation-octagon-fill.svg
		case 682:
			return SVGIcons.exclamationOctagonFill(height, width, className);
		// exclamation-octagon.svg
		case 683:
			return SVGIcons.exclamationOctagon(height, width, className);
		// exclamation-square-fill.svg
		case 684:
			return SVGIcons.exclamationSquareFill(height, width, className);
		// exclamation-square.svg
		case 685:
			return SVGIcons.exclamationSquare(height, width, className);
		// exclamation-triangle-fill.svg
		case 686:
			return SVGIcons.exclamationTriangleFill(height, width, className);
		// exclamation-triangle.svg
		case 687:
			return SVGIcons.exclamationTriangle(height, width, className);
		// exclamation.svg
		case 688:
			return SVGIcons.exclamation(height, width, className);
		// exclude.svg
		case 689:
			return SVGIcons.exclude(height, width, className);
		// explicit-fill.svg
		case 690:
			return SVGIcons.explicitFill(height, width, className);
		// explicit.svg
		case 691:
			return SVGIcons.explicit(height, width, className);
		// eye-fill.svg
		case 692:
			return SVGIcons.eyeFill(height, width, className);
		// eye-slash-fill.svg
		case 693:
			return SVGIcons.eyeSlashFill(height, width, className);
		// eye-slash.svg
		case 694:
			return SVGIcons.eyeSlash(height, width, className);
		// eye.svg
		case 695:
			return SVGIcons.eye(height, width, className);
		// eyedropper.svg
		case 696:
			return SVGIcons.eyedropper(height, width, className);
		// eyeglasses.svg
		case 697:
			return SVGIcons.eyeglasses(height, width, className);
		// facebook.svg
		case 698:
			return SVGIcons.facebook(height, width, className);
		// fan.svg
		case 699:
			return SVGIcons.fan(height, width, className);
		// file-arrow-down-fill.svg
		case 700:
			return SVGIcons.fileArrowDownFill(height, width, className);
		// file-arrow-down.svg
		case 701:
			return SVGIcons.fileArrowDown(height, width, className);
		// file-arrow-up-fill.svg
		case 702:
			return SVGIcons.fileArrowUpFill(height, width, className);
		// file-arrow-up.svg
		case 703:
			return SVGIcons.fileArrowUp(height, width, className);
		// file-bar-graph-fill.svg
		case 704:
			return SVGIcons.fileBarGraphFill(height, width, className);
		// file-bar-graph.svg
		case 705:
			return SVGIcons.fileBarGraph(height, width, className);
		// file-binary-fill.svg
		case 706:
			return SVGIcons.fileBinaryFill(height, width, className);
		// file-binary.svg
		case 707:
			return SVGIcons.fileBinary(height, width, className);
		// file-break-fill.svg
		case 708:
			return SVGIcons.fileBreakFill(height, width, className);
		// file-break.svg
		case 709:
			return SVGIcons.fileBreak(height, width, className);
		// file-check-fill.svg
		case 710:
			return SVGIcons.fileCheckFill(height, width, className);
		// file-check.svg
		case 711:
			return SVGIcons.fileCheck(height, width, className);
		// file-code-fill.svg
		case 712:
			return SVGIcons.fileCodeFill(height, width, className);
		// file-code.svg
		case 713:
			return SVGIcons.fileCode(height, width, className);
		// file-diff-fill.svg
		case 714:
			return SVGIcons.fileDiffFill(height, width, className);
		// file-diff.svg
		case 715:
			return SVGIcons.fileDiff(height, width, className);
		// file-earmark-arrow-down-fill.svg
		case 716:
			return SVGIcons.fileEarmarkArrowDownFill(height, width, className);
		// file-earmark-arrow-down.svg
		case 717:
			return SVGIcons.fileEarmarkArrowDown(height, width, className);
		// file-earmark-arrow-up-fill.svg
		case 718:
			return SVGIcons.fileEarmarkArrowUpFill(height, width, className);
		// file-earmark-arrow-up.svg
		case 719:
			return SVGIcons.fileEarmarkArrowUp(height, width, className);
		// file-earmark-bar-graph-fill.svg
		case 720:
			return SVGIcons.fileEarmarkBarGraphFill(height, width, className);
		// file-earmark-bar-graph.svg
		case 721:
			return SVGIcons.fileEarmarkBarGraph(height, width, className);
		// file-earmark-binary-fill.svg
		case 722:
			return SVGIcons.fileEarmarkBinaryFill(height, width, className);
		// file-earmark-binary.svg
		case 723:
			return SVGIcons.fileEarmarkBinary(height, width, className);
		// file-earmark-break-fill.svg
		case 724:
			return SVGIcons.fileEarmarkBreakFill(height, width, className);
		// file-earmark-break.svg
		case 725:
			return SVGIcons.fileEarmarkBreak(height, width, className);
		// file-earmark-check-fill.svg
		case 726:
			return SVGIcons.fileEarmarkCheckFill(height, width, className);
		// file-earmark-check.svg
		case 727:
			return SVGIcons.fileEarmarkCheck(height, width, className);
		// file-earmark-code-fill.svg
		case 728:
			return SVGIcons.fileEarmarkCodeFill(height, width, className);
		// file-earmark-code.svg
		case 729:
			return SVGIcons.fileEarmarkCode(height, width, className);
		// file-earmark-diff-fill.svg
		case 730:
			return SVGIcons.fileEarmarkDiffFill(height, width, className);
		// file-earmark-diff.svg
		case 731:
			return SVGIcons.fileEarmarkDiff(height, width, className);
		// file-earmark-easel-fill.svg
		case 732:
			return SVGIcons.fileEarmarkEaselFill(height, width, className);
		// file-earmark-easel.svg
		case 733:
			return SVGIcons.fileEarmarkEasel(height, width, className);
		// file-earmark-excel-fill.svg
		case 734:
			return SVGIcons.fileEarmarkExcelFill(height, width, className);
		// file-earmark-excel.svg
		case 735:
			return SVGIcons.fileEarmarkExcel(height, width, className);
		// file-earmark-fill.svg
		case 736:
			return SVGIcons.fileEarmarkFill(height, width, className);
		// file-earmark-font-fill.svg
		case 737:
			return SVGIcons.fileEarmarkFontFill(height, width, className);
		// file-earmark-font.svg
		case 738:
			return SVGIcons.fileEarmarkFont(height, width, className);
		// file-earmark-image-fill.svg
		case 739:
			return SVGIcons.fileEarmarkImageFill(height, width, className);
		// file-earmark-image.svg
		case 740:
			return SVGIcons.fileEarmarkImage(height, width, className);
		// file-earmark-lock-fill.svg
		case 741:
			return SVGIcons.fileEarmarkLockFill(height, width, className);
		// file-earmark-lock.svg
		case 742:
			return SVGIcons.fileEarmarkLock(height, width, className);
		// file-earmark-lock2-fill.svg
		case 743:
			return SVGIcons.fileEarmarkLock2Fill(height, width, className);
		// file-earmark-lock2.svg
		case 744:
			return SVGIcons.fileEarmarkLock2(height, width, className);
		// file-earmark-medical-fill.svg
		case 745:
			return SVGIcons.fileEarmarkMedicalFill(height, width, className);
		// file-earmark-medical.svg
		case 746:
			return SVGIcons.fileEarmarkMedical(height, width, className);
		// file-earmark-minus-fill.svg
		case 747:
			return SVGIcons.fileEarmarkMinusFill(height, width, className);
		// file-earmark-minus.svg
		case 748:
			return SVGIcons.fileEarmarkMinus(height, width, className);
		// file-earmark-music-fill.svg
		case 749:
			return SVGIcons.fileEarmarkMusicFill(height, width, className);
		// file-earmark-music.svg
		case 750:
			return SVGIcons.fileEarmarkMusic(height, width, className);
		// file-earmark-pdf-fill.svg
		case 751:
			return SVGIcons.fileEarmarkPdfFill(height, width, className);
		// file-earmark-pdf.svg
		case 752:
			return SVGIcons.fileEarmarkPdf(height, width, className);
		// file-earmark-person-fill.svg
		case 753:
			return SVGIcons.fileEarmarkPersonFill(height, width, className);
		// file-earmark-person.svg
		case 754:
			return SVGIcons.fileEarmarkPerson(height, width, className);
		// file-earmark-play-fill.svg
		case 755:
			return SVGIcons.fileEarmarkPlayFill(height, width, className);
		// file-earmark-play.svg
		case 756:
			return SVGIcons.fileEarmarkPlay(height, width, className);
		// file-earmark-plus-fill.svg
		case 757:
			return SVGIcons.fileEarmarkPlusFill(height, width, className);
		// file-earmark-plus.svg
		case 758:
			return SVGIcons.fileEarmarkPlus(height, width, className);
		// file-earmark-post-fill.svg
		case 759:
			return SVGIcons.fileEarmarkPostFill(height, width, className);
		// file-earmark-post.svg
		case 760:
			return SVGIcons.fileEarmarkPost(height, width, className);
		// file-earmark-ppt-fill.svg
		case 761:
			return SVGIcons.fileEarmarkPptFill(height, width, className);
		// file-earmark-ppt.svg
		case 762:
			return SVGIcons.fileEarmarkPpt(height, width, className);
		// file-earmark-richtext-fill.svg
		case 763:
			return SVGIcons.fileEarmarkRichtextFill(height, width, className);
		// file-earmark-richtext.svg
		case 764:
			return SVGIcons.fileEarmarkRichtext(height, width, className);
		// file-earmark-ruled-fill.svg
		case 765:
			return SVGIcons.fileEarmarkRuledFill(height, width, className);
		// file-earmark-ruled.svg
		case 766:
			return SVGIcons.fileEarmarkRuled(height, width, className);
		// file-earmark-slides-fill.svg
		case 767:
			return SVGIcons.fileEarmarkSlidesFill(height, width, className);
		// file-earmark-slides.svg
		case 768:
			return SVGIcons.fileEarmarkSlides(height, width, className);
		// file-earmark-spreadsheet-fill.svg
		case 769:
			return SVGIcons.fileEarmarkSpreadsheetFill(height, width, className);
		// file-earmark-spreadsheet.svg
		case 770:
			return SVGIcons.fileEarmarkSpreadsheet(height, width, className);
		// file-earmark-text-fill.svg
		case 771:
			return SVGIcons.fileEarmarkTextFill(height, width, className);
		// file-earmark-text.svg
		case 772:
			return SVGIcons.fileEarmarkText(height, width, className);
		// file-earmark-word-fill.svg
		case 773:
			return SVGIcons.fileEarmarkWordFill(height, width, className);
		// file-earmark-word.svg
		case 774:
			return SVGIcons.fileEarmarkWord(height, width, className);
		// file-earmark-x-fill.svg
		case 775:
			return SVGIcons.fileEarmarkXFill(height, width, className);
		// file-earmark-x.svg
		case 776:
			return SVGIcons.fileEarmarkX(height, width, className);
		// file-earmark-zip-fill.svg
		case 777:
			return SVGIcons.fileEarmarkZipFill(height, width, className);
		// file-earmark-zip.svg
		case 778:
			return SVGIcons.fileEarmarkZip(height, width, className);
		// file-earmark.svg
		case 779:
			return SVGIcons.fileEarmark(height, width, className);
		// file-easel-fill.svg
		case 780:
			return SVGIcons.fileEaselFill(height, width, className);
		// file-easel.svg
		case 781:
			return SVGIcons.fileEasel(height, width, className);
		// file-excel-fill.svg
		case 782:
			return SVGIcons.fileExcelFill(height, width, className);
		// file-excel.svg
		case 783:
			return SVGIcons.fileExcel(height, width, className);
		// file-fill.svg
		case 784:
			return SVGIcons.fileFill(height, width, className);
		// file-font-fill.svg
		case 785:
			return SVGIcons.fileFontFill(height, width, className);
		// file-font.svg
		case 786:
			return SVGIcons.fileFont(height, width, className);
		// file-image-fill.svg
		case 787:
			return SVGIcons.fileImageFill(height, width, className);
		// file-image.svg
		case 788:
			return SVGIcons.fileImage(height, width, className);
		// file-lock-fill.svg
		case 789:
			return SVGIcons.fileLockFill(height, width, className);
		// file-lock.svg
		case 790:
			return SVGIcons.fileLock(height, width, className);
		// file-lock2-fill.svg
		case 791:
			return SVGIcons.fileLock2Fill(height, width, className);
		// file-lock2.svg
		case 792:
			return SVGIcons.fileLock2(height, width, className);
		// file-medical-fill.svg
		case 793:
			return SVGIcons.fileMedicalFill(height, width, className);
		// file-medical.svg
		case 794:
			return SVGIcons.fileMedical(height, width, className);
		// file-minus-fill.svg
		case 795:
			return SVGIcons.fileMinusFill(height, width, className);
		// file-minus.svg
		case 796:
			return SVGIcons.fileMinus(height, width, className);
		// file-music-fill.svg
		case 797:
			return SVGIcons.fileMusicFill(height, width, className);
		// file-music.svg
		case 798:
			return SVGIcons.fileMusic(height, width, className);
		// file-pdf-fill.svg
		case 799:
			return SVGIcons.filePdfFill(height, width, className);
		// file-pdf.svg
		case 800:
			return SVGIcons.filePdf(height, width, className);
		// file-person-fill.svg
		case 801:
			return SVGIcons.filePersonFill(height, width, className);
		// file-person.svg
		case 802:
			return SVGIcons.filePerson(height, width, className);
		// file-play-fill.svg
		case 803:
			return SVGIcons.filePlayFill(height, width, className);
		// file-play.svg
		case 804:
			return SVGIcons.filePlay(height, width, className);
		// file-plus-fill.svg
		case 805:
			return SVGIcons.filePlusFill(height, width, className);
		// file-plus.svg
		case 806:
			return SVGIcons.filePlus(height, width, className);
		// file-post-fill.svg
		case 807:
			return SVGIcons.filePostFill(height, width, className);
		// file-post.svg
		case 808:
			return SVGIcons.filePost(height, width, className);
		// file-ppt-fill.svg
		case 809:
			return SVGIcons.filePptFill(height, width, className);
		// file-ppt.svg
		case 810:
			return SVGIcons.filePpt(height, width, className);
		// file-richtext-fill.svg
		case 811:
			return SVGIcons.fileRichtextFill(height, width, className);
		// file-richtext.svg
		case 812:
			return SVGIcons.fileRichtext(height, width, className);
		// file-ruled-fill.svg
		case 813:
			return SVGIcons.fileRuledFill(height, width, className);
		// file-ruled.svg
		case 814:
			return SVGIcons.fileRuled(height, width, className);
		// file-slides-fill.svg
		case 815:
			return SVGIcons.fileSlidesFill(height, width, className);
		// file-slides.svg
		case 816:
			return SVGIcons.fileSlides(height, width, className);
		// file-spreadsheet-fill.svg
		case 817:
			return SVGIcons.fileSpreadsheetFill(height, width, className);
		// file-spreadsheet.svg
		case 818:
			return SVGIcons.fileSpreadsheet(height, width, className);
		// file-text-fill.svg
		case 819:
			return SVGIcons.fileTextFill(height, width, className);
		// file-text.svg
		case 820:
			return SVGIcons.fileText(height, width, className);
		// file-word-fill.svg
		case 821:
			return SVGIcons.fileWordFill(height, width, className);
		// file-word.svg
		case 822:
			return SVGIcons.fileWord(height, width, className);
		// file-x-fill.svg
		case 823:
			return SVGIcons.fileXFill(height, width, className);
		// file-x.svg
		case 824:
			return SVGIcons.fileX(height, width, className);
		// file-zip-fill.svg
		case 825:
			return SVGIcons.fileZipFill(height, width, className);
		// file-zip.svg
		case 826:
			return SVGIcons.fileZip(height, width, className);
		// file.svg
		case 827:
			return SVGIcons.file(height, width, className);
		// files-alt.svg
		case 828:
			return SVGIcons.filesAlt(height, width, className);
		// files.svg
		case 829:
			return SVGIcons.files(height, width, className);
		// filetype-aac.svg
		case 830:
			return SVGIcons.filetypeAac(height, width, className);
		// filetype-ai.svg
		case 831:
			return SVGIcons.filetypeAi(height, width, className);
		// filetype-bmp.svg
		case 832:
			return SVGIcons.filetypeBmp(height, width, className);
		// filetype-cs.svg
		case 833:
			return SVGIcons.filetypeCs(height, width, className);
		// filetype-css.svg
		case 834:
			return SVGIcons.filetypeCss(height, width, className);
		// filetype-csv.svg
		case 835:
			return SVGIcons.filetypeCsv(height, width, className);
		// filetype-doc.svg
		case 836:
			return SVGIcons.filetypeDoc(height, width, className);
		// filetype-docx.svg
		case 837:
			return SVGIcons.filetypeDocx(height, width, className);
		// filetype-exe.svg
		case 838:
			return SVGIcons.filetypeExe(height, width, className);
		// filetype-gif.svg
		case 839:
			return SVGIcons.filetypeGif(height, width, className);
		// filetype-heic.svg
		case 840:
			return SVGIcons.filetypeHeic(height, width, className);
		// filetype-html.svg
		case 841:
			return SVGIcons.filetypeHtml(height, width, className);
		// filetype-java.svg
		case 842:
			return SVGIcons.filetypeJava(height, width, className);
		// filetype-jpg.svg
		case 843:
			return SVGIcons.filetypeJpg(height, width, className);
		// filetype-js.svg
		case 844:
			return SVGIcons.filetypeJs(height, width, className);
		// filetype-json.svg
		case 845:
			return SVGIcons.filetypeJson(height, width, className);
		// filetype-jsx.svg
		case 846:
			return SVGIcons.filetypeJsx(height, width, className);
		// filetype-key.svg
		case 847:
			return SVGIcons.filetypeKey(height, width, className);
		// filetype-m4p.svg
		case 848:
			return SVGIcons.filetypeM4p(height, width, className);
		// filetype-md.svg
		case 849:
			return SVGIcons.filetypeMd(height, width, className);
		// filetype-mdx.svg
		case 850:
			return SVGIcons.filetypeMdx(height, width, className);
		// filetype-mov.svg
		case 851:
			return SVGIcons.filetypeMov(height, width, className);
		// filetype-mp3.svg
		case 852:
			return SVGIcons.filetypeMp3(height, width, className);
		// filetype-mp4.svg
		case 853:
			return SVGIcons.filetypeMp4(height, width, className);
		// filetype-otf.svg
		case 854:
			return SVGIcons.filetypeOtf(height, width, className);
		// filetype-pdf.svg
		case 855:
			return SVGIcons.filetypePdf(height, width, className);
		// filetype-php.svg
		case 856:
			return SVGIcons.filetypePhp(height, width, className);
		// filetype-png.svg
		case 857:
			return SVGIcons.filetypePng(height, width, className);
		// filetype-ppt.svg
		case 858:
			return SVGIcons.filetypePpt(height, width, className);
		// filetype-pptx.svg
		case 859:
			return SVGIcons.filetypePptx(height, width, className);
		// filetype-psd.svg
		case 860:
			return SVGIcons.filetypePsd(height, width, className);
		// filetype-py.svg
		case 861:
			return SVGIcons.filetypePy(height, width, className);
		// filetype-raw.svg
		case 862:
			return SVGIcons.filetypeRaw(height, width, className);
		// filetype-rb.svg
		case 863:
			return SVGIcons.filetypeRb(height, width, className);
		// filetype-sass.svg
		case 864:
			return SVGIcons.filetypeSass(height, width, className);
		// filetype-scss.svg
		case 865:
			return SVGIcons.filetypeScss(height, width, className);
		// filetype-sh.svg
		case 866:
			return SVGIcons.filetypeSh(height, width, className);
		// filetype-svg.svg
		case 867:
			return SVGIcons.filetypeSvg(height, width, className);
		// filetype-tiff.svg
		case 868:
			return SVGIcons.filetypeTiff(height, width, className);
		// filetype-tsx.svg
		case 869:
			return SVGIcons.filetypeTsx(height, width, className);
		// filetype-ttf.svg
		case 870:
			return SVGIcons.filetypeTtf(height, width, className);
		// filetype-txt.svg
		case 871:
			return SVGIcons.filetypeTxt(height, width, className);
		// filetype-wav.svg
		case 872:
			return SVGIcons.filetypeWav(height, width, className);
		// filetype-woff.svg
		case 873:
			return SVGIcons.filetypeWoff(height, width, className);
		// filetype-xls.svg
		case 874:
			return SVGIcons.filetypeXls(height, width, className);
		// filetype-xlsx.svg
		case 875:
			return SVGIcons.filetypeXlsx(height, width, className);
		// filetype-xml.svg
		case 876:
			return SVGIcons.filetypeXml(height, width, className);
		// filetype-yml.svg
		case 877:
			return SVGIcons.filetypeYml(height, width, className);
		// film.svg
		case 878:
			return SVGIcons.film(height, width, className);
		// filter-circle-fill.svg
		case 879:
			return SVGIcons.filterCircleFill(height, width, className);
		// filter-circle.svg
		case 880:
			return SVGIcons.filterCircle(height, width, className);
		// filter-left.svg
		case 881:
			return SVGIcons.filterLeft(height, width, className);
		// filter-right.svg
		case 882:
			return SVGIcons.filterRight(height, width, className);
		// filter-square-fill.svg
		case 883:
			return SVGIcons.filterSquareFill(height, width, className);
		// filter-square.svg
		case 884:
			return SVGIcons.filterSquare(height, width, className);
		// filter.svg
		case 885:
			return SVGIcons.filter(height, width, className);
		// fingerprint.svg
		case 886:
			return SVGIcons.fingerprint(height, width, className);
		// flag-fill.svg
		case 887:
			return SVGIcons.flagFill(height, width, className);
		// flag.svg
		case 888:
			return SVGIcons.flag(height, width, className);
		// flower1.svg
		case 889:
			return SVGIcons.flower1(height, width, className);
		// flower2.svg
		case 890:
			return SVGIcons.flower2(height, width, className);
		// flower3.svg
		case 891:
			return SVGIcons.flower3(height, width, className);
		// folder-check.svg
		case 892:
			return SVGIcons.folderCheck(height, width, className);
		// folder-fill.svg
		case 893:
			return SVGIcons.folderFill(height, width, className);
		// folder-minus.svg
		case 894:
			return SVGIcons.folderMinus(height, width, className);
		// folder-plus.svg
		case 895:
			return SVGIcons.folderPlus(height, width, className);
		// folder-symlink-fill.svg
		case 896:
			return SVGIcons.folderSymlinkFill(height, width, className);
		// folder-symlink.svg
		case 897:
			return SVGIcons.folderSymlink(height, width, className);
		// folder-x.svg
		case 898:
			return SVGIcons.folderX(height, width, className);
		// folder.svg
		case 899:
			return SVGIcons.folder(height, width, className);
		// folder2-open.svg
		case 900:
			return SVGIcons.folder2Open(height, width, className);
		// folder2.svg
		case 901:
			return SVGIcons.folder2(height, width, className);
		// fonts.svg
		case 902:
			return SVGIcons.fonts(height, width, className);
		// forward-fill.svg
		case 903:
			return SVGIcons.forwardFill(height, width, className);
		// forward.svg
		case 904:
			return SVGIcons.forward(height, width, className);
		// front.svg
		case 905:
			return SVGIcons.front(height, width, className);
		// fullscreen-exit.svg
		case 906:
			return SVGIcons.fullscreenExit(height, width, className);
		// fullscreen.svg
		case 907:
			return SVGIcons.fullscreen(height, width, className);
		// funnel-fill.svg
		case 908:
			return SVGIcons.funnelFill(height, width, className);
		// funnel.svg
		case 909:
			return SVGIcons.funnel(height, width, className);
		// gear-fill.svg
		case 910:
			return SVGIcons.gearFill(height, width, className);
		// gear-wide-connected.svg
		case 911:
			return SVGIcons.gearWideConnected(height, width, className);
		// gear-wide.svg
		case 912:
			return SVGIcons.gearWide(height, width, className);
		// gear.svg
		case 913:
			return SVGIcons.gear(height, width, className);
		// gem.svg
		case 914:
			return SVGIcons.gem(height, width, className);
		// gender-ambiguous.svg
		case 915:
			return SVGIcons.genderAmbiguous(height, width, className);
		// gender-female.svg
		case 916:
			return SVGIcons.genderFemale(height, width, className);
		// gender-male.svg
		case 917:
			return SVGIcons.genderMale(height, width, className);
		// gender-trans.svg
		case 918:
			return SVGIcons.genderTrans(height, width, className);
		// geo-alt-fill.svg
		case 919:
			return SVGIcons.geoAltFill(height, width, className);
		// geo-alt.svg
		case 920:
			return SVGIcons.geoAlt(height, width, className);
		// geo-fill.svg
		case 921:
			return SVGIcons.geoFill(height, width, className);
		// geo.svg
		case 922:
			return SVGIcons.geo(height, width, className);
		// gift-fill.svg
		case 923:
			return SVGIcons.giftFill(height, width, className);
		// gift.svg
		case 924:
			return SVGIcons.gift(height, width, className);
		// git.svg
		case 925:
			return SVGIcons.git(height, width, className);
		// github.svg
		case 926:
			return SVGIcons.github(height, width, className);
		// globe.svg
		case 927:
			return SVGIcons.globe(height, width, className);
		// globe2.svg
		case 928:
			return SVGIcons.globe2(height, width, className);
		// google.svg
		case 929:
			return SVGIcons.google(height, width, className);
		// gpu-card.svg
		case 930:
			return SVGIcons.gpuCard(height, width, className);
		// graph-down-arrow.svg
		case 931:
			return SVGIcons.graphDownArrow(height, width, className);
		// graph-down.svg
		case 932:
			return SVGIcons.graphDown(height, width, className);
		// graph-up-arrow.svg
		case 933:
			return SVGIcons.graphUpArrow(height, width, className);
		// graph-up.svg
		case 934:
			return SVGIcons.graphUp(height, width, className);
		// grid-1x2-fill.svg
		case 935:
			return SVGIcons.grid1x2Fill(height, width, className);
		// grid-1x2.svg
		case 936:
			return SVGIcons.grid1x2(height, width, className);
		// grid-3x2-gap-fill.svg
		case 937:
			return SVGIcons.grid3x2GapFill(height, width, className);
		// grid-3x2-gap.svg
		case 938:
			return SVGIcons.grid3x2Gap(height, width, className);
		// grid-3x2.svg
		case 939:
			return SVGIcons.grid3x2(height, width, className);
		// grid-3x3-gap-fill.svg
		case 940:
			return SVGIcons.grid3x3GapFill(height, width, className);
		// grid-3x3-gap.svg
		case 941:
			return SVGIcons.grid3x3Gap(height, width, className);
		// grid-3x3.svg
		case 942:
			return SVGIcons.grid3x3(height, width, className);
		// grid-fill.svg
		case 943:
			return SVGIcons.gridFill(height, width, className);
		// grid.svg
		case 944:
			return SVGIcons.grid(height, width, className);
		// grip-horizontal.svg
		case 945:
			return SVGIcons.gripHorizontal(height, width, className);
		// grip-vertical.svg
		case 946:
			return SVGIcons.gripVertical(height, width, className);
		// hammer.svg
		case 947:
			return SVGIcons.hammer(height, width, className);
		// hand-index-fill.svg
		case 948:
			return SVGIcons.handIndexFill(height, width, className);
		// hand-index-thumb-fill.svg
		case 949:
			return SVGIcons.handIndexThumbFill(height, width, className);
		// hand-index-thumb.svg
		case 950:
			return SVGIcons.handIndexThumb(height, width, className);
		// hand-index.svg
		case 951:
			return SVGIcons.handIndex(height, width, className);
		// hand-thumbs-down-fill.svg
		case 952:
			return SVGIcons.handThumbsDownFill(height, width, className);
		// hand-thumbs-down.svg
		case 953:
			return SVGIcons.handThumbsDown(height, width, className);
		// hand-thumbs-up-fill.svg
		case 954:
			return SVGIcons.handThumbsUpFill(height, width, className);
		// hand-thumbs-up.svg
		case 955:
			return SVGIcons.handThumbsUp(height, width, className);
		// handbag-fill.svg
		case 956:
			return SVGIcons.handbagFill(height, width, className);
		// handbag.svg
		case 957:
			return SVGIcons.handbag(height, width, className);
		// hash.svg
		case 958:
			return SVGIcons.hash(height, width, className);
		// hdd-fill.svg
		case 959:
			return SVGIcons.hddFill(height, width, className);
		// hdd-network-fill.svg
		case 960:
			return SVGIcons.hddNetworkFill(height, width, className);
		// hdd-network.svg
		case 961:
			return SVGIcons.hddNetwork(height, width, className);
		// hdd-rack-fill.svg
		case 962:
			return SVGIcons.hddRackFill(height, width, className);
		// hdd-rack.svg
		case 963:
			return SVGIcons.hddRack(height, width, className);
		// hdd-stack-fill.svg
		case 964:
			return SVGIcons.hddStackFill(height, width, className);
		// hdd-stack.svg
		case 965:
			return SVGIcons.hddStack(height, width, className);
		// hdd.svg
		case 966:
			return SVGIcons.hdd(height, width, className);
		// hdmi-fill.svg
		case 967:
			return SVGIcons.hdmiFill(height, width, className);
		// hdmi.svg
		case 968:
			return SVGIcons.hdmi(height, width, className);
		// headphones.svg
		case 969:
			return SVGIcons.headphones(height, width, className);
		// headset-vr.svg
		case 970:
			return SVGIcons.headsetVr(height, width, className);
		// headset.svg
		case 971:
			return SVGIcons.headset(height, width, className);
		// heart-arrow.svg
		case 972:
			return SVGIcons.heartArrow(height, width, className);
		// heart-fill.svg
		case 973:
			return SVGIcons.heartFill(height, width, className);
		// heart-half.svg
		case 974:
			return SVGIcons.heartHalf(height, width, className);
		// heart-pulse-fill.svg
		case 975:
			return SVGIcons.heartPulseFill(height, width, className);
		// heart-pulse.svg
		case 976:
			return SVGIcons.heartPulse(height, width, className);
		// heart.svg
		case 977:
			return SVGIcons.heart(height, width, className);
		// heartbreak-fill.svg
		case 978:
			return SVGIcons.heartbreakFill(height, width, className);
		// heartbreak.svg
		case 979:
			return SVGIcons.heartbreak(height, width, className);
		// hearts.svg
		case 980:
			return SVGIcons.hearts(height, width, className);
		// heptagon-fill.svg
		case 981:
			return SVGIcons.heptagonFill(height, width, className);
		// heptagon-half.svg
		case 982:
			return SVGIcons.heptagonHalf(height, width, className);
		// heptagon.svg
		case 983:
			return SVGIcons.heptagon(height, width, className);
		// hexagon-fill.svg
		case 984:
			return SVGIcons.hexagonFill(height, width, className);
		// hexagon-half.svg
		case 985:
			return SVGIcons.hexagonHalf(height, width, className);
		// hexagon.svg
		case 986:
			return SVGIcons.hexagon(height, width, className);
		// hospital-fill.svg
		case 987:
			return SVGIcons.hospitalFill(height, width, className);
		// hospital.svg
		case 988:
			return SVGIcons.hospital(height, width, className);
		// hourglass-bottom.svg
		case 989:
			return SVGIcons.hourglassBottom(height, width, className);
		// hourglass-split.svg
		case 990:
			return SVGIcons.hourglassSplit(height, width, className);
		// hourglass-top.svg
		case 991:
			return SVGIcons.hourglassTop(height, width, className);
		// hourglass.svg
		case 992:
			return SVGIcons.hourglass(height, width, className);
		// house-door-fill.svg
		case 993:
			return SVGIcons.houseDoorFill(height, width, className);
		// house-door.svg
		case 994:
			return SVGIcons.houseDoor(height, width, className);
		// house-fill.svg
		case 995:
			return SVGIcons.houseFill(height, width, className);
		// house-heart-fill.svg
		case 996:
			return SVGIcons.houseHeartFill(height, width, className);
		// house-heart.svg
		case 997:
			return SVGIcons.houseHeart(height, width, className);
		// house.svg
		case 998:
			return SVGIcons.house(height, width, className);
		// hr.svg
		case 999:
			return SVGIcons.hr(height, width, className);
		// hurricane.svg
		case 1000:
			return SVGIcons.hurricane(height, width, className);
		// hypnotize.svg
		case 1001:
			return SVGIcons.hypnotize(height, width, className);
		// image-alt.svg
		case 1002:
			return SVGIcons.imageAlt(height, width, className);
		// image-fill.svg
		case 1003:
			return SVGIcons.imageFill(height, width, className);
		// image.svg
		case 1004:
			return SVGIcons.image(height, width, className);
		// images.svg
		case 1005:
			return SVGIcons.images(height, width, className);
		// inbox-fill.svg
		case 1006:
			return SVGIcons.inboxFill(height, width, className);
		// inbox.svg
		case 1007:
			return SVGIcons.inbox(height, width, className);
		// inboxes-fill.svg
		case 1008:
			return SVGIcons.inboxesFill(height, width, className);
		// inboxes.svg
		case 1009:
			return SVGIcons.inboxes(height, width, className);
		// incognito.svg
		case 1010:
			return SVGIcons.incognito(height, width, className);
		// infinity.svg
		case 1011:
			return SVGIcons.infinity(height, width, className);
		// info-circle-fill.svg
		case 1012:
			return SVGIcons.infoCircleFill(height, width, className);
		// info-circle.svg
		case 1013:
			return SVGIcons.infoCircle(height, width, className);
		// info-lg.svg
		case 1014:
			return SVGIcons.infoLg(height, width, className);
		// info-square-fill.svg
		case 1015:
			return SVGIcons.infoSquareFill(height, width, className);
		// info-square.svg
		case 1016:
			return SVGIcons.infoSquare(height, width, className);
		// info.svg
		case 1017:
			return SVGIcons.info(height, width, className);
		// input-cursor-text.svg
		case 1018:
			return SVGIcons.inputCursorText(height, width, className);
		// input-cursor.svg
		case 1019:
			return SVGIcons.inputCursor(height, width, className);
		// instagram.svg
		case 1020:
			return SVGIcons.instagram(height, width, className);
		// intersect.svg
		case 1021:
			return SVGIcons.intersect(height, width, className);
		// journal-album.svg
		case 1022:
			return SVGIcons.journalAlbum(height, width, className);
		// journal-arrow-down.svg
		case 1023:
			return SVGIcons.journalArrowDown(height, width, className);
		// journal-arrow-up.svg
		case 1024:
			return SVGIcons.journalArrowUp(height, width, className);
		// journal-bookmark-fill.svg
		case 1025:
			return SVGIcons.journalBookmarkFill(height, width, className);
		// journal-bookmark.svg
		case 1026:
			return SVGIcons.journalBookmark(height, width, className);
		// journal-check.svg
		case 1027:
			return SVGIcons.journalCheck(height, width, className);
		// journal-code.svg
		case 1028:
			return SVGIcons.journalCode(height, width, className);
		// journal-medical.svg
		case 1029:
			return SVGIcons.journalMedical(height, width, className);
		// journal-minus.svg
		case 1030:
			return SVGIcons.journalMinus(height, width, className);
		// journal-plus.svg
		case 1031:
			return SVGIcons.journalPlus(height, width, className);
		// journal-richtext.svg
		case 1032:
			return SVGIcons.journalRichtext(height, width, className);
		// journal-text.svg
		case 1033:
			return SVGIcons.journalText(height, width, className);
		// journal-x.svg
		case 1034:
			return SVGIcons.journalX(height, width, className);
		// journal.svg
		case 1035:
			return SVGIcons.journal(height, width, className);
		// journals.svg
		case 1036:
			return SVGIcons.journals(height, width, className);
		// joystick.svg
		case 1037:
			return SVGIcons.joystick(height, width, className);
		// justify-left.svg
		case 1038:
			return SVGIcons.justifyLeft(height, width, className);
		// justify-right.svg
		case 1039:
			return SVGIcons.justifyRight(height, width, className);
		// justify.svg
		case 1040:
			return SVGIcons.justify(height, width, className);
		// kanban-fill.svg
		case 1041:
			return SVGIcons.kanbanFill(height, width, className);
		// kanban.svg
		case 1042:
			return SVGIcons.kanban(height, width, className);
		// key-fill.svg
		case 1043:
			return SVGIcons.keyFill(height, width, className);
		// key.svg
		case 1044:
			return SVGIcons.key(height, width, className);
		// keyboard-fill.svg
		case 1045:
			return SVGIcons.keyboardFill(height, width, className);
		// keyboard.svg
		case 1046:
			return SVGIcons.keyboard(height, width, className);
		// ladder.svg
		case 1047:
			return SVGIcons.ladder(height, width, className);
		// lamp-fill.svg
		case 1048:
			return SVGIcons.lampFill(height, width, className);
		// lamp.svg
		case 1049:
			return SVGIcons.lamp(height, width, className);
		// laptop-fill.svg
		case 1050:
			return SVGIcons.laptopFill(height, width, className);
		// laptop.svg
		case 1051:
			return SVGIcons.laptop(height, width, className);
		// layer-backward.svg
		case 1052:
			return SVGIcons.layerBackward(height, width, className);
		// layer-forward.svg
		case 1053:
			return SVGIcons.layerForward(height, width, className);
		// layers-fill.svg
		case 1054:
			return SVGIcons.layersFill(height, width, className);
		// layers-half.svg
		case 1055:
			return SVGIcons.layersHalf(height, width, className);
		// layers.svg
		case 1056:
			return SVGIcons.layers(height, width, className);
		// layout-sidebar-inset-reverse.svg
		case 1057:
			return SVGIcons.layoutSidebarInsetReverse(height, width, className);
		// layout-sidebar-inset.svg
		case 1058:
			return SVGIcons.layoutSidebarInset(height, width, className);
		// layout-sidebar-reverse.svg
		case 1059:
			return SVGIcons.layoutSidebarReverse(height, width, className);
		// layout-sidebar.svg
		case 1060:
			return SVGIcons.layoutSidebar(height, width, className);
		// layout-split.svg
		case 1061:
			return SVGIcons.layoutSplit(height, width, className);
		// layout-text-sidebar-reverse.svg
		case 1062:
			return SVGIcons.layoutTextSidebarReverse(height, width, className);
		// layout-text-sidebar.svg
		case 1063:
			return SVGIcons.layoutTextSidebar(height, width, className);
		// layout-text-window-reverse.svg
		case 1064:
			return SVGIcons.layoutTextWindowReverse(height, width, className);
		// layout-text-window.svg
		case 1065:
			return SVGIcons.layoutTextWindow(height, width, className);
		// layout-three-columns.svg
		case 1066:
			return SVGIcons.layoutThreeColumns(height, width, className);
		// layout-wtf.svg
		case 1067:
			return SVGIcons.layoutWtf(height, width, className);
		// life-preserver.svg
		case 1068:
			return SVGIcons.lifePreserver(height, width, className);
		// lightbulb-fill.svg
		case 1069:
			return SVGIcons.lightbulbFill(height, width, className);
		// lightbulb-off-fill.svg
		case 1070:
			return SVGIcons.lightbulbOffFill(height, width, className);
		// lightbulb-off.svg
		case 1071:
			return SVGIcons.lightbulbOff(height, width, className);
		// lightbulb.svg
		case 1072:
			return SVGIcons.lightbulb(height, width, className);
		// lightning-charge-fill.svg
		case 1073:
			return SVGIcons.lightningChargeFill(height, width, className);
		// lightning-charge.svg
		case 1074:
			return SVGIcons.lightningCharge(height, width, className);
		// lightning-fill.svg
		case 1075:
			return SVGIcons.lightningFill(height, width, className);
		// lightning.svg
		case 1076:
			return SVGIcons.lightning(height, width, className);
		// line.svg
		case 1077:
			return SVGIcons.line(height, width, className);
		// link-45deg.svg
		case 1078:
			return SVGIcons.link45deg(height, width, className);
		// link.svg
		case 1079:
			return SVGIcons.link(height, width, className);
		// linkedin.svg
		case 1080:
			return SVGIcons.linkedin(height, width, className);
		// list-check.svg
		case 1081:
			return SVGIcons.listCheck(height, width, className);
		// list-columns-reverse.svg
		case 1082:
			return SVGIcons.listColumnsReverse(height, width, className);
		// list-columns.svg
		case 1083:
			return SVGIcons.listColumns(height, width, className);
		// list-nested.svg
		case 1084:
			return SVGIcons.listNested(height, width, className);
		// list-ol.svg
		case 1085:
			return SVGIcons.listOl(height, width, className);
		// list-stars.svg
		case 1086:
			return SVGIcons.listStars(height, width, className);
		// list-task.svg
		case 1087:
			return SVGIcons.listTask(height, width, className);
		// list-ul.svg
		case 1088:
			return SVGIcons.listUl(height, width, className);
		// list.svg
		case 1089:
			return SVGIcons.list(height, width, className);
		// lock-fill.svg
		case 1090:
			return SVGIcons.lockFill(height, width, className);
		// lock.svg
		case 1091:
			return SVGIcons.lock(height, width, className);
		// magic.svg
		case 1092:
			return SVGIcons.magic(height, width, className);
		// magnet-fill.svg
		case 1093:
			return SVGIcons.magnetFill(height, width, className);
		// magnet.svg
		case 1094:
			return SVGIcons.magnet(height, width, className);
		// mailbox.svg
		case 1095:
			return SVGIcons.mailbox(height, width, className);
		// mailbox2.svg
		case 1096:
			return SVGIcons.mailbox2(height, width, className);
		// map-fill.svg
		case 1097:
			return SVGIcons.mapFill(height, width, className);
		// map.svg
		case 1098:
			return SVGIcons.map(height, width, className);
		// markdown-fill.svg
		case 1099:
			return SVGIcons.markdownFill(height, width, className);
		// markdown.svg
		case 1100:
			return SVGIcons.markdown(height, width, className);
		// mask.svg
		case 1101:
			return SVGIcons.mask(height, width, className);
		// mastodon.svg
		case 1102:
			return SVGIcons.mastodon(height, width, className);
		// medium.svg
		case 1103:
			return SVGIcons.medium(height, width, className);
		// megaphone-fill.svg
		case 1104:
			return SVGIcons.megaphoneFill(height, width, className);
		// megaphone.svg
		case 1105:
			return SVGIcons.megaphone(height, width, className);
		// memory.svg
		case 1106:
			return SVGIcons.memory(height, width, className);
		// menu-app-fill.svg
		case 1107:
			return SVGIcons.menuAppFill(height, width, className);
		// menu-app.svg
		case 1108:
			return SVGIcons.menuApp(height, width, className);
		// menu-button-fill.svg
		case 1109:
			return SVGIcons.menuButtonFill(height, width, className);
		// menu-button-wide-fill.svg
		case 1110:
			return SVGIcons.menuButtonWideFill(height, width, className);
		// menu-button-wide.svg
		case 1111:
			return SVGIcons.menuButtonWide(height, width, className);
		// menu-button.svg
		case 1112:
			return SVGIcons.menuButton(height, width, className);
		// menu-down.svg
		case 1113:
			return SVGIcons.menuDown(height, width, className);
		// menu-up.svg
		case 1114:
			return SVGIcons.menuUp(height, width, className);
		// messenger.svg
		case 1115:
			return SVGIcons.messenger(height, width, className);
		// meta.svg
		case 1116:
			return SVGIcons.meta(height, width, className);
		// mic-fill.svg
		case 1117:
			return SVGIcons.micFill(height, width, className);
		// mic-mute-fill.svg
		case 1118:
			return SVGIcons.micMuteFill(height, width, className);
		// mic-mute.svg
		case 1119:
			return SVGIcons.micMute(height, width, className);
		// mic.svg
		case 1120:
			return SVGIcons.mic(height, width, className);
		// microsoft.svg
		case 1121:
			return SVGIcons.microsoft(height, width, className);
		// minecart-loaded.svg
		case 1122:
			return SVGIcons.minecartLoaded(height, width, className);
		// minecart.svg
		case 1123:
			return SVGIcons.minecart(height, width, className);
		// modem-fill.svg
		case 1124:
			return SVGIcons.modemFill(height, width, className);
		// modem.svg
		case 1125:
			return SVGIcons.modem(height, width, className);
		// moisture.svg
		case 1126:
			return SVGIcons.moisture(height, width, className);
		// moon-fill.svg
		case 1127:
			return SVGIcons.moonFill(height, width, className);
		// moon-stars-fill.svg
		case 1128:
			return SVGIcons.moonStarsFill(height, width, className);
		// moon-stars.svg
		case 1129:
			return SVGIcons.moonStars(height, width, className);
		// moon.svg
		case 1130:
			return SVGIcons.moon(height, width, className);
		// mortarboard-fill.svg
		case 1131:
			return SVGIcons.mortarboardFill(height, width, className);
		// mortarboard.svg
		case 1132:
			return SVGIcons.mortarboard(height, width, className);
		// motherboard-fill.svg
		case 1133:
			return SVGIcons.motherboardFill(height, width, className);
		// motherboard.svg
		case 1134:
			return SVGIcons.motherboard(height, width, className);
		// mouse-fill.svg
		case 1135:
			return SVGIcons.mouseFill(height, width, className);
		// mouse.svg
		case 1136:
			return SVGIcons.mouse(height, width, className);
		// mouse2-fill.svg
		case 1137:
			return SVGIcons.mouse2Fill(height, width, className);
		// mouse2.svg
		case 1138:
			return SVGIcons.mouse2(height, width, className);
		// mouse3-fill.svg
		case 1139:
			return SVGIcons.mouse3Fill(height, width, className);
		// mouse3.svg
		case 1140:
			return SVGIcons.mouse3(height, width, className);
		// music-note-beamed.svg
		case 1141:
			return SVGIcons.musicNoteBeamed(height, width, className);
		// music-note-list.svg
		case 1142:
			return SVGIcons.musicNoteList(height, width, className);
		// music-note.svg
		case 1143:
			return SVGIcons.musicNote(height, width, className);
		// music-player-fill.svg
		case 1144:
			return SVGIcons.musicPlayerFill(height, width, className);
		// music-player.svg
		case 1145:
			return SVGIcons.musicPlayer(height, width, className);
		// newspaper.svg
		case 1146:
			return SVGIcons.newspaper(height, width, className);
		// nintendo-switch.svg
		case 1147:
			return SVGIcons.nintendoSwitch(height, width, className);
		// node-minus-fill.svg
		case 1148:
			return SVGIcons.nodeMinusFill(height, width, className);
		// node-minus.svg
		case 1149:
			return SVGIcons.nodeMinus(height, width, className);
		// node-plus-fill.svg
		case 1150:
			return SVGIcons.nodePlusFill(height, width, className);
		// node-plus.svg
		case 1151:
			return SVGIcons.nodePlus(height, width, className);
		// nut-fill.svg
		case 1152:
			return SVGIcons.nutFill(height, width, className);
		// nut.svg
		case 1153:
			return SVGIcons.nut(height, width, className);
		// octagon-fill.svg
		case 1154:
			return SVGIcons.octagonFill(height, width, className);
		// octagon-half.svg
		case 1155:
			return SVGIcons.octagonHalf(height, width, className);
		// octagon.svg
		case 1156:
			return SVGIcons.octagon(height, width, className);
		// optical-audio-fill.svg
		case 1157:
			return SVGIcons.opticalAudioFill(height, width, className);
		// optical-audio.svg
		case 1158:
			return SVGIcons.opticalAudio(height, width, className);
		// option.svg
		case 1159:
			return SVGIcons.option(height, width, className);
		// outlet.svg
		case 1160:
			return SVGIcons.outlet(height, width, className);
		// paint-bucket.svg
		case 1161:
			return SVGIcons.paintBucket(height, width, className);
		// palette-fill.svg
		case 1162:
			return SVGIcons.paletteFill(height, width, className);
		// palette.svg
		case 1163:
			return SVGIcons.palette(height, width, className);
		// palette2.svg
		case 1164:
			return SVGIcons.palette2(height, width, className);
		// paperclip.svg
		case 1165:
			return SVGIcons.paperclip(height, width, className);
		// paragraph.svg
		case 1166:
			return SVGIcons.paragraph(height, width, className);
		// patch-check-fill.svg
		case 1167:
			return SVGIcons.patchCheckFill(height, width, className);
		// patch-check.svg
		case 1168:
			return SVGIcons.patchCheck(height, width, className);
		// patch-exclamation-fill.svg
		case 1169:
			return SVGIcons.patchExclamationFill(height, width, className);
		// patch-exclamation.svg
		case 1170:
			return SVGIcons.patchExclamation(height, width, className);
		// patch-minus-fill.svg
		case 1171:
			return SVGIcons.patchMinusFill(height, width, className);
		// patch-minus.svg
		case 1172:
			return SVGIcons.patchMinus(height, width, className);
		// patch-plus-fill.svg
		case 1173:
			return SVGIcons.patchPlusFill(height, width, className);
		// patch-plus.svg
		case 1174:
			return SVGIcons.patchPlus(height, width, className);
		// patch-question-fill.svg
		case 1175:
			return SVGIcons.patchQuestionFill(height, width, className);
		// patch-question.svg
		case 1176:
			return SVGIcons.patchQuestion(height, width, className);
		// pause-btn-fill.svg
		case 1177:
			return SVGIcons.pauseBtnFill(height, width, className);
		// pause-btn.svg
		case 1178:
			return SVGIcons.pauseBtn(height, width, className);
		// pause-circle-fill.svg
		case 1179:
			return SVGIcons.pauseCircleFill(height, width, className);
		// pause-circle.svg
		case 1180:
			return SVGIcons.pauseCircle(height, width, className);
		// pause-fill.svg
		case 1181:
			return SVGIcons.pauseFill(height, width, className);
		// pause.svg
		case 1182:
			return SVGIcons.pause(height, width, className);
		// paypal.svg
		case 1183:
			return SVGIcons.paypal(height, width, className);
		// pc-display-horizontal.svg
		case 1184:
			return SVGIcons.pcDisplayHorizontal(height, width, className);
		// pc-display.svg
		case 1185:
			return SVGIcons.pcDisplay(height, width, className);
		// pc-horizontal.svg
		case 1186:
			return SVGIcons.pcHorizontal(height, width, className);
		// pc.svg
		case 1187:
			return SVGIcons.pc(height, width, className);
		// pci-card.svg
		case 1188:
			return SVGIcons.pciCard(height, width, className);
		// peace-fill.svg
		case 1189:
			return SVGIcons.peaceFill(height, width, className);
		// peace.svg
		case 1190:
			return SVGIcons.peace(height, width, className);
		// pen-fill.svg
		case 1191:
			return SVGIcons.penFill(height, width, className);
		// pen.svg
		case 1192:
			return SVGIcons.pen(height, width, className);
		// pencil-fill.svg
		case 1193:
			return SVGIcons.pencilFill(height, width, className);
		// pencil-square.svg
		case 1194:
			return SVGIcons.pencilSquare(height, width, className);
		// pencil.svg
		case 1195:
			return SVGIcons.pencil(height, width, className);
		// pentagon-fill.svg
		case 1196:
			return SVGIcons.pentagonFill(height, width, className);
		// pentagon-half.svg
		case 1197:
			return SVGIcons.pentagonHalf(height, width, className);
		// pentagon.svg
		case 1198:
			return SVGIcons.pentagon(height, width, className);
		// people-fill.svg
		case 1199:
			return SVGIcons.peopleFill(height, width, className);
		// people.svg
		case 1200:
			return SVGIcons.people(height, width, className);
		// percent.svg
		case 1201:
			return SVGIcons.percent(height, width, className);
		// person-badge-fill.svg
		case 1202:
			return SVGIcons.personBadgeFill(height, width, className);
		// person-badge.svg
		case 1203:
			return SVGIcons.personBadge(height, width, className);
		// person-bounding-box.svg
		case 1204:
			return SVGIcons.personBoundingBox(height, width, className);
		// person-check-fill.svg
		case 1205:
			return SVGIcons.personCheckFill(height, width, className);
		// person-check.svg
		case 1206:
			return SVGIcons.personCheck(height, width, className);
		// person-circle.svg
		case 1207:
			return SVGIcons.personCircle(height, width, className);
		// person-dash-fill.svg
		case 1208:
			return SVGIcons.personDashFill(height, width, className);
		// person-dash.svg
		case 1209:
			return SVGIcons.personDash(height, width, className);
		// person-fill.svg
		case 1210:
			return SVGIcons.personFill(height, width, className);
		// person-heart.svg
		case 1211:
			return SVGIcons.personHeart(height, width, className);
		// person-hearts.svg
		case 1212:
			return SVGIcons.personHearts(height, width, className);
		// person-lines-fill.svg
		case 1213:
			return SVGIcons.personLinesFill(height, width, className);
		// person-plus-fill.svg
		case 1214:
			return SVGIcons.personPlusFill(height, width, className);
		// person-plus.svg
		case 1215:
			return SVGIcons.personPlus(height, width, className);
		// person-rolodex.svg
		case 1216:
			return SVGIcons.personRolodex(height, width, className);
		// person-square.svg
		case 1217:
			return SVGIcons.personSquare(height, width, className);
		// person-video.svg
		case 1218:
			return SVGIcons.personVideo(height, width, className);
		// person-video2.svg
		case 1219:
			return SVGIcons.personVideo2(height, width, className);
		// person-video3.svg
		case 1220:
			return SVGIcons.personVideo3(height, width, className);
		// person-workspace.svg
		case 1221:
			return SVGIcons.personWorkspace(height, width, className);
		// person-x-fill.svg
		case 1222:
			return SVGIcons.personXFill(height, width, className);
		// person-x.svg
		case 1223:
			return SVGIcons.personX(height, width, className);
		// person.svg
		case 1224:
			return SVGIcons.person(height, width, className);
		// phone-fill.svg
		case 1225:
			return SVGIcons.phoneFill(height, width, className);
		// phone-flip.svg
		case 1226:
			return SVGIcons.phoneFlip(height, width, className);
		// phone-landscape-fill.svg
		case 1227:
			return SVGIcons.phoneLandscapeFill(height, width, className);
		// phone-landscape.svg
		case 1228:
			return SVGIcons.phoneLandscape(height, width, className);
		// phone-vibrate-fill.svg
		case 1229:
			return SVGIcons.phoneVibrateFill(height, width, className);
		// phone-vibrate.svg
		case 1230:
			return SVGIcons.phoneVibrate(height, width, className);
		// phone.svg
		case 1231:
			return SVGIcons.phone(height, width, className);
		// pie-chart-fill.svg
		case 1232:
			return SVGIcons.pieChartFill(height, width, className);
		// pie-chart.svg
		case 1233:
			return SVGIcons.pieChart(height, width, className);
		// piggy-bank-fill.svg
		case 1234:
			return SVGIcons.piggyBankFill(height, width, className);
		// piggy-bank.svg
		case 1235:
			return SVGIcons.piggyBank(height, width, className);
		// pin-angle-fill.svg
		case 1236:
			return SVGIcons.pinAngleFill(height, width, className);
		// pin-angle.svg
		case 1237:
			return SVGIcons.pinAngle(height, width, className);
		// pin-fill.svg
		case 1238:
			return SVGIcons.pinFill(height, width, className);
		// pin-map-fill.svg
		case 1239:
			return SVGIcons.pinMapFill(height, width, className);
		// pin-map.svg
		case 1240:
			return SVGIcons.pinMap(height, width, className);
		// pin.svg
		case 1241:
			return SVGIcons.pin(height, width, className);
		// pinterest.svg
		case 1242:
			return SVGIcons.pinterest(height, width, className);
		// pip-fill.svg
		case 1243:
			return SVGIcons.pipFill(height, width, className);
		// pip.svg
		case 1244:
			return SVGIcons.pip(height, width, className);
		// play-btn-fill.svg
		case 1245:
			return SVGIcons.playBtnFill(height, width, className);
		// play-btn.svg
		case 1246:
			return SVGIcons.playBtn(height, width, className);
		// play-circle-fill.svg
		case 1247:
			return SVGIcons.playCircleFill(height, width, className);
		// play-circle.svg
		case 1248:
			return SVGIcons.playCircle(height, width, className);
		// play-fill.svg
		case 1249:
			return SVGIcons.playFill(height, width, className);
		// play.svg
		case 1250:
			return SVGIcons.play(height, width, className);
		// playstation.svg
		case 1251:
			return SVGIcons.playstation(height, width, className);
		// plug-fill.svg
		case 1252:
			return SVGIcons.plugFill(height, width, className);
		// plug.svg
		case 1253:
			return SVGIcons.plug(height, width, className);
		// plugin.svg
		case 1254:
			return SVGIcons.plugin(height, width, className);
		// plus-circle-dotted.svg
		case 1255:
			return SVGIcons.plusCircleDotted(height, width, className);
		// plus-circle-fill.svg
		case 1256:
			return SVGIcons.plusCircleFill(height, width, className);
		// plus-circle.svg
		case 1257:
			return SVGIcons.plusCircle(height, width, className);
		// plus-lg.svg
		case 1258:
			return SVGIcons.plusLg(height, width, className);
		// plus-slash-minus.svg
		case 1259:
			return SVGIcons.plusSlashMinus(height, width, className);
		// plus-square-dotted.svg
		case 1260:
			return SVGIcons.plusSquareDotted(height, width, className);
		// plus-square-fill.svg
		case 1261:
			return SVGIcons.plusSquareFill(height, width, className);
		// plus-square.svg
		case 1262:
			return SVGIcons.plusSquare(height, width, className);
		// plus.svg
		case 1263:
			return SVGIcons.plus(height, width, className);
		// postage-fill.svg
		case 1264:
			return SVGIcons.postageFill(height, width, className);
		// postage-heart-fill.svg
		case 1265:
			return SVGIcons.postageHeartFill(height, width, className);
		// postage-heart.svg
		case 1266:
			return SVGIcons.postageHeart(height, width, className);
		// postage.svg
		case 1267:
			return SVGIcons.postage(height, width, className);
		// postcard-fill.svg
		case 1268:
			return SVGIcons.postcardFill(height, width, className);
		// postcard-heart-fill.svg
		case 1269:
			return SVGIcons.postcardHeartFill(height, width, className);
		// postcard-heart.svg
		case 1270:
			return SVGIcons.postcardHeart(height, width, className);
		// postcard.svg
		case 1271:
			return SVGIcons.postcard(height, width, className);
		// power.svg
		case 1272:
			return SVGIcons.power(height, width, className);
		// printer-fill.svg
		case 1273:
			return SVGIcons.printerFill(height, width, className);
		// printer.svg
		case 1274:
			return SVGIcons.printer(height, width, className);
		// projector-fill.svg
		case 1275:
			return SVGIcons.projectorFill(height, width, className);
		// projector.svg
		case 1276:
			return SVGIcons.projector(height, width, className);
		// puzzle-fill.svg
		case 1277:
			return SVGIcons.puzzleFill(height, width, className);
		// puzzle.svg
		case 1278:
			return SVGIcons.puzzle(height, width, className);
		// qr-code-scan.svg
		case 1279:
			return SVGIcons.qrCodeScan(height, width, className);
		// qr-code.svg
		case 1280:
			return SVGIcons.qrCode(height, width, className);
		// question-circle-fill.svg
		case 1281:
			return SVGIcons.questionCircleFill(height, width, className);
		// question-circle.svg
		case 1282:
			return SVGIcons.questionCircle(height, width, className);
		// question-diamond-fill.svg
		case 1283:
			return SVGIcons.questionDiamondFill(height, width, className);
		// question-diamond.svg
		case 1284:
			return SVGIcons.questionDiamond(height, width, className);
		// question-lg.svg
		case 1285:
			return SVGIcons.questionLg(height, width, className);
		// question-octagon-fill.svg
		case 1286:
			return SVGIcons.questionOctagonFill(height, width, className);
		// question-octagon.svg
		case 1287:
			return SVGIcons.questionOctagon(height, width, className);
		// question-square-fill.svg
		case 1288:
			return SVGIcons.questionSquareFill(height, width, className);
		// question-square.svg
		case 1289:
			return SVGIcons.questionSquare(height, width, className);
		// question.svg
		case 1290:
			return SVGIcons.question(height, width, className);
		// quora.svg
		case 1291:
			return SVGIcons.quora(height, width, className);
		// quote.svg
		case 1292:
			return SVGIcons.quote(height, width, className);
		// radioactive.svg
		case 1293:
			return SVGIcons.radioactive(height, width, className);
		// rainbow.svg
		case 1294:
			return SVGIcons.rainbow(height, width, className);
		// receipt-cutoff.svg
		case 1295:
			return SVGIcons.receiptCutoff(height, width, className);
		// receipt.svg
		case 1296:
			return SVGIcons.receipt(height, width, className);
		// reception-0.svg
		case 1297:
			return SVGIcons.reception0(height, width, className);
		// reception-1.svg
		case 1298:
			return SVGIcons.reception1(height, width, className);
		// reception-2.svg
		case 1299:
			return SVGIcons.reception2(height, width, className);
		// reception-3.svg
		case 1300:
			return SVGIcons.reception3(height, width, className);
		// reception-4.svg
		case 1301:
			return SVGIcons.reception4(height, width, className);
		// record-btn-fill.svg
		case 1302:
			return SVGIcons.recordBtnFill(height, width, className);
		// record-btn.svg
		case 1303:
			return SVGIcons.recordBtn(height, width, className);
		// record-circle-fill.svg
		case 1304:
			return SVGIcons.recordCircleFill(height, width, className);
		// record-circle.svg
		case 1305:
			return SVGIcons.recordCircle(height, width, className);
		// record-fill.svg
		case 1306:
			return SVGIcons.recordFill(height, width, className);
		// record.svg
		case 1307:
			return SVGIcons.record(height, width, className);
		// record2-fill.svg
		case 1308:
			return SVGIcons.record2Fill(height, width, className);
		// record2.svg
		case 1309:
			return SVGIcons.record2(height, width, className);
		// recycle.svg
		case 1310:
			return SVGIcons.recycle(height, width, className);
		// reddit.svg
		case 1311:
			return SVGIcons.reddit(height, width, className);
		// reply-all-fill.svg
		case 1312:
			return SVGIcons.replyAllFill(height, width, className);
		// reply-all.svg
		case 1313:
			return SVGIcons.replyAll(height, width, className);
		// reply-fill.svg
		case 1314:
			return SVGIcons.replyFill(height, width, className);
		// reply.svg
		case 1315:
			return SVGIcons.reply(height, width, className);
		// robot.svg
		case 1316:
			return SVGIcons.robot(height, width, className);
		// router-fill.svg
		case 1317:
			return SVGIcons.routerFill(height, width, className);
		// router.svg
		case 1318:
			return SVGIcons.router(height, width, className);
		// rss-fill.svg
		case 1319:
			return SVGIcons.rssFill(height, width, className);
		// rss.svg
		case 1320:
			return SVGIcons.rss(height, width, className);
		// rulers.svg
		case 1321:
			return SVGIcons.rulers(height, width, className);
		// safe-fill.svg
		case 1322:
			return SVGIcons.safeFill(height, width, className);
		// safe.svg
		case 1323:
			return SVGIcons.safe(height, width, className);
		// safe2-fill.svg
		case 1324:
			return SVGIcons.safe2Fill(height, width, className);
		// safe2.svg
		case 1325:
			return SVGIcons.safe2(height, width, className);
		// save-fill.svg
		case 1326:
			return SVGIcons.saveFill(height, width, className);
		// save.svg
		case 1327:
			return SVGIcons.save(height, width, className);
		// save2-fill.svg
		case 1328:
			return SVGIcons.save2Fill(height, width, className);
		// save2.svg
		case 1329:
			return SVGIcons.save2(height, width, className);
		// scissors.svg
		case 1330:
			return SVGIcons.scissors(height, width, className);
		// screwdriver.svg
		case 1331:
			return SVGIcons.screwdriver(height, width, className);
		// sd-card-fill.svg
		case 1332:
			return SVGIcons.sdCardFill(height, width, className);
		// sd-card.svg
		case 1333:
			return SVGIcons.sdCard(height, width, className);
		// search-heart-fill.svg
		case 1334:
			return SVGIcons.searchHeartFill(height, width, className);
		// search-heart.svg
		case 1335:
			return SVGIcons.searchHeart(height, width, className);
		// search.svg
		case 1336:
			return SVGIcons.search(height, width, className);
		// segmented-nav.svg
		case 1337:
			return SVGIcons.segmentedNav(height, width, className);
		// send-check-fill.svg
		case 1338:
			return SVGIcons.sendCheckFill(height, width, className);
		// send-check.svg
		case 1339:
			return SVGIcons.sendCheck(height, width, className);
		// send-dash-fill.svg
		case 1340:
			return SVGIcons.sendDashFill(height, width, className);
		// send-dash.svg
		case 1341:
			return SVGIcons.sendDash(height, width, className);
		// send-exclamation-fill.svg
		case 1342:
			return SVGIcons.sendExclamationFill(height, width, className);
		// send-exclamation.svg
		case 1343:
			return SVGIcons.sendExclamation(height, width, className);
		// send-fill.svg
		case 1344:
			return SVGIcons.sendFill(height, width, className);
		// send-plus-fill.svg
		case 1345:
			return SVGIcons.sendPlusFill(height, width, className);
		// send-plus.svg
		case 1346:
			return SVGIcons.sendPlus(height, width, className);
		// send-slash-fill.svg
		case 1347:
			return SVGIcons.sendSlashFill(height, width, className);
		// send-slash.svg
		case 1348:
			return SVGIcons.sendSlash(height, width, className);
		// send-x-fill.svg
		case 1349:
			return SVGIcons.sendXFill(height, width, className);
		// send-x.svg
		case 1350:
			return SVGIcons.sendX(height, width, className);
		// send.svg
		case 1351:
			return SVGIcons.send(height, width, className);
		// server.svg
		case 1352:
			return SVGIcons.server(height, width, className);
		// share-fill.svg
		case 1353:
			return SVGIcons.shareFill(height, width, className);
		// share.svg
		case 1354:
			return SVGIcons.share(height, width, className);
		// shield-check.svg
		case 1355:
			return SVGIcons.shieldCheck(height, width, className);
		// shield-exclamation.svg
		case 1356:
			return SVGIcons.shieldExclamation(height, width, className);
		// shield-fill-check.svg
		case 1357:
			return SVGIcons.shieldFillCheck(height, width, className);
		// shield-fill-exclamation.svg
		case 1358:
			return SVGIcons.shieldFillExclamation(height, width, className);
		// shield-fill-minus.svg
		case 1359:
			return SVGIcons.shieldFillMinus(height, width, className);
		// shield-fill-plus.svg
		case 1360:
			return SVGIcons.shieldFillPlus(height, width, className);
		// shield-fill-x.svg
		case 1361:
			return SVGIcons.shieldFillX(height, width, className);
		// shield-fill.svg
		case 1362:
			return SVGIcons.shieldFill(height, width, className);
		// shield-lock-fill.svg
		case 1363:
			return SVGIcons.shieldLockFill(height, width, className);
		// shield-lock.svg
		case 1364:
			return SVGIcons.shieldLock(height, width, className);
		// shield-minus.svg
		case 1365:
			return SVGIcons.shieldMinus(height, width, className);
		// shield-plus.svg
		case 1366:
			return SVGIcons.shieldPlus(height, width, className);
		// shield-shaded.svg
		case 1367:
			return SVGIcons.shieldShaded(height, width, className);
		// shield-slash-fill.svg
		case 1368:
			return SVGIcons.shieldSlashFill(height, width, className);
		// shield-slash.svg
		case 1369:
			return SVGIcons.shieldSlash(height, width, className);
		// shield-x.svg
		case 1370:
			return SVGIcons.shieldX(height, width, className);
		// shield.svg
		case 1371:
			return SVGIcons.shield(height, width, className);
		// shift-fill.svg
		case 1372:
			return SVGIcons.shiftFill(height, width, className);
		// shift.svg
		case 1373:
			return SVGIcons.shift(height, width, className);
		// shop-window.svg
		case 1374:
			return SVGIcons.shopWindow(height, width, className);
		// shop.svg
		case 1375:
			return SVGIcons.shop(height, width, className);
		// shuffle.svg
		case 1376:
			return SVGIcons.shuffle(height, width, className);
		// signal.svg
		case 1377:
			return SVGIcons.signal(height, width, className);
		// signpost-2-fill.svg
		case 1378:
			return SVGIcons.signpost2Fill(height, width, className);
		// signpost-2.svg
		case 1379:
			return SVGIcons.signpost2(height, width, className);
		// signpost-fill.svg
		case 1380:
			return SVGIcons.signpostFill(height, width, className);
		// signpost-split-fill.svg
		case 1381:
			return SVGIcons.signpostSplitFill(height, width, className);
		// signpost-split.svg
		case 1382:
			return SVGIcons.signpostSplit(height, width, className);
		// signpost.svg
		case 1383:
			return SVGIcons.signpost(height, width, className);
		// sim-fill.svg
		case 1384:
			return SVGIcons.simFill(height, width, className);
		// sim.svg
		case 1385:
			return SVGIcons.sim(height, width, className);
		// skip-backward-btn-fill.svg
		case 1386:
			return SVGIcons.skipBackwardBtnFill(height, width, className);
		// skip-backward-btn.svg
		case 1387:
			return SVGIcons.skipBackwardBtn(height, width, className);
		// skip-backward-circle-fill.svg
		case 1388:
			return SVGIcons.skipBackwardCircleFill(height, width, className);
		// skip-backward-circle.svg
		case 1389:
			return SVGIcons.skipBackwardCircle(height, width, className);
		// skip-backward-fill.svg
		case 1390:
			return SVGIcons.skipBackwardFill(height, width, className);
		// skip-backward.svg
		case 1391:
			return SVGIcons.skipBackward(height, width, className);
		// skip-end-btn-fill.svg
		case 1392:
			return SVGIcons.skipEndBtnFill(height, width, className);
		// skip-end-btn.svg
		case 1393:
			return SVGIcons.skipEndBtn(height, width, className);
		// skip-end-circle-fill.svg
		case 1394:
			return SVGIcons.skipEndCircleFill(height, width, className);
		// skip-end-circle.svg
		case 1395:
			return SVGIcons.skipEndCircle(height, width, className);
		// skip-end-fill.svg
		case 1396:
			return SVGIcons.skipEndFill(height, width, className);
		// skip-end.svg
		case 1397:
			return SVGIcons.skipEnd(height, width, className);
		// skip-forward-btn-fill.svg
		case 1398:
			return SVGIcons.skipForwardBtnFill(height, width, className);
		// skip-forward-btn.svg
		case 1399:
			return SVGIcons.skipForwardBtn(height, width, className);
		// skip-forward-circle-fill.svg
		case 1400:
			return SVGIcons.skipForwardCircleFill(height, width, className);
		// skip-forward-circle.svg
		case 1401:
			return SVGIcons.skipForwardCircle(height, width, className);
		// skip-forward-fill.svg
		case 1402:
			return SVGIcons.skipForwardFill(height, width, className);
		// skip-forward.svg
		case 1403:
			return SVGIcons.skipForward(height, width, className);
		// skip-start-btn-fill.svg
		case 1404:
			return SVGIcons.skipStartBtnFill(height, width, className);
		// skip-start-btn.svg
		case 1405:
			return SVGIcons.skipStartBtn(height, width, className);
		// skip-start-circle-fill.svg
		case 1406:
			return SVGIcons.skipStartCircleFill(height, width, className);
		// skip-start-circle.svg
		case 1407:
			return SVGIcons.skipStartCircle(height, width, className);
		// skip-start-fill.svg
		case 1408:
			return SVGIcons.skipStartFill(height, width, className);
		// skip-start.svg
		case 1409:
			return SVGIcons.skipStart(height, width, className);
		// skype.svg
		case 1410:
			return SVGIcons.skype(height, width, className);
		// slack.svg
		case 1411:
			return SVGIcons.slack(height, width, className);
		// slash-circle-fill.svg
		case 1412:
			return SVGIcons.slashCircleFill(height, width, className);
		// slash-circle.svg
		case 1413:
			return SVGIcons.slashCircle(height, width, className);
		// slash-lg.svg
		case 1414:
			return SVGIcons.slashLg(height, width, className);
		// slash-square-fill.svg
		case 1415:
			return SVGIcons.slashSquareFill(height, width, className);
		// slash-square.svg
		case 1416:
			return SVGIcons.slashSquare(height, width, className);
		// slash.svg
		case 1417:
			return SVGIcons.slash(height, width, className);
		// sliders.svg
		case 1418:
			return SVGIcons.sliders(height, width, className);
		// sliders2-vertical.svg
		case 1419:
			return SVGIcons.sliders2Vertical(height, width, className);
		// sliders2.svg
		case 1420:
			return SVGIcons.sliders2(height, width, className);
		// smartwatch.svg
		case 1421:
			return SVGIcons.smartwatch(height, width, className);
		// snapchat.svg
		case 1422:
			return SVGIcons.snapchat(height, width, className);
		// snow.svg
		case 1423:
			return SVGIcons.snow(height, width, className);
		// snow2.svg
		case 1424:
			return SVGIcons.snow2(height, width, className);
		// snow3.svg
		case 1425:
			return SVGIcons.snow3(height, width, className);
		// sort-alpha-down-alt.svg
		case 1426:
			return SVGIcons.sortAlphaDownAlt(height, width, className);
		// sort-alpha-down.svg
		case 1427:
			return SVGIcons.sortAlphaDown(height, width, className);
		// sort-alpha-up-alt.svg
		case 1428:
			return SVGIcons.sortAlphaUpAlt(height, width, className);
		// sort-alpha-up.svg
		case 1429:
			return SVGIcons.sortAlphaUp(height, width, className);
		// sort-down-alt.svg
		case 1430:
			return SVGIcons.sortDownAlt(height, width, className);
		// sort-down.svg
		case 1431:
			return SVGIcons.sortDown(height, width, className);
		// sort-numeric-down-alt.svg
		case 1432:
			return SVGIcons.sortNumericDownAlt(height, width, className);
		// sort-numeric-down.svg
		case 1433:
			return SVGIcons.sortNumericDown(height, width, className);
		// sort-numeric-up-alt.svg
		case 1434:
			return SVGIcons.sortNumericUpAlt(height, width, className);
		// sort-numeric-up.svg
		case 1435:
			return SVGIcons.sortNumericUp(height, width, className);
		// sort-up-alt.svg
		case 1436:
			return SVGIcons.sortUpAlt(height, width, className);
		// sort-up.svg
		case 1437:
			return SVGIcons.sortUp(height, width, className);
		// soundwave.svg
		case 1438:
			return SVGIcons.soundwave(height, width, className);
		// speaker-fill.svg
		case 1439:
			return SVGIcons.speakerFill(height, width, className);
		// speaker.svg
		case 1440:
			return SVGIcons.speaker(height, width, className);
		// speedometer.svg
		case 1441:
			return SVGIcons.speedometer(height, width, className);
		// speedometer2.svg
		case 1442:
			return SVGIcons.speedometer2(height, width, className);
		// spellcheck.svg
		case 1443:
			return SVGIcons.spellcheck(height, width, className);
		// spotify.svg
		case 1444:
			return SVGIcons.spotify(height, width, className);
		// square-fill.svg
		case 1445:
			return SVGIcons.squareFill(height, width, className);
		// square-half.svg
		case 1446:
			return SVGIcons.squareHalf(height, width, className);
		// square.svg
		case 1447:
			return SVGIcons.square(height, width, className);
		// stack-overflow.svg
		case 1448:
			return SVGIcons.stackOverflow(height, width, className);
		// stack.svg
		case 1449:
			return SVGIcons.stack(height, width, className);
		// star-fill.svg
		case 1450:
			return SVGIcons.starFill(height, width, className);
		// star-half.svg
		case 1451:
			return SVGIcons.starHalf(height, width, className);
		// star.svg
		case 1452:
			return SVGIcons.star(height, width, className);
		// stars.svg
		case 1453:
			return SVGIcons.stars(height, width, className);
		// steam.svg
		case 1454:
			return SVGIcons.steam(height, width, className);
		// stickies-fill.svg
		case 1455:
			return SVGIcons.stickiesFill(height, width, className);
		// stickies.svg
		case 1456:
			return SVGIcons.stickies(height, width, className);
		// sticky-fill.svg
		case 1457:
			return SVGIcons.stickyFill(height, width, className);
		// sticky.svg
		case 1458:
			return SVGIcons.sticky(height, width, className);
		// stop-btn-fill.svg
		case 1459:
			return SVGIcons.stopBtnFill(height, width, className);
		// stop-btn.svg
		case 1460:
			return SVGIcons.stopBtn(height, width, className);
		// stop-circle-fill.svg
		case 1461:
			return SVGIcons.stopCircleFill(height, width, className);
		// stop-circle.svg
		case 1462:
			return SVGIcons.stopCircle(height, width, className);
		// stop-fill.svg
		case 1463:
			return SVGIcons.stopFill(height, width, className);
		// stop.svg
		case 1464:
			return SVGIcons.stop(height, width, className);
		// stoplights-fill.svg
		case 1465:
			return SVGIcons.stoplightsFill(height, width, className);
		// stoplights.svg
		case 1466:
			return SVGIcons.stoplights(height, width, className);
		// stopwatch-fill.svg
		case 1467:
			return SVGIcons.stopwatchFill(height, width, className);
		// stopwatch.svg
		case 1468:
			return SVGIcons.stopwatch(height, width, className);
		// strava.svg
		case 1469:
			return SVGIcons.strava(height, width, className);
		// subtract.svg
		case 1470:
			return SVGIcons.subtract(height, width, className);
		// suit-club-fill.svg
		case 1471:
			return SVGIcons.suitClubFill(height, width, className);
		// suit-club.svg
		case 1472:
			return SVGIcons.suitClub(height, width, className);
		// suit-diamond-fill.svg
		case 1473:
			return SVGIcons.suitDiamondFill(height, width, className);
		// suit-diamond.svg
		case 1474:
			return SVGIcons.suitDiamond(height, width, className);
		// suit-heart-fill.svg
		case 1475:
			return SVGIcons.suitHeartFill(height, width, className);
		// suit-heart.svg
		case 1476:
			return SVGIcons.suitHeart(height, width, className);
		// suit-spade-fill.svg
		case 1477:
			return SVGIcons.suitSpadeFill(height, width, className);
		// suit-spade.svg
		case 1478:
			return SVGIcons.suitSpade(height, width, className);
		// sun-fill.svg
		case 1479:
			return SVGIcons.sunFill(height, width, className);
		// sun.svg
		case 1480:
			return SVGIcons.sun(height, width, className);
		// sunglasses.svg
		case 1481:
			return SVGIcons.sunglasses(height, width, className);
		// sunrise-fill.svg
		case 1482:
			return SVGIcons.sunriseFill(height, width, className);
		// sunrise.svg
		case 1483:
			return SVGIcons.sunrise(height, width, className);
		// sunset-fill.svg
		case 1484:
			return SVGIcons.sunsetFill(height, width, className);
		// sunset.svg
		case 1485:
			return SVGIcons.sunset(height, width, className);
		// symmetry-horizontal.svg
		case 1486:
			return SVGIcons.symmetryHorizontal(height, width, className);
		// symmetry-vertical.svg
		case 1487:
			return SVGIcons.symmetryVertical(height, width, className);
		// table.svg
		case 1488:
			return SVGIcons.table(height, width, className);
		// tablet-fill.svg
		case 1489:
			return SVGIcons.tabletFill(height, width, className);
		// tablet-landscape-fill.svg
		case 1490:
			return SVGIcons.tabletLandscapeFill(height, width, className);
		// tablet-landscape.svg
		case 1491:
			return SVGIcons.tabletLandscape(height, width, className);
		// tablet.svg
		case 1492:
			return SVGIcons.tablet(height, width, className);
		// tag-fill.svg
		case 1493:
			return SVGIcons.tagFill(height, width, className);
		// tag.svg
		case 1494:
			return SVGIcons.tag(height, width, className);
		// tags-fill.svg
		case 1495:
			return SVGIcons.tagsFill(height, width, className);
		// tags.svg
		case 1496:
			return SVGIcons.tags(height, width, className);
		// telegram.svg
		case 1497:
			return SVGIcons.telegram(height, width, className);
		// telephone-fill.svg
		case 1498:
			return SVGIcons.telephoneFill(height, width, className);
		// telephone-forward-fill.svg
		case 1499:
			return SVGIcons.telephoneForwardFill(height, width, className);
		// telephone-forward.svg
		case 1500:
			return SVGIcons.telephoneForward(height, width, className);
		// telephone-inbound-fill.svg
		case 1501:
			return SVGIcons.telephoneInboundFill(height, width, className);
		// telephone-inbound.svg
		case 1502:
			return SVGIcons.telephoneInbound(height, width, className);
		// telephone-minus-fill.svg
		case 1503:
			return SVGIcons.telephoneMinusFill(height, width, className);
		// telephone-minus.svg
		case 1504:
			return SVGIcons.telephoneMinus(height, width, className);
		// telephone-outbound-fill.svg
		case 1505:
			return SVGIcons.telephoneOutboundFill(height, width, className);
		// telephone-outbound.svg
		case 1506:
			return SVGIcons.telephoneOutbound(height, width, className);
		// telephone-plus-fill.svg
		case 1507:
			return SVGIcons.telephonePlusFill(height, width, className);
		// telephone-plus.svg
		case 1508:
			return SVGIcons.telephonePlus(height, width, className);
		// telephone-x-fill.svg
		case 1509:
			return SVGIcons.telephoneXFill(height, width, className);
		// telephone-x.svg
		case 1510:
			return SVGIcons.telephoneX(height, width, className);
		// telephone.svg
		case 1511:
			return SVGIcons.telephone(height, width, className);
		// terminal-dash.svg
		case 1512:
			return SVGIcons.terminalDash(height, width, className);
		// terminal-fill.svg
		case 1513:
			return SVGIcons.terminalFill(height, width, className);
		// terminal-plus.svg
		case 1514:
			return SVGIcons.terminalPlus(height, width, className);
		// terminal-split.svg
		case 1515:
			return SVGIcons.terminalSplit(height, width, className);
		// terminal-x.svg
		case 1516:
			return SVGIcons.terminalX(height, width, className);
		// terminal.svg
		case 1517:
			return SVGIcons.terminal(height, width, className);
		// text-center.svg
		case 1518:
			return SVGIcons.textCenter(height, width, className);
		// text-indent-left.svg
		case 1519:
			return SVGIcons.textIndentLeft(height, width, className);
		// text-indent-right.svg
		case 1520:
			return SVGIcons.textIndentRight(height, width, className);
		// text-left.svg
		case 1521:
			return SVGIcons.textLeft(height, width, className);
		// text-paragraph.svg
		case 1522:
			return SVGIcons.textParagraph(height, width, className);
		// text-right.svg
		case 1523:
			return SVGIcons.textRight(height, width, className);
		// textarea-resize.svg
		case 1524:
			return SVGIcons.textareaResize(height, width, className);
		// textarea-t.svg
		case 1525:
			return SVGIcons.textareaT(height, width, className);
		// textarea.svg
		case 1526:
			return SVGIcons.textarea(height, width, className);
		// thermometer-half.svg
		case 1527:
			return SVGIcons.thermometerHalf(height, width, className);
		// thermometer-high.svg
		case 1528:
			return SVGIcons.thermometerHigh(height, width, className);
		// thermometer-low.svg
		case 1529:
			return SVGIcons.thermometerLow(height, width, className);
		// thermometer-snow.svg
		case 1530:
			return SVGIcons.thermometerSnow(height, width, className);
		// thermometer-sun.svg
		case 1531:
			return SVGIcons.thermometerSun(height, width, className);
		// thermometer.svg
		case 1532:
			return SVGIcons.thermometer(height, width, className);
		// three-dots-vertical.svg
		case 1533:
			return SVGIcons.threeDotsVertical(height, width, className);
		// three-dots.svg
		case 1534:
			return SVGIcons.threeDots(height, width, className);
		// thunderbolt-fill.svg
		case 1535:
			return SVGIcons.thunderboltFill(height, width, className);
		// thunderbolt.svg
		case 1536:
			return SVGIcons.thunderbolt(height, width, className);
		// ticket-detailed-fill.svg
		case 1537:
			return SVGIcons.ticketDetailedFill(height, width, className);
		// ticket-detailed.svg
		case 1538:
			return SVGIcons.ticketDetailed(height, width, className);
		// ticket-fill.svg
		case 1539:
			return SVGIcons.ticketFill(height, width, className);
		// ticket-perforated-fill.svg
		case 1540:
			return SVGIcons.ticketPerforatedFill(height, width, className);
		// ticket-perforated.svg
		case 1541:
			return SVGIcons.ticketPerforated(height, width, className);
		// ticket.svg
		case 1542:
			return SVGIcons.ticket(height, width, className);
		// tiktok.svg
		case 1543:
			return SVGIcons.tiktok(height, width, className);
		// toggle-off.svg
		case 1544:
			return SVGIcons.toggleOff(height, width, className);
		// toggle-on.svg
		case 1545:
			return SVGIcons.toggleOn(height, width, className);
		// toggle2-off.svg
		case 1546:
			return SVGIcons.toggle2Off(height, width, className);
		// toggle2-on.svg
		case 1547:
			return SVGIcons.toggle2On(height, width, className);
		// toggles.svg
		case 1548:
			return SVGIcons.toggles(height, width, className);
		// toggles2.svg
		case 1549:
			return SVGIcons.toggles2(height, width, className);
		// tools.svg
		case 1550:
			return SVGIcons.tools(height, width, className);
		// tornado.svg
		case 1551:
			return SVGIcons.tornado(height, width, className);
		// translate.svg
		case 1552:
			return SVGIcons.translate(height, width, className);
		// trash-fill.svg
		case 1553:
			return SVGIcons.trashFill(height, width, className);
		// trash.svg
		case 1554:
			return SVGIcons.trash(height, width, className);
		// trash2-fill.svg
		case 1555:
			return SVGIcons.trash2Fill(height, width, className);
		// trash2.svg
		case 1556:
			return SVGIcons.trash2(height, width, className);
		// trash3-fill.svg
		case 1557:
			return SVGIcons.trash3Fill(height, width, className);
		// trash3.svg
		case 1558:
			return SVGIcons.trash3(height, width, className);
		// tree-fill.svg
		case 1559:
			return SVGIcons.treeFill(height, width, className);
		// tree.svg
		case 1560:
			return SVGIcons.tree(height, width, className);
		// triangle-fill.svg
		case 1561:
			return SVGIcons.triangleFill(height, width, className);
		// triangle-half.svg
		case 1562:
			return SVGIcons.triangleHalf(height, width, className);
		// triangle.svg
		case 1563:
			return SVGIcons.triangle(height, width, className);
		// trophy-fill.svg
		case 1564:
			return SVGIcons.trophyFill(height, width, className);
		// trophy.svg
		case 1565:
			return SVGIcons.trophy(height, width, className);
		// tropical-storm.svg
		case 1566:
			return SVGIcons.tropicalStorm(height, width, className);
		// truck-flatbed.svg
		case 1567:
			return SVGIcons.truckFlatbed(height, width, className);
		// truck.svg
		case 1568:
			return SVGIcons.truck(height, width, className);
		// tsunami.svg
		case 1569:
			return SVGIcons.tsunami(height, width, className);
		// tv-fill.svg
		case 1570:
			return SVGIcons.tvFill(height, width, className);
		// tv.svg
		case 1571:
			return SVGIcons.tv(height, width, className);
		// twitch.svg
		case 1572:
			return SVGIcons.twitch(height, width, className);
		// twitter.svg
		case 1573:
			return SVGIcons.twitter(height, width, className);
		// type-bold.svg
		case 1574:
			return SVGIcons.typeBold(height, width, className);
		// type-h1.svg
		case 1575:
			return SVGIcons.typeH1(height, width, className);
		// type-h2.svg
		case 1576:
			return SVGIcons.typeH2(height, width, className);
		// type-h3.svg
		case 1577:
			return SVGIcons.typeH3(height, width, className);
		// type-italic.svg
		case 1578:
			return SVGIcons.typeItalic(height, width, className);
		// type-strikethrough.svg
		case 1579:
			return SVGIcons.typeStrikethrough(height, width, className);
		// type-underline.svg
		case 1580:
			return SVGIcons.typeUnderline(height, width, className);
		// type.svg
		case 1581:
			return SVGIcons.type(height, width, className);
		// ui-checks-grid.svg
		case 1582:
			return SVGIcons.uiChecksGrid(height, width, className);
		// ui-checks.svg
		case 1583:
			return SVGIcons.uiChecks(height, width, className);
		// ui-radios-grid.svg
		case 1584:
			return SVGIcons.uiRadiosGrid(height, width, className);
		// ui-radios.svg
		case 1585:
			return SVGIcons.uiRadios(height, width, className);
		// umbrella-fill.svg
		case 1586:
			return SVGIcons.umbrellaFill(height, width, className);
		// umbrella.svg
		case 1587:
			return SVGIcons.umbrella(height, width, className);
		// union.svg
		case 1588:
			return SVGIcons.union(height, width, className);
		// unlock-fill.svg
		case 1589:
			return SVGIcons.unlockFill(height, width, className);
		// unlock.svg
		case 1590:
			return SVGIcons.unlock(height, width, className);
		// upc-scan.svg
		case 1591:
			return SVGIcons.upcScan(height, width, className);
		// upc.svg
		case 1592:
			return SVGIcons.upc(height, width, className);
		// upload.svg
		case 1593:
			return SVGIcons.upload(height, width, className);
		// usb-c-fill.svg
		case 1594:
			return SVGIcons.usbCFill(height, width, className);
		// usb-c.svg
		case 1595:
			return SVGIcons.usbC(height, width, className);
		// usb-drive-fill.svg
		case 1596:
			return SVGIcons.usbDriveFill(height, width, className);
		// usb-drive.svg
		case 1597:
			return SVGIcons.usbDrive(height, width, className);
		// usb-fill.svg
		case 1598:
			return SVGIcons.usbFill(height, width, className);
		// usb-micro-fill.svg
		case 1599:
			return SVGIcons.usbMicroFill(height, width, className);
		// usb-micro.svg
		case 1600:
			return SVGIcons.usbMicro(height, width, className);
		// usb-mini-fill.svg
		case 1601:
			return SVGIcons.usbMiniFill(height, width, className);
		// usb-mini.svg
		case 1602:
			return SVGIcons.usbMini(height, width, className);
		// usb-plug-fill.svg
		case 1603:
			return SVGIcons.usbPlugFill(height, width, className);
		// usb-plug.svg
		case 1604:
			return SVGIcons.usbPlug(height, width, className);
		// usb-symbol.svg
		case 1605:
			return SVGIcons.usbSymbol(height, width, className);
		// usb.svg
		case 1606:
			return SVGIcons.usb(height, width, className);
		// valentine.svg
		case 1607:
			return SVGIcons.valentine(height, width, className);
		// valentine2.svg
		case 1608:
			return SVGIcons.valentine2(height, width, className);
		// vector-pen.svg
		case 1609:
			return SVGIcons.vectorPen(height, width, className);
		// view-list.svg
		case 1610:
			return SVGIcons.viewList(height, width, className);
		// view-stacked.svg
		case 1611:
			return SVGIcons.viewStacked(height, width, className);
		// vimeo.svg
		case 1612:
			return SVGIcons.vimeo(height, width, className);
		// vinyl-fill.svg
		case 1613:
			return SVGIcons.vinylFill(height, width, className);
		// vinyl.svg
		case 1614:
			return SVGIcons.vinyl(height, width, className);
		// voicemail.svg
		case 1615:
			return SVGIcons.voicemail(height, width, className);
		// volume-down-fill.svg
		case 1616:
			return SVGIcons.volumeDownFill(height, width, className);
		// volume-down.svg
		case 1617:
			return SVGIcons.volumeDown(height, width, className);
		// volume-mute-fill.svg
		case 1618:
			return SVGIcons.volumeMuteFill(height, width, className);
		// volume-mute.svg
		case 1619:
			return SVGIcons.volumeMute(height, width, className);
		// volume-off-fill.svg
		case 1620:
			return SVGIcons.volumeOffFill(height, width, className);
		// volume-off.svg
		case 1621:
			return SVGIcons.volumeOff(height, width, className);
		// volume-up-fill.svg
		case 1622:
			return SVGIcons.volumeUpFill(height, width, className);
		// volume-up.svg
		case 1623:
			return SVGIcons.volumeUp(height, width, className);
		// vr.svg
		case 1624:
			return SVGIcons.vr(height, width, className);
		// wallet-fill.svg
		case 1625:
			return SVGIcons.walletFill(height, width, className);
		// wallet.svg
		case 1626:
			return SVGIcons.wallet(height, width, className);
		// wallet2.svg
		case 1627:
			return SVGIcons.wallet2(height, width, className);
		// watch.svg
		case 1628:
			return SVGIcons.watch(height, width, className);
		// water.svg
		case 1629:
			return SVGIcons.water(height, width, className);
		// webcam-fill.svg
		case 1630:
			return SVGIcons.webcamFill(height, width, className);
		// webcam.svg
		case 1631:
			return SVGIcons.webcam(height, width, className);
		// whatsapp.svg
		case 1632:
			return SVGIcons.whatsapp(height, width, className);
		// wifi-1.svg
		case 1633:
			return SVGIcons.wifi1(height, width, className);
		// wifi-2.svg
		case 1634:
			return SVGIcons.wifi2(height, width, className);
		// wifi-off.svg
		case 1635:
			return SVGIcons.wifiOff(height, width, className);
		// wifi.svg
		case 1636:
			return SVGIcons.wifi(height, width, className);
		// wind.svg
		case 1637:
			return SVGIcons.wind(height, width, className);
		// window-dash.svg
		case 1638:
			return SVGIcons.windowDash(height, width, className);
		// window-desktop.svg
		case 1639:
			return SVGIcons.windowDesktop(height, width, className);
		// window-dock.svg
		case 1640:
			return SVGIcons.windowDock(height, width, className);
		// window-fullscreen.svg
		case 1641:
			return SVGIcons.windowFullscreen(height, width, className);
		// window-plus.svg
		case 1642:
			return SVGIcons.windowPlus(height, width, className);
		// window-sidebar.svg
		case 1643:
			return SVGIcons.windowSidebar(height, width, className);
		// window-split.svg
		case 1644:
			return SVGIcons.windowSplit(height, width, className);
		// window-stack.svg
		case 1645:
			return SVGIcons.windowStack(height, width, className);
		// window-x.svg
		case 1646:
			return SVGIcons.windowX(height, width, className);
		// window.svg
		case 1647:
			return SVGIcons.appWindow(height, width, className);
		// windows.svg
		case 1648:
			return SVGIcons.windows(height, width, className);
		// wordpress.svg
		case 1649:
			return SVGIcons.wordpress(height, width, className);
		// wrench-adjustable-circle-fill.svg
		case 1650:
			return SVGIcons.wrenchAdjustableCircleFill(height, width, className);
		// wrench-adjustable-circle.svg
		case 1651:
			return SVGIcons.wrenchAdjustableCircle(height, width, className);
		// wrench-adjustable.svg
		case 1652:
			return SVGIcons.wrenchAdjustable(height, width, className);
		// wrench.svg
		case 1653:
			return SVGIcons.wrench(height, width, className);
		// x-circle-fill.svg
		case 1654:
			return SVGIcons.xCircleFill(height, width, className);
		// x-circle.svg
		case 1655:
			return SVGIcons.xCircle(height, width, className);
		// x-diamond-fill.svg
		case 1656:
			return SVGIcons.xDiamondFill(height, width, className);
		// x-diamond.svg
		case 1657:
			return SVGIcons.xDiamond(height, width, className);
		// x-lg.svg
		case 1658:
			return SVGIcons.xLg(height, width, className);
		// x-octagon-fill.svg
		case 1659:
			return SVGIcons.xOctagonFill(height, width, className);
		// x-octagon.svg
		case 1660:
			return SVGIcons.xOctagon(height, width, className);
		// x-square-fill.svg
		case 1661:
			return SVGIcons.xSquareFill(height, width, className);
		// x-square.svg
		case 1662:
			return SVGIcons.xSquare(height, width, className);
		// x.svg
		case 1663:
			return SVGIcons.x(height, width, className);
		// xbox.svg
		case 1664:
			return SVGIcons.xbox(height, width, className);
		// yin-yang.svg
		case 1665:
			return SVGIcons.yinYang(height, width, className);
		// youtube.svg
		case 1666:
			return SVGIcons.youtube(height, width, className);
		// zoom-in.svg
		case 1667:
			return SVGIcons.zoomIn(height, width, className);
		// zoom-out.svg
		case 1668:
			return SVGIcons.zoomOut(height, width, className);
	}
}