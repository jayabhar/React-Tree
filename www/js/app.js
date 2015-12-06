
var _ = require('lodash');

var TreeNode = React.createClass({
  propTypes: {
        node: React.PropTypes.object.isRequired
    },

  getInitialState: function() {
      return {
        visible: true
      };
  },

  render: function() {
    
      var childNodes;
      var _this = this;
      if (this.props.node.childNodes != null) {
          childNodes = this.props.node.childNodes.map(function(node) {
              return <li>
                        <TreeNode node={node}
                        handleDrop = { _this.props.handleDrop }
                        handleDragStart = { _this.props.handleDragStart } />
                      </li>;
          });
      }

      var style = {};
      if (!this.state.visible) {
          style.display = 'none';

      }

      style.padding = '0 0 0 1.2em';
      var title = '';
      var optionIcon = '  ';
      if(!this.props.node.isRootNode){
          if(this.props.node.childNodes && this.props.node.childNodes.length > 0){
              optionIcon = <span onClick={ this.props.node.childNodes ? this.toggle : null }
                            className = {this.state.visible ? 'glyphicon glyphicon-chevron-down' : 'glyphicon glyphicon-chevron-right' }>
                            </span>;

          }

          title = <div className = { this.props.node.childNodes && this.props.node.childNodes.length > 0 ? 'tree-label-hover' : 'tree-label' }
                      onClick={ this.props.node.childNodes ? this.toggle : null }
                     >
                      {this.props.node.title}
                      </div>;

      }

      return (
        <div>
            <div className = 'tree-label-icon '>{ optionIcon }</div>
            { title }
          <ul style={style} className="list-unstyled">
            {childNodes}
          </ul>
        </div>
      );
  },
  toggle: function() {
      this.setState({visible: !this.state.visible});
  }
});


var App = React.createClass({
   
    getInitialState: function() {
        var nodes = dataService.getNodes();

        return {
            node: nodes,
        }
    },
    
    render: function(){
        return  <div> 
                <TreeNode node = {this.state.node} />
                </div>

    }
});

React.render(<App/>, document.body);