gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.idToCallbackMap = new Map();
gdjs.game_32overCode.GDNewTextObjects1= [];
gdjs.game_32overCode.GDNewTextObjects2= [];
gdjs.game_32overCode.GDNewSprite3Objects1= [];
gdjs.game_32overCode.GDNewSprite3Objects2= [];
gdjs.game_32overCode.GDNewSpriteObjects1= [];
gdjs.game_32overCode.GDNewSpriteObjects2= [];
gdjs.game_32overCode.GDfloorObjects1= [];
gdjs.game_32overCode.GDfloorObjects2= [];
gdjs.game_32overCode.GDdoors2Objects1= [];
gdjs.game_32overCode.GDdoors2Objects2= [];
gdjs.game_32overCode.GDswordObjects1= [];
gdjs.game_32overCode.GDswordObjects2= [];
gdjs.game_32overCode.GDSpawnObjects1= [];
gdjs.game_32overCode.GDSpawnObjects2= [];
gdjs.game_32overCode.GDEnemyObjects1= [];
gdjs.game_32overCode.GDEnemyObjects2= [];
gdjs.game_32overCode.GDhealth_9595dropsObjects1= [];
gdjs.game_32overCode.GDhealth_9595dropsObjects2= [];
gdjs.game_32overCode.GDhealth_9595barObjects1= [];
gdjs.game_32overCode.GDhealth_9595barObjects2= [];
gdjs.game_32overCode.GDHealthObjects1= [];
gdjs.game_32overCode.GDHealthObjects2= [];
gdjs.game_32overCode.GDGreenButtonObjects1= [];
gdjs.game_32overCode.GDGreenButtonObjects2= [];
gdjs.game_32overCode.GDNewSprite4Objects1= [];
gdjs.game_32overCode.GDNewSprite4Objects2= [];
gdjs.game_32overCode.GDNewText2Objects1= [];
gdjs.game_32overCode.GDNewText2Objects2= [];
gdjs.game_32overCode.GDBoss_9595HealthObjects1= [];
gdjs.game_32overCode.GDBoss_9595HealthObjects2= [];


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.game_32overCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDGreenButtonObjects1[k] = gdjs.game_32overCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Menu");
}
}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDNewTextObjects1.length = 0;
gdjs.game_32overCode.GDNewTextObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;
gdjs.game_32overCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32overCode.GDNewSpriteObjects2.length = 0;
gdjs.game_32overCode.GDfloorObjects1.length = 0;
gdjs.game_32overCode.GDfloorObjects2.length = 0;
gdjs.game_32overCode.GDdoors2Objects1.length = 0;
gdjs.game_32overCode.GDdoors2Objects2.length = 0;
gdjs.game_32overCode.GDswordObjects1.length = 0;
gdjs.game_32overCode.GDswordObjects2.length = 0;
gdjs.game_32overCode.GDSpawnObjects1.length = 0;
gdjs.game_32overCode.GDSpawnObjects2.length = 0;
gdjs.game_32overCode.GDEnemyObjects1.length = 0;
gdjs.game_32overCode.GDEnemyObjects2.length = 0;
gdjs.game_32overCode.GDhealth_9595dropsObjects1.length = 0;
gdjs.game_32overCode.GDhealth_9595dropsObjects2.length = 0;
gdjs.game_32overCode.GDhealth_9595barObjects1.length = 0;
gdjs.game_32overCode.GDhealth_9595barObjects2.length = 0;
gdjs.game_32overCode.GDHealthObjects1.length = 0;
gdjs.game_32overCode.GDHealthObjects2.length = 0;
gdjs.game_32overCode.GDGreenButtonObjects1.length = 0;
gdjs.game_32overCode.GDGreenButtonObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite4Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite4Objects2.length = 0;
gdjs.game_32overCode.GDNewText2Objects1.length = 0;
gdjs.game_32overCode.GDNewText2Objects2.length = 0;
gdjs.game_32overCode.GDBoss_9595HealthObjects1.length = 0;
gdjs.game_32overCode.GDBoss_9595HealthObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDNewTextObjects1.length = 0;
gdjs.game_32overCode.GDNewTextObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite3Objects2.length = 0;
gdjs.game_32overCode.GDNewSpriteObjects1.length = 0;
gdjs.game_32overCode.GDNewSpriteObjects2.length = 0;
gdjs.game_32overCode.GDfloorObjects1.length = 0;
gdjs.game_32overCode.GDfloorObjects2.length = 0;
gdjs.game_32overCode.GDdoors2Objects1.length = 0;
gdjs.game_32overCode.GDdoors2Objects2.length = 0;
gdjs.game_32overCode.GDswordObjects1.length = 0;
gdjs.game_32overCode.GDswordObjects2.length = 0;
gdjs.game_32overCode.GDSpawnObjects1.length = 0;
gdjs.game_32overCode.GDSpawnObjects2.length = 0;
gdjs.game_32overCode.GDEnemyObjects1.length = 0;
gdjs.game_32overCode.GDEnemyObjects2.length = 0;
gdjs.game_32overCode.GDhealth_9595dropsObjects1.length = 0;
gdjs.game_32overCode.GDhealth_9595dropsObjects2.length = 0;
gdjs.game_32overCode.GDhealth_9595barObjects1.length = 0;
gdjs.game_32overCode.GDhealth_9595barObjects2.length = 0;
gdjs.game_32overCode.GDHealthObjects1.length = 0;
gdjs.game_32overCode.GDHealthObjects2.length = 0;
gdjs.game_32overCode.GDGreenButtonObjects1.length = 0;
gdjs.game_32overCode.GDGreenButtonObjects2.length = 0;
gdjs.game_32overCode.GDNewSprite4Objects1.length = 0;
gdjs.game_32overCode.GDNewSprite4Objects2.length = 0;
gdjs.game_32overCode.GDNewText2Objects1.length = 0;
gdjs.game_32overCode.GDNewText2Objects2.length = 0;
gdjs.game_32overCode.GDBoss_9595HealthObjects1.length = 0;
gdjs.game_32overCode.GDBoss_9595HealthObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
