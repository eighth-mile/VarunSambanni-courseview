import AsyncStorage from '@react-native-async-storage/async-storage';

export async function get(key) {
    const result = await AsyncStorage.getItem(key) ;
    return !result ? null : JSON.parse(result) ;  
}

export async function set(key, value) {
    await AsyncStorage.setItem(key, JSON.stringify(value)) ; 
}

export async function remove(key) {
    await AsyncStorage.removeItem(key) ; 
}

export async function setOfflinePrograms(programs)
{
    await set('offline-programs', programs) ; 
}

export async function getOfflinePrograms()
{
    const offlinePrograms = await get('offline-programs')
    if (offlinePrograms === null)
        return {} ; 
    return offlinePrograms; 
}

export async function isProgramDownloaded(title) {
    const offlinePrograms = await getOfflinePrograms() ; 
    const isPresent = title in offlinePrograms ;
    console.log('isPresent ', title, ' ', isPresent) ;  
    return isPresent ; 
}