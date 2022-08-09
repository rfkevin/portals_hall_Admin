import { Paper, Typography } from "@mui/material";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import {
  ColumnDirective,
  ColumnsDirective, ContextMenu, Filter,
  GridComponent,
  Inject,
  Edit,
  Page, Selection, Sort, Toolbar
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { productsGrid} from './grid';
import useStyles from "./style";


const Products = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const data = new DataManager({
    adaptor: new UrlAdaptor(),
    url: baseUrl + "/products/get",
    removeUrl: baseUrl + "/products/delete",
    updateUrl: baseUrl + "/products/update",

  });
  const classes = useStyles();
  return (
    <>
        <Typography className={classes.title} variant="h4" align="center">
          Products
        </Typography>
        <GridComponent
          id="gridcomp"
          dataSource={data}
          allowPaging
          allowSorting
          toolbar={["Delete"]}
          editSettings={{ allowDeleting: true, allowEditing:true, allowUpdating:true}}
          width="auto"
        >
          <ColumnsDirective>
            {productsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Selection, Sort, Filter, Page, Toolbar, ContextMenu, Edit]} />
        </GridComponent>
    </>
  );
};

export default Products;
