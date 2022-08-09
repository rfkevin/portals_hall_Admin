import { Paper, Typography } from "@mui/material";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Filter,
  GridComponent,
  Inject,
  Page,
  Selection,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { donationsgrid } from "./grid";
import useStyles from "./style";

const Donations = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const data = new DataManager({
    adaptor: new UrlAdaptor(),
    url: baseUrl + "/donations/list",
  });
  const classes = useStyles();
  return (
    <>
      <Paper elevation={4} className={classes.paper}>
        <Typography className={classes.title} variant="h4" align="center">
          Donations
        </Typography>
        <GridComponent
          id="gridcomp"
          dataSource={data}
          allowPaging
          allowSorting
          editSettings={{
            allowDeleting: false,
            allowEditing: false,
            allowUpdating: false,
          }}
          width="auto"
        >
          <ColumnsDirective>
            {donationsgrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject
            services={[Selection, Sort, Filter, Page, Toolbar, ContextMenu]}
          />
        </GridComponent>
      </Paper>
    </>
  );
};

export default Donations;
