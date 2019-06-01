# WaltonDashboard
Walton custom dashboard based on `FRCDashboard`.

## Getting Started

### Setup
`cd` into the desired directory with the `package.json` file in it. Run `npm install` to install the necessary nodejs packages.

### Running
Connect to your robot's network if you haven't already (if you're just testing the dashboard and don't currently need to use it
with your robot, you can skip this step).

While in the dashboard directory, run:

`npm start`

The dashboard application will then open. It is recommended that while using the dashboard on your driver station, you close the
top panel of the FRC DriverStation to make room for the dashboard.

### Building
If you wish to build the dashboard application into a standalone runnable (`.exe` or `.app` file), assuming the necessary steps 
were performed, you can run `npm run package-[platform]` where `platform` is `linux`, `mac`, or `win` depending on the
target platform. By running the command, the entire dashboard application will be packed into a single executable.

### Prerequisites
[nodejs](https://nodejs.org/)

[npm](https://npmjs.com/)

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgements
[FRCDashboard](https://frcdashboard.github.io/)
