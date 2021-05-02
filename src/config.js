/**
 * Update this file to customize trend data.
 * Google Trends: https://support.google.com/trends/answer/4359582?hl=enand globe properties
 * react-globe: https://github.com/chrisrzhou/react-globe
 */
export default {
  keyword: 'safemoon + safemoon price + safemoon news',
  globeBackgroundTexture: null,
  globeCloudsTexture:
    './weather.jpg',
  globeTexture:
    './earth.jpg',
  options: {
    ambientLightColor: '#44b394',
    ambientLightIntensity: 1,
    cameraAutoRotateSpeed: 0.5,
    cameraRotateSpeed: 0.2,
    enableCameraZoom: false,
    enableDefocus: false,
    focusAnimationDuration: 1000,
    globeCloudsOpacity: 0.1,
    globeGlowCoefficient: 0.3,
    globeGlowColor: 'green',
    globeGlowPower: 5,
    globeGlowRadiusScale: 0.2,
    pointLightIntensity: 3,
    pointLightPositionRadiusScales: [-1, 1.5, -2.5],
  },
};
