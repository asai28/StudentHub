import React, { Component } from "react";
import { Scheduler } from "@progress/kendo-scheduler-react-wrapper";
import { kendo } from "@progress/kendo-ui";
import { Jumbotron } from "reactstrap";

class SchedulerContainer extends Component {
  constructor(props) {
    super(props);
    this.startTime = new Date("2013/6/13 07:00 AM");
    this.resiurces = [
      {
        field: "ownerId",
        title: "Owner",
        dataSource: [
          { text: "Alex", value: 1, color: "#f8a398" },
          { text: "Bob", value: 2, color: "#51a0ed" },
          { text: "Charlie", value: 3, color: "#56ca85" }
        ]
      }
    ];
    this.views = [
      "day",
      { type: "workWeek", selected: true },
      "week",
      "month",
      "agenda",
      { type: "timeline", eventHeight: 50 }
    ];

    this.dataSource = {
      batch: true,
      transport: {
        read: {
          url: "https://demos.telerik.com/kendo-ui/service/tasks",
          dataType: "jsonp"
        },
        update: {
          url: "https://demos.telerik.com/kendo-ui/service/tasks/update",
          dataType: "jsonp"
        },
        create: {
          url: "https://demos.telerik.com/kendo-ui/service/tasks/create",
          dataType: "jsonp"
        },
        destroy: {
          url: "https://demos.telerik.com/kendo-ui/service/tasks/destroy",
          dataType: "jsonp"
        },
        parameterMap: function(options, operation) {
          if (operation !== "read" && options.models) {
            return { models: kendo.stringify(options.models) };
          }
        }
      },
      schema: {
        model: {
          id: "taskId",
          fields: {
            taskId: { from: "TaskID", type: "number" },
            title: {
              from: "Title",
              defaultValue: "No title",
              validation: { required: true }
            },
            start: { type: "date", from: "Start" },
            end: { type: "date", from: "End" },
            startTimezone: { from: "StartTimezone" },
            endTimezone: { from: "EndTimezone" },
            description: { from: "Description" },
            recurrenceId: { from: "RecurrenceID" },
            recurrenceRule: { from: "RecurrenceRule" },
            recurrenceException: { from: "RecurrenceException" },
            ownerId: { from: "OwnerID", defaultValue: 1 },
            isAllDay: { type: "boolean", from: "IsAllDay" }
          }
        }
      },
      filter: {
        logic: "or",
        filters: [
          { field: "ownerId", operator: "eq", value: 1 },
          { field: "ownerId", operator: "eq", value: 2 }
        ]
      }
    };
  }
  render() {
    return (
      <div>
        <Jumbotron>
          <Scheduler
            change={this.onChange}
            dataBound={this.dataBound}
            dataSource={this.events}
            date={this.date}
          />
        </Jumbotron>
      </div>
    );
  }
}

export default SchedulerContainer;
