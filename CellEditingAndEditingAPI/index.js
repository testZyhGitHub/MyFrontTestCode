$(function(){
    var employeesStore = new DevExpress.data.ArrayStore({
        key: "ID",
        data: employees
    });
    
	var employeesStore1 = new DevExpress.data.ArrayStore({
        key: "ID",
        data: employeesShort
    });
    var deleteButton = $("#gridDeleteSelected").dxButton({
        text: "Delete Selected Records",
        height: 34,
        width: 195,
        disabled: true,
        onClick: function () {
            $.each(dataGrid.getSelectedRowKeys(), function() {
                //employeesStore.remove(this);
				employeesStore1.remove(this);
            });
            dataGrid.refresh();
        }
    }).dxButton("instance");
    
    var dataGrid = $("#gridContainer").dxDataGrid({
        // dataSource: employeesStore,
		dataSource: employeesStore1,	
        showBorders: true,
        paging: {
            enabled: false
        },
        editing: {
            mode: "cell",
            allowUpdating: true
        },
        selection: {
            mode: "multiple"
        },
        onSelectionChanged: function(data) {
            deleteButton.option("disabled", !data.selectedRowsData.length);
        }, 
		//onCellPrepared: function (cellElement, cellInfo) {
		onCellPrepared: function (e) {
			//if (cellInfo.row == undefined)
			//	return;
			if (e.rowType == "data" && e.column.dataField == "Prefix") {
				e.cellElement.attr({ title: 'test ' + e.value });
				e.cellElement.addClass("cssCol1");
				
				var tmpHtml = "<div>";
				tmpHtml += "太郎01";
				tmpHtml += "</div>";
				e.cellElement.html(tmpHtml);
			}
		
			if (e.rowType == "data" && e.column.dataField == "Position") {
				e.cellElement.addClass("cssCol2");
				
				var tmpHtml = "<div class='cssCol2'>";
				tmpHtml += "太郎02";
				tmpHtml += "</div>";
				e.cellElement.html(tmpHtml);
			}
			
			if (e.rowType == "data" && e.column.dataField == "StateID") {
				e.cellElement.addClass("cssCol3");
				
				var tmpHtml = "<div class='cssCol3'>";
				tmpHtml += "太郎03";
				tmpHtml += "</div>";
				e.cellElement.html(tmpHtml);
			}
			
			if (e.rowType == "data" && e.column.dataField == "BirthDate") {
				e.cellElement.addClass("cssCol4");
				
				var tmpHtml = "<div class='cellone'>";
				tmpHtml += "</div>";
				e.cellElement.html(tmpHtml);
			}
			
		
			//if ("header" == cellElement.rowType)
			if ("header" == e.rowType)
			{
				//if (cellElement.column.dataField == 'Prefix')
				{
					//cellElement.addClass('cssCol1');
					//cellElement.css('cssCol1');					
				}
				//else if (cellElement.column.dataField == 'Position')
				{
					//cellElement.addClass('cssCol2'); 
				}
				//else if (cellElement.column.dataField == 'StateID')
				{
					//cellElement.addClass('cssCol3'); 
				}	
				//else if (cellElement.column.dataField == 'BirthDate')
				{
					//cellElement.addClass('cssCol4'); 
				}				
			}
			
			//if (cellInfo.column.dataField == 'Status' && cellInfo.data.Status == 'Critical')
			//	cellElement.addClass('status-critical');  
		},
        columns: [
            {
                dataField: "Prefix",
                caption: "Title",
                width: 55,
				cssClass: "ColumnsAutomatic",
            },
            "FirstName",
            "LastName", {
                dataField: "Position",
                width: 170
            }, {
                dataField: "StateID",
                caption: "State",
                width: 125,
                lookup: {
                    dataSource: states,
                    displayExpr: "Name",
                    valueExpr: "ID"
                }
            }, {
                dataField: "BirthDate",
                dataType: "date"
            }
        ]
    }).dxDataGrid("instance");
    
    
});