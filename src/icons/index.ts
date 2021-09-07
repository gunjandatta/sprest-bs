export * from "./iconTypes";
// Icons to import
import * as SVGIcons from "./svgs";

// Renders an icon by type
export const Icons = (iconType:number, height?:number, width?:number) => {
	// See which icon is selected
	switch(iconType) {
		// alarm-fill.svg
		case 1:
			return SVGIcons.alarmFill(height, width);
		// alarm.svg
		case 2:
			return SVGIcons.alarm(height, width);
		// align-bottom.svg
		case 3:
			return SVGIcons.alignBottom(height, width);
		// align-center.svg
		case 4:
			return SVGIcons.alignCenter(height, width);
		// align-end.svg
		case 5:
			return SVGIcons.alignEnd(height, width);
		// align-middle.svg
		case 6:
			return SVGIcons.alignMiddle(height, width);
		// align-start.svg
		case 7:
			return SVGIcons.alignStart(height, width);
		// align-top.svg
		case 8:
			return SVGIcons.alignTop(height, width);
		// alt.svg
		case 9:
			return SVGIcons.alt(height, width);
		// app-indicator.svg
		case 10:
			return SVGIcons.appIndicator(height, width);
		// app.svg
		case 11:
			return SVGIcons.app(height, width);
		// archive-fill.svg
		case 12:
			return SVGIcons.archiveFill(height, width);
		// archive.svg
		case 13:
			return SVGIcons.archive(height, width);
		// arrow-90deg-down.svg
		case 14:
			return SVGIcons.arrow90degDown(height, width);
		// arrow-90deg-left.svg
		case 15:
			return SVGIcons.arrow90degLeft(height, width);
		// arrow-90deg-right.svg
		case 16:
			return SVGIcons.arrow90degRight(height, width);
		// arrow-90deg-up.svg
		case 17:
			return SVGIcons.arrow90degUp(height, width);
		// arrow-bar-down.svg
		case 18:
			return SVGIcons.arrowBarDown(height, width);
		// arrow-bar-left.svg
		case 19:
			return SVGIcons.arrowBarLeft(height, width);
		// arrow-bar-right.svg
		case 20:
			return SVGIcons.arrowBarRight(height, width);
		// arrow-bar-up.svg
		case 21:
			return SVGIcons.arrowBarUp(height, width);
		// arrow-clockwise.svg
		case 22:
			return SVGIcons.arrowClockwise(height, width);
		// arrow-counterclockwise.svg
		case 23:
			return SVGIcons.arrowCounterclockwise(height, width);
		// arrow-down-circle-fill.svg
		case 24:
			return SVGIcons.arrowDownCircleFill(height, width);
		// arrow-down-circle.svg
		case 25:
			return SVGIcons.arrowDownCircle(height, width);
		// arrow-down-left-circle-fill.svg
		case 26:
			return SVGIcons.arrowDownLeftCircleFill(height, width);
		// arrow-down-left-circle.svg
		case 27:
			return SVGIcons.arrowDownLeftCircle(height, width);
		// arrow-down-left-square-fill.svg
		case 28:
			return SVGIcons.arrowDownLeftSquareFill(height, width);
		// arrow-down-left-square.svg
		case 29:
			return SVGIcons.arrowDownLeftSquare(height, width);
		// arrow-down-left.svg
		case 30:
			return SVGIcons.arrowDownLeft(height, width);
		// arrow-down-right-circle-fill.svg
		case 31:
			return SVGIcons.arrowDownRightCircleFill(height, width);
		// arrow-down-right-circle.svg
		case 32:
			return SVGIcons.arrowDownRightCircle(height, width);
		// arrow-down-right-square-fill.svg
		case 33:
			return SVGIcons.arrowDownRightSquareFill(height, width);
		// arrow-down-right-square.svg
		case 34:
			return SVGIcons.arrowDownRightSquare(height, width);
		// arrow-down-right.svg
		case 35:
			return SVGIcons.arrowDownRight(height, width);
		// arrow-down-short.svg
		case 36:
			return SVGIcons.arrowDownShort(height, width);
		// arrow-down-square-fill.svg
		case 37:
			return SVGIcons.arrowDownSquareFill(height, width);
		// arrow-down-square.svg
		case 38:
			return SVGIcons.arrowDownSquare(height, width);
		// arrow-down-up.svg
		case 39:
			return SVGIcons.arrowDownUp(height, width);
		// arrow-down.svg
		case 40:
			return SVGIcons.arrowDown(height, width);
		// arrow-left-circle-fill.svg
		case 41:
			return SVGIcons.arrowLeftCircleFill(height, width);
		// arrow-left-circle.svg
		case 42:
			return SVGIcons.arrowLeftCircle(height, width);
		// arrow-left-right.svg
		case 43:
			return SVGIcons.arrowLeftRight(height, width);
		// arrow-left-short.svg
		case 44:
			return SVGIcons.arrowLeftShort(height, width);
		// arrow-left-square-fill.svg
		case 45:
			return SVGIcons.arrowLeftSquareFill(height, width);
		// arrow-left-square.svg
		case 46:
			return SVGIcons.arrowLeftSquare(height, width);
		// arrow-left.svg
		case 47:
			return SVGIcons.arrowLeft(height, width);
		// arrow-repeat.svg
		case 48:
			return SVGIcons.arrowRepeat(height, width);
		// arrow-return-left.svg
		case 49:
			return SVGIcons.arrowReturnLeft(height, width);
		// arrow-return-right.svg
		case 50:
			return SVGIcons.arrowReturnRight(height, width);
		// arrow-right-circle-fill.svg
		case 51:
			return SVGIcons.arrowRightCircleFill(height, width);
		// arrow-right-circle.svg
		case 52:
			return SVGIcons.arrowRightCircle(height, width);
		// arrow-right-short.svg
		case 53:
			return SVGIcons.arrowRightShort(height, width);
		// arrow-right-square-fill.svg
		case 54:
			return SVGIcons.arrowRightSquareFill(height, width);
		// arrow-right-square.svg
		case 55:
			return SVGIcons.arrowRightSquare(height, width);
		// arrow-right.svg
		case 56:
			return SVGIcons.arrowRight(height, width);
		// arrow-up-circle-fill.svg
		case 57:
			return SVGIcons.arrowUpCircleFill(height, width);
		// arrow-up-circle.svg
		case 58:
			return SVGIcons.arrowUpCircle(height, width);
		// arrow-up-left-circle-fill.svg
		case 59:
			return SVGIcons.arrowUpLeftCircleFill(height, width);
		// arrow-up-left-circle.svg
		case 60:
			return SVGIcons.arrowUpLeftCircle(height, width);
		// arrow-up-left-square-fill.svg
		case 61:
			return SVGIcons.arrowUpLeftSquareFill(height, width);
		// arrow-up-left-square.svg
		case 62:
			return SVGIcons.arrowUpLeftSquare(height, width);
		// arrow-up-left.svg
		case 63:
			return SVGIcons.arrowUpLeft(height, width);
		// arrow-up-right-circle-fill.svg
		case 64:
			return SVGIcons.arrowUpRightCircleFill(height, width);
		// arrow-up-right-circle.svg
		case 65:
			return SVGIcons.arrowUpRightCircle(height, width);
		// arrow-up-right-square-fill.svg
		case 66:
			return SVGIcons.arrowUpRightSquareFill(height, width);
		// arrow-up-right-square.svg
		case 67:
			return SVGIcons.arrowUpRightSquare(height, width);
		// arrow-up-right.svg
		case 68:
			return SVGIcons.arrowUpRight(height, width);
		// arrow-up-short.svg
		case 69:
			return SVGIcons.arrowUpShort(height, width);
		// arrow-up-square-fill.svg
		case 70:
			return SVGIcons.arrowUpSquareFill(height, width);
		// arrow-up-square.svg
		case 71:
			return SVGIcons.arrowUpSquare(height, width);
		// arrow-up.svg
		case 72:
			return SVGIcons.arrowUp(height, width);
		// arrows-angle-contract.svg
		case 73:
			return SVGIcons.arrowsAngleContract(height, width);
		// arrows-angle-expand.svg
		case 74:
			return SVGIcons.arrowsAngleExpand(height, width);
		// arrows-collapse.svg
		case 75:
			return SVGIcons.arrowsCollapse(height, width);
		// arrows-expand.svg
		case 76:
			return SVGIcons.arrowsExpand(height, width);
		// arrows-fullscreen.svg
		case 77:
			return SVGIcons.arrowsFullscreen(height, width);
		// arrows-move.svg
		case 78:
			return SVGIcons.arrowsMove(height, width);
		// aspect-ratio-fill.svg
		case 79:
			return SVGIcons.aspectRatioFill(height, width);
		// aspect-ratio.svg
		case 80:
			return SVGIcons.aspectRatio(height, width);
		// asterisk.svg
		case 81:
			return SVGIcons.asterisk(height, width);
		// at.svg
		case 82:
			return SVGIcons.at(height, width);
		// award-fill.svg
		case 83:
			return SVGIcons.awardFill(height, width);
		// award.svg
		case 84:
			return SVGIcons.award(height, width);
		// back.svg
		case 85:
			return SVGIcons.back(height, width);
		// backspace-fill.svg
		case 86:
			return SVGIcons.backspaceFill(height, width);
		// backspace-reverse-fill.svg
		case 87:
			return SVGIcons.backspaceReverseFill(height, width);
		// backspace-reverse.svg
		case 88:
			return SVGIcons.backspaceReverse(height, width);
		// backspace.svg
		case 89:
			return SVGIcons.backspace(height, width);
		// badge-3d-fill.svg
		case 90:
			return SVGIcons.badge3dFill(height, width);
		// badge-3d.svg
		case 91:
			return SVGIcons.badge3d(height, width);
		// badge-4k-fill.svg
		case 92:
			return SVGIcons.badge4kFill(height, width);
		// badge-4k.svg
		case 93:
			return SVGIcons.badge4k(height, width);
		// badge-8k-fill.svg
		case 94:
			return SVGIcons.badge8kFill(height, width);
		// badge-8k.svg
		case 95:
			return SVGIcons.badge8k(height, width);
		// badge-ad-fill.svg
		case 96:
			return SVGIcons.badgeAdFill(height, width);
		// badge-ad.svg
		case 97:
			return SVGIcons.badgeAd(height, width);
		// badge-ar-fill.svg
		case 98:
			return SVGIcons.badgeArFill(height, width);
		// badge-ar.svg
		case 99:
			return SVGIcons.badgeAr(height, width);
		// badge-cc-fill.svg
		case 100:
			return SVGIcons.badgeCcFill(height, width);
		// badge-cc.svg
		case 101:
			return SVGIcons.badgeCc(height, width);
		// badge-hd-fill.svg
		case 102:
			return SVGIcons.badgeHdFill(height, width);
		// badge-hd.svg
		case 103:
			return SVGIcons.badgeHd(height, width);
		// badge-tm-fill.svg
		case 104:
			return SVGIcons.badgeTmFill(height, width);
		// badge-tm.svg
		case 105:
			return SVGIcons.badgeTm(height, width);
		// badge-vo-fill.svg
		case 106:
			return SVGIcons.badgeVoFill(height, width);
		// badge-vo.svg
		case 107:
			return SVGIcons.badgeVo(height, width);
		// badge-vr-fill.svg
		case 108:
			return SVGIcons.badgeVrFill(height, width);
		// badge-vr.svg
		case 109:
			return SVGIcons.badgeVr(height, width);
		// badge-wc-fill.svg
		case 110:
			return SVGIcons.badgeWcFill(height, width);
		// badge-wc.svg
		case 111:
			return SVGIcons.badgeWc(height, width);
		// bag-check-fill.svg
		case 112:
			return SVGIcons.bagCheckFill(height, width);
		// bag-check.svg
		case 113:
			return SVGIcons.bagCheck(height, width);
		// bag-dash-fill.svg
		case 114:
			return SVGIcons.bagDashFill(height, width);
		// bag-dash.svg
		case 115:
			return SVGIcons.bagDash(height, width);
		// bag-fill.svg
		case 116:
			return SVGIcons.bagFill(height, width);
		// bag-plus-fill.svg
		case 117:
			return SVGIcons.bagPlusFill(height, width);
		// bag-plus.svg
		case 118:
			return SVGIcons.bagPlus(height, width);
		// bag-x-fill.svg
		case 119:
			return SVGIcons.bagXFill(height, width);
		// bag-x.svg
		case 120:
			return SVGIcons.bagX(height, width);
		// bag.svg
		case 121:
			return SVGIcons.bag(height, width);
		// bank.svg
		case 122:
			return SVGIcons.bank(height, width);
		// bank2.svg
		case 123:
			return SVGIcons.bank2(height, width);
		// bar-chart-fill.svg
		case 124:
			return SVGIcons.barChartFill(height, width);
		// bar-chart-line-fill.svg
		case 125:
			return SVGIcons.barChartLineFill(height, width);
		// bar-chart-line.svg
		case 126:
			return SVGIcons.barChartLine(height, width);
		// bar-chart-steps.svg
		case 127:
			return SVGIcons.barChartSteps(height, width);
		// bar-chart.svg
		case 128:
			return SVGIcons.barChart(height, width);
		// basket-fill.svg
		case 129:
			return SVGIcons.basketFill(height, width);
		// basket.svg
		case 130:
			return SVGIcons.basket(height, width);
		// basket2-fill.svg
		case 131:
			return SVGIcons.basket2Fill(height, width);
		// basket2.svg
		case 132:
			return SVGIcons.basket2(height, width);
		// basket3-fill.svg
		case 133:
			return SVGIcons.basket3Fill(height, width);
		// basket3.svg
		case 134:
			return SVGIcons.basket3(height, width);
		// battery-charging.svg
		case 135:
			return SVGIcons.batteryCharging(height, width);
		// battery-full.svg
		case 136:
			return SVGIcons.batteryFull(height, width);
		// battery-half.svg
		case 137:
			return SVGIcons.batteryHalf(height, width);
		// battery.svg
		case 138:
			return SVGIcons.battery(height, width);
		// bell-fill.svg
		case 139:
			return SVGIcons.bellFill(height, width);
		// bell-slash-fill.svg
		case 140:
			return SVGIcons.bellSlashFill(height, width);
		// bell-slash.svg
		case 141:
			return SVGIcons.bellSlash(height, width);
		// bell.svg
		case 142:
			return SVGIcons.bell(height, width);
		// bezier.svg
		case 143:
			return SVGIcons.bezier(height, width);
		// bezier2.svg
		case 144:
			return SVGIcons.bezier2(height, width);
		// bicycle.svg
		case 145:
			return SVGIcons.bicycle(height, width);
		// binoculars-fill.svg
		case 146:
			return SVGIcons.binocularsFill(height, width);
		// binoculars.svg
		case 147:
			return SVGIcons.binoculars(height, width);
		// blockquote-left.svg
		case 148:
			return SVGIcons.blockquoteLeft(height, width);
		// blockquote-right.svg
		case 149:
			return SVGIcons.blockquoteRight(height, width);
		// book-fill.svg
		case 150:
			return SVGIcons.bookFill(height, width);
		// book-half.svg
		case 151:
			return SVGIcons.bookHalf(height, width);
		// book.svg
		case 152:
			return SVGIcons.book(height, width);
		// bookmark-check-fill.svg
		case 153:
			return SVGIcons.bookmarkCheckFill(height, width);
		// bookmark-check.svg
		case 154:
			return SVGIcons.bookmarkCheck(height, width);
		// bookmark-dash-fill.svg
		case 155:
			return SVGIcons.bookmarkDashFill(height, width);
		// bookmark-dash.svg
		case 156:
			return SVGIcons.bookmarkDash(height, width);
		// bookmark-fill.svg
		case 157:
			return SVGIcons.bookmarkFill(height, width);
		// bookmark-heart-fill.svg
		case 158:
			return SVGIcons.bookmarkHeartFill(height, width);
		// bookmark-heart.svg
		case 159:
			return SVGIcons.bookmarkHeart(height, width);
		// bookmark-plus-fill.svg
		case 160:
			return SVGIcons.bookmarkPlusFill(height, width);
		// bookmark-plus.svg
		case 161:
			return SVGIcons.bookmarkPlus(height, width);
		// bookmark-star-fill.svg
		case 162:
			return SVGIcons.bookmarkStarFill(height, width);
		// bookmark-star.svg
		case 163:
			return SVGIcons.bookmarkStar(height, width);
		// bookmark-x-fill.svg
		case 164:
			return SVGIcons.bookmarkXFill(height, width);
		// bookmark-x.svg
		case 165:
			return SVGIcons.bookmarkX(height, width);
		// bookmark.svg
		case 166:
			return SVGIcons.bookmark(height, width);
		// bookmarks-fill.svg
		case 167:
			return SVGIcons.bookmarksFill(height, width);
		// bookmarks.svg
		case 168:
			return SVGIcons.bookmarks(height, width);
		// bookshelf.svg
		case 169:
			return SVGIcons.bookshelf(height, width);
		// bootstrap-fill.svg
		case 170:
			return SVGIcons.bootstrapFill(height, width);
		// bootstrap-reboot.svg
		case 171:
			return SVGIcons.bootstrapReboot(height, width);
		// bootstrap.svg
		case 172:
			return SVGIcons.bootstrap(height, width);
		// border-all.svg
		case 173:
			return SVGIcons.borderAll(height, width);
		// border-bottom.svg
		case 174:
			return SVGIcons.borderBottom(height, width);
		// border-center.svg
		case 175:
			return SVGIcons.borderCenter(height, width);
		// border-inner.svg
		case 176:
			return SVGIcons.borderInner(height, width);
		// border-left.svg
		case 177:
			return SVGIcons.borderLeft(height, width);
		// border-middle.svg
		case 178:
			return SVGIcons.borderMiddle(height, width);
		// border-outer.svg
		case 179:
			return SVGIcons.borderOuter(height, width);
		// border-right.svg
		case 180:
			return SVGIcons.borderRight(height, width);
		// border-style.svg
		case 181:
			return SVGIcons.borderStyle(height, width);
		// border-top.svg
		case 182:
			return SVGIcons.borderTop(height, width);
		// border-width.svg
		case 183:
			return SVGIcons.borderWidth(height, width);
		// border.svg
		case 184:
			return SVGIcons.border(height, width);
		// bounding-box-circles.svg
		case 185:
			return SVGIcons.boundingBoxCircles(height, width);
		// bounding-box.svg
		case 186:
			return SVGIcons.boundingBox(height, width);
		// box-arrow-down-left.svg
		case 187:
			return SVGIcons.boxArrowDownLeft(height, width);
		// box-arrow-down-right.svg
		case 188:
			return SVGIcons.boxArrowDownRight(height, width);
		// box-arrow-down.svg
		case 189:
			return SVGIcons.boxArrowDown(height, width);
		// box-arrow-in-down-left.svg
		case 190:
			return SVGIcons.boxArrowInDownLeft(height, width);
		// box-arrow-in-down-right.svg
		case 191:
			return SVGIcons.boxArrowInDownRight(height, width);
		// box-arrow-in-down.svg
		case 192:
			return SVGIcons.boxArrowInDown(height, width);
		// box-arrow-in-left.svg
		case 193:
			return SVGIcons.boxArrowInLeft(height, width);
		// box-arrow-in-right.svg
		case 194:
			return SVGIcons.boxArrowInRight(height, width);
		// box-arrow-in-up-left.svg
		case 195:
			return SVGIcons.boxArrowInUpLeft(height, width);
		// box-arrow-in-up-right.svg
		case 196:
			return SVGIcons.boxArrowInUpRight(height, width);
		// box-arrow-in-up.svg
		case 197:
			return SVGIcons.boxArrowInUp(height, width);
		// box-arrow-left.svg
		case 198:
			return SVGIcons.boxArrowLeft(height, width);
		// box-arrow-right.svg
		case 199:
			return SVGIcons.boxArrowRight(height, width);
		// box-arrow-up-left.svg
		case 200:
			return SVGIcons.boxArrowUpLeft(height, width);
		// box-arrow-up-right.svg
		case 201:
			return SVGIcons.boxArrowUpRight(height, width);
		// box-arrow-up.svg
		case 202:
			return SVGIcons.boxArrowUp(height, width);
		// box-seam.svg
		case 203:
			return SVGIcons.boxSeam(height, width);
		// box.svg
		case 204:
			return SVGIcons.box(height, width);
		// braces.svg
		case 205:
			return SVGIcons.braces(height, width);
		// bricks.svg
		case 206:
			return SVGIcons.bricks(height, width);
		// briefcase-fill.svg
		case 207:
			return SVGIcons.briefcaseFill(height, width);
		// briefcase.svg
		case 208:
			return SVGIcons.briefcase(height, width);
		// brightness-alt-high-fill.svg
		case 209:
			return SVGIcons.brightnessAltHighFill(height, width);
		// brightness-alt-high.svg
		case 210:
			return SVGIcons.brightnessAltHigh(height, width);
		// brightness-alt-low-fill.svg
		case 211:
			return SVGIcons.brightnessAltLowFill(height, width);
		// brightness-alt-low.svg
		case 212:
			return SVGIcons.brightnessAltLow(height, width);
		// brightness-high-fill.svg
		case 213:
			return SVGIcons.brightnessHighFill(height, width);
		// brightness-high.svg
		case 214:
			return SVGIcons.brightnessHigh(height, width);
		// brightness-low-fill.svg
		case 215:
			return SVGIcons.brightnessLowFill(height, width);
		// brightness-low.svg
		case 216:
			return SVGIcons.brightnessLow(height, width);
		// broadcast-pin.svg
		case 217:
			return SVGIcons.broadcastPin(height, width);
		// broadcast.svg
		case 218:
			return SVGIcons.broadcast(height, width);
		// brush-fill.svg
		case 219:
			return SVGIcons.brushFill(height, width);
		// brush.svg
		case 220:
			return SVGIcons.brush(height, width);
		// bucket-fill.svg
		case 221:
			return SVGIcons.bucketFill(height, width);
		// bucket.svg
		case 222:
			return SVGIcons.bucket(height, width);
		// bug-fill.svg
		case 223:
			return SVGIcons.bugFill(height, width);
		// bug.svg
		case 224:
			return SVGIcons.bug(height, width);
		// building.svg
		case 225:
			return SVGIcons.building(height, width);
		// bullseye.svg
		case 226:
			return SVGIcons.bullseye(height, width);
		// calculator-fill.svg
		case 227:
			return SVGIcons.calculatorFill(height, width);
		// calculator.svg
		case 228:
			return SVGIcons.calculator(height, width);
		// calendar-check-fill.svg
		case 229:
			return SVGIcons.calendarCheckFill(height, width);
		// calendar-check.svg
		case 230:
			return SVGIcons.calendarCheck(height, width);
		// calendar-date-fill.svg
		case 231:
			return SVGIcons.calendarDateFill(height, width);
		// calendar-date.svg
		case 232:
			return SVGIcons.calendarDate(height, width);
		// calendar-day-fill.svg
		case 233:
			return SVGIcons.calendarDayFill(height, width);
		// calendar-day.svg
		case 234:
			return SVGIcons.calendarDay(height, width);
		// calendar-event-fill.svg
		case 235:
			return SVGIcons.calendarEventFill(height, width);
		// calendar-event.svg
		case 236:
			return SVGIcons.calendarEvent(height, width);
		// calendar-fill.svg
		case 237:
			return SVGIcons.calendarFill(height, width);
		// calendar-minus-fill.svg
		case 238:
			return SVGIcons.calendarMinusFill(height, width);
		// calendar-minus.svg
		case 239:
			return SVGIcons.calendarMinus(height, width);
		// calendar-month-fill.svg
		case 240:
			return SVGIcons.calendarMonthFill(height, width);
		// calendar-month.svg
		case 241:
			return SVGIcons.calendarMonth(height, width);
		// calendar-plus-fill.svg
		case 242:
			return SVGIcons.calendarPlusFill(height, width);
		// calendar-plus.svg
		case 243:
			return SVGIcons.calendarPlus(height, width);
		// calendar-range-fill.svg
		case 244:
			return SVGIcons.calendarRangeFill(height, width);
		// calendar-range.svg
		case 245:
			return SVGIcons.calendarRange(height, width);
		// calendar-week-fill.svg
		case 246:
			return SVGIcons.calendarWeekFill(height, width);
		// calendar-week.svg
		case 247:
			return SVGIcons.calendarWeek(height, width);
		// calendar-x-fill.svg
		case 248:
			return SVGIcons.calendarXFill(height, width);
		// calendar-x.svg
		case 249:
			return SVGIcons.calendarX(height, width);
		// calendar.svg
		case 250:
			return SVGIcons.calendar(height, width);
		// calendar2-check-fill.svg
		case 251:
			return SVGIcons.calendar2CheckFill(height, width);
		// calendar2-check.svg
		case 252:
			return SVGIcons.calendar2Check(height, width);
		// calendar2-date-fill.svg
		case 253:
			return SVGIcons.calendar2DateFill(height, width);
		// calendar2-date.svg
		case 254:
			return SVGIcons.calendar2Date(height, width);
		// calendar2-day-fill.svg
		case 255:
			return SVGIcons.calendar2DayFill(height, width);
		// calendar2-day.svg
		case 256:
			return SVGIcons.calendar2Day(height, width);
		// calendar2-event-fill.svg
		case 257:
			return SVGIcons.calendar2EventFill(height, width);
		// calendar2-event.svg
		case 258:
			return SVGIcons.calendar2Event(height, width);
		// calendar2-fill.svg
		case 259:
			return SVGIcons.calendar2Fill(height, width);
		// calendar2-minus-fill.svg
		case 260:
			return SVGIcons.calendar2MinusFill(height, width);
		// calendar2-minus.svg
		case 261:
			return SVGIcons.calendar2Minus(height, width);
		// calendar2-month-fill.svg
		case 262:
			return SVGIcons.calendar2MonthFill(height, width);
		// calendar2-month.svg
		case 263:
			return SVGIcons.calendar2Month(height, width);
		// calendar2-plus-fill.svg
		case 264:
			return SVGIcons.calendar2PlusFill(height, width);
		// calendar2-plus.svg
		case 265:
			return SVGIcons.calendar2Plus(height, width);
		// calendar2-range-fill.svg
		case 266:
			return SVGIcons.calendar2RangeFill(height, width);
		// calendar2-range.svg
		case 267:
			return SVGIcons.calendar2Range(height, width);
		// calendar2-week-fill.svg
		case 268:
			return SVGIcons.calendar2WeekFill(height, width);
		// calendar2-week.svg
		case 269:
			return SVGIcons.calendar2Week(height, width);
		// calendar2-x-fill.svg
		case 270:
			return SVGIcons.calendar2XFill(height, width);
		// calendar2-x.svg
		case 271:
			return SVGIcons.calendar2X(height, width);
		// calendar2.svg
		case 272:
			return SVGIcons.calendar2(height, width);
		// calendar3-event-fill.svg
		case 273:
			return SVGIcons.calendar3EventFill(height, width);
		// calendar3-event.svg
		case 274:
			return SVGIcons.calendar3Event(height, width);
		// calendar3-fill.svg
		case 275:
			return SVGIcons.calendar3Fill(height, width);
		// calendar3-range-fill.svg
		case 276:
			return SVGIcons.calendar3RangeFill(height, width);
		// calendar3-range.svg
		case 277:
			return SVGIcons.calendar3Range(height, width);
		// calendar3-week-fill.svg
		case 278:
			return SVGIcons.calendar3WeekFill(height, width);
		// calendar3-week.svg
		case 279:
			return SVGIcons.calendar3Week(height, width);
		// calendar3.svg
		case 280:
			return SVGIcons.calendar3(height, width);
		// calendar4-event.svg
		case 281:
			return SVGIcons.calendar4Event(height, width);
		// calendar4-range.svg
		case 282:
			return SVGIcons.calendar4Range(height, width);
		// calendar4-week.svg
		case 283:
			return SVGIcons.calendar4Week(height, width);
		// calendar4.svg
		case 284:
			return SVGIcons.calendar4(height, width);
		// camera-fill.svg
		case 285:
			return SVGIcons.cameraFill(height, width);
		// camera-reels-fill.svg
		case 286:
			return SVGIcons.cameraReelsFill(height, width);
		// camera-reels.svg
		case 287:
			return SVGIcons.cameraReels(height, width);
		// camera-video-fill.svg
		case 288:
			return SVGIcons.cameraVideoFill(height, width);
		// camera-video-off-fill.svg
		case 289:
			return SVGIcons.cameraVideoOffFill(height, width);
		// camera-video-off.svg
		case 290:
			return SVGIcons.cameraVideoOff(height, width);
		// camera-video.svg
		case 291:
			return SVGIcons.cameraVideo(height, width);
		// camera.svg
		case 292:
			return SVGIcons.camera(height, width);
		// camera2.svg
		case 293:
			return SVGIcons.camera2(height, width);
		// capslock-fill.svg
		case 294:
			return SVGIcons.capslockFill(height, width);
		// capslock.svg
		case 295:
			return SVGIcons.capslock(height, width);
		// card-checklist.svg
		case 296:
			return SVGIcons.cardChecklist(height, width);
		// card-heading.svg
		case 297:
			return SVGIcons.cardHeading(height, width);
		// card-image.svg
		case 298:
			return SVGIcons.cardImage(height, width);
		// card-list.svg
		case 299:
			return SVGIcons.cardList(height, width);
		// card-text.svg
		case 300:
			return SVGIcons.cardText(height, width);
		// caret-down-fill.svg
		case 301:
			return SVGIcons.caretDownFill(height, width);
		// caret-down-square-fill.svg
		case 302:
			return SVGIcons.caretDownSquareFill(height, width);
		// caret-down-square.svg
		case 303:
			return SVGIcons.caretDownSquare(height, width);
		// caret-down.svg
		case 304:
			return SVGIcons.caretDown(height, width);
		// caret-left-fill.svg
		case 305:
			return SVGIcons.caretLeftFill(height, width);
		// caret-left-square-fill.svg
		case 306:
			return SVGIcons.caretLeftSquareFill(height, width);
		// caret-left-square.svg
		case 307:
			return SVGIcons.caretLeftSquare(height, width);
		// caret-left.svg
		case 308:
			return SVGIcons.caretLeft(height, width);
		// caret-right-fill.svg
		case 309:
			return SVGIcons.caretRightFill(height, width);
		// caret-right-square-fill.svg
		case 310:
			return SVGIcons.caretRightSquareFill(height, width);
		// caret-right-square.svg
		case 311:
			return SVGIcons.caretRightSquare(height, width);
		// caret-right.svg
		case 312:
			return SVGIcons.caretRight(height, width);
		// caret-up-fill.svg
		case 313:
			return SVGIcons.caretUpFill(height, width);
		// caret-up-square-fill.svg
		case 314:
			return SVGIcons.caretUpSquareFill(height, width);
		// caret-up-square.svg
		case 315:
			return SVGIcons.caretUpSquare(height, width);
		// caret-up.svg
		case 316:
			return SVGIcons.caretUp(height, width);
		// cart-check-fill.svg
		case 317:
			return SVGIcons.cartCheckFill(height, width);
		// cart-check.svg
		case 318:
			return SVGIcons.cartCheck(height, width);
		// cart-dash-fill.svg
		case 319:
			return SVGIcons.cartDashFill(height, width);
		// cart-dash.svg
		case 320:
			return SVGIcons.cartDash(height, width);
		// cart-fill.svg
		case 321:
			return SVGIcons.cartFill(height, width);
		// cart-plus-fill.svg
		case 322:
			return SVGIcons.cartPlusFill(height, width);
		// cart-plus.svg
		case 323:
			return SVGIcons.cartPlus(height, width);
		// cart-x-fill.svg
		case 324:
			return SVGIcons.cartXFill(height, width);
		// cart-x.svg
		case 325:
			return SVGIcons.cartX(height, width);
		// cart.svg
		case 326:
			return SVGIcons.cart(height, width);
		// cart2.svg
		case 327:
			return SVGIcons.cart2(height, width);
		// cart3.svg
		case 328:
			return SVGIcons.cart3(height, width);
		// cart4.svg
		case 329:
			return SVGIcons.cart4(height, width);
		// cash-coin.svg
		case 330:
			return SVGIcons.cashCoin(height, width);
		// cash-stack.svg
		case 331:
			return SVGIcons.cashStack(height, width);
		// cash.svg
		case 332:
			return SVGIcons.cash(height, width);
		// cast.svg
		case 333:
			return SVGIcons.cast(height, width);
		// chat-dots-fill.svg
		case 334:
			return SVGIcons.chatDotsFill(height, width);
		// chat-dots.svg
		case 335:
			return SVGIcons.chatDots(height, width);
		// chat-fill.svg
		case 336:
			return SVGIcons.chatFill(height, width);
		// chat-left-dots-fill.svg
		case 337:
			return SVGIcons.chatLeftDotsFill(height, width);
		// chat-left-dots.svg
		case 338:
			return SVGIcons.chatLeftDots(height, width);
		// chat-left-fill.svg
		case 339:
			return SVGIcons.chatLeftFill(height, width);
		// chat-left-quote-fill.svg
		case 340:
			return SVGIcons.chatLeftQuoteFill(height, width);
		// chat-left-quote.svg
		case 341:
			return SVGIcons.chatLeftQuote(height, width);
		// chat-left-text-fill.svg
		case 342:
			return SVGIcons.chatLeftTextFill(height, width);
		// chat-left-text.svg
		case 343:
			return SVGIcons.chatLeftText(height, width);
		// chat-left.svg
		case 344:
			return SVGIcons.chatLeft(height, width);
		// chat-quote-fill.svg
		case 345:
			return SVGIcons.chatQuoteFill(height, width);
		// chat-quote.svg
		case 346:
			return SVGIcons.chatQuote(height, width);
		// chat-right-dots-fill.svg
		case 347:
			return SVGIcons.chatRightDotsFill(height, width);
		// chat-right-dots.svg
		case 348:
			return SVGIcons.chatRightDots(height, width);
		// chat-right-fill.svg
		case 349:
			return SVGIcons.chatRightFill(height, width);
		// chat-right-quote-fill.svg
		case 350:
			return SVGIcons.chatRightQuoteFill(height, width);
		// chat-right-quote.svg
		case 351:
			return SVGIcons.chatRightQuote(height, width);
		// chat-right-text-fill.svg
		case 352:
			return SVGIcons.chatRightTextFill(height, width);
		// chat-right-text.svg
		case 353:
			return SVGIcons.chatRightText(height, width);
		// chat-right.svg
		case 354:
			return SVGIcons.chatRight(height, width);
		// chat-square-dots-fill.svg
		case 355:
			return SVGIcons.chatSquareDotsFill(height, width);
		// chat-square-dots.svg
		case 356:
			return SVGIcons.chatSquareDots(height, width);
		// chat-square-fill.svg
		case 357:
			return SVGIcons.chatSquareFill(height, width);
		// chat-square-quote-fill.svg
		case 358:
			return SVGIcons.chatSquareQuoteFill(height, width);
		// chat-square-quote.svg
		case 359:
			return SVGIcons.chatSquareQuote(height, width);
		// chat-square-text-fill.svg
		case 360:
			return SVGIcons.chatSquareTextFill(height, width);
		// chat-square-text.svg
		case 361:
			return SVGIcons.chatSquareText(height, width);
		// chat-square.svg
		case 362:
			return SVGIcons.chatSquare(height, width);
		// chat-text-fill.svg
		case 363:
			return SVGIcons.chatTextFill(height, width);
		// chat-text.svg
		case 364:
			return SVGIcons.chatText(height, width);
		// chat.svg
		case 365:
			return SVGIcons.chat(height, width);
		// check-all.svg
		case 366:
			return SVGIcons.checkAll(height, width);
		// check-circle-fill.svg
		case 367:
			return SVGIcons.checkCircleFill(height, width);
		// check-circle.svg
		case 368:
			return SVGIcons.checkCircle(height, width);
		// check-lg.svg
		case 369:
			return SVGIcons.checkLg(height, width);
		// check-square-fill.svg
		case 370:
			return SVGIcons.checkSquareFill(height, width);
		// check-square.svg
		case 371:
			return SVGIcons.checkSquare(height, width);
		// check.svg
		case 372:
			return SVGIcons.check(height, width);
		// check2-all.svg
		case 373:
			return SVGIcons.check2All(height, width);
		// check2-circle.svg
		case 374:
			return SVGIcons.check2Circle(height, width);
		// check2-square.svg
		case 375:
			return SVGIcons.check2Square(height, width);
		// check2.svg
		case 376:
			return SVGIcons.check2(height, width);
		// chevron-bar-contract.svg
		case 377:
			return SVGIcons.chevronBarContract(height, width);
		// chevron-bar-down.svg
		case 378:
			return SVGIcons.chevronBarDown(height, width);
		// chevron-bar-expand.svg
		case 379:
			return SVGIcons.chevronBarExpand(height, width);
		// chevron-bar-left.svg
		case 380:
			return SVGIcons.chevronBarLeft(height, width);
		// chevron-bar-right.svg
		case 381:
			return SVGIcons.chevronBarRight(height, width);
		// chevron-bar-up.svg
		case 382:
			return SVGIcons.chevronBarUp(height, width);
		// chevron-compact-down.svg
		case 383:
			return SVGIcons.chevronCompactDown(height, width);
		// chevron-compact-left.svg
		case 384:
			return SVGIcons.chevronCompactLeft(height, width);
		// chevron-compact-right.svg
		case 385:
			return SVGIcons.chevronCompactRight(height, width);
		// chevron-compact-up.svg
		case 386:
			return SVGIcons.chevronCompactUp(height, width);
		// chevron-contract.svg
		case 387:
			return SVGIcons.chevronContract(height, width);
		// chevron-double-down.svg
		case 388:
			return SVGIcons.chevronDoubleDown(height, width);
		// chevron-double-left.svg
		case 389:
			return SVGIcons.chevronDoubleLeft(height, width);
		// chevron-double-right.svg
		case 390:
			return SVGIcons.chevronDoubleRight(height, width);
		// chevron-double-up.svg
		case 391:
			return SVGIcons.chevronDoubleUp(height, width);
		// chevron-down.svg
		case 392:
			return SVGIcons.chevronDown(height, width);
		// chevron-expand.svg
		case 393:
			return SVGIcons.chevronExpand(height, width);
		// chevron-left.svg
		case 394:
			return SVGIcons.chevronLeft(height, width);
		// chevron-right.svg
		case 395:
			return SVGIcons.chevronRight(height, width);
		// chevron-up.svg
		case 396:
			return SVGIcons.chevronUp(height, width);
		// circle-fill.svg
		case 397:
			return SVGIcons.circleFill(height, width);
		// circle-half.svg
		case 398:
			return SVGIcons.circleHalf(height, width);
		// circle-square.svg
		case 399:
			return SVGIcons.circleSquare(height, width);
		// circle.svg
		case 400:
			return SVGIcons.circle(height, width);
		// clipboard-check.svg
		case 401:
			return SVGIcons.clipboardCheck(height, width);
		// clipboard-data.svg
		case 402:
			return SVGIcons.clipboardData(height, width);
		// clipboard-minus.svg
		case 403:
			return SVGIcons.clipboardMinus(height, width);
		// clipboard-plus.svg
		case 404:
			return SVGIcons.clipboardPlus(height, width);
		// clipboard-x.svg
		case 405:
			return SVGIcons.clipboardX(height, width);
		// clipboard.svg
		case 406:
			return SVGIcons.clipboard(height, width);
		// clock-fill.svg
		case 407:
			return SVGIcons.clockFill(height, width);
		// clock-history.svg
		case 408:
			return SVGIcons.clockHistory(height, width);
		// clock.svg
		case 409:
			return SVGIcons.clock(height, width);
		// cloud-arrow-down-fill.svg
		case 410:
			return SVGIcons.cloudArrowDownFill(height, width);
		// cloud-arrow-down.svg
		case 411:
			return SVGIcons.cloudArrowDown(height, width);
		// cloud-arrow-up-fill.svg
		case 412:
			return SVGIcons.cloudArrowUpFill(height, width);
		// cloud-arrow-up.svg
		case 413:
			return SVGIcons.cloudArrowUp(height, width);
		// cloud-check-fill.svg
		case 414:
			return SVGIcons.cloudCheckFill(height, width);
		// cloud-check.svg
		case 415:
			return SVGIcons.cloudCheck(height, width);
		// cloud-download-fill.svg
		case 416:
			return SVGIcons.cloudDownloadFill(height, width);
		// cloud-download.svg
		case 417:
			return SVGIcons.cloudDownload(height, width);
		// cloud-drizzle-fill.svg
		case 418:
			return SVGIcons.cloudDrizzleFill(height, width);
		// cloud-drizzle.svg
		case 419:
			return SVGIcons.cloudDrizzle(height, width);
		// cloud-fill.svg
		case 420:
			return SVGIcons.cloudFill(height, width);
		// cloud-fog-fill.svg
		case 421:
			return SVGIcons.cloudFogFill(height, width);
		// cloud-fog.svg
		case 422:
			return SVGIcons.cloudFog(height, width);
		// cloud-fog2-fill.svg
		case 423:
			return SVGIcons.cloudFog2Fill(height, width);
		// cloud-fog2.svg
		case 424:
			return SVGIcons.cloudFog2(height, width);
		// cloud-hail-fill.svg
		case 425:
			return SVGIcons.cloudHailFill(height, width);
		// cloud-hail.svg
		case 426:
			return SVGIcons.cloudHail(height, width);
		// cloud-haze-1.svg
		case 427:
			return SVGIcons.cloudHaze1(height, width);
		// cloud-haze-fill.svg
		case 428:
			return SVGIcons.cloudHazeFill(height, width);
		// cloud-haze.svg
		case 429:
			return SVGIcons.cloudHaze(height, width);
		// cloud-haze2-fill.svg
		case 430:
			return SVGIcons.cloudHaze2Fill(height, width);
		// cloud-lightning-fill.svg
		case 431:
			return SVGIcons.cloudLightningFill(height, width);
		// cloud-lightning-rain-fill.svg
		case 432:
			return SVGIcons.cloudLightningRainFill(height, width);
		// cloud-lightning-rain.svg
		case 433:
			return SVGIcons.cloudLightningRain(height, width);
		// cloud-lightning.svg
		case 434:
			return SVGIcons.cloudLightning(height, width);
		// cloud-minus-fill.svg
		case 435:
			return SVGIcons.cloudMinusFill(height, width);
		// cloud-minus.svg
		case 436:
			return SVGIcons.cloudMinus(height, width);
		// cloud-moon-fill.svg
		case 437:
			return SVGIcons.cloudMoonFill(height, width);
		// cloud-moon.svg
		case 438:
			return SVGIcons.cloudMoon(height, width);
		// cloud-plus-fill.svg
		case 439:
			return SVGIcons.cloudPlusFill(height, width);
		// cloud-plus.svg
		case 440:
			return SVGIcons.cloudPlus(height, width);
		// cloud-rain-fill.svg
		case 441:
			return SVGIcons.cloudRainFill(height, width);
		// cloud-rain-heavy-fill.svg
		case 442:
			return SVGIcons.cloudRainHeavyFill(height, width);
		// cloud-rain-heavy.svg
		case 443:
			return SVGIcons.cloudRainHeavy(height, width);
		// cloud-rain.svg
		case 444:
			return SVGIcons.cloudRain(height, width);
		// cloud-slash-fill.svg
		case 445:
			return SVGIcons.cloudSlashFill(height, width);
		// cloud-slash.svg
		case 446:
			return SVGIcons.cloudSlash(height, width);
		// cloud-sleet-fill.svg
		case 447:
			return SVGIcons.cloudSleetFill(height, width);
		// cloud-sleet.svg
		case 448:
			return SVGIcons.cloudSleet(height, width);
		// cloud-snow-fill.svg
		case 449:
			return SVGIcons.cloudSnowFill(height, width);
		// cloud-snow.svg
		case 450:
			return SVGIcons.cloudSnow(height, width);
		// cloud-sun-fill.svg
		case 451:
			return SVGIcons.cloudSunFill(height, width);
		// cloud-sun.svg
		case 452:
			return SVGIcons.cloudSun(height, width);
		// cloud-upload-fill.svg
		case 453:
			return SVGIcons.cloudUploadFill(height, width);
		// cloud-upload.svg
		case 454:
			return SVGIcons.cloudUpload(height, width);
		// cloud.svg
		case 455:
			return SVGIcons.cloud(height, width);
		// clouds-fill.svg
		case 456:
			return SVGIcons.cloudsFill(height, width);
		// clouds.svg
		case 457:
			return SVGIcons.clouds(height, width);
		// cloudy-fill.svg
		case 458:
			return SVGIcons.cloudyFill(height, width);
		// cloudy.svg
		case 459:
			return SVGIcons.cloudy(height, width);
		// code-slash.svg
		case 460:
			return SVGIcons.codeSlash(height, width);
		// code-square.svg
		case 461:
			return SVGIcons.codeSquare(height, width);
		// code.svg
		case 462:
			return SVGIcons.code(height, width);
		// coin.svg
		case 463:
			return SVGIcons.coin(height, width);
		// collection-fill.svg
		case 464:
			return SVGIcons.collectionFill(height, width);
		// collection-play-fill.svg
		case 465:
			return SVGIcons.collectionPlayFill(height, width);
		// collection-play.svg
		case 466:
			return SVGIcons.collectionPlay(height, width);
		// collection.svg
		case 467:
			return SVGIcons.collection(height, width);
		// columns-gap.svg
		case 468:
			return SVGIcons.columnsGap(height, width);
		// columns.svg
		case 469:
			return SVGIcons.columns(height, width);
		// command.svg
		case 470:
			return SVGIcons.command(height, width);
		// compass-fill.svg
		case 471:
			return SVGIcons.compassFill(height, width);
		// compass.svg
		case 472:
			return SVGIcons.compass(height, width);
		// cone-striped.svg
		case 473:
			return SVGIcons.coneStriped(height, width);
		// cone.svg
		case 474:
			return SVGIcons.cone(height, width);
		// controller.svg
		case 475:
			return SVGIcons.controller(height, width);
		// cpu-fill.svg
		case 476:
			return SVGIcons.cpuFill(height, width);
		// cpu.svg
		case 477:
			return SVGIcons.cpu(height, width);
		// credit-card-2-back-fill.svg
		case 478:
			return SVGIcons.creditCard2BackFill(height, width);
		// credit-card-2-back.svg
		case 479:
			return SVGIcons.creditCard2Back(height, width);
		// credit-card-2-front-fill.svg
		case 480:
			return SVGIcons.creditCard2FrontFill(height, width);
		// credit-card-2-front.svg
		case 481:
			return SVGIcons.creditCard2Front(height, width);
		// credit-card-fill.svg
		case 482:
			return SVGIcons.creditCardFill(height, width);
		// credit-card.svg
		case 483:
			return SVGIcons.creditCard(height, width);
		// crop.svg
		case 484:
			return SVGIcons.crop(height, width);
		// cup-fill.svg
		case 485:
			return SVGIcons.cupFill(height, width);
		// cup-straw.svg
		case 486:
			return SVGIcons.cupStraw(height, width);
		// cup.svg
		case 487:
			return SVGIcons.cup(height, width);
		// currency-bitcoin.svg
		case 488:
			return SVGIcons.currencyBitcoin(height, width);
		// currency-dollar.svg
		case 489:
			return SVGIcons.currencyDollar(height, width);
		// currency-euro.svg
		case 490:
			return SVGIcons.currencyEuro(height, width);
		// currency-exchange.svg
		case 491:
			return SVGIcons.currencyExchange(height, width);
		// currency-pound.svg
		case 492:
			return SVGIcons.currencyPound(height, width);
		// currency-yen.svg
		case 493:
			return SVGIcons.currencyYen(height, width);
		// cursor-fill.svg
		case 494:
			return SVGIcons.cursorFill(height, width);
		// cursor-text.svg
		case 495:
			return SVGIcons.cursorText(height, width);
		// cursor.svg
		case 496:
			return SVGIcons.cursor(height, width);
		// dash-circle-dotted.svg
		case 497:
			return SVGIcons.dashCircleDotted(height, width);
		// dash-circle-fill.svg
		case 498:
			return SVGIcons.dashCircleFill(height, width);
		// dash-circle.svg
		case 499:
			return SVGIcons.dashCircle(height, width);
		// dash-lg.svg
		case 500:
			return SVGIcons.dashLg(height, width);
		// dash-square-dotted.svg
		case 501:
			return SVGIcons.dashSquareDotted(height, width);
		// dash-square-fill.svg
		case 502:
			return SVGIcons.dashSquareFill(height, width);
		// dash-square.svg
		case 503:
			return SVGIcons.dashSquare(height, width);
		// dash.svg
		case 504:
			return SVGIcons.dash(height, width);
		// diagram-2-fill.svg
		case 505:
			return SVGIcons.diagram2Fill(height, width);
		// diagram-2.svg
		case 506:
			return SVGIcons.diagram2(height, width);
		// diagram-3-fill.svg
		case 507:
			return SVGIcons.diagram3Fill(height, width);
		// diagram-3.svg
		case 508:
			return SVGIcons.diagram3(height, width);
		// diamond-fill.svg
		case 509:
			return SVGIcons.diamondFill(height, width);
		// diamond-half.svg
		case 510:
			return SVGIcons.diamondHalf(height, width);
		// diamond.svg
		case 511:
			return SVGIcons.diamond(height, width);
		// dice-1-fill.svg
		case 512:
			return SVGIcons.dice1Fill(height, width);
		// dice-1.svg
		case 513:
			return SVGIcons.dice1(height, width);
		// dice-2-fill.svg
		case 514:
			return SVGIcons.dice2Fill(height, width);
		// dice-2.svg
		case 515:
			return SVGIcons.dice2(height, width);
		// dice-3-fill.svg
		case 516:
			return SVGIcons.dice3Fill(height, width);
		// dice-3.svg
		case 517:
			return SVGIcons.dice3(height, width);
		// dice-4-fill.svg
		case 518:
			return SVGIcons.dice4Fill(height, width);
		// dice-4.svg
		case 519:
			return SVGIcons.dice4(height, width);
		// dice-5-fill.svg
		case 520:
			return SVGIcons.dice5Fill(height, width);
		// dice-5.svg
		case 521:
			return SVGIcons.dice5(height, width);
		// dice-6-fill.svg
		case 522:
			return SVGIcons.dice6Fill(height, width);
		// dice-6.svg
		case 523:
			return SVGIcons.dice6(height, width);
		// disc-fill.svg
		case 524:
			return SVGIcons.discFill(height, width);
		// disc.svg
		case 525:
			return SVGIcons.disc(height, width);
		// discord.svg
		case 526:
			return SVGIcons.discord(height, width);
		// display-fill.svg
		case 527:
			return SVGIcons.displayFill(height, width);
		// display.svg
		case 528:
			return SVGIcons.display(height, width);
		// distribute-horizontal.svg
		case 529:
			return SVGIcons.distributeHorizontal(height, width);
		// distribute-vertical.svg
		case 530:
			return SVGIcons.distributeVertical(height, width);
		// door-closed-fill.svg
		case 531:
			return SVGIcons.doorClosedFill(height, width);
		// door-closed.svg
		case 532:
			return SVGIcons.doorClosed(height, width);
		// door-open-fill.svg
		case 533:
			return SVGIcons.doorOpenFill(height, width);
		// door-open.svg
		case 534:
			return SVGIcons.doorOpen(height, width);
		// dot.svg
		case 535:
			return SVGIcons.dot(height, width);
		// download.svg
		case 536:
			return SVGIcons.download(height, width);
		// droplet-fill.svg
		case 537:
			return SVGIcons.dropletFill(height, width);
		// droplet-half.svg
		case 538:
			return SVGIcons.dropletHalf(height, width);
		// droplet.svg
		case 539:
			return SVGIcons.droplet(height, width);
		// earbuds.svg
		case 540:
			return SVGIcons.earbuds(height, width);
		// easel-fill.svg
		case 541:
			return SVGIcons.easelFill(height, width);
		// easel.svg
		case 542:
			return SVGIcons.easel(height, width);
		// egg-fill.svg
		case 543:
			return SVGIcons.eggFill(height, width);
		// egg-fried.svg
		case 544:
			return SVGIcons.eggFried(height, width);
		// egg.svg
		case 545:
			return SVGIcons.egg(height, width);
		// eject-fill.svg
		case 546:
			return SVGIcons.ejectFill(height, width);
		// eject.svg
		case 547:
			return SVGIcons.eject(height, width);
		// emoji-angry-fill.svg
		case 548:
			return SVGIcons.emojiAngryFill(height, width);
		// emoji-angry.svg
		case 549:
			return SVGIcons.emojiAngry(height, width);
		// emoji-dizzy-fill.svg
		case 550:
			return SVGIcons.emojiDizzyFill(height, width);
		// emoji-dizzy.svg
		case 551:
			return SVGIcons.emojiDizzy(height, width);
		// emoji-expressionless-fill.svg
		case 552:
			return SVGIcons.emojiExpressionlessFill(height, width);
		// emoji-expressionless.svg
		case 553:
			return SVGIcons.emojiExpressionless(height, width);
		// emoji-frown-fill.svg
		case 554:
			return SVGIcons.emojiFrownFill(height, width);
		// emoji-frown.svg
		case 555:
			return SVGIcons.emojiFrown(height, width);
		// emoji-heart-eyes-fill.svg
		case 556:
			return SVGIcons.emojiHeartEyesFill(height, width);
		// emoji-heart-eyes.svg
		case 557:
			return SVGIcons.emojiHeartEyes(height, width);
		// emoji-laughing-fill.svg
		case 558:
			return SVGIcons.emojiLaughingFill(height, width);
		// emoji-laughing.svg
		case 559:
			return SVGIcons.emojiLaughing(height, width);
		// emoji-neutral-fill.svg
		case 560:
			return SVGIcons.emojiNeutralFill(height, width);
		// emoji-neutral.svg
		case 561:
			return SVGIcons.emojiNeutral(height, width);
		// emoji-smile-fill.svg
		case 562:
			return SVGIcons.emojiSmileFill(height, width);
		// emoji-smile-upside-down-fill.svg
		case 563:
			return SVGIcons.emojiSmileUpsideDownFill(height, width);
		// emoji-smile-upside-down.svg
		case 564:
			return SVGIcons.emojiSmileUpsideDown(height, width);
		// emoji-smile.svg
		case 565:
			return SVGIcons.emojiSmile(height, width);
		// emoji-sunglasses-fill.svg
		case 566:
			return SVGIcons.emojiSunglassesFill(height, width);
		// emoji-sunglasses.svg
		case 567:
			return SVGIcons.emojiSunglasses(height, width);
		// emoji-wink-fill.svg
		case 568:
			return SVGIcons.emojiWinkFill(height, width);
		// emoji-wink.svg
		case 569:
			return SVGIcons.emojiWink(height, width);
		// envelope-fill.svg
		case 570:
			return SVGIcons.envelopeFill(height, width);
		// envelope-open-fill.svg
		case 571:
			return SVGIcons.envelopeOpenFill(height, width);
		// envelope-open.svg
		case 572:
			return SVGIcons.envelopeOpen(height, width);
		// envelope.svg
		case 573:
			return SVGIcons.envelope(height, width);
		// eraser-fill.svg
		case 574:
			return SVGIcons.eraserFill(height, width);
		// eraser.svg
		case 575:
			return SVGIcons.eraser(height, width);
		// exclamation-circle-fill.svg
		case 576:
			return SVGIcons.exclamationCircleFill(height, width);
		// exclamation-circle.svg
		case 577:
			return SVGIcons.exclamationCircle(height, width);
		// exclamation-diamond-fill.svg
		case 578:
			return SVGIcons.exclamationDiamondFill(height, width);
		// exclamation-diamond.svg
		case 579:
			return SVGIcons.exclamationDiamond(height, width);
		// exclamation-lg.svg
		case 580:
			return SVGIcons.exclamationLg(height, width);
		// exclamation-octagon-fill.svg
		case 581:
			return SVGIcons.exclamationOctagonFill(height, width);
		// exclamation-octagon.svg
		case 582:
			return SVGIcons.exclamationOctagon(height, width);
		// exclamation-square-fill.svg
		case 583:
			return SVGIcons.exclamationSquareFill(height, width);
		// exclamation-square.svg
		case 584:
			return SVGIcons.exclamationSquare(height, width);
		// exclamation-triangle-fill.svg
		case 585:
			return SVGIcons.exclamationTriangleFill(height, width);
		// exclamation-triangle.svg
		case 586:
			return SVGIcons.exclamationTriangle(height, width);
		// exclamation.svg
		case 587:
			return SVGIcons.exclamation(height, width);
		// exclude.svg
		case 588:
			return SVGIcons.exclude(height, width);
		// eye-fill.svg
		case 589:
			return SVGIcons.eyeFill(height, width);
		// eye-slash-fill.svg
		case 590:
			return SVGIcons.eyeSlashFill(height, width);
		// eye-slash.svg
		case 591:
			return SVGIcons.eyeSlash(height, width);
		// eye.svg
		case 592:
			return SVGIcons.eye(height, width);
		// eyedropper.svg
		case 593:
			return SVGIcons.eyedropper(height, width);
		// eyeglasses.svg
		case 594:
			return SVGIcons.eyeglasses(height, width);
		// facebook.svg
		case 595:
			return SVGIcons.facebook(height, width);
		// file-arrow-down-fill.svg
		case 596:
			return SVGIcons.fileArrowDownFill(height, width);
		// file-arrow-down.svg
		case 597:
			return SVGIcons.fileArrowDown(height, width);
		// file-arrow-up-fill.svg
		case 598:
			return SVGIcons.fileArrowUpFill(height, width);
		// file-arrow-up.svg
		case 599:
			return SVGIcons.fileArrowUp(height, width);
		// file-bar-graph-fill.svg
		case 600:
			return SVGIcons.fileBarGraphFill(height, width);
		// file-bar-graph.svg
		case 601:
			return SVGIcons.fileBarGraph(height, width);
		// file-binary-fill.svg
		case 602:
			return SVGIcons.fileBinaryFill(height, width);
		// file-binary.svg
		case 603:
			return SVGIcons.fileBinary(height, width);
		// file-break-fill.svg
		case 604:
			return SVGIcons.fileBreakFill(height, width);
		// file-break.svg
		case 605:
			return SVGIcons.fileBreak(height, width);
		// file-check-fill.svg
		case 606:
			return SVGIcons.fileCheckFill(height, width);
		// file-check.svg
		case 607:
			return SVGIcons.fileCheck(height, width);
		// file-code-fill.svg
		case 608:
			return SVGIcons.fileCodeFill(height, width);
		// file-code.svg
		case 609:
			return SVGIcons.fileCode(height, width);
		// file-diff-fill.svg
		case 610:
			return SVGIcons.fileDiffFill(height, width);
		// file-diff.svg
		case 611:
			return SVGIcons.fileDiff(height, width);
		// file-earmark-arrow-down-fill.svg
		case 612:
			return SVGIcons.fileEarmarkArrowDownFill(height, width);
		// file-earmark-arrow-down.svg
		case 613:
			return SVGIcons.fileEarmarkArrowDown(height, width);
		// file-earmark-arrow-up-fill.svg
		case 614:
			return SVGIcons.fileEarmarkArrowUpFill(height, width);
		// file-earmark-arrow-up.svg
		case 615:
			return SVGIcons.fileEarmarkArrowUp(height, width);
		// file-earmark-bar-graph-fill.svg
		case 616:
			return SVGIcons.fileEarmarkBarGraphFill(height, width);
		// file-earmark-bar-graph.svg
		case 617:
			return SVGIcons.fileEarmarkBarGraph(height, width);
		// file-earmark-binary-fill.svg
		case 618:
			return SVGIcons.fileEarmarkBinaryFill(height, width);
		// file-earmark-binary.svg
		case 619:
			return SVGIcons.fileEarmarkBinary(height, width);
		// file-earmark-break-fill.svg
		case 620:
			return SVGIcons.fileEarmarkBreakFill(height, width);
		// file-earmark-break.svg
		case 621:
			return SVGIcons.fileEarmarkBreak(height, width);
		// file-earmark-check-fill.svg
		case 622:
			return SVGIcons.fileEarmarkCheckFill(height, width);
		// file-earmark-check.svg
		case 623:
			return SVGIcons.fileEarmarkCheck(height, width);
		// file-earmark-code-fill.svg
		case 624:
			return SVGIcons.fileEarmarkCodeFill(height, width);
		// file-earmark-code.svg
		case 625:
			return SVGIcons.fileEarmarkCode(height, width);
		// file-earmark-diff-fill.svg
		case 626:
			return SVGIcons.fileEarmarkDiffFill(height, width);
		// file-earmark-diff.svg
		case 627:
			return SVGIcons.fileEarmarkDiff(height, width);
		// file-earmark-easel-fill.svg
		case 628:
			return SVGIcons.fileEarmarkEaselFill(height, width);
		// file-earmark-easel.svg
		case 629:
			return SVGIcons.fileEarmarkEasel(height, width);
		// file-earmark-excel-fill.svg
		case 630:
			return SVGIcons.fileEarmarkExcelFill(height, width);
		// file-earmark-excel.svg
		case 631:
			return SVGIcons.fileEarmarkExcel(height, width);
		// file-earmark-fill.svg
		case 632:
			return SVGIcons.fileEarmarkFill(height, width);
		// file-earmark-font-fill.svg
		case 633:
			return SVGIcons.fileEarmarkFontFill(height, width);
		// file-earmark-font.svg
		case 634:
			return SVGIcons.fileEarmarkFont(height, width);
		// file-earmark-image-fill.svg
		case 635:
			return SVGIcons.fileEarmarkImageFill(height, width);
		// file-earmark-image.svg
		case 636:
			return SVGIcons.fileEarmarkImage(height, width);
		// file-earmark-lock-fill.svg
		case 637:
			return SVGIcons.fileEarmarkLockFill(height, width);
		// file-earmark-lock.svg
		case 638:
			return SVGIcons.fileEarmarkLock(height, width);
		// file-earmark-lock2-fill.svg
		case 639:
			return SVGIcons.fileEarmarkLock2Fill(height, width);
		// file-earmark-lock2.svg
		case 640:
			return SVGIcons.fileEarmarkLock2(height, width);
		// file-earmark-medical-fill.svg
		case 641:
			return SVGIcons.fileEarmarkMedicalFill(height, width);
		// file-earmark-medical.svg
		case 642:
			return SVGIcons.fileEarmarkMedical(height, width);
		// file-earmark-minus-fill.svg
		case 643:
			return SVGIcons.fileEarmarkMinusFill(height, width);
		// file-earmark-minus.svg
		case 644:
			return SVGIcons.fileEarmarkMinus(height, width);
		// file-earmark-music-fill.svg
		case 645:
			return SVGIcons.fileEarmarkMusicFill(height, width);
		// file-earmark-music.svg
		case 646:
			return SVGIcons.fileEarmarkMusic(height, width);
		// file-earmark-pdf-fill.svg
		case 647:
			return SVGIcons.fileEarmarkPdfFill(height, width);
		// file-earmark-pdf.svg
		case 648:
			return SVGIcons.fileEarmarkPdf(height, width);
		// file-earmark-person-fill.svg
		case 649:
			return SVGIcons.fileEarmarkPersonFill(height, width);
		// file-earmark-person.svg
		case 650:
			return SVGIcons.fileEarmarkPerson(height, width);
		// file-earmark-play-fill.svg
		case 651:
			return SVGIcons.fileEarmarkPlayFill(height, width);
		// file-earmark-play.svg
		case 652:
			return SVGIcons.fileEarmarkPlay(height, width);
		// file-earmark-plus-fill.svg
		case 653:
			return SVGIcons.fileEarmarkPlusFill(height, width);
		// file-earmark-plus.svg
		case 654:
			return SVGIcons.fileEarmarkPlus(height, width);
		// file-earmark-post-fill.svg
		case 655:
			return SVGIcons.fileEarmarkPostFill(height, width);
		// file-earmark-post.svg
		case 656:
			return SVGIcons.fileEarmarkPost(height, width);
		// file-earmark-ppt-fill.svg
		case 657:
			return SVGIcons.fileEarmarkPptFill(height, width);
		// file-earmark-ppt.svg
		case 658:
			return SVGIcons.fileEarmarkPpt(height, width);
		// file-earmark-richtext-fill.svg
		case 659:
			return SVGIcons.fileEarmarkRichtextFill(height, width);
		// file-earmark-richtext.svg
		case 660:
			return SVGIcons.fileEarmarkRichtext(height, width);
		// file-earmark-ruled-fill.svg
		case 661:
			return SVGIcons.fileEarmarkRuledFill(height, width);
		// file-earmark-ruled.svg
		case 662:
			return SVGIcons.fileEarmarkRuled(height, width);
		// file-earmark-slides-fill.svg
		case 663:
			return SVGIcons.fileEarmarkSlidesFill(height, width);
		// file-earmark-slides.svg
		case 664:
			return SVGIcons.fileEarmarkSlides(height, width);
		// file-earmark-spreadsheet-fill.svg
		case 665:
			return SVGIcons.fileEarmarkSpreadsheetFill(height, width);
		// file-earmark-spreadsheet.svg
		case 666:
			return SVGIcons.fileEarmarkSpreadsheet(height, width);
		// file-earmark-text-fill.svg
		case 667:
			return SVGIcons.fileEarmarkTextFill(height, width);
		// file-earmark-text.svg
		case 668:
			return SVGIcons.fileEarmarkText(height, width);
		// file-earmark-word-fill.svg
		case 669:
			return SVGIcons.fileEarmarkWordFill(height, width);
		// file-earmark-word.svg
		case 670:
			return SVGIcons.fileEarmarkWord(height, width);
		// file-earmark-x-fill.svg
		case 671:
			return SVGIcons.fileEarmarkXFill(height, width);
		// file-earmark-x.svg
		case 672:
			return SVGIcons.fileEarmarkX(height, width);
		// file-earmark-zip-fill.svg
		case 673:
			return SVGIcons.fileEarmarkZipFill(height, width);
		// file-earmark-zip.svg
		case 674:
			return SVGIcons.fileEarmarkZip(height, width);
		// file-earmark.svg
		case 675:
			return SVGIcons.fileEarmark(height, width);
		// file-easel-fill.svg
		case 676:
			return SVGIcons.fileEaselFill(height, width);
		// file-easel.svg
		case 677:
			return SVGIcons.fileEasel(height, width);
		// file-excel-fill.svg
		case 678:
			return SVGIcons.fileExcelFill(height, width);
		// file-excel.svg
		case 679:
			return SVGIcons.fileExcel(height, width);
		// file-fill.svg
		case 680:
			return SVGIcons.fileFill(height, width);
		// file-font-fill.svg
		case 681:
			return SVGIcons.fileFontFill(height, width);
		// file-font.svg
		case 682:
			return SVGIcons.fileFont(height, width);
		// file-image-fill.svg
		case 683:
			return SVGIcons.fileImageFill(height, width);
		// file-image.svg
		case 684:
			return SVGIcons.fileImage(height, width);
		// file-lock-fill.svg
		case 685:
			return SVGIcons.fileLockFill(height, width);
		// file-lock.svg
		case 686:
			return SVGIcons.fileLock(height, width);
		// file-lock2-fill.svg
		case 687:
			return SVGIcons.fileLock2Fill(height, width);
		// file-lock2.svg
		case 688:
			return SVGIcons.fileLock2(height, width);
		// file-medical-fill.svg
		case 689:
			return SVGIcons.fileMedicalFill(height, width);
		// file-medical.svg
		case 690:
			return SVGIcons.fileMedical(height, width);
		// file-minus-fill.svg
		case 691:
			return SVGIcons.fileMinusFill(height, width);
		// file-minus.svg
		case 692:
			return SVGIcons.fileMinus(height, width);
		// file-music-fill.svg
		case 693:
			return SVGIcons.fileMusicFill(height, width);
		// file-music.svg
		case 694:
			return SVGIcons.fileMusic(height, width);
		// file-pdf-fill.svg
		case 695:
			return SVGIcons.filePdfFill(height, width);
		// file-pdf.svg
		case 696:
			return SVGIcons.filePdf(height, width);
		// file-person-fill.svg
		case 697:
			return SVGIcons.filePersonFill(height, width);
		// file-person.svg
		case 698:
			return SVGIcons.filePerson(height, width);
		// file-play-fill.svg
		case 699:
			return SVGIcons.filePlayFill(height, width);
		// file-play.svg
		case 700:
			return SVGIcons.filePlay(height, width);
		// file-plus-fill.svg
		case 701:
			return SVGIcons.filePlusFill(height, width);
		// file-plus.svg
		case 702:
			return SVGIcons.filePlus(height, width);
		// file-post-fill.svg
		case 703:
			return SVGIcons.filePostFill(height, width);
		// file-post.svg
		case 704:
			return SVGIcons.filePost(height, width);
		// file-ppt-fill.svg
		case 705:
			return SVGIcons.filePptFill(height, width);
		// file-ppt.svg
		case 706:
			return SVGIcons.filePpt(height, width);
		// file-richtext-fill.svg
		case 707:
			return SVGIcons.fileRichtextFill(height, width);
		// file-richtext.svg
		case 708:
			return SVGIcons.fileRichtext(height, width);
		// file-ruled-fill.svg
		case 709:
			return SVGIcons.fileRuledFill(height, width);
		// file-ruled.svg
		case 710:
			return SVGIcons.fileRuled(height, width);
		// file-slides-fill.svg
		case 711:
			return SVGIcons.fileSlidesFill(height, width);
		// file-slides.svg
		case 712:
			return SVGIcons.fileSlides(height, width);
		// file-spreadsheet-fill.svg
		case 713:
			return SVGIcons.fileSpreadsheetFill(height, width);
		// file-spreadsheet.svg
		case 714:
			return SVGIcons.fileSpreadsheet(height, width);
		// file-text-fill.svg
		case 715:
			return SVGIcons.fileTextFill(height, width);
		// file-text.svg
		case 716:
			return SVGIcons.fileText(height, width);
		// file-word-fill.svg
		case 717:
			return SVGIcons.fileWordFill(height, width);
		// file-word.svg
		case 718:
			return SVGIcons.fileWord(height, width);
		// file-x-fill.svg
		case 719:
			return SVGIcons.fileXFill(height, width);
		// file-x.svg
		case 720:
			return SVGIcons.fileX(height, width);
		// file-zip-fill.svg
		case 721:
			return SVGIcons.fileZipFill(height, width);
		// file-zip.svg
		case 722:
			return SVGIcons.fileZip(height, width);
		// file.svg
		case 723:
			return SVGIcons.file(height, width);
		// files-alt.svg
		case 724:
			return SVGIcons.filesAlt(height, width);
		// files.svg
		case 725:
			return SVGIcons.files(height, width);
		// film.svg
		case 726:
			return SVGIcons.film(height, width);
		// filter-circle-fill.svg
		case 727:
			return SVGIcons.filterCircleFill(height, width);
		// filter-circle.svg
		case 728:
			return SVGIcons.filterCircle(height, width);
		// filter-left.svg
		case 729:
			return SVGIcons.filterLeft(height, width);
		// filter-right.svg
		case 730:
			return SVGIcons.filterRight(height, width);
		// filter-square-fill.svg
		case 731:
			return SVGIcons.filterSquareFill(height, width);
		// filter-square.svg
		case 732:
			return SVGIcons.filterSquare(height, width);
		// filter.svg
		case 733:
			return SVGIcons.filter(height, width);
		// flag-fill.svg
		case 734:
			return SVGIcons.flagFill(height, width);
		// flag.svg
		case 735:
			return SVGIcons.flag(height, width);
		// flower1.svg
		case 736:
			return SVGIcons.flower1(height, width);
		// flower2.svg
		case 737:
			return SVGIcons.flower2(height, width);
		// flower3.svg
		case 738:
			return SVGIcons.flower3(height, width);
		// folder-check.svg
		case 739:
			return SVGIcons.folderCheck(height, width);
		// folder-fill.svg
		case 740:
			return SVGIcons.folderFill(height, width);
		// folder-minus.svg
		case 741:
			return SVGIcons.folderMinus(height, width);
		// folder-plus.svg
		case 742:
			return SVGIcons.folderPlus(height, width);
		// folder-symlink-fill.svg
		case 743:
			return SVGIcons.folderSymlinkFill(height, width);
		// folder-symlink.svg
		case 744:
			return SVGIcons.folderSymlink(height, width);
		// folder-x.svg
		case 745:
			return SVGIcons.folderX(height, width);
		// folder.svg
		case 746:
			return SVGIcons.folder(height, width);
		// folder2-open.svg
		case 747:
			return SVGIcons.folder2Open(height, width);
		// folder2.svg
		case 748:
			return SVGIcons.folder2(height, width);
		// fonts.svg
		case 749:
			return SVGIcons.fonts(height, width);
		// forward-fill.svg
		case 750:
			return SVGIcons.forwardFill(height, width);
		// forward.svg
		case 751:
			return SVGIcons.forward(height, width);
		// front.svg
		case 752:
			return SVGIcons.front(height, width);
		// fullscreen-exit.svg
		case 753:
			return SVGIcons.fullscreenExit(height, width);
		// fullscreen.svg
		case 754:
			return SVGIcons.fullscreen(height, width);
		// funnel-fill.svg
		case 755:
			return SVGIcons.funnelFill(height, width);
		// funnel.svg
		case 756:
			return SVGIcons.funnel(height, width);
		// gear-fill.svg
		case 757:
			return SVGIcons.gearFill(height, width);
		// gear-wide-connected.svg
		case 758:
			return SVGIcons.gearWideConnected(height, width);
		// gear-wide.svg
		case 759:
			return SVGIcons.gearWide(height, width);
		// gear.svg
		case 760:
			return SVGIcons.gear(height, width);
		// gem.svg
		case 761:
			return SVGIcons.gem(height, width);
		// gender-ambiguous.svg
		case 762:
			return SVGIcons.genderAmbiguous(height, width);
		// gender-female.svg
		case 763:
			return SVGIcons.genderFemale(height, width);
		// gender-male.svg
		case 764:
			return SVGIcons.genderMale(height, width);
		// gender-trans.svg
		case 765:
			return SVGIcons.genderTrans(height, width);
		// geo-alt-fill.svg
		case 766:
			return SVGIcons.geoAltFill(height, width);
		// geo-alt.svg
		case 767:
			return SVGIcons.geoAlt(height, width);
		// geo-fill.svg
		case 768:
			return SVGIcons.geoFill(height, width);
		// geo.svg
		case 769:
			return SVGIcons.geo(height, width);
		// gift-fill.svg
		case 770:
			return SVGIcons.giftFill(height, width);
		// gift.svg
		case 771:
			return SVGIcons.gift(height, width);
		// github.svg
		case 772:
			return SVGIcons.github(height, width);
		// globe.svg
		case 773:
			return SVGIcons.globe(height, width);
		// globe2.svg
		case 774:
			return SVGIcons.globe2(height, width);
		// google.svg
		case 775:
			return SVGIcons.google(height, width);
		// graph-down.svg
		case 776:
			return SVGIcons.graphDown(height, width);
		// graph-up.svg
		case 777:
			return SVGIcons.graphUp(height, width);
		// grid-1x2-fill.svg
		case 778:
			return SVGIcons.grid1x2Fill(height, width);
		// grid-1x2.svg
		case 779:
			return SVGIcons.grid1x2(height, width);
		// grid-3x2-gap-fill.svg
		case 780:
			return SVGIcons.grid3x2GapFill(height, width);
		// grid-3x2-gap.svg
		case 781:
			return SVGIcons.grid3x2Gap(height, width);
		// grid-3x2.svg
		case 782:
			return SVGIcons.grid3x2(height, width);
		// grid-3x3-gap-fill.svg
		case 783:
			return SVGIcons.grid3x3GapFill(height, width);
		// grid-3x3-gap.svg
		case 784:
			return SVGIcons.grid3x3Gap(height, width);
		// grid-3x3.svg
		case 785:
			return SVGIcons.grid3x3(height, width);
		// grid-fill.svg
		case 786:
			return SVGIcons.gridFill(height, width);
		// grid.svg
		case 787:
			return SVGIcons.grid(height, width);
		// grip-horizontal.svg
		case 788:
			return SVGIcons.gripHorizontal(height, width);
		// grip-vertical.svg
		case 789:
			return SVGIcons.gripVertical(height, width);
		// hammer.svg
		case 790:
			return SVGIcons.hammer(height, width);
		// hand-index-fill.svg
		case 791:
			return SVGIcons.handIndexFill(height, width);
		// hand-index-thumb-fill.svg
		case 792:
			return SVGIcons.handIndexThumbFill(height, width);
		// hand-index-thumb.svg
		case 793:
			return SVGIcons.handIndexThumb(height, width);
		// hand-index.svg
		case 794:
			return SVGIcons.handIndex(height, width);
		// hand-thumbs-down-fill.svg
		case 795:
			return SVGIcons.handThumbsDownFill(height, width);
		// hand-thumbs-down.svg
		case 796:
			return SVGIcons.handThumbsDown(height, width);
		// hand-thumbs-up-fill.svg
		case 797:
			return SVGIcons.handThumbsUpFill(height, width);
		// hand-thumbs-up.svg
		case 798:
			return SVGIcons.handThumbsUp(height, width);
		// handbag-fill.svg
		case 799:
			return SVGIcons.handbagFill(height, width);
		// handbag.svg
		case 800:
			return SVGIcons.handbag(height, width);
		// hash.svg
		case 801:
			return SVGIcons.hash(height, width);
		// hdd-fill.svg
		case 802:
			return SVGIcons.hddFill(height, width);
		// hdd-network-fill.svg
		case 803:
			return SVGIcons.hddNetworkFill(height, width);
		// hdd-network.svg
		case 804:
			return SVGIcons.hddNetwork(height, width);
		// hdd-rack-fill.svg
		case 805:
			return SVGIcons.hddRackFill(height, width);
		// hdd-rack.svg
		case 806:
			return SVGIcons.hddRack(height, width);
		// hdd-stack-fill.svg
		case 807:
			return SVGIcons.hddStackFill(height, width);
		// hdd-stack.svg
		case 808:
			return SVGIcons.hddStack(height, width);
		// hdd.svg
		case 809:
			return SVGIcons.hdd(height, width);
		// headphones.svg
		case 810:
			return SVGIcons.headphones(height, width);
		// headset-vr.svg
		case 811:
			return SVGIcons.headsetVr(height, width);
		// headset.svg
		case 812:
			return SVGIcons.headset(height, width);
		// heart-fill.svg
		case 813:
			return SVGIcons.heartFill(height, width);
		// heart-half.svg
		case 814:
			return SVGIcons.heartHalf(height, width);
		// heart.svg
		case 815:
			return SVGIcons.heart(height, width);
		// heptagon-fill.svg
		case 816:
			return SVGIcons.heptagonFill(height, width);
		// heptagon-half.svg
		case 817:
			return SVGIcons.heptagonHalf(height, width);
		// heptagon.svg
		case 818:
			return SVGIcons.heptagon(height, width);
		// hexagon-fill.svg
		case 819:
			return SVGIcons.hexagonFill(height, width);
		// hexagon-half.svg
		case 820:
			return SVGIcons.hexagonHalf(height, width);
		// hexagon.svg
		case 821:
			return SVGIcons.hexagon(height, width);
		// hourglass-bottom.svg
		case 822:
			return SVGIcons.hourglassBottom(height, width);
		// hourglass-split.svg
		case 823:
			return SVGIcons.hourglassSplit(height, width);
		// hourglass-top.svg
		case 824:
			return SVGIcons.hourglassTop(height, width);
		// hourglass.svg
		case 825:
			return SVGIcons.hourglass(height, width);
		// house-door-fill.svg
		case 826:
			return SVGIcons.houseDoorFill(height, width);
		// house-door.svg
		case 827:
			return SVGIcons.houseDoor(height, width);
		// house-fill.svg
		case 828:
			return SVGIcons.houseFill(height, width);
		// house.svg
		case 829:
			return SVGIcons.house(height, width);
		// hr.svg
		case 830:
			return SVGIcons.hr(height, width);
		// hurricane.svg
		case 831:
			return SVGIcons.hurricane(height, width);
		// image-alt.svg
		case 832:
			return SVGIcons.imageAlt(height, width);
		// image-fill.svg
		case 833:
			return SVGIcons.imageFill(height, width);
		// image.svg
		case 834:
			return SVGIcons.image(height, width);
		// images.svg
		case 835:
			return SVGIcons.images(height, width);
		// inbox-fill.svg
		case 836:
			return SVGIcons.inboxFill(height, width);
		// inbox.svg
		case 837:
			return SVGIcons.inbox(height, width);
		// inboxes-fill.svg
		case 838:
			return SVGIcons.inboxesFill(height, width);
		// inboxes.svg
		case 839:
			return SVGIcons.inboxes(height, width);
		// info-circle-fill.svg
		case 840:
			return SVGIcons.infoCircleFill(height, width);
		// info-circle.svg
		case 841:
			return SVGIcons.infoCircle(height, width);
		// info-lg.svg
		case 842:
			return SVGIcons.infoLg(height, width);
		// info-square-fill.svg
		case 843:
			return SVGIcons.infoSquareFill(height, width);
		// info-square.svg
		case 844:
			return SVGIcons.infoSquare(height, width);
		// info.svg
		case 845:
			return SVGIcons.info(height, width);
		// input-cursor-text.svg
		case 846:
			return SVGIcons.inputCursorText(height, width);
		// input-cursor.svg
		case 847:
			return SVGIcons.inputCursor(height, width);
		// instagram.svg
		case 848:
			return SVGIcons.instagram(height, width);
		// intersect.svg
		case 849:
			return SVGIcons.intersect(height, width);
		// journal-album.svg
		case 850:
			return SVGIcons.journalAlbum(height, width);
		// journal-arrow-down.svg
		case 851:
			return SVGIcons.journalArrowDown(height, width);
		// journal-arrow-up.svg
		case 852:
			return SVGIcons.journalArrowUp(height, width);
		// journal-bookmark-fill.svg
		case 853:
			return SVGIcons.journalBookmarkFill(height, width);
		// journal-bookmark.svg
		case 854:
			return SVGIcons.journalBookmark(height, width);
		// journal-check.svg
		case 855:
			return SVGIcons.journalCheck(height, width);
		// journal-code.svg
		case 856:
			return SVGIcons.journalCode(height, width);
		// journal-medical.svg
		case 857:
			return SVGIcons.journalMedical(height, width);
		// journal-minus.svg
		case 858:
			return SVGIcons.journalMinus(height, width);
		// journal-plus.svg
		case 859:
			return SVGIcons.journalPlus(height, width);
		// journal-richtext.svg
		case 860:
			return SVGIcons.journalRichtext(height, width);
		// journal-text.svg
		case 861:
			return SVGIcons.journalText(height, width);
		// journal-x.svg
		case 862:
			return SVGIcons.journalX(height, width);
		// journal.svg
		case 863:
			return SVGIcons.journal(height, width);
		// journals.svg
		case 864:
			return SVGIcons.journals(height, width);
		// joystick.svg
		case 865:
			return SVGIcons.joystick(height, width);
		// justify-left.svg
		case 866:
			return SVGIcons.justifyLeft(height, width);
		// justify-right.svg
		case 867:
			return SVGIcons.justifyRight(height, width);
		// justify.svg
		case 868:
			return SVGIcons.justify(height, width);
		// kanban-fill.svg
		case 869:
			return SVGIcons.kanbanFill(height, width);
		// kanban.svg
		case 870:
			return SVGIcons.kanban(height, width);
		// key-fill.svg
		case 871:
			return SVGIcons.keyFill(height, width);
		// key.svg
		case 872:
			return SVGIcons.key(height, width);
		// keyboard-fill.svg
		case 873:
			return SVGIcons.keyboardFill(height, width);
		// keyboard.svg
		case 874:
			return SVGIcons.keyboard(height, width);
		// ladder.svg
		case 875:
			return SVGIcons.ladder(height, width);
		// lamp-fill.svg
		case 876:
			return SVGIcons.lampFill(height, width);
		// lamp.svg
		case 877:
			return SVGIcons.lamp(height, width);
		// laptop-fill.svg
		case 878:
			return SVGIcons.laptopFill(height, width);
		// laptop.svg
		case 879:
			return SVGIcons.laptop(height, width);
		// layer-backward.svg
		case 880:
			return SVGIcons.layerBackward(height, width);
		// layer-forward.svg
		case 881:
			return SVGIcons.layerForward(height, width);
		// layers-fill.svg
		case 882:
			return SVGIcons.layersFill(height, width);
		// layers-half.svg
		case 883:
			return SVGIcons.layersHalf(height, width);
		// layers.svg
		case 884:
			return SVGIcons.layers(height, width);
		// layout-sidebar-inset-reverse.svg
		case 885:
			return SVGIcons.layoutSidebarInsetReverse(height, width);
		// layout-sidebar-inset.svg
		case 886:
			return SVGIcons.layoutSidebarInset(height, width);
		// layout-sidebar-reverse.svg
		case 887:
			return SVGIcons.layoutSidebarReverse(height, width);
		// layout-sidebar.svg
		case 888:
			return SVGIcons.layoutSidebar(height, width);
		// layout-split.svg
		case 889:
			return SVGIcons.layoutSplit(height, width);
		// layout-text-sidebar-reverse.svg
		case 890:
			return SVGIcons.layoutTextSidebarReverse(height, width);
		// layout-text-sidebar.svg
		case 891:
			return SVGIcons.layoutTextSidebar(height, width);
		// layout-text-window-reverse.svg
		case 892:
			return SVGIcons.layoutTextWindowReverse(height, width);
		// layout-text-window.svg
		case 893:
			return SVGIcons.layoutTextWindow(height, width);
		// layout-three-columns.svg
		case 894:
			return SVGIcons.layoutThreeColumns(height, width);
		// layout-wtf.svg
		case 895:
			return SVGIcons.layoutWtf(height, width);
		// life-preserver.svg
		case 896:
			return SVGIcons.lifePreserver(height, width);
		// lightbulb-fill.svg
		case 897:
			return SVGIcons.lightbulbFill(height, width);
		// lightbulb-off-fill.svg
		case 898:
			return SVGIcons.lightbulbOffFill(height, width);
		// lightbulb-off.svg
		case 899:
			return SVGIcons.lightbulbOff(height, width);
		// lightbulb.svg
		case 900:
			return SVGIcons.lightbulb(height, width);
		// lightning-charge-fill.svg
		case 901:
			return SVGIcons.lightningChargeFill(height, width);
		// lightning-charge.svg
		case 902:
			return SVGIcons.lightningCharge(height, width);
		// lightning-fill.svg
		case 903:
			return SVGIcons.lightningFill(height, width);
		// lightning.svg
		case 904:
			return SVGIcons.lightning(height, width);
		// link-45deg.svg
		case 905:
			return SVGIcons.link45deg(height, width);
		// link.svg
		case 906:
			return SVGIcons.link(height, width);
		// linkedin.svg
		case 907:
			return SVGIcons.linkedin(height, width);
		// list-check.svg
		case 908:
			return SVGIcons.listCheck(height, width);
		// list-nested.svg
		case 909:
			return SVGIcons.listNested(height, width);
		// list-ol.svg
		case 910:
			return SVGIcons.listOl(height, width);
		// list-stars.svg
		case 911:
			return SVGIcons.listStars(height, width);
		// list-task.svg
		case 912:
			return SVGIcons.listTask(height, width);
		// list-ul.svg
		case 913:
			return SVGIcons.listUl(height, width);
		// list.svg
		case 914:
			return SVGIcons.list(height, width);
		// lock-fill.svg
		case 915:
			return SVGIcons.lockFill(height, width);
		// lock.svg
		case 916:
			return SVGIcons.lock(height, width);
		// mailbox.svg
		case 917:
			return SVGIcons.mailbox(height, width);
		// mailbox2.svg
		case 918:
			return SVGIcons.mailbox2(height, width);
		// map-fill.svg
		case 919:
			return SVGIcons.mapFill(height, width);
		// map.svg
		case 920:
			return SVGIcons.map(height, width);
		// markdown-fill.svg
		case 921:
			return SVGIcons.markdownFill(height, width);
		// markdown.svg
		case 922:
			return SVGIcons.markdown(height, width);
		// mask.svg
		case 923:
			return SVGIcons.mask(height, width);
		// mastodon.svg
		case 924:
			return SVGIcons.mastodon(height, width);
		// megaphone-fill.svg
		case 925:
			return SVGIcons.megaphoneFill(height, width);
		// megaphone.svg
		case 926:
			return SVGIcons.megaphone(height, width);
		// menu-app-fill.svg
		case 927:
			return SVGIcons.menuAppFill(height, width);
		// menu-app.svg
		case 928:
			return SVGIcons.menuApp(height, width);
		// menu-button-fill.svg
		case 929:
			return SVGIcons.menuButtonFill(height, width);
		// menu-button-wide-fill.svg
		case 930:
			return SVGIcons.menuButtonWideFill(height, width);
		// menu-button-wide.svg
		case 931:
			return SVGIcons.menuButtonWide(height, width);
		// menu-button.svg
		case 932:
			return SVGIcons.menuButton(height, width);
		// menu-down.svg
		case 933:
			return SVGIcons.menuDown(height, width);
		// menu-up.svg
		case 934:
			return SVGIcons.menuUp(height, width);
		// messenger.svg
		case 935:
			return SVGIcons.messenger(height, width);
		// mic-fill.svg
		case 936:
			return SVGIcons.micFill(height, width);
		// mic-mute-fill.svg
		case 937:
			return SVGIcons.micMuteFill(height, width);
		// mic-mute.svg
		case 938:
			return SVGIcons.micMute(height, width);
		// mic.svg
		case 939:
			return SVGIcons.mic(height, width);
		// minecart-loaded.svg
		case 940:
			return SVGIcons.minecartLoaded(height, width);
		// minecart.svg
		case 941:
			return SVGIcons.minecart(height, width);
		// moisture.svg
		case 942:
			return SVGIcons.moisture(height, width);
		// moon-fill.svg
		case 943:
			return SVGIcons.moonFill(height, width);
		// moon-stars-fill.svg
		case 944:
			return SVGIcons.moonStarsFill(height, width);
		// moon-stars.svg
		case 945:
			return SVGIcons.moonStars(height, width);
		// moon.svg
		case 946:
			return SVGIcons.moon(height, width);
		// mouse-fill.svg
		case 947:
			return SVGIcons.mouseFill(height, width);
		// mouse.svg
		case 948:
			return SVGIcons.mouse(height, width);
		// mouse2-fill.svg
		case 949:
			return SVGIcons.mouse2Fill(height, width);
		// mouse2.svg
		case 950:
			return SVGIcons.mouse2(height, width);
		// mouse3-fill.svg
		case 951:
			return SVGIcons.mouse3Fill(height, width);
		// mouse3.svg
		case 952:
			return SVGIcons.mouse3(height, width);
		// music-note-beamed.svg
		case 953:
			return SVGIcons.musicNoteBeamed(height, width);
		// music-note-list.svg
		case 954:
			return SVGIcons.musicNoteList(height, width);
		// music-note.svg
		case 955:
			return SVGIcons.musicNote(height, width);
		// music-player-fill.svg
		case 956:
			return SVGIcons.musicPlayerFill(height, width);
		// music-player.svg
		case 957:
			return SVGIcons.musicPlayer(height, width);
		// newspaper.svg
		case 958:
			return SVGIcons.newspaper(height, width);
		// node-minus-fill.svg
		case 959:
			return SVGIcons.nodeMinusFill(height, width);
		// node-minus.svg
		case 960:
			return SVGIcons.nodeMinus(height, width);
		// node-plus-fill.svg
		case 961:
			return SVGIcons.nodePlusFill(height, width);
		// node-plus.svg
		case 962:
			return SVGIcons.nodePlus(height, width);
		// nut-fill.svg
		case 963:
			return SVGIcons.nutFill(height, width);
		// nut.svg
		case 964:
			return SVGIcons.nut(height, width);
		// octagon-fill.svg
		case 965:
			return SVGIcons.octagonFill(height, width);
		// octagon-half.svg
		case 966:
			return SVGIcons.octagonHalf(height, width);
		// octagon.svg
		case 967:
			return SVGIcons.octagon(height, width);
		// option.svg
		case 968:
			return SVGIcons.option(height, width);
		// outlet.svg
		case 969:
			return SVGIcons.outlet(height, width);
		// paint-bucket.svg
		case 970:
			return SVGIcons.paintBucket(height, width);
		// palette-fill.svg
		case 971:
			return SVGIcons.paletteFill(height, width);
		// palette.svg
		case 972:
			return SVGIcons.palette(height, width);
		// palette2.svg
		case 973:
			return SVGIcons.palette2(height, width);
		// paperclip.svg
		case 974:
			return SVGIcons.paperclip(height, width);
		// paragraph.svg
		case 975:
			return SVGIcons.paragraph(height, width);
		// patch-check-fill.svg
		case 976:
			return SVGIcons.patchCheckFill(height, width);
		// patch-check.svg
		case 977:
			return SVGIcons.patchCheck(height, width);
		// patch-exclamation-fill.svg
		case 978:
			return SVGIcons.patchExclamationFill(height, width);
		// patch-exclamation.svg
		case 979:
			return SVGIcons.patchExclamation(height, width);
		// patch-minus-fill.svg
		case 980:
			return SVGIcons.patchMinusFill(height, width);
		// patch-minus.svg
		case 981:
			return SVGIcons.patchMinus(height, width);
		// patch-plus-fill.svg
		case 982:
			return SVGIcons.patchPlusFill(height, width);
		// patch-plus.svg
		case 983:
			return SVGIcons.patchPlus(height, width);
		// patch-question-fill.svg
		case 984:
			return SVGIcons.patchQuestionFill(height, width);
		// patch-question.svg
		case 985:
			return SVGIcons.patchQuestion(height, width);
		// pause-btn-fill.svg
		case 986:
			return SVGIcons.pauseBtnFill(height, width);
		// pause-btn.svg
		case 987:
			return SVGIcons.pauseBtn(height, width);
		// pause-circle-fill.svg
		case 988:
			return SVGIcons.pauseCircleFill(height, width);
		// pause-circle.svg
		case 989:
			return SVGIcons.pauseCircle(height, width);
		// pause-fill.svg
		case 990:
			return SVGIcons.pauseFill(height, width);
		// pause.svg
		case 991:
			return SVGIcons.pause(height, width);
		// peace-fill.svg
		case 992:
			return SVGIcons.peaceFill(height, width);
		// peace.svg
		case 993:
			return SVGIcons.peace(height, width);
		// pen-fill.svg
		case 994:
			return SVGIcons.penFill(height, width);
		// pen.svg
		case 995:
			return SVGIcons.pen(height, width);
		// pencil-fill.svg
		case 996:
			return SVGIcons.pencilFill(height, width);
		// pencil-square.svg
		case 997:
			return SVGIcons.pencilSquare(height, width);
		// pencil.svg
		case 998:
			return SVGIcons.pencil(height, width);
		// pentagon-fill.svg
		case 999:
			return SVGIcons.pentagonFill(height, width);
		// pentagon-half.svg
		case 1000:
			return SVGIcons.pentagonHalf(height, width);
		// pentagon.svg
		case 1001:
			return SVGIcons.pentagon(height, width);
		// people-fill.svg
		case 1002:
			return SVGIcons.peopleFill(height, width);
		// people.svg
		case 1003:
			return SVGIcons.people(height, width);
		// percent.svg
		case 1004:
			return SVGIcons.percent(height, width);
		// person-badge-fill.svg
		case 1005:
			return SVGIcons.personBadgeFill(height, width);
		// person-badge.svg
		case 1006:
			return SVGIcons.personBadge(height, width);
		// person-bounding-box.svg
		case 1007:
			return SVGIcons.personBoundingBox(height, width);
		// person-check-fill.svg
		case 1008:
			return SVGIcons.personCheckFill(height, width);
		// person-check.svg
		case 1009:
			return SVGIcons.personCheck(height, width);
		// person-circle.svg
		case 1010:
			return SVGIcons.personCircle(height, width);
		// person-dash-fill.svg
		case 1011:
			return SVGIcons.personDashFill(height, width);
		// person-dash.svg
		case 1012:
			return SVGIcons.personDash(height, width);
		// person-fill.svg
		case 1013:
			return SVGIcons.personFill(height, width);
		// person-lines-fill.svg
		case 1014:
			return SVGIcons.personLinesFill(height, width);
		// person-plus-fill.svg
		case 1015:
			return SVGIcons.personPlusFill(height, width);
		// person-plus.svg
		case 1016:
			return SVGIcons.personPlus(height, width);
		// person-square.svg
		case 1017:
			return SVGIcons.personSquare(height, width);
		// person-x-fill.svg
		case 1018:
			return SVGIcons.personXFill(height, width);
		// person-x.svg
		case 1019:
			return SVGIcons.personX(height, width);
		// person.svg
		case 1020:
			return SVGIcons.person(height, width);
		// phone-fill.svg
		case 1021:
			return SVGIcons.phoneFill(height, width);
		// phone-landscape-fill.svg
		case 1022:
			return SVGIcons.phoneLandscapeFill(height, width);
		// phone-landscape.svg
		case 1023:
			return SVGIcons.phoneLandscape(height, width);
		// phone-vibrate-fill.svg
		case 1024:
			return SVGIcons.phoneVibrateFill(height, width);
		// phone-vibrate.svg
		case 1025:
			return SVGIcons.phoneVibrate(height, width);
		// phone.svg
		case 1026:
			return SVGIcons.phone(height, width);
		// pie-chart-fill.svg
		case 1027:
			return SVGIcons.pieChartFill(height, width);
		// pie-chart.svg
		case 1028:
			return SVGIcons.pieChart(height, width);
		// piggy-bank-fill.svg
		case 1029:
			return SVGIcons.piggyBankFill(height, width);
		// piggy-bank.svg
		case 1030:
			return SVGIcons.piggyBank(height, width);
		// pin-angle-fill.svg
		case 1031:
			return SVGIcons.pinAngleFill(height, width);
		// pin-angle.svg
		case 1032:
			return SVGIcons.pinAngle(height, width);
		// pin-fill.svg
		case 1033:
			return SVGIcons.pinFill(height, width);
		// pin-map-fill.svg
		case 1034:
			return SVGIcons.pinMapFill(height, width);
		// pin-map.svg
		case 1035:
			return SVGIcons.pinMap(height, width);
		// pin.svg
		case 1036:
			return SVGIcons.pin(height, width);
		// pip-fill.svg
		case 1037:
			return SVGIcons.pipFill(height, width);
		// pip.svg
		case 1038:
			return SVGIcons.pip(height, width);
		// play-btn-fill.svg
		case 1039:
			return SVGIcons.playBtnFill(height, width);
		// play-btn.svg
		case 1040:
			return SVGIcons.playBtn(height, width);
		// play-circle-fill.svg
		case 1041:
			return SVGIcons.playCircleFill(height, width);
		// play-circle.svg
		case 1042:
			return SVGIcons.playCircle(height, width);
		// play-fill.svg
		case 1043:
			return SVGIcons.playFill(height, width);
		// play.svg
		case 1044:
			return SVGIcons.play(height, width);
		// plug-fill.svg
		case 1045:
			return SVGIcons.plugFill(height, width);
		// plug.svg
		case 1046:
			return SVGIcons.plug(height, width);
		// plus-circle-dotted.svg
		case 1047:
			return SVGIcons.plusCircleDotted(height, width);
		// plus-circle-fill.svg
		case 1048:
			return SVGIcons.plusCircleFill(height, width);
		// plus-circle.svg
		case 1049:
			return SVGIcons.plusCircle(height, width);
		// plus-lg.svg
		case 1050:
			return SVGIcons.plusLg(height, width);
		// plus-square-dotted.svg
		case 1051:
			return SVGIcons.plusSquareDotted(height, width);
		// plus-square-fill.svg
		case 1052:
			return SVGIcons.plusSquareFill(height, width);
		// plus-square.svg
		case 1053:
			return SVGIcons.plusSquare(height, width);
		// plus.svg
		case 1054:
			return SVGIcons.plus(height, width);
		// power.svg
		case 1055:
			return SVGIcons.power(height, width);
		// printer-fill.svg
		case 1056:
			return SVGIcons.printerFill(height, width);
		// printer.svg
		case 1057:
			return SVGIcons.printer(height, width);
		// puzzle-fill.svg
		case 1058:
			return SVGIcons.puzzleFill(height, width);
		// puzzle.svg
		case 1059:
			return SVGIcons.puzzle(height, width);
		// question-circle-fill.svg
		case 1060:
			return SVGIcons.questionCircleFill(height, width);
		// question-circle.svg
		case 1061:
			return SVGIcons.questionCircle(height, width);
		// question-diamond-fill.svg
		case 1062:
			return SVGIcons.questionDiamondFill(height, width);
		// question-diamond.svg
		case 1063:
			return SVGIcons.questionDiamond(height, width);
		// question-lg.svg
		case 1064:
			return SVGIcons.questionLg(height, width);
		// question-octagon-fill.svg
		case 1065:
			return SVGIcons.questionOctagonFill(height, width);
		// question-octagon.svg
		case 1066:
			return SVGIcons.questionOctagon(height, width);
		// question-square-fill.svg
		case 1067:
			return SVGIcons.questionSquareFill(height, width);
		// question-square.svg
		case 1068:
			return SVGIcons.questionSquare(height, width);
		// question.svg
		case 1069:
			return SVGIcons.question(height, width);
		// rainbow.svg
		case 1070:
			return SVGIcons.rainbow(height, width);
		// receipt-cutoff.svg
		case 1071:
			return SVGIcons.receiptCutoff(height, width);
		// receipt.svg
		case 1072:
			return SVGIcons.receipt(height, width);
		// reception-0.svg
		case 1073:
			return SVGIcons.reception0(height, width);
		// reception-1.svg
		case 1074:
			return SVGIcons.reception1(height, width);
		// reception-2.svg
		case 1075:
			return SVGIcons.reception2(height, width);
		// reception-3.svg
		case 1076:
			return SVGIcons.reception3(height, width);
		// reception-4.svg
		case 1077:
			return SVGIcons.reception4(height, width);
		// record-btn-fill.svg
		case 1078:
			return SVGIcons.recordBtnFill(height, width);
		// record-btn.svg
		case 1079:
			return SVGIcons.recordBtn(height, width);
		// record-circle-fill.svg
		case 1080:
			return SVGIcons.recordCircleFill(height, width);
		// record-circle.svg
		case 1081:
			return SVGIcons.recordCircle(height, width);
		// record-fill.svg
		case 1082:
			return SVGIcons.recordFill(height, width);
		// record.svg
		case 1083:
			return SVGIcons.record(height, width);
		// record2-fill.svg
		case 1084:
			return SVGIcons.record2Fill(height, width);
		// record2.svg
		case 1085:
			return SVGIcons.record2(height, width);
		// recycle.svg
		case 1086:
			return SVGIcons.recycle(height, width);
		// reddit.svg
		case 1087:
			return SVGIcons.reddit(height, width);
		// reply-all-fill.svg
		case 1088:
			return SVGIcons.replyAllFill(height, width);
		// reply-all.svg
		case 1089:
			return SVGIcons.replyAll(height, width);
		// reply-fill.svg
		case 1090:
			return SVGIcons.replyFill(height, width);
		// reply.svg
		case 1091:
			return SVGIcons.reply(height, width);
		// rss-fill.svg
		case 1092:
			return SVGIcons.rssFill(height, width);
		// rss.svg
		case 1093:
			return SVGIcons.rss(height, width);
		// rulers.svg
		case 1094:
			return SVGIcons.rulers(height, width);
		// safe-fill.svg
		case 1095:
			return SVGIcons.safeFill(height, width);
		// safe.svg
		case 1096:
			return SVGIcons.safe(height, width);
		// safe2-fill.svg
		case 1097:
			return SVGIcons.safe2Fill(height, width);
		// safe2.svg
		case 1098:
			return SVGIcons.safe2(height, width);
		// save-fill.svg
		case 1099:
			return SVGIcons.saveFill(height, width);
		// save.svg
		case 1100:
			return SVGIcons.save(height, width);
		// save2-fill.svg
		case 1101:
			return SVGIcons.save2Fill(height, width);
		// save2.svg
		case 1102:
			return SVGIcons.save2(height, width);
		// scissors.svg
		case 1103:
			return SVGIcons.scissors(height, width);
		// screwdriver.svg
		case 1104:
			return SVGIcons.screwdriver(height, width);
		// sd-card-fill.svg
		case 1105:
			return SVGIcons.sdCardFill(height, width);
		// sd-card.svg
		case 1106:
			return SVGIcons.sdCard(height, width);
		// search.svg
		case 1107:
			return SVGIcons.search(height, width);
		// segmented-nav.svg
		case 1108:
			return SVGIcons.segmentedNav(height, width);
		// server.svg
		case 1109:
			return SVGIcons.server(height, width);
		// share-fill.svg
		case 1110:
			return SVGIcons.shareFill(height, width);
		// share.svg
		case 1111:
			return SVGIcons.share(height, width);
		// shield-check.svg
		case 1112:
			return SVGIcons.shieldCheck(height, width);
		// shield-exclamation.svg
		case 1113:
			return SVGIcons.shieldExclamation(height, width);
		// shield-fill-check.svg
		case 1114:
			return SVGIcons.shieldFillCheck(height, width);
		// shield-fill-exclamation.svg
		case 1115:
			return SVGIcons.shieldFillExclamation(height, width);
		// shield-fill-minus.svg
		case 1116:
			return SVGIcons.shieldFillMinus(height, width);
		// shield-fill-plus.svg
		case 1117:
			return SVGIcons.shieldFillPlus(height, width);
		// shield-fill-x.svg
		case 1118:
			return SVGIcons.shieldFillX(height, width);
		// shield-fill.svg
		case 1119:
			return SVGIcons.shieldFill(height, width);
		// shield-lock-fill.svg
		case 1120:
			return SVGIcons.shieldLockFill(height, width);
		// shield-lock.svg
		case 1121:
			return SVGIcons.shieldLock(height, width);
		// shield-minus.svg
		case 1122:
			return SVGIcons.shieldMinus(height, width);
		// shield-plus.svg
		case 1123:
			return SVGIcons.shieldPlus(height, width);
		// shield-shaded.svg
		case 1124:
			return SVGIcons.shieldShaded(height, width);
		// shield-slash-fill.svg
		case 1125:
			return SVGIcons.shieldSlashFill(height, width);
		// shield-slash.svg
		case 1126:
			return SVGIcons.shieldSlash(height, width);
		// shield-x.svg
		case 1127:
			return SVGIcons.shieldX(height, width);
		// shield.svg
		case 1128:
			return SVGIcons.shield(height, width);
		// shift-fill.svg
		case 1129:
			return SVGIcons.shiftFill(height, width);
		// shift.svg
		case 1130:
			return SVGIcons.shift(height, width);
		// shop-window.svg
		case 1131:
			return SVGIcons.shopWindow(height, width);
		// shop.svg
		case 1132:
			return SVGIcons.shop(height, width);
		// shuffle.svg
		case 1133:
			return SVGIcons.shuffle(height, width);
		// signpost-2-fill.svg
		case 1134:
			return SVGIcons.signpost2Fill(height, width);
		// signpost-2.svg
		case 1135:
			return SVGIcons.signpost2(height, width);
		// signpost-fill.svg
		case 1136:
			return SVGIcons.signpostFill(height, width);
		// signpost-split-fill.svg
		case 1137:
			return SVGIcons.signpostSplitFill(height, width);
		// signpost-split.svg
		case 1138:
			return SVGIcons.signpostSplit(height, width);
		// signpost.svg
		case 1139:
			return SVGIcons.signpost(height, width);
		// sim-fill.svg
		case 1140:
			return SVGIcons.simFill(height, width);
		// sim.svg
		case 1141:
			return SVGIcons.sim(height, width);
		// skip-backward-btn-fill.svg
		case 1142:
			return SVGIcons.skipBackwardBtnFill(height, width);
		// skip-backward-btn.svg
		case 1143:
			return SVGIcons.skipBackwardBtn(height, width);
		// skip-backward-circle-fill.svg
		case 1144:
			return SVGIcons.skipBackwardCircleFill(height, width);
		// skip-backward-circle.svg
		case 1145:
			return SVGIcons.skipBackwardCircle(height, width);
		// skip-backward-fill.svg
		case 1146:
			return SVGIcons.skipBackwardFill(height, width);
		// skip-backward.svg
		case 1147:
			return SVGIcons.skipBackward(height, width);
		// skip-end-btn-fill.svg
		case 1148:
			return SVGIcons.skipEndBtnFill(height, width);
		// skip-end-btn.svg
		case 1149:
			return SVGIcons.skipEndBtn(height, width);
		// skip-end-circle-fill.svg
		case 1150:
			return SVGIcons.skipEndCircleFill(height, width);
		// skip-end-circle.svg
		case 1151:
			return SVGIcons.skipEndCircle(height, width);
		// skip-end-fill.svg
		case 1152:
			return SVGIcons.skipEndFill(height, width);
		// skip-end.svg
		case 1153:
			return SVGIcons.skipEnd(height, width);
		// skip-forward-btn-fill.svg
		case 1154:
			return SVGIcons.skipForwardBtnFill(height, width);
		// skip-forward-btn.svg
		case 1155:
			return SVGIcons.skipForwardBtn(height, width);
		// skip-forward-circle-fill.svg
		case 1156:
			return SVGIcons.skipForwardCircleFill(height, width);
		// skip-forward-circle.svg
		case 1157:
			return SVGIcons.skipForwardCircle(height, width);
		// skip-forward-fill.svg
		case 1158:
			return SVGIcons.skipForwardFill(height, width);
		// skip-forward.svg
		case 1159:
			return SVGIcons.skipForward(height, width);
		// skip-start-btn-fill.svg
		case 1160:
			return SVGIcons.skipStartBtnFill(height, width);
		// skip-start-btn.svg
		case 1161:
			return SVGIcons.skipStartBtn(height, width);
		// skip-start-circle-fill.svg
		case 1162:
			return SVGIcons.skipStartCircleFill(height, width);
		// skip-start-circle.svg
		case 1163:
			return SVGIcons.skipStartCircle(height, width);
		// skip-start-fill.svg
		case 1164:
			return SVGIcons.skipStartFill(height, width);
		// skip-start.svg
		case 1165:
			return SVGIcons.skipStart(height, width);
		// skype.svg
		case 1166:
			return SVGIcons.skype(height, width);
		// slack.svg
		case 1167:
			return SVGIcons.slack(height, width);
		// slash-circle-fill.svg
		case 1168:
			return SVGIcons.slashCircleFill(height, width);
		// slash-circle.svg
		case 1169:
			return SVGIcons.slashCircle(height, width);
		// slash-lg.svg
		case 1170:
			return SVGIcons.slashLg(height, width);
		// slash-square-fill.svg
		case 1171:
			return SVGIcons.slashSquareFill(height, width);
		// slash-square.svg
		case 1172:
			return SVGIcons.slashSquare(height, width);
		// slash.svg
		case 1173:
			return SVGIcons.slash(height, width);
		// sliders.svg
		case 1174:
			return SVGIcons.sliders(height, width);
		// smartwatch.svg
		case 1175:
			return SVGIcons.smartwatch(height, width);
		// snow.svg
		case 1176:
			return SVGIcons.snow(height, width);
		// snow2.svg
		case 1177:
			return SVGIcons.snow2(height, width);
		// snow3.svg
		case 1178:
			return SVGIcons.snow3(height, width);
		// sort-alpha-down-alt.svg
		case 1179:
			return SVGIcons.sortAlphaDownAlt(height, width);
		// sort-alpha-down.svg
		case 1180:
			return SVGIcons.sortAlphaDown(height, width);
		// sort-alpha-up-alt.svg
		case 1181:
			return SVGIcons.sortAlphaUpAlt(height, width);
		// sort-alpha-up.svg
		case 1182:
			return SVGIcons.sortAlphaUp(height, width);
		// sort-down-alt.svg
		case 1183:
			return SVGIcons.sortDownAlt(height, width);
		// sort-down.svg
		case 1184:
			return SVGIcons.sortDown(height, width);
		// sort-numeric-down-alt.svg
		case 1185:
			return SVGIcons.sortNumericDownAlt(height, width);
		// sort-numeric-down.svg
		case 1186:
			return SVGIcons.sortNumericDown(height, width);
		// sort-numeric-up-alt.svg
		case 1187:
			return SVGIcons.sortNumericUpAlt(height, width);
		// sort-numeric-up.svg
		case 1188:
			return SVGIcons.sortNumericUp(height, width);
		// sort-up-alt.svg
		case 1189:
			return SVGIcons.sortUpAlt(height, width);
		// sort-up.svg
		case 1190:
			return SVGIcons.sortUp(height, width);
		// soundwave.svg
		case 1191:
			return SVGIcons.soundwave(height, width);
		// speaker-fill.svg
		case 1192:
			return SVGIcons.speakerFill(height, width);
		// speaker.svg
		case 1193:
			return SVGIcons.speaker(height, width);
		// speedometer.svg
		case 1194:
			return SVGIcons.speedometer(height, width);
		// speedometer2.svg
		case 1195:
			return SVGIcons.speedometer2(height, width);
		// spellcheck.svg
		case 1196:
			return SVGIcons.spellcheck(height, width);
		// square-fill.svg
		case 1197:
			return SVGIcons.squareFill(height, width);
		// square-half.svg
		case 1198:
			return SVGIcons.squareHalf(height, width);
		// square.svg
		case 1199:
			return SVGIcons.square(height, width);
		// stack.svg
		case 1200:
			return SVGIcons.stack(height, width);
		// star-fill.svg
		case 1201:
			return SVGIcons.starFill(height, width);
		// star-half.svg
		case 1202:
			return SVGIcons.starHalf(height, width);
		// star.svg
		case 1203:
			return SVGIcons.star(height, width);
		// stars.svg
		case 1204:
			return SVGIcons.stars(height, width);
		// stickies-fill.svg
		case 1205:
			return SVGIcons.stickiesFill(height, width);
		// stickies.svg
		case 1206:
			return SVGIcons.stickies(height, width);
		// sticky-fill.svg
		case 1207:
			return SVGIcons.stickyFill(height, width);
		// sticky.svg
		case 1208:
			return SVGIcons.sticky(height, width);
		// stop-btn-fill.svg
		case 1209:
			return SVGIcons.stopBtnFill(height, width);
		// stop-btn.svg
		case 1210:
			return SVGIcons.stopBtn(height, width);
		// stop-circle-fill.svg
		case 1211:
			return SVGIcons.stopCircleFill(height, width);
		// stop-circle.svg
		case 1212:
			return SVGIcons.stopCircle(height, width);
		// stop-fill.svg
		case 1213:
			return SVGIcons.stopFill(height, width);
		// stop.svg
		case 1214:
			return SVGIcons.stop(height, width);
		// stoplights-fill.svg
		case 1215:
			return SVGIcons.stoplightsFill(height, width);
		// stoplights.svg
		case 1216:
			return SVGIcons.stoplights(height, width);
		// stopwatch-fill.svg
		case 1217:
			return SVGIcons.stopwatchFill(height, width);
		// stopwatch.svg
		case 1218:
			return SVGIcons.stopwatch(height, width);
		// subtract.svg
		case 1219:
			return SVGIcons.subtract(height, width);
		// suit-club-fill.svg
		case 1220:
			return SVGIcons.suitClubFill(height, width);
		// suit-club.svg
		case 1221:
			return SVGIcons.suitClub(height, width);
		// suit-diamond-fill.svg
		case 1222:
			return SVGIcons.suitDiamondFill(height, width);
		// suit-diamond.svg
		case 1223:
			return SVGIcons.suitDiamond(height, width);
		// suit-heart-fill.svg
		case 1224:
			return SVGIcons.suitHeartFill(height, width);
		// suit-heart.svg
		case 1225:
			return SVGIcons.suitHeart(height, width);
		// suit-spade-fill.svg
		case 1226:
			return SVGIcons.suitSpadeFill(height, width);
		// suit-spade.svg
		case 1227:
			return SVGIcons.suitSpade(height, width);
		// sun-fill.svg
		case 1228:
			return SVGIcons.sunFill(height, width);
		// sun.svg
		case 1229:
			return SVGIcons.sun(height, width);
		// sunglasses.svg
		case 1230:
			return SVGIcons.sunglasses(height, width);
		// sunrise-fill.svg
		case 1231:
			return SVGIcons.sunriseFill(height, width);
		// sunrise.svg
		case 1232:
			return SVGIcons.sunrise(height, width);
		// sunset-fill.svg
		case 1233:
			return SVGIcons.sunsetFill(height, width);
		// sunset.svg
		case 1234:
			return SVGIcons.sunset(height, width);
		// symmetry-horizontal.svg
		case 1235:
			return SVGIcons.symmetryHorizontal(height, width);
		// symmetry-vertical.svg
		case 1236:
			return SVGIcons.symmetryVertical(height, width);
		// table.svg
		case 1237:
			return SVGIcons.table(height, width);
		// tablet-fill.svg
		case 1238:
			return SVGIcons.tabletFill(height, width);
		// tablet-landscape-fill.svg
		case 1239:
			return SVGIcons.tabletLandscapeFill(height, width);
		// tablet-landscape.svg
		case 1240:
			return SVGIcons.tabletLandscape(height, width);
		// tablet.svg
		case 1241:
			return SVGIcons.tablet(height, width);
		// tag-fill.svg
		case 1242:
			return SVGIcons.tagFill(height, width);
		// tag.svg
		case 1243:
			return SVGIcons.tag(height, width);
		// tags-fill.svg
		case 1244:
			return SVGIcons.tagsFill(height, width);
		// tags.svg
		case 1245:
			return SVGIcons.tags(height, width);
		// telegram.svg
		case 1246:
			return SVGIcons.telegram(height, width);
		// telephone-fill.svg
		case 1247:
			return SVGIcons.telephoneFill(height, width);
		// telephone-forward-fill.svg
		case 1248:
			return SVGIcons.telephoneForwardFill(height, width);
		// telephone-forward.svg
		case 1249:
			return SVGIcons.telephoneForward(height, width);
		// telephone-inbound-fill.svg
		case 1250:
			return SVGIcons.telephoneInboundFill(height, width);
		// telephone-inbound.svg
		case 1251:
			return SVGIcons.telephoneInbound(height, width);
		// telephone-minus-fill.svg
		case 1252:
			return SVGIcons.telephoneMinusFill(height, width);
		// telephone-minus.svg
		case 1253:
			return SVGIcons.telephoneMinus(height, width);
		// telephone-outbound-fill.svg
		case 1254:
			return SVGIcons.telephoneOutboundFill(height, width);
		// telephone-outbound.svg
		case 1255:
			return SVGIcons.telephoneOutbound(height, width);
		// telephone-plus-fill.svg
		case 1256:
			return SVGIcons.telephonePlusFill(height, width);
		// telephone-plus.svg
		case 1257:
			return SVGIcons.telephonePlus(height, width);
		// telephone-x-fill.svg
		case 1258:
			return SVGIcons.telephoneXFill(height, width);
		// telephone-x.svg
		case 1259:
			return SVGIcons.telephoneX(height, width);
		// telephone.svg
		case 1260:
			return SVGIcons.telephone(height, width);
		// terminal-fill.svg
		case 1261:
			return SVGIcons.terminalFill(height, width);
		// terminal.svg
		case 1262:
			return SVGIcons.terminal(height, width);
		// text-center.svg
		case 1263:
			return SVGIcons.textCenter(height, width);
		// text-indent-left.svg
		case 1264:
			return SVGIcons.textIndentLeft(height, width);
		// text-indent-right.svg
		case 1265:
			return SVGIcons.textIndentRight(height, width);
		// text-left.svg
		case 1266:
			return SVGIcons.textLeft(height, width);
		// text-paragraph.svg
		case 1267:
			return SVGIcons.textParagraph(height, width);
		// text-right.svg
		case 1268:
			return SVGIcons.textRight(height, width);
		// textarea-resize.svg
		case 1269:
			return SVGIcons.textareaResize(height, width);
		// textarea-t.svg
		case 1270:
			return SVGIcons.textareaT(height, width);
		// textarea.svg
		case 1271:
			return SVGIcons.textarea(height, width);
		// thermometer-half.svg
		case 1272:
			return SVGIcons.thermometerHalf(height, width);
		// thermometer-high.svg
		case 1273:
			return SVGIcons.thermometerHigh(height, width);
		// thermometer-low.svg
		case 1274:
			return SVGIcons.thermometerLow(height, width);
		// thermometer-snow.svg
		case 1275:
			return SVGIcons.thermometerSnow(height, width);
		// thermometer-sun.svg
		case 1276:
			return SVGIcons.thermometerSun(height, width);
		// thermometer.svg
		case 1277:
			return SVGIcons.thermometer(height, width);
		// three-dots-vertical.svg
		case 1278:
			return SVGIcons.threeDotsVertical(height, width);
		// three-dots.svg
		case 1279:
			return SVGIcons.threeDots(height, width);
		// toggle-off.svg
		case 1280:
			return SVGIcons.toggleOff(height, width);
		// toggle-on.svg
		case 1281:
			return SVGIcons.toggleOn(height, width);
		// toggle2-off.svg
		case 1282:
			return SVGIcons.toggle2Off(height, width);
		// toggle2-on.svg
		case 1283:
			return SVGIcons.toggle2On(height, width);
		// toggles.svg
		case 1284:
			return SVGIcons.toggles(height, width);
		// toggles2.svg
		case 1285:
			return SVGIcons.toggles2(height, width);
		// tools.svg
		case 1286:
			return SVGIcons.tools(height, width);
		// tornado.svg
		case 1287:
			return SVGIcons.tornado(height, width);
		// translate.svg
		case 1288:
			return SVGIcons.translate(height, width);
		// trash-fill.svg
		case 1289:
			return SVGIcons.trashFill(height, width);
		// trash.svg
		case 1290:
			return SVGIcons.trash(height, width);
		// trash2-fill.svg
		case 1291:
			return SVGIcons.trash2Fill(height, width);
		// trash2.svg
		case 1292:
			return SVGIcons.trash2(height, width);
		// tree-fill.svg
		case 1293:
			return SVGIcons.treeFill(height, width);
		// tree.svg
		case 1294:
			return SVGIcons.tree(height, width);
		// triangle-fill.svg
		case 1295:
			return SVGIcons.triangleFill(height, width);
		// triangle-half.svg
		case 1296:
			return SVGIcons.triangleHalf(height, width);
		// triangle.svg
		case 1297:
			return SVGIcons.triangle(height, width);
		// trophy-fill.svg
		case 1298:
			return SVGIcons.trophyFill(height, width);
		// trophy.svg
		case 1299:
			return SVGIcons.trophy(height, width);
		// tropical-storm.svg
		case 1300:
			return SVGIcons.tropicalStorm(height, width);
		// truck-flatbed.svg
		case 1301:
			return SVGIcons.truckFlatbed(height, width);
		// truck.svg
		case 1302:
			return SVGIcons.truck(height, width);
		// tsunami.svg
		case 1303:
			return SVGIcons.tsunami(height, width);
		// tv-fill.svg
		case 1304:
			return SVGIcons.tvFill(height, width);
		// tv.svg
		case 1305:
			return SVGIcons.tv(height, width);
		// twitch.svg
		case 1306:
			return SVGIcons.twitch(height, width);
		// twitter.svg
		case 1307:
			return SVGIcons.twitter(height, width);
		// type-bold.svg
		case 1308:
			return SVGIcons.typeBold(height, width);
		// type-h1.svg
		case 1309:
			return SVGIcons.typeH1(height, width);
		// type-h2.svg
		case 1310:
			return SVGIcons.typeH2(height, width);
		// type-h3.svg
		case 1311:
			return SVGIcons.typeH3(height, width);
		// type-italic.svg
		case 1312:
			return SVGIcons.typeItalic(height, width);
		// type-strikethrough.svg
		case 1313:
			return SVGIcons.typeStrikethrough(height, width);
		// type-underline.svg
		case 1314:
			return SVGIcons.typeUnderline(height, width);
		// type.svg
		case 1315:
			return SVGIcons.type(height, width);
		// ui-checks-grid.svg
		case 1316:
			return SVGIcons.uiChecksGrid(height, width);
		// ui-checks.svg
		case 1317:
			return SVGIcons.uiChecks(height, width);
		// ui-radios-grid.svg
		case 1318:
			return SVGIcons.uiRadiosGrid(height, width);
		// ui-radios.svg
		case 1319:
			return SVGIcons.uiRadios(height, width);
		// umbrella-fill.svg
		case 1320:
			return SVGIcons.umbrellaFill(height, width);
		// umbrella.svg
		case 1321:
			return SVGIcons.umbrella(height, width);
		// union.svg
		case 1322:
			return SVGIcons.union(height, width);
		// unlock-fill.svg
		case 1323:
			return SVGIcons.unlockFill(height, width);
		// unlock.svg
		case 1324:
			return SVGIcons.unlock(height, width);
		// upc-scan.svg
		case 1325:
			return SVGIcons.upcScan(height, width);
		// upc.svg
		case 1326:
			return SVGIcons.upc(height, width);
		// upload.svg
		case 1327:
			return SVGIcons.upload(height, width);
		// vector-pen.svg
		case 1328:
			return SVGIcons.vectorPen(height, width);
		// view-list.svg
		case 1329:
			return SVGIcons.viewList(height, width);
		// view-stacked.svg
		case 1330:
			return SVGIcons.viewStacked(height, width);
		// vinyl-fill.svg
		case 1331:
			return SVGIcons.vinylFill(height, width);
		// vinyl.svg
		case 1332:
			return SVGIcons.vinyl(height, width);
		// voicemail.svg
		case 1333:
			return SVGIcons.voicemail(height, width);
		// volume-down-fill.svg
		case 1334:
			return SVGIcons.volumeDownFill(height, width);
		// volume-down.svg
		case 1335:
			return SVGIcons.volumeDown(height, width);
		// volume-mute-fill.svg
		case 1336:
			return SVGIcons.volumeMuteFill(height, width);
		// volume-mute.svg
		case 1337:
			return SVGIcons.volumeMute(height, width);
		// volume-off-fill.svg
		case 1338:
			return SVGIcons.volumeOffFill(height, width);
		// volume-off.svg
		case 1339:
			return SVGIcons.volumeOff(height, width);
		// volume-up-fill.svg
		case 1340:
			return SVGIcons.volumeUpFill(height, width);
		// volume-up.svg
		case 1341:
			return SVGIcons.volumeUp(height, width);
		// vr.svg
		case 1342:
			return SVGIcons.vr(height, width);
		// wallet-fill.svg
		case 1343:
			return SVGIcons.walletFill(height, width);
		// wallet.svg
		case 1344:
			return SVGIcons.wallet(height, width);
		// wallet2.svg
		case 1345:
			return SVGIcons.wallet2(height, width);
		// watch.svg
		case 1346:
			return SVGIcons.watch(height, width);
		// water.svg
		case 1347:
			return SVGIcons.water(height, width);
		// whatsapp.svg
		case 1348:
			return SVGIcons.whatsapp(height, width);
		// wifi-1.svg
		case 1349:
			return SVGIcons.wifi1(height, width);
		// wifi-2.svg
		case 1350:
			return SVGIcons.wifi2(height, width);
		// wifi-off.svg
		case 1351:
			return SVGIcons.wifiOff(height, width);
		// wifi.svg
		case 1352:
			return SVGIcons.wifi(height, width);
		// wind.svg
		case 1353:
			return SVGIcons.wind(height, width);
		// window-dock.svg
		case 1354:
			return SVGIcons.windowDock(height, width);
		// window-sidebar.svg
		case 1355:
			return SVGIcons.windowSidebar(height, width);
		// window.svg
		case 1356:
			return SVGIcons.appWindow(height, width);
		// wrench.svg
		case 1357:
			return SVGIcons.wrench(height, width);
		// x-circle-fill.svg
		case 1358:
			return SVGIcons.xCircleFill(height, width);
		// x-circle.svg
		case 1359:
			return SVGIcons.xCircle(height, width);
		// x-diamond-fill.svg
		case 1360:
			return SVGIcons.xDiamondFill(height, width);
		// x-diamond.svg
		case 1361:
			return SVGIcons.xDiamond(height, width);
		// x-lg.svg
		case 1362:
			return SVGIcons.xLg(height, width);
		// x-octagon-fill.svg
		case 1363:
			return SVGIcons.xOctagonFill(height, width);
		// x-octagon.svg
		case 1364:
			return SVGIcons.xOctagon(height, width);
		// x-square-fill.svg
		case 1365:
			return SVGIcons.xSquareFill(height, width);
		// x-square.svg
		case 1366:
			return SVGIcons.xSquare(height, width);
		// x.svg
		case 1367:
			return SVGIcons.x(height, width);
		// youtube.svg
		case 1368:
			return SVGIcons.youtube(height, width);
		// zoom-in.svg
		case 1369:
			return SVGIcons.zoomIn(height, width);
		// zoom-out.svg
		case 1370:
			return SVGIcons.zoomOut(height, width);
	}
}