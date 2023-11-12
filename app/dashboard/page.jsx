import Card from "../components/dashboard/card";
import Chart from "../components/dashboard/chart";
import Rightbar from "../components/dashboard/rightbar";
import Transaction from "../components/dashboard/transaction";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      <div className="col-span-3 flex flex-col gap-4">
        <div className="flex gap-4 justify-between">
          <Card item="item" />
          <Card item="item" />
          <Card item="item" />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className="col-span-1 flex flex-col gap-4 mr-4">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
