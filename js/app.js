var Button = ReactBootstrap.Button;
var Glyphicon = ReactBootstrap.Glyphicon;
var Input = ReactBootstrap.Input;
var Modal = ReactBootstrap.Modal;

var App = React.createClass({
    getInitialState: function() {
        var world = new Dataset("100 Most-Populated Cities in the World", "31.22222 121.45806\n-34.61315 -58.37723\n19.07283 72.88261\n19.42847 -99.12766\n39.9075 116.39723\n24.9056 67.0822\n41.01384 28.94966\n39.14222 117.17667\n23.11667 113.25\n28.65381 77.22897\n14.6042 120.9822\n55.75222 37.61556\n22.54554 114.0683\n23.7104 90.40744\n37.566 126.9784\n-23.5475 -46.63611\n30.58333 114.26667\n6.45306 3.39583\n-6.21462 106.84513\n35.6895 139.69171\n40.71427 -74.00597\n23.04889 113.74472\n25.04776 121.53185\n-4.32758 15.31357\n-12.04318 -77.02824\n30.06263 31.24967\n4.60971 -74.08175\n51.51279 -0.09184\n51.50853 -0.12574\n29.56278 106.55278\n30.66667 104.06667\n32.06167 118.77778\n35.69439 51.42151\n30.79508 106.08473\n22.28552 114.15769\n34.25833 108.92861\n31.54972 74.34361\n41.79222 123.43278\n30.29365 120.16142\n-22.90278 -43.2075\n45.75 126.65\n33.34058 44.40088\n36.18528 117.12\n31.30408 120.59538\n23.36814 116.71479\n13.75398 100.50144\n12.97194 77.59369\n59.93863 30.31413\n-33.45694 -70.64827\n22.56263 88.36304\n-33.86785 151.20732\n43.70011 -79.4163\n16.80528 96.15611\n36.66833 116.99722\n13.08784 80.27847\n34.75778 113.64861\n-37.814 144.96332\n24.68773 46.72185\n43.88 125.32278\n38.91222 121.60222\n22.3384 91.83168\n25.03889 102.71833\n31.21564 29.95527\n34.05223 -118.24368\n23.02579 72.58727\n36.06605 120.36939\n35.10278 129.04028\n5.30966 -4.01266\n12.00012 8.51672\n23.02677 113.13148\n17.38405 78.45636\n29.45679 119.88872\n35.44778 139.6425\n7.38778 3.89639\n1.28967 103.85007\n31.56887 120.28857\n24.47979 118.08187\n39.91987 32.85427\n34.57952 105.74238\n29.87819 121.54945\n10.82302 106.62965\n32.6475 110.77806\n-33.92584 18.42322\n37.86944 112.56028\n52.52437 13.41053\n39.63333 118.18333\n31.86389 117.28083\n45.50884 -73.58781\n40.4165 -3.70256\n39.03385 125.75432\n33.58831 -7.61138\n36.79056 118.06333\n21.31992 110.5723\n-29.8579 31.0292\n28.19874 112.97087\n34.52813 69.17233\n43.80096 87.60046\n10.48801 -66.87919\n18.51957 73.85535\n21.19594 72.83023\n");
        var us = new Dataset("US Cities > 100k", "33.52066 -86.80249\n34.73037 -86.5861\n30.69436 -88.04305\n32.36681 -86.29997\n34.74648 -92.28959\n38.89511 -77.03637\n27.9378 -82.28592\n26.56285 -81.94953\n27.96585 -82.8001\n26.27119 -80.2706\n26.12231 -80.14338\n29.65163 -82.32483\n25.8576 -80.27811\n26.0112 -80.14949\n30.33218 -81.65565\n25.77427 -80.19366\n25.94204 -80.2456\n25.98731 -80.23227\n28.53834 -81.37924\n28.03446 -80.58866\n26.00315 -80.22394\n27.29393 -80.35033\n27.77086 -82.67927\n30.43826 -84.28073\n27.94752 -82.45843\n33.96095 -83.37794\n33.749 -84.38798\n32.46098 -84.98771\n32.08354 -81.09983\n39.80172 -89.64371\n37.97476 -87.55585\n39.76838 -86.15804\n39.11417 -94.62746\n38.8814 -94.81913\n38.98223 -94.67079\n39.04833 -95.67804\n37.69224 -97.33754\n38.45647 -82.69238\n37.98869 -84.47772\n38.0498 -84.45855\n38.25424 -85.75941\n38.41258 -82.70905\n30.45075 -91.15455\n30.22409 -92.01984\n29.98409 -90.15285\n29.97854 -90.16396\n29.95465 -90.07507\n32.52515 -93.75018\n39.29038 -76.61219\n38.95171 -92.33407\n39.09556 -94.35523\n39.09112 -94.41551\n39.09973 -94.57857\n38.62727 -90.19789\n37.21533 -93.29824\n32.29876 -90.18481\n35.79154 -78.78112\n35.22709 -80.84313\n35.99403 -78.89862\n35.05266 -78.87836\n36.07264 -79.79198\n35.95569 -80.00532\n35.7721 -78.63861\n35.78682 -78.66389\n34.22573 -77.94471\n36.09986 -80.24422\n39.162 -84.45689\n39.96118 -82.99879\n39.75895 -84.19161\n35.22257 -97.43948\n35.46756 -97.51643\n36.15398 -95.99277\n39.95233 -75.16379\n32.77657 -79.93092\n34.00071 -81.03481\n35.04563 -85.30968\n36.52977 -87.35945\n35.06535 -85.24912\n35.96064 -83.92074\n35.14953 -90.04898\n35.84562 -86.39027\n36.16589 -86.78444\n35.08676 -90.05676\n32.44874 -99.73314\n32.73569 -97.10807\n30.26715 -97.74306\n30.08605 -94.10185\n25.90175 -97.49748\n32.95373 -96.89028\n27.80058 -97.39638\n32.78306 -96.80667\n33.21484 -97.13307\n32.72541 -97.32085\n33.15067 -96.82361\n32.91262 -96.63888\n32.74596 -96.99778\n29.76328 -95.36327\n32.81402 -96.94889\n31.11712 -97.7278\n27.50641 -99.50754\n26.20341 -98.23001\n33.19762 -96.61527\n32.7668 -96.59916\n29.69106 -95.2091\n33.01984 -96.69889\n29.42412 -98.49363\n31.54933 -97.14667\n33.91371 -98.49339\n38.80484 -77.04692\n38.88101 -77.10428\n36.81904 -76.27494\n37.03737 -76.33161\n37.02987 -76.34522\n36.97876 -76.428\n36.84681 -76.28522\n37.55376 -77.46026\n36.85293 -75.97799\n41.76371 -72.68509\n41.30815 -72.92816\n41.13815 -73.54346\n41.05343 -73.53873\n41.55815 -73.0515\n42.00833 -91.64407\n41.60054 -93.60911\n41.76058 -88.32007\n41.85003 -87.65005\n42.03725 -88.28119\n41.52519 -88.0834\n41.78586 -88.14729\n40.71754 -89.58426\n40.69365 -89.58899\n42.27113 -89.094\n41.1306 -85.12886\n41.68338 -86.25001\n42.35843 -71.05977\n42.3751 -71.10561\n42.63342 -71.31617\n42.33343 -71.04949\n42.10148 -72.58981\n42.26259 -71.80229\n42.27756 -83.74088\n42.33143 -83.04575\n43.01253 -83.68746\n42.96336 -85.66809\n42.73253 -84.55553\n42.58031 -83.0302\n42.47754 -83.0277\n44.97997 -93.26384\n44.02163 -92.4699\n44.94441 -93.09327\n46.87719 -96.7898\n40.8 -96.66696\n41.25861 -95.93779\n42.99564 -71.45479\n40.51872 -74.4121\n40.66399 -74.2107\n40.72816 -74.07764\n40.73566 -74.17237\n40.91677 -74.17181\n42.97839 -78.79976\n40.84985 -73.86641\n40.6501 -73.94958\n42.88645 -78.87837\n40.66677 -73.88236\n40.69149 -73.80569\n40.78343 -73.96625\n40.71427 -74.00597\n40.68149 -73.83652\n43.15478 -77.61556\n40.56233 -74.13986\n43.04812 -76.14742\n40.93121 -73.89875\n41.08144 -81.51901\n41.4995 -81.69541\n41.66394 -83.55521\n40.60843 -75.49018\n42.12922 -80.08506\n40.44062 -79.99589\n41.82399 -71.41283\n43.54997 -96.70033\n44.51916 -88.01983\n43.07305 -89.40123\n43.0389 -87.90647\n41.16704 -73.20483\n33.30616 -111.84125\n33.35283 -111.78903\n33.53865 -112.18599\n33.42227 -111.82264\n33.5806 -112.23738\n33.44838 -112.07404\n33.50921 -111.89903\n33.63059 -112.33322\n33.41477 -111.90931\n33.41421 -111.94348\n32.22174 -110.92648\n33.83529 -117.9145\n38.00492 -121.80579\n35.37329 -119.01871\n37.87159 -122.27275\n34.18084 -118.30897\n33.15809 -117.35059\n32.64005 -117.0842\n37.97798 -122.03107\n33.87529 -117.56644\n33.64113 -117.91867\n37.70577 -122.46192\n33.94001 -118.13257\n34.0239 -118.17202\n34.06862 -118.02757\n38.4088 -121.37162\n33.11921 -117.08642\n38.24936 -122.03997\n34.09223 -117.43505\n37.54827 -121.98857\n36.74773 -119.77237\n33.87029 -117.92534\n33.77391 -117.94145\n34.14251 -118.25508\n37.66882 -122.0808\n34.09834 -118.32674\n33.6603 -117.99923\n33.96168 -118.35313\n33.66946 -117.82311\n34.69804 -118.13674\n33.76696 -118.18923\n34.05223 -118.24368\n37.6391 -120.99688\n33.93752 -117.23059\n33.55391 -117.21392\n34.16056 -118.26452\n33.90224 -118.08173\n37.80437 -122.2708\n33.19587 -117.37948\n34.06334 -117.65089\n33.78779 -117.85311\n34.1975 -119.17705\n34.19084 -119.2415\n34.57943 -118.11646\n34.14778 -118.14452\n34.05529 -117.75228\n34.1064 -117.59311\n37.93576 -122.34775\n33.95335 -117.39616\n38.75212 -121.28801\n38.58157 -121.4944\n36.67774 -121.6555\n34.10834 -117.28977\n32.71533 -117.15726\n37.77493 -122.41942\n37.33939 -121.89496\n33.74557 -117.86783\n37.35411 -121.95524\n34.39166 -118.54259\n38.44047 -122.71443\n34.26945 -118.78148\n37.9577 -121.29078\n37.36883 -122.03635\n33.49364 -117.14836\n34.17056 -118.83759\n33.83585 -118.34063\n34.1389 -118.35341\n34.44361 -118.60953\n38.10409 -122.25664\n34.18667 -118.44897\n34.53611 -117.29116\n36.33023 -119.29206\n34.06862 -117.93895\n39.80276 -105.08748\n39.72943 -104.83192\n39.57916 -104.87692\n38.83388 -104.82136\n39.73915 -104.9847\n39.70471 -105.08137\n38.25445 -104.60914\n39.86804 -104.97192\n39.83665 -105.0372\n35.08449 -106.65114\n36.02525 -115.24194\n36.0397 -114.98194\n36.17497 -115.13722\n36.19886 -115.1175\n36.09719 -115.14666\n39.52963 -119.8138\n36.10803 -115.245\n36.21108 -115.07306\n35.222 -101.8313\n31.75872 -106.48693\n33.57786 -101.85517\n31.99735 -102.07791\n40.58526 -105.08442\n43.6135 -116.20345\n45.78329 -108.50069\n44.05207 -123.08675\n45.49818 -122.43148\n45.52345 -122.67621\n44.9429 -123.0351\n40.23384 -111.65853\n40.76078 -111.89105\n40.60967 -111.9391\n40.69161 -112.00105\n47.61038 -122.20068\n47.97898 -122.20208\n47.60621 -122.33207\n47.65966 -117.42908\n47.25288 -122.44429\n45.63873 -122.66149\n21.30694 -157.85833\n61.21806 -149.90028\n");
        var nc = new Dataset("NC Cities > 10k", "35.35014 -80.20006\n35.73265 -78.85029\n35.91458 -79.97198\n35.70791 -79.81364\n35.60095 -82.55402\n35.24292 -81.0373\n36.21679 -81.67455\n36.09569 -79.4378\n35.91014 -79.07529\n35.79154 -78.78112\n35.9132 -79.05584\n35.22709 -80.84313\n35.65071 -78.45639\n36.02153 -80.382\n35.40888 -80.58158\n35.4868 -80.86007\n35.50233 -80.83912\n35.99403 -78.89862\n36.48847 -79.7667\n36.2946 -76.25105\n35.05266 -78.87836\n35.58432 -78.80001\n35.71126 -78.61417\n35.26208 -81.1873\n35.38488 -77.99277\n36.06903 -79.40058\n36.07264 -79.79198\n35.61266 -77.36635\n35.32375 -80.6559\n34.87905 -76.90133\n36.32959 -78.39916\n35.31873 -82.46095\n35.73319 -81.3412\n35.95569 -80.00532\n35.65127 -78.83362\n34.97044 -78.94531\n35.41069 -80.84285\n35.07681 -80.66924\n34.75405 -77.43024\n35.48736 -80.62173\n36.11986 -80.07365\n35.24513 -81.34119\n35.26266 -77.58164\n35.78765 -78.48056\n34.77405 -79.46282\n34.25628 -78.04471\n35.91402 -81.53898\n36.09708 -80.41922\n35.82403 -80.25338\n35.47375 -81.25453\n34.61834 -79.01045\n34.17934 -77.84748\n35.11681 -80.72368\n36.09597 -79.26696\n35.17959 -80.64729\n34.98543 -80.54951\n35.58486 -80.81007\n35.74541 -81.68482\n35.82348 -78.82556\n36.4993 -80.60729\n35.29819 -81.01591\n34.29572 -77.84748\n35.10849 -77.04411\n35.66986 -81.22147\n35.19543 -79.46948\n34.716 -77.32024\n35.7721 -78.63861\n36.35486 -79.66447\n36.46154 -77.65415\n35.93821 -77.79053\n35.67097 -80.47423\n35.47988 -79.1803\n35.29235 -81.53565\n35.50849 -78.33945\n35.17405 -79.39225\n35.16794 -78.97281\n35.0907 -80.68618\n35.78264 -80.8873\n36.20875 -79.90476\n35.89682 -77.5358\n35.88264 -80.08199\n35.97987 -78.50972\n35.78682 -78.66389\n34.22573 -77.94471\n35.72127 -77.91554\n36.09986 -80.24422\n35.139 -79.00603\n");
        world.visible = false;
        us.visible = false;
        this.fit(nc);
        return {
            latitude: 39.50,
            longitude: -98.35,
            zoom: 4,
            datasets: [world, us, nc],
        };
    },
    add: function(dataset) {
        var datasets = this.state.datasets;
        datasets.push(dataset);
        this.setState({
            datasets: datasets,
        });
    },
    toggle: function(dataset) {
        dataset.visible = !dataset.visible;
        this.forceUpdate();
    },
    remove: function(dataset) {
        var datasets = this.state.datasets;
        datasets.splice(datasets.indexOf(dataset), 1);
        this.setState({
            datasets: datasets,
        });
    },
    fit: function(dataset) {
        theMap.fitBounds(dataset.bounds);
    },
    render: function() {
        return (
            <div>
                <div className="left-sidebar">
                    <DatasetList
                        datasets={this.state.datasets}
                        add={this.add}
                        toggle={this.toggle}
                        remove={this.remove}
                        fit={this.fit} />
                </div>
                <div className="map-components">
                    <Map
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        zoom={this.state.zoom}
                        datasets={this.state.datasets} />
                </div>
            </div>
        );
    }
});

var theApp;

$(function() {
    theApp = React.render(
        <App />,
        document.getElementById("app")
    );
});
