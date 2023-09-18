import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (
  size: number,
  baseWidth: number = guidelineBaseWidth,
) => (width / baseWidth) * size;
const verticalScale = (
  size: number,
  baseHeight: number = guidelineBaseHeight,
) => (height / baseHeight) * size;

export {
  horizontalScale,
  verticalScale,
};
