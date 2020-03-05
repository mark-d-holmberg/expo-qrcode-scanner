import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(`data is: ${data}`)
    Linking.openURL(`http://ff199c01.ngrok.io${data}`)
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}











// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [isActive, setIsActive] = useState(false);
//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);
//   const handleBarCodeScanned = ({ type, data }) => {
//     setIsActive(true);
//     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//   };
//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'flex-end',
//       }}>
//       {isActive && (
//         <BarCodeScanner
//           onBarCodeScanned={handleBarCodeScanned}
//           style={StyleSheet.absoluteFillObject}
//         />
//       )}
//       {!isActive && <Button title={'Start Scanning'} onPress={() => setIsActive(true)} />}
//     </View>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [isActive, setIsActive] = useState(false);
//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);
//   const handleBarCodeScanned = ({ type, data }) => {
//     setIsActive(true);
//     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//   };
//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'flex-end',
//       }}>
//       {isActive && (
//         <BarCodeScanner
//           onBarCodeScanned={handleBarCodeScanned}
//           style={StyleSheet.absoluteFillObject}
//         />
//       )}
//       <Button title={'Start Scanning'} onPress={() => setIsActive(true)} disabled={isActive} />}
//     </View>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { Text, View } from 'react-native';
// const MOCK_TIMEOUT_MS = 2000
// const MarkApi {
//   getItems(): {
//     const data = [
//       {id: 1},
//       {id: 2},
//       {id: 3},
//     ]
//     const ret = new Promise(resolve => {
//       setTimeout(() => {
//         resolve(data)
//       }, MOCK_TIMEOUT_MS)
//     })
//     return ret
//   }
// }
// export default function App() {
//   [items,setItems] = useState([])
//   [isLoading, setIsLoading] = useState(true)
//   useEffect(() => {
//     MarkApi.getItems()
//       .then(data => {
//         setIsloading(false)
//         setItems(data)
//       })
//       .catch(e => {
//         console.log('ruh roh', e)
//       })
//   },[])
//   if(isLoading) return <Text>Loading...</Text>
//   if(!items.length) return <Text>No items</Text>
//   return (
//     <View>
//       {items.map(item => <Text>Item: {item.id}</Text>)}
//     </View>
//   )
// }

// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button, Linking } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [isActive, setIsActive] = useState(false);
//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);
//   const handleBarCodeScanned = ({ type, data }) => {
//     setIsActive(true);
//     Linking.openUrl(data)
//   };
//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'flex-end',
//       }}>
//       {isActive && (
//         <BarCodeScanner
//           onBarCodeScanned={handleBarCodeScanned}
//           style={StyleSheet.absoluteFillObject}
//         />
//       )}
//       <Button title={'Start Scanning'} onPress={() => setIsActive(true)} disabled={isActive} />}
//     </View>
//   );
// }
