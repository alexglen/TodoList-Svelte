export const filterAccordingToButton = (array, but) => {
    switch (but) {
      case "all":
        return array;
      case "active":
        return array.filter(item => !item.done);
      case "done":
        return array.filter(item => item.done);
      default:
        return array;
    }
  };
  
  export const filterAccordingToSearch = (array, text) => {
    if (!text.length) {
      return array;
    } else {
      return array.filter(item =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
    }
  };
  
  export const sortAccordingToFilters = (array, filter) => {
    switch (filter) {
      case 'oldToNew':
        return array.sort((a, b) => (a.data < b.data ? -1 : 1));
      case 'newToOld':
        return array.sort((a, b) => (a.data > b.data ? -1 : 1));
      case 'importantTasks':
        return array.sort((a, b) => (a.important > b.important ? -1 : 1));
      case 'aToZ':
        return array.sort((a, b) => (a.title < b.title ? -1 : 1));
      case 'zToA':
        return array.sort((a, b) => (a.title > b.title ? -1 : 1));
      default:
        return array.sort((a, b) => (a.data < b.data ? -1 : 1));
    }
  };  