<script>
    var editorTool, map = new AMap.Map("container", {
        resizeEnable: true,
        center: [113.352227,23.152334],//地图中心点
        zoom: 15 //地图显示的缩放级别
    });
    //在地图上绘制折线
    var editor={};
    editor._line=(function(){
        var lineArr = [
        	 [113.34582,23.146844],
        	 [113.347907,23.149458],
        	 [113.351925,23.152777],
            [113.352227,23.152334],
            [113.352725,23.151826],
            [113.354297,23.154833],
            [113.358357,23.157857]
        ];
        return new AMap.Polyline({
            map: map,
            path: lineArr,
            strokeColor: "#FF33FF",//线颜色
            strokeOpacity: 1,//线透明度
            strokeWeight: 3,//线宽
            strokeStyle: "solid"//线样式
        });
    })();
    map.setFitView();
    editor._lineEditor= new AMap.PolyEditor(map, editor._line);
    editor._polygonEditor= new AMap.PolyEditor(map, editor._polygon);
    editor._circleEditor= new AMap.CircleEditor(map, editor._circle);

    editor.startEditLine=function(){
        editor._lineEditor.open();
    }
    editor.closeEditLine=function(){
        editor._lineEditor.close();
    }

    editor.startEditPolygon=function(){
        editor._polygonEditor.open();
    }
    editor.closeEditPolygon=function(){
        editor._polygonEditor.close();
    }

    editor.startEditCircle=function(){
        editor._circleEditor.open();
    }
    editor.closeEditCircle=function(){
        editor._circleEditor.close();
    }
</script>