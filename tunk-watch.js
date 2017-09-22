;(function(){

    watchers = {},

    tunk.watch = function (watchPath, opts) {
		return function (target, property, descriptor) {
			_decorateWatcher(target[property], watchPath, opts);
		};
    }
    
tunk.createWatch = _decorateWatcher;


var hooks = {
		callWatcher: function (originWatcher, newValue, module, watcherOptions) {
			originWatcher.call(module, newValue);
		}
}


	watchers_;

    if (watchers[moduleName]) for (var x in changedFields) if (watchers_ = watchers[moduleName][changedFields[x]]) {
        statePath = [moduleName, changedFields[x]];
        newValue = values[statePath] || (values[statePath] = hooks.getValueFromStore(statePath, options));
        for (var ii = 0, ll = watchers_.length; ii < ll; ii++) {
            watchers_[ii](newValue, statePath, moduleName);
        }
    }
function _decorateWatcher(target, watchPath, opts) {
		if (typeof watchPath !== 'string' || (watchPath = watchPath.split('.')).length !== 2)
			throw '[TUNKJS]:the path you watch should be like moduleName.stateName';
		opts = Object.assign({ watchPath: watchPath }, opts);
		target.watcherOptions = opts;
		return target;
	}


	function _createWatcher(moduleName, watcherName, originWatcher) {

		var watchPath = originWatcher.watcherOptions.watchPath;

		if (moduleName === watchPath[0]) throw '[TUNKJS]:you cannot watch the state of current module';

		watchers[watchPath[0]] = watchers[watchPath[0]] || {};
		watchers[watchPath[0]][watchPath[1]] = watchers[watchPath[0]][watchPath[1]] || [];
		watchers[watchPath[0]][watchPath[1]].push(watcher);

		function watcher(newValue) {
			if (!modules[watchPath[0]])
				throw '[TUNKJS]:unknown module name ' + watchPath[0];
			var watcherOptions = watcher.watcherOptions = watcher.watcherOptions || Object.assign({ watcherName: watcherName, isWatcher: true, watchPath: watchPath }, modules[moduleName].moduleOptions, originWatcher.watcherOptions);
			var preOpts = modules[moduleName].dispatch.options;
			modules[moduleName].dispatch.options = watcherOptions;
			hooks.callWatcher(originWatcher, newValue, modules[moduleName], watcherOptions);
			modules[moduleName].dispatch.options = preOpts;
		}
		return _banCallingWatcher;
	}

	function _banCallingWatcher() { throw '[TUNKJS]:you can\'t call watcher directly'; }

if (context.options.isWatcher) throw '[TUNKJS]:A watcher could not update store directly';


    if (typeof module === 'object' && module.exports) {
        module.exports = isolate;
    }
    else if (typeof define === 'function' && define.amd) {
        define(function () {
            return isolate;
        });
    }

})();