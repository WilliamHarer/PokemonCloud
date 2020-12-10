class CreatorView {
  async _onFormSubmit(event) {
    event.preventDefault();

    this._saveValuesFromInput();

    const params = {
      style: this.style,
      message: this.message
    }
    const fetchOptions = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    };
    const result = await fetch('/save', fetchOptions);
    const json = await result.json();

    this.creatorView.classList.add('hidden');
    this.cardLink.href = '/id/' + json.cardId;
    this.statusView.classList.remove('hidden');
  }
}