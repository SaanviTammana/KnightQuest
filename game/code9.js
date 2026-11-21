gdjs.winCode = {};
gdjs.winCode.localVariables = [];
gdjs.winCode.idToCallbackMap = new Map();
gdjs.winCode.GDNewSprite2Objects1= [];
gdjs.winCode.GDNewSprite2Objects2= [];
gdjs.winCode.GDNewText3Objects1= [];
gdjs.winCode.GDNewText3Objects2= [];
gdjs.winCode.GDNewTextObjects1= [];
gdjs.winCode.GDNewTextObjects2= [];
gdjs.winCode.GDNewSpriteObjects1= [];
gdjs.winCode.GDNewSpriteObjects2= [];
gdjs.winCode.GDfloorObjects1= [];
gdjs.winCode.GDfloorObjects2= [];
gdjs.winCode.GDdoors2Objects1= [];
gdjs.winCode.GDdoors2Objects2= [];
gdjs.winCode.GDswordObjects1= [];
gdjs.winCode.GDswordObjects2= [];
gdjs.winCode.GDSpawnObjects1= [];
gdjs.winCode.GDSpawnObjects2= [];
gdjs.winCode.GDEnemyObjects1= [];
gdjs.winCode.GDEnemyObjects2= [];
gdjs.winCode.GDhealth_9595dropsObjects1= [];
gdjs.winCode.GDhealth_9595dropsObjects2= [];
gdjs.winCode.GDhealth_9595barObjects1= [];
gdjs.winCode.GDhealth_9595barObjects2= [];
gdjs.winCode.GDHealthObjects1= [];
gdjs.winCode.GDHealthObjects2= [];
gdjs.winCode.GDGreenButtonObjects1= [];
gdjs.winCode.GDGreenButtonObjects2= [];
gdjs.winCode.GDNewSprite4Objects1= [];
gdjs.winCode.GDNewSprite4Objects2= [];
gdjs.winCode.GDNewText2Objects1= [];
gdjs.winCode.GDNewText2Objects2= [];
gdjs.winCode.GDBoss_9595HealthObjects1= [];
gdjs.winCode.GDBoss_9595HealthObjects2= [];


gdjs.winCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.winCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.winCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.winCode.GDGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.winCode.GDGreenButtonObjects1[k] = gdjs.winCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.winCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Menu");
}
}

}


};

gdjs.winCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.winCode.GDNewSprite2Objects1.length = 0;
gdjs.winCode.GDNewSprite2Objects2.length = 0;
gdjs.winCode.GDNewText3Objects1.length = 0;
gdjs.winCode.GDNewText3Objects2.length = 0;
gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDfloorObjects1.length = 0;
gdjs.winCode.GDfloorObjects2.length = 0;
gdjs.winCode.GDdoors2Objects1.length = 0;
gdjs.winCode.GDdoors2Objects2.length = 0;
gdjs.winCode.GDswordObjects1.length = 0;
gdjs.winCode.GDswordObjects2.length = 0;
gdjs.winCode.GDSpawnObjects1.length = 0;
gdjs.winCode.GDSpawnObjects2.length = 0;
gdjs.winCode.GDEnemyObjects1.length = 0;
gdjs.winCode.GDEnemyObjects2.length = 0;
gdjs.winCode.GDhealth_9595dropsObjects1.length = 0;
gdjs.winCode.GDhealth_9595dropsObjects2.length = 0;
gdjs.winCode.GDhealth_9595barObjects1.length = 0;
gdjs.winCode.GDhealth_9595barObjects2.length = 0;
gdjs.winCode.GDHealthObjects1.length = 0;
gdjs.winCode.GDHealthObjects2.length = 0;
gdjs.winCode.GDGreenButtonObjects1.length = 0;
gdjs.winCode.GDGreenButtonObjects2.length = 0;
gdjs.winCode.GDNewSprite4Objects1.length = 0;
gdjs.winCode.GDNewSprite4Objects2.length = 0;
gdjs.winCode.GDNewText2Objects1.length = 0;
gdjs.winCode.GDNewText2Objects2.length = 0;
gdjs.winCode.GDBoss_9595HealthObjects1.length = 0;
gdjs.winCode.GDBoss_9595HealthObjects2.length = 0;

gdjs.winCode.eventsList0(runtimeScene);
gdjs.winCode.GDNewSprite2Objects1.length = 0;
gdjs.winCode.GDNewSprite2Objects2.length = 0;
gdjs.winCode.GDNewText3Objects1.length = 0;
gdjs.winCode.GDNewText3Objects2.length = 0;
gdjs.winCode.GDNewTextObjects1.length = 0;
gdjs.winCode.GDNewTextObjects2.length = 0;
gdjs.winCode.GDNewSpriteObjects1.length = 0;
gdjs.winCode.GDNewSpriteObjects2.length = 0;
gdjs.winCode.GDfloorObjects1.length = 0;
gdjs.winCode.GDfloorObjects2.length = 0;
gdjs.winCode.GDdoors2Objects1.length = 0;
gdjs.winCode.GDdoors2Objects2.length = 0;
gdjs.winCode.GDswordObjects1.length = 0;
gdjs.winCode.GDswordObjects2.length = 0;
gdjs.winCode.GDSpawnObjects1.length = 0;
gdjs.winCode.GDSpawnObjects2.length = 0;
gdjs.winCode.GDEnemyObjects1.length = 0;
gdjs.winCode.GDEnemyObjects2.length = 0;
gdjs.winCode.GDhealth_9595dropsObjects1.length = 0;
gdjs.winCode.GDhealth_9595dropsObjects2.length = 0;
gdjs.winCode.GDhealth_9595barObjects1.length = 0;
gdjs.winCode.GDhealth_9595barObjects2.length = 0;
gdjs.winCode.GDHealthObjects1.length = 0;
gdjs.winCode.GDHealthObjects2.length = 0;
gdjs.winCode.GDGreenButtonObjects1.length = 0;
gdjs.winCode.GDGreenButtonObjects2.length = 0;
gdjs.winCode.GDNewSprite4Objects1.length = 0;
gdjs.winCode.GDNewSprite4Objects2.length = 0;
gdjs.winCode.GDNewText2Objects1.length = 0;
gdjs.winCode.GDNewText2Objects2.length = 0;
gdjs.winCode.GDBoss_9595HealthObjects1.length = 0;
gdjs.winCode.GDBoss_9595HealthObjects2.length = 0;


return;

}

gdjs['winCode'] = gdjs.winCode;
