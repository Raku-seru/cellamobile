import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const OS = {
  iOS: Platform.OS === 'ios',
  Android: Platform.OS === 'android',
};

const Aspect = {
  Width: width,
  Height: height,
};

const Colors = {
  White: '#fff',
  WhiteDark: '#f7f7f7',
  Black: '#000',
  BlackLight: '#4b4b4b',
  BlackDark: '#17151b',
  Grey: '#808080',
  GreyLight: '#eee',
  GreyDark: '#919191',
  Red: '#fc4d36',
  Orange: '#f9ab59',
  Yellow: '#fee700',
  Green: '#00d38f',
  Blue: '#0091fe',
  Pink: '#f27a7b',
  Transparent: 'transparent',
  WhiteTranscluent: 'rgba(255, 255, 255, 0.75)',
  BlackTranscluent: 'rgba(0, 0, 0, 0.75)',
  DarkThemeBG: '#212121',
  DarkThemeSB: '#000000',
  LightThemeBG: '#FFFFFF',
  LightThemeSB: '#FFFFFF',
};

const Fonts = {
  Roboto: {
    Black: 'Roboto-Black',
    BlackItalic: 'Roboto-BlackItalic',
    Bold: 'Roboto-Bold',
    BoldItalic: 'Roboto-BoldItalic',
    Italic: 'Roboto-Italic',
    Light: 'Roboto-Light',
    LightItalic: 'Roboto-LightItalic',
    Medium: 'Roboto-Medium',
    MediumItalic: 'Roboto-MediumItalic',
    Regular: 'Roboto-Regular',
    Thin: 'Roboto-Thin',
    ThinItalic: 'Roboto-ThinItalic',
  },
};

const Styles = StyleSheet.create({
  Flex1: {
    flex: 1,
  },
  Flex2: {
    flex: 2,
  },
  Flex3: {
    flex: 3,
  },
  Flex4: {
    flex: 4,
  },
  Flex5: {
    flex: 5,
  },
  Flex6: {
    flex: 6,
  },
  FlexCol: {
    flexDirection: 'column',
  },
  FlexRow: {
    flexDirection: 'row',
  },
  FlexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  FlexAlignCenter: {
    alignItems: 'center',
  },
  FlexAlignStart: {
    alignItems: 'flex-start',
  },
  FlexAlignEnd: {
    alignItems: 'flex-end',
  },
  FlexAlignBetween: {
    alignItems: 'baseline',
  },
  FlexAlignAround: {
    alignItems: 'stretch',
  },
  FlexContentCenter: {
    justifyContent: 'center',
  },
  FlexContentStart: {
    justifyContent: 'flex-start',
  },
  FlexContentEnd: {
    justifyContent: 'flex-end',
  },
  FlexContentBetween: {
    justifyContent: 'space-between',
  },
  FlexContentAround: {
    justifyContent: 'space-around',
  },
  FlexContentEvenly: {
    justifyContent: 'space-evenly',
  },
  FlexWrap: {
    flexWrap: 'wrap',
  },
  FlexAbs: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  Container: {
    flexGrow: 1,
    paddingBottom: 0,
  },
  ContainerGap: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  ContainerGap2: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  ContainerGap3: {
    flexGrow: 1,
    paddingBottom: 55,
  },
  ContainerGap4: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  ContainerGap5: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  ContainerGap6: {
    flexGrow: 1,
    paddingBottom: 120,
  },
  FontPrimaryBlack: {
    fontFamily: Fonts.Roboto.Black,
  },
  FontPrimaryBlackItalic: {
    fontFamily: Fonts.Roboto.BlackItalic,
  },
  FontPrimaryBold: {
    fontFamily: Fonts.Roboto.Bold,
  },
  FontPrimaryBoldItalic: {
    fontFamily: Fonts.Roboto.BoldItalic,
  },
  FontPrimaryItalic: {
    fontFamily: Fonts.Roboto.Italic,
  },
  FontPrimaryLight: {
    fontFamily: Fonts.Roboto.Light,
  },
  FontPrimaryLightItalic: {
    fontFamily: Fonts.Roboto.LightItalic,
  },
  FontPrimaryMedium: {
    fontFamily: Fonts.Roboto.Medium,
  },
  FontPrimaryMediumItalic: {
    fontFamily: Fonts.Roboto.MediumItalic,
  },
  FontPrimaryRegular: {
    fontFamily: Fonts.Roboto.Regular,
  },
  FontPrimaryThin: {
    fontFamily: Fonts.Roboto.Thin,
  },
  FontPrimaryThinItalic: {
    fontFamily: Fonts.Roboto.ThinItalic,
  },
  H0: {
    height: 0,
  },
  H05: {
    height: 2.5,
  },
  H1: {
    height: 5,
  },
  H2: {
    height: 10,
  },
  H3: {
    height: 15,
  },
  H4: {
    height: 20,
  },
  H5: {
    height: 25,
  },
  H6: {
    height: 30,
  },
  H7: {
    height: 35,
  },
  H8: {
    height: 40,
  },
  H9: {
    height: 45,
  },
  H10: {
    height: 50,
  },
  H12: {
    height: 60,
  },
  H14: {
    height: 70,
  },
  H16: {
    height: 80,
  },
  H18: {
    height: 90,
  },
  H20: {
    height: 100,
  },
  H24: {
    height: 120,
  },
  H28: {
    height: 140,
  },
  H32: {
    height: 160,
  },
  H36: {
    height: 180,
  },
  H40: {
    height: 200,
  },
  H48: {
    height: 240,
  },
  H56: {
    height: 280,
  },
  H64: {
    height: 320,
  },
  H72: {
    height: 360,
  },
  H80: {
    height: 400,
  },
  HA1: {
    height: Aspect.Width,
  },
  HA2: {
    height: Aspect.Width / 2,
  },
  HA3: {
    height: Aspect.Width / 3,
  },
  HA4: {
    height: Aspect.Width / 4,
  },
  HA5: {
    height: Aspect.Width / 5,
  },
  W0: {
    width: 0,
  },
  W1: {
    width: 5,
  },
  W2: {
    width: 10,
  },
  W3: {
    width: 15,
  },
  W4: {
    width: 20,
  },
  W5: {
    width: 25,
  },
  W6: {
    width: 30,
  },
  W7: {
    width: 35,
  },
  W8: {
    width: 40,
  },
  W9: {
    width: 45,
  },
  W10: {
    width: 50,
  },
  W12: {
    width: 60,
  },
  W14: {
    width: 70,
  },
  W16: {
    width: 80,
  },
  W18: {
    width: 90,
  },
  W20: {
    width: 100,
  },
  W24: {
    width: 120,
  },
  W28: {
    width: 140,
  },
  W32: {
    width: 160,
  },
  W36: {
    width: 180,
  },
  W40: {
    width: 200,
  },
  W48: {
    width: 240,
  },
  W56: {
    width: 280,
  },
  W64: {
    width: 320,
  },
  W72: {
    width: 360,
  },
  W80: {
    width: 400,
  },
  WA1: {
    width: Aspect.Width,
  },
  WA2: {
    width: Aspect.Width / 2,
  },
  WA3: {
    width: Aspect.Width / 3,
  },
  WA4: {
    width: Aspect.Width / 4,
  },
  WA5: {
    width: Aspect.Width / 5,
  },
  BgWhite: {
    backgroundColor: Colors.White,
  },
  BgWhiteDark: {
    backgroundColor: Colors.WhiteDark,
  },
  BgBlack: {
    backgroundColor: Colors.Black,
  },
  BgBlackLight: {
    backgroundColor: Colors.BlackLight,
  },
  BgBlackDark: {
    backgroundColor: Colors.BlackDark,
  },
  BgGrey: {
    backgroundColor: Colors.Grey,
  },
  BgGreyLight: {
    backgroundColor: Colors.GreyLight,
  },
  BgGreyDark: {
    backgroundColor: Colors.GreyDark,
  },
  BgRed: {
    backgroundColor: Colors.Red,
  },
  BgOrange: {
    backgroundColor: Colors.Orange,
  },
  BgYellow: {
    backgroundColor: Colors.Yellow,
  },
  BgGreen: {
    backgroundColor: Colors.Green,
  },
  BgBlue: {
    backgroundColor: Colors.Blue,
  },
  BgPink: {
    backgroundColor: Colors.Pink,
  },
  BgTransparent: {
    backgroundColor: Colors.Transparent,
  },
  BgWhiteTranscluent: {
    backgroundColor: Colors.WhiteTranscluent,
  },
  BgBlackTranscluent: {
    backgroundColor: Colors.BlackTranscluent,
  },
  Text1: {
    fontSize: 12,
  },
  Text2: {
    fontSize: 14,
  },
  Text3: {
    fontSize: 16,
  },
  Text4: {
    fontSize: 18,
  },
  Text5: {
    fontSize: 20,
  },
  Text6: {
    fontSize: 24,
  },
  TextWhite: {
    color: Colors.White,
  },
  TextBlack: {
    color: Colors.Black,
  },
  TextBlackLight: {
    color: Colors.BlackLight,
  },
  TextBlackDark: {
    color: Colors.BlackDark,
  },
  TextGrey: {
    color: Colors.Grey,
  },
  TextGreyLight: {
    color: Colors.GreyLight,
  },
  TextGreyDark: {
    color: Colors.GreyDark,
  },
  TextRed: {
    color: Colors.Red,
  },
  TextOrange: {
    color: Colors.Orange,
  },
  TextYellow: {
    color: Colors.Yellow,
  },
  TextGreen: {
    color: Colors.Green,
  },
  TextBlue: {
    color: Colors.Blue,
  },
  TextPink: {
    color: Colors.Pink,
  },
  TextLeft: {
    textAlign: 'left',
  },
  TextCenter: {
    textAlign: 'center',
  },
  TextRight: {
    textAlign: 'right',
  },
  Margin0: {
    margin: 0,
  },
  Margin1: {
    margin: 5,
  },
  Margin2: {
    margin: 10,
  },
  Margin3: {
    margin: 15,
  },
  Margin4: {
    margin: 20,
  },
  Margin5: {
    margin: 25,
  },
  Margin6: {
    margin: 30,
  },
  MarginVer1: {
    marginVertical: 5,
  },
  MarginVer2: {
    marginVertical: 10,
  },
  MarginVer3: {
    marginVertical: 15,
  },
  MarginVer4: {
    marginVertical: 20,
  },
  MarginVer5: {
    marginVertical: 25,
  },
  MarginVer6: {
    marginVertical: 30,
  },
  MarginVer1_: {
    marginVertical: -5,
  },
  MarginVer2_: {
    marginVertical: -10,
  },
  MarginVer3_: {
    marginVertical: -15,
  },
  MarginVer4_: {
    marginVertical: -20,
  },
  MarginVer5_: {
    marginVertical: -25,
  },
  MarginVer6_: {
    marginVertical: -30,
  },
  MarginHor1: {
    marginHorizontal: 5,
  },
  MarginHor2: {
    marginHorizontal: 10,
  },
  MarginHor3: {
    marginHorizontal: 15,
  },
  MarginHor4: {
    marginHorizontal: 20,
  },
  MarginHor5: {
    marginHorizontal: 25,
  },
  MarginHor6: {
    marginHorizontal: 30,
  },
  MarginHor1_: {
    marginHorizontal: -5,
  },
  MarginHor2_: {
    marginHorizontal: -10,
  },
  MarginHor3_: {
    marginHorizontal: -15,
  },
  MarginHor4_: {
    marginHorizontal: -20,
  },
  MarginHor5_: {
    marginHorizontal: -25,
  },
  MarginHor6_: {
    marginHorizontal: -30,
  },
  Padding0: {
    padding: 0,
  },
  Padding1: {
    padding: 5,
  },
  Padding2: {
    padding: 10,
  },
  Padding3: {
    padding: 15,
  },
  Padding4: {
    padding: 20,
  },
  Padding5: {
    padding: 25,
  },
  Padding6: {
    padding: 30,
  },
  PaddingVer1: {
    paddingVertical: 5,
  },
  PaddingVer2: {
    paddingVertical: 10,
  },
  PaddingVer3: {
    paddingVertical: 15,
  },
  PaddingVer4: {
    paddingVertical: 20,
  },
  PaddingVer5: {
    paddingVertical: 25,
  },
  PaddingVer6: {
    paddingVertical: 30,
  },
  PaddingHor1: {
    paddingHorizontal: 5,
  },
  PaddingHor2: {
    paddingHorizontal: 10,
  },
  PaddingHor3: {
    paddingHorizontal: 15,
  },
  PaddingHor4: {
    paddingHorizontal: 20,
  },
  PaddingHor5: {
    paddingHorizontal: 25,
  },
  PaddingHor6: {
    paddingHorizontal: 30,
  },
  Border0: {
    borderWidth: 0,
  },
  Border1: {
    borderWidth: 1,
  },
  BorderTop1: {
    borderTopWidth: 1,
  },
  BorderRight1: {
    borderRightWidth: 1,
  },
  BorderBot1: {
    borderBottomWidth: 1,
  },
  BorderLeft1: {
    borderLeftWidth: 1,
  },
  BorderWhite: {
    borderColor: Colors.White,
  },
  BorderBlack: {
    borderColor: Colors.Black,
  },
  BorderBlackLight: {
    borderColor: Colors.BlackLight,
  },
  BorderBlackDark: {
    borderColor: Colors.BlackDark,
  },
  BorderGrey: {
    borderColor: Colors.Grey,
  },
  BorderGreyLight: {
    borderColor: Colors.GreyLight,
  },
  BorderGreyDark: {
    borderColor: Colors.GreyDark,
  },
  BorderRed: {
    borderColor: Colors.Red,
  },
  BorderOrange: {
    borderColor: Colors.Orange,
  },
  BorderYellow: {
    borderColor: Colors.Yellow,
  },
  BorderGreen: {
    borderColor: Colors.Green,
  },
  BorderBlue: {
    borderColor: Colors.Blue,
  },
  BorderPink: {
    borderColor: Colors.Pink,
  },
  BorderTransparent: {
    borderColor: Colors.Transparent,
  },
  BorderRadius1: {
    borderRadius: 5,
  },
  BorderRadius2: {
    borderRadius: 10,
  },
  BorderRadius3: {
    borderRadius: 15,
  },
  BorderRadius4: {
    borderRadius: 20,
  },
  BorderRadius5: {
    borderRadius: 25,
  },
  BorderRadius6: {
    borderRadius: 30,
  },
  BorderRadiusTop2: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  PosRel: {
    position: 'relative',
  },
  PosAbs: {
    position: 'absolute',
    elevation: 5,
    zIndex: 1,
  },
  PosAbsFull: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  PosAbsTop: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  PosAbsBot: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
  },
  Top0: {
    top: 0,
  },
  Top1: {
    top: 5,
  },
  Top2: {
    top: 10,
  },
  Top3: {
    top: 15,
  },
  Right0: {
    right: 0,
  },
  Right1: {
    right: 5,
  },
  Right2: {
    right: 10,
  },
  Right3: {
    right: 15,
  },
  Bot0: {
    bottom: 0,
  },
  Bot1: {
    bottom: 5,
  },
  Bot2: {
    bottom: 10,
  },
  Bot3: {
    bottom: 15,
  },
  Left0: {
    left: 0,
  },
  Left1: {
    left: 5,
  },
  Left2: {
    left: 10,
  },
  Left3: {
    left: 15,
  },
  Z1: {
    zIndex: 1,
  },
  Z2: {
    zIndex: 2,
  },
  Z3: {
    zIndex: 3,
  },
  Hidden: {
    width: 0,
    height: 0,
    overflow: 'hidden',
  },
  OverflowHidden: {
    overflow: 'hidden',
  },
  BoxShadow: {
    shadowColor: Colors.GreyDark,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 1,
  },
  BoxShadowRed: {
    shadowColor: Colors.Red,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    zIndex: 1,
  },
  BoxStatus: {
    // top: -20,
    // marginBottom: -20,
    borderBottomRightRadius: 60,
  },
  TriangleLeft: {
    position: 'absolute',
    left: -10,
    top: 7.5,
    width: 0,
    height: 0,
    borderTopColor: 'transparent',
    borderTopWidth: 5,
    borderRightWidth: 10,
    borderRightColor: Colors.Green,
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
  },
  Transform1_: {
    transform: [{scaleX: 0.6}, {scaleY: 0.6}],
  },
  TransformCapitalize: {
    textTransform: 'capitalize',
  },
});

export {OS, Aspect, Colors, Fonts, Styles};
