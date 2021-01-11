import { Component, ViewChild, ElementRef} from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
//import { generatedata } from './../../../sampledata/generatedata';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('eventLog', { static: false }) eventLog: ElementRef;
  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;
	getWidth() : any {
		if (document.body.offsetWidth < 1000) {
			return '90%';
		}
		
		return 1000;
	}
 
  myGridOnColumnReordered(event: any): void {
      let column = event.args.columntext;
      let newindex = event.args.newindex
      let oldindex = event.args.oldindex;
      this.eventLog.nativeElement.innerHTML = `Column: ${column}, New Index: ${newindex}, Old Index: ${oldindex}`;
  }



  source = new jqx.dataAdapter({
		localData: [
		  {ShipName: 'Around the horn', ShippedDate: '1997-02-21',Freight:'3.50',ShipAddress:'12,Rue des bouchers',ShipCity:'Marseille',ShipCountry:'France'},
      {ShipName: 'Blondel père et fils', ShippedDate: '1997-02-11',Freight:'9.30',ShipAddress:'Gran via1',ShipCity:'Strasbourg',ShipCountry:'Spain'},		
      {ShipName: 'Bs Beverags', ShippedDate: '1996-12-02',Freight:'5.74',ShipAddress:'Mataderos 2312',ShipCity:'Mexico d.f',ShipCountry:'Mexico'},		  
      {ShipName: 'Bon app', ShippedDate: '1996-12-28',Freight:'10.19',ShipAddress:'35 king george',ShipCity:'London',ShipCountry:'UK'},		 
		
		]
	 });
 
  columns: any[] =
  [
      { text: 'Ship Name', datafield: 'ShipName', width: 250 },
      { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, cellsformat: 'yyyy-MM-dd' },
      { text: 'Freight', datafield: 'Freight', width: 80, cellsformat: 'F2', cellsalign: 'right' },
      { text: 'Ship Address', datafield: 'ShipAddress', width: 350 },
      { text: 'Ship City', datafield: 'ShipCity', width: 100 },
      { text: 'Ship Country', datafield: 'ShipCountry', width: 101 }
  ];

  listBoxSource: any[] =
    [
        { label: 'Ship Name', value: 'ShipName', checked: true }, { label: 'Shipped Date', value: 'ShippedDate', checked: true },
        { label: 'Freight', value: 'Freight', checked: true }, { label: 'Ship Address', value: 'ShipAddress', checked: true },
        { label: 'Ship City', value: 'ShipCity', checked: true },{label :'Ship Country',value:'ShipCountry',checked:true}
    ];
    myListBoxOnCheckChange(event: any): void {
     // console.log(this.myGrid);
      this.myGrid.beginupdate();
      if (event.args.checked) {
          //this.myGrid.hidecolumn('ShipName');
          this.myGrid.showcolumn(event.args.value);
      }
      else {
          this.myGrid.hidecolumn(event.args.value);
      }
      this.myGrid.endupdate();
  };

  myGridOnSort(event: any): void {
      this.myPanel.clearcontent();
      let sortinformation = event.args.sortinformation;
      let sortdirection = sortinformation.sortdirection.ascending ? 'ascending' : 'descending';
      if (!sortinformation.sortdirection.ascending && !sortinformation.sortdirection.descending) {
          sortdirection = 'null';
      }
      let eventData = 'Triggered "sort" event <div>Column:' + sortinformation.sortcolumn + ', Direction: ' + sortdirection + '</div>';
      this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
  };
  removeSortBtnOnClick(): void {
      this.myGrid.removesort();
  };
  sortBackGroundBtn(event: any): void {
      this.myGrid.showsortcolumnbackground(event.args.checked);
  };



}