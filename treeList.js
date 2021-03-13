var treeList = (function treeList(){
	let onclick = function(evt){
		let target = evt.target.closest('.treeList-show-stem , .treeList-hide-stem , .treeList-toggle-stem , .treeList-show-parent-stem , .treeList-hide-parent-stem , .treeList-toggle-parent-stem');
		if(!target){
			return;
		}
		if(target.classList.contains('treeList-show-stem')){
			let node = target.closest('.treeList .treeList-branch , .treeListSimple li'); if(!node){ return; }
			treeList.show(node);
		}else if(target.classList.contains('treeList-hide-stem')){
			let node = target.closest('.treeList .treeList-branch , .treeListSimple li'); if(!node){ return; }
			treeList.hide(node);
		}else if(target.classList.contains('treeList-toggle-stem')){
			let node = target.closest('.treeList .treeList-branch , .treeListSimple li'); if(!node){ return; }
			treeList.toggle(node);
		}else if(target.classList.contains('treeList-show-parent-stem')){
			let node = target.closest('.treeList .treeList-branch , .treeListSimple li').parentNode; if(!node){ return; }
			node = node.closest('.treeList .treeList-branch , .treeListSimple li'); if(!node){ return; }
			treeList.show(node);
		}else if(target.classList.contains('treeList-hide-parent-stem')){
			let node = target.closest('.treeList .treeList-branch , .treeListSimple li').parentNode; if(!node){ return; }
			node = node.closest('.treeList .treeList-branch , .treeListSimple li'); if(!node){ return; }
			treeList.hide(node);
		}else if(target.classList.contains('treeList-toggle-parent-stem')){
			let node = target.closest('.treeList .treeList-branch , .treeListSimple li').parentNode; if(!node){ return; }
			node = node.closest('.treeList .treeList-branch , .treeListSimple li'); if(!node){ return; }
			treeList.toggle(node);
		}
	}
	let addedEvent = false;
	let treeList = {
		"debug":false,
		"init":function(){
			// this.addEvent();
		},
		"addEvent":function(){
			if(addedEvent){
				if(this.debug) console.log("treeList: already addedEvent");
				return false;;
			}
			document.addEventListener('click',onclick);
			addedEvent = true;
			if(this.debug) console.log("treeList: treeList.addEvent()");
			return true;
		},
		"removeEvent":function(){
			if(!addedEvent){
				if(this.debug) console.log("treeList: already !addedEvent");
				return false;;
			}
			document.removeEventListener('click',onclick);
			addedEvent = false;
			if(this.debug) console.log("treeList: treeList.removeEvent()");
			return true;
		},
		"toggle":function(node){
			node.classList.toggle('treeList-hidden-stem')
			if(this.debug) console.log("treeList: treeList.toggle(node)",node);
		},
		"hide":function(node){
			node.classList.add('treeList-hidden-stem')
			if(this.debug) console.log("treeList: treeList.hide(node)",node);
		},
		"show":function(node){
			node.classList.remove('treeList-hidden-stem')
			if(this.debug) console.log("treeList: treeList.show(node)",node);
		},
	}
	return treeList;
})()
