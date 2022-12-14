import { Paper, Typography } from "@mui/material";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Filter,
  GridComponent,
  Inject,
  Edit,
  Page,
  Selection,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { newsGrid } from "./grid";
import useStyles from "./style";

const News = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const data = new DataManager({
    adaptor: new UrlAdaptor(),
    url: baseUrl + "/news/get",
    removeUrl: baseUrl + "/news/delete",
  });
  const onActionFailure = (e) => {
    const span = document.createElement("span");
    if (this.grid) {
      this.grid.element.parentNode.insertBefore(span, this.grid.element);
      span.style.color = "#FF0000";
      span.innerHTML = "Server exception: 404 Not found";
    }
  };
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
          editSettings={{ allowDeleting: true }}
          width="auto"
        >
          <ColumnsDirective>
            {newsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
            services={[Selection, Sort, Filter, Page, Toolbar, ContextMenu, Edit]}
          />
        </GridComponent>
      </Paper>
    </>
  );
};

export default News;
