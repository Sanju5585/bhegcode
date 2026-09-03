import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteEquipmentsService } from '../site-equipments.service';
import { environment } from '../../../../environments/environment';

@Component({
  standalone: false,
  selector: 'app-update-equipment-details',
  templateUrl: './update-equipment-details.component.html',
  styleUrls: ['./update-equipment-details.component.scss'],
})
export class UpdateEquipmentDetailsComponent implements OnInit {
  probeSerialNumber: number;
  probeType: string;
  totalEquipmentData: any;
  filters = { ...this.eqService.melFilters };
  baseSiteURL = environment.occBaseUrl;
  endCustomersResponse: any;
  endCustomerList: any;

  endCustomers = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  equipmentDetailslData = {
    serialNumber: '',
    partNumber: '',
    partName: '',
    location: '',
    lastServiceDate: '',
    serviceInterval: '',
    status: '',
    assetNumber: '',
    htsCode: '',
    endCustomerName: '',
    endCustomer: '',
    notes: '',
    productData: {
      mediaurl: '',
    },
  };
  constructor(
    private router: Router,
    public eqService: SiteEquipmentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let endCustomerList = [];
    this.eqService.getEquipmentList(this.filters).subscribe((res: any) => {
      if (res) {
        this.totalEquipmentData = res.equipmentData;
        let filterEquipmentData = this.totalEquipmentData.filter(
          (e) =>
            e.partNumber === this.route.snapshot.queryParams['partNumber'] &&
            e.serialNumber === this.route.snapshot.queryParams['serialNumber']
        );
        this.equipmentDetailslData = filterEquipmentData[0];
      }
      this.endCustomersResponse = res;
      if (res) {
        this.endCustomersResponse.equipmentData.forEach((customers) => {
          endCustomerList.push({
            label: customers.endCustomerName,
            value: customers.endCustomer,
          });
        });

        this.endCustomers = {
          itemGroups: [
            {
              items: endCustomerList,
            },
          ],
        };
      }
    });
  }

  updateEquipmentData() {
    let inputParams = {
      addUpdateFlag: 'Update',
      additionalInfo: 'Yes Required',
      assetNumber: '',
      endCustomer: '0000184967',
      endCustomerName: '3E NDT L.L.C. & 0000184967',
      favourites: true,
      htsCode: '',
      inactiveFlag: true,
      lastServiceDate: '02 Feb 2021',
      location: 'Location Name',
      nextServiceDueInMonths: '3',
      partName: 'STRUCT D3 DW ETE 10CM X 40CM ggg',
      partNumber: '3LM1N',
      pinned: 'X',
      removeFlag: true,
      selectedOption: 'true',
      serialNumber: 'TESTPRODUCTNUMBER3',
      serviceDueDate: '2021-07-08T12:11:22.246Z',
      serviceInterval: '5',
      status: 'ACTIVE',
      thereInMELFlag: true,
    };

    this.eqService.equipmentHistoryLookUp(inputParams).subscribe((res: any) => {
      if (res) {
      } else {
      }
    });
  }

  backClick(partNumber, serialNumber) {
    this.router.navigate(['/equipment-details'], {
      queryParams: { partNumber: partNumber, serialNumber: serialNumber },
    });
  }

  cancelUpdate(partNumber, serialNumber) {
    this.router.navigate(['/equipment-details'], {
      queryParams: { partNumber: partNumber, serialNumber: serialNumber },
    });
  }
}
