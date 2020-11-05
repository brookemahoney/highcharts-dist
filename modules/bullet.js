/*
 Highcharts JS v8.2.2 (2020-11-05)

 Bullet graph series type for Highcharts

 (c) 2010-2019 Kacper Madej

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/bullet",["highcharts"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,f,d){a.hasOwnProperty(b)||(a[b]=d.apply(null,f))}a=a?a._modules:{};b(a,"Series/BulletSeries.js",[a["Core/Series/Series.js"],a["Series/Column/ColumnSeries.js"],a["Core/Utilities.js"]],function(a,b,f){var d=
b.prototype,k=f.isNumber,r=f.merge,l=f.pick,t=f.relativeLength;a.seriesType("bullet","column",{targetOptions:{width:"140%",height:3,borderWidth:0},tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.y}</b>. Target: <b>{point.target}</b><br/>'}},{pointArrayMap:["y","target"],parallelArrays:["x","y","target"],drawPoints:function(){var a=this,m=a.chart,b=a.options,f=b.animationLimit||250;d.drawPoints.apply(this);a.points.forEach(function(c){var p=c.options,
e=c.targetGraphic,d=c.target,n=c.y;if(k(d)&&null!==d){var g=r(b.targetOptions,p.targetOptions);var u=g.height;var h=c.shapeArgs;var q=t(g.width,h.width);var v=a.yAxis.translate(d,!1,!0,!1,!0)-g.height/2-.5;h=a.crispCol.apply({chart:m,borderWidth:g.borderWidth,options:{crisp:b.crisp}},[h.x+h.width/2-q/2,v,q,u]);e?(e[m.pointCount<f?"animate":"attr"](h),k(n)&&null!==n?e.element.point=c:e.element.point=void 0):c.targetGraphic=e=m.renderer.rect().attr(h).add(a.group);m.styledMode||e.attr({fill:l(g.color,
p.color,a.zones.length&&(c.getZone.call({series:a,x:c.x,y:d,options:{}}).color||a.color)||void 0,c.color,a.color),stroke:l(g.borderColor,c.borderColor,a.options.borderColor),"stroke-width":g.borderWidth});k(n)&&null!==n&&(e.element.point=c);e.addClass(c.getClassName()+" highcharts-bullet-target",!0)}else e&&(c.targetGraphic=e.destroy())})},getExtremes:function(a){var b=this.targetData;a=d.getExtremes.call(this,a);b&&b.length&&(b=d.getExtremes.call(this,b),k(b.dataMin)&&(a.dataMin=Math.min(l(a.dataMin,
Infinity),b.dataMin)),k(b.dataMax)&&(a.dataMax=Math.max(l(a.dataMax,-Infinity),b.dataMax)));return a}},{destroy:function(){this.targetGraphic&&(this.targetGraphic=this.targetGraphic.destroy());d.pointClass.prototype.destroy.apply(this,arguments)}});""});b(a,"masters/modules/bullet.src.js",[],function(){})});
//# sourceMappingURL=bullet.js.map