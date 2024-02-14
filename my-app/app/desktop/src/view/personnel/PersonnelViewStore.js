Ext.define('MyExtGenApp.view.personnel.PersonnelViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.personnelviewstore',
    fields: [
        'name', 'email', 'phone', 'job'
    ],
    groupField: 'dept',
    data: { items: [
        { name: 'Jean Luc',   email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", job: "收割作業" },
        { name: 'ModernWorf', email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", job: "網頁編寫" },
        { name: 'Deanna',     email: "deanna.troi@enterprise.com",    phone: "555-333-3333", job: "栽種農作" },
        { name: 'Data',       email: "mr.data@enterprise.com",        phone: "555-444-4444", job: "系統管理" }
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
Ext.Ajax.request({
  url: 'ajax_demo/sample.json',

  success: function(response, opts) {
    var obj = Ext.decode(response.responseText);
    console.dir(obj);
  },

  failure: function(response, opts) {
    console.log('server-side failure with status code ' + response.status);
  }
});
var store = Ext.create('Ext.data.JsonStore', {
    fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
    data: [
        { 'name': 'metric one',   'data1': 10, 'data2': 12, 'data3': 14, 'data4': 8,  'data5': 13 },
        { 'name': 'metric two',   'data1': 7,  'data2': 8,  'data3': 16, 'data4': 10, 'data5': 3  },
        { 'name': 'metric three', 'data1': 5,  'data2': 2,  'data3': 14, 'data4': 12, 'data5': 7  },
        { 'name': 'metric four',  'data1': 2,  'data2': 14, 'data3': 6,  'data4': 1,  'data5': 23 },
        { 'name': 'metric five',  'data1': 4,  'data2': 4,  'data3': 36, 'data4': 13, 'data5': 33 }
    ]
});

Ext.create('Ext.chart.Chart', {
    renderTo: Ext.getBody(),
    width: 500,
    height: 300,
    animate: true,
    store: store,
    axes: [
        {
            type: 'Numeric',
            position: 'left',
            fields: ['data1', 'data2'],
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
            title: 'Sample Values',
            grid: true,
            minimum: 0
        },
        {
            type: 'Category',
            position: 'bottom',
            fields: ['name'],
            title: 'Sample Metrics'
        }
    ],
    series: [
        {
            type: 'line',
            highlight: {
                size: 7,
                radius: 7
            },
            axis: 'left',
            xField: 'name',
            yField: 'data1',
            markerConfig: {
                type: 'cross',
                size: 4,
                radius: 4,
                'stroke-width': 0
            }
        },
        {
            type: 'line',
            highlight: {
                size: 7,
                radius: 7
            },
            axis: 'left',
            fill: true,
            xField: 'name',
            yField: 'data2',
            markerConfig: {
                type: 'circle',
                size: 4,
                radius: 4,
                'stroke-width': 0
            }
        }
    ]
});
Ext.onReady(function() {  
    store=new Ext.data.JsonStore({  
        url:'getData.php',  
        data:[],  
        fields:[  
            {name:'id'},  
            {name:'name'},  
            {name:'password'}  
        ]  
    });  
store.load();  
new Ext.grid.GridPanel({  
    store:store,  
    mode:'remote',  
    title:'简单Grid表格示例',  
    applyTo:'grid',  
    width:250,  
    height:150,  
    frame:true,  
    columns:[  
        {header:"id",width:50,dataIndex:'id',sortable:true},  
        {header:"姓名",width:80,dataIndex:'name',sortable:true},  
        {header:"年龄",width:80,dataIndex:'password',sortable:true}  
    ]  
})  
}); 