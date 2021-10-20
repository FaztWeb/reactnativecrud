import React from 'react';
import {Text, NativeBaseProvider, Center, Box} from 'native-base';

function Layout({children}) {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="dark.50" p="5">
        {children}
        <Center>
          <Text color="light.50">Version 0.0.1</Text>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

export default Layout;
