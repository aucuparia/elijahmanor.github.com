(function(modules) {
  modules.init = function() {
    console.log('init modules');

    this.removeModules();

    this.dialog = this.buildDialog();
    this.dialog.querySelector('#update').addEventListener('click', this.update.bind(this));
    this.dialog.querySelector('#cancel').addEventListener('click', this.cancel.bind(this));

    Reveal.configure({
      keyboard: { 77: this.keypress.bind(this) }
    });
  };

  modules.removeModules = function() {
    var modules = window.localStorage.modules;

    modules = modules ? JSON.parse(modules) : this.getModules();
    for (var key in modules) {
      if (!modules[key]) {
        var element = document.querySelector('#' + key);
        element.parentNode.removeChild(element);
      }
    }
  };

  modules.getModules = function() {
    var sections = document.querySelectorAll('.slides > section');
    var modules = {};

    [].forEach.call(sections, function(module) {
      modules[module.id] = true;
    });

    return modules;
  };

  modules.update = function() {
    var modules = JSON.parse(window.localStorage.modules);
    var enabledModule = false;

    [].forEach.call(this.dialog.querySelectorAll('#dialog input'), function(input) {
      if (!input.checked) {
        var element = document.querySelector('#' + input.name);
        if (element) {
          element.parentNode.removeChild(element);
        }
        modules[input.name] = false;
      } else {
        if (!modules[input.name]) {
          enabledModule = true;
        }
        modules[input.name] = true;
      }
    });
    window.localStorage.modules = JSON.stringify(modules);

    if (enabledModule) {
      setTimeout(function() {
        document.location.reload();
      }, 1000);
    }

    this.dialog.close();
  };

  modules.cancel = function() {
    this.dialog.close();
  };

  modules.buildDialog = function() {
    var dialog = document.createElement('dialog');
    var template = '<h2>Modules</h2><ul class="modules"></ul><div><button id="update">Update</button><button id="cancel">Cancel</button></div>';

    dialog.id = 'dialog';
    dialog.innerHTML = template;

    document.body.appendChild(dialog);

    return dialog;
  };

  modules.keypress = function() {
    var items = [];
    var modules = window.localStorage.modules;

    modules = modules ? JSON.parse(modules) : this.getModules();
    for (var key in modules) {
      var module = modules[key];
      items.push('<li><input name="' + key + '" type="checkbox" ' + (module ? 'checked="checked" ' : '') + '" /> ' + key + '</li>');
    }
    window.localStorage.modules = JSON.stringify(modules);

    this.dialog.querySelector('.modules').innerHTML = items.join('');
    this.dialog.showModal();
  };
}(window.modules = window.modules || {}));