const getTemplate = (data = [], placeholder, selectedId) => {
  let text = placeholder ?? 'default';
  let cls = '';
  let myData = data.map((item) => {
    if (item.id === selectedId) {
      text = item.value;
      cls = 'selected';
    }

    return `
        <li class="select__item ${cls}" data-type='item' data-id='${item.id}'>${item.value}</li>
    `;
  });

  return ` 
  <div class="select__backdrop" data-type='backdrop'> </div>
  <div class="select__input" data-type='input'>
      <span data-type='placeholder'>${text}</span>
      <i class="fa fa-angle-down" aria-hidden="true" data-type='arrow'></i>
    </div>
    <div class="select__dropdown animate__animated  animate__fadeIn ">
      <ul class="select__list">
        ${myData.join('')}
      </ul>
      
    </div>
    `;
};

export class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;
    this.#render();
    this.#setup();
  }
  #render() {
    const { data, placeholder } = this.options;
    this.$el.classList.add('select');
    this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);
  }
  #setup() {
    // to avoid the lose of the context use bund because context will be lost because of link function
    this.clickHandler = this.clickHandler.bind(this); // now clickHandler is always connected to the kontext this
    this.$el.addEventListener('click', this.clickHandler);
    this.$arrow = this.$el.querySelector('[data-type="arrow"]');
    this.$placeholder = this.$el.querySelector('[data-type="placeholder"]');
  }
  clickHandler(event) {
    const { type } = event.target.dataset;
    if (type === 'input') {
      this.toggle();
    } else if (type === 'item') {
      this.select(event.target.dataset.id);
    } else if (type === 'backdrop') {
      console.log('close');
      this.close();
    }
  }
  get current() {
    return this.options.data.find((elem) => elem.id === parseInt(this.selectedId));
  }
  get isOpen() {
    return this.$el.classList.contains('open');
  }
  select(id) {
    this.selectedId = id;

    this.$placeholder.textContent = this.current.value;
    this.$el.querySelectorAll('[data-type="item"]').forEach((elem) => elem.classList.remove('selected'));
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected');
    this.options.onSelect ? this.options.onSelect(this.current) : null;
    this.close();
  }
  toggle() {
    this.isOpen ? this.close() : this.open();
  }
  open() {
    this.$el.classList.add('open');
    this.$arrow.classList.add('fa-angle-up');
    this.$arrow.classList.remove('fa-angle-down');
  }
  close() {
    this.$el.classList.remove('open');
    this.$arrow.classList.add('fa-angle-down');
    this.$arrow.classList.remove('fa-angle-up');
  }
  destroy() {
    this.$el.removeEventListener('click', this.clickHandler);
  }
}
