//myScene.js
var MyLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var size = cc.director.getWinSize();

        var helpBtn = new cc.MenuItemImage(res.help_png, res.help_png, function() {
            cc.director.runScene(new helpScene1());
        });
        helpBtn.setPosition(size.width / 2, size.height / 2 - 130);
        var help = new cc.Menu(helpBtn);
        help.setPosition(0, 0);
        this.addChild(help, 100);

        //音楽再生エンジン
        audioEngine = cc.audioEngine;
        //bgm再生
        if (!audioEngine.isMusicPlaying()) {
          audioEngine.playMusic(res.bgm_title, true);
        }

        var TitleBG_png = cc.Sprite.create(res.TitleBG_png);
         TitleBG_png.setPosition(size.width / 2, size.height / 2);
        this.addChild(TitleBG_png);

        var Title_png = cc.Sprite.create(res.Title_png);
         Title_png.setPosition(size.width / 2, size.height / 2 + 50);
        this.addChild(Title_png);

        var start_png = cc.Sprite.create(res.start_png);
         start_png.setPosition(size.width / 2, size.height / 2 - 30);
        this.addChild(start_png);

        //add code
         //タップイベントリスナーを登録する
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);

        return true;
    },

    onTouchBegan: function(touch, event) {

        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
      //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
          audioEngine.stopMusic();
        }
        cc.director.runScene(new gameScene());
    },
});

var MyScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new MyLayer();
        this.addChild(layer);
    }
});
