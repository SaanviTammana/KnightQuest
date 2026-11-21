gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDUnnamedObjects1= [];
gdjs.MenuCode.GDUnnamedObjects2= [];
gdjs.MenuCode.GDNewText4Objects1= [];
gdjs.MenuCode.GDNewText4Objects2= [];
gdjs.MenuCode.GDNewText5Objects1= [];
gdjs.MenuCode.GDNewText5Objects2= [];
gdjs.MenuCode.GDNewText6Objects1= [];
gdjs.MenuCode.GDNewText6Objects2= [];
gdjs.MenuCode.GDNewSprite6Objects1= [];
gdjs.MenuCode.GDNewSprite6Objects2= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDfloorObjects1= [];
gdjs.MenuCode.GDfloorObjects2= [];
gdjs.MenuCode.GDdoors2Objects1= [];
gdjs.MenuCode.GDdoors2Objects2= [];
gdjs.MenuCode.GDswordObjects1= [];
gdjs.MenuCode.GDswordObjects2= [];
gdjs.MenuCode.GDSpawnObjects1= [];
gdjs.MenuCode.GDSpawnObjects2= [];
gdjs.MenuCode.GDEnemyObjects1= [];
gdjs.MenuCode.GDEnemyObjects2= [];
gdjs.MenuCode.GDhealth_9595dropsObjects1= [];
gdjs.MenuCode.GDhealth_9595dropsObjects2= [];
gdjs.MenuCode.GDhealth_9595barObjects1= [];
gdjs.MenuCode.GDhealth_9595barObjects2= [];
gdjs.MenuCode.GDHealthObjects1= [];
gdjs.MenuCode.GDHealthObjects2= [];
gdjs.MenuCode.GDGreenButtonObjects1= [];
gdjs.MenuCode.GDGreenButtonObjects2= [];
gdjs.MenuCode.GDNewSprite4Objects1= [];
gdjs.MenuCode.GDNewSprite4Objects2= [];
gdjs.MenuCode.GDNewText2Objects1= [];
gdjs.MenuCode.GDNewText2Objects2= [];
gdjs.MenuCode.GDBoss_9595HealthObjects1= [];
gdjs.MenuCode.GDBoss_9595HealthObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.MenuCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDGreenButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDGreenButtonObjects1[k] = gdjs.MenuCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1st Level", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDUnnamedObjects1.length = 0;
gdjs.MenuCode.GDUnnamedObjects2.length = 0;
gdjs.MenuCode.GDNewText4Objects1.length = 0;
gdjs.MenuCode.GDNewText4Objects2.length = 0;
gdjs.MenuCode.GDNewText5Objects1.length = 0;
gdjs.MenuCode.GDNewText5Objects2.length = 0;
gdjs.MenuCode.GDNewText6Objects1.length = 0;
gdjs.MenuCode.GDNewText6Objects2.length = 0;
gdjs.MenuCode.GDNewSprite6Objects1.length = 0;
gdjs.MenuCode.GDNewSprite6Objects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDfloorObjects1.length = 0;
gdjs.MenuCode.GDfloorObjects2.length = 0;
gdjs.MenuCode.GDdoors2Objects1.length = 0;
gdjs.MenuCode.GDdoors2Objects2.length = 0;
gdjs.MenuCode.GDswordObjects1.length = 0;
gdjs.MenuCode.GDswordObjects2.length = 0;
gdjs.MenuCode.GDSpawnObjects1.length = 0;
gdjs.MenuCode.GDSpawnObjects2.length = 0;
gdjs.MenuCode.GDEnemyObjects1.length = 0;
gdjs.MenuCode.GDEnemyObjects2.length = 0;
gdjs.MenuCode.GDhealth_9595dropsObjects1.length = 0;
gdjs.MenuCode.GDhealth_9595dropsObjects2.length = 0;
gdjs.MenuCode.GDhealth_9595barObjects1.length = 0;
gdjs.MenuCode.GDhealth_9595barObjects2.length = 0;
gdjs.MenuCode.GDHealthObjects1.length = 0;
gdjs.MenuCode.GDHealthObjects2.length = 0;
gdjs.MenuCode.GDGreenButtonObjects1.length = 0;
gdjs.MenuCode.GDGreenButtonObjects2.length = 0;
gdjs.MenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MenuCode.GDNewSprite4Objects2.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDBoss_9595HealthObjects1.length = 0;
gdjs.MenuCode.GDBoss_9595HealthObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDUnnamedObjects1.length = 0;
gdjs.MenuCode.GDUnnamedObjects2.length = 0;
gdjs.MenuCode.GDNewText4Objects1.length = 0;
gdjs.MenuCode.GDNewText4Objects2.length = 0;
gdjs.MenuCode.GDNewText5Objects1.length = 0;
gdjs.MenuCode.GDNewText5Objects2.length = 0;
gdjs.MenuCode.GDNewText6Objects1.length = 0;
gdjs.MenuCode.GDNewText6Objects2.length = 0;
gdjs.MenuCode.GDNewSprite6Objects1.length = 0;
gdjs.MenuCode.GDNewSprite6Objects2.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDfloorObjects1.length = 0;
gdjs.MenuCode.GDfloorObjects2.length = 0;
gdjs.MenuCode.GDdoors2Objects1.length = 0;
gdjs.MenuCode.GDdoors2Objects2.length = 0;
gdjs.MenuCode.GDswordObjects1.length = 0;
gdjs.MenuCode.GDswordObjects2.length = 0;
gdjs.MenuCode.GDSpawnObjects1.length = 0;
gdjs.MenuCode.GDSpawnObjects2.length = 0;
gdjs.MenuCode.GDEnemyObjects1.length = 0;
gdjs.MenuCode.GDEnemyObjects2.length = 0;
gdjs.MenuCode.GDhealth_9595dropsObjects1.length = 0;
gdjs.MenuCode.GDhealth_9595dropsObjects2.length = 0;
gdjs.MenuCode.GDhealth_9595barObjects1.length = 0;
gdjs.MenuCode.GDhealth_9595barObjects2.length = 0;
gdjs.MenuCode.GDHealthObjects1.length = 0;
gdjs.MenuCode.GDHealthObjects2.length = 0;
gdjs.MenuCode.GDGreenButtonObjects1.length = 0;
gdjs.MenuCode.GDGreenButtonObjects2.length = 0;
gdjs.MenuCode.GDNewSprite4Objects1.length = 0;
gdjs.MenuCode.GDNewSprite4Objects2.length = 0;
gdjs.MenuCode.GDNewText2Objects1.length = 0;
gdjs.MenuCode.GDNewText2Objects2.length = 0;
gdjs.MenuCode.GDBoss_9595HealthObjects1.length = 0;
gdjs.MenuCode.GDBoss_9595HealthObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
