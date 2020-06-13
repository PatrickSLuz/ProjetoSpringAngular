import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { CotacaoListDataSource, CotacaoListItem } from './cotacao-list-datasource';
import { CotacaoService } from '../../service/cotacao.service';

@Component({
  selector: 'app-cotacao-list',
  templateUrl: './cotacao-list.component.html',
  styleUrls: ['./cotacao-list.component.css']
})
export class CotacaoListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<CotacaoListItem>;
  dataSource: CotacaoListDataSource;

  displayedColumns = ['id', 'name'];

  constructor(private cotacaoService: CotacaoService) { }

  ngOnInit() {
    this.cotacaoService.getAllCotacoes().subscribe(
      cotacoes => {
        this.dataSource = new CotacaoListDataSource(cotacoes);
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      }, error => console.log(error)
    );
  }
}
