import { PropsHandler, PropertyUpdate, HasPropsHandlers, getUpdatesFromProps, PropToUpdateType } from "./PropsHandler";
import { CreatedInstanceMetadata } from "./CreatedInstance";
import { FiberNodeProps, FiberTransformNodeProps, FiberAbstractMeshProps, FiberMeshProps, FiberCameraProps, FiberTargetCameraProps, FiberFreeCameraProps, FiberTouchCameraProps, FiberUniversalCameraProps, FiberGamepadCameraProps, FiberAnaglyphGamepadCameraProps, FiberStereoscopicGamepadCameraProps, FiberAnaglyphUniversalCameraProps, FiberStereoscopicUniversalCameraProps, FiberDeviceOrientationCameraProps, FiberVRDeviceOrientationFreeCameraProps, FiberVRDeviceOrientationGamepadCameraProps, FiberAnaglyphFreeCameraProps, FiberStereoscopicFreeCameraProps, FiberVirtualJoysticksCameraProps, FiberWebVRFreeCameraProps, FiberWebXRCameraProps, FiberArcRotateCameraProps, FiberAnaglyphArcRotateCameraProps, FiberStereoscopicArcRotateCameraProps, FiberVRDeviceOrientationArcRotateCameraProps, FiberFlyCameraProps, FiberFollowCameraProps, FiberArcFollowCameraProps, FiberMaterialProps, FiberShaderMaterialProps, FiberMultiMaterialProps, FiberPushMaterialProps, FiberStandardMaterialProps, FiberBackgroundMaterialProps, FiberPBRBaseMaterialProps, FiberPBRBaseSimpleMaterialProps, FiberPBRMetallicRoughnessMaterialProps, FiberPBRSpecularGlossinessMaterialProps, FiberPBRMaterialProps, FiberNodeMaterialProps, FiberFluentMaterialProps, FiberLightProps, FiberShadowLightProps, FiberDirectionalLightProps, FiberPointLightProps, FiberSpotLightProps, FiberHemisphericLightProps, FiberControlProps, FiberContainerProps, FiberRectangleProps, FiberButtonProps, FiberSelectionPanelProps, FiberScrollViewerProps, FiberStackPanelProps, FiberVirtualKeyboardProps, FiberEllipseProps, FiberGridProps, Fiber_ScrollViewerWindowProps, FiberTextBlockProps, FiberImageProps, FiberCheckboxProps, FiberColorPickerProps, FiberInputTextProps, FiberInputPasswordProps, FiberLineProps, FiberMultiLineProps, FiberRadioButtonProps, FiberBaseSliderProps, FiberScrollBarProps, FiberImageScrollBarProps, FiberSliderProps, FiberImageBasedSliderProps, FiberDisplayGridProps, FiberControl3DProps, FiberContainer3DProps, FiberVolumeBasedPanelProps, FiberCylinderPanelProps, FiberPlanePanelProps, FiberScatterPanelProps, FiberSpherePanelProps, FiberStackPanel3DProps, FiberAbstractButton3DProps, FiberButton3DProps, FiberHolographicButtonProps, FiberMeshButton3DProps, FiberEffectLayerProps, FiberGlowLayerProps, FiberHighlightLayerProps, FiberBaseTextureProps, FiberCubeTextureProps, FiberRawCubeTextureProps, FiberTextureProps, FiberRawTextureProps, FiberProceduralTextureProps, FiberCustomProceduralTextureProps, FiberNoiseProceduralTextureProps, FiberRenderTargetTextureProps, FiberMirrorTextureProps, FiberMultiRenderTargetProps, FiberRefractionTextureProps, FiberMultiviewRenderTargetProps, FiberVideoTextureProps, FiberDynamicTextureProps, FiberAdvancedDynamicTextureProps, FiberRawTexture3DProps, FiberRawTexture2DArrayProps, FiberColorGradingTextureProps, FiberEquiRectangularCubeTextureProps, FiberHDRCubeTextureProps, FiberHtmlElementTextureProps, FiberGUI3DManagerProps, FiberShadowGeneratorProps, FiberEnvironmentHelperProps, FiberPhysicsImpostorProps, FiberVRExperienceHelperProps, FiberDynamicTerrainProps, FiberSceneProps } from "./generatedProps";
import { DynamicTerrain as ExtensionsDynamicTerrain } from "./extensions/DynamicTerrain";
import { AbstractScene as BabylonjsCoreAbstractScene } from "@babylonjs/core/abstractScene";
import { Node as BabylonjsCoreNode } from "@babylonjs/core/node";
import { Scene as BabylonjsCoreScene } from "@babylonjs/core/scene";
import { Camera as BabylonjsCoreCamera } from "@babylonjs/core/Cameras/camera";
import { DebugLayerTab as BabylonjsCoreDebugLayerTab } from "@babylonjs/core/Debug/debugLayer";
import { DualShockButton as BabylonjsCoreDualShockButton, DualShockDpad as BabylonjsCoreDualShockDpad } from "@babylonjs/core/Gamepads/dualShockGamepad";
import { Xbox360Button as BabylonjsCoreXbox360Button, Xbox360Dpad as BabylonjsCoreXbox360Dpad } from "@babylonjs/core/Gamepads/xboxGamepad";
import { EnvironmentHelper as BabylonjsCoreEnvironmentHelper, IEnvironmentHelperOptions as BabylonjsCoreIEnvironmentHelperOptions } from "@babylonjs/core/Helpers/environmentHelper";
import { EffectLayer as BabylonjsCoreEffectLayer } from "@babylonjs/core/Layers/effectLayer";
import { Light as BabylonjsCoreLight } from "@babylonjs/core/Lights/light";
import { SceneLoaderAnimationGroupLoadingMode as BabylonjsCoreSceneLoaderAnimationGroupLoadingMode } from "@babylonjs/core/Loading/sceneLoader";
import { Material as BabylonjsCoreMaterial } from "@babylonjs/core/Materials/material";
import { Space as BabylonjsCoreSpace } from "@babylonjs/core/Maths/math.axis";
import { Orientation as BabylonjsCoreOrientation } from "@babylonjs/core/Maths/math.path";
import { Mesh as BabylonjsCoreMesh } from "@babylonjs/core/Meshes/mesh";
import { MeshBuilder as BabylonjsCoreMeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { AssetTaskState as BabylonjsCoreAssetTaskState } from "@babylonjs/core/Misc/assetsManager";
import { InspectableType as BabylonjsCoreInspectableType, IInspectable as BabylonjsCoreIInspectable } from "@babylonjs/core/Misc/iInspectable";
import { JoystickAxis as BabylonjsCoreJoystickAxis } from "@babylonjs/core/Misc/virtualJoystick";
import { PointColor as BabylonjsCorePointColor } from "@babylonjs/core/Particles/pointsCloudSystem";
import { SubEmitterType as BabylonjsCoreSubEmitterType } from "@babylonjs/core/Particles/subEmitter";
import { PhysicsRadialImpulseFalloff as BabylonjsCorePhysicsRadialImpulseFalloff, PhysicsUpdraftMode as BabylonjsCorePhysicsUpdraftMode } from "@babylonjs/core/Physics/physicsHelper";
import { PhysicsImpostor as BabylonjsCorePhysicsImpostor, IPhysicsEnabledObject as BabylonjsCoreIPhysicsEnabledObject, PhysicsImpostorParameters as BabylonjsCorePhysicsImpostorParameters } from "@babylonjs/core/Physics/physicsImpostor";
import { DepthOfFieldEffectBlurLevel as BabylonjsCoreDepthOfFieldEffectBlurLevel } from "@babylonjs/core/PostProcesses/depthOfFieldEffect";
import { TonemappingOperator as BabylonjsCoreTonemappingOperator } from "@babylonjs/core/PostProcesses/tonemapPostProcess";
import { WebXRState as BabylonjsCoreWebXRState } from "@babylonjs/core/XR/webXRTypes";
import { AdvancedDynamicTexture as BabylonjsGuiAdvancedDynamicTexture, IFocusableControl as BabylonjsGuiIFocusableControl } from "@babylonjs/gui/2D/advancedDynamicTexture";
import { GUI3DManager as BabylonjsGuiGUI3DManager } from "@babylonjs/gui/3D/gui3DManager";
import { VRExperienceHelper as BabylonjsCoreVRExperienceHelper, OnAfterEnteringVRObservableEvent as BabylonjsCoreOnAfterEnteringVRObservableEvent, VRExperienceHelperOptions as BabylonjsCoreVRExperienceHelperOptions } from "@babylonjs/core/Cameras/VR/vrExperienceHelper";
import { PoseEnabledControllerType as BabylonjsCorePoseEnabledControllerType } from "@babylonjs/core/Gamepads/Controllers/poseEnabledController";
import { ShadowGenerator as BabylonjsCoreShadowGenerator, ICustomShaderOptions as BabylonjsCoreICustomShaderOptions } from "@babylonjs/core/Lights/Shadows/shadowGenerator";
import { NodeMaterialConnectionPointCompatibilityStates as BabylonjsCoreNodeMaterialConnectionPointCompatibilityStates, NodeMaterialConnectionPointDirection as BabylonjsCoreNodeMaterialConnectionPointDirection } from "@babylonjs/core/Materials/Node/nodeMaterialBlockConnectionPoint";
import { BaseTexture as BabylonjsCoreBaseTexture } from "@babylonjs/core/Materials/Textures/baseTexture";
import { InternalTextureSource as BabylonjsCoreInternalTextureSource } from "@babylonjs/core/Materials/Textures/internalTexture";
import { Control as BabylonjsGuiControl } from "@babylonjs/gui/2D/controls/control";
import { TextWrapping as BabylonjsGuiTextWrapping, TextBlock as BabylonjsGuiTextBlock } from "@babylonjs/gui/2D/controls/textBlock";
import { Control3D as BabylonjsGuiControl3D } from "@babylonjs/gui/3D/controls/control3D";
import { TrigonometryBlockOperations as BabylonjsCoreTrigonometryBlockOperations } from "@babylonjs/core/Materials/Node/Blocks/trigonometryBlock";
import { WaveBlockKind as BabylonjsCoreWaveBlockKind } from "@babylonjs/core/Materials/Node/Blocks/waveBlock";
import { NodeMaterialBlockConnectionPointMode as BabylonjsCoreNodeMaterialBlockConnectionPointMode } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointMode";
import { NodeMaterialBlockConnectionPointTypes as BabylonjsCoreNodeMaterialBlockConnectionPointTypes } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockConnectionPointTypes";
import { NodeMaterialBlockTargets as BabylonjsCoreNodeMaterialBlockTargets } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialBlockTargets";
import { NodeMaterialSystemValues as BabylonjsCoreNodeMaterialSystemValues } from "@babylonjs/core/Materials/Node/Enums/nodeMaterialSystemValues";
import { AnimatedInputBlockTypes as BabylonjsCoreAnimatedInputBlockTypes } from "@babylonjs/core/Materials/Node/Blocks/Input/animatedInputBlockTypes";
import { AnimationPropertiesOverride as BabylonjsCoreAnimationPropertiesOverride } from "@babylonjs/core/Animations/animationPropertiesOverride";
import { Animation as BabylonjsCoreAnimation } from "@babylonjs/core/Animations/animation";
import { Observable as BabylonjsCoreObservable } from "@babylonjs/core/Misc/observable";
import { TransformNode as BabylonjsCoreTransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Vector3 as BabylonjsCoreVector3, Quaternion as BabylonjsCoreQuaternion, Matrix as BabylonjsCoreMatrix, Vector2 as BabylonjsCoreVector2, Vector4 as BabylonjsCoreVector4 } from "@babylonjs/core/Maths/math.vector";
import { DeepImmutableObject as BabylonjsCoreDeepImmutableObject, IndicesArray as BabylonjsCoreIndicesArray, FloatArray as BabylonjsCoreFloatArray } from "@babylonjs/core/types";
import { AbstractMesh as BabylonjsCoreAbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { AbstractActionManager as BabylonjsCoreAbstractActionManager } from "@babylonjs/core/Actions/abstractActionManager";
import { Color4 as BabylonjsCoreColor4, Color3 as BabylonjsCoreColor3 } from "@babylonjs/core/Maths/math.color";
import { Skeleton as BabylonjsCoreSkeleton } from "@babylonjs/core/Bones/skeleton";
import { SubMesh as BabylonjsCoreSubMesh } from "@babylonjs/core/Meshes/subMesh";
import { BoundingInfo as BabylonjsCoreBoundingInfo } from "@babylonjs/core/Culling/boundingInfo";
import { InstancedMesh as BabylonjsCoreInstancedMesh } from "@babylonjs/core/Meshes/instancedMesh";
import { MorphTargetManager as BabylonjsCoreMorphTargetManager } from "@babylonjs/core/Morph/morphTargetManager";
import { VertexBuffer as BabylonjsCoreVertexBuffer } from "@babylonjs/core/Meshes/buffer";
import { RenderTargetTexture as BabylonjsCoreRenderTargetTexture } from "@babylonjs/core/Materials/Textures/renderTargetTexture";
import { CameraInputsManager as BabylonjsCoreCameraInputsManager } from "@babylonjs/core/Cameras/cameraInputsManager";
import { Viewport as BabylonjsCoreViewport } from "@babylonjs/core/Maths/math.viewport";
import { TargetCamera as BabylonjsCoreTargetCamera } from "@babylonjs/core/Cameras/targetCamera";
import { FreeCamera as BabylonjsCoreFreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { FreeCameraInputsManager as BabylonjsCoreFreeCameraInputsManager } from "@babylonjs/core/Cameras/freeCameraInputsManager";
import { TouchCamera as BabylonjsCoreTouchCamera } from "@babylonjs/core/Cameras/touchCamera";
import { UniversalCamera as BabylonjsCoreUniversalCamera } from "@babylonjs/core/Cameras/universalCamera";
import { GamepadCamera as BabylonjsCoreGamepadCamera } from "@babylonjs/core/Cameras/gamepadCamera";
import { AnaglyphGamepadCamera as BabylonjsCoreAnaglyphGamepadCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphGamepadCamera";
import { StereoscopicGamepadCamera as BabylonjsCoreStereoscopicGamepadCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicGamepadCamera";
import { AnaglyphUniversalCamera as BabylonjsCoreAnaglyphUniversalCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphUniversalCamera";
import { StereoscopicUniversalCamera as BabylonjsCoreStereoscopicUniversalCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicUniversalCamera";
import { DeviceOrientationCamera as BabylonjsCoreDeviceOrientationCamera } from "@babylonjs/core/Cameras/deviceOrientationCamera";
import { VRDeviceOrientationFreeCamera as BabylonjsCoreVRDeviceOrientationFreeCamera } from "@babylonjs/core/Cameras/VR/vrDeviceOrientationFreeCamera";
import { VRCameraMetrics as BabylonjsCoreVRCameraMetrics } from "@babylonjs/core/Cameras/VR/vrCameraMetrics";
import { VRDeviceOrientationGamepadCamera as BabylonjsCoreVRDeviceOrientationGamepadCamera } from "@babylonjs/core/Cameras/VR/vrDeviceOrientationGamepadCamera";
import { AnaglyphFreeCamera as BabylonjsCoreAnaglyphFreeCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphFreeCamera";
import { StereoscopicFreeCamera as BabylonjsCoreStereoscopicFreeCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicFreeCamera";
import { VirtualJoysticksCamera as BabylonjsCoreVirtualJoysticksCamera } from "@babylonjs/core/Cameras/virtualJoysticksCamera";
import { WebVRFreeCamera as BabylonjsCoreWebVRFreeCamera, DevicePose as BabylonjsCoreDevicePose, WebVROptions as BabylonjsCoreWebVROptions } from "@babylonjs/core/Cameras/VR/webVRCamera";
import { WebVRController as BabylonjsCoreWebVRController } from "@babylonjs/core/Gamepads/Controllers/webVRController";
import { WebXRCamera as BabylonjsCoreWebXRCamera } from "@babylonjs/core/XR/webXRCamera";
import { WebXRSessionManager as BabylonjsCoreWebXRSessionManager } from "@babylonjs/core/XR/webXRSessionManager";
import { ArcRotateCamera as BabylonjsCoreArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { ArcRotateCameraInputsManager as BabylonjsCoreArcRotateCameraInputsManager } from "@babylonjs/core/Cameras/arcRotateCameraInputsManager";
import { AnaglyphArcRotateCamera as BabylonjsCoreAnaglyphArcRotateCamera } from "@babylonjs/core/Cameras/Stereoscopic/anaglyphArcRotateCamera";
import { StereoscopicArcRotateCamera as BabylonjsCoreStereoscopicArcRotateCamera } from "@babylonjs/core/Cameras/Stereoscopic/stereoscopicArcRotateCamera";
import { VRDeviceOrientationArcRotateCamera as BabylonjsCoreVRDeviceOrientationArcRotateCamera } from "@babylonjs/core/Cameras/VR/vrDeviceOrientationArcRotateCamera";
import { FlyCamera as BabylonjsCoreFlyCamera } from "@babylonjs/core/Cameras/flyCamera";
import { FlyCameraInputsManager as BabylonjsCoreFlyCameraInputsManager } from "@babylonjs/core/Cameras/flyCameraInputsManager";
import { FollowCamera as BabylonjsCoreFollowCamera, ArcFollowCamera as BabylonjsCoreArcFollowCamera } from "@babylonjs/core/Cameras/followCamera";
import { FollowCameraInputsManager as BabylonjsCoreFollowCameraInputsManager } from "@babylonjs/core/Cameras/followCameraInputsManager";
import { LinesMesh as BabylonjsCoreLinesMesh } from "@babylonjs/core/Meshes/linesMesh";
import { Plane as BabylonjsCorePlane } from "@babylonjs/core/Maths/math.plane";
import { GroundMesh as BabylonjsCoreGroundMesh } from "@babylonjs/core/Meshes/groundMesh";
import { SmartArray as BabylonjsCoreSmartArray, ISmartArrayLike as BabylonjsCoreISmartArrayLike } from "@babylonjs/core/Misc/smartArray";
import { Effect as BabylonjsCoreEffect } from "@babylonjs/core/Materials/effect";
import { ShaderMaterial as BabylonjsCoreShaderMaterial, IShaderMaterialOptions as BabylonjsCoreIShaderMaterialOptions } from "@babylonjs/core/Materials/shaderMaterial";
import { Texture as BabylonjsCoreTexture } from "@babylonjs/core/Materials/Textures/texture";
import { MultiMaterial as BabylonjsCoreMultiMaterial } from "@babylonjs/core/Materials/multiMaterial";
import { PushMaterial as BabylonjsCorePushMaterial } from "@babylonjs/core/Materials/pushMaterial";
import { StandardMaterial as BabylonjsCoreStandardMaterial, StandardMaterialDefines as BabylonjsCoreStandardMaterialDefines } from "@babylonjs/core/Materials/standardMaterial";
import { ColorCurves as BabylonjsCoreColorCurves } from "@babylonjs/core/Materials/colorCurves";
import { FresnelParameters as BabylonjsCoreFresnelParameters } from "@babylonjs/core/Materials/fresnelParameters";
import { ImageProcessingConfiguration as BabylonjsCoreImageProcessingConfiguration } from "@babylonjs/core/Materials/imageProcessingConfiguration";
import { BackgroundMaterial as BabylonjsCoreBackgroundMaterial } from "@babylonjs/core/Materials/Background/backgroundMaterial";
import { IShadowLight as BabylonjsCoreIShadowLight, ShadowLight as BabylonjsCoreShadowLight } from "@babylonjs/core/Lights/shadowLight";
import { PBRBaseMaterial as BabylonjsCorePBRBaseMaterial, PBRMaterialDefines as BabylonjsCorePBRMaterialDefines } from "@babylonjs/core/Materials/PBR/pbrBaseMaterial";
import { PBRBaseSimpleMaterial as BabylonjsCorePBRBaseSimpleMaterial } from "@babylonjs/core/Materials/PBR/pbrBaseSimpleMaterial";
import { PBRMetallicRoughnessMaterial as BabylonjsCorePBRMetallicRoughnessMaterial } from "@babylonjs/core/Materials/PBR/pbrMetallicRoughnessMaterial";
import { PBRSpecularGlossinessMaterial as BabylonjsCorePBRSpecularGlossinessMaterial } from "@babylonjs/core/Materials/PBR/pbrSpecularGlossinessMaterial";
import { PBRMaterial as BabylonjsCorePBRMaterial } from "@babylonjs/core/Materials/PBR/pbrMaterial";
import { NodeMaterial as BabylonjsCoreNodeMaterial, INodeMaterialOptions as BabylonjsCoreINodeMaterialOptions } from "@babylonjs/core/Materials/Node/nodeMaterial";
import { NodeMaterialBlock as BabylonjsCoreNodeMaterialBlock } from "@babylonjs/core/Materials/Node/nodeMaterialBlock";
import { FluentMaterial as BabylonjsGuiFluentMaterial } from "@babylonjs/gui/3D/materials/fluentMaterial";
import { DirectionalLight as BabylonjsCoreDirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { PointLight as BabylonjsCorePointLight } from "@babylonjs/core/Lights/pointLight";
import { SpotLight as BabylonjsCoreSpotLight } from "@babylonjs/core/Lights/spotLight";
import { HemisphericLight as BabylonjsCoreHemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector2WithInfo as BabylonjsGuiVector2WithInfo } from "@babylonjs/gui/2D/math2D";
import { Container as BabylonjsGuiContainer } from "@babylonjs/gui/2D/controls/container";
import { Style as BabylonjsGuiStyle } from "@babylonjs/gui/2D/style";
import { Rectangle as BabylonjsGuiRectangle } from "@babylonjs/gui/2D/controls/rectangle";
import { Button as BabylonjsGuiButton } from "@babylonjs/gui/2D/controls/button";
import { SelectionPanel as BabylonjsGuiSelectionPanel, SelectorGroup as BabylonjsGuiSelectorGroup } from "@babylonjs/gui/2D/controls/selector";
import { ScrollViewer as BabylonjsGuiScrollViewer } from "@babylonjs/gui/2D/controls/scrollViewers/scrollViewer";
import { Image as BabylonjsGuiImage } from "@babylonjs/gui/2D/controls/image";
import { StackPanel as BabylonjsGuiStackPanel } from "@babylonjs/gui/2D/controls/stackPanel";
import { VirtualKeyboard as BabylonjsGuiVirtualKeyboard } from "@babylonjs/gui/2D/controls/virtualKeyboard";
import { Ellipse as BabylonjsGuiEllipse } from "@babylonjs/gui/2D/controls/ellipse";
import { Grid as BabylonjsGuiGrid } from "@babylonjs/gui/2D/controls/grid";
import { _ScrollViewerWindow as BabylonjsGui_ScrollViewerWindow } from "@babylonjs/gui/2D/controls/scrollViewers/scrollViewerWindow";
import { Checkbox as BabylonjsGuiCheckbox } from "@babylonjs/gui/2D/controls/checkbox";
import { ColorPicker as BabylonjsGuiColorPicker } from "@babylonjs/gui/2D/controls/colorpicker";
import { InputText as BabylonjsGuiInputText } from "@babylonjs/gui/2D/controls/inputText";
import { InputPassword as BabylonjsGuiInputPassword } from "@babylonjs/gui/2D/controls/inputPassword";
import { Line as BabylonjsGuiLine } from "@babylonjs/gui/2D/controls/line";
import { MultiLine as BabylonjsGuiMultiLine } from "@babylonjs/gui/2D/controls/multiLine";
import { RadioButton as BabylonjsGuiRadioButton } from "@babylonjs/gui/2D/controls/radioButton";
import { BaseSlider as BabylonjsGuiBaseSlider } from "@babylonjs/gui/2D/controls/sliders/baseSlider";
import { ScrollBar as BabylonjsGuiScrollBar } from "@babylonjs/gui/2D/controls/sliders/scrollBar";
import { ImageScrollBar as BabylonjsGuiImageScrollBar } from "@babylonjs/gui/2D/controls/sliders/imageScrollBar";
import { Slider as BabylonjsGuiSlider } from "@babylonjs/gui/2D/controls/sliders/slider";
import { ImageBasedSlider as BabylonjsGuiImageBasedSlider } from "@babylonjs/gui/2D/controls/sliders/imageBasedSlider";
import { DisplayGrid as BabylonjsGuiDisplayGrid } from "@babylonjs/gui/2D/controls/displayGrid";
import { Vector3WithInfo as BabylonjsGuiVector3WithInfo } from "@babylonjs/gui/3D/vector3WithInfo";
import { Container3D as BabylonjsGuiContainer3D } from "@babylonjs/gui/3D/controls/container3D";
import { VolumeBasedPanel as BabylonjsGuiVolumeBasedPanel } from "@babylonjs/gui/3D/controls/volumeBasedPanel";
import { CylinderPanel as BabylonjsGuiCylinderPanel } from "@babylonjs/gui/3D/controls/cylinderPanel";
import { PlanePanel as BabylonjsGuiPlanePanel } from "@babylonjs/gui/3D/controls/planePanel";
import { ScatterPanel as BabylonjsGuiScatterPanel } from "@babylonjs/gui/3D/controls/scatterPanel";
import { SpherePanel as BabylonjsGuiSpherePanel } from "@babylonjs/gui/3D/controls/spherePanel";
import { StackPanel3D as BabylonjsGuiStackPanel3D } from "@babylonjs/gui/3D/controls/stackPanel3D";
import { AbstractButton3D as BabylonjsGuiAbstractButton3D } from "@babylonjs/gui/3D/controls/abstractButton3D";
import { Button3D as BabylonjsGuiButton3D } from "@babylonjs/gui/3D/controls/button3D";
import { HolographicButton as BabylonjsGuiHolographicButton } from "@babylonjs/gui/3D/controls/holographicButton";
import { MeshButton3D as BabylonjsGuiMeshButton3D } from "@babylonjs/gui/3D/controls/meshButton3D";
import { GlowLayer as BabylonjsCoreGlowLayer, IGlowLayerOptions as BabylonjsCoreIGlowLayerOptions } from "@babylonjs/core/Layers/glowLayer";
import { HighlightLayer as BabylonjsCoreHighlightLayer, IHighlightLayerOptions as BabylonjsCoreIHighlightLayerOptions } from "@babylonjs/core/Layers/highlightLayer";
import { CubeTexture as BabylonjsCoreCubeTexture } from "@babylonjs/core/Materials/Textures/cubeTexture";
import { RawCubeTexture as BabylonjsCoreRawCubeTexture } from "@babylonjs/core/Materials/Textures/rawCubeTexture";
import { ThinEngine as BabylonjsCoreThinEngine } from "@babylonjs/core/Engines/thinEngine";
import { RawTexture as BabylonjsCoreRawTexture } from "@babylonjs/core/Materials/Textures/rawTexture";
import { ProceduralTexture as BabylonjsCoreProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/proceduralTexture";
import { CustomProceduralTexture as BabylonjsCoreCustomProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/customProceduralTexture";
import { NoiseProceduralTexture as BabylonjsCoreNoiseProceduralTexture } from "@babylonjs/core/Materials/Textures/Procedurals/noiseProceduralTexture";
import { Engine as BabylonjsCoreEngine } from "@babylonjs/core/Engines/engine";
import { MirrorTexture as BabylonjsCoreMirrorTexture } from "@babylonjs/core/Materials/Textures/mirrorTexture";
import { MultiRenderTarget as BabylonjsCoreMultiRenderTarget, IMultiRenderTargetOptions as BabylonjsCoreIMultiRenderTargetOptions } from "@babylonjs/core/Materials/Textures/multiRenderTarget";
import { RefractionTexture as BabylonjsCoreRefractionTexture } from "@babylonjs/core/Materials/Textures/refractionTexture";
import { MultiviewRenderTarget as BabylonjsCoreMultiviewRenderTarget } from "@babylonjs/core/Materials/Textures/MultiviewRenderTarget";
import { VideoTexture as BabylonjsCoreVideoTexture, VideoTextureSettings as BabylonjsCoreVideoTextureSettings } from "@babylonjs/core/Materials/Textures/videoTexture";
import { DynamicTexture as BabylonjsCoreDynamicTexture } from "@babylonjs/core/Materials/Textures/dynamicTexture";
import { ClipboardInfo as BabylonjsCoreClipboardInfo } from "@babylonjs/core/Events/clipboardEvents";
import { RawTexture3D as BabylonjsCoreRawTexture3D } from "@babylonjs/core/Materials/Textures/rawTexture3D";
import { RawTexture2DArray as BabylonjsCoreRawTexture2DArray } from "@babylonjs/core/Materials/Textures/rawTexture2DArray";
import { ColorGradingTexture as BabylonjsCoreColorGradingTexture } from "@babylonjs/core/Materials/Textures/colorGradingTexture";
import { EquiRectangularCubeTexture as BabylonjsCoreEquiRectangularCubeTexture } from "@babylonjs/core/Materials/Textures/equiRectangularCubeTexture";
import { HDRCubeTexture as BabylonjsCoreHDRCubeTexture } from "@babylonjs/core/Materials/Textures/hdrCubeTexture";
import { HtmlElementTexture as BabylonjsCoreHtmlElementTexture, IHtmlElementTextureOptions as BabylonjsCoreIHtmlElementTextureOptions } from "@babylonjs/core/Materials/Textures/htmlElementTexture";
import { PickingInfo as BabylonjsCorePickingInfo } from "@babylonjs/core/Collisions/pickingInfo";
import { WebXRDefaultExperience as BabylonjsCoreWebXRDefaultExperience } from "@babylonjs/core/XR/webXRDefaultExperience";
import { SolidParticleSystem as BabylonjsCoreSolidParticleSystem } from "@babylonjs/core/Particles/solidParticleSystem";
import { Collider as BabylonjsCoreCollider } from "@babylonjs/core/Collisions/collider";
import { Ray as BabylonjsCoreRay } from "@babylonjs/core/Culling/ray";
import { IOfflineProvider as BabylonjsCoreIOfflineProvider } from "@babylonjs/core/Offline/IOfflineProvider";
import { RenderingGroupInfo as BabylonjsCoreRenderingGroupInfo } from "@babylonjs/core/Rendering/renderingManager";
import { Geometry as BabylonjsCoreGeometry } from "@babylonjs/core/Meshes/geometry";
import { KeyboardInfo as BabylonjsCoreKeyboardInfo, KeyboardInfoPre as BabylonjsCoreKeyboardInfoPre } from "@babylonjs/core/Events/keyboardEvents";
import { PointerEventTypes as BabylonjsCorePointerEventTypes, PointerInfo as BabylonjsCorePointerInfo, PointerInfoPre as BabylonjsCorePointerInfoPre } from "@babylonjs/core/Events/pointerEvents";
import { PostProcess as BabylonjsCorePostProcess } from "@babylonjs/core/PostProcesses/postProcess";
import { PostProcessManager as BabylonjsCorePostProcessManager } from "@babylonjs/core/PostProcesses/postProcessManager";
import { IPhysicsEnginePlugin as BabylonjsCoreIPhysicsEnginePlugin } from "@babylonjs/core/Physics/IPhysicsEngine";

export class FiberNodePropsHandler implements PropsHandler<FiberNodeProps> {
    getPropertyUpdates(oldProps: FiberNodeProps, newProps: FiberNodeProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreAnimationPropertiesOverride' property (not coded) BabylonjsCoreNode.animationPropertiesOverride.
            // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreNode.animations.
            { "name": "doNotSerialize", "type": "boolean" },
            { "name": "id", "type": "string" },
            // type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreNode.inspectableCustomProperties.
            // type: 'any' property (not coded) BabylonjsCoreNode.metadata.
            { "name": "name", "type": "string" },
            // type: '() => void' property (not coded) BabylonjsCoreNode.onDispose.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreNode>' property (not coded) BabylonjsCoreNode.onDisposeObservable.
            // type: '(node: BabylonjsCoreNode) => void' property (not coded) BabylonjsCoreNode.onReady.
            // type: 'BabylonjsCoreNode' property (not coded) BabylonjsCoreNode.parent.
            // type: 'any' property (not coded) BabylonjsCoreNode.reservedDataStore.
            { "name": "state", "type": "string" },
            { "name": "uniqueId", "type": "number" },
            { "name": "setEnabled", "type": "(value?: boolean) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Node is the basic class for all scene objects (Mesh, Light, Camera.)
 *
 * This code has been generated
 */
export class FiberNode implements HasPropsHandlers<FiberNodeProps> {
    private propsHandlers: PropsHandler<FiberNodeProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberNodeProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberNodeProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Node",
        "namespace": "@babylonjs/core/Meshes/mesh",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "className": "FiberNode"
    };
}

export class FiberTransformNodePropsHandler implements PropsHandler<FiberTransformNodeProps> {
    getPropertyUpdates(oldProps: FiberTransformNodeProps, newProps: FiberTransformNodeProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "billboardMode", "type": "number" },
            { "name": "ignoreNonUniformScaling", "type": "boolean" },
            { "name": "infiniteDistance", "type": "boolean" },
            // type: 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>' property (not coded) BabylonjsCoreTransformNode.onAfterWorldMatrixUpdateObservable.
            { "name": "position", "type": "BabylonjsCoreVector3" },
            { "name": "preserveParentRotationForBillboard", "type": "boolean" },
            { "name": "reIntegrateRotationIntoRotationQuaternion", "type": "boolean" },
            { "name": "rotation", "type": "BabylonjsCoreVector3" },
            // type: 'BabylonjsCoreQuaternion' property (not coded) BabylonjsCoreTransformNode.rotationQuaternion.
            { "name": "scaling", "type": "BabylonjsCoreVector3" },
            { "name": "scalingDeterminant", "type": "number" },
            { "name": "setAbsolutePosition", "type": "(absolutePosition?: BabylonjsCoreVector3) => BabylonjsCoreTransformNode", "method": true },
            { "name": "setDirection", "type": "(localAxis?: BabylonjsCoreVector3, yawCor?: number, pitchCor?: number, rollCor?: number) => BabylonjsCoreTransformNode", "method": true },
            { "name": "setParent", "type": "(node?: BabylonjsCoreNode) => BabylonjsCoreTransformNode", "method": true },
            { "name": "setPivotMatrix", "type": "(matrix?: BabylonjsCoreDeepImmutableObject<BabylonjsCoreMatrix>, postMultiplyPivotMatrix?: boolean) => BabylonjsCoreTransformNode", "method": true },
            { "name": "setPivotPoint", "type": "(point?: BabylonjsCoreVector3, space?: BabylonjsCoreSpace) => BabylonjsCoreTransformNode", "method": true },
            { "name": "setPositionWithLocalVector", "type": "(vector3?: BabylonjsCoreVector3) => BabylonjsCoreTransformNode", "method": true },
            { "name": "setPreTransformMatrix", "type": "(matrix?: BabylonjsCoreMatrix) => BabylonjsCoreTransformNode", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A TransformNode is an object that is not rendered but can be used as a center of transformation. This can decrease memory usage and increase rendering speed compared to using an empty mesh as a parent and is less complicated than using a pivot matrix.
 *
 * This code has been generated
 */
export class FiberTransformNode implements HasPropsHandlers<FiberNodeProps> {
    private propsHandlers: PropsHandler<FiberNodeProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberNodeProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberNodeProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TransformNode",
        "namespace": "@babylonjs/core/Meshes/mesh",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "isPure",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "className": "FiberTransformNode"
    };
}

export class FiberAbstractMeshPropsHandler implements PropsHandler<FiberAbstractMeshProps> {
    getPropertyUpdates(oldProps: FiberAbstractMeshProps, newProps: FiberAbstractMeshProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreAbstractActionManager' property (not coded) BabylonjsCoreAbstractMesh.actionManager.
            { "name": "alphaIndex", "type": "number" },
            { "name": "alwaysSelectAsActiveMesh", "type": "boolean" },
            { "name": "applyFog", "type": "boolean" },
            { "name": "checkCollisions", "type": "boolean" },
            { "name": "collisionGroup", "type": "number" },
            { "name": "collisionMask", "type": "number" },
            { "name": "computeBonesUsingShaders", "type": "boolean" },
            { "name": "cullingStrategy", "type": "number" },
            { "name": "definedFacingForward", "type": "boolean" },
            { "name": "doNotSyncBoundingInfo", "type": "boolean" },
            { "name": "edgesColor", "type": "BabylonjsCoreColor4" },
            { "name": "edgesWidth", "type": "number" },
            { "name": "ellipsoid", "type": "BabylonjsCoreVector3" },
            { "name": "ellipsoidOffset", "type": "BabylonjsCoreVector3" },
            { "name": "enablePointerMoveEvents", "type": "boolean" },
            { "name": "facetDepthSortFrom", "type": "BabylonjsCoreVector3" },
            { "name": "hasVertexAlpha", "type": "boolean" },
            { "name": "isBlocker", "type": "boolean" },
            { "name": "isPickable", "type": "boolean" },
            { "name": "isVisible", "type": "boolean" },
            { "name": "layerMask", "type": "number" },
            // type: 'BabylonjsCoreMaterial' property (not coded) BabylonjsCoreAbstractMesh.material.
            { "name": "mustDepthSortFacets", "type": "boolean" },
            { "name": "numBoneInfluencers", "type": "number" },
            // type: '() => void' property (not coded) BabylonjsCoreAbstractMesh.onCollide.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreAbstractMesh.onCollideObservable.
            // type: '() => void' property (not coded) BabylonjsCoreAbstractMesh.onCollisionPositionChange.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreVector3>' property (not coded) BabylonjsCoreAbstractMesh.onCollisionPositionChangeObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreAbstractMesh.onMaterialChangedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreAbstractMesh.onRebuildObservable.
            { "name": "outlineColor", "type": "BabylonjsCoreColor3" },
            { "name": "outlineWidth", "type": "number" },
            { "name": "overlayAlpha", "type": "number" },
            { "name": "overlayColor", "type": "BabylonjsCoreColor3" },
            { "name": "partitioningBBoxRatio", "type": "number" },
            { "name": "partitioningSubdivisions", "type": "number" },
            { "name": "receiveShadows", "type": "boolean" },
            { "name": "renderingGroupId", "type": "number" },
            { "name": "scaling", "type": "BabylonjsCoreVector3" },
            { "name": "showSubMeshesBoundingBox", "type": "boolean" },
            // type: 'BabylonjsCoreSkeleton' property (not coded) BabylonjsCoreAbstractMesh.skeleton.
            // type: 'BabylonjsCoreSubMesh[]' property (not coded) BabylonjsCoreAbstractMesh.subMeshes.
            { "name": "useOctreeForCollisions", "type": "boolean" },
            { "name": "useOctreeForPicking", "type": "boolean" },
            { "name": "useOctreeForRenderingSelection", "type": "boolean" },
            { "name": "useVertexColors", "type": "boolean" },
            { "name": "visibility", "type": "number" },
            { "name": "setBoundingInfo", "type": "(boundingInfo?: BabylonjsCoreBoundingInfo) => BabylonjsCoreAbstractMesh", "method": true },
            { "name": "setIndices", "type": "(indices?: BabylonjsCoreIndicesArray, totalVertices?: number) => BabylonjsCoreAbstractMesh", "method": true },
            { "name": "setVerticesData", "type": "(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number) => BabylonjsCoreAbstractMesh", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to store all common mesh properties
 *
 * This code has been generated
 */
export class FiberAbstractMesh implements HasPropsHandlers<FiberTransformNodeProps> {
    private propsHandlers: PropsHandler<FiberTransformNodeProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberTransformNodeProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberTransformNodeProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AbstractMesh",
        "namespace": "@babylonjs/core/Meshes/mesh",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "className": "FiberAbstractMesh"
    };
}

export class FiberMeshPropsHandler implements PropsHandler<FiberMeshProps> {
    getPropertyUpdates(oldProps: FiberMeshProps, newProps: FiberMeshProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "delayLoadingFile", "type": "string" },
            { "name": "delayLoadState", "type": "number" },
            // type: 'BabylonjsCoreInstancedMesh[]' property (not coded) BabylonjsCoreMesh.instances.
            { "name": "isUnIndexed", "type": "boolean" },
            { "name": "manualUpdateOfWorldMatrixInstancedBuffer", "type": "boolean" },
            // type: 'BabylonjsCoreMorphTargetManager' property (not coded) BabylonjsCoreMesh.morphTargetManager.
            // type: 'any' property (not coded) BabylonjsCoreMesh.normalizeSkinFourWeights.
            // type: 'any' property (not coded) BabylonjsCoreMesh.normalizeSkinWeightsAndExtra.
            // type: '() => void' property (not coded) BabylonjsCoreMesh.onBeforeDraw.
            // type: '(distance: number, mesh: BabylonjsCoreMesh, selectedLevel: BabylonjsCoreMesh) => void' property (not coded) BabylonjsCoreMesh.onLODLevelSelection.
            { "name": "overrideMaterialSideOrientation", "type": "number" },
            { "name": "overridenInstanceCount", "type": "number" },
            { "name": "setIndices", "type": "(indices?: BabylonjsCoreIndicesArray, totalVertices?: number, updatable?: boolean) => BabylonjsCoreAbstractMesh", "method": true },
            { "name": "setMaterialByID", "type": "(id?: string) => BabylonjsCoreMesh", "method": true },
            { "name": "setVerticesBuffer", "type": "(buffer?: BabylonjsCoreVertexBuffer) => BabylonjsCoreMesh", "method": true },
            { "name": "setVerticesData", "type": "(kind?: string, data?: BabylonjsCoreFloatArray, updatable?: boolean, stride?: number) => BabylonjsCoreAbstractMesh", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to represent renderable models
 *
 * This code has been generated
 */
export class FiberMesh implements HasPropsHandlers<FiberAbstractMeshProps> {
    private propsHandlers: PropsHandler<FiberAbstractMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler(),
            new FiberAbstractMeshPropsHandler(),
            new FiberTransformNodePropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAbstractMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAbstractMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Mesh",
        "namespace": "@babylonjs/core/Meshes/mesh",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "parent",
                "type": "BabylonjsCoreNode",
                "optional": true
            },
            {
                "name": "source",
                "type": "BabylonjsCoreMesh",
                "optional": true
            },
            {
                "name": "doNotCloneChildren",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "clonePhysicsImpostor",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "className": "FiberMesh"
    };
}

export class FiberCameraPropsHandler implements PropsHandler<FiberCameraProps> {
    getPropertyUpdates(oldProps: FiberCameraProps, newProps: FiberCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "cameraRigMode", "type": "number" },
            // type: 'BabylonjsCoreRenderTargetTexture[]' property (not coded) BabylonjsCoreCamera.customRenderTargets.
            { "name": "fov", "type": "number" },
            { "name": "fovMode", "type": "number" },
            { "name": "inertia", "type": "number" },
            // type: 'BabylonjsCoreCameraInputsManager<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreCamera.inputs.
            { "name": "interaxialDistance", "type": "number" },
            { "name": "isIntermediate", "type": "boolean" },
            { "name": "isRigCamera", "type": "boolean" },
            { "name": "isStereoscopicSideBySide", "type": "boolean" },
            { "name": "layerMask", "type": "number" },
            { "name": "maxZ", "type": "number" },
            { "name": "minZ", "type": "number" },
            { "name": "mode", "type": "number" },
            // type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreCamera.onAfterCheckInputsObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreCamera.onProjectionMatrixChangedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreCamera.onRestoreStateObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreCamera.onViewMatrixChangedObservable.
            { "name": "orthoBottom", "type": "number" },
            { "name": "orthoLeft", "type": "number" },
            { "name": "orthoRight", "type": "number" },
            { "name": "orthoTop", "type": "number" },
            // type: 'BabylonjsCoreRenderTargetTexture' property (not coded) BabylonjsCoreCamera.outputRenderTarget.
            { "name": "position", "type": "BabylonjsCoreVector3" },
            // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreCamera.rigParent.
            { "name": "upVector", "type": "BabylonjsCoreVector3" },
            // type: 'BabylonjsCoreViewport' property (not coded) BabylonjsCoreCamera.viewport.
            { "name": "setCameraRigMode", "type": "(mode?: number, rigParams?: any) => void", "method": true },
            { "name": "setCameraRigParameter", "type": "(name?: string, value?: any) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This is the base class of all the camera used in the application.
 *
 * This code has been generated
 */
export class FiberCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = false;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Camera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "setActiveOnSceneIfNoneActive",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberCamera"
    };
}

export class FiberTargetCameraPropsHandler implements PropsHandler<FiberTargetCameraProps> {
    getPropertyUpdates(oldProps: FiberTargetCameraProps, newProps: FiberTargetCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "cameraDirection", "type": "BabylonjsCoreVector3" },
            // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreTargetCamera.cameraRotation.
            // type: 'any' property (not coded) BabylonjsCoreTargetCamera.lockedTarget.
            { "name": "noRotationConstraint", "type": "boolean" },
            { "name": "rotation", "type": "BabylonjsCoreVector3" },
            // type: 'BabylonjsCoreQuaternion' property (not coded) BabylonjsCoreTargetCamera.rotationQuaternion.
            { "name": "speed", "type": "number" },
            { "name": "updateUpVectorFromRotation", "type": "boolean" },
            { "name": "setTarget", "type": "(target?: BabylonjsCoreVector3) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A target camera takes a mesh or position as a target and continues to look at it while it moves.
 * This is the base of the follow, arc rotate cameras and Free camera
 *
 * This code has been generated
 */
export class FiberTargetCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TargetCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "setActiveOnSceneIfNoneActive",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberTargetCamera"
    };
}

export class FiberFreeCameraPropsHandler implements PropsHandler<FiberFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberFreeCameraProps, newProps: FiberFreeCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "angularSensibility", "type": "number" },
            { "name": "applyGravity", "type": "boolean" },
            { "name": "checkCollisions", "type": "boolean" },
            { "name": "collisionMask", "type": "number" },
            { "name": "ellipsoid", "type": "BabylonjsCoreVector3" },
            { "name": "ellipsoidOffset", "type": "BabylonjsCoreVector3" },
            // type: 'BabylonjsCoreFreeCameraInputsManager' property (not coded) BabylonjsCoreFreeCamera.inputs.
            { "name": "keysDown", "type": "number[]" },
            { "name": "keysLeft", "type": "number[]" },
            { "name": "keysRight", "type": "number[]" },
            { "name": "keysUp", "type": "number[]" },
            // type: '(collidedMesh: BabylonjsCoreAbstractMesh) => void' property (not coded) BabylonjsCoreFreeCamera.onCollide.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
 * Please consider using the new UniversalCamera instead as it adds more functionality like the gamepad.
 *
 * This code has been generated
 */
export class FiberFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FreeCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "setActiveOnSceneIfNoneActive",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberFreeCamera"
    };
}

export class FiberTouchCameraPropsHandler implements PropsHandler<FiberTouchCameraProps> {
    getPropertyUpdates(oldProps: FiberTouchCameraProps, newProps: FiberTouchCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "touchAngularSensibility", "type": "number" },
            { "name": "touchMoveSensibility", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a FPS type of camera controlled by touch.
 * This is like a universal camera minus the Gamepad controls.
 *
 * This code has been generated
 */
export class FiberTouchCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TouchCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberTouchCamera"
    };
}

export class FiberUniversalCameraPropsHandler implements PropsHandler<FiberUniversalCameraProps> {
    getPropertyUpdates(oldProps: FiberUniversalCameraProps, newProps: FiberUniversalCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "gamepadAngularSensibility", "type": "number" },
            { "name": "gamepadMoveSensibility", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The Universal Camera is the one to choose for first person shooter type games, and works with all the keyboard, mouse, touch and gamepads. This replaces the earlier Free Camera,
 * which still works and will still be found in many Playgrounds.
 *
 * This code has been generated
 */
export class FiberUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "UniversalCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberUniversalCamera"
    };
}

export class FiberGamepadCameraPropsHandler implements PropsHandler<FiberGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberGamepadCameraProps, newProps: FiberGamepadCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a FPS type of camera. This is only here for back compat purpose.
 * Please use the UniversalCamera instead as both are identical.
 *
 * This code has been generated
 */
export class FiberGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGamepadCameraPropsHandler(),
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GamepadCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberGamepadCamera"
    };
}

export class FiberAnaglyphGamepadCameraPropsHandler implements PropsHandler<FiberAnaglyphGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphGamepadCameraProps, newProps: FiberAnaglyphGamepadCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on GamepadCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphGamepadCameraPropsHandler(),
            new FiberGamepadCameraPropsHandler(),
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphGamepadCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberAnaglyphGamepadCamera"
    };
}

export class FiberStereoscopicGamepadCameraPropsHandler implements PropsHandler<FiberStereoscopicGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicGamepadCameraProps, newProps: FiberStereoscopicGamepadCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on GamepadCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicGamepadCameraPropsHandler(),
            new FiberGamepadCameraPropsHandler(),
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicGamepadCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "isStereoscopicSideBySide",
                "type": "boolean",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberStereoscopicGamepadCamera"
    };
}

export class FiberAnaglyphUniversalCameraPropsHandler implements PropsHandler<FiberAnaglyphUniversalCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphUniversalCameraProps, newProps: FiberAnaglyphUniversalCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on UniversalCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphUniversalCameraPropsHandler(),
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphUniversalCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberAnaglyphUniversalCamera"
    };
}

export class FiberStereoscopicUniversalCameraPropsHandler implements PropsHandler<FiberStereoscopicUniversalCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicUniversalCameraProps, newProps: FiberStereoscopicUniversalCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on UniversalCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicUniversalCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicUniversalCameraPropsHandler(),
            new FiberUniversalCameraPropsHandler(),
            new FiberTouchCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicUniversalCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "isStereoscopicSideBySide",
                "type": "boolean",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberStereoscopicUniversalCamera"
    };
}

export class FiberDeviceOrientationCameraPropsHandler implements PropsHandler<FiberDeviceOrientationCameraProps> {
    getPropertyUpdates(oldProps: FiberDeviceOrientationCameraProps, newProps: FiberDeviceOrientationCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "disablePointerInputWhenUsingDeviceOrientation", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This is a camera specifically designed to react to device orientation events such as a modern mobile device
 * being tilted forward or back and left or right.
 *
 * This code has been generated
 */
export class FiberDeviceOrientationCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDeviceOrientationCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DeviceOrientationCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberDeviceOrientationCamera"
    };
}

export class FiberVRDeviceOrientationFreeCameraPropsHandler implements PropsHandler<FiberVRDeviceOrientationFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberVRDeviceOrientationFreeCameraProps, newProps: FiberVRDeviceOrientationFreeCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate VR rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export class FiberVRDeviceOrientationFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRDeviceOrientationFreeCameraPropsHandler(),
            new FiberDeviceOrientationCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationFreeCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "compensateDistortion",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "vrCameraMetrics",
                "type": "BabylonjsCoreVRCameraMetrics",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberVRDeviceOrientationFreeCamera"
    };
}

export class FiberVRDeviceOrientationGamepadCameraPropsHandler implements PropsHandler<FiberVRDeviceOrientationGamepadCameraProps> {
    getPropertyUpdates(oldProps: FiberVRDeviceOrientationGamepadCameraProps, newProps: FiberVRDeviceOrientationGamepadCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate VR rendering (based on VRDeviceOrientationFreeCamera)
 *
 * This code has been generated
 */
export class FiberVRDeviceOrientationGamepadCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRDeviceOrientationGamepadCameraPropsHandler(),
            new FiberVRDeviceOrientationFreeCameraPropsHandler(),
            new FiberDeviceOrientationCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationGamepadCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "compensateDistortion",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "vrCameraMetrics",
                "type": "BabylonjsCoreVRCameraMetrics",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberVRDeviceOrientationGamepadCamera"
    };
}

export class FiberAnaglyphFreeCameraPropsHandler implements PropsHandler<FiberAnaglyphFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphFreeCameraProps, newProps: FiberAnaglyphFreeCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphFreeCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberAnaglyphFreeCamera"
    };
}

export class FiberStereoscopicFreeCameraPropsHandler implements PropsHandler<FiberStereoscopicFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicFreeCameraProps, newProps: FiberStereoscopicFreeCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on FreeCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicFreeCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "isStereoscopicSideBySide",
                "type": "boolean",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberStereoscopicFreeCamera"
    };
}

export class FiberVirtualJoysticksCameraPropsHandler implements PropsHandler<FiberVirtualJoysticksCameraProps> {
    getPropertyUpdates(oldProps: FiberVirtualJoysticksCameraProps, newProps: FiberVirtualJoysticksCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a free type of camera. It can be useful in First Person Shooter game for instance.
 * It is identical to the Free Camera and simply adds by default a virtual joystick.
 * Virtual Joysticks are on-screen 2D graphics that are used to control the camera or other scene items.
 *
 * This code has been generated
 */
export class FiberVirtualJoysticksCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVirtualJoysticksCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VirtualJoysticksCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberVirtualJoysticksCamera"
    };
}

export class FiberWebVRFreeCameraPropsHandler implements PropsHandler<FiberWebVRFreeCameraProps> {
    getPropertyUpdates(oldProps: FiberWebVRFreeCameraProps, newProps: FiberWebVRFreeCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreWebVRController[]' property (not coded) BabylonjsCoreWebVRFreeCamera.controllers.
            { "name": "devicePosition", "type": "BabylonjsCoreVector3" },
            // type: 'BabylonjsCoreQuaternion' property (not coded) BabylonjsCoreWebVRFreeCamera.deviceRotationQuaternion.
            { "name": "deviceScaleFactor", "type": "number" },
            // type: 'BabylonjsCoreObservable<BabylonjsCoreWebVRController>' property (not coded) BabylonjsCoreWebVRFreeCamera.onControllerMeshLoadedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreWebVRController[]>' property (not coded) BabylonjsCoreWebVRFreeCamera.onControllersAttachedObservable.
            // type: 'BabylonjsCoreObservable<any>' property (not coded) BabylonjsCoreWebVRFreeCamera.onPoseUpdatedFromDeviceObservable.
            // type: 'BabylonjsCoreDevicePose' property (not coded) BabylonjsCoreWebVRFreeCamera.rawPose.
            { "name": "rigParenting", "type": "boolean" },
            // type: 'any' property (not coded) BabylonjsCoreWebVRFreeCamera.updateCacheCalled.
            // type: 'any' property (not coded) BabylonjsCoreWebVRFreeCamera.webVROptions.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a WebVR camera.
 * The WebVR camera is Babylon's simple interface to interaction with Windows Mixed Reality, HTC Vive and Oculus Rift.
 *
 * This code has been generated
 */
export class FiberWebVRFreeCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberWebVRFreeCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "WebVRFreeCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "webVROptions",
                "type": "BabylonjsCoreWebVROptions",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberWebVRFreeCamera"
    };
}

export class FiberWebXRCameraPropsHandler implements PropsHandler<FiberWebXRCameraProps> {
    getPropertyUpdates(oldProps: FiberWebXRCameraProps, newProps: FiberWebXRCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "compensateOnFirstFrame", "type": "boolean" },
            { "name": "setTransformationFromNonVRCamera", "type": "(otherCamera?: BabylonjsCoreCamera, resetToBaseReferenceSpace?: boolean) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * WebXR Camera which holds the views for the xrSession
 *
 * This code has been generated
 */
export class FiberWebXRCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberWebXRCameraPropsHandler(),
            new FiberFreeCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "WebXRCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "_xrSessionManager",
                "type": "BabylonjsCoreWebXRSessionManager",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberWebXRCamera"
    };
}

export class FiberArcRotateCameraPropsHandler implements PropsHandler<FiberArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberArcRotateCameraProps, newProps: FiberArcRotateCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "allowUpsideDown", "type": "boolean" },
            { "name": "alpha", "type": "number" },
            { "name": "angularSensibilityX", "type": "number" },
            { "name": "angularSensibilityY", "type": "number" },
            { "name": "beta", "type": "number" },
            { "name": "checkCollisions", "type": "boolean" },
            { "name": "collisionRadius", "type": "BabylonjsCoreVector3" },
            { "name": "inertialAlphaOffset", "type": "number" },
            { "name": "inertialBetaOffset", "type": "number" },
            { "name": "inertialPanningX", "type": "number" },
            { "name": "inertialPanningY", "type": "number" },
            { "name": "inertialRadiusOffset", "type": "number" },
            // type: 'BabylonjsCoreArcRotateCameraInputsManager' property (not coded) BabylonjsCoreArcRotateCamera.inputs.
            { "name": "keysDown", "type": "number[]" },
            { "name": "keysLeft", "type": "number[]" },
            { "name": "keysRight", "type": "number[]" },
            { "name": "keysUp", "type": "number[]" },
            { "name": "lowerAlphaLimit", "type": "number" },
            { "name": "lowerBetaLimit", "type": "number" },
            { "name": "lowerRadiusLimit", "type": "number" },
            // type: '(collidedMesh: BabylonjsCoreAbstractMesh) => void' property (not coded) BabylonjsCoreArcRotateCamera.onCollide.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreArcRotateCamera.onMeshTargetChangedObservable.
            { "name": "panningAxis", "type": "BabylonjsCoreVector3" },
            { "name": "panningDistanceLimit", "type": "number" },
            { "name": "panningInertia", "type": "number" },
            { "name": "panningOriginTarget", "type": "BabylonjsCoreVector3" },
            { "name": "panningSensibility", "type": "number" },
            { "name": "pinchDeltaPercentage", "type": "number" },
            { "name": "pinchPrecision", "type": "number" },
            { "name": "pinchToPanMaxDistance", "type": "number" },
            { "name": "position", "type": "BabylonjsCoreVector3" },
            { "name": "radius", "type": "number" },
            { "name": "target", "type": "BabylonjsCoreVector3" },
            // type: 'BabylonjsCoreVector2' property (not coded) BabylonjsCoreArcRotateCamera.targetScreenOffset.
            { "name": "upperAlphaLimit", "type": "number" },
            { "name": "upperBetaLimit", "type": "number" },
            { "name": "upperRadiusLimit", "type": "number" },
            { "name": "upVector", "type": "BabylonjsCoreVector3" },
            { "name": "useAutoRotationBehavior", "type": "boolean" },
            { "name": "useBouncingBehavior", "type": "boolean" },
            { "name": "useFramingBehavior", "type": "boolean" },
            { "name": "useInputToRestoreState", "type": "boolean" },
            { "name": "useNaturalPinchZoom", "type": "boolean" },
            { "name": "wheelDeltaPercentage", "type": "number" },
            { "name": "wheelPrecision", "type": "number" },
            { "name": "zoomOnFactor", "type": "number" },
            { "name": "setPosition", "type": "(position?: BabylonjsCoreVector3) => void", "method": true },
            { "name": "setTarget", "type": "(target?: BabylonjsCoreAbstractMesh | BabylonjsCoreVector3, toBoundingCenter?: boolean, allowSamePosition?: boolean) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents an orbital type of camera.
 *
 * This camera always points towards a given target position and can be rotated around that target with the target as the centre of rotation. It can be controlled with cursors and mouse, or with touch events.
 * Think of this camera as one orbiting its target position, or more imaginatively as a spy satellite orbiting the earth. Its position relative to the target (earth) can be set by three parameters, alpha (radians) the longitudinal rotation, beta (radians) the latitudinal rotation and radius the distance from the target position.
 *
 * This code has been generated
 */
export class FiberArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ArcRotateCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "alpha",
                "type": "number",
                "optional": false
            },
            {
                "name": "beta",
                "type": "number",
                "optional": false
            },
            {
                "name": "radius",
                "type": "number",
                "optional": false
            },
            {
                "name": "target",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "setActiveOnSceneIfNoneActive",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberArcRotateCamera"
    };
}

export class FiberAnaglyphArcRotateCameraPropsHandler implements PropsHandler<FiberAnaglyphArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberAnaglyphArcRotateCameraProps, newProps: FiberAnaglyphArcRotateCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate anaglyphic rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export class FiberAnaglyphArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAnaglyphArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AnaglyphArcRotateCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "alpha",
                "type": "number",
                "optional": false
            },
            {
                "name": "beta",
                "type": "number",
                "optional": false
            },
            {
                "name": "radius",
                "type": "number",
                "optional": false
            },
            {
                "name": "target",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberAnaglyphArcRotateCamera"
    };
}

export class FiberStereoscopicArcRotateCameraPropsHandler implements PropsHandler<FiberStereoscopicArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberStereoscopicArcRotateCameraProps, newProps: FiberStereoscopicArcRotateCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate stereoscopic rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export class FiberStereoscopicArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStereoscopicArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StereoscopicArcRotateCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "alpha",
                "type": "number",
                "optional": false
            },
            {
                "name": "beta",
                "type": "number",
                "optional": false
            },
            {
                "name": "radius",
                "type": "number",
                "optional": false
            },
            {
                "name": "target",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "interaxialDistance",
                "type": "number",
                "optional": false
            },
            {
                "name": "isStereoscopicSideBySide",
                "type": "boolean",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberStereoscopicArcRotateCamera"
    };
}

export class FiberVRDeviceOrientationArcRotateCameraPropsHandler implements PropsHandler<FiberVRDeviceOrientationArcRotateCameraProps> {
    getPropertyUpdates(oldProps: FiberVRDeviceOrientationArcRotateCameraProps, newProps: FiberVRDeviceOrientationArcRotateCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Camera used to simulate VR rendering (based on ArcRotateCamera)
 *
 * This code has been generated
 */
export class FiberVRDeviceOrientationArcRotateCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRDeviceOrientationArcRotateCameraPropsHandler(),
            new FiberArcRotateCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRDeviceOrientationArcRotateCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "alpha",
                "type": "number",
                "optional": false
            },
            {
                "name": "beta",
                "type": "number",
                "optional": false
            },
            {
                "name": "radius",
                "type": "number",
                "optional": false
            },
            {
                "name": "target",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "compensateDistortion",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "vrCameraMetrics",
                "type": "BabylonjsCoreVRCameraMetrics",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberVRDeviceOrientationArcRotateCamera"
    };
}

export class FiberFlyCameraPropsHandler implements PropsHandler<FiberFlyCameraProps> {
    getPropertyUpdates(oldProps: FiberFlyCameraProps, newProps: FiberFlyCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "angularSensibility", "type": "number" },
            { "name": "applyGravity", "type": "boolean" },
            { "name": "bankedTurn", "type": "boolean" },
            { "name": "bankedTurnLimit", "type": "number" },
            { "name": "bankedTurnMultiplier", "type": "number" },
            { "name": "cameraDirection", "type": "BabylonjsCoreVector3" },
            { "name": "checkCollisions", "type": "boolean" },
            { "name": "collisionMask", "type": "number" },
            { "name": "ellipsoid", "type": "BabylonjsCoreVector3" },
            { "name": "ellipsoidOffset", "type": "BabylonjsCoreVector3" },
            // type: 'BabylonjsCoreFlyCameraInputsManager' property (not coded) BabylonjsCoreFlyCamera.inputs.
            { "name": "keysBackward", "type": "number[]" },
            { "name": "keysDown", "type": "number[]" },
            { "name": "keysForward", "type": "number[]" },
            { "name": "keysLeft", "type": "number[]" },
            { "name": "keysRight", "type": "number[]" },
            { "name": "keysUp", "type": "number[]" },
            // type: '(collidedMesh: BabylonjsCoreAbstractMesh) => void' property (not coded) BabylonjsCoreFlyCamera.onCollide.
            { "name": "rollCorrect", "type": "number" },
            // type: 'BabylonjsCoreQuaternion' property (not coded) BabylonjsCoreFlyCamera.rotationQuaternion.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This is a flying camera, designed for 3D movement and rotation in all directions,
 * such as in a 3D Space Shooter or a Flight Simulator.
 *
 * This code has been generated
 */
export class FiberFlyCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFlyCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FlyCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "setActiveOnSceneIfNoneActive",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberFlyCamera"
    };
}

export class FiberFollowCameraPropsHandler implements PropsHandler<FiberFollowCameraProps> {
    getPropertyUpdates(oldProps: FiberFollowCameraProps, newProps: FiberFollowCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "cameraAcceleration", "type": "number" },
            { "name": "heightOffset", "type": "number" },
            // type: 'BabylonjsCoreFollowCameraInputsManager' property (not coded) BabylonjsCoreFollowCamera.inputs.
            // type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCoreFollowCamera.lockedTarget.
            { "name": "lowerHeightOffsetLimit", "type": "number" },
            { "name": "lowerRadiusLimit", "type": "number" },
            { "name": "lowerRotationOffsetLimit", "type": "number" },
            { "name": "maxCameraSpeed", "type": "number" },
            { "name": "radius", "type": "number" },
            { "name": "rotationOffset", "type": "number" },
            { "name": "upperHeightOffsetLimit", "type": "number" },
            { "name": "upperRadiusLimit", "type": "number" },
            { "name": "upperRotationOffsetLimit", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A follow camera takes a mesh as a target and follows it as it moves. Both a free camera version followCamera and
 * an arc rotate version arcFollowCamera are available.
 *
 * This code has been generated
 */
export class FiberFollowCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFollowCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FollowCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "lockedTarget",
                "type": "BabylonjsCoreAbstractMesh",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberFollowCamera"
    };
}

export class FiberArcFollowCameraPropsHandler implements PropsHandler<FiberArcFollowCameraProps> {
    getPropertyUpdates(oldProps: FiberArcFollowCameraProps, newProps: FiberArcFollowCameraProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "alpha", "type": "number" },
            { "name": "beta", "type": "number" },
            { "name": "radius", "type": "number" },
            // type: 'BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCoreArcFollowCamera.target.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Arc Rotate version of the follow camera.
 * It still follows a Defined mesh but in an Arc Rotate Camera fashion.
 *
 * This code has been generated
 */
export class FiberArcFollowCamera implements HasPropsHandlers<FiberCameraProps> {
    public readonly isTargetable = true;
    private propsHandlers: PropsHandler<FiberCameraProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberArcFollowCameraPropsHandler(),
            new FiberTargetCameraPropsHandler(),
            new FiberCameraPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberCameraProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberCameraProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ArcFollowCamera",
        "namespace": "@babylonjs/core/Cameras/camera",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "alpha",
                "type": "number",
                "optional": false
            },
            {
                "name": "beta",
                "type": "number",
                "optional": false
            },
            {
                "name": "radius",
                "type": "number",
                "optional": false
            },
            {
                "name": "target",
                "type": "BabylonjsCoreAbstractMesh",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isCamera": true,
        "isNode": true,
        "className": "FiberArcFollowCamera"
    };
}

/**
 * Creates a box mesh
 * * The parameter `size` sets the size (float) of each box side (default 1)
 * * You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value of `size`)
 * * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 Color3 elements) and `faceUV` (an array of 6 Vector4 elements)
 * * Please read this tutorial : https://doc.babylonjs.com/how_to/createbox_per_face_textures_and_colors
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberBox implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateBox",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "size",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "width",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "depth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BabylonjsCoreVector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BabylonjsCoreColor4[]",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberBox"
    };
}

/**
 * Creates a tiled box mesh
 * * faceTiles sets the pattern, tile size and number of tiles for a face
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberTiledBox implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateTiledBox",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "pattern",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "size",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "width",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "depth",
                        "type": "number",
                        "optional": false
                    },
                    {
                        "name": "tileSize",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tileWidth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tileHeight",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BabylonjsCoreVector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BabylonjsCoreColor4[]",
                        "optional": true
                    },
                    {
                        "name": "alignHorizontal",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "alignVertical",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberTiledBox"
    };
}

/**
 * Creates a sphere mesh
 * * The parameter `diameter` sets the diameter size (float) of the sphere (default 1)
 * * You can set some different sphere dimensions, for instance to build an ellipsoid, by using the parameters `diameterX`, `diameterY` and `diameterZ` (all by default have the same value of `diameter`)
 * * The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32)
 * * You can create an unclosed sphere with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference (latitude) : 2 x PI x ratio
 * * You can create an unclosed sphere on its height with the parameter `slice` (positive float, default1), valued between 0 and 1, what is the height ratio (longitude)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberSphere implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateSphere",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "segments",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameter",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameterX",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameterY",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameterZ",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "arc",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "slice",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberSphere"
    };
}

/**
 * Creates a plane polygonal mesh.  By default, this is a disc
 * * The parameter `radius` sets the radius size (float) of the polygon (default 0.5)
 * * The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc
 * * You can create an unclosed polygon with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference : 2 x PI x ratio
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberDisc implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateDisc",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "radius",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tessellation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "arc",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberDisc"
    };
}

/**
 * Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided
 * * The parameter `radius` sets the radius size (float) of the icosphere (default 1)
 * * You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value of `radius`)
 * * The parameter `subdivisions` sets the number of subdivisions (postive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size
 * * The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberIcoSphere implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateIcoSphere",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "radius",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "radiusX",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "radiusY",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "radiusZ",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "flat",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "subdivisions",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberIcoSphere"
    };
}

/**
 * Creates a ribbon mesh. The ribbon is a parametric shape.  It has no predefined shape. Its final shape will depend on the input parameters
 * * The parameter `pathArray` is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry
 * * The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array
 * * The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array
 * * The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path
 * * It's the offset to join the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11
 * * The optional parameter `instance` is an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#ribbon
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The parameter `uvs` is an optional flat array of `Vector2` to update/set each ribbon vertex with its own custom UV values instead of the computed ones
 * * The parameters `colors` is an optional flat array of `Color4` to set/update each ribbon vertex with its own custom color values
 * * Note that if you use the parameters `uvs` or `colors`, the passed arrays must be populated with the right number of elements, it is to say the number of ribbon vertices. Remember that if you set `closePath` to `true`, there's one extra vertex per path in the geometry
 * * Moreover, you can use the parameter `color` with `instance` (to update the ribbon), only if you previously used it at creation time
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberRibbon implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateRibbon",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "pathArray",
                        "type": "BabylonjsCoreVector3[][]",
                        "optional": false
                    },
                    {
                        "name": "closeArray",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "closePath",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "offset",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreMesh",
                        "optional": true
                    },
                    {
                        "name": "invertUV",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "uvs",
                        "type": "BabylonjsCoreVector2[]",
                        "optional": true
                    },
                    {
                        "name": "colors",
                        "type": "BabylonjsCoreColor4[]",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberRibbon"
    };
}

/**
 * Creates a cylinder or a cone mesh
 * * The parameter `height` sets the height size (float) of the cylinder/cone (float, default 2).
 * * The parameter `diameter` sets the diameter of the top and bottom cap at once (float, default 1).
 * * The parameters `diameterTop` and `diameterBottom` overwrite the parameter `diameter` and set respectively the top cap and bottom cap diameter (floats, default 1). The parameter "diameterBottom" can't be zero.
 * * The parameter `tessellation` sets the number of cylinder sides (positive integer, default 24). Set it to 3 to get a prism for instance.
 * * The parameter `subdivisions` sets the number of rings along the cylinder height (positive integer, default 1).
 * * The parameter `hasRings` (boolean, default false) makes the subdivisions independent from each other, so they become different faces.
 * * The parameter `enclose`  (boolean, default false) adds two extra faces per subdivision to a sliced cylinder to close it around its height axis.
 * * The parameter `cap` sets the way the cylinder is capped. Possible values : BABYLON.Mesh.NO_CAP, BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL (default).
 * * The parameter `arc` (float, default 1) is the ratio (max 1) to apply to the circumference to slice the cylinder.
 * * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of n Color3 elements) and `faceUV` (an array of n Vector4 elements).
 * * The value of n is the number of cylinder faces. If the cylinder has only 1 subdivisions, n equals : top face + cylinder surface + bottom face = 3
 * * Now, if the cylinder has 5 independent subdivisions (hasRings = true), n equals : top face + 5 stripe surfaces + bottom face = 2 + 5 = 7
 * * Finally, if the cylinder has 5 independent subdivisions and is enclose, n equals : top face + 5 x (stripe surface + 2 closing faces) + bottom face = 2 + 5 * 3 = 17
 * * Each array (color or UVs) is always ordered the same way : the first element is the bottom cap, the last element is the top cap. The other elements are each a ring surface.
 * * If `enclose` is false, a ring surface is one element.
 * * If `enclose` is true, a ring surface is 3 successive elements in the array : the tubular surface, then the two closing faces.
 * * Example how to set colors and textures on a sliced cylinder : https://www.html5gamedevs.com/topic/17945-creating-a-closed-slice-of-a-cylinder/#comment-106379
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export class FiberCylinder implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateCylinder",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameterTop",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameterBottom",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "diameter",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tessellation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "subdivisions",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "arc",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BabylonjsCoreColor4[]",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BabylonjsCoreVector4[]",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "hasRings",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "enclose",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "cap",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberCylinder"
    };
}

/**
 * Creates a torus mesh
 * * The parameter `diameter` sets the diameter size (float) of the torus (default 1)
 * * The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5)
 * * The parameter `tessellation` sets the number of torus sides (postive integer, default 16)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export class FiberTorus implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateTorus",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "diameter",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "thickness",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tessellation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberTorus"
    };
}

/**
 * Creates a torus knot mesh
 * * The parameter `radius` sets the global radius size (float) of the torus knot (default 2)
 * * The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32)
 * * The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32)
 * * The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3)
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export class FiberTorusKnot implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateTorusKnot",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "radius",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tube",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "radialSegments",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tubularSegments",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "p",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "q",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberTorusKnot"
    };
}

/**
 * Creates a line system mesh. A line system is a pool of many lines gathered in a single mesh
 * * A line system mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of lines as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineSystem to this static function
 * * The parameter `lines` is an array of lines, each line being an array of successive Vector3
 * * The optional parameter `instance` is an instance of an existing LineSystem object to be updated with the passed `lines` parameter
 * * The optional parameter `colors` is an array of line colors, each line colors being an array of successive Color4, one per line point
 * * The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need the alpha blending (faster)
 * * Updating a simple Line mesh, you just need to update every line in the `lines` array : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * When updating an instance, remember that only line point positions can change, not the number of points, neither the number of lines
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberLineSystem implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateLineSystem",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "lines",
                        "type": "BabylonjsCoreVector3[][]",
                        "optional": false
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreLinesMesh",
                        "optional": true
                    },
                    {
                        "name": "colors",
                        "type": "BabylonjsCoreColor4[][]",
                        "optional": true
                    },
                    {
                        "name": "useVertexAlpha",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberLineSystem"
    };
}

/**
 * Creates a line mesh
 * A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
 * * The parameter `points` is an array successive Vector3
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * The optional parameter `colors` is an array of successive Color4, one per line point
 * * The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need alpha blending (faster)
 * * When updating an instance, remember that only point positions can change, not the number of points
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberLines implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateLines",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "points",
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreLinesMesh",
                        "optional": true
                    },
                    {
                        "name": "colors",
                        "type": "BabylonjsCoreColor4[]",
                        "optional": true
                    },
                    {
                        "name": "useVertexAlpha",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberLines"
    };
}

/**
 * Creates a dashed line mesh
 * * A dashed line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
 * * Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
 * * The parameter `points` is an array successive Vector3
 * * The parameter `dashNb` is the intended total number of dashes (positive integer, default 200)
 * * The parameter `dashSize` is the size of the dashes relatively the dash number (positive float, default 3)
 * * The parameter `gapSize` is the size of the gap between two successive dashes relatively the dash number (positive float, default 1)
 * * The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#lines-and-dashedlines
 * * When updating an instance, remember that only point positions can change, not the number of points
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberDashedLines implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateDashedLines",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "points",
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "dashSize",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "gapSize",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "dashNb",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreLinesMesh",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberDashedLines"
    };
}

/**
 * Creates an extruded shape mesh. The extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
 * * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
 * * The parameter `rotation` (float, default 0 radians) is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve.
 * * The parameter `scale` (float, default 1) is the value to scale the shape.
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape.
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture.
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export class FiberExtrudeShape implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "ExtrudeShape",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "shape",
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "path",
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "scale",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "rotation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "cap",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreMesh",
                        "optional": true
                    },
                    {
                        "name": "invertUV",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberExtrudeShape"
    };
}

/**
 * Creates an custom extruded shape mesh.
 * The custom extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
 * * The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
 * * The parameter `rotationFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the begining of the path
 * * It must returns a float value that will be the rotation in radians applied to the shape on each path point.
 * * The parameter `scaleFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the begining of the path
 * * It must returns a float value that will be the scale value applied to the shape on each path point
 * * The parameter `ribbonClosePath` (boolean, default false) forces the extrusion underlying ribbon to close all the paths in its `pathArray`
 * * The parameter `ribbonCloseArray` (boolean, default false) forces the extrusion underlying ribbon to close its `pathArray`
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#extruded-shape
 * * Remember you can only change the shape or path point positions, not their number when updating an extruded shape
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberExtrudeShapeCustom implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "ExtrudeShapeCustom",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "shape",
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "path",
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "scaleFunction",
                        "type": "any",
                        "optional": true
                    },
                    {
                        "name": "rotationFunction",
                        "type": "any",
                        "optional": true
                    },
                    {
                        "name": "ribbonCloseArray",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "ribbonClosePath",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "cap",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreMesh",
                        "optional": true
                    },
                    {
                        "name": "invertUV",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberExtrudeShapeCustom"
    };
}

/**
 * Creates lathe mesh.
 * The lathe is a shape with a symetry axis : a 2D model shape is rotated around this axis to design the lathe
 * * The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero
 * * The parameter `radius` (positive float, default 1) is the radius value of the lathe
 * * The parameter `tessellation` (positive integer, default 64) is the side number of the lathe
 * * The parameter `clip` (positive integer, default 0) is the number of sides to not create without effecting the general shape of the sides
 * * The parameter `arc` (positive float, default 1) is the ratio of the lathe. 0.5 builds for instance half a lathe, so an opened shape
 * * The parameter `closed` (boolean, default true) opens/closes the lathe circumference. This should be set to false when used with the parameter "arc"
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberLathe implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateLathe",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "shape",
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "radius",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tessellation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "clip",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "arc",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "closed",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "cap",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "invertUV",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberLathe"
    };
}

/**
 * Creates a tiled plane mesh
 * * You can set a limited pattern arrangement with the tiles
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberTiledPlane implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateTiledPlane",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "pattern",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tileSize",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tileWidth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tileHeight",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "size",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "width",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "alignHorizontal",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "alignVertical",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberTiledPlane"
    };
}

/**
 * Creates a plane mesh
 * * The parameter `size` sets the size (float) of both sides of the plane at once (default 1)
 * * You can set some different plane dimensions by using the parameters `width` and `height` (both by default have the same value of `size`)
 * * The parameter `sourcePlane` is a Plane instance. It builds a mesh plane from a Math plane
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberPlane implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreatePlane",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "size",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "width",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sourcePlane",
                        "type": "BabylonjsCorePlane",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberPlane"
    };
}

/**
 * Creates a ground mesh
 * * The parameters `width` and `height` (floats, default 1) set the width and height sizes of the ground
 * * The parameter `subdivisions` (positive integer) sets the number of subdivisions per side
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberGround implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateGround",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "width",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "subdivisions",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "subdivisionsX",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "subdivisionsY",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberGround"
    };
}

/**
 * Creates a tiled ground mesh
 * * The parameters `xmin` and `xmax` (floats, default -1 and 1) set the ground minimum and maximum X coordinates
 * * The parameters `zmin` and `zmax` (floats, default -1 and 1) set the ground minimum and maximum Z coordinates
 * * The parameter `subdivisions` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the numbers of subdivisions on the ground width and height. Each subdivision is called a tile
 * * The parameter `precision` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the numbers of subdivisions on the ground width and height of each tile
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export class FiberTiledGround implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateTiledGround",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "xmin",
                        "type": "number",
                        "optional": false
                    },
                    {
                        "name": "zmin",
                        "type": "number",
                        "optional": false
                    },
                    {
                        "name": "xmax",
                        "type": "number",
                        "optional": false
                    },
                    {
                        "name": "zmax",
                        "type": "number",
                        "optional": false
                    },
                    {
                        "name": "subdivisions",
                        "type": "{ w: number; h: number; }",
                        "optional": true
                    },
                    {
                        "name": "precision",
                        "type": "{ w: number; h: number; }",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberTiledGround"
    };
}

/**
 * Creates a ground mesh from a height map
 * * The parameter `url` sets the URL of the height map image resource.
 * * The parameters `width` and `height` (positive floats, default 10) set the ground width and height sizes.
 * * The parameter `subdivisions` (positive integer, default 1) sets the number of subdivision per side.
 * * The parameter `minHeight` (float, default 0) is the minimum altitude on the ground.
 * * The parameter `maxHeight` (float, default 1) is the maximum altitude on the ground.
 * * The parameter `colorFilter` (optional Color3, default (0.3, 0.59, 0.11) ) is the filter to apply to the image pixel colors to compute the height.
 * * The parameter `onReady` is a javascript callback function that will be called  once the mesh is just built (the height map download can last some time).
 * * The parameter `alphaFilter` will filter any data where the alpha channel is below this value, defaults 0 (all data visible)
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
 *
 * This code has been generated
 */
export class FiberGroundFromHeightMap implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateGroundFromHeightMap",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "width",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "height",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "subdivisions",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "minHeight",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "maxHeight",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "colorFilter",
                        "type": "BabylonjsCoreColor3",
                        "optional": true
                    },
                    {
                        "name": "alphaFilter",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "onReady",
                        "type": "(mesh: BabylonjsCoreGroundMesh) => void",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberGroundFromHeightMap"
    };
}

/**
 * Creates a polygon mesh
 * The polygon's shape will depend on the input parameters and is constructed parallel to a ground mesh
 * * The parameter `shape` is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors
 * * You can set the mesh side orientation with the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4)
 * * Remember you can only change the shape positions, not their number when updating a polygon
 *
 * This code has been generated
 */
export class FiberPolygon implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreatePolygon",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "shape",
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "holes",
                        "type": "BabylonjsCoreVector3[][]",
                        "optional": true
                    },
                    {
                        "name": "depth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BabylonjsCoreVector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BabylonjsCoreColor4[]",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "earcutInjection",
                "type": "any",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberPolygon"
    };
}

/**
 * Creates an extruded polygon mesh, with depth in the Y direction.
 * * You can set different colors and different images to the top, bottom and extruded side by using the parameters `faceColors` (an array of 3 Color3 elements) and `faceUV` (an array of 3 Vector4 elements)
 *
 * This code has been generated
 */
export class FiberExtrudePolygon implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "ExtrudePolygon",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "shape",
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "holes",
                        "type": "BabylonjsCoreVector3[][]",
                        "optional": true
                    },
                    {
                        "name": "depth",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BabylonjsCoreVector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BabylonjsCoreColor4[]",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "earcutInjection",
                "type": "any",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberExtrudePolygon"
    };
}

/**
 * Creates a tube mesh.
 * The tube is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters
 * * The parameter `path` is a required array of successive Vector3. It is the curve used as the axis of the tube
 * * The parameter `radius` (positive float, default 1) sets the tube radius size
 * * The parameter `tessellation` (positive float, default 64) is the number of sides on the tubular surface
 * * The parameter `radiusFunction` (javascript function, default null) is a vanilla javascript function. If it is not null, it overwrittes the parameter `radius`
 * * This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path. It must return a radius value (positive float)
 * * The parameter `arc` (positive float, maximum 1, default 1) is the ratio to apply to the tube circumference : 2 x PI x arc
 * * The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
 * * The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter : https://doc.babylonjs.com/how_to/how_to_dynamically_morph_a_mesh#tube
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberTube implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateTube",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "path",
                        "type": "BabylonjsCoreVector3[]",
                        "optional": false
                    },
                    {
                        "name": "radius",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "tessellation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "radiusFunction",
                        "type": "(i: number, distance: number) => number",
                        "optional": true
                    },
                    {
                        "name": "cap",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "arc",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "instance",
                        "type": "BabylonjsCoreMesh",
                        "optional": true
                    },
                    {
                        "name": "invertUV",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberTube"
    };
}

/**
 * Creates a polyhedron mesh
 * * The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embbeded types. Please refer to the type sheet in the tutorial to choose the wanted type
 * * The parameter `size` (positive float, default 1) sets the polygon size
 * * You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value)
 * * You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overwrittes the parameter `type`
 * * A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron
 * * You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` (Color4, default `(1, 1, 1, 1)`) and faceUV (Vector4, default `(0, 0, 1, 1)`)
 * * To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : https://doc.babylonjs.com/how_to/createbox_per_face_textures_and_colors
 * * The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/babylon101/discover_basic_elements#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 *
 * This code has been generated
 */
export class FiberPolyhedron implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreatePolyhedron",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "type",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "size",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sizeX",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sizeY",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "sizeZ",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "custom",
                        "type": "any",
                        "optional": true
                    },
                    {
                        "name": "faceUV",
                        "type": "BabylonjsCoreVector4[]",
                        "optional": true
                    },
                    {
                        "name": "faceColors",
                        "type": "BabylonjsCoreColor4[]",
                        "optional": true
                    },
                    {
                        "name": "flat",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "updatable",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "sideOrientation",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "frontUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    },
                    {
                        "name": "backUVs",
                        "type": "BabylonjsCoreVector4",
                        "optional": true
                    }
                ],
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberPolyhedron"
    };
}

/**
 * Creates a decal mesh.
 * A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal
 * * The parameter `position` (Vector3, default `(0, 0, 0)`) sets the position of the decal in World coordinates
 * * The parameter `normal` (Vector3, default `Vector3.Up`) sets the normal of the mesh where the decal is applied onto in World coordinates
 * * The parameter `size` (Vector3, default `(1, 1, 1)`) sets the decal scaling
 * * The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal
 *
 * This code has been generated
 */
export class FiberDecal implements HasPropsHandlers<FiberMeshProps> {
    private propsHandlers: PropsHandler<FiberMeshProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshPropsHandler()
            , new FiberAbstractMeshPropsHandler()
            , new FiberTransformNodePropsHandler()
            , new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMeshProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMeshProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "meshBuilder",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateDecal",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "sourceMesh",
                "type": "BabylonjsCoreAbstractMesh",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "position",
                        "type": "BabylonjsCoreVector3",
                        "optional": true
                    },
                    {
                        "name": "normal",
                        "type": "BabylonjsCoreVector3",
                        "optional": true
                    },
                    {
                        "name": "size",
                        "type": "BabylonjsCoreVector3",
                        "optional": true
                    },
                    {
                        "name": "angle",
                        "type": "number",
                        "optional": true
                    }
                ],
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "isNode": true,
        "className": "FiberDecal"
    };
}

export class FiberMaterialPropsHandler implements PropsHandler<FiberMaterialProps> {
    getPropertyUpdates(oldProps: FiberMaterialProps, newProps: FiberMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "alpha", "type": "number" },
            { "name": "alphaMode", "type": "number" },
            // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreMaterial.animations.
            { "name": "backFaceCulling", "type": "boolean" },
            { "name": "checkReadyOnEveryCall", "type": "boolean" },
            { "name": "checkReadyOnlyOnce", "type": "boolean" },
            { "name": "depthFunction", "type": "number" },
            { "name": "disableDepthWrite", "type": "boolean" },
            { "name": "doNotSerialize", "type": "boolean" },
            { "name": "fillMode", "type": "number" },
            { "name": "fogEnabled", "type": "boolean" },
            { "name": "forceDepthWrite", "type": "boolean" },
            // type: '() => BabylonjsCoreSmartArray<BabylonjsCoreRenderTargetTexture>' property (not coded) BabylonjsCoreMaterial.getRenderTargetTextures.
            { "name": "id", "type": "string" },
            // type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreMaterial.inspectableCustomProperties.
            // type: '{ [id: string]: BabylonjsCoreAbstractMesh; }' property (not coded) BabylonjsCoreMaterial.meshMap.
            // type: 'any' property (not coded) BabylonjsCoreMaterial.metadata.
            { "name": "name", "type": "string" },
            { "name": "needDepthPrePass", "type": "boolean" },
            // type: '(Mesh: BabylonjsCoreAbstractMesh) => void' property (not coded) BabylonjsCoreMaterial.onBind.
            // type: '(effect: BabylonjsCoreEffect) => void' property (not coded) BabylonjsCoreMaterial.onCompiled.
            // type: '() => void' property (not coded) BabylonjsCoreMaterial.onDispose.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreMaterial>' property (not coded) BabylonjsCoreMaterial.onDisposeObservable.
            // type: '(effect: BabylonjsCoreEffect, errors: string) => void' property (not coded) BabylonjsCoreMaterial.onError.
            { "name": "pointsCloud", "type": "boolean" },
            { "name": "pointSize", "type": "number" },
            // type: 'any' property (not coded) BabylonjsCoreMaterial.releaseVertexArrayObject.
            // type: 'any' property (not coded) BabylonjsCoreMaterial.reservedDataStore.
            { "name": "separateCullingPass", "type": "boolean" },
            { "name": "sideOrientation", "type": "number" },
            { "name": "state", "type": "string" },
            { "name": "uniqueId", "type": "number" },
            { "name": "wireframe", "type": "boolean" },
            { "name": "zOffset", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Base class for the main features of a material in Babylon.js
 *
 * This code has been generated
 */
export class FiberMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Material",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "doNotAdd",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberMaterial"
    };
}

export class FiberShaderMaterialPropsHandler implements PropsHandler<FiberShaderMaterialProps> {
    getPropertyUpdates(oldProps: FiberShaderMaterialProps, newProps: FiberShaderMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'any' property (not coded) BabylonjsCoreShaderMaterial.shaderPath.
            { "name": "setArray2", "type": "(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setArray3", "type": "(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setArray4", "type": "(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setColor3", "type": "(name?: string, value?: BabylonjsCoreColor3) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setColor3Array", "type": "(name?: string, value?: BabylonjsCoreColor3[]) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setColor4", "type": "(name?: string, value?: BabylonjsCoreColor4) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setColor4Array", "type": "(name?: string, value?: BabylonjsCoreColor4[]) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setFloat", "type": "(name?: string, value?: number) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setFloats", "type": "(name?: string, value?: number[]) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setInt", "type": "(name?: string, value?: number) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setMatrices", "type": "(name?: string, value?: BabylonjsCoreMatrix[]) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setMatrix", "type": "(name?: string, value?: BabylonjsCoreMatrix) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setMatrix2x2", "type": "(name?: string, value?: Float32Array) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setMatrix3x3", "type": "(name?: string, value?: Float32Array) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setTexture", "type": "(name?: string, texture?: BabylonjsCoreTexture) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setTextureArray", "type": "(name?: string, textures?: BabylonjsCoreTexture[]) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setVector2", "type": "(name?: string, value?: BabylonjsCoreVector2) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setVector3", "type": "(name?: string, value?: BabylonjsCoreVector3) => BabylonjsCoreShaderMaterial", "method": true },
            { "name": "setVector4", "type": "(name?: string, value?: BabylonjsCoreVector4) => BabylonjsCoreShaderMaterial", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The ShaderMaterial object has the necessary methods to pass data from your scene to the Vertex and Fragment Shaders and returns a material that can be applied to any mesh.
 *
 * This returned material effects how the mesh will look based on the code in the shaders.
 *
 * This code has been generated
 */
export class FiberShaderMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShaderMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShaderMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "shaderPath",
                "type": "any",
                "optional": false
            },
            {
                "name": "options",
                "type": "Partial<BabylonjsCoreIShaderMaterialOptions>",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberShaderMaterial"
    };
}

export class FiberMultiMaterialPropsHandler implements PropsHandler<FiberMultiMaterialProps> {
    getPropertyUpdates(oldProps: FiberMultiMaterialProps, newProps: FiberMultiMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreMaterial[]' property (not coded) BabylonjsCoreMultiMaterial.subMaterials.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A multi-material is used to apply different materials to different parts of the same object without the need of
 * separate meshes. This can be use to improve performances.
 *
 * This code has been generated
 */
export class FiberMultiMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberMultiMaterial"
    };
}

export class FiberPushMaterialPropsHandler implements PropsHandler<FiberPushMaterialProps> {
    getPropertyUpdates(oldProps: FiberPushMaterialProps, newProps: FiberPushMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "allowShaderHotSwapping", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Base class of materials working in push mode in babylon JS
 *
 * This code has been generated
 */
export class FiberPushMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PushMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPushMaterial"
    };
}

export class FiberStandardMaterialPropsHandler implements PropsHandler<FiberStandardMaterialProps> {
    getPropertyUpdates(oldProps: FiberStandardMaterialProps, newProps: FiberStandardMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "alphaCutOff", "type": "number" },
            { "name": "ambientColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.ambientTexture.
            { "name": "AmbientTextureEnabled", "type": "boolean" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.bumpTexture.
            { "name": "BumpTextureEnabled", "type": "boolean" },
            // type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCoreStandardMaterial.cameraColorCurves.
            { "name": "cameraColorCurvesEnabled", "type": "boolean" },
            { "name": "cameraColorGradingEnabled", "type": "boolean" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.cameraColorGradingTexture.
            { "name": "cameraContrast", "type": "number" },
            { "name": "cameraExposure", "type": "number" },
            { "name": "cameraToneMappingEnabled", "type": "boolean" },
            { "name": "ColorGradingTextureEnabled", "type": "boolean" },
            // type: '(shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: BabylonjsCoreStandardMaterialDefines) => string' property (not coded) BabylonjsCoreStandardMaterial.customShaderNameResolve.
            { "name": "diffuseColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreFresnelParameters' property (not coded) BabylonjsCoreStandardMaterial.diffuseFresnelParameters.
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.diffuseTexture.
            { "name": "DiffuseTextureEnabled", "type": "boolean" },
            { "name": "disableLighting", "type": "boolean" },
            { "name": "emissiveColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreFresnelParameters' property (not coded) BabylonjsCoreStandardMaterial.emissiveFresnelParameters.
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.emissiveTexture.
            { "name": "EmissiveTextureEnabled", "type": "boolean" },
            { "name": "FresnelEnabled", "type": "boolean" },
            // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreStandardMaterial.imageProcessingConfiguration.
            { "name": "indexOfRefraction", "type": "number" },
            { "name": "invertNormalMapX", "type": "boolean" },
            { "name": "invertNormalMapY", "type": "boolean" },
            { "name": "invertRefractionY", "type": "boolean" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.lightmapTexture.
            { "name": "LightmapTextureEnabled", "type": "boolean" },
            { "name": "linkEmissiveWithDiffuse", "type": "boolean" },
            { "name": "maxSimultaneousLights", "type": "number" },
            // type: 'BabylonjsCoreFresnelParameters' property (not coded) BabylonjsCoreStandardMaterial.opacityFresnelParameters.
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.opacityTexture.
            { "name": "OpacityTextureEnabled", "type": "boolean" },
            { "name": "parallaxScaleBias", "type": "number" },
            // type: 'BabylonjsCoreFresnelParameters' property (not coded) BabylonjsCoreStandardMaterial.reflectionFresnelParameters.
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.reflectionTexture.
            { "name": "ReflectionTextureEnabled", "type": "boolean" },
            // type: 'BabylonjsCoreFresnelParameters' property (not coded) BabylonjsCoreStandardMaterial.refractionFresnelParameters.
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.refractionTexture.
            { "name": "RefractionTextureEnabled", "type": "boolean" },
            { "name": "roughness", "type": "number" },
            { "name": "specularColor", "type": "BabylonjsCoreColor3" },
            { "name": "specularPower", "type": "number" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreStandardMaterial.specularTexture.
            { "name": "SpecularTextureEnabled", "type": "boolean" },
            { "name": "twoSidedLighting", "type": "boolean" },
            { "name": "useAlphaFromDiffuseTexture", "type": "boolean" },
            { "name": "useEmissiveAsIllumination", "type": "boolean" },
            { "name": "useGlossinessFromSpecularMapAlpha", "type": "boolean" },
            { "name": "useLightmapAsShadowmap", "type": "boolean" },
            { "name": "useLogarithmicDepth", "type": "boolean" },
            { "name": "useObjectSpaceNormalMap", "type": "boolean" },
            { "name": "useParallax", "type": "boolean" },
            { "name": "useParallaxOcclusion", "type": "boolean" },
            { "name": "useReflectionFresnelFromSpecular", "type": "boolean" },
            { "name": "useReflectionOverAlpha", "type": "boolean" },
            { "name": "useSpecularOverAlpha", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This is the default material used in Babylon. It is the best trade off between quality
 * and performances.
 *
 * This code has been generated
 */
export class FiberStandardMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStandardMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StandardMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberStandardMaterial"
    };
}

export class FiberBackgroundMaterialPropsHandler implements PropsHandler<FiberBackgroundMaterialProps> {
    getPropertyUpdates(oldProps: FiberBackgroundMaterialProps, newProps: FiberBackgroundMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "_perceptualColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCoreBackgroundMaterial.cameraColorCurves.
            { "name": "cameraColorCurvesEnabled", "type": "boolean" },
            { "name": "cameraColorGradingEnabled", "type": "boolean" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBackgroundMaterial.cameraColorGradingTexture.
            { "name": "cameraContrast", "type": "number" },
            { "name": "cameraExposure", "type": "number" },
            { "name": "cameraToneMappingEnabled", "type": "boolean" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBackgroundMaterial.diffuseTexture.
            { "name": "enableNoise", "type": "boolean" },
            { "name": "fovMultiplier", "type": "number" },
            // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreBackgroundMaterial.imageProcessingConfiguration.
            { "name": "maxSimultaneousLights", "type": "number" },
            { "name": "opacityFresnel", "type": "boolean" },
            { "name": "primaryColor", "type": "BabylonjsCoreColor3" },
            { "name": "primaryColorHighlightLevel", "type": "number" },
            { "name": "primaryColorShadowLevel", "type": "number" },
            { "name": "reflectionAmount", "type": "number" },
            { "name": "reflectionBlur", "type": "number" },
            { "name": "reflectionFalloffDistance", "type": "number" },
            { "name": "reflectionFresnel", "type": "boolean" },
            { "name": "reflectionReflectance0", "type": "number" },
            { "name": "reflectionReflectance90", "type": "number" },
            { "name": "reflectionStandardFresnelWeight", "type": "number" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBackgroundMaterial.reflectionTexture.
            { "name": "sceneCenter", "type": "BabylonjsCoreVector3" },
            { "name": "shadowLevel", "type": "number" },
            // type: 'BabylonjsCoreIShadowLight[]' property (not coded) BabylonjsCoreBackgroundMaterial.shadowLights.
            { "name": "switchToBGR", "type": "boolean" },
            { "name": "useEquirectangularFOV", "type": "boolean" },
            { "name": "useRGBColor", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Background material used to create an efficient environement around your scene.
 *
 * This code has been generated
 */
export class FiberBackgroundMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBackgroundMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BackgroundMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberBackgroundMaterial"
    };
}

export class FiberPBRBaseMaterialPropsHandler implements PropsHandler<FiberPBRBaseMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRBaseMaterialProps, newProps: FiberPBRBaseMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: '(shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: BabylonjsCorePBRMaterialDefines) => string' property (not coded) BabylonjsCorePBRBaseMaterial.customShaderNameResolve.
            // type: 'any' property (not coded) BabylonjsCorePBRBaseMaterial.debugFactor.
            // type: 'any' property (not coded) BabylonjsCorePBRBaseMaterial.debugLimit.
            { "name": "debugMode", "type": "number" },
            { "name": "transparencyMode", "type": "number" },
            { "name": "useLogarithmicDepth", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The Physically based material base class of BJS.
 *
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * https://doc.babylonjs.com/how_to/physically_based_rendering
 *
 * This code has been generated
 */
export class FiberPBRBaseMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRBaseMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPBRBaseMaterial"
    };
}

export class FiberPBRBaseSimpleMaterialPropsHandler implements PropsHandler<FiberPBRBaseSimpleMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRBaseSimpleMaterialProps, newProps: FiberPBRBaseSimpleMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "alphaCutOff", "type": "number" },
            { "name": "disableLighting", "type": "boolean" },
            { "name": "doubleSided", "type": "boolean" },
            { "name": "emissiveColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.emissiveTexture.
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.environmentTexture.
            { "name": "invertNormalMapX", "type": "boolean" },
            { "name": "invertNormalMapY", "type": "boolean" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.lightmapTexture.
            { "name": "maxSimultaneousLights", "type": "number" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.normalTexture.
            { "name": "occlusionStrength", "type": "number" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRBaseSimpleMaterial.occlusionTexture.
            { "name": "useLightmapAsShadowmap", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The Physically based simple base material of BJS.
 *
 * This enables better naming and convention enforcements on top of the pbrMaterial.
 * It is used as the base class for both the specGloss and metalRough conventions.
 *
 * This code has been generated
 */
export class FiberPBRBaseSimpleMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRBaseSimpleMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPBRBaseSimpleMaterial"
    };
}

export class FiberPBRMetallicRoughnessMaterialPropsHandler implements PropsHandler<FiberPBRMetallicRoughnessMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRMetallicRoughnessMaterialProps, newProps: FiberPBRMetallicRoughnessMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "baseColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMetallicRoughnessMaterial.baseTexture.
            { "name": "metallic", "type": "number" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMetallicRoughnessMaterial.metallicRoughnessTexture.
            { "name": "roughness", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The PBR material of BJS following the metal roughness convention.
 *
 * This fits to the PBR convention in the GLTF definition:
 * https://github.com/KhronosGroup/glTF/tree/2.0/specification/2.0
 *
 * This code has been generated
 */
export class FiberPBRMetallicRoughnessMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRMetallicRoughnessMaterialPropsHandler(),
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRMetallicRoughnessMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPBRMetallicRoughnessMaterial"
    };
}

export class FiberPBRSpecularGlossinessMaterialPropsHandler implements PropsHandler<FiberPBRSpecularGlossinessMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRSpecularGlossinessMaterialProps, newProps: FiberPBRSpecularGlossinessMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "diffuseColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRSpecularGlossinessMaterial.diffuseTexture.
            { "name": "glossiness", "type": "number" },
            { "name": "specularColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRSpecularGlossinessMaterial.specularGlossinessTexture.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The PBR material of BJS following the specular glossiness convention.
 *
 * This fits to the PBR convention in the GLTF definition:
 * https://github.com/KhronosGroup/glTF/tree/2.0/extensions/Khronos/KHR_materials_pbrSpecularGlossiness
 *
 * This code has been generated
 */
export class FiberPBRSpecularGlossinessMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRSpecularGlossinessMaterialPropsHandler(),
            new FiberPBRBaseSimpleMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRSpecularGlossinessMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPBRSpecularGlossinessMaterial"
    };
}

export class FiberPBRMaterialPropsHandler implements PropsHandler<FiberPBRMaterialProps> {
    getPropertyUpdates(oldProps: FiberPBRMaterialProps, newProps: FiberPBRMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "albedoColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.albedoTexture.
            { "name": "alphaCutOff", "type": "number" },
            { "name": "ambientColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.ambientTexture.
            { "name": "ambientTextureImpactOnAnalyticalLights", "type": "number" },
            { "name": "ambientTextureStrength", "type": "number" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.bumpTexture.
            // type: 'BabylonjsCoreColorCurves' property (not coded) BabylonjsCorePBRMaterial.cameraColorCurves.
            { "name": "cameraColorCurvesEnabled", "type": "boolean" },
            { "name": "cameraColorGradingEnabled", "type": "boolean" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.cameraColorGradingTexture.
            { "name": "cameraContrast", "type": "number" },
            { "name": "cameraExposure", "type": "number" },
            { "name": "cameraToneMappingEnabled", "type": "boolean" },
            { "name": "directIntensity", "type": "number" },
            { "name": "disableBumpMap", "type": "boolean" },
            { "name": "disableLighting", "type": "boolean" },
            { "name": "emissiveColor", "type": "BabylonjsCoreColor3" },
            { "name": "emissiveIntensity", "type": "number" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.emissiveTexture.
            { "name": "enableSpecularAntiAliasing", "type": "boolean" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.environmentBRDFTexture.
            { "name": "environmentIntensity", "type": "number" },
            { "name": "forceAlphaTest", "type": "boolean" },
            { "name": "forceIrradianceInFragment", "type": "boolean" },
            { "name": "forceNormalForward", "type": "boolean" },
            // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCorePBRMaterial.imageProcessingConfiguration.
            { "name": "indexOfRefraction", "type": "number" },
            { "name": "invertNormalMapX", "type": "boolean" },
            { "name": "invertNormalMapY", "type": "boolean" },
            { "name": "invertRefractionY", "type": "boolean" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.lightmapTexture.
            { "name": "linkRefractionWithTransparency", "type": "boolean" },
            { "name": "maxSimultaneousLights", "type": "number" },
            { "name": "metallic", "type": "number" },
            { "name": "metallicF0Factor", "type": "number" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.metallicTexture.
            { "name": "microSurface", "type": "number" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.microSurfaceTexture.
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.opacityTexture.
            { "name": "parallaxScaleBias", "type": "number" },
            { "name": "reflectionColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.reflectionTexture.
            { "name": "reflectivityColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.reflectivityTexture.
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCorePBRMaterial.refractionTexture.
            { "name": "roughness", "type": "number" },
            { "name": "specularIntensity", "type": "number" },
            { "name": "twoSidedLighting", "type": "boolean" },
            { "name": "unlit", "type": "boolean" },
            { "name": "useAlphaFresnel", "type": "boolean" },
            { "name": "useAlphaFromAlbedoTexture", "type": "boolean" },
            { "name": "useAmbientInGrayScale", "type": "boolean" },
            { "name": "useAmbientOcclusionFromMetallicTextureRed", "type": "boolean" },
            { "name": "useAutoMicroSurfaceFromReflectivityMap", "type": "boolean" },
            { "name": "useGLTFLightFalloff", "type": "boolean" },
            { "name": "useHorizonOcclusion", "type": "boolean" },
            { "name": "useLightmapAsShadowmap", "type": "boolean" },
            { "name": "useLinearAlphaFresnel", "type": "boolean" },
            { "name": "useMetallicF0FactorFromMetallicTexture", "type": "boolean" },
            { "name": "useMetallnessFromMetallicTextureBlue", "type": "boolean" },
            { "name": "useMicroSurfaceFromReflectivityMapAlpha", "type": "boolean" },
            { "name": "useObjectSpaceNormalMap", "type": "boolean" },
            { "name": "useParallax", "type": "boolean" },
            { "name": "useParallaxOcclusion", "type": "boolean" },
            { "name": "usePhysicalLightFalloff", "type": "boolean" },
            { "name": "useRadianceOcclusion", "type": "boolean" },
            { "name": "useRadianceOverAlpha", "type": "boolean" },
            { "name": "useRoughnessFromMetallicTextureAlpha", "type": "boolean" },
            { "name": "useRoughnessFromMetallicTextureGreen", "type": "boolean" },
            { "name": "useSpecularOverAlpha", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The Physically based material of BJS.
 *
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * https://doc.babylonjs.com/how_to/physically_based_rendering
 *
 * This code has been generated
 */
export class FiberPBRMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPBRMaterialPropsHandler(),
            new FiberPBRBaseMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PBRMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberPBRMaterial"
    };
}

export class FiberNodeMaterialPropsHandler implements PropsHandler<FiberNodeMaterialProps> {
    getPropertyUpdates(oldProps: FiberNodeMaterialProps, newProps: FiberNodeMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreNodeMaterialBlock[]' property (not coded) BabylonjsCoreNodeMaterial.attachedBlocks.
            // type: 'any' property (not coded) BabylonjsCoreNodeMaterial.BJSNODEMATERIALEDITOR.
            // type: 'any' property (not coded) BabylonjsCoreNodeMaterial.editorData.
            { "name": "ignoreAlpha", "type": "boolean" },
            // type: 'BabylonjsCoreImageProcessingConfiguration' property (not coded) BabylonjsCoreNodeMaterial.imageProcessingConfiguration.
            { "name": "maxSimultaneousLights", "type": "number" },
            // type: 'BabylonjsCoreObservable<BabylonjsCoreNodeMaterial>' property (not coded) BabylonjsCoreNodeMaterial.onBuildObservable.
            // type: 'BabylonjsCoreINodeMaterialOptions' property (not coded) BabylonjsCoreNodeMaterial.options.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a node based material built by assembling shader blocks
 *
 * This code has been generated
 */
export class FiberNodeMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberNodeMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "NodeMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "options",
                "type": "Partial<BabylonjsCoreINodeMaterialOptions>",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberNodeMaterial"
    };
}

export class FiberFluentMaterialPropsHandler implements PropsHandler<FiberFluentMaterialProps> {
    getPropertyUpdates(oldProps: FiberFluentMaterialProps, newProps: FiberFluentMaterialProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "albedoColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsGuiFluentMaterial.albedoTexture.
            { "name": "alpha", "type": "number" },
            { "name": "borderMinValue", "type": "number" },
            { "name": "borderWidth", "type": "number" },
            { "name": "edgeSmoothingValue", "type": "number" },
            { "name": "hoverColor", "type": "BabylonjsCoreColor4" },
            { "name": "hoverPosition", "type": "BabylonjsCoreVector3" },
            { "name": "hoverRadius", "type": "number" },
            { "name": "innerGlowColor", "type": "BabylonjsCoreColor3" },
            { "name": "innerGlowColorIntensity", "type": "number" },
            { "name": "renderBorders", "type": "boolean" },
            { "name": "renderHoverLight", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to render controls with fluent desgin
 *
 * This code has been generated
 */
export class FiberFluentMaterial implements HasPropsHandlers<FiberMaterialProps> {
    private propsHandlers: PropsHandler<FiberMaterialProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberFluentMaterialPropsHandler(),
            new FiberPushMaterialPropsHandler(),
            new FiberMaterialPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberMaterialProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberMaterialProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "FluentMaterial",
        "namespace": "@babylonjs/core/Materials/material",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isMaterial": true,
        "className": "FiberFluentMaterial"
    };
}

export class FiberLightPropsHandler implements PropsHandler<FiberLightProps> {
    getPropertyUpdates(oldProps: FiberLightProps, newProps: FiberLightProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "diffuse", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreLight.excludedMeshes.
            { "name": "excludeWithLayerMask", "type": "number" },
            { "name": "falloffType", "type": "number" },
            // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreLight.includedOnlyMeshes.
            { "name": "includeOnlyWithLayerMask", "type": "number" },
            { "name": "intensity", "type": "number" },
            { "name": "intensityMode", "type": "number" },
            { "name": "lightmapMode", "type": "number" },
            { "name": "radius", "type": "number" },
            { "name": "range", "type": "number" },
            { "name": "renderPriority", "type": "number" },
            { "name": "shadowEnabled", "type": "boolean" },
            { "name": "specular", "type": "BabylonjsCoreColor3" },
            { "name": "setEnabled", "type": "(value?: boolean) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Base class of all the lights in Babylon. It groups all the generic information about lights.
 * Lights are used, as you would expect, to affect how meshes are seen, in terms of both illumination and colour.
 * All meshes allow light to pass through them unless shadow generation is activated. The default number of lights allowed is four but this can be increased.
 *
 * This code has been generated
 */
export class FiberLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Light",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "className": "FiberLight"
    };
}

export class FiberShadowLightPropsHandler implements PropsHandler<FiberShadowLightProps> {
    getPropertyUpdates(oldProps: FiberShadowLightProps, newProps: FiberShadowLightProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: '(viewMatrix: BabylonjsCoreMatrix, renderList: BabylonjsCoreAbstractMesh[], result: BabylonjsCoreMatrix) => void' property (not coded) BabylonjsCoreShadowLight.customProjectionMatrixBuilder.
            { "name": "direction", "type": "BabylonjsCoreVector3" },
            { "name": "position", "type": "BabylonjsCoreVector3" },
            { "name": "shadowMaxZ", "type": "number" },
            { "name": "shadowMinZ", "type": "number" },
            { "name": "transformedDirection", "type": "BabylonjsCoreVector3" },
            { "name": "transformedPosition", "type": "BabylonjsCoreVector3" },
            { "name": "setDirectionToTarget", "type": "(target?: BabylonjsCoreVector3) => BabylonjsCoreVector3", "method": true },
            { "name": "setShadowProjectionMatrix", "type": "(matrix?: BabylonjsCoreMatrix, viewMatrix?: BabylonjsCoreMatrix, renderList?: BabylonjsCoreAbstractMesh[]) => BabylonjsCoreIShadowLight", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Base implementation IShadowLight
 * It groups all the common behaviour in order to reduce dupplication and better follow the DRY pattern.
 *
 * This code has been generated
 */
export class FiberShadowLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShadowLight",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberShadowLight"
    };
}

export class FiberDirectionalLightPropsHandler implements PropsHandler<FiberDirectionalLightProps> {
    getPropertyUpdates(oldProps: FiberDirectionalLightProps, newProps: FiberDirectionalLightProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "autoCalcShadowZBounds", "type": "boolean" },
            { "name": "autoUpdateExtends", "type": "boolean" },
            { "name": "shadowFrustumSize", "type": "number" },
            { "name": "shadowOrthoScale", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A directional light is defined by a direction (what a surprise!).
 * The light is emitted from everywhere in the specified direction, and has an infinite range.
 * An example of a directional light is when a distance planet is lit by the apparently parallel lines of light from its sun. Light in a downward direction will light the top of an object.
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 *
 * This code has been generated
 */
export class FiberDirectionalLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDirectionalLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DirectionalLight",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "direction",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberDirectionalLight"
    };
}

export class FiberPointLightPropsHandler implements PropsHandler<FiberPointLightProps> {
    getPropertyUpdates(oldProps: FiberPointLightProps, newProps: FiberPointLightProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "direction", "type": "BabylonjsCoreVector3" },
            { "name": "shadowAngle", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A point light is a light defined by an unique point in world space.
 * The light is emitted in every direction from this point.
 * A good example of a point light is a standard light bulb.
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 *
 * This code has been generated
 */
export class FiberPointLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPointLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PointLight",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberPointLight"
    };
}

export class FiberSpotLightPropsHandler implements PropsHandler<FiberSpotLightProps> {
    getPropertyUpdates(oldProps: FiberSpotLightProps, newProps: FiberSpotLightProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "angle", "type": "number" },
            { "name": "exponent", "type": "number" },
            { "name": "innerAngle", "type": "number" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreSpotLight.projectionTexture.
            { "name": "projectionTextureLightFar", "type": "number" },
            { "name": "projectionTextureLightNear", "type": "number" },
            { "name": "projectionTextureUpDirection", "type": "BabylonjsCoreVector3" },
            { "name": "shadowAngleScale", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A spot light is defined by a position, a direction, an angle, and an exponent.
 * These values define a cone of light starting from the position, emitting toward the direction.
 * The angle, in radians, defines the size (field of illumination) of the spotlight's conical beam,
 * and the exponent defines the speed of the decay of the light with distance (reach).
 * Documentation: https://doc.babylonjs.com/babylon101/lights
 *
 * This code has been generated
 */
export class FiberSpotLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSpotLightPropsHandler(),
            new FiberShadowLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SpotLight",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "position",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "direction",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "angle",
                "type": "number",
                "optional": false
            },
            {
                "name": "exponent",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "isShadowLight": true,
        "className": "FiberSpotLight"
    };
}

export class FiberHemisphericLightPropsHandler implements PropsHandler<FiberHemisphericLightProps> {
    getPropertyUpdates(oldProps: FiberHemisphericLightProps, newProps: FiberHemisphericLightProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "direction", "type": "BabylonjsCoreVector3" },
            { "name": "groundColor", "type": "BabylonjsCoreColor3" },
            { "name": "setDirectionToTarget", "type": "(target?: BabylonjsCoreVector3) => BabylonjsCoreVector3", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The HemisphericLight simulates the ambient environment light,
 * so the passed direction is the light reflection direction, not the incoming direction.
 *
 * This code has been generated
 */
export class FiberHemisphericLight implements HasPropsHandlers<FiberLightProps> {
    private propsHandlers: PropsHandler<FiberLightProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHemisphericLightPropsHandler(),
            new FiberLightPropsHandler(),
            new FiberNodePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberLightProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberLightProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HemisphericLight",
        "namespace": "@babylonjs/core/Lights/light",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "direction",
                "type": "BabylonjsCoreVector3",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isNode": true,
        "className": "FiberHemisphericLight"
    };
}

export class FiberControlPropsHandler implements PropsHandler<FiberControlProps> {
    getPropertyUpdates(oldProps: FiberControlProps, newProps: FiberControlProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "alpha", "type": "number" },
            { "name": "clipChildren", "type": "boolean" },
            { "name": "clipContent", "type": "boolean" },
            { "name": "color", "type": "string" },
            { "name": "disabledColor", "type": "string" },
            { "name": "disabledColorItem", "type": "string" },
            { "name": "fontFamily", "type": "string" },
            // type: '{ ascent: number; height: number; descent: number; }' property (not coded) BabylonjsGuiControl.fontOffset.
            { "name": "fontSize", "type": "string | number" },
            { "name": "fontSizeInPixels", "type": "number" },
            { "name": "fontStyle", "type": "string" },
            { "name": "fontWeight", "type": "string" },
            { "name": "height", "type": "string | number" },
            { "name": "heightInPixels", "type": "number" },
            { "name": "horizontalAlignment", "type": "number" },
            { "name": "hoverCursor", "type": "string" },
            { "name": "isEnabled", "type": "boolean" },
            { "name": "isFocusInvisible", "type": "boolean" },
            { "name": "isHighlighted", "type": "boolean" },
            { "name": "isHitTestVisible", "type": "boolean" },
            { "name": "isPointerBlocker", "type": "boolean" },
            { "name": "isVisible", "type": "boolean" },
            { "name": "left", "type": "string | number" },
            { "name": "leftInPixels", "type": "number" },
            { "name": "linkOffsetX", "type": "string | number" },
            { "name": "linkOffsetXInPixels", "type": "number" },
            { "name": "linkOffsetY", "type": "string | number" },
            { "name": "linkOffsetYInPixels", "type": "number" },
            // type: 'any' property (not coded) BabylonjsGuiControl.metadata.
            { "name": "name", "type": "string" },
            { "name": "notRenderable", "type": "boolean" },
            // type: 'BabylonjsCoreObservable<BabylonjsGuiControl>' property (not coded) BabylonjsGuiControl.onAfterDrawObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiControl>' property (not coded) BabylonjsGuiControl.onBeforeDrawObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiControl>' property (not coded) BabylonjsGuiControl.onDirtyObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiVector2WithInfo>' property (not coded) BabylonjsGuiControl.onPointerClickObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiVector2WithInfo>' property (not coded) BabylonjsGuiControl.onPointerDownObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiControl>' property (not coded) BabylonjsGuiControl.onPointerEnterObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreVector2>' property (not coded) BabylonjsGuiControl.onPointerMoveObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiControl>' property (not coded) BabylonjsGuiControl.onPointerOutObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiVector2WithInfo>' property (not coded) BabylonjsGuiControl.onPointerUpObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreVector2>' property (not coded) BabylonjsGuiControl.onWheelObservable.
            { "name": "paddingBottom", "type": "string | number" },
            { "name": "paddingBottomInPixels", "type": "number" },
            { "name": "paddingLeft", "type": "string | number" },
            { "name": "paddingLeftInPixels", "type": "number" },
            { "name": "paddingRight", "type": "string | number" },
            { "name": "paddingRightInPixels", "type": "number" },
            { "name": "paddingTop", "type": "string | number" },
            { "name": "paddingTopInPixels", "type": "number" },
            // type: 'BabylonjsGuiContainer' property (not coded) BabylonjsGuiControl.parent.
            { "name": "rotation", "type": "number" },
            { "name": "scaleX", "type": "number" },
            { "name": "scaleY", "type": "number" },
            { "name": "shadowBlur", "type": "number" },
            { "name": "shadowColor", "type": "string" },
            { "name": "shadowOffsetX", "type": "number" },
            { "name": "shadowOffsetY", "type": "number" },
            // type: 'BabylonjsGuiStyle' property (not coded) BabylonjsGuiControl.style.
            { "name": "top", "type": "string | number" },
            { "name": "topInPixels", "type": "number" },
            { "name": "transformCenterX", "type": "number" },
            { "name": "transformCenterY", "type": "number" },
            { "name": "uniqueId", "type": "number" },
            { "name": "useBitmapCache", "type": "boolean" },
            { "name": "verticalAlignment", "type": "number" },
            { "name": "width", "type": "string | number" },
            { "name": "widthInPixels", "type": "number" },
            { "name": "zIndex", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Root class used for all 2D controls
 *
 * This code has been generated
 */
export class FiberControl implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Control",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberControl"
    };
}

export class FiberContainerPropsHandler implements PropsHandler<FiberContainerProps> {
    getPropertyUpdates(oldProps: FiberContainerProps, newProps: FiberContainerProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "adaptHeightToChildren", "type": "boolean" },
            { "name": "adaptWidthToChildren", "type": "boolean" },
            { "name": "background", "type": "string" },
            { "name": "logLayoutCycleErrors", "type": "boolean" },
            { "name": "maxLayoutCycle", "type": "number" },
            { "name": "name", "type": "string" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Root class for 2D containers
 *
 * This code has been generated
 */
export class FiberContainer implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Container",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberContainer"
    };
}

export class FiberRectanglePropsHandler implements PropsHandler<FiberRectangleProps> {
    getPropertyUpdates(oldProps: FiberRectangleProps, newProps: FiberRectangleProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "cornerRadius", "type": "number" },
            { "name": "name", "type": "string" },
            { "name": "thickness", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create rectangle container
 *
 * This code has been generated
 */
export class FiberRectangle implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Rectangle",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberRectangle"
    };
}

export class FiberButtonPropsHandler implements PropsHandler<FiberButtonProps> {
    getPropertyUpdates(oldProps: FiberButtonProps, newProps: FiberButtonProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "delegatePickingToChildren", "type": "boolean" },
            { "name": "name", "type": "string" },
            // type: '() => void' property (not coded) BabylonjsGuiButton.pointerDownAnimation.
            // type: '() => void' property (not coded) BabylonjsGuiButton.pointerEnterAnimation.
            // type: '() => void' property (not coded) BabylonjsGuiButton.pointerOutAnimation.
            // type: '() => void' property (not coded) BabylonjsGuiButton.pointerUpAnimation.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create 2D buttons
 *
 * This code has been generated
 */
export class FiberButton implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberButtonPropsHandler(),
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Button",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberButton"
    };
}

export class FiberSelectionPanelPropsHandler implements PropsHandler<FiberSelectionPanelProps> {
    getPropertyUpdates(oldProps: FiberSelectionPanelProps, newProps: FiberSelectionPanelProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "barColor", "type": "string" },
            { "name": "barHeight", "type": "string" },
            { "name": "buttonBackground", "type": "string" },
            { "name": "buttonColor", "type": "string" },
            // type: 'BabylonjsGuiSelectorGroup[]' property (not coded) BabylonjsGuiSelectionPanel.groups.
            { "name": "headerColor", "type": "string" },
            { "name": "labelColor", "type": "string" },
            { "name": "name", "type": "string" },
            { "name": "spacerHeight", "type": "string" },
            { "name": "setHeaderName", "type": "(label?: string, groupNb?: number) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to hold the controls for the checkboxes, radio buttons and sliders
 *
 * This code has been generated
 */
export class FiberSelectionPanel implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSelectionPanelPropsHandler(),
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SelectionPanel",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "groups",
                "type": "BabylonjsGuiSelectorGroup[]",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberSelectionPanel"
    };
}

export class FiberScrollViewerPropsHandler implements PropsHandler<FiberScrollViewerProps> {
    getPropertyUpdates(oldProps: FiberScrollViewerProps, newProps: FiberScrollViewerProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "barBackground", "type": "string" },
            { "name": "barColor", "type": "string" },
            // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.barImage.
            { "name": "barImageHeight", "type": "number" },
            { "name": "barSize", "type": "number" },
            { "name": "forceHorizontalBar", "type": "boolean" },
            { "name": "forceVerticalBar", "type": "boolean" },
            { "name": "freezeControls", "type": "boolean" },
            // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.horizontalBarImage.
            { "name": "horizontalBarImageHeight", "type": "number" },
            // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.horizontalThumbImage.
            { "name": "scrollBackground", "type": "string" },
            { "name": "thumbHeight", "type": "number" },
            // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.thumbImage.
            { "name": "thumbLength", "type": "number" },
            // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.verticalBarImage.
            { "name": "verticalBarImageHeight", "type": "number" },
            // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiScrollViewer.verticalThumbImage.
            { "name": "wheelPrecision", "type": "number" },
            { "name": "setBucketSizes", "type": "(width?: number, height?: number) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to hold a viewer window and sliders in a grid
 *
 * This code has been generated
 */
export class FiberScrollViewer implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberScrollViewerPropsHandler(),
            new FiberRectanglePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ScrollViewer",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            },
            {
                "name": "isImageBased",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberScrollViewer"
    };
}

export class FiberStackPanelPropsHandler implements PropsHandler<FiberStackPanelProps> {
    getPropertyUpdates(oldProps: FiberStackPanelProps, newProps: FiberStackPanelProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "height", "type": "string | number" },
            { "name": "ignoreLayoutWarnings", "type": "boolean" },
            { "name": "isVertical", "type": "boolean" },
            { "name": "name", "type": "string" },
            { "name": "width", "type": "string | number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a 2D stack panel container
 *
 * This code has been generated
 */
export class FiberStackPanel implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStackPanelPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StackPanel",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberStackPanel"
    };
}

export class FiberVirtualKeyboardPropsHandler implements PropsHandler<FiberVirtualKeyboardProps> {
    getPropertyUpdates(oldProps: FiberVirtualKeyboardProps, newProps: FiberVirtualKeyboardProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "defaultButtonBackground", "type": "string" },
            { "name": "defaultButtonColor", "type": "string" },
            { "name": "defaultButtonHeight", "type": "string" },
            { "name": "defaultButtonPaddingBottom", "type": "string" },
            { "name": "defaultButtonPaddingLeft", "type": "string" },
            { "name": "defaultButtonPaddingRight", "type": "string" },
            { "name": "defaultButtonPaddingTop", "type": "string" },
            { "name": "defaultButtonWidth", "type": "string" },
            // type: 'BabylonjsCoreObservable<string>' property (not coded) BabylonjsGuiVirtualKeyboard.onKeyPressObservable.
            { "name": "selectedShiftThickness", "type": "number" },
            { "name": "shiftButtonColor", "type": "string" },
            { "name": "shiftState", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create virtual keyboard
 *
 * This code has been generated
 */
export class FiberVirtualKeyboard implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVirtualKeyboardPropsHandler(),
            new FiberStackPanelPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VirtualKeyboard",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberVirtualKeyboard"
    };
}

export class FiberEllipsePropsHandler implements PropsHandler<FiberEllipseProps> {
    getPropertyUpdates(oldProps: FiberEllipseProps, newProps: FiberEllipseProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "name", "type": "string" },
            { "name": "thickness", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create 2D ellipse containers
 *
 * This code has been generated
 */
export class FiberEllipse implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEllipsePropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Ellipse",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberEllipse"
    };
}

export class FiberGridPropsHandler implements PropsHandler<FiberGridProps> {
    getPropertyUpdates(oldProps: FiberGridProps, newProps: FiberGridProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "name", "type": "string" },
            { "name": "setColumnDefinition", "type": "(index?: number, width?: number, isPixel?: boolean) => BabylonjsGuiGrid", "method": true },
            { "name": "setRowDefinition", "type": "(index?: number, height?: number, isPixel?: boolean) => BabylonjsGuiGrid", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a 2D grid container
 *
 * This code has been generated
 */
export class FiberGrid implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGridPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Grid",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberGrid"
    };
}

export class Fiber_ScrollViewerWindowPropsHandler implements PropsHandler<Fiber_ScrollViewerWindowProps> {
    getPropertyUpdates(oldProps: Fiber_ScrollViewerWindowProps, newProps: Fiber_ScrollViewerWindowProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "freezeControls", "type": "boolean" },
            { "name": "parentClientHeight", "type": "number" },
            { "name": "parentClientWidth", "type": "number" },
            { "name": "setBucketSizes", "type": "(width?: number, height?: number) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to hold a the container for ScrollViewer
 *
 * This code has been generated
 */
export class Fiber_ScrollViewerWindow implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new Fiber_ScrollViewerWindowPropsHandler(),
            new FiberContainerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "_ScrollViewerWindow",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "Fiber_ScrollViewerWindow"
    };
}

export class FiberTextBlockPropsHandler implements PropsHandler<FiberTextBlockProps> {
    getPropertyUpdates(oldProps: FiberTextBlockProps, newProps: FiberTextBlockProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "lineSpacing", "type": "string | number" },
            { "name": "name", "type": "string" },
            // type: 'BabylonjsCoreObservable<BabylonjsGuiTextBlock>' property (not coded) BabylonjsGuiTextBlock.onLinesReadyObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiTextBlock>' property (not coded) BabylonjsGuiTextBlock.onTextChangedObservable.
            { "name": "outlineColor", "type": "string" },
            { "name": "outlineWidth", "type": "number" },
            { "name": "resizeToFit", "type": "boolean" },
            { "name": "text", "type": "string" },
            { "name": "textHorizontalAlignment", "type": "number" },
            { "name": "textVerticalAlignment", "type": "number" },
            // type: 'boolean | BabylonjsGuiTextWrapping' property (not coded) BabylonjsGuiTextBlock.textWrapping.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create text block control
 *
 * This code has been generated
 */
export class FiberTextBlock implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTextBlockPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "TextBlock",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            },
            {
                "name": "text",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberTextBlock"
    };
}

export class FiberImagePropsHandler implements PropsHandler<FiberImageProps> {
    getPropertyUpdates(oldProps: FiberImageProps, newProps: FiberImageProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "autoScale", "type": "boolean" },
            { "name": "cellHeight", "type": "number" },
            { "name": "cellId", "type": "number" },
            { "name": "cellWidth", "type": "number" },
            { "name": "detectPointerOnOpaqueOnly", "type": "boolean" },
            // type: 'HTMLImageElement' property (not coded) BabylonjsGuiImage.domImage.
            { "name": "name", "type": "string" },
            // type: 'BabylonjsCoreObservable<BabylonjsGuiImage>' property (not coded) BabylonjsGuiImage.onImageLoadedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiImage>' property (not coded) BabylonjsGuiImage.onSVGAttributesComputedObservable.
            { "name": "populateNinePatchSlicesFromImage", "type": "boolean" },
            { "name": "sliceBottom", "type": "number" },
            { "name": "sliceLeft", "type": "number" },
            { "name": "sliceRight", "type": "number" },
            { "name": "sliceTop", "type": "number" },
            { "name": "source", "type": "string" },
            { "name": "sourceHeight", "type": "number" },
            { "name": "sourceLeft", "type": "number" },
            { "name": "sourceTop", "type": "number" },
            { "name": "sourceWidth", "type": "number" },
            { "name": "stretch", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create 2D images
 *
 * This code has been generated
 */
export class FiberImage implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberImagePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Image",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            },
            {
                "name": "url",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberImage"
    };
}

export class FiberCheckboxPropsHandler implements PropsHandler<FiberCheckboxProps> {
    getPropertyUpdates(oldProps: FiberCheckboxProps, newProps: FiberCheckboxProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "background", "type": "string" },
            { "name": "checkSizeRatio", "type": "number" },
            { "name": "isChecked", "type": "boolean" },
            { "name": "name", "type": "string" },
            // type: 'BabylonjsCoreObservable<boolean>' property (not coded) BabylonjsGuiCheckbox.onIsCheckedChangedObservable.
            { "name": "thickness", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to represent a 2D checkbox
 *
 * This code has been generated
 */
export class FiberCheckbox implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCheckboxPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Checkbox",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberCheckbox"
    };
}

export class FiberColorPickerPropsHandler implements PropsHandler<FiberColorPickerProps> {
    getPropertyUpdates(oldProps: FiberColorPickerProps, newProps: FiberColorPickerProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "height", "type": "string | number" },
            { "name": "name", "type": "string" },
            // type: 'BabylonjsCoreObservable<BabylonjsCoreColor3>' property (not coded) BabylonjsGuiColorPicker.onValueChangedObservable.
            { "name": "size", "type": "string | number" },
            { "name": "value", "type": "BabylonjsCoreColor3" },
            { "name": "width", "type": "string | number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create color pickers
 *
 * This code has been generated
 */
export class FiberColorPicker implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberColorPickerPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ColorPicker",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberColorPicker"
    };
}

export class FiberInputTextPropsHandler implements PropsHandler<FiberInputTextProps> {
    getPropertyUpdates(oldProps: FiberInputTextProps, newProps: FiberInputTextProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "addKey", "type": "boolean" },
            { "name": "autoStretchWidth", "type": "boolean" },
            { "name": "background", "type": "string" },
            { "name": "currentKey", "type": "string" },
            { "name": "deadKey", "type": "boolean" },
            { "name": "disableMobilePrompt", "type": "boolean" },
            { "name": "focusedBackground", "type": "string" },
            { "name": "focusedColor", "type": "string" },
            { "name": "highligherOpacity", "type": "number" },
            { "name": "highlightedText", "type": "string" },
            { "name": "margin", "type": "string" },
            { "name": "maxWidth", "type": "string | number" },
            { "name": "name", "type": "string" },
            // type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>' property (not coded) BabylonjsGuiInputText.onBeforeKeyAddObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>' property (not coded) BabylonjsGuiInputText.onBlurObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>' property (not coded) BabylonjsGuiInputText.onFocusObservable.
            { "name": "onFocusSelectAll", "type": "boolean" },
            // type: 'BabylonjsCoreObservable<KeyboardEvent>' property (not coded) BabylonjsGuiInputText.onKeyboardEventProcessedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>' property (not coded) BabylonjsGuiInputText.onTextChangedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>' property (not coded) BabylonjsGuiInputText.onTextCopyObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>' property (not coded) BabylonjsGuiInputText.onTextCutObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>' property (not coded) BabylonjsGuiInputText.onTextHighlightObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiInputText>' property (not coded) BabylonjsGuiInputText.onTextPasteObservable.
            { "name": "placeholderColor", "type": "string" },
            { "name": "placeholderText", "type": "string" },
            { "name": "promptMessage", "type": "string" },
            { "name": "text", "type": "string" },
            { "name": "textHighlightColor", "type": "string" },
            { "name": "thickness", "type": "number" },
            { "name": "width", "type": "string | number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create input text control
 *
 * This code has been generated
 */
export class FiberInputText implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberInputTextPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "InputText",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            },
            {
                "name": "text",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberInputText"
    };
}

export class FiberInputPasswordPropsHandler implements PropsHandler<FiberInputPasswordProps> {
    getPropertyUpdates(oldProps: FiberInputPasswordProps, newProps: FiberInputPasswordProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a password control
 *
 * This code has been generated
 */
export class FiberInputPassword implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberInputPasswordPropsHandler(),
            new FiberInputTextPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "InputPassword",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberInputPassword"
    };
}

export class FiberLinePropsHandler implements PropsHandler<FiberLineProps> {
    getPropertyUpdates(oldProps: FiberLineProps, newProps: FiberLineProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "connectedControl", "type": "BabylonjsGuiControl" },
            { "name": "dash", "type": "number[]" },
            { "name": "horizontalAlignment", "type": "number" },
            { "name": "lineWidth", "type": "number" },
            { "name": "name", "type": "string" },
            { "name": "verticalAlignment", "type": "number" },
            { "name": "x1", "type": "string | number" },
            { "name": "x2", "type": "string | number" },
            { "name": "y1", "type": "string | number" },
            { "name": "y2", "type": "string | number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to render 2D lines
 *
 * This code has been generated
 */
export class FiberLine implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberLinePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Line",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberLine"
    };
}

export class FiberMultiLinePropsHandler implements PropsHandler<FiberMultiLineProps> {
    getPropertyUpdates(oldProps: FiberMultiLineProps, newProps: FiberMultiLineProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "dash", "type": "number[]" },
            { "name": "horizontalAlignment", "type": "number" },
            { "name": "lineWidth", "type": "number" },
            { "name": "name", "type": "string" },
            // type: '() => void' property (not coded) BabylonjsGuiMultiLine.onPointUpdate.
            { "name": "verticalAlignment", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create multi line control
 *
 * This code has been generated
 */
export class FiberMultiLine implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiLinePropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiLine",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberMultiLine"
    };
}

export class FiberRadioButtonPropsHandler implements PropsHandler<FiberRadioButtonProps> {
    getPropertyUpdates(oldProps: FiberRadioButtonProps, newProps: FiberRadioButtonProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "background", "type": "string" },
            { "name": "checkSizeRatio", "type": "number" },
            { "name": "group", "type": "string" },
            { "name": "isChecked", "type": "boolean" },
            { "name": "name", "type": "string" },
            // type: 'BabylonjsCoreObservable<boolean>' property (not coded) BabylonjsGuiRadioButton.onIsCheckedChangedObservable.
            { "name": "thickness", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create radio button controls
 *
 * This code has been generated
 */
export class FiberRadioButton implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRadioButtonPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RadioButton",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberRadioButton"
    };
}

export class FiberBaseSliderPropsHandler implements PropsHandler<FiberBaseSliderProps> {
    getPropertyUpdates(oldProps: FiberBaseSliderProps, newProps: FiberBaseSliderProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "barOffset", "type": "string | number" },
            { "name": "displayThumb", "type": "boolean" },
            { "name": "isThumbClamped", "type": "boolean" },
            { "name": "isVertical", "type": "boolean" },
            { "name": "maximum", "type": "number" },
            { "name": "minimum", "type": "number" },
            { "name": "name", "type": "string" },
            // type: 'BabylonjsCoreObservable<number>' property (not coded) BabylonjsGuiBaseSlider.onValueChangedObservable.
            { "name": "step", "type": "number" },
            { "name": "thumbWidth", "type": "string | number" },
            { "name": "value", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberBaseSlider implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BaseSlider",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberBaseSlider"
    };
}

export class FiberScrollBarPropsHandler implements PropsHandler<FiberScrollBarProps> {
    getPropertyUpdates(oldProps: FiberScrollBarProps, newProps: FiberScrollBarProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "background", "type": "string" },
            { "name": "borderColor", "type": "string" },
            { "name": "name", "type": "string" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberScrollBar implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberScrollBarPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ScrollBar",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberScrollBar"
    };
}

export class FiberImageScrollBarPropsHandler implements PropsHandler<FiberImageScrollBarProps> {
    getPropertyUpdates(oldProps: FiberImageScrollBarProps, newProps: FiberImageScrollBarProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageScrollBar.backgroundImage.
            { "name": "barImageHeight", "type": "number" },
            { "name": "name", "type": "string" },
            { "name": "num90RotationInVerticalMode", "type": "number" },
            { "name": "thumbHeight", "type": "number" },
            // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageScrollBar.thumbImage.
            { "name": "thumbLength", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberImageScrollBar implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberImageScrollBarPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ImageScrollBar",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberImageScrollBar"
    };
}

export class FiberSliderPropsHandler implements PropsHandler<FiberSliderProps> {
    getPropertyUpdates(oldProps: FiberSliderProps, newProps: FiberSliderProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "background", "type": "string" },
            { "name": "borderColor", "type": "string" },
            { "name": "displayValueBar", "type": "boolean" },
            { "name": "isThumbCircle", "type": "boolean" },
            { "name": "name", "type": "string" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls
 *
 * This code has been generated
 */
export class FiberSlider implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSliderPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Slider",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberSlider"
    };
}

export class FiberImageBasedSliderPropsHandler implements PropsHandler<FiberImageBasedSliderProps> {
    getPropertyUpdates(oldProps: FiberImageBasedSliderProps, newProps: FiberImageBasedSliderProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.backgroundImage.
            { "name": "displayThumb", "type": "boolean" },
            { "name": "name", "type": "string" },
            // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.thumbImage.
            // type: 'BabylonjsGuiImage' property (not coded) BabylonjsGuiImageBasedSlider.valueBarImage.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create slider controls based on images
 *
 * This code has been generated
 */
export class FiberImageBasedSlider implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberImageBasedSliderPropsHandler(),
            new FiberBaseSliderPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ImageBasedSlider",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberImageBasedSlider"
    };
}

export class FiberDisplayGridPropsHandler implements PropsHandler<FiberDisplayGridProps> {
    getPropertyUpdates(oldProps: FiberDisplayGridProps, newProps: FiberDisplayGridProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "background", "type": "string" },
            { "name": "cellHeight", "type": "number" },
            { "name": "cellWidth", "type": "number" },
            { "name": "displayMajorLines", "type": "boolean" },
            { "name": "displayMinorLines", "type": "boolean" },
            { "name": "majorLineColor", "type": "string" },
            { "name": "majorLineFrequency", "type": "number" },
            { "name": "majorLineTickness", "type": "number" },
            { "name": "minorLineColor", "type": "string" },
            { "name": "minorLineTickness", "type": "number" },
            { "name": "name", "type": "string" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to render a grid
 *
 * This code has been generated
 */
export class FiberDisplayGrid implements HasPropsHandlers<FiberControlProps> {
    private propsHandlers: PropsHandler<FiberControlProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDisplayGridPropsHandler(),
            new FiberControlPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControlProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControlProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DisplayGrid",
        "namespace": "@babylonjs/gui/2D/controls/control",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI2DControl": true,
        "className": "FiberDisplayGrid"
    };
}

export class FiberControl3DPropsHandler implements PropsHandler<FiberControl3DProps> {
    getPropertyUpdates(oldProps: FiberControl3DProps, newProps: FiberControl3DProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "isVisible", "type": "boolean" },
            { "name": "name", "type": "string" },
            // type: 'BabylonjsCoreObservable<BabylonjsGuiVector3WithInfo>' property (not coded) BabylonjsGuiControl3D.onPointerClickObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiVector3WithInfo>' property (not coded) BabylonjsGuiControl3D.onPointerDownObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiControl3D>' property (not coded) BabylonjsGuiControl3D.onPointerEnterObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreVector3>' property (not coded) BabylonjsGuiControl3D.onPointerMoveObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiControl3D>' property (not coded) BabylonjsGuiControl3D.onPointerOutObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiVector3WithInfo>' property (not coded) BabylonjsGuiControl3D.onPointerUpObservable.
            // type: 'BabylonjsGuiContainer3D' property (not coded) BabylonjsGuiControl3D.parent.
            // type: '() => void' property (not coded) BabylonjsGuiControl3D.pointerDownAnimation.
            // type: '() => void' property (not coded) BabylonjsGuiControl3D.pointerEnterAnimation.
            // type: '() => void' property (not coded) BabylonjsGuiControl3D.pointerOutAnimation.
            // type: '() => void' property (not coded) BabylonjsGuiControl3D.pointerUpAnimation.
            { "name": "position", "type": "BabylonjsCoreVector3" },
            { "name": "scaling", "type": "BabylonjsCoreVector3" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used as base class for controls
 *
 * This code has been generated
 */
export class FiberControl3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Control3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberControl3D"
    };
}

export class FiberContainer3DPropsHandler implements PropsHandler<FiberContainer3DProps> {
    getPropertyUpdates(oldProps: FiberContainer3DProps, newProps: FiberContainer3DProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "blockLayout", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create containers for controls
 *
 * This code has been generated
 */
export class FiberContainer3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Container3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberContainer3D"
    };
}

export class FiberVolumeBasedPanelPropsHandler implements PropsHandler<FiberVolumeBasedPanelProps> {
    getPropertyUpdates(oldProps: FiberVolumeBasedPanelProps, newProps: FiberVolumeBasedPanelProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "columns", "type": "number" },
            { "name": "margin", "type": "number" },
            { "name": "orientation", "type": "number" },
            { "name": "rows", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Abstract class used to create a container panel deployed on the surface of a volume
 *
 * This code has been generated
 */
export class FiberVolumeBasedPanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VolumeBasedPanel",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberVolumeBasedPanel"
    };
}

export class FiberCylinderPanelPropsHandler implements PropsHandler<FiberCylinderPanelProps> {
    getPropertyUpdates(oldProps: FiberCylinderPanelProps, newProps: FiberCylinderPanelProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "radius", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel deployed on the surface of a cylinder
 *
 * This code has been generated
 */
export class FiberCylinderPanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCylinderPanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CylinderPanel",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberCylinderPanel"
    };
}

export class FiberPlanePanelPropsHandler implements PropsHandler<FiberPlanePanelProps> {
    getPropertyUpdates(oldProps: FiberPlanePanelProps, newProps: FiberPlanePanelProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel deployed on the surface of a plane
 *
 * This code has been generated
 */
export class FiberPlanePanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPlanePanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PlanePanel",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberPlanePanel"
    };
}

export class FiberScatterPanelPropsHandler implements PropsHandler<FiberScatterPanelProps> {
    getPropertyUpdates(oldProps: FiberScatterPanelProps, newProps: FiberScatterPanelProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "iteration", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel where items get randomized planar mapping
 *
 * This code has been generated
 */
export class FiberScatterPanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberScatterPanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ScatterPanel",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberScatterPanel"
    };
}

export class FiberSpherePanelPropsHandler implements PropsHandler<FiberSpherePanelProps> {
    getPropertyUpdates(oldProps: FiberSpherePanelProps, newProps: FiberSpherePanelProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "radius", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a container panel deployed on the surface of a sphere
 *
 * This code has been generated
 */
export class FiberSpherePanel implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberSpherePanelPropsHandler(),
            new FiberVolumeBasedPanelPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "SpherePanel",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": []
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberSpherePanel"
    };
}

export class FiberStackPanel3DPropsHandler implements PropsHandler<FiberStackPanel3DProps> {
    getPropertyUpdates(oldProps: FiberStackPanel3DProps, newProps: FiberStackPanel3DProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "isVertical", "type": "boolean" },
            { "name": "margin", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a stack panel in 3D on XY plane
 *
 * This code has been generated
 */
export class FiberStackPanel3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberStackPanel3DPropsHandler(),
            new FiberContainer3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "StackPanel3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": [
            {
                "name": "isVertical",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberStackPanel3D"
    };
}

export class FiberAbstractButton3DPropsHandler implements PropsHandler<FiberAbstractButton3DProps> {
    getPropertyUpdates(oldProps: FiberAbstractButton3DProps, newProps: FiberAbstractButton3DProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used as a root to all buttons
 *
 * This code has been generated
 */
export class FiberAbstractButton3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AbstractButton3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberAbstractButton3D"
    };
}

export class FiberButton3DPropsHandler implements PropsHandler<FiberButton3DProps> {
    getPropertyUpdates(oldProps: FiberButton3DProps, newProps: FiberButton3DProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "content", "type": "BabylonjsGuiControl" },
            { "name": "contentResolution", "type": "number" },
            { "name": "contentScaleRatio", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a button in 3D
 *
 * This code has been generated
 */
export class FiberButton3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Button3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberButton3D"
    };
}

export class FiberHolographicButtonPropsHandler implements PropsHandler<FiberHolographicButtonProps> {
    getPropertyUpdates(oldProps: FiberHolographicButtonProps, newProps: FiberHolographicButtonProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "imageUrl", "type": "string" },
            { "name": "renderingGroupId", "type": "number" },
            { "name": "text", "type": "string" },
            { "name": "tooltipText", "type": "string" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create a holographic button in 3D
 *
 * This code has been generated
 */
export class FiberHolographicButton implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHolographicButtonPropsHandler(),
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HolographicButton",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": true
            },
            {
                "name": "shareMaterials",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberHolographicButton"
    };
}

export class FiberMeshButton3DPropsHandler implements PropsHandler<FiberMeshButton3DProps> {
    getPropertyUpdates(oldProps: FiberMeshButton3DProps, newProps: FiberMeshButton3DProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create an interactable object. It's a 3D button using a mesh coming from the current scene
 *
 * This code has been generated
 */
export class FiberMeshButton3D implements HasPropsHandlers<FiberControl3DProps> {
    private propsHandlers: PropsHandler<FiberControl3DProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMeshButton3DPropsHandler(),
            new FiberButton3DPropsHandler(),
            new FiberAbstractButton3DPropsHandler(),
            new FiberControl3DPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberControl3DProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberControl3DProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MeshButton3D",
        "namespace": "@babylonjs/gui/3D/controls/control3D",
        "parameters": [
            {
                "name": "mesh",
                "type": "BabylonjsCoreMesh",
                "optional": false
            },
            {
                "name": "name",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberMeshButton3D"
    };
}

export class FiberEffectLayerPropsHandler implements PropsHandler<FiberEffectLayerProps> {
    getPropertyUpdates(oldProps: FiberEffectLayerProps, newProps: FiberEffectLayerProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "isEnabled", "type": "boolean" },
            { "name": "name", "type": "string" },
            { "name": "neutralColor", "type": "BabylonjsCoreColor4" },
            // type: 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>' property (not coded) BabylonjsCoreEffectLayer.onAfterComposeObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreEffectLayer.onAfterRenderMeshToEffect.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>' property (not coded) BabylonjsCoreEffectLayer.onBeforeComposeObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>' property (not coded) BabylonjsCoreEffectLayer.onBeforeRenderMainTextureObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreEffectLayer.onBeforeRenderMeshToEffect.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>' property (not coded) BabylonjsCoreEffectLayer.onDisposeObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreEffectLayer>' property (not coded) BabylonjsCoreEffectLayer.onSizeChangedObservable.
            { "name": "renderingGroupId", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The effect layer Helps adding post process effect blended with the main pass.
 *
 * This can be for instance use to generate glow or higlight effects on the scene.
 *
 * The effect layer class can not be used directly and is intented to inherited from to be
 * customized per effects.
 *
 * This code has been generated
 */
export class FiberEffectLayer implements HasPropsHandlers<FiberEffectLayerProps> {
    private propsHandlers: PropsHandler<FiberEffectLayerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEffectLayerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "EffectLayer",
        "namespace": "@babylonjs/core/Layers/effectLayer",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isEffectLayer": true,
        "className": "FiberEffectLayer"
    };
}

export class FiberGlowLayerPropsHandler implements PropsHandler<FiberGlowLayerProps> {
    getPropertyUpdates(oldProps: FiberGlowLayerProps, newProps: FiberGlowLayerProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "blurKernelSize", "type": "number" },
            // type: '(mesh: BabylonjsCoreMesh, subMesh: BabylonjsCoreSubMesh, material: BabylonjsCoreMaterial, result: BabylonjsCoreColor4) => void' property (not coded) BabylonjsCoreGlowLayer.customEmissiveColorSelector.
            // type: '(mesh: BabylonjsCoreMesh, subMesh: BabylonjsCoreSubMesh, material: BabylonjsCoreMaterial) => BabylonjsCoreTexture' property (not coded) BabylonjsCoreGlowLayer.customEmissiveTextureSelector.
            { "name": "intensity", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The glow layer Helps adding a glow effect around the emissive parts of a mesh.
 *
 * Once instantiated in a scene, by default, all the emissive meshes will glow.
 *
 * Documentation: https://doc.babylonjs.com/how_to/glow_layer
 *
 * This code has been generated
 */
export class FiberGlowLayer implements HasPropsHandlers<FiberEffectLayerProps> {
    private propsHandlers: PropsHandler<FiberEffectLayerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGlowLayerPropsHandler(),
            new FiberEffectLayerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GlowLayer",
        "namespace": "@babylonjs/core/Layers/effectLayer",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "options",
                "type": "Partial<BabylonjsCoreIGlowLayerOptions>",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isEffectLayer": true,
        "className": "FiberGlowLayer"
    };
}

export class FiberHighlightLayerPropsHandler implements PropsHandler<FiberHighlightLayerProps> {
    getPropertyUpdates(oldProps: FiberHighlightLayerProps, newProps: FiberHighlightLayerProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "blurHorizontalSize", "type": "number" },
            { "name": "blurVerticalSize", "type": "number" },
            { "name": "innerGlow", "type": "boolean" },
            { "name": "name", "type": "string" },
            // type: 'BabylonjsCoreObservable<BabylonjsCoreHighlightLayer>' property (not coded) BabylonjsCoreHighlightLayer.onAfterBlurObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreHighlightLayer>' property (not coded) BabylonjsCoreHighlightLayer.onBeforeBlurObservable.
            { "name": "outerGlow", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The highlight layer Helps adding a glow effect around a mesh.
 *
 * Once instantiated in a scene, simply use the addMesh or removeMesh method to add or remove
 * glowy meshes to your scene.
 *
 * !!! THIS REQUIRES AN ACTIVE STENCIL BUFFER ON THE CANVAS !!!
 *
 * This code has been generated
 */
export class FiberHighlightLayer implements HasPropsHandlers<FiberEffectLayerProps> {
    private propsHandlers: PropsHandler<FiberEffectLayerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHighlightLayerPropsHandler(),
            new FiberEffectLayerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberEffectLayerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberEffectLayerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HighlightLayer",
        "namespace": "@babylonjs/core/Layers/effectLayer",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "options",
                "type": "Partial<BabylonjsCoreIHighlightLayerOptions>",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isEffectLayer": true,
        "className": "FiberHighlightLayer"
    };
}

export class FiberBaseTexturePropsHandler implements PropsHandler<FiberBaseTextureProps> {
    getPropertyUpdates(oldProps: FiberBaseTextureProps, newProps: FiberBaseTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreAnimation[]' property (not coded) BabylonjsCoreBaseTexture.animations.
            { "name": "anisotropicFilteringLevel", "type": "number" },
            { "name": "coordinatesIndex", "type": "number" },
            { "name": "coordinatesMode", "type": "number" },
            { "name": "delayLoadState", "type": "number" },
            { "name": "gammaSpace", "type": "boolean" },
            { "name": "getAlphaFromRGB", "type": "boolean" },
            { "name": "hasAlpha", "type": "boolean" },
            { "name": "invertZ", "type": "boolean" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreBaseTexture.irradianceTexture.
            { "name": "is2DArray", "type": "boolean" },
            { "name": "is3D", "type": "boolean" },
            { "name": "isCube", "type": "boolean" },
            { "name": "isRenderTarget", "type": "boolean" },
            { "name": "isRGBD", "type": "boolean" },
            { "name": "level", "type": "number" },
            { "name": "linearSpecularLOD", "type": "boolean" },
            { "name": "lodGenerationOffset", "type": "number" },
            { "name": "lodGenerationScale", "type": "number" },
            { "name": "lodLevelInAlpha", "type": "boolean" },
            // type: 'any' property (not coded) BabylonjsCoreBaseTexture.metadata.
            { "name": "name", "type": "string" },
            // type: '() => void' property (not coded) BabylonjsCoreBaseTexture.onDispose.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>' property (not coded) BabylonjsCoreBaseTexture.onDisposeObservable.
            // type: 'any' property (not coded) BabylonjsCoreBaseTexture.reservedDataStore.
            { "name": "uniqueId", "type": "number" },
            { "name": "wrapR", "type": "number" },
            { "name": "wrapU", "type": "number" },
            { "name": "wrapV", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Base class of all the textures in babylon.
 * It groups all the common properties the materials, post process, lights... might need
 * in order to make a correct use of the texture.
 *
 * This code has been generated
 */
export class FiberBaseTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "BaseTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberBaseTexture"
    };
}

export class FiberCubeTexturePropsHandler implements PropsHandler<FiberCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberCubeTextureProps, newProps: FiberCubeTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "boundingBoxPosition", "type": "BabylonjsCoreVector3" },
            { "name": "boundingBoxSize", "type": "BabylonjsCoreVector3" },
            // type: 'BabylonjsCoreObservable<BabylonjsCoreCubeTexture>' property (not coded) BabylonjsCoreCubeTexture.onLoadObservable.
            { "name": "rotationY", "type": "number" },
            { "name": "url", "type": "string" },
            { "name": "setReflectionTextureMatrix", "type": "(value?: BabylonjsCoreMatrix) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class for creating a cube texture
 *
 * This code has been generated
 */
export class FiberCubeTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CubeTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "rootUrl",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "extensions",
                "type": "string[]",
                "optional": true
            },
            {
                "name": "noMipmap",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "files",
                "type": "string[]",
                "optional": true
            },
            {
                "name": "onLoad",
                "type": "() => void",
                "optional": true
            },
            {
                "name": "onError",
                "type": "(message?: string, exception?: any) => void",
                "optional": true
            },
            {
                "name": "format",
                "type": "number",
                "optional": true
            },
            {
                "name": "prefiltered",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "forcedExtension",
                "type": "any",
                "optional": true
            },
            {
                "name": "createPolynomials",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "lodScale",
                "type": "number",
                "optional": true
            },
            {
                "name": "lodOffset",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberCubeTexture"
    };
}

export class FiberRawCubeTexturePropsHandler implements PropsHandler<FiberRawCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberRawCubeTextureProps, newProps: FiberRawCubeTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Raw cube texture where the raw buffers are passed in
 *
 * This code has been generated
 */
export class FiberRawCubeTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawCubeTexturePropsHandler(),
            new FiberCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawCubeTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "data",
                "type": "ArrayBufferView[]",
                "optional": false
            },
            {
                "name": "size",
                "type": "number",
                "optional": false
            },
            {
                "name": "format",
                "type": "number",
                "optional": true
            },
            {
                "name": "type",
                "type": "number",
                "optional": true
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "compression",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberRawCubeTexture"
    };
}

export class FiberTexturePropsHandler implements PropsHandler<FiberTextureProps> {
    getPropertyUpdates(oldProps: FiberTextureProps, newProps: FiberTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreIInspectable[]' property (not coded) BabylonjsCoreTexture.inspectableCustomProperties.
            { "name": "isBlocking", "type": "boolean" },
            // type: 'BabylonjsCoreObservable<BabylonjsCoreTexture>' property (not coded) BabylonjsCoreTexture.onLoadObservable.
            { "name": "uAng", "type": "number" },
            { "name": "uOffset", "type": "number" },
            { "name": "url", "type": "string" },
            { "name": "uRotationCenter", "type": "number" },
            { "name": "uScale", "type": "number" },
            { "name": "vAng", "type": "number" },
            { "name": "vOffset", "type": "number" },
            { "name": "vRotationCenter", "type": "number" },
            { "name": "vScale", "type": "number" },
            { "name": "wAng", "type": "number" },
            { "name": "wRotationCenter", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
 *
 * This code has been generated
 */
export class FiberTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "Texture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "sceneOrEngine",
                "type": "BabylonjsCoreScene | BabylonjsCoreThinEngine",
                "optional": false
            },
            {
                "name": "noMipmap",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "onLoad",
                "type": "() => void",
                "optional": true
            },
            {
                "name": "onError",
                "type": "(message?: string, exception?: any) => void",
                "optional": true
            },
            {
                "name": "buffer",
                "type": "string | HTMLImageElement | ArrayBufferView | ArrayBuffer | Blob | ImageBitmap",
                "optional": true
            },
            {
                "name": "deleteBuffer",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "format",
                "type": "number",
                "optional": true
            },
            {
                "name": "mimeType",
                "type": "string",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberTexture"
    };
}

export class FiberRawTexturePropsHandler implements PropsHandler<FiberRawTextureProps> {
    getPropertyUpdates(oldProps: FiberRawTextureProps, newProps: FiberRawTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "format", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Raw texture can help creating a texture directly from an array of data.
 * This can be super useful if you either get the data from an uncompressed source or
 * if you wish to create your texture pixel by pixel.
 *
 * This code has been generated
 */
export class FiberRawTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "data",
                "type": "ArrayBufferView",
                "optional": false
            },
            {
                "name": "width",
                "type": "number",
                "optional": false
            },
            {
                "name": "height",
                "type": "number",
                "optional": false
            },
            {
                "name": "format",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "type",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberRawTexture"
    };
}

export class FiberProceduralTexturePropsHandler implements PropsHandler<FiberProceduralTextureProps> {
    getPropertyUpdates(oldProps: FiberProceduralTextureProps, newProps: FiberProceduralTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "autoClear", "type": "boolean" },
            { "name": "isCube", "type": "boolean" },
            { "name": "isEnabled", "type": "boolean" },
            // type: '() => void' property (not coded) BabylonjsCoreProceduralTexture.onGenerated.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreProceduralTexture>' property (not coded) BabylonjsCoreProceduralTexture.onGeneratedObservable.
            { "name": "refreshRate", "type": "number" },
            { "name": "setColor3", "type": "(name?: string, value?: BabylonjsCoreColor3) => BabylonjsCoreProceduralTexture", "method": true },
            { "name": "setColor4", "type": "(name?: string, value?: BabylonjsCoreColor4) => BabylonjsCoreProceduralTexture", "method": true },
            { "name": "setFloat", "type": "(name?: string, value?: number) => BabylonjsCoreProceduralTexture", "method": true },
            { "name": "setFloats", "type": "(name?: string, value?: number[]) => BabylonjsCoreProceduralTexture", "method": true },
            { "name": "setFragment", "type": "(fragment?: any) => void", "method": true },
            { "name": "setInt", "type": "(name?: string, value?: number) => BabylonjsCoreProceduralTexture", "method": true },
            { "name": "setMatrix", "type": "(name?: string, value?: BabylonjsCoreMatrix) => BabylonjsCoreProceduralTexture", "method": true },
            { "name": "setTexture", "type": "(name?: string, texture?: BabylonjsCoreTexture) => BabylonjsCoreProceduralTexture", "method": true },
            { "name": "setVector2", "type": "(name?: string, value?: BabylonjsCoreVector2) => BabylonjsCoreProceduralTexture", "method": true },
            { "name": "setVector3", "type": "(name?: string, value?: BabylonjsCoreVector3) => BabylonjsCoreProceduralTexture", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes calmpler' images.
 * This is the base class of any Procedural texture and contains most of the shareable code.
 *
 * This code has been generated
 */
export class FiberProceduralTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ProceduralTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "any",
                "optional": false
            },
            {
                "name": "fragment",
                "type": "any",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "fallbackTexture",
                "type": "BabylonjsCoreTexture",
                "optional": true
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "isCube",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberProceduralTexture"
    };
}

export class FiberCustomProceduralTexturePropsHandler implements PropsHandler<FiberCustomProceduralTextureProps> {
    getPropertyUpdates(oldProps: FiberCustomProceduralTextureProps, newProps: FiberCustomProceduralTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "animate", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Procedural texturing is a way to programmatically create a texture. There are 2 types of procedural textures: code-only, and code that references some classic 2D images, sometimes called 'refMaps' or 'sampler' images.
 * Custom Procedural textures are the easiest way to create your own procedural in your application.
 *
 * This code has been generated
 */
export class FiberCustomProceduralTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberCustomProceduralTexturePropsHandler(),
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "CustomProceduralTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "texturePath",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "fallbackTexture",
                "type": "BabylonjsCoreTexture",
                "optional": true
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberCustomProceduralTexture"
    };
}

export class FiberNoiseProceduralTexturePropsHandler implements PropsHandler<FiberNoiseProceduralTextureProps> {
    getPropertyUpdates(oldProps: FiberNoiseProceduralTextureProps, newProps: FiberNoiseProceduralTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "animationSpeedFactor", "type": "number" },
            { "name": "brightness", "type": "number" },
            { "name": "octaves", "type": "number" },
            { "name": "persistence", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to generate noise procedural textures
 *
 * This code has been generated
 */
export class FiberNoiseProceduralTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberNoiseProceduralTexturePropsHandler(),
            new FiberProceduralTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "NoiseProceduralTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "number",
                "optional": true
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "fallbackTexture",
                "type": "BabylonjsCoreTexture",
                "optional": true
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberNoiseProceduralTexture"
    };
}

export class FiberRenderTargetTexturePropsHandler implements PropsHandler<FiberRenderTargetTextureProps> {
    getPropertyUpdates(oldProps: FiberRenderTargetTextureProps, newProps: FiberRenderTargetTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreRenderTargetTexture.activeCamera.
            { "name": "boundingBoxPosition", "type": "BabylonjsCoreVector3" },
            { "name": "boundingBoxSize", "type": "BabylonjsCoreVector3" },
            { "name": "clearColor", "type": "BabylonjsCoreColor4" },
            { "name": "coordinatesMode", "type": "number" },
            // type: '(opaqueSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, alphaTestSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, transparentSubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, depthOnlySubMeshes: BabylonjsCoreSmartArray<BabylonjsCoreSubMesh>, beforeTransparents?: () => void) => void' property (not coded) BabylonjsCoreRenderTargetTexture.customRenderFunction.
            // type: '(layerOrFace: number, renderList: readonly BabylonjsCoreAbstractMesh[], renderListLength: number) => BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreRenderTargetTexture.getCustomRenderList.
            { "name": "ignoreCameraViewport", "type": "boolean" },
            { "name": "isCube", "type": "boolean" },
            // type: '(faceIndex: number) => void' property (not coded) BabylonjsCoreRenderTargetTexture.onAfterRender.
            // type: 'BabylonjsCoreObservable<number>' property (not coded) BabylonjsCoreRenderTargetTexture.onAfterRenderObservable.
            // type: '() => void' property (not coded) BabylonjsCoreRenderTargetTexture.onAfterUnbind.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreRenderTargetTexture>' property (not coded) BabylonjsCoreRenderTargetTexture.onAfterUnbindObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreRenderTargetTexture>' property (not coded) BabylonjsCoreRenderTargetTexture.onBeforeBindObservable.
            // type: '(faceIndex: number) => void' property (not coded) BabylonjsCoreRenderTargetTexture.onBeforeRender.
            // type: 'BabylonjsCoreObservable<number>' property (not coded) BabylonjsCoreRenderTargetTexture.onBeforeRenderObservable.
            // type: '(Engine: BabylonjsCoreEngine) => void' property (not coded) BabylonjsCoreRenderTargetTexture.onClear.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreEngine>' property (not coded) BabylonjsCoreRenderTargetTexture.onClearObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreRenderTargetTexture>' property (not coded) BabylonjsCoreRenderTargetTexture.onResizeObservable.
            { "name": "refreshRate", "type": "number" },
            // type: 'BabylonjsCoreAbstractMesh[]' property (not coded) BabylonjsCoreRenderTargetTexture.renderList.
            // type: '(AbstractMesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreRenderTargetTexture.renderListPredicate.
            { "name": "renderParticles", "type": "boolean" },
            { "name": "renderSprites", "type": "boolean" },
            // type: 'any' property (not coded) BabylonjsCoreRenderTargetTexture.renderToTarget.
            { "name": "samples", "type": "number" },
            { "name": "useCameraPostProcesses", "type": "boolean" },
            { "name": "setRenderingAutoClearDepthStencil", "type": "(renderingGroupId?: number, autoClearDepthStencil?: boolean) => void", "method": true },
            { "name": "setRenderingOrder", "type": "(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This Helps creating a texture that will be created from a camera in your scene.
 * It is basically a dynamic texture that could be used to create special effects for instance.
 * Actually, It is the base of lot of effects in the framework like post process, shadows, effect layers and rendering pipelines...
 *
 * This code has been generated
 */
export class FiberRenderTargetTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RenderTargetTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "number | { width: number; height: number; layers?: number; } | { ratio: number; }",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "doNotChangeAspectRatio",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "type",
                "type": "number",
                "optional": true
            },
            {
                "name": "isCube",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "generateDepthBuffer",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "generateStencilBuffer",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "isMulti",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "format",
                "type": "number",
                "optional": true
            },
            {
                "name": "delayAllocation",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberRenderTargetTexture"
    };
}

export class FiberMirrorTexturePropsHandler implements PropsHandler<FiberMirrorTextureProps> {
    getPropertyUpdates(oldProps: FiberMirrorTextureProps, newProps: FiberMirrorTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "adaptiveBlurKernel", "type": "number" },
            { "name": "blurKernel", "type": "number" },
            { "name": "blurKernelX", "type": "number" },
            { "name": "blurKernelY", "type": "number" },
            { "name": "blurRatio", "type": "number" },
            // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreMirrorTexture.mirrorPlane.
            // type: 'any' property (not coded) BabylonjsCoreMirrorTexture.scene.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Mirror texture can be used to simulate the view from a mirror in a scene.
 * It will dynamically be rendered every frame to adapt to the camera point of view.
 * You can then easily use it as a reflectionTexture on a flat surface.
 * In case the surface is not a plane, please consider relying on reflection probes.
 *
 * This code has been generated
 */
export class FiberMirrorTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMirrorTexturePropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MirrorTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "number | { width: number; height: number; } | { ratio: number; }",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "type",
                "type": "number",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "generateDepthBuffer",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberMirrorTexture"
    };
}

export class FiberMultiRenderTargetPropsHandler implements PropsHandler<FiberMultiRenderTargetProps> {
    getPropertyUpdates(oldProps: FiberMultiRenderTargetProps, newProps: FiberMultiRenderTargetProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "samples", "type": "number" },
            { "name": "wrapU", "type": "number" },
            { "name": "wrapV", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A multi render target, like a render target provides the ability to render to a texture.
 * Unlike the render target, it can render to several draw buffers in one draw.
 * This is specially interesting in deferred rendering or for any effects requiring more than
 * just one color from a single pass.
 *
 * This code has been generated
 */
export class FiberMultiRenderTarget implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiRenderTargetPropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiRenderTarget",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "any",
                "optional": false
            },
            {
                "name": "count",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "options",
                "type": "BabylonjsCoreIMultiRenderTargetOptions",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberMultiRenderTarget"
    };
}

export class FiberRefractionTexturePropsHandler implements PropsHandler<FiberRefractionTextureProps> {
    getPropertyUpdates(oldProps: FiberRefractionTextureProps, newProps: FiberRefractionTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "depth", "type": "number" },
            // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreRefractionTexture.refractionPlane.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Creates a refraction texture used by refraction channel of the standard material.
 * It is like a mirror but to see through a material.
 *
 * This code has been generated
 */
export class FiberRefractionTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRefractionTexturePropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RefractionTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "size",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberRefractionTexture"
    };
}

export class FiberMultiviewRenderTargetPropsHandler implements PropsHandler<FiberMultiviewRenderTargetProps> {
    getPropertyUpdates(oldProps: FiberMultiviewRenderTargetProps, newProps: FiberMultiviewRenderTargetProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Renders to multiple views with a single draw call
 *
 * This code has been generated
 */
export class FiberMultiviewRenderTarget implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberMultiviewRenderTargetPropsHandler(),
            new FiberRenderTargetTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "MultiviewRenderTarget",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "size",
                "type": "number | { width: number; height: number; } | { ratio: number; }",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberMultiviewRenderTarget"
    };
}

export class FiberVideoTexturePropsHandler implements PropsHandler<FiberVideoTextureProps> {
    getPropertyUpdates(oldProps: FiberVideoTextureProps, newProps: FiberVideoTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'any' property (not coded) BabylonjsCoreVideoTexture.reset.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * If you want to display a video in your scene, this is the special texture for that.
 * This special texture works similar to other textures, with the exception of a few parameters.
 *
 * This code has been generated
 */
export class FiberVideoTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVideoTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VideoTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "src",
                "type": "string | string[] | HTMLVideoElement",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "settings",
                "type": "BabylonjsCoreVideoTextureSettings",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberVideoTexture"
    };
}

export class FiberDynamicTexturePropsHandler implements PropsHandler<FiberDynamicTextureProps> {
    getPropertyUpdates(oldProps: FiberDynamicTextureProps, newProps: FiberDynamicTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * A class extending Texture allowing drawing on a texture
 *
 * This code has been generated
 */
export class FiberDynamicTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDynamicTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DynamicTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "options",
                "type": "any",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": false
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "format",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberDynamicTexture"
    };
}

export class FiberAdvancedDynamicTexturePropsHandler implements PropsHandler<FiberAdvancedDynamicTextureProps> {
    getPropertyUpdates(oldProps: FiberAdvancedDynamicTextureProps, newProps: FiberAdvancedDynamicTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "background", "type": "string" },
            { "name": "clipboardData", "type": "string" },
            // type: 'BabylonjsGuiIFocusableControl' property (not coded) BabylonjsGuiAdvancedDynamicTexture.focusedControl.
            { "name": "idealHeight", "type": "number" },
            { "name": "idealWidth", "type": "number" },
            { "name": "isForeground", "type": "boolean" },
            // type: 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onBeginLayoutObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onBeginRenderObservable.
            // type: 'any' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onClipboardCopy.
            // type: 'any' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onClipboardCut.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreClipboardInfo>' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onClipboardObservable.
            // type: 'any' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onClipboardPaste.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiControl>' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onControlPickedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onEndLayoutObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsGuiAdvancedDynamicTexture>' property (not coded) BabylonjsGuiAdvancedDynamicTexture.onEndRenderObservable.
            { "name": "premulAlpha", "type": "boolean" },
            { "name": "renderAtIdealSize", "type": "boolean" },
            { "name": "renderScale", "type": "number" },
            { "name": "useInvalidateRectOptimization", "type": "boolean" },
            { "name": "useSmallestIdeal", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to create texture to support 2D GUI elements
 *
 * This code has been generated
 */
export class FiberAdvancedDynamicTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAdvancedDynamicTexturePropsHandler(),
            new FiberDynamicTexturePropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "AdvancedDynamicTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "width",
                "type": "number",
                "optional": false
            },
            {
                "name": "height",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberAdvancedDynamicTexture"
    };
}

/**
 * Creates a new AdvancedDynamicTexture in projected mode (ie. attached to a mesh)
 *
 * This code has been generated
 */
export class FiberADTForMesh implements HasPropsHandlers<FiberAdvancedDynamicTextureProps> {
    private propsHandlers: PropsHandler<FiberAdvancedDynamicTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAdvancedDynamicTexturePropsHandler()
            , new FiberDynamicTexturePropsHandler()
            , new FiberTexturePropsHandler()
            , new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAdvancedDynamicTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAdvancedDynamicTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "advancedDynamicTexture",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateForMesh",
        "parameters": [
            {
                "name": "mesh",
                "type": "BabylonjsCoreAbstractMesh",
                "optional": false
            },
            {
                "name": "width",
                "type": "number",
                "optional": true
            },
            {
                "name": "height",
                "type": "number",
                "optional": true
            },
            {
                "name": "supportPointerMove",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "onlyAlphaTesting",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberADTForMesh"
    };
}

/**
 * Creates a new AdvancedDynamicTexture in fullscreen mode.
 * In this mode the texture will rely on a layer for its rendering.
 * This allows it to be treated like any other layer.
 * As such, if you have a multi camera setup, you can set the layerMask on the GUI as well.
 * LayerMask is set through advancedTexture.layer.layerMask
 *
 * This code has been generated
 */
export class FiberADTFullscreenUI implements HasPropsHandlers<FiberAdvancedDynamicTextureProps> {
    private propsHandlers: PropsHandler<FiberAdvancedDynamicTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberAdvancedDynamicTexturePropsHandler()
            , new FiberDynamicTexturePropsHandler()
            , new FiberTexturePropsHandler()
            , new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberAdvancedDynamicTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberAdvancedDynamicTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "FactoryMethod",
        "libraryLocation": "advancedDynamicTexture",
        "namespace": "@babylonjs/core",
        "factoryMethod": "CreateFullscreenUI",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "foreground",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            },
            {
                "name": "sampling",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberADTFullscreenUI"
    };
}

export class FiberRawTexture3DPropsHandler implements PropsHandler<FiberRawTexture3DProps> {
    getPropertyUpdates(oldProps: FiberRawTexture3DProps, newProps: FiberRawTexture3DProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "format", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to store 3D textures containing user data
 *
 * This code has been generated
 */
export class FiberRawTexture3D implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawTexture3DPropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawTexture3D",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "data",
                "type": "ArrayBufferView",
                "optional": false
            },
            {
                "name": "width",
                "type": "number",
                "optional": false
            },
            {
                "name": "height",
                "type": "number",
                "optional": false
            },
            {
                "name": "depth",
                "type": "number",
                "optional": false
            },
            {
                "name": "format",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "textureType",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberRawTexture3D"
    };
}

export class FiberRawTexture2DArrayPropsHandler implements PropsHandler<FiberRawTexture2DArrayProps> {
    getPropertyUpdates(oldProps: FiberRawTexture2DArrayProps, newProps: FiberRawTexture2DArrayProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "format", "type": "number" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to store 2D array textures containing user data
 *
 * This code has been generated
 */
export class FiberRawTexture2DArray implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberRawTexture2DArrayPropsHandler(),
            new FiberTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "RawTexture2DArray",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "data",
                "type": "ArrayBufferView",
                "optional": false
            },
            {
                "name": "width",
                "type": "number",
                "optional": false
            },
            {
                "name": "height",
                "type": "number",
                "optional": false
            },
            {
                "name": "depth",
                "type": "number",
                "optional": false
            },
            {
                "name": "format",
                "type": "number",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "generateMipMaps",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "invertY",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "samplingMode",
                "type": "number",
                "optional": true
            },
            {
                "name": "textureType",
                "type": "number",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberRawTexture2DArray"
    };
}

export class FiberColorGradingTexturePropsHandler implements PropsHandler<FiberColorGradingTextureProps> {
    getPropertyUpdates(oldProps: FiberColorGradingTextureProps, newProps: FiberColorGradingTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'any' property (not coded) BabylonjsCoreColorGradingTexture.load3dlTexture.
            // type: 'any' property (not coded) BabylonjsCoreColorGradingTexture.loadTexture.
            { "name": "url", "type": "string" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a color grading texture. This acts as a lookup table LUT, useful during post process
 * It can help converting any input color in a desired output one. This can then be used to create effects
 * from sepia, black and white to sixties or futuristic rendering...
 *
 * The only supported format is currently 3dl.
 * More information on LUT: https://en.wikipedia.org/wiki/3D_lookup_table
 *
 * This code has been generated
 */
export class FiberColorGradingTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberColorGradingTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ColorGradingTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberColorGradingTexture"
    };
}

export class FiberEquiRectangularCubeTexturePropsHandler implements PropsHandler<FiberEquiRectangularCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberEquiRectangularCubeTextureProps, newProps: FiberEquiRectangularCubeTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "coordinatesMode", "type": "number" },
            // type: 'any' property (not coded) BabylonjsCoreEquiRectangularCubeTexture.getFloat32ArrayFromArrayBuffer.
            // type: 'any' property (not coded) BabylonjsCoreEquiRectangularCubeTexture.loadImage.
            // type: 'any' property (not coded) BabylonjsCoreEquiRectangularCubeTexture.loadTexture.
            { "name": "url", "type": "string" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a texture coming from an equirectangular image supported by the web browser canvas.
 *
 * This code has been generated
 */
export class FiberEquiRectangularCubeTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEquiRectangularCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "EquiRectangularCubeTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "size",
                "type": "number",
                "optional": false
            },
            {
                "name": "noMipmap",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "gammaSpace",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "onLoad",
                "type": "() => void",
                "optional": true
            },
            {
                "name": "onError",
                "type": "(message?: string, exception?: any) => void",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberEquiRectangularCubeTexture"
    };
}

export class FiberHDRCubeTexturePropsHandler implements PropsHandler<FiberHDRCubeTextureProps> {
    getPropertyUpdates(oldProps: FiberHDRCubeTextureProps, newProps: FiberHDRCubeTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "boundingBoxPosition", "type": "BabylonjsCoreVector3" },
            { "name": "boundingBoxSize", "type": "BabylonjsCoreVector3" },
            { "name": "coordinatesMode", "type": "number" },
            { "name": "isBlocking", "type": "boolean" },
            // type: 'any' property (not coded) BabylonjsCoreHDRCubeTexture.loadTexture.
            { "name": "rotationY", "type": "number" },
            { "name": "url", "type": "string" },
            { "name": "setReflectionTextureMatrix", "type": "(value?: BabylonjsCoreMatrix) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents a texture coming from an HDR input.
 *
 * The only supported format is currently panorama picture stored in RGBE format.
 * Example of such files can be found on HDRLib: http://hdrlib.com/
 *
 * This code has been generated
 */
export class FiberHDRCubeTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHDRCubeTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HDRCubeTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "url",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "size",
                "type": "number",
                "optional": false
            },
            {
                "name": "noMipmap",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "generateHarmonics",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "gammaSpace",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "reserved",
                "type": "boolean",
                "optional": true
            },
            {
                "name": "onLoad",
                "type": "() => void",
                "optional": true
            },
            {
                "name": "onError",
                "type": "(message?: string, exception?: any) => void",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberHDRCubeTexture"
    };
}

export class FiberHtmlElementTexturePropsHandler implements PropsHandler<FiberHtmlElementTextureProps> {
    getPropertyUpdates(oldProps: FiberHtmlElementTextureProps, newProps: FiberHtmlElementTextureProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'HTMLVideoElement | HTMLCanvasElement' property (not coded) BabylonjsCoreHtmlElementTexture.element.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This represents the smallest workload to use an already existing element (Canvas or Video) as a texture.
 * To be as efficient as possible depending on your constraints nothing aside the first upload
 * is automatically managed.
 * It is a cheap VideoTexture or DynamicTexture if you prefer to keep full control of the elements
 * in your application.
 *
 * As the update is not automatic, you need to call them manually.
 *
 * This code has been generated
 */
export class FiberHtmlElementTexture implements HasPropsHandlers<FiberBaseTextureProps> {
    private propsHandlers: PropsHandler<FiberBaseTextureProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberHtmlElementTexturePropsHandler(),
            new FiberBaseTexturePropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberBaseTextureProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberBaseTextureProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "HtmlElementTexture",
        "namespace": "@babylonjs/core/Materials/Textures/baseTexture",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "element",
                "type": "HTMLVideoElement | HTMLCanvasElement",
                "optional": false
            },
            {
                "name": "options",
                "type": "BabylonjsCoreIHtmlElementTextureOptions",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isTexture": true,
        "className": "FiberHtmlElementTexture"
    };
}

export class FiberGUI3DManagerPropsHandler implements PropsHandler<FiberGUI3DManagerProps> {
    getPropertyUpdates(oldProps: FiberGUI3DManagerProps, newProps: FiberGUI3DManagerProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreObservable<BabylonjsCoreVector3>' property (not coded) BabylonjsGuiGUI3DManager.onPickedPointChangedObservable.
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Class used to manage 3D user interface
 *
 * This code has been generated
 */
export class FiberGUI3DManager implements HasPropsHandlers<FiberGUI3DManagerProps> {
    private propsHandlers: PropsHandler<FiberGUI3DManagerProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberGUI3DManagerPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberGUI3DManagerProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberGUI3DManagerProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "GUI3DManager",
        "namespace": "@babylonjs/gui/3D/gui3DManager",
        "parameters": [
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isGUI3DControl": true,
        "className": "FiberGUI3DManager"
    };
}

export class FiberShadowGeneratorPropsHandler implements PropsHandler<FiberShadowGeneratorProps> {
    getPropertyUpdates(oldProps: FiberShadowGeneratorProps, newProps: FiberShadowGeneratorProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            { "name": "bias", "type": "number" },
            { "name": "blurBoxOffset", "type": "number" },
            { "name": "blurKernel", "type": "number" },
            { "name": "blurScale", "type": "number" },
            { "name": "contactHardeningLightSizeUVRatio", "type": "number" },
            // type: 'BabylonjsCoreICustomShaderOptions' property (not coded) BabylonjsCoreShadowGenerator.customShaderOptions.
            { "name": "darkness", "type": "number" },
            { "name": "depthScale", "type": "number" },
            { "name": "filter", "type": "number" },
            { "name": "filteringQuality", "type": "number" },
            { "name": "forceBackFacesOnly", "type": "boolean" },
            { "name": "frustumEdgeFalloff", "type": "number" },
            { "name": "normalBias", "type": "number" },
            // type: 'BabylonjsCoreObservable<BabylonjsCoreMesh>' property (not coded) BabylonjsCoreShadowGenerator.onAfterShadowMapRenderMeshObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreEffect>' property (not coded) BabylonjsCoreShadowGenerator.onAfterShadowMapRenderObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreMesh>' property (not coded) BabylonjsCoreShadowGenerator.onBeforeShadowMapRenderMeshObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreEffect>' property (not coded) BabylonjsCoreShadowGenerator.onBeforeShadowMapRenderObservable.
            { "name": "transparencyShadow", "type": "boolean" },
            { "name": "useBlurCloseExponentialShadowMap", "type": "boolean" },
            { "name": "useBlurExponentialShadowMap", "type": "boolean" },
            { "name": "useCloseExponentialShadowMap", "type": "boolean" },
            { "name": "useContactHardeningShadow", "type": "boolean" },
            { "name": "useExponentialShadowMap", "type": "boolean" },
            { "name": "useKernelBlur", "type": "boolean" },
            { "name": "usePercentageCloserFiltering", "type": "boolean" },
            { "name": "usePoissonSampling", "type": "boolean" },
            { "name": "setDarkness", "type": "(darkness?: number) => BabylonjsCoreShadowGenerator", "method": true },
            { "name": "setTransparencyShadow", "type": "(transparent?: boolean) => BabylonjsCoreShadowGenerator", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Default implementation IShadowGenerator.
 * This is the main object responsible of generating shadows in the framework.
 * Documentation: https://doc.babylonjs.com/babylon101/shadows
 *
 * This code has been generated
 */
export class FiberShadowGenerator implements HasPropsHandlers<FiberShadowGeneratorProps> {
    private propsHandlers: PropsHandler<FiberShadowGeneratorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberShadowGeneratorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberShadowGeneratorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberShadowGeneratorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "ShadowGenerator",
        "namespace": "@babylonjs/core/Lights/Shadows/shadowGenerator",
        "parameters": [
            {
                "name": "mapSize",
                "type": "number",
                "optional": false
            },
            {
                "name": "light",
                "type": "BabylonjsCoreIShadowLight",
                "optional": true
            },
            {
                "name": "usefulFloatFirst",
                "type": "boolean",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "delayCreation": true,
        "className": "FiberShadowGenerator"
    };
}

export class FiberEnvironmentHelperPropsHandler implements PropsHandler<FiberEnvironmentHelperProps> {
    getPropertyUpdates(oldProps: FiberEnvironmentHelperProps, newProps: FiberEnvironmentHelperProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreObservable<{ message?: string; exception?: any; }>' property (not coded) BabylonjsCoreEnvironmentHelper.onErrorObservable.
            { "name": "setMainColor", "type": "(color?: BabylonjsCoreColor3) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * The Environment helper class can be used to add a fully featuread none expensive background to your scene.
 * It includes by default a skybox and a ground relying on the BackgroundMaterial.
 * It also helps with the default setup of your imageProcessing configuration.
 *
 * This code has been generated
 */
export class FiberEnvironmentHelper implements HasPropsHandlers<FiberEnvironmentHelperProps> {
    private propsHandlers: PropsHandler<FiberEnvironmentHelperProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberEnvironmentHelperPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberEnvironmentHelperProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberEnvironmentHelperProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "EnvironmentHelper",
        "namespace": "@babylonjs/core/Helpers/environmentHelper",
        "parameters": [
            {
                "name": "options",
                "type": "Partial<BabylonjsCoreIEnvironmentHelperOptions>",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "isEnvironment": true,
        "className": "FiberEnvironmentHelper"
    };
}

export class FiberPhysicsImpostorPropsHandler implements PropsHandler<FiberPhysicsImpostorProps> {
    getPropertyUpdates(oldProps: FiberPhysicsImpostorProps, newProps: FiberPhysicsImpostorProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: '() => void' property (not coded) BabylonjsCorePhysicsImpostor.afterStep.
            // type: '() => void' property (not coded) BabylonjsCorePhysicsImpostor.beforeStep.
            { "name": "friction", "type": "number" },
            { "name": "mass", "type": "number" },
            // type: 'BabylonjsCoreIPhysicsEnabledObject' property (not coded) BabylonjsCorePhysicsImpostor.object.
            // type: '(e: { body: any; }) => void' property (not coded) BabylonjsCorePhysicsImpostor.onCollide.
            // type: '(collider: BabylonjsCorePhysicsImpostor, collidedWith: BabylonjsCorePhysicsImpostor) => void' property (not coded) BabylonjsCorePhysicsImpostor.onCollideEvent.
            // type: 'BabylonjsCorePhysicsImpostor' property (not coded) BabylonjsCorePhysicsImpostor.parent.
            // type: 'any' property (not coded) BabylonjsCorePhysicsImpostor.physicsBody.
            { "name": "positionIterations", "type": "number" },
            { "name": "pressure", "type": "number" },
            { "name": "restitution", "type": "number" },
            { "name": "segments", "type": "number" },
            { "name": "soft", "type": "boolean" },
            { "name": "stiffness", "type": "number" },
            { "name": "type", "type": "number" },
            { "name": "uniqueId", "type": "number" },
            { "name": "velocityIterations", "type": "number" },
            { "name": "setAngularVelocity", "type": "(velocity?: BabylonjsCoreVector3) => void", "method": true },
            { "name": "setDeltaPosition", "type": "(position?: BabylonjsCoreVector3) => void", "method": true },
            { "name": "setDeltaRotation", "type": "(rotation?: BabylonjsCoreQuaternion) => void", "method": true },
            { "name": "setLinearVelocity", "type": "(velocity?: BabylonjsCoreVector3) => void", "method": true },
            { "name": "setMass", "type": "(mass?: number) => void", "method": true },
            { "name": "setParam", "type": "(paramName?: string, value?: number) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Represents a physics imposter
 *
 * This code has been generated
 */
export class FiberPhysicsImpostor implements HasPropsHandlers<FiberPhysicsImpostorProps> {
    private propsHandlers: PropsHandler<FiberPhysicsImpostorProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberPhysicsImpostorPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberPhysicsImpostorProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberPhysicsImpostorProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "PhysicsImpostor",
        "namespace": "@babylonjs/core/Physics/physicsImpostor",
        "parameters": [
            {
                "name": "object",
                "type": "BabylonjsCoreIPhysicsEnabledObject",
                "optional": true
            },
            {
                "name": "type",
                "type": "number",
                "optional": false
            },
            {
                "name": "_options",
                "type": "BabylonjsCorePhysicsImpostorParameters",
                "optional": true
            },
            {
                "name": "_scene",
                "type": "BabylonjsCoreScene",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "delayCreation": true,
        "className": "FiberPhysicsImpostor"
    };
}

export class FiberVRExperienceHelperPropsHandler implements PropsHandler<FiberVRExperienceHelperProps> {
    getPropertyUpdates(oldProps: FiberVRExperienceHelperProps, newProps: FiberVRExperienceHelperProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.beforeRender.
            // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.completeVRInit.
            { "name": "displayGaze", "type": "boolean" },
            { "name": "displayLaserPointer", "type": "boolean" },
            // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.displayVRButton.
            { "name": "enableGazeEvenWhenNoPointerLock", "type": "boolean" },
            { "name": "exitVROnDoubleTap", "type": "boolean" },
            // type: 'BabylonjsCoreMesh' property (not coded) BabylonjsCoreVRExperienceHelper.gazeTrackerMesh.
            // type: '(mesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreVRExperienceHelper.meshSelectionPredicate.
            // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.moveButtonToBottomRight.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreVector3>' property (not coded) BabylonjsCoreVRExperienceHelper.onAfterCameraTeleport.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreOnAfterEnteringVRObservableEvent>' property (not coded) BabylonjsCoreVRExperienceHelper.onAfterEnteringVRObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreVector3>' property (not coded) BabylonjsCoreVRExperienceHelper.onBeforeCameraTeleport.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreWebVRController>' property (not coded) BabylonjsCoreVRExperienceHelper.onControllerMeshLoadedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreVRExperienceHelper>' property (not coded) BabylonjsCoreVRExperienceHelper.onEnteringVRObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreVRExperienceHelper>' property (not coded) BabylonjsCoreVRExperienceHelper.onExitingVRObservable.
            // type: 'BabylonjsCoreObservable<{ mesh: BabylonjsCoreAbstractMesh; controller: BabylonjsCoreWebVRController; }>' property (not coded) BabylonjsCoreVRExperienceHelper.onMeshSelectedWithController.
            // type: 'BabylonjsCoreObservable<BabylonjsCorePickingInfo>' property (not coded) BabylonjsCoreVRExperienceHelper.onNewMeshPicked.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreVRExperienceHelper.onNewMeshSelected.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreVRExperienceHelper.onSelectedMeshUnselected.
            // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.onVRDisplayChanged.
            // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.onVrDisplayPresentChange.
            { "name": "position", "type": "BabylonjsCoreVector3" },
            // type: '(mesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreVRExperienceHelper.raySelectionPredicate.
            { "name": "requestPointerLockOnFullScreen", "type": "boolean" },
            { "name": "teleportationEnabled", "type": "boolean" },
            // type: 'BabylonjsCoreMesh' property (not coded) BabylonjsCoreVRExperienceHelper.teleportationTarget.
            // type: 'any' property (not coded) BabylonjsCoreVRExperienceHelper.updateButtonVisibility.
            { "name": "updateControllerLaserColor", "type": "boolean" },
            { "name": "updateGazeTrackerColor", "type": "boolean" },
            { "name": "updateGazeTrackerScale", "type": "boolean" },
            // type: 'BabylonjsCoreVRExperienceHelperOptions' property (not coded) BabylonjsCoreVRExperienceHelper.webVROptions.
            // type: 'BabylonjsCoreWebXRDefaultExperience' property (not coded) BabylonjsCoreVRExperienceHelper.xr.
            { "name": "xrTestDone", "type": "boolean" },
            { "name": "setGazeColor", "type": "(color?: BabylonjsCoreColor3, pickedColor?: BabylonjsCoreColor3) => void", "method": true },
            { "name": "setLaserColor", "type": "(color?: BabylonjsCoreColor3, pickedColor?: BabylonjsCoreColor3) => void", "method": true },
            { "name": "setLaserLightingState", "type": "(enabled?: boolean) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * Helps to quickly add VR support to an existing scene.
 * See http://doc.babylonjs.com/how_to/webvr_helper
 *
 * This code has been generated
 */
export class FiberVRExperienceHelper implements HasPropsHandlers<FiberVRExperienceHelperProps> {
    private propsHandlers: PropsHandler<FiberVRExperienceHelperProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberVRExperienceHelperPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberVRExperienceHelperProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberVRExperienceHelperProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "VRExperienceHelper",
        "namespace": "@babylonjs/core/Cameras/VR/vrExperienceHelper",
        "parameters": [
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "webVROptions",
                "type": "BabylonjsCoreVRExperienceHelperOptions",
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "className": "FiberVRExperienceHelper"
    };
}

export class FiberDynamicTerrainPropsHandler implements PropsHandler<FiberDynamicTerrainProps> {
    getPropertyUpdates(oldProps: FiberDynamicTerrainProps, newProps: FiberDynamicTerrainProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreCamera' property (not coded) ExtensionsDynamicTerrain.camera.
            { "name": "cameraLODCorrection", "type": "number" },
            { "name": "computeNormals", "type": "boolean" },
            { "name": "initialLOD", "type": "number" },
            { "name": "isAlwaysVisible", "type": "boolean" },
            { "name": "LODLimits", "type": "number[]" },
            { "name": "LODNegativeX", "type": "boolean" },
            { "name": "LODNegativeZ", "type": "boolean" },
            { "name": "LODPositiveX", "type": "boolean" },
            { "name": "LODPositiveZ", "type": "boolean" },
            // type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapColors.
            // type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapData.
            // type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapNormals.
            { "name": "mapSubX", "type": "number" },
            { "name": "mapSubZ", "type": "number" },
            // type: 'BabylonjsCoreFloatArray' property (not coded) ExtensionsDynamicTerrain.mapUVs.
            { "name": "name", "type": "string" },
            { "name": "precomputeNormalsFromMap", "type": "boolean" },
            { "name": "refreshEveryFrame", "type": "boolean" },
            // type: '{ x: number; z: number; }' property (not coded) ExtensionsDynamicTerrain.shiftFromCamera.
            { "name": "subToleranceX", "type": "number" },
            { "name": "subToleranceZ", "type": "number" },
            { "name": "useCustomVertexFunction", "type": "boolean" },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

/**
 * This code has been generated
 */
export class FiberDynamicTerrain implements HasPropsHandlers<FiberDynamicTerrainProps> {
    private propsHandlers: PropsHandler<FiberDynamicTerrainProps>[];

    constructor() {
        this.propsHandlers = [
            new FiberDynamicTerrainPropsHandler()
        ];
    }

    getPropsHandlers(): PropsHandler<FiberDynamicTerrainProps>[] {
        return this.propsHandlers;
    }

    addPropsHandler(propHandler: PropsHandler<FiberDynamicTerrainProps>): void {
        this.propsHandlers.push(propHandler);
    }

    public static readonly CreateInfo = {
        "creationType": "Constructor",
        "libraryLocation": "DynamicTerrain",
        "namespace": "./extensions/DynamicTerrain",
        "parameters": [
            {
                "name": "name",
                "type": "string",
                "optional": false
            },
            {
                "name": "scene",
                "type": "BabylonjsCoreScene",
                "optional": false
            },
            {
                "name": "options",
                "type": [
                    {
                        "name": "terrainSub",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "mapData",
                        "type": "BabylonjsCoreFloatArray",
                        "optional": true
                    },
                    {
                        "name": "mapSubX",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "mapSubZ",
                        "type": "number",
                        "optional": true
                    },
                    {
                        "name": "mapUVs",
                        "type": "BabylonjsCoreFloatArray",
                        "optional": true
                    },
                    {
                        "name": "mapColors",
                        "type": "BabylonjsCoreFloatArray",
                        "optional": true
                    },
                    {
                        "name": "mapNormals",
                        "type": "BabylonjsCoreFloatArray",
                        "optional": true
                    },
                    {
                        "name": "invertSide",
                        "type": "boolean",
                        "optional": true
                    },
                    {
                        "name": "camera",
                        "type": "BabylonjsCoreCamera",
                        "optional": true
                    },
                    {
                        "name": "SPmapData",
                        "type": "number[][] | Float32Array[]",
                        "optional": true
                    },
                    {
                        "name": "sps",
                        "type": "BabylonjsCoreSolidParticleSystem",
                        "optional": true
                    },
                    {
                        "name": "SPcolorData",
                        "type": "number[][] | Float32Array[]",
                        "optional": true
                    },
                    {
                        "name": "SPuvData",
                        "type": "number[][] | Float32Array[]",
                        "optional": true
                    },
                    {
                        "name": "intializedCallback",
                        "type": "any",
                        "optional": true
                    }
                ],
                "optional": true
            }
        ]
    };
    public static readonly Metadata: CreatedInstanceMetadata = {
        "acceptsMaterials": true,
        "className": "FiberDynamicTerrain"
    };
}

export class FiberScenePropsHandler implements PropsHandler<FiberSceneProps> {
    getPropertyUpdates(oldProps: FiberSceneProps, newProps: FiberSceneProps): PropertyUpdate[] | null {
        const handlerProps: PropToUpdateType[] = [
            // type: 'BabylonjsCoreAbstractActionManager' property (not coded) BabylonjsCoreScene.actionManager.
            // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreScene.activeCamera.
            // type: 'BabylonjsCoreCamera[]' property (not coded) BabylonjsCoreScene.activeCameras.
            // type: '() => void' property (not coded) BabylonjsCoreScene.afterCameraRender.
            // type: '() => void' property (not coded) BabylonjsCoreScene.afterRender.
            { "name": "ambientColor", "type": "BabylonjsCoreColor3" },
            // type: 'BabylonjsCoreAnimationPropertiesOverride' property (not coded) BabylonjsCoreScene.animationPropertiesOverride.
            { "name": "animationsEnabled", "type": "boolean" },
            { "name": "animationTimeScale", "type": "number" },
            { "name": "autoClear", "type": "boolean" },
            { "name": "autoClearDepthAndStencil", "type": "boolean" },
            // type: '() => void' property (not coded) BabylonjsCoreScene.beforeCameraRender.
            // type: '() => void' property (not coded) BabylonjsCoreScene.beforeRender.
            { "name": "blockfreeActiveMeshesAndRenderingGroups", "type": "boolean" },
            { "name": "blockMaterialDirtyMechanism", "type": "boolean" },
            // type: 'BabylonjsCoreCamera' property (not coded) BabylonjsCoreScene.cameraToUseForPointers.
            { "name": "clearColor", "type": "BabylonjsCoreColor4" },
            // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane.
            // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane2.
            // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane3.
            // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane4.
            // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane5.
            // type: 'BabylonjsCorePlane' property (not coded) BabylonjsCoreScene.clipPlane6.
            { "name": "collisionsEnabled", "type": "boolean" },
            { "name": "constantlyUpdateMeshUnderPointer", "type": "boolean" },
            // type: '(mesh: BabylonjsCoreAbstractMesh, camera: BabylonjsCoreCamera) => BabylonjsCoreAbstractMesh' property (not coded) BabylonjsCoreScene.customLODSelector.
            // type: 'BabylonjsCoreRenderTargetTexture[]' property (not coded) BabylonjsCoreScene.customRenderTargets.
            { "name": "defaultCursor", "type": "string" },
            // type: 'BabylonjsCoreMaterial' property (not coded) BabylonjsCoreScene.defaultMaterial.
            // type: 'RegExp[]' property (not coded) BabylonjsCoreScene.disableOfflineSupportExceptionRules.
            { "name": "dispatchAllSubMeshesOfActiveMeshes", "type": "boolean" },
            { "name": "doNotHandleCursors", "type": "boolean" },
            { "name": "DoubleClickDelay", "type": "number" },
            { "name": "DragMovementThreshold", "type": "number" },
            { "name": "dumpNextRenderTargets", "type": "boolean" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreScene.environmentBRDFTexture.
            { "name": "environmentIntensity", "type": "number" },
            // type: 'BabylonjsCoreBaseTexture' property (not coded) BabylonjsCoreScene.environmentTexture.
            { "name": "ExclusiveDoubleClickMode", "type": "boolean" },
            { "name": "fogColor", "type": "BabylonjsCoreColor3" },
            { "name": "fogDensity", "type": "number" },
            { "name": "fogEnabled", "type": "boolean" },
            { "name": "fogEnd", "type": "number" },
            { "name": "fogMode", "type": "number" },
            { "name": "fogStart", "type": "number" },
            { "name": "forcePointsCloud", "type": "boolean" },
            { "name": "forceWireframe", "type": "boolean" },
            // type: 'any' property (not coded) BabylonjsCoreScene.geometriesByUniqueId.
            // type: '() => BabylonjsCoreISmartArrayLike<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreScene.getActiveMeshCandidates.
            // type: '(mesh: BabylonjsCoreAbstractMesh) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>' property (not coded) BabylonjsCoreScene.getActiveSubMeshCandidates.
            // type: '(mesh: BabylonjsCoreAbstractMesh, collider: BabylonjsCoreCollider) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>' property (not coded) BabylonjsCoreScene.getCollidingSubMeshCandidates.
            // type: '() => number' property (not coded) BabylonjsCoreScene.getDeterministicFrameTime.
            // type: '(mesh: BabylonjsCoreAbstractMesh, localRay: BabylonjsCoreRay) => BabylonjsCoreISmartArrayLike<BabylonjsCoreSubMesh>' property (not coded) BabylonjsCoreScene.getIntersectingSubMeshCandidates.
            { "name": "gravity", "type": "BabylonjsCoreVector3" },
            { "name": "hoverCursor", "type": "string" },
            // type: 'String[]' property (not coded) BabylonjsCoreScene.importedMeshesFiles.
            { "name": "lensFlaresEnabled", "type": "boolean" },
            { "name": "lightsEnabled", "type": "boolean" },
            { "name": "loadingPluginName", "type": "string" },
            { "name": "LongPressDelay", "type": "number" },
            // type: 'any' property (not coded) BabylonjsCoreScene.metadata.
            // type: 'BabylonjsCoreIOfflineProvider' property (not coded) BabylonjsCoreScene.offlineProvider.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onActiveCameraChanged.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onAfterActiveMeshesEvaluationObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onAfterAnimationsObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreScene.onAfterCameraRenderObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onAfterDrawPhaseObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onAfterParticlesRenderingObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreScene.onAfterRenderCameraObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>' property (not coded) BabylonjsCoreScene.onAfterRenderingGroupObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onAfterRenderObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onAfterRenderTargetsRenderObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onAfterStepObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onAnimationFileImportedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onBeforeActiveMeshesEvaluationObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onBeforeAnimationsObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreScene.onBeforeCameraRenderObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onBeforeDrawPhaseObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onBeforeParticlesRenderingObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreRenderingGroupInfo>' property (not coded) BabylonjsCoreScene.onBeforeRenderingGroupObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onBeforeRenderObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onBeforeRenderTargetsRenderObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onBeforeStepObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreScene.onCameraRemovedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onDataLoadedObservable.
            // type: '() => void' property (not coded) BabylonjsCoreScene.onDispose.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onDisposeObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreGeometry>' property (not coded) BabylonjsCoreScene.onGeometryRemovedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreKeyboardInfo>' property (not coded) BabylonjsCoreScene.onKeyboardObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreLight>' property (not coded) BabylonjsCoreScene.onLightRemovedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreMaterial>' property (not coded) BabylonjsCoreScene.onMaterialRemovedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreScene.onMeshImportedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreScene.onMeshRemovedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreCamera>' property (not coded) BabylonjsCoreScene.onNewCameraAddedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreGeometry>' property (not coded) BabylonjsCoreScene.onNewGeometryAddedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreLight>' property (not coded) BabylonjsCoreScene.onNewLightAddedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreMaterial>' property (not coded) BabylonjsCoreScene.onNewMaterialAddedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreAbstractMesh>' property (not coded) BabylonjsCoreScene.onNewMeshAddedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreSkeleton>' property (not coded) BabylonjsCoreScene.onNewSkeletonAddedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>' property (not coded) BabylonjsCoreScene.onNewTextureAddedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>' property (not coded) BabylonjsCoreScene.onNewTransformNodeAddedObservable.
            // type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void' property (not coded) BabylonjsCoreScene.onPointerDown.
            // type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void' property (not coded) BabylonjsCoreScene.onPointerMove.
            // type: 'BabylonjsCoreObservable<BabylonjsCorePointerInfo>' property (not coded) BabylonjsCoreScene.onPointerObservable.
            // type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo) => void' property (not coded) BabylonjsCoreScene.onPointerPick.
            // type: '(evt: PointerEvent, pickInfo: BabylonjsCorePickingInfo, type: BabylonjsCorePointerEventTypes) => void' property (not coded) BabylonjsCoreScene.onPointerUp.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreKeyboardInfoPre>' property (not coded) BabylonjsCoreScene.onPreKeyboardObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCorePointerInfoPre>' property (not coded) BabylonjsCoreScene.onPrePointerObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreScene>' property (not coded) BabylonjsCoreScene.onReadyObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreSkeleton>' property (not coded) BabylonjsCoreScene.onSkeletonRemovedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreBaseTexture>' property (not coded) BabylonjsCoreScene.onTextureRemovedObservable.
            // type: 'BabylonjsCoreObservable<BabylonjsCoreTransformNode>' property (not coded) BabylonjsCoreScene.onTransformNodeRemovedObservable.
            { "name": "particlesEnabled", "type": "boolean" },
            // type: '(Mesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreScene.pointerDownPredicate.
            // type: '(Mesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreScene.pointerMovePredicate.
            // type: '(Mesh: BabylonjsCoreAbstractMesh) => boolean' property (not coded) BabylonjsCoreScene.pointerUpPredicate.
            { "name": "pointerX", "type": "number" },
            { "name": "pointerY", "type": "number" },
            // type: 'BabylonjsCorePostProcess[]' property (not coded) BabylonjsCoreScene.postProcesses.
            { "name": "postProcessesEnabled", "type": "boolean" },
            // type: 'BabylonjsCorePostProcessManager' property (not coded) BabylonjsCoreScene.postProcessManager.
            { "name": "preventDefaultOnPointerDown", "type": "boolean" },
            { "name": "preventDefaultOnPointerUp", "type": "boolean" },
            { "name": "probesEnabled", "type": "boolean" },
            { "name": "proceduralTexturesEnabled", "type": "boolean" },
            { "name": "renderTargetsEnabled", "type": "boolean" },
            { "name": "requireLightSorting", "type": "boolean" },
            // type: 'any' property (not coded) BabylonjsCoreScene.reservedDataStore.
            { "name": "shadowsEnabled", "type": "boolean" },
            { "name": "skeletonsEnabled", "type": "boolean" },
            { "name": "skipFrustumClipping", "type": "boolean" },
            { "name": "spritesEnabled", "type": "boolean" },
            { "name": "texturesEnabled", "type": "boolean" },
            { "name": "useConstantAnimationDeltaTime", "type": "boolean" },
            { "name": "useDelayedTextureLoading", "type": "boolean" },
            { "name": "useRightHandedSystem", "type": "boolean" },
            { "name": "setActiveCameraByID", "type": "(id?: string) => BabylonjsCoreCamera", "method": true },
            { "name": "setActiveCameraByName", "type": "(name?: string) => BabylonjsCoreCamera", "method": true },
            { "name": "setPointerOverMesh", "type": "(mesh?: BabylonjsCoreAbstractMesh) => void", "method": true },
            { "name": "setRenderingAutoClearDepthStencil", "type": "(renderingGroupId?: number, autoClearDepthStencil?: boolean, depth?: boolean, stencil?: boolean) => void", "method": true },
            { "name": "setRenderingOrder", "type": "(renderingGroupId?: number, opaqueSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, alphaTestSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number, transparentSortCompareFn?: (a: BabylonjsCoreSubMesh, b: BabylonjsCoreSubMesh) => number) => void", "method": true },
            { "name": "setStepId", "type": "(newStepId?: number) => void", "method": true },
            { "name": "setTransformMatrix", "type": "(viewL?: BabylonjsCoreMatrix, projectionL?: BabylonjsCoreMatrix, viewR?: BabylonjsCoreMatrix, projectionR?: BabylonjsCoreMatrix) => void", "method": true },
        ]
        let updates: PropertyUpdate[] = getUpdatesFromProps(oldProps, newProps, handlerProps);
        return updates.length === 0 ? null : updates;
    }
}

export const ADTForMesh: string = 'ADTForMesh', ADTFullscreenUI: string = 'ADTFullscreenUI', AbstractButton3D: string = 'AbstractButton3D', AbstractMesh: string = 'AbstractMesh', AdvancedDynamicTexture: string = 'AdvancedDynamicTexture', AnaglyphArcRotateCamera: string = 'AnaglyphArcRotateCamera', AnaglyphFreeCamera: string = 'AnaglyphFreeCamera', AnaglyphGamepadCamera: string = 'AnaglyphGamepadCamera', AnaglyphUniversalCamera: string = 'AnaglyphUniversalCamera', ArcFollowCamera: string = 'ArcFollowCamera', ArcRotateCamera: string = 'ArcRotateCamera', BackgroundMaterial: string = 'BackgroundMaterial', BaseSlider: string = 'BaseSlider', BaseTexture: string = 'BaseTexture', Box: string = 'Box', Button: string = 'Button', Button3D: string = 'Button3D', Camera: string = 'Camera', Checkbox: string = 'Checkbox', ColorGradingTexture: string = 'ColorGradingTexture', ColorPicker: string = 'ColorPicker', Container: string = 'Container', Container3D: string = 'Container3D', Control: string = 'Control', Control3D: string = 'Control3D', CubeTexture: string = 'CubeTexture', CustomProceduralTexture: string = 'CustomProceduralTexture', Cylinder: string = 'Cylinder', CylinderPanel: string = 'CylinderPanel', DashedLines: string = 'DashedLines', Decal: string = 'Decal', DeviceOrientationCamera: string = 'DeviceOrientationCamera', DirectionalLight: string = 'DirectionalLight', Disc: string = 'Disc', DisplayGrid: string = 'DisplayGrid', DynamicTerrain: string = 'DynamicTerrain', DynamicTexture: string = 'DynamicTexture', EffectLayer: string = 'EffectLayer', Ellipse: string = 'Ellipse', EnvironmentHelper: string = 'EnvironmentHelper', EquiRectangularCubeTexture: string = 'EquiRectangularCubeTexture', ExtrudePolygon: string = 'ExtrudePolygon', ExtrudeShape: string = 'ExtrudeShape', ExtrudeShapeCustom: string = 'ExtrudeShapeCustom', FluentMaterial: string = 'FluentMaterial', FlyCamera: string = 'FlyCamera', FollowCamera: string = 'FollowCamera', FreeCamera: string = 'FreeCamera', GUI3DManager: string = 'GUI3DManager', GamepadCamera: string = 'GamepadCamera', GlowLayer: string = 'GlowLayer', Grid: string = 'Grid', Ground: string = 'Ground', GroundFromHeightMap: string = 'GroundFromHeightMap', HDRCubeTexture: string = 'HDRCubeTexture', HemisphericLight: string = 'HemisphericLight', HighlightLayer: string = 'HighlightLayer', HolographicButton: string = 'HolographicButton', HtmlElementTexture: string = 'HtmlElementTexture', IcoSphere: string = 'IcoSphere', Image: string = 'Image', ImageBasedSlider: string = 'ImageBasedSlider', ImageScrollBar: string = 'ImageScrollBar', InputPassword: string = 'InputPassword', InputText: string = 'InputText', Lathe: string = 'Lathe', Light: string = 'Light', Line: string = 'Line', LineSystem: string = 'LineSystem', Lines: string = 'Lines', Material: string = 'Material', Mesh: string = 'Mesh', MeshButton3D: string = 'MeshButton3D', MirrorTexture: string = 'MirrorTexture', Model: string = 'Model', MultiLine: string = 'MultiLine', MultiMaterial: string = 'MultiMaterial', MultiRenderTarget: string = 'MultiRenderTarget', MultiviewRenderTarget: string = 'MultiviewRenderTarget', Node: string = 'Node', NodeMaterial: string = 'NodeMaterial', NoiseProceduralTexture: string = 'NoiseProceduralTexture', PBRBaseMaterial: string = 'PBRBaseMaterial', PBRBaseSimpleMaterial: string = 'PBRBaseSimpleMaterial', PBRMaterial: string = 'PBRMaterial', PBRMetallicRoughnessMaterial: string = 'PBRMetallicRoughnessMaterial', PBRSpecularGlossinessMaterial: string = 'PBRSpecularGlossinessMaterial', PhysicsImpostor: string = 'PhysicsImpostor', Plane: string = 'Plane', PlanePanel: string = 'PlanePanel', PointLight: string = 'PointLight', Polygon: string = 'Polygon', Polyhedron: string = 'Polyhedron', ProceduralTexture: string = 'ProceduralTexture', PushMaterial: string = 'PushMaterial', RadioButton: string = 'RadioButton', RawCubeTexture: string = 'RawCubeTexture', RawTexture: string = 'RawTexture', RawTexture2DArray: string = 'RawTexture2DArray', RawTexture3D: string = 'RawTexture3D', Rectangle: string = 'Rectangle', RefractionTexture: string = 'RefractionTexture', RenderTargetTexture: string = 'RenderTargetTexture', Ribbon: string = 'Ribbon', ScatterPanel: string = 'ScatterPanel', ScrollBar: string = 'ScrollBar', ScrollViewer: string = 'ScrollViewer', SelectionPanel: string = 'SelectionPanel', ShaderMaterial: string = 'ShaderMaterial', ShadowGenerator: string = 'ShadowGenerator', ShadowLight: string = 'ShadowLight', Slider: string = 'Slider', Sphere: string = 'Sphere', SpherePanel: string = 'SpherePanel', SpotLight: string = 'SpotLight', StackPanel: string = 'StackPanel', StackPanel3D: string = 'StackPanel3D', StandardMaterial: string = 'StandardMaterial', StereoscopicArcRotateCamera: string = 'StereoscopicArcRotateCamera', StereoscopicFreeCamera: string = 'StereoscopicFreeCamera', StereoscopicGamepadCamera: string = 'StereoscopicGamepadCamera', StereoscopicUniversalCamera: string = 'StereoscopicUniversalCamera', TargetCamera: string = 'TargetCamera', TextBlock: string = 'TextBlock', Texture: string = 'Texture', TiledBox: string = 'TiledBox', TiledGround: string = 'TiledGround', TiledPlane: string = 'TiledPlane', Torus: string = 'Torus', TorusKnot: string = 'TorusKnot', TouchCamera: string = 'TouchCamera', TransformNode: string = 'TransformNode', Tube: string = 'Tube', UniversalCamera: string = 'UniversalCamera', VRDeviceOrientationArcRotateCamera: string = 'VRDeviceOrientationArcRotateCamera', VRDeviceOrientationFreeCamera: string = 'VRDeviceOrientationFreeCamera', VRDeviceOrientationGamepadCamera: string = 'VRDeviceOrientationGamepadCamera', VRExperienceHelper: string = 'VRExperienceHelper', VideoTexture: string = 'VideoTexture', VirtualJoysticksCamera: string = 'VirtualJoysticksCamera', VirtualKeyboard: string = 'VirtualKeyboard', VolumeBasedPanel: string = 'VolumeBasedPanel', WebVRFreeCamera: string = 'WebVRFreeCamera', WebXRCamera: string = 'WebXRCamera', _ScrollViewerWindow: string = '_ScrollViewerWindow';
const classesMap: object = {
    dynamicTerrain: ExtensionsDynamicTerrain, DynamicTerrain: ExtensionsDynamicTerrain,
    abstractScene: BabylonjsCoreAbstractScene, AbstractScene: BabylonjsCoreAbstractScene,
    node: BabylonjsCoreNode, Node: BabylonjsCoreNode,
    scene: BabylonjsCoreScene, Scene: BabylonjsCoreScene,
    camera: BabylonjsCoreCamera, Camera: BabylonjsCoreCamera,
    environmentHelper: BabylonjsCoreEnvironmentHelper, EnvironmentHelper: BabylonjsCoreEnvironmentHelper,
    effectLayer: BabylonjsCoreEffectLayer, EffectLayer: BabylonjsCoreEffectLayer,
    light: BabylonjsCoreLight, Light: BabylonjsCoreLight,
    material: BabylonjsCoreMaterial, Material: BabylonjsCoreMaterial,
    mesh: BabylonjsCoreMesh, Mesh: BabylonjsCoreMesh,
    meshBuilder: BabylonjsCoreMeshBuilder, MeshBuilder: BabylonjsCoreMeshBuilder,
    physicsImpostor: BabylonjsCorePhysicsImpostor, PhysicsImpostor: BabylonjsCorePhysicsImpostor,
    advancedDynamicTexture: BabylonjsGuiAdvancedDynamicTexture, AdvancedDynamicTexture: BabylonjsGuiAdvancedDynamicTexture,
    gui3DManager: BabylonjsGuiGUI3DManager, GUI3DManager: BabylonjsGuiGUI3DManager,
    vrExperienceHelper: BabylonjsCoreVRExperienceHelper, VRExperienceHelper: BabylonjsCoreVRExperienceHelper,
    shadowGenerator: BabylonjsCoreShadowGenerator, ShadowGenerator: BabylonjsCoreShadowGenerator,
    baseTexture: BabylonjsCoreBaseTexture, BaseTexture: BabylonjsCoreBaseTexture,
    control: BabylonjsGuiControl, Control: BabylonjsGuiControl,
    textBlock: BabylonjsGuiTextBlock, TextBlock: BabylonjsGuiTextBlock,
    control3D: BabylonjsGuiControl3D, Control3D: BabylonjsGuiControl3D,
    transformNode: BabylonjsCoreTransformNode, TransformNode: BabylonjsCoreTransformNode,
    abstractMesh: BabylonjsCoreAbstractMesh, AbstractMesh: BabylonjsCoreAbstractMesh,
    renderTargetTexture: BabylonjsCoreRenderTargetTexture, RenderTargetTexture: BabylonjsCoreRenderTargetTexture,
    targetCamera: BabylonjsCoreTargetCamera, TargetCamera: BabylonjsCoreTargetCamera,
    freeCamera: BabylonjsCoreFreeCamera, FreeCamera: BabylonjsCoreFreeCamera,
    touchCamera: BabylonjsCoreTouchCamera, TouchCamera: BabylonjsCoreTouchCamera,
    universalCamera: BabylonjsCoreUniversalCamera, UniversalCamera: BabylonjsCoreUniversalCamera,
    gamepadCamera: BabylonjsCoreGamepadCamera, GamepadCamera: BabylonjsCoreGamepadCamera,
    anaglyphGamepadCamera: BabylonjsCoreAnaglyphGamepadCamera, AnaglyphGamepadCamera: BabylonjsCoreAnaglyphGamepadCamera,
    stereoscopicGamepadCamera: BabylonjsCoreStereoscopicGamepadCamera, StereoscopicGamepadCamera: BabylonjsCoreStereoscopicGamepadCamera,
    anaglyphUniversalCamera: BabylonjsCoreAnaglyphUniversalCamera, AnaglyphUniversalCamera: BabylonjsCoreAnaglyphUniversalCamera,
    stereoscopicUniversalCamera: BabylonjsCoreStereoscopicUniversalCamera, StereoscopicUniversalCamera: BabylonjsCoreStereoscopicUniversalCamera,
    deviceOrientationCamera: BabylonjsCoreDeviceOrientationCamera, DeviceOrientationCamera: BabylonjsCoreDeviceOrientationCamera,
    vrDeviceOrientationFreeCamera: BabylonjsCoreVRDeviceOrientationFreeCamera, VRDeviceOrientationFreeCamera: BabylonjsCoreVRDeviceOrientationFreeCamera,
    vrDeviceOrientationGamepadCamera: BabylonjsCoreVRDeviceOrientationGamepadCamera, VRDeviceOrientationGamepadCamera: BabylonjsCoreVRDeviceOrientationGamepadCamera,
    anaglyphFreeCamera: BabylonjsCoreAnaglyphFreeCamera, AnaglyphFreeCamera: BabylonjsCoreAnaglyphFreeCamera,
    stereoscopicFreeCamera: BabylonjsCoreStereoscopicFreeCamera, StereoscopicFreeCamera: BabylonjsCoreStereoscopicFreeCamera,
    virtualJoysticksCamera: BabylonjsCoreVirtualJoysticksCamera, VirtualJoysticksCamera: BabylonjsCoreVirtualJoysticksCamera,
    webVrFreeCamera: BabylonjsCoreWebVRFreeCamera, WebVRFreeCamera: BabylonjsCoreWebVRFreeCamera,
    webXrCamera: BabylonjsCoreWebXRCamera, WebXRCamera: BabylonjsCoreWebXRCamera,
    arcRotateCamera: BabylonjsCoreArcRotateCamera, ArcRotateCamera: BabylonjsCoreArcRotateCamera,
    anaglyphArcRotateCamera: BabylonjsCoreAnaglyphArcRotateCamera, AnaglyphArcRotateCamera: BabylonjsCoreAnaglyphArcRotateCamera,
    stereoscopicArcRotateCamera: BabylonjsCoreStereoscopicArcRotateCamera, StereoscopicArcRotateCamera: BabylonjsCoreStereoscopicArcRotateCamera,
    vrDeviceOrientationArcRotateCamera: BabylonjsCoreVRDeviceOrientationArcRotateCamera, VRDeviceOrientationArcRotateCamera: BabylonjsCoreVRDeviceOrientationArcRotateCamera,
    flyCamera: BabylonjsCoreFlyCamera, FlyCamera: BabylonjsCoreFlyCamera,
    followCamera: BabylonjsCoreFollowCamera, FollowCamera: BabylonjsCoreFollowCamera,
    arcFollowCamera: BabylonjsCoreArcFollowCamera, ArcFollowCamera: BabylonjsCoreArcFollowCamera,
    shaderMaterial: BabylonjsCoreShaderMaterial, ShaderMaterial: BabylonjsCoreShaderMaterial,
    texture: BabylonjsCoreTexture, Texture: BabylonjsCoreTexture,
    multiMaterial: BabylonjsCoreMultiMaterial, MultiMaterial: BabylonjsCoreMultiMaterial,
    pushMaterial: BabylonjsCorePushMaterial, PushMaterial: BabylonjsCorePushMaterial,
    standardMaterial: BabylonjsCoreStandardMaterial, StandardMaterial: BabylonjsCoreStandardMaterial,
    backgroundMaterial: BabylonjsCoreBackgroundMaterial, BackgroundMaterial: BabylonjsCoreBackgroundMaterial,
    shadowLight: BabylonjsCoreShadowLight, ShadowLight: BabylonjsCoreShadowLight,
    pbrBaseMaterial: BabylonjsCorePBRBaseMaterial, PBRBaseMaterial: BabylonjsCorePBRBaseMaterial,
    pbrBaseSimpleMaterial: BabylonjsCorePBRBaseSimpleMaterial, PBRBaseSimpleMaterial: BabylonjsCorePBRBaseSimpleMaterial,
    pbrMetallicRoughnessMaterial: BabylonjsCorePBRMetallicRoughnessMaterial, PBRMetallicRoughnessMaterial: BabylonjsCorePBRMetallicRoughnessMaterial,
    pbrSpecularGlossinessMaterial: BabylonjsCorePBRSpecularGlossinessMaterial, PBRSpecularGlossinessMaterial: BabylonjsCorePBRSpecularGlossinessMaterial,
    pbrMaterial: BabylonjsCorePBRMaterial, PBRMaterial: BabylonjsCorePBRMaterial,
    nodeMaterial: BabylonjsCoreNodeMaterial, NodeMaterial: BabylonjsCoreNodeMaterial,
    fluentMaterial: BabylonjsGuiFluentMaterial, FluentMaterial: BabylonjsGuiFluentMaterial,
    directionalLight: BabylonjsCoreDirectionalLight, DirectionalLight: BabylonjsCoreDirectionalLight,
    pointLight: BabylonjsCorePointLight, PointLight: BabylonjsCorePointLight,
    spotLight: BabylonjsCoreSpotLight, SpotLight: BabylonjsCoreSpotLight,
    hemisphericLight: BabylonjsCoreHemisphericLight, HemisphericLight: BabylonjsCoreHemisphericLight,
    container: BabylonjsGuiContainer, Container: BabylonjsGuiContainer,
    rectangle: BabylonjsGuiRectangle, Rectangle: BabylonjsGuiRectangle,
    'babylon-button': BabylonjsGuiButton, Button: BabylonjsGuiButton,
    selectionPanel: BabylonjsGuiSelectionPanel, SelectionPanel: BabylonjsGuiSelectionPanel,
    scrollViewer: BabylonjsGuiScrollViewer, ScrollViewer: BabylonjsGuiScrollViewer,
    'babylon-image': BabylonjsGuiImage, Image: BabylonjsGuiImage,
    stackPanel: BabylonjsGuiStackPanel, StackPanel: BabylonjsGuiStackPanel,
    virtualKeyboard: BabylonjsGuiVirtualKeyboard, VirtualKeyboard: BabylonjsGuiVirtualKeyboard,
    'babylon-ellipse': BabylonjsGuiEllipse, Ellipse: BabylonjsGuiEllipse,
    grid: BabylonjsGuiGrid, Grid: BabylonjsGuiGrid,
    scrollViewerWindow: BabylonjsGui_ScrollViewerWindow, _ScrollViewerWindow: BabylonjsGui_ScrollViewerWindow,
    checkbox: BabylonjsGuiCheckbox, Checkbox: BabylonjsGuiCheckbox,
    colorPicker: BabylonjsGuiColorPicker, ColorPicker: BabylonjsGuiColorPicker,
    inputText: BabylonjsGuiInputText, InputText: BabylonjsGuiInputText,
    inputPassword: BabylonjsGuiInputPassword, InputPassword: BabylonjsGuiInputPassword,
    'babylon-line': BabylonjsGuiLine, Line: BabylonjsGuiLine,
    multiLine: BabylonjsGuiMultiLine, MultiLine: BabylonjsGuiMultiLine,
    radioButton: BabylonjsGuiRadioButton, RadioButton: BabylonjsGuiRadioButton,
    baseSlider: BabylonjsGuiBaseSlider, BaseSlider: BabylonjsGuiBaseSlider,
    scrollBar: BabylonjsGuiScrollBar, ScrollBar: BabylonjsGuiScrollBar,
    imageScrollBar: BabylonjsGuiImageScrollBar, ImageScrollBar: BabylonjsGuiImageScrollBar,
    slider: BabylonjsGuiSlider, Slider: BabylonjsGuiSlider,
    imageBasedSlider: BabylonjsGuiImageBasedSlider, ImageBasedSlider: BabylonjsGuiImageBasedSlider,
    displayGrid: BabylonjsGuiDisplayGrid, DisplayGrid: BabylonjsGuiDisplayGrid,
    container3D: BabylonjsGuiContainer3D, Container3D: BabylonjsGuiContainer3D,
    volumeBasedPanel: BabylonjsGuiVolumeBasedPanel, VolumeBasedPanel: BabylonjsGuiVolumeBasedPanel,
    cylinderPanel: BabylonjsGuiCylinderPanel, CylinderPanel: BabylonjsGuiCylinderPanel,
    planePanel: BabylonjsGuiPlanePanel, PlanePanel: BabylonjsGuiPlanePanel,
    scatterPanel: BabylonjsGuiScatterPanel, ScatterPanel: BabylonjsGuiScatterPanel,
    spherePanel: BabylonjsGuiSpherePanel, SpherePanel: BabylonjsGuiSpherePanel,
    stackPanel3D: BabylonjsGuiStackPanel3D, StackPanel3D: BabylonjsGuiStackPanel3D,
    abstractButton3D: BabylonjsGuiAbstractButton3D, AbstractButton3D: BabylonjsGuiAbstractButton3D,
    button3D: BabylonjsGuiButton3D, Button3D: BabylonjsGuiButton3D,
    holographicButton: BabylonjsGuiHolographicButton, HolographicButton: BabylonjsGuiHolographicButton,
    meshButton3D: BabylonjsGuiMeshButton3D, MeshButton3D: BabylonjsGuiMeshButton3D,
    glowLayer: BabylonjsCoreGlowLayer, GlowLayer: BabylonjsCoreGlowLayer,
    highlightLayer: BabylonjsCoreHighlightLayer, HighlightLayer: BabylonjsCoreHighlightLayer,
    cubeTexture: BabylonjsCoreCubeTexture, CubeTexture: BabylonjsCoreCubeTexture,
    rawCubeTexture: BabylonjsCoreRawCubeTexture, RawCubeTexture: BabylonjsCoreRawCubeTexture,
    rawTexture: BabylonjsCoreRawTexture, RawTexture: BabylonjsCoreRawTexture,
    proceduralTexture: BabylonjsCoreProceduralTexture, ProceduralTexture: BabylonjsCoreProceduralTexture,
    customProceduralTexture: BabylonjsCoreCustomProceduralTexture, CustomProceduralTexture: BabylonjsCoreCustomProceduralTexture,
    noiseProceduralTexture: BabylonjsCoreNoiseProceduralTexture, NoiseProceduralTexture: BabylonjsCoreNoiseProceduralTexture,
    mirrorTexture: BabylonjsCoreMirrorTexture, MirrorTexture: BabylonjsCoreMirrorTexture,
    multiRenderTarget: BabylonjsCoreMultiRenderTarget, MultiRenderTarget: BabylonjsCoreMultiRenderTarget,
    refractionTexture: BabylonjsCoreRefractionTexture, RefractionTexture: BabylonjsCoreRefractionTexture,
    multiviewRenderTarget: BabylonjsCoreMultiviewRenderTarget, MultiviewRenderTarget: BabylonjsCoreMultiviewRenderTarget,
    videoTexture: BabylonjsCoreVideoTexture, VideoTexture: BabylonjsCoreVideoTexture,
    dynamicTexture: BabylonjsCoreDynamicTexture, DynamicTexture: BabylonjsCoreDynamicTexture,
    rawTexture3D: BabylonjsCoreRawTexture3D, RawTexture3D: BabylonjsCoreRawTexture3D,
    rawTexture2DArray: BabylonjsCoreRawTexture2DArray, RawTexture2DArray: BabylonjsCoreRawTexture2DArray,
    colorGradingTexture: BabylonjsCoreColorGradingTexture, ColorGradingTexture: BabylonjsCoreColorGradingTexture,
    equiRectangularCubeTexture: BabylonjsCoreEquiRectangularCubeTexture, EquiRectangularCubeTexture: BabylonjsCoreEquiRectangularCubeTexture,
    hdrCubeTexture: BabylonjsCoreHDRCubeTexture, HDRCubeTexture: BabylonjsCoreHDRCubeTexture,
    htmlElementTexture: BabylonjsCoreHtmlElementTexture, HtmlElementTexture: BabylonjsCoreHtmlElementTexture
};
export const intrinsicClassMap: object = {
    dynamicTerrain: 'DynamicTerrain',
    abstractScene: 'AbstractScene',
    node: 'Node',
    scene: 'Scene',
    camera: 'Camera',
    environmentHelper: 'EnvironmentHelper',
    effectLayer: 'EffectLayer',
    light: 'Light',
    material: 'Material',
    mesh: 'Mesh',
    meshBuilder: 'MeshBuilder',
    physicsImpostor: 'PhysicsImpostor',
    advancedDynamicTexture: 'AdvancedDynamicTexture',
    gui3DManager: 'GUI3DManager',
    vrExperienceHelper: 'VRExperienceHelper',
    shadowGenerator: 'ShadowGenerator',
    baseTexture: 'BaseTexture',
    control: 'Control',
    textBlock: 'TextBlock',
    control3D: 'Control3D',
    transformNode: 'TransformNode',
    abstractMesh: 'AbstractMesh',
    renderTargetTexture: 'RenderTargetTexture',
    targetCamera: 'TargetCamera',
    freeCamera: 'FreeCamera',
    touchCamera: 'TouchCamera',
    universalCamera: 'UniversalCamera',
    gamepadCamera: 'GamepadCamera',
    anaglyphGamepadCamera: 'AnaglyphGamepadCamera',
    stereoscopicGamepadCamera: 'StereoscopicGamepadCamera',
    anaglyphUniversalCamera: 'AnaglyphUniversalCamera',
    stereoscopicUniversalCamera: 'StereoscopicUniversalCamera',
    deviceOrientationCamera: 'DeviceOrientationCamera',
    vrDeviceOrientationFreeCamera: 'VRDeviceOrientationFreeCamera',
    vrDeviceOrientationGamepadCamera: 'VRDeviceOrientationGamepadCamera',
    anaglyphFreeCamera: 'AnaglyphFreeCamera',
    stereoscopicFreeCamera: 'StereoscopicFreeCamera',
    virtualJoysticksCamera: 'VirtualJoysticksCamera',
    webVrFreeCamera: 'WebVRFreeCamera',
    webXrCamera: 'WebXRCamera',
    arcRotateCamera: 'ArcRotateCamera',
    anaglyphArcRotateCamera: 'AnaglyphArcRotateCamera',
    stereoscopicArcRotateCamera: 'StereoscopicArcRotateCamera',
    vrDeviceOrientationArcRotateCamera: 'VRDeviceOrientationArcRotateCamera',
    flyCamera: 'FlyCamera',
    followCamera: 'FollowCamera',
    arcFollowCamera: 'ArcFollowCamera',
    shaderMaterial: 'ShaderMaterial',
    texture: 'Texture',
    multiMaterial: 'MultiMaterial',
    pushMaterial: 'PushMaterial',
    standardMaterial: 'StandardMaterial',
    backgroundMaterial: 'BackgroundMaterial',
    shadowLight: 'ShadowLight',
    pbrBaseMaterial: 'PBRBaseMaterial',
    pbrBaseSimpleMaterial: 'PBRBaseSimpleMaterial',
    pbrMetallicRoughnessMaterial: 'PBRMetallicRoughnessMaterial',
    pbrSpecularGlossinessMaterial: 'PBRSpecularGlossinessMaterial',
    pbrMaterial: 'PBRMaterial',
    nodeMaterial: 'NodeMaterial',
    fluentMaterial: 'FluentMaterial',
    directionalLight: 'DirectionalLight',
    pointLight: 'PointLight',
    spotLight: 'SpotLight',
    hemisphericLight: 'HemisphericLight',
    container: 'Container',
    rectangle: 'Rectangle',
    'babylon-button': 'Button',
    selectionPanel: 'SelectionPanel',
    scrollViewer: 'ScrollViewer',
    'babylon-image': 'Image',
    stackPanel: 'StackPanel',
    virtualKeyboard: 'VirtualKeyboard',
    'babylon-ellipse': 'Ellipse',
    grid: 'Grid',
    scrollViewerWindow: '_ScrollViewerWindow',
    checkbox: 'Checkbox',
    colorPicker: 'ColorPicker',
    inputText: 'InputText',
    inputPassword: 'InputPassword',
    'babylon-line': 'Line',
    multiLine: 'MultiLine',
    radioButton: 'RadioButton',
    baseSlider: 'BaseSlider',
    scrollBar: 'ScrollBar',
    imageScrollBar: 'ImageScrollBar',
    slider: 'Slider',
    imageBasedSlider: 'ImageBasedSlider',
    displayGrid: 'DisplayGrid',
    container3D: 'Container3D',
    volumeBasedPanel: 'VolumeBasedPanel',
    cylinderPanel: 'CylinderPanel',
    planePanel: 'PlanePanel',
    scatterPanel: 'ScatterPanel',
    spherePanel: 'SpherePanel',
    stackPanel3D: 'StackPanel3D',
    abstractButton3D: 'AbstractButton3D',
    button3D: 'Button3D',
    holographicButton: 'HolographicButton',
    meshButton3D: 'MeshButton3D',
    glowLayer: 'GlowLayer',
    highlightLayer: 'HighlightLayer',
    cubeTexture: 'CubeTexture',
    rawCubeTexture: 'RawCubeTexture',
    rawTexture: 'RawTexture',
    proceduralTexture: 'ProceduralTexture',
    customProceduralTexture: 'CustomProceduralTexture',
    noiseProceduralTexture: 'NoiseProceduralTexture',
    mirrorTexture: 'MirrorTexture',
    multiRenderTarget: 'MultiRenderTarget',
    refractionTexture: 'RefractionTexture',
    multiviewRenderTarget: 'MultiviewRenderTarget',
    videoTexture: 'VideoTexture',
    dynamicTexture: 'DynamicTexture',
    rawTexture3D: 'RawTexture3D',
    rawTexture2DArray: 'RawTexture2DArray',
    colorGradingTexture: 'ColorGradingTexture',
    equiRectangularCubeTexture: 'EquiRectangularCubeTexture',
    hdrCubeTexture: 'HDRCubeTexture',
    htmlElementTexture: 'HtmlElementTexture',
    adtForMesh: 'ADTForMesh',
    adtFullscreenUi: 'ADTFullscreenUI',
    box: 'Box',
    cylinder: 'Cylinder',
    dashedLines: 'DashedLines',
    decal: 'Decal',
    disc: 'Disc',
    extrudePolygon: 'ExtrudePolygon',
    extrudeShape: 'ExtrudeShape',
    extrudeShapeCustom: 'ExtrudeShapeCustom',
    ground: 'Ground',
    groundFromHeightMap: 'GroundFromHeightMap',
    icoSphere: 'IcoSphere',
    lathe: 'Lathe',
    lines: 'Lines',
    lineSystem: 'LineSystem',
    plane: 'Plane',
    'babylon-polygon': 'Polygon',
    polyhedron: 'Polyhedron',
    ribbon: 'Ribbon',
    sphere: 'Sphere',
    tiledBox: 'TiledBox',
    tiledGround: 'TiledGround',
    tiledPlane: 'TiledPlane',
    torus: 'Torus',
    torusKnot: 'TorusKnot',
    tube: 'Tube'
};

export function babylonClassFactory(importAlias: string): any {
    return (classesMap as any)[importAlias];
}
