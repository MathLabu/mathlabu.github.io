window.onload = function() {
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  var csn = "#fcaf3e"; var csn_t = "Numerical Systems Design (L3)";
  var rob = "#73d216"; var rob_t = "Robotics (M1)";
  var cyb = "#f57900"; var cyb_t = "Numerical Control (M1)";
  var mat = "#ad7fa8"; var mat_t = "Mathematics (L1)";
  var ros = "#4e9a06"; var ros_t = "Sensors Integration - ROS (M2)";
  var aut = "#ce5c00"; var aut_t = "Automation (M1)";
  var ial = "#ad7fa8"; var ial_t = "Learning (M1/M2)";
  var sig = "#e9b96e"; var sig_t = "Signal Processing (M1)";
  var vis = "#8ae234"; var vis_t = "Robotics and Vision (M2)";
  
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  var ctx = document.getElementById("teaching2019");
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: [mat_t, csn_t, cyb_t, rob_t],
      datasets: [{
        label: "2018-2019",
        backgroundColor: [mat, csn, cyb, rob],
        data: [23.5, 20, 10, 10]
      }]
    },
    options: {
      title: {
        display: true,
        fontSize: 15,
        text: '2018-2019'
      }
    }
  });
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  var ctx2 = document.getElementById("teaching2020");
  var chart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: [csn_t, cyb_t, rob_t, ros_t],
      datasets: [{
        label: "2020-2021",
        backgroundColor: [csn, cyb, rob, ros],
        data: [20, 14, 10, 20]
      }]
    },
    options: {
      title: {
        display: true,
        fontSize: 15,
        text: '2020-2021'
      }
    }
  });
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  var ctx3 = document.getElementById("teaching2021");
  var chart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: [csn_t, cyb_t, rob_t, ros_t],
      datasets: [{
        label: "2021-2022",
        backgroundColor: [csn, cyb, rob, ros],
        data: [20, 10, 10, 20]
      }]
    },
    options: {
      title: {
        display: true,
        fontSize: 15,
        text: '2021-2022'
      }
    }
  });
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  var ctx4 = document.getElementById("teaching2022");
  var chart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
      labels: [ial_t, sig_t, aut_t, ros_t, vis_t],
      datasets: [{
        label: "2021-2022",
        backgroundColor: [ial, sig, aut, ros, vis],
        data: [12, 15, 28, 10.5, 31]
      }]
    },
    options: {
      title: {
        display: true,
        fontSize: 15,
        text: '2021-2022'
      }
    }
  });
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
};
