import { Paper, Typography } from "@mui/material";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import {
  ColumnDirective,
  ColumnsDirective, ContextMenu, Filter,
  GridComponent,
  Inject,
  Page, Selection, Sort, Toolbar
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { newsGrid} from './grid';
import useStyles from "./style";


const News = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const data = new DataManager({
    adaptor: new UrlAdaptor(),
    url: baseUrl + "/news/get",
    removeUrl: baseUrl + "/news/delete",
    updateUrl: baseUrl + "/news/update",

  });
  const classes = useStyles();
  return (
    <>
      <Paper elevation={4} className={classes.paper}>
        <Typography className={classes.title} variant="h4" align="center">
          News
        </Typography>
        <GridComponent
          id="gridcomp"
          dataSource={data}
          allowPaging
          allowSorting
          toolbar={["Delete"]}
          editSettings={{ allowDeleting: true, allowEditing:false, allowUpdating:false }}
          width="auto"
        >
          <ColumnsDirective>
            {newsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Selection, Sort, Filter, Page, Toolbar, ContextMenu]} />
        </GridComponent>
      </Paper>
    </>
  );
};

export default News;
