import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
  StatusBar,
  StatusBarStyle,
  Platform,
  ViewStyle,
} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import { horizontalScale, verticalScale } from '../../helpers/scaleHelpers';

type AppLayoutType = {
  children: ReactNode;
  statusBarColor?: string;
  barStyle?: StatusBarStyle;
  scrollable?: boolean;
  noSafeArea?: boolean;
  noPadding?: boolean;
  addBottomInset?: boolean;
  addTopInset?: boolean;
  backgroundColor?: string;
  containerStyle?: ViewStyle;
  noScrollView?: boolean;
  onScreenScroll?: () => void;
};

function AppLayout({
  children,
  statusBarColor,
  barStyle = 'dark-content',
  scrollable = true,
  noSafeArea = true,
  noPadding = false,
  addBottomInset = false,
  addTopInset = true,
  backgroundColor,
  containerStyle,
  noScrollView = false,
  onScreenScroll = () => {},
}: AppLayoutType) {
  const behavior: 'padding' | 'height' | 'position' | undefined =
    Platform.OS === 'android' ? undefined : 'padding';

  const contentContainerStyle = {
    ...styles.contentContainer,
    paddingHorizontal: noPadding
      ? 0
      : horizontalScale(20),
    backgroundColor,
  };

  const edges: Edge[] = [];
  if (addBottomInset) {
    edges.push('bottom');
  }
  if (addTopInset) {
    edges.push('top');
  }
  if (noSafeArea) {
    edges.length = 0;
  }

  return (
    <SafeAreaView
      style={[styles.container, containerStyle]}
      edges={edges}
      testID="app-layout">
      <StatusBar
        animated={true}
        backgroundColor={statusBarColor}
        barStyle={barStyle}
      />

      <KeyboardAvoidingView style={contentContainerStyle} behavior={behavior}>
        {noScrollView ? (
          children
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollable}
            scrollEventThrottle={500}
            onScroll={onScreenScroll}
            keyboardShouldPersistTaps="always">
            {children}
          </ScrollView>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#75DAFE",
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
export default AppLayout;
